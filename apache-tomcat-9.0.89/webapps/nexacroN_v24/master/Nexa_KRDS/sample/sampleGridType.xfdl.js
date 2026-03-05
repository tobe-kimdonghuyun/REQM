(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGridType");
            this.set_titletext("다양한 그리드 표현");
            this.set_stepalign("left top");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "체크박스","type" : "STRING","size" : "256"},{"id" : "NO","type" : "STRING","size" : "256"},{"id" : "Edit","type" : "STRING","size" : "256"},{"id" : "MaskEdit","type" : "STRING","size" : "256"},{"id" : "Combo","type" : "STRING","size" : "256"},{"id" : "Calendar","type" : "STRING","size" : "256"},{"id" : "Expand","type" : "STRING","size" : "256"},{"id" : "Text","type" : "STRING","size" : "256"},{"id" : "Number","type" : "STRING","size" : "256"},{"id" : "Button","type" : "STRING","size" : "256"},{"id" : "ProgressBar","type" : "STRING","size" : "256"},{"id" : "code","type" : "STRING","size" : "256"}]},"Rows" : [{"Edit" : "투비","MaskEdit" : "12345","Calendar" : "20201225","Expand" : "","Combo" : "01","Number" : "1500000","Text" : "가나다라마","체크박스" : "1","Button" : "버튼","NO" : "01","ProgressBar" : "50%","code" : "0"},{"Edit" : "투비","MaskEdit" : "12345","Calendar" : "20201225","Expand" : "","Combo" : "01","Text" : "가나다라마","Number" : "1500000","체크박스" : "","Button" : "버튼","NO" : "02","ProgressBar" : "50%","code" : "1"},{"Edit" : "투비","MaskEdit" : "12345","Calendar" : "20201225","Expand" : "","Combo" : "02","Text" : "가나다라마","Number" : "1500000","체크박스" : "","Button" : "버튼","NO" : "03","ProgressBar" : "50%","code" : "2"},{"Edit" : "투비","체크박스" : "","MaskEdit" : "12345","Calendar" : "20201225","Expand" : "","Combo" : "02","Text" : "가나다라마","Number" : "1500000","Button" : "버튼","NO" : "04","ProgressBar" : "50%","code" : "3"},{"Edit" : "투비","MaskEdit" : "12345","Calendar" : "20201225","Expand" : "","Combo" : "03","Text" : "가나다라마","Number" : "1500000","체크박스" : "","Button" : "버튼","NO" : "05","ProgressBar" : "50%","code" : "4"},{"Edit" : "투비","MaskEdit" : "12345","Calendar" : "20201225","Expand" : "","Combo" : "03","Text" : "가나다라마","Number" : "1500000","체크박스" : "","Button" : "버튼","NO" : "06","ProgressBar" : "50%","code" : "5"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 다양한 표현");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","19","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","209","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid Expression");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","100",null,"456","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsGrid");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"Edit\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"MaskEdit\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"Combo\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" text=\"Calendar\" cssclass=\"cell_WF_Center\"/><Cell col=\"6\" text=\"Expand\" cssclass=\"cell_WF_Center\"/><Cell col=\"7\" text=\"Text\" cssclass=\"cell_WF_Center\"/><Cell col=\"8\" text=\"Number\" cssclass=\"cell_WF_Center\"/><Cell col=\"9\" text=\"Button\" cssclass=\"cell_WF_Center\"/><Cell col=\"10\" text=\"ProgressBar\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:체크박스\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NO\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Edit\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:MaskEdit\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Combo\" combodataset=\"dc_grd\" combodatacol=\"Combo\" combocodecol=\"code\"/><Cell col=\"5\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Calendar\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"6\" text=\"bind:Expand\" edittype=\"text\" expandshow=\"show\" expandsize=\"48\" cssclass=\"cell_WF_Edit\" displaytype=\"editcontrol\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:Text\"/><Cell col=\"8\" text=\"bind:Number\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"10\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"총계\" displaytype=\"text\"/><Cell col=\"8\" colspan=\"3\" text=\"1,500,000,000\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,736,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("다양한 그리드 표현");
                p.set_stepalign("left top");

                p.Static00.set_taborder("0");
                p.Static00.set_text("그리드 다양한 표현");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","300","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_visible("true");
                p.Static01.move("Static00:15","19","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Grid Expression");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.set_flexgrow("0");
                p.Static00_02.move("Static01:15","0","209","60",null,null);

                p.Grid01.set_taborder("3");
                p.Grid01.set_binddataset("dsGrid");
                p.Grid01.set_enable("true");
                p.Grid01.move("0","100",null,"456","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,736,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid01.move("0","104",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGridType.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleGridType.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/07
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/07			TOBESOFT					최초생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수


        	var param = [
        			  {biztype : "Grid",  code : "CM01"	, objid : this.Grid01, bindcolumn : "Combo", edit : "true"}
        	];
        	this.gfnGetCommonCode(param);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("sampleGridType.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
