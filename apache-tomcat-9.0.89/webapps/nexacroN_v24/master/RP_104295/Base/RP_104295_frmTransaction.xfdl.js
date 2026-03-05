(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTransaction");
            this.set_titletext("New Form");
            this.getSetter("classname").set("frmTransaction");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOut", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ColumnA","type" : "STRING","size" : "256"},{"id" : "ColumnB","type" : "STRING","size" : "256"},{"id" : "ColumnC","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "us","Column1" : "dollar","Column2" : "1000"},{"Column0" : "france","Column1" : "euro","Column2" : "2000"},{"Column0" : "england","Column1" : "pound","Column2" : "3000"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","199","34","83","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","27","38","143","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","301","34","79","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회2");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","27","100","143","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("text");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104295_frmTransaction.xfdl", function() {

        this.Button00_onclick = function(obj,  e)
        {
        	var sTragetUrl = "http://172.10.12.45:9090/RP_104295_getcomboData.jsp";
        	this.transaction("sel",
        	                 sTragetUrl,
        	                 "",
        	                 "ds00=output",
        	                 "",
        	                 "fnCallback");
        }

        this.btn00_onclick = function(obj,e)
        {
        	var sTragetUrl = "http://172.10.12.45:9090/RP_104295_getcomboData1.jsp";
        	this.transaction("sel",
        	                 sTragetUrl,
        	                 "",
        	                 "ds00=output",
        	                 "",
        	                 "fnCallback");
        };

        this.fnCallback = function(sSvcid, sResult, sErrCode)
        {
        	trace("서비스명==>" + sSvcid);
        	trace("결과==>" + sResult);
        	trace("에러발생시 에러코드==>" + sErrCode);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("RP_104295_frmTransaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
