package com.cn.dcs.batch.exe;

/**
 * 详细信息
 * @author Administrator
 *
 */
public class SeabayNOJson {
	
	//33216
	private String airportID;
	//ZBAA
	private String icao;
	//PEK
	private String iata;
	
	private String faa;
	
	//Beijing Capital International Airport
	private String name;
	//Capital，Beijing Capital Airport，Beijing International Airport，Capital International Airpor
	private String Airport;
	
	//北京首都国际机场
	private String AirportCn;
	
	//Beijing
	private String locality;
	
	//北京
	private String citycn;
	//Beijing
	private String cityen;
	//北京
	private String cityrgcn;
	//Chaoyang
	private String cityrgen;
	//Beijing
	private String region;
	//China
	private String CountryName;
	//%e4%b8%ad%e5%9b%bd
	private String CountryCn;
	//Open+on+Saturday%2c+closed+on+Sunday.
	private String BankInfo;
	private String ECustoms;
	private String Import;
	private String Transit;
	
	private String Export;
	private String ChargeI;
	private String ChargeE;
	//1
	private String CustomAirport;
	//0
	private String CityCode;
	//40.0801124572754
	private String lat;
	//116.58455657959
	private String lon;
	
	//Airport (Aerodrome, Airfield)
	private String type;
	//Public/Civil
	private String usefor;
	//+08:00
	private String timeZone;
	//CN
	private String georegion;
	//CN
	private String countryCode2;
	//CHN
	private String countryCode3;
	//40-04-48.3996N
	private String dmslat;
	//Asia
	private String Continent;
	
	private String LanguageCode;
	
	private String remark;
	
	//http://en.bcia.com.cn/
	private String url1;
	private String url2;
	
	
	private String dmslon;
	
	
	private String NUM_INSERT="01";
	
//	private String Import;
	public String getAirportID() {
		return airportID;
	}
	public void setAirportID(String airportID) {
		this.airportID = airportID;
	}
	public String getIcao() {
		return icao;
	}
	public void setIcao(String icao) {
		this.icao = icao;
	}
	public String getIata() {
		return iata;
	}
	public void setIata(String iata) {
		this.iata = iata;
	}
	public String getFaa() {
		return faa;
	}
	public void setFaa(String faa) {
		this.faa = faa;
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
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
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
	public String getBankInfo() {
		return BankInfo;
	}
	public void setBankInfo(String bankInfo) {
		BankInfo = bankInfo;
	}
	public String getECustoms() {
		return ECustoms;
	}
	public void setECustoms(String eCustoms) {
		ECustoms = eCustoms;
	}
	public String getImport() {
		return Import;
	}
	public void setImport(String import1) {
		Import = import1;
	}
	public String getTransit() {
		return Transit;
	}
	public void setTransit(String transit) {
		Transit = transit;
	}
	public String getExport() {
		return Export;
	}
	public void setExport(String export) {
		Export = export;
	}
	public String getChargeI() {
		return ChargeI;
	}
	public void setChargeI(String chargeI) {
		ChargeI = chargeI;
	}
	public String getChargeE() {
		return ChargeE;
	}
	public void setChargeE(String chargeE) {
		ChargeE = chargeE;
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
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLon() {
		return lon;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getUsefor() {
		return usefor;
	}
	public void setUsefor(String usefor) {
		this.usefor = usefor;
	}
	public String getTimeZone() {
		return timeZone;
	}
	public void setTimeZone(String timeZone) {
		this.timeZone = timeZone;
	}
	public String getGeoregion() {
		return georegion;
	}
	public void setGeoregion(String georegion) {
		this.georegion = georegion;
	}
	public String getCountryCode2() {
		return countryCode2;
	}
	public void setCountryCode2(String countryCode2) {
		this.countryCode2 = countryCode2;
	}
	public String getCountryCode3() {
		return countryCode3;
	}
	public void setCountryCode3(String countryCode3) {
		this.countryCode3 = countryCode3;
	}
	public String getDmslat() {
		return dmslat;
	}
	public void setDmslat(String dmslat) {
		this.dmslat = dmslat;
	}
	public String getContinent() {
		return Continent;
	}
	public void setContinent(String continent) {
		Continent = continent;
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
	public String getDmslon() {
		return dmslon;
	}
	public void setDmslon(String dmslon) {
		this.dmslon = dmslon;
	}
	public String getNUM_INSERT() {
		return NUM_INSERT;
	}
	public void setNUM_INSERT(String nUM_INSERT) {
		NUM_INSERT = nUM_INSERT;
	}
	
	
}
