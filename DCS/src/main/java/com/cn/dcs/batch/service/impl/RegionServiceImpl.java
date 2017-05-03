package com.cn.dcs.batch.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONArray;
import com.cn.dcs.base.dao.DaoSupport;
import com.cn.dcs.batch.exe.SeabayNOJson;
import com.cn.dcs.batch.exe.SeabayNameJson;
import com.cn.dcs.batch.exe.SeabayRef;
import com.cn.dcs.batch.model.CountryDetail;
import com.cn.dcs.batch.model.CountryDetailItem;
import com.cn.dcs.batch.service.RegionService;
import com.cn.dcs.domain.RegionData;
import com.cn.dcs.util.DateUtil;

@Service("regionService")
public class RegionServiceImpl implements RegionService {
	
	@Resource(name = "daoSupport")
	private DaoSupport dao;

	@Override
	public void saveRegionDataList(List<RegionData> regionDataList) throws Exception {
		this.dao.batchSave("region.saveRegionDataList", regionDataList);
	}

	@Override
	public List<RegionData> findRegionByWhere(RegionData rd) throws Exception {
		return (List<RegionData>) dao.findForList("region.findRegionByWhere", rd);
	}

	@Override
	@Transactional
	public void updateRegionEname(RegionData rd) throws Exception {
		
		this.dao.update("region.updateRegionEname", rd);
	}

	@Override
	public void saveCountryDetailItem(CountryDetailItem item) throws Exception {
		this.dao.delete("region.deleteCountryDetailItem", item);
		this.dao.save("region.saveCountryDetailItem", item);
	}

	@Override
	public List<CountryDetail> findCountryDetail() throws Exception {
		return (List<CountryDetail>) this.dao.findForList("region.findCountryDetail",null);
	}

	@Override
	public void insertSeabayRef(SeabayRef seabayRef) throws Exception {
		this.dao.save("region.insertSeabayRef", seabayRef);
	}

	@Override
	public void insertSeabayNameJson(SeabayNameJson seabayNameJson) throws Exception {
		this.dao.save("region.insertSeabayNameJson", seabayNameJson);
	}

	@Override
	public void insertSeabayNOJson(SeabayNOJson seabayNameJson) throws Exception {
		this.dao.save("region.insertSeabayNOJson", seabayNameJson);
	}

	@Override
	public List<SeabayRef> selectSeabayRef(SeabayRef s) throws Exception {
		return (List<SeabayRef>) this.dao.findForList("region.selectSeabayRef", s);
	}

	@Override
	public List<SeabayNameJson> selectSeabayNameJson(
			SeabayNameJson seabayNameJson) throws Exception {
		return (List<SeabayNameJson>) this.dao.findForList("region.selectSeabayNameJson", seabayNameJson);
	}

	@Override
	public List<SeabayNOJson> selectSeabayNOJson(SeabayNOJson seabayNOJson) throws Exception {
		return (List<SeabayNOJson>) this.dao.findForList("region.selectSeabayNOJson", seabayNOJson);
	}

	@Override
	public void updateRegionSuccess(String regionId) throws Exception {
		this.dao.update("region.updateRegionSuccess", regionId);
		
	}

	@Override
	public List<SeabayNOJson> getAllAirPort(SeabayNOJson seabayNOJson)
			throws Exception {
		return (List<SeabayNOJson>) this.dao.findForList("region.findSeabayNOJson", seabayNOJson);
	}

	@Override
	public void saveState(String regionId, String state) throws Exception {
		Map<String,String> map = new HashMap<String,String>();
		map.put("regionId", regionId);
		map.put("createTime", DateUtil.getNowTime());
		map.put("state", state);
		this.dao.delete("delRegionColleState", map);
		this.dao.save("region.saveRegionColleState", map);
		
	}
	
	
}
