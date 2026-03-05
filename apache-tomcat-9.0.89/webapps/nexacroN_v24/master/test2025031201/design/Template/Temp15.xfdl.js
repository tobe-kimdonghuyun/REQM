(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp01");
            this.set_titletext("Folding+List");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","30","30",null,"330","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09_00_00","0","140",null,"50","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_value("TOBESOFT");
            obj.set_text("TOBESOFT");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","100","120","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","120","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_LabelE");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("Edit09_00","0","40",null,"50","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","200","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","250",null,"50","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_value("20231030");
            obj.set_dateformat("yyyy-MM-dd");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","30","div00:0",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CloseCon");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","btn00:0",null,"12","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Boundary");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","520","365","233","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_OpenCon");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","Static03:30",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_SearchBoard");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"420\"/></Columns><Rows><Row size=\"40\"/><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"Nexacro Mobile UI Guide\"/><Cell row=\"1\" text=\"김투비 ｜2023.10.24 09:00｜첨부파일 0건\" cssclass=\"cell_WF_Line\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","mobile",480,1000,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp15.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp15.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
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
        	this.gfnFormOnLoadM(obj);
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
        //버튼 클릭
        this.btn00_onclick = function(obj,e)
        {
        	//버튼 css변경 + div00, staTop 조절
        	var sCss = obj.cssclass;

        	if(sCss.indexOf("Close")>0){
        		obj.set_cssclass("btn_WF_OpenCon");
        		this.div00.set_height(110);
        	}else if(sCss.indexOf("Open")>0){
        		obj.set_cssclass("btn_WF_CloseCon");
        		this.div00.set_height(339);
        	}
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("Temp15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
