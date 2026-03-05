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
            obj = new Button("Button00","20","25","270","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("edit value");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","25","110","750","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text(". Edit + Button 조합일 때  Edit에서 값 수정 후 TAB -> SHIFT+TAB으로 돌아오면 변경된 값 적용되지 않음. (방향키로 이동 시 적용됨)");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","28","172","274","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","315","172","119","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,desktopScr,tableScr,mobileScr",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_102718_Form_Work.xfdl", function() {

        this.Button01_onclick = function(obj,e)
        {
        	this.resetScroll();
        };


        this.Button02_onclick = function(obj,e)
        {
        	var oDiv = new Div();
        	oDiv.init("divSubMenu", 0, 0, null, null, 0, 0);
        	this.addChild(oDiv.id, oDiv);
        	oDiv.show();

        	var oStaTitle = new Static();
        	oStaTitle.init("staTitle", 8, 21, 171, 47);

        	oStaTitle.set_text("sassssssssssssssssssssssssssssssssssssssssssssss12341234656565");

        	oStaTitle.set_cssclass("sta_TF_MenuTit");

        	oStaTitle.set_cssclass("sta_TF_MenuTit");
        	oStaTitle.set_fittocontents("width");
        	oDiv.addChild(oStaTitle.id, oStaTitle);
        	oStaTitle.show();

        // 	var oSta = new Static();
        // 	oSta.init("oSta", 0, 0, 20, 30);
        //
        // 	oSta.set_fittocontents("width");
        //
        // 	this.addChild(oSta.id, oSta);
        // 	oSta.show();
        	this.resetScroll();
        };

        this.Div00_onmouseleave = function(obj,e)
        {
        	if(obj.form.components[e.fromobject.id] == e.fromobject) {
        		e.preventDefault();
        		return;
        	}
        	trace("Div00_onmouseleave");
        };

        this.Button01_onsetfocus = function(obj,e)
        {
        	this.Div00.set_background("red");
        };

        this.Button01_onkillfocus = function(obj,e)
        {
        	this.Div00.set_background("white");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("RP_102718_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
