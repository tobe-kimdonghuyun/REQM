(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp03");
            this.set_titletext("ListDetail(List)");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00",null,"30","110","44","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_RowAdd");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"30","110","44","Button00:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_RowDel");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"30","130","44","Button00_00:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("커스컴버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","94",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_SearchBoard");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"420\"/></Columns><Rows><Row size=\"40\"/><Row size=\"50\"/></Rows><Band id=\"body\"><Cell text=\"Nexacro Mobile UI Guide\"/><Cell row=\"1\" text=\"김투비 ｜2023.10.24 09:00｜첨부파일 0건\" cssclass=\"cell_WF_Line\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","mobile",480,700,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp17.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp17.xfdl
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("Temp17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
