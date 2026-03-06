/* (사용안함)
 * 
 * 프로그램명 :  업무화면 리사이징 처리
 * 작  성  자  :
 * 작  성  일  :
 * 설      명  :
		resize flag 설정방법

		각 컨트롤의 UserData속성을 사용하고 UserData의 index 1~ 4(0부터 시작)에 resize 속성을
		설정 자리순서대로 Left|Top|Width|Height|순으로 설정하고
		값은 0 : resizing 처리 하지 않음
			 1 : resizing을 변한 크기 만큼 이동또는 크기를 반영
			 3 : resizing을 변한 비율 만큼 이동또는 크기를 반영
		예)  A1031: index 0: 자리를 마추는 index( 필수, 옵션 index) : 사용하지 않음
					index 1: Left위치를 크기기준으로 적용
					index 2: Top위치를  resizing처리하지 않음
					index 3: Right를 비율 기준으로 적용(Right 변경은 width가 변경됨)
					index 4: Bottom를 크기 기준으로 적용 (Bottom 변경은 Height가 변경됨)
* 수정일     :
* 수정자     :
* 수정내용   :
*/

prForm.fv_orgWidth = 0;
prForm.fv_orgHeight = 0;

prForm.fv_ArrLPos;
prForm.fv_ArrTPos;
prForm.fv_ArrRPos;
prForm.fv_ArrBPos;
prForm.rszv_enableResize = true;

/*
* 기능 : 포털에서 단독으로 사용하는 xplatform화면이 리사이즈가 가능하도록 설정
*/
prForm.rszfActiveResizableOnPortal = function(obj){
	//포털이 아닌경우 동작안함
	if(/* [X-LOG] 함수(smfIsPortal)를 찾을 수 없습니다.*/ smfIsPortal() != true) return;

	nexacro.getApplication().gv_initWidth  = 831;  //업무화면 초기 width
	nexacro.getApplication().gv_initHeight = 553;  //업무화면 초기 height
	var nX = nexacro.getApplication().gv_initWidth;
	var nY = nexacro.getApplication().gv_initHeight;


	prForm.lf_SetResize(obj, nX, nY);
};


prForm.rszfDisableResize = function(obj){
	prForm.rszv_enableResize = false;
};

prForm.rszfInitResize = function(obj, nX, nY){
	prForm.rszv_enableResize = true;
	if(/* [X-LOG] 함수(isNil)를 찾을 수 없습니다.*/ isNil(nX)) nX = nexacro.getApplication().gv_initWidth;
	if(/* [X-LOG] 함수(isNil)를 찾을 수 없습니다.*/ isNil(nY)) nY = nexacro.getApplication().gv_initHeight;

	prForm.lf_SetResize(obj, nX, nY);
};

/*
* 기능 : 화면 치우침 문제 관련 스크롤바 위치 이동
* 인수 : 없음
* 리턴 : 없음
*/
prForm.rszfResetFormScreenPosition = function(){
    prForm.vscrollbar.set_pos(0);
    prForm.hscrollbar.set_pos(0);
};


/*
* 기능 : 화면 리사이징 초기 설정함수
* 인수 : obj: 폼객체, Cx:초기 폼 width, Cy:초기 폼 Height
* 리턴 : 없음
*/
prForm.lf_SetResize = function(obj, Cx, Cy) {
	if(prForm.rszv_enableResize != true) return;

	//trace("lf_SetResize >>>>>>>>> " + obj.name + " :: " + obj.parent + " :: " + obj.parent.name);
	obj.setEventHandler('onsize',prForm.fnFrm_OnSize, this);
	//trace(Cx + " :: " + Cy + " :: " + obj.position.width +  " :: " + obj.position.height);

	var nCx, nCy;

	if(obj instanceof Tabpage) {
		nCx = obj.parent.getOffsetWidth();
		nCy = obj.parent.getOffsetHeight() - 26;	// 26 : Tab Button Height
	} else {
		nCx = obj.getOffsetWidth();
		nCy = obj.getOffsetHeight();
	}
	//trace("TabPage >>>>> " + nCx + " ::: " + nCy);

// 	var nCx   = obj.position.width;
// 	var nCy   = obj.position.height;

	prForm.fv_orgHeight = Cy;
	prForm.fv_orgWidth  = Cx;

	prForm.fv_ArrLPos = new Array();
	prForm.fv_ArrTPos = new Array();
	prForm.fv_ArrRPos = new Array();
	prForm.fv_ArrBPos = new Array();

	prForm.fnSetSize(obj, 0);

// // 	if(fv_orgWidth  > nCx) nCx = fv_orgWidth;
// // 	if(fv_orgHeight > nCy) nCy = fv_orgHeight;
	prForm.fnResizeProc(obj, nCx, nCy, 0);

	obj.form.resetScroll();
};

