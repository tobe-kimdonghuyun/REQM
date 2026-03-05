(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColumnAndLine");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">33.2</Col><Col id=\"name\">서울</Col></Row><Row><Col id=\"data\">14.5</Col><Col id=\"name\">대전</Col></Row><Row><Col id=\"data\">11.8</Col><Col id=\"name\">대구</Col></Row><Row><Col id=\"data\">10.2</Col><Col id=\"name\">광주</Col></Row><Row><Col id=\"data\">12.3</Col><Col id=\"name\">부산</Col></Row><Row><Col id=\"data\">9.2</Col><Col id=\"name\">전주</Col></Row><Row><Col id=\"data\">4.7</Col><Col id=\"name\">인천</Col></Row><Row><Col id=\"data\">1.1</Col><Col id=\"name\">경기</Col></Row><Row><Col id=\"data\">4.9</Col><Col id=\"name\">강원</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("Dataset00");
            obj.getSetter("categorycolumn").set("bind:name");
            obj.getSetter("bargrouping").set("false");
            obj.getSetter("enableanimation").set("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("bar_color.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
