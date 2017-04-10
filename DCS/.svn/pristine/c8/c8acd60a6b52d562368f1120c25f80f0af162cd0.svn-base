$(document).ready(function(){

/*菜单展开与收缩*/
	$("#topbutton").toggle(
		function(){
			$("#iconmenu").css("width","180px");
			$("#meanbody").css("margin-left","180px");
		},
		function(){
			$("#iconmenu").css("width","60px");
			$("#meanbody").css("margin-left","60px");
		}
		);

	/*顶部时间空间*/
	var myDate = new Date();
	year = myDate.getFullYear();
	month = myDate.getMonth() + 1;
	day = myDate.getDate();
	hours = myDate.getHours();
	minutes = myDate.getMinutes();
	seconds = myDate.getSeconds();
	time = year + "年" + month + "月" + day + "日" + "" + hours + ":" + minutes + ":" + seconds;
	$("#headtime").html(time);

	/*首页色块鼠标移入事件*/
	$(".big,.small,.width").mouseover(function(){
           $(this).css("border","2px solid #e2bad7");
	});
	$(".big,.small,.width").mouseout(function(){
           $(this).css("border","none");
	});

/*此贴点击修改iframe链接*/

    $("#pinzhi").click(function(){
    	$(".click_to").css("display","block");
    	$("#iframe").attr("src","includ/QD_ETL.html");
    });
    $("#fengkong").click(function(){
    	$(".click_to").css("display","block");
    	$("#iframe").attr("src","includ/QD_Eval.html");
    });
        $("#floor").click(function(){
    	$(".click_to").css("display","block");
    	$("#iframe").attr("src","includ/QD_Matrix.html");
    });
        $("#zhuti").click(function(){
    	$(".click_to").css("display","block");
    	$("#iframe").attr("src","includ/QD_monitor.html");
    });
        $("#zuzhijiagou").click(function(){
    	$(".click_to").css("display","block");
    	$("#iframe").attr("src","includ/QD_Org.html");
    });
        $("#zhongduan").click(function(){
    	$(".click_to").css("display","block");
    	$("#iframe").attr("src","includ/QD_terminal.html");
    });
        $("#home").click(function(){
    	$(".click_to").css("display","none");
    	$("#iframe").attr("src","");
    });
//


});