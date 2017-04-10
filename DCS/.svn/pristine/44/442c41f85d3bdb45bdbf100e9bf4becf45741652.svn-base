

/**
 * @author caoyt(曹颖桐)
 * @email caoyingtong@41zone.cc
 * @date 2014-10-16
 * 
 * document.cookie = name+"="+value+";expires="+oDate+";path=/;domian=qq.com";
 * 
 * 路径问题(path):1.这里的path值的是访问路径，因为默认情况下，只有与创建 cookie 的页面在同一个目录或
 * 				子目录下的网页才可以访问，这个是因为安全方面的考虑，造成不是所有页面都可以随意访问
 * 				其他页面创建的 cookie
 * 				2. 在 "http://www.cnblogs.com/Darren_code/" 这个页面创建一个cookie，
 * 				那么在"/Darren_code/"这个路径下的页面如： "http://www.cnblogs.com/Darren_code/archive/2011/11/07/Cookie.html"
 * 				这个页面默认就能取到cookie信息。可在默认情况下， "http://www.cnblogs.com"或者 
 * 				"http://www.cnblogs.com/xxxx/" 就不可以访问这个 cookie
 * 				
 * 
 * 域的问题(domain):路径能解决在同一个域下访问 cookie 的问题，实现同域之间访问的问题。
 * 				语法:document.cookie = "name=value;path=path;domain=domain"
 * 				例如 "www.qq.com" 与 "sports.qq.com" 公用一个关联的域名"qq.com"，
 * 				如果想让 "sports.qq.com" 下的cookie被 "www.qq.com" 访问，
 * 				就需要用到 cookie 的domain属性，并且需要把path属性设置为 "/"。
 * 				例：document.cookie = "username=Darren;path=/;domain=qq.com"	
 * 
 * 编码问题:在输入cookie信息时不能包含空格，分号，逗号等特殊符号，而在一般情况下，cookie 信息的存储都是采用未编码的方式。
 * 				所以，在设置 cookie 信息以前要先使用escape()函数将 cookie 值信息进行编码，在获取到 cookie 值
 * 				得时候再使用unescape()函数把值进行转换回来
 * 
 */	
	
var cookieUtil = {
	set:function(name,value,days){
		var date=new Date(); 
		date.setTime(date.getTime() + days*24*60*60*1000);
		document.cookie= name+ "=" +escape(value)+((days==null) ? "" : ";expires="+date.toGMTString());
	},
	get:function(name){
		var cookieArray=document.cookie.split("; "); //得到分割的cookie名值对    
		for (var i=0;i<cookieArray.length;i++){    
			var arr=cookieArray[i].split("=");       //将名和值分开    
			if(arr[0]==name)return unescape(arr[1]); //如果是指定的cookie，则返回它的值    
		} 
		return ""; 
	},
	unset:function(name){
		setCookie(name,"",0);
	}
	
};


//name=name1=value1&name2=value2
var subCookieUtil = {
	//superName:父cookie的名称   subName:子cookie的名称   value:子cookie的值   expires:超时时间   path:路径   domain:域   secure:安全标志
	set:function(superName,subName,value,expires,path,domain,secure){
		var subCookies = this.getAll(superName) || {};
		subCookies[subName] = value;
		
		this.setAll(superName,subCookies,expires,path,domain,secure);
	},
	
	setAll:function(superName,subCookies,expires,path,domain,secure){
		var cookieText = escape(superName) + "=",
			subCookieParts = [],
			subName;
		
		for (subName in subCookies) {
			if(subName.length > 0){
				subCookieParts.push(escape(subName) + "=" + escape(subCookies[subName]));
			}
		}
		
		if(subCookieParts.length > 0){
			cookieText+=subCookieParts.join("&");	
			if(expires instanceof Date){
				cookieText+="; expires=" + expires.toGMTString();
			}
			if(path){
				cookieText+="; path=" + path;
			}
			if(domain){
				cookieText+="; domain=" + domain;
			}
			if(secure){
				cookieText+="; secure";
			}
			
		}else{
			document.cookie += "; expires=" + (new Date(0)).toGMTString();
		}
		
		document.cookie = cookieText;
		
	},
	
	get:function(superName, subName){
		var subCookies = this.getAll(superName);
		return subCookies ? subCookies[subName] : null;
	},
	
	getAll:function(superName){
	
		var cookieName = unescape(superName) + "=",
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = null,
			cookieEnd,
			subCookies,
			i,
			parts,
			resultJson = {};
	
		if(cookieStart > -1){
			cookieEnd = document.cookie.indexOf(";", cookieStart);
			if(cookieEnd == -1){
				cookieEnd = document.cookie.length;
			}
			
			cookieValue = unescape(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
			
			if(cookieValue.length > 0){
				subCookies = cookieValue.split("&");
				for (i = 0, len = subCookies.length; i < len; i++) {
					parts = subCookies[i].split("=");
					resultJson[parts[0]] = parts[1];
				}
				return resultJson;
			}
			
		}
		return null;
		
	}

};




