<!DOCTYPE html>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="../common/common-taglibs.jsp"%>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>航班列表 | 运行控制风险管理系统</title>
	    <link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">
	    <link href="${ctx}/css/font-awesome.min.css" rel="stylesheet">
	    <link href="${ctx}/css/custom.css" rel="stylesheet">
	    <link href="${ctx}/css/animate.css" rel="stylesheet">
	    <link href="${ctx}/css/admin/style.css" rel="stylesheet">
	    <link href="${ctx}/css/awesome-bootstrap-checkbox.css" rel="stylesheet">
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
			#_collg12{
				padding-right: -15px;padding-left: -15px;
			}
	    </style>
	</head>
	<body>
    	<div id="wrapper">
			<jsp:include page="../left-menu.jsp"/>
        	<div id="page-wrapper" class="gray-bg" id="meanbody">
				<jsp:include page="../top.jsp"/>
		        <div class="wrapper wrapper-content animated fadeInRight">
	                <div class="col-lg-12" id="_collg12" style="padding-right: 0px;padding-left: 0px;">
	                    <div class="ibox float-e-margins" style="height: 100%;">
		                    <div class="ibox-title" style="border-width: 0 0 0;">
		                        <div class="ibox-tools" style="text-align: left;font-size: 16px;">
		                        	<strong>风险航班列表</strong>
		                        </div>
		                    </div>
		                    <div class="ibox-content scrollbar" style="height: 100%;overflow: auto;">
								<table class="table">
									<thead>
			                            <tr>
			                                <th>航班号</th>
											<th>机型</th>
											<th>航班编号</th>
											<th>机组成员</th>
											<th>日期</th>
											<th>起降机场</th>
											<th>起降时刻</th>
											<th style="text-align: center;">操作</th>
			                            </tr>
									</thead>
									<tbody>
										<c:choose>
											<c:when test="${not empty resultMapList}">
												<c:forEach items="${resultMapList}" var="data">
													<tr>
														<td><c:out value="${data.FLT_NO}"/></td>
														<td><c:out value="${data.FLIGHT_TYPE}"/></td>
														<td><c:out value="${data.FLIGHT_CODE}"/></td>
														<td><c:out value="${data.AIR_MEMBER}"/></td>
														<td><c:out value="${data.START_TIME}"/></td>
														<td><c:out value="${data.AIRPORT_START_END}"/></td>
														<td><c:out value="${data.TIME_START_END}"/></td>
														<td style="text-align: center;">
															<a href="${ctx}/flight/queryFlightNo.do?fltNo=${data.FLT_NO}">排班</a>
														</td>
													</tr>
												</c:forEach>
											</c:when>
											<c:otherwise>
												<tr>
													<td colspan="8" style="text-align: center;">No Data</td>
												</tr>
											</c:otherwise>
										</c:choose>
									</tbody>
								</table>
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
	    <script src="${ctx}/js/inspinia.js"></script>
	    <!-- 绿条 -->
	    <script src="${ctx}/js/pace.min.js"></script>
		<script type="text/javascript">
			$(function(){
				$('#_collg12').css('height',$(window).height()-170+"px");
			});
	    </script>
	</body>
</html>