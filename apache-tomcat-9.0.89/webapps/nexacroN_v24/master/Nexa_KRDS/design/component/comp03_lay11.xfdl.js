(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay11");
            this.set_titletext("레이아웃 및 표현_표");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "content01","type" : "STRING","size" : "256"},{"id" : "content02","type" : "STRING","size" : "256"},{"id" : "context","type" : "STRING","size" : "256"}]},"Rows" : [{"content01" : "내용","content02" : "내용","context" : "표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다."},{"content01" : "내용","content02" : "내용","context" : "표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다."}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridSample", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BodyTitle","type" : "STRING","size" : "256"},{"id" : "DetailText","type" : "STRING","size" : "256"}]},"Rows" : [{"BodyTitle" : "기본형 아코디언","DetailText" : "내용"},{"BodyTitle" : "기본형 아코디언","DetailText" : "내용"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","40","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("표");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","79","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Table");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다. 기본적으로 대화형 요소가 아니기 때문에 열 제목에 데이터를 정렬하기 위한 컨트롤 요소가 포함된 상황 외에 행 전체나 데이터 셀이 대화형으로 작동하지 않는다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","291",null,"180","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid");
            obj.set_cssclass("grd_WF_Infor");
            obj.set_tabstop("false");
            obj.set_showcellselection("true");
            obj.set_accessibilitylabel("테이블 제목 : 제목, 제목, 제목 으로 구성된 표 예시에 대한 내용입니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"770\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"제목\" cssclass=\"cell_WF_Fixing\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:content01\"/><Cell col=\"1\" text=\"bind:content02\"/><Cell col=\"2\" text=\"bind:context\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","Grid00:60",null,"560","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_gridSample");
            obj.set_accessibilitylabel("데이플 제목 : 체크박스, 에디트, 마스크, 콤보, 버튼, 익스펜드, 에센셜, 캘린더, 포인트로 구성된 표입니다");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"300\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\" band=\"summ\"/><Row size=\"57\" band=\"summ\"/><Row size=\"57\" band=\"summ\"/><Row size=\"57\" band=\"summ\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"Edit\" cssclass=\"cell_WF_Fixing\"/><Cell col=\"2\" text=\"Mask\"/><Cell col=\"3\" text=\"Combo\" cssclass=\"cell_WF_FilterNo\" expandshow=\"show\" expandsize=\"38\"/><Cell col=\"4\" text=\"Button\"/><Cell col=\"5\" text=\"Expand\"/><Cell col=\"6\" text=\"Essential\" cssclass=\"essential\"/><Cell col=\"7\" text=\"Calendar\"/><Cell col=\"8\" text=\"Point\"/></Band><Band id=\"body\"><Cell text=\"bind:check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:edit\" displaytype=\"editcontrol\" edittype=\"text\" cssclass=\"cell_WF_Fixing\"/><Cell col=\"2\" text=\"bind:mask\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"3\" text=\"bind:combo\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"5\" text=\"bind:expand\" displaytype=\"editcontrol\" edittype=\"text\" expandsize=\"56\" expandchar=\"bind:expand\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandshow=\"show\"/><Cell col=\"6\" text=\"가나다라마바사\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:calendar\" displaytype=\"calendarcontrol\" edittype=\"date\" calendarpopupsize=\"384 424\" calendarusetrailingday=\"true\"/><Cell col=\"8\" cssclass=\"cell_WF_Point01\" text=\"cell_WF_Point01_nagative_danger\"/><Cell row=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"1\" col=\"2\" edittype=\"mask\" displaytype=\"maskeditcontrol\"/><Cell row=\"1\" col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell row=\"1\" col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"1\" col=\"5\" displaytype=\"editcontrol\" edittype=\"text\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandshow=\"show\" expandsize=\"56\"/><Cell row=\"1\" col=\"6\" text=\"Link\" cssclass=\"cell_WF_Link\"/><Cell row=\"1\" col=\"7\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_WF_Point02\" text=\"cell_WF_Point02_nagative_warning\"/><Cell row=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"2\" col=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"2\" col=\"2\" edittype=\"mask\" displaytype=\"maskeditcontrol\"/><Cell row=\"2\" col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell row=\"2\" col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"2\" col=\"5\" displaytype=\"editcontrol\" edittype=\"text\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandshow=\"show\" expandsize=\"56\"/><Cell row=\"2\" col=\"6\" text=\"right\" cssclass=\"cell_WF_Right\" edittype=\"text\" displaytype=\"text\"/><Cell row=\"2\" col=\"7\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_WF_Point03\" text=\"cell_WF_Point01_Positive_infor\"/><Cell row=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"3\" col=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"3\" col=\"2\" edittype=\"mask\" displaytype=\"maskeditcontrol\"/><Cell row=\"3\" col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell row=\"3\" col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell row=\"3\" col=\"5\" displaytype=\"editcontrol\" edittype=\"text\" expandimage=\"url(&apos;theme::NexaKRDS/images/btn_WF_Sch.png&apos;)\" expandshow=\"show\" expandsize=\"56\"/><Cell row=\"3\" col=\"6\" text=\"center\" cssclass=\"cell_WF_Center\" edittype=\"text\" displaytype=\"text\"/><Cell row=\"3\" col=\"7\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_WF_Point04\" text=\"cell_WF_Point01_Positive_success\"/></Band><Band id=\"summary\"><Cell cssclass=\"cell_WF_Sum01\"/><Cell col=\"1\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"2\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"3\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"4\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"5\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"6\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"7\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"8\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"1\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"3\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"5\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"7\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"2\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"1\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"3\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"5\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"7\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"3\" text=\"합계\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\"/><Cell row=\"3\" col=\"5\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/><Cell row=\"3\" col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp03_lay11.xfdl", function() {

        this.lay11_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay11_onload,this);
            this.staDivider.addEventHandler("onclick",this.Static01_onclick,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp03_lay11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
