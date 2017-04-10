window.onload=function(){
document.getElementById("bgvideo").volume = 0;
stars();//调用星空背景函数
zd_zzt();//调用柱状图函数
guozhan();
sandiancharts1();
sandiancharts2();
sandiancharts3();
sandiancharts4();
leidatu();
document.getElementById("map").onclick=function(){
   
    document.getElementById("bgvideo").play();

}
document.getElementById("alerm_head").onclick=function(){
   
    document.getElementById("bgvideo").pause();

}
//headfunction(); //调用头部组件



}

/*使用jq循环页面内容*/

$(document).ready(function(){

 /*构造数据源*/

 var flightnamber=[
	{"number":"PN9017","state":"warning","porperty":"late"},
	{"number":"PN9012","state":"warning","porperty":"cancel"},
	{"number":"PN9013","state":"","porperty":"cancel"},
	{"number":"PN9021","state":"vip","porperty":"cancel"},
	{"number":"PN9043","state":"warning","porperty":"late"},
	{"number":"PN9054","state":"vip","porperty":"late"},
	{"number":"PN9045","state":"","porperty":"late"},
	{"number":"PN9066","state":"AOG","porperty":"late"},
	{"number":"PN9134","state":"","porperty":"late"},
	{"number":"PN9009","state":"AOG","porperty":"alternate"},
	{"number":"PN9032","state":"","porperty":"cancel"},
	{"number":"PN9034","state":"","porperty":"late"},
	{"number":"PN9078","state":"vip","porperty":"alternate"},
	{"number":"PN9040","state":"vip","porperty":"alternate"},
	{"number":"PN9213","state":"AOG","porperty":"alternate"}
]

 var flightnamber2=[
	{"number":"PN9017","state":"warning","porperty":"late"},
	{"number":"PN9012","state":"warning","porperty":"cancel"},
	{"number":"PN9013","state":"","porperty":"cancel"},
	{"number":"PN9021","state":"vip","porperty":"cancel"},
	{"number":"PN9043","state":"warning","porperty":"late"},
	{"number":"PN9054","state":"vip","porperty":"late"},
	{"number":"PN9045","state":"","porperty":"late"},
	{"number":"PN9066","state":"AOG","porperty":"late"},
	{"number":"PN9134","state":"","porperty":"late"},
	{"number":"PN9009","state":"AOG","porperty":"alternate"},
	{"number":"PN9032","state":"","porperty":"cancel"},
	{"number":"PN9034","state":"","porperty":"late"},
	{"number":"PN9078","state":"vip","porperty":"alternate"},
	{"number":"PN9040","state":"vip","porperty":"alternate"},
	{"number":"PN9213","state":"AOG","porperty":"alternate"},
	{"number":"PN9012","state":"vip","porperty":"alternate"},
	{"number":"PN9012","state":"AOG","porperty":"cancel"},
	{"number":"PN9043","state":"","porperty":"late"},
	{"number":"PN9078","state":"warning","porperty":"alternate"},
	{"number":"PN9040","state":"AOG","porperty":"alternate"},
	{"number":"PN9213","state":"warning","porperty":"alternate"}
]

/*输出航班列表*/

$("#zdul").empty();
var html1=""; 
$.each(flightnamber,function(i,v){
	var number = v.number;
	var state = v.state;
	var porperty = v.porperty;
	if(porperty === "cancel"){
           html1 +=  `<li id="meanli">
               <div class="mean_li_bg mean_li_bg_qx"></div>
               <div class="mean_li">
               <div class="mean_li_hb">
               <span class="points"></span>
               <span class="mean_hbh" id="mean_hbh">${number}</span>
               </div>
               <div class="zhuangtai" id="${number}">
               </div>
               </div>
               </li>`;
		}
		else if(porperty === "alternate"){
           html1 +=  `<li id="meanli">
               <div class="mean_li_bg mean_li_bg_bj"></div>
               <div class="mean_li">
               <div class="mean_li_hb">
               <span class="points"></span>
               <span class="mean_hbh" id="mean_hbh">${number}</span>
               </div>
               <div class="zhuangtai" id="${number}">
               </div>
               </div>
               </li>`;
		}
		else if(porperty === "late"){
           html1 +=  `<li id="meanli">
               <div class="mean_li_bg mean_li_bg_yw"></div>
               <div class="mean_li">
               <div class="mean_li_hb">
               <span class="points"></span>
               <span class="mean_hbh" id="mean_hbh">${number}</span>
               </div>
               <div class="zhuangtai" id="${number}">
               </div>
               </div>
               </li>`;
		};
		
});

$("#zdul").html(html1);

 var meanli = $("#zdul #mean_hbh");
$.each(flightnamber2,function(m,n){
   
	var number = n.number;
	var state = n.state;
$.each(meanli,function(h,j){

	text = $(this).text();

	if(state === "vip" && number == text) {
        
        html2 = `<span class="state_line state_line_yk"></span>`;

		$("#"+number).append(html2);
	}
	else if(state === "AOG" && number == text) {
        
        html2 = `<span class="state_line state_line_aog"></span>`;

		$("#"+number).append(html2);
	}
	else if(state === "warning" && number == text) {
        
        html2 = `<span class="state_line state_line_gj"></span>`;

		$("#"+number).append(html2);
	}
})

});

$("#map").click(function(){

	$("#airportalerm").fadeIn();
})
$(".alerm_head").click(function(){

	$("#airportalerm").fadeOut();
})

})