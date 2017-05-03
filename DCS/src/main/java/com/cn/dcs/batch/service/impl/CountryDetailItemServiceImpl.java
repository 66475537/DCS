package com.cn.dcs.batch.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.cn.dcs.base.dao.DaoSupport;
import com.cn.dcs.base.entity.Page;
import com.cn.dcs.batch.model.CountryDetailItem;
import com.cn.dcs.batch.service.CountryDetailItemService;

@Service
public class CountryDetailItemServiceImpl implements CountryDetailItemService {
	
	@Resource(name = "daoSupport")
	private DaoSupport dao;

	@Override
	public List<CountryDetailItem> findCountryDetailItemList(
			Page page) throws Exception {
		return (List<CountryDetailItem>) dao.findForList("countryDetailItem.findCountryDetailItemlistPage", page);
	}
	
	
	@Override
	public List<Map> findCoutryCollectionStatus(
			Page page) throws Exception {
		return (List<Map>) dao.findForList("countryDetailItem.findCoutryCollectionStatuslistPage", page);
	}
	
	
	

}
