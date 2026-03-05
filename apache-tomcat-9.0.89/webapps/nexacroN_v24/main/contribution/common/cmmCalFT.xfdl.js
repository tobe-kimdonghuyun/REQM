(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalFT");
            this.set_titletext("기간달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(317,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calFrom","0","0","47.32%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staTerm","calFrom:0","0","17",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_Center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","staTerm:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivCal","3","33","324","205",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Calendar("calFromM","5","5","155",null,null,"38",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Calendar("calToM","calFromM:5","5","155",null,null,"38",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnOk","110",null,"50","28",null,"5",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnCancle","btnOk:5",null,"50","28",null,"5",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Static("staMsg","0","64",null,"60","0",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("5");
            obj.set_text("sta00");
            obj.set_background("#ffffff");
            obj.set_border("1px solid red");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_GTxt02");
            obj.set_visible("false");
            this.pdivCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivCal.form
            obj = new Layout("default","",0,0,this.pdivCal.form,function(p){});
            this.pdivCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",317,28,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalFT.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmCalFT.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/03			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.getFromDate = function ()
        {
        	return this.calFrom.value;
        };

        this.getToDate = function ()
        {
        	return this.calTo.value;
        };

        this.setFromDate = function (v)
        {
        	this.calFrom.set_value(v);
        };

        this.setToDate = function (v)
        {
        	this.calTo.set_value(v);
        };

        this.setRequired = function(bValue)
        {
        	if (bValue) {
        		this.calTo.set_cssclass("essential");
        		this.calFrom.set_cssclass("");
        	}else {
        		this.calTo.set_cssclass("");
        		this.calFrom.set_cssclass("");
        	}
        };

        this.setReadOnly = function(bValue)
        {
        	this.calTo.set_readonly(bValue);
        	this.calFrom.set_readonly(bValue);
        };

        this.fnOpenPopupdiv = function ()
        {
        	this.pdivCal.trackPopupByComponent(this.calFrom, 0, this.calFrom.getOffsetHeight());
        };

        this.fnShowMessage = function (sMsgId, arrArg)
        {
        	var sMsgTxt = this.gfnGetMessage(sMsgId, arrArg);

        	this.pdivCal.form.staMsg.set_text(sMsgTxt);
        	this.pdivCal.form.staMsg.set_visible(true);
        	this.setTimer(999, 3000);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.cal_oneditclick = function(obj,e)
        {
        	this.calTo.uOrgValue = this.calTo.value;
        	this.calFrom.uOrgValue = this.calFrom.value;
        	this.fnOpenPopupdiv();
        };

        this.cal_ondropdown = function(obj,e)
        {
        	this.calTo.uOrgValue = this.calTo.value;
        	this.calFrom.uOrgValue = this.calFrom.value;
        	this.fnOpenPopupdiv();
        };

        this.pdivCal_onpopup = function(obj,e)
        {
        	var sFrom = this.calFrom.value;
        	var sTo   = this.calTo.value;
        	if(this.gfnIsNull(sFrom)) sFrom = this.gfnGetDate();
        	if(this.gfnIsNull(sTo)) sTo = this.gfnGetDate();

        	this.pdivCal.form.calFromM.set_value(sFrom);
        	this.pdivCal.form.calToM.set_value(sTo);
        };

        this.pdivCal_btnOk_onclick = function(obj,e)
        {
        	var sFrom = this.pdivCal.form.calFromM.value;
        	var sTo = this.pdivCal.form.calToM.value;

        	if( this.gfnIsNull(sFrom)){
        		this.fnShowMessage("msg.err.validator.required", ["시작"]);
        		return;
        	}
        	if( this.gfnIsNull(sTo)){
        		this.fnShowMessage("msg.err.validator.required", ["종료"]);
        		return;
        	}
        	if( this.gfnGetDiffDate(sFrom, sTo) < 0){
        		this.fnShowMessage("msg.err.validator.date.great");
        		return;
        	}

        	this.calFrom.set_value(sFrom);
        	this.calTo.set_value(sTo);
        	this.pdivCal.closePopup();
        };

        this.pdivCal_btnCancle_onclick = function(obj,e)
        {
        	this.calFrom.set_value(this.calFrom.uOrgValue);
        	this.calTo.set_value(this.calTo.uOrgValue);

        	this.pdivCal.closePopup();
        };

        this.cmmCalFT_ontimer = function(obj,e)
        {
        	if( e.timerid == 999){
        		this.pdivCal.form.staMsg.set_text("");
        		this.pdivCal.form.staMsg.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.cmmCalFT_ontimer,this);
            this.calFrom.addEventHandler("oneditclick",this.cal_oneditclick,this);
            this.calFrom.addEventHandler("ondropdown",this.cal_ondropdown,this);
            this.calTo.addEventHandler("oneditclick",this.cal_oneditclick,this);
            this.calTo.addEventHandler("ondropdown",this.cal_ondropdown,this);
            this.pdivCal.addEventHandler("onpopup",this.pdivCal_onpopup,this);
            this.pdivCal.form.btnOk.addEventHandler("onclick",this.pdivCal_btnOk_onclick,this);
            this.pdivCal.form.btnCancle.addEventHandler("onclick",this.pdivCal_btnCancle_onclick,this);
        };
        this.loadIncludeScript("cmmCalFT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
