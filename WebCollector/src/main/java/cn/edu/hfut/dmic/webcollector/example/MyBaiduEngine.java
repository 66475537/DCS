package cn.edu.hfut.dmic.webcollector.example;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import cn.edu.hfut.dmic.baidu.Level;
import cn.edu.hfut.dmic.contentextractor.ContentExtractor;
import cn.edu.hfut.dmic.contentextractor.News;
import cn.edu.hfut.dmic.webcollector.crawldb.DBManager;
import cn.edu.hfut.dmic.webcollector.crawler.Crawler;
import cn.edu.hfut.dmic.webcollector.fetcher.Executor;
import cn.edu.hfut.dmic.webcollector.model.CrawlDatum;
import cn.edu.hfut.dmic.webcollector.model.CrawlDatums;
import cn.edu.hfut.dmic.webcollector.model.Page;
import cn.edu.hfut.dmic.webcollector.plugin.berkeley.BerkeleyDBManager;
import cn.edu.hfut.dmic.webcollector.plugin.ram.RamCrawler;
import cn.edu.hfut.dmic.webcollector.util.CharsetDetector;

public class MyBaiduEngine extends RamCrawler {

	public MyBaiduEngine(String keyword, int maxPageNum) {
		for (int pageNum = 0; pageNum < maxPageNum; pageNum++) {
			String url = createBaiduUrl(keyword, pageNum);
			CrawlDatum datum = new CrawlDatum(url)
					.putMetaData("keyword", keyword)
					.putMetaData("pageNum", pageNum + "")
					.putMetaData("pageType", "searchEngine")
					.putMetaData("depth", "1");
			addSeed(datum);
		}
	}
	
	@Override
    protected void afterParse(Page page, CrawlDatums next) {
  //当前页面的depth为x，则从当前页面解析的后续任务的depth为x+1
        int depth;
        //如果在添加种子时忘记添加depth信息，可以通过这种方式保证程序不出错
        if(page.meta("depth")==null){
            depth=1;
        }else{
            depth=Integer.valueOf(page.meta("depth"));
        }
        depth++;
        for(CrawlDatum datum:next){
            datum.meta("depth", depth+"");
        }
    }

	private String createBaiduUrl(String keyword, int pageNum) {
		int first = pageNum * 10;
		try {
			keyword = URLEncoder.encode(keyword, "utf-8");
		} catch (UnsupportedEncodingException e) {

			e.printStackTrace();
		}
		return String.format("http://www.baidu.com/s?wd=%s&pn=%d", keyword,first);
	}

	public static void main(String[] args) throws Exception {
        //爬取搜索关键字“网络爬虫”结果的前3页
		//中国
		MyBaiduEngine crawler = new MyBaiduEngine("北京", 1);
		//设置爬取深度
		crawler.start(4);
	}

