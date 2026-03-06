//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html	
//
//==============================================================================
//==============================================================================
// Object : nexacro.PeriodCalendar
// Group : Component
//==============================================================================
if (!nexacro.PeriodCalendar)
{
    //==============================================================================
    // nexacro.PeriodCalendar
    //==============================================================================
    nexacro.PeriodCalendar = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
    {
        nexacro.Div.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
    };

    var _pPeriodCalendar = nexacro._createPrototype(nexacro.Div, nexacro.PeriodCalendar);
    nexacro.PeriodCalendar.prototype = _pPeriodCalendar;
    _pPeriodCalendar._type_name = "PeriodCalendar";

   /* internal variable */
  _pPeriodCalendar.value = undefined;

  /* event list */
  _pPeriodCalendar._event_list["onchanged"] = 1;

  /* accessibility */
  _pPeriodCalendar.accessibilityrole = "button";
   	

    //===============================================================
    // nexacro.PeriodCalendar : Create & Destroy & Update
    //===============================================================
	
	/*
	 Description : createComponent 실행시 nexacro.ControlElement 를 생성 후 호출됨
	 Todo :
	 control이 있다면 create() & createComponent() 호출
	 return : 없음
	 */
    _pPeriodCalendar.on_create_contents = function ()
	{
		nexacro.Div.prototype.on_create_contents.call(this);
		
		// UI Components Initialize
		obj = new Calendar("calFrom","0","0","102","24",null,null,null,null,null,null,this);
		obj.set_taborder("0");
		obj.set_dateformat("yyyy-MM-dd");
		obj.set_popuptype("none");
		this.form.addChild(obj.name, obj);

		obj = new Static("Static00","105","2","8","21",null,null,null,null,null,null,this);
		obj.set_taborder("1");
		obj.set_text("~");
		this.form.addChild(obj.name, obj);

		obj = new Calendar("calTo","118","0","102","24",null,null,null,null,null,null,this);
		obj.set_taborder("0");
		obj.set_popuptype("none");
		obj.set_dateformat("yyyy-MM-dd");
		this.form.addChild(obj.name, obj);

		obj = new PopupDiv("pdvCal","0","26","350","260",null,null,null,null,null,null,this);
		obj.set_text("PopupDiv00");
		obj.set_background("wheat");
		this.form.addChild(obj.name, obj);

		obj = new Static("staTitle","0","0",null,"36","0",null,null,null,null,null,this.form.pdvCal.form);
		obj.set_taborder("0");
		obj.set_text("기간선택");
		obj.set_background("slategray");
		obj.set_color("white");
		obj.set_font("bold 14pt \"맑은 고딕\"");
		obj.set_padding("0px 0px 0px 10px");
		obj.set_textAlign("left");
		obj.getSetter("uWord").set("popup.periodselect");
		this.form.pdvCal.form.addChild(obj.name, obj);

		obj = new Button("btnPdvClose",null,"8","21","21","8",null,null,null,null,null,this.form.pdvCal.form);
		obj.set_taborder("1");
		obj.set_text("X");
		this.form.pdvCal.form.addChild(obj.name, obj);

		obj = new Calendar("pdvCalFrom","8","43","160","179",null,null,null,null,null,null,this.form.pdvCal.form);
		obj.set_taborder("2");
		obj.set_dateformat("yyyy-MM-dd");
		obj.set_editformat("yyyy-MM-dd");
		obj.set_type("monthonly");
		obj.set_showmonthspin("false");
		obj.set_usetrailingday("false");
		obj.set_popuptype("none");
		obj.set_value("");
		this.form.pdvCal.form.addChild(obj.name, obj);

		obj = new Calendar("pdvCalTo","180","43","160","179",null,null,null,null,null,null,this.form.pdvCal.form);
		obj.set_taborder("2");
		obj.set_dateformat("yyyy-MM-dd");
		obj.set_editformat("yyyy-MM-dd");
		obj.set_type("monthonly");
		obj.set_showmonthspin("false");
		this.form.pdvCal.form.addChild(obj.name, obj);

		obj = new Button("btnPdvConfirm","129","228","40","21",null,null,null,null,null,null,this.form.pdvCal.form);
		obj.set_taborder("3");
		obj.set_text("확인");
		obj.getSetter("uWord").set("popup.ok");
		this.form.pdvCal.form.addChild(obj.name, obj);

		obj = new Button("btnPdvCancle","179","228","40","21",null,null,null,null,null,null,this.form.pdvCal.form);
		obj.set_taborder("3");
		obj.set_text("취소");
		obj.getSetter("uWord").set("popup.cancel");
		this.form.pdvCal.form.addChild(obj.name, obj);
		
		this.form.calFrom.createComponent();
		this.form.Static00.createComponent();
		this.form.calTo.createComponent();
		this.form.pdvCal.createComponent();
		
		this.form.calFrom.addEventHandler("ondropdown",this._calFrom_ondropdown,this);
		this.form.calTo.addEventHandler("ondropdown",this._calFrom_ondropdown,this);
		this.form.pdvCal.form.btnPdvClose.addEventHandler("onclick",this._pdvCal_btnPdvCancle_onclick,this);
		this.form.pdvCal.form.btnPdvConfirm.addEventHandler("onclick",this._pdvCal_btnPdvConfirm_onclick,this);
		this.form.pdvCal.form.btnPdvCancle.addEventHandler("onclick",this._pdvCal_btnPdvCancle_onclick,this);
		// BindItem Information
	};
	
	/*
	 Description : on_created 실행시 호출됨
	               on_created() 는 component의 Element를 Node를 생성하여 실체화한다 
				   동적으로 component를 생성하면 호출됨
	 Todo :
	 control property 설정 및 control.on_created() 호출한다.
	 parameter : win (component 가 속한 nexacro._Window)
	 return : 없음*/
    _pPeriodCalendar.on_created_contents = function (win)
	{		 
	  	this.form.on_created(win);	
	};
	
	 //===============================================================
    // nexacro.PeriodCalendar : Properties
    //===============================================================
	
	/*
	 property 추가 
	*/
	_pPeriodCalendar.userprop = true;
	_pPeriodCalendar.set_userprop = function(v)
	{
	};
	
	_pPeriodCalendar.setInit = function ()
	{
		this.form.calFrom.set_value("");	//FROM 달력 셋팅
       	this.form.calTo.set_value("");		//TO 달력 셋팅
	};
	
	_pPeriodCalendar.setFromvalue = function(v)
	{
		this.form.calFrom.set_value(v);
	};
	
	_pPeriodCalendar.setTovalue = function(v)
	{
		this.form.calTo.set_value(v);
	}; 
	
	_pPeriodCalendar.getFromvalue = function()
	{
		return this.form.calFrom.value;
	}; 
	
	_pPeriodCalendar.getTovalue = function()
	{
		return this.form.calTo.value;
	}; 
	//===============================================================
    // nexacro.PeriodCalendar : Methods
    //===============================================================
    /*
	method 추가
	*/
	_pPeriodCalendar._calFrom_ondropdown = function ()
    {
		//TODO:        
		var fromvalue = this.form.calFrom.value;
		var tovalue = this.form.calTo.value;

		var d = new Date();
		var today = d.getFullYear()
			  + ((d.getMonth() + 1) + "").padLeft(2, '0')
			  + (d.getDate() + "").padLeft(2, '0');

		//from달력세팅
		if (fromvalue == null || fromvalue =="" || fromvalue == "undefined") {
			this.form.pdvCal.form.pdvCalFrom.set_value(today.substr(0,6) + "01");
		} else {
			this.form.pdvCal.form.pdvCalFrom.set_value(fromvalue);
		}

		//TO 달력 셋팅
		if (tovalue == null || tovalue =="" || tovalue == "undefined") {
			this.form.pdvCal.form.pdvCalTo.set_value(today);
		} else {
			this.form.pdvCal.form.pdvCalTo.set_value(tovalue);
		}

		this.form.pdvCal.trackPopupByComponent(this , 0, this.getOffsetHeight());
    };
	
	_pPeriodCalendar._pdvCal_btnPdvCancle_onclick = function ()
	{
		this.form.pdvCal.closePopup();
	};
	
	_pPeriodCalendar._pdvCal_btnPdvConfirm_onclick = function ()
	{
		var sFromValue = this.form.pdvCal.form.pdvCalFrom.value;
		var sToValue = this.form.pdvCal.form.pdvCalTo.value;

		this.form.calFrom.set_value(sFromValue);
		this.form.calTo.set_value(sToValue);
		this.form.pdvCal.closePopup();
	};

	 /*
	  Description : form load시 component를 innerhtml 형태로 string을 리턴함
	   on_created_contents 함수에서 element에서 설정한 코딩과 동일하게 작성함
	   container component가 내부 component를 일괄 생성될때 호출됨
	 Todo :
	 control 의 createCommand() 함수를 호출해 innerhtml 형태의 string을 만든다. 
	 parameter : 없음
	 return : string (control의 innerhtml형태의 string)
	 
    _pPeriodCalendar.on_create_contents_command = function ()
	{
		TODO:
		return control.createCommand();
	};
	*/
	
	/*
	 Description : innerhtml 이 생성된 후에 nexacro.Element의 handle에 실제 node handle을 attach함
	 Todo :
	 control 의 attachHandle() 함수를 호출해 nexacro.Element의 handle에 실제 node handle을 attach함
	 parameter : win (component 가 속한 nexacro._Window)
	 return : 없음
	 
    _pPeriodCalendar.on_attach_contents_handle = function (win)
	{
		TODO:
		control.attachHandle(win);
	};
	*/
	
	
	/*
	 Description : destroy 될때 호출되는 됨
	 Todo :
	 control 의 destroy() 함수를 호출해 
	 return : 없음
    _pPeriodCalendar.on_destroy_contents = function ()
	{
		TODO:
		control.destroy();
		control = null;
	};
	*/

     
	 
    //===============================================================
    // nexacro.PeriodCalendar : Override
    //===============================================================
		/*
	Description : component의 enable property 값이 변경될때 호출됨
		
	TODO :
	control이 있을 경우 control의 enable을 처리해야 함
	return : 없음
	*/
	 _pPeriodCalendar.on_apply_prop_enable = function (v)
    {
		//TODO
		control.on_apply_prop_enable(v);
    };
	
	/* 
	Description : simple bind를 지원하기 위한 함수
	TODO :
	simple bind property를 설정함
	return : string (simple bind property)
	
    _pPeriodCalendar.on_getBindableProperties = function ()
    {
        return "value";
    };
    */
	
	/*
	Description : Component의 client size가 변경되었을 때 호출되는 함수
	TODO :
	control의 size 변경
	parameter : width(client width), height (client height)
	return : 없음
	
	_pPeriodCalendar.on_change_containerRect = function (width, height)
	{
		return nexacro.Div.on_change_containerRect.call(this, width, height);
	};
	*/
	
	
	/*
	Description : userstatus 가 변경될때 발생
	
	TODO :
	userstatus가 변경될때 처리할 코드를 구현함
	parameter : changestatus(변경할 userstatus), value (변경할 userstatus의 값)
	applyuserstatus(적용될 userstatus), currentstatus(현재 status), currentuserstatus(현재 userstatus)
	return : string (적용될 userstatus)
	
    _pPeriodCalendar.on_changeUserStatus = function (changestatus, value, applyuserstatus, currentstatus, currentuserstatus)
    {
        return applyuserstatus;
    };
	*/
	
	/*
	Description : status 가 변경될때 발생
	
	TODO :
	status가 변경될때 처리할 코드를 구현함
	parameter : changestatus(변경할 status), value (변경할 status의 값)
	applyuserstatus(적용될 status), currentstatus(현재 status), currentuserstatus(현재 userstatus)
	return : string (적용될 status)
	
	 _pPeriodCalendar.on_changeStatus = function (changestatus, value, applystatus, currentstatus, currentuserstatus)
    {
        return applystatus;
    };
	*/
	
	/*
	Description : fittocontents property 를 제공할때 사이즈를 리턴하는 함수
	
	TODO :
	component의 contents 사이즈를 리턴함	
	return : array (0: width, 1:height)
	
	 _pPeriodCalendar._on_getFitSize = function ()
    {
		//TODO
        //return [this._adjust_width, this._adjust_height];
    };
	*/
	
	/*
	Description : control로 사용될때 control의 id를 리턴함
	nexacro.Element의 idselector에 설정되는 값으로 node에 cssclass값에 적용됨
	
	TODO :
	control의 id를 리턴함
	return : string (control의 id)
	
	 _pPeriodCalendar.on_getIDCSSSelector = function ()
    {
		//TODO
        //return this.name;
    };
	*/
	
	/*
	Description : component의 cssclass property 값이 변경될때 호출됨
	control이 있을 경우 control의 cssclass 변경을 처리해야 함
	
	TODO :
	control이 있을 경우 control의 cssclass 변경을 처리해야 함
	return : 없음
	
	 _pPeriodCalendar.on_apply_prop_cssclass = function ()
    {
		//TODO
		//control.on_apply_cssclass();
    };
	*/
	
	/*
	Description : component의 text, expr property 값이 변경될때 호출됨
		
	TODO :
	component에서 개별 처리해야 할 내용이 있을 경우에 변경 처리해야함
	return : 없음
	
	 _pPeriodCalendar.on_apply_text = function (text)
    {
		//TODO
		//
    };
	*/
	

	
	/*
	Description : component의 accessibility label property 값이 없을 때 읽어줄값 을 정의함
		
	TODO :
	label 로 읽힐 값들을 재정의함
	
	return : 없음
	
	 _pPeriodCalendar.on_get_accessibility_label = function ()
    {
		//TODO
		return nexacro.Div.on_get_accessibility_label.call(this);
    };
	*/
	
	/*
	Description : component의 accessibility description property 값이 없을 때 읽어줄값 을 정의함
		
	TODO :
	descript 로 읽힐 값들을 재정의함
	
	return : 없음
	
	 _pPeriodCalendar.on_get_accessibility_description = function ()
    {
		//TODO
		return nexacro.Div.on_get_accessibility_description.call(this);
    };
	*/
	
	/*
	Description : component의 accessibility action property 값이 없을 때 읽어줄값 을 정의함
		
	TODO :
	action 로 읽힐 값들을 재정의함
	
	return : 없음
	
	 _pPeriodCalendar.on_get_accessibility_action = function ()
    {
		//TODO
		return nexacro.Div.on_get_accessibility_action.call(this);
    };
	*/
	
	
	
	/*
	Description : focus를 받았을때 setfocus event 발생후 호출됨 
	
	TODO :
	 개별 처리할 부분에 대한 재정의
	parameter : evt_name(이벤트 발생시점)
	
	 _pPeriodCalendar.on_apply_custom_setfocus= function (evt_name)
    {
       
    };
	*/
	
   
	

	
	
    //===============================================================
    // nexacro.PeriodCalendar : Events
    //===============================================================
	
	/*
	event 추가
	
	_pPeriodCalendar._event_list["onuserevent"] = 1;	
	nexacro.UserEventInfo = function (obj, id)
    {
        this.id = this.eventid = id || "onuserevent";
        this.fromobject = this.fromreferenceobject = obj;
    };
    var _pUserEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.UserEventInfo);
    nexacro.UserEventInfo.prototype = _pUserEventInfo;
    _pUserEventInfo._type_name = "UserEventInfo";

    delete _pUserEventInfo;
    _pUserEventInfo = null; 
	
    _pPeriodCalendar.on_fire_onuserevent = function (key_code, alt_key, ctrl_key, shift_key, from_comp, from_refer_comp)
    {
       if (this.onuserevent && this.onuserevent._has_handlers)
        {
            var evt = new nexacro.UserEventInfo(this, "onuserevent");
            return this.onuserevent._fireEvent(this, evt);
        }
    };
     */
	 

    delete _pPeriodCalendar;
}


