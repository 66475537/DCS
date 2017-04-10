<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<%@ include file="common/common-taglibs.jsp"%>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>运行控制风险管理系统</title>
		<link rel="stylesheet" type="text/css" href="${ctx}/zTree/css/zTreeStyle.css">
		<script type="text/javascript" charset="utf-8"  src="${ctx}/zTree/js/jquery-1.4.4.min.js"></script>
		<script type="text/javascript" charset="utf-8"  src="${ctx}/zTree/js/jquery.ztree.core.min.js"></script>
		
	</head>
	<body>
		
		<div class="zTreeDemoBackground left">
			<ul id="treeDemo" class="ztree"></ul>
		</div>
		
		<script type="text/javascript">
		
			function setFontCss1(treeId, treeNode) {
				var background;
				if (treeNode.riskGrade == "低") {
					background = {
						background : "#0092ff"
					};

				} else if (treeNode.riskGrade == "中") {
					background = {
						background : "#fff800"
					};

				} else if (treeNode.riskGrade == "高") {
					background = {
						background : "#ff0000"
					};

				}
				return background;
			}
			function setFontCss(treeId, treeNode) {
				var color;
				if (treeNode.riskGrade == "低") {
					color = {
						color : "#0092ff"
					};

				} else if (treeNode.riskGrade == "中") {
					color = {
						color : "#fff800"
					};

				} else if (treeNode.riskGrade == "高") {
					color = {
						color : "#ff0000"
					};

				}
				return color;
			}
			var setting = {
				async : {
					enable : true,
					url : "${ctx}/result/tree.do"
				},
				/* view : {
					fontCss : setFontCss
				}, */
				data : {
					simpleData : {
						enable : true,
						idKey : "riskId",
						pIdKey : "pid",
						rootPId : 0
					}
				}
			};
			$(document).ready(function() {
				$.fn.zTree.init($("#treeDemo"), setting);
			});
		</script>
	</body>
</html>