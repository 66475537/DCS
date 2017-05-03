package com.cn.dcs.batch.service;

import java.util.List;
import java.util.Map;

import com.cn.dcs.base.entity.Page;
import com.cn.dcs.batch.model.CountryDetailItem;

public interface CountryDetailItemService {

	List<CountryDetailItem> findCountryDetailItemList(Page page)throws Exception ;

	public List<Map> findCoutryCollectionStatus(
			Page page) throws Exception ;
}
