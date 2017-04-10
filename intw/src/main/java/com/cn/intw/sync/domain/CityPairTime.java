package com.cn.intw.sync.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.alibaba.fastjson.JSON;
import com.cn.intw.util.HttpClientUtil;

/**
 * CITYPAIRTIME
 * 城市时间[航段时间库]
 * @author chenlin
 * http://www.pre-flight.cn/WebHome/GetCityPairTime
 *{
 *"TERMINALTIMELIBRARYID":80,
 *"TERMINALONE":"ZUCK",//航站
 *"TERMINALTWO":"ZSCN",//航站
 *"SUMMER_8OUT":"0130",//夏-8(去)
 *"SUMMER_8IN":"0150",//夏-8(回)
 *"WINTER_8OUT":"0130",冬-8(去)
 *"WINTER_8IN":"0200",//冬-8(回)	
 *"SUMMER_7OUT":"0145",//夏-7(去)
 *"SUMMER_7IN":"0155",//夏-7(回)
 *"WINTER_7OUT":"0140",//冬-7(去)
 *"WINTER_7IN":"0200",//冬-7(回)
 *"SUMMER_6OUT":"",//夏-6(去)
 *"SUMMER_6IN":"",
 *"WINTER_6OUT":"",
 *"WINTER_6IN":"",
 *"SUMMER_5OUT":"",
 *"SUMMER_5IN":"",
 *"WINTER_5OUT":"",
 *"WINTER_5IN":"",
 *"SUMMER_4OUT":"",
 *"SUMMER_4IN":"",
 *"WINTER_4OUT":"",
 *"WINTER_4IN":""}
 */
public class CityPairTime {
	private String terminaltimelibraryID;
	private String terminalONE;
	private String terminalTWO;
	private String summer_8OUT;
	private String summer_8IN;
	private String winter_8OUT;
	private String winter_8IN;
	private String summer_7OUT;
	private String summer_7IN;
	private String winter_7OUT;
	private String winter_7IN;
	private String summer_6OUT;
	private String summer_6IN;
	private String winter_6OUT;
	private String winter_6IN;
	private String summer_5IN;
	private String winter_5OUT;
	private String winter_5IN;
	private String summer_4OUT;
	private String summer_4IN;
	private String winter_4OUT;
	private String winter_4IN;
	
	private String summer_5OUT;
	
	
public static List<CityPairTime> getAllAircraftInfo(){
		
		List<CityPairTime> protList = new ArrayList<CityPairTime>();
		
		int i = 0;
		List<CityPairTime> protList1 = new ArrayList<CityPairTime>();
		
		while(i==0||protList1.size()>0){
			i++;
			/**
			 *  *  page: 1, //当前页
			rows: 20, //每页显示多少
			pageSize: 0, //总条数
			AllPage: 0 //总共多少页	
			10803,11105,11448,11857,12058
			 */
			String str = HttpClientUtil.httpPost(UrlConnection.getCityPairTime, "page="+i+"&rows=500&pageSize=0&AllPage=0", false);
			protList1 = JSON.parseArray(str, CityPairTime.class);
			protList.addAll(protList1);
		}
//		System.out.println(protList.size());
		return protList;
	}


public static void main(String[] args) {
	HashMap<String, String> map = new HashMap<String, String>();
	List<CityPairTime> aplist = getAllAircraftInfo();
	for (int i = 0; i < aplist.size(); i++) {
		map.put(aplist.get(i).getTerminalONE(), aplist.get(i).getTerminalTWO());
	}
	
	System.out.println(map.size());
}


	public String getTerminaltimelibraryID() {
		return terminaltimelibraryID;
	}
	public void setTerminaltimelibraryID(String terminaltimelibraryID) {
		this.terminaltimelibraryID = terminaltimelibraryID;
	}
	public String getTerminalONE() {
		return terminalONE;
	}
	public void setTerminalONE(String terminalONE) {
		this.terminalONE = terminalONE;
	}
	public String getTerminalTWO() {
		return terminalTWO;
	}
	public void setTerminalTWO(String terminalTWO) {
		this.terminalTWO = terminalTWO;
	}
	public String getSummer_8OUT() {
		return summer_8OUT;
	}
	public void setSummer_8OUT(String summer_8out) {
		summer_8OUT = summer_8out;
	}
	public String getSummer_8IN() {
		return summer_8IN;
	}
	public void setSummer_8IN(String summer_8in) {
		summer_8IN = summer_8in;
	}
	public String getWinter_8OUT() {
		return winter_8OUT;
	}
	public void setWinter_8OUT(String winter_8out) {
		winter_8OUT = winter_8out;
	}
	public String getWinter_8IN() {
		return winter_8IN;
	}
	public void setWinter_8IN(String winter_8in) {
		winter_8IN = winter_8in;
	}
	public String getSummer_7OUT() {
		return summer_7OUT;
	}
	public void setSummer_7OUT(String summer_7out) {
		summer_7OUT = summer_7out;
	}
	public String getSummer_7IN() {
		return summer_7IN;
	}
	public void setSummer_7IN(String summer_7in) {
		summer_7IN = summer_7in;
	}
	public String getWinter_7OUT() {
		return winter_7OUT;
	}
	public void setWinter_7OUT(String winter_7out) {
		winter_7OUT = winter_7out;
	}
	public String getWinter_7IN() {
		return winter_7IN;
	}
	public void setWinter_7IN(String winter_7in) {
		winter_7IN = winter_7in;
	}
	public String getSummer_6OUT() {
		return summer_6OUT;
	}
	public void setSummer_6OUT(String summer_6out) {
		summer_6OUT = summer_6out;
	}
	public String getSummer_6IN() {
		return summer_6IN;
	}
	public void setSummer_6IN(String summer_6in) {
		summer_6IN = summer_6in;
	}
	public String getWinter_6OUT() {
		return winter_6OUT;
	}
	public void setWinter_6OUT(String winter_6out) {
		winter_6OUT = winter_6out;
	}
	public String getWinter_6IN() {
		return winter_6IN;
	}
	public void setWinter_6IN(String winter_6in) {
		winter_6IN = winter_6in;
	}
	public String getSummer_5IN() {
		return summer_5IN;
	}
	public void setSummer_5IN(String summer_5in) {
		summer_5IN = summer_5in;
	}
	public String getWinter_5OUT() {
		return winter_5OUT;
	}
	public void setWinter_5OUT(String winter_5out) {
		winter_5OUT = winter_5out;
	}
	public String getWinter_5IN() {
		return winter_5IN;
	}
	public void setWinter_5IN(String winter_5in) {
		winter_5IN = winter_5in;
	}
	public String getSummer_4OUT() {
		return summer_4OUT;
	}
	public void setSummer_4OUT(String summer_4out) {
		summer_4OUT = summer_4out;
	}
	public String getSummer_4IN() {
		return summer_4IN;
	}
	public void setSummer_4IN(String summer_4in) {
		summer_4IN = summer_4in;
	}
	public String getWinter_4OUT() {
		return winter_4OUT;
	}
	public void setWinter_4OUT(String winter_4out) {
		winter_4OUT = winter_4out;
	}
	public String getWinter_4IN() {
		return winter_4IN;
	}
	public void setWinter_4IN(String winter_4in) {
		winter_4IN = winter_4in;
	}


	public String getSummer_5OUT() {
		return summer_5OUT;
	}


	public void setSummer_5OUT(String summer_5out) {
		summer_5OUT = summer_5out;
	}
	
	
}
