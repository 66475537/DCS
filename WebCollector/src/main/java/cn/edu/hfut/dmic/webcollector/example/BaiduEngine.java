package cn.edu.hfut.dmic.webcollector.example;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import cn.edu.hfut.dmic.webcollector.model.CrawlDatum;
import cn.edu.hfut.dmic.webcollector.model.CrawlDatums;
import cn.edu.hfut.dmic.webcollector.model.Page;
import cn.edu.hfut.dmic.webcollector.plugin.ram.RamCrawler;

public class BaiduEngine extends RamCrawler {

	public BaiduEngine(String keyword, int maxPageNum) {
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
		BaiduEngine crawler = new BaiduEngine("网络爬虫", 3);
		//设置重试次数
//		crawler.setRetry(3);
		//设置访问间隔
//		crawler.setVisitInterval(500);
		//设置重试间隔
//		crawler.setRetryInterval(1000);
		//设置爬取深度
		crawler.start(2);
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

			String line = String.format(
					"第%s页第%s个结果:%s(%s字节)\tdepth=%s\trefer=%s", pageNum,
					rank + 1, page.getDoc().title(), page.getContent().length,
					depth, refer);
			System.out.println(line);
		}
	}
}