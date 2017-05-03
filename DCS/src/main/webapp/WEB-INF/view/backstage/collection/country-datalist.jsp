<%@ page language="java" pageEncoding="UTF-8" contentType="text/html;charset=utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<!--[if lt IE 9]>
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/html5shiv.js"></script>
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/respond.min.js"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="${ctx}/css/H-ui.admin_v3.0/static/h-ui/css/H-ui.min.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/css/H-ui.admin_v3.0/static/h-ui.admin/css/H-ui.admin.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/css/H-ui.admin_v3.0/lib/Hui-iconfont/1.0.8/iconfont.css" />
<link rel="stylesheet" type="text/css" href="${ctx}/css/H-ui.admin_v3.0/static/h-ui.admin/skin/default/skin.css" id="skin" />
<link rel="stylesheet" type="text/css" href="${ctx}/css/H-ui.admin_v3.0/static/h-ui.admin/css/style.css" />
<!--[if IE 6]>
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/DD_belatedPNG_0.0.8a-min.js" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<title>收录百度国家内容</title>

<style>
.pagination {
	margin: 30px 0 30px;
	padding: 0;

	list-style: none;
	line-height: 25px;
	word-spacing: -1px;
}

.pagination div, .pagination a {
	display: inline-block;

	height: 25px;
	margin-right: 3px;
	padding: 0 9px;

	background: #fafafa;

	border-radius: 2px;
	border: 1px solid #e2e2e2;
	
	text-shadow: 0 1px 0 white;	
	font-family: 'OpenSansSemiboldRegular';

	text-align: center;
	font-size: 12px;
	color: #424346;

	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}

.pagination a:hover {
	background: #04BFEA;
	border: 1px solid #2899B3;

	box-shadow: 0 1px 3px rgba(0,0,0,0.1);
	
	text-shadow: 0 -1px 0 #17d4ff;
	color: #fff;
}

.pagination a.active {
	background: #f5f5f5;
	box-shadow: inset 0 1px 2px rgba(0,0,0,0.07);
	border-color: #d9d9d9;
}

.pagination a.active:hover {
	text-shadow: 0 1px 0 white;	
	color: #424346;
}

.pagination a.active, .pagination div {
	cursor: default;
}

.pull-right {
  float: right;
}

.pagination ul > li{
display: inline;
}

/*-------------------------------------------------*/
</style>
</head>
<body>
<nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 收录百度 <span class="c-gray en">&gt;</span> 国家内容 <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
<form action="${ctx }/collection/toCountryDataList" id="Form" name="Form" method="post">
<div class="page-container">
	<div class="text-c"> 查询条件：
		<input type="text" class="input-text" style="width:250px" placeholder="输入国家中文名、英文名" id="name" name="name">
		<button type="submit" class="btn btn-success radius" id="" name=""><i class="Hui-iconfont">&#xe665;</i> 搜国家</button>
	</div>
	<div class="cl pd-5 bg-1 bk-gray mt-20">
	</div>
	<div class="mt-20">
	<table class="table table-border table-bordered table-hover table-bg table-sort">
		<thead>
			<tr class="text-c">
				<th width="50">&nbsp;</th>
				<th width="100">采集项ID-名称</th>
				<th width="200">采集项表达式</th>
				<th width="120">国家-中文名</th>
				<th width="260">国家-英文名</th>
				<th width="">采集内容</th>
				<th width="130">采集时间</th>
				<th width="100">操作</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach items="${countryDetailItemList }" var="cd"  varStatus="status">
			<tr class="text-c">
				<td>${status.index}</td>
				<td class="text-l">${cd.cdid }-${cd.collection }</td>
				<td class="text-l">${cd.expression }</td>
				<td>${cd.cName }</td>
				<td>${cd.eName }</td>
				<td class="text-l">${cd.detail }</td>
				<td>${cd.createTime }</td>
				<td class="td-manage">
<!-- 					<a style="text-decoration:none" onClick="member_stop(this,'10001')" href="javascript:;" title="停用"> -->
<!-- 					<i class="Hui-iconfont">&#xe631;</i></a>  -->
<!-- 					<a title="编辑" href="javascript:;" onclick="member_edit('编辑','member-add.html','4','','510')" class="ml-5" style="text-decoration:none"> -->
<!-- 					<i class="Hui-iconfont">&#xe6df;</i></a>  -->
<!-- 					<a style="text-decoration:none" class="ml-5" onClick="change_password('修改密码','change-password.html','10001','600','270')" href="javascript:;" title="修改密码"> -->
<!-- 					<i class="Hui-iconfont">&#xe63f;</i></a>  -->
<!-- 					<a title="删除" href="javascript:;" onclick="member_del(this,'1')" class="ml-5" style="text-decoration:none"> -->
<!-- 					<i class="Hui-iconfont">&#xe6e2;</i></a></td> -->
			</tr>
			</c:forEach>
		</tbody>
	</table>
	<table>
		<tr>
			<td style="vertical-align:top;">
				<div class="pagination" style="float: right;padding-top: 0px;margin-top: 0px;width:800px">${page.pageStr}</div>
			</td>
		</tr>
	</table>
		
	</div>
</div>
</form>


<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/layer/2.4/layer.js"></script>
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/static/h-ui/js/H-ui.min.js"></script> 
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/static/h-ui.admin/js/H-ui.admin.js"></script>
<!--/_footer 作为公共模版分离出去-->

<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/My97DatePicker/4.8/WdatePicker.js"></script> 
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/datatables/1.10.0/jquery.dataTables.min.js"></script> 
<script type="text/javascript" src="${ctx}/css/H-ui.admin_v3.0/lib/laypage/1.2/laypage.js"></script>
<script type="text/javascript">
$(function(){
	$('.table-sort').dataTable({
		//"aaSorting": [[ 1, "desc" ]],//默认第几个排序
		"paging": false,
		"bStateSave": true,//状态保存
		//"iTotalDisplayRecords": 7,
		 // "iTotalRecords": 7,
		  "sEcho": "1",
		 //"aLengthMenu":[10],
		"aoColumnDefs": [
		  //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
		  {"orderable":false,"aTargets":[6]}// 制定列不参与排序
		],
		 "oLanguage" : {
			 "sInfo" : " ",
				 "sInfoFiltered":""
// 	            "sLengthMenu" : "每页显示 _MENU_ 条记录",
// 	            "sZeroRecords" : "对不起，查询不到相关数据！",
// 	            "sEmptyTable" : "表中无数据存在！",
// 	            "sInfo" : "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
// 	            "sInfoFiltered" : "数据表中共为 _MAX_ 条记录",
// 	            "sSearch" : "搜索",
// 	            "oPaginate" : {
// 	                "sFirst" : "首页",
// 	                "sPrevious" : "上一页",
// 	                "sNext" : "下一页",
// 	                "sLast" : "末页"
// 	            }
		 }
	});
	
	
});
</script> 
</body>
</html>