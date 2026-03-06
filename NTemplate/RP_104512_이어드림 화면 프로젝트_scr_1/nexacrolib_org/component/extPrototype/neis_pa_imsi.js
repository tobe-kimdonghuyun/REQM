/**
*  나이스 대국민 공통
*  @FileName 	neis_pa_imsi.js 
*  @Creator 	consulting
*  @CreateDate 	2022.05.18
*  @Desction   	대국민 공통
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2022.05.18     	consulting 	                최초 생성 
*******************************************************************************
*/


// 2023.05.15 국정원보안적용(라이선스)
nexacro.Application.initApplication=function()
{
	nexacro._initApplication();
	nexacro._initLayoutManager(true,true,true);
	this.on_initApplication();
	//nexacro._initInformation();
};

// (2023.02.22)  다이얼로그가 닫힐때, 크롬에서 검은색배경이 없어지지 않는 문제 해결
nexacro._GridCellControl.prototype._on_focus = function(_a, _b, _c, _d, _e, _f) {
	if(this._grid)
	{
		this._grid._focused_row = this._getDataRow();
		this._grid._focused_cell = this._cellidx;
		nexacro.Component.prototype._on_focus.call(this, _a, _b, _c, _d, _e, _f);
	}
}

//**********************************************************************************************
//  2023.03.02 - 파일업로드 다운로드 샘플에서 Onload시 에러나는 경우 대응 - START
//               (Runtime에서만 발생 - ComComp.js)  ===>  해결 - 1340 버전
//**********************************************************************************************
/*
nexacro.WebBrowser.prototype.on_killfocus_basic_action11=function(_a,_b){
	var _c=this._ifrm_elem;
	if(_c&&this._old_evt_name=="downkey"){
		if(_c._setElementBackwardFocus)
		{
			_c._setElementBackwardFocus(this._getAccessibilityReadLabel(),this.accessibilityleavemessage);
		}
		this._old_evt_name="";
	}
	nexacro.Component.prototype.on_killfocus_basic_action.call(this);
};


nexacro.WebBrowser.prototype._apply_setfocus11=function(_a,_b,_c,_d)
{
	var _e=this._ifrm_elem;
	if(_e){
		if(nexacro._enableaccessibility&&nexacro._accessibilitytype==2)
		{
			if(!_a)
			{
				if(_c==this._refform._getPrevComponent(this,true))
				{
					_a="downkey";
				}else
				{
					_a="upkey";
				}
				this._old_evt_name=_a;
			}
			
			if(_a=="downkey"||_a=="tabkey")
			{
				if(_e._setElementForwardFocus)
				{
					_e._setElementForwardFocus(this._getAccessibilityReadLabel(),this.accessibilityleavemessage);
				}
			}
			else if(_a=="upkey"||_a=="shifttabkey")
			{
				if(_e._setElementBackwardFocus)
				{
					_e._setElementBackwardFocus(this._getAccessibilityReadLabel(),this.accessibilityleavemessage);
				}
			}
		}
		else
		{
			_e._setElementFocus();
		}
	}
};
*/
//**********************************************************************************************
//  2023.03.02 - 파일업로드 다운로드 샘플에서 Onload시 에러나는 경우 대응 - END
//               (Runtime에서만 발생 - ComComp.js)
//**********************************************************************************************

//**********************************************************************************************
//  2023.04.10 - 로그아웃연장팝업 뜰 경우, 대입전형에서 에러나는 경우 대응 - Start
//               (Runtime에서만 발생 - ComBase.js)
//**********************************************************************************************
nexacro.MainFrame.prototype._getTitleText = function(_a) {
	var _b;
	_b = this.titletext||"";
	if (_a) {
		var _c = this.frame;
		if (_c) {
			var _d = _c._getTitleText(true);
			// (수정)
			//if (_d.length > 0) {
			if (_d.length > 0) {
				// (수정)
				//if (_b.length > 0) {
				if (_b&&_b.length > 0) {
					_b += " - ";
				}
				_b += _d;
			}
		}
	}
	return _b;
}
;	
//**********************************************************************************************
//  2023.04.10 - 로그아웃연장팝업 뜰 경우, 대입전형에서 에러나는 경우 대응 - End
//               (Runtime에서만 발생 - ComBase.js)
//**********************************************************************************************

//**********************************************************************************************
//  2023.06.29 - 엑셀Export시에 운영에서 URL이 다르게 나와서 다운이 안받아지는 현상 - Start
//               (Runtime에서만 발생 - ComComp.js)
//**********************************************************************************************
nexacro._downloadExport_original = nexacro._downloadExport;
nexacro._downloadExport = function(_a, _b, _c, _d, _e, _f, _g, _h)
{
	//
	var sBrowser = nexacro._Browser;	
	if (sBrowser == "Runtime") 
	{
		var sRunMode = nexacro.getEnvironmentVariable("ev_runMode");
		if(sRunMode=="3") // 운영
		{
			_a = nexacro.replaceAll(_a,"http://ud-was.vm.neisplus.kr:8080","https://admission.neis.go.kr");
		}
		else if(sRunMode=="2") // 개발
		{
			_a = nexacro.replaceAll(_a,"http://172.16.12.26:8080","http://dev.admission.neis.go.kr");
		}
		
		nexacro._downloadExport_original(_a, _b, _c, _d, _e, _f, _g, _h);
	}
	else
	{
		nexacro._downloadExport_original(_a, _b, _c, _d, _e, _f, _g, _h);
	}
}

//**********************************************************************************************
//  2023.06.29 - 엑셀Export시에 운영에서 URL이 다르게 나와서 다운이 안받아지는 현상 - End
//               (Runtime에서만 발생 - ComComp.js)
//**********************************************************************************************



//**********************************************************************************************
//  2023.07.31 - 교육설문에서 TextArea를 생성하거나 클릭시 removeAttribute()에러 발생하는 건 - Start
//               (PC에서만 발생 - Accessbility.js)
//**********************************************************************************************

    if (nexacro.TextAreaElement) {
        var _pTextAreaElement = nexacro.TextAreaElement.prototype;
        _pTextAreaElement._on_createAccessibilityHandle = function(_a) {
            if (nexacro._enableaccessibility) {
                var _b = this.parent_elem;
                nexacro.__setDOMAccessibility_LabelBy(_a, _b.name);
                if (nexacro._accessibilitytype < 4) {
                    if (this.readonly || !this.enable) {
                        nexacro.__setDOMAccessibility_StatHidden(_a,true);
                    } else {
                        nexacro.__setDOMAccessibility_StatHidden(_a,false);
                    }
                } else if (nexacro._accessibilitytype == 4 || nexacro._accessibilitytype == 5) {
                    nexacro.__setDOMAccessibility_Role(_a, _b.accessibilityrole);
                }
            }
        }
        ;
	}
	
//**********************************************************************************************
//  2023.07.31 - 교육설문에서 TextArea를 생성하거나 클릭시 removeAttribute()에러 발생하는 건 - End
//               (PC에서만 발생 - Accessbility.js)
//**********************************************************************************************
	