package com.cn.dcs.batch.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.cn.dcs.base.controller.BaseController;
import com.cn.dcs.batch.exe.SeabayNOJson;
import com.cn.dcs.batch.service.RegionService;

@Controller
@RequestMapping(value="/airport")
public class AirprotController extends BaseController {
	
	@Resource
	private RegionService regionService;
	
	@RequestMapping(value="/getAllAirPortArray",produces="text/html;charset=UTF-8")
	@ResponseBody
	public String getAllAirPortArrayStr(SeabayNOJson s) throws Exception{
		List<SeabayNOJson> list = regionService.getAllAirPort(new SeabayNOJson());
		List<ArrayList<String>> listObjs = new ArrayList<ArrayList<String>>();
		for (int i = 0; i < list.size(); i++) {
			ArrayList<String> strs = new ArrayList<String>();
			strs.add(list.get(i).getIcao());
			strs.add(list.get(i).getAirportCn());
			strs.add(list.get(i).getIata());
			strs.add(list.get(i).getCityCode());
			listObjs.add(strs);
		}
		return JSONArray.toJSONString(listObjs);
	}
}
