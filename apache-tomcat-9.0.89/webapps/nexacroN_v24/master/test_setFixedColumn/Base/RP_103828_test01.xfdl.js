(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test14");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02_00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"}]},"Rows" : [{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"},{"Column7" : "1","Column6" : "2","Column5" : "3","Column4" : "4","Column3" : "5","Column2" : "6"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid02","3.13%","44","558","302",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column7\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column5\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column2\"/><Cell col=\"6\" text=\"Column1\"/><Cell col=\"7\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column7\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column5\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column2\"/><Cell col=\"6\" text=\"bind:Column1\"/><Cell col=\"7\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00_00_00","651","41","199","29",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_min("0");
            obj.set_max("8");
            obj.set_value("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","652","81","197","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("setFixedColumn");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","3.13%","378","558","302",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column7\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column5\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column2\"/><Cell col=\"6\" text=\"Column1\"/><Cell col=\"7\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column7\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column5\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column2\"/><Cell col=\"6\" text=\"bind:Column1\"/><Cell col=\"7\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","640","390","197","59",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("setFixedColumn");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("RP_103828_test01.xfdl", function() {

        this.Button01_onclick = function(obj, e)
        {
        // 	    var g = this.Grid00;
        //
        //     g.setFormatColProperty(0, "band", "left");
        //     g.setFormatColProperty(1, "band", "left");
        //     g.setFormatColProperty(2, "band", "left");
        this.Grid00.setFixedColumn(this.Spin00.value, true);
        }

        this.Button02_onclick = function(obj, e)
        {


        	var g = this.Grid01;
        	g .setFixedColumn(this.Spin00_00.value, true);
        }

        this.Button03_onclick = function(obj, e)
        {
        			    var g = this.Grid02;

        	g .setFixedColumn(this.Spin00_00_00.value, true);
        }

        this.Button04_onclick = function(obj,e)
        {
        				    var g = this.Grid02_00;
        	for(var i = 0; i<=this.Spin00_00_00.value ;i++)
        		g .setFormatColProperty(i,"band","left");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Spin00_00_00.addEventHandler("onchanged",this.Spin00_onchanged,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button03_00.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("RP_103828_test01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
