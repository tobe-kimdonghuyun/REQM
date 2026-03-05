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
            this.set_titletext("팝업샘플용화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,394);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">aaaaaaaaa</Col><Col id=\"NAME\">김영수</Col><Col id=\"DEPARTMENT\">사업컨설팅팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">bbbbbbbb</Col><Col id=\"NAME\">최희영</Col><Col id=\"DEPARTMENT\">프리세일즈팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">ccccccccc</Col><Col id=\"NAME\">최택수</Col><Col id=\"DEPARTMENT\">재무회계팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row><Row><Col id=\"ID\">dddddddd</Col><Col id=\"NAME\">소희진</Col><Col id=\"DEPARTMENT\">공시팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">eeeeeeeee</Col><Col id=\"NAME\">김나라</Col><Col id=\"DEPARTMENT\">인사총무팀</Col><Col id=\"DESCRIPTION\">책임</Col></Row><Row><Col id=\"ID\">ffffffffffff</Col><Col id=\"NAME\">박찬수</Col><Col id=\"DEPARTMENT\">영업팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">gggggggg</Col><Col id=\"NAME\">허소진</Col><Col id=\"DEPARTMENT\">사업지원팀</Col><Col id=\"DESCRIPTION\">수석</Col></Row><Row><Col id=\"ID\">hhhhhhhh</Col><Col id=\"NAME\">김철수</Col><Col id=\"DEPARTMENT\">개발지원팀</Col><Col id=\"DESCRIPTION\">선임</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"54","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchGubun","0","12","86","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNm","218","12","140","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"11","30","30","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoGubun","staSearchGubun:0","12","126","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divSearch_form_rdoGubun_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoGubun_innerdataset", obj);
            divSearch_form_rdoGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">명칭</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">코드</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoGubun_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","25","divSearch:0",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업 샘플용 화면");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","25","staTitle:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsGrid");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:NAME\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:DEPARTMENT\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"50","28","btnOk:3","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
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
        this.registerScript("samplePopupP.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	samplePopupP.xfdl
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
        	this.gfnFormOnload(obj); //필수함수

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

        	this.gfnClosePopup(JSON.stringify(rtnValue));
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMain.addEventHandler("oncelldblclick",this.grdMain_oncelldblclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("samplePopupP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
