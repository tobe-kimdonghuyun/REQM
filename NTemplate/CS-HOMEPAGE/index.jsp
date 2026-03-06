<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% 
String userAgent = request.getHeader("User-Agent").toLowerCase();
Boolean chkBot = false;

if(userAgent.indexOf("googlebot")>-1)chkBot = true;
else if(userAgent.indexOf("bingbot")>-1)chkBot = true;
else if(userAgent.indexOf("Yeti")>-1)chkBot = true;
else if(userAgent.indexOf("daumoa")>-1)chkBot = true;
else if(userAgent.indexOf("facebookexternalhit")>-1)chkBot = true;

String strMenu = request.getParameter("menu");
String strPage = request.getParameter("page");
String strPostId = request.getParameter("postid");


if(chkBot==true) { 
%>
	<%
		if(strMenu==null||strMenu.equals("")||strMenu.equals(null)||strMenu.equals("home")) {
	%>
			<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
			<html> 
			<head> 
			  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
			  <meta http-equiv="content-language" content="ko" />
			  <meta name="viewport" content="user-scalable=1, initial-scale=1.0, width=device-width" />
			  <!--검색엔진용 태그-->
			  <meta name="robots" content="index,follow,noarchive">
			  <meta name="Description" content="TOBESOFT Technical Support, 투비소프트 기술지원 사이트" />
			  <meta name="Keywords" content="tobesoft,투비소프트,nexacro platform,넥사크로 플랫폼"/>
			  <meta name="Revisit-After" content="1 days" />
			  <meta name="application-name" content="ToBESOFT Support Site" />
			  
			  <meta property="og:type" content="website">
			  <meta property="og:title" content="TobeSoft Technical Support:투비소프트 기술지원 사이트">
			  <meta property="og:description" content="TOBESOFT Technical Support, 투비소프트 기술지원 사이트">
			  <meta property="og:image" content="http://www.playnexacro.com/image/logo-black.png">
			  <meta property="og:url" content="http://support.tobesoft.co.kr">
			  <link id="favicon" rel="shortcut icon" href="http://support.tobesoft.co.kr/image/favicon.ico"/>	
			      		
				<style>
				body {
					font-family: 'Meiryo UI', 'malgun gothic';
				}
				td:nth-child(2) {
			      display: inline-block;
			      width: 500px;
			      word-break: break-all;
				}
				td {
			      padding-right: 30px;
			      padding-bottom: 20px;
				}
				p {
					margin: 0px;
				}
				</style> 
			<title>TOBESOFT Technical Support</title> 
			</head> 
				<body>
					<div>
						<h1>TOBESOFT Technical Support</h1>
					</div>
						
					<table width="690" cellspacing="0" cellpadding="0" border="0" style="border: 0px none #93a5ba; font-size: 35px;">
					<tbody>
						<tr height="20">
						  <td align="left" width="800">
						  	<a href=".?menu=AMenu" title="AMenu"><b>AMenu</b></a>
						  </td>
					  </tr>
					  <tr height="20">
						  <td align="left" width="800">
						  	<a href=".?menu=BMenu" title="BMenu"><b>BMenu</b></a>
						  </td>
					  </tr>
					</tbody>	
					</table>
				</body> 
			</html>	
	<%
		}else if(strPostId==null||strPostId.equals("")||strPostId.equals(null)) {
	%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<html> 
<head> 
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta http-equiv="content-language" content="en-US,ko,ja" />
  <meta name="viewport" content="user-scalable=1, initial-scale=1.0, width=device-width" />
  <!--검색엔진용 태그-->
  <meta name="robots" content="index,follow,noarchive">
  <meta name="Description" content="Play Nexacro is a community site for nexacro platform. 넥사크로 플랫폼 사용자 커뮤니티 " />
  <meta name="Keywords" content="tobesoft,투비소프트,nexacro platform,넥사크로 플랫폼"/>
  <meta name="Revisit-After" content="1 days" />
  <meta name="application-name" content="play nexacro" />
  
  <meta property="og:type" content="website">
  <meta property="og:title" content="play nexacro:플레이 넥사크로">
  <meta property="og:description" content="Play Nexacro is a community site for nexacro platform. 넥사크로 플랫폼 사용자 커뮤니티 ">
  <meta property="og:image" content="http://www.playnexacro.com/image/logo-black.png">
  <meta property="og:url" content="https://www.playnexacro.com">
  <link id="favicon" rel="shortcut icon" href="http://www.playnexacro.com/image/favicon.ico"/>	
          		
	<style>
	body {
		font-family: 'Meiryo UI', 'malgun gothic';
	}
	td:nth-child(2) {
      display: inline-block;
      width: 500px;
      word-break: break-all;
	}
	td {
      padding-right: 30px;
      padding-bottom: 20px;
	}
	p {
		margin: 0px;
	}
	</style> 
<title>TOBESOFT Technical Support</title> 
</head> 
	<body>
		<div>
			<h1>TOBESOFT Technical Support</h1>
		</div>
			
		<table width="690" cellspacing="0" cellpadding="0" border="0" style="border: 0px none #93a5ba; font-size: 23px;">
		<tbody>
			<tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=1" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=2" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=3" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=4" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=5" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=6" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=7" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=8" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=9" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		  <tr height="20">
			  <td align="left" width="100"></td>
			  <td align="left" width="800">
			  	<a href=".?menu=AMenu&postid=10" hreflang="ko" title="타이틀"><b>타이틀</b></a>
			  </td>
			  <td align="left" width="120">작성일자</td>
		  </tr>
		</tbody>	
		</table>
		<br>
		<div>
			   <a href=".?menu=AMenu&page=1">First</a>
			   <a href=".?menu=AMenu&page=1">Prev</a>
				 <span>1</span>
			   <a href=".?menu=AMenu&page=2">2</a>
			   <a href=".?menu=AMenu&page=3">3</a>
			   <a href=".?menu=AMenu&page=4">4</a>
			   <a href=".?menu=AMenu&page=5">5</a>
			   <a href=".?menu=AMenu&page=6">6</a>
			   <a href=".?menu=AMenu&page=7">7</a>
			   <a href=".?menu=AMenu&page=8">8</a>
			   <a href=".?menu=AMenu&page=9">9</a>
			   <a href=".?menu=AMenu&page=10">10</a>
			   <a href=".?menu=AMenu&page=11">Next</a>
			   <a href=".?menu=AMenu&page=30">Last</a>
		</div>		
	</body> 
</html>
	<%
		}else{
	%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<html lang=${langCode}> 
<head> 
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="viewport" content="user-scalable=1, initial-scale=1.0, width=device-width" />
	<!--검색엔진용 태그-->
	<meta name="robots" content="index,follow,noarchive">
		<meta name="Description" content="tobesoft,투비소프트,넥사크로,nexacro">
		<meta property="og:description" content="넥사크로,nexacro">
	
	<meta name="Keywords" content="tobesoft,투비소프트,nexacro platform,넥사크로 플랫폼">
	<meta name="Author" content="작성자명">
	<meta name="Revisit-After" content="2 days">
	<meta name="author-date(date)" content="작성일자"/>
	<meta http-equiv="Last-Modified" content="수정일자" />
	
	<meta property="og:type" content="website">
	<meta property="og:title" content="제목">
	<meta property="og:image" content="http://support.tobesoft.co.kr/image/logo-black.png">
	<meta property="og:url" content="http://support.tobesoft.co.kr">
	
	<link id="favicon" rel="shortcut icon" href="http://support.tobesoft.co.kr/image/favicon.ico"/>
	<style>
	body {
		font-family: 'Meiryo UI', 'malgun gothic';
      	font-size: 23px;
      	width: 100%;
        word-break: break-all;
	}
	p {
		margin: 0px;
	</style> 
<title>게시물제목</title> 
</head> 
	<body>
		<div>
			<h1>게시물제목</h1>
		</div>
		게시물내용
	</body> 
</html>

<% }
} else  {%>

<!-- DOCTYPE : DOCTYPE declaration -->
<!DOCTYPE html>
<html > <!-- LANGUAGE : locale setting (value of location property in Environment) -->
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="UTF-8">
	<meta name="viewport" content="user-scalable=1, initial-scale=0.1, width=device-width, target-densitydpi=device-dpi">
	<!-- META_CHECKVERSION : Add if value of checkversion property in Envrionment is true -->

	
	<!-- FAVICON : favion setting (value of icon property in Environment. add to value of icon property in Environment) -->

	
	<!-- USERFONT_STYLE : userfont style setting (value of userfontid property in Environment. crate contents contained in xfont file specified userfontid property in Environment) -->

	    <style id="userfont">
        @font-face {
          font-family: 'NotoSansKR';
          font-style: normal;
          font-weight: 100;
          src: local("NotoSansKR-Thin");
          src: url(./_resource_/_font_/NotoSansKR-Thin.woff2) format('woff2'),
               url(./_resource_/_font_/NotoSansKR-Thin.woff) format('woff'),
               url(./_resource_/_font_/NotoSansKR-Thin.otf) format('opentype');
        }
        @font-face {
          font-family: 'NotoSansKR';
          font-style: normal;
          font-weight: 300;
          src: local("NotoSansKR-Light");
          src: url(./_resource_/_font_/NotoSansKR-Light.woff2) format('woff2'),
               url(./_resource_/_font_/NotoSansKR-Light.woff) format('woff'),
               url(./_resource_/_font_/NotoSansKR-Light.otf) format('opentype');
        }
        @font-face {
           font-family: 'NotoSansKR';
           font-style: normal;
           font-weight: 400;
           src: local("NotoSansKR-Regular");
           src: url(./_resource_/_font_/NotoSansKR-Regular.woff2) format('woff2'),
                url(./_resource_/_font_/NotoSansKR-Regular.woff) format('woff'),
                url(./_resource_/_font_/NotoSansKR-Regular.otf) format('opentype');
         }
        @font-face {
           font-family: 'NotoSansKR';
           font-style: normal;
           font-weight: 500;
           src: local("NotoSansKR-Medium");
           src: url(./_resource_/_font_/NotoSansKR-Medium.woff2) format('woff2'),
                url(./_resource_/_font_/NotoSansKR-Medium.woff) format('woff'),
                url(./_resource_/_font_/NotoSansKR-Medium.otf) format('opentype');
         }
        @font-face {
           font-family: 'NotoSansKR';
           font-style: normal;
           font-weight: 700;
           src: local("NotoSansKR-Bold");
           src: url(./_resource_/_font_/NotoSansKR-Bold.woff2) format('woff2'),
                url(./_resource_/_font_/NotoSansKR-Bold.woff) format('woff'),
                url(./_resource_/_font_/NotoSansKR-Bold.otf) format('opentype');
         }
        @font-face {
           font-family: 'NotoSansKR';
           font-style: normal;
           font-weight: 900;
           src: local("NotoSansKR-Black");
           src: url(./_resource_/_font_/NotoSansKR-Black.woff2) format('woff2'),
                url(./_resource_/_font_/NotoSansKR-Black.woff) format('woff'),
                url(./_resource_/_font_/NotoSansKR-Black.otf) format('opentype');
         }

        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 100;
          src: local("Roboto-Thin");
          src: url(./_resource_/_font_/Roboto-Thin.woff2) format('woff2'),
               url(./_resource_/_font_/Roboto-Thin.woff) format('woff'),
               url(./_resource_/_font_/Roboto-Thin.ttf) format('ttf');
        }
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          src: local("Roboto-Light");
          src: url(./_resource_/_font_/Roboto-Light.woff2) format('woff2'),
               url(./_resource_/_font_/Roboto-Light.woff) format('woff'),
               url(./_resource_/_font_/Roboto-Light.otf) format('ttf');
        }
        @font-face {
           font-family: 'Roboto';
           font-style: normal;
           font-weight: 400;
           src: local("Roboto-Regular");
           src: url(./_resource_/_font_/Roboto-Regular.woff2) format('woff2'),
                url(./_resource_/_font_/Roboto-Regular.woff) format('woff'),
                url(./_resource_/_font_/Roboto-Regular.otf) format('ttf');
         }
        @font-face {
           font-family: 'Roboto';
           font-style: normal;
           font-weight: 500;
           src: local("Roboto-Medium");
           src: url(./_resource_/_font_/Roboto-Medium.woff2) format('woff2'),
                url(./_resource_/_font_/Roboto-Medium.woff) format('woff'),
                url(./_resource_/_font_/Roboto-Medium.otf) format('ttf');
         }
        @font-face {
           font-family: 'Roboto';
           font-style: normal;
           font-weight: 700;
           src: local("Roboto-Bold");
           src: url(./_resource_/_font_/Roboto-Bold.woff2) format('woff2'),
                url(./_resource_/_font_/Roboto-Bold.woff) format('woff'),
                url(./_resource_/_font_/Roboto-Bold.otf) format('ttf');
         }
        @font-face {
           font-family: 'Roboto';
           font-style: normal;
           font-weight: 900;
           src: local("Roboto-Black");
           src: url(./_resource_/_font_/Roboto-Black.woff2) format('woff2'),
                url(./_resource_/_font_/Roboto-Black.woff) format('woff'),
                url(./_resource_/_font_/Roboto-Black.otf) format('ttf');
         }
        </style>
		
	<!-- FRAMEWORK_LIBRARY : framework lodaing path (list of scripts files in the Framework.json file) -->
    <script src="./nexacrolib/framework/Framework.js"></script>
	
	<!-- COMPONENTS_LIBRARY : commonent lodaing path (list of script file in json file specified in the TypeDefinition module) -->
    <script src="./nexacrolib/component/CompBase.js"></script>
    <script src="./nexacrolib/component/ComComp.js"></script>
    <script src="./nexacrolib/component/Grid.js"></script>
    <script src="./nexacrolib/component/ListView.js"></script>
    <script src="./nexacrolib/component/DeviceAPI.js"></script>
    <script src="./nexacrolib/component/extPrototype/Util.js"></script>
    <script src="./nexacrolib/component/extPrototype/transLib.js"></script>
    <script src="./nexacrolib/component/extPrototype/validation.js"></script>
    <script src="./nexacrolib/component/History/History.js"></script>
    <script src="./nexacrolib/component/Accessibility.js"></script>
	<!-- ENVIRONMENT_LIBRARY : application environment path (path of Environment.xml.js) -->
    <script src="./environment.xml.js"></script>
	
	<title></title>
  <style type="text/css">
    div {
      -moz-user-select:-moz-none;
      -webkit-user-select:none;
      -webkit-touch-callout:none;
      -webkit-appearance:none;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      outline:none;
    }
    
    v\:shape    { behavior:url(#default#VML); display:inline-block; }
    v\:fill     { behavior:url(#default#VML); display:inline-block; }
    v\:path     { behavior:url(#default#VML); display:inline-block; }
    v\:line     { behavior:url(#default#VML); display:inline-block; }
    v\:textpath { behavior:url(#default#VML); display:inline-block; }
    o\:opacity2 { behavior:url(#default#VML); }
    
    input::-ms-clear  { display:none; }
    input::-ms-reveal { display:none; }
  </style>
</head>
<body style="margin:0;border:none;-ms-touch-action:none;" onload="oninitframework()">
  <script type="text/javascript">
   	<!-- google analytics script -->
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-77946867-1', 'auto');
	  ga('send', 'pageview');
	</script>
	</script>
	<!-- google analytics script for event traking -->
	<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-77946867-1']);
	//_gaq.push(["_setDomainName", "none"]);
	_gaq.push(['_trackPageview']);
	(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	</script>
	<script>
		function oninitframework()
		{
			var urlParams = {};
			(function () {
				var match,
				pl     = /\+/g,
				search = /([^&=]+)=?([^&]*)/g,
				decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
				query  = window.location.search.substring(1);
				while (match = search.exec(query)) { urlParams[decode(match[1])] = decode(match[2]); }
				})();
			nexacro.urlParams = urlParams;	
			<!-- SCREEN_INFORMATION : create screen information defined in Environment > ScreenDefinition -->
			var screeninfo = [
            {"id":"Screen0","type":"desktop","themeid":"theme::CSHomepage2","xadl":"Application_Desktop.xadl.js"}
			];
			nexacro._initHTMLSysEvent(window, document);
			nexacro._initEnvironment(screeninfo);
			<!-- create internal iframe -->
			<!-- USERFONT_INFORMATION : userfontid property is specified in the Environment -->
			nexacro._prepareManagerFrame(onloadframework, [{family:'NotoSansKR', style:'normal', weight:100},{family:'NotoSansKR', style:'normal', weight:300},{family:'NotoSansKR', style:'normal', weight:400},{family:'NotoSansKR', style:'normal', weight:500},{family:'NotoSansKR', style:'normal', weight:700},{family:'NotoSansKR', style:'normal', weight:900},{family:'Roboto', style:'normal', weight:100},{family:'Roboto', style:'normal', weight:300},{family:'Roboto', style:'normal', weight:400},{family:'Roboto', style:'normal', weight:500},{family:'Roboto', style:'normal', weight:700},{family:'Roboto', style:'normal', weight:900}]);
		}
		function onloadframework()
		{
			<!-- application loading -->
			nexacro._loadADL();
		}
		function onfinalframework()
		{
			<!-- application exit -->
		}
	</script>
</body>
</html>
<% }%>