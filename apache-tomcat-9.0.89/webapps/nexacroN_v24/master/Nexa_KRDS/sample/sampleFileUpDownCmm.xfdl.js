(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFileUpDownCmm");
            this.set_titletext("파일업다운공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "srchCond1","type" : "STRING","size" : "256"},{"id" : "srchCond2","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","type" : "undefined","size" : "0"},{"id" : "SAMPLE_NM","type" : "string","size" : "32"},{"id" : "SAMPLE_DEPT_NM","type" : "string","size" : "32"},{"id" : "SAMPLE_DESC","type" : "string","size" : "32"},{"id" : "SAMPLE_FILE_ID","type" : "string","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FILE_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","440","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","210","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","12","80","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","staSearchTitle00:0","12","140","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel01","220","0","212","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle01","Edit00_00:0","12","80","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","staSearchTitle01:0","12","140","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","815","12","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","0","divSearch:40","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자 정보 조회");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","222",null,"314","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filterNew,sort");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"323\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"비고\"/><Cell col=\"4\" text=\"파일ID\"/></Band><Band id=\"body\"><Cell text=\"bind:SAMPLE_ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SAMPLE_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:SAMPLE_DEPT_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SAMPLE_DESC\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:SAMPLE_FILE_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","grdList:20",null,"468","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"divFileUpload\"/><PanelItem id=\"PanelItem00\" componentid=\"divFileDownload\"/><PanelItem id=\"PanelItem01\" componentid=\"divFileUpDownload\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divFileDownload","0","0","100%","156",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmFile.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","100","21",null,null,null,null,null,null,this.divFileDownload.form);
            obj.set_taborder("0");
            this.divFileDownload.addChild(obj.name, obj);

            obj = new Div("divFileUpload","640","0","100%","156",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_url("common::cmmFile.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","12","100","21",null,null,null,null,null,null,this.divFileUpload.form);
            obj.set_taborder("0");
            this.divFileUpload.addChild(obj.name, obj);

            obj = new Div("divFileUpDownload","10","166","100%","156",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_url("common::cmmFile.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_spacing("40px 40px 40px 40px");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileDownload.form
            obj = new Layout("default","",0,0,this.divFileDownload.form,function(p){});
            this.divFileDownload.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileUpload.form
            obj = new Layout("default","",0,0,this.divFileUpload.form,function(p){});
            this.divFileUpload.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFileUpDownload.form
            obj = new Layout("default","",0,0,this.divFileUpDownload.form,function(p){});
            this.divFileUpDownload.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1040,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Edit00_00","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.Edit00","value","dsSearch","srchCond2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmFile.xfdl");
        };
        
        // User Script
        this.registerScript("sampleFileUpDownCmm.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleTransaction.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/25
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/25			TOBESOFT					최초생성
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


        	//파일Div 셋팅
        	var objDownConfig = {
        							openType 	: "read"  // read 다운로드만 가능
        							, svcType 	: "sample" // 업무 구분 샘플(sample), 게시판(board), 일정(scd), 진척관리(prog)
        						};
        	var objUpConfig = {
        							openType : "add"  // add, update 추가,삭제 가능
        							, svcType : "sample" // 업무 구분 샘플(sample), 게시판(board), 일정(scd), 진척관리(prog)
        						};
        	var objUpDownConfig = {
        							openType : "updown"  // updown 추가,삭제,다운 가능
        							, svcType : "sample" // 업무 구분 샘플(sample), 게시판(board), 일정(scd), 진척관리(prog)
        						};


        	this.divFileDownload.form.fnSetFileConfig(objDownConfig);
        	this.divFileUpload.form.fnSetFileConfig(objUpConfig);
        	this.divFileUpDownload.form.fnSetFileConfig(objUpDownConfig);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //추가
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	if( nRow<0 ) return;

        	this.dsList.deleteRow(nRow);
        };

        //저장
        this.cfnSave = function ()
        {
        	this.fnSaveData();
        };

        //조회
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnSearch = function ()
        {
        	var strSvcId 	= "searchSampleList";
        	var strSvcUrl 	= "searchSampleList.do";
        	var inData 		= "inDs=dsSearch";
        	var outData 	= "dsList=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        //저장
        this.fnSave = function ()
        {
        	var strSvcId 	= "saveSample";
        	var strSvcUrl 	= "saveSample.do";
        	var inData 		= "inDs=dsList:U";
        	var outData 	= "";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId) {
        		case "searchSampleList" :
        			//첫번쨰 row의 파일 조회
        			this.fnSearchFileList(0);
        			break;
        		case "saveSample" :
        			//저장 alert
        			this.gfnAlert("msg.save.success");
        			this.fnSearch();
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "save":
        			if(sRtn) {
        				this.fnFileUpload();
        			}
        			break;
        		case "validId":
        			this.dsList.setColumn(this.dsList.rowposition, "SAMPLE_ID", "");
        			this.grdList.setCellPos(0);
        			this.grdList.showEditor(true);
        			break;
        		case "moverowpos":
        			if (this.gfnIsNull(sRtn) || sRtn == "false" || sRtn == false){
        				return;
        			}

        			//새로운 row가 선택될 수 있게 함.(canrowposchange이벤트 타지 않음)
        			this.dsList.set_enableevent(false);
        			this.dsList.set_rowposition(this.dsList.uNewRow);
        			this.fnSearchFileList();
        			this.dsList.set_enableevent(true);
        			break;
        		default:
        			break;
        	}
        };


        //공통파일업다운로드
        this.fnFileCallBack = function(svcId, nErrCd, sErrMsg, sDiv, sRtn)
        {
        	switch(svcId) {
        		case ("saveFile"):
        			if(nErrCd == 1) {
        				this.fnSave();
        			} else {
        				//파일 ID셋팅 후 내용 저장
        				var nRow = this.dsList.rowposition;
        				this.dsList.setColumn(nRow, "SAMPLE_FILE_ID", sRtn);

        				this.fnSave();
        			}
        			break;
        		case ("deleteFile") :
        			//첨부파일 0건인 경우 부모의 FILE_ID 없애기.
        			if (sRtn == 0)
        			{
        				var nRow = this.dsList.rowposition;
        				this.dsList.setColumn(nRow, "SAMPLE_FILE_ID", "");
        			}

        			this.fnSave();
        			break;
        		default:
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //정합성체크
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "SAMPLE_ID"	, "아이디"	, "required");
        	this.gfnSetValidation(this.dsList, "SAMPLE_NM"  , "이름"		, "required");

         	// Dataset의 변경된 Row Validation check
          	if (this.gfnValidation(this.grdList, "U") == false) return false;

        	return true;
        };


        //파일 저장
        this.fnFileUpload = function()
        {
        	this.divFileUpload.form.fnFileUpload();
        };


        //데이터 저장
        this.fnSaveData = function()
        {
        	// 변경된 정보없으면 리턴(데이터와 파일 모두 변경된 정보가 없어야 함.)
        	if (this.gfnDsIsUpdated(this.dsList) == false && !this.divFileUpload.form.fnCheckIsUpdated() ) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// validation 체크 후
        	if (this.fnValidation()) {
        		// 서버 중복 체크
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}
        }

        //파일 목록 조회
        this.fnSearchFileList = function(nRow)
        {
        	if (this.gfnIsNull(nRow)) 	nRow = this.dsList.rowposition;

        	var nRowType = this.dsList.getRowType(nRow);

        	//신규데이터가 아닌 경우 (rowtype !=2) 파일 openType update.
        	if (nRowType != 2) {
        		var objUpConfig = {
        					openType : "update"
        					, svcType : "sample" // 업무 구분 샘플(sample), 게시판(board), 일정(scd), 진척관리(prog)
        					};
        		this.divFileUpload.form.fnSetFileConfig(objUpConfig);
        	}


        	//파일 사용에 필요한 정보 데이터셋으로 넘기기 (파일 ID등 셋팅)
        	var sFileId = this.dsList.getColumn(nRow, "SAMPLE_FILE_ID");
         	this.dsCond.clearData();
         	var newRow = this.dsCond.addRow();
         	this.dsCond.setColumn(newRow, "FILE_ID", sFileId);


        	this.divFileDownload.form.fnSetFileInfo(this.dsCond);
        	this.divFileUpload.form.fnSetFileInfo(this.dsCond);
        	this.divFileUpDownload.form.fnSetFileInfo(this.dsCond);

        	//파일div 3개를 모두 수정해주기 위해 fnSearchFile 3번 호출.
        	this.divFileDownload.form.fnTranSearchFile();
        	this.divFileUpload.form.fnTranSearchFile();
        	this.divFileUpDownload.form.fnTranSearchFile();
        };

        //파일 건수 세팅
        this.fnSetFileCnt = function(sDiv, nCnt)
        {
        	if (sDiv == "divFileDownload")	this.divFileDownload.form.sta00.set_text("(" + nCnt + "건)");
        	if (sDiv == "divFileUpload")	this.divFileUpload.form.sta01.set_text("(" + nCnt + "건)");
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼클릭
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };


        this.dsList_canrowposchange = function(obj,e)
        {
        	this.dsList.uNewRow = e.newrow;
        	this.dsList.uOldRow = e.oldrow;

        	//업데이트 된 파일있는지 확인.
        	if (this.divFileUpload.form.fnCheckIsUpdated()) {
        		this.gfnAlert("confirm.before.moveropos", [], "moverowpos", "fnMsgCallback");
        		return false;
        	} else {
        		this.fnSearchFileList(this.dsList.uNewRow);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("sampleFileUpDownCmm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
