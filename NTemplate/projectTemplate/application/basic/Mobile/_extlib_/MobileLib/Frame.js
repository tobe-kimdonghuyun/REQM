/**
*  Mobile 프로젝트 Library
*  @FileName 	Frame.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023/10/30
*  @Desction   
************** 소스 수정 이력 ***********************************************
* Date					Modifier					Description
*******************************************************************************
* 2023/10/30			TOBESOFT					최초생성
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/* 메뉴정보 칼럼 변수*/
pForm.FRAME_MENUCOLUMNS = 
{
	menuId 			: "MENU_ID",    		// 아이디
	menuNm 			: "MENU_NM",			// 명칭
	menuLevel 		: "MENU_LV",     		// 메뉴레벨	
	pageUrl 		: "MENU_URL",     		// 메뉴레벨	
	groupId			: "MODULE_CD",			// 메뉴그룹 아이디
	prgmFileNm		: "PRGM_FILE_NM",		// 프로그램 파일명
	searchBtnYn     : "CMMNBTNSEARCH",      // 공통조회버튼 사용여부 
	addBtnYn		: "CMMNBTNADD",			// 공통추가버튼 사용여부 
	delBtnYn		: "CMMNBTNDEL",			// 공통삭제버튼 사용여부
	saveBtnYn		: "CMMNBTNSAVE",		// 공통저장버튼 사용여부
};

/************************************************************************************************
* Frame 제어 관련
************************************************************************************************/
/**
* @class 모바일여부반환
* @param  none
* @return "1"/"0"
* @example this.gfnIsMobile();
*/
pForm.gfnIsMobile = function ()
{
	var uA = ((nexacro._isMobile && nexacro._isMobile()) || (nexacro._isHybrid && nexacro._isHybrid()) || (!nexacro._isDesktop() && nexacro._OS == "Android" && nexacro._Browser == "Runtime"))
	if (uA==true||uA=="true") {
		return "1";
	}
	else {
		return "0";
	}
};

/**
* @class  Login화면으로 이동(로그아웃처리) 
* @param  none
* @return N/A
* @example this.gfnGoLogin();
*/ 
pForm.gfnGoLogin = function()
{
	var objApp = nexacro.getApplication();
	
	if (objApp.gvFrameStat == "login")		return;
	
	if (system.navigatorname == "nexacro") 
	{
		objApp.gvFrameStat	= "login";

		// 닫을때 체크안함.
		objApp.gvCloseCheck = false;
		
		// 폼닫기
		try {
			objApp.gvFrmMdi.form.fnCloseAll(false);
		} catch(e){}
		
		// URL 초기화
		objApp.gvFrmTop.set_formurl("");
		objApp.gvFrmLeft.set_formurl("");
		objApp.gvFrmMdi.set_formurl("");
		objApp.gvFrmMain.set_formurl("");
		objApp.gvFrmLogin.set_formurl(objApp.LOGIN_FORM_PATH);
		
		objApp.gvVfrs.set_separatesize("*,0,0");
		objApp.gvHfrs.set_separatesize("0,*");
 	} else 
	{
 		window.top.location.reload(true);
 	}
};

// /************************************************************************************************
// * Form 제어 관련
// ************************************************************************************************/
/**
* @class frame open <br>
* @param {Object} obj - 화면
* @return N/A
* @example this.gfnFormOnLoadM(this);
*/
pForm.gfnFormOnLoadM = function(objForm)
{
	var objApp = nexacro.getApplication();
	// QuikView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y")
	{		
		objApp.mainframe.set_titletext("로컬(Studio) - " + objForm.name);
		objApp.mainframe.set_showtitlebar(true);
		objApp.mainframe.set_border("1px solid black");
	}	

	var xadl = nexacro.getApplication().xadl;   //xadl은 미지원 속성값. 임시로 사용중
		
	if (xadl.indexOf("quickview") == -1) { 
		//화면 리사이즈 처리
		//arrangement 방식
		this.gfnResizeComp(this, true);
	}
	
	// 권한 체크
	this.gfnAuthCheck(objForm);	
};

/**
* @class 권한 체크<br>
* @param {Object} obj - 화면
* @return N/A
* @example this.gfnAuthCheck(this);
*/
pForm.gfnAuthCheck = function(objForm)
{
	var objApp  = nexacro.getApplication();
	var sMenuId = objApp.gvOpenMenuId;
	
	if(this.gfnIsNull(sMenuId)) return;
	
	// 권한 가져오기
	var sButtonAuth    = this.gfnGetAuthButton(sMenuId);	// 공통버튼 권한

	//등록버튼 세팅
	this.gfnSetCommonBtnM(sButtonAuth);
};

