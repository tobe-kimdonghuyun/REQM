(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main_step1");
            this.set_titletext("접속현황(CHART)");
            this.set_stepitemsize("15");
            this.set_stepitemgap("10");
            if (Form == this.constructor)
            {
                this._setFormPosition(505,284);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOs", this);
            obj._setContents("<ColumnInfo><Column id=\"OS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OS_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OS_SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OS_CNT\">51</Col><Col id=\"OS_SELECT\">0</Col><Col id=\"OS_CD\"> Android</Col></Row><Row><Col id=\"OS_CNT\">10</Col><Col id=\"OS_SELECT\">0</Col><Col id=\"OS_CD\"> Linux</Col></Row><Row><Col id=\"OS_CNT\">10</Col><Col id=\"OS_SELECT\">0</Col><Col id=\"OS_CD\"> Mac OS</Col></Row><Row><Col id=\"OS_CNT\">100</Col><Col id=\"OS_SELECT\">0</Col><Col id=\"OS_CD\"> Windows</Col></Row><Row><Col id=\"OS_CNT\">15</Col><Col id=\"OS_SELECT\">0</Col><Col id=\"OS_CD\"> iOS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowser", this);
            obj._setContents("<ColumnInfo><Column id=\"BROWSER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BROWSER_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BROWSER_SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BROWSER_CD\"> Chrome</Col><Col id=\"BROWSER_CNT\">480</Col><Col id=\"BROWSER_SELECT\">0</Col></Row><Row><Col id=\"BROWSER_CD\"> Edge</Col><Col id=\"BROWSER_CNT\">34</Col><Col id=\"BROWSER_SELECT\">0</Col></Row><Row><Col id=\"BROWSER_CD\"> IE</Col><Col id=\"BROWSER_CNT\">14</Col><Col id=\"BROWSER_SELECT\">0</Col></Row><Row><Col id=\"BROWSER_CD\"> MobileSafari</Col><Col id=\"BROWSER_CNT\">15</Col><Col id=\"BROWSER_SELECT\">0</Col></Row><Row><Col id=\"BROWSER_CD\"> Runtime</Col><Col id=\"BROWSER_CNT\">72</Col><Col id=\"BROWSER_SELECT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScreen", this);
            obj._setContents("<ColumnInfo><Column id=\"SCREEN\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SCREEN\"> 1280*800</Col><Col id=\"SCREEN_CNT\">10</Col><Col id=\"SCREEN_SELECT\">0</Col><Col id=\"N_WIDTH\">1280</Col><Col id=\"N_HEIGHT\">800</Col></Row><Row><Col id=\"SCREEN\"> 1366*768</Col><Col id=\"SCREEN_CNT\">10</Col><Col id=\"SCREEN_SELECT\">0</Col><Col id=\"N_WIDTH\">1366</Col><Col id=\"N_HEIGHT\">768</Col></Row><Row><Col id=\"SCREEN\"> 1440*900</Col><Col id=\"SCREEN_CNT\">10</Col><Col id=\"SCREEN_SELECT\">0</Col><Col id=\"N_WIDTH\">1440</Col><Col id=\"N_HEIGHT\">900</Col></Row><Row><Col id=\"SCREEN\"> 1536*864</Col><Col id=\"SCREEN_CNT\">48</Col><Col id=\"SCREEN_SELECT\">0</Col><Col id=\"N_WIDTH\">1536</Col><Col id=\"N_HEIGHT\">864</Col></Row><Row><Col id=\"SCREEN\"> 1920*1080</Col><Col id=\"SCREEN_CNT\">100</Col><Col id=\"SCREEN_SELECT\">0</Col><Col id=\"N_WIDTH\">1920</Col><Col id=\"N_HEIGHT\">1080</Col></Row><Row><Col id=\"SCREEN\"> 1920*1200</Col><Col id=\"SCREEN_CNT\">30</Col><Col id=\"SCREEN_SELECT\">0</Col><Col id=\"N_WIDTH\">1920</Col><Col id=\"N_HEIGHT\">1200</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle00","28","11","156","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("OS별 접속 현황");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","28","11","156","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("브라우저별 접속 현황");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","28","11","156","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("해상도별 접속 현황");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_MF_tile");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore00",null,"15","48","41","21",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_More");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore01",null,"15","48","41","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_More");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnMore02",null,"15","48","41","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_More");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new PieChart("pctBrowser","28","staTitle01:0",null,null,"21","30",null,null,null,null,this);
            obj.getSetter("taborder").set("6");
            obj.getSetter("binddataset").set("dsBrowser");
            obj.getSetter("categorycolumn").set("bind:BROWSER_CD");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("positionstep").set("1");
            obj.getSetter("visible").set("false");
            obj.getSetter("duration").set("1500");
            this.addChild(obj.name, obj);

            obj = new PieChart("pctOs","28","staTitle00:0",null,null,"21","30",null,null,null,null,this);
            obj.getSetter("taborder").set("7");
            obj.getSetter("binddataset").set("dsOs");
            obj.getSetter("categorycolumn").set("bind:OS_CD");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("duration").set("1500");
            obj.getSetter("visible").set("false");
            this.addChild(obj.name, obj);

            obj = new PieChart("pctScreen","28","staTitle02:0",null,null,"21","30",null,null,null,null,this);
            obj.getSetter("taborder").set("8");
            obj.getSetter("binddataset").set("dsScreen");
            obj.getSetter("categorycolumn").set("bind:SCREEN");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("positionstep").set("2");
            obj.getSetter("visible").set("false");
            obj.getSetter("duration").set("1500");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",505,284,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMainLogDv.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	main_step.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/15
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/15			TOBESOFT					최초생성
        *******************************************************************************
        */
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvChart = [this.pctOs, this.pctBrowser, this.pctScreen];

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.fnTranSearch();
        	this.fnShowChart(true);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "selectMainLog";
        	var strSvcUrl   = "selectMainLog.do";
        	var inData      = "";
        	var outData     = "dsOs=dsOs dsBrowser=dsBrowser dsScreen=dsScreen";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectMainLog":
        			this.fnShowChart(true);

        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnShowChart = function (bShow)
        {
        	for( var i=0; i<this.fvChart.length; i++){
        		this.fvChart[i].set_visible(bShow);
        	}

        	if(bShow){
        		var nCurStep = this.getStepIndex();
        		this.fvChart[nCurStep].runAnimation(true);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.main_step1_canstepchange = function(obj,e)
        {
        	var nIdx = e.postindex;
        	var oChart = this.fvChart[nIdx];
        	oChart.runAnimation(true);
        };

        this.btnMore_onclick = function(obj,e)
        {
        	return;

        	//레프트Sync
        	var sTopCommBtnId = "TOP_10400000";
        	var oBtn = nexacro.getApplication().gvFrmTop.form.divTopBtn.form.components[sTopCommBtnId];
        		oBtn.click();

        	//메뉴로이동
        	nexacro.getApplication().gvFrmLeft.form.fnFormOpen("10401017");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("canstepchange",this.main_step1_canstepchange,this);
            this.btnMore00.addEventHandler("onclick",this.btnMore_onclick,this);
            this.btnMore01.addEventHandler("onclick",this.btnMore_onclick,this);
            this.btnMore02.addEventHandler("onclick",this.btnMore_onclick,this);
        };
        this.loadIncludeScript("frmMainLogDv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
