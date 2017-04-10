<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Access-Control-Allow-Origin" content="*" />
<title>Insert title here</title>
<script>
	var ctx = "${ctx}";
</script>
<link rel="stylesheet" type="text/css" href="css/commen.css" />
<link rel="stylesheet" href="css/tools.css" />
<link rel="stylesheet" href="http://123.57.253.58:7789/library/3.16/3.16/esri/css/esri.css">
<script src="http://123.57.253.58:7789/library/3.16/3.16/init.js"></script>
<script type="text/javascript" src="${ctx}/js/jquery.js"></script>
<script type="text/javascript" src="js/headcharts.js"></script>
<script type="text/javascript" src="js/control.js"></script>
<!-- <script type="text/javascript" src="js/commen.js"></script> -->
<script type="text/javascript" src="${ctx}/js/gis.js"></script>
</head>
<body>
<div class="middlepath">
	<div class="gis-tool">
		  <div class="tools" id="tools">
		        <ul id="firsttool">
		            <li><img src="images/tools-01.png" style="width:100%;height:100%" alt="气象雷达图" id="radar"></li>
		            <li><img src="images/tools-02.png" style="width:100%;height:100%" alt="航路图" id="highline"></li>    
		            <li><img src="images/tools-04.png" style="width:100%;height:100%" alt="机场图层" id="airport"></li>
		        </ul>
		        <ul>
		            <li><img src="images/tools-03.png" style="width:100%;height:100%" alt="航路热敏图" id="linedensity"></li>
		            <li><img src="images/tools-05.png" style="width:100%;height:100%" alt="机场热敏图" id="aircraftdensity"></li>
		            <!--<li><img src="images/tools-06.png" style="width:100%;height:100%" alt="机场气象图"></li>
		            <li><img src="images/tools-07.png" style="width:100%;height:100%" alt="机场通告"></li>
		            <li><img src="images/tools-08.png" style="width:100%;height:100%" alt="航路通告"></li>-->
		        </ul>
		        <ul>
		            <li><img src="images/tools-09.png" style="width:100%;height:100%" alt="备份飞机" id="backaircraft"></li>
		            <li><img src="images/tools-10.png" style="width:100%;height:100%" alt="备份机组" id="backpliot"></li>
		        </ul>
		        <ul>
		            <li><img src="images/tools-11.png" style="width:100%;height:100%" alt="路径规划" id="testbtn"></li>
		            <li><img src="images/tools-12.png" style="width:100%;height:100%" alt="测距工具"></li>
		        </ul>
		        <ul>
		            <li><img src="images/tools-13.png" style="width:100%;height:100%" alt="放大"></li>
		            <li><img src="images/tools-14.png" style="width:100%;height:100%" alt="缩小"></li>
		        </ul>
		    </div>
	    <div class="flightpanel" id="flightdetail"><img src="images/tankuang-25.jpg" />
	    </div>
	</div>
	<div class="middle-gis" id="map"></div>
	<!-- 弹出机场图 -->
	<div class="airport_alerm" id="airportalerm">
		<div class="alerm_head" id="alerm_head"><img src="images/airport-02.png" width="100%" height="100%"></div>
		<div class="alerm_bottom">
			<div class="alerm_pic"><img src="images/airport-01.png" width="100%" height="100%"></div>
			<div class="alerm_vedio" >
				<video src="video/airport.mp4"  width="100%" height="100%" controls="controls" id="bgvideo">
				Your browser does not support the video tag.
				</video>
			</div>
		</div>
	</div>
</div>
</body>
</html>