(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDynamicDivLink");
            this.set_titletext("div동적생성 링크폼");
            this.set_cssclass("div_WF_SchBar");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "Expand","type" : "STRING","size" : "256"},{"id" : "Cmb","type" : "STRING","size" : "256"},{"id" : "Cal","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "01","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "02","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "03","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "04","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "05","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "06","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "07","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "08","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "09","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "10","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "11","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "12","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "13","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "14","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "15","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","333","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtDivId\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("StaDt01","24","24","83","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("Div 명칭");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDivId","StaDt01:0","24","250","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("[@StaDt01]");
            obj.set_flexgrow("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","744","24","120","48",null,null,null,"120",null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdSample","40","40","808","302",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsGrid");
            obj.set_flexgrow("1");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"120\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"에디트\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"필수\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"숫자\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" text=\"익스팬드\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"콤보박스\" cssclass=\"cell_WF_Center\"/><Cell col=\"7\" text=\"캘린더\" cssclass=\"cell_WF_Center\"/><Cell col=\"8\" text=\"중앙정렬\" cssclass=\"cell_WF_Center\"/><Cell col=\"9\" text=\"버튼\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"30\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardaysize=\"44 44\" calendarpopupsize=\"384 524\" calendarusetrailingday=\"true\" calendarheadheight=\"56\"/><Cell col=\"8\" text=\"bind:CenterAlign\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","divSearch:40",null,"384","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdSample\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("3");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("0","0","333","48",null,null);

                p.StaDt01.set_taborder("0");
                p.StaDt01.set_text("Div 명칭");
                p.StaDt01.set_cssclass("sta_WF_SchDetail");
                p.StaDt01.set_fittocontents("width");
                p.StaDt01.move("24","24","83","48",null,null);

                p.edtDivId.set_taborder("1");
                p.edtDivId.set_accessibilitylabel("[@StaDt01]");
                p.edtDivId.set_flexgrow("0");
                p.edtDivId.move("StaDt01:0","24","250","48",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("조회");
                p.Button00.set_cssclass("btn_WF_Sch");
                p.Button00.set_minwidth("");
                p.Button00.set_maxwidth("120");
                p.Button00.move("744","24","120","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("8");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_flexgrow("1");
                p.Button00.set_minwidth("");
                p.Button00.set_maxwidth("600");

                p.edtDivId.set_flexgrow("1");
            	}
            );
            obj.set_spacing("24px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("8");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("div동적생성 링크폼");
                p.set_cssclass("div_WF_SchBar");

                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_fittocontents("height");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.set_tabstop("false");
                p.divSearch.move("0","0",null,"128","0",null);

                p.grdSample.set_taborder("1");
                p.grdSample.set_binddataset("dsGrid");
                p.grdSample.set_flexgrow("1");
                p.grdSample.set_showcellselection("true");
                p.grdSample.move("40","40","808","302",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_cssclass("pnl_WF_Detailbox");
                p.Panel00.move("0","divSearch:40",null,"384","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile_small,Desktop_screen",480,920,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.move("0","0",null,"160","0",null);

                p.Panel00.set_spacing("23px");
                p.Panel00.move("0","divSearch:40",null,"575","0",null);

                p.grdSample.move("41","divSearch:81","398","527",null,null);
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
        this.registerScript("sampleDynamicDivLink.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleDynamicDivLink.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
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

        	var sDivId = this.parent.name;
        	this.divSearch.form.edtDivId.set_value(sDivId);

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("sampleDynamicDivLink.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
