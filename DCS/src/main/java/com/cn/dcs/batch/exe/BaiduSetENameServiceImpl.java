package com.cn.dcs.batch.exe;

import java.util.ArrayList;
import java.util.List;

import org.jsoup.nodes.Element;

import cn.edu.hfut.dmic.baidu.BaiduExcute;

import com.cn.dcs.batch.model.CountryDetail;
import com.cn.dcs.batch.service.RegionService;
import com.cn.dcs.domain.RegionData;

public class BaiduSetENameServiceImpl implements BaiduExcute{
	
private RegionData region;
	
	private String patten;
	
	private RegionService regionService;
	
	private List<String> pattenList = new ArrayList<String>();
	
	public BaiduSetENameServiceImpl(RegionData region,String patten,RegionService regionService) {
		this.region = region;
		this.patten = patten;
		this.regionService = regionService;
	}

	@Override
	public void excute(Element text) throws Exception {
		region.setEName(text.text());
		regionService.updateRegionEname(region);
	}
	
	
	@Override
	public void excute(List<Element> textList)throws Exception{
		
	}

	@Override
	public List<String> getPatten() {
		return pattenList;
	}
	
}
