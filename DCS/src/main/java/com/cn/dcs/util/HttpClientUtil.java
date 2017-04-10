package com.cn.dcs.util;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class HttpClientUtil {
	/**
	 * httpGet请求
	 * @param uriAPI
	 * @return
	 */
	public static String doGet(String uriAPI){
		String result= "";
		HttpGet httpRequst = new HttpGet(uriAPI);
		try {
			CloseableHttpClient httpClient = HttpClients.createDefault();
			HttpResponse httpResponse = httpClient.execute(httpRequst);//其中HttpGet是HttpUriRequst的子类
			if(httpResponse.getStatusLine().getStatusCode() == 200)
			{
				HttpEntity httpEntity = httpResponse.getEntity();
				result = EntityUtils.toString(httpEntity);//取出应答字符串
				result.replaceAll("\r", "");//去掉返回结果中的"\r"字符，否则会在结果字符串后面显示一个小方格
			}
			httpRequst.abort();
		} catch (ClientProtocolException e) {
			e.printStackTrace();
			result = e.getMessage().toString();
		} catch (IOException e) {
			e.printStackTrace();
			result = e.getMessage().toString();
		}
		return result;
	}
}
