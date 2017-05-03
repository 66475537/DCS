package com.cn.dcs.util;

import java.math.BigDecimal;
import java.text.ParseException;



/**
 * Mercator工具类
 * @author Administrator
 *
 */
public class DecimalUtil {
	
	
	/**
	 * 经纬转mercator
	 * @return
	 */
	public static Mercaor lonlat2Mercator(String lon, String lat) {
		return lonlat2Mercator(Double.parseDouble(lon),Double.parseDouble(lat));
	}
	
	public static void main1(String[] args) {
		String dd = new BigDecimal(103.865).multiply(new BigDecimal(20037508.342789))
				.divide(new BigDecimal(180.00),8,BigDecimal.ROUND_DOWN).toString();
		System.out.println(dd);
		/**
		double latitude2 = lonlat2Decimal("N 12 6.8");//纬度
		double longitude2 = lonlat2Decimal("E 108 49.0");//经度
		double latitude1 = lonlat2Decimal("N 10 23.9");
		double longitude1 = lonlat2Decimal("E 107 43.2");
		**/
		//下面应该在290度左右
		double latitude1 = lonlat2Decimal("N 42 10.6");
		double longitude1 = lonlat2Decimal("W 79 4.9");
		double latitude2 = lonlat2Decimal("N 42 6.7");
		double longitude2 = lonlat2Decimal("W 82 1.0");
		
		
		System.out.println("latitude1:"+latitude1+",longitude1:"+longitude1);
		Mercaor m1 = lonlat2Mercator(latitude1,longitude1);
		Mercaor m2 = lonlat2Mercator(latitude2,longitude2);
		System.out.println(getMKTDistance(m1.getX(),m1.getY(),m2.getX(),m2.getY()));
		
	}
	
	/**
	 * 传入
	 * Latitude: N 48 29.4 Longitude: E 8 12.4 
	 * 得到 48.49 8.206666666666667
	 * @param str
	 * @return
	 */
	public static double lonlat2Decimal(String str){
		str = str.replace("  ", " ");//两个空格换成一个
		String[] s1 = str.split(" ");
		double du = 0;
		double fen = 0;
		double miao = 0;
		
		if(s1.length==3){
			du = Double.parseDouble(s1[1]);
			fen = Double.parseDouble(s1[2]);
		}else if(s1.length==2){
			fen = Double.parseDouble(s1[1]);
		}
		
		if("W".equals(s1[0])||"S".equals(s1[0]))
		du = Double.parseDouble("-" + du);
		
		
		if (du < 0)
			return 0-(Math.abs(du) + (Math.abs(fen) + (Math.abs(miao) / 60)) / 60);
		return Math.abs(du)
				+ (Math.abs(fen) + (Math.abs(miao) / 60)) / 60;
	}
	
	
	/**
	 * 传入N90000000
	 * 得到 N 48 29.4
	 * @param str
	 * @return
	 */
	public static String fullStr2Lonlat(String str){
		String fix = str.substring(0,1);
		str = str.substring(1, str.length());
		int du = 0;
		int fen = 0;
		int miao = 0;
		if(str.length()==8){
			du = Integer.parseInt(str.substring(0, 2));
			fen = Integer.parseInt(str.substring(2, 4));
			miao = Integer.parseInt(str.substring(4, 8));
		}
		if(str.length()==9){
			du = Integer.parseInt(str.substring(0, 3));
			fen = Integer.parseInt(str.substring(4, 5));
			miao = Integer.parseInt(str.substring(6, 9));
		}
		BigDecimal   b   =   new   BigDecimal(fen+(miao/3600.00));  
		return new StringBuffer(fix).append(" ").append(du)
				.append(" ").append(b.setScale(2,   BigDecimal.ROUND_HALF_UP).doubleValue())
				.toString();
	}
	
	
	
