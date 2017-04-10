package com.cn.intw.quartz;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cn.intw.sync.service.ISyncService;

public class JobBean {
	
	@Autowired
	private ISyncService syncService;
	
	/**
	 * AircraftInfo
	 */
    public void syncAircraftInfo() {
    	syncService.syncAircraftInfo();
    	System.out.println("syncAircraftInfo end");
    }
    
    /**
	 * CityPairTime
	 */
    public void syncCityPairTime() {
    	syncService.syncCityPairTime();
    	System.out.println("syncCityPairTime end");
    }
    
    
    /**
	 * Airport
	 */
    public void syncAirport() {
    	syncService.syncAirport();
    	System.out.println("syncAirport end");
    }
    
    /**
	 * AirlineInfo
	 */
    public void syncAirlineInfo() {
    	syncService.syncAirlineInfo();
    	System.out.println("syncAirlineInfo end");
    }


}