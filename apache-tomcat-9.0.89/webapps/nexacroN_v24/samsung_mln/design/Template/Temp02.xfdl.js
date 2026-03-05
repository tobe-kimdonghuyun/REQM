(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp02");
            this.set_titletext("SingleDetail");
            this.set_cssclass("frm_WF_BgGrey");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,896);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("lstv00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "A시스템 차세대사업","Column1" : "2025.05.01~2025.06.30","Column2" : "프로젝트","Column3" : "단가","Column4" : "제품","Column5" : "인사급여 시스템","Column6" : "123,456,789,100","Column7" : "넥사크로플랫폼"},{"Column0" : "B시스템 차세대사업","Column1" : "2025.05.01~2025.06.30","Column2" : "프로젝트","Column3" : "단가","Column4" : "제품","Column5" : "기간계 시스템","Column6" : "123,456,789,100","Column7" : "넥사크로플랫폼"},{"Column0" : "C시스템 차세대사업","Column1" : "2025.05.01~2025.06.30","Column2" : "프로젝트","Column3" : "단가","Column4" : "제품","Column5" : "영업관리 시스템","Column6" : "123,456,789,100","Column7" : "넥사크로플랫폼"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_BgGrey");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"30","85","30","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("총 16건");
            obj.set_cssclass("sta_WF_SumViews");
            this.addChild(obj.name, obj);

            obj = new ListView("lst00","30","80",null,"776","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("lstv00");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"92\"><Cell id=\"Cell00\" left=\"21\" top=\"14\" width=\"359\" height=\"36\" text=\"bind:Column0\"/><Cell id=\"Cell01\" left=\"21\" top=\"50\" width=\"359\" height=\"26\" text=\"bind:Column1\" cssclass=\"cell_WF_Date\"/></Band><Band id=\"detail\" width=\"100%\" height=\"170\"><Cell id=\"Cell00\" left=\"30\" top=\"19\" width=\"121\" height=\"43\" text=\"bind:Column2\" cssclass=\"cell_WF_Label\"/><Cell id=\"Cell01\" left=\"30\" top=\"62\" width=\"121\" height=\"43\" text=\"bind:Column3\" cssclass=\"cell_WF_Label\"/><Cell id=\"Cell02\" left=\"30\" top=\"105\" width=\"121\" height=\"43\" text=\"bind:Column4\" cssclass=\"cell_WF_Label\"/><Cell id=\"Cell03\" left=\"180\" top=\"19\" width=\"200\" height=\"43\" text=\"bind:Column5\" cssclass=\"cell_WF_LabelR\"/><Cell id=\"Cell04\" left=\"180\" top=\"62\" width=\"200\" height=\"43\" text=\"bind:Column6\" cssclass=\"cell_WF_LabelP\"/><Cell id=\"Cell05\" left=\"180\" top=\"105\" width=\"200\" height=\"43\" text=\"bind:Column7\" cssclass=\"cell_WF_LabelR\"/><Cell id=\"Cell06\" left=\"0\" top=\"160\" right=\"0\" bottom=\"0\" cssclass=\"cell_WF_Bg\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","mobile",480,896,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp02.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp16.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
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
        	//필수함수
        //	this.gfnFormOnLoadM(obj);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("Temp02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
