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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"nm\">AAA</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"nm\">BBB</Col></Row><Row><Col id=\"no\">3</Col><Col id=\"nm\">CCC</Col></Row><Row><Col id=\"no\">4</Col><Col id=\"nm\">DDD</Col></Row><Row><Col id=\"no\">5</Col><Col id=\"nm\">EEE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","98","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("버튼입니다");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","240","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("버튼입니다2");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","98","91","457","346",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("http://172.10.12.45:9090/RP_102458_htmlviewer.html");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","98","465","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("버튼입니다3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","240","465","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("버튼입니다4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102458_acc_webbrowser_test (1).xfdl", function() {

        this.Form_Work_onload = function(obj,e)
        {
        	//this.WebBrowser00.set_url('http://localhost:9093/html/htmlviewer.html');
        };

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	this.WebBrowser00.callMethod("setInnerHtml", "테스트 입니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.WebBrowser00.addEventHandler("onloadcompleted",this.WebBrowser00_onloadcompleted,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_102458_acc_webbrowser_test (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
