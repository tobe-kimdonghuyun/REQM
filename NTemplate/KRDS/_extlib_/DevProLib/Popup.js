/**
*  devPro Library
*  @FileName 	Popup.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Description
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Popup Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

// promise 관련 객체
var holder = {};
var resultHolder = {};
var popupHolder = {};

/**
* @class 팝업오픈
* @param {String} sPopupId	- 팝업ID
* @param {String} sUrl	 - 팝업URL
* @param {String} [oArg] - 전달값
* @param {String} [sPopupCallback] - 팝업콜백
* @param {Object} [oOption] - 팝업옵션 <br>
*	oOption.top 		: 상단 좌표 <br>
*	oOption.left 		: 좌측 좌표 <br>
*	oOption.width 		: 넓이 		 <br>
*	oOption.height 		: 높이 		 <br>
*	oOption.popuptype 	: 팝업종류(modal:showModal, 			 <br>
								modeless:application.open,   <br>
								modalsync:showModalSync,	 <br>
								modalwindow:showModalWindow) <br>
*	oOption.layered 	: 투명 윈도우  <br>
*	oOption.opacity 	: 투명도		<br>
*	oOption.autosize 	: autosize 		<br>
*	oOption.dual 		: 듀얼모니터에 생성. Only form modeless	<br>
* @return N/A
* @example this.gfnOpenPopup(this);
*/
pForm.gfnOpenPopup = function (sPopupId, sUrl, oArg, sPopupCallback, oOption)
{
	if (this.gfnIsNull(sPopupId)) 
	{
		alert("팝업 호출 시 팝업ID sPopupId를 지정하세요.");
		return;
	}
	var objApp	 	= nexacro.getApplication();
	var nLeft 		= -1;
	var nTop 		= -1;
	var nWidth 		= -1;
	var nHeight 	= -1;
	var bShowTitle 	= false;	
	var bShowStatus = false;	
	var sPopupType 	= "modal";
	var bLayered 	= false;
	var nOpacity 	= 100;
	var bAutoSize 	= false;
	var bResizable 	= false;
	var sDragmovetype = "all";
	var sModalType = "";
	
	//callback함수(명)을 전달하지 않아도 기본명이 선언되어 있다면 기본명을 사용하도록 기본셋팅
	var sPopupCallback = (this.gfnIsNull(sPopupCallback) && this["fnPopupCallback"]) ? "fnPopupCallback" : sPopupCallback;
				
	var sTitleText = "";
	for (var key in oOption) 
	{
       if (oOption.hasOwnProperty(key)) 
	   {
            switch (key) 
			{
				case "popuptype":
					sPopupType = oOption[key];
					break;
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
				case "resize":
					if (""+oOption[key] == "true")	bResizable = true;		
					break;
				case "titlebar":
					if (""+oOption[key] == "true")	bShowTitle = true;
					break;
				case "title":					
					sTitleText = oOption[key];	
					break;			
				case "dragmovetype":					
					sDragmovetype = oOption[key];	
					break;						
			}	
        }
    }
	
	var sOpenalign = "";
	if (nLeft == -1 && nTop == -1) 
	{
		sOpenalign = "center middle";
		sModalType = "center";
		
		if (system.navigatorname == "nexacro") 
		{
			var curX = objApp.mainframe.left;
			var curY = objApp.mainframe.top;
		}
		else 
		{
			var curX = window.screenLeft;
			var curY = window.screenTop;
		}
		
        nLeft = curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop  = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);
	}
	else 
	{
		if (nexacro.getEnvironmentVariable("evQuickView") == "Y") 
		{
			if (system.navigatorname == "nexacro") 
			{
				nTop = nTop + 30;
			}
		}
		else 
		{
			// Left는 LeftFrame 넓이 + WorkFrame의 divWork Left + form 내 위치 값
			nLeft = objApp.gvFrmLeft.form.width + 10 + nLeft;
			
			// Top은 TopFrmae의 높이 + WorkFrame의 divWork Top + form 내 위치 값
			if (system.navigatorname == "nexacro") 
			{
				nTop = objApp.gvFrmTop.form.height + 36 + nTop + 30;
			}
			else 
			{
				nTop = objApp.gvFrmTop.form.height + 36 + nTop;
			}		
		}
	}

	if (nWidth == -1 || nHeight == -1) 
	{
	    bAutoSize = true;
	}
	
	// modeless를 위해 팝업 Type 및 callBack함수 지정
	if (this.gfnIsNull(oArg)) oArg = {};
	
	oArg["popupType"] = sPopupType;
	oArg["popupId"]   = sPopupId;
	oArg["callback"]  = sPopupCallback;
	oArg["titleText"] = sTitleText;
	
	var objParentFrame = this.getOwnerFrame();

    if (sPopupType == "modeless")
    {
        var sOpenStyle  = "";
		if (sTitleText.indexOf(" ") > -1) 
		{
			sOpenStyle  = "showtitlebar=" + bShowTitle + " showstatusbar=false showontaskbar=true showcascadetitletext=false resizable="+bResizable+" location=no autosize="+bAutoSize+" titletext=\'"+sTitleText+"\'";
		}
		else 
		{
			sOpenStyle  = "showtitlebar=" + bShowTitle + " showstatusbar=false showontaskbar=true showcascadetitletext=false resizable="+bResizable+" location=no autosize="+bAutoSize+" titletext="+sTitleText;
		}

		if (oOption["dual"])	//듀얼 모니터 옵션을 사용한 경우 위치를 조정함. width, height 값 필수여서 1 설정
		{
			if (system.navigatorname == "nexacro") 
			{	
				if (this.gfnIsNull(system.getScreenRect(2)))
				{
					this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
					return;
				}								

				var nMoniterIndex  = system.getMonitorIndex(system.getCursorX(), system.getCursorY());
				nLeft = system.getScreenRect(nMoniterIndex).left;
				var nCnt = 1;
				var objRect  =  system.getScreenRect(nCnt);			
				do {				
					if (nLeft != objRect.left) 
					{
						nLeft = objRect.left;
						if (bAutoSize)
						{
							nTop = 0;
							nWidth = 1;
							nHeight = 1;							
						}
						this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
						break;
					}	
					objRect  =  system.getScreenRect(nCnt++);
				} while (!this.gfnIsNull(objRect));
			}	
			else
			{
				var objTargetForm = this;				
				//크롬>설정>개인정보 보호 및 보안>사이트별 권한 중 창관리 권한 획득 후 사용가능
				// Multi-Screen Window Placement API를 사용하기 위하여 사용자에게 권한을 요청 (필수)
				navigator.permissions.query({name:'window-placement'}).then(function(result) {
					//granted , prompt
					// window.getScreenDetails()를 사용하여 두 번째 화면에 대한 자세한 정보 획득
					window.getScreenDetails().then(function(result) {
						var objScreens = result.screens;					
						if (objScreens.length == 1)
						{
							objTargetForm._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
							return;
						}
						
						nLeft = result.currentScreen.left; // 현재 화면 ScreenDetailed을 설명하는 객체 반환 (left 값)
						for (var i = 0; i < objScreens.length; i++)
						{
							if (nLeft != objScreens[i].availLeft) 
							{
								nLeft = objScreens[i].availLeft;
								if (bAutoSize)
								{
									nTop = 0;
									nWidth = 1;
									nHeight = 1;							
								}							
								objTargetForm._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
								break;
							}
						}			
					});
				});					
			}
		}
		else
		{
			this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
		}
    }
	else 
	{
		var newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild._modaltype = sModalType;
		newChild.set_dragmovetype(sDragmovetype);
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle);      //titlebar는 안보임
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);         //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_titlebarheight(40);
		
		// ESC 이벤트 추가
		newChild.addEventHandler("onkeyup", this.gfnOnkeyup, this);
		//newChild.set_overlaycolor("RGBA(0, 0, 0, 0.4)");
		//newChild.set_border("1px solid #2c85bf");
		
		//newChild.set_titlebarheight(30);
		//newChild.titlebar.closebutton.set_visible(false);	//close버튼 visible false 처리
		//newChild.style.set_bordertype("round 10 10");
		//newChild.style.set_background("white");    
		//newChild.style.set_opacity(nOpacity);
			
		if (sPopupType == "modalsync") 
		{			
			// modalsync 팝업은 return이 없어 gfnClosePopup 함수에서 셋팅한 값으로 리턴처리
			system.showModalSync(newChild, objParentFrame, oArg);
			var rtn = objParentFrame.form["rtnVal"];
			return rtn;
		}
		else if(sPopupType == "modalwindow") 
		{			
			var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
			return rtn;
		}		
		else 
		{	// modal
			newChild.showModal(objParentFrame, oArg, this, sPopupCallback);
			
			// alert 팝업창 아닐경우 && voc 팝업이 아닐경우 팝업창 타이틀바 voc 버튼생성
// 			if(this.gfnIsNull(oArg.paramType) && oArg.pvBoardCd != "VOC001")
// 			{
// 				var nTopBtn = 0;
// 				var nWidthBtn = 23;
// 				var nRightBtn = 45;
// 				var nBottomBtn = 0;
// 				var objParent = newChild.titlebar;
// 				var objButton = new Button();
// 				objButton.init("btnVoc", null, nTopBtn, nWidthBtn, null, nRightBtn, nBottomBtn);
// 				objButton.set_cssclass("btn_MDI_Voc");
// 				objButton.set_tooltiptext("VOC등록");
// 				objParent.addChild(objButton.name, objButton);
// 				objButton.show();
// 				
// 				// 이벤트 핸들러 등록
// 				objButton.addEventHandler("onclick", function (obj, e)
// 					{
// 						var objApp = nexacro.getApplication();
// 						var oTarget = objApp.getActiveFrame();
// 						var sFileName = oTarget.name+".png";
// 						var sImg = "";
// 						
// 						if (system.navigatorname != "nexacro"){
// 							sImg = objApp.gvFrmMdi.form.fnWebImageSave(oTarget,sFileName);	
// 						}else{
// 							sImg = system.saveToImageBase64String(oTarget, false, "PNG");
// 							objApp.gvFrmMdi.form.fnOpenBoardPopup(sImg);
// 						}
// 					}, objParent);
// 			}
		}
	}
};

