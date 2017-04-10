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
									<div class="col-sm-3 b-r">
										<ul id="treeview" class="ztree"></ul>
									</div>
									<div class="col-sm-9">
										<!-- t1 -->
										<div class="ibox float-e-margins">
					                    	<div class="ibox-title" style="border-width: 0 0 0;">
						                        <div class="ibox-tools" style="text-align: left;font-size: 16px;">
						                        	<strong>${riskFactors.name }</strong>
						                        </div>
					                    	</div>
			                    			<div class="ibox-content scrollbar" style="height: 100%;overflow: auto;"<c:if test="${empty myFormulaDef.riskId}">style="display: none;"</c:if>>
												<table class="table">
													<tbody>
		        										<tr>
										            		<td colspan="5">上次更新：admin|2017-01-09 22:30</td>
										            		<td colspan="1"> 
																<button class="btn btn-sm btn-primary  m-t-n-xs" type="submit"><strong>锁定</strong></button>&nbsp;&nbsp;&nbsp;
																 <button class="btn btn-sm btn-primary  m-t-n-xs" type="reset"><strong>保存</strong></button>&nbsp;&nbsp;&nbsp;
																 <button class="btn btn-sm btn-primary  m-t-n-xs" type="reset"><strong>发布</strong></button>&nbsp;&nbsp;&nbsp;
										            		</td>
									            		</tr>
		        										<tr>
										            		<td>有效期</td>
										            		<td>
										            			<select class="form-control m-b" style="height:30px;">
										            				<option>长期有效</option>	
										            				<option>时间戳</option>
										            			</select>
										            		</td>
										            		<td align="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间范围 &nbsp;&nbsp;&nbsp;</td>
										            		<td>
										            			<div class="form-group" id="data_5">
										                        <div class="input-daterange input-group" id="datepicker">
										                            <input type="text" class="input-sm form-control" name="start" style="width:120px" value="05/14/2016"/>
										                            <span class="input-group-addon" style="width:50px;">至</span>
										                            <input type="text" class="input-sm form-control" name="end" style="width:120px" value="05/22/2017" />
										                        </div>
										                    </div>
										            		</td>
										            	</tr>	
										            	<tr>
										            		<td>
										            		说明	
										            		</td>	
										            		<td colspan="5">
										            			<textarea cols="100"></textarea>	
										            		</td>
										            	</tr>
									            	</tbody>
	        									</table>
	        								</div>
        								</div><!-- t1 -->
        								
        								<!-- t3 -->
        								<div class="ibox float-e-margins">
					                    	<div class="ibox-title" style="border-width: 0 0 0;">
						                        <div class="ibox-tools" style="text-align: left;font-size: 16px;">
						                        	<div style="float: left;"><strong>风险识别规则</strong></div>
									                <div style="float:right;margin-right:0px;">
										               	<a class="dropdown-toggle" href="javascript:showAddWindow()" title="新增">
										                 	<i class="fa fa-plus-square"  ></i>
										                 </a>
										            </div>
						                        </div>
					                    	</div>
        								</div>
        								<!-- t3 -->
        								<!-- t4 -->
        								<div class="float-e-margins">
						                    	<div class="ibox-title" style="border-width: 0 0 0;">
							                        <div class="ibox-tools" style="text-align: left;font-size: 16px;">
							                        	<div style="float: left;">
							                        		<strong>
							                        		低-风险识别-规则定义&nbsp;&nbsp;&nbsp;&nbsp;</strong>
							                        		临界值&nbsp;<input type="text" name="lingjiezhi" maxlength="3" value="1" style="width:40px"/>&nbsp;-&nbsp;<input type="text" name="lingjiezhi" maxlength="3" value="4" style="width:40px"/>
							                        		
							                        	</div>
							                        </div>
						                    	</div>
				                    			<div class="ibox-content scrollbar" style="height: 100%;overflow: auto;">
				                    				<table style="margin: 0px">
				                    				<tr>
				                    				<td>
														<table class="table" style="margin: 0px">
															<thead>
																<tr>
																	<th colspan="4"  align="left">用例1
																	<div style="float:right;margin-right:0px;">
																			<a class="dropdown-user" title="修改"  
																			href="javascript:editScreeningResults({value:'低',objs:[{front:'3',argFun:'',condition:'<',type:'FIXED',back:'6'},{front:'5',argFun:'',condition:'<',type:'FIXED',back:'5'},{front:'6',argFun:'',condition:'<',type:'FIXED',back:'5'},{front:'7',argFun:'',condition:'<',type:'FIXED',back:'5'},{front:'8',argFun:'',condition:'<',type:'FIXED',back:'5'}]})">
												                                <i class="fa fa-wrench"></i>
												                            </a>
												                            <a title="删除" href="javascript:void(0)">
												                                <i class="fa fa-times"></i>
												                            </a>
															         </div>
															        </th>
																</tr>
									                            <tr>
									                            	<th>运行参数</th>
									                                <th>对比条件</th>
									                                <th>参考值</th>
									                            </tr>
									                            <tr>
									                            	<td>风切变（WS）</td>
									                            	<td><</td>
									                            	<td>6</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>飑（SQ）</td>
									                            	<td><</td>
									                            	<td>5</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>降水</td>
									                            	<td><</td>
									                            	<td>5</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>沙尘</td>
									                            	<td><</td>
									                            	<td>5</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>火山灰</td>
									                            	<td><</td>
									                            	<td>5</td>
									                            </tr>
									                          </thead>
								                         </table>
								                         </td>
														<td style="width:28%;padding:10px;vertical-align:top;">
															缓解措施:<textarea name="" cols="35" rows="5"></textarea>
														</td>
													</tr>
												</table>
		        								</div>
	        							</div>
	        							
	        							<div class="float-e-margins">
						                    	<div class="ibox-title" style="border-width: 0 0 0;">
							                        <div class="ibox-tools" style="text-align: left;font-size: 16px;">
							                        	<div style="float: left;">
							                        		<strong>
							                        		中-风险识别-规则定义&nbsp;&nbsp;&nbsp;&nbsp;</strong>
							                        		临界值&nbsp;<input type="text" name="lingjiezhi" maxlength="3" value="5" style="width:40px"/>&nbsp;-&nbsp;<input type="text" name="lingjiezhi" maxlength="4" value="8" style="width:40px"/>
							                        		
							                        	</div>
							                        </div>
						                    	</div>
				                    			<div class="ibox-content scrollbar" style="height: 100%;overflow: auto;">
				                    				<table style="margin: 0px">
				                    				<tr>
				                    				<td>
														<table class="table" style="margin: 0px">
															<thead>
																<tr>
																	<th colspan="4"  align="left">用例1 
																		<div style="float:right;margin-right:0px;">
																				<a class="dropdown-user" title="修改"  
																				href="javascript:editScreeningResults({value:'中',objs:[{front:'3',argFun:'',condition:'>=',type:'FIXED',back:'6'},{front:'3',argFun:'',condition:'<',type:'FIXED',back:'8'},{front:'4',argFun:'',condition:'<',type:'FIXED',back:'7'},{front:'6',argFun:'',condition:'<',type:'FIXED',back:'7'},{front:'7',argFun:'',condition:'<',type:'FIXED',back:'7'},{front:'8',argFun:'',condition:'<',type:'FIXED',back:'7'}]})">
													                                <i class="fa fa-wrench"></i>
													                            </a>
													                            <a title="删除" href="javascript:void(0)">
													                                <i class="fa fa-times"></i>
													                            </a>
																         </div>
																	</th>
																</tr>
									                            <tr>
									                            	<th>运行参数</th>
									                                <th>对比条件</th>
									                                <th>参考值</th>
									                            </tr>
									                             <tr>
									                            	<td>风切变（WS）</td>
									                            	<td>>=</td>
									                            	<td>6</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>风切变（WS）</td>
									                            	<td><</td>
									                            	<td>8</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>飑（SQ）</td>
									                            	<td><</td>
									                            	<td>7</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>降水</td>
									                            	<td><</td>
									                            	<td>7</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>沙尘</td>
									                            	<td><</td>
									                            	<td>7</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">并且</td>
									                            </tr>
									                            <tr>
									                            	<td>火山灰</td>
									                            	<td><</td>
									                            	<td>7</td>
									                            </tr>
									                          </thead>
								                         </table>
														</td>
														<td style="width:28%;padding:10px;vertical-align:top;">
															缓解措施:<textarea name="" cols="35" rows="5"></textarea>
														</td>
														</tr>
										            	</tbody>
		        									</table>
		        								</div>
	        							</div>
	        							
	        							
	        							<!-- 高 -->
	        							<div class="float-e-margins">
						                    	<div class="ibox-title" style="border-width: 0 0 0;">
							                        <div class="ibox-tools" style="text-align: left;font-size: 16px;">
							                        	<div style="float: left;">
							                        		<strong>
							                        		高-风险识别-规则定义&nbsp;&nbsp;&nbsp;&nbsp;</strong>
							                        		临界值&nbsp;<input type="text" name="lingjiezhi" maxlength="3" value="9" style="width:40px"/>&nbsp;-&nbsp;<input type="text" name="lingjiezhi" maxlength="4" value="10" style="width:40px"/>
							                        		
							                        	</div>
							                        </div>
						                    	</div>
				                    			<div class="ibox-content scrollbar" style="height: 100%;overflow: auto;">
				                    				<table style="margin: 0px">
				                    				<tr>
				                    				<td>
														<table class="table" style="margin: 0px">
								                         	<thead>
															<tr>
																<th colspan="4"  align="left">用例1 
																	<div style="float:right;margin-right:0px;">
																		<a class="dropdown-user" title="修改"  
																		href="javascript:editScreeningResults({value:'高',objs:[{front:'3',argFun:'',condition:'>=',type:'FIXED',back:'7'},{front:'5',argFun:'',condition:'>',type:'FIXED',back:'7'},{front:'6',argFun:'',condition:'>',type:'FIXED',back:'7'},{front:'7',argFun:'',condition:'>',type:'FIXED',back:'7'},{front:'8',argFun:'',condition:'>',type:'FIXED',back:'7'}]})">
											                                <i class="fa fa-wrench"></i>
											                            </a>
											                            <a title="删除" href="javascript:void(0)">
											                                <i class="fa fa-times"></i>
											                            </a>
														            </div>
																</th>
															</tr>
								                            <tr>
								                            	<th>运行参数</th>
								                                <th>对比条件</th>
								                                <th>参考值</th>
								                            </tr>
								                            <tr>
									                            	<td>风切变（WS）</td>
									                            	<td>>=</td>
									                            	<td>7</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">或者</td>
									                            </tr>
									                            <tr>
									                            	<td>飑（SQ）</td>
									                            	<td>></td>
									                            	<td>7</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">或者</td>
									                            </tr>
									                            <tr>
									                            	<td>降水</td>
									                            	<td>></td>
									                            	<td>7</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">或者</td>
									                            </tr>
									                            <tr>
									                            	<td>沙尘</td>
									                            	<td>></td>
									                            	<td>7</td>
									                            </tr>
									                            <tr>
									                            	<td colspan="3">或者</td>
									                            </tr>
									                            <tr>
									                            	<td>火山灰</td>
									                            	<td>></td>
									                            	<td>7</td>
									                            </tr>
								                          </thead>
								                         </table> 
														</td>
														<td style="width:28%;padding:10px;vertical-align:top;">
															缓解措施:<textarea name="" cols="35" rows="5"></textarea>
														</td>
														</tr>
										            	</tbody>
		        									</table>
		        								</div>
	        							</div>
        								<!-- t4 -->
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
		<!-- m -->
	      <div id="modal-form" class="modal fade" aria-hidden="true">
	          <div class="modal-dialog" >
	              <div class="modal-content"  style="width:900px;float:left;">
	                  <div class="modal-body">
	                  		<!-- start -->
					<div class="col-lg-6" style="width:820px;float:left;">
						<form id="editFrom" action="" method="POST">
								<input type="hidden" id="rulesId" name="rulesId" value="" />
								<input type="hidden" id="formulaDefId" name="formulaDefId" value="${biFormulaDef.formulaDefId }" />
					                <div class="ibox float-e-margins">
					                    <div class="ibox-title">
					                        <h5>
					                        	满足以下
					                        	<select>
					                        		<option>全部</option>
					                        		<option>任意</option>
					                        	</select>
					                        </h5>&nbsp;风险分析结果为:
					                        	<select id="setValueSelect" name="value">
					                        		<option value="高">高</option>
					                        		<option value="中">中</option>
					                        		<option value="低">低</option>
					                        	</select>
					                        	<br/>
					                    </div>
					                    <div class="row">
					                    	<div class="col-lg-6" style="width:100%;">
							                    <div class="ibox-content"  >
													<table id="editTable" class="table table-striped table-hover"></table>
						                        	<div class="pull-right">
														<button class="btn btn-sm btn-primary  m-t-n-xs" type="submit" onclick="javascript:addScreeningResults();"><strong>确认</strong></button>
														 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
														 <button class="btn btn-sm btn-primary  m-t-n-xs" type="reset" onclick="javascript:$('#modal-form').modal('hide');"><strong>取消</strong></button>
														&nbsp;&nbsp;&nbsp;
						                        	</div>
						                        	&nbsp;
							                   </div>
					                    </div>
					                </div>
					            </div>
					      	</form>
					     </div>
					</div>
                  </div>
              	</div>
              </div>
		<!-- m -->
		
		
		
		<!-- Mainly scripts -->
		<script src="${ctx}/js/jquery-2.1.1.js"></script>
		<script src="${ctx}/js/bootstrap.min.js"></script>
		<script src="${ctx}/js/jquery.metisMenu.js"></script>
		<script src="${ctx}/js/jquery.slimscroll.min.js"></script>
		<script src="${ctx}/includ/js/plugins/datapicker/bootstrap-datepicker.js"></script>
		<script src="${ctx}/js/inspinia.js"></script>
		<!-- 绿条 -->
		<script src="${ctx}/js/pace.min.js"></script>
		<script type="text/javascript" charset="utf-8" src="${ctx}/zTree/js/jquery.ztree.core.min.js"></script>
		<script type="text/javascript">
		var zTreeObj;
        	$(document).ready(function(){
        		
    			$('#_collg12').css('height',$(window).height()-170+"px");
        		
            	initClick();
            	var defaultData = [
			        <c:forEach items="${terminalTypeList}" var="terminalType">
			        	{
			        		href:"${terminalType.terminalTypeId}",
			        		text:"${terminalType.name}",
			        		icon: 'glyphicon glyphicon-warning-sign',
			        		nodes:[
								<c:forEach items="${terminalType.childElements}" var="childEle" varStatus="status">
									<c:if test="${status.index ne '0'}">,</c:if>
									{
										href:"${childEle.terminalTypeId}",
						        		text:"${childEle.name}",
						        		icon: 'glyphicon glyphicon-warning-sign',
						        		nodes:[
						   					<c:forEach items="${childEle.riskFactors}" var="riskFactor" varStatus="rstatus">
						   						<c:if test="${rstatus.index ne '0'}">,</c:if>
						   						{
						   							id:"${riskFactor.riskId}",
						   							href:"/rm/test/${riskFactor.riskId}",
						   			        		text:"${riskFactor.name}",
						   			        		icon: 'glyphicon glyphicon-warning-sign'
						   						}
						   					</c:forEach>
						           		      ]
									}
								</c:forEach>
			        		      ]
			        	}
			        </c:forEach>
			];
            
            
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
		        onAsyncSuccess: zTreeOnAsyncSuccess,//异步加载成功的fun    
                onAsyncError: zTreeOnAsyncError,   //加载错误的fun 
                onClick: zTreeOnClick
		        }
		    };
		    zTreeObj = $.fn.zTree.init($("#treeview"), setting);
        	});
        	
        	function zTreeOnAsyncSuccess(event, treeId, treeNode){
            	var node = zTreeObj.getNodeByParam("riskId","${biFormulaDef.riskId}");
            	zTreeObj.selectNode(node); 
            }
            function zTreeOnAsyncError(event, treeId, treeNode){
            }
	      	//点击选中节点操作
		    function zTreeOnClick(event, treeId, treeNode) {
				if (treeNode.isEndNode == 1) {
		            window.location.href = "${ctx}/quota/toManagePage.do?riskId="+treeNode.riskId;
		        } else {
		        	window.location.href = "${ctx}/terminal/displayTerminalTree.do?riskId="+treeNode.riskId;
				}
		    };
        
			function initClick(){
				$(".up").click(function() {upFun(this);}); 
				$(".down").click(function() {  downFun(this); }); 
				$(".deleteRow").click(function() { deleteRowFun(this); }); 
				$(".addRow").click(function() { addRowFun(this); });
			};
        
	        $('#data_5 .input-daterange').datepicker({
	                keyboardNavigation: false,
	                forceParse: false,
	                autoclose: true
	        });
	        
            function upFun(obj){
            	var $up = $(obj); 
  						var len = $up.length;
  						var $tr = $(obj).parents("tr"); 
					    if ($tr.index() != len - 1) { 
					      $tr.fadeOut().fadeIn(); 
      					$tr.prev().before($tr);  
					    }
  						
            };
            
            function downFun(obj){
            	var $down = $(obj); 
  						var len = $down.length;
  						var $tr = $(obj).parents("tr"); 
					    if ($tr.index() != len + 1) { 
					      $tr.fadeOut().fadeIn(); 
					      $tr.next().after($tr); 
					    }
  						
            };
            
            function deleteRowFun(obj){
            	var $tr = $(obj).parents("tr"); 
   				$tr.remove(); 
            };
            
            function addRowFun(obj,values){
            	if(values==null)values={};
            	var rowCount = $("#editTable").attr("rowCount");
            	if(rowCount==""||rowCount==null){
            		rowCount = 0;
            		 $("#editTable").attr("rowCount",rowCount);
            	}else{
            		rowCount = parseInt(rowCount+1);
            		$("#editTable").attr("rowCount",rowCount);
            	}
            	
            	var addtr = "<tr>"
            		+"<td>"
	    			+"<select id=\"argsName\" autocomplete=\"off\" name=\"screeningResultsList["+rowCount+"].front\" >"
	    			+"<option value=\"arg[0]\" "+(values.front==1?"selected='selected'":"")+">技术等级组合</option>"
	    			+"<option value=\"arg[1]\" "+(values.front==2?"selected='selected'":"")+">机组人数</option>"
	    			+"<option value=\"arg[2]\" "+(values.front==3?"selected='selected'":"")+">风切变（WS）</option>"
	    			+"<option value=\"arg[3]\" "+(values.front==4?"selected='selected'":"")+">飑（SQ）</option>"
	    			+"<option value=\"arg[4]\" "+(values.front==5?"selected='selected'":"")+">雷暴（TS）</option>"
	    			+"<option value=\"arg[5]\" "+(values.front==6?"selected='selected'":"")+">降水</option>"
	    			+"<option value=\"arg[6]\" "+(values.front==7?"selected='selected'":"")+">沙尘</option>"
	    			+"<option value=\"arg[7]\" "+(values.front==8?"selected='selected'":"")+">火山灰</option>"
	    			+"<option value=\"arg[8]\" "+(values.front==9?"selected='selected'":"")+">航行通告</option>"
	    			+"</select>"
	    		+"</td>"
	    		+"<td>"
	    		+"<select name=\"screeningResultsList["+rowCount+"].argFun\" >"
	            		+"<option value=\"\">-无-</option>"
	            		<c:forEach items="${sort }" var="s">
	            			+"<option value=\"${s.eName }\" >${s.cName }</option>"
	            		</c:forEach>
	            +"</select>"
	            +"</td>"
                        +"<td>"
                        	+"<select name=\"screeningResultsList["+rowCount+"].condition\">"
                        		+"<option "+(values.condition=='>='?"selected='selected'":"")+">=</option>"
                        		+"<option "+(values.condition== '>'?"selected='selected'":"")+">></option>"
                        		+"<option "+(values.condition=='>='?"selected='selected'":"")+">>=</option>"
                        		+"<option "+(values.condition== '<'?"selected='selected'":"")+"><</option>"
                        		+"<option "+(values.condition=='<='?"selected='selected'":"")+"><=</option>"
                        		+"<option "+(values.condition=='!='?"selected='selected'":"")+">!=</option>"
                        	+"</select>"
                        +"</td>"
                        +"<td>"
	                    	+"<select name=\"screeningResultsList["+rowCount+"].type\">"
	                    		+"<option value='FIXED' "+(values.type=='FIXED'?"selected='selected'":"")+">固定值</option>"
	                    		+"<option value='ATTR' "+(values.type=='ATTR'?"selected='selected'":"")+">属性</option>"
	                    		+"<option value='ARGS' "+(values.type=='ARGS'?"selected='selected'":"")+">变量</option>"
	                    	+"</select>"
	                    +"</td>"
                        +"<td>"
                        	+"<input type='text' value='"+(values.back==null?"":values.back)+"' name=\"screeningResultsList["+rowCount+"].back\"  style='width:80px'  />"
                        +"</td>"
                        +"<td>"
                        	+"<a href='#' onclick='addRowFun(this)'>新增</a>	"
                        	+"&nbsp;"
                        	+"<a href='#'  onclick='deleteRowFun(this)'>删除</a>	"
                        	+"&nbsp;"
                        	+"<a href='#' class='up' onclick='upFun(this)'>上移</a>"
                        	+"&nbsp;"
                        	+"<a href='#' class='down' onclick='downFun(this)'>下移</a>"
                        +"</td>"
                    +"</tr>";
            	 if(obj==null){
            		 $("#editTable").append(addtr);
            	 }else{
            		 $(obj).parents("tr").after(addtr);
            	 }
            };
        	
			function changeType(val,id){
				var quotaDef = ${quotaDef};
				document.getElementById(id).options.length=0;
				for (var i = 0; i < quotaDef.length; i++) {
					if(val == quotaDef[i].tableName){
						 document.getElementById(id).options.add(new Option(quotaDef[i].fieldNameCn,quotaDef[i].fieldName));
					}
				}
				
				
			};
			
			$(function(){
				<c:if test="${!empty biFormulaDef.valueTable}">
					changeType('${biFormulaDef.valueTable}','quotaDefSelect');//初始化明细
					$("#quotaDefSelect").val('${biFormulaDef.valueField}');
					
					$("#valueCount").val('${biFormulaDef.getRowCount}');
					changeArgCount('${biFormulaDef.getRowCount}');
				</c:if>
			});
			
			
			
			function changeArgCount(val){
				document.getElementById("argsName").options.length=0;
				for (var i = 0; i < parseInt(val); i++) {
					document.getElementById("argsName").options.add(new Option("第"+(i+1)+"条数据","arg["+i+"]"));
				}
			}
			
			function addScreeningResults(){
				$("#editFrom").ajaxSubmit({
				    type: 'post', // 提交方式 get/post
				    url: '${ctx}/quota/saveScreeningResults.do', // 需要提交的 url
				    success: function(data) {
				    	$('#modal-form').modal('hide');
				    	location.reload();
				    }
				});
			}
			
			function deleteScreeningResults(rulesId){
				$.get('${ctx}/quota/deleteScreeningResults.do?rulesId='+rulesId,function(data,status){
					location.reload();
				  });
			}
			
			function editScreeningResults(obj){
				$("#editTable").html("<tbody></tbody>");
				$("#setValueSelect").val(obj.value);
				for (var i = 0; i < obj.objs.length; i++) {
					addRowFun(null,obj.objs[i]);
				}
				$('#modal-form').modal({show:true});
			}
			
			
			function showAddWindow(){
				$('#modal-form').modal({show:true});
				$("#rulesId").val();
				$("#editTable").html("<tbody></tbody>");
				addRowFun();
			}
		</script>
	</body>
</html>