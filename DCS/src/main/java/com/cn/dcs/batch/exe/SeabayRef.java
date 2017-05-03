package com.cn.dcs.batch.exe;

public class SeabayRef {
	private String regionId;
	private String airportID;
	
	private String createTime;

	public SeabayRef(){}
	
	public SeabayRef(String regionId, String airportID, String createTime) {
		super();
		this.regionId = regionId;
		this.airportID = airportID;
		this.createTime = createTime;
	}

	public String getRegionId() {
		return regionId;
	}

	public void setRegionId(String regionId) {
		this.regionId = regionId;
	}

	public String getAirportID() {
		return airportID;
	}

	public void setAirportID(String airportID) {
		this.airportID = airportID;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	
	
}
