(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp09_1");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,394);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">aaaaaaaaa</Col><Col id=\"NAME\">김영수</Col><Col id=\"DEPARTMENT\">사업컨설팅팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">bbbbbbbb</Col><Col id=\"NAME\">최희영</Col><Col id=\"DEPARTMENT\">프리세일즈팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">ccccccccc</Col><Col id=\"NAME\">최택수</Col><Col id=\"DEPARTMENT\">재무회계팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row><Row><Col id=\"ID\">dddddddd</Col><Col id=\"NAME\">소희진</Col><Col id=\"DEPARTMENT\">공시팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">eeeeeeeee</Col><Col id=\"NAME\">김나라</Col><Col id=\"DEPARTMENT\">인사총무팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">ffffffffffff</Col><Col id=\"NAME\">박찬수</Col><Col id=\"DEPARTMENT\">영업팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">gggggggg</Col><Col id=\"NAME\">허소진</Col><Col id=\"DEPARTMENT\">사업지원팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">hhhhhhhh</Col><Col id=\"NAME\">김철수</Col><Col id=\"DEPARTMENT\">개발지원팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","62","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","sta00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","30","30","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","25","70","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","113",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","btnClose:3","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,394,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp17_1.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp17_1.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction    팝업 유형 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearch = "";	// 부모에서 넘긴 검색조건

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 초기화
        	this.fnInit();
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
        /**
         * @description 초기화
        */
        this.fnInit = function()
        {
        	this.fvSearch = this.getOwnerFrame().pvSearch;

        	if (!this.gfnIsNull(this.fvSearch))
        	{
        		this.dsGrid.filter("NAME.indexOf('" + this.fvSearch + "') > -1");
        	}

        	this.grdList.set_binddataset("dsGrid");

        	this.dsGrid.set_rowposition(0);
        }

        /**
         * @description 사용자 검색
        */
        this.fnSearch = function()
        {
        	var sSearch = this.divSearch.form.edtName.value;

        	if (this.gfnIsNull(sSearch)) sSearch = "";

        	this.dsGrid.filter("NAME.indexOf('" + sSearch + "') > -1");
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        /**
         * @description 확인 버튼 클릭 이벤트
        */
        this.btnConfirm_onclick = function(obj,e)
        {
        	var nRow = this.dsGrid.rowposition;

        	var sId = this.dsGrid.getColumn(nRow, "ID");
        	var sName = this.dsGrid.getColumn(nRow, "NAME");

        	var rtnValue = {
        	     rtnId:sId
        		,rtnName:sName
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        /**
         * @description 그리드셀 더블클릭 이벤트
        */
        this.grdList_oncelldblclick = function(obj,e)
        {
        	var nRow = this.dsGrid.rowposition;

        	var sId = this.dsGrid.getColumn(nRow, "ID");
        	var sName = this.dsGrid.getColumn(nRow, "NAME");

        	var rtnValue = {
        	     rtnId:sId
        		,rtnName:sName
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtName.addEventHandler("onkeyup",this.divSearch_edtName_onkeyup,this);
            this.divSearch.form.edtName.addEventHandler("oninput",this.divSearch_edtName_oninput,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("Temp17_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
