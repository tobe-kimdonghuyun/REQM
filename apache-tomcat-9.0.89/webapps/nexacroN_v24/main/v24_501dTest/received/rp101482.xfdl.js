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
            obj.set_text("TAB으로 이동 시 WebBrowser 접근 후 초점이 주소창으로 튀는 현상");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","74","130","170","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("에디터 콘텐츠 설정");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","76","185","176","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","64","224","1133","726",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","76","1107","181","75",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new View("viewNavi","0","960","1300","110",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("View00");
            obj.set_viewdataset("viewdataset");
            this.addChild(obj.name, obj);

            obj = new Static("stc_preIcon","40","10","96","30",null,null,null,null,null,null,this.viewNavi.form);
            obj.set_taborder("0");
            obj.set_text("다음글");
            obj.set_cssclass("sta_WF_listUp");
            obj.set_cursor("pointer");
            obj.set_fittocontents("width");
            obj.set_accessibilitydescription("링크");
            this.viewNavi.addChild(obj.name, obj);

            obj = new Static("stc_pre","150","10",null,"30","0",null,null,null,null,null,this.viewNavi.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_viewDetail2");
            obj.set_accessibilitydescription("링크");
            this.viewNavi.addChild(obj.name, obj);

            obj = new Static("stc_nextIcon","40","70","96","30",null,null,null,null,null,null,this.viewNavi.form);
            obj.set_taborder("2");
            obj.set_text("이전글");
            obj.set_cssclass("sta_WF_listDown");
            obj.set_cursor("pointer");
            obj.set_fittocontents("width");
            obj.set_accessibilitydescription("링크");
            this.viewNavi.addChild(obj.name, obj);

            obj = new Static("stc_next","150","69",null,"30","0",null,null,null,null,null,this.viewNavi.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_viewDetail2");
            obj.set_accessibilitydescription("링크");
            this.viewNavi.addChild(obj.name, obj);

            obj = new Static("staLine","0","55","1300","1",null,null,null,null,null,null,this.viewNavi.form);
            obj.set_taborder("4");
            obj.set_background("#d9dce2");
            obj.set_accessibilityenable("false");
            this.viewNavi.addChild(obj.name, obj);

            obj = new Button("Button03","76","1215","181","75",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","76","1300","181","75",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.viewNavi.form
            obj = new Layout("default","",0,0,this.viewNavi.form,function(p){});
            this.viewNavi.form.addLayout(obj.name, obj);

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
        this.registerScript("rp101482.xfdl", function() {
        this.Form_Work_onload = function(obj,e)
        {
        	//this.WebBrowser00.set_url("localhost:4101/html/test.html");
        	this.WebBrowser00.set_url("localhost:4100/CKEDITOR/editor/view.html");
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	trace("=========================================");
        	var content = "12345";
        	this.WebBrowser00.callMethod("setContent", content, true);
        };

        this.Button01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.WebBrowser00.addEventHandler("onusernotify",this.WebBrowser00_onusernotify,this);
            this.viewNavi.form.stc_preIcon.addEventHandler("onclick",this.viewNavi_stc_preIcon_onclick,this);
            this.viewNavi.form.stc_pre.addEventHandler("onclick",this.viewNavi_stc_pre_onclick,this);
            this.viewNavi.form.stc_nextIcon.addEventHandler("onclick",this.viewNavi_stc_nextIcon_onclick,this);
            this.viewNavi.form.stc_next.addEventHandler("onclick",this.viewNavi_stc_next_onclick,this);
        };
        this.loadIncludeScript("rp101482.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
