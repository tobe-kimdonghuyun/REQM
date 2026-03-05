(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp19");
            this.set_titletext("사용자설정 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTheme", this);
            obj._setContents("<ColumnInfo><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"THEME_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CONFIRM_PASSWORD\"/><Col id=\"NEW_PASSWORD\"/><Col id=\"CUR_PASSWORD\"/><Col id=\"USER_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"THEME_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTheme","30","62","260","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","8","75","55",null,null,null,null,null,null,this.divTheme.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Light");
            this.divTheme.addChild(obj.name, obj);

            obj = new Static("sta00_00","151","8","75","55",null,null,null,null,null,null,this.divTheme.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Dark");
            this.divTheme.addChild(obj.name, obj);

            obj = new Radio("rdoTheme","27","67","231","21",null,null,null,null,null,null,this.divTheme.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divTheme_form_rdoTheme_innerdataset = new nexacro.NormalDataset("divTheme_form_rdoTheme_innerdataset", obj);
            divTheme_form_rdoTheme_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">라이트모드</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">다크모드</Col></Row></Rows>");
            obj.set_innerdataset(divTheme_form_rdoTheme_innerdataset);
            obj.set_text("라이트모드");
            obj.set_value("0");
            obj.set_index("0");
            this.divTheme.addChild(obj.name, obj);

            obj = new Div("divPassword","330","62","260","100",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPassword.addChild(obj.name, obj);

            obj = new Edit("edtCurPassword","125","5",null,"24","5",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("1");
            obj.set_password("true");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","33",null,"34","0",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("sta02_00","-4","33","125","34",null,null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("3");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.divPassword.addChild(obj.name, obj);

            obj = new Edit("edtNewPassword","125","38",null,"24","5",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("4");
            obj.set_password("true");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","0","66",null,"34","0",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","-4","66","125","34",null,null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("6");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.divPassword.addChild(obj.name, obj);

            obj = new Edit("edtConfirmPassword","125","71",null,"24","5",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("7");
            obj.set_password("true");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("sta02","-4","0","125","34",null,null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("8");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.divPassword.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnTheme","30","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("테마 설정");
            obj.set_cssclass("btn_WF_TabS");
            this.addChild(obj.name, obj);

            obj = new Button("btnPassword","160","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_WF_Tab");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTheme.form
            obj = new Layout("default","",0,0,this.divTheme.form,function(p){});
            this.divTheme.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPassword.form
            obj = new Layout("default","",0,0,this.divPassword.form,function(p){});
            this.divPassword.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",320,230,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPassword.form.edtCurPassword","value","dsCond","CUR_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPassword.form.edtNewPassword","value","dsCond","NEW_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPassword.form.edtConfirmPassword","value","dsCond","CONFIRM_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmUserSetting.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	Temp09_01.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/01/05
        *  @Desction    팝업연결용 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/01/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 초기화
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 사용자 검색
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "searchUserSetting";
        	var strSvcUrl   = "searchUserSetting.do";
        	var inData      = "";
        	var outData     = "dsTheme=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /**
         * @description 마이메뉴 저장 트랜잭션
         */
        this.fnSaveUserSetting = function()
        {
        	var sThemeId = this.divTheme.form.rdoTheme.value;
        	if(sThemeId == 0){
        		this.dsTheme.setColumn(0,"THEME_ID", "01");
        	}else{
        		this.dsTheme.setColumn(0,"THEME_ID", "02");
        	}
        	// 테마 설정 저장
        	var sSvcId   	= "saveUserSetting";
        	var sSvcUrl   	= "saveUserSetting.do";
        	var sInData     = "dsList=dsTheme:U";
        	var sOutData    = "";
        	var sArg      	= "";
        	var sCallBackFnc = "fnCallback";

        	this.gfnTransaction(sSvcId , 		// transaction을 구분하기 위한 svc id값
        						sSvcUrl , 		// trabsaction을 요청할 주소
        						sInData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						sOutData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						sArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						sCallBackFnc);  // 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchUserSetting":
        			//trace(this.dsTheme.saveXML());
        			var sThemeId = this.dsTheme.getColumn(0,"THEME_ID");
        			if(!this.gfnIsNull(sThemeId)){
        				if(sThemeId == "02"){
        					this.divTheme.form.rdoTheme.set_value(1);
        					nexacro.loadStyle("xcssrc::darkMode.xcss");
        				}else{
        					this.divTheme.form.rdoTheme.set_value(0);
        					nexacro.loadStyle("xcssrc::lightMode.xcss");
        				}
        			}
        			break;
        		case "saveUserSetting":
        			if(this.divTheme.form.rdoTheme.value == "1"){
        				nexacro.loadStyle("xcssrc::darkMode.xcss");
        			}else{
        				nexacro.loadStyle("xcssrc::lightMode.xcss");
        			}

        			this.close();
        			//this.fnSearch();
        			//nexacro.loadStyle("xcssrc::darkMode.xcss");
        			break;
        		case "searchCurPassword":
        			if(nErrCd == -200){
        				this.gfnAlert("msg.err.tran", [sErrMsg]);
        				return;
        			}else if(nErrCd == 0){
        				//trace(this.objApp.gdsUser.saveXML());
        				this.fnSavePassword();
        			}
        			break;
        		case "saveUserPassword":
        			this.gfnAlert("msg.save.success", "", "msg.save.success", "fnMsgCallback");
        			//this.divPassword.form.edtCurPassword.set_value("");
        			//this.divPassword.form.edtNewPassword.set_value("");
        			//this.divPassword.form.edtConfirmPassword.set_value("");
        			this.close();
        			break;
        		default: break;
        	}
        };

        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (sMsgId, sVal)
        {
        	// 해당 메뉴를 즐겨찾기 목록에서 삭제하시겠습니까?
        	if(sMsgId =="confirm.general")
        	{
        		if(sVal == true)
        		{
        			// 마이메뉴 저장 트랜잭션 호출
        			this.fnSaveUserSetting();
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 초기화
        */
        this.fnInit = function()
        {
        	//this.dsCond.clearData();
        	//var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(0, "USER_ID"		, this.objApp.gdsUser.getColumn(0, "USER_ID"));
        	//this.dsCond.setColumn(nRow, "CUR_PASSWORD"	, this.objApp.gdsUser.getColumn(0, "CUR_PASSWORD"));
            //this.fnSearch();
        }

        /**
         * @description 비밀번호 저장
        */
        this.fnSavePassword = function()
        {

        	//현재 비밀번호 확인
        	var strSvcId    = "saveUserPassword";
        	var strSvcUrl   = "saveUserPassword.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        	return;

        	if(this.divTheme.visible) {
        // 		if (this.gfnDsIsUpdated(this.dsTheme) == false) {
        // 			// 저장할 데이터가 없습니다.
        // 			this.gfnAlert("msg.save.nochange");
        // 			return;
        // 		}
        // 		var sMsgId = "confirm.general";
        // 		var sPopId = sMsgId;
        // 		var sCallback = "fnMsgCallback";
        // 		var arrArg = ["테마 설정을 저장하시겠습니까?"];
        //
        // 		// 해당 메뉴를 즐겨찾기 목록에서 삭제하시겠습니까?
        // 		this.gfnAlert(sMsgId, arrArg, sPopId, sCallback);
        	}
        	else{
        		// 정합성 체크
        		this.gfnClearValidation(this.dsCond);
        		this.gfnSetValidation(this.dsCond, "CUR_PASSWORD", "현재 비밀번호", "required");
        		this.gfnSetValidation(this.dsCond, "NEW_PASSWORD", "새 비밀번호", "required");
        		this.gfnSetValidation(this.dsCond, "CONFIRM_PASSWORD", "새 비밀번호 확인", "required");
        		// 새 비밀번호 != 새 비밀번호 확인이 다르면
        		if (this.divPassword.form.edtNewPassword.value != this.divPassword.form.edtConfirmPassword.value) {
        			// 변경하고자 하는 비밀번호가 다릅니다.\n다시 입력해 주세요.
        			this.gfnAlert("msg.err.validator.password.chnge.dfrnt");
        			this.divPassword.form.edtConfirmPassword.setFocus();
        			return;
        		}

        		if (this.gfnValidation(this.dsCond, "A") == false) return;

        		//현재 비밀번호 확인
        		var strSvcId    = "searchCurPassword";
        		var strSvcUrl   = "searchCurPassword.do";
        		var inData      = "dsCond=dsCond";
        		var outData     = "dsUser=dsLoginUser";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcUrl , 	// trabsaction을 요청할 주소
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}
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

        /**
         * @description 조회 버튼 클릭 이벤트
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	// 사용자 검색
        	this.fnSearch();
        };

        /**
         * @description 검색 엔터키 이벤트
        */
        this.divSearch_edtName_onkeyup = function(obj,e)
        {
        	// 엔터키일 경우
        	if (e.keycode == 13)
        	{
        		// 사용자 검색
        		this.fnSearch();
        	}
        };

        this.div00_rdo00_onitemchanged = function(obj,e)
        {
        	var sThemeId = "";
        	if(e.postvalue == "0"){
        		sThemeId = "01";
        	}else{
        		sThemeId = "02";
        	}
        	this.dsTheme.setColumn(0, "THEME_ID", sThemeId);
        };

        this.btnTheme_onclick = function(obj,e)
        {
        	this.btnTheme.set_cssclass("btn_WF_TabS");
        	this.btnPassword.set_cssclass("btn_WF_Tab");
        	this.divTheme.set_visible(true);
        	this.divPassword.set_visible(false);
        };

        this.btnPassword_onclick = function(obj,e)
        {
        	this.btnTheme.set_cssclass("btn_WF_Tab");
        	this.btnPassword.set_cssclass("btn_WF_TabS");
        	this.divTheme.set_visible(false);
        	this.divPassword.set_left(30);
        	this.divPassword.set_visible(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divTheme.form.rdoTheme.addEventHandler("onitemchanged",this.div00_rdo00_onitemchanged,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnTheme.addEventHandler("onclick",this.btnTheme_onclick,this);
            this.btnPassword.addEventHandler("onclick",this.btnPassword_onclick,this);
            this.dsTheme.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsTheme.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsUser.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsUser.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("frmUserSetting.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