/*
* 기능 : 화면안의 컨트롤의 원 위치를 배열에 저장
* 인수 : obj: 폼객체, seq: 컨트롤의 폼에서의 위치 순서
* 리턴 :
*/
prForm.fnSetSize = function(obj, seq)
{
	var complist = obj.all;
    var sType;
    for(var i = 0 ; i < complist.length; i++ )
	{
		//sType = complist[i].toString().toUpperCase();

		//trace(sType + " :: " + complist[i].name);

		if(complist[i].noResize == "true") continue;
		if(complist[i] instanceof Dataset || complist[i] instanceof PopupDiv) continue;

		if(complist[i] instanceof Tabpage){// == false) {
		//if (sType != "[OBJECT TABPAGE]") {
			prForm.fv_ArrLPos[seq] = -999;
			prForm.fv_ArrTPos[seq] = -999;
			prForm.fv_ArrRPos[seq] = -999;
			prForm.fv_ArrBPos[seq] = -999;
		} else {
			prForm.fv_ArrLPos[seq] = complist[i].getOffsetLeft();
			prForm.fv_ArrTPos[seq] = complist[i].getOffsetRight();
			prForm.fv_ArrRPos[seq] = complist[i].getOffsetWidth();
			prForm.fv_ArrBPos[seq] = complist[i].getOffsetHeight();

			if (nexacro.getApplication().gv_useSR == true) {
				if(complist[i] instanceof Grid) {
					complist[i].setEventHandler('onsetfocus',webfSetFocusInfo, this);
					complist[i].usecontrolkey = false;
				}
			}
		}

		++seq;

		if(complist[i] instanceof Tab) {
			prForm.fnSetSize(complist[i], seq);
		} else if(complist[i] instanceof Div || complist[i] instanceof Tabpage) {
			if(/* [X-LOG] 함수(utlf_IsNull)를 찾을 수 없습니다.*/ utlf_IsNull(complist[i].url)) {
				seq = prForm.fnSetSize(complist[i], seq);
			}
		}

	}
	return seq;
};

/*
* 기능 : 화면의 OnSize이벤트에 대응하는 이벤트 함수
* 인수 : obj: 폼객체, nCx: 변경된 width, nCy:변경된 height ,nState: 폼 상태
* 리턴 :
*/
prForm.fnFrm_OnSize = function(obj, e)
{
//trace("OnSize>>>>>>>>  " + obj.name + " :: " + e.cx + " :: " + e.cy);
	var nCx, nCy;
	if(obj.noResize == "true") return false;
	if(obj instanceof Tabpage) {
		nCx = obj.parent.getOffsetWidth();
		nCy = obj.parent.getOffsetHeight() - 26;	// 26 : Tab Button Height
	} else {
		nCx = obj.getOffsetWidth();
		nCy = obj.getOffsetHeight();
	}
 ///trace("OnSize>>>>>>>>  " + obj.name + " :: " + nCx + " :: " + nCy);

// 	var nCx = e.cx;
// 	var nCy = e.cy;

	if(prForm.fv_orgWidth == 0) return;

// 	if(fv_orgWidth  > nCx) nCx = fv_orgWidth;
// 	if(fv_orgHeight > nCy) nCy = fv_orgHeight;

	prForm.fnResizeProc(obj, nCx, nCy, 0);

	obj.form.resetScroll();
};

