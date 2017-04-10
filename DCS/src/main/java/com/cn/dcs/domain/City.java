package com.cn.dcs.domain;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import com.alibaba.fastjson.JSONArray;

public class City {
	public static void main(String[] args) {
		String jsonStr = readTxtFile("D:\\javaProgram\\workspace\\DCS\\src\\main\\resources\\LocList.json");
		List<Node> o = JSONArray.parseArray(jsonStr, Node.class);
		
		List<RegionData> rdList = new ArrayList<RegionData>();
		for (int i = 0; i < o.size(); i++) {
			String id = String.format("%03d", (i+1)); 
			rdList.add(new RegionData(id,o.get(i),0));
			
			rdList.addAll(readNode(o.get(i),0,id));
			
//			System.out.print(o.get(i).getName()+"|");
//			if(o.get(i).getChildRen()==null){//省级行政区
//				System.out.println(0);
//			}else
//			System.out.println(o.get(i).getChildRen().size());
		}
		
		
		for (int i = 0; i < rdList.size(); i++) {
			System.out.println(rdList.get(i).getRegionId()+"|"+rdList.get(i).getLevel()+"|"+rdList.get(i).getCName());
		}
	}
	
	public static List<RegionData> readNode(Node node,int leval,String parentId){
		if(node.getChildRen()==null)return new ArrayList<RegionData>();
		List<RegionData> nodeList = new ArrayList<RegionData>();
		for (int i = 0; i < node.getChildRen().size(); i++) {
			String id = parentId+String.format("%03d", (i+1)); 
			
			nodeList.add(new RegionData(id,node.getChildRen().get(i),leval+1));
			nodeList.addAll(readNode(node.getChildRen().get(i),leval+1,id));
		}
		return nodeList;
	}
	

	/**
	 * 功能：Java读取txt文件的内容 步骤：1：先获得文件句柄 2：获得文件句柄当做是输入一个字节码流，需要对这个输入流进行读取
	 * 3：读取到输入流后，需要读取生成字节流 4：一行一行的输出。readline()。 备注：需要考虑的是异常情况
	 * 
	 * @param filePath
	 */
	public static String readTxtFile(String filePath) {
		try {
			String encoding = "UTF-8";
			File file = new File(filePath);
			if (file.isFile() && file.exists()) { // 判断文件是否存在
				InputStreamReader read = new InputStreamReader(
						new FileInputStream(file), encoding);// 考虑到编码格式
				BufferedReader bufferedReader = new BufferedReader(read);
				StringBuilder sb = new StringBuilder();
				String lineTxt = null;
				while ((lineTxt = bufferedReader.readLine()) != null) {
					// System.out.println(lineTxt);
					sb.append(lineTxt + "\n");
				}
				read.close();
				return sb.toString();
			} else {
				System.out.println("找不到指定的文件");
			}
		} catch (Exception e) {
			System.out.println("读取文件内容出错");
			e.printStackTrace();
		}

		return "";

	}
}