	/**
	 * 传入
	 * Latitude: N 48 29.4 Longitude: E 8 12.4 
	 * 得到   latitude  N90000000
	 *        longitude E180000000
	 *        			W168580300
	 * @param str
	 * @return
	 */
	public static String lonlat2Num(String str){
		String[] s = str.split(" ");
		String du = "";
		String fen = "";
		String miao = "";
		
		if(s.length==3){
			if(s[2].indexOf(".")!=-1){
				String[] ss = s[2].split("\\.");
				du = s[1];
				fen = ss[0];
				miao = String.valueOf(Integer.parseInt(ss[1])*6);
			}else{
				du = s[1];
				fen = s[2];
			}
		}else if(s.length==2){//如果只有两位，数值为分
			du = "0";
			if(s[1].indexOf(".")!=-1){
				String[] ss = s[2].split("\\.");
				fen = ss[1];
				miao = String.valueOf(Integer.parseInt(ss[2])*6);
			}else{
				fen = String.valueOf(Integer.parseInt(s[1]));
			}
			
		}
		if("N".equals(s[0].toUpperCase())){//如是为N度只有两位
			du = addCharAfer(du,2-du.length(),'0');
		}else{
			du = addCharAfer(du,3-du.length(),'0');
		}
		fen = addCharAfer(fen,2-fen.length(),'0');
		miao = addCharBfer(miao,4-miao.length(),'0');
		
		
		return new StringBuffer(s[0]).append(du).append(fen).append(miao).toString();
	}
	
	
	public static String addCharAfer(String str,int length,char c){
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < length; i++) {
			sb.append(c);
		}
		return sb.toString()+str;
	}
	
	
	
	
	
	
	
	/**
	 * 相对北的方位角
	 * 正切（tan或tg）= x/y; 对边/临边
	 * Math.toDegrees (Math.atan (1))可以得到tan的值再转角度
	 * @param lat1
	 * @param lon1
	 * @param lat2
	 * @param lon2
	 * @return
	 */
	public static double getMKTAngle(BigDecimal x1, BigDecimal y1, BigDecimal x2, BigDecimal y2){
		double x = x2.subtract(x1).doubleValue();
		double y = y2.subtract(y1).doubleValue();
		double xABS = Math.abs(x);
		double yABS = Math.abs(y);
		
		double detrees = Math.toDegrees(Math.atan (xABS/yABS));
		// 判断象限
		double dLo =x;
		double dLa =y;
		
		if (x > 0 && y <= 0) {//第二象限
			detrees = (90. - detrees) + 90.;
		} else if (dLo <= 0 && dLa < 0) {
			detrees = detrees + 180.;
		} else if (dLo < 0 && dLa >= 0) {
			detrees = (90. - detrees) + 270;
		}
		return detrees;
	}
	
	
	
	
	public static String addCharBfer(String str,int length,char c){
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < length; i++) {
			sb.append(c);
		}
		
		return str+sb.toString();
	}
	
	/**
	 * 通过墨卡托坐标来计算距离
	 * @param lat1
	 * @param lon1
	 * @param lat2
	 * @param lon2
	 * @return
	 */
	public static double getMKTDistance(BigDecimal x1, BigDecimal y1, BigDecimal x2, BigDecimal y2){
		double xx = Math.abs(x1.subtract(x2).doubleValue());
		double yy = Math.abs(y1.subtract(y2).doubleValue());
		return Math.sqrt(xx*xx+yy*yy);
	}
	
	
	
	private final static double PI = Math.PI; // 圆周率
	private final static double R = 6371.229; // 地球的半径
	
	/**
	longitude   经度
	latitude 维度
	*/
	public static double getDistance(double longt1, double lat1, double longt2,double lat2) {
	        double x, y, distance;
	        x = (longt2 - longt1)*PI*R*Math.cos(((lat1+lat2)/2)*PI/180)/180;
	        y = (lat2 - lat1)*PI*R/180;
	        distance = Math.hypot(x, y);
	        return distance;
	}
	
	
	/**
	 * 两点经纬度坐标[WGS84]来算距离
	 * @param lat1 N
	 * @param lon1 E
	 * @param lat2
	 * @param lon2
	 * @return
	 */
	  public static double getGBS84Distance(double lat1, double lon1, double lat2, double lon2){
			double radLat1 = lat1 * Math.PI / 180;
			double radLat2 = lat2 * Math.PI / 180;
			double a = radLat1 - radLat2;
			double b = lon1 * Math.PI / 180 - lon2 * Math.PI / 180;
			double s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)
					+ Math.cos(radLat1) * Math.cos(radLat2)
					* Math.pow(Math.sin(b / 2), 2)));
			s = s * 6378137.0;// 取WGS84标准参考椭球中的地球长半径(单位:m)
			s = Math.round(s * 10000) / 10000;

			return s;
	    }
	
	
	/**
	 *  latitude 维度 N longitude 经度 E
	 */
	public static double getDistanceStr(String lat1Str, String longt1Str, 
			String lat2Str, String longt2Str) {
		double lon1 = lonlat2Decimal(longt1Str);
		double lat1 = lonlat2Decimal(lat1Str);
		double lon2 = lonlat2Decimal(longt2Str);
		double lat2 = lonlat2Decimal(lat2Str);
		
		
		return getGBS84Distance(lat1,lon1,lat2,lon2);
	}
	
	
	static double EARTH_RADIUS = 6378137.0;    //单位M
    
    static double getRad(double d){
        return d*PI/180.0;
    }
	
	public static double getFlatternDistance(double lat1,double lng1,double lat2,double lng2){
		double f = getRad((lat1 + lat2)/2);
		double g = getRad((lat1 - lat2)/2);
		double l = getRad((lng1 - lng2)/2);
        
		double sg = Math.sin(g);
		double sl = Math.sin(l);
		double sf = Math.sin(f);
        
		double s,c,w,r,d,h1,h2;
		double a = EARTH_RADIUS;
		double fl = 1/298.257;
        
        sg = sg*sg;
        sl = sl*sl;
        sf = sf*sf;
        
        s = sg*(1-sl) + (1-sf)*sl;
        c = (1-sg)*(1-sl) + sf*sl;
        
        w = Math.atan(Math.sqrt(s/c));
        r = Math.sqrt(s*c)/w;
        d = 2*w*a;
        h1 = (3*r -1)/2/c;
        h2 = (3*r +1)/2/s;
        
        return d*(1 + fl*(h1*sf*(1-sg) - h2*(1-sf)*sg));
    }
	
	/**
	 * longitude 经度 E latitude 维度 N
	 * @param args
	 */
	public static void main(String[] args) {
//		String latitudeStr = "N60562090";
//		String longitudeStr = "W164382850";
//		double latitude = lonlat2Decimal(fullStr2Lonlat(latitudeStr));
//		double longitude = lonlat2Decimal(fullStr2Lonlat(longitudeStr));
//		System.out.println(latitude);
		
		Mercaor m = lonlat2Mercator(47.217,89.65);//latitude,longitude
		System.out.println(m.getX());
		System.out.println(m.getY());
		
		
//		System.out.println(259396.0/902 * 3600/1000);
//		System.out.println(259396.0/902 * (3600/1000));
//		System.out.println(((259396.0/1000)/902)*3600);
		
		//System.out.println("每小时:"+getDistanceStr("N 32 51.8","E 129 47.9","N 33 33.8", //259396.0/902 * 3600/1000
		//		"E 132 27.3")/902 * (3600/1000) +"公里");//902* (3600/1000)  = :1035.28
		
		//2015-05-29 09:03:28
		//2015-05-29 08:50:38 差 13分钟 -10秒
		
		
		System.out.println(lonlat2Decimal("W 3 33.9"));
	}

	/**
	 *  var mercator={x:0,y:0};
    	 var x = lon *20037508.342789 / 180;
    	 var y = Math.log(Math.tan((90+lat)*Math.PI/360))/(Math.PI/180);
    	 y = y *20037508.34789/180;
    	 mercator.x = x;
    	 mercator.y = y;
	 * @param lat
	 * @param lon
	 * @return
	 */
	public static Mercaor lonlat2Mercator(double lat, double lon) {
		BigDecimal x_ = new BigDecimal(lon).multiply(new BigDecimal(20037508.342789)).divide(new BigDecimal(180),10,BigDecimal.ROUND_DOWN);
		//double x = x_.setScale(6).doubleValue();
		//double x = lon *20037508.342789 / 180;
		//java.text.DecimalFormat   df=new   java.text.DecimalFormat("#.######");//保留六位小数
		
		//x = Double.parseDouble(new BigDecimal(x).toPlainString());
		double y = Math.log(Math.tan((90 + lat) * Math.PI/ 360))/ (Math.PI / 180);
		BigDecimal y_ = new BigDecimal(y).multiply(new BigDecimal(20037508.34789)).divide(new BigDecimal(180),10,BigDecimal.ROUND_DOWN);
		return new Mercaor(x_, y_);
	}
	
	
	
	
	/** 
	   * 余弦反算函数，精度到0.03秒 
	   * @param a double 余弦值 
	   * @return double   角度(360) 
	   */ 
	public double arccos(double a) 
	{ 
	    double b = 90.0, c0 = 0.0, c1 = 180.0; 
	    if (a < 1 && a > -1) 
	    { 
	      do 
	      { 
	if (Math.cos(b * Math.PI / 180) >= a) 
	{ 
	   c0 = b; 
	   b = (c0 + c1) / 2; 
	} 
	if (Math.cos(b * Math.PI / 180) <= a) 
	{ 
	   c1 = b; 
	   b = (c0 + c1) / 2; 
	} 
	      } 
	      while (Math.abs(c0 - c1) > 0.00001); 
	    } 
	    return b; 
	}

}
