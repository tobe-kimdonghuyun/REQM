(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMultiComboModule");
            this.set_titletext("멀티콤보(Composite)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInner", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","type" : "STRING","size" : "256"},{"id" : "datacolumn","type" : "STRING","size" : "256"},{"id" : "checkcolumn","type" : "STRING","size" : "256"}]},"Rows" : [{"codecolumn" : "01","datacolumn" : "백설기"},{"codecolumn" : "02","datacolumn" : "백설기11"},{"codecolumn" : "03","datacolumn" : "백설기22"},{"codecolumn" : "04","datacolumn" : "백설기33"},{"codecolumn" : "05","datacolumn" : "백설기44"},{"codecolumn" : "06","datacolumn" : "백설기55"},{"codecolumn" : "07","datacolumn" : "백설기66"},{"codecolumn" : "08","datacolumn" : "백설기77"},{"codecolumn" : "09","datacolumn" : "백설기88"},{"codecolumn" : "10","datacolumn" : "백설기99"},{"codecolumn" : "11","datacolumn" : "백설기10"},{"codecolumn" : "12","datacolumn" : "백설기11"},{"codecolumn" : "13","datacolumn" : "백설기12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "srchCond1","type" : "STRING","size" : "256"},{"id" : "srchCond2","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInner2", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "SAMPLE_FILE_ID","type" : "STRING","size" : "256"},{"id" : "CHECK","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","80","200","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본 멀티 콤보");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new MultiUserCombo("mcbo00","0","Static01:0","150","29",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("datacolumn").set("datacolumn");
            obj.getSetter("codecolumn").set("codecolumn");
            obj.getSetter("checkcolumn").set("checkcolumn");
            obj.getSetter("itemheight").set("35");
            obj.getSetter("displayrowcount").set("10");
            obj.getSetter("innerdataset").set("dsInner");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","mcbo00:0","300","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("멀티콤보 innerdataset");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01","0","Static01_00_00:0",null,"210","53.33%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsInner");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"codecolumn\"/><Cell col=\"1\" text=\"datacolumn\"/><Cell col=\"2\" text=\"checkcolumn\"/></Band><Band id=\"body\"><Cell text=\"bind:codecolumn\"/><Cell col=\"1\" text=\"bind:datacolumn\"/><Cell col=\"2\" text=\"bind:checkcolumn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","grd01:19","mcbo00:0","370","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("멀티콤보  value/text바인딩 데이터");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","grd01:20","Static01_00:0",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","grd01:0","300","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("데이터 조회 후 멀티 콤보");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new MultiUserCombo("mcbo01","0","Static01_01:0","150","29",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("6");
            obj.getSetter("datacolumn").set("SAMPLE_NM");
            obj.getSetter("codecolumn").set("SAMPLE_ID");
            obj.getSetter("checkcolumn").set("CHECK");
            obj.getSetter("itemheight").set("35");
            obj.getSetter("displayrowcount").set("10");
            obj.getSetter("text").set("");
            obj.getSetter("innerdataset").set("dsInner2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","mcbo01:0","300","43",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("멀티콤보 innerdataset");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd01_00","0","Static01_00_00_00:0",null,"210","53.33%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsInner2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DEPARTMENT\"/><Cell col=\"3\" text=\"DESCRIPTION\"/><Cell col=\"4\" text=\"CHECK\"/></Band><Band id=\"body\"><Cell text=\"bind:SAMPLE_ID\"/><Cell col=\"1\" text=\"bind:SAMPLE_NM\"/><Cell col=\"2\" text=\"bind:SAMPLE_DEPT_NM\"/><Cell col=\"3\" text=\"bind:SAMPLE_DESC\"/><Cell col=\"4\" text=\"bind:CHECK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","grd01_00:19","mcbo01:0","370","43",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("멀티콤보  value/text바인딩 데이터");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","grd01_00:20","Static01_00_01:0",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:data\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetDf","153","Static01:0","68","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("setValue");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetTr","mcbo01:3","Static01_01:0","68","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("setValue");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","0",null,"80","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("- 멀티콤보 사용 방법\n component 목록에서 Multicombo를 선택 하여 화면에 배치 후, 기본 컨포넌트인  Combo와 동일하게 사용한다.\n - innerdataset에는 기본 컴포넌트 구성과 동일하게 combocolumn, datacolumn이 구성되어야 하고 추가로 checkcolumn도 함께 존재해야한다.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","mcbo00","value","dsList","code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","mcbo00.form.comboedit","value","dsList","data");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","mcbo01","value","dsList2","code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","mcbo01.form.comboedit","value","dsList2","data");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleMultiComboModule.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleMultiComboModule.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/16
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/16			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.fnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function ()
        {
        	var strSvcId 	= "searchSampleList";
        	var strSvcUrl 	= "searchSampleList.do";
        	var inData 		= "inDs=dsSearch";
        	var outData 	= "dsInner2=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	if( sSvcId == "searchSampleList"){
        		oInfo = this.dsInner2.getColumnInfo("CHECK");
        		if(this.gfnIsNull(oInfo)){
        			this.dsInner2.addColumn("CHECK", "String");
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnSetDf_onclick = function(obj,e)
        {
        	this.mcbo00.set_value("05,06");
        };

        this.btnSetTr_onclick = function(obj,e)
        {
        	this.mcbo01.set_value("test");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static01_01.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.btnSetDf.addEventHandler("onclick",this.btnSetDf_onclick,this);
            this.btnSetTr.addEventHandler("onclick",this.btnSetTr_onclick,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
        };
        this.loadIncludeScript("sampleMultiComboModule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
