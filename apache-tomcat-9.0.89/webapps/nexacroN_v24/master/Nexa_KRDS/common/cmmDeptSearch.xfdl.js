(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmDeptSearch");
            this.set_titletext("부서조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,48);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommonCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SRCH","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommonList", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCode","0","0","50%","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Search");
            obj.getSetter("uUse").set("false");
            obj.set_maxlength("7");
            obj.set_accessibilitylabel("검색");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtCode:-48","4","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_text("");
            obj.set_accessibilitylabel("검색");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","edtCode:8","0",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,48,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmDeptSearch.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	cmmDeptSearch.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearchScopeCd = "";
        this.fvRowVal;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	if( this.parent.uEssential=="true"){
        		this.edtCode.set_cssclass("essential");
        	}

        	// 조회권한 셋팅
        	this.fvSearchScopeCd = this.gfnGetScope();
        	switch(this.fvSearchScopeCd) {
        		case "0010":	//전체
        		case "0020":	//사업본부
        		case "0030":	//그룹
        			this.edtCode.set_enable(true);
        			this.btnSearch.set_enable(true);
        			break;
        		case "0040":	//팀
        		case "0050":	//개인
        			this.fnSetDept();
        			this.edtCode.set_enable(false);
        			this.btnSearch.set_enable(false);
        			break;
        		default:
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranDeptList = function ()
        {
        	//this.edtCode.set_enableevent(false);

        	if (this.gfnIsNull(this.edtCode.value)) {
        		this.edtName.set_value("");
        		//this.edtCode.set_enableevent(true);
        		return;
        	}
        	this.fvRowVal = this.parent.parent.parent.parent.dsList.rowposition; // 포커싱 나갈 때 이전 로우값 저장
        	this.dsCommonCond.clearData();
        	var nRow = this.dsCommonCond.addRow();
        	this.dsCommonCond.setColumn(nRow, "SRCH", this.edtCode.value);

        	var strSvcId    = "searchCommonDept";
        	var strSvcUrl   = "searchCommonDept.do";
        	var inData      = "dsCommonCond=dsCommonCond";
        	var outData     = "dsCommonList=dsCommonList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchCommonDept":
        			this.fnSetResult();
        			break;
        		default:break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "orgDeptMgPu":
        			if( !this.gfnIsNull(sRtn) ){
        				var aRtn= sRtn.split("|");
        				this.edtCode.set_value(aRtn[0]);
        				this.edtName.set_value(aRtn[2]);
        			}
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "nodata":
        			//this.edtCode.set_enableevent(true);
        			this.edtCode.set_value("");
        			this.edtName.set_value("");
        			this.edtCode.setFocus();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //조회결과세팅
        this.fnSetResult = function ()
        {
        	if( this.dsCommonList.getRowCount() == 0){
        		this.gfnAlert("msg.err.nodata", [""], "nodata", "fnMsgCallback");
        		return;
        	}

        	var sCode = this.dsCommonList.getColumn(0, "CODE");
        	var sName = this.dsCommonList.getColumn(0, "NAME");

        	var objForm = this.parent.parent.parent.parent;
        	if(this.fvRowVal != objForm.dsList.rowposition)
        	{
        		// 진척관리 화면일 경우만 컬럼이 다르기 때문에 분기처리
        		if(objForm.name == "taskMgFm")
        		{
        			objForm.dsList.setColumn(this.fvRowVal, "CHAG_DEPT_NM", sName);
        		}
        		else
        		{
        			objForm.dsList.setColumn(this.fvRowVal, "DEPT_NM", sName);
        		}
        		//objForm.dsList.rowposition = this.fvRowVal;
        		return; // 이전 로우값과 현재 로우값이 다를경우 리턴
        	}

        	this.edtCode.set_value(sCode);
        	this.edtName.set_value(sName);

        	if(this.parent.parent.btnSearch) this.parent.parent.btnSearch.setFocus();
        	//this.edtCode.set_enableevent(true);
        };

        //부서 세팅
        this.fnSetDept = function (sDept)
        {
        	if (this.gfnIsNull(sDept)) {
        		sDept = nexacro.getApplication().gdsUser.getColumn(0,"DEPT_CD");
        	}
        	this.edtCode.set_value(sDept);
        	this.fnTranDeptList();
        };

        // 활성화/비활성화
        this.fnSetEnable = function (bEnable)
        {
        	this.edtCode.set_enable(bEnable);
        	this.btnSearch.set_enable(bEnable);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.edtCode_onkeyup = function(obj,e)
        {
        	if(e.keycode==13) this.fnTranDeptList();
        };

        this.edtCode_onkillfocus = function(obj,e)
        {
        	this.fnTranDeptList();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var sTitle  = "부서 선택";
        	var oArg    = {
        		pvSearchValue:this.edtCode.value
        		,pvSearchScopeCd:this.fvSearchScopeCd
        	};
        	var oOption = {title:sTitle
        				  ,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("orgDeptMgPu", "sytm::org/orgDeptMgPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCode.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.edtCode.addEventHandler("onkillfocus",this.edtCode_onkillfocus,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("cmmDeptSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
