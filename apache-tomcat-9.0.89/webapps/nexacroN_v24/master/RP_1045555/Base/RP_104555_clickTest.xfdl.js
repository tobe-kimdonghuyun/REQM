(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("clickTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">C</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">가</Col><Col id=\"Column3\">30</Col></Row><Row><Col id=\"Column0\">A</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">나</Col><Col id=\"Column3\">10</Col></Row><Row><Col id=\"Column0\">D</Col><Col id=\"Column1\">4</Col><Col id=\"Column2\">다</Col><Col id=\"Column3\">40</Col></Row><Row><Col id=\"Column0\">B</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">라</Col><Col id=\"Column3\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","195","91","350","358",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLog","657","245","300","204",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("이벤트 로그 확인용");
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
        this.registerScript("RP_104555_clickTest.xfdl", function() {

        this.Grid00_onheadclick = function(obj,e)
        {

        	this.taLog.insertText("\r\n[head click] col=" + e.col);

            //  현상 재현하려면 이 줄 주석 해제
             //this.Dataset00.keystring = "S:+Column" + e.col;
        };

        this.Grid00_onheaddblclick = function(obj,e)
        {
            this.taLog.insertText("\r\n[head dblclick] col=" + e.col);
        };

        this.Dataset00_onrowsetchanged = function(obj,e)
        {
        	this.taLog.insertText("\r\n[rowsetchanged] reason=" + e.reason);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid00.addEventHandler("onheaddblclick",this.Grid00_onheaddblclick,this);
            this.Dataset00.addEventHandler("onrowsetchanged",this.Dataset00_onrowsetchanged,this);
        };
        this.loadIncludeScript("RP_104555_clickTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
