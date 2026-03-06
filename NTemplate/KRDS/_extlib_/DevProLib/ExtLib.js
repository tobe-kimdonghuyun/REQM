/**
*  devPro Library
*  @FileName 	ExtLib.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2021.01.05
*  @Description    외부 모듈 연동 관련 공통함수
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Frame Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class Toast Web Editor 를 생성한다.<br>
* @param {Object} objWebrowser - Webrowser 콤포넌트
* @return N/A
* @example this.gfnCreateToastWebEditor(this.Webrowser00);
*/ 
pForm.gfnCreateToastWebEditor = function(objWebrowser)
{
	var sUrl = "";
	
	//if( objWebrowser == null || !(objWebrowser instanceof WebBrowser)) return;

	sUrl = nexacro.getEnvironment().services['svcUrl'].url + "thirdParty/toasteditor/toasteditor.html";

	objWebrowser.set_url(sUrl);
};

/**
* @class Web Editor 를 생성한다.<br>
* @param {Object} objWebrowser - Webrowser 콤포넌트
* @return N/A
* @example this.gfnCreateWebEditor(this.Webrowser00);
*/ 
pForm.gfnCreateWebEditor = function(objWebrowser)
{
	var sUrl = "";
	
	//if( objWebrowser == null || !(objWebrowser instanceof WebBrowser)) return;

	sUrl = nexacro.getEnvironment().services['svcUrl'].url + "thirdParty/ckeditor/html/ckeditor.html";

	objWebrowser.set_url(sUrl);
};

/**
* @class HTML Viewer를 생성한다.<br>
* @param {Object} objWebrowser - Webrowser 콤포넌트
* @return N/A
* @example this.gfnCreateHtmlViewer(this.Webrowser00);
*/
pForm.gfnCreateHtmlViewer = function(objWebrowser)
{
	var sUrl = "";
	
	if( objWebrowser == null || !(objWebrowser instanceof WebBrowser)) return;
	
	sUrl = nexacro.getEnvironment().services['svcUrl'].url + "html/htmlviewer.html";
	
	objWebrowser.set_url(sUrl);
};

/**
* @class 웹브라우저에 HTML 컨텐츠를  설정한다.<br>
* @param {Object} objWebrowser - Webrowser 콤포넌트
* @param {String} sHtml - html 컨텐프
* @return N/A
* @example this.gfnSetHtmlView(this.Webrowser00, "<div style='color:red'>A</div>");
*/
pForm.gfnSetHtmlView = function(objWebrowser,  sHtml)
{
	if( objWebrowser == null || !(objWebrowser instanceof WebBrowser)) return;
	if( this.gfnIsNull(sHtml) ) sHtml = "";

	objWebrowser.callMethod("setInnerHtml", sHtml);
};

/**
* @class 행정안전부 우편번호 검색 <br>
* @param {Object} obj - Button Component
* @return N/A - 웹브라우져 onusernotify에서 (식별자 ::: 주소1 ::: 주소2 ::: 상세주소 :::  우편번호) 형태로 전달
* @example this.gfnPostSearch(obj);
*/
pForm.gfnPostSearch = function(obj)
{
	var objApp = nexacro.getApplication();	

	if (!this.components[obj.name+"_webPost"]) 
	{
		var objWeb = new WebBrowser();  
		objWeb.init(obj.name+"_webPost", obj.left, obj.top+obj.height+10, 500, 500, null, null);

		// Add Object to Parent Form  
		this.addChild(obj.name+"_webPost", objWeb);
		 
		// Show Object
		objWeb.show();
	} else 
	{
		var objWeb = this.components[obj.name+"_webPost"];
	}
	
	var sUrl = nexacro.getEnvironment().services['svcUrl'].url;
	if( sUrl.indexOf("localhost") > -1) {
		sUrl="http://localhost:9093/";
	}
	sUrl	+= "thirdParty/post/PostCall.jsp";
	objWeb.set_url(sUrl);
	
	// onusernotify 이벤트 추가
	objWeb.addEventHandler("onusernotify", this._gfnWebPost_onusernotify, this);	
};

/**
* @class 우편번호 선택 시 콜백함수 호출 <br>
* @param {Object} obj - Event가 발생한 Object.
* @param {Evnet}  e	  - Event Object.
* @return N/A
* @example objWeb.addEventHandler("onusernotify", this._gfnWebPost_onusernotify, this);	
*/
pForm._gfnWebPost_onusernotify = function(obj, e)
{
	var sPost = e.userdata;

	if (sPost.indexOf("OK!!!:::") == 0) 
	{
		// e.userdata ==>(식별자 ::: 주소1 ::: 주소2 ::: 상세주소 :::  우편번호)
		var aAddress = sPost.split(":::");
		// form에 callback 함수가 있을때
		if (this["fnPostCallback"]) this.lookupFunc("fnPostCallback").call((obj.name).replace("_webPost",""), aAddress);
	}
};

pForm = null;