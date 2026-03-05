(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BasicChartandRadar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTempo", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"c1\" type=\"FLOAT\" size=\"256\"/><Column id=\"c2\" type=\"FLOAT\" size=\"256\"/><Column id=\"c3\" type=\"FLOAT\" size=\"256\"/><Column id=\"c4\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">Jan</Col><Col id=\"c1\">-7.5</Col><Col id=\"c2\">-5.3</Col><Col id=\"c3\">-4</Col><Col id=\"c4\">-1.5</Col></Row><Row><Col id=\"month\">Feb</Col><Col id=\"c1\">-3.2</Col><Col id=\"c2\">-1.5</Col><Col id=\"c3\">-3.2</Col><Col id=\"c4\">0.2</Col></Row><Row><Col id=\"month\">Mar</Col><Col id=\"c1\">2.5</Col><Col id=\"c2\">5.3</Col><Col id=\"c3\">3.5</Col><Col id=\"c4\">5.6</Col></Row><Row><Col id=\"month\">Apr</Col><Col id=\"c1\">7</Col><Col id=\"c2\">9</Col><Col id=\"c3\">10</Col><Col id=\"c4\">7</Col></Row><Row><Col id=\"month\">May</Col><Col id=\"c1\">8</Col><Col id=\"c2\">9</Col><Col id=\"c3\">8</Col><Col id=\"c4\">10</Col></Row><Row><Col id=\"month\">Jun</Col><Col id=\"c1\">12</Col><Col id=\"c2\">11</Col><Col id=\"c3\">9</Col><Col id=\"c4\">11</Col></Row><Row><Col id=\"month\">Jul</Col><Col id=\"c1\">19</Col><Col id=\"c2\">21</Col><Col id=\"c3\">18</Col><Col id=\"c4\">20</Col></Row><Row><Col id=\"month\">Aug</Col><Col id=\"c1\">25</Col><Col id=\"c2\">27</Col><Col id=\"c3\">26</Col><Col id=\"c4\">22</Col></Row><Row><Col id=\"month\">Sep</Col><Col id=\"c1\">20</Col><Col id=\"c2\">20</Col><Col id=\"c3\">22</Col><Col id=\"c4\">18</Col></Row><Row><Col id=\"month\">Oct</Col><Col id=\"c1\">15</Col><Col id=\"c2\">13</Col><Col id=\"c3\">12</Col><Col id=\"c4\">17</Col></Row><Row><Col id=\"month\">Nov</Col><Col id=\"c1\">8</Col><Col id=\"c2\">9</Col><Col id=\"c3\">7</Col><Col id=\"c4\">7</Col></Row><Row><Col id=\"month\">Dec</Col><Col id=\"c1\">-2</Col><Col id=\"c2\">-4.5</Col><Col id=\"c3\">-1.2</Col><Col id=\"c4\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","0%","0%",null,null,"50.00%","0%",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("dsTempo");
            obj.getSetter("categorycolumn").set("bind:month");
            obj.getSetter("background").set("");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);

            obj = new RadarChart("RadarChart00","BasicChart00:0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsTempo");
            obj.getSetter("categorycolumn").set("bind:month");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,480,this,function(p){});
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
        this.loadIncludeScript("BasicChartandRadarChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
