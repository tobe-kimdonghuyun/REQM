(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePopupP");
            this.set_titletext("팝업샘플용화면(프라미스)");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "DEPARTMENT","type" : "STRING","size" : "256"},{"id" : "DESCRIPTION","type" : "STRING","size" : "256"}]},"Rows" : [{"ID" : "aaaaaaaaa","NAME" : "김영수","DEPARTMENT" : "사업컨설팅팀","DESCRIPTION" : "책임"},{"ID" : "bbbbbbbb","NAME" : "최희영","DEPARTMENT" : "프리세일즈팀","DESCRIPTION" : "수석"},{"ID" : "ccccccccc","NAME" : "최택수","DEPARTMENT" : "재무회계팀","DESCRIPTION" : "선임"},{"ID" : "dddddddd","NAME" : "소희진","DEPARTMENT" : "공시팀","DESCRIPTION" : "책임"},{"ID" : "eeeeeeeee","NAME" : "김나라","DEPARTMENT" : "인사총무팀","DESCRIPTION" : "책임"},{"ID" : "ffffffffffff","NAME" : "박찬수","DEPARTMENT" : "영업팀","DESCRIPTION" : "수석"},{"ID" : "gggggggg","NAME" : "허소진","DEPARTMENT" : "사업지원팀","DESCRIPTION" : "수석"},{"ID" : "hhhhhhhh","NAME" : "김철수","DEPARTMENT" : "개발지원팀","DESCRIPTION" : "선임"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","40","40",null,"128","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","40","40","398","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"StaDt00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("StaDt00","0","12","90","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("Radio00","86","12","180","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_flexgrow("0");
            var divSearch_form_Radio00_innerdataset = new nexacro.NormalDataset("divSearch_form_Radio00_innerdataset", obj);
            divSearch_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "명칭"},{"codecolumn" : "1","datacolumn" : "코드"}]});
            obj.set_innerdataset(divSearch_form_Radio00_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","258","12","160","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_flexgrow("0");
            obj.set_accessibilitylabel("[@StaDt00]");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","647","12","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","40","divSearch:32","230","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업 샘플용 화면");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","40","staTitle:10",null,null,"40","128",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"grdMain:40","90","48","138",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"grdMain:40","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCallParent",null,"divSearch:20","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("부모호출");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            obj.set_type("horizontal");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_flexwrap("wrap");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,685,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePopupPPromise.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	samplePopupP.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/26
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/26			TOBESOFT					최초생성
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

        	var oOwner = this.getOwnerFrame();
        	trace("전달받은 파라미터 1.pvString : " + oOwner.pvString +" 2. pvNumber : +"+oOwner.pvNumber + " 3. pvDataset : " + oOwner.pvDataset.name);

        	this.dsGrid.set_rowposition(0);
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
        this.fnParentCallee = function()
        {
        	trace("나는 팝업 " + arguments);
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 팝업 닫기
        this.fnClosePopup = function()
        {
        	 var nRow = this.dsGrid.rowposition;

        	var sId = this.dsGrid.getColumn(nRow, "ID");
        	var sName = this.dsGrid.getColumn(nRow, "NAME");
        	var sDepartment = this.dsGrid.getColumn(nRow, "DEPARTMENT");
        	var sDescription = this.dsGrid.getColumn(nRow, "DESCRIPTION");

        	var rtnValue = {
        	     rtnId:sId
        		,rtnName:sName
        		,rtnDepartment:sDepartment
        		,rtnDescription:sDescription
        		};

        	this.gfnClosePopupPromise({"rtnValue": rtnValue});
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.gfnClosePopup(null);
        };

        /**
         * @description 확인 버튼 클릭 이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	// 팝업 닫기
        	this.fnClosePopup();
        };

        /**
         * @description 그리드셀 더블클릭 이벤트
        */
        this.grdMain_oncelldblclick = function(obj,e)
        {
        	// 팝업 닫기
        	this.fnClosePopup();
        };

        this.btnCallParent_onclick = function(obj,e)
        {
        	var oOption = {
        		pvString :"789"
        		}
        	this.opener.fnChildCallee(oOption, 10);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMain.addEventHandler("oncelldblclick",this.grdMain_oncelldblclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCallParent.addEventHandler("onclick",this.btnCallParent_onclick,this);
        };
        this.loadIncludeScript("samplePopupPPromise.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
