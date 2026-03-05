(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"},{"id" : "upid","type" : "STRING","size" : "256"},{"id" : "url","type" : "STRING","size" : "256"},{"id" : "caption","type" : "STRING","size" : "256"}]},"Rows" : [{"id" : "10000","level" : "0","upid" : "0","caption" : "BMT"},{"id" : "10100","level" : "1","upid" : "10000","url" : "BMT::BMT_01.xfdl","caption" : "화면로딩"},{"id" : "10500","level" : "1","upid" : "10000","url" : "BMT::BMT_01_static.xfdl","caption" : "화면로딩 분리"},{"id" : "10200","level" : "1","upid" : "10000","url" : "BMT::BMT_02.xfdl","caption" : "그리드 (Grid)"},{"id" : "10600","level" : "1","upid" : "10000","url" : "BMT::BMT_03_copy0.xfdl","caption" : "멀티 TAB_no_show"},{"id" : "10700","level" : "1","upid" : "10000","url" : "BMT::BMT_03_copy1.xfdl","caption" : "멀티 TAB_no_createcontrol"},{"id" : "10300","level" : "1","upid" : "10000","url" : "BMT::BMT_03.xfdl","caption" : "멀티 TAB"},{"id" : "10400","level" : "1","upid" : "10000","url" : "BMT::BMT_04.xfdl","caption" : "UI 전환"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_GridPopupMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "STRING","size" : "256"},{"id" : "caption","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"},{"id" : "enable","type" : "STRING","size" : "256"},{"id" : "type","type" : "STRING","size" : "256"}]},"Rows" : [{"caption" : "열고정 ","id" : "colfix","type" : "head","enable" : "enable","level" : "0"},{"caption" : "열고정 해제","id" : "colfixclear","enable" : "enable","type" : "head","level" : "0"},{"caption" : "컬럼 숨기기/ 보이기","id" : "colhide","enable" : "enable","type" : "head","level" : "0"},{"caption" : "그리드 설정 저장","id" : "personalized","enable" : "enable","type" : "head","level" : "0"},{"caption" : "그리드 설정 초기화","id" : "init","enable" : "enable","type" : "head","level" : "0"},{"caption" : "헤더정렬사용","id" : "sort","enable" : "enable","type" : "head","level" : "0"},{"caption" : "헤더정렬사용안함","id" : "sortnone","enable" : "enable","type" : "head","level" : "0"},{"id" : "filter","caption" : "그리드필터","level" : "0","enable" : "enable","type" : "head"},{"caption" : "그리드필터 해제","id" : "filterclear","enable" : "enable","type" : "head","level" : "0"},{"caption" : "행고정","level" : "0","enable" : "enable","type" : "body","id" : "rowfix"},{"caption" : "행고정 해제","level" : "0","enable" : "enable","type" : "body","id" : "rowfixclear"},{"caption" : "소계","level" : "0","enable" : "enable","type" : "body","id" : "subsum"},{"caption" : "소계 표현","level" : "1","enable" : "enable","type" : "body","id" : "subsum_set"},{"caption" : "소계 표현 해제","level" : "1","enable" : "enable","type" : "body","id" : "subsum_init"},{"caption" : "합계","level" : "0","enable" : "enable","type" : "body","id" : "total"},{"caption" : "합계(상단)","level" : "1","enable" : "enable","type" : "body","id" : "total_top"},{"caption" : "합계(하단)","level" : "1","enable" : "enable","type" : "body","id" : "total_bottom"},{"level" : "1","enable" : "enable","type" : "body","id" : "total_init","caption" : "합계 해제"},{"level" : "0","enable" : "enable","type" : "body","id" : "find","caption" : "데이터 찾기"},{"level" : "0","enable" : "enable","type" : "body","id" : "cellcopypaste","caption" : "Copy & Paste 사용"},{"level" : "0","enable" : "enable","type" : "body","id" : "cellcopypastenone","caption" : "Copy & Paste 사용 안함"},{"id" : "scroll","caption" : "스크롤 옵션","level" : "0","enable" : "enable","type" : "body"},{"id" : "scroll_default","caption" : "기본","level" : "1","enable" : "enable","type" : "body"},{"id" : "scroll_centerdisplay","caption" : "중앙","level" : "1","enable" : "enable","type" : "body"},{"id" : "scroll_topcenterbottomdisplay","caption" : "상단, 하단, 중앙 표시","level" : "1","enable" : "enable","type" : "body"},{"id" : "scroll_trackbarfollow","caption" : "스크롤 위치 표시","level" : "1","enable" : "enable","type" : "body"},{"id" : "select","caption" : "셀 선택 옵션","level" : "0","enable" : "enable","type" : "body"},{"id" : "select_row","caption" : "Row","level" : "1","enable" : "enable","type" : "body"},{"id" : "select_cell","caption" : "Cell","level" : "1","enable" : "enable","type" : "body"},{"id" : "select_multirow","level" : "1","enable" : "enable","type" : "body","caption" : "다중 row"},{"id" : "select_area","level" : "1","enable" : "enable","type" : "body","caption" : "영역"}]});
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("web::license/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1920","1080",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("대우건설-넥사크로-BMT");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"Frame::all.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("Frame::all.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        /**
        *  DEMO site
        *  @FileName 	Application_Desktop.xadl
        *  @Creator 	PRESALES
        *  @CreateDate 	2024/08/30
        *  @Desction
        ************** 소스 수정 이력 ****************************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/30			PRESALES					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.formWork = null;
        this.formAll = null;
        /*******************************************************************************************************************************
         * FORM EVENT 영역
        *******************************************************************************************************************************/
        this.Application_onload = function(obj,e)
        {
        	this.setApplicationInfo();
        	this.formAll =  this.mainframe.WorkFrame.form;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * Callback 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*
         *	Application 정보
         */
        this.setApplicationInfo = function()
        {
        	let env  = nexacro.getEnvironment();
        	let projectUrl = nexacro.getProjectPath();
        	projectUrl = projectUrl.substring(0, projectUrl.lastIndexOf("/"));
        	projectUrl = projectUrl.substring(0, projectUrl.lastIndexOf("/")+1);
        	this.webRootUrl = projectUrl;



        	/*	 서비스별 url	 */
        	env.services["svc"  ].url = this.webRootUrl;
        	env.services["xeni"  ].url = this.webRootUrl;

        	console.log('webRootUrl >> ' + this.webRootUrl);
        	console.log('services["svc"] >> ' + env.services["svc"].url);
        	console.log('services["xeni"] >> ' + env.services["xeni"].url);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        });
        this.checkLicense("web::license/NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