/**
* @class gdsMenu에서 버튼권한 가져오기
* @param {String} sMenuId: 메뉴Id
* @return N/A
* @example this.gfnGetAuthButton(sMenuId)
*/
pForm.gfnGetAuthButton = function(sMenuId)
{   
	var objApp = nexacro.getApplication();
	
	var sSearch 	= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.searchBtnYn)=="1"?"1":"0";
	var sAdd 		= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.addBtnYn)=="1"?"1":"0";
	var sDelete 	= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.delBtnYn)=="1"?"1":"0";
	var sSave 		= objApp.gdsMenu.lookup(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.saveBtnYn)=="1"?"1":"0";

	var sValue = sSearch + sAdd + sDelete + sSave;

	return sValue;	
};

/**
* @class left메뉴 클릭시 해당화면 호출함수 <br>
* @param {Object} oObj 
* @return N/A
* @example this.gfnCallM(oObj);
*/
pForm.gfnCallM = function(oObj)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = nexacro.getApplication();
	
	var ds      = oObj.ds;							//넘어온 dataset
	var nRow    = oObj.nRow;						//선택된 현재 row
	var sMenuId;
	// 글로벌 변수에 값 저장
	objApp.gvOpenMenuId = ds.getColumn(nRow, "MENU_ID");	
	
 	//oObj.aArgs세팅
 	var objArg ={}
 	
	//메뉴 데이터셋의 각 칼럼 값 objArg에 담기
	for(var i=0; i<ds.getColCount(); i++)
	{
		var sColId = ds.getColID(i);
		objArg[sColId] = ds.getColumn(nRow, sColId);
	}
	oObj.oArgs = objArg;
	
	if (!this.gfnIsNull( oObj.sMenuId)){
		sMenuId = oObj.sMenuId;
	}else{
		sMenuId = ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuId);
		oObj.sMenuId = sMenuId;
	}

    var pThis = objApp.mainframe.baseChild.form;

    if (!this.gfnIsNull(pThis.divCenter.form.divWork.url))
    {
        //close 체크
        pThis.fnWorkFrameClose(sMenuId, oObj);
    } 
    else
    {
        this._gfnCallM(sMenuId, oObj);
    } 
};

/**
* @class 화면호출 내부용 <br>
* @param {Object} oObj 
* @return N/A
* @example this._gfnCallM(oObj);
*/
pForm._gfnCallM = function(sMenuId, oObj)
{	
    var objApp  = nexacro.getApplication();
    var gdsMenu = objApp.gdsMenu;
    var pThis   = objApp.mainframe.baseChild.form;	

    var aArgs 	= this.gfnIsNull(oObj.oArgs) ? "" : oObj.oArgs ;   //넘어온 arguments

	var sPageUrl = gdsMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.pageUrl);
	var sGroupId = gdsMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.groupId);	

	if(this.gfnIsNull(sPageUrl)) return;		//pageURl 이 없으면 return
    
	//각 form 및 컴포넌트 visible 처리 및 setUrl
    pThis.divMain.set_visible(false);
    pThis.divCenter.set_visible(true);
	pThis.divTop.form.btnBack.set_visible(true);
    pThis.divCenter.form.vscrollbar.set_pos(0);
	pThis.divCenter.form.divWork.set_url("");
    pThis.divCenter.form.divWork.set_url(sPageUrl);
	pThis.divTop.form.sta00.set_text(aArgs[this.FRAME_MENUCOLUMNS.menuNm]);
    pThis.fnAction("MENU", false);
};

/**
* @class 메인화면 추가(+)버튼 노출 여부
* @param  {String} sAuth	- 권한 문자열
* @return N/A
* @example this.gfnSetCommonBtnM();
*/
pForm.gfnSetCommonBtnM = function(sAuth)
{
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") return;
	var objApp = nexacro.getApplication();
	var objFrame = objApp.mainframe.baseChild;
	var bDivCenterVisible = objFrame.form.divCenter.visible;

	// 권한 체크
	var sSearchFlag = sAuth.charAt(0);
	var sAddFlag = sAuth.charAt(1);
	
	if (bDivCenterVisible)
	{
		if (!this.gfnIsNull(objFrame.form.divCenter.form.divWork.form.components["btnSearch"]))
		{
			if (sSearchFlag == 0)
			{
				objFrame.form.divCenter.form.divWork.form.btnSearch.set_enable(false);
			}
		}
	}
}


pForm = null;