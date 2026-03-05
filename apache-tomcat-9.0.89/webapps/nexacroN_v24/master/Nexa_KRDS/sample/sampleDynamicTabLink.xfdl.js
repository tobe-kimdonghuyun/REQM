(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDynamicTabLink");
            this.set_titletext("Tab동적생성 링크");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "Expand","type" : "STRING","size" : "256"},{"id" : "Cmb","type" : "STRING","size" : "256"},{"id" : "Cal","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "01","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "02","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "03","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "04","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "05","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "06","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "07","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "08","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "09","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "10","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "11","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "12","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "13","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "14","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "15","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button36",null,"0","100","48","108",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Minus");
            this.addChild(obj.name, obj);

            obj = new Button("Button35",null,"0","100","48","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","Button36:16",null,"636","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsGrid");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"익스팬드\"/><Cell col=\"6\" text=\"콤보박스\"/><Cell col=\"7\" text=\"캘린더\"/><Cell col=\"8\" text=\"중앙정렬\"/><Cell col=\"9\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Expand\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"30\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:Cmb\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:Cal\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:CenterAlign\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:Btn\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleDynamicTabLink.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleDynamicTabLink.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
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

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

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
        this.loadIncludeScript("sampleDynamicTabLink.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
