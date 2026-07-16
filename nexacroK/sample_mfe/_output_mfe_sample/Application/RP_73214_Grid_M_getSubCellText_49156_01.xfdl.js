(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_M_getSubCellText_49156_01");
            this.set_titletext("Grid_M_getSubCellText_49156_01");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_data", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Code","size" : "256","type" : "STRING"},{"id" : "Data","size" : "256","type" : "STRING"},{"id" : "Col0","size" : "256","type" : "STRING"},{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"},{"id" : "Column4","size" : "256","type" : "STRING"}]},"Rows" : [{"Code" : "body01","Data" : "body02","Col0" : "body03","Column0" : "body04","Column1" : "body05","Column2" : "body06","Column3" : "body07","Column4" : "body08"},{"Code" : "body01","Data" : "body02","Col0" : "body03","Column0" : "body04","Column1" : "body05","Column2" : "body06","Column3" : "body07","Column4" : "body08"},{"Code" : "body01","Data" : "body02","Col0" : "body03","Column0" : "body04","Column1" : "body05","Column2" : "body06","Column3" : "body07","Column4" : "body08"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("Static01","3","31","301","37",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Grid_M_getSubCellText_49156_01] ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("30");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_button_menu","93","1","107","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("◀Grid_Method");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","9","65","291","175",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_data");
            obj.getSetter("position").set("absolute");
            obj.set_selecttype("cell");
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"54\"/><Column size=\"49\"/><Column band=\"right\" size=\"52\"/><Column band=\"right\" size=\"52\"/></Columns><Rows><Row band=\"head\" size=\"36\"/><Row band=\"head\" size=\"24\"/><Row size=\"24\"/><Row size=\"30\"/><Row band=\"summ\" size=\"42\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"><Cell text=\"head01\"/><Cell col=\"1\" text=\"head02\"/></Cell><Cell col=\"2\" text=\"head03\"/><Cell col=\"3\" colspan=\"2\"><Cell text=\"head04\"/><Cell col=\"1\" text=\"head05\"/></Cell><Cell row=\"1\" text=\"head06\"/><Cell col=\"1\" row=\"1\" text=\"head07\"/><Cell col=\"2\" row=\"1\" text=\"head08\"/><Cell col=\"3\" row=\"1\" text=\"head08\"/><Cell col=\"4\" row=\"1\" text=\"head09\"/></Band><Band id=\"body\"><Cell colspan=\"3\"><Cell edittype=\"normal\" text=\"bind:Code\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Col0\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:Column0\"/></Cell><Cell col=\"3\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"4\"/><Cell edittype=\"normal\" row=\"1\" text=\"bind:Column2\"/><Cell col=\"1\" colspan=\"2\" row=\"1\"><Cell edittype=\"normal\" text=\"bind:Column3\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column4\"/></Cell><Cell col=\"3\" edittype=\"normal\" row=\"1\" text=\"bind:Data\"/><Cell col=\"4\" row=\"1\"/></Band><Band id=\"summary\"><Cell colspan=\"3\"><Cell text=\"summ00\"/><Cell col=\"1\" text=\"summ01\"/><Cell col=\"2\" text=\"summ02\"/></Cell><Cell col=\"3\" text=\"summ03\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","11","245","78","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("Row index");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","11","285","69","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("cell index");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_rowIdx","94","248","55","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_cellIdx","94","288","55","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","163","253","69","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("Pivot Index");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","163","285","69","26",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("subcell index");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_pivotIdx","246","248","55","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("txt_subcellIdx","246","288","55","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_getSubCellText","109","323","123","19",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("getSubCellText");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","241","323","63","19",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txt_result","6","344","298","99",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_data");
        };
        
        // User Script
        this.registerScript("RP_73214_Grid_M_getSubCellText_49156_01.xfdl", function(nexacro, system, trace, environment, application) {
        this.btn_main_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");
        }

        this.btn_button_menu_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Grid_Method_menu4.xfdl");
        }

        this.btn_clear_onclick = function(obj,  e)
        {
        	this.txt_result.set_value("//");
        }


        this.btn_getSubCellText_onclick = function(obj,  e)
        {
        	var strText;

        	if(this.txt_pivotIdx.value != "" && this.txt_pivotIdx.value != undefined){
        		strText = this.Grid00.getSubCellText(parseInt(this.txt_rowIdx.value), parseInt(this.txt_cellIdx.value), parseInt(this.txt_subcellIdx.value), parseInt(this.txt_pivotIdx.value));
        	}else{
        		strText = this.Grid00.getSubCellText(parseInt(this.txt_rowIdx.value), parseInt(this.txt_cellIdx.value), parseInt(this.txt_subcellIdx.value));
        	}

        	this.txt_result.set_value(this.txt_result.value + "\nCell의 Text : " + strText);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_button_menu.addEventHandler("onclick",this.btn_button_menu_onclick,this);
            this.btn_getSubCellText.addEventHandler("onclick",this.btn_getSubCellText_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("RP_73214_Grid_M_getSubCellText_49156_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
