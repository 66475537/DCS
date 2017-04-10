<!DOCTYPE html>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="common/common-taglibs.jsp"%>
<html>
	<head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>风险因素 | 运行控制风险管理系统</title>
	    
	    <link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">
	    <link href="${ctx}/css/font-awesome.min.css" rel="stylesheet">
	    <link href="${ctx}/css/custom.css" rel="stylesheet">
	    <link href="${ctx}/css/animate.css" rel="stylesheet">
	    <link href="${ctx}/css/admin/style.css" rel="stylesheet">
	    <link href="${ctx}/css/awesome-bootstrap-checkbox.css" rel="stylesheet">
		<!-- tree -->
		<link rel="stylesheet" href="${ctx}/orgchart/css/normalize.css" />
		<link rel="stylesheet" href="${ctx }/orgchart/css/jquery.orgchart.css">
		<link rel="stylesheet" href="${ctx }/orgchart/css/style.css">
		
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
			.table > thead > tr > th {
    			border-bottom: 0px solid #DDDDDD;
    		}
	    </style>
	</head>
	<body>
    	<div id="wrapper">
			<jsp:include page="left-menu.jsp"/>
        	<div id="page-wrapper" class="gray-bg" id="meanbody">
				<jsp:include page="top.jsp"/>
				<!-- border-bottom -->
		        <div class="wrapper wrapper-content animated fadeInRight">
		            	<!-- col-lg-12 -->
		                <div class="col-lg-12" id="leftcollg12" style="padding-right: 0px;padding-left: 0px;">
		               		<div class="ibox float-e-margins" style="height: 100%;">
			                    <div class="ibox-title" style="border-width: 0 0 0;">
			                    	<table class="table" style="margin-bottom: 0px;">
										<thead>
											<c:choose>
												<c:when test="${not empty resultMapList}">
													<c:forEach items="${resultMapList}" var="data">
							                            <tr>
							                                <th>航班号：${data.FLT_NO}</th>
							                                <th>机型：${data.FLIGHT_TYPE}</th>
							                                <th>航班编号：${data.FLIGHT_CODE}</th>
															<th>机组成员：${data.AIR_MEMBER}</th>
															<th>日期：${data.START_TIME}</th>
															<th>起降机场：${data.AIRPORT_START_END}</th>
															<th>起降时刻：${data.TIME_START_END}</th>
															<th>
																<a href="javascript:;" onclick="javascript:location.reload();">刷新</a>
																<a href="javascript:;" onclick="javascript:history.go(-1);">返回</a>
															</th>
							                            </tr>
					                           		 </c:forEach>
												</c:when>
												<c:otherwise>
													<tr>
														<td colspan="6" style="text-align: center;">No Data</td>
													</tr>
												</c:otherwise>
											</c:choose>
										</thead>
									</table>
			                    </div>
		                    	<div class="ibox-content scrollbar" style="height: 100%;overflow: auto;padding: 0;">
		                    	
		                    		<div id="chart-container" style="background-color: #fff;"></div>
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
	    <!-- tree -->
	    <script type="text/javascript" src="${ctx }/orgchart/js/html2canvas.js"></script>
		<script type="text/javascript" src="${ctx }/orgchart/js/jquery.orgchart.js"></script>
	    
		<script type="text/javascript">
			$(function(){
				$('#leftcollg12').css('height',$(window).height()-180+"px"); //115
				
				'use strict';
		
					$('#chart-container').orgchart({
					  'data' : '${ctx}/result/newTree.do?fltNo=${fltNo}',
					  'depth': 100,
					  'nodeTitle': 'name',
					  'nodeContent': 'title',
					  'createNode': function($node, data) {
						if(data.result == '低'){
							$node.children(".title").css({'background': '#4AACE1'});
							$node.children(".content").css({'background': '#4AACE1', 'color':'#def0f9'});
						}
						
						if(data.result == '中'){
							$node.children(".title").css({'background': '#fff800'});
							$node.children(".content").css({'background': '#fff800', 'color':'#def0f9'});
						}
						
						if(data.result == '高'){
							$node.children(".title").css({'background': '#ff0000'});
							$node.children(".content").css({'background': '#ff0000', 'color':'#def0f9'});
						}
						
						if(data.name != '“人”机组风险要素（C）' && data.name != '“环”运行环境要素（E）' && data.name != '“机”航空器状态风险要素（A）' && 
								data.name != '风险架构' && data.name != '机场风险要素' && data.name != '航路风险要素' &&
								data.name != 'MEL项' && data.name != '航空器自身状态及情况' && data.name != '航空器属性' &&
								data.name != '机组经验能力' && data.name != '机组配合程度' && data.name != '机组压力程度'){
							$node.children(".title").css({'white-space': 'normal','width':'30px','line-height':'16px','height':'190px'});
						}
						
						if(data.name == 'PBN能力'){
							$node.children(".title").css({'text-indent': '0.1px'});
						}
					  }
					});
			});
	    </script>
	</body>
</html>