/**
* @class 팝업오픈(Promise)
* @param {String} sPopupId	- 팝업ID
* @param {String} sUrl	 - 팝업URL
* @param {String} [oArg] - 전달값
* @param {String} [sPopupCallback] - 팝업콜백
* @param {Object} [oOption] - 팝업옵션 <br>
*	oOption.top 		: 상단 좌표 <br>
*	oOption.left 		: 좌측 좌표 <br>
*	oOption.width 		: 넓이 		 <br>
*	oOption.height 		: 높이 		 <br>
*	oOption.popuptype 	: 팝업종류(modal:showModal, 			 <br>
								modeless:application.open,   <br>
								modalsync:showModalSync,	 <br>
								modalwindow:showModalWindow) <br>
*	oOption.layered 	: 투명 윈도우  <br>
*	oOption.opacity 	: 투명도		<br>
*	oOption.autosize 	: autosize 		<br>
*	oOption.dual 		: 듀얼모니터에 생성. Only form modeless	<br>
* @return N/A
* @example this.gfnOpenPopupPromise(this);
*/
pForm.gfnOpenPopupPromise = function (sPopupId, sUrl, oArg, sPopupCallback, oOption)
{	
	if (this.gfnIsNull(sPopupId))
	{
		alert("팝업 호출 시 팝업ID sPopupId를 지정하세요.");
		return;
	}
	var objApp	 	= nexacro.getApplication();
	var nLeft 		= -1;
	var nTop 		= -1;
	var nWidth 		= -1;
	var nHeight 	= -1;
	var bShowTitle 	= false;	
	var bShowStatus = false;	
	var sPopupType 	= "modal";
	var bLayered 	= false;
	var nOpacity 	= 100;
	var bAutoSize 	= false;
	var bResizable 	= false;
	var sDragmovetype = "all";
	var sModalType = "";
	var newPopupFrame = "";
	
	//callback함수(명)을 전달하지 않아도 기본명이 선언되어 있다면 기본명을 사용하도록 기본셋팅
	var sPopupCallback = (this.gfnIsNull(sPopupCallback) && this["fnPopupCallback"]) ? "fnPopupCallback" : sPopupCallback;
	
	var sTitleText = "";
	for (var key in oOption) 
	{
       if (oOption.hasOwnProperty(key)) 
	   {
            switch (key) 
			{
				case "popuptype":
					sPopupType = oOption[key];
					break;
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
				case "resize":
					if (""+oOption[key] == "true")	bResizable = true;		
					break;
				case "titlebar":
					if (""+oOption[key] == "true")	bShowTitle = true;
					break;
				case "title":					
					sTitleText = oOption[key];	
					break;			
				case "dragmovetype":					
					sDragmovetype = oOption[key];	
					break;						
			}	
        }
    }
	
	var sOpenalign = "";
	if (nLeft == -1 && nTop == -1) 
	{
		sOpenalign = "center middle";
		sModalType = "center";
		
		if (system.navigatorname == "nexacro") 
		{
			var curX = objApp.mainframe.left;
			var curY = objApp.mainframe.top;
		}
		else 
		{
			var curX = window.screenLeft;
			var curY = window.screenTop;
		}
		
        nLeft = curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop  = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);
	}
	else 
	{
		if (nexacro.getEnvironmentVariable("evQuickView") == "Y") 
		{
			if (system.navigatorname == "nexacro") 
			{
				nTop = nTop + 30;
			}
		}
		else 
		{
			// Left는 LeftFrame 넓이 + WorkFrame의 divWork Left + form 내 위치 값
			nLeft = objApp.gvFrmLeft.form.width + 10 + nLeft;
			
			// Top은 TopFrmae의 높이 + WorkFrame의 divWork Top + form 내 위치 값
			if (system.navigatorname == "nexacro") 
			{
				nTop = objApp.gvFrmTop.form.height + 36 + nTop + 30;
			}
			else 
			{
				nTop = objApp.gvFrmTop.form.height + 36 + nTop;
			}		
		}
	}

	if (nWidth == -1 || nHeight == -1) 
	{
	    bAutoSize = true;
	}
	
	// modeless를 위해 팝업 Type 및 callBack함수 지정
	if (this.gfnIsNull(oArg)) oArg = {};
	
	oArg["popupType"] = sPopupType;
	oArg["popupId"]   = sPopupId;
	oArg["callback"]  = sPopupCallback;
	oArg["titleText"] = sTitleText;
	
	var objParentFrame = this.getOwnerFrame();
	var isOpen = "";
    if (sPopupType == "modeless")
    {
        var sOpenStyle  = "";
		if (sTitleText.indexOf(" ") > -1) 
		{
			sOpenStyle  = "showtitlebar=" + bShowTitle + " showstatusbar=false showontaskbar=true showcascadetitletext=false resizable="+bResizable+" location=no autosize="+bAutoSize+" titletext=\'"+sTitleText+"\'";
		}
		else 
		{
			sOpenStyle  = "showtitlebar=" + bShowTitle + " showstatusbar=false showontaskbar=true showcascadetitletext=false resizable="+bResizable+" location=no autosize="+bAutoSize+" titletext="+sTitleText;
		}
		
		
		if (oOption["dual"])	//듀얼 모니터 옵션을 사용한 경우 위치를 조정함. width, height 값 필수여서 1 설정
		{
			if (system.navigatorname == "nexacro") 
			{	
				if (this.gfnIsNull(system.getScreenRect(2)))
				{
					this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
					return;
				}								

				var nMoniterIndex  = system.getMonitorIndex(system.getCursorX(), system.getCursorY());
				nLeft = system.getScreenRect(nMoniterIndex).left;
				var nCnt = 1;
				var objRect  =  system.getScreenRect(nCnt);			
				do {				
					if (nLeft != objRect.left) 
					{
						nLeft = objRect.left;
						if (bAutoSize)
						{
							nTop = 0;
							nWidth = 1;
							nHeight = 1;							
						}
						this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
						break;
					}	
					objRect  =  system.getScreenRect(nCnt++);
				} while (!this.gfnIsNull(objRect));
			}	
			else
			{
				var objTargetForm = this;				
				//크롬>설정>개인정보 보호 및 보안>사이트별 권한 중 창관리 권한 획득 후 사용가능
				// Multi-Screen Window Placement API를 사용하기 위하여 사용자에게 권한을 요청 (필수)
				navigator.permissions.query({name:'window-placement'}).then(function(result) {
					//granted , prompt
					// window.getScreenDetails()를 사용하여 두 번째 화면에 대한 자세한 정보 획득
					window.getScreenDetails().then(function(result) {
						var objScreens = result.screens;					
						if (objScreens.length == 1)
						{
							objTargetForm._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
							return;
						}
						
						nLeft = result.currentScreen.left; // 현재 화면 ScreenDetailed을 설명하는 객체 반환 (left 값)
						for (var i = 0; i < objScreens.length; i++)
						{
							if (nLeft != objScreens[i].availLeft) 
							{
								nLeft = objScreens[i].availLeft;
								if (bAutoSize)
								{
									nTop = 0;
									nWidth = 1;
									nHeight = 1;							
								}							
								objTargetForm._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
								break;
							}
						}			
					});
				});					
			}
		}
		else
		{
			this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
		}
    }
	else 
	{
		var newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild._modaltype = sModalType;
		newChild.set_dragmovetype(sDragmovetype);
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle);      //titlebar는 안보임
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);         //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_titlebarheight(40);
		newPopupFrame = newChild;
		
		
		
		//newChild.set_overlaycolor("RGBA(0, 0, 0, 0.4)");
		//newChild.set_border("1px solid #2c85bf");
		
		//newChild.set_titlebarheight(30);
		//newChild.titlebar.closebutton.set_visible(false);	//close버튼 visible false 처리
		//newChild.style.set_bordertype("round 10 10");
		//newChild.style.set_background("white");    
		//newChild.style.set_opacity(nOpacity);
		
		
		if (sPopupType == "modalsync") 
		{			
			// modalsync 팝업은 return이 없어 gfnClosePopup 함수에서 셋팅한 값으로 리턴처리
			system.showModalSync(newChild, objParentFrame, oArg);
			var rtn = objParentFrame.form["rtnVal"];
			return rtn;
		}
		else if(sPopupType == "modalwindow") 
		{			
			var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
			return rtn;
		}		
		else 
		{	// modal
			//oArg.id = oArg.id + "open";
			isOpen = newChild.showModal(objParentFrame, oArg, this, "");
		}
	}
	// promise 객체 생성
	return this.gfnCreatePromise(sPopupId,newPopupFrame);
};


