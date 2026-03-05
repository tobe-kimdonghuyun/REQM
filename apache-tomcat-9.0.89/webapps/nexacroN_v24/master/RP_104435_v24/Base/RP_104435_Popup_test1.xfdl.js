(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popup");
            this.set_titletext("New Form");
            this.getSetter("classname").set("popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "10"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","73","70","206","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("nexacro.open");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","176","204",null,"183","100%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"69","106","54","4.85%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","75","182","239","98",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("showModalWindow");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","326","182","224","98",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("showModal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104435_Popup_test1.xfdl", function() {

        this.Button00_onclick = function(obj,  e)
        {

        // aaa 모달, bbb 모달리스
        	nexacro.open("modeless", "Base::RP_104435_Popup_Sub.xfdl", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, "topmost=false showtitlebar=true showstatusbar=false resizable=true", 100, 100);
        }


        this.fn_callback = function(sPopupId, sReturn)
        {
        	trace('fn_callback');
        	trace(sReturn);
        }


        this.Button01_onclick = function(obj,e)
        {
        	var objCFrame = new ChildFrame();

        	objCFrame.init( "moda00_showModalWindow", 0, 0, 500, 500 );
        	objCFrame.formurl = "Base::RP_104435_Popup_Sub.xfdl";
        	var ret = system.showModalWindow( objCFrame, "modal00", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this );
        };



        this.Button04_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00_showModal", 0, 0, 500, 500 );
        	objFrame.set_formurl("Base::RP_104435_Popup_Sub.xfdl");

        	var vRtn = objFrame.showModal( objParentFrame, {a:'aaa', b:'bbb'}, this, this.fn_callback );

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("RP_104435_Popup_test1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
