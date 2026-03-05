(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalFromTo");
            this.set_titletext("기간달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(258,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calFrom","0","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","125","2","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","138","0","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","26","350","260",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"35","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("0");
            obj.set_text("기간선택");
            obj.getSetter("uWord").set("popup.periodselect");
            obj.set_cssclass("sta_POP_Title");
            obj.set_background("#000000");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"6","21","21","11",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalFrom","8","43","160","179",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_usetrailingday("false");
            obj.set_popuptype("none");
            obj.set_value("");
            obj.set_border("0px none");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalTo","180","43","160","179",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_showmonthspin("false");
            obj.set_border("0px none");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvConfirm","118","228","50","21",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_Crud");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvCancle","180","228","50","21",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.pdvCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCal.form
            obj = new Layout("default","",0,0,this.pdvCal.form,function(p){});
            this.pdvCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",258,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalFromTo.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmCalFromTo (공통 기간달력)
        *  @FileName 	cmmCalFromTo.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction    기간달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	               최초 생성
        *  2017.10.17     	consulting       	       주석 정비
        *  2017.10.26     	consulting 	               주석 정비및 메세지팝업 공통으로 변경
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);//초기화[필수]
        	this.fnInit(); //달력초기화
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.calFrom.set_value("");	//FROM 달력 셋팅
        	this.calTo.set_value("");		//TO 달력 셋팅
        };

        /**
        * @description from 일자 갖고오기
        */
        this.fnGetFromDate = function ()
        {
        	var sDate = this.calFrom.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.fnGetToDate = function ()
        {
        	var sDate = this.calTo.value;
        	return sDate;
        };

        /**
        * @description from일자 세팅하기
        */
        this.fnSetFromDate = function (sDate)
        {
        	this.calFrom.set_value(sDate);
        };

        /**
        * @description to일자 세팅하기
        */
        this.fnSetToDate = function (sDate)
        {
        	this.calTo.set_value(sDate);
        };

        /**
        * @description enable true/false세팅
        */
        this.fnSetEnable = function (bValue)
        {
        	this.calFrom.set_enable(bValue);
        	this.calTo.set_enable(bValue);
        };

        /**
        * @description readonly true/false세팅
        */
        this.fnSetReadonly = function (bValue)
        {
        	this.calFrom.set_readonly(bValue);
        	this.calTo.set_readonly(bValue);
        };

        /**
        * @description Essential true/false세팅
        */
        this.fnSetEssential  = function (bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue){
        		this.calFrom.set_background("yellow");
        		this.calTo.set_background("yellow");
        	}else{
        		this.calFrom.set_background("");
        		this.calTo.set_background("");
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calFrom_ondropdown = function(obj,e)
        {
        	var sDate = this.gfnGetDate(); //default today = 해당월1일부터 오늘까지

        	//from달력세팅
        	if (this.gfnIsNull(this.calFrom.value)) {
        		this.pdvCal.form.pdvCalFrom.set_value(sDate.substr(0,6) + "01");
        	} else {
        		this.pdvCal.form.pdvCalFrom.set_value(this.calFrom.value);
        	}

        	//TO 달력 셋팅
        	if (this.gfnIsNull(this.calTo.value)) {
        		this.pdvCal.form.pdvCalTo.set_value(sDate);
        	} else {
        		this.pdvCal.form.pdvCalTo.set_value(this.calTo.value);
        	}

        	var oForm = this.parent.parent;
        	var nTop = 0;
        	// 상단 팝업
        // 	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        // 		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        // 	}
        // 	else {
        // 		nTop = this.parent.getOffsetHeight();
        // 	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft ,nTop+ this.calFrom.height);
        };

        /**
        * @description 기간 popDiv컴포넌트 확인(적용) 버튼 클릭
        */
        this.pdvCal_btnPdvConfirm_onclick = function(obj,e)
        {
        	var sFromValue = this.pdvCal.form.pdvCalFrom.value;
        	var sToValue = this.pdvCal.form.pdvCalTo.value;

        	this.calFrom.set_value(sFromValue);
        	this.calTo.set_value(sToValue);
        	this.pdvCal.closePopup();
        };

        /**
        * @description 기간 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        this.pdvCal_oncloseup = function(obj,e)
        {
        	this.pdvCal_btnPdvConfirm_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calFrom.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.calTo.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.pdvCal.addEventHandler("oncloseup",this.pdvCal_oncloseup,this);
            this.pdvCal.form.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.btnPdvConfirm.addEventHandler("onclick",this.pdvCal_btnPdvConfirm_onclick,this);
            this.pdvCal.form.btnPdvCancle.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
        };
        this.loadIncludeScript("cmmCalFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