	@Override
	public void visit(Page page, CrawlDatums next) {
		String keyword = page.getMetaData("keyword");
		String pageType = page.getMetaData("pageType");
		int depth = Integer.valueOf(page.getMetaData("depth"));
		if (pageType.equals("searchEngine")) {
			int pageNum = Integer.valueOf(page.getMetaData("pageNum"));
			System.out.println("成功抓取关键词" + keyword + "的第" + pageNum + "页搜索结果");
			Elements results = page.select("h3.t>a");
			for (int rank = 0; rank < results.size(); rank++) {
				Element result = results.get(rank);
				CrawlDatum datum = new CrawlDatum(result.attr("abs:href"))
						.putMetaData("keyword", keyword)
						.putMetaData("pageNum", pageNum + "")
						.putMetaData("rank", rank + "")
						.putMetaData("pageType", "outlink")
						.putMetaData("depth", (depth + 1) + "")
						.putMetaData("refer", page.getUrl());
				next.add(datum);
			}

		} else if (pageType.equals("outlink")) {
			int pageNum = Integer.valueOf(page.getMetaData("pageNum"));
			int rank = Integer.valueOf(page.getMetaData("rank"));
			String refer = page.getMetaData("refer");

//			String line = String.format(
//					"第%s页第%s个结果:%s(%s字节)\tdepth=%s\trefer=%s", pageNum,
//					rank + 1, page.getDoc().title(), page.getContent().length,
//					depth, refer);
//			System.out.println(line);
			if(page.getDoc().title().contains("_百度百科")){
				System.out.println(page.meta("depth")+":"+page.getUrl());
				try {
					printMy(page.getUrl());
//					News news = ContentExtractor.getNewsByHtml("", page.getUrl());
//					System.out.println(news.getContent());
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			
			
		}
	}
	
	
	
	public void printMy(String url) throws Exception{
		/*定制Executor*/
    Executor executor=new Executor() {

        /*execute应该包含对一个页面从http请求到抽取的过程
          如果在execute中发生异常并抛出，例如http请求超时，
          爬虫会在后面的任务中继续爬取execute失败的任务。
          如果一个任务重试次数太多，超过Config.MAX_EXECUTE_COUNT，
          爬虫会忽略这个任务。Config.MAX_EXECUTE_COUNT的值可以被修改*/
        public void execute(CrawlDatum datum, CrawlDatums next) throws Exception {
            CloseableHttpClient client= HttpClients.createDefault();
            String url=datum.getUrl();
            try{
                HttpGet get=new HttpGet(url);
                HttpResponse response=client.execute(get);
                HttpEntity entity=response.getEntity();
                /*利用HttpClient获取网页的字节数组，
                  通过CharsetDetector判断网页的编码 */
                byte[] content= EntityUtils.toByteArray(entity);
                String charset= CharsetDetector.guessEncoding(content);
                String html=new String(content,charset);
                /*利用Jsoup解析网页，并执行抽取等操作*/
                Document doc= Jsoup.parse(html,url);
                System.out.println(doc.title());
                
                List<Level> mapList = new ArrayList<Level>();
                List<Level> allLevelList = new ArrayList<Level>();
                Elements types=doc.select("div[class='catalog-list column-4']").select("li");
                for (int i = 0; i < types.size(); i++) {
                	if("level1".equals(types.get(i).attr("class"))){
                		Elements a = types.get(i).select("a");
//                		System.out.println(a.text());
                		Level l = new Level(a.text(),a.get(0).attr("href").replace("#", ""));
                		i++;
                		mapList.add(l);
                		allLevelList.add(l);
                		while(i < types.size()&&"level2".equals(types.get(i).attr("class"))){
                			a = types.get(i).select("a");
                			Level cl = new Level(a.text(),a.get(0).attr("href").replace("#", ""));
                			l.getChilds().add(cl);
                			allLevelList.add(cl);
//                			System.out.println(a.text()+"|"+a.get(0).attr("href"));
                			i++;
                		}
                		i--;
                	}
				}
                List<Element> contentDivs = doc.select("div");
                for (int i = 0,j = 0; i < allLevelList.size(); i++) {
                	StringBuilder sbString = new StringBuilder();
                	
                	for (; j < contentDivs.size(); j++) {
                		Element contentDiv = contentDivs.get(j);
                		String myhref = contentDiv.select("a").attr("data-edit-dl");
//                		System.out.println("allLevelList.get(i).getHref()"+allLevelList.get(i).getHref()+"|myhref:"+myhref
//                				+"|"+allLevelList.get(i).getHref().equals(myhref));
                		
                		if("album-list".equals(contentDiv.className()))
                			break;
                		if(sbString.length()==0
                				&&"para-title".equals(contentDiv.attr("label-module"))
//                						&&allLevelList.get(i).getHref().equals(myhref)
                						&&contentDiv.text().contains(allLevelList.get(i).getName())
                						){
                			sbString.append("title:").append(contentDiv.text()+"\n");
                			
//                			Element nextEle = contentDiv.nextElementSibling();
//                			int idx=0;
//                			while(idx++<5000&&!"para-title".equals(nextEle.attr("label-module"))){
//                				sbString.append(nextEle.html());
//                				nextEle = nextEle.nextElementSibling();
//                			}
                		}
                		
                		else if("para-title".equals(contentDiv.attr("label-module"))){
                			j--;
                			break;
                		}else if(sbString.length()>0){
                			sbString.append(contentDiv.text());
                		}
					}
                	System.out.println(sbString);
                	
				}
                
//                Elements links=doc.select("a[href]");
//                for(int i=0;i<links.size();i++){
//                    Element link=links.get(i);
//                    /*抽取超链接的绝对路径*/
//                    String href=link.attr("abs:href");
//                    /*将新链接加入后续任务，这里只加入以http://news.hfut.edu.cn/开头的链接
//                      用户不用考虑去重的问题，爬虫内核会自动去重*/
//                    if(href.startsWith("http://news.hfut.edu.cn/")){
//                        next.add(href);
//                    }
//                }
            }finally {
                client.close();
            }
        }
    };

    /*基于伯克利DB的DBManager*/
    DBManager dbManager=new BerkeleyDBManager("crawl");

    /*构建一个Crawler*/
    Crawler crawler=new Crawler(dbManager,executor);
    /*线程数*/
    crawler.setThreads(20);

    crawler.addSeed(url);

    //设置爬虫是否以断点模式爬取
    //如果设置为true，爬虫会在启动时继续以前的任务爬取
    //默认为false，如果为false，每次启动爬虫都会重新爬取
    //crawler.setResumable(true);

    //爬取3层，层与网站拓扑无关，它是遍历树中的层
    crawler.start(3);


	}
}