(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp06");
            this.set_titletext("Tab");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(480,697);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"},{"id" : "Column2","size" : "256","type" : "STRING"},{"id" : "Column3","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "01","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "02","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "03","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "04","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "05","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "06","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "07","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "08","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "09","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "10","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "11"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "12"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "13"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "14"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "15"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Tab("Tab00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_tabindex("0");
            obj.set_tabjustify("true");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage1",this.Tab00);
            obj.set_text("첫번째탭");
            this.Tab00.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","0","20",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grd");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"50\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new nexacro.Tabpage("Tabpage2",this.Tab00);
            obj.set_text("두번째탭");
            this.Tab00.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","0","20",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_autofittype("col");
            obj.set_binddataset("ds_grd");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"50\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new nexacro.Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new nexacro.Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile",480,697,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp18.xfdl", function(nexacro, system, trace, environment, application) {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp18.xfdl
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

        this.loadIncludeScript("Temp18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
