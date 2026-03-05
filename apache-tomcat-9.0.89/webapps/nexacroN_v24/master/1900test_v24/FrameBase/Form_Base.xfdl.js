(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Base");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"data\">a</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">b</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">c</Col></Row><Row><Col id=\"lev\">3</Col><Col id=\"data\">d</Col></Row><Row><Col id=\"lev\">4</Col><Col id=\"data\">e</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","36","457","113",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Android  Usercombo 사용 시 Grid row가 3개 더 생김.");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","63","255","432","110",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","31","474","485","68",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">aaaa</Col></Row><Row><Col id=\"datacolumn\">bbb</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">ccc</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">ddd</Col><Col id=\"codecolumn\">3</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","43","160","460","84",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("showmodal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1280,1040,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("Android  Usercombo 사용 시 Grid row가 3개 더 생김.");
                p.Button00.move("50","36","457","113",null,null);

                p.Combo00.set_taborder("1");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("63","255","432","110",null,null);

                p.Combo01.set_taborder("2");
                p.Combo01.set_innerdataset(Combo01_innerdataset);
                p.Combo01.set_codecolumn("codecolumn");
                p.Combo01.set_datacolumn("datacolumn");
                p.Combo01.set_text("Combo01");
                p.Combo01.move("31","474","485","68",null,null);

                p.Button01.set_taborder("3");
                p.Button01.set_text("showmodal");
                p.Button01.move("43","160","460","84",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","mobileScr,desktopScr,tableScr",480,678,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_text("모바일 Tab");
                p.Button00.move("13","34","457","113",null,null);

                p.Combo00.set_innerdataset("ds_tree");
                p.Combo00.set_codecolumn("lev");
                p.Combo00.set_datacolumn("data");
                p.Combo00.move("63","255","337","110",null,null);

                p.Combo01.move("31","474","299","68",null,null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Base.xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 50, 349, 549, 440);
        	objFrame.formurl = "FrameBase::comm_extCombo_copy0.xfdl";
            objFrame.set_showtitlebar(false);
            objFrame.set_showstatusbar(false);
            objFrame.set_titletext("") ;
            objFrame.set_statustext("");
            objFrame.set_autosize(false);
        	objFrame.set_dragmovetype("none");
            objFrame.set_overlaycolor("rgba(0, 0, 0, 0.2)");
        	var vRtn = objFrame.showModal( "modal00", objParentFrame, null, this, this.fn_callback );
        };
        this.fn_callback = function()
        {}
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.Base_ontimer,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Form_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
