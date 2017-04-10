<!DOCTYPE html>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="common/common-taglibs.jsp"%>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>首页 | 运行控制风险管理系统</title>
	    <link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">
	    <link href="${ctx}/css/font-awesome.min.css" rel="stylesheet">
		<link href="${ctx}/includ/css/plugins/dataTables/datatables.min.css" rel="stylesheet">
		<link href="${ctx}/css/custom.css" rel="stylesheet">
	    <link href="${ctx}/css/animate.css" rel="stylesheet">
	    <link href="${ctx}/css/admin/style.css" rel="stylesheet">
	    <link href="${ctx}/css/awesome-bootstrap-checkbox.css" rel="stylesheet">
		<link href="${ctx}/css/calcite.css" rel="stylesheet">
		<link href="${ctx}/css/esri.css" rel="stylesheet">
		<link href="${ctx}/css/admin/style.css" rel="stylesheet" >
	    <!-- gis -->
	    <link rel="stylesheet" type="text/css" href="${ctx}/fonts/iconfont.css">
		<link rel="stylesheet" type="text/css" href="${ctx}/css/commen.css" />
		<link rel="stylesheet" type="text/css" href="${ctx}/css/perfect-scrollbar.css" />
		<link rel="stylesheet" href="${ctx}/css/tools.css" />

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
			.dataTables_info{
				display: none;

			}
			.dataTables_wrapper {
				margin-top: -33px;
			}
	    </style>
	</head>
	<body>
    	<div id="wrapper">
			<jsp:include page="left-menu.jsp"/>
        	<div id="page-wrapper" class="gray-bg" id="meanbody">
				<!-- border-bottom -->
				<div class="row border-bottom">
					<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0;color: #fff;">
						<div class="navbar-header">
					       	<div class="logo img">
					       		<img alt="logo" height="30px" width="30px;" src="${ctx}/images/logo.png">&nbsp;
					       		运行控制风险管理系统
					       	</div>
						</div>
					   <ul class="nav navbar-top-links navbar-right">
					   		<li style="margin-top: 16px;">
					   			<span class="text-muted welcome-message" id="headtime" style="color: #fff;"></span>
					       </li>
					     </ul>
					 </nav>
				</div>
				<!-- border-bottom -->
		        <div class="wrapper wrapper-content animated fadeInRight">
		            <div class="row">
		            	<!-- col-lg-12 -->
						<div id="collg61" class="col-lg-12" style="text-align: center;padding-bottom: 14px;">
							<div class="col-lg-3" style="width: 20%;background-color: #ffffff;">
								<div style="margin-top: -6px;">
									<img src="images/collg2-bg.png" height="120px;" alt="laptop">
								</div>
								<div style="height: 109px;margin-top: -116px;color: #fff;">
									<div style="padding-top: 10px;">
										<strong>风险航班</strong>&nbsp;<span style="font-size: 24px;">汇总</span>
									</div>
									<div style="margin-top: 22px;color: #333;text-align: left;margin-left: 34px;">
										<img alt="image" style="height:30px;width:30px;" src="images/shijian.png">
										<div style="margin-left: 35px;margin-top: -50px;">
											<input class="form-control" type="text" id="yearmonthday" name="time" style="height: 29px;border: 0px solid #e5e6e7;padding: 12px 12px 0 12px;">
											<%--<input class="form-control" type="text" id="time" name="time" style="padding: 0px 12px;height: 29px;border: 0px solid #e5e6e7;padding: 2px 12px 12px 12px;">--%>
											<select name="timeStart" id="timeStart" onchange="query();">
												<c:forEach items="${startMap}" var="start">
													<option value="${start.value}" <c:if test="${startHour eq start.value}">selected</c:if>>
														<c:out value="${start.key}"/>
													</option>
												</c:forEach>
											</select>
											<span>-</span>
											<select name="timeEnd" id="timeEnd" onchange="query();">
												<c:forEach items="${endMap}" var="end">
													<option value="${end.value}" <c:if test="${endHour eq end.value}">selected</c:if>>
														<c:out value="${end.key}"/></option>
												</c:forEach>
											</select>
										</div>
									</div>
								</div>
							</div>
							
							<div class="col-lg-3" style="width: 20%;background-color: #ffffff;border-left: 1px solid #e7eaec;">
								<div class="row" style="height: 107px;">
									<div class="col-lg-6" style="text-align: right;padding-right:0px;padding-top: 16px;">
										<span><img alt="image" style="height: 50px;width: 50px;" src="images/wufengxian.png"></span>
									</div>
									<div class="col-lg-6" style="text-align: left;padding-left: 0px;font-size: 50px;color: #b2b2b1;padding-top: 10px;">
										<c:choose>
											<c:when test="${not empty resultInfoMap}">
												<c:out value="${resultInfoMap.CURRENT_FLIGHT_TOTAL}"/>
											</c:when>
											<c:otherwise>
												<c:out value="0"/>
											</c:otherwise>
										</c:choose>
									</div>
									<div class="col-lg-12" style="color: #b2b2b1;margin-top: -20px;">
										<strong>当前航班总数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
									</div>
								</div>
							</div>
							<div class="col-lg-3" style="width: 20%;background-color: #ffffff;border-left: 1px solid #e7eaec;">
								<div class="row" style="height: 107px;">
									<div class="col-lg-6" style="text-align: right;padding-right:0px;padding-top: 16px;">
										<span><img alt="image" style="height: 50px;width: 50px;" src="images/fengxian.png"></span>
									</div>
									<div class="col-lg-6" style="text-align: left;padding-left: 0px;font-size: 50px;color: #ff0000;padding-top: 10px;">
										<c:choose>
											<c:when test="${not empty resultInfoMap}">
												<c:out value="${resultInfoMap.HIGH_TOTAL}"/>
											</c:when>
											<c:otherwise>
												<c:out value="0"/>
											</c:otherwise>
										</c:choose>
									</div>
									<div class="col-lg-12" style="color: #b2b2b1;margin-top: -20px;">
										<strong>告警(8以上)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
									</div>
								</div>
							</div>
							<div class="col-lg-3" style="width: 20%;background-color: #ffffff;border-left: 1px solid #e7eaec;">
								<div class="row" style="height: 107px;">
									<div class="col-lg-6" style="text-align: right;padding-right:0px;padding-top: 16px;">
										<span><img alt="image" style="height: 50px;width: 50px;" src="images/fengxian3.png"></span>
									</div>
									<div class="col-lg-6" style="text-align: left;padding-left: 0px;font-size: 50px;color: #f8ac59;padding-top: 10px;">
										<c:choose>
											<c:when test="${not empty resultInfoMap}">
												<c:out value="${resultInfoMap.MIDDLE_TOTAL}"/>
											</c:when>
											<c:otherwise>
												<c:out value="0"/>
											</c:otherwise>
										</c:choose>
									</div>
									<div class="col-lg-12" style="color: #b2b2b1;margin-top: -20px;">
										<strong>预警(5-8)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
									</div>
								</div>
							</div>
							<div class="col-lg-3" style="width: 20%;background-color: #ffffff;border-left: 1px solid #e7eaec;">
								<div class="row" style="height: 107px;">
									<div class="col-lg-6" style="text-align: right;padding-right:0px;padding-top: 16px;">
										<span><img alt="image" style="height: 50px;width: 50px;" src="images/fengxian2.png"></span>
									</div>
									<div class="col-lg-6" style="text-align: left;padding-left: 0px;font-size: 50px;color: #0092ff;padding-top: 10px;">
										<c:choose>
											<c:when test="${not empty resultInfoMap}">
												<c:out value="${resultInfoMap.LOW_TOTAL}"/>
											</c:when>
											<c:otherwise>
												<c:out value="0"/>
											</c:otherwise>
										</c:choose>
									</div>
									<div class="col-lg-12" style="color: #b2b2b1;margin-top: -20px;">
										<strong>提醒(1-4)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
									</div>
								</div>
							</div>
						</div>
		            	<!-- col-lg-12 -->
		                <div class="col-lg-6" id="leftcollg6" style="padding-right: 0px;">
		                    <div class="ibox float-e-margins" style="height: 100%;">
			                    <div class="ibox-title">
			                        <div class="ibox-tools" style="text-align: left;">
			                        	<div style="float: left;">
			                        		<strong style="text-align: left;font-size: 16px;">风险航班列表</strong>
			                        	</div>
			                        </div>
			                    </div>
			                    <div class="ibox-content scrollbar" style="height: 100%;overflow: auto;">
									<div class="table-responsive">
										<button class="btn btn-sm btn-primary" id="export">导出</button>
										<table class="table table-striped table-bordered table-hover dataTables-example">
											<thead>
												<tr>
													<th>航班号</th>
													<th>机型</th>
													<th>飞机编号</th>
													<th>起飞机场</th>
													<th>起飞时刻</th>
													<th>落地机场</th>
													<th>落地时刻</th>
													<th>风险等级</th>
													<th style="text-align: center;">风险值</th>
												</tr>
											</thead>
											<tbody>
												<c:choose>
													<c:when test="${not empty flightRiskResultList}">
														<c:forEach items="${flightRiskResultList}" var="data">
															<tr class="gradeX">
																<td><c:out value="${data.FLT_NO}"/></td>
																<td><c:out value="${data.FLIGHT_TYPE}"/></td>
																<td <c:if test="${data.START_AIRPORT eq 'ZBAA' || data.END_AIRPORT eq 'ZBAA'}">class="flightNo_" style="cursor: pointer;"</c:if>><c:out value="${data.FLIGHT_CODE}"/></td>
																<td><c:out value="${data.START_AIRPORT}"/></td>
																<td><c:out value="${data.START_TIME}"/></td>
																<td><c:out value="${data.END_AIRPORT}"/></td>
																<td><c:out value="${data.END_TIME}"/></td>
																<td><c:out value="${data.RISK_GRADE}"/></td>
																<td style="font-size: 16px;font-weight: 600;text-align: center;">
																	<a href="${ctx}/result/toNewTree.do?fltNo=${data.FLT_NO}" <c:if test="${data.RESULT < '5'}">style="color: #0000FF;text-align: center;"</c:if><c:if test="${data.RESULT <= '8'}">style="color: #F8AC5A;text-align: center;"</c:if><c:if test="${data.RESULT > '8'}">style="color: #FF0000;text-align: center;"</c:if>>
																		<c:out value="${data.RESULT}"/>
																	</a>
																</td>
															</tr>
														</c:forEach>
													</c:when>
													<c:otherwise>
														<tr>
															<td colspan="9" style="text-align: center;"><c:out value="No Data"/></td>
														</tr>
													</c:otherwise>
												</c:choose>
											</tbody>
										</table>
									</div>
			                    </div>
		                    </div>
		                </div>
		                <!-- gis -->
		                <div class="col-lg-6" style="" id="rightcollg6">
							<div class="gis-tool">
								<div class="tools" id="tools">
									<ul id="firsttool">
										<li><img src="${ctx}/images/tools-01.png" style="width:100%;height:100%" alt="气象雷达图" id="radar"></li>
										<li><img src="${ctx}/images/tools-02.png" style="width:100%;height:100%" alt="航路图" id="highline"></li>
										<li><img src="${ctx}/images/tools-04.png" style="width:100%;height:100%" alt="机场图层" id="airport"></li>
									</ul>
									<ul>
										<li><img src="${ctx}/images/tools-03.png" style="width:100%;height:100%" alt="航路热敏图" id="linedensity"></li>
										<li><img src="${ctx}/images/tools-05.png" style="width:100%;height:100%" alt="机场热敏图" id="aircraftdensity"></li>
									</ul>
									<ul>
										<li><img src="${ctx}/images/tools-09.png" style="width:100%;height:100%" alt="备份飞机" id="backaircraft"></li>
										<li><img src="${ctx}/images/tools-10.png" style="width:100%;height:100%" alt="备份机组" id="backpliot"></li>
									</ul>
									<ul>
										<li><img src="${ctx}/images/tools-11.png" style="width:100%;height:100%" alt="路径规划" id="testbtn"></li>
										<li><img src="${ctx}/images/tools-12.png" style="width:100%;height:100%" alt="测距工具"></li>
									</ul>
									<ul>
										<li><img src="${ctx}/images/tools-13.png" style="width:100%;height:100%" alt="放大"></li>
										<li><img src="${ctx}/images/tools-14.png" style="width:100%;height:100%" alt="缩小"></li>
									</ul>
								</div>
								<div class="flightpanel" id="flightdetail"><img src="${ctx}/images/tankuang-25.jpg" />
								</div>
							</div>
							<div class="middle-gis" style="background-color: #353131"  id="map"></div>
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
		<!-- DataTable -->
		<script src="${ctx}/includ/js/plugins/dataTables/datatables.min.js"></script>
		<script src="${ctx}/js/inspinia.js"></script>
		<!-- 绿条 -->
		<script src="${ctx}/js/pace.min.js"></script>
		<!-- gis -->
		<script src="${ctx}/js/config.js"></script>
		<script src="${ctx}/arcgis/3.17/init.js"></script>
		<script src="${ctx}/js/gis.js"></script>
		<script type="text/javascript">
		$(function(){
				$('#leftcollg6').css('height',$(window).height()-290+"px");
				$('#rightcollg6').css('height',$(window).height()-240+"px");
	    
				var yyDate = new Date();
				yea = yyDate.getFullYear();
				mont = yyDate.getMonth() + 1;
				da = yyDate.getDate();
				timer = year + "-" + month + "-" + day;
				$("#yearmonthday").val(timer);

                //datatable
                $('.dataTables-example').DataTable({
                    paging: false,
                    ordering: false
                });

                //导出
                $('#export').click(function () {
					alert('导出成功');
                });
			});

            //查询航班信息
            function query() {
                var timeStart = $('#timeStart').val();
                var timeEnd = $('#timeEnd').val();
                if (timeStart <= timeEnd) {
                    location.href = '${ctx}/index.do?timeStart=' + timeStart + '&timeEnd=' + timeEnd;
                } else {
                    alert('开始时间不得大于结束时间！');
                    return false;
                }
            }
	    </script>
	</body>
</html>