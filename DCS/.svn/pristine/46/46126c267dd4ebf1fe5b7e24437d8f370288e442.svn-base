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
	    <link rel="shortcut icon" href="${ctx}/mages/ico.png">
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
	    </style>
	</head>
	<body>
    	<div id="wrapper">
			<jsp:include page="../left-menu.jsp"/>
        	<div id="page-wrapper" class="gray-bg" id="meanbody">
				<jsp:include page="../top.jsp"/>
		        <div class="wrapper wrapper-content animated fadeInRight">
	                <div class="col-lg-12" id="_collg12" style="background-color: #fff;">
	                    <div class="ibox float-e-margins">
	                    	<div class="ibox float-e-margins">
		                    	<div class="ibox-title" style="border-width: 0 0 0;">
			                        <div class="ibox-tools" style="text-align: left;font-size: 16px;">
			                        	<strong>通知报文</strong>
			                        </div>
		                    	</div>
								<div class="ibox-content">
									<form class="form-horizontal">
										<p></p>
										<div class="form-group"><label class="col-lg-2 control-label">通知报文</label>
											<div class="col-lg-10">
												<textarea id="noticeInfo" placeholder="请填入通知报文" class="form-control" rows="10"></textarea>
												<span class="help-block m-b-none">通知报文是必填项</span>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-4 col-sm-offset-2">
												<button class="btn btn-white" type="button">取消</button>
												<button class="btn btn-primary" type="button" id="submit">保存</button>
											</div>
										</div>
									</form>
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
		<script type="text/javascript">
			$(function(){
				$('#_collg12').css('height',$(window).height()-120+"px");
                //保存按钮
                $('#submit').click(function () {
                    $('#submit').attr('disabled',"true");
                    var noticeInfo = $('#noticeInfo').val();
                    $.ajax({
                        url:'${ctx}/notice/addNoticeMessage.do',
                        data: {noticeInfo : noticeInfo},
                        type:'post',
                        cache:false,
                        dataType:'json',
                        success:function(data) {
                            alert('添加通知报文成功！');
                            $('#submit').removeAttr('disabled');
                        }
                    });
                });
			});
	    </script>
	</body>
</html>