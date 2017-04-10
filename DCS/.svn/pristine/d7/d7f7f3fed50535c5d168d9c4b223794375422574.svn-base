<!DOCTYPE html>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="../common/common-taglibs.jsp"%>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>运行控制风险管理系统</title>
		<link href="${ctx}/css/bootstrap.min.css" rel="stylesheet">
		<link href="${ctx}/css/font-awesome.min.css" rel="stylesheet">
		<link href="${ctx}/css/custom.css" rel="stylesheet">
		<link href="${ctx}/css/animate.css" rel="stylesheet">
		<link href="${ctx}/css/admin/style.css" rel="stylesheet">
		<link href="${ctx}/css/awesome-bootstrap-checkbox.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="${ctx}/zTree/css/zTreeStyle.css">
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
			table {
				margin-top: 20px;
			}
			th {
				text-align: center;
			}
			input{
				border:0px;
			}
			input:focus{
				border:1px solid #e7eaec;;
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
		                        	<strong>终端要素</strong>
		                        </div>
		                    </div>
		                    <div class="ibox-content scrollbar" style="height: 100%;overflow: auto;">
								<div class="row">
									<div class="col-sm-4 b-r">
										<ul id="terminalTree" class="ztree"></ul>
									</div>
									<div class="col-sm-6">
										<div id="terminalContent"></div>
										<div id="tableContent" style="display: none; text-align: center;">
											<table class="table">
												<thead>
												<tr>
													<th width="" colspan="2" style="border:0px;"></th>
													<th width="100px" colspan="3" style="border:0px;">C2 机组间配合程度</th>
												</tr>
												
												<tr>
													<th style="width:10%;border:0px;border:0px;"></th>
													<th style="width:10%;border:0px;border:0px;"></th>
													<th style="width:27%;border:0px;border:0px solid #e7eaec;"></th>
													<th style="width:27%;border:0px;border:0px solid #e7eaec;"></th>
													<th style="width:27%;border:0px;border:0px solid #e7eaec;"></th>
												</tr>
												</thead>
												<tbody>
												<tr>
													<th style="width:20px;border:0px;border:0px;border-bottom:1px solid #e7eaec;">T3</th>
													<th style="width:20px;border:0px;border:0px;border-bottom:1px solid #e7eaec;border-right:1px solid #e7eaec;">Low</th>
													<th style="width:50px;border:0px;border:0px solid #e7eaec;">New</th>
													<th style="width:50px;border:0px;border:0px solid #e7eaec;">Moderate</th>
													<th style="width:50px;border:0px;border:0px solid #e7eaec;">Experienced</th>
												</tr>
												<tr>
													<th style="border:0px;"></th>
													<th style="border:0px;">Poor</th>
													<td style="border:1px solid #e7eaec;"><input value="10" style="width: 30px;text-align: center;"></td>
													<td style="border:1px solid #e7eaec;"><input value="8" style="width: 30px;text-align: center;"></td>
													<td style="border:1px solid #e7eaec;"><input value="7" style="width: 30px;text-align: center;"></td>
												</tr>
												<tr>
													<th style="border:0px;">T2</th>
													<th style="border:0px;">Mid</th>
													<td style="border:0px;border:1px solid #e7eaec;">
														<input value="6" style="width: 30px;text-align: center;"></td>
													<td style="border:0px;border:1px solid #e7eaec;">
														<input value="5" style="width: 30px;text-align: center;"></td>
													<td style="border:0px;border:1px solid #e7eaec;">
														<input value="5" style="width: 30px;text-align: center;">
													</td>
												</tr>
												<tr>
													<th style="border:0px;"></th>
													<th style="border:0px;">Ideal</th>
													<td style="border:0px;border:1px solid #e7eaec;">
														<input value="5" style="width: 30px;text-align: center;">
													</td>
													<td style="border:0px;border:1px solid #e7eaec;">
														<input value="4" style="width: 30px;text-align: center;">
													</td>
													<td style="border:0px;border:1px solid #e7eaec;">
														<input value="4" style="width: 30px;text-align: center;">
													</td>
												</tr>
												
												</tbody>
											</table>
											
											<div>
												<button class="btn btn-sm btn-primary" onclick="changeVal(this,1);">低</button>
												<button class="btn btn-sm btn-primary" onclick="changeVal(this,2);">中</button>
												<button class="btn btn-sm btn-primary" onclick="changeVal(this,3);">高</button>
												
											</div>
											
										</div>
										
									</div>
									
									<div class="" style="margin-top:140px; font-weight: bold;">
										<p>T2：技术级别组合</p>
										<p>T3：机组英文程度</p>
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
		<script src="${ctx}/js/inspinia.js"></script>
		<!-- 绿条 -->
		<script src="${ctx}/js/pace.min.js"></script>
		<script type="text/javascript" charset="utf-8" src="${ctx}/zTree/js/jquery.ztree.core.min.js"></script>
		<script type="text/javascript">
			function changeVal(_this, flag) {
				$(_this).attr('disabled',"true");
				$.ajax({
                    url:'${ctx}/result/changeTserminalVal.do',
                    data: {flag : flag},
                    type:'post',
                    cache:false,
                    dataType:'text',
                    success:function(data) {
                        if(data == "1"){
	                    	alert('操作成功！');
                        }else{
	                    	alert('操作失败！');
                        }
                        $(_this).removeAttr('disabled');
                    }
                });
			}
		
			$(function(){
				$('#_collg12').css('height',$(window).height()-170+"px");
			});
		    var zTreeObj;
		    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
		    var setting = {
		        async : {
		            enable : true,
		            url : "${ctx}/result/tree.do"
		        },
		        data : {
		            simpleData : {
		                enable : true,
		                idKey : "riskId",
		                pIdKey : "pid",
		                rootPId : 0
		            }
		        },callback: {
		            onClick: zTreeOnClick
		        }
		    };
		    $(document).ready(function(){
		        zTreeObj = $.fn.zTree.init($("#terminalTree"), setting);
		    });
		
		    //点击选中节点操作
		    function zTreeOnClick(event, treeId, treeNode) {
				if (treeNode.isEndNode == 1) {
					 window.location.href = "${ctx}/quota/toManagePage.do?riskId="+treeNode.riskId;
		        } else {
		            //$('#terminalContent').html('');
		            window.location.href = "${ctx}/terminal/displayTerminalTree.do?flag="+treeNode.childNodeNumber;
				}
		    }
		    
		    window.onload = function (){
		    	$('#tableContent').css('display', 'block');
		    }
		</script>
	</body>
</html>