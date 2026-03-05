(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006M01");
            this.set_titletext("신청서작성");
            this.set_stepitemsize("24");
            this.set_stepalign("center bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"pstnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplyDt\" type=\"STRING\" size=\"256\"/><Column id=\"endDt\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgtrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntInstCd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrId\" type=\"STRING\" size=\"256\"/><Column id=\"prcrDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"prcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"bfrPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"endCd\" type=\"STRING\" size=\"256\"/><Column id=\"cnvyMttrCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/><Column id=\"clmAddr\" type=\"STRING\" size=\"256\"/><Column id=\"clmCustCd\" type=\"STRING\" size=\"256\"/><Column id=\"cpatcoPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtPrcrJobGroupCd\" type=\"STRING\" size=\"256\"/><Column id=\"rcptDt\" type=\"STRING\" size=\"256\"/><Column id=\"clrId\" type=\"STRING\" size=\"256\"/><Column id=\"dptyRegYn\" type=\"STRING\" size=\"256\"/><Column id=\"dmndDt\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptAplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntHwrtInptYn\" type=\"STRING\" size=\"256\"/><Column id=\"curbizPbcprtMvmnRgnPrcrId\" type=\"STRING\" size=\"256\"/><Column id=\"docCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtChcYn\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"wholJobEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobNm\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobRsnCn\" type=\"STRING\" size=\"256\"/><Column id=\"bldgSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoCtrtrNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"sprvsnCoPicCtinfoNo\" type=\"STRING\" size=\"256\"/><Column id=\"cstrnJobFldCd\" type=\"STRING\" size=\"256\"/><Column id=\"arptCstrnPicId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcPbcprtPicId\" type=\"STRING\" size=\"256\"/><Column id=\"basctAplcfmInfoId\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskAgtRlvtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lbsvcTaskMdtrId\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptRnb\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBtn","0",null,null,"60","60","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_CkBg");
            obj.set_formscrollbartype("auto none");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","960.00","10","110","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("작업신고서불러오기");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("Button02","1054","25","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("임시저장");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("Button01","1208","27","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("Button00","637","14","100","40",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("종료");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Tab("tabStep","0","60",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabStep);
            obj.set_text("신청자정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabStep);
            obj.set_text("신청정보");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tabStep);
            obj.set_text("개인정보수동의");
            obj.set_formscrollbartype("default autoindicator");
            this.tabStep.addChild(obj.name, obj);

            obj = new Div("divForm","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Step01");
            obj.set_visible("true");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("publishing::work/CST/CST006M01_01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_positionstep("1");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("publishing::work/CST/CST006M01_02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","110",null,null,"60","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_positionstep("2");
            obj.set_formscrollbartype("auto autoindicator");
            obj.set_url("publishing::work/CST/CST006M01_03.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button03.set_taborder("3");
                p.Button03.set_text("작업신고서불러오기");
                p.Button03.set_cssclass("btn_WF_No");
                p.Button03.set_fittocontents("width");
                p.Button03.move("960.00","10","110","40",null,null);

                p.Button02.set_taborder("2");
                p.Button02.set_text("임시저장");
                p.Button02.set_cssclass("btn_WF_No");
                p.Button02.set_fittocontents("width");
                p.Button02.move("1054","25","100","40",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("신청");
                p.Button01.set_cssclass("btn_WF_Yes");
                p.Button01.set_fittocontents("width");
                p.Button01.move("1208","27","100","40",null,null);

                p.Button00.set_taborder("0");
                p.Button00.set_text("종료");
                p.Button00.set_cssclass("btn_WF_Yes");
                p.Button00.set_fittocontents("width");
                p.Button00.move("637","14","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divBtn.form
            obj = new Layout("mobile","",0,0,this.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            this.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.tabStep.Tabpage1
            obj = new Layout("default","",0,0,this.tabStep.Tabpage1.form,function(p){});
            this.tabStep.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage2
            obj = new Layout("default","",0,0,this.tabStep.Tabpage2.form,function(p){});
            this.tabStep.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabStep.Tabpage3
            obj = new Layout("default","",0,0,this.tabStep.Tabpage3.form,function(p){});
            this.tabStep.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청서작성");
                p.set_stepitemsize("24");
                p.set_stepalign("center bottom");

                p.divBtn.set_taborder("0");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_CkBg");
                p.divBtn.set_formscrollbartype("auto none");
                p.divBtn.move("0",null,null,"60","60","0");

                p.tabStep.set_taborder("2");
                p.tabStep.set_tabindex("0");
                p.tabStep.move("0","60",null,"50","60",null);

                p.tabStep.Tabpage1.set_text("신청자정보");
                p.tabStep.Tabpage1.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage2.set_text("신청정보");
                p.tabStep.Tabpage2.set_formscrollbartype("default autoindicator");

                p.tabStep.Tabpage3.set_text("개인정보수동의");
                p.tabStep.Tabpage3.set_formscrollbartype("default autoindicator");

                p.divForm.set_taborder("1");
                p.divForm.set_text("Step01");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("auto autoindicator");
                p.divForm.set_url("publishing::work/CST/CST006M01_01.xfdl");
                p.divForm.move("0","110",null,null,"60","70");

                p.divTitle.set_taborder("3");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.Div00.set_taborder("4");
                p.Div00.set_text("Div00");
                p.Div00.set_positionstep("1");
                p.Div00.set_formscrollbartype("auto autoindicator");
                p.Div00.set_url("publishing::work/CST/CST006M01_02.xfdl");
                p.Div00.move("0","110",null,null,"60","70");

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div01");
                p.Div01.set_positionstep("2");
                p.Div01.set_formscrollbartype("auto autoindicator");
                p.Div01.set_url("publishing::work/CST/CST006M01_03.xfdl");
                p.Div01.move("0","110",null,null,"60","70");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divTitle.move("0","0",null,"50","0",null);

                p.divForm.move("20","110",null,null,"20","70");

                p.divBtn.move("0",null,null,"60","0","0");

                p.Div00.move("20","110",null,null,"20","70");

                p.Div01.move("20","110",null,null,"20","70");

                p.tabStep.move("20","60",null,"50","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","publishing::work/CST/CST006M01_01.xfdl");
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
            this._addPreloadList("fdl","publishing::work/CST/CST006M01_02.xfdl");
            this._addPreloadList("fdl","publishing::work/CST/CST006M01_03.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CST006M01_ori250117.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST006M01_ori250117.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.stepselector.destroy();
        	this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, inqCnd : { jobPrcsPrgrsSeCd:"TAS00233"} });

        	this.dsMain.setColumn(0, "aplyNo", "BBBB");
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..

        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

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
        this.Button_onclick = function(obj,e)
        {
        	trace(JSON.stringify(this.cfnGetWfInfo(obj.name)));
        };

        this.tabStep_onchanged = function(obj,e)
        {
        	this.setStepIndex(obj.tabindex);
        };

        this.CST002M00_onstepchanged = function(obj,e)
        {
        	this.divBtn.positionstep  = e.postindex;  // 버튼
        	this.tabStep.positionstep = e.postindex;  // 스텝
        	this.tabStep.tabindex     = this.getStepIndex();
        };

        this.CST002M00_onkeydown = function(obj,e)
        {
        	if(e.shiftkey && e.altkey) {
        		if(e.keycode == 37) {
        			this.setStepIndex(this.getStepIndex() == 0 ? this.getStepCount() - 1 : this.getStepIndex() - 1);
        		} else if(e.keycode == 39) {
        			this.setStepIndex(this.getStepIndex() == this.getStepCount() - 1 ? 0 : this.getStepIndex() + 1);
        		}
        	}
        };

        this.CST002M00_onsize = function(obj,e)
        {
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onstepchanged",this.CST002M00_onstepchanged,this);
            this.addEventHandler("onkeydown",this.CST002M00_onkeydown,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.CST002M00_onsize,this);
            this.divBtn.form.Button03.addEventHandler("onclick",this.Button_onclick,this);
            this.divBtn.form.Button02.addEventHandler("onclick",this.Button_onclick,this);
            this.divBtn.form.Button01.addEventHandler("onclick",this.Button_onclick,this);
            this.divBtn.form.Button00.addEventHandler("onclick",this.Button_onclick,this);
            this.tabStep.addEventHandler("onchanged",this.tabStep_onchanged,this);
        };
        this.loadIncludeScript("CST006M01_ori250117.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
