(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST001P01");
            this.set_titletext("나의등록물품조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",900,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("나의등록물품조회");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
        this.registerScript("RP_102380_CST012P07.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST012P07.xfdl
        *  @Creator 	이규철
        *  @CreateDate 	2024/09/19
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCurDate = this.gfnGetDate();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {

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

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function () {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	// 유저정보를 셋팅한다.
        	const gdsUser = nexacro.getApplication().gdsUser;

        	this.dsSearch.setColumn(0, "coId", gdsUser.getColumn(0, "coId"));
        	this.dsSearch.setColumn(0, "userId", gdsUser.getColumn(0, "userId"));
        	this.dsSearch.setColumn(0, "cmdtySeCd", this.divForm.form.divSch.form.cboCmdtySeCd.value);
        	this.dsSearch.setColumn(0, "cmdtyNm", this.divForm.form.divSch.form.editCmdtyNm.value);

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/pol/polCmdtyInfoInq.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {
        		case "search" :
        			this.divForm.form.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divForm.form.divGrd.form.resetScroll();

        			break;

        		default:
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function() {
        // 	this.divForm.form.divGrd.form.grdList.setCellProperty("head", 0, "displaytype", "normal");
        // 	this.divForm.form.divGrd.form.grdList.setCellProperty("head", 0, "edittype", "none");
        };

        this.fnMakeJsonData = function () {
        	// let arrData = [];
        	let rtnValue = {};
        	for (let i=0; i<this.dsList.getColCount(); i++) {
        		rtnValue[this.dsList.getColumnInfo(i).id] = new String(this.dsList.getColumn(this.dsList.rowposition, this.dsList.getColumnInfo(i).id));
        	// 	arrData.push(rtnValue);
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        // 확인
        this.divForm_divPopBtn_btnOk_onclick = function(obj,e)
        {
        	if (this.dsList.rowposition == -1) {
        		this.gfnAlertMsg("msg", "MSG_011", ["선택된 데이터가 없습니다."]);
        		return;
        	}

        	this.fnMakeJsonData();
        };

        this.divForm_divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	if (e.row == -1) return;

        	this.fnMakeJsonData();
        };

        this.divForm_divPopBtn_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("RP_102380_CST012P07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
