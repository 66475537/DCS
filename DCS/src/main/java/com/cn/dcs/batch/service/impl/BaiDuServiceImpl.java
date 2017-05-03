package com.cn.dcs.batch.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.nodes.Element;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.edu.hfut.dmic.baidu.MyBaiduEngine;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.cn.dcs.batch.exe.BaiduExcuteServiceImpl;
import com.cn.dcs.batch.exe.BaiduSetENameServiceImpl;
import com.cn.dcs.batch.exe.SeabayNOJson;
import com.cn.dcs.batch.exe.SeabayNameJson;
import com.cn.dcs.batch.exe.SeabayRef;
import com.cn.dcs.batch.model.CountryDetail;
import com.cn.dcs.batch.model.CountryDetailItem;
import com.cn.dcs.batch.service.BaiDuService;
import com.cn.dcs.batch.service.RegionService;
import com.cn.dcs.domain.RegionData;
import com.cn.dcs.util.DateUtil;
import com.cn.dcs.util.HttpClientUtil;

@Service("baiDuService")
public class BaiDuServiceImpl implements BaiDuService{
	
	
	@Autowired
	private RegionService regionService;
	
	
	public void updateRegionEName(){
		RegionData rd = new RegionData();
		rd.setLevel(0);
		try {
			List<RegionData> regionList = regionService.findRegionByWhere(rd);
			for (int i = 0; i < regionList.size(); i++) {
				RegionData rds = regionList.get(i);
				BaiduSetENameServiceImpl besi = new BaiduSetENameServiceImpl(rds, "dt:matchesOwn(英文名称) ~ dd", regionService);
				MyBaiduEngine mbe = new MyBaiduEngine(rds.getCName(), 1, besi);
				
				//设置爬取深度
				mbe.start(4);
				Thread.sleep(15000);
			}
			
			System.out.println(regionList.size());
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	
	/**
	 * 抓取国家内容
	 */
	public void grabCountry(CountryDetailItem cdi){
		RegionData rd = new RegionData();
		rd.setRegionId(cdi.getRegionId());
		rd.setLevel(0);
		try {
			List<RegionData> regionList = regionService.findRegionByWhere(rd);
			for (int i = 0; i < regionList.size(); i++) {
				RegionData rds = regionList.get(i);
				
				//查询国家所有需要检索的内容
				List<CountryDetail> countryDetailList = regionService.findCountryDetail();//查国家需要抓取的数据
					BaiduExcuteServiceImpl besi = new BaiduExcuteServiceImpl(rds,countryDetailList,regionService);
				MyBaiduEngine mbe = new MyBaiduEngine(rds.getCName(), 1, besi);
				//设置爬取深度
				mbe.start(4);
				Thread.sleep(1000);
			}
			
			System.out.println(regionList.size());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	
	



	/**
	 * 查询飞机场
	 */
	@Override
	public void setSeabay() {
		RegionData rd = new RegionData();
		List<RegionData> regionList = new ArrayList<RegionData>();
		try {
			regionList = regionService.findRegionByWhere(rd);
			for (int n = 0; n < regionList.size(); n++) {
				try{
					String url = "http://www.seabay.cn/tt/function/IATA/uploadAirportCN.aspx?searchname="+regionList.get(n).getCName()+"&Page=1&PageSize=10";
					System.out.println(url+"-----start n:"+n);
					String postStr = HttpClientUtil.doGet(url);
					if("{\"Result\":[{\"Num\":0}]}".equals(postStr)){
						this.regionService.updateRegionSuccess(regionList.get(n).getRegionId());
						continue;
					}
	//				postStr = java.net.URLDecoder.decode(postStr, "utf-8"); 
					if("{".equals(postStr.substring(0, 1))){
						
						JSONObject jo=JSON.parseObject(postStr);
						List<SeabayNOJson> snjlist = JSONArray.parseArray(jo.get("Result").toString(),SeabayNOJson.class);
						if(snjlist.size()>0){
							
							if(regionService.selectSeabayNOJson(snjlist.get(0))==null||regionService.selectSeabayNOJson(snjlist.get(0)).size()<1)
							this.regionService.insertSeabayNOJson(snjlist.get(0));
							System.out.println("n:"+n+"----106:"+snjlist.get(0));
						}
					}else{
						List<SeabayNameJson> list = JSONArray.parseArray(postStr,SeabayNameJson.class);
						for (int i = 0; i < list.size(); i++) {
							SeabayRef s=new SeabayRef(regionList.get(i).getRegionId(),list.get(i).getAirportID(),DateUtil.getNowTime());
							if(regionService.selectSeabayRef(s)==null||regionService.selectSeabayRef(s).size()<1)
								this.regionService.insertSeabayRef(s);
							
							Thread.sleep(100);
							if(regionService.selectSeabayNameJson(list.get(i))==null||regionService.selectSeabayNameJson(list.get(i)).size()<1)
								this.regionService.insertSeabayNameJson(list.get(i));
							postStr = HttpClientUtil.doGet("http://www.seabay.cn/tt/function/IATA/uploadAirportCN.aspx?searchname="+list.get(i).getAirportID()+"&Page=1&PageSize=10");
	//						postStr = java.net.URLDecoder.decode(postStr,   "utf-8");   
							
							JSONObject jo=JSON.parseObject(postStr);
							if(jo==null){
								System.out.println("JSONObject is null,AirportID="+list.get(i).getAirportID());
								continue;
							}
							List<SeabayNOJson> snjlist = JSONArray.parseArray(jo.get("Result").toString(),SeabayNOJson.class);
							if(snjlist.size()>0){
								for (int j = 0; j < snjlist.size(); j++) {
									if(regionService.selectSeabayNOJson(snjlist.get(j))==null||regionService.selectSeabayNOJson(snjlist.get(j)).size()<1)
										this.regionService.insertSeabayNOJson(snjlist.get(j));
								}
								//System.out.println(snjlist.get(0));
							}
							
						}
					}
					
					this.regionService.updateRegionSuccess(regionList.get(n).getRegionId());
					Thread.sleep(100);
				}catch(Exception e){
					e.printStackTrace();
				}
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}



	@Override
	public void setNUMSeabay() {
		for (int i = 65529; i < 100000; i++) {
			try{
			String postStr = HttpClientUtil.doGet("http://www.seabay.cn/tt/function/IATA/uploadAirportCN.aspx?searchname="+i+"&Page=1&PageSize=10");
			//						postStr = java.net.URLDecoder.decode(postStr,   "utf-8");   
			if("{\"Result\":[{\"Num\":0}]}".equals(postStr)){
				System.out.println("continue:"+i);
				continue;
			}
									JSONObject jo=JSON.parseObject(postStr);
									if(jo==null){
										System.out.println("JSONObject is null,AirportID="+i);
										continue;
									}
									List<SeabayNOJson> snjlist = JSONArray.parseArray(jo.get("Result").toString(),SeabayNOJson.class);
									if(snjlist.size()>0){
										for (int j = 0; j < snjlist.size(); j++) {
											if(regionService.selectSeabayNOJson(snjlist.get(j))==null||regionService.selectSeabayNOJson(snjlist.get(j)).size()<1)
												this.regionService.insertSeabayNOJson(snjlist.get(j));
										}
										//System.out.println(snjlist.get(0));
									}
			}catch(Exception e){
				e.printStackTrace();
			}
		}
		
	}
	
}
