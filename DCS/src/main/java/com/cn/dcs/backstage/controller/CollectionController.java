package com.cn.dcs.backstage.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.cn.dcs.base.controller.BaseController;
import com.cn.dcs.base.entity.Page;
import com.cn.dcs.batch.model.CountryDetailItem;
import com.cn.dcs.batch.service.BaiDuService;
import com.cn.dcs.batch.service.CountryDetailItemService;

@Controller
@RequestMapping(value="/collection")
public class CollectionController extends BaseController {
	
	@Resource
	private CountryDetailItemService countryDetailItemService;
	@Resource
	private BaiDuService baiDuService;
	
	@RequestMapping(value = "/toCountryDataList")
	public ModelAndView toCountryDataList(CountryDetailItem  cdi) throws Exception {
		ModelAndView mav = this.getModelAndView();
		Page page = getPage();
		List<CountryDetailItem> countryDetailItemList = countryDetailItemService
				.findCountryDetailItemList(page);
		mav.addObject(countryDetailItemList);
		mav.addObject(page);
		mav.setViewName("backstage/collection/country-datalist");
		return mav;
	}
	
	
	@RequestMapping(value = "/toCountryCrawler")
	public ModelAndView toCountryCrawler(CountryDetailItem  cdi) throws Exception {
		ModelAndView mav = this.getModelAndView();
		Page page = getPage();
		List<Map> hashMapList = countryDetailItemService.findCoutryCollectionStatus(page);
		mav.addObject(hashMapList);
		mav.addObject(page);
		mav.setViewName("backstage/collection/country-crawler");
		return mav;
	}
	
	/**
	 * 国家内容采集
	 * @param cdi
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/countryCrawler")
	@ResponseBody
	public String countryCrawler(CountryDetailItem  cdi) throws Exception {
		baiDuService.grabCountry(cdi);
		return "{\"success\":\"1\"}";
	}
	
}
