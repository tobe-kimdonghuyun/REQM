(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleAuth");
            this.set_titletext("권한제어 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1050);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SYTM_FLAG_CD","type" : "STRING","size" : "256"},{"id" : "FROM_DT","type" : "STRING","size" : "256"},{"id" : "TO_DT","type" : "STRING","size" : "256"},{"id" : "DEPT_CD","type" : "STRING","size" : "256"},{"id" : "USER_ID","type" : "STRING","size" : "256"},{"id" : "LOIN_FLAG_CD","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SYTM_FLAG_CD","type" : "STRING","size" : "256"},{"id" : "ALOG_DTTM","type" : "STRING","size" : "256"},{"id" : "USER_ID","type" : "STRING","size" : "256"},{"id" : "USER_NM","type" : "STRING","size" : "256"},{"id" : "DEPT_CD","type" : "STRING","size" : "256"},{"id" : "DEPT_NM","type" : "STRING","size" : "256"},{"id" : "WKGD_CD","type" : "STRING","size" : "256"},{"id" : "LOIN_FLAG_CD","type" : "STRING","size" : "256"},{"id" : "BROWSER_CD","type" : "STRING","size" : "256"},{"id" : "BROWSER_VERSION","type" : "STRING","size" : "256"},{"id" : "OS_CD","type" : "STRING","size" : "256"},{"id" : "OS_VERSION","type" : "STRING","size" : "256"},{"id" : "SCREEN_SIZE","type" : "STRING","size" : "256"},{"id" : "MOB_YN","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","150","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("권한 제어");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","109","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Authority");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","100",null,"270","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("1. 추가/삭제/저장 공통버튼은 권한이 있는 버튼만 visible 됩니다.\n\n2. 조회영역의 조회버튼은 조회 권한이 있을때만 enable 됩니다.\n\n3. 모듈버튼은 this.gfnSetCommBtn(Division 명....) 함수를 통해 \n   공통버튼과 동일한 권한으로 제어되며 visible or enable 처리가 가능합니다.(현재는 enable)\n\n4. 부서, 사용자는 권한의 조회범위에 따라 enable 됩니다.\n   - 조회범위가 전체, 사업본부, 그룹일때 enable");
            obj.set_scrolltype("horizontal");
            obj.set_cssclass("txt_WF_Nochar");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","txaGuide:40",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","24","24","584","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","744","24","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divDept","98","24","100%","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.set_accessibilitylabel("[@staTit01]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divUser","446","24","100%","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_url("common::cmmUserSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            obj.set_accessibilitylabel("[@staTit02]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTit01","24","24","74","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTit02","divDept:24","24","74","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","24","24","48%","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTit01\"/><PanelItem id=\"PanelItem01\" componentid=\"divDept\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel01","372","24","48%","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTit02\"/><PanelItem id=\"PanelItem01\" componentid=\"divUser\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","40","divSearch:80","360","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:80","360","48","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","370","0","162","48",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","200","0","145","48",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdList","40","0","100%","311",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_tabstop("false");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" edittype=\"text\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","40","508","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"divCmmnBtn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","divSearch:40",null,"465","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"grdList\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divDept
            obj = new Layout("default","",0,0,this.divSearch.form.divDept.form,function(p){});
            this.divSearch.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form.divUser
            obj = new Layout("default","",0,0,this.divSearch.form.divUser.form,function(p){});
            this.divSearch.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("0");
                p.Panel02.set_horizontalgap("24");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.move("24","24","584","48",null,null);

                p.btnSearch.set_taborder("1");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_flexgrow("0");
                p.btnSearch.move("744","24","120","48",null,null);

                p.divDept.set_taborder("2");
                p.divDept.set_text("div00");
                p.divDept.set_url("common::cmmDeptSearch.xfdl");
                p.divDept.set_accessibilitylabel("[@staTit01]");
                p.divDept.move("98","24","100%","48",null,null);

                p.divUser.set_taborder("3");
                p.divUser.set_text("div00");
                p.divUser.set_url("common::cmmUserSearch.xfdl");
                p.divUser.getSetter("uEssential").set("true");
                p.divUser.set_accessibilitylabel("[@staTit02]");
                p.divUser.move("446","24","100%","48",null,null);

                p.staTit01.set_taborder("4");
                p.staTit01.set_text("부서");
                p.staTit01.set_cssclass("sta_WF_SchDetail");
                p.staTit01.move("24","24","74","48",null,null);

                p.staTit02.set_taborder("5");
                p.staTit02.set_text("사용자");
                p.staTit02.set_cssclass("sta_WF_SchDetail");
                p.staTit02.move("divDept:24","24","74","48",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("24","24","48%","48",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("372","24","48%","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSearch.set_flexgrow("1");
            	}
            );
            obj.set_spacing("24px 24px 24px 24px");
            obj.set_type("horizontal");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnExcelDown.set_taborder("0");
                p.btnExcelDown.set_text("엑셀다운로드");
                p.btnExcelDown.set_cssclass("btn_WF_ExcelDown");
                p.btnExcelDown.move("370","0","162","48",null,null);

                p.btnExcelUp.set_taborder("1");
                p.btnExcelUp.set_text("엑셀업로드");
                p.btnExcelUp.set_cssclass("btn_WF_ExcelUp");
                p.btnExcelUp.move("200","0","145","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divCmmnBtn.form
            obj = new Layout("Layout0","",0,0,this.divCmmnBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_horizontalgap("8");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("end");
            this.divCmmnBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("권한제어 샘플");

                p.Static00.set_taborder("0");
                p.Static00.set_text("권한 제어");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","150","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Authority");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","109","60",null,null);

                p.txaGuide.set_taborder("3");
                p.txaGuide.set_value("1. 추가/삭제/저장 공통버튼은 권한이 있는 버튼만 visible 됩니다.\n\n2. 조회영역의 조회버튼은 조회 권한이 있을때만 enable 됩니다.\n\n3. 모듈버튼은 this.gfnSetCommBtn(Division 명....) 함수를 통해 \n   공통버튼과 동일한 권한으로 제어되며 visible or enable 처리가 가능합니다.(현재는 enable)\n\n4. 부서, 사용자는 권한의 조회범위에 따라 enable 됩니다.\n   - 조회범위가 전체, 사업본부, 그룹일때 enable");
                p.txaGuide.set_scrolltype("horizontal");
                p.txaGuide.set_cssclass("txt_WF_Nochar");
                p.txaGuide.move("0","100",null,"270","0",null);

                p.divSearch.set_taborder("4");
                p.divSearch.set_text("");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.set_tabstop("false");
                p.divSearch.move("0","txaGuide:40",null,"128","0",null);

                p.staTitle.set_taborder("5");
                p.staTitle.set_text("사용자 정보");
                p.staTitle.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle.set_flexgrow("1");
                p.staTitle.set_accessibilityrole("heading4");
                p.staTitle.move("40","divSearch:80","360","43",null,null);

                p.divCmmnBtn.set_taborder("6");
                p.divCmmnBtn.set_text("");
                p.divCmmnBtn.set_flexgrow("0");
                p.divCmmnBtn.move(null,"divSearch:80","360","48","40",null);

                p.grdList.set_taborder("7");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.set_tabstop("false");
                p.grdList.set_showcellselection("true");
                p.grdList.move("40","0","100%","311",null,null);

                p.Panel00.set_taborder("8");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexgrow("1");
                p.Panel00.set_verticalgap("16");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_flexmainaxisalign("start");
                p.Panel00.set_type("horizontal");
                p.Panel00.move("40","508","100%","48",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_spacing("40px 40px 40px 40px");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","divSearch:40",null,"465","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile_small,Desktop_screen",480,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.move("0","398",null,"168","0",null);

                p.Panel01.set_spacing("23px 23px 23px 23px");
                p.Panel01.set_verticalgap("16");
                p.Panel01.move("0","divSearch:40",null,"467","0",null);

                p.grdList.move("24","753","100%","300",null,null);

                p.Panel00.move("40","508","100%","107",null,null);

                p.divCmmnBtn.set_flexgrow("1");
                p.divCmmnBtn.move(null,"59","320","48","40",null);

                p.txaGuide.move("0","104",null,"270","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.divDept.form.edtCode","value","dsCond","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divUser.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
        };
        
        // User Script
        this.registerScript("sampleAuth.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleAuth.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2022/09/15
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2022/09/15			TOBESOFT					최초생성
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

        	// 엑셀 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
        };
        this.loadIncludeScript("sampleAuth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
