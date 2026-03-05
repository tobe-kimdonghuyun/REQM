(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MultiSeries_type1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/><Column id=\"sales1\" type=\"STRING\" size=\"256\"/><Column id=\"sales2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">A_price</Col><Col id=\"sales\">3000</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">1000</Col></Row><Row><Col id=\"month\">B_price</Col><Col id=\"sales\">2000</Col><Col id=\"sales1\">300</Col><Col id=\"sales2\">200</Col></Row><Row><Col id=\"month\">C_price</Col><Col id=\"sales\">1700</Col><Col id=\"sales1\">500</Col><Col id=\"sales2\">300</Col></Row><Row><Col id=\"month\">D_price</Col><Col id=\"sales\">1800</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">400</Col></Row><Row><Col id=\"month\">E_price</Col><Col id=\"sales\">2500</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">2500</Col><Col id=\"month\">F_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">2000</Col></Row><Row><Col id=\"sales\">800</Col><Col id=\"month\">G_price</Col><Col id=\"sales1\">700</Col><Col id=\"sales2\">1500</Col></Row><Row><Col id=\"sales\">900</Col><Col id=\"month\">H_price</Col><Col id=\"sales1\">800</Col><Col id=\"sales2\">1800</Col></Row><Row><Col id=\"month\">I_price</Col><Col id=\"sales\">400</Col><Col id=\"sales1\">2000</Col><Col id=\"sales2\">2800</Col></Row><Row><Col id=\"month\">J_price</Col><Col id=\"sales\">200</Col><Col id=\"sales1\">2500</Col><Col id=\"sales2\">700</Col></Row><Row><Col id=\"month\">K_price</Col><Col id=\"sales\">100</Col><Col id=\"sales1\">3000</Col><Col id=\"sales2\">600</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

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
        this.registerScript("Dynamic_RadarChart.xfdl", function() {

        this.BasicChartMultiAxis_onload = function(obj,e)
        {
        	obj = new RadarChart("RadarChart00","0%","0%",null,null,"0%","0%",null,null,null,null,this);
        			this.addChild(obj.name, obj);
        			obj.show();
        			obj.set_enableredraw(false);
        			obj.set_enableanimation("true");
                    obj.set_taborder("1");
                    obj.set_binddataset(this.Dataset00);
        			obj.set_boardspacing("20px");
                    obj.set_border("1px solid red");
        			obj.set_radartype("circle");
                    obj.set_contents({
                    	"title": {
                    		"id": "title",
                    		"text": "Radar Chart",
        					"subtext": "Is Dynamically generated Chart sample.",
                    		"textfont": "20pt/normal '맑은 고딕'",
                    		"padding": "0px 0px 5px",
                    		"visible": "true"
                    	},
                    	"legend": {
                    		"id": "legend",
                    		"padding": "3px 10px 3px 10px",
                    		"itemtextfont": "9pt '맑은 고딕'",
                    		"itemtextcolor": "#4c4c4c",
                    		"visible": "true"
                    	},
                    	"board": {
                    		"id": "board",
        					"border":"1px solid red"
                    	},
                    	"categoryaxis": {
                    		"id": "categoryaxis",
        					"axislinestyle":"1px solid gray"

                    	},
        				"tooltip": {
        					"id": "tooltip",
        					"background": "#4b4b4b",
        					"linestyle": "0px none",
        					"textcolor": "white",
        					"textfont": "10pt/normal '맑은 고딕'",
        					"padding": "5px"
        				},
                    	"seriesset": [
                    		{
                    			"id": "series0",
        						"valuecolumn":"bind:sales",
        						"itemtextvisible": "true",
        						"itemtextcolor": "blue",
        						"pointvisible":"true",
        						"linestyle": "2px solid blue",
        						"lineareavisible":"true",
        						"lineareaopacity":"0.3",
        						"highlightpointvisible":"true",
        						"highlightlinevisible":"true",
        						"highlightlineareavisible":"true",
        						"highlightlinestyle": "3px solid blue"
                    		},
        					{
                    			"id": "series1",
        						"valuecolumn":"bind:sales1",
        						"itemtextvisible": "true",
        						"itemtextcolor": "orange",
        						"pointvisible":"true",
        						"linestyle": "2px solid orange",
        						"highlightpointvisible":"true",
        						"highlightlinevisible":"true",
        						"highlightlineareavisible":"true",
        						"highlightlinestyle": "3px solid orange"
                    		},
        					{
                    			"id": "series2",
        						"valuecolumn":"bind:sales2",
        						"itemtextvisible": "true",
        						"itemtextcolor": "green",
        						"pointvisible":"true",
        						"linestyle": "2px solid green",
        						"highlightpointvisible":"true",
        						"highlightlinevisible":"true",
        						"highlightlineareavisible":"true",
        						"highlightlinestyle": "3px solid green"
                    		}
                    	],
                    	"valueaxes": [
        					{
                    			"id": "valueaxis0",
        						"axislinestyle":"1px solid gray"
        					}
        				]

                    });
                    obj.set_categorycolumn("bind:month");

        			obj.set_enableredraw(true);



        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BasicChartMultiAxis_onload,this);
        };
        this.loadIncludeScript("Dynamic_RadarChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
