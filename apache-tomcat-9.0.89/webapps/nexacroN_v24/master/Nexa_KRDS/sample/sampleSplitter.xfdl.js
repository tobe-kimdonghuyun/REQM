(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSplitter");
            this.set_titletext("Splitter");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "chk","type" : "STRING","size" : "256"},{"id" : "No","type" : "STRING","size" : "256"},{"id" : "Edi","type" : "STRING","size" : "256"},{"id" : "Essential","type" : "STRING","size" : "256"},{"id" : "Num","type" : "STRING","size" : "256"},{"id" : "Expand","type" : "STRING","size" : "256"},{"id" : "Cmb","type" : "STRING","size" : "256"},{"id" : "Cal","type" : "STRING","size" : "256"},{"id" : "CenterAlign","type" : "STRING","size" : "256"},{"id" : "Btn","type" : "STRING","size" : "256"}]},"Rows" : [{"No" : "01","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "02","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "03","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "04","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "05","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "06","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "07","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "08","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "09","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "10","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "11","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "12","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "13","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "14","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"},{"No" : "15","Edi" : "가나다라마바","Essential" : "투비","Num" : "1000000","Expand" : "가나다라","Cmb" : "콤보","Cal" : "20200202","CenterAlign" : "투비소프트","Btn" : "버튼"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txaGuide","0","0",null,"260","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("-Splitter 사용 방법\n\n1. Splitter 컴포넌트 추가\n2. type 속성 확인(vertical, horizontal)\n3. form onload 이벤트에서 Splitter 초기화\n  - Splittter.addItem() 메소드로 item 적용\n  - Splittter.addSplitter() 메소드로 최대, 최소 position 기준 컴포넌트 세팅\t\n4. 추가된 Splitter 컴포넌트를 마우스 드래그 시 item 적용한 컴포넌트 사이즈 조절 가능\t");
            this.addChild(obj.name, obj);

            obj = new Div("divBottomLimit","866",null,"163","20",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Splitter("SplitterV","0","199",null,"10","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("type").set("vertical");
            obj.getSetter("cssclass").set("spt_WF_V");
            obj.getSetter("text").set("");
            this.addChild(obj.name, obj);

            obj = new Div("divIntegrated","2","300",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div03");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSubList","0","65","497","750",null,null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/></Band></Format></Formats>");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Grid("grdDetailList","538","65",null,"750","0",null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/></Band></Format></Formats>");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Splitter("SplitterH","508","0","11",null,null,"0",null,null,null,null,this.divIntegrated.form);
            obj.getSetter("taborder").set("5");
            obj.getSetter("cssclass").set("spt_WF_H");
            obj.getSetter("text").set("");
            obj.getSetter("layoutorder").set("0");
            obj.getSetter("max").set("1500");
            obj.getSetter("min").set("1");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Div("divExcel","180","0",null,"48","550",null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Button("btnCust00_00_00",null,"0","162","48","0",null,null,null,null,null,this.divIntegrated.form.divExcel.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.set_visible("false");
            this.divIntegrated.form.divExcel.addChild(obj.name, obj);

            obj = new Button("btnCust01_00_00",null,"0","145","48","btnCust00_00_00:8",null,null,null,null,null,this.divIntegrated.form.divExcel.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.set_visible("false");
            this.divIntegrated.form.divExcel.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","228","38",null,null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Static("staDetailList",null,"0","261","38","249",null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("2");
            obj.set_text("상세리스트");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Div("divExcel1",null,"0","360","48","0",null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Button("btnCust00_00_00",null,"0","162","48","0",null,null,null,null,null,this.divIntegrated.form.divExcel1.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelDown");
            obj.set_visible("false");
            this.divIntegrated.form.divExcel1.addChild(obj.name, obj);

            obj = new Button("btnCust01_00_00",null,"0","145","48","btnCust00_00_00:8",null,null,null,null,null,this.divIntegrated.form.divExcel1.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.set_visible("false");
            this.divIntegrated.form.divExcel1.addChild(obj.name, obj);

            obj = new Static("staSampleEx","872","3","158","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottomLimit
            obj = new Layout("default","",0,0,this.divBottomLimit.form,function(p){});
            this.divBottomLimit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIntegrated.form.divExcel.form
            obj = new Layout("default","",0,0,this.divIntegrated.form.divExcel.form,function(p){});
            this.divIntegrated.form.divExcel.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIntegrated.form.divExcel1.form
            obj = new Layout("default","",0,0,this.divIntegrated.form.divExcel1.form,function(p){});
            this.divIntegrated.form.divExcel1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIntegrated.form
            obj = new Layout("default","",0,0,this.divIntegrated.form,function(p){});
            this.divIntegrated.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,1200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleSplitter.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleSplitter.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/02/07
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/02/07			TOBESOFT					최초생성
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

        	this.fnSize();

        	//Splitter item 적용
        	this.SplitterV.addItem([{componentid:"txaGuide", offset:5, position:"top"}, {componentid:"divIntegrated", offset:5, position:"bottom"}]);
        	this.divIntegrated.form.SplitterH.addItem([{componentid:"grdSubList", offset:5, position:"left"}, {componentid:"grdDetailList", offset:5, position:"right"}]);
        	this.divIntegrated.form.SplitterH.addItem([{componentid:"divExcel", offset:5, position:"left"}, {componentid:"staDetailList", offset:5, position:"right"}]);

        	//Splitter 최소, 최대 position 기준 컴포넌트 적용
        	//순서 : top, bottom, left, right
        	this.SplitterV.addSplitter(this.staSampleEx, this.divBottomLimit, null, null);
          	this.divIntegrated.form.SplitterH.addSplitter(null, null, this.divIntegrated.form.staSubTitle, this.divIntegrated.form.divExcel1);
        };

        this.form_onsize = function(obj,e)
        {
        	this.fnSize();
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSize = function()
        {
        	var formSize = (this.parent.form.getPixelWidth()) / 2;

        	this.divIntegrated.form.SplitterH.set_left(formSize);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
        };
        this.loadIncludeScript("sampleSplitter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
