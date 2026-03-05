(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RadarChartSales");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTempo", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"TVs\" type=\"FLOAT\" size=\"256\"/><Column id=\"SmartPhones\" type=\"FLOAT\" size=\"256\"/><Column id=\"Computers\" type=\"FLOAT\" size=\"256\"/><Column id=\"Printers\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">Jan</Col><Col id=\"TVs\">85</Col><Col id=\"SmartPhones\">50</Col><Col id=\"Computers\">9</Col><Col id=\"Printers\">16</Col></Row><Row><Col id=\"month\">Feb</Col><Col id=\"TVs\">54</Col><Col id=\"SmartPhones\">76</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">15</Col></Row><Row><Col id=\"month\">Mar</Col><Col id=\"TVs\">57</Col><Col id=\"SmartPhones\">48</Col><Col id=\"Computers\">15</Col><Col id=\"Printers\">25</Col></Row><Row><Col id=\"month\">Apr</Col><Col id=\"TVs\">55</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">79</Col><Col id=\"Printers\">17</Col></Row><Row><Col id=\"month\">May</Col><Col id=\"TVs\">120</Col><Col id=\"SmartPhones\">56</Col><Col id=\"Computers\">18</Col><Col id=\"Printers\">10</Col></Row><Row><Col id=\"month\">Jun</Col><Col id=\"TVs\">140</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">19</Col><Col id=\"Printers\">11</Col></Row><Row><Col id=\"month\">Jul</Col><Col id=\"TVs\">57</Col><Col id=\"SmartPhones\">33</Col><Col id=\"Computers\">8</Col><Col id=\"Printers\">20</Col></Row><Row><Col id=\"month\">Aug</Col><Col id=\"TVs\">61</Col><Col id=\"SmartPhones\">42</Col><Col id=\"Computers\">9</Col><Col id=\"Printers\">22</Col></Row><Row><Col id=\"month\">Sep</Col><Col id=\"TVs\">48</Col><Col id=\"SmartPhones\">35</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">18</Col></Row><Row><Col id=\"month\">Oct</Col><Col id=\"TVs\">117</Col><Col id=\"SmartPhones\">47</Col><Col id=\"Computers\">11</Col><Col id=\"Printers\">17</Col></Row><Row><Col id=\"month\">Nov</Col><Col id=\"TVs\">110</Col><Col id=\"SmartPhones\">21</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">21</Col></Row><Row><Col id=\"month\">Dec</Col><Col id=\"TVs\">120</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">15</Col><Col id=\"Printers\">14</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RadarChart("RadarChart00","0%","0%",null,null,"0%","0%",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("binddataset").set("dsTempo");
            obj.getSetter("categorycolumn").set("bind:month");
            obj.getSetter("radius").set("80");
            obj.getSetter("visible").set("true");
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
        this.registerScript("RadarChart_MultiSeries.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("RadarChart_MultiSeries.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
