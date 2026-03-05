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
            obj = new BasicChart("BasicChart00","0","0","98%","100%",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_char1");
            obj.getSetter("categorycolumn").set("bind:GBN");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,730,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_86876_chart_err_copy.xfdl", function() {
        /*******************************
         * 작성자 : 정태진
         * 작성일 : 2019.09.10
         ********************************/

        //include "lib::libInclude.xjs"

        this.form_onload = function(obj,e)
        {
        	//this.gfn_initForm(obj);

        	//this.gfn_enrollCloseCheck(this.ds_list);

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
        	return;
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_char1.clearData();
        	this.ds_char2.clearData();

        	//trace(this.gfn_getToday().substr(0,6))
        	// 년도 셋팅
        	this.ds_cond.setColumn(0, "YM", "20190910");

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
        };
        this.loadIncludeScript("RP_86876_chart_err_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
