package com.cn.dcs.batch.exe;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.jsoup.nodes.Element;

import com.cn.dcs.batch.model.CountryDetail;
import com.cn.dcs.batch.model.CountryDetailItem;
import com.cn.dcs.batch.service.RegionService;
import com.cn.dcs.domain.RegionData;
import com.cn.dcs.util.DateUtil;
import com.cn.dcs.util.DownloadImage;
import com.cn.dcs.util.UUIDTool;

import cn.edu.hfut.dmic.baidu.BaiduExcute;

public class BaiduExcuteServiceImpl implements BaiduExcute {
	
	private RegionData region;
	
	private String patten;
	
	private List<String> pattenList = new ArrayList<String>();
	
	private CountryDetail cd;
	
	private List<CountryDetail> cds;
	
	private RegionService regionService;
	
	
	
	public BaiduExcuteServiceImpl(RegionData region,String patten,RegionService regionService) {
		this.region = region;
		this.patten = patten;
		this.regionService = regionService;
	}
	
	public BaiduExcuteServiceImpl(RegionData region,CountryDetail cd,RegionService regionService) {
		this.cd = cd;
		this.region = region;
		this.patten = cd.getExpression();
		this.regionService = regionService;
	}
	
	public BaiduExcuteServiceImpl(RegionData region,List<CountryDetail> cds,RegionService regionService) {
		this.cds = cds;
		this.region = region;
		for (int i = 0; i < cds.size(); i++) {
			pattenList.add(cds.get(i).getExpression());
		}
		this.regionService = regionService;
	}

	
	@Override
	@Transactional
	public void excute(Element text) throws Exception {
//		region.setEName(text);
//		regionService.updateRegionEname(region);
		CountryDetailItem item = new CountryDetailItem();
		item.setCdid(cd.getCdid());
		item.setItemId(UUIDTool.getUUID());
		item.setRegionId(this.region.getRegionId());
		item.setCreateTime(DateUtil.getNowTime());
		
		if("IMG".equals(cd.getType())){
			item.setIsImg(1);
			String src = text.attr("src");
			String localStr =  DownloadImage.download(src);
			item.setDetail(localStr);
		}else{
			item.setIsImg(2);
			item.setDetail(text.text());
		}
		
		regionService.saveCountryDetailItem(item);
		
	}
	
	
	@Override
	public void excute(List<Element> textList)throws Exception{
		
		try{
			for (int i = 0; i < textList.size(); i++) {
				Element text = textList.get(i);
				if(text==null)continue;
				
				CountryDetailItem item = new CountryDetailItem();
				item.setCdid(cds.get(i).getCdid());
				item.setItemId(UUIDTool.getUUID());
				item.setRegionId(this.region.getRegionId());
				item.setCreateTime(DateUtil.getNowTime());
				
				if("IMG".equals(cds.get(i).getType())){
					item.setIsImg(1);
					String src = text.attr("src");
					String localStr =  DownloadImage.download(src);
					item.setDetail(localStr);
				}else{
					item.setIsImg(2);
					item.setDetail(text.text());
				}
				
				regionService.saveCountryDetailItem(item);
			}
			regionService.saveState(this.region.getRegionId(),"1");
		}catch(Exception e){
			e.printStackTrace();
			regionService.saveState(this.region.getRegionId(),"2");
			throw e;
		}
		
	}

	@Override
	public List<String> getPatten() {
		return pattenList;
	}

}
