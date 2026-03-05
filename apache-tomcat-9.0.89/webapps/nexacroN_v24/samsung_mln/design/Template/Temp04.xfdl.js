(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp06");
            this.set_titletext("Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,697);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "01","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "02","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "03","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "04","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "05","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "06","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "07","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "08","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "09","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column0" : "10","Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "11"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "12"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "13"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "14"},{"Column1" : "넥사크로 N","Column2" : "123","Column3" : "123,45","Column0" : "15"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabjustify("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("첫번째탭");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","20",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("두번째탭");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("sta00","30","20","200","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelE");
            obj.set_text("필수에디트");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt00","30","60",null,"50","34",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta01","30","120","200","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("에디트");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt00_00","30","160",null,"50","34",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta02","30","220","200","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("체크박스");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","30","260","170","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            var Tab00_Tabpage2_form_CheckBoxSet00_innerdataset = new nexacro.NormalDataset("Tab00_Tabpage2_form_CheckBoxSet00_innerdataset", obj);
            Tab00_Tabpage2_form_CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"datacolumn" : "A"},{"datacolumn" : "B"}]});
            obj.set_innerdataset(Tab00_Tabpage2_form_CheckBoxSet00_innerdataset);
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta03","30","320","200","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("캘린더");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal00","30","360",null,"50","34",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("7");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta04","30","420","200","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("콤보");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo00","30","460",null,"50","34",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("유형선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","30","520","120","40",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_Label");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07_00","30","560",null,"50","29",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_format("###,###");
            obj.set_cssclass("msk_WF_Spin");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00","30","560","50","50",null,null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Spindown");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"560","50","50","30",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Spinup");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","mobile",480,697,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp04.xfdl", function() {
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
        this.loadIncludeScript("Temp04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