/*
* 기능 : 화면의 size  변경에 따른 화면 resizing 처리
* 인수 : obj: 폼객체, nCx: 변경된 width, nCy:변경된 height,
          seq: 컨트롤의 폼에서의 위치 순서
* 리턴 :
*/
prForm.fnResizeProc = function(obj, nCx, nCy, seq)
{
///trace("fnResizeProc >>>>>>>>> " + obj.name + " ::: " + nCx + " :: " + nCy);
	var strUserData;
	var bHSizing = "0";
	var bWSizing = "0";
	var bLMoving = "0";
	var bTMoving = "0";

// 	var nWidthRate  = 1 + Math.ceil((nCx - fv_orgWidth)/fv_orgWidth, 3);
// 	var nHeightRate = 1 + Math.ceil((nCy - fv_orgHeight)/fv_orgHeight, 3);


	var nWidthRate  = 1 + Math.round((nCx - prForm.fv_orgWidth)/prForm.fv_orgWidth, 2);
	var nHeightRate = 1 + Math.round((nCy - prForm.fv_orgHeight)/prForm.fv_orgHeight, 2);


// 	var nWidthRate  = 1 + (nCx - fv_orgWidth)/fv_orgWidth;
// 	var nHeightRate = 1 + (nCy - fv_orgHeight)/fv_orgHeight;

	var nRetVal;
	var strType;
///trace("fnResizeProc >>>>>>>>> " + nCx + " :: " + nCy + " :: " + nWidthRate + " :: " + nHeightRate);
	for (var i = 0 ; i < obj.all.length; i++)
	{
		strType = obj.all[i].toString().toUpperCase();
		if(obj.all[i].noResize == "true") continue;
		switch(strType)
		{
			case "[OBJECT POPUPDIV]":
			case "[OBJECT MENU]":
			case "[OBJECT POPUPMENU]":
				continue;
				break;
			default:
			    //strUserData = obj.components[i].anchor;
			    //if(strUserData <> "default" && utlf_IsNull(strUserData) == false && strUserData <> "") continue;
			    strUserData = prForm.fnGetDefaultUserData(obj.all[i], strType);
			    //trace("UserData >>>>" + strUserData);
			break;
		}

		bLMoving = strUserData.substr(1, 1);
		bTMoving = strUserData.substr(2, 1);
		bWSizing = strUserData.substr(3, 1);
		bHSizing = strUserData.substr(4, 1);

		if (strType != "[OBJECT TABPAGE]") {

			obj.all[i].setOffsetLeft(prForm.fnGetSize(obj.all[i],bLMoving, prForm.fv_ArrLPos[seq], (nCx - prForm.fv_orgWidth), nWidthRate));
			obj.all[i].setOffsetTop(prForm.fnGetSize(obj.all[i],bTMoving, prForm.fv_ArrTPos[seq], (nCy - prForm.fv_orgHeight), nHeightRate));
			obj.all[i].setOffsetWidth(prForm.fnGetSize(obj.all[i],bWSizing, prForm.fv_ArrRPos[seq], (nCx - prForm.fv_orgWidth), nWidthRate));
			obj.all[i].setOffsetHeight(prForm.fnGetSize(obj.all[i],bHSizing, prForm.fv_ArrBPos[seq], (nCy - prForm.fv_orgHeight), nHeightRate));
		//trace(">>>>>>>>>> " + obj.components[i].position);
		}
		++seq;

		if (obj.all[i].all)
		{
			switch(strType) {
				case "[OBJECT TAB]":
					prForm.fnResizeProc(obj.all[i], nCx, nCy, seq);
					break;
				case "[OBJECT TABPAGE]":
				case "[OBJECT DIV]":
					if(/* [X-LOG] 함수(utlf_IsNull)를 찾을 수 없습니다.*/ utlf_IsNull(obj.all[i].url) == true) seq = prForm.fnResizeProc(obj.all[i], nCx, nCy, seq);
					obj.all[i].form.resetScroll();
					break;
			}
		}
	}

	return seq;
};

/*
* 기능 : 화면의 size  변경에 따른 옵션에 따른 컨트롤의 변경 값 계산
* 인수 : bflag: 플래그 값, oVal: 초기값, nChange: 사이즈 변경 값, nRate: 사이지 변경 비율
* 리턴 :
*/
prForm.fnGetSize = function(sobj, bflag, oVal, nChange, nRate)
{
	switch(bflag)
	{
		case "1":
			return oVal + nChange;
			break;

		case "2":
			return oVal + (nChange/2);
			break;

		case "3":
			//trace(sobj + "3333333333333>>>>> "  + oVal + " :: " + nRate + " :: " + (oVal*nRate));
			return oVal * nRate;
			break;

		case "4":
			return oVal * (nRate/2);
			break;

		default:
			return oVal;
			break;
	}
};

/*
* 기능 : 화면의 size  변경에 따른 옵션에 따른 컨트롤의 변경 값 계산
* 인수 : bflag: 플래그 값, oVal: 초기값, nChange: 사이즈 변경 값(수치), nRate: 사이지 변경 값(비율)
* 리턴 :
*/
prForm.fnGetDefaultUserData = function(obj, strType)
{
	switch(strType)
	{
		case "[OBJECT BUTTON]":
// 개발자 요청으로 클래스가 적용된 버튼도 리사이즈 처리(2012.01.30. 이상준)
/*
			if(utlf_IsNull(obj.class)) return "A3333";
			return "A3300";
*/
			return "A3333";
			break;
		case "[OBJECT IMAGEVIEWER]":
			return "A3300";
			break;
		case "[OBJECT RADIO]":
		case "[OBJECT CHECKBOX]":
		case "[OBJECT MASKEDIT]":
		case "[OBJECT EDIT]":
		case "[OBJECT COMBO]":
		case "[OBJECT CALENDAR]":
		case "[OBJECT SPIN]":
			return "A3333";
			break;
		case "[OBJECT STATIC]":
		case "[OBJECT TEXTAREA]":
		case "[OBJECT GRID]":
		case "[OBJECT TAB]":
		case "[OBJECT MULTILINETAB]":
		case "[OBJECT TABPAGE]":
		case "[OBJECT DIV]":
		case "[OBJECT ACTIVEX]":
		  return "A3333";
			break;
		default:
		  return "A3333";
			break;
	}
};

