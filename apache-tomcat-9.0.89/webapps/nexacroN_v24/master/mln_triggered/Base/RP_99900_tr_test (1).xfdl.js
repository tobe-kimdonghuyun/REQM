(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "BLOB","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset03", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new VirtualFile("VirtualFile00", this);
            obj.getSetter("onerror").set("VirtualFile00_onerror");
            obj.getSetter("onsuccess").set("VirtualFile00_onsuccess");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","30.00","250","136","52",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","17","12","539","194",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","735","61","217","121",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","741","237","403","152",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_99900_tr_test (1).xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.transaction("t1", "http://172.10.12.45:9090/RP_99900_B_TR_XML.jsp", "input=Dataset00", "Dataset00=output3", "", "fn_callback");
        };

        this.fn_callback = function (trid, errcode, errmsg)
        {
        	trace("errcode : " + errcode);
        	this.Grid00.createFormat();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Dataset00.addEventHandler("onrowposchanged",this.Dataset00_onrowposchanged,this);
        };
        this.loadIncludeScript("RP_99900_tr_test (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
