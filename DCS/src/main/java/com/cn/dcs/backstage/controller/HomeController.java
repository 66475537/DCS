package com.cn.dcs.backstage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cn.dcs.base.controller.BaseController;

@Controller
@RequestMapping(value="/home")
public class HomeController extends BaseController {
	
	@RequestMapping(value="/index")
	public String index() throws Exception{
		return "backstage/index";
	}
	
	
}
