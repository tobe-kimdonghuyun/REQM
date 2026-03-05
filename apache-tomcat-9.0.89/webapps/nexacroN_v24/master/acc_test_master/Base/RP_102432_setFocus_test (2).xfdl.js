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
            obj = new Button("Button00","10","14","412","106",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("방향키로 진입 시 초점이 잡히지 않음.");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","138","1283","0",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","52","45","349","71",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","18","198","313","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","23","336","320","111",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("RP_102432_setFocus_test (2).xfdl", function() {

        this.Div00_onkillfocus = function(obj,e)
        {
        	obj.set_height(0);
        	var elem = this.Div00.getElement();
        	if(elem)
        	{
        		elem.setElementZIndex("");
        	}
        };

        this.Div00_onsetfocus = function(obj,e)
        {

        	obj.set_height(150);
        	var elem = this.Div00.getElement();
        	if(elem)
        	{
        		elem.setElementZIndex(1);
        	}
        };

        this.Div00_Button00_onsetfocus = function(obj,e)
        {
        	alert("버튼에 초점");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.addEventHandler("onkillfocus",this.Div00_onkillfocus,this);
            this.Div00.addEventHandler("onsetfocus",this.Div00_onsetfocus,this);
            this.Div00.form.Button00.addEventHandler("onsetfocus",this.Div00_Button00_onsetfocus,this);
        };
        this.loadIncludeScript("RP_102432_setFocus_test (2).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
