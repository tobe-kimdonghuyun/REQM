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
                this._setFormPosition(1280,1360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDscsnList", this);
            obj.set_useclientlayout("true");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "rownum","type" : "STRING","size" : "256"},{"id" : "dscsnAplyTitlNm","type" : "STRING","size" : "256"},{"id" : "dscsnAplyDt","type" : "STRING","size" : "256"}]},"Rows" : [{"rownum" : "1","dscsnAplyTitlNm" : "aaaaaa","dscsnAplyDt" : "20250814"},{"rownum" : "2","dscsnAplyTitlNm" : "bbbbb","dscsnAplyDt" : "20250814"},{"rownum" : "3","dscsnAplyTitlNm" : "ccccc","dscsnAplyDt" : "20250814"},{"rownum" : "4","dscsnAplyTitlNm" : "ddddd","dscsnAplyDt" : "20250814"},{"rownum" : "5","dscsnAplyTitlNm" : "eeeee","dscsnAplyDt" : "20250814"},{"rownum" : "6","dscsnAplyTitlNm" : "fffff","dscsnAplyDt" : "20250814"},{"rownum" : "7","dscsnAplyTitlNm" : "ggggg","dscsnAplyDt" : "20250814"},{"rownum" : "8","dscsnAplyTitlNm" : "hjhhhh","dscsnAplyDt" : "20250814"},{"rownum" : "9","dscsnAplyTitlNm" : "iiiiiii","dscsnAplyDt" : "20250814"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","36","457","113",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("step 접근");
            this.addChild(obj.name, obj);

            obj = new Div("divImage","35","190",null,"394","215",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Base::RP_103339_frameWorkMainImg.xfdl");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","40","631","307","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divImage
            obj = new Layout("default","",0,0,this.divImage.form,function(p){});
            this.divImage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","desktopScr",1280,1360,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("step 접근");
                p.Button00.move("50","36","457","113",null,null);

                p.divImage.set_taborder("1");
                p.divImage.set_text("Div00");
                p.divImage.set_url("Base::RP_103339_frameWorkMainImg.xfdl");
                p.divImage.set_tabstop("false");
                p.divImage.move("35","190",null,"394","215",null);

                p.Button01.set_taborder("2");
                p.Button01.set_text("Button01");
                p.Button01.move("40","631","307","50",null,null);
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

                p.divImage.move("50","196",null,"164","110",null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::RP_103339_frameWorkMainImg.xfdl");
        };
        
        // User Script
        this.registerScript("RP_103339_Form_Base.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	trace("Button00_onclick");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.Base_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_103339_Form_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
