(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST012P02");
            this.set_titletext("물품그룹등록및조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/><Column id=\"userCmdtySn\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtySeCd\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyNm\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyPhotoFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"unitNm\" type=\"STRING\" size=\"256\"/><Column id=\"spcfctNm\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrpList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"cmdtyRegGroupNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0",null,"145","60",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0",null,null,"50","60","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSave\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd","0","Panel00:30",null,null,"60","Panel01:20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","400","34","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnExcelUpload\"/><PanelItem id=\"PanelItem00\" componentid=\"btnAddRow00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnAddRow\"/><PanelItem id=\"PanelItem03\" componentid=\"btnDelRow\"/></Contents>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","27","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("0");
            obj.set_text("총");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal01","staTotal:0","0","43","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal02","staTotal01:0","0","30","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdList","0","panGrdBtn:10","100.00%",null,null,"0",null,null,null,null,this.divGrd.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("checkbox");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"물품등록번호\"/><Cell col=\"1\" text=\"물품 명\"/><Cell col=\"2\" text=\"물품사진\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"물품 규격\"/><Cell col=\"5\" text=\"등록일자\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:userCmdtySn\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:cmdtyNm\" displaytype=\"text\" textAlign=\"left\" expandsize=\"20\"/><Cell col=\"2\" text=\"bind:건물명\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:unitNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:spcfctNm\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:frstRegDt\" displaytype=\"date\" cssclass=\"CellEnd\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnAddRow","320.00","0","50","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnDelRow","401.00","0","120","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_fittocontents("width");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload","920.00","0","140","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_FileUp");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnAddRow00","230","-2","80","34",null,null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("팝업추가");
            obj.set_cssclass("btn_WF_Small");
            this.divGrd.addChild(obj.name, obj);

            obj = new Button("btnSave","576.00","5","68","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0.00","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("나의 물품등록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0.00","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","19.77%","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("물품 그룹 선택");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrpCd","0","46","43%","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsGrpList");
            obj.set_codecolumn("cmdtyRegGroupNo");
            obj.set_datacolumn("cmdtyGroupNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","580","86",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cboGrpCd\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","620.00","0","580","1",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","48","100%","97",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.move(null,"0","400","34","0",null);

                p.staTotal.set_taborder("0");
                p.staTotal.set_text("총");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","27","34",null,null);

                p.staTotal01.set_taborder("2");
                p.staTotal01.set_text("0");
                p.staTotal01.set_cssclass("sta_WF_Total");
                p.staTotal01.set_usedecorate("true");
                p.staTotal01.set_fittocontents("width");
                p.staTotal01.move("staTotal:0","0","43","34",null,null);

                p.staTotal02.set_taborder("3");
                p.staTotal02.set_text("건");
                p.staTotal02.set_usedecorate("true");
                p.staTotal02.move("staTotal01:0","0","30","34",null,null);

                p.grdList.set_taborder("4");
                p.grdList.set_binddataset("dsList");
                p.grdList.getSetter("uFunction").set("checkbox");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","panGrdBtn:10","100.00%",null,null,"0");

                p.btnAddRow.set_taborder("5");
                p.btnAddRow.set_text("추가");
                p.btnAddRow.set_cssclass("btn_WF_Small");
                p.btnAddRow.move("320.00","0","50","34",null,null);

                p.btnDelRow.set_taborder("6");
                p.btnDelRow.set_text("선택삭제");
                p.btnDelRow.set_cssclass("btn_WF_SmallRed");
                p.btnDelRow.set_fittocontents("width");
                p.btnDelRow.move("401.00","0","120","34",null,null);

                p.btnExcelUpload.set_taborder("7");
                p.btnExcelUpload.set_text("엑셀업로드");
                p.btnExcelUpload.set_cssclass("btn_WF_FileUp");
                p.btnExcelUpload.move("920.00","0","140","34",null,null);

                p.btnAddRow00.set_taborder("8");
                p.btnAddRow00.set_text("팝업추가");
                p.btnAddRow00.set_cssclass("btn_WF_Small");
                p.btnAddRow00.move("230","-2","80","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGrd.form
            obj = new Layout("mobile","",0,0,this.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("물품그룹등록및조회");

                p.Panel00.set_taborder("10");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0",null,"145","60",null);

                p.Panel01.set_taborder("2");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.move("0",null,null,"50","60","0");

                p.divGrd.set_taborder("0");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","Panel00:30",null,null,"60","Panel01:20");

                p.btnSave.set_taborder("1");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_fittocontents("width");
                p.btnSave.move("576.00","5","68","40",null,null);

                p.staSubTitle.set_taborder("3");
                p.staSubTitle.set_text("나의 물품등록");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0.00","0","100%","50",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.move("0.00","0","100%","48",null,null);

                p.staLabel03_00.set_taborder("5");
                p.staLabel03_00.set_text("물품 그룹 선택");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("0","0","19.77%","46",null,null);

                p.cboGrpCd.set_taborder("6");
                p.cboGrpCd.set_innerdataset("dsGrpList");
                p.cboGrpCd.set_codecolumn("cmdtyRegGroupNo");
                p.cboGrpCd.set_datacolumn("cmdtyGroupNm");
                p.cboGrpCd.set_text("선택");
                p.cboGrpCd.set_value("");
                p.cboGrpCd.set_index("-1");
                p.cboGrpCd.move("0","46","43%","40",null,null);

                p.Panel02_00.set_taborder("7");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","0","580","86",null,null);

                p.Panel02_01.set_taborder("8");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("620.00","0","580","1",null,null);

                p.pan00.set_taborder("9");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","48","100%","97",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px 60px 0px 0px");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divGrd.move("20","157",null,"543","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_spacing("0px 60px 0px 0px");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboGrpCd","value","dsSearch","cmdtyRegGroupNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST012P02.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST012P02.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.gvCoId = nexacro.getApplication().gdsUser.getColumn(0, "coId");
        this.gvUserId = nexacro.getApplication().gdsUser.getColumn(0, "userId");
        this.gvUserNm = nexacro.getApplication().gdsUser.getColumn(0, "userNm");

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
        	//TODO..
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
        this.fnSearchGrpList = function () {
        	this.dsSearch.setColumn(0, "coId", this.gvCoId);
        	this.dsSearch.setColumn(0, "userId", this.gvUserId);

        	var strSvcId    = "searchGrpList";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpInfoInq.do";
        	var inData      = "dsIn=dsSearch";
        	var outData     = "dsGrpList=dsList";
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

        this.fnSearch = function () {
        	this.dsSearch.setColumn(0, "coId", this.gvCoId);
        	this.dsSearch.setColumn(0, "userId", this.gvUserId);

        	var strSvcId    = "search";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpMpngListInq.do";
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

        this.fnSave = function () {
        	var strSvcId    = "save";
        	var strSvcUrl   = "cst/pol/polCmdtyGrpMpngListStrg.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = ""; //"cmdtyRegGroupNo=" + this.dsList.getColumn(0, "cmdtyRegGroupNo");
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
        		case "searchGrpList" :
        			this.dsSearch.enableevent = false;
        			this.dsGrpList.insertRow(0);
        			this.dsGrpList.setColumn(0, "cmdtyGroupNm", "선택");
        			this.dsSearch.enableevent = true;

        			//0번째 세팅, dsList초기화(엑셀업로드 이후 그룹 재조회로 인한 추가)
        			this.dsSearch.setColumn(0, "cmdtyRegGroupNo", null);
        			this.dsList.clearData();
        			this.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divGrd.form.resetScroll();

        			break;

        		case "search" :
        			this.divGrd.form.staTotal01.text = this.dsList.getRowCount();
        			this.divGrd.form.resetScroll();
        			break;

        		case "save" :
        			this.gfnAlertMsg("msg1", "MSG_001"); // 등록되었습니다.
        			this.fnSearch();
        			break;

        		default:
        			break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 그리드 설정 : 물품명 신규일때만 활성화
        	const oTargetGrid = this.divGrd.form.grdList;
        	const nBindIdx = oTargetGrid.getBindCellIndex("body", "cmdtyNm");
        	oTargetGrid.setCellProperty("body", nBindIdx, "displaytype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'editcontrol' : 'normal'");
        	oTargetGrid.setCellProperty("body", nBindIdx, "edittype", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'normal' : 'none'");
        	oTargetGrid.setCellProperty("body", nBindIdx, "expandshow", "expr:dataset.getRowType(currow) == Dataset.ROWTYPE_INSERT ? 'show' : 'hidden'");

        	// 사용자의 물품그룹을 조회한다.
        	this.fnSearchGrpList();

        }

        //중복정보 메시지 확인
        this.fnSameMsg = function(cnt) {
        	if(cnt > 0) {
        		this.gfnAlertMsg("msg2", "MSG_011", ["중복된 물품정보가 존재합니다."]);
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회버튼 클릭
        this.divSch_btnSch_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "cmdtyRegGroupNo"))) {
        		this.cboGrpCd.setFocus();
        		this.gfnAlertMsg("req1", "CST_004", ["물품그룹"]);
        		return;
        	}

        	//그리드 변경상태 체크
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.fnSearch();
        	} else {
        		//팝업ID, 메세지ID, 팝업콜백 (confirm성 메시지를 사용시 반드시 필요), 확인 창에서 버튼의 명칭 배열, 확인 창에서 버튼 클릭시 리턴할 값 배열, sArg, 메시지치환
        		this.gfnConfirmMsg("confirmSearch", "CST_001", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) {
        				return false;
        			} else {
        				this.dsList.clearData();
        				this.fnSearch();
        				return true;
        			}

        		}, null, null, null, ["변경된 정보가 존재합니다. \n조회"]);

        		return false;
        	}
        };

        //추가
        this.divForm_divGrd_btnAddRow_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "cmdtyRegGroupNo"))) {
        		this.cboGrpCd.setFocus();
        		this.gfnAlertMsg("req2", "CST_004", ["물품그룹"]);
        		return;
        	}

        	const nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "cmdtyRegGroupNo", this.dsSearch.getColumn(0, "cmdtyRegGroupNo"));
        };

        // 그리드 돋보기
        this.divGrd_grdList_onexpandup = function(obj,e)
        {
        	const sBindIdx = obj.getBindCellIndex("body", "cmdtyNm");
        	if (sBindIdx != e.cell) return;

        	const sTitle = "등록물품조회";
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		// , autosize  : true
        		, title     : sTitle
        		// , resize    : true
        		, titlebar  : true
        		, width     : 900
        		, height    : 750
        	};
        	// const sPopupCallBack = "fnPopupCallback";
        	//팝업 callback이 2번 실행되서 중복정보가 있는 경우 count를 별로도 세어서 중복정보 메시지를 보일 수 있도록 구현
        	let sameCnt = 0;
        	this.gfnOpenPopup("myCmdty", "work::CST/POL/CST012P07.xfdl", {}, (sPopId, sJsonStr) => {

        		if (this.gfnIsNull(sJsonStr)) return false;
        		const oJson = JSON.parse(sJsonStr);

        		//중복정보 메시지
        		this.fnSameMsg(sameCnt);

        		//현재 popupCallback이 2번 실행되서 이곳에서 메시지 팝업 수행 시 반복적으로 나올 수밖에 없음
        		if (this.dsList.findRow("userCmdtySn", oJson["cmdtySn"]) > -1) {
        			sameCnt++;
        			//this.gfnAlertMsg("msg2", "MSG_011", ["중복된 물품정보가 존재합니다."]);
        			return;
        		}

        		for (let i=0; i<this.dsList.getColCount(); i++) {
        			const sColId = this.dsList.getColumnInfo(i).id;
        			const sVal = oJson[sColId];
        			if (this.gfnIsNull(sVal)) continue;

        			this.dsList.setColumn(this.dsList.rowposition, sColId, sVal);
        		}

        		// cmdtySn 만 별도로
        		this.dsList.setColumn(this.dsList.rowposition, "userCmdtySn", oJson["cmdtySn"]);

        	}, objOption);
        };

        // 저장
        this.btnSave_onclick = function(obj,e)
        {
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlertMsg("msg3", "MSG_004");	// 변경된 내역이 없습니다.
        		return;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "cmdtyRegGroupNo"))) {
        		this.cboGrpCd.setFocus();
        		this.gfnAlertMsg("req3", "CST_004", ["물품그룹"]);
        		return;
        	}

        	const nFindRow = this.dsList.findRowExpr("dataset.parent.gfnIsNull(userCmdtySn)");
        	if (nFindRow != -1) {
        		this.dsList.rowposition = nFindRow;
        		this.divGrd.form.grdList.setFocus();
        		this.gfnAlertMsg("msg4", "MSG_009", ["물품정보"]); /// {0} 을/를 입력해 주세요.
        		return;
        	}

        	// 등록하시겠습니까?
        	this.gfnConfirmMsg("confirmSave", "MSG_003", (sPopId, oRtnVal) => {
        		if (!JSON.parse(oRtnVal).result) return;
        		this.fnSave();
        	});
        };

        // 삭제
        this.divForm_divGrd_btnDelRow_onclick = function(obj,e)
        {
        	if (this.dsList.findRow("chk", "1") == -1) {
        		this.gfnAlertMsg("msg5", "MSG_011", ["선택된 정보가 없습니다."]);
        		return;
        	}

        	for (let i=this.dsList.getRowCount()-1; i>=0; i--) {
        		if (this.dsList.getColumn(i, "chk") != "1") continue;
        		this.dsList.deleteRow(i);
        	}
        };

        // 그리드 셀 더블클릭
        this.divGrd_grdList_oncelldblclick = function(obj,e)
        {
        	const sTitle = "물품정보상세조회";
        	const oArg = {cmdtySn : obj.getBindDataset().getColumn(e.row, "userCmdtySn")};
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		// , autosize  : true
        		, title     : sTitle
        		// , resize    : true
        		, titlebar  : true
        		, width     : 800
        		, height    : 540
        	};

        	this.gfnOpenPopup("cmdtyDtl", "work::CST/POL/CST012P04.xfdl", oArg, null, objOption);
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if (e.columnid == "chk") {
        		obj.updatecontrol = false;
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "chk") {
        		obj.updatecontrol = true;
        	}

        	else if (e.columnid == "cmdtyNm") {
        		obj.setColumn(e.row, "userCmdtySn", "");
        	}
        };

        this.divGrd_btnExcelUpload_onclick = function(obj,e)
        {
        	const sTitle = "나의물품업로드";
        	const oArg = {}
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		, title     : sTitle
        		, titlebar  : true
        		, width     : 1000
        		, height    : 820
        		// , autosize  : true
        		// , resize    : true
        	};

        	this.gfnOpenPopup("cmdtyExcel", "work::CST/POL/CST012P08.xfdl", oArg, function (sPopupId, bRtn) {
        		if (!bRtn) {
        			return;
        		} else {
        			// 사용자의 물품그룹을 재조회한다.
        			this.fnSearchGrpList();
        		}
        	}, objOption);
        };

        this.divForm_divGrd_btnAddRow00_onclick = function(obj,e)
        {
        	//팝업추가 오픈
        	const sTitle = "물품그룹등록";
        	const oArg = {}
        	const objOption = {
        		  popuptype : "modal"	//modal,modaless
        		, title     : sTitle
        		, titlebar  : true
        		, width     : 1000
        		, height    : 820
        		// , autosize  : true
        		// , resize    : true
        	};

        	this.gfnOpenPopup("popAdd", "work::CST/POL/CST012P03.xfdl", oArg, function (sPopupId, bRtn) {
        		if (!bRtn) {
        			return;
        		} else {
        			//재조회
        			this.fnSearch();
        		}
        	}, objOption);
        };

        //dsSearch 변경 시 조회에서 콤보박스 선택 변경 시 조회로 변경
        this.cboGrpCd_onitemchanged = function(obj,e)
        {
        	//값이 없는 -선택- 은 조회 진행 안 함
        	if (this.gfnIsNull(e.postvalue)) return;

        	//그리드 변경상태 체크
        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.fnSearch();
        	} else {
        		//팝업ID, 메세지ID, 팝업콜백 (confirm성 메시지를 사용시 반드시 필요), 확인 창에서 버튼의 명칭 배열, 확인 창에서 버튼 클릭시 리턴할 값 배열, sArg, 메시지치환
        		this.gfnConfirmMsg("confirmSearch", "CST_001", (sMsgId, oRet) => {
        			if (!JSON.parse(oRet).result) {
        				return false;
        			} else {
        				//조회를 한다는 선택을 했으므로 신규 내용으로 세팅
        				this.cboGrpCd.value = e.postvalue;
        				this.dsList.clearData();
        				this.fnSearch();
        				return true;
        			}

        		}, null, null, null, ["변경된 정보가 존재합니다. \n조회"]);

        		//gfnConfirmMsg 수행 전 이곳 먼저 수행함(메시지 선택과 상관없이 변경된 내용으로 세팅되므로 기존 내용으로 세팅을 해 둠)
        		this.cboGrpCd.value = e.prevalue;
        		return false;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divGrd.form.grdList.addEventHandler("onexpandup",this.divGrd_grdList_onexpandup,this);
            this.divGrd.form.grdList.addEventHandler("oncelldblclick",this.divGrd_grdList_oncelldblclick,this);
            this.divGrd.form.btnAddRow.addEventHandler("onclick",this.divForm_divGrd_btnAddRow_onclick,this);
            this.divGrd.form.btnDelRow.addEventHandler("onclick",this.divForm_divGrd_btnDelRow_onclick,this);
            this.divGrd.form.btnExcelUpload.addEventHandler("onclick",this.divGrd_btnExcelUpload_onclick,this);
            this.divGrd.form.btnAddRow00.addEventHandler("onclick",this.divForm_divGrd_btnAddRow00_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.cboGrpCd.addEventHandler("onitemchanged",this.cboGrpCd_onitemchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("CST012P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
