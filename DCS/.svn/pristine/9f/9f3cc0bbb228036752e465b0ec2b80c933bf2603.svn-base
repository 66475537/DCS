<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="common/common-taglibs.jsp"%>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>数据品质监控 | 运行控制风险管理系统</title>
	   	<link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">
		<link href="${ctx}/css/font-awesome.min.css" rel="stylesheet">
		<link href="${ctx}/css/animate.css" rel="stylesheet">
		<link href="${ctx}/css/admin/style.css" rel="stylesheet">
	    <link rel="shortcut icon" href="${ctx}/images/icon_32X32.ico">
	    <style type="text/css">
	    	body{
	    		background-color: #dddddd;
	    	}
	    	.sidebar-collapse > ul {
			    width: 100%;
			    margin: 0;
			    padding: 0;
			    position: absolute;
			    bottom: 0px;
			}
			.img {
			    background-size: 100% 100%;
			    margin: 10px 5px 5px 20px;
			}
			.ibox-content {
			    background-color: #ffffff;
			    color: inherit;
			    padding: 15px 20px 20px 20px;
			    border-color: #e7eaec;
			    border-image: none;
			    border-style: solid solid solid;
			    border-width: 2px 2px;
			}
	    </style>
	</head>
	<body>
    	<div id="wrapper">
			<jsp:include page="left-menu.jsp"/>
        	<div id="page-wrapper" class="gray-bg" id="meanbody">
				<jsp:include page="top.jsp"/>
	            <div class="wrapper wrapper-content animated fadeInRight">
	            	<div class="col-lg-12" id="_collg12" style="padding-right: 0px;padding-left: 0px;">
						<div class="ibox float-e-margins" style="height: 100%;">
		                    <div class="ibox-content scrollbar" style="height: 100%;overflow: auto;">
		            			<div class="tabs-container" style="margin-bottom: 15px;">
		                            <ul class="nav nav-tabs">
		                                <li class="active"><a data-toggle="tab" href="#tab-1" aria-expanded="true" style="font-size: 14px;font-weight: initial;"> Product info</a></li>
		                                <li class=""><a data-toggle="tab" href="#tab-2" aria-expanded="false" style="font-size: 14px;font-weight: initial;"> Data</a></li>
		                            </ul>
		                            <div class="tab-content">
		                                <div id="tab-1" class="tab-pane active">
		                                    <div class="panel-body">
		                                        <fieldset class="form-horizontal">
		                                        	<div class="row">
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5 class="m-b-md">Server status Q12</h5>
									                                <h2 class="text-navy">
									                                    <i class="fa fa-play fa-rotate-270"></i>航班计划
									                                </h2>
									                                <small>Last down 42 days ago</small>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content ">
									                                <h5 class="m-b-md">Server status Q13</h5>
									                                <h2 class="text-navy">
									                                    <i class="fa fa-play fa-rotate-270"></i>排班信息
									                                </h2>
									                                <small>Last down 42 days ago</small>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5 class="m-b-md">Server status Q42</h5>
									                                <h2 class="text-danger">
									                                    <i class="fa fa-play fa-rotate-90"></i><a href="${ctx}/notice/redirectAddNoticeMessagePage.do">通告</a>
									                                </h2>
									                                <small>Server down since 4 days</small>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5 class="m-b-md">Server status Q43</h5>
									                                <h2 class="text-danger">
									                                    <i class="fa fa-play fa-rotate-90"></i><a href="${ctx}/notice/redirectAddWeatherMessagePage.do">气象报文</a>
									                                </h2>
									                                <small>Server down since 4:32 pm.</small>
									                            </div>
									                        </div>
									                    </div>
									                </div>
									                <div class="row">
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Visits in last 24h</h5>
									                                <h2>198 009</h2>
									                                <div id="sparkline1"></div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Visits week</h5>
									                                <h2>65 000</h2>
									                                <div id="sparkline2"></div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Last month</h5>
									                                <h2>680 900</h2>
									                                <div id="sparkline3"></div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Avarage time</h5>
									                                <h2>00:06:40</h2>
									                                <div id="sparkline4"></div>
									                            </div>
									                        </div>
									                    </div>
									                </div>
									                <div class="row">
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Usage</h5>
									                                <h2>95%</h2>
									                                <div class="progress progress-mini">
									                                    <div style="width: 95%;" class="progress-bar"></div>
									                                </div>
									
									                                <div class="m-t-sm small">Server down since 4:32 pm.</div>
									                            </div>
									                        </div>
									                    </div>
									
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Usage</h5>
									                                <h2>100%</h2>
									                                <div class="progress progress-mini">
									                                    <div style="width: 100%;" class="progress-bar"></div>
									                                </div>
									
									                                <div class="m-t-sm small">Server down since 4:32 pm.</div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Usage</h5>
									                                <h2>14%</h2>
									                                <div class="progress progress-mini">
									                                    <div style="width: 38%;" class="progress-bar progress-bar-danger"></div>
									                                </div>
									
									                                <div class="m-t-sm small">Server down since 4:32 pm.</div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Usage</h5>
									                                <h2>20%</h2>
									                                <div class="progress progress-mini">
									                                    <div style="width: 28%;" class="progress-bar progress-bar-danger"></div>
									                                </div>
									
									                                <div class="m-t-sm small">Server down since 4:32 pm.</div>
									                            </div>
									                        </div>
									                    </div>
									                </div>
									                <div class="row">
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Percentage distribution</h5>
									                                <h2>42/20</h2>
									                                <div class="text-center">
									                                    <div id="sparkline5"></div>
									                                </div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Percentage division</h5>
									                                <h2>100/54</h2>
									                                <div class="text-center">
									                                    <div id="sparkline6"></div>
									                                </div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Percentage distribution</h5>
									                                <h2>685/211</h2>
									                                <div class="text-center">
									                                    <div id="sparkline7"></div>
									                                </div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Percentage division</h5>
									                                <h2>240/32</h2>
									                                <div class="text-center">
									                                    <div id="sparkline8"></div>
									                                </div>
									                            </div>
									                        </div>
									                    </div>
									                </div>
									                <div class="row">
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Income</h5>
									                                <h1 class="no-margins">886,200</h1>
									                                <div class="stat-percent font-bold text-navy">98% <i class="fa fa-bolt"></i></div>
									                                <small>Total income</small>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Income last month</h5>
									                                <h1 class="no-margins">1 738,200</h1>
									                                <div class="stat-percent font-bold text-navy">98% <i class="fa fa-bolt"></i></div>
									                                <small>Total income</small>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Income last day</h5>
									                                <h1 class="no-margins">-200,100</h1>
									                                <div class="stat-percent font-bold text-danger">12% <i class="fa fa-level-down"></i></div>
									                                <small>Total income</small>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Income all</h5>
									                                <h1 class="no-margins">54,200</h1>
									                                <div class="stat-percent font-bold text-danger">24% <i class="fa fa-level-down"></i></div>
									                                <small>Total income</small>
									                            </div>
									                        </div>
									                    </div>
									                </div>
									                <div class="row">
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>All new alerts</h5>
									                                <table class="table table-stripped small m-t-md">
									                                    <tbody>
									                                    <tr>
									                                        <td class="no-borders">
									                                            <i class="fa fa-circle text-navy"></i>
									                                        </td>
									                                        <td  class="no-borders">
									                                            Example element 1
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-navy"></i>
									                                        </td>
									                                        <td>
									                                            Example element 2
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-navy"></i>
									                                        </td>
									                                        <td>
									                                            Example element 3
									                                        </td>
									                                    </tr>
									                                    </tbody>
									                                </table>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Alerts</h5>
									                                <table class="table table-stripped small m-t-md">
									                                    <tbody>
									                                    <tr>
									                                        <td class="no-borders">
									                                            <i class="fa fa-circle text-navy"></i>
									                                        </td>
									                                        <td  class="no-borders">
									                                            Example element 1
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-navy"></i>
									                                        </td>
									                                        <td>
									                                            Example element 2
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-navy"></i>
									                                        </td>
									                                        <td>
									                                            Example element 3
									                                        </td>
									                                    </tr>
									                                    </tbody>
									                                </table>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>All messages</h5>
									                                <table class="table table-stripped small m-t-md">
									                                    <tbody>
									                                    <tr>
									                                        <td class="no-borders">
									                                            <i class="fa fa-circle text-danger"></i>
									                                        </td>
									                                        <td  class="no-borders">
									                                            Example element 1
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-danger"></i>
									                                        </td>
									                                        <td>
									                                            Example element 2
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-danger"></i>
									                                        </td>
									                                        <td>
									                                            Example element 3
									                                        </td>
									                                    </tr>
									                                    </tbody>
									                                </table>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="col-lg-3">
									                        <div class="ibox">
									                            <div class="ibox-content">
									                                <h5>Last notification</h5>
									                                <table class="table table-stripped small m-t-md">
									                                    <tbody>
									                                    <tr>
									                                        <td class="no-borders">
									                                            <i class="fa fa-circle text-danger"></i>
									                                        </td>
									                                        <td  class="no-borders">
									                                            Example element 1
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-danger"></i>
									                                        </td>
									                                        <td>
									                                            Example element 2
									                                        </td>
									                                    </tr>
									                                    <tr>
									                                        <td>
									                                            <i class="fa fa-circle text-danger"></i>
									                                        </td>
									                                        <td>
									                                            Example element 3
									                                        </td>
									                                    </tr>
									                                    </tbody>
									                                </table>
									                            </div>
									                        </div>
									                    </div>
									                </div>
									                
									                
		                                        </fieldset>
		                                    </div>
		                                </div>
		                                <div id="tab-2" class="tab-pane">
		                                    <div class="panel-body">
		                                        <fieldset class="form-horizontal">
		                                        	<h2 style="background-color: #1cc09f;">TAF ZGGG 252206Z 260009 01006MPS CAVOK TX19/07Z TN13/00Z=</h2>
		                                        	<h2 style="background-color: #1cc09f;">TAF ZGGG 252116Z 2600024 01006MPS CAVOK TX18 TN10/22Z=</h2>
		                                        	<h2 style="background-color: #1cc09f;">TAF ZGGG 25101Z 2252106 01008MPS 8000 BKN040 TX17/06Z TN12/22Z=</h2>
		                                        	<h2 style="background-color: #1cc09f;">METAR ZSPD 260000Z 29010MPS 9999 SCT026 02/M04 Q1028 NOSIG=</h2>
		                                        	<h2 style="background-color: #1cc09f;">METAR ZSPD 252330Z 29007MPS 9999 BKN026 02/M04 Q1027 NOSIG=</h2>
		                                        	
		                                        	<h2 style="background-color: #fff800;">METAR ZSPD 252300Z 23009MPS 9999 BKN030 02/M03 Q1027 NOSIG=</h2>
		                                        </fieldset>
		                                    </div>
		                                </div>
		                            </div>
	                    		</div>
                    				                    
							</div>
						</div>
                	</div>
               	</div>
               	<div class="footer">
		            <div>
		                <strong>系统管理员&nbsp;您好，欢迎回来！</strong>
		            </div>
			    </div>
        	</div>
        </div>
	    <!-- Mainly scripts -->
	    <script src="${ctx}/js/jquery-2.1.1.js"></script>
	    <script src="${ctx}/js/bootstrap.min.js"></script>
	    <script src="${ctx}/js/jquery.metisMenu.js"></script>
	    <script src="${ctx}/js/jquery.slimscroll.min.js"></script>
	    <!-- Sparkline -->
	    <script src="${ctx}/js/jquery.sparkline.min.js"></script>
	    <!-- Peity -->
	    <script src="${ctx}/js/jquery.peity.min.js"></script>
	    <!-- Custom and plugin javascript -->
	    <script src="${ctx}/js/inspinia.js"></script>
	    <script src="${ctx}/js/pace.min.js"></script>
	    <script type="text/javascript">
	        $(document).ready(function() {
					
	         	$('#_collg12').css('height',$(window).height()-120+"px");
	         	
	            var sparklineCharts = function(){
	                 $("#sparkline1").sparkline([34, 43, 43, 35, 44, 32, 44, 52], {
	                     type: 'line',
	                     width: '100%',
	                     height: '60',
	                     lineColor: '#1ab394',
	                     fillColor: "#ffffff"
	                 });
	
	                 $("#sparkline2").sparkline([24, 43, 43, 55, 44, 62, 44, 72], {
	                     type: 'line',
	                     width: '100%',
	                     height: '60',
	                     lineColor: '#1ab394',
	                     fillColor: "#ffffff"
	                 });
	
	                 $("#sparkline3").sparkline([74, 43, 23, 55, 54, 32, 24, 12], {
	                     type: 'line',
	                     width: '100%',
	                     height: '60',
	                     lineColor: '#ed5565',
	                     fillColor: "#ffffff"
	                 });
	
	                 $("#sparkline4").sparkline([24, 43, 33, 55, 64, 72, 44, 22], {
	                     type: 'line',
	                     width: '100%',
	                     height: '60',
	                     lineColor: '#ed5565',
	                     fillColor: "#ffffff"
	                 });
	
	                 $("#sparkline5").sparkline([1, 4], {
	                     type: 'pie',
	                     height: '140',
	                     sliceColors: ['#1ab394', '#F5F5F5']
	                 });
	
	                 $("#sparkline6").sparkline([5, 3], {
	                     type: 'pie',
	                     height: '140',
	                     sliceColors: ['#1ab394', '#F5F5F5']
	                 });
	
	                 $("#sparkline7").sparkline([2, 2], {
	                     type: 'pie',
	                     height: '140',
	                     sliceColors: ['#ed5565', '#F5F5F5']
	                 });
	
	                 $("#sparkline8").sparkline([2, 3], {
	                     type: 'pie',
	                     height: '140',
	                     sliceColors: ['#ed5565', '#F5F5F5']
	                 });
	            };
	
	            var sparkResize;
	
	            $(window).resize(function(e) {
	                clearTimeout(sparkResize);
	                sparkResize = setTimeout(sparklineCharts, 500);
	            });
	
	            sparklineCharts();
	
	
	        });
    	</script>
	</body>
</html>