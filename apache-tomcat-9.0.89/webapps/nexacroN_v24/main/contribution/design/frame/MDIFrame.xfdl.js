(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MdiFrame");
            this.set_titletext("MDI");
            this.set_cssclass("frm_MDI_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,42);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">메뉴</Col></Row><Row><Col id=\"Column0\">메뉴</Col></Row><Row><Col id=\"Column0\">메뉴</Col></Row><Row><Col id=\"Column0\">메뉴</Col></Row><Row><Col id=\"Column0\">메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"6","31","31","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tooltiptext("Close All");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.addChild(obj.name, obj);

            obj = new Button("btnNexMdi",null,"6","21","31","77",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("다음 화면목록으로");
            obj.set_cssclass("btn_MDI_Right");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreMdi",null,"6","21","31","98",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("이전 화면목록으로");
            obj.set_cssclass("btn_MDI_Left");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","0","0","20","42",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_Close");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","0","61","20","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_Open");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","62","0","109","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("탭페이지");
            obj.set_cssclass("btn_MDI_Menu");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","171","0","133","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("선택탭페이지");
            obj.set_cssclass("btn_MDI_MenuS");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","btn01:-28","10","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MDI_TabClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn02_00","btn01_00:-28","10","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MDI_TabClose");
            this.addChild(obj.name, obj);

            obj = new Button("btn03",null,"6","31","31","41",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MDI_List");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","20","0","42","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MDI_Home");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","20","61","42","42",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_HomeS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv00","784","42","245","200",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","0",null,null,"0","0",null,null,null,null,this.pdiv00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MDI_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.pdiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdiv00.form
            obj = new Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,42,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MDIFrame.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.fnLeftMenuAction = function()
        {

        	var sCssClass = "";

        	if(this.objApp.mainframe.HFrameSet00.separatesize == "210,*")
        	{
        		this.objApp.mainframe.HFrameSet00.set_separatesize("0,*");
        		/*sCssClass = "btn_LF_MenuOpen";*/
        		this.btnLeftMenuShowHide.set_cssclass('btn_LF_MenuOpen');

        	}
        	else
        	{
        		this.objApp.mainframe.HFrameSet00.set_separatesize("210,*");
        		/*sCssClass = "btn_LF_MenuOpen";*/
        		this.btnLeftMenuShowHide.set_cssclass('btn_LF_MenuClose');
        	}
        }


        this.btnLeftMenuShowHide_onclick = function(obj,e)
        {
        	this.fnLeftMenuAction();
        };



        this.btn00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);
            this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);
            this.btn00_00_00_00.addEventHandler("onclick",this.btn00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("MDIFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