/**
* @class Promise 객체 생성
* @param  {String} sPopupId	-  popup Id
* @param  {String} cfn		-  callback Id
* @return {Object} Promise
* @example this.gfnCreatePromise(sPopupId, cfn);
*/
pForm.gfnCreatePromise = function(sPopupId, cfn) 
{
	return new Promise(function(resolve, reject) {
		holder[sPopupId] = {"resolve" : resolve, "reject" : reject, "cfn" : cfn};
	});
};

/**
* @class 특정 Promise의 resolve 호출
* @param  {String} sPromId	-  promise 객체 Id
* @param  {Object} e		-  e 이벤트 정보 객체
* @return {Object} Promise
* @example this.gfnCallResolve(sPromId, e);
*/
pForm.gfnCallResolve = function(sPromId, e)
{
	if(this.gfnIsNull(sPromId)) return;
	
	var oProm = holder[sPromId];
	if(!oProm) return;
	this._gfnCallFunction(oProm.cfn, e);
	holder[sPromId] = null;
	return oProm.resolve(e);
};

/**
* @class 특정 Promise의 reject 호출
* @param  {String} sPromId	-  promise 객체 Id
* @param  {Object} e		-  e 이벤트 정보 객체
* @return {Object} Promise
* @example this.gfnCallReject(sPromId, e);
*/
pForm.gfnCallReject = function(sPromId, e)
{
	if(this.gfnIsNull(sPromId)) return;
	
	var oProm = holder[sPromId];
	if(!oProm) return;
	this._gfnCallFunction(oProm.cfn, e);
	holder[sPromId] = null;
	return oProm.reject(e);
};


