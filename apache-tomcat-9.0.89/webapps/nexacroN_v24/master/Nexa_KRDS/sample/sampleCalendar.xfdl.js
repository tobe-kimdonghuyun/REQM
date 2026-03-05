(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCalendar");
            this.set_titletext("캘린더");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta03","0","1090",null,"330","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>- 캘린더 사용 방법</b>\r\n1. div를 생성한다.\r\n2. 생성한 div에 사용할 캘린더 URL을 연결하다.\r\n - 기간달력 : common::cmmCalFT.xfdl\r\n - 월달력    : common::cmmM.xfdl\r\n - 주차달력 : common::cmmW.xfdl\r\n3. onload 이후/콤보데이터 로딩 이후  div내부 함수 setDate()함수를 호출하여 초기값을 세팅한다.\r\n\r\n<b v=\'true\'>- 호출 할 수 있는 함수</b> \r\n 공통함수 \r\n - this.div.form.setRequired(); // 필수설정\r\n - this.div.form.setReadOnly();//리드온리설정\r\n\r\n 각 component 별 함수\r\n - this.div.form.setDate(); // value세팅 , 주차달력/월달력 only\r\n - this.div.form.getDate(); //선택된 value가져오기 주차달력/월달력 only\r\n - this.div.form.getWeek(); //주차달력 only\r\n - this.div.form.setFromDate();//기간달력의 from date세팅 기간달력 only\r\n - this.div.form.getFromDate();//기간달력의 from date가져오기 기간달력 only\r\n - this.div.form.setToDate();//기간달력의 to date세팅 기간달력 only\r\n - this.div.form.getToDate();//기간달력의 to dater가져오기 기간달력 only");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","0",null,"600","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_value("- 캘린더 사용 방법\n1. div를 생성한다.\n2. 생성한 div에 사용할 캘린더 URL을 연결하다.\n - 기간달력 : common::cmmCalFT.xfdl\n - 월달력    : common::cmmM.xfdl\n - 주차달력 : common::cmmW.xfdl\n3. onload 이후/콤보데이터 로딩 이후  div내부 함수 setDate()함수를 호출하여 초기값을 세팅한다.\n\n- 호출 할 수 있는 함수\n 공통함수 \n - this.div.form.setRequired(); // 필수설정\n - this.div.form.setReadOnly();//리드온리설정\n\n 각 component 별 함수\n - this.div.form.setDate(); // value세팅 , 주차달력/월달력 only\n - this.div.form.getDate(); //선택된 value가져오기 주차달력/월달력 only\n - this.div.form.getWeek(); //주차달력 only\n - this.div.form.setFromDate();//기간달력의 from date세팅 기간달력 only\n - this.div.form.getFromDate();//기간달력의 from date가져오기 기간달력 only\n - this.div.form.setToDate();//기간달력의 to date세팅 기간달력 only\n - this.div.form.getToDate();//기간달력의 to dater가져오기 기간달력 only");
            obj.set_cssclass("txt_WF_Nochar");
            obj.set_scrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt01","0","txaGuide:40","169","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주차달력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("divWeekCal","0","StaDt01:8","150","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("common::cmmCalW.xfdl");
            obj.set_accessibilitylabel("[@StaDt01]");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetWCalDate","divWeekCal:8","StaDt01:8","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("get date");
            obj.set_accessibilitylabel("[@StaDt01]");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetWCalWeek","btnGetWCalDate:8","StaDt01:8","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("get week");
            obj.set_accessibilitylabel("[@StaDt01]");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetWCalDate","btnGetWCalWeek:8","StaDt01:8","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("set date");
            obj.set_accessibilitylabel("[@StaDt01]");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt02","0","divWeekCal:24","169","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("월달력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("divMonthCal","0","StaDt02:8","150","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_url("common::cmmCalM.xfdl");
            obj.set_accessibilitylabel("[@StaDt02]");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMCalM","divMonthCal:8","StaDt02:8","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("get month");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMCalM","btnGetMCalM:8","StaDt02:8","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set month");
            obj.set_accessibilitylabel("[@StaDt02]");
            this.addChild(obj.name, obj);

            obj = new Static("StaDt03","0","divMonthCal:24","169","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("기간달력");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Div("divFTCal","0","StaDt03:8","330","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div01");
            obj.set_url("common::cmmCalFT.xfdl");
            obj.set_accessibilitylabel("[@StaDt03]");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFTCalFDate","divFTCal:8","StaDt03:8","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("get from date");
            obj.set_accessibilitylabel("[@StaDt03]");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFTCalFDate","btnGetFTCalFDate:8","StaDt03:8","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("set from date");
            obj.set_accessibilitylabel("[@StaDt03]");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFTCalTDate","divFTCal:8","btnGetFTCalFDate:8","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("get to date");
            obj.set_accessibilitylabel("[@StaDt03]");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFTCalTDate","btnGetFTCalTDate:8","btnSetFTCalFDate:8","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("set to date");
            obj.set_accessibilitylabel("[@StaDt03]");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWeekCal
            obj = new Layout("default","",0,0,this.divWeekCal.form,function(p){});
            this.divWeekCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal
            obj = new Layout("default","",0,0,this.divMonthCal.form,function(p){});
            this.divMonthCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFTCal
            obj = new Layout("default","",0,0,this.divFTCal.form,function(p){});
            this.divFTCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,990,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmCalW.xfdl");
            this._addPreloadList("fdl","common::cmmCalM.xfdl");
            this._addPreloadList("fdl","common::cmmCalFT.xfdl");
        };
        
        // User Script
        this.registerScript("sampleCalendar.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleCalendar.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/07
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/07			TOBESOFT					최초생성
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnGetWCalDate_onclick = function(obj,e)
        {
        	alert(this.divWeekCal.form.getDate());
        };


        this.btnGetWCalWeek_onclick = function(obj,e)
        {
        	alert(this.divWeekCal.form.getWeek());
        };

        this.btnSetWCalDate_onclick = function(obj,e)
        {
        	this.divWeekCal.form.setDate("20201207");
        };

        this.btnGetMCalM_onclick = function(obj,e)
        {
        	alert(this.divMonthCal.form.getDate());
        };

        this.btnSetMCalM_onclick = function(obj,e)
        {
        	this.divMonthCal.form.setDate("20201207");
        };

        this.btnGetFTCalFDate_onclick = function(obj,e)
        {
        	alert(this.divFTCal.form.getFromDate());
        };

        this.btnSetFTCalFDate_onclick = function(obj,e)
        {
        	this.divFTCal.form.setFromDate("20201207");
        };

        this.btnGetFTCalTDate_onclick = function(obj,e)
        {
        	alert(this.divFTCal.form.getToDate());
        };

        this.btnSetFTCalTDate_onclick = function(obj,e)
        {
        	this.divFTCal.form.setToDate("20201231");
        };

        this.txaGuide_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
            this.btnGetWCalDate.addEventHandler("onclick",this.btnGetWCalDate_onclick,this);
            this.btnGetWCalWeek.addEventHandler("onclick",this.btnGetWCalWeek_onclick,this);
            this.btnSetWCalDate.addEventHandler("onclick",this.btnSetWCalDate_onclick,this);
            this.btnGetMCalM.addEventHandler("onclick",this.btnGetMCalM_onclick,this);
            this.btnSetMCalM.addEventHandler("onclick",this.btnSetMCalM_onclick,this);
            this.btnGetFTCalFDate.addEventHandler("onclick",this.btnGetFTCalFDate_onclick,this);
            this.btnSetFTCalFDate.addEventHandler("onclick",this.btnSetFTCalFDate_onclick,this);
            this.btnGetFTCalTDate.addEventHandler("onclick",this.btnGetFTCalTDate_onclick,this);
            this.btnSetFTCalTDate.addEventHandler("onclick",this.btnSetFTCalTDate_onclick,this);
        };
        this.loadIncludeScript("sampleCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
