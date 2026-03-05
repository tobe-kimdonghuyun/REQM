(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ALL");
            this.set_titletext("SDI");
            this.set_scrolltype("vertical");
            this.set_scrollbartype("default default");
            if (Form == this.constructor)
            {
                this._setFormPosition(1248,2000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lang", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "LANGUAGE","type" : "STRING","size" : "256"}]},"Rows" : [{"LANGUAGE" : "한국어"},{"LANGUAGE" : "English(영어)"},{"LANGUAGE" : "中文(중국어)"},{"LANGUAGE" : "日本(일본어)"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"152","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("design::frame/Form_Top_Frame.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","24","153",null,"960","24",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","248","452",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("design::frame/Form_Work_Sidemenu.xfdl");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bmline");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div02","312","0",null,"87","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div01","312","87",null,null,"0","0",null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","0","Div00_00:60",null,"590","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","1320","50","183","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_lang");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("LANGUAGE");
            obj.set_cssclass("cbo_TF_Popup");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form.Div00
            obj = new Layout("default","",0,0,this.Div00_00.form.Div00.form,function(p){});
            this.Div00_00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form.Div02
            obj = new Layout("default","",0,0,this.Div00_00.form.Div02.form,function(p){});
            this.Div00_00.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form.Div01
            obj = new Layout("default","",0,0,this.Div00_00.form.Div01.form,function(p){});
            this.Div00_00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00_00
            obj = new Layout("default","",0,0,this.Div00_00_00.form,function(p){});
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1248,2000,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","design::frame/Form_Top_Frame.xfdl");
            this._addPreloadList("fdl","design::frame/Form_Work_Sidemenu.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("ALL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
