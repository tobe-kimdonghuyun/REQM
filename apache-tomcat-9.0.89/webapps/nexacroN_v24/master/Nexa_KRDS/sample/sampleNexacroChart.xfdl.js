(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleNexacroChart");
            this.set_titletext("Nexacro Basic 차트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,746);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRainfall", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "name","type" : "STRING","size" : "256"},{"id" : "rainfall","type" : "FLOAT","size" : "256"},{"id" : "mean","type" : "FLOAT","size" : "256"},{"id" : "select","type" : "STRING","size" : "256"}]},"Rows" : [{"name" : "SYDNEY BOTANIC GARDENS","rainfall" : "94.1","mean" : "68.2"},{"name" : "CHATSWOOD BOWLING CLUB","rainfall" : "78","mean" : "51"},{"name" : "CONCORD GOLF CLUB","rainfall" : "11.2","mean" : "59.1"},{"name" : "ABBOTSFORD","rainfall" : "59","mean" : "66.2","select" : "1"},{"name" : "MARRICKVILLE GOLF CLUB","rainfall" : "56","mean" : "55.9"},{"name" : "SYDNEY AIRPORT AMO","rainfall" : "66.6","mean" : "60.3","select" : "1"},{"name" : "PENNANT HILLS","rainfall" : "53.2","mean" : "56.8"},{"name" : "CONCORD","rainfall" : "16.6","mean" : "48.6"},{"name" : "RANDWICK BOWLING CLUB","rainfall" : "122.6","mean" : "65.9"},{"name" : "SANS SOUCI","rainfall" : "45","mean" : "61.5","select" : "1"},{"name" : "TERREY HILLS AWS","rainfall" : "83.4","mean" : "63.9"},{"name" : "SYDNEY","rainfall" : "80","mean" : "65.5"},{"name" : "STRATHFIELD GOLF CLUB","rainfall" : "36","mean" : "45.3"},{"name" : "LUCAS HEIGHTS","rainfall" : "28.9","mean" : "50.9"},{"name" : "CASTLE COVE","rainfall" : "101","mean" : "69.2"},{"name" : "PARRAMATTA NORTH","rainfall" : "33.6","mean" : "52.4"},{"name" : "COLLAROY","rainfall" : "91.4","mean" : "66.2"},{"name" : "BANKSTOWN AIRPORT AWS","rainfall" : "33.4","mean" : "43.6"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCountryLitres", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "country","type" : "STRING","size" : "256"},{"id" : "value","type" : "FLOAT","size" : "256"},{"id" : "select","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"},{"id" : "valuedata","type" : "FLOAT","size" : "256"}]},"Rows" : [{"country" : "Czech Republic","value" : "356.9","select" : "","data" : "test1","valuedata" : "100"},{"country" : "Ireland","value" : "54","select" : "","data" : "tes2","valuedata" : "10"},{"country" : "Germany","value" : "115.8","data" : "test3","valuedata" : "200.11"},{"country" : "Australia","value" : "109.9","select" : "","data" : "test4","valuedata" : "19.1"},{"country" : "Austria","value" : "108.3","select" : "1","data" : "test5","valuedata" : "30.12"},{"country" : "UK","value" : "65","select" : "","data" : "test6","valuedata" : "10"},{"country" : "Belgium","value" : "110","select" : "","data" : "test7","valuedata" : "19.100"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCostProfit", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "category","type" : "STRING","size" : "256"},{"id" : "profit","type" : "FLOAT","size" : "256"},{"id" : "cost","type" : "FLOAT","size" : "256"},{"id" : "revenue","type" : "FLOAT","size" : "256"},{"id" : "profit1","type" : "FLOAT","size" : "256"},{"id" : "cost1","type" : "FLOAT","size" : "256"},{"id" : "revenue1","type" : "FLOAT","size" : "256"},{"id" : "select","type" : "STRING","size" : "256"}]},"Rows" : [{"category" : "1","profit" : "600","cost" : "700","revenue" : "9999","profit1" : "400","cost1" : "200","revenue1" : "8000"},{"category" : "2","profit" : "1000","cost" : "1400","revenue" : "5500","profit1" : "2200","cost1" : "4000","revenue1" : "4040"},{"category" : "3","profit" : "1500","cost" : "1550","revenue" : "2200","profit1" : "1900","cost1" : "2000","revenue1" : "3000"},{"category" : "4","profit" : "2200","cost" : "1300","revenue" : "1900","profit1" : "50","cost1" : "660","revenue1" : "200"},{"category" : "5","profit" : "1400","cost" : "900","revenue" : "9900","profit1" : "3000","cost1" : "1500","revenue1" : "500"},{"category" : "6","profit" : "2000","cost" : "500","revenue" : "27000","profit1" : "80","cost1" : "2900","revenue1" : "3050","select" : "1"},{"profit" : "1800","category" : "7","cost" : "1400","revenue" : "8000","profit1" : "2500","cost1" : "800","revenue1" : "2000"},{"category" : "8","profit" : "2500","cost" : "800","revenue" : "5700","profit1" : "3000","cost1" : "1900","revenue1" : "1900","select" : "1"},{"category" : "9","profit" : "2550","cost" : "600","revenue" : "3000","profit1" : "1500","cost1" : "1300","revenue1" : "440"},{"category" : "10","profit" : "1600","cost" : "1200","revenue" : "5000","profit1" : "8989","cost1" : "1500","revenue1" : "200"},{"category" : "11","profit" : "650","cost" : "550","revenue" : "3087","profit1" : "2000","cost1" : "1500","revenue1" : "500"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTempo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "month","type" : "STRING","size" : "256"},{"id" : "TVs","type" : "FLOAT","size" : "256"},{"id" : "SmartPhones","type" : "FLOAT","size" : "256"},{"id" : "Computers","type" : "FLOAT","size" : "256"},{"id" : "Printers","type" : "FLOAT","size" : "256"}]},"Rows" : [{"month" : "Jan","TVs" : "85","SmartPhones" : "50","Computers" : "9","Printers" : "16"},{"month" : "Feb","TVs" : "54","SmartPhones" : "76","Computers" : "12","Printers" : "15"},{"month" : "Mar","TVs" : "57","SmartPhones" : "48","Computers" : "15","Printers" : "25"},{"month" : "Apr","TVs" : "55","SmartPhones" : "34","Computers" : "79","Printers" : "17"},{"month" : "May","TVs" : "120","SmartPhones" : "56","Computers" : "18","Printers" : "10"},{"month" : "Jun","TVs" : "140","SmartPhones" : "34","Computers" : "19","Printers" : "11"},{"month" : "Jul","TVs" : "57","SmartPhones" : "33","Computers" : "8","Printers" : "20"},{"month" : "Aug","TVs" : "61","SmartPhones" : "42","Computers" : "9","Printers" : "22"},{"month" : "Sep","TVs" : "48","SmartPhones" : "35","Computers" : "12","Printers" : "18"},{"month" : "Oct","TVs" : "117","SmartPhones" : "47","Computers" : "11","Printers" : "17"},{"month" : "Nov","TVs" : "110","SmartPhones" : "21","Computers" : "12","Printers" : "21"},{"month" : "Dec","TVs" : "120","SmartPhones" : "34","Computers" : "15","Printers" : "14"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHighlight", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "0","Column1" : "70"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowserLanking", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Browser","type" : "STRING","size" : "256"},{"id" : "Perr","type" : "FLOAT","size" : "256"},{"id" : "Use","type" : "FLOAT","size" : "256"}]},"Rows" : [{"Browser" : "Edge","Perr" : "22","Use" : "60"},{"Browser" : "Android","Perr" : "20","Use" : "5"},{"Browser" : "Samsung Internet","Perr" : "31","Use" : "20"},{"Browser" : "IE","Perr" : "35","Use" : "40"},{"Browser" : "Opera","Perr" : "38","Use" : "30"},{"Browser" : "Firefox","Perr" : "57","Use" : "10"},{"Browser" : "UCBrowser","Perr" : "80","Use" : "9"},{"Browser" : "Safari","Perr" : "44","Use" : "60"},{"Browser" : "Chrome","Perr" : "55","Use" : "20"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRadar", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "catName","type" : "STRING","size" : "256"},{"id" : "year2010","type" : "INT","size" : "256"},{"id" : "year2011","type" : "INT","size" : "256"},{"id" : "year2012","type" : "INT","size" : "256"},{"id" : "year2013","type" : "INT","size" : "256"}]},"Rows" : [{"catName" : "A","year2010" : "140","year2011" : "70","year2012" : "130","year2013" : "170"},{"catName" : "B","year2010" : "90","year2011" : "170","year2012" : "150","year2013" : "170"},{"catName" : "C","year2010" : "80","year2011" : "80","year2012" : "180","year2013" : "150"},{"catName" : "D","year2010" : "100","year2011" : "130","year2012" : "200","year2013" : "210"},{"catName" : "E","year2010" : "80","year2011" : "50","year2012" : "100","year2013" : "240"},{"catName" : "F","year2010" : "110","year2011" : "50","year2012" : "140","year2013" : "210"},{"catName" : "G","year2010" : "160","year2011" : "120","year2012" : "130","year2013" : "200"},{"catName" : "H","year2010" : "80","year2011" : "70","year2012" : "165","year2013" : "140"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowserLanking2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Browser","type" : "STRING","size" : "256"},{"id" : "from","type" : "FLOAT","size" : "256"},{"id" : "to","type" : "FLOAT","size" : "256"}]},"Rows" : [{"Browser" : "Edge","from" : "22","to" : "60"},{"Browser" : "Android","from" : "20","to" : "65"},{"Browser" : "Samsung Internet","from" : "31","to" : "35"},{"Browser" : "IE","from" : "10","to" : "40"},{"Browser" : "Opera","from" : "0","to" : "30"},{"Browser" : "Firefox","from" : "56","to" : "10"},{"Browser" : "UCBrowser","from" : "22","to" : "43"},{"Browser" : "Safari","from" : "12","to" : "33"},{"Browser" : "Chrome","from" : "5","to" : "56"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowserLanking3", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Browser","type" : "STRING","size" : "256"},{"id" : "value","type" : "FLOAT","size" : "256"}]},"Rows" : [{"Browser" : "Edge","value" : "220"},{"Browser" : "IE","value" : "890"},{"Browser" : "Opera","value" : "120"},{"Browser" : "Firefox","value" : "320"},{"Browser" : "Safari","value" : "550"},{"Browser" : "Chrome","value" : "2000"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","1030","104",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("BtnRotate","0","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("rotate axis");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnGrouping","BtnRotate:8","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("grouping bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnStack","BtnGrouping:8","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("stack type");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnCategoryRotate","BtnStack:8","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("category angle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnBarType","0","0","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineType","BtnBarType:8","0","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("line");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineAreaType","BtnLineType:8","0","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("area");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnCategoryOpposite","BtnCategoryRotate:8","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("category oppo.");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineBarType","BtnLineAreaType:8","0","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("line+bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineAreaBarType","BtnLineBarType:8","0","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("line+area+bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineShape","BtnCategoryOpposite:8","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("line shape");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnPointShape","BtnLineShape:8","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("point shape");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLinePointType","BtnLineAreaBarType:8","0","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("line point");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnPointType","BtnLinePointType:8","0","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("point");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnOppoAxis","BtnPointShape:8","56","100","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("valuexis oppo.");
            this.Div00.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","Div00:11",null,"555","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("categorycolumn").set("bind:name");
            obj.getSetter("binddataset").set("dsRainfall");
            obj.getSetter("onmousemove").set("BasicChart00_onmousemove");
            obj.getSetter("onmouseleave").set("BasicChart00_onmouseleave");
            obj.getSetter("onmouseenter").set("BasicChart00_onmouseenter");
            obj.getSetter("ontitleclick").set("BasicChart00_ontitleclick");
            obj.getSetter("onclick").set("BasicChart00_onclick");
            obj.getSetter("onseriesclick").set("BasicChart00_onseriesclick");
            this.addChild(obj.name, obj);

            obj = new Static("StaDesc","480","430","370","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("description");
            obj.set_background("lightyellow");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","0","BasicChart00:20","48.57%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("3");
            obj.getSetter("binddataset").set("dsCountryLitres");
            obj.getSetter("categorycolumn").set("bind:country");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);

            obj = new BubbleChart("BubbleChart00","PieChart00:20","BasicChart00:20",null,"480","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("4");
            obj.getSetter("binddataset").set("dsCostProfit");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);

            obj = new RadarChart("RadarChart00","0","PieChart00:20","48.48%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("7");
            obj.getSetter("binddataset").set("dsRadar");
            obj.getSetter("categorycolumn").set("bind:catName");
            obj.getSetter("radius").set("80");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart02","RadarChart00:20","BubbleChart00:20",null,"480","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("5");
            obj.getSetter("binddataset").set("dsHighlight");
            obj.getSetter("categorycolumn").set("bind:Column0");
            obj.getSetter("gaugetype").set("circular");
            this.addChild(obj.name, obj);

            obj = new RoseChart("RoseChart00","0","RadarChart00:38","48.57%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("6");
            obj.getSetter("binddataset").set("dsBrowserLanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("rosesize").set("70");
            obj.getSetter("duration").set("500");
            this.addChild(obj.name, obj);

            obj = new FloatChart("FloatChart00","RoseChart00:20","GaugeChart02:20",null,"479","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("8");
            obj.getSetter("binddataset").set("dsBrowserLanking2");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("rotateaxis").set("false");
            obj.getSetter("waterfall").set("false");
            this.addChild(obj.name, obj);

            obj = new PyramidChart("PyramidChart00","0","RoseChart00:20","48.57%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("9");
            obj.getSetter("binddataset").set("dsBrowserLanking3");
            obj.getSetter("categorycolumn").set("bind:value");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,746,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleNexacroChart.xfdl", function() {

        this.Div00_BtnBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(true);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(true);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };


        this.Div00_BtnLineBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLinePointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        this.Div00_BtnRotate_onclick = function(obj,e)
        {
        	this.BasicChart00.set_rotateaxis(!this.BasicChart00.rotateaxis);
        };

        this.Div00_BtnGrouping_onclick = function(obj,e)
        {
        	this.BasicChart00.set_bargrouping(!this.BasicChart00.bargrouping);
        };

        this.Div00_BtnStack_onclick = function(obj,e)
        {
        	var type = this.BasicChart00.stacktype;
        	switch (type)
        	{
        	case "none":
        		this.BasicChart00.set_stacktype("normal");
        	break;
        	case "normal":
        		this.BasicChart00.set_stacktype("percent");
        	break;
        	case "percent":
        		this.BasicChart00.set_stacktype("none");
        	break;
        	}

        };

        this.Div00_BtnCategoryRotate_onclick = function(obj,e)
        {
        	var angle = this.BasicChart00.categoryaxis.labelrotate | 0;
        	angle -= 15;
        	this.BasicChart00.categoryaxis.set_labelrotate(angle);
        };

        this.Div00_BtnCategoryOpposite_onclick = function(obj,e)
        {
        	this.BasicChart00.categoryaxis.set_opposite(!this.BasicChart00.categoryaxis.opposite);
        };

        this.Div00_BtnLineShape_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if ( this.BasicChart00.seriesset[i].linevisible)
        		{
        			var type = this.BasicChart00.seriesset[i].linetype;
        			switch (type)
        			{
        				case "":
        				case "segment":
        					this.BasicChart00.seriesset[i].set_linetype("step");
        					break;

        				case "step":
        					this.BasicChart00.seriesset[i].set_linetype("curve");
        					break;

        				case "curve":
        					this.BasicChart00.seriesset[i].set_linetype("segment");
        					break;
        			}
        		}
        	}
        };

        var shape_pos = 0, same_shape = true;
        this.Div00_BtnPointShape_onclick = function(obj,e)
        {
        	shape_pos++;

        	var cnt = this.BasicChart00.seriesset.length;
        	if (same_shape && shape_pos >= 5 || !same_shape && shape_pos >= (6-cnt))
        	{
        		shape_pos = 0; same_shape = !same_shape;
        	}

        	var shapeset = ["circle", "square", "diamond", "triangle", "cross"];
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if (same_shape)
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos]);
        		}
        		else
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos + i]);
        		}
        	}

        };

        this.Div00_BtnPointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        this.Div00_BtnOppoAxis_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.valueaxes.length;
        	for (var i=0;i<cnt;i++)
        	{
        		var val = this.BasicChart00.valueaxes[i].opposite;
        		this.BasicChart00.valueaxes[i].set_opposite(!val);
        	}
        };


        this.BasicChart00_onmousemove = function(obj,e)
        {
        	var refobj = e.fromreferenceobject || obj;

        	this.StaDesc.set_text(refobj._type_name);

        	if (!this.StaDesc.visible)
        	{
        		this.StaDesc.set_visible(true);
        	}
        	this.StaDesc.move(obj.getOffsetLeft() + e.canvasx + 10, obj.getOffsetTop() + e.canvasy + 10);
        };

        this.BasicChart00_onmouseleave = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(false);
        };

        this.BasicChart00_onmouseenter = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(true);
        };

        this.BasicChart00_onclick = function(obj,e)
        {
        	this.alert("타이틀 클릭 이벤트!");
        };

        this.BasicChart00_onseriesclick = function(obj,e)
        {
        	this.alert("시리즈 클릭 이벤트 >>>  아이템인덱스 : " + e.itemindex
        				+ ", 시리즈인덱스 : " + e.seriesindex
        				+ ", 시리즈 수치 : " + e.value
        				+ ", 시리즈 명 : " + obj.seriesset[e.seriesindex].id);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.BtnRotate.addEventHandler("onclick",this.Div00_BtnRotate_onclick,this);
            this.Div00.form.BtnGrouping.addEventHandler("onclick",this.Div00_BtnGrouping_onclick,this);
            this.Div00.form.BtnStack.addEventHandler("onclick",this.Div00_BtnStack_onclick,this);
            this.Div00.form.BtnCategoryRotate.addEventHandler("onclick",this.Div00_BtnCategoryRotate_onclick,this);
            this.Div00.form.BtnBarType.addEventHandler("onclick",this.Div00_BtnBarType_onclick,this);
            this.Div00.form.BtnLineType.addEventHandler("onclick",this.Div00_BtnLineType_onclick,this);
            this.Div00.form.BtnLineAreaType.addEventHandler("onclick",this.Div00_BtnLineAreaType_onclick,this);
            this.Div00.form.BtnCategoryOpposite.addEventHandler("onclick",this.Div00_BtnCategoryOpposite_onclick,this);
            this.Div00.form.BtnLineBarType.addEventHandler("onclick",this.Div00_BtnLineBarType_onclick,this);
            this.Div00.form.BtnLineAreaBarType.addEventHandler("onclick",this.Div00_BtnLineAreaBarType_onclick,this);
            this.Div00.form.BtnLineShape.addEventHandler("onclick",this.Div00_BtnLineShape_onclick,this);
            this.Div00.form.BtnPointShape.addEventHandler("onclick",this.Div00_BtnPointShape_onclick,this);
            this.Div00.form.BtnLinePointType.addEventHandler("onclick",this.Div00_BtnLinePointType_onclick,this);
            this.Div00.form.BtnPointType.addEventHandler("onclick",this.Div00_BtnPointType_onclick,this);
            this.Div00.form.BtnOppoAxis.addEventHandler("onclick",this.Div00_BtnOppoAxis_onclick,this);
        };
        this.loadIncludeScript("sampleNexacroChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
