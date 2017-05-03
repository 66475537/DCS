package com.cn.dcs.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONArray;
import com.cn.dcs.batch.service.BaiDuService;
import com.cn.dcs.batch.service.RegionService;
import com.cn.dcs.domain.City;
import com.cn.dcs.domain.Node;
import com.cn.dcs.domain.RegionData;
import com.cn.dcs.util.Const;

/**
 * Servlet implementation class LoadServlet
 */
public class LoadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoadServlet() {
//        super();
//        try {
//			Thread.sleep(5000);
//		} catch (InterruptedException e1) {
//			e1.printStackTrace();
//		}
//        RegionService rs = (RegionService)Const.WEB_APP_CONTEXT.getBean("regionService");
//        String jsonStr = City.readTxtFile("D:\\git\\DCS\\src\\main\\resources\\LocList.json");
//		List<Node> o = JSONArray.parseArray(jsonStr, Node.class);
//		
//		List<RegionData> rdList = new ArrayList<RegionData>();
//		for (int i = 0; i < o.size(); i++) {
//			String id = String.format("%03d", (i+1)); 
//			rdList.add(new RegionData(id,o.get(i),"0",0));
//			
//			rdList.addAll(City.readNode(o.get(i),0,id));
//			
////			System.out.print(o.get(i).getName()+"|");
////			if(o.get(i).getChildRen()==null){//省级行政区
////				System.out.println(0);
////			}else
////			System.out.println(o.get(i).getChildRen().size());
//		}
//		
//        try {
//			rs.saveRegionDataList(rdList);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
    	
    	
    	BaiDuService rs = (BaiDuService)Const.WEB_APP_CONTEXT.getBean("baiDuService");
//    	rs.updateRegionEName();
//    	rs.grabCountry();//采集国家信息
//    	rs.setSeabay();
//    	rs.setNUMSeabay();
    	
    	
    	
    	
    }
    
    

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
