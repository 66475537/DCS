<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<nav class="navbar-default navbar-static-side" role="navigation" id="navigation">
	<div class="sidebar-collapse">
     	<div>
     		<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
     	</div>
		<ul class="nav metismenu" id="side-menu">
		    <li>
		        <a href="${ctx}/index.do" style="white-space:nowrap;display: inline;">
		    		<i class="fa fa-home"></i><abbr>首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</abbr>
			    </a>
			</li>
			<li>
		        <a href="${ctx}/notice/redirectAddNoticeMessagePage.do" style="white-space:nowrap;display: inline;">
		    		<i class="fa fa-file-audio-o"></i><abbr>通知报文&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</abbr>
			    </a>
			</li>
			<li>
		        <a href="${ctx}/notice/redirectAddWeatherMessagePage.do" style="white-space:nowrap;display: inline;">
		    		<i class="fa fa-cloud"></i><abbr>天气报文&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</abbr>
			    </a>
			</li>
			<li>
		        <a href="${ctx}/terminal/displayTerminalTree.do" style="white-space:nowrap;display: inline;">
		    		<i class="fa fa-sliders"></i><abbr>终端要素&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</abbr>
			    </a>
			</li>
			<li>
			    <a href="${ctx}/list-table.do" style="white-space:nowrap;display: inline;">
			    	<i class="fa fa-fighter-jet"></i><abbr>风险管控评价&nbsp;&nbsp;</abbr>
				</a>
			</li>
			<li>
			    <a href="${ctx}/rostering/redirectRosteringPage.do" style="white-space:nowrap;display: inline;">
			    	<i class="fa fa-list-alt"></i><abbr>机组排班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</abbr>
				</a>
			</li>
			<li>
			    <a href="${ctx}/list-metrics.do" style="white-space:nowrap;display: inline;">
			    	<i class="fa fa-bar-chart"></i><abbr>数据品质管控&nbsp;&nbsp;</abbr>
				</a>
			</li>
			<li>
     			<a href="${ctx}/script/toHandler.do" style="white-space:nowrap;display: inline;">
                	<i class="fa fa-reply"></i><abbr>初始化数据库&nbsp;&nbsp;</abbr>
            	</a>
       		</li>
			<li>
     			<a href="${ctx}/logout.do" style="white-space:nowrap;display: inline;">
                	<i class="fa fa-power-off"></i><abbr>注销&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</abbr>
            	</a>
       		</li>
		</ul>
     </div>
</nav>