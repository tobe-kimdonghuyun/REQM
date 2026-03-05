(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_autoResult", this);
            obj._setContents("<ColumnInfo><Column id=\"hkeyword\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hkeyword\">가가가가가가</Col></Row><Row><Col id=\"hkeyword\">나나나나나나</Col></Row><Row><Col id=\"hkeyword\">다다다다다</Col></Row><Row><Col id=\"hkeyword\">라라라라라</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","639","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TAB으로 이동 시 WebEditor 접근 후 입력되지 않는 현상.");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","74","130","150","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","76","185","176","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","64","224","1133","726",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","76","977","181","75",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,1200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("rp101472.xfdl", function() {
        this.Form_Work_onload = function(obj,e)
        {
        	//this.WebBrowser00.set_url("localhost:4101/html/test.html");
        	this.WebBrowser00.set_url("localhost:4099/CKEDITOR/editor/index.html");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
        };
        this.loadIncludeScript("rp101472.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
