package com.cn.dcs.domain;

import java.util.ArrayList;
import java.util.List;

public class Node {
	private String code;
	private String name;
	private List<Node> childRen = new ArrayList<Node>();
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Node> getChildRen() {
		return childRen;
	}
	public void setChildRen(List<Node> childRen) {
		this.childRen = childRen;
	}
	
	
	
}
