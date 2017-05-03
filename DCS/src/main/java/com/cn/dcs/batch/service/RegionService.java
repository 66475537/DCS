package com.cn.dcs.batch.service;

import java.util.List;

import com.alibaba.fastjson.JSONArray;
import com.cn.dcs.batch.exe.SeabayNOJson;
import com.cn.dcs.batch.exe.SeabayNameJson;
import com.cn.dcs.batch.exe.SeabayRef;
import com.cn.dcs.batch.model.CountryDetail;
import com.cn.dcs.batch.model.CountryDetailItem;
import com.cn.dcs.domain.RegionData;

/**
 * 地区服务
 * @author Administrator
 *
 */
public interface RegionService {
	public void saveRegionDataList(List<RegionData> regionDataList)throws Exception;
	
	
	public List<RegionData> findRegionByWhere(RegionData rd)throws Exception;




	public void updateRegionEname(RegionData id)throws Exception;


	public void saveCountryDetailItem(CountryDetailItem item) throws Exception;


	public List<CountryDetail> findCountryDetail() throws Exception ;


	/**
	 * 保存关系
	 * @param seabayRef
	 */
	public void insertSeabayRef(SeabayRef seabayRef)throws Exception;


	public void insertSeabayNameJson(SeabayNameJson seabayNameJson)throws Exception;


	public void insertSeabayNOJson(SeabayNOJson seabayNOJson)throws Exception;


	public List<SeabayRef> selectSeabayRef(SeabayRef s)throws Exception ;


	public List<SeabayNameJson> selectSeabayNameJson(SeabayNameJson seabayNameJson)throws Exception ;


	public List<SeabayNOJson> selectSeabayNOJson(SeabayNOJson seabayNOJson)throws Exception ;


	public void updateRegionSuccess(String regionId) throws Exception;


	public List<SeabayNOJson> getAllAirPort(SeabayNOJson seabayNOJson)throws Exception;


	public void saveState(String regionId, String string)throws Exception;
}
