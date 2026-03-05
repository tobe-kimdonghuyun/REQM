(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("defaultform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">2500</Col><Col id=\"month\">F_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">800</Col><Col id=\"month\">G_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">1500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"catName\" type=\"STRING\" size=\"256\"/><Column id=\"year2010\" type=\"INT\" size=\"256\"/><Column id=\"year2011\" type=\"INT\" size=\"256\"/><Column id=\"year2012\" type=\"INT\" size=\"256\"/><Column id=\"year2013\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"catName\">A</Col><Col id=\"year2010\">140</Col><Col id=\"year2011\">70</Col><Col id=\"year2012\">130</Col><Col id=\"year2013\">170</Col></Row><Row><Col id=\"catName\">B</Col><Col id=\"year2010\">90</Col><Col id=\"year2011\">170</Col><Col id=\"year2012\">150</Col><Col id=\"year2013\">170</Col></Row><Row><Col id=\"catName\">C</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">80</Col><Col id=\"year2012\">180</Col><Col id=\"year2013\">150</Col></Row><Row><Col id=\"catName\">D</Col><Col id=\"year2010\">100</Col><Col id=\"year2011\">130</Col><Col id=\"year2012\">200</Col><Col id=\"year2013\">210</Col></Row><Row><Col id=\"catName\">E</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">50</Col><Col id=\"year2012\">100</Col><Col id=\"year2013\">240</Col></Row><Row><Col id=\"catName\">F</Col><Col id=\"year2010\">110</Col><Col id=\"year2011\">50</Col><Col id=\"year2012\">140</Col><Col id=\"year2013\">210</Col></Row><Row><Col id=\"catName\">G</Col><Col id=\"year2010\">160</Col><Col id=\"year2011\">120</Col><Col id=\"year2012\">130</Col><Col id=\"year2013\">200</Col></Row><Row><Col id=\"catName\">H</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">70</Col><Col id=\"year2012\">165</Col><Col id=\"year2013\">140</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"Perr\" type=\"FLOAT\" size=\"256\"/><Column id=\"Use\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"Perr\">22</Col><Col id=\"Use\">60</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"Perr\">20</Col><Col id=\"Use\">5</Col></Row><Row><Col id=\"Browser\">Samsung Internet</Col><Col id=\"Perr\">31</Col><Col id=\"Use\">20</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"Perr\">35</Col><Col id=\"Use\">40</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"Perr\">38</Col><Col id=\"Use\">30</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"Perr\">57</Col><Col id=\"Use\">10</Col></Row><Row><Col id=\"Browser\">UCBrowser</Col><Col id=\"Perr\">80</Col><Col id=\"Use\">9</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"Perr\">44</Col><Col id=\"Use\">60</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"Perr\">55</Col><Col id=\"Use\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new RoseChart("RoseChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("rosesize").set("70");
            obj.getSetter("duration").set("500");
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
        this.loadIncludeScript("RoseBase.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
