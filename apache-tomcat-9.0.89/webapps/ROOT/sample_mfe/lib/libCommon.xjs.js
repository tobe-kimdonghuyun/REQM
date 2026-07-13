//XJS=libCommon.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::runner.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName 	libCommon.xjs
        *  @Creator 	consulting
        *  @CreateDate 	2018.5.23
        *  @Desction    include 방식의 공통 script 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.10.17     	ugis		 	        최초 생성
        *******************************************************************************
        */
        ////////////////////////////// 공용변수 ////////////////////////////////////////////////////////
        this.executeIncludeScript("lib::runner.xjs"); /*include "lib::runner.xjs"*/;
        //include "libevent::event.components.xjs"

        var self = this;				// Form 객체
        var TestAPI = self.gfnGetTestAPI();

        this.formJson;
        this.resultno_count=0;
        this.fvRunner=false;
        this.fvRunnerCount=0;
        this.fvRunnerIdx=0;


        /////////////////////////////////////////////////////////////////////////////////////////
        /**
         * Creates an instance of Testsample.
         *
         * @constructor
         * @author: ugis
         * @this {init}
         * @param {obj} r The Test of the TestForm.
         */
        this.gfnEventCheck = function(obj, e)
        {
        		for( i in e) {
        			if(!e.hasOwnProperty(i))continue;
        			if(i == "constructor") continue;
        			if( i == "preventDefault") continue;
        			if( i == "toString") continue;
        			if( i == "stopPropagation") continue;
        			if( i == "set_id") continue;
        			if( i == "set_name") continue;
        			if( i.substr(0,1) == "_") continue;
        			if( i == "destroy") continue;
        			//trace(i +"="+ e[i]);
        		}
        };
        // Testcase Runner object 반환
        TestAPI.gfnGetRunner = function() {
        // 	var runner =  this.parent.parent.parent;
        //
        // 	if(runner.name == "application" ) return this;
        // 	return runner;
        	return TestAPI.getRunner();
        };

        if(TestAPI.version < 0.7) {
        	this.gfnGetRunner = function () {
        		return TestAPI.getRunner();
        	}
        }

        //runner에 TC, function을 등록하는 공통함수
        TestAPI.gfnInit = function (tcInfo, ctx, aAutoStart) {
        	if(TestAPI.version >= 0.7) trace("[WARN] Deprecated TestAPI.gfnInit(). Use TestAPI.init().");
        	TestAPI.init(tcInfo, ctx, aAutoStart);
        };

        TestAPI.createRunner = function (ctx) {
        	var runner = null;

        	if(ctx.parent != undefined && ctx.parent.parent != undefined && ctx.parent.parent.parent != undefined) {
        		var apRunner =  ctx.parent.parent.parent;
        		if(apRunner.name != undefined && apRunner.name == "ApplicationRunner") {
        			runner = apRunner.getEmbeddedRunner();
        			// runner.bootup();
        			TestAPI.setRunner(runner);
        		}
        	}
        	if(runner == null) {
        		runner = TestAPI.getRunner();
        	}

        	if (runner == null || runner.getRunnerMode() == TestAPI.RUNNER_EMBEDDED) {
        		// running embedded test
        		runner = new TestAPI.EmbeddedRunner(ctx);
        		runner.bootup();
        		TestAPI.setTestApplication(ctx);
        	}

        	return runner;
        }

        TestAPI.init = function (tcInfo, ctx, aAutoStart) {
        	var runner = TestAPI.createRunner(ctx);

        	// runner 조건에 맞는 상태로 지정
        	if(runner.getRunnerMode() != TestAPI.RUNNER_EMBEDDED && runner.getRunnerMode() != TestAPI.RUNNER_ANALAYZE) {
        		TestAPI.setApplicationMode(TestAPI.AM_TEST);	//BatchRunner 또는 ApplicationRunner에서 수행된 경우 테스트모드로 셋팅
        	} else if (runner.getRunnerMode() == TestAPI.RUNNER_ANALAYZE || (runner.getRunnerMode() == TestAPI.RUNNER_EMBEDDED && TestAPI.getApplicationMode() == TestAPI.AM_ANALYZE)) {
        		TestAPI.setApplicationMode(TestAPI.AM_ANALYZE);	// Analayzer 또는 Embedded(단, 샘플이 AM_ANALYZE 설정상태)에서 수행된 경우 분석모드로 셋팅
        	} else {
        		TestAPI.setApplicationMode(TestAPI.AM_TEST);
        	}

        	// 상태에 따른 처리 진행
        	switch(TestAPI.getApplicationMode()) {
        	case TestAPI.AM_TEST :
        		runner.loadTestcase(ctx, tcInfo); //, false);

        		if(TestAPI.version < 0.71) {
        			var beginStepIndex	= 0;	// 처음
        			var endStepIndex	= -1;	// 끝

        			var am = runner.getApplicationMonitor();
        			am.setTestRange(beginStepIndex, endStepIndex);
        		}

        		var bAutoStart = false;
        		if(aAutoStart != undefined) {
        			bAutoStart = aAutoStart;
        		}

        		if(bAutoStart == true) {
        			runner.executeTest();
        		}
        		break;

        	case TestAPI.AM_ANALYZE :
        		TestAPI.setTestApplication(ctx);
        		TestAPI.orgTcInfo = {
        			tcInfo : tcInfo,
        			tcList : []
        		};
        		var tcList = tcInfo;	// tcInfo : version < 0.71
        		if(tcInfo.tcList != undefined) {
        			tcList = tcInfo.tcList;	// tcInfo : version >= 0.71 이상
        		}
        		// original tcList 보관 : analyzeTC에서 원본 tcList 획득 위함
        		for(var i = 0; i < tcList.length; i++) {
        			TestAPI.orgTcInfo.tcList.push(tcList[i]);
        		}

        		runner.setLoadCompleted();
        		break;
        	}

        // 	if (runner.isTestMode())
        // 	{
        // 	   self.fvRunner=true;
        // 	   self.logger.isRunner = true;
        //
        // 	   if(tcInfo == undefined || tcInfo == null) return;
        // 		self.arrTC = tcInfo;	// arrTC에서 tcInfo 구조로 변경
        // 		runner.gfnInitScenario(tcInfo, this);
        // 	}
        	return runner;
        }

        if(TestAPI.version < 0.7) {
        	this.gfnInit = function (arrTc, ctx, aAutoStart) {
        		TestAPI.init(arrTc, ctx, aAutoStart);
        	}
        }

        this.gfnInitDnR = function ()
        {
        	var runner = this.gfnGetRunner();

        	if (runner.isTestMode()) {

        		var testAppService = (runner.sappURL.substring(0, runner.sappURL.indexOf("::"))).replace(".xfdl", ".xml");
        		var testAppName = runner.sappURL.substring(runner.sappURL.indexOf("::")+2, runner.sappURL.length).replace(".xfdl", "");
        		var loadurl = "xmldata::"+testAppService+"/"+testAppName +".xml";

        		if (runner._loadDataset(loadurl) == false)
        		{
        			runner._clearAllTestcases();
        			trace("load Fail");
        		}
        	}
        	runner.status = "Prepared";
        };


        this.gfnCheckEqual = function(fcid, resultVal, expectVal, usermsg)
        {
        	var rtn ;
        	if(resultVal === expectVal) {
        		rtn = true;
        			//trace("<sucess> check : result=[" + resultVal + "] expected=[" + expectVal +"]");
        	} else {
        		rtn = false;
        		//trace("<" +fcid + "." + usermsg + ">check failed : result=[" + resultVal + "] expected=[" + expectVal +"]");
        	}
        	return rtn;
        };

        //======================== update libCommon
        // Testcase Runner object 반환
        this.gfnReturn = function(strParam, pRtn) {

        	var runner = this.gfnGetRunner();

        	//trace("strParam==>"+ strParam);
        	runner.fvRunParam = strParam;
        	runner.fvRunflag = true;
        	//trace("runner.fvRunParam==>"+ runner.fvRunParam);
        	return pRtn;
        };

        this.gfnCheckEvent = function(obj, DatasetEvent)
        {
        	// 이벤트 케이스 등록?
        };

        var eObject = nexacro.getEnvironment();
        var gObject = nexacro.getApplication();

        //@ GlobalDataset load(Batch, TestApplication)
        this.gDatasetLoad = function(type)
        {
        	if(gObject.gdsTaskList.rowcount == 0 || type == "reset")
        	{
        		gObject.gdsTaskList.set_url("xmldata::BatchManager.xml");
        		gObject.gdsApplicationList.set_url("xmldata::BatchManager.xml");
        		gObject.gdsTaskList.load(false);
        		gObject.gdsApplicationList.load(false);
        	}
        };

        //@ titlebar text setting
        this.setTitleText = function(winId)
        {
        	var objApp = nexacro.getApplication();

        	var strTitle = "CI & AUTO TEST SYSTEM["+nexacro.getEnvironmentVariable("evProductVersion")+"::"+nexacro.getEnvironmentVariable("evBranchName")+"]";
        	var strText = nexacro.getApplication().gvTitleText;

        	if(strText[winId] == null) {
        		objApp.mainframe.set_titletext(strTitle);
        	} else {
        		objApp.mainframe.set_titletext(strTitle + strText[winId]);
        	}

        };

        //@ xml 저장위치 구하기
        this.savePath = function(path, service, name)
        {
        	var pPath = nexacro.getEnvironmentVariable("evProjectPath");
        	var gPath = nexacro.getProjectPath(); //프로젝트 소스에 정보가 있는지 확인필요

        	if(path == "Service")
        	{
        		return pPath + "/xmldata/" + service +"/"+ name;
        	}
        	else if(path == "Generate")
        	{
        		return gPath.substring(gPath.indexOf(":")+3, gPath.length) + "xmldata/" + service +"/"+ name;
        	}
        	else if(path == "History")
        	{
        		return pPath + "history";
        	}
        	else if(path == "HistoryGenerate")
        	{
        		return gPath.substring(gPath.indexOf(":")+3, gPath.length) + "history";
        	}
        	else
        	{
        		return;
        	}
        };


        //@ HTML5에서 tomcat Server위치(URL) 구하기
        this.getServerUrl = function()
        {
        	var urlPath = "";
            if (system.navigatorname == "nexacro")
        	{
        	    //var objEnv = nexacro.getEnvironment();
        		//urlPath = objEnv.services["svcUrl"].url;
        		//urlPath = nexacro.getEnvironmentVariable("evProjectPath")
        	}
        	else
        	{
        		urlPath = window.location.protocol + "//" + window.location.host + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
        	}
        	return urlPath;
        };

        //@ Grid body row size 조정
        this.setRowSize = function()
        {
        	for(var i=0; i<this.all.length; i++)
        	{
        		if(this.all[i].name.substring(0, 3) == "grd")
        		{
        			//trace(this.all[i].getRealRowSize(1));
        			this.all[i].setFormatRowProperty(1, "size", 30);
        		}
        	}
        };

        //=============================TEST API ====================

        this.execTC = function(tcid, vcid, stepid , arg) {
         	var curTC = this.tcList[tcid];
        	var rtn ;

        	if(stepid == "initialize") {
        		rtn = curTC.initialize.call(this, arg);
        		return rtn;
        	} else  if(stepid == "finalize" && vcid == "finalize()") {
        			rtn = curTC.finalize.call(this, arg);
        			return rtn;
        	} else if(stepid == "prepare" ) {
        			rtn = curTC.validator[vcid].prepare.call(this, arg);
        			return rtn;
        	} else if(stepid == "run" ) {
        		rtn = curTC.validator[vcid].run.call(this, arg);
        			return rtn;
        	}  else if(stepid == "check" ) {
        		rtn = curTC.validator[vcid].check.call(this, arg);
        			return rtn;
        	} else if(stepid == "teardown" ) {
        		rtn = curTC.validator[vcid].teardown.call(this, arg);
        			return rtn;
        	} else if(stepid == "finalize" ) {
        		rtn = curTC.validator[vcid].finalize.call(this, arg);
        			return rtn;
        	}
        };

        this.createTestDS = function (tcList, tcidx, vcid)
        {

        	if(this.isValidObject("dsTestPlan"))
        	{
        		this.dsTestPlan.clearData();
        		this.dsResult.clearData();
        	} else {
        		var obj = new Dataset("dsTestPlan", this);
        		//obj.set_serverdatasetid("dsTestPlan");
        		obj._setContents("<ColumnInfo><Column id=\"STEP_NO\" type=\"INT\" size=\"256\"/><Column id=\"ORDER_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CHECKER_NO\" type=\"INT\" size=\"256\"/><Column id=\"VC_NO\" type=\"INT\" size=\"256\"/><Column id=\"INITIALIZER_NO\" type=\"INT\" size=\"256\"/><Column id=\"TC_NO\" type=\"INT\" size=\"256\"/><Column id=\"ITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAIT_HANDLER\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECTED_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKER_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKER_RESULT2\" type=\"BLOB\" size=\"256\"/><Column id=\"TEST_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
        		this.addChild(obj.name, obj);

        		 obj = new Dataset("dsResult", this);
        		// obj.set_serverdatasetid("dsResult");
        		 obj._setContents("<ColumnInfo><Column id=\"RESULT_NO\" type=\"INT\" size=\"256\"/><Column id=\"ORDER_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"STEP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKER_NO\" type=\"INT\" size=\"256\"/><Column id=\"VC_NO\" type=\"INT\" size=\"256\"/><Column id=\"INITIALIZER_NO\" type=\"INT\" size=\"256\"/><Column id=\"TC_NO\" type=\"INT\" size=\"256\"/><Column id=\"ITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAIT_HANDLER\" type=\"STRING\" size=\"256\"/><Column id=\"EXPECTED_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKER_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKER_RESULT2\" type=\"BLOB\" size=\"256\"/><Column id=\"TEST_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
        		 this.addChild(obj.name, obj);
        	}
        	//trace("createTestDS=========");
        	for(var i=0; i < tcList.length; i++) {
        		//trace(i +":"+ tcidx+":"+ vcid);
        		if(tcidx != null) {
        			if( i != tcidx) {
        				continue;
        			}
        		}
        		var tc =  tcList[i];
        		for(x in tc)
        		{

        			this.parseTC(i, x, tc[x], vcid );
        		}
        	}
         return true;
        };

        /**
         * Creates an instance of excuteTest.
         *
         * @constructor  DATASET CREATE(dstestplan, dstestreusult) -- >
         * @author: ugis
         * @this {init}
         * @param {tc, vcid, bPopup} r The Test of the TestForm.
         */
        this.runTest = function (tcList , tcidx, vcid, bPopup)
        {
        	var runner = TestAPI.getRunner();
        	runner.executeTest();

        // 	if(tcidx == "" ) tcidx = null;
        // 	if( vcid == "" ) vcid = null;
        //
        // 	if(bPopup === undefined) bPopup = true;
        // 	if (this.fvRunner) {
        // 		//TestApplication에 있는경우 호출시 혼동이 생길수 있으므로 제약함
        // 		trace("Warnning!!! Test application Runner Mode!, it's only supported for testFormApi");
        // 		return;
        // 	}
        // 	this.status = "Appl Test Start";
        // 	//if(isNaN(tcidx)) return;
        // 	this.createTestDS(tcList, tcidx, vcid); //testplan 생성
        // 	this.arrTestItemList = new Array();
        // 	this.initStateValues();
        //
        // 	var nTestPlanCount = this.dsTestPlan.getRowCount();
        // 	for(var i = 0; i < nTestPlanCount; i++)
        // 	{
        // 		this.arrTestItemList[i] = this.dsTestPlan.getColumn(i, "STEP_NO");
        // 	}
        //
        // 	//timerSetting
        // 	this.addEventHandler("ontimer", this.ApiRunner_ontimer, this);
        // 	this.runnerSetTimer();
        // 	trace("===========Start API Runner=========");
        // 	this.status = "Appl Testing"
        // 	if(bPopup === undefined) bPopup = true;
        // 	if(bPopup) {
        // 		this.RunnerPopup(bPopup);
        // 	}
        //

        };

        this.RunnerPopup = function (bPopup)
        {
        	//if(!bPopup) return;
        	var oArg = {};
        	var oOption = {popuptype:"modal", title:"API Runner"};
        	var sPopupCallBack = "PopupCallback";
        	this.gfnOpenPopup("debugging","cmm::cmmRunnerPopup.xfdl",oArg,sPopupCallBack,oOption);
        	//this.pdivRunner.trackPopupByComponent(this.btnTestApplicationOpen, 0,30);
        }

        this.PopupCallback = function (args)
        {
        	//alert(args);
        	//trace(this.nTimerId);
        	this.killTimer(this.nTimerId);
        };
        //add Inital
        this.parseTC = function(tcidx, fid, fcList, vcid)
        {

        	if(fcList == null || fcList == undefined) {
        		//obj_dsTestCase.clearData();
        		return;
        	}
        	//trace(tcidx+":"+ fid+":"+ fcList+":"+ vcid);
        	switch(fid) {
        	case "description":
        		break;
        	case "initialize":
        		this.AddPlan(tcidx, fid, fid);
        		break;
        	case "validator":
        			vcno =0;
        			for( j in fcList)
        			{
        				vcno++;
        				if( vcid != null) {
        					if(vcid == j) {
        						this.ParseVC(tcidx,fid, j,fcList[j], vcno, vcid);
        					}
        				} else {
        					this.ParseVC(tcidx,fid, j,fcList[j], vcno, vcid);
        				}
        			}
        	break;
        	case "finalize":
        		this.AddPlan(tcidx, fid, fid);
        		break;
        	}

        };
        this.ParseVC = function (tcid,fid, fname, vcList,vcno, vcid){

        		for( k in vcList ) {
        			//trace (k);
        			if(fid == "validator" && k == "description") {
        				var descr = vcList.description;
        				//this.fnUpdateVC(vcno, descr);
        				continue;
        			}

        			this.AddPlan(tcid, fid, k, fname, vcno);
        		}
        };

        this.AddPlan = function(tcid, fid, tcfunction ,fname, vcno)
        {
        	if(tcfunction == undefined || tcfunction == null) return;
        	var item =[];

        	if(fid == "initialize" || fid == "finalize" )  {
        		vcno = undefined;
        		tcfunction = fid;
        		item[0] = tcfunction+"()";

        	} else if (fid == "validator") {
        		item[0] = fid+".['" +fname +"']."+tcfunction+"()";
        		fid= tcfunction;

        	}
        	this.dsTestPlan.set_enableevent(false);
        	for(var i=0; i<item.length;i++) {

        		var nRow = this.dsTestPlan.addRow();
        		this.dsTestPlan.setColumn(nRow, "TC_NO", tcid);
        		//this.dsTestPlan.setColumn(nRow, "VC_NO", vcno);
        		//this.dsTestPlan.setColumn(nRow, "INITIALIZER_NO", nInitNo);
        		this.dsTestPlan.setColumn(nRow, "ITEMTYPE", fid);
        		this.dsTestPlan.setColumn(nRow, "ITEM", item[i]);
        		this.dsTestPlan.setColumn(nRow, "STEP_NO", nRow);
        	}
        	this.dsTestPlan.set_enableevent(true);
        };


        //=================== Popup proto type =================
        /**
         * @class 팝업오픈
         * @param {String} sPopupId	- 팝업ID
         * @param {String} sUrl	 - 팝업URL
         * @param {String} [oArg] - 전달값
         * @param {String} [sPopupCallback] - 팝업콜백
         * @param {Object} [oOption] - 팝업옵션 <br>
         *	oOption.top : 상단 좌표 <br>
         *	oOption.left : 좌측 좌표 <br>
         *	oOption.width : 넓이 <br>
         *	oOption.height : 높이 <br>
         *	oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow) <br>
         *	oOption.layered : 투명 윈도우 <br>
         *	oOption.opacity : 투명도 <br>
         *	oOption.autosize : autosize <br>
         * @return N/A
         * @example
         * this.gfnOpenPopup(this);
         */
        this.gfnOpenPopup = function ( sPopupId, sUrl, oArg, sPopupCallback, oOption)
        {
            var objApp = pForm.gfnGetApplication();
        	var nLeft = -1;
        	var nTop = -1;
        	var nWidth = -1;
        	var nHeight = -1;
        	var bShowTitle = true;
        	var bShowStatus = false;
        	var sPopupType = "modal";
        	var bLayered = false;
        	var nOpacity = 100;
        	var bAutoSize = false;
        	var bResizable = false;
        	//var sPopupCallback = (this.gfn_isNull(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;
        	var sTitleText = "";

        	for (var key in oOption) {
               if (oOption.hasOwnProperty(key)) {
                    switch (key)
        			{
        				case "top":
        					nTop = parseInt(oOption[key]);
        					break;
        				case "left":
        					nLeft = parseInt(oOption[key]);
        					break;
        				case "width":
        					nWidth = parseInt(oOption[key]);
        					break;
        				case "height":
        					nHeight = parseInt(oOption[key]);
        					break;
        				case "popuptype":
        					sPopupType = oOption[key];
        					break;
        				case "layered":
        					bLayered = oOption[key];
        					break;
        				case "opacity":
        					nOpacity =oOption[key];
        					break;
        				case "autosize":
        					bAutoSize = oOption[key];
        					break;
        				case "titlebar":
        					if (""+oOption[key] == "false")	bShowTitle = false;
        					break;
        				case "title":
        					sTitleText = oOption[key];
        					break;
        			}
                }
            }

        	var sOpenalign = "";
        	if(nLeft == -1 && nTop == -1)
        	{
        		sOpenalign = "center middle";
        		if (system.navigatorname == "nexacro") {
        			var curX = objApp.mainframe.left;
        			var curY = objApp.mainframe.top;
        		}else{
        			var curX = window.screenLeft;
        			var curY = window.screenTop;
        		}

                nLeft   =  curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
        	    nTop    = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;

        	}else{
        		nLeft   =  this.getOffsetLeft() + nLeft;
        		nTop   =  this.getOffsetTop() + nTop;
        	}

        	if(nWidth == -1 || nHeight == -1)
        	{
        	    bAutoSize = true;
        	}

        	var objParentFrame = this.getOwnerFrame();

            if(sPopupType == "modeless")
            {
                var sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize="+bAutoSize+" titletext="+sTitleText;
        		var arrPopFrame = nexacro.getPopupFrames();

        		if (arrPopFrame[sPopupId]) {
        			if (system.navigatorname == "nexacro") {
        				arrPopFrame[sPopupId].setFocus();
        			} else {
        				arrPopFrame[sPopupId]._getWindowHandle().focus();
        			}
        		}
        		else {
        			nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight, this);
        		}
            }
        	else if(sPopupType == "modalsync")
            {
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);

        		newChild.set_dragmovetype("all");
        		newChild.set_showcascadetitletext(false);
        		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
        		newChild.set_autosize(bAutoSize);
        		newChild.set_resizable(bResizable);    //resizable 안됨
        		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
        		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
        		newChild.set_openalign(sOpenalign);
        		newChild.set_layered(bLayered);
        		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
        		system.showModalSync(newChild, objParentFrame, oArg);
        	}
        	else if(sPopupType == "modalwindow")
            {
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);

        		newChild.set_dragmovetype("all");
        		newChild.set_showcascadetitletext(false);
        		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
        		newChild.set_autosize(bAutoSize);
        		newChild.set_resizable(bResizable);    //resizable 안됨
        		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
        		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
        		newChild.set_openalign(sOpenalign);
        		newChild.set_layered(bLayered);
        		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
        		var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);
                return rtn;
        	}
            else
            {
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);

        		newChild.set_dragmovetype("all");
        		newChild.set_showcascadetitletext(false);
        		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
        		newChild.set_autosize(bAutoSize);
        		newChild.set_resizable(bResizable);    //resizable 안됨
        		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
        		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
        		newChild.set_openalign(sOpenalign);
        		newChild.set_layered(bLayered);
        		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
        		newChild.showModal(objParentFrame, oArg, this, this[sPopupCallback]);
            }
        };

        //=======================================================================================
        //=========================   runner API   ==============================================
        //=======================================================================================
        var lastState = "";
        var lastItemType = null;
        var arrNotifier = new Array();

        this.status = "Runner Idle";
        this.runnerId = -1;
        this.nTimerId = 9001;
        this.elapstime = 9;
        this.interval = 10;

        this.sAppType = "Scenario"; //DnR, Scenario
        this.bAsync = true;
        this.nAsyncStart = 0;
        this.nAsyncTimeOut = null; //Allowed range:0~35000(millisecond, default=15000)
        this.nAyncErrorcode = null; //0:next Step(default), 1:next TestCase, 2:exit TestApplication

        /**
         * @description 실행할 테스트 Itme을 정의하는 Arry 객체
        */
        this.arrTestItemList = null;
        this.fvRunParam = null; //시나리오 스텝 파라미터 여부
        this.fvRunflag = false;  // 시나리오 스텝 플래그 전달여부

        this.gStateValues = {
        	command             : null,
        	currentWaitHandler  : null,
        	currentTargetObject : null,
        	currentTCNo         : -1,
        	currentInitNo       : -1,
        	currentVCNo         : -1,
        	waitHandler     	: null,
        	targetObject    	: null,
        	tcNo            	: -1,
        	initNo          	: -1,
        	vcNo            	: -1,
        	currentItemIndex 	: -1,
        	nextItemIndex    	: 0,
        	checkValue       	: null,
        	runValue      		: null,
        	expectedValue    	: null,
        	resultCount : new Array(3)	// 0 = TC, 1 = TCInit, 2 = VC
        };

        //timerSetting
        this.runnerSetTimer =  function(nTimerId, interval) {
        	this.setTimer(this.nTimerId, this.interval);
        };

        //Exception 처리함수
        this.fnException = function (errorcode, errormsg)
        {
        	var rowIndex = this.dsResult.findRowExprNF("STEP_NO=='"+this.arrTestItemList[this.gStateValues.currentItemIndex]+"'");

        	if (this.bAsync == false)
        	{
        		errormsg = "run failed(sync)";
        	}

        	self.gfnsetLogError("fnException", errormsg);
        	this.dsResult.setColumnNF(rowIndex,"TEST_RESULT","FAIL");
        	this.gStateValues.resultCount[2].fail = this.gStateValues.resultCount[2].fail + 1;
        };

        this.monitor = function()
        {
        	 var objSample = this;
        	 var objRunner = this;

        	// 동기 해제시까지 대기
        	if (this.bAsync == false)
        	{
        		// 지정한 시간동안 비동기가 해제되지 않으면 다음 Step으로 진행하기.
        		if (this.nAsyncStart == 0)
        		{
        			self.gfnsetLogError("Info", "sync started");
        			this.nAsyncStart = new Date().getTime();
        		}
        		else
        		{
        			var now = new Date().getTime();
        			if ((now - this.nAsyncStart) > this.nAsyncTimeOut)
        			{
        				this.fnException(this.nAyncErrorcode);
        				this.setAsync(true);
        			}
        		}
        		return;
        	}
        	else
        	{
        		this.nAsyncStart = 0;
        	}

        	//trace(objRunner.status);
        	switch(objRunner.status)
        	{
             case 'Prepared' :
        			break;
             case 'Appl Testing' :
        			objRunner.status = "Item Test Start";
        			var stime = new Date();
        			var etime = null;
        			while(true) {
        				etime = new Date();
        				if (etime - stime >= this.elapstime) {
        					break;
        				}

        				var scan = this.scanItem();
        				if (scan.command == "item end")
        				{
        					objRunner.status = "Appl Test End";
        					return;
        				}

        				objRunner.status = "Item Testing";
        				scan = this.fetchItem(); // 다음 아이템을 가져온다.
        				//item 테스트
        				this.__testItem(this.arrTestItemList[scan.currentItemIndex]);

        				// 동기 해제시까지 대기
        				if (this.bAsync == false)
        				{
        					break;
        				}

        			} //end while
        			objRunner.status = "Appl Testing";
        			break;
        	 case 'Appl Test End' :
        			self.gfnsetLogError("Info", "test end(fail:"+this.gStateValues.resultCount[2].fail+")");
        			this.gStateValues.resultCount[2].fail = 0;
        			objRunner.status = "Runner Idle";
        			break;
        	}
        	lastState = objRunner.status;
        };

        this.scanItem = function ()
        {
        	this.gStateValues.currentTCNo 		 = this.gStateValues.tcNo;
        	this.gStateValues.currentInitNo		 = this.gStateValues.initNo;
        	this.gStateValues.currentVCNo 		 = this.gStateValues.vcNo;
        	this.gStateValues.currentTargetObject = this.gStateValues.targetObject;
        	this.gStateValues.currentWaitHandler  = this.gStateValues.waitHandler;

        	//마지막 Item
        	if (this.gStateValues.currentItemIndex >= this.arrTestItemList.length - 1)
        	{
        		this.gStateValues.tcNo	 = -1;
        		this.gStateValues.initNo  = -1;
        		this.gStateValues.vcNo 	 = -1;
        		this.gStateValues.command = "item end";
        		return this.gStateValues;
        	}
        	var source = this.gStateValues.currentItemIndex;
        	var target = this.gStateValues.nextItemIndex;

        	var v = null;

        	v = this.get_ColumnValue(this.arrTestItemList[target], "TC_NO");
        	if (v == undefined || v == null || v.length == 0) { v = -1; }
        	this.gStateValues.tcNo = v;

        	v = this.get_ColumnValue(this.arrTestItemList[target], "INITIALIZER_NO");
        	if (v == undefined || v == null || v.length == 0) { v = -1; }
        	this.gStateValues.initNo  = v;

        	v = this.get_ColumnValue(this.arrTestItemList[target], "VC_NO");
        	if (v == undefined || v == null || v.length == 0) { v = -1; }
        	this.gStateValues.vcNo 	 = v;

        	if (this.gStateValues.currentItemIndex == -1 || this.gStateValues.currentTCNo != this.gStateValues.tcNo)
        	{
        		this.gStateValues.command = "tc";
        		return this.gStateValues;
        	}
        	if (this.gStateValues.currentInitNo != this.gStateValues.initNo)
        	{
        		this.gStateValues.command = "initializer";
        		return this.gStateValues;
        	}
        	if (this.gStateValues.currentVCNo != this.gStateValues.vcNo)
        	{
        		this.gStateValues.command = "vc";
        		return this.gStateValues;
        	}
        	this.gStateValues.command = "same item";
        	return this.gStateValues;
        };

        this.fetchItem = function()
        {
        	var fetch = this.getStateValues();
        	fetch.currentItemIndex = fetch.nextItemIndex;
        	fetch.nextItemIndex++;
        	return fetch;
        }

        //current Status 초기화
        this.initStateValues = function()
        {
        	this.gStateValues.command			  = null;
        	this.gStateValues.currentWaitHandler  = null;
        	this.gStateValues.currentTargetObject = null;
        	this.gStateValues.currentTCNo         = -1;
        	this.gStateValues.currentInitNo       = -1;
        	this.gStateValues.currentVCNo         = -1;
        	this.gStateValues.waitHandler     	  = null;
            this.gStateValues.waitTimeout	      = null,
        	this.gStateValues.waitException       = null,
        	this.gStateValues.targetObject    	  = null;
        	this.gStateValues.tcNo            	  = -1;
        	this.gStateValues.initNo          	  = -1;
        	this.gStateValues.vcNo            	  = -1;
        	this.gStateValues.currentItemIndex 	  = -1;
        	this.gStateValues.nextItemIndex    	  = 0;
        	this.gStateValues.checkValue       	  = null;
        	this.gStateValues.runValue      	  = null;
        	this.gStateValues.expectedValue    	  = null;
        	this.gStateValues.resultCount = new Array(3);	// 0 = TC, 1 = TCInit, 2 = VC

        	for(var i = 0; i < this.gStateValues.resultCount.length; i++) {
        		this.gStateValues.resultCount[i] = { pass : 0, fail : 0 };
        	}
        	this.fvRunParam = null;
        	this.fvRunflag = false;
        };

        this.displayStateValue = function(fname)
        {

        };

        this.getStateValues = function()
        {
        	return this.gStateValues;
        }

        this.get_ColumnValue = function (rowno, colname)
        {
        	return this.dsTestPlan.getColumn(rowno, colname);
        };

        this.__testItem = function (stindex)
        {
        	var sItemType = this.get_ColumnValue(stindex , "ITEMTYPE");
        	var sItem = this.get_ColumnValue(stindex , "ITEM");
        	var sScope = this.get_ColumnValue(stindex , "SCOPE");
        	var vcno = this.get_ColumnValue(stindex , "VC_NO");
        	var initno = this.get_ColumnValue(stindex, "INITIALIZER_NO");
        	var tcno = this.get_ColumnValue(stindex , "TC_NO");
        	var sTestResult = "PASS";
        	var bTestResult = true;

        	var curPath ="this.Tab01.Tabpage1.form" ;
        	var expr = curPath + ".";	// ;

        	if (sScope == "Runner")
        	{
        		expr = "this.";
        	}

        	if ( this.sAppType == "Scenario")
        	{
        		var sTCItem = "tc";
        		sItem = sTCItem+"."+sItem;
        	}
        	else
        	{
        		sItem = this.fnMakeParam(sItem);
        	}

        	expr = expr + sItem;

         	if (sItemType == "initialize" || sItemType == "prepare")
        	{
        		this.gStateValues.runValue   = null;
        		this.gStateValues.expectedValue = null;
        	}
        	else if (sItemType == "check")
        	{
        		this.gStateValues.expectedValue = this.get_ColumnValue(stindex , "EXPECTED_RESULT");
        	}
        	else if (sItemType == "run")
        	{
        		if ((this.gStateValues.waitHandler != undefined) && (this.gStateValues.waitHandler != null) && (this.gStateValues.waitHandler != ""))
        		{
        			 this.setAsync(false, gStateValues.waitTimeout, gStateValues.waitException);
        		}

        		if (lastItemType != "run") {
        			this.gStateValues.runValue   = null;
        		}
        		this.gStateValues.expectedValue = null;
        	}

        	//이미 테스트플랜은 갖춰져 있으므로 패스..
        	var nRow = this.add_TestPlan(stindex);

        	var retValue;
        	if (this.sAppType == "Scenario")
        	{
        		var vcid 	= this.get_ColumnValue(stindex, "ITEM");
        		var sIdx = vcid.indexOf("[");
        		if(sIdx > 0 ) {
        			vcid = vcid.substring(sIdx+2, vcid.indexOf("]")-1);
        		}
        		try
        		{
        			retValue = this.excuteTC(tcno, vcid, sItemType, this.gStateValues.runValue);
        		}
        		catch(e)
        		{
        			this.fnException(1, e); //Exception Error 발생 시 실패 처리 후 다음 VC Step을 실행하기.
        		}
        	}
        	else
        	{
        		try
        		{
        			retValue = this.callEval(expr, "__testItem");
        		}
        		catch(e)
        		{
        			this.fnException(1, e); //Exception Error 발생 시 실패 처리 후 다음 VC Step을 실행하기.
        		}
        	}

        	if (sItemType == "run") {
        		this.gStateValues.runValue = retValue;
        	}
        	else if (sItemType == "check")
        	{

        		bTestResult = retValue;

        		if ((sItem != "CompareValue()") && (this.gStateValues.expectedValue != undefined) && (this.gStateValues.expectedValue !=  null))
        		{
        			this.gStateValues.checkValue = retValue;
        			bTestResult = this.isEqualValue(this.gStateValues.checkValue);
        		}

        		if (bTestResult == false)
        		{
        			this.gStateValues.resultCount[2].fail = this.gStateValues.resultCount[2].fail + 1;
        		} else {
        			this.gStateValues.resultCount[2].pass = this.gStateValues.resultCount[2].pass + 1;
        		}
        	}

        	lastItemType = sItemType;

        	this.set_TestResult(nRow, stindex, sItemType, bTestResult);

        	return retValue;
        };

        this.fnMakeParam = function(pName){

        	if (this.sAppType == "DnR") return pName;

        	var nEnd = pName.indexOf('(');
        	var sFunc =  pName.substring(0, nEnd);

        	if(this.fvRunParam != undefined || this.fvRunParam !=null) {
        		if(this.fvRunflag){
        			this.fvRunParam = this.fvRunParam + ",";
        		} else {
        			this.fvRunParam ="";
        		}
        	} else {
        		this.fvRunParam ="";
        	}

        	this.fvRunflag = false;

        	return sFunc + "(" + this.fvRunParam + "this.gStateValues.runValue)";
        }

        this.CompareValue = function()
        {
        	var SampleObject = this.getSampleObject();
        	SampleObject.fvRunner=true;

        	var sv = this.getStateValues();
        	var testResult =  nexacro.test.checkEqual(SampleObject, sv.runValue, sv.expectedValue);
        	return testResult;
        }

        this.makeResultString = function(bTestResult)
        {
        	if (bTestResult != undefined && bTestResult != null && bTestResult == true)
        	{
        		return "PASS";
        	}

        	return "FAIL";
        }



        /************************************************************************************************
         * 테스트 상태 모니터링
        ************************************************************************************************/
        this.ApiRunner_ontimer = function(obj,e)
        {
        	this.monitor();
        };

        //=========================app target setting ============
        //TestResult에 TestPlan 테스트 결과 등록
        this.add_TestPlan = function (stindex, bTestResult)
        {
        	var sv = this.getStateValues();
        	var resultNo = this.f_getDsMaxSeq(this.dsResult,"RESULT_NO");
        	var nRow = this.dsResult.addRow();

        	if ( nRow != 0)
        	{
        		resultNo = parseInt(resultNo) + 1;
        	}

        	this.dsResult.setColumn(nRow, "RESULT_NO", resultNo);
        	this.dsResult.setColumn(nRow, "ORDER_SEQ", this.get_ColumnValue(stindex, "ORDER_SEQ"));
        	this.dsResult.setColumn(nRow, "STEP_NO", this.get_ColumnValue(stindex, "STEP_NO"));
        	this.dsResult.setColumn(nRow, "CHECKER_NO", this.get_ColumnValue(stindex, "CHECKER_NO"));
        	this.dsResult.setColumn(nRow, "VC_NO", this.get_ColumnValue(stindex, "VC_NO"));
        	this.dsResult.setColumn(nRow, "INITIALIZER_NO", this.get_ColumnValue(stindex, "INITIALIZER_NO"));
        	this.dsResult.setColumn(nRow, "TC_NO", this.get_ColumnValue(stindex, "TC_NO"));
        	this.dsResult.setColumn(nRow, "ITEMTYPE", this.get_ColumnValue(stindex, "ITEMTYPE"));
        	this.dsResult.setColumn(nRow, "SCOPE", this.get_ColumnValue(stindex, "SCOPE"));
        	this.dsResult.setColumn(nRow, "ITEM", this.get_ColumnValue(stindex, "ITEM"));
        	this.dsResult.setColumn(nRow, "RESULT_TYPE", this.get_ColumnValue(stindex, "RESULT_TYPE"));
        	this.dsResult.setColumn(nRow, "WAIT_HANDLER", this.get_ColumnValue(stindex, "WAIT_HANDLER"));
        	this.dsResult.setColumn(nRow, "EXPECTED_RESULT", sv.expectedValue);

        	return nRow;
        };

        this.f_getDsMaxSeq = function(obj, col_name)
        {
        	var nMax = parseInt(obj.getMaxNF(col_name));
        	if (isNaN(nMax))
        	{
        		return 0;
        	}
        	else
        	{
        		return nMax;
        	}
        };


        this.callEval = function(expr, who)
        {
        	return eval(expr);
        };

        //====================================================

        this.excuteTC = function(tcid, vcid, stepid, arg) {
        	var app= this;
        	var rtn = app.execTC(tcid, vcid, stepid, arg);
        	return rtn;
        };



        //TestResult에 TestPlan 결과 저장
        this.set_TestResult = function (nRow, stindex, sItemType, bTestResult)
        {
        	var sv = this.getStateValues();
        	var sTestResult = this.makeResultString(bTestResult);

        	if (sItemType == "check")
        	{
        		if (this.get_ColumnValue(stindex, "ITEM") != "CompareValue()")
        		{
        			this.dsResult.setColumn(nRow, "CHECKER_RESULT", sv.checkValue);
        		}
        		else
        		{
        			this.dsResult.setColumn(nRow, "CHECKER_RESULT", sv.runValue);
        		}

        		this.dsResult.setColumn(nRow, "TEST_RESULT", sTestResult);
        	}
        };

        this.gfnsetLogError = function(methodName, msg)
        {
        	if (methodName == "Info")
        	{
        		trace("Info["+ this.gStateValues.currentItemIndex + "] "+ msg);
        		return;
        	}
        	trace("Error["+ this.gStateValues.currentItemIndex + "] "+ msg);
        }

        // this.isTestMode = function () {
        // 	return false;
        // }


        // this.setAsync = function (bFlag, nTimeOut, nErrorCode)
        // {
        // // 	this.bAsync = bFlag;
        // // 	this.nAsyncTimeOut = nTimeOut;
        // // 	this.nAyncErrorcode = nErrorCode;
        // //
        // // 	if (this.bAsync == false)
        // // 	{
        // // 		if (this.nAsyncTimeOut == undefined || this.nAsyncTimeOut == "" || this.nAsyncTimeOut == null || this.nAsyncTimeOut < 0 || this.nAsyncTimeOut > 35000)
        // // 		{
        // // 			this.nAsyncTimeOut = 15000; //Allowed range : 0~35000(millisecond, default=15000)
        // // 		}
        // //
        // // 		if (this.nAyncErrorcode == undefined || this.nAyncErrorcode == "" || this.nAyncErrorcode == null || this.nAyncErrorcode < 0 || this.nAyncErrorcode > 3)
        // // 		{
        // // 			this.nAyncErrorcode = 0; //0 : next Step(default), 1 : next TestCase, 2 : close TestApplication
        // // 		}
        // // 	}
        // // 	else
        // // 	{
        // // 		this.nAsyncTimeOut = null;
        // // 		this.nAyncErrorcode = null;
        // // 	}
        // 		var runner = null;
        // 		runner = TestAPI.getRunner();
        // 		runner.setAsync(true); //true: Async, false: Sync
        //  };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
