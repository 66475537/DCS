package com.cn.dcs.batch.exe;

import java.util.List;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.cn.dcs.util.HttpClientUtil;


public class SeabayNameJson {
	
	private String airportID;
	private String name;
	private String Airport;
	private String AirportCn;
	private String locality;
	private String citycn;
	private String cityen;
	private String region;
	private String cityrgcn;
	private String cityrgen;
	private String CountryName;
	private String CountryCn;
	private String CustomAirport;
	private String CityCode;
	private String Count;
	private String LanguageCode;
	private String remark;
	private String ys;
	private String url1;
	private String url2;
	private String iata;
	
	private String icao;
	
	public static void main(String[] args) {
		String postStr = HttpClientUtil.doGet("http://www.seabay.cn/tt/function/IATA/uploadAirportCN.aspx?searchname=北京&Page=1&PageSize=10");
		List<SeabayNameJson> list = JSONArray.parseArray(postStr,SeabayNameJson.class);
		for (int i = 0; i < list.size(); i++) {
			postStr = HttpClientUtil.doGet("http://www.seabay.cn/tt/function/IATA/uploadAirportCN.aspx?searchname="+list.get(i).airportID+"&Page=1&PageSize=10");
			
			JSONObject jo=JSON.parseObject(postStr);
			List<SeabayNOJson> snjlist = JSONArray.parseArray(jo.get("Result").toString(),SeabayNOJson.class);
			if(snjlist.size()>0){
				System.out.println(snjlist.get(0));
			}
		}
		
	}
	
	

	public String getAirportID() {
		return airportID;
	}

	public void setAirportID(String airportID) {
		this.airportID = airportID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAirport() {
		return Airport;
	}

	public void setAirport(String airport) {
		Airport = airport;
	}

	public String getAirportCn() {
		return AirportCn;
	}

	public void setAirportCn(String airportCn) {
		AirportCn = airportCn;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getCitycn() {
		return citycn;
	}

	public void setCitycn(String citycn) {
		this.citycn = citycn;
	}

	public String getCityen() {
		return cityen;
	}

	public void setCityen(String cityen) {
		this.cityen = cityen;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getCityrgcn() {
		return cityrgcn;
	}

	public void setCityrgcn(String cityrgcn) {
		this.cityrgcn = cityrgcn;
	}

	public String getCityrgen() {
		return cityrgen;
	}

	public void setCityrgen(String cityrgen) {
		this.cityrgen = cityrgen;
	}

	public String getCountryName() {
		return CountryName;
	}

	public void setCountryName(String countryName) {
		CountryName = countryName;
	}

	public String getCountryCn() {
		return CountryCn;
	}

	public void setCountryCn(String countryCn) {
		CountryCn = countryCn;
	}

	public String getCustomAirport() {
		return CustomAirport;
	}

	public void setCustomAirport(String customAirport) {
		CustomAirport = customAirport;
	}

	public String getCityCode() {
		return CityCode;
	}

	public void setCityCode(String cityCode) {
		CityCode = cityCode;
	}

	public String getCount() {
		return Count;
	}

	public void setCount(String count) {
		Count = count;
	}

	public String getLanguageCode() {
		return LanguageCode;
	}

	public void setLanguageCode(String languageCode) {
		LanguageCode = languageCode;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getYs() {
		return ys;
	}

	public void setYs(String ys) {
		this.ys = ys;
	}

	public String getUrl1() {
		return url1;
	}

	public void setUrl1(String url1) {
		this.url1 = url1;
	}

	public String getUrl2() {
		return url2;
	}

	public void setUrl2(String url2) {
		this.url2 = url2;
	}

	public String getIata() {
		return iata;
	}

	public void setIata(String iata) {
		this.iata = iata;
	}



	public String getIcao() {
		return icao;
	}



	public void setIcao(String icao) {
		this.icao = icao;
	}
	
	
	
}
