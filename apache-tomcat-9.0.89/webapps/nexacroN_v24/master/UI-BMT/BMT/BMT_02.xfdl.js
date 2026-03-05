(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BMT_02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRAWDATA", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "WK_ITEM_CLS_NM","type" : "STRING","size" : "256"},{"id" : "EXEC_WK_ITEM_CD","type" : "STRING","size" : "256"},{"id" : "EXEC_WK_ITEM_NM","type" : "STRING","size" : "256"},{"id" : "EXEC_ITEM_STDSZ","type" : "STRING","size" : "256"},{"id" : "EXEC_UNT","type" : "STRING","size" : "256"},{"id" : "EXEC_EXKD_CLS_NM","type" : "STRING","size" : "256"},{"id" : "GCT_QTY_TOT","type" : "INT","size" : "256"},{"id" : "GCT_UNITP_TOT","type" : "INT","size" : "256"},{"id" : "DECI_ABLE_QTY","type" : "INT","size" : "256"},{"id" : "DECI_ABLE_UNITP","type" : "INT","size" : "256"},{"id" : "MNEX_QTY","type" : "INT","size" : "256"},{"id" : "MNEX_UNITP","type" : "INT","size" : "256"},{"id" : "PREV_DECI_GCT_QTY","type" : "INT","size" : "256"},{"id" : "PREV_DECI_GCT_AMT","type" : "INT","size" : "256"},{"id" : "PREV_DECI_MNEX_QTY","type" : "INT","size" : "256"},{"id" : "PREV_DECI_MNEX_AMT","type" : "INT","size" : "256"},{"id" : "PREV_DECI_EXEC_QTY","type" : "INT","size" : "256"},{"id" : "PREV_DECI_EXEC_AMT","type" : "INT","size" : "256"},{"id" : "ORGNTIM_GCT_QTY","type" : "INT","size" : "256"},{"id" : "ORGNTIM_GCT_UNITP","type" : "INT","size" : "256"},{"id" : "ORGNTIM_EXEC_QTY","type" : "INT","size" : "256"},{"id" : "ORGNTIM_EXEC_UNITP","type" : "INT","size" : "256"},{"id" : "ORGNTIM_RSRV_QTY","type" : "INT","size" : "256"},{"id" : "ORGNTIM_PERF_QTY","type" : "INT","size" : "256"},{"id" : "ORGNTIM_PERF_UNITP","type" : "INT","size" : "256"},{"id" : "TT_GCT_QTY","type" : "INT","size" : "256"},{"id" : "TT_GCT_UNITP","type" : "INT","size" : "256"},{"id" : "TT_EXEC_QTY","type" : "INT","size" : "256"},{"id" : "TT_EXEC_UNITP","type" : "INT","size" : "256"},{"id" : "TT_APPR_QTY","type" : "INT","size" : "256"},{"id" : "TT_APPR_UNITP","type" : "INT","size" : "256"},{"id" : "TT_PERF_QTY","type" : "INT","size" : "256"},{"id" : "TT_PERF_UNITP","type" : "INT","size" : "256"},{"id" : "STD_CLSCD","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTREE", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EXEC_ITEM_NO","type" : "STRING","size" : "256"},{"id" : "HGR_EXEC_ITEM_NO","type" : "STRING","size" : "256"},{"id" : "EXEC_WK_ITEM_CD","type" : "STRING","size" : "256"},{"id" : "EXEC_WK_ITEM_NM","type" : "STRING","size" : "256"},{"id" : "LVL","type" : "INT","size" : "256"},{"id" : "LVL_SEQ","type" : "INT","size" : "256"},{"id" : "ARRAY_SEQ","type" : "BIGDECIMAL","size" : "256"},{"id" : "EXEC_ITEM_STDSZ","type" : "STRING","size" : "256"},{"id" : "EXEC_EXKD_CLS","type" : "STRING","size" : "256"},{"id" : "EXEC_EXKD_ATTR","type" : "STRING","size" : "256"},{"id" : "GCT_UNT","type" : "STRING","size" : "256"},{"id" : "EXEC_UNT","type" : "STRING","size" : "256"},{"id" : "WK_ITEM_CLS","type" : "STRING","size" : "256"},{"id" : "EXEC_QTY","type" : "BIGDECIMAL","size" : "256"},{"id" : "EXEC_UNITP","type" : "BIGDECIMAL","size" : "256"},{"id" : "EXEC_AMT","type" : "BIGDECIMAL","size" : "256"},{"id" : "ENTCST_QTY_BEF","type" : "BIGDECIMAL","size" : "256"},{"id" : "ENTCST_AMT_BEF","type" : "BIGDECIMAL","size" : "256"},{"id" : "ENTCST_QTY_TMON","type" : "BIGDECIMAL","size" : "256"},{"id" : "ENTCST_AMT_TMON","type" : "BIGDECIMAL","size" : "256"},{"id" : "ENTCST_QTY_CTOT","type" : "BIGDECIMAL","size" : "256"},{"id" : "ENTCST_AMT_CTOT","type" : "BIGDECIMAL","size" : "256"},{"id" : "EPRS_QTY_BEF","type" : "BIGDECIMAL","size" : "256"},{"id" : "EPRS_AMT_BEF","type" : "BIGDECIMAL","size" : "256"},{"id" : "EPRS_QTY_TMON","type" : "BIGDECIMAL","size" : "256"},{"id" : "EPRS_AMT_TMON","type" : "BIGDECIMAL","size" : "256"},{"id" : "EPRS_QTY_CTOT","type" : "BIGDECIMAL","size" : "256"},{"id" : "EPRS_AMT_CTOT","type" : "BIGDECIMAL","size" : "256"},{"id" : "RATE_EXEC_EPRS","type" : "BIGDECIMAL","size" : "256"},{"id" : "RATE_EXEC_ENTCST","type" : "BIGDECIMAL","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tree",this.Tab00);
            obj.set_text("Grid#1(TREE)");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","56",null,null,"10","10",null,null,null,null,this.Tab00.tree.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTREE");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EXEC_ITEM_NO\"/><Cell col=\"1\" text=\"HGR_EXEC_ITEM_NO\"/><Cell col=\"2\" text=\"EXEC_WK_ITEM_CD\"/><Cell col=\"3\" text=\"EXEC_WK_ITEM_NM\"/><Cell col=\"4\" text=\"LVL\"/><Cell col=\"5\" text=\"LVL_SEQ\"/><Cell col=\"6\" text=\"ARRAY_SEQ\"/><Cell col=\"7\" text=\"EXEC_ITEM_STDSZ\"/><Cell col=\"8\" text=\"EXEC_EXKD_CLS\"/><Cell col=\"9\" text=\"EXEC_EXKD_ATTR\"/><Cell col=\"10\" text=\"GCT_UNT\"/><Cell col=\"11\" text=\"EXEC_UNT\"/><Cell col=\"12\" text=\"WK_ITEM_CLS\"/><Cell col=\"13\" text=\"EXEC_QTY\"/><Cell col=\"14\" text=\"EXEC_UNITP\"/><Cell col=\"15\" text=\"EXEC_AMT\"/><Cell col=\"16\" text=\"ENTCST_QTY_BEF\"/><Cell col=\"17\" text=\"ENTCST_AMT_BEF\"/><Cell col=\"18\" text=\"ENTCST_QTY_TMON\"/><Cell col=\"19\" text=\"ENTCST_AMT_TMON\"/><Cell col=\"20\" text=\"ENTCST_QTY_CTOT\"/><Cell col=\"21\" text=\"ENTCST_AMT_CTOT\"/><Cell col=\"22\" text=\"EPRS_QTY_BEF\"/><Cell col=\"23\" text=\"EPRS_AMT_BEF\"/><Cell col=\"24\" text=\"EPRS_QTY_TMON\"/><Cell col=\"25\" text=\"EPRS_AMT_TMON\"/><Cell col=\"26\" text=\"EPRS_QTY_CTOT\"/><Cell col=\"27\" text=\"EPRS_AMT_CTOT\"/><Cell col=\"28\" text=\"RATE_EXEC_EPRS\"/><Cell col=\"29\" text=\"RATE_EXEC_ENTCST\"/></Band><Band id=\"body\"><Cell text=\"bind:EXEC_ITEM_NO\"/><Cell col=\"1\" text=\"bind:HGR_EXEC_ITEM_NO\"/><Cell col=\"2\" text=\"bind:EXEC_WK_ITEM_CD\"/><Cell col=\"3\" text=\"bind:EXEC_WK_ITEM_NM\"/><Cell col=\"4\" text=\"bind:LVL\"/><Cell col=\"5\" text=\"bind:LVL_SEQ\"/><Cell col=\"6\" text=\"bind:ARRAY_SEQ\"/><Cell col=\"7\" text=\"bind:EXEC_ITEM_STDSZ\"/><Cell col=\"8\" text=\"bind:EXEC_EXKD_CLS\"/><Cell col=\"9\" text=\"bind:EXEC_EXKD_ATTR\"/><Cell col=\"10\" text=\"bind:GCT_UNT\"/><Cell col=\"11\" text=\"bind:EXEC_UNT\"/><Cell col=\"12\" text=\"bind:WK_ITEM_CLS\"/><Cell col=\"13\" text=\"bind:EXEC_QTY\"/><Cell col=\"14\" text=\"bind:EXEC_UNITP\"/><Cell col=\"15\" text=\"bind:EXEC_AMT\"/><Cell col=\"16\" text=\"bind:ENTCST_QTY_BEF\"/><Cell col=\"17\" text=\"bind:ENTCST_AMT_BEF\"/><Cell col=\"18\" text=\"bind:ENTCST_QTY_TMON\"/><Cell col=\"19\" text=\"bind:ENTCST_AMT_TMON\"/><Cell col=\"20\" text=\"bind:ENTCST_QTY_CTOT\"/><Cell col=\"21\" text=\"bind:ENTCST_AMT_CTOT\"/><Cell col=\"22\" text=\"bind:EPRS_QTY_BEF\"/><Cell col=\"23\" text=\"bind:EPRS_AMT_BEF\"/><Cell col=\"24\" text=\"bind:EPRS_QTY_TMON\"/><Cell col=\"25\" text=\"bind:EPRS_AMT_TMON\"/><Cell col=\"26\" text=\"bind:EPRS_QTY_CTOT\"/><Cell col=\"27\" text=\"bind:EPRS_AMT_CTOT\"/><Cell col=\"28\" text=\"bind:RATE_EXEC_EPRS\"/><Cell col=\"29\" text=\"bind:RATE_EXEC_ENTCST\"/></Band></Format></Formats>");
            this.Tab00.tree.addChild(obj.name, obj);

            obj = new Button("btnExport",null,"10","120","36","10",null,null,null,null,null,this.Tab00.tree.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            this.Tab00.tree.addChild(obj.name, obj);

            obj = new Button("btnImport",null,"10","120","36","140",null,null,null,null,null,this.Tab00.tree.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            this.Tab00.tree.addChild(obj.name, obj);

            obj = new Button("btnSearch","320","10","120","36",null,null,null,null,null,null,this.Tab00.tree.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.Tab00.tree.addChild(obj.name, obj);

            obj = new Edit("Edit00","100","10","210","36",null,null,null,null,null,null,this.Tab00.tree.form);
            obj.set_taborder("4");
            this.Tab00.tree.addChild(obj.name, obj);

            obj = new Static("staLabel","10","10","90","36",null,null,null,null,null,null,this.Tab00.tree.form);
            obj.set_taborder("5");
            obj.set_text("공종/.내역명");
            this.Tab00.tree.addChild(obj.name, obj);

            obj = new Tabpage("rawdata",this.Tab00);
            obj.set_text("Grid#2(RAWDATA)");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","56",null,null,"10","10",null,null,null,null,this.Tab00.rawdata.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRAWDATA");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"WK_ITEM_CLS_NM\"/><Cell col=\"1\" text=\"EXEC_WK_ITEM_CD\"/><Cell col=\"2\" text=\"EXEC_WK_ITEM_NM\"/><Cell col=\"3\" text=\"EXEC_ITEM_STDSZ\"/><Cell col=\"4\" text=\"EXEC_UNT\"/><Cell col=\"5\" text=\"EXEC_EXKD_CLS_NM\"/><Cell col=\"6\" text=\"GCT_QTY_TOT\"/><Cell col=\"7\" text=\"GCT_UNITP_TOT\"/><Cell col=\"8\" text=\"DECI_ABLE_QTY\"/><Cell col=\"9\" text=\"DECI_ABLE_UNITP\"/><Cell col=\"10\" text=\"MNEX_QTY\"/><Cell col=\"11\" text=\"MNEX_UNITP\"/><Cell col=\"12\" text=\"PREV_DECI_GCT_QTY\"/><Cell col=\"13\" text=\"PREV_DECI_GCT_AMT\"/><Cell col=\"14\" text=\"PREV_DECI_MNEX_QTY\"/><Cell col=\"15\" text=\"PREV_DECI_MNEX_AMT\"/><Cell col=\"16\" text=\"PREV_DECI_EXEC_QTY\"/><Cell col=\"17\" text=\"PREV_DECI_EXEC_AMT\"/><Cell col=\"18\" text=\"ORGNTIM_GCT_QTY\"/><Cell col=\"19\" text=\"ORGNTIM_GCT_UNITP\"/><Cell col=\"20\" text=\"ORGNTIM_EXEC_QTY\"/><Cell col=\"21\" text=\"ORGNTIM_EXEC_UNITP\"/><Cell col=\"22\" text=\"ORGNTIM_RSRV_QTY\"/><Cell col=\"23\" text=\"ORGNTIM_PERF_QTY\"/><Cell col=\"24\" text=\"ORGNTIM_PERF_UNITP\"/><Cell col=\"25\" text=\"TT_GCT_QTY\"/><Cell col=\"26\" text=\"TT_GCT_UNITP\"/><Cell col=\"27\" text=\"TT_EXEC_QTY\"/><Cell col=\"28\" text=\"TT_EXEC_UNITP\"/><Cell col=\"29\" text=\"TT_APPR_QTY\"/><Cell col=\"30\" text=\"TT_APPR_UNITP\"/><Cell col=\"31\" text=\"TT_PERF_QTY\"/><Cell col=\"32\" text=\"TT_PERF_UNITP\"/><Cell col=\"33\" text=\"STD_CLSCD\"/></Band><Band id=\"body\"><Cell text=\"bind:WK_ITEM_CLS_NM\"/><Cell col=\"1\" text=\"bind:EXEC_WK_ITEM_CD\"/><Cell col=\"2\" text=\"bind:EXEC_WK_ITEM_NM\"/><Cell col=\"3\" text=\"bind:EXEC_ITEM_STDSZ\"/><Cell col=\"4\" text=\"bind:EXEC_UNT\"/><Cell col=\"5\" text=\"bind:EXEC_EXKD_CLS_NM\"/><Cell col=\"6\" text=\"bind:GCT_QTY_TOT\"/><Cell col=\"7\" text=\"bind:GCT_UNITP_TOT\"/><Cell col=\"8\" text=\"bind:DECI_ABLE_QTY\"/><Cell col=\"9\" text=\"bind:DECI_ABLE_UNITP\"/><Cell col=\"10\" text=\"bind:MNEX_QTY\"/><Cell col=\"11\" text=\"bind:MNEX_UNITP\"/><Cell col=\"12\" text=\"bind:PREV_DECI_GCT_QTY\"/><Cell col=\"13\" text=\"bind:PREV_DECI_GCT_AMT\"/><Cell col=\"14\" text=\"bind:PREV_DECI_MNEX_QTY\"/><Cell col=\"15\" text=\"bind:PREV_DECI_MNEX_AMT\"/><Cell col=\"16\" text=\"bind:PREV_DECI_EXEC_QTY\"/><Cell col=\"17\" text=\"bind:PREV_DECI_EXEC_AMT\"/><Cell col=\"18\" text=\"bind:ORGNTIM_GCT_QTY\"/><Cell col=\"19\" text=\"bind:ORGNTIM_GCT_UNITP\"/><Cell col=\"20\" text=\"bind:ORGNTIM_EXEC_QTY\"/><Cell col=\"21\" text=\"bind:ORGNTIM_EXEC_UNITP\"/><Cell col=\"22\" text=\"bind:ORGNTIM_RSRV_QTY\"/><Cell col=\"23\" text=\"bind:ORGNTIM_PERF_QTY\"/><Cell col=\"24\" text=\"bind:ORGNTIM_PERF_UNITP\"/><Cell col=\"25\" text=\"bind:TT_GCT_QTY\"/><Cell col=\"26\" text=\"bind:TT_GCT_UNITP\"/><Cell col=\"27\" text=\"bind:TT_EXEC_QTY\"/><Cell col=\"28\" text=\"bind:TT_EXEC_UNITP\"/><Cell col=\"29\" text=\"bind:TT_APPR_QTY\"/><Cell col=\"30\" text=\"bind:TT_APPR_UNITP\"/><Cell col=\"31\" text=\"bind:TT_PERF_QTY\"/><Cell col=\"32\" text=\"bind:TT_PERF_UNITP\"/><Cell col=\"33\" text=\"bind:STD_CLSCD\"/></Band></Format></Formats>");
            this.Tab00.rawdata.addChild(obj.name, obj);

            obj = new Static("staLabel","10","10","90","36",null,null,null,null,null,null,this.Tab00.rawdata.form);
            obj.set_taborder("1");
            obj.set_text("공종/.내역명");
            this.Tab00.rawdata.addChild(obj.name, obj);

            obj = new Edit("Edit00","100","10","210","36",null,null,null,null,null,null,this.Tab00.rawdata.form);
            obj.set_taborder("2");
            this.Tab00.rawdata.addChild(obj.name, obj);

            obj = new Button("btnSearch","320","10","120","36",null,null,null,null,null,null,this.Tab00.rawdata.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            this.Tab00.rawdata.addChild(obj.name, obj);

            obj = new Button("btnImport",null,"10","120","36","140",null,null,null,null,null,this.Tab00.rawdata.form);
            obj.set_taborder("4");
            obj.set_text("엑셀업로드");
            this.Tab00.rawdata.addChild(obj.name, obj);

            obj = new Button("btnExport",null,"10","120","36","10",null,null,null,null,null,this.Tab00.rawdata.form);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            this.Tab00.rawdata.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.tree.form
            obj = new Layout("default","",0,0,this.Tab00.tree.form,function(p){});
            this.Tab00.tree.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.rawdata.form
            obj = new Layout("default","",0,0,this.Tab00.rawdata.form,function(p){});
            this.Tab00.rawdata.form.addLayout(obj.name, obj);

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
        this.registerScript("BMT_02.xfdl", function() {
        /**
        *  nexacro
        *  @FileName 	BMT_02.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2025/07/02
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/07/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.BMT_02_onload = function(obj,e)
        {

        // 	console.time('RAWDATA');
        // 	this.gfn_transaction("search_RAWDATA", "svc::daewooenc-data.do", ""	,"dsRAWDATA=dsRAWDATA", "data=RAWDATA.dat")
        // 	.then((res) => {
        //
        // 		console.timeEnd('RAWDATA');
        // 	})
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fn_importCallback = function(importId)
        {
        	switch(importId) {
        	case 'importTree':
        		console.log(this.dsTREE.saveSSV());
        		break;
        	case '':
        		break;
        	default:
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Tab00_tree_btnImport_onclick = function(obj,e)
        {
        	this.gfn_excelImport("dsTREE","DATASET2","A3","fn_importCallback","importTree",this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BMT_02_onload,this);
            this.Tab00.tree.form.btnImport.addEventHandler("onclick",this.Tab00_tree_btnImport_onclick,this);
        };
        this.loadIncludeScript("BMT_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
