(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmFooter");
            this.set_titletext("New Form");
            this.set_background("#18181A");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","140","0","1000","80",null,null,null,"1000",null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_BF_LineBox");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","20","281","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Copyright © TOBESOFT Corp. All rights reserved.");
            obj.set_cssclass("sta_BF_Copyright");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnPri","768","18","126","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("개인정보처리방침");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_BF_LinksB");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnPol","675","18","73","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("이용약관");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_BF_Links");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","914","18","86","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("투비소프트");
            obj.set_fittocontents("both");
            obj.set_cssclass("btn_BF_Links");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00",null,"20","321","40","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_spacing("18");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnPol\"/><PanelItem id=\"PanelItem02\" componentid=\"btnPri\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_flexmainaxisalign("center");
            obj.set_tablecellarea("0/1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"StaMargin02_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"StaMargin02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01","170","237","5%","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("StaMargin02_01_00","30","30","5%","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("Copyright © TOBESOFT Corp. All rights reserved.");
                p.Static00.set_cssclass("sta_BF_Copyright");
                p.Static00.move("0","20","281","40",null,null);

                p.btnPri.set_taborder("2");
                p.btnPri.set_text("개인정보처리방침");
                p.btnPri.set_fittocontents("both");
                p.btnPri.set_cssclass("btn_BF_LinksB");
                p.btnPri.move("768","18","126","40",null,null);

                p.btnPol.set_taborder("1");
                p.btnPol.set_text("이용약관");
                p.btnPol.set_fittocontents("both");
                p.btnPol.set_cssclass("btn_BF_Links");
                p.btnPol.move("675","18","73","40",null,null);

                p.Button00_00_00.set_taborder("3");
                p.Button00_00_00.set_text("투비소프트");
                p.Button00_00_00.set_fittocontents("both");
                p.Button00_00_00.set_cssclass("btn_BF_Links");
                p.Button00_00_00.move("914","18","86","40",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_spacing("18");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.move(null,"20","321","40","0",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnPri.set_cssclass("btn_BF_Links_M");
                p.btnPri.set_fittocontents("none");
                p.btnPri.move("170","48","111","27",null,null);

                p.btnPol.set_cssclass("btn_BF_Links_M");
                p.btnPol.set_fittocontents("none");
                p.btnPol.move("99.27","48",null,"27","btnPri:0",null);

                p.Button00_00_00.set_cssclass("btn_BF_Links_M");
                p.Button00_00_00.set_fittocontents("none");
                p.Button00_00_00.move("btnPri:0","48","78","27",null,null);

                p.Static00.set_cssclass("sta_BF_Copyright_M");
                p.Static00.move("0","19",null,"30","0",null);

                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.move("0","Static00:0",null,"27","0",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("nowrap");
            obj.set_verticalgap("0");
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,80,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");
                p.set_background("#18181A");

                p.Div00.set_taborder("0");
                p.Div00.set_cssclass("div_BF_LineBox");
                p.Div00.set_flexgrow("1");
                p.Div00.set_minwidth("");
                p.Div00.set_maxwidth("1000");
                p.Div00.move("140","0","1000","80",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.set_tablecellarea("0/1");
                p.Panel00.move("0","0","100%","80",null,null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.move("0","0",null,null,"0","0");

                p.StaMargin02_01.set_taborder("3");
                p.StaMargin02_01.move("170","237","5%","10",null,null);

                p.StaMargin02_01_00.set_taborder("4");
                p.StaMargin02_01_00.move("30","30","5%","10",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Mobile_screen,Desktop_screen",500,130,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","0",null,null,"0","0");

                p.Div00.move("140","0","1000","130",null,null);

                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0","100%","130",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmFooter.xfdl", function() {

        /**
        *  devPro
        *  @FileName 	prstPolicy.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/11/29
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/11/29			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
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
        // 이용약관, 개인정보처리방침 버튼 onclick
        this.infoButtons_onclick = function(obj,e)
        {
        	var sType = obj.id.replace(/^btn/, "");
        	this.objApp.gvInfoType = sType;
        	var sMenuNm = "INFO";
        	this.objApp.gvBase.form.fnFormOpen(sMenuNm);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.btnPri.addEventHandler("onclick",this.infoButtons_onclick,this);
            this.Div00.form.btnPol.addEventHandler("onclick",this.infoButtons_onclick,this);
        };
        this.loadIncludeScript("frmFooter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
