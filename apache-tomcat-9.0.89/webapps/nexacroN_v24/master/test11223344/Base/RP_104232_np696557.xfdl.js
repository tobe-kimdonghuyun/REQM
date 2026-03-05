(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("np696557");
            this.set_titletext("한국원자력연구원");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "level","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","82","38","558","672",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_treeinitstatus("collapse,null");
            obj.set_autofittype("col");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"39\"/></Rows><Band id=\"head\"><Cell text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\" treelevel=\"bind:level\" displaytype=\"treeitemcontrol\" edittype=\"tree\" autosizerow=\"limitmin\" wordWrap=\"char\" verticalAlign=\"top\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","660","170","294","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("안녕하세요. 투비소프트 고객지원팀입니다.\n\n해당 내용은 현재 확인 중에 있습니다.\n\n확인 후 답변을 드리도록 하겠습니다.\n\n감사합니다.");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","663.00","60","294","100",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("안녕하세요. 투비소프트 고객지원팀입니다.\n\n해당 내용은 현재 확인 중에 있습니다.\n\n확인 후 답변을 드리도록 하겠습니다.\n\n감사합니다.");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","660","275","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","834","275","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
        this.registerScript("RP_104232_np696557.xfdl", function() {
        this.Button01_onclick = function(obj,e)
        {
        	this.Dataset00.addRow();
        	var nRow = this.Dataset00.rowposition;
        	trace("nRow11 " + nRow);
        	this.Dataset00.setColumn(nRow, "level", 0);
        	this.Dataset00.setColumn(nRow, "Column1", this.TextArea01.value);
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.Dataset00.addRow();
        	var nRow = this.Dataset00.rowposition;
        	trace("nRow2 " + nRow);
         	this.Dataset00.setColumn(nRow, "level", 1);
         	this.Dataset00.setColumn(nRow, "Column1", this.TextArea00.value);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("RP_104232_np696557.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
