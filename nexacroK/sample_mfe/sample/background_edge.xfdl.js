(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("aa");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("btn00","82","110","288","134",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_Edge");
            obj.set_edge("url(\'theme://images/btn_WF_Link03.png\') 1px 1px");
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("txa00","288","0","212","134",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00_00","456","110","288","134",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_Edge");
            obj.set_edge("url(\'theme://images/btn_WF_Link03.png\') 1px 1px");
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","156","290","154","66",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextField("text_id","129","383","250","60",null,null,null,null,null,null,this);
            obj.set_labeltext("TextField00");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel00","676","184","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel01","120","134","320","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj._setContents("<Contents><PanelItem componentid=\"btn02\" id=\"PanelItem00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","530","294","154","66",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn03","118","15","332","75",null,null,null,null,null,null,this);
            obj.set_border("1px solid red,1px solid blue,1px solid green,1px solid black");
            obj.set_taborder("4");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_flexwrap("wrap");
            obj.set_tabletemplate("1* 1* 1* / 0.5* 1* 1* 1*");
            obj.set_type("horizontal");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("background_edge.xfdl", function(nexacro, system, trace, environment, application) {

        this.btn01_onclick = function(obj,e)
        {
        	let btnelem = this.btn00.getElement();
        	btnelem.handle.style.border = "3px solid transparent";
        	btnelem.handle.style.borderRadius = "30% 30%";
        	btnelem.handle.style.background = "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, red 0%, orange 100%) border-box";

        	btnelem._edge_elem.handle.style.borderImageSource="none";

        };

        this.btn02_onclick = function(obj,e)
        {
        let btnelem = this.btn00_00.getElement();
            btnelem.handle.style.background = "#fff";
        	btnelem.handle.style.border = "3px solid transparent";
        	btnelem.handle.style.borderRadius = "30% 30%";

        	btnelem._edge_elem.handle.style.borderRadius = "30% 30%";
        	btnelem._edge_elem.handle.style.borderImageSource="linear-gradient(to right, red 0%, orange 100%)";
        	btnelem._edge_elem.handle.style.borderImageSlice="1 1";
        	btnelem._edge_elem.handle.style.borderImageWidth="5px 5px";
        };

        this.btn00_onclick = function(obj,e)
        {trace("cc")
        	alert("Aa");
        	trace("bb")
        	this.confirm("Aa");
        	trace("aa")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };

        this.loadIncludeScript("background_edge.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
