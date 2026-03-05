(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalM");
            this.set_titletext("월력");
            if (Form == this.constructor)
            {
                this._setFormPosition(175,48);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calM","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("MM");
            obj.set_editformat("MM");
            obj.set_popuptype("none");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivCal","0","48","236","172",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_text("");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn01","8","8","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("1");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn02","64","8","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("2");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn03","120","8","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("3");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn04","176","8","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("4");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn08","176","64","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("8");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn07","120","64","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("7");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn06","64","64","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("6");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn05","8","64","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("5");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn09","8","120","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("9");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn10","64","120","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("10");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn11","120","120","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("11");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn12","176","120","52","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Cal");
            obj.set_text("12");
            this.pdivCal.addChild(obj.name, obj);

            obj = new PopupDiv("pdivCal00","4","370","236","238",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_text("");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn01","8","65","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn02","64","65","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn03","120","65","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn04","176","65","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn08","176","121","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn07","120","121","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn06","64","121","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn05","8","121","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn09","8","177","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn10","64","177","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn11","120","177","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btn12","176","177","52","52",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"14","29","29","16",null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_CalNext");
            obj.set_text("");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Button("btnPrev","16","14","32","32",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_CalPrev");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Static("staYear","72","14","70","29",null,null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("15");
            obj.set_text("2020");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_textAlign("center");
            this.pdivCal00.addChild(obj.name, obj);

            obj = new Panel("Panel00","50","14",null,"29","50",null,null,null,null,null,this.pdivCal00.form);
            obj.set_taborder("16");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staYear\"/></Contents>");
            this.pdivCal00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivCal.form
            obj = new Layout("default","",0,0,this.pdivCal.form,function(p){});
            this.pdivCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivCal00.form
            obj = new Layout("default","",0,0,this.pdivCal00.form,function(p){});
            this.pdivCal00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",175,48,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalM.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	cmmCalM.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/03
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/03			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        this.fvDiv = null;
        this.fvSelectCss = "btn_WF_Crud";
        this.fvBtn = null;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.fvDiv = this.parent;

        	this.fvBtn = [];
        	this.fvBtn.push(this.pdivCal.form.btn01);
        	this.fvBtn.push(this.pdivCal.form.btn02);
        	this.fvBtn.push(this.pdivCal.form.btn03);
        	this.fvBtn.push(this.pdivCal.form.btn04);
        	this.fvBtn.push(this.pdivCal.form.btn05);
        	this.fvBtn.push(this.pdivCal.form.btn06);
        	this.fvBtn.push(this.pdivCal.form.btn07);
        	this.fvBtn.push(this.pdivCal.form.btn08);
        	this.fvBtn.push(this.pdivCal.form.btn09);
        	this.fvBtn.push(this.pdivCal.form.btn10);
        	this.fvBtn.push(this.pdivCal.form.btn11);
        	this.fvBtn.push(this.pdivCal.form.btn12);
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
        this.fnOpenPopupdiv= function ()
        {
        	this.pdivCal.trackPopupByComponent(this.calM, 0, this.calM.getOffsetHeight());
        };

        this.fnShowCalendarData = function (sYear, sMonth)
        {
        	if( sYear == "0000"){
        		sYear = this.gfnGetDate().substr(0,4);
        	}
        	//this.pdivCal.form.staYear.set_text(sYear);
        	var sCurValue = this.calM.value;

        	if( !this.gfnIsNull(sCurValue)){
        		for( var i=0; i<this.fvBtn.length; i++){
        			if( this.fvBtn[i].name.replace("btn","") == sCurValue.substr(4,2) && sCurValue.substr(0,4)==sYear){
        				//this.fvBtn[i].set_cssclass(this.fvSelectCss);
        			}else{
        				//this.fvBtn[i].set_cssclass("");
        			}
        		}
        	}
        };


        /**
         * @description  return date
        */
        this.getDate = function ()
        {
        	if( !this.gfnIsNull(this.calM.value)) return this.calM.value.substr(0,6);
        	else return this.calM.value;
        };

        /**
         * @description date setting
        */
        this.setDate = function (value)
        {
        	this.calM.set_value(value.substr(0,4)+""+value.substr(4,2)+"01");
        };

        /**
         * @description  필수여부 css 변경
        */
        this.setRequired = function(bValue)
        {
        	if (bValue) {
        		this.calM.set_cssclass("essential");
        	}else {
        		this.calM.set_cssclass("");
        	}
        };

        /**
         * @description  ReadOnly여부 변경
        */
        this.setReadOnly = function(bValue)
        {
        	this.calM.set_readonly(bValue);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.calM_ondropdown = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.calM_oneditclick = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.pdivCal_onpopup = function(obj,e)
        {
        	var sDate = this.calM.value;
        	if(this.gfnIsNull(sDate)){
        		sDate = "00000000";//this.gfnGetDate();
        	}

        	var sYear  = sDate.substr(0, 4);
            var sMonth = sDate.substr(4, 2);
            var sDay   = sDate.substr(6, 2);

        	this.fnShowCalendarData(sYear, sMonth);
        };

        this.btnMonth_onclick = function(obj,e)
        {
        	var sDate = this.calM.value;
        	if(this.gfnIsNull(sDate)){
        		sDate = "00000000";//this.gfnGetDate();
        	}

        	var sYear  = sDate.substr(0, 4);
        	var sMonth = obj.name.replace("btn","");
        	this.calM.set_value(sYear+""+sMonth+"01");
        	this.pdivCal.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calM.addEventHandler("ondropdown",this.calM_ondropdown,this);
            this.calM.addEventHandler("oneditclick",this.calM_oneditclick,this);
            this.calM.addEventHandler("onchanged",this.calM_onchanged,this);
            this.pdivCal.addEventHandler("onpopup",this.pdivCal_onpopup,this);
            this.pdivCal.form.staBg.addEventHandler("onclick",this.divCal_staBg_onclick,this);
            this.pdivCal.form.btn01.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn02.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn03.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn04.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn08.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn07.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn06.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn05.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn09.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn10.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn11.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn12.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.addEventHandler("onpopup",this.pdivCal_onpopup,this);
            this.pdivCal00.form.staBg.addEventHandler("onclick",this.divCal_staBg_onclick,this);
            this.pdivCal00.form.btn01.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn02.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn03.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn04.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn08.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn07.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn06.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn05.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn09.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn10.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn11.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btn12.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal00.form.btnNext.addEventHandler("onclick",this.pdivCal_btnNext_onclick,this);
            this.pdivCal00.form.btnPrev.addEventHandler("onclick",this.pdivCal_btnPrev_onclick,this);
        };
        this.loadIncludeScript("cmmCalM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
