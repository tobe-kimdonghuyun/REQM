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
            obj._setContents("<ColumnInfo><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row><Row><Col id=\"Column7\">1</Col><Col id=\"Column6\">2</Col><Col id=\"Column5\">3</Col><Col id=\"Column4\">4</Col><Col id=\"Column3\">5</Col><Col id=\"Column2\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","17.19%","135",null,"50","71.09%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1.86%","34","551","302",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column7\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column5\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column2\"/><Cell col=\"6\" text=\"Column1\"/><Cell col=\"7\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column7\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column5\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column2\"/><Cell col=\"6\" text=\"bind:Column1\"/><Cell col=\"7\" text=\"bind:Column0\"/></Band><Band id=\"summary\" border=\"1px solid red\"><Cell colspan=\"5\" text=\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\" border=\"1px solid red\"/><Cell col=\"5\" border=\"1px solid red\"/><Cell col=\"6\" border=\"1px solid red\"/><Cell col=\"7\" border=\"1px solid red\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","58.59%","34",null,"67","27.93%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","1.56%","353","551","302",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column7\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column5\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column2\"/><Cell col=\"6\" text=\"Column1\"/><Cell col=\"7\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column7\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column5\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column2\"/><Cell col=\"6\" text=\"bind:Column1\"/><Cell col=\"7\" text=\"bind:Column0\"/></Band><Band id=\"summary\" border=\"1px solid red\"><Cell colspan=\"5\" border=\"1px solid red\"><Cell text=\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Cell><Cell col=\"5\" border=\"1px solid red\"/><Cell col=\"6\" border=\"1px solid red\"/><Cell col=\"7\" border=\"1px solid red\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","1.37%","689","552","302",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column7\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column5\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column2\"/><Cell col=\"6\" text=\"Column1\"/><Cell col=\"7\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column7\"/><Cell col=\"1\" text=\"bind:Column6\"/><Cell col=\"2\" text=\"bind:Column5\"/><Cell col=\"3\" text=\"bind:Column4\"/><Cell col=\"4\" text=\"bind:Column3\"/><Cell col=\"5\" text=\"bind:Column2\"/><Cell col=\"6\" text=\"bind:Column1\"/><Cell col=\"7\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","58.11%","355",null,"86","21.48%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","60.94%","701",null,"59","19.73%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","2.05%","1008","552","302",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("Dataset02_00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column7\"/><Cell col=\"1\" text=\"Column6\"/><Cell col=\"2\" text=\"Column5\"/><Cell col=\"3\" text=\"Column4\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"Column2\"/><Cell col=\"6\" text=\"Column1\"/><Cell col=\"7\" text=\"Column0\"/></Band><Band id=\"body\"><Cell colspan=\"5\" text=\"bind:Column7\"/><Cell col=\"5\" text=\"bind:Column2\"/><Cell col=\"6\" text=\"bind:Column1\"/><Cell col=\"7\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","656","1010","205","53",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button04");
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
        this.registerScript("RP_103279_test24.xfdl", function() {

        this.Button01_onclick = function(obj, e)
        {
        	    var g = this.Grid00;

            g.setFormatColProperty(0, "band", "left");
            g.setFormatColProperty(1, "band", "left");
            g.setFormatColProperty(2, "band", "left");
        }

        this.Button02_onclick = function(obj, e)
        {
        		    var g = this.Grid01;

            g.setFormatColProperty(0, "band", "left");
            g.setFormatColProperty(1, "band", "left");
            g.setFormatColProperty(2, "band", "left");
        }

        this.Button03_onclick = function(obj, e)
        {
        			    var g = this.Grid02;

            g.setFormatColProperty(0, "band", "left");
            g.setFormatColProperty(1, "band", "left");
            g.setFormatColProperty(2, "band", "left");
        }

        this.Button04_onclick = function(obj,e)
        {
        				    var g = this.Grid02_00;

            g.setFormatColProperty(0, "band", "left");
            g.setFormatColProperty(1, "band", "left");
            g.setFormatColProperty(2, "band", "left");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("RP_103279_test24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
