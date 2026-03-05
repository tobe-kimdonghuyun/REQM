(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EI010_010");
            this.set_titletext("철강본부 손익달성현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"YM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_char1", this);
            obj._setContents("<ColumnInfo><Column id=\"WRK_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"YUL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"GBN\" type=\"STRING\" size=\"32\"/><Column id=\"DIF_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PLAN_AMT\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo><Rows><Row><Col id=\"WRK_AMT\">89420</Col><Col id=\"YUL\">85.5</Col><Col id=\"GBN\">매출</Col><Col id=\"DIF_AMT\">-15171</Col><Col id=\"PLAN_AMT\">104591</Col></Row><Row><Col id=\"WRK_AMT\">7531</Col><Col id=\"YUL\">186.8</Col><Col id=\"GBN\">영업이익</Col><Col id=\"DIF_AMT\">3500</Col><Col id=\"PLAN_AMT\">4031</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_char2", this);
            obj._setContents("<ColumnInfo><Column id=\"WRK_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"YUL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"GBN\" type=\"STRING\" size=\"32\"/><Column id=\"DIF_AMT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PLAN_AMT\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list1", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRK_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DIF_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YUL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WRK_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DIF_AMT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YUL\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_cond","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_search");
            obj.set_border("1px solid rgba(218,221,227,1)");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_wrkYm","84","10","95","20",null,null,null,null,null,null,this.div_cond.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.div_cond.addChild(obj.name, obj);

            obj = new Static("sta_dept00","15","10","69","20",null,null,null,null,null,null,this.div_cond.form);
            obj.set_text("조회년월");
            obj.set_cssclass("sta_search");
            obj.set_taborder("1");
            this.div_cond.addChild(obj.name, obj);

            obj = new Static("sta_test",null,"7","90","20","39",null,null,null,null,null,this.div_cond.form);
            obj.set_text("(단위:백만원)");
            obj.set_taborder("2");
            this.div_cond.addChild(obj.name, obj);

            obj = new Div("DivChartMain","10","50","97.84%","67.20%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("DivCharLeft","0","0",null,"100%","50%",null,null,null,null,null,this.DivChartMain.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.DivChartMain.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","0","98%","100.00%",null,null,null,null,null,null,this.DivChartMain.form.DivCharLeft.form);
            obj.getSetter("taborder").set("2");
            obj.getSetter("binddataset").set("ds_char1");
            obj.getSetter("categorycolumn").set("bind:GBN");
            this.DivChartMain.form.DivCharLeft.addChild(obj.name, obj);

            obj = new Static("sta_Yul02",null,null,"14.63%","6.67%","21.24%","61.67%",null,null,null,null,this.DivChartMain.form.DivCharLeft.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"돋움\"");
            obj.set_text(".");
            this.DivChartMain.form.DivCharLeft.addChild(obj.name, obj);

            obj = new Static("sta_Yul01",null,null,"14.63%","6.67%","65.13%","85.00%",null,null,null,null,this.DivChartMain.form.DivCharLeft.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"돋움\"");
            obj.set_text(".");
            this.DivChartMain.form.DivCharLeft.addChild(obj.name, obj);

            obj = new Div("DivChartRight","50%","0",null,"100%","0",null,null,null,null,null,this.DivChartMain.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.DivChartMain.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","0","98%","100.00%",null,null,null,null,null,null,this.DivChartMain.form.DivChartRight.form);
            obj.getSetter("taborder").set("2");
            obj.getSetter("binddataset").set("ds_char2");
            obj.getSetter("categorycolumn").set("bind:GBN");
            this.DivChartMain.form.DivChartRight.addChild(obj.name, obj);

            obj = new Static("sta_Yul02",null,null,"13.23%","6.67%","21.84%","61.67%",null,null,null,null,this.DivChartMain.form.DivChartRight.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"돋움\"");
            obj.set_text(".");
            this.DivChartMain.form.DivChartRight.addChild(obj.name, obj);

            obj = new Static("sta_Yul01",null,null,"13.23%","6.67%","65.33%","85.00%",null,null,null,null,this.DivChartMain.form.DivChartRight.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_font("bold 16px/normal \"돋움\"");
            obj.set_text(".");
            this.DivChartMain.form.DivChartRight.addChild(obj.name, obj);

            obj = new Div("DivGridMain","10","75.20%","97.75%","24.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("DivGridLeft","0","0",null,"100%","50%",null,null,null,null,null,this.DivGridMain.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.DivGridMain.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","25","96.19%","81.58%",null,null,null,null,null,null,this.DivGridMain.form.DivGridLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list1");
            obj.set_cellsizingtype("none");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"계획\"/><Cell col=\"2\" text=\"실적\"/><Cell col=\"3\" text=\"차이\"/><Cell col=\"4\" text=\"달성율(%)\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" displaytype=\"normal\" suppress=\"1\" suppressalign=\"middle\" autosizerow=\"default\" color=\"#58606c\" text=\"bind:GBN\"/><Cell col=\"1\" text=\"bind:PLAN_AMT\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" suppress=\"0\" suppressalign=\"first\" autosizerow=\"default\" editinputtype=\"number\" color=\"#58606c\"/><Cell col=\"2\" editinputtype=\"number\" textAlign=\"right\" text=\"bind:WRK_AMT\" edittype=\"none\"/><Cell col=\"3\" editinputtype=\"number\" textAlign=\"right\" text=\"bind:DIF_AMT\" edittype=\"none\"/><Cell col=\"4\" editinputtype=\"number\" textAlign=\"right\" text=\"bind:YUL\" edittype=\"expr:dataset.getRowLevel(currow)==1?&quot;none&quot;:&quot;text&quot;\"/></Band></Format></Formats>");
            this.DivGridMain.form.DivGridLeft.addChild(obj.name, obj);

            obj = new Div("DivGridRight","50%","0",null,"100%","0",null,null,null,null,null,this.DivGridMain.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.DivGridMain.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","25","95.99%","81.58%",null,null,null,null,null,null,this.DivGridMain.form.DivGridRight.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list2");
            obj.set_cellsizingtype("none");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"계획\"/><Cell col=\"2\" text=\"실적\"/><Cell col=\"3\" text=\"차이\"/><Cell col=\"4\" text=\"달성율(%)\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" displaytype=\"normal\" suppress=\"1\" suppressalign=\"middle\" autosizerow=\"default\" color=\"#58606c\" text=\"bind:GBN\"/><Cell col=\"1\" text=\"bind:PLAN_AMT\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" suppress=\"0\" suppressalign=\"first\" autosizerow=\"default\" editinputtype=\"number\" color=\"#58606c\"/><Cell col=\"2\" editinputtype=\"number\" textAlign=\"right\" text=\"bind:WRK_AMT\" edittype=\"expr:dataset.getRowLevel(currow)==1?&quot;none&quot;:&quot;text&quot;\"/><Cell col=\"3\" editinputtype=\"number\" textAlign=\"right\" text=\"bind:DIF_AMT\" edittype=\"expr:dataset.getRowLevel(currow)==1?&quot;none&quot;:&quot;text&quot;\"/><Cell col=\"4\" editinputtype=\"number\" textAlign=\"right\" text=\"bind:YUL\" edittype=\"expr:dataset.getRowLevel(currow)==1?&quot;none&quot;:&quot;text&quot;\"/></Band></Format></Formats>");
            this.DivGridMain.form.DivGridRight.addChild(obj.name, obj);

            obj = new Button("Button00","100","635","273","65",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_cond.form
            obj = new Layout("default","",0,0,this.div_cond.form,function(p){});
            this.div_cond.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivChartMain.form.DivCharLeft.form
            obj = new Layout("default","",0,0,this.DivChartMain.form.DivCharLeft.form,function(p){});
            this.DivChartMain.form.DivCharLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivChartMain.form.DivChartRight.form
            obj = new Layout("default","",0,0,this.DivChartMain.form.DivChartRight.form,function(p){});
            this.DivChartMain.form.DivChartRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivChartMain.form
            obj = new Layout("default","",0,0,this.DivChartMain.form,function(p){});
            this.DivChartMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivGridMain.form.DivGridLeft.form
            obj = new Layout("default","",0,0,this.DivGridMain.form.DivGridLeft.form,function(p){});
            this.DivGridMain.form.DivGridLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivGridMain.form.DivGridRight.form
            obj = new Layout("default","",0,0,this.DivGridMain.form.DivGridRight.form,function(p){});
            this.DivGridMain.form.DivGridRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivGridMain.form
            obj = new Layout("default","",0,0,this.DivGridMain.form,function(p){});
            this.DivGridMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,730,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_cond.form.cal_wrkYm","value","ds_cond","YM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivGridMain.form.DivGridLeft.form.grd_list","binddataset","ds_list","");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivGridMain.form.DivGridRight.form.grd_list","binddataset","ds_list","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_86876_chart_err.xfdl", function() {
        /*******************************
         * 작성자 : 정태진
         * 작성일 : 2019.09.10
         ********************************/

        //include "lib::libInclude.xjs"

        this.form_onload = function(obj,e)
        {
        	return;
        	this.gfn_initForm(obj);

        	this.gfn_enrollCloseCheck(this.ds_list);

        	this.fn_loadCombo();

        	this.fn_setComp();

        	this.fn_init();
        };


        this.fn_loadCombo = function ()
        {
        };

        this.fn_setComp = function ()
        {
        };

        // 초기화
        this.fn_init = function ()
        {
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_char1.clearData();
        	this.ds_char2.clearData();

        	//trace(this.gfn_getToday().substr(0,6))
        	// 년도 셋팅
        	this.ds_cond.setColumn(0, "YM", this.gfn_getToday().substr(0,6));

        	//this.fn_find();
        };

        // 조회
        this.fn_find = function()
        {

        	this.gfn_find({
        		id : "find"
        	   ,inDs : "input1=ds_cond"
        	   ,outDs : "ds_char1=output1"
        	   ,sqlId : "ei010_010Qry.selectChar1"
        	   ,async : false
        	   ,callback : function ()
        	   {
        			this.DivChartMain.form.DivCharLeft.form.sta_Yul01.set_text( this.ds_char1.getColumn(0, "YUL")+"%")
        			this.DivChartMain.form.DivCharLeft.form.sta_Yul02.set_text( this.ds_char1.getColumn(1, "YUL")+"%" )
        	   }
        	})

        	this.gfn_find({
        		id : "findlist"
        	   ,inDs : "input1=ds_cond"
        	   ,outDs : "ds_list1=output1"
        	   ,sqlId : "ei010_010Qry.selectChar1"
        	   ,callback : function ()
        	   {
        	   }
        	})

        	this.gfn_find({
        		id : "find2"
        	   ,inDs : "input1=ds_cond"
        	   ,outDs : "ds_char2=output1"
        	   ,sqlId : "ei010_010Qry.selectChar2"
        	   ,async : false
        	   ,callback : function ()
        	   {
        			this.DivChartMain.form.DivChartRight.form.sta_Yul01.set_text( this.ds_char2.getColumn(0, "YUL")+"%")
        			this.DivChartMain.form.DivChartRight.form.sta_Yul02.set_text( this.ds_char2.getColumn(1, "YUL")+"%" )
        	   }
        	})

        	this.gfn_find({
        		id : "findlist2"
        	   ,inDs : "input1=ds_cond"
        	   ,outDs : "ds_list2=output1"
        	   ,sqlId : "ei010_010Qry.selectChar2"
        	   ,callback : function ()
        	   {
        	   }
        	})





        	var aa = "99%";
        var bb = "100%"
        	this.DivChartMain.form.DivCharLeft.form.BasicChart00.resize(aa, bb);
        }

        this.ds_cond_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "YM")
        	{
        		obj.setColumn(e.row, "YM", e.newvalue.substr(0,6));
        	}
        };
        this.Button00_onclick = function(obj,e)
        {
        var aa = '<ColumnInfo>'+
        		'<Column id="WRK_AMT" type="BIGDECIMAL" size="16" />'+
        		'<Column id="YUL" type="BIGDECIMAL" size="16" />'+
        		'<Column id="GBN" type="STRING" size="32" />'+
        		'<Column id="DIF_AMT" type="BIGDECIMAL" size="16" />'+
        		'<Column id="PLAN_AMT" type="BIGDECIMAL" size="16" />'+
        	'</ColumnInfo>'+
        	'<Rows>'+
        		'<Row>'+
        			'<Col id="WRK_AMT">15098</Col>'+
        			'<Col id="YUL">51.6</Col>'+
        			'<Col id="GBN">매출</Col>'+
        			'<Col id="DIF_AMT">-14158</Col>'+
        			'<Col id="PLAN_AMT">29256</Col>'+
        		'</Row>'+
        		'<Row>'+
        			'<Col id="WRK_AMT">741</Col>'+
        			'<Col id="YUL">53.5</Col>'+
        			'<Col id="GBN">영업이익</Col>'+
        			'<Col id="DIF_AMT">-644</Col>'+
        			'<Col id="PLAN_AMT">1385</Col>'+
        		'</Row>'+
        	'</Rows>';

        	this.ds_char1.loadXML(aa);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_cond.form.cal_wrkYm.addEventHandler("onchanged",this.cal_wrkYm_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("RP_86876_chart_err.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
