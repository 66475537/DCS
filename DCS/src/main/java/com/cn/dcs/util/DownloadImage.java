package com.cn.dcs.util;
import java.io.File;  
import java.io.FileOutputStream;  
import java.io.InputStream;  
import java.io.OutputStream;  
import java.net.URL;  
import java.net.URLConnection;  
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class DownloadImage {  

    /** 
     * @param args 
     * @throws Exception  
     */  
    public static void main(String[] args) throws Exception {  
        // TODO Auto-generated method stub  
//         download("http://ui.51bi.com/opt/siteimg/images/fanbei0923/Mid_07.jpg", "51bi.gif","c:\\image\\");  
    	System.out.println(parseSuffix("http://ui.51bi.com/opt/siteimg/images/fanbei0923/Mid_07.jpg"));
    }  
      
    public static String download(String urlString) throws Exception {  
    	String filename = UUIDTool.getUUID()+"."+parseSuffix(urlString);
    	String savePath = "D://DCS_IMGS//download";
        // 构造URL  
        URL url = new URL(urlString);  
        // 打开连接  
        URLConnection con = url.openConnection();  
        //设置请求超时为5s  
        con.setConnectTimeout(5*1000);  
        // 输入流  
        InputStream is = con.getInputStream();  
        // 1K的数据缓冲  
        byte[] bs = new byte[1024];  
        // 读取到的数据长度  
        int len;  
        // 输出的文件流  
       File sf=new File(savePath);  
       if(!sf.exists()){  
           sf.mkdirs();  
       }  
       OutputStream os = new FileOutputStream(sf.getPath()+"\\"+filename);  
        // 开始读取  
        while ((len = is.read(bs)) != -1) {  
          os.write(bs, 0, len);  
        }  
        // 完毕，关闭所有链接  
        os.close();  
        is.close();  
        return sf.getPath()+"\\"+filename;
    }   
    
    
    final static Pattern pattern = Pattern.compile("\\S*[?]\\S*");  
    
    /** 
         * 获取链接的后缀名 
         * @return 
         */  
        private static String parseSuffix(String url) {  
      
            Matcher matcher = pattern.matcher(url);  
      
            String[] spUrl = url.toString().split("/");  
            int len = spUrl.length;  
            String endUrl = spUrl[len - 1];  
      
            if(matcher.find()) {  
                String[] spEndUrl = endUrl.split("\\?");  
                return spEndUrl[0].split("\\.")[1];  
            }  
            return endUrl.split("\\.")[1];  
        } 

}  