prForm.fnSetGridFocusEvent = function(obj) {
	// trace(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Popup");
	var complist = obj.all;
    for(var i = 0 ; i < complist.length; i++ )
	{
		if(complist[i] instanceof Dataset || complist[i] instanceof PopupDiv) continue;

// Web-Accessibility  :: web_script.xjs에 추가 Event 처리
		if (nexacro.getApplication().gv_useSR == true) {
			if(complist[i] instanceof Grid) {
				/* [X-LOG] 변수(webfSetFocusInfo)가 있는지 확인이 필요합니다.*/ complist[i].setEventHandler('onsetfocus',webfSetFocusInfo, this);
				/* [X-LOG] usecontrolkey은 지원되지 않는 속성입니다.*/ complist[i].usecontrolkey = false;
			}
		}

// 		if(complist[i] instanceof Grid){
// 			complist[i].onsetfocus.setHandler(webfSetFocusInfo);
// 		}
		/////////////////////////////////////////////////////////

		if(complist[i] instanceof Tab) {
			prForm.fnSetGridFocusEvent(complist[i]);
		} else if(complist[i] instanceof Div || complist[i] instanceof Tabpage) {
			if(/* [X-LOG] 함수(utlf_IsNull)를 찾을 수 없습니다.*/ utlf_IsNull(complist[i].url)) {
				prForm.fnSetGridFocusEvent(complist[i]);
			}
		}
	}
};

prForm.rszfBeginResize = function(form){
	var sizes = {};
	sizes.width = form.getOwnerFrame().getOffsetWidth();
	sizes.height = form.getOwnerFrame().getOffsetHeight();
// 	form.position.width = gv_initWidth;
// 	form.position.height = gv_initHeight;
	form.setOffsetWidth(831);
	form.setOffsetHeight(553);


	/* [X-LOG] updateWindow은 지원되지 않는 메서드입니다.*/ form.updateWindow();
	return sizes;
};

prForm.rszfEndResize = function(form, sizes){
// 	form.position.width = sizes.width;
// 	form.position.height = sizes.height;
	prForm.lf_SetResize(this,prForm.getOffsetWidth(), prForm.getOffsetHeight());
	/* [X-LOG] updateWindow은 지원되지 않는 메서드입니다.*/ form.updateWindow();
};

/*
 * 기능 : 스크립트에 의해 동적으로 url Change 되는 서브 form에서 Form Load 시 Resize되도록 하는 함수
           반드시 서브 Form 초기화 함수(smfInitDiv) 호출 후 호출해야 한다.
 * 인수 : obj: Form 객체, strWidthID: Width 초기값을 갖는 상위Form의 변수명, strHeightID: Height 초기값을 갖는 상위Form의 변수명
 * 리턴 :
 */
prForm.rszfResizeUrlChangedForm = function(obj, strWidthID, strHeightID)
{
	if (obj instanceof Div) {
		var objParentForm	= obj.parent;

		if (/* [X-LOG] 함수(utlf_IsNull)를 찾을 수 없습니다.*/ objParentForm[strWidthID] != undefined && utlf_IsNull(objParentForm[strWidthID]) == false && objParentForm[strWidthID] > 0) {
			prForm.fv_orgWidth		= objParentForm[strWidthID];
			prForm.fv_orgHeight	= objParentForm[strHeightID];

			obj.setOffsetHeight(1);
			obj.getOffsetHeight() -= 1;
		}
	}
	else if (obj instanceof Tabpage) {
		var objParentForm	= (obj.parent).parent;

		if (/* [X-LOG] 함수(utlf_IsNull)를 찾을 수 없습니다.*/ objParentForm[strWidthID] != undefined && utlf_IsNull(objParentForm[strWidthID]) == false && objParentForm[strWidthID] > 0) {
			prForm.fv_orgWidth		= objParentForm[strWidthID];
			prForm.fv_orgHeight	= objParentForm[strHeightID];

			(obj.parent).setOffsetHeight(1);
			(obj.parent).getOffsetHeight() -= 1;
		}
	}
};

