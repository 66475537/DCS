package cn.edu.hfut.dmic.baidu;

import java.util.ArrayList;
import java.util.List;

public class Level {
	private String name;
	private String href;
	
	private List<Level> childs = new ArrayList<Level>();
	public Level(String name, String href) {
		this.name = name;
		this.href = href;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHref() {
		return href;
	}
	public void setHref(String href) {
		this.href = href;
	}
	public List<Level> getChilds() {
		return childs;
	}
	public void setChilds(List<Level> childs) {
		this.childs = childs;
	}
	
}
