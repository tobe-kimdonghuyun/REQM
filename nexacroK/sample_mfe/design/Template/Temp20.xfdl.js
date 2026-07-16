(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp07");
            this.set_titletext("Shuttle");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(480,916);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"}]},"Rows" : [{"Column1" : "Nexacro Mobile UI Guide","Column2" : "2023.10.23"},{"Column1" : "Nexacro Mobile UI Guide","Column2" : "2023.10.23"},{"Column1" : "Nexacro Mobile UI Guide","Column2" : "2023.10.23"},{"Column1" : "Nexacro Mobile UI Guide","Column2" : "2023.10.23"},{"Column1" : "Nexacro Mobile UI Guide","Column2" : "2023.10.23"},{"Column1" : "Nexacro Mobile UI Guide","Column2" : "2023.10.23"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Grid("Grid00","30","30",null,"376","30",null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grd");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"262\"/><Column size=\"117\"/></Columns><Rows><Row band=\"head\" size=\"50\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"프로젝트명\"/><Cell col=\"2\" text=\"계약날짜\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00_00","30","490",null,"376","30",null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grd");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"262\"/><Column size=\"117\"/></Columns><Rows><Row band=\"head\" size=\"50\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"프로젝트명\"/><Cell col=\"2\" text=\"계약날짜\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01","30","426","44","44",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ShuttleUp");
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_01_00","Button00_01:10","426","44","44",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ShuttleDown");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00",null,"426","110","44","30",null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_RowAdd");
            obj.set_taborder("4");
            obj.set_text("행추가");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00",null,"426","110","44","Button00:5",null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_RowDel");
            obj.set_taborder("5");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile",480,916,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp20.xfdl", function(nexacro, system, trace, environment, application) {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp20.xfdl
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

        this.loadIncludeScript("Temp20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
