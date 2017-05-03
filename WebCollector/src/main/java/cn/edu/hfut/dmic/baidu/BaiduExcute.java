package cn.edu.hfut.dmic.baidu;

import java.util.List;

import org.jsoup.nodes.Element;

public interface BaiduExcute {
	
	public void excute(Element text)throws Exception;
	
	public void excute(List<Element> textList)throws Exception;
	
	/**
	 * 得到匹配
	 * @return
	 */
	public List<String> getPatten();
}