/**
* @class 특정 Promise의 callback 호출
* @param  {String} cfn		-  promise 객체에 지정된 callback
* @param  {Object} e		-  e 이벤트 정보 객체
* @return N/A
* @example this._gfnCallFunction(cfn, e);
*/
pForm._gfnCallFunction = function(cfn, e) {
	if (this && cfn) {
		if (typeof cfn === "string") {
			cfn = form._findChildObject(cfn);
		}
		if (typeof cfn === "function") {
			cfn.call(form, e);
		}
	}
};

/**
* @class 모덜리스 팝업 오픈 내부함수
* @param {String} sPopupId - 팝업ID
* @param {String} sUrl - 팝업 url
* @param {Object} objParentFrame - 부모 Frame 
* @param {Object} oArg - 팝업으로 보내는 파라미터
* @param {String} sOpenStyle - 팝업에 적용할 속성
* @param {Number} nLeft - Left
* @param {Number} nTop - Top
* @param {Number} nWidth - Width
* @param {Number} nHeight - Height
* @return N/A	
* @example this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
*/
pForm._gfnOpenModeless = function(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight)
{
	var arrPopFrame = nexacro.getPopupFrames(this.getOwnerFrame());
	if (arrPopFrame[sPopupId]) 
	{	
		if (system.navigatorname == "nexacro") 
		{		
			arrPopFrame[sPopupId].setFocus();
		} 
		else 
		{	// 팝업이 완전히 뜨지 않았을 때 창을 닫아버리는 경우 팝업 가비지 제거
			try 
			{
				arrPopFrame[sPopupId]._getWindowHandle().focus();
			}
			catch(e) 
			{
				arrPopFrame[sPopupId] = null;
				nexacro.open(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
			}
		}
	}
	else 
	{
		nexacro.open(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
	}
};


/**
* @class 팝업화면에서 창 닫기
* @param {String} sReturn - return value	 
* @return N/A	
* @example this.gfnClosePopup("OK");
*/
pForm.gfnClosePopup = function(objRtn)
{	
	var objChild = this.getOwnerFrame();
	var objForm  = objChild.form;
	
	// modalsync 팝업일때 리턴값 전달 시 사용
	objForm.opener["rtnVal"] = objRtn;

	// 팝업이 modeless 일때
	if (objChild.popupType == "modeless") 
	{
		var sPopupId  = objChild.popupId;
		var sCallBack = objChild.callback;

		// callBack 함수가 있을 때
		if (this.gfnIsNull(sCallBack) == false) 
		{			
			// callback 함수object로 파라미터 전달시 바로 호출
			if (typeof(sCallBack) == "function") 
			{
				sCallBack.call(objForm.opener, sPopupId, objRtn);
			}
			else 
			{
				objForm.opener.lookupFunc(sCallBack).call(sPopupId, objRtn);
			}
		}
	}
	// 팝업창 닫기
	objForm.close(objRtn);
};

/**
* @class 팝업화면에서 창 닫기 - Promise
* @param {String} objRtn - return value	 
* @return N/A	
* @example this.gfnClosePopupPromise({"rtnValue": rtnValue});
*/
pForm.gfnClosePopupPromise = function(objRtn)
{	
	var objChild = this.getOwnerFrame();
	var objForm  = objChild.form;
	
	// 팝업창 닫기
	objForm.close(objRtn + " ");
	
	
	var oPromId = holder[objChild.id] ? objChild.id : null;

	var opener = this.opener;
	var popId = oPromId;
	if (opener && popId) {
		this._setResult(popId, objRtn);
	}

	if(oPromId == objChild.name) {
		var evt = new nexacro.CloseEventInfo(objChild, "onpopupclose");
                evt.popupId = oPromId;
                evt.data = resultHolder[oPromId];
                evt.form = objChild;
                delete resultHolder[oPromId];
                delete popupHolder[oPromId];
				
		this.gfnCallResolve(oPromId, evt);
	}
};

/**
* @class resultHolder 객체에 return value 세팅
* @param {String} promId  - Promise Id 
* @param {String} objRtn - return value	 
* @return N/A	
* @example this._setResult(popId, objRtn);
*/
pForm._setResult = function(promId, objRtn) {
	resultHolder[promId] = objRtn;
};


/**
* @class mdi 화면분리 모달리스 팝업
* @param {String} sPopId - 팝업아이디
* @param {String} sPopupCallback - 콜백
* @param {Object} arg - 파라미터 
* @return N/A	
* @example this.gfnSetOpenPopup(sPopId, sPopupCallback, arg);
*/
pForm.gfnSetOpenPopup = function (sPopupId, sPopupCallBack, arg)
{
	var objApp = nexacro.getApplication();
	if (system.navigatorname == "nexacro") 
	{
		var curX = objApp.mainframe.left;
		var curY = objApp.mainframe.top;
	}
	else 
	{
		var curX = window.screenLeft;
		var curY = window.screenTop;
	}
	var nLeft = curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	var nTop  = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);			
	var nWidth 		= 1101;
	var nHeight 	= 808;			
	var sOpenStyle 	= "showtitlebar=false showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true location=no autosize=false titletext='devPro'";

	nexacro.open(sPopupId, "frame::frmWorkPu.xfdl", this.getOwnerFrame()
			, {"arguments" : arg, popupType : "modeless", callback : sPopupCallBack, popupId : sPopupId}
			, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);

};


/**
* @class 매뉴얼 열려 있는 팝업 닫기
* @param {String} sId - 팝업아이디
* @return N/A	
* @example this.gfnCloseToOpenPopup(sId);
*/
pForm.gfnCloseToOpenPopup = function(sId)
{
	if (nexacro.getPopupFrames().length > 0)
   {
      var objframes = nexacro.getPopupFrames();
      for(var i=0; i< objframes.length; i++)
      {
		if(objframes[i].id == sId)
			objframes[i].form.gfnClosePopup("close");
			break;
      }
   }
};

/**
* @class  각 화면에 키업 이벤트에 사용하는 함수
* @param {Object} obj - Event가 발생한 Object.
* @param {Evnet}  e	  - Event Object.
* @return N/A
* @example objForm.addEventHandler("onkeyup", this.gfnOnkeyup, this);
*/
pForm.gfnOnkeyup = function(obj, e)
{	
	if (e.keycode == 27)
	{
		nexacro.getPopupFrames()[(nexacro.getPopupFrames().length-1)].form.close();
	}
};

pForm = null;