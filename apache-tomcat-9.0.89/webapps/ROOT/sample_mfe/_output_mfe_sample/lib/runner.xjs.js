//XJS=runner.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"lib::logger.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {
        // ----------- start : 18.12.24 added by smkim
        this.executeIncludeScript("lib::logger.xjs"); /*include "lib::logger.xjs"*/;

        var self = this;
        var TestAPI = this.gfnGetTestAPI();

        var devLogger = null;

        //----------------- begin TestAPI.RunnerBase ----------------
        if (typeof TestAPI.RunnerBase === 'undefined') {

        //------------------------------------------------------------------------------
        // Variable의 scope 관리를 위한 Context 정의
        //------------------------------------------------------------------------------
        TestAPI.gTestApplication = this;	// Test Application의 Form 객체
        TestAPI.gfnSetTestApplication = function(testAppForm) {
        	if(TestAPI.version >= 0.7)
        	if(TestAPI.DS) devLogger.trace("[WARN] Deprecated TestAPI.gfnSetTestApplication(). Use TestAPI.setTestApplication().");

        	TestAPI.setTestApplication(testAppForm);
        }
        TestAPI.setTestApplication = function(testAppForm) {
        	TestAPI.gTestApplication = testAppForm;
        }
        TestAPI.gfnGetTestApplication = function() {
        	if(TestAPI.version >= 0.7)
        	if(TestAPI.DS) devLogger.trace("[WARN] Deprecated TestAPI.gfnGetTestApplication(). Use TestAPI.getTestApplication().");

        	return TestAPI.getTestApplication();
        }
        TestAPI.getTestApplication = function() {
        	return TestAPI.gTestApplication;
        }

        if(TestAPI.version < 0.7) {
        	this.gfnSetTestApplication = function(testAppForm) {
        		TestAPI.setTestApplication(testAppForm);
        	}
        	this.gfnGetTestApplication = function() {
        		return TestAPI.getTestApplication();
        	}
        }

        TestAPI.applUrl = undefined;
        TestAPI.setTestApplicationUrl = function(sApplUrl) {
        	TestAPI.applUrl = sApplUrl;
        }

        TestAPI.getTestApplicationUrl = function() {
        	var ctx = TestAPI.getTestApplication();
        	var apContainer =  ctx.parent;
        	var appUrl = TestAPI.applUrl;
        	if(apContainer != undefined && apContainer != null) {
        		if(apContainer.name == 'Tabpage1') {
        			// trace("TestApplication url = " + apContainer.url);
        			appUrl = apContainer.url;
        		}
        	}
        	return appUrl;
        }

        TestAPI.parseApplicationUrl = function() {
        	var applInfo = {
        		url : TestAPI.getTestApplicationUrl(),
        		service : undefined,
        		filename : undefined,
        		objectName : undefined,
        		featureType : undefined,
        		featureName : undefined,
        		etc : undefined
        	};

        	if(applInfo.url == undefined) {
        		return applInfo;
        	}

        	// url을 service와 filename으로 분리
        	var tokens = applInfo.url.split("::");

        	if(tokens.length > 1) {
        		applInfo.service = tokens[0];
        		applInfo.filename = tokens[1];
        	} else {
        		applInfo.filename = tokens[0];
        	}

        	tokens = applInfo.filename.split(".");	// directory, 확장자(.xfdl) 제거
        	var filename = tokens[tokens.length - 2];

        	// filename에서 object와 item 분리
        	tokens = filename.split("_");

        	var pos = 0;	// test mode
        	switch(tokens[pos]) {
        	case "A" :	// 자동 test
        	case "M" :	// 수동 test
        		pos++;
        	}

        	// object name
        	applInfo.objectName = TestAPI.getNexacroObjectName(tokens[pos]);
        	pos++;

        	// item type & item name
        	var itemtype = undefined;
        	if(tokens[pos] < 3) {	// item type : P, M 등
        		switch(applInfo.featureName) {
        		case "P" :	itemtype = TestAPI.FT_PROPERTY;	break;
        		case "M" :	itemtype = TestAPI.FT_METHOD;	break;
        		case "E" :	itemtype = TestAPI.FT_HANDLER;	break;
        		}
        	}

        	if(itemtype != undefined) {
        		applInfo.featureType = TestAPI.FT_UNDEFINED;
        		applInfo.featureName = tokens[pos++];
        	} else {
        		applInfo.featureType = tokens[pos++];
        		applInfo.featureName = tokens[pos++];
        	}
        //	featureName = this.getObjectFeatureName(objName, featureName);

        	return applInfo;
        }

        TestAPI.getObjectTypeName = function(obj) {
        	if(!obj) {
        		return null;
        	}
        	var normalized = "" + obj;	// 변환 = [object name]
        	var objName = normalized.substring(8, normalized.length - 1);
        	return objName;
        }

        //-----------------------------------------------------------------
        // 19.10.16 smkim 추가
        //  ControlInfo 정의
        // "ComponentId:Role Path:Alias" 형태의 표현식을 구조체로 변환한다.
        //-----------------------------------------------------------------
        TestAPI.ControlInfo = function(ciDef) {
        	this.parseControlInfo(ciDef);
        };

        TestAPI.ControlInfo.prototype = {
        	ciDef : null,
        	setCiDef : function(ciDef) {
        		this.ciDef = ciDef;
        	},
        	getCiDef : function() {
        		return this.ciDef;
        	},

        	componentId : null,
        	setComponentId : function(componentId) {
        		this.componentId = componentId;
        	},
        	getComponentId : function() {
        		return this.componentId;
        	},

        	componentObj : null,
        	setComponentObj : function(comp) {
        		this.componentObj = comp;

        		var compTypeName = null;
        		if(comp) {
        			compTypeName = TestAPI.getObjectTypeName(comp);
        		}
        		this.setComponentTypeName(compTypeName);
        	},
        	getComponentObj : function() {
        		return this.componentObj;
        	},
        	componentTypeName : null,
        	setComponentTypeName : function(componentTypeName) {
        		this.componentTypeName = componentTypeName;
        	},
        	getComponentTypeName : function() {
        		return this.componentTypeName;
        	},

        	controlObj : null,
        	setControlObj : function(control) {
        		this.controlObj = control;
        	},
        	getControlObj : function() {
        		return this.controlObj;
        	},

        	itemName : null,
        	setItemName : function(itemName) {
        		this.itemName = itemName;
        	},
        	getItemName : function() {
        		return this.itemName;
        	},

        	rolePath : null,
        	setRolePath : function(rolePath) {
        		this.rolePath = rolePath;
        	},
        	getRolePath : function() {
        		return this.rolePath;
        	},
        	getStaticRolePath : function() {
        		// var spath = this.getComponentTypeName() + "." + this.rolePath.substr(this.rolePath.indexOf(".") + 1);
        		var spath = this.getComponentTypeName() + "." + this.rolePath;
        		return spath;
        	},

        	bUseAliasName : true,	// aliasName을 적용할지 여부
        	useAliasName : function(bFlag) {
        		this.bUseAliasName = bFlag;
        	},
        	isUsedAliasName : function() {
        		return this.aliasName;
        	},
        	aliasName : null,
        	setAliasName : function(aliasName) {
        		this.aliasName = aliasName;
        	},
        	getAliasName : function() {
        		if(this.isUsedAliasName() && this.aliasName) {
        			return this.aliasName;
        		}
        		// 명시된 aliasName이 없으면 rolePath로 반환
        		return this.getRolePath();
        	},
        	//chh추가 19/12/17===========================================================================================
        	//args input 예제(subcomp 대상 기준)
        		//[ tapi.VBT_NORMAL,"grd00:body.row.cell.cellcombo.comboedit:cellcombo, 0, 0"], //row, cell
        		//	[ tapi.VBT_NORMAL,"grd00:head.row.cell.subcell.cellcombo.comboedit:subcell,0, 2, 0,cellcombo"],  //row, cell, subcell
        		//[ tapi.VBT_NORMAL,"ListView00:body.cell.cellcombo.comboedit:cellcombo, 0, 0"]
        	//변환 control 출력 예)
        		//grid: ['_bodyBand']['_matrix']['_rows'][ 0]['_cells'][ 1]._subComp
        		//grd:  ['_headBand']['_matrix']['_rows'][0]['_cells'][ 2].subcells[ 1]._subComp
        		// ListView00:['_items'][ 0]['_children'][ 0]._subComp.comboedit


        	getCellControl : function(comptype, rolepath, alias ) {

        		var  arrCell = alias.split(",");
        		var  arrRole = rolepath.split(".");
        		var role = arrRole[arrRole.length - 1];
        		var cell = arrCell[0];
        		var cellControl = alias ;
        		switch(comptype) {
        			case 'Grid' :
        					if(arrRole[0] == "summary") arrRole[0] = "summ";
        					 cellControl = "['_"+arrRole[0]+"Band']['_matrix']['_"+arrRole[1]+"s']["+arrCell[1]+"]['_cells']["+arrCell[2]+"]";

        					if( role != cell ) {
        						 if(cell == "subcell") { //subcell인경우 1depth 더 분기
        							cellControl = cellControl+".subcells["+arrCell[3]+"]._subComp";
        							cell = arrCell[4]; //4번째 control부터 시작 하도록
        						 } else {
        							cellControl = cellControl+"._subComp";
        						 }
        						var subcontrol = rolepath.substr(rolepath.indexOf(cell)+cell.length+1);
        						if(subcontrol != undefined || subcontrol != null || subcontrol != "") {
        							//trace("subcontrol==>["+ subcontrol+"]")
        							if(subcontrol.length > 1 ) {
        								cellControl = cellControl+ "."+ subcontrol;
        							}
        						}
        						//trace(rolepath + "==>" + cellControl);
        					 } else {
        						if(cell == "subcell") { //subcell인경우 1depth 더 분기
        							cellControl = cellControl+".subcells["+arrCell[3]+"]";
        // 						} else if(cell == "cell") { //cell인경우는 무시
        // 							//cellControl = cellControl;

        						} else {
        							cellControl = cellControl+"._subComp";
        						}
        					 }

        		 break;
        		 case 'ListView' :
        		  //===================================================================================
        			//this.ListView00["_items"][0]["_children"][1]._subComp.comboedit
        			 cellControl = "['_items']["+arrCell[1]+"]['_children']["+arrCell[2]+"]";
        			if( role != cell) {
        					var subcontrol = rolepath.substr(rolepath.indexOf(cell)+cell.length+1);
        					//trace("subcontrol ==> "+ subcontrol);
        					if(subcontrol != undefined || subcontrol != null || subcontrol != "") {
        						cellControl = cellControl+ "._subComp."+ subcontrol;
        					} else {
        						cellControl = cellControl+"._subComp"
        					}
        			} else {
        					cellControl = cellControl+"._subComp";
        			}

        		 break;
        	}
        		//trace(ci.getComponentId() +":"+  cellControl);
        		return cellControl;
        	},
        	//=========================================================================================================
        	errorMsg : null,
        	setErrorMsg : function(errorMsg) {
        		this.errorMsg = errorMsg;
        	},
        	getErrorMsg : function() {
        		return this.errorMsg;
        	},

        	clearInfo : function() {
        		this.setComponentId(null);
        		this.setComponentObj(null);
        		this.setControlObj(null);
        		this.setItemName(null);
        		this.setAliasName(null);
        		this.setErrorMsg(null);
        	},
        	parseControlInfo : function(ciDef) {
        		this.errorMsg = null;

        		// 이정과 동일하면 기존 info 재사용
        		if(this.ciDef == ciDef) {
        			return this;
        		}

        		if(this.getControlObj()) {
        			var bIgnoreEnabled = false;	// enabled로 바꿈
        			this.clearControlStatus(bIgnoreEnabled);
        		}

        		this.setCiDef(ciDef);

        		var tokens = ciDef.split(":");

        		// id로부터 component instance를 획득
        		if(tokens.length >= 1)	{
        			this.setComponentId(tokens[0]);
        		}
        		// role에 해당하는 control object 획득
        		if(tokens.length >= 2)	{
        			var rolePath = tokens[1];
        			this.setRolePath(rolePath);

        			var itemtoken = rolePath.split(".");
        			if(itemtoken.length > 0) {
        				this.setItemName(itemtoken[0]);
        			}
        		}
        		// alias name 획득
        		if(tokens.length >= 3)	{
        			this.setAliasName(tokens[2]);
        		}

        		var form = TestAPI.getTestApplication();

        		var compId = this.getComponentId();
        		var comp = form.lookup(compId);
        		this.setComponentObj(comp);
        		this.retrieveControlObj();

        		return this;
        	},
        	retrieveControlObj : function() {
        		var form = TestAPI.getTestApplication();

        		if (this.getRolePath() != null && this.getRolePath() != "") {
        //20191112 주석처리
        //  			var controlObjPath = "form." + this.getComponentId() + "." + this.getRolePath();
        //  			this.prepareComponent();
        //  			var controlObj = eval(controlObjPath);
        //  			this.setControlObj (controlObj);
        		} else {
        			this.setControlObj (this.getComponentObj());
        		}
        	},

        	// style property의 이름을 변경한다.
        	mapStyleProperty : function(name) {
        		var vMappedStyle = name;

        		if(name.substr(0,6) == "-nexa-") {
        			vMappedStyle = name.substr(6);
        			// trace("mappedStyle : " + name + " --> " + vMappedStyle);
        		}

        // 		switch(name) {
        // 		case "-nexa-border" :	vMappedStyle = "border";	break;
        // 		case "-nexa-padding" :	vMappedStyle = "padding";	break;
        // 		case "-nexa-word-wrap":	vMappedStyle = "word-wrap";	break;
        // 		case "-nexa-icon" :		vMappedStyle = "icon";		break;
        // 		}

        		return vMappedStyle;
        	},
        	// component를 rolePath로 주어진 control 객체를 획득할 수 있는 상태로 만든다.
        	prepareComponent : function() {
        		switch(this.getComponentTypeName()) {
        		case 'Combo' :
        			var combo = this.getComponentObj();
        			combo.dropdown();
        			break;
        		};
        	},

        	status : null,
        	bUserStatus : false,
        	style : null,
        	mappedStyle : null,
        	setStyle : function(aStatus, aStyle) {
        		var bChangeStatus = false;
        		if(this.status != aStatus) {
        			bChangeStatus = true;
        		}
        		if(bChangeStatus) {
        			var bIgnoreEnabled = true;	// enabled로 바꾸지 않음
        			this.clearControlStatus(bIgnoreEnabled);
        		}

        		this.status = aStatus;
        		this.style = aStyle;
        		this.mappedStyle = this.mapStyleProperty(aStyle);

        		switch(aStatus) {
        		case "deactivate" :
        		case "disabled" :
        		case "enabled" :
        		case "focused" :
        		case "mouseover" :
        		case "readonly" :
        			this.bUserStatus = false;
        			break;
        		default :
        			this.bUserStatus = true;
        			break;
        		}
        		if(bChangeStatus) {
        			this.prepareControlStatus();
        		}
        	},
        	getStatus : function() {
        		return this.status;
        	},
        	isUserStatus : function() {
        		return this.bUserStatus;
        	},
        	getStyle : function() {
        		return this.style;
        	},
        	getMappedStyle : function() {
        		return this.mappedStyle;
        	},
        	prepareControlStatus : function() {
        		if(TestAPI.DS) devLogger.trace2("prepareControlStatus() : status = " + this.getStatus() );

        		var control = this.getControlObj();
        		var status = this.getStatus();

        		if(this.isUserStatus())
        			control._changeUserStatus(status, true);
        		else
        			control._changeStatus(status, true);
        	},
        	clearControlStatus : function(bIgnoreEnabled) {
        		var control = this.getControlObj();

        		var status = this.getStatus();

        		if(this.isUserStatus())
        			control._changeUserStatus(status, false);
        		else
        			control._changeStatus(status, false);

        		if(!bIgnoreEnabled || bIgnoreEnabled == false) {
        			control._changeStatus("enabled", true);
        		}
        	},

        };

        TestAPI.ControlInfo.prototype.constructor = TestAPI.ControlInfo;

        TestAPI.parseControlInfo = function(ciObj, ciDef)
        {
        	if(!ciObj) {
        		ciObj = new TestAPI.ControlInfo(ciDef);
        	} else {
        		ciObj.parseControlInfo(ciDef);
        	}
        	return ciObj;
        }
        //-----------------------------------------------------------------


        //-----------------------------------------------------------------
        // Test Application에 정의된 전체 TC 정보를 분석한다.
        //-----------------------------------------------------------------
        TestAPI.getNexacroObjectName = function(objName) {
        	var nexacroObjects = [
        			// Animation Object
        			"Animation", "AnimationTimeline",
        			// Component
        			"Button", "Calendar", "CheckBox", "Combo", "Edit", "FileDownload", "FileUpload",
        			"GoogleMap", "Grid", "GrouBox", "ImageViewer", "ListBox", "ListView", "MaskEdit", "Menu",
        			"Plugin", "PopupMenu", "ProgressBar", "Radio", "Sketch", "Spin", "Static", "TextArea",
        			"VideoPlayer", "VirtualFile", "WebBrowser",
        			//Container Component
        			"Div", "PopupDiv", "Tab",
        			// System Component
        			"DatePickerControl", "IconControl", "ScrollBarControl", "ScrollIndicatorControl",
        			"StatusBarControl", "TitleBarControl",
        			// Data Objects
        			"Dataset", "ColumnInfo",
        			// Misc Objects
        			"BindItem", "ExcelExportObject", "ExcelImportObject", "System",
        			//Device API
        			"Acceleration", "AudioPlayer", "AudioRecorder", "BluetoothLE", "Camera",
        			"Contact", "ContactAddress", "ContactField", "ContactOrganization", "ContactPhoto", "ContactSet",
        			"ExternalAPI", "FileDialog", "Geolocation", "ImagePicker", "LiteDBConnection", "LiteDBStatement",
        			"Network",
        		];

        	// object 이름을 MetaInfo의 이름과 일치 시킴
        	for(var i = 0; i < nexacroObjects.length; i++) {
        		var nexacroObj = nexacroObjects[i];
        		if(objName.toUpperCase() == nexacroObj.toUpperCase()) {
        			return nexacroObj;
        		}
        	}
        	return objName;
        }

        TestAPI.getObjectFeatureName = function(objName, featureName) {
        	return featureName;
        }


        TestAPI.gRunner = null;
        TestAPI.setRunner = function(runner) {
        	TestAPI.gRunner = runner;
        	// TestAPI.setLogger(runner.getLogger());
        }
        TestAPI.getRunner = function() {
        	if(TestAPI.gRunner == undefined || TestAPI.gRunner == null) {
        		// trace("----------------------------- TestAPI.getRunner() : Runner is null.");
        	}
        	return TestAPI.gRunner;
        }

        TestAPI.gfnSetRunner = function(runner) {
        	if(TestAPI.version >= 0.7)
        	if(TestAPI.DS) devLogger.trace("[WARN] Deprecated TestAPI.gfnSetRunner(). Use TestAPI.setRunner().");

        	TestAPI.setRunner(runner);
        }
        TestAPI.gfnGetRunner = function() {
        	if(TestAPI.version >= 0.7)
        	if(TestAPI.DS) devLogger.trace("[WARN] Deprecated TestAPI.gfnGetRunner(). Use TestAPI.getRunner().");

        	return TestAPI.getRunner();
        }

        TestAPI.getLogger = function() {
        	return TestAPI.getRunner().getLogger();
        }

        // Form context로 API 접근 허용
        // --- 이하 this context에 대해 동일 패턴 유지
        if(TestAPI.version < 0.7) {
        	this.gfnSetRunner = function(runner) {
        		TestAPI.setRunner(runner);
        	}
        	this.gfnGetRunner = function() {
        		return TestAPI.getRunner();
        	}
        }

        // Test Plan을 display 할지 여부
        TestAPI.bDisplayTestPlan = true;
        TestAPI.setDisplayTestPlan = function(bFlag) {
        	TestAPI.bDisplayTestPlan = bFlag;
        }
        TestAPI.isDisplayTestPlan = function() {
        	return TestAPI.bDisplayTestPlan;
        }

        // Test 결과를 display 할지 여부
        TestAPI.bDisplayTestResult = true;
        TestAPI.setDisplayTestResult = function(bFlag) {
        	TestAPI.bDisplayTestResult = bFlag;
        }
        TestAPI.isDisplayTestResult = function() {
        	return TestAPI.bDisplayTestResult;
        }

        //------------------------------------------------------------------------------

        //------------------------------------------------------------------------------
        // 현재 작업 중인 Testcase 정보 정의
        //------------------------------------------------------------------------------
        TestAPI.getVdAdaptor = function() {
        	return TestAPI.gRunner.getApplicationMonitor().getWorkingVdAdaptor();
        }
        TestAPI.getTcAdaptor = function() {
        	return TestAPI.getVdAdaptor().getTcAdaptor();
        }

        TestAPI.gfnGetValidator = function() {
        	throw "gfnGetValidator() : <<Deprecated>> Use gfnGetVdAdaptor() function.";
        }
        TestAPI.gfnGetVdAdaptor = function() {
        	if(TestAPI.version >= 0.7)
        		if(TestAPI.DS) devLogger.trace("[WARN] Deprecated TestAPI.gfnGetVdAdaptor(). Use TestAPI.getVdAdaptor().");

        	return TestAPI.getVdAdaptor();
        }
        TestAPI.gfnGetTcAdaptor = function() {
        	if(TestAPI.version >= 0.7)
        		if(TestAPI.DS) devLogger.trace("[WARN] Deprecated TestAPI.gfnGetTcAdaptor(). Use TestAPI.getTcAdaptor().");

        	return TestAPI.getTcAdaptor();
        }

        if(TestAPI.version < 0.7) {
        	this.gfnGetVdAdaptor = function() {
        		return TestAPI.getVdAdaptor();
        	}

        	this.gfnGetTcAdaptor = function() {
        		return TestAPI.getTcAdaptor();
        	}
        }


        //------------------------------------------------------------------------------

        //------------------------------------------------------------------------------
        // TestAPI 기능정의
        //------------------------------------------------------------------------------
        TestAPI.checkEqual = function(formObj, resultVal, expectVal)
        {
        	if(TestAPI.DS) {
        		var origin = TestAPI.createLoggerOrigin ("TestAPI", "checkEqual");
        		devLogger.trace2("start : resultVal=<" + resultVal + ">, expectVal=<" + expectVal + ">", origin);
        	}
        	var rtn = false;

        	if(resultVal == null || resultVal == undefined)	resultVal = "";
        	if(expectVal == null || resultVal == undefined)	expectVal = "";

        	if (typeof resultVal === 'string') {
        		if(resultVal == expectVal) rtn = true;
        	} else {
        		if(""+resultVal == ""+expectVal) rtn = true;
        	}

        	// var vdAdt = TestAPI.getVdAdaptor();
        	var step = TestAPI.getWorkingStepInfo();
        	step.setResultValue(resultVal);
        	step.setExpectedValue(expectVal);

        // 	if (vdAdt.getName() == "SingleVCVdAdaptor")
        // 	{
        // 		vdAdt.setResultValue(resultVal);
        // 		vdAdt.setExpectedValue(expectVal);
        // 		if(TestAPI.DS) devLogger.trace2("vdAdt.setExpectedValue()=<" + vdAdt.getExpectedValue() + ">", origin);
        // 	}

        	if(TestAPI.DS) devLogger.trace2("finish", origin);

        	return rtn;
        };

        //------------------------------------------------------------------------------

        //------------------------------------------------------------------------------
        // 상수 정의
        //------------------------------------------------------------------------------
        // TestAPI.OID_SYSTEM		= "system";		// system 전체
        // TestAPI.OID_ASSEMBLE	= "assemble";	// 일부 obejct들의 조합

        // define feature types : object의 하위 구성요소 형태를 인지하기 위함
        TestAPI.FT_UNDEFINED	= 0;	// 정의되지 않음
        TestAPI.FT_PROPERTY		= 1;	// object의 property
        TestAPI.FT_STATUS		= 2;	// object의 status property
        TestAPI.FT_CSS			= 4;	// object의 CSS property
        TestAPI.FT_METHOD		= 8;	// object의 method
        TestAPI.FT_HANDLER		= 16;	// object의 eventhandler
        TestAPI.FT_ETC			= 32;	// object의 기타 element
        // 19.10.16 smkim 추가
        TestAPI.FT_STYLE		= 4;	// object의 Style property(CSS와 동일하게 취급)

        // 19.10.16 smkim 추가
        // define test 객체 유형
        TestAPI.OT_OBJECT	= 1;	// 객체 자체
        TestAPI.OT_CONTROL	= 2;	// child control형 객체
        TestAPI.OT_ROLE		= 3;	// 객체를 role에서 사용

        // define notifier types : notifier 종류를 인지하기 위함
        TestAPI.NT_EH			= 1;	// normal event handler
        TestAPI.NT_EH_WAIT		= 2;	// normal event handler
        TestAPI.NT_DH_TRUE		= 11;	// true return event handler
        TestAPI.NT_DH_FALSE		= 12;	// false return event handler
        TestAPI.NT_CALLBACK		= 21;	// notify callback function
        TestAPI.NT_CB_WAIT		= 22;	// wait callback function

        // define notifier triggerring type : notifier 필수 발생 여부 정의
        TestAPI.NTT_EXCEPT		= 0;	// 제외 : 발생하면 안됨
        TestAPI.NTT_MANDATORY	= 1;	// 필수 : 반드시 발생해야 함
        TestAPI.NTT_OPTION		= 2;	// 선택 : 선택적으로 발생할 수 있음

        // define value boundary types : VC에서 test하려는 경계값 position을 인지하기 위함
        TestAPI.VBT_UNDEFINED	= 0;	// 정의되지 않음
        TestAPI.VBT_LOWER		= 1;	// 하한값 미만
        TestAPI.VBT_MIN			= 2;	// 하한값
        TestAPI.VBT_NORMAL		= 3;	// 중간값
        TestAPI.VBT_MAX			= 4;	// 상한값
        TestAPI.VBT_HIGHER		= 5;	// 상한값 초과
        TestAPI.VBT_EXCEPTION	= 6;	// exception 유발

        // define value types : object의 element가 값을 관리하는 방식을 인지하기 위함
        TestAPI.VT_NOCONSTRAINT	= 0;	// 임의의 값 입력(exception 발생 없음) ( ex : a = "123" )
        	//------ 여기부터는 VBT type에 따른 제약 위반시, 기본적으로 exception 발생하는 것이 정상
        TestAPI.VT_CONSTRAINT	= 1;	// 제약을 갖는 임의의 값 입력( ex : a = "123" )
        TestAPI.VT_RANGE		= 2;	// from ~ to 범위 내의 임의의 값 입력 (ex : min <= a <= max)
        TestAPI.VT_LIST			= 3;	// 임의 개수의 값 container (ex : add/insert/remove/... )
        TestAPI.VT_MAP			= 4;	// 고정 개수의 이름(전체 값 test 필요) (ex : a = ["a", "b", "c", ...])

        // define data types : object의 element가 취할 수 있는 data type의 종류를 정의함
        TestAPI.DT_ETC			= 0;	// 기타
        TestAPI.DT_BOOLEAN		= 1;	// boolean data = VT_NAMEDMAP : [true | false]
        TestAPI.DT_STRING		= 2;	// string data
        TestAPI.DT_NUMBER		= 3;	// numeric data
        TestAPI.DT_DATETIME		= 4;	// date + time
        TestAPI.DT_ARRAY		= 5;	// array

        // define armument types : validator가 VC를 적용하는 반복 유형을 정의함
        TestAPI.VCT_ARG_NONE	= 0;	// argument 없음. logic 중심(= default)
        TestAPI.VCT_ARG_LIST	= 1;	// 지정된 list 개수만큼 반복 수행
        TestAPI.VCT_ARG_COMBI	= 2;	// 여러개의 argument type별 값을 조합하면서 반복 수행

        // // define test automation mode
        // TestAPI.TAM_AUTO		= 0;	// 자동 : Validator(VC) + no event handler
        // TestAPI.TAM_SEMI		= 1;	// 반자동 : Validator(VC) + device API(keyboard, mouse) + event handler
        // TestAPI.TAM_MANUAL		= 2;	// 수동 : UI + event handler

        // define value
        TestAPI.VALUE_UNDEFINED		= undefined;	// 정의되지 않음
        // TestAPI.VALUE_NaN			= undefined;	// Not A Number (ex:음수의 제곱근 구하기 등) --> TestAPI.VBT_EXCEPTION와 동일
        TestAPI.VALUE_NULL			= null;			// nll value
        TestAPI.VALUE_NULL_STRING	= '';			// 0 length string

        // define application mode
        // Runner를 생성하기 전에 결정되어야 하므로 runner mode는 사용할 수 없음
        TestAPI.AM_TEST		= 1;	// Test 실행
        TestAPI.AM_ANALYZE	= 2;	// 분석 실행

        // define runner mode
        TestAPI.RUNNER_BATCH		= 1;
        TestAPI.RUNNER_APPLICATION	= 2;
        TestAPI.RUNNER_EMBEDDED		= 3;
        TestAPI.RUNNER_ANALAYZE		= 4;

        //define TestApplication status
        TestAPI.DEV_NORMAL		= 0; //정상
        TestAPI.DEV_WORK		= 1; //작업중
        TestAPI.DEV_HOLD		= 2; //작업대기

        // define 정상 logging Step 개수
        TestAPI.LOG_STEP_COUNT	= 450;	// step 개수 제한(ERROR 로그만 출력)

        //-----------------------------------------------------
        // test flow control 관리
        //-----------------------------------------------------

        // define test step item types : step을 처리할 대상별 유형을 정의함
        TestAPI.STEP_APPL	= 0;	// application
        TestAPI.STEP_TC		= 1;	// testcase
        TestAPI.STEP_VD		= 2;	// validator
        TestAPI.STEP_VC		= 3;	// vc 검증 실행

        // define step phase
        TestAPI.PHASE_CAPTURE	= 1;	// step tree 전개
        TestAPI.PHASE_TARGET	= 2;	// step node 처리
        TestAPI.PHASE_BUBBLE	= 3;	// step tree 마무리

        // define 실행 상태
        TestAPI.STATUS_READY		= 1;	// 실행 안됨
        TestAPI.STATUS_PREPARE		= 2;	// 준비 단계 처리중
        TestAPI.STATUS_RUN			= 3;	// 실행 단계 처리중
        TestAPI.STATUS_CHECK		= 4;	// 검증 단계 처리중
        TestAPI.STATUS_TEARDOWN		= 5;	// 마무리 단계 처리중
        TestAPI.STATUS_FINAL		= 6;	// 실행 종료(성공)
        TestAPI.STATUS_ABNORMAL		= 9;	// 실행 종료(실패)
        TestAPI.STATUS_ABNORMAL2	= 10;	// 실행 종료(파생 실패)

        // define test state : 테스트 진행 상태를 정의함
        // step state = step item + step phase
        TestAPI.APPL_START	= 11;	// test 시작
        TestAPI.APPL_END	= 13;	// test 종료
        // TestAPI.TC_START	= 21;
        // TestAPI.TC_END		= 23;
        // TestAPI.VD_START	= 31;
        // TestAPI.VD_END		= 33;
        // TestAPI.VC_START	= 41;
        // TestAPI.VC_RUN		= 42;
        // TestAPI.VC_END		= 43;

        // define test flow control types : 테스트 진행 상태 컨트롤 정의
        TestAPI.CF_CLOSEAPP = TestAPI.STEP_APPL; //TestApplication 종료 및 실패처리
        TestAPI.CF_NEXTTC   = TestAPI.STEP_TC;   //TC 실패처리 후 다음 TC 실행
        TestAPI.CF_NEXTVD   = TestAPI.STEP_VD;   //VD 실패처리 후 다음 VD 실행
        TestAPI.CF_NEXTVC   = TestAPI.STEP_VC;   //VC 실패처리 후 다음 VC 실행
        TestAPI.CF_NEXTSTEP = 7;				 //다음 Step 실행(default)
        TestAPI.CF_WAIT	 	= 8;				 //처리 대기
        TestAPI.CF_JUMP	 	= 9;				 //Jump Step

        if(TestAPI.version < 0.7) {
        // 	this.OID_SYSTEM		= TestAPI.OID_SYSTEM;
        // 	this.OID_ASSEMBLE	= TestAPI.OID_ASSEMBLE;

        	// define feature types : object의 하위 구성요소 형태를 인지하기 위함
        	this.FT_UNDEFINED	= TestAPI.FT_UNDEFINED;
        	this.FT_PROPERTY	= TestAPI.FT_PROPERTY;
        	this.FT_STATUS		= TestAPI.FT_STATUS;
        	this.FT_CSS			= TestAPI.FT_CSS;
        	this.FT_METHOD		= TestAPI.FT_METHOD;
        	this.FT_HANDLER		= TestAPI.FT_HANDLER;
        	this.FT_ETC			= TestAPI.FT_ETC;

        	// define notifier types : notifier 종류를 인지하기 위함
        	this.NT_EH			= TestAPI.NT_EH;
        	this.NT_DH_TRUE		= TestAPI.NT_DH_TRUE;
        	this.NT_DH_FALSE	= TestAPI.NT_DH_FALSE;
        	this.NT_CALLBACK	= TestAPI.NT_CALLBACK;
        	this.NT_CB_WAIT		= TestAPI.NT_CB_WAIT;

        	// define notifier triggerring type : notifier 필수 발생 여부 정의
        	this.NTT_EXCEPT		= TestAPI.NTT_EXCEPT;
        	this.NTT_MANDATORY	= TestAPI.NTT_MANDATORY;
        	this.NTT_OPTION		= TestAPI.NTT_OPTION;

        	// define value boundary types : VC에서 test하려는 경계값 position을 인지하기 위함
        	this.VBT_UNDEFINED	= TestAPI.VBT_UNDEFINED;
        	this.VBT_LOWER		= TestAPI.VBT_LOWER;
        	this.VBT_MIN		= TestAPI.VBT_MIN;
        	this.VBT_NORMAL		= TestAPI.VBT_NORMAL;
        	this.VBT_MAX		= TestAPI.VBT_MAX;
        	this.VBT_HIGHER		= TestAPI.VBT_HIGHER;
        	this.VBT_EXCEPTION	= TestAPI.VBT_EXCEPTION;

        	// define value types : object의 element가 값을 관리하는 방식을 인지하기 위함
        	this.VT_NOCONSTRAINT = TestAPI.VT_NOCONSTRAINT;
        		//------ 여기부터는 VBT type에 따른 제약 위반시, 기본적으로 exception 발생하는 것이 정상
        	this.VT_CONSTRAINT	= TestAPI.VT_CONSTRAINT;
        	this.VT_RANGE		= TestAPI.VT_RANGE;
        	this.VT_LIST		= TestAPI.VT_LIST;
        	this.VT_MAP			= TestAPI.VT_MAP;

        	// define data types : object의 element가 취할 수 있는 data type의 종류를 정의함
        	this.DT_ETC			= TestAPI.DT_ETC;
        	this.DT_BOOLEAN		= TestAPI.DT_BOOLEAN;
        	this.DT_STRING		= TestAPI.DT_STRING;
        	this.DT_NUMBER		= TestAPI.DT_NUMBER;
        	this.DT_DATETIME	= TestAPI.DT_DATETIME;
        	this.DT_ARRAY		= TestAPI.DT_ARRAY;

        	// define armument types : validator가 VC를 적용하는 반복 유형을 정의함
        	this.VCT_ARG_NONE	= TestAPI.VCT_ARG_NONE;
        	this.VCT_ARG_LIST	= TestAPI.VCT_ARG_LIST;
        	this.VCT_ARG_COMBI	= TestAPI.VCT_ARG_COMBI;

        // 	// define test automation mode
        // 	this.TAM_AUTO	= TestAPI.TAM_AUTO;
        // 	this.TAM_SEMI	= TestAPI.TAM_SEMI;
        // 	this.TAM_MANUAL	= TestAPI.TAM_MANUAL;

        	// define value
        	this.VALUE_UNDEFINED	= TestAPI.VALUE_UNDEFINED;
        	// this.VALUE_NaN			= TestAPI.VALUE_NaN;
        	this.VALUE_NULL			= TestAPI.VALUE_NULL;
        	this.VALUE_NULL_STRING	= TestAPI.VALUE_NULL_STRING;

        	//-----------------------------------------------------
        	// test flow control 관리
        	//-----------------------------------------------------

        	// define test step item types : step을 처리할 대상별 유형을 정의함
        	this.STEP_APPL	= TestAPI.STEP_APPL;
        	this.STEP_TC	= TestAPI.STEP_TC;
        	this.STEP_VD	= TestAPI.STEP_VD;
        	this.STEP_VC	= TestAPI.STEP_VC;

        	// define step phase
        	this.PHASE_CAPTURE	= TestAPI.PHASE_CAPTURE;
        	this.PHASE_TARGET	= TestAPI.PHASE_TARGET;
        	this.PHASE_BUBBLE	= TestAPI.PHASE_BUBBLE;

        	// define test state : 테스트 진행 상태를 정의함
        	// step state = step item + step phase
        	this.APPL_START	= TestAPI.APPL_START;
        	this.APPL_END	= TestAPI.APPL_END;
        // 	this.TC_START	= TestAPI.TC_START;
        // 	this.TC_END		= TestAPI.TC_END;
        // 	this.VD_START	= TestAPI.VD_START;
        // 	this.VD_END		= TestAPI.VD_END;
        // 	this.VC_START	= TestAPI.VC_START;
        // 	this.VC_RUN		= TestAPI.VC_RUN;
        // 	this.VC_END		= TestAPI.VC_END;
        }


        TestAPI.runNormal = true;
        TestAPI.runWork = false;
        TestAPI.runHold = false;

        TestAPI.setRunRange = function(workMode, workFlag) {
        	switch(workMode) {
        	case TestAPI.DEV_NORMAL	:
        		TestAPI.runNormal = workFlag; break;
        	case TestAPI.DEV_WORK	:
        		TestAPI.runWork = workFlag;	break;
        	case TestAPI.DEV_HOLD	:
        		TestAPI.runHold = workFlag;	break;
        	}
        }

        // test application을 어떤 목적으로 실행하는지 관리
        //	AM_TEST : test 실행,	AM_ANALYZE : 분석 실행

        TestAPI.applicationMode = TestAPI.AM_TEST;	// test mode로 실행
        // TestAPI.applicationMode = TestAPI.AM_ANALYZE;	// analyze mode로 실행
        TestAPI.orgTcInfo = undefined;

        TestAPI.setApplicationMode = function(applMode) {
        	switch(applMode) {
        	case TestAPI.AM_TEST :
        	case TestAPI.AM_ANALYZE :
        		TestAPI.applicationMode = applMode;
        		break;
        	default :
        		TestAPI.applicationMode = TestAPI.AM_TEST;
        		throw "TestAPI.setApplicationMode() : Unknown application mode - " + applMode;
        	}
        }

        TestAPI.getApplicationMode = function() {
        	return TestAPI.applicationMode;
        }

        //----------- 실제 API 호출 하도록 보완
        TestAPI.env = {
        	osName		: null,
        	setOSName : function(osName) {
        		this.osName = osName;
        	},
        	getOSName : function() {
        		if (this.osName == null) {
        			//this.osName = nexacro._getOS();
        			var osInfo = new String(system.osversion);
        			var arrOSInfo = osInfo.split(" ");
        			this.osName = arrOSInfo[0];
        // 			if 		(nexacro._SystemType == "win32")	{ this.osName = 'win'; }
        // 			else if (nexacro._SystemType == "mac")		{ this.osName = 'mac'; }
        // 			else if (nexacro._OS == "iOS")				{ this.osName = 'ios'; }
        // 			else if (nexacro._SystemType == "Linux")	{ this.osName = 'linux'; }
        // 			// 이하 확인 필요
        // 			else if (nexacro._OS == "Android")			{ this.osName = 'android'; }
        		}
        		return this.osName;
        	},

        	osVersion	: null,
        	setOSVersion : function(osVersion) {
        		this.osVersion = osVersion;
        	},
        	getOSVersion : function() {
        		if(this.osVersion == null) {
        // 			this.osVersion = nexacro._getOSVersion();	// _OSVersion;
        // 			if(this.osVersion.substring(0,7) == "Windows") {
        // 				this.osVersion = this.osVersion.substring(8) * 1.0;
        // 			}
        			var osInfo = new String(system.osversion);
        			var arrOSInfo = osInfo.split(" ");
        			this.osName = arrOSInfo[1];
        		}
        		return this.osVersion;
        	},
        	getOS : function() {
        		return this.getOSName() + "_" + this.getOSVersion();
        	},

        	browserName	: null,
        	setBrowserName : function(browserName) {
        		this.browserName = browserName;
        	},
        	getBrowserName : function() {
        		if(this.browserName == null) {
        			//this.browserName = nexacro._Browser;
        			this.browserName = system.navigatorname;
        // 			if (nexacro._Browser == "Chrome")		{ this.browserName = 'chrome'; }
        // 			else if (nexacro._Browser == "Safari" || nexacro._BrowserType == "WebKit") { this.browserName = 'safari'; }
        // 			else if (nexacro._Browser == "IE")		{ this.browserName = 'ie'; }
        // 			else if (nexacro._Browser == "Gecko")	{ this.browserName = 'moz'; }
        // 			else if (nexacro._Browser == "Opera")	{ this.browserName = 'opera'; }
        		}
        		return this.browserName;
        	},
        	browserVersion : null,
        	setBrowserVersion : function(browserVersion) {
        		this.browserVersion = browserVersion;
        	},
        	getBrowserVersion : function() {
        		if (this.browserVersion == null) {
        			//this.browserVersion = nexacro._BrowserVersion;
        			this.browserVersion = system.navigatorversion;
        		}
        		return this.browserVersion;
        	},
        	getBrowser : function() {
        		return this.getBrowserName() + "_" + this.getBrowserVersion();
        	},
        //
        // 	platformName	: null,
        // 	getPlatformName : function() {
        // 		if(this.platformName == null) {
        // 			this.platformName = "nx17";
        // 		}
        // 		return this.platformName;
        // 	},
        // 	platformVersion	: null,
        // 	getPlatformVersion : function() {
        // 		if (this.platformVersion == null) {
        // 			this.platformVersion = "";
        // 		}
        // 		return this.platformVersion;
        // 	}
        }

        TestAPI.getEnv = function() {
        	if(TestAPI.getApplicationMode() == TestAPI.AM_ANALYZE) {
        		return TestAPI.getEmulatedEnv();
        	}
        	return TestAPI.env;
        }

        // analyzer에서 tested platform을 emulation하기 위한 용도
        TestAPI.emulatedEnv = null;

        TestAPI.setEmulatedEnv = function(env) {
        	TestAPI.emulatedEnv = env;
        }

        TestAPI.getEmulatedEnv = function() {
        	if(TestAPI.emulatedEnv == null) {
        		TestAPI.emulatedEnv = TestAPI.env;
        	}
        	return TestAPI.emulatedEnv;
        }


        //=========================================================================
        //	StepInfo 정의
        //=========================================================================
        TestAPI.StepInfo = function(aItemType, aTargetObj, aRefValue) {
        	this.setItemType(aItemType);
        	this.setTargetObject(aTargetObj);
        	this.setRefValue(aRefValue);

        	// 상태 초기화
        	this.setStepStatus(TestAPI.STATUS_READY);	// 현재 진행중인 처리 상태
        	this.setStatus(TestAPI.STATUS_READY);		// 최종 처리 상태
        	this.setPassed(true);
        }

        TestAPI.StepInfo.prototype = {
        	// Step List 식별자 : 전체 step에 대한 Direct sequential access 위함
        	stepIndex : -1,
        	setStepIndex : function(aStepIndex) {
        		this.stepIndex = aStepIndex;
        	},
        	getStepIndex : function() {
        		return this.stepIndex;
        	},

        	//------------------------------------
        	// make double linked tree
        	level : -1,
        	setLevel : function(aLevel) {
        		this.level = aLevel;
        	},
        	getLevel : function() {
        		return this.level;
        	},

         	// Step Hierarchical access 관리
        	parentStepIndex : -1,
        	setParentStepIndex : function(aParentStepIndex) {
        		this.parentStepIndex = aParentStepIndex;
        	},
        	getParentStepIndex : function() {
        		return this.parentStepIndex;
        	},

        	childStepIndex : -1,
        	setChildStepIndex : function(aChildStepIndex) {
        		this.childStepIndex = aChildStepIndex;
        	},
        	getChildStepIndex : function() {
        		return this.childStepIndex;
        	},

        	nextStepIndex : -1,
        	setNextStepIndex : function(aNextStepIndex) {
        		this.nextStepIndex = aNextStepIndex;
        	},
        	getNextStepIndex : function() {
        		return this.nextStepIndex;
        	},

        	// Step이 영향을 미치는 마지막 step node 관리
        	endStepIndex : -1,
        	setEndStepIndex : function(aEndStepIndex) {
        		this.endStepIndex = aEndStepIndex;
        	},
        	getEndStepIndex : function() {
        		return this.endStepIndex;
        	},

        	// target object의 유형
        	itemType	: null,
        	setItemType: function(aItemType) {
        		this.itemType = aItemType;
        	},
        	getItemType : function() {
        		return this.itemType;
        	},
        	getItemTypeName : function() {
        		switch(this.itemType) {
        		case TestAPI.STEP_APPL :
        			return "AP";
        		case TestAPI.STEP_TC :
        			return "TC";
        		case TestAPI.STEP_VD :
        			return "VD";
        		case TestAPI.STEP_VC :
        			return "VC";
        		}
        	},

        		// object / feature 정보 관리
        	objectName : undefined,
        	setObjectName : function(objName) {
        		this.objectName = objName;
        	},
        	getObjectName : function() {
        		return this.objectName;
        	},

        	featureType : undefined,
        	setFeatureType : function(featureType) {
        		this.featureType = featureType;
        	},
        	getFeatureType : function() {
        		return this.featureType;
        	},

        	featureName : undefined,
        	setFeatureName : function(featureName) {
        		this.featureName = featureName;
        	},
        	getFeatureName : function() {
        		return this.featureName;
        	},

        	// target object : tc_adator, vd_adaptor 등
        	targetObj		: null,
        	setTargetObject : function(aTargetObj) {
        		this.targetObj = aTargetObj;
        	},
        	getTargetObject : function() {
        		return this.targetObj;
        	},

        	// target object의 식별자 : tc_no, vd_no 등
        	targetNo		: null,
        	setTargetNo : function(aTargetNo) {
        		this.targetNo = aTargetNo;
        	},
        	getTargetNo : function() {
        		return this.targetNo;
        	},

        	// target object의 보조 식별자 : vc_index 등
        	refValue	: null,
        	setRefValue : function(aRefValue) {
        		this.refValue = aRefValue;
        	},
        	getRefValue : function() {
        		return this.refValue;
        	},

        	desc : null,
        	setDescription : function(desc) {
        		this.desc = desc;
        	},
        // 	getDescription : function() {
        // 		return this.desc;
        // 	},
        	message : null,
        	setMessage : function(message) {
        		this.message = message;
        	},
        	getMessage : function() {
        		return this.message;
        	},
        	// 현재 실행 단계 관리 : ready -> start -> run -> stop
        	status : null,
        	setStatus : function(status) {
        		this.status = status;
        	},
        	getStatus : function() {
        		return this.status;
        	},
        	getStatusName : function(status) {
        		switch(status) {
        		case TestAPI.STATUS_READY		: return "READY";		// 실행 안됨
        		case TestAPI.STATUS_PREPARE		: return "PREPARE";		// 준비 단계 처리중
        		case TestAPI.STATUS_RUN			: return "RUN";			// 실행 단계 처리중
        		case TestAPI.STATUS_CHECK		: return "CHECK";		// 실행 단계 처리중
        		case TestAPI.STATUS_TEARDOWN	: return "TEARDOWN";	// 마무리 단계 처리중
        		case TestAPI.STATUS_FINAL		: return "FINAL";		// 실행 종료(성공)
        		case TestAPI.STATUS_ABNORMAL	: return "ABNORMAL";	// 실행 종료(실패)
        		case TestAPI.STATUS_ABNORMAL2	: return "ABNORMAL2";	// 실행 종료(파생 실패)
        		default : return "Unknown Step Status : " + status;
        		}
        	},

        	getFlowControlName : function(flowControlType) {
        		switch(flowControlType) {
        		case TestAPI.CF_NEXTSTEP	: return "NEXTSTEP"; //다음 Step 실행(default)
        		case TestAPI.CF_NEXTVC		: return "NEXTVC";   //VC 실패처리 후 다음 VC 실행
        		case TestAPI.CF_NEXTVD		: return "NEXTVD";   //VD 실패처리 후 다음 VD 실행
        		case TestAPI.CF_NEXTTC		: return "NEXTTC";   //TC 실패처리 후 다음 TC 실행
        		case TestAPI.CF_CLOSEAPP	: return "CLOSEAPP"; //TestApplication 종료 및 실패처리
        		case TestAPI.CF_WAIT		: return "WAIT";	 //처리 대기
        		case TestAPI.CF_JUMP		: return "JUMP";	 //처리 대기
        		default : return "Unknown Flow Control Type : " + flowControlType;
        		}
        	},

        	// item type의 진행중인 처리 단계 관리
        	stepStatus : null,
        	setStepStatus : function(step) {
        		this.stepStatus = step;
        	},
        	getStepStatus : function() {
        		return this.stepStatus;
        	},
        	// 최종 처리 step 관리
        	step : null,
        	setStep : function(step) {
        		this.step = step;
        	},
        	getStep : function() {
        		return this.step;
        	},

        	// 비정상 발생 phase 관리 : 비정상 작업이 발생한 step을 기록
        	abnormalStepState : 0,
        	setAbnormalStepState : function(abnormalStepState) {
        		this.abnormalStepState = abnormalStepState;
        		this.setFailed();
        	},
        	getAbnormalStepState : function() {
        		return this.abnormalStepState;
        	},
        	clearAbnormalStepState : function() {
        		this.abnormalStepState = 0;
        		this.bPassed = true;
        	},

        	// 초기화 작업 실패 여부
        	bInitializeFailed : null,
        	setInitializeFailed : function() {
        		this.bInitializeFailed = true;
        		this.setFailed();
        		this.setStatus(TestAPI.STATUS_ABNORMAL);
        	},
        	isInitializeFailed : function() {
        		if(this.bInitializeFailed == true) {
        			return true;
        		}
        		return false;
        	},

        	// step 상태 관리 : 정상 처리 여부
        	bPassed : true,
        	setPassed : function(flag) {
        		this.bPassed = flag;
        	},
        	setFailed : function() {
        		this.bPassed = false;
        	},
        	isPassed : function() {
        		return this.bPassed;
        	},

        	auxData : null,	// 보조 data
        	setAuxData : function(auxData) {
        		this.auxData = auxData;
        	},
        	getAuxData : function(auxData) {
        		return this.auxData;
        	},

        	execute : function() {
        		var runner = TestAPI.getRunner();
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "execute");
        			var devLogger = runner.getDevLogger();
        			var taskName = "";

        			if(this.getItemType() == TestAPI.STEP_VC) {
        				var vdAdt = this.getTargetObject();
        				var tfnl = vdAdt.getTaskFlowNameList();
        				if(tfnl != null && tfnl.hasNext() == true) {
        					// task 실행 구간에 있을 때에만 display
        					var index = tfnl.getPosition() + 1;
        					if(index == tfnl.size()) {
        						index--;
        					}
        					taskName = " <task=" + tfnl.get(index) + ">";
        				}
        			}

        			devLogger.trace("\n\n[" + this.getItemTypeName()
        				+ " : " + this.getStatusName(this.getStatus())
        				+ "] " + this.getDescription()
        				+ taskName, origin, this);
        		}

        		var controlFlow = TestAPI.CF_NEXTSTEP;

        		switch(this.getStepStatus()) {
        		case TestAPI.STATUS_READY :		// 실행 안됨
        			this.setStepStatus(TestAPI.STATUS_PREPARE);	// touched
        			// keep going

        		case TestAPI.STATUS_PREPARE :		// 준비 단계 처리중
        			controlFlow = this._prepare();

        			// prepare 재시도 방지
        			this.setStepStatus(TestAPI.STATUS_RUN);

        			if (runner.isWait()) {
        				break;
        			}
        			if (controlFlow != TestAPI.CF_NEXTSTEP) {
        				break;
        			}
        			// keep going

        		case TestAPI.STATUS_RUN :		// 실행 단계 처리중
        			controlFlow = this._run();
        			if (runner.isWait()) {
        				break;
        			}
        			if (controlFlow != TestAPI.CF_NEXTSTEP) {
        				break;
        			}
        			this.setStepStatus(TestAPI.STATUS_CHECK);
        			// keep going

        		case TestAPI.STATUS_CHECK :		// 결과 검증 단계 처리중
        			controlFlow = this._check();

        			// check 재시도 방지
        			this.setStepStatus(TestAPI.STATUS_TEARDOWN);

        			if (runner.isWait()) {
        				break;
        			}
        			if (controlFlow != TestAPI.CF_NEXTSTEP) {
        				break;
        			}
        			// keep going

        		case TestAPI.STATUS_TEARDOWN :		// 마무리 단계 처리중
        			if(TestAPI.DS) devLogger.trace("call stop() : ["
        				+ this.getItemTypeName() + "] " + this.getDescription(), origin);

        			controlFlow = this._teardown(controlFlow, false);
        			// teardown 재시도 방지
        			this.setStepStatus(TestAPI.STATUS_FINAL);

        			if (runner.isWait()) {
        				break;
        			}
        			if (controlFlow != TestAPI.CF_NEXTSTEP) {
        				break;
        			}
        			// keep going

        		case TestAPI.STATUS_FINAL :		// 실행 종료(성공)
        			if(TestAPI.DS) devLogger.trace("call final() : ["
        				+ this.getItemTypeName() + "] " + this.getDescription(), origin);

        			controlFlow = this._final();
        			break;;
        		}
        		// return TestAPI.CF_WAIT;
        		return controlFlow;
        	},

        	getNextStep : function() {
        		var runner = TestAPI.getRunner();
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "getNextStep");
        			var devLogger = runner.getDevLogger();
        		}

        		var am = runner.getApplicationMonitor();
        		var nextStep = null

        		if (this.getStepIndex() < am.getEndStepIndex()) {
        			var nextPos = am.stepList.getPosition() + 1;

        			if (nextPos < am.stepList.size()) {
        				nextStep = am.stepList.get(nextPos);

        				if(TestAPI.DS) devLogger.trace("next step index = "  + nextStep.getStepIndex()
        						+ " for " + am.getEndStepIndex()
        						+ " :: curr level = " + this.getLevel()
        						+ ", next level = " + nextStep.getLevel(), origin, this);
        			}
        		}

        		return nextStep;
        	},

        	getParentStep : function() {
        		var runner = TestAPI.getRunner();
        		var am = runner.getApplicationMonitor();
        		var step = null
        		var parentIndex = this.getParentStepIndex();

        		if(parentIndex >= 0) {
        			step = am.getStepList().get(parentIndex);
        		}
        		return step;
        	},


        	_prepare : function() {
        		var runner = TestAPI.getRunner();

        		this.setStatus(TestAPI.STATUS_PREPARE);
        		this.setStep("prepare");

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "_prepare");
        			var devLogger = runner.getDevLogger();
        			devLogger.trace("start", origin, this);
        		}

        		var controlFlow = this.prepare();

        // 		var logger = runner.getLogger();
        // 		logger.stepLog(this, true, "");	// 성공 기록

        		if(TestAPI.DS) devLogger.trace("finish", origin, this);

        		return controlFlow;
        	},

        	_run : function() {
        		var runner = TestAPI.getRunner();

        		this.setStatus(TestAPI.STATUS_RUN);
        		this.setStep("run");

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "_run");
        			var devLogger = runner.getDevLogger();
        			devLogger.trace("start", origin, this);
        		}

        		var controlFlow = this.run();

        		if(TestAPI.DS) devLogger.trace("finish", origin, this);
        		return controlFlow;
        	},

        	_check : function() {
        		var runner = TestAPI.getRunner();

        		this.setStatus(TestAPI.STATUS_CHECK);
        		this.setStep("check");

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "_check");
        			var devLogger = runner.getDevLogger();
        			devLogger.trace("start", origin, this);
        		}

        		var controlFlow = this.check();

        // 		var logger = runner.getLogger();
        // 		logger.stepLog(this, true, "");	// 성공 기록

        		if(TestAPI.DS) devLogger.trace("finish", origin, this);

        		return controlFlow;
        	},

        	_teardown : function(controlFlow, bCheck) {
        		this.setStatus(TestAPI.STATUS_TEARDOWN);
        		this.setStep("teardown");

        		var runner = TestAPI.getRunner();
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "_teardown");
        			var devLogger = runner.getDevLogger();
        			devLogger.trace("start - [" + this.getItemTypeName() + "]", origin, this);
        		}

        		// var controlFlow =
        		this.teardown();

        		controlFlow = this.bubble(controlFlow, bCheck, true);

        // 		var logger = runner.getLogger();
        // 		logger.stepLog(this, true, "");	// 성공 기록

        		if(TestAPI.DS) devLogger.trace("finish : next controlFlow = "
        			+ this.getFlowControlName(controlFlow), origin, this);

        		return controlFlow;
        	},

        	_final : function() {
        		var runner = TestAPI.getRunner();

        		this.setStep("final");

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "_final");
        			var devLogger = runner.getDevLogger();
        			devLogger.trace("start", origin, this);
        		}

        		var nextStep = this.getNextStep();
        		if(nextStep != null && nextStep.getLevel() == this.getLevel()) {
        			if(TestAPI.DS) devLogger.trace("continue sibling step["
        				+ this.getItemType() + "]", origin);
        		} else {
        // 			if (nextStep != null) {
        // 				if(TestAPI.DS) devLogger.trace("call last bubble : this=[" + this.getItemType()
        // 					+ "]", origin, this);
        // 			} else {
        				if(TestAPI.DS) devLogger.trace("call bubble : this=[" + this.getItemType()
        					+ "], next=[" + nextStep.getItemType() + "]", origin, this);

        				var parentStep = this.getParentStep();
        				if (parentStep == null) {
        					return TestAPI.CF_CLOSEAPP;
        				}
        				var controlFlow = TestAPI.CF_NEXTSTEP;
        				switch(nextStep.getLevel()) {
        				case TestAPI.STEP_TC :	controlFlow = TestAPI.CF_NEXTTC;	break;
        				case TestAPI.STEP_VD :	controlFlow = TestAPI.CF_NEXTVD;	break;
        				case TestAPI.STEP_VC :	controlFlow = TestAPI.CF_NEXTVC;	break;
        				}

        				controlFlow = this.bubble(controlFlow, true, true);
        				if(controlFlow == TestAPI.CF_CLOSEAPP) {
        					return controlFlow;
        				}
        			// }
        		}

        		var am = runner.getApplicationMonitor();
        		nextStep = am.fetchStep(this);

        		return TestAPI.CF_WAIT;
        	},

        	// 성공 처리
        	bubble : function() {
        		var runner = TestAPI.getRunner();
        		this.setStep("bubble");

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "bubble");
        			var devLogger = runner.getDevLogger();
        			devLogger.trace("start : [" + this.getItemTypeName() + "]", origin, this);
        		}

        		var am = runner.getApplicationMonitor();
        		var nextStepIndex = this.getNextStepIndex();
        		if(nextStepIndex > 0) {
        			return am.jumpStepByIndex(nextStepIndex);
        		}

        		var parentStep = this.getParentStep();
        		while(parentStep != null) {
        			parentStep.check();
        			parentStep.teardown();
        			parentStep.setStepStatus(TestAPI.STATUS_FINAL);

        			nextStepIndex = parentStep.getNextStepIndex();
        			if(nextStepIndex > 0) {
        				return am.jumpStepByIndex(nextStepIndex);
        			}

        			parentStep = parentStep.getParentStep();
        		}
        		if(parentStep == null) {
        			return TestAPI.CF_CLOSEAPP;
        		}

        		return TestAPI.CF_WAIT;
        	},

        	abnormal : function(controlFlow, error_msg) {
        		var runner = TestAPI.getRunner();
        		var logger = runner.getLogger();

        		logger.stepLog(this, false, error_msg);	// 실패 기록

        		var am = runner.getApplicationMonitor();
        		var nextStepIndex = -1;

        		if(controlFlow == null) {
        			controlFlow == TestAPI.CF_NEXTSTEP;
        		}

        		if(controlFlow == TestAPI.CF_NEXTSTEP) {
        			// trace ("abnormal : status = " + this.getStatusName(this.getStatus()));

        			//----------------------------------------
        			// isWait()에서 호출한 경우 CF_NEXTSTEP 반환하면 무한loop 발생
        			//----------------------------------------
        			if(runner.bWait == true) {
        				return TestAPI.CF_WAIT;
        			}

        			//----------------------------------------
        			// check에서 오류 발생시 WAIT 반환하면 teardown 처리 못함
        			//----------------------------------------
        			return TestAPI.CF_NEXTSTEP;
        		}

        // 		this.setFailed();	// 실패 처리
        // 		this.setStatus(TestAPI.STATUS_ABNORMAL);
        		this.teardown();

        		if(this.getItemType() == controlFlow) {
        			nextStepIndex = this.getNextStepIndex();
        			if(nextStepIndex > 0) {
        				return am.jumpStepByIndex(nextStepIndex);
        			}
        		}

        		var parentStep = this.getParentStep();

        		while(parentStep != null) {
        			parentStep.setFailed();
        			parentStep.setStatus(TestAPI.STATUS_ABNORMAL2);
        			parentStep.teardown();
        			parentStep.setStepStatus(TestAPI.STATUS_FINAL);

        			if(controlFlow == TestAPI.CF_NEXTSTEP) {
        				nextStepIndex = this.getNextStepIndex();
        				if(nextStepIndex < 0) {
        					nextStepIndex = parentStep.getNextStepIndex();
        					if(nextStepIndex > 0) {
        						return am.jumpStepByIndex(nextStepIndex);
        					}
        				}
        				parentStep = parentStep.getParentStep();
        				continue;
        			}

        			if(parentStep.getItemType() <= controlFlow) {
        				nextStepIndex = parentStep.getNextStepIndex();
        				if(nextStepIndex > 0) {
        					return am.jumpStepByIndex(nextStepIndex);
        				}
        			}
        			parentStep = parentStep.getParentStep();
        		}
        		if(parentStep == null) {
        			// App 종료 처리
        			var apStep = am.getStepList().get(0);
        			if(apStep.isCalledListener() != true) {
        				apStep.teardown();
        			}
        			return TestAPI.CF_CLOSEAPP;
        		}

        		if(TestAPI.DS) devLogger.trace("finish", origin);

        		return TestAPI.CF_WAIT;	// next step으로 이동
        	},

        	callStepListener : function(stepLevel) {
        		var runner = TestAPI.getRunner();
        		var stepListener = runner.getStepListener();
        		var am = runner.getApplicationMonitor();

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("StepInfo", "callStepListener");
        			var devLogger = runner.getDevLogger();
        			devLogger.trace("start : notify listener level=" + am.getNotifyListenerLevel()
        				+ ", step level=" + stepLevel, origin);
        		}

        		if (stepListener != null) {
        			if(am.getNotifyListenerLevel() >= stepLevel) {
        				if(TestAPI.DS) devLogger.trace("call listener", origin);

        				if(this.getLevel() == 0) {
        					// 한번만 call 하도록 filter
        					if(this.isCalledListener() == true) {
        						return;
        					}
        					this.bCalledListener = true;
        				}
        				var context = TestAPI.getTestApplication();
        				stepListener.call(context, this);
        			}
        		} else {
        			if(TestAPI.DS) devLogger.trace("listener is not defined.", origin);
        		}
        	},

        }
        TestAPI.StepInfo.prototype.constructor = TestAPI.StepInfo;

        //=========================================================================
        //	Application Step 정의
        //=========================================================================
        TestAPI.APStep = function() {
        	TestAPI.StepInfo.call(this, TestAPI.STEP_APPL, TestAPI.getTestApplication(), -1);
        }

        TestAPI.APStep.prototype = Object.create(TestAPI.StepInfo.prototype, {
        	bCalledListener : {
        		value : null,
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	isCalledListener : {
        		value : function() {
        			if (this.bCalledListener == true) {
        				return true;
        			}
        			return false;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getDescription : {
        		value : function() {
        			if (this.desc == null) {
        				this.desc = "Test Application";
        			}
        			return this.desc;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	prepare : {
        		value : function() {
        			// this.setStatus(TestAPI.STATUS_RUN);

        			if(TestAPI.getApplicationMode() == TestAPI.AM_ANALYZE) {
        				var applInfo = TestAPI.parseApplicationUrl();

        				this.setObjectName(applInfo.objectName);
        				this.setFeatureType(applInfo.featureType);
        				this.setFeatureName(applInfo.featureName);
        			}

        			return TestAPI.CF_NEXTSTEP;	// touched
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	run : {
        		value : function() {
        			this.setStep("start");

        			var runner = TestAPI.getRunner();
        			var am = runner.getApplicationMonitor();

        			var nextStep = am.fetchStep(this);

        			var logger = runner.getLogger();
        			logger.stepLog(this, true, "");	// 성공 기록
        			this.setMessage("");

        			// this.setStatus(TestAPI.STATUS_CHECK);
        			return TestAPI.CF_WAIT;	// TC 실행
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	check : {
        		value : function() {
        			// this.setStatus(TestAPI.STATUS_TEARDOWN);
        			return TestAPI.CF_NEXTSTEP;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	teardown : {
        		value : function() {
        			this.setStep("end");

        			var runner = TestAPI.getRunner();
        			var am = runner.getApplicationMonitor();
        			var logger = runner.getLogger();

        			var controlFlow = TestAPI.CF_CLOSEAPP;
        			var	bFinal = false;
        			var applCheck = false;

        			if(this.isInitializeFailed()) {
        			} else {
        				bFinal = true;
        				if(am.getFailCount() == 0) {
        					applCheck = true;
        					// this.setStatus(TestAPI.STATUS_FINAL);
        				} else {
        					this.setStatus(TestAPI.STATUS_ABNORMAL2);
        				}
        			}

        			this.setPassed(applCheck);

        			var tcCount = am.getSuccCount() + am.getFailCount();
        			if(tcCount > 0) {
        				var message =  "성공 " + am.getSuccCount()
        					+ " TCs, 실패 "	+ am.getFailCount() + " TCs.";
        				logger.stepLog(this, applCheck, message);
        			}


        			if(this.bCalledListener != true) {
        				am.finalize();
        				this.callStepListener(TestAPI.STEP_APPL);
        			}

        			return TestAPI.CF_CLOSEAPP;	// Test 종료
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        } );

        TestAPI.APStep.prototype.constructor = TestAPI.APStep;

        //=========================================================================
        //	Testcase StepInfo 정의
        //=========================================================================
        TestAPI.TCStep = function(aTcAdt, aTcIndex) {
        	TestAPI.StepInfo.call(this, TestAPI.STEP_TC, aTcAdt, aTcIndex);
        }

        TestAPI.TCStep.prototype = Object.create(TestAPI.StepInfo.prototype, {
        	getDescription : {
        		value : function() {
        			if (this.desc == null) {
        				var tcAdt = this.getTargetObject();
        				this.desc = "tc[" + tcAdt.getTcIndex() + "]";;
        			}
        			return this.desc;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	prepare : {
        		value : function() {
        			var runner = TestAPI.getRunner();

        			var tcAdt = this.getTargetObject();

        			if(TestAPI.getApplicationMode() == TestAPI.AM_ANALYZE) {
        				var defObj = tcAdt.getDefObject();
        				var parentStep = this.getParentStep();

        				if(defObj.metadata != undefined) {
        					var tcMetadata = defObj.metadata;

        					this.setObjectName(tcMetadata.objectId);
        					this.setFeatureType(tcMetadata.featureType);
        					this.setFeatureName(tcMetadata.elementName);
        				}
        				if(this.getObjectName() == undefined || this.getObjectName() == null) {
        					this.setObjectName(parentStep.getObjectName());
        				}
        				if(this.getFeatureType() == undefined || this.getFeatureType() == null) {
        					this.setFeatureType(parentStep.getFeatureType());
        				}
        				if(this.getFeatureName() == undefined || this.getFeatureName() == null) {
        					this.setFeatureName(parentStep.getFeatureName());
        				}
        			}

        			var am = runner.getApplicationMonitor();
        			am.setWorkingTcAdaptor(tcAdt);

        			var ret = tcAdt.initialize(this);

        			if(ret == false || tcAdt.isAbnormalTerminated()) {
        				// added 19.04.12 by smkim
        				this.setInitializeFailed();
        				return this.abnormal(TestAPI.CF_NEXTTC, this.getMessage());
        				//------------------------------
        			}

        			// this.setStatus(TestAPI.STATUS_RUN);
        			return TestAPI.CF_NEXTSTEP;	// fetch VD
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	run : {
        		value : function() {
        			var runner = TestAPI.getRunner();
        			var am = runner.getApplicationMonitor();

        			var nextStep = am.fetchStep(this);	// fetch Validator

        			// this.setStatus(TestAPI.STATUS_CHECK);
        			return TestAPI.CF_WAIT;				// VD 실행
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	check : {
        		value : function() {
        			this.setStatus(TestAPI.STATUS_TEARDOWN);
        			return TestAPI.CF_NEXTSTEP;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	teardown : {
        		value : function() {
        			var runner = TestAPI.getRunner();
        			var am = runner.getApplicationMonitor();

        			var controlFlow = TestAPI.CF_NEXTSTEP;
        			var bInitialized = true;
        			var bFinal = false;
        			var tcCheck = false;

        			var tcAdt = this.getTargetObject();

        			// added 19.04.12 by smkim
        			if(this.isInitializeFailed()) {
        				// bInitialized = false;	// 초기화 무관하게 무조건 수행
        				controlFlow = TestAPI.CF_NEXTTC;
        			} else {
        				bFinal = true;
        			}
        			if(bInitialized == true) {
        				tcAdt.finalize(this);

        				if(this.isInitializeFailed() == false && tcAdt.getFailCount() == 0) {
        					tcCheck = true;	// 성공
        					// this.setStatus(TestAPI.STATUS_FINAL);
        				} else {
        					this.setStatus(TestAPI.STATUS_ABNORMAL2);
        				}
        			}

        			this.setPassed(tcCheck);

        			// 상위 step에 test 결과 반영
        			if(bFinal && tcCheck) {
        				am.increaseSuccCount();
        			} else {
        				am.increaseFailCount();
        			}
        			var vdCount = tcAdt.getSuccCount() + tcAdt.getFailCount();
        			var logger = runner.getLogger();

        			if(vdCount > 0) {
        				var message = "성공 " + tcAdt.getSuccCount()
        					+ " VDs, 실패 " + tcAdt.getFailCount() + " VDs";

        				logger.stepLog(this, tcCheck, message);
        			} else {
        				logger.stepLog(this, true, "");
        			}

        			this.callStepListener(TestAPI.STEP_TC);
        			return controlFlow;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	finalize : {
        		value : function() {
        			return TestAPI.CF_NEXTSTEP;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        } );

        TestAPI.TCStep.prototype.constructor = TestAPI.TCStep;

        //=========================================================================
        //	Validator StepInfo 정의
        //=========================================================================
        TestAPI.VDStep = function(aVdAdt, aVdIndex) {
        	TestAPI.StepInfo.call(this, TestAPI.STEP_VD, aVdAdt, aVdIndex);
        }

        TestAPI.VDStep.prototype = Object.create(TestAPI.StepInfo.prototype, {
        	getDescription : {
        		value : function() {
        			var vdAdt = this.getTargetObject();
        			if (this.desc == null) {
        				this.desc = vdAdt.getId();
        			}
        			if(vdAdt.getRepeatCount() > 1) {
        				return this.desc + "[" + vdAdt.getRepeatedCount() + "/" + vdAdt.getRepeatCount() + "]";
        			} else {
        				return this.desc;
        			}
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        	// validator argument중 object의 위치
        	objectIndex : {
        		value : undefined,
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	setObjectIndex : {
        		value : function(objectIndex) {
        		  this.objectIndex = objectIndex;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getObjectIndex : {
        		value : function() {
        		  return this.objectIndex;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        	// validator argument중 feature의 위치
        	featureIndex : {
        		value : undefined,
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	setFeatureIndex : {
        		value : function(featureIndex) {
        		  this.featureIndex = featureIndex;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getFeatureIndex : {
        		value : function() {
        		  return this.featureIndex;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        	prepare : {
        		value : function() {
        			this.setStep("start");

        			var runner = TestAPI.getRunner();
        			var am = runner.getApplicationMonitor();

        			vdAdt = this.getTargetObject();
        			am.setWorkingVdAdaptor(vdAdt);

        			var logger = runner.getLogger();
        			var message = vdAdt.getDefObject().description;
        			this.setMessage(message);
        			logger.stepLog(this, true, message);	// 성공 기록

        			if(vdAdt.getRepeatCount() > 1) {
        				vdAdt.increaseRepeatedCount();

        				var message = "" + vdAdt.getRepeatedCount()	+ "차 반복 시작";
        				logger.logByStep(logger.INFO, this, message, true);
        				this.setMessage(message);
        // 				trace("--------------- VDStep[" + vdAdt.getId() + "].prepare() : repeated count = "
        // 					+ vdAdt.getRepeatedCount() + " ---------------");
        			}

        			//vdAdt.initialize();
        			vdAdt.initNotifiers();

        			if(TestAPI.getApplicationMode() == TestAPI.AM_ANALYZE) {
        				if(vdAdt.metadata != undefined) {
        					var vdMetadata = vdAdt.metadata;
        					if(vdMetadata.objectIndex != undefined && vdMetadata.objectIndex >= 0) {
        						this.setObjectIndex(vdMetadata.objectIndex);
        					}
        					if(vdMetadata.featureIndex != undefined && vdMetadata.featureIndex >= 0) {
        						this.setFeatureIndex(vdMetadata.featureIndex);
        					}
        				}
        			}

        			if(vdAdt.isAbnormalTerminated() == true) {
        // 				vdAdt.clearAbnormalTerminated()
        // 				tcAdt.increaseFailCount();
        				this.setInitializeFailed();
        				return this.abnormal(TestAPI.CF_NEXTVD, vdAdt.getAbnormalMessage());
        			}

        			// this.setStatus(TestAPI.STATUS_RUN);
        			return TestAPI.CF_NEXTSTEP;	// fetch VC
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	run : {
        		value : function() {
        			var runner = TestAPI.getRunner();
        			var am = runner.getApplicationMonitor();

        			var nextStep = am.fetchStep(this);

        			// this.setStatus(TestAPI.STATUS_CHECK);
        			return TestAPI.CF_WAIT;	// VC 실행
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	check : {
        		value : function() {
        			// this.setStatus(TestAPI.STATUS_TEARDOWN);
        			return TestAPI.CF_NEXTSTEP;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	teardown : {
        		value : function() {
        			this.setStep("end");

        			var runner = TestAPI.getRunner();
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("VDStep", "teardown");
        				var devLogger = runner.getDevLogger();
        			}

        			var am = runner.getApplicationMonitor();
        			var logger = runner.getLogger();

        			var vdAdt = this.getTargetObject();
        			vdAdt.finishedVC();

        			var parentStep = this.getParentStep();
        			var tcAdt = parentStep.getTargetObject();

        			// VC 종료 : 마무리 처리
        			if(TestAPI.DS) devLogger.trace("[vdEnd] : " + vdAdt.getId()
        				+ " start", origin);

        			var bFinal = false;		// 마지막 step까지 실행 여부
        			var vdCheck = false;	// 성공 여부 : testcase에 수행 결과 누적

        			var controlFlow = TestAPI.CF_NEXTVD;

        			if(this.isInitializeFailed()) {
        				controlFlow = TestAPI.CF_NEXTVD;
        			} else
        			if(vdAdt.isAbnormalTerminated() == true) {
        				vdAdt.clearAbnormalTerminated();
        				controlFlow = TestAPI.CF_NEXTVD;
        			} else {
        				bFinal = true;
        				controlFlow = TestAPI.CF_NEXTVC;

        				if (vdAdt.isCheckVC() == false) {
        					if(TestAPI.DS) devLogger.trace2("[vdEnd] : 1", origin);

        					// Vd 전체 수행 결과 check
        					if(vdAdt.check(this, undefined) != true) {
        						vdAdt.increaseSuccCount();
        					} else {
        						vdAdt.increaseFailCount();
        					}
        				}

        				// notifier 해제
        				vdAdt.finalize();

        				// VD 반복 처리
        				if (this.getStepIndex() >= am.getBeginStepIndex()) {
        					if ((vdAdt.getRepeatCount() > 1)
        						&& (vdAdt.getRepeatedCount() < vdAdt.getRepeatCount()))
        					{
        						// Validator 반복 실행
        						var movePos = this.getStepIndex()- 1;

        						if(TestAPI.DS) {
        							devLogger.debug("Validator repeats from step[" + movePos
        								+ "] <#" + vdAdt.getRepeatedCount() + " repeated for "
        								+ vdAdt.getRepeatCount() + ">", origin);
        						}
        						var beginIndex = this.getStepIndex();
        						var endIndex = this.getEndStepIndex();

        						am.resetStepState(beginIndex, endIndex);
        						am.stepList.move2Position(movePos);

        						// fetchStep()은 final()에서 수행
        						// var step = am.fetchStep(this);

        						// 반복 count는 prepare()에서 증가시킴

        						return TestAPI.CF_WAIT;	// VD 실행
        					}
        				}

        				if (vdAdt.getFailCount() == 0) {
        					vdCheck = true;
        					// this.setStatus(TestAPI.STATUS_FINAL);
        				} else {
        					this.setStatus(TestAPI.STATUS_ABNORMAL2);
        				}
        			}

        			this.setPassed(vdCheck);

        			if (bFinal && vdCheck) {
        				tcAdt.increaseSuccCount();
        			} else {
        				tcAdt.increaseFailCount();
        			}

        			var vcCount = vdAdt.getSuccCount() + vdAdt.getFailCount();
        			if(vcCount > 0) {
        				var message = "성공 " + vdAdt.getSuccCount()
        					+ " VCs, 실패 " + vdAdt.getFailCount() + " VCs.";

        				logger.stepLog(this, vdCheck, message);
        			}

        			vdAdt.setMaxStepTime(vdAdt.defaultMaxStepTime);
        			this.callStepListener(TestAPI.STEP_VD);

        			return controlFlow;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        } );

        TestAPI.VDStep.prototype.constructor = TestAPI.VDStep;

        //=========================================================================
        //	Validation Case StepInfo 정의
        //=========================================================================
        TestAPI.VCStep = function(aVdAdt, aVcIndex) {
        	TestAPI.StepInfo.call(this, TestAPI.STEP_VC, aVdAdt, aVcIndex);

        	this.arg = null;

        	// single VD도 고려
        	if(aVcIndex >= 0) {
        		var vcInfo = aVdAdt.getVcInfo();
        		var args = null;

        		if (vcInfo != undefined && vcInfo.args != undefined) {
        			args = vcInfo.args;
        			if (aVcIndex < args.length) {
        				this.arg = args[aVcIndex];
        				// trace("VC[" + aVcIndex + " / " + args.length + "] : arg count = " + this.arg.length);
        			}
        		}
        	}
        	if(this.arg == null) {
        		this.arg = { vc: [], ev : undefined, notifier : undefined };
        	}
        }

        TestAPI.VCStep.prototype = Object.create(TestAPI.StepInfo.prototype, {
        	arg : {
        		value : null,
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getArgument :  {
        		value : function() {
        			return this.arg;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getDescription : {
        		value : function() {
        			// if(this.desc == null) {
        				this.desc = ".vc[" + this.getRefValue() + "]";
        				var vc = this.arg.vc;
        				var args = "";
        				if (vc != null && vc.length != undefined && vc.length > 1) {
        					for(var i = 0; i < vc.length; i++) {
        						if(i > 0) {
        							args += ",";
        						}

        						var val = this.getValue(i);

        						if(typeof val == 'string') {
        							args += "'" + val + "'";
        						} else {
        							args += val;
        						}
        					}
        					this.desc += "=(" + args + ")";
        				}
        			//}

        			var vdStep = this.getParentStep();
        			return vdStep.getDescription() + this.desc;	// VD 반복 반영
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	// argument의 경계값 유형 획득
        	getBoundaryType : {
        		value : function(argIndex) {
        // 			if(this.arg == null) {
        // 				throw 'VCStep.getBoundaryType() : VcStep.arg is not defined.';
        // 			}
        // 			if(this.arg.vc == undefined) {
        // 				throw 'VCStep.getBoundaryType() : VcStep.arg,vc is not defined.';
        // 			}
        			var vc = this.arg.vc;
        			if(vc.length == undefined) {
        				throw 'VCStep.getBoundaryType() : VcStep.arg,vc boundary type is not defined.';
        			}
        			var arg = vc[argIndex];
        			if(arg.length > 1) {
        				return arg[0];
        			}
        			return TestAPI.VBT_UNDEFINED;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getValue : {
        		value : function(argIndex) {
        			var vc = this.arg.vc;
        			if(vc.length == undefined || argIndex >= vc.length) {
        				throw "VCStep.getValue() : unbound exception "
        					+ argIndex + " for " + this.arg.length;
        			}
        			var vdAdt = this.getTargetObject();
        			var arg = vc[argIndex];
        			if (arg.length == undefined) {
        				// { vc : [ val, val, ...], ev : val }
        				return arg;
        			}
        			var index = 0;
        			if(vdAdt.hasBoundary()) {
        				index = 1;
        			}
        			return arg[index];
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	setResultValue : {
        		value : function(value) {
        			this.arg.rv = value;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getResultValue : {
        		value : function() {
        			return this.arg.rv;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	setExpectedValue : {
        		value : function(value) {
        			this.arg.ev = value;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getExpectedValue : {
        		value : function() {
        			if(this.arg.ev == undefined) {
        				var vdAdt = this.getTargetObject();
        				if(vdAdt.getName() == 'CombiVCVdAdaptor') {
        					this.arg.ev = vdAdt.retrieveExpectedValue();
        				}
        			}
        			return this.arg.ev;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	serializeArray : {
        		value : function(bVC, array) {
        			var msg = "";
        			for(var i=0; i < array.length; i++) {
        				var arg = array[i];

        				var vbt = 0;
        				var value = null;
        				var bStingType = false;

        				if (arg.length == 2) {
        					vbt = arg[0];
        					value = arg[1];
        				} else {
        					value = arg[0];
        				}
        				if (typeof value == 'string') {
        					bStingType = true;
        				}
        				if(bStingType == true) {
        					msg += "[" + vbt + ", '" + value + "']";
        				} else {
        					msg += "[" + vbt + ", " + value + "]";
        				}
        				if (i > 0) msg += ", ";
        			}
        			return msg;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	generateArg : {
        		value : function() {
        			var msg = "generated arg = {rv : [";
        			msg += this.serailizeArray(this.arg.rv);
        			msg += "], ev : " + this.arg.ev + "}";
        			trace (msg);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	prepare : {
        		value : function() {
        			var runner = TestAPI.getRunner();
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("VCStep", "prepare");
        				var devLogger = runner.getDevLogger();
        			}

        			var logger = runner.getLogger();
        			var am = runner.getApplicationMonitor();

        			vdAdt = this.getTargetObject();
        			vdAdt.setVCStep(this);

        			// notifier를 target object에 등록
        			var nm = vdAdt.getNotifierManager();
        			if(nm != null) {
        				nm.registerNotifiers();
        				nm.restoreTriggerTypes(this.arg.notifier);
        			}

        			if(TestAPI.getApplicationMode() == TestAPI.AM_ANALYZE) {
        				var parentStep = this.getParentStep();

        				var objIndex = parentStep.getObjectIndex();
        				if(objIndex != undefined) {
        					var objName = vdAdt.getValue(objIndex);
        					if(objName != undefined && objName != null) {
        						this.setObjectName(objName);
        					}
        				}
        				if(this.getFeatureType() == undefined || this.getFeatureType() == null) {
        					this.setFeatureType(parentStep.getFeatureType());
        				}
        				var featureIndex = parentStep.getFeatureIndex();
        				if(featureIndex != undefined) {
        					var featureName = vdAdt.getValue(featureIndex);
        					if(featureName != undefined && featureName != null) {
        						this.setFeatureName(featureName);
        					}
        				}
        			}

        			if(vdAdt.isAbnormalTerminated()) {
        				this.setInitializeFailed();
        				return this.abnormal(TestAPI.CF_NEXTVD, vdAdt.getAbnormalMessage());
        			}

        			// setStep()은 adaptor의 각 method에서 수행함
        			var ret = vdAdt.prepare(this);

        			// 오류 발생시 현재 VC 처리 안하고 다음 VD로 이동
        			if(ret == false || vdAdt.isAbnormalTerminated()) {
        				this.setInitializeFailed();
        				return this.abnormal(TestAPI.CF_NEXTVD, this.getMessage());
        			}
        			// this.setStatus(TestAPI.STATUS_RUN);

        			return TestAPI.CF_NEXTSTEP;	// 계속 처리
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	run : {
        		value : function() {
        			var runner = TestAPI.getRunner();
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("VCStep", "run");
        				var devLogger = runner.getDevLogger();
        			}

        			var am = runner.getApplicationMonitor();

        			vdAdt = this.getTargetObject();
        			var tfNameList = vdAdt.getTaskFlowNameList();
        			var resultValue = null;
        			var bCallRun = false;
        			var controlFlow = TestAPI.CF_NEXTSTEP;
        			var taskName = "";

        			if(this.isInitializeFailed() != true) {	// 초기화 정상인 경우에만
        				if((tfNameList == null) || (tfNameList.size() == 0)) {	// auto task flow가 지정 안된 경우
        					if(TestAPI.DS) devLogger.trace2("1", origin);
        					if(this.getAuxData() != true) {	// this.getAuxData() == true : 실행 완료 후 대기 중
        						bCallRun = true;
        					}
        				} else {	// auto task flow가 지정된 경우
        					if(tfNameList.hasNext() == true) {
        						bCallRun = true;
        						if(TestAPI.DS) devLogger.trace2("2", origin);

        						tfNameList.move2Next();
        						taskName = "[task=" + vdAdt.getTaskFlowName() + "]";
        					}
        				}
        			}

        			if(bCallRun == true) {	// 1번만 실행
        				resultValue = vdAdt.run(this);	// test 결과는 Adaptor에 저장됨

        				// trace("VCStep.run() : resultValue = <" + resultValue + ">");

        				if(vdAdt.isAbnormalTerminated()) {
        					this.setFailed();
        					return this.abnormal(TestAPI.CF_NEXTVC, this.getMessage());
        				}

        				// task에서 wait를 걸어둔 경우 해제시까지 진행 보류
        				if (runner.isWait() == true) {
        					// run() 수행 후 후속 task 존재 여부 검증
        					if(tfNameList == null || tfNameList.hasNext() != true) {
        						this.setAuxData(true);	// VC.run() 실행됨. 재실행 방지용
        						controlFlow = TestAPI.CF_NEXTWAIT;
        					}
        					if(TestAPI.DS) devLogger.trace2("waiting releaseWait...", origin);
        				}
        				// auto task flow 미종료
        				if(tfNameList != null && tfNameList.hasNext() == true) {
        					controlFlow = TestAPI.CF_NEXTWAIT;
        				}

        				if(TestAPI.DS) devLogger.trace2("3 - resultValue=<"
        					+ this.getResultValue() + ">", origin);

        				var logger = runner.getLogger();
        				logger.stepLog(this, true, taskName);	// 성공 기록
        				this.setMessage("");
        			}

        			return controlFlow;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	check : {
        		value : function() {
        			var runner = TestAPI.getRunner();
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("VCStep", "check");
        				var devLogger = runner.getDevLogger();
        			}
        			// this.setStep("check");

        			var am = runner.getApplicationMonitor();
        			var vdAdt = this.getTargetObject();

        			// vdAdt.finishedVC();

        			if(vdAdt.isAbnormalTerminated() == true) {
        				this.setFailed();
        				return this.abnormal(TestAPI.CF_NEXTSTEP, vdAdt.getAbnormalMessage());
        			}

        			if (vdAdt.isCheckVC() == true) {
        				if(TestAPI.DS) devLogger.trace2("[vcEnd] : 1", origin);

        				var chk = vdAdt.check(this);

        				if(vdAdt.isAbnormalTerminated() == true) {
        					this.setFailed();
        					return this.abnormal(TestAPI.CF_NEXTSTEP, vdAdt.getAbnormalMessage());
        				}

        				if (chk == true) {
        					this.setPassed(true);
        					// this.setStatus(TestAPI.STATUS_TEARDOWN);
        				} else {
        					this.setFailed();
        				}
        			}

        			return TestAPI.CF_NEXTSTEP;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	teardown : {
        		value : function() {
        			var runner = TestAPI.getRunner();
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("VCStep", "teardown");
        				var devLogger = runner.getDevLogger();
        			}
        			this.setStep("teardown");

        			var vdAdt = this.getTargetObject();
        			var bInitialized = true;
        			var bFinal = false;

        // 			if(this.isInitializeFailed()) {
        // 				bInitialized = false;	// 초기화 성공 여부에 무관하게 무조건 실행
        // 			} else
        			if (vdAdt.isAbnormalTerminated()) {
        			} else {
        				bFinal = true;
        			}

        			if(bInitialized == true) {
        				var am = runner.getApplicationMonitor();

        				// notifier 해제 : teardown시의 발생하는 event는 무시함
        				var nm = vdAdt.getNotifierManager();
        				if(nm != null) {
        					nm.unregisterNotifiers();
        				}

        				vdAdt.teardown(this);

        				var message = "vc[" + this.getRefValue() + "] teardowned.";
        				if(TestAPI.DS) devLogger.trace(message, origin);
        			}

        			if(bFinal && this.isPassed() == true) {
        				vdAdt.increaseSuccCount();
        				// this.setStatus(TestAPI.STATUS_FINAL);
        			} else {
        				vdAdt.increaseFailCount();
        			}

        			this.callStepListener(TestAPI.STEP_VC);

        			this.setAuxData(null);	// VC.run() 재실행 방지 해제
        			vdAdt.clearAbnormalTerminated();

        			return TestAPI.CF_NEXTSTEP;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        } );

        TestAPI.VCStep.prototype.constructor = TestAPI.VCStep;

        //=========================================================================
        // 현재 처리중인 item의 step 관리
        //=========================================================================
        TestAPI.workingStepInfo = null;
        TestAPI.setWorkingStepInfo = function(workInfo) {
        	TestAPI.workingStepInfo = workInfo;
        }
        TestAPI.getWorkingStepInfo = function() {
        	return TestAPI.workingStepInfo;
        }

        //=========================================================================
        //	Object Common Container 정의
        //=========================================================================
        TestAPI.Container = function(name) {
        	this.setName(name);

        	// prototype에서 생성하면 전체 Container가 한개의 objList instance를 보게 됨
        	this.objList = new Array();
        }

        TestAPI.Container.prototype = {
        	name : null,
        	setName : function(name) {
        		this.name = name;
        	},
        	getName : function() {
        		return this.name;
        	},

        	objList : null,
        	size : function() {
        		return this.objList.length;
        	},
        	set : function(index, obj) {
        		this.objList[index] = obj;
        	},
        	insert0 : function(obj) {
        		this.objList.unshift(obj);
        	},
        	add : function(obj) {
        		this.objList.push(obj);
        		// if(TestAPI.DS) devLogger.trace("Container.add() : " + this.getName()
        		//	+ " size = " + this.size());
        	},
        	has : function(index) {
        		if (index >= 0 && index < this.objList.length) {
        			return true;
        		}
        		false;
        	},
        	get : function(index) {
        		if (this.has(index) == true) {
        			return this.objList[index];
        		}
        		throw "No exist exception : [" + index + "] for " + this.objList.length;
        	},

        	currIndex	: -1,
        	getPosition : function() {
        // 		if (this.currIndex < 0) {
        // 			if (this.size() > 0) {
        // 				this.currIndex = 0;
        // 			}
        // 		}
        		return this.currIndex;
        	},
        	getCurrent : function() {
        		return this.get(this.getPosition());
        	},
        	hasNext : function() {
        		if (this.getPosition() < this.objList.length - 1) {
        			return true;
        		}
        		return false;
        	},
        	move2Position : function(index) {
        		if (this.has(index) == true) {
        			this.currIndex = index;
        		}
        	},
        	move2Next : function() {
        		if(this.hasNext() != true) {
        			throw "No exist next item exception : [" + this.currIndex
        				+ "] for " + this.objList.length;
        		}
        		this.currIndex++;
        	},
        	fetchNext : function() {
        		this.move2Next();
        		return this.get(this.currIndex);
        	},
        	rewind : function(index) {
        		if (index == undefined) {
        			this.currIndex	= 0;
        		} else {
        			this.currIndex	= index;
        		}
        	},
        	clean : function() {
        		for(var i = this.size() - 1; i >= 0; i--) {
        			this.set(i, null);
        		}
        		this.objList = null;	// nullify 필요한가?

        		this.objList = [];
        		this.rewind();

        		// trace("Container  " + this.getName() + " cleaned.");
        	},
        	removeAll : function(startPos) {
        		if(startPos == undefined || startPos < 0) {
        			startPos = 0;
        		}
        		this.objList.splice(startPos, this.objList.length);
        	}
        }
        TestAPI.Container.prototype.constructor = TestAPI.Container;

        //=========================================================================
        //	RunnerBase	: Runner 공통 기능 정의
        //=========================================================================
        TestAPI.RunnerBase = function() {
        // 	if(TestAPI.DS) {
        // 		var origin = TestAPI.createLoggerOrigin ("RunnerBase", "constructor");
        // 	}
        //	if(TestAPI.DS) devLogger.trace2("start", origin);

        	// this.setRunnerMode(TestAPI.RUNNER_EMBEDDED);
        	TestAPI.setRunner(this);

        // 	TestAPI.systemDebugOn();	// Runner를 debug mode로 실행
        // 	TestAPI.debugOn();			// 응용을 debug mode로 실행

        //	if(TestAPI.DS) devLogger.trace2("finish", origin);
        }

        TestAPI.RunnerBase.prototype = {
        	runnerMode : TestAPI.RUNNER_EMBEDDED,
        	setRunnerMode : function(runnerMode) {
        		this.runnerMode = runnerMode;
        		// trace("runner mode sets to " + this.runnerMode);
        	},
        	getRunnerMode : function() {
        		return this.runnerMode;
        	},

        	//-----------------------------------
        	// Runner 초기화
        	//-----------------------------------
        	bootup : function() {
        		// trace("Runner.bootup()");

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("RunnerBase", "bootup");
        			// devLogger.debug("start", origin);
        		}
        		var bAutoCreateDS = true;
        		var logger = new TestAPI.DatasetLogger(bAutoCreateDS);
        		//var logger = new TestAPI.ConsoleLogger();

        		this.setLogger(logger);

        		var runmode = this.getRunnerMode();
        		switch(runmode) {
        		case TestAPI.RUNNER_BATCH :
        			devLogger = logger; //new TestAPI.DatasetLogger();
        			break;
        		case TestAPI.RUNNER_ANALAYZE :
        			devLogger = logger; //new TestAPI.DatasetLogger();
        			break;
        		case TestAPI.RUNNER_APPLICATION :
        		case TestAPI.RUNNER_EMBEDDED :
        			// TestAPI.createDevLogger();

        			devLogger = this.getDevLogger();
        			if (devLogger == null) {
        				devLogger = new TestAPI.ConsoleLogger();
        			}
        			break;
        		}
        		this.setDevLogger(devLogger);

        		this.createTcManager();
        		this.createApplicationMonitor();

        		if(TestAPI.DS) devLogger.trace("finish", origin);
        	},

        	shutdown : function() {
        		// trace("Runner.shutdown()");
        		if(this.tcManager != null) {
        			this.tcManager.clean();
        			this.tcManager = null;
        		}

        		if(this.applMonitor != null) {
        			this.applMonitor.clean();
        			this.applMonitor = null;
        		}

        		if(devLogger != null) {
        			devLogger.clean();
        			devLogger = null;
        		}

        		if(this.logger != null) {
        			this.logger.clean();
        			this.logger = null;
        		}

        		this.nTimerId = -1;
        	},

        	//-----------------------------------
        	// Test 실행 관리
        	//-----------------------------------
        // 	createManagers : function() {
        // 		this.createTcManager();
        // 		this.createApplicationMonitor();
        // 	},

        	tcManager : null,
        	createTcManager : function() {
        		this.tcManager = new TestAPI.TestcaseManager();
        	},
        	getTcManager : function() {
        		return this.tcManager;
        	},

        	applMonitor : null,
        	createApplicationMonitor : function() {
        		this.applMonitor = new TestAPI.ApplicationMonitor(this);
        		this.applMonitor.setTcManager(this.getTcManager());
        	},
        	getApplicationMonitor : function() {
        		return this.applMonitor;
        	},
        	getWorkingVdAdaptor : function() {
        		return this.tcManager.getWorkingVdAdaptor();
        	},

        	logger : null,
        	setLogger : function(logger) {
        		this.logger = logger;

        		logger.setRunner(this);
        		logger.setTargetObject("RunnerBase");

        		// TestAPI.setLogger(logger);	// default로 생성(변경 불가)
        	},
        	getLogger : function(logLevel) {
        		if(this.logger == null) {
        			var logger = new TestAPI.ConsoleLogger();
        			this.setLogger(logger);
        		}
        		return this.logger;
        	},
        	devLogger : null,
        	setDevLogger : function(logger) {
        		this.devLogger = logger;
        	},
        	getDevLogger : function() {
        		return this.devLogger;
        	},
        	setLogLevel : function(logLevel) {
        		// Test응용 개발자용 logger
        		var logger = this.getLogger();
        		if (logger != null) {
        			logger.setLogLevel(logLevel);
        		}

        		// Runner 개발자 debug용 logger
        		// TestAPI.setLogLevel(logLevel);
        		var devLogger = this.getDevLogger();
        		if(devLogger != null) {
        			devLogger.setLogLevel(logLevel);
        		}
        	},

        	parseTcInfo : function(tcInfo) {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("RunnerBase", "parseTcInfo");
        			devLogger.debug("start", origin);
        		}

        		var env = TestAPI.getEnv();
        		var currBrowserName = env.getBrowserName();	// == Browser 단위로만 check

        		if(TestAPI.DS) devLogger.trace2("==================  parseTcInfo : currBrowserName = " + currBrowserName);
        		var tcDefList = null;

        		if(tcInfo.tcList == undefined) {
        			tcDefList = tcInfo;			// ~7.0 : == arrTcList
        			if(TestAPI.DS) devLogger.trace2("tc count(1) = " + tcDefList.length, origin);
        		} else {	// tcInfo 구조
        			tcDefList = [];

        			// spi method 호출
        			if(tcInfo.adjustTcInfo != undefined && tcInfo.adjustTcInfo != null) {
        				tcInfo.adjustTcInfo();
        			}

        			var aTcList = tcInfo.tcList;

        			if(TestAPI.DS) devLogger.trace2("tc count(2) = " + aTcList.length, origin);

        			// 중복을 배제하고 unique한 tc만 tcDefList로 목록 생성
        			for(var i = 0; i < aTcList.length; i++) {
        				var argTc = aTcList[i];
        				var bAdd = true;
        				for(var j = 0; j < tcDefList.length; j++) {
        					if(tcDefList[j] == argTc) {
        						bAdd = false;
        						break;
        					}
        				}
        				if(bAdd == true) {
        					tcDefList.push(argTc);
        					if(TestAPI.DS) devLogger.trace2("\t\tadded TC : " + argTc.description);
        				}
        			}
        			if(TestAPI.DS) devLogger.trace2("tc count(2-1) = " + tcDefList.length, origin);

        			// allow의 tc 목록 추가
        			var allow = tcInfo.allow;
        			if (allow != undefined && allow != null) {
        				for(var i = 0; i < allow.length; i++) {
        					var browsers = allow[i].browser;
        					var bAdd = false;

        					// 현재 browser가 테스트 지원 목록에 있는지 검사
        					for(var j = 0; j < browsers.length; j++) {
        						var browser = browsers[j];
        						if (browser == currBrowserName) {
        							bAdd = true;	// 추가
        							break;
        						}
        					}
        					// 추가 처리
        					if(bAdd == true) {
        						var allowTc = allow[i].tc;

        						// tc list에 이미 존재하는지 check
        						for(var j = 0; j < tcDefList.length; j++) {
        							var tcDef = tcDefList[j];
        							if (allowTc == tcDef) {
        								bAdd = false;	// 중복
        								break;
        							}
        						}
        						if (bAdd == true) {
        							// 실행 목록에 추가
        							tcDefList.push(allowTc);
        							if(TestAPI.DS) devLogger.trace2("\t\tallowed TC : " + allowTc.description, origin);
        						}
        					}
        				}
        			}
        			if(TestAPI.DS) devLogger.trace2("tc count(3) = " + tcDefList.length, origin);

        			// deny 처리
        			var deny = tcInfo.deny;
        			if (deny != undefined && deny != null) {
        				for(var i = 0; i < deny.length; i++) {
        					var browsers = deny[i].browser;
        					var bRemove = false;

        					// 현재 browser가 테스트 지원 목록에 있는지 검사
        					for(var j = 0; j < browsers.length; j++) {
        						var browser = browsers[j];
        						if (browser == currBrowserName) {
        							bRemove = true;
        							break;
        						}
        					}
        					// 제외 처리
        					if(bRemove == true) {
        						var denyTc = deny[i].tc;
        						bRemove = false;

        						for(var j = 0; j < tcDefList.length; j++) {
        							var defTc = tcDefList[j];
        							if (defTc == denyTc) {
        								// 중복
        								tcDefList.splice(j, 1);
        								if(TestAPI.DS) devLogger.trace2("\t\tdenied TC : " + denyTc.description, origin);
        								break;
        							}
        						}
        					}
        				}
        			}
        		}
        		if(TestAPI.DS) devLogger.trace2("requested to register "
        			+ tcDefList.length + " TCs", origin);

        		return tcDefList;
        	},
        	analyzeApplication : function(testedPlatforms) {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("RunnerBase", "analyzeApplication");
        			devLogger.debug("start", origin);
        		}

        		if(testedPlatforms == undefined || testedPlatforms == null || testedPlatforms.length == 0) {
        			var env = TestAPI.getEnv();	// 현재 실행 환경

        			testedPlatforms = [
        				{	test_no : -1,
        					os_name : env.getOSName(),
        					os_version : env.getOSVersion(),
        					browser_name: env.getBrowserName(),
        					browser_version: env.getBrowserVersion(),
        					analyzed_info : undefined
        				},
        			];

        		}
        		if(TestAPI.orgTcInfo == undefined) {
        			throw "analyzeApplication exception : TespAPI.orgTcInfo is undefined.";
        		}

        		// TestAPI.setDisplayTestPlan(false);

        		var tm = this.getTcManager();

        		if(TestAPI.isDisplayTestPlan()) {
        			trace("");
        			trace("================= Analyze Test Application =================");
        			trace("");
        		}

        		var applInfo = new TestAPI.APStep();
        		applInfo.setDescription("Test Application");

        		// test application 관리 step 생성
        		applInfo.setTargetNo(applInfo.getStepIndex());
        		applInfo.setStep("parse");

        		var am = this.getApplicationMonitor();
        		if (am == null) {
        			this.bootup();
        			am = this.getApplicationMonitor();
        		}

        		am.addStep(applInfo);
        		TestAPI.setWorkingStepInfo(applInfo);

        		// emulate 환경 설정
        		var emulateEnv = TestAPI.getEmulatedEnv();
        		for(var i = 0; i < testedPlatforms.length; i++) {
        			var tp = testedPlatforms[i];

        			emulateEnv.setOSName(tp.os_name);
        			emulateEnv.setOSVersion(tp.os_version);
        			emulateEnv.setBrowserName(tp.browser_name);
        			emulateEnv.setBrowserVersion(tp.browser_version);

        			// original tcList 복원
        			var tcDefList = null;
        			if(TestAPI.orgTcInfo.tcInfo.tcList != undefined) {	// version >= 0.71
        				tcDefList = TestAPI.orgTcInfo.tcInfo.tcList;
        			} else {
        				tcDefList = TestAPI.orgTcInfo.tcInfo			// version < 0.71
        			}

        			tcDefList.splice(0, tcDefList.length);	// 현재 parsed TC 목록 정보 제거
        			for(var j = 0; j < TestAPI.orgTcInfo.tcList.length; j++) {
        				tcDefList.push(TestAPI.orgTcInfo.tcList[j]);	// 최초 TC 목록 정보 복원
        			}

        			if(TestAPI.DS) devLogger.trace2("tcDefList reset = " + tcDefList.length + " TCs.", origin);

        			// 이전 TC 정의 정보 복원
        			tm.restore();

        			tcDefList = this.parseTcInfo(TestAPI.orgTcInfo.tcInfo);
        			this.makeTestPlan(tcDefList);

        			var ai = tm.analyzeTC(tcDefList);
        			tp.analyzed_info = ai;
        		}
        		return testedPlatforms;
        	},

        	stepListener : null,	// Step 별로 테스트 결과 수신 handler
        	setStepListener : function(listener) {
        		this.stepListener = listener;
        	},
        	setNotifyListenerLevel : function(level) {
        		this.getApplicationMonitor().setNotifyListenerLevel(level);
        	},
        	hasStepListener : function() {
        		if(this.stepListener == null) {
        			return false;
        		}
        		return true;
        	},
        	registerDefaultStepListener : function() {
        		this.setStepListener(
        			function(stepInfo) {
        				var origin = TestAPI.createLoggerOrigin ("EmbeddedRunner", "stepListener");
        				var logger = TestAPI.getLogger();

        				switch (stepInfo.getItemType()) {
        				case TestAPI.STEP_APPL :
        					var runner = TestAPI.getRunner();
        					if (runner.getApplicationMonitor().getStepState() == TestAPI.APPL_END) {
        						if(runner.getRunnerMode() != TestAPI.RUNNER_BATCH && runner.getRunnerMode() != TestAPI.RUNNER_ANALAYZE) {
        							runner.reportTestResult();
        						}
        						if (logger.getTypeName() == "DatasetLogger")  {
        							TestAPI.openLogViewer();
        						}
        	// 					logger = runner.getLogger();
        	//
        	// 					if (logger instanceof TestAPI.DatasetLogger) {
        	// 						var dsLog = logger.getDataset();
        	// 						trace("EmbeddedRunner ::\n" + dsLog.saveXML());
        	// 					}
        					}
        					break;
        				case TestAPI.STEP_TC :
        					var tcAdt = stepInfo.getTargetObject();
        					// console 출력
        					logger.info("TC[" + tcAdt.getTcNo() + "] : success "
        						+ tcAdt.getSuccCount() + " VDs, fail "
        						+ tcAdt.getFailCount() + " VDs");
        					break;
        				case TestAPI.STEP_VD :
        					var vdAdt = stepInfo.getTargetObject();
        					// console 출력
        					logger.info("VD[" + vdAdt.getId() + "] : success "
        						+ vdAdt.getSuccCount() + " VCs, fail "
        						+ vdAdt.getFailCount() + " VCs.");
        					break;
        				case TestAPI.STEP_VC :
        					break;
        				}
        			}
        		);
        	},
        	getStepListener : function() {
        		return this.stepListener;
        	},

        	reportTestResult : function(saveCallback) {
        		var applMonitor = this.getApplicationMonitor();
        		var stepList = applMonitor.getStepList();

        		var beginIndex = applMonitor.getBeginStepIndex();
        		var endIndex = applMonitor.getEndStepIndex();

        		var tcRefValue = null;
        		var vdRefValue = null;
        		var vcRefValue = null;

        		if(TestAPI.DS) {
        			if(TestAPI.isDisplayTestResult()) {
        				if(this.getRunnerMode() != TestAPI.RUNNER_BATCH && this.getRunnerMode() != TestAPI.RUNNER_ANALAYZE) {
        					trace("------------------------- 테스트 결과 -------------------------");
        				}
        			}
        		}
        		for(var i = beginIndex; i <= endIndex; i++) {
        			var stepInfo = stepList.get(i);

        			if(stepInfo.getStatus() == TestAPI.STATUS_READY) {
        				continue;
        			}

        			var tab = "\t\t\t\t".substring(0, stepInfo.getLevel());

        			var succCnt = 0;
        			var failCnt = 0;

        			var stat = "";

        			if((stepInfo.getStatus() == TestAPI.STATUS_ABNORMAL)
        				|| (stepInfo.getStatus() == TestAPI.STATUS_ABNORMAL2)){
        				stat = stepInfo.getMessage();
        			}
        			switch(stepInfo.getItemType()) {
        			case TestAPI.STEP_APPL :
        				if(stepInfo.getStatus() != TestAPI.STATUS_ABNORMAL) {
        					succCnt = applMonitor.getSuccCount();
        					failCnt = applMonitor.getFailCount();
        					// var sURL = this.tab_viewer.Tabpage1.url;
        					stat = "success " + succCnt + " TCs, fail " + failCnt + " TCs.";
        				}
        				break;

        			case TestAPI.STEP_TC :
        				tcRefValue = stepInfo.refValue;
        				// this.recordTestResult(stepInfo, tcRefValue, undefined, undefined);
        				if(saveCallback) saveCallback(stepInfo, tcRefValue, undefined, undefined);

        				if(stepInfo.getStatus() != TestAPI.STATUS_ABNORMAL) {
        					var to = stepInfo.getTargetObject();
        					succCnt = to.getSuccCount();
        					failCnt = to.getFailCount();
        					stat = "success " + succCnt + " VDs, fail " + failCnt + " VDs.";
        				}
        				break;

        			case TestAPI.STEP_VD :
        				vdRefValue = stepInfo.refValue;
        				var	tdAdt = stepInfo.getTargetObject();
        				tcRefValue = tdAdt.tcAdt.tcIndex;
        				// this.recordTestResult(stepInfo, tcRefValue, vdRefValue, undefined);
        				if(saveCallback) saveCallback(stepInfo, tcRefValue, vdRefValue, undefined);

        				if(stepInfo.getStatus() != TestAPI.STATUS_ABNORMAL) {
        					var to = stepInfo.getTargetObject();
        					succCnt = to.getSuccCount();
        					failCnt = to.getFailCount();
        					stat = "success " + succCnt + " VCs, fail " + failCnt + " VCs.";
        				}
        				break;

        			case TestAPI.STEP_VC :
        				vcRefValue = stepInfo.refValue;
        				var	vdAdt = stepInfo.getTargetObject();
        				vdRefValue = vdAdt.vdNo;
        				tcRefValue = vdAdt.tcAdt.tcIndex;
        				// this.recordTestResult(stepInfo, tcRefValue, vdRefValue, vcRefValue);
        				if(saveCallback) saveCallback(stepInfo, tcRefValue, vdRefValue, vcRefValue);

        				if(		(stepInfo.getStatus() != TestAPI.STATUS_ABNORMAL)
        					&&	(stepInfo.getStatus() != TestAPI.STATUS_ABNORMAL2)) {
        					if(stepInfo.isPassed() == true) {
        						stat = "success.";
        					} else {
        						stat = "fail.";
        					}
        				}
        				break;
        			}


        			if(TestAPI.DS) {
        				if(TestAPI.isDisplayTestResult() && i <= 99) {	// max 100건만 출력
        					if(this.getRunnerMode() != TestAPI.RUNNER_BATCH && this.getRunnerMode() != TestAPI.RUNNER_ANALAYZE) {
        						var msg = tab + "[" + stepInfo.getItemTypeName()
        							+ " : "	+ stepInfo.getStepIndex()
        							+ " - " + stepInfo.getStatusName(stepInfo.getStatus())
        							+ "] "	+ stepInfo.getDescription()
        							+ " :: "	+ stat;

        						trace(msg);

        						if (i == 99) {
        							trace("\t\t너무 많은 Step으로 출력 중단됨.");
        						}
        					}
        				}
        			}
        		}
        	},

        	bTestApplicationContext : false,
        	nTimerId : -1,
        	myName : null,
        	setMyName : function(myName) {
        		this.myName = myName;
        	},
        	getMyName : function() {
        		return this.myName;
        	},
        	start : function(nTimerId, timerInterval) {
        		this.nTimerId = nTimerId;

        		TestAPI.systemDebugOn();

        		this.logger.clean();

        		var am = this.getApplicationMonitor();
        		// trace("------------------------------EmbeddedRunner.start() : before applMonitor.reset()");
        		am.reset();
        		am.setTimerInterval(timerInterval);
        		// trace("------------------------------EmbeddedRunner.start() : after applMonitor.reset()");

        		// step 개서가 제한 건수를 초과하는 경우 logging level을 강제로 변경
        		var beginStepStepIndex = am.getBeginStepIndex();
        		var endStepStepIndex = am.getEndStepIndex();

        		if( (endStepStepIndex - beginStepStepIndex) > TestAPI.LOG_STEP_COUNT) {
        			var orgLogLevel = this.logger.getLogLevel();
        			am.saveOrgLogLevel(orgLogLevel);
        			this.logger.setLogLevel(TestAPI.ERROR);
        		}

        		var step = this.applMonitor.fetchStep(null);
        		TestAPI.setWorkingStepInfo(step);

        		//-----------  ontimer event handler를 Form에 등록
        		// EmbeddedRunner		: TestApplication Form
        		// ApplicationRunner	: ApplicationRunner Form
        		var ctx = TestAPI.getTestApplication();

        // 		if(this.bTestApplicationContext == false) {
        // 			ctx = this.getOwnerForm();
        // 		}
        		ctx.addEventHandler("ontimer", this._ontimer, this);
        		ctx.setTimer(nTimerId, timerInterval);
        	},
        	monitorCalled : 0,
        	_ontimer : function(obj, e)
        	{
        		if (this.applMonitor == null) {
        			return;
        		}
        		// this.monitorCalled++;
        		if(this.applMonitor.isWorking()) {
        			// bug시 무한 loop를 방지하기 위함

        // 			if (this.monitorCalled > 4) {
        // 				this.applMonitor.finalize();
        //
        // 				TestAPI.fatal("EmbeddedRunner._ontimer() : "
        // 					+ this.monitorCalled
        // 					+ " called --> abnormal terminated. ===========");
        //
        // 				return;
        // 			}

        // 			if(TestAPI.DS) {
        // 				if (this.monitorCalled % 50 == 0) {
        // 					devLogger.trace("RunnerBase._ontimer() : "
        // 						+ this.monitorCalled + " called =============");
        // 				}
        // 			}

        			if (this.applMonitor.monitor() == TestAPI.CF_CLOSEAPP) {
        				// this.applMonitor.finalize();	// APStep.teardown()에서 호출
        				return;
        			}
        			// this.applMonitor.monitor();
        		} else {
        			this.stop();
        		}
        	},
        	stop : function() {
        		var ctx = null;
        		if(this.bTestApplicationContext == true) {
        			ctx = TestAPI.getTestApplication();
        		} else {
        			ctx = this.getOwnerForm();
        		}
        		ctx.removeEventHandler("ontimer", this._ontimer, this);
        		ctx.killTimer(this.nTimerId);
        		// trace("--------------------BaseRunner.stop() : removed ontime event handler.");
        	},

        	//---------------------------------------
        	// Logic flow control 관리
        	//---------------------------------------
        	bWait : false,		// 대기 여부
        	defaultWaitTime : 1 * 1 * 1000,	// 1초
        	waitTime : null,
        	startTime : null,
        	stepFlowControlType : null,
        	nextFlowControlType : null,
        	beginWait : function(timeout, stepFlowControlType) {
        		// notifier 발생시까지 Runner의 실행 대기 시작
        		devLogger.debug("begin wait...");

        		this.startTime = new Date();
        		if (timeout == undefined || timeout == null) {
        			this.waitTime = this.defaultWaitTime;
        		} else {
        			this.waitTime = timeout;
        		}
        		this.bWait = true;
        		if (stepFlowControlType == undefined || stepFlowControlType == null) {
        			stepFlowControlType = TestAPI.CF_NEXTSTEP;
        		}
        		this.stepFlowControlType = stepFlowControlType;

        		var monitor = this.getApplicationMonitor();
        		if (timeout > monitor.maxStepTime || timeout < 0){
        			monitor.setMaxStepTime(timeout);
        		}
        	},
        	releaseWait : function() {
        		// Runner의 실행 대기 해제
        		this.startTime = null;
        		this.bWait = false;
        		this.stepFlowControlType = null;

        		if(TestAPI.DS) devLogger.debug("released wait...");
        	},
        	isWait : function() {
        		if(this.bWait) {
        			// Runner의 wait가 해제 되었는지 여부

        			var now = new Date();
        			if ((now - this.startTime) >= this.waitTime) {
        				var currStep = TestAPI.getWorkingStepInfo();
        				if (currStep != undefined && currStep != null) {
        					var origin = TestAPI.createLoggerOrigin ("RunnerBase", "isWait");
        					var step = TestAPI.getWorkingStepInfo();
        					var msg = "wait timeout : " + this.waitTime
        							+ "msec. [next step = "
        							+ step.getFlowControlName(this.stepFlowControlType) + "]";

        					// timeout으로 인한 자동 해지
        					if(TestAPI.DS) {
        						devLogger.warn(msg, origin);
        					}
        					// Step의 최종 상태 확보
        					var controlFlow = this.stepFlowControlType;
        					if(controlFlow == null) {
        						controlFlow = TestAPI.CF_NEXTSTEP;
        					}
        					var currStepStatus = currStep.getStatus();
        					var currPassed = currStep.isPassed();
        					var currMessage = currStep.getMessage();

        					// timeout 처리 실패 처리
        					if(controlFlow == TestAPI.CF_NEXTSTEP) {
        						// 기존의 pass 상태를 그대로 유지 : warning
        						currStep.setStatus(TestAPI.STATUS_ABNORMAL2);
        					} else {
        						// fail 처리 : error
        						currStep.setFailed();
        						currStep.setStatus(TestAPI.STATUS_ABNORMAL);
        					}
        					currStep.setMessage(msg);

        					this.nextFlowControlType = currStep.abnormal(this.stepFlowControlType, msg);

        					this.releaseWait();

        					// Step의 최종 상태 복구
        					if(controlFlow == TestAPI.CF_NEXTSTEP) {
        						currStep.setStatus(currStepStatus);
        						currStep.setPassed(currPassed);
        						currStep.setMessage(currMessage);
        					}
        				}
        			}
        		}
        		return this.bWait;
        	},
        	popNextControlFlow : function() {
        		var controlFlow = this.nextFlowControlType;
        		this.nextFlowControlType = null;
        		return controlFlow;
        	},
        	isReleasedWait : function() {
        		if (this.isWait()) {
        			return false;	// 대기중
        		}
        		return true;		// 해지
        	},
        	setAsync : function(bAsync, nTimeOut, stepFlowControlType) {
        		if (bAsync == false) {
        			// trace("RunnerBase.setAsync(false) : runner = " + this.myName);
        			this.beginWait(nTimeOut, stepFlowControlType);
        		} else {
        			// trace("RunnerBase.setAsync(true) : runner = " + this.myName);
        			this.releaseWait();
        		}
        	},
        	bTestMode : false,
        	setTestMode : function(bTestMode){
        		this.bTestMode = bTestMode;
        	},
        	isTestMode : function() {
        		return this.bTestMode;
        	},
        }

        TestAPI.RunnerBase.prototype.constructor = TestAPI.RunnerBase;

        //=========================================================================
        //	EmbeddedRunner 정의
        //=========================================================================
        TestAPI.EmbeddedRunner = function(ownerForm) {
        	// trace("--------------------------------- created EmbeddedRunner");

        	var origin = TestAPI.createLoggerOrigin ("EmbeddedRunner", "constructor");
        	// trace("created EmbeddedRunner.");

        	this.setOwnerForm(ownerForm);
        	// this.myName = "EmbeddedRunner-1";

        	TestAPI.RunnerBase.call(this);

        	// if(TestAPI.DS) devLogger.trace("start", origin);

        	//--------------------------------------------------------------
        	// 처리 결과를 UI 화면으로 출력하도록 보완 필요
        	//--------------------------------------------------------------
        // 	if (tcInfo != null) {
        // 		this.loadTestApplication(testApplication, tcInfo, bAutoStart);
        // 	}
        }

        TestAPI.EmbeddedRunner.prototype = Object.create(TestAPI.RunnerBase.prototype, {
        	ownerForm : {
        		value : null,
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        	setOwnerForm : {
        		value : function(ownerForm) {
        			this.ownerForm = ownerForm;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        	getOwnerForm : {
        		value : function() {
        			return this.ownerForm;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	bLoadCompleted : {
        		value : null,
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	beginLoadApplication : {
        		value : function() {
        			this.bLoadCompleted = false;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	isLoadCompleted : {
        		value : function() {
        			return this.bLoadCompleted;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	setLoadCompleted : {
        		value : function() {
        			this.bLoadCompleted = true;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	loadTestcase : {
        		value : function(testApplication, tcInfo) {
        			var origin = TestAPI.createLoggerOrigin ("EmbeddedRunner", "loadTestcase");

        			this.beginLoadApplication();

        			var logger = this.getLogger();

        			// set context
        			TestAPI.setTestApplication(testApplication);

        			// this.createManagers();

        			var applInfo = new TestAPI.APStep();

        			applInfo.setDescription("Test Application");

        			// test application 관리 step 생성
        			applInfo.setTargetNo(applInfo.getStepIndex());
        			applInfo.setStep("parse");

        			var am = this.getApplicationMonitor();
        			if (am == null) {
        				this.bootup();
        				am = this.getApplicationMonitor();
        			}

        			var bRun = true;

        			if (this.getRunnerMode() == TestAPI.RUNNER_BATCH || this.getRunnerMode() == TestAPI.RUNNER_ANALAYZE){
        				switch(testApplication.dev_status) {
        					case undefined :
        					case TestAPI.DEV_NORMAL :
        						bRun = TestAPI.runNormal;
        						break;
        					case TestAPI.DEV_WORK :
        						bRun = TestAPI.runWork;
        						break;

        					case TestAPI.DEV_HOLD :
        						bRun = TestAPI.runHold;
        						break;
        				}
        			}

        			if(bRun == true) {
        				am.addStep(applInfo);
        				TestAPI.setWorkingStepInfo(applInfo);

        				if(TestAPI.DS) devLogger.trace("add Application step", origin);

        				var tcDefList = this.parseTcInfo(tcInfo);

        				if(tcDefList.length == 0) {
        					this.bLoadCompleted = true;
        					return;
        				}

        				this.makeTestPlan(tcDefList);
        			}

        // 			if (bAutoStart == true) {
        // 				this.executeTest();
        // 			}
        			this.bLoadCompleted = true;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        	makeTestPlan : {
        		value : function(tcDefList) {
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("EmbeddedRunner", "makeTestPlan");
        				if(TestAPI.DS) devLogger.trace("start", origin);
        			}

        // 			var bTrace = false;
        // 			if(this.getRunnerMode() != TestAPI.RUNNER_BATCH) {
        // 				bTrace = true;
        // 			}
        			var bTrace = TestAPI.isDisplayTestPlan();

        			var tm = this.getTcManager();
        			var am = this.getApplicationMonitor();

        			// 기존 tcDefList 삭제
        			var tdl = tm.getTcDefList();
        			tdl.removeAll();

        			var tcAdtList = tm.getTcAdaptorList();
        			tcAdtList.removeAll();

        			if(bTrace) trace("--------------------- Scheduling testcases ---------------------");

        			for(var i = 0; i < tcDefList.length; i++) {
        				var tcDefObj = tcDefList[i];
        				if (tcDefObj == null) {
        					logger.error("tcDefList[" + i + "] :: Testcase Definition object is null.", origin);
        					continue;
        				}
        				// definition object  등록
        				if(bTrace) trace("tc[" + tdl.size() + "] : " + tcDefObj.description);
        				tdl.add(tcDefObj);
        			}
        			if(bTrace) trace("\tregistered " + tdl.size() + " TCs.");

        			for(var i = 0; i < tdl.size(); i++) {
        				var tcDefObj = tdl.get(i);
        				var tcAdt = tm.createTcAdaptor(tcDefObj);

        				// create & register Validator Adaptors
        				for(vdName in tcDefObj.validator) {
        					var vdDef = tcDefObj.validator[vdName];
        					var vdAdt = tcAdt.createVdAdaptor(vdDef, vdName);
        				}
        			}

        			// application 등록
        			var applInfo = TestAPI.getWorkingStepInfo();	// runner.constructor 에서 생성됨
        			applInfo.setTargetObject(am);

        			var tcInfo = null;
        			var vdInfo = null;
        			var vcInfo = null;

        			// testcase 등록

        			var stepList = am.getStepList();
        			stepList.removeAll(1);

        			var tcAdtCount = tcAdtList.size();
        			for(var tcno = 0; tcno < tcAdtCount; tcno++) {
        				var tcAdt = tcAdtList.get(tcno);

        				// tcInfo = new TestAPI.StepInfo(TestAPI.STEP_TC, tcAdt, tcno);
        				tcInfo = new TestAPI.TCStep(tcAdt, tcno);

        				tcInfo.setTargetNo(tcInfo.getStepIndex());
         				// tcInfo.setDescription(tcAdt.getDescription());

        				am.addStep(tcInfo);
        				if(TestAPI.DS) devLogger.trace("add TcAdaptor step", origin);

        				// validator 등록
        				var vdAdtList = tcAdt.getVdAdaptorList();
        				var vdCount = 0;
        				if (vdAdtList != undefined) {
        					vdCount = vdAdtList.size();
        					for(var vdno = 0; vdno < vdCount; vdno++) {
        						var vdAdt = vdAdtList.get(vdno);

        						// vdInfo = new TestAPI.StepInfo(TestAPI.STEP_VD, vdAdt, vdno);
        						vdInfo = new TestAPI.VDStep(vdAdt, vdno);

        						vdInfo.setTargetNo(vdInfo.getStepIndex());
        						// vdInfo.setDescription(vdAdt.getDescription());

        						am.addStep(vdInfo);

        						var vcCount = vdAdt.getNetVCCount();
        						if(TestAPI.DS) devLogger.trace("add VdAdaptor[" +  vdAdt.getId()
        							+ "] step. " + vcCount + " VCs", origin);

        						// validation case 등록 : single validator도 1 VC는 등록 해야 함
        						for(var vcIndex = 0; vcIndex < vcCount; vcIndex++) {
        							// vdAdt.move2NextVC();

        							// vcInfo = new TestAPI.StepInfo(TestAPI.STEP_VC, vdAdt, vcIndex);
        							vcInfo = new TestAPI.VCStep(vdAdt, vcIndex);

        							vcInfo.setTargetNo(vcInfo.getStepIndex());
        							// vcInfo.setDescription(vdAdt.getDescriptionVC());

        							am.addStep(vcInfo);
        							if(TestAPI.DS) devLogger.trace("add VC step : idx=" + vcInfo.getStepIndex()
        								+ ", end idx=" + vcInfo.getEndStepIndex(), origin);
        						}
        						if(vcCount > 0) {
        							vdInfo.setEndStepIndex(vcInfo.getEndStepIndex());
        						} else {
        							vdInfo.setEndStepIndex(vdInfo.getStepIndex());
        						}
        						if(TestAPI.DS) devLogger.trace("VD [" + vdAdt.getId()
        							+ "] step create. " + vcCount + " VCs. idx=" + vdInfo.getStepIndex()
        								+ ", end idx=" + vdInfo.getEndStepIndex(), origin);

        						vdAdt.resetStatus(-1);
        					}
        					tcInfo.setEndStepIndex(vdInfo.getEndStepIndex());
        					vdAdtList.rewind(-1);
        					if(TestAPI.DS) devLogger.trace("[" + tcInfo.getDescription()
        						+ "] create " + vdCount + " VD steps. idx=" + tcInfo.getStepIndex()
        								+ ", end idx=" + tcInfo.getEndStepIndex(), origin);
        				}
        			}
        			if(tcInfo != null) {
        				applInfo.setEndStepIndex(tcInfo.getEndStepIndex());
        			} else {
        				applInfo.setEndStepIndex(-1);
        			}
        			am.settleTestPlan();

        			tcAdtList.rewind(-1);
        			if(TestAPI.DS) devLogger.trace("[application] create "
        				+ tcAdtCount + " TC steps.", origin);

        			if(TestAPI.DS) devLogger.debug("created total " + am.getStepCount()
        					+ " steps. idx=" + applInfo.getStepIndex()
        					+ ", end idx=" + applInfo.getEndStepIndex(), origin);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	// 지정된 step 범위에서 테스트 실행
        	executeTest : {
        		value : function(beginStepIndex, endStepIndex) {
        			var runner = TestAPI.getRunner();

        			if(runner.nTimerId != -1 && this.getRunnerMode() != TestAPI.RUNNER_BATCH && this.getRunnerMode() != TestAPI.RUNNER_ANALAYZE) {
        				alert("테스트 수행 준비상태가 아닙니다.\n현재 테스트샘플을 Reload 하시기 바랍니다.");
        				return;
        			}

        			var appUrl = TestAPI.getTestApplicationUrl();
        			if(TestAPI.DS) devLogger.info(appUrl);

        			var am = this.getApplicationMonitor();

        			// trace("----------------------------- called EmbeddedRunner.executeTest()");

        // 			if (beginStepIndex == undefined) {
        // 				beginStepIndex = 0;
        // 			}
        // 			if (endStepIndex == undefined) {
        // 				endStepIndex = -1;
        // 			}

        			am.setTestRange(beginStepIndex, endStepIndex);

        			if(this.hasStepListener() != true) {
        				this.registerDefaultStepListener();
        			}
        			if(this.getRunnerMode() == TestAPI.RUNNER_BATCH || this.getRunnerMode() == TestAPI.RUNNER_ANALAYZE) {
        				TestAPI.systemDebugOff();	// Runner를 debug mode로 실행X
        				TestAPI.debugOff();			// 응용을 debug mode로 실행X
        			}

        			// trace("call start()");
        			this.start(6000, 10);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},


        } );

        TestAPI.EmbeddedRunner.prototype.constructor = TestAPI.EmbeddedRunner;

        if(TestAPI.version <= 0.7) {
        	this.EmbeddedRunner = TestAPI.EmbeddedRunner;
        }

        //=========================================================================
        //	ApplicationMonitor 정의
        //=========================================================================
        TestAPI.ApplicationMonitor = function(runner) {
        	this.setRunner(runner);
        	this.stepList = new TestAPI.Container("StepList");
        }

        TestAPI.ApplicationMonitor.prototype = {
        	runner : null,
        	setRunner : function(runner) {
        		this.runner = runner;
        	},
        	getRunner : function() {
        		return this.runner;
        	},

        	getLogger : function() {
        		return this.runner.getLogger();
        	},

        	// 전체 step list 관리
        	stepList : null,
        	getStepList : function() {
        		return this.stepList;
        	},
        	getStepCount :function() {
        		return this.stepList.size();
        	},
        // 	hasStep : function(stepIndex) {
        // 		if (stepIndex < 0 || stepIndex >= this.stepList.size()) {
        // 			return false;
        // 		}
        // 		return true;
        // 	},
        	addStep : function(stepInfo) {
        		var stepIndex = this.stepList.size();
        		stepInfo.setStepIndex(stepIndex)

        		switch(stepInfo.getItemType()) {
        		case TestAPI.STEP_APPL	:
        			stepInfo.setLevel(0);
        			break;
        		case TestAPI.STEP_TC	:
        			stepInfo.setLevel(1);
        			break;
        		case TestAPI.STEP_VD	:
        			stepInfo.setLevel(2);
        			break;
        		case TestAPI.STEP_VC	:
        			stepInfo.setLevel(3);
        			stepInfo.setEndStepIndex(stepIndex);
        			break;
        		}
        		var prevIndex = stepIndex - 1;

        		if (prevIndex >= 0) {	// 이전 step 존재시
        			var prevStep = this.stepList.get(prevIndex);

        			var levelDiff = prevStep.getLevel() - stepInfo.getLevel();
        			if (levelDiff < 0) {
        				// 하위 level인 경우
        				var parentStep = prevStep;
        				parentStep.setChildStepIndex(stepIndex);
        				stepInfo.setParentStepIndex(parentStep.getStepIndex());
        			} else
        			if (levelDiff == 0) {
        				// sibling인 경우
        				var sibleStep = prevStep;
        				stepInfo.setParentStepIndex(sibleStep.getParentStepIndex());
        				sibleStep.setNextStepIndex(stepIndex);
        				var parentStep = this.stepList.get(sibleStep.getParentStepIndex());
        			} else {
        				// 상위 level인 경우
        				var endStepIndex = prevIndex;

        				// 하위 step들의 마지막 위치 기록
        				while(levelDiff > 0) {
        					var parentIdx = prevStep.getParentStepIndex();
        					var parentStep = this.stepList.get(parentIdx);

        					parentStep.setEndStepIndex(endStepIndex);
        					levelDiff--;
        					prevStep = parentStep;
        				}
        				// child 처리
        				stepInfo.setParentStepIndex(prevStep.getParentStepIndex());
        				prevStep.setNextStepIndex(stepInfo.getStepIndex());
        			}
        		}
        		this.stepList.add(stepInfo);
        	},
        	// stepTree 생성의 마무리 처리
        	settleTestPlan : function() {
        		var lastIndex = this.stepList.size() - 1;
        		if (lastIndex > 0) {
        			var step = this.stepList.get(lastIndex);
        			var endStepIndex = step.getStepIndex();

        			var parentIndex = step.getParentStepIndex();
        			while(parentIndex >= 0) {
        				var parentStep = this.stepList.get(parentIndex);

        				parentStep.setEndStepIndex(endStepIndex);
        				parentIndex = parentStep.getParentStepIndex();
        			}
        		}
        		// test plan hierarchy display : embedded runner only
        		if(TestAPI.isDisplayTestPlan()) {
        			if(this.getRunner().getRunnerMode() != TestAPI.RUNNER_BATCH && this.getRunner().getRunnerMode() != TestAPI.RUNNER_ANALAYZE) {
        				trace("------------------------- 테스트 계획 -------------------------");
        				for(var i = 0; i < this.stepList.size(); i++) {
        					var stepInfo = this.stepList.get(i);
        					var tab = "\t\t\t\t".substring(0, stepInfo.getLevel());
        					trace(tab + "[" + stepInfo.getItemTypeName()
        						+ "] (index="	+ stepInfo.getStepIndex()
        						+ ", parent="	+ stepInfo.getParentStepIndex()
        						+ ", child="	+ stepInfo.getChildStepIndex()
        						+ ", next="		+ stepInfo.getNextStepIndex()
        						+ ", end="		+ stepInfo.getEndStepIndex()
        						+ ") :: "		+ stepInfo.getDescription()
        					);
        					if(i > 100) {
        						trace("\t\t===>너무 많은 Step으로 출력 중단됨.");
        						break;
        					}
        				}
        			}
        		}
        	},

        	tcManager : null,
        	setTcManager : function(tcManager) {
        		this.tcManager = tcManager;
        	},
        	getTcManager : function() {
        		return this.tcManager;
        	},

        	// test 종료 여부 여부 관리
        	bWorking : false,
        	isWorking : function() {
        		return this.bWorking;
        	},

        	startTime : null,
        	endTime : null,
        	getElapsedTime : function() {
        		return this.endTime - this.startTime;
        	},
        	orgLogLevel : undefined,
        	saveOrgLogLevel : function(orgLogLevel) {
        		this.orgLogLevel = orgLogLevel;
        	},

        	lastStep : null,
        	lastTouchTime : null,
        	maxStepTime : 10000,	// step별 최대 소요 시간 = 10초
        	setMaxStepTime : function (maxStepTime)
        	{
        		this.maxStepTime = maxStepTime;
        	},
        	setLastStep : function(lastStep) {
        		this.lastStep = lastStep;
        		this.lastTouchTime = new Date();
        	},
        	getLastStep : function() {
        		return this.lastStep;
        	},
        	getLastStep : function() {
        		return this.lastTouchTime;
        	},

        	bTested : false,
        	reset : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("ApplicationMonitor", "reset");
        			devLogger.trace2("start.", origin);
        		}

        		this.tcManager.reset();

        		// 이전 test 결과 삭제
        		this.bWorking = true;
        		this.succCount = 0;
        		this.failCount = 0;

        		if(this.stageList != null) {
        			this.setStagePhase(TestAPI.PHASE_CAPTURE);
        			this.stageList.rewind(-1);
        		}
        		this.stepList.rewind(0);
        		this.setStepState(TestAPI.APPL_START);	// TypeError: this.setStepState is not a function
        		// this.stepState = TestAPI.APPL_START;

        		if(this.bTested) {
        			this.resetStepState(0, -1);
        			this.bTested = false;
        		}
        		this.startTime = new Date();

        // 		if (this.getBeginStepIndex() == 0) {
        // 			this.setStagePhase(TestAPI.PHASE_TARGET);
        // 		} else {
        // 			this.setStagePhase(TestAPI.PHASE_BUBBLE);
        // 		}

        		if(TestAPI.DS) devLogger.trace2("finish.", origin);
        	},
        	finalize : function() {
        // 		if(TestAPI.DS) {
        // 			var origin = TestAPI.createLoggerOrigin ("ApplicationMonitor", "finalize");
        // 		}
        		this.bWorking = false;
        		this.endTime = new Date();
        		this.bTested = true;

        		this.getRunner().stop();

        		// Event 미처리 작업 내용 무효화 처리
        		try{
        			//Chrome 환경의 키보드/마우스 상태 초기화
        			nexacro.test.Event.clearNXData();
        			//종료되지 않은 popup Component 강제종료
        			nexacro._checkClosePopupComponent(null);

        			// 종료되지 않은 showModal 창 강제종료
        			var childFrames = self._getWindow();
        			var modal_frame_stack = childFrames._modal_frame_stack;
        			var modal_frame_stack_len = modal_frame_stack.length;
        			for (var i = modal_frame_stack_len - 1; i >= 0; i--)
        			{
        				var modal_frame_info = modal_frame_stack[i];
        				var frame = modal_frame_info[0];
        				if (frame._is_alive)
        					frame._destroy();
        			}
        			nexacro._destroyPopupFrameInfo(childFrames);

        		} catch(e) {
        			trace(e.message);
        		}

        		TestAPI.setWorkingStepInfo(null);
        		this.setStepState(TestAPI.APPL_END);

        // 		var apStep = this.stepList.get(0);
        // 		if(apStep.bCalledListener != true) {
        // 			apStep.callStepListener(TestAPI.STEP_APPL);
        // 		}

        		if(this.orgLogLevel != undefined) {
        			this.getRunner().setLogLevel(this.orgLogLevel);
        			this.orgLogLevel = undefined;
        		}
        		var appUrl = TestAPI.getTestApplicationUrl();
        		var testedUrl = "";
        		if (appUrl != null && appUrl != "") {
        			testedUrl = appUrl + " - ";
        		}

        		if(TestAPI.DS) devLogger.info(testedUrl
        			+ " Test 소요 시간 : " + this.getElapsedTime() + " ms.\n");
        	},
        	clean :function() {
        		this.lastStep = null;
        		if(this.stepList != null) {
        			this.stepList.clean();
        			this.stepList = null;
        		}

        		if(this.stageList != null) {
        			this.stageList.clean();
        			this.stageList = null;
        		}
        		// Runner.shutdown()에서 수행
        // 		if(this.tcManager != null) {
        // 			this.tcManager.clean();
        // 			this.tcManager = null;
        // 		}

        		this.workTcAdt = null;
        		this.workVdAdt = null;
        	},

        	// bCheckResult : true,	// 분산 실행된 VC 전체에 걸친 check 결과 관리

        	workTcAdt : null,
        	setWorkingTcAdaptor : function(tcAdt) {
        		this.workTcAdt = tcAdt;
        	},
        	getWorkingTcAdaptor : function() {
        		return this.workTcAdt;
        	},

        	workVdAdt : null,	// working validator
        	setWorkingVdAdaptor : function(vdAdt) {
        		this.workVdAdt = vdAdt;
        	},
        	getWorkingVdAdaptor : function() {
        		return this.workVdAdt;
        	},

        	//- Test 결과 상태 관리
        	succCount : 0,
        	increaseSuccCount : function() {
        		this.succCount++;
        	},
        	getSuccCount : function() {
        		return this.succCount;
        	},
        	failCount : 0,
        	increaseFailCount : function() {
        		this.failCount++;
        	},
        	getFailCount : function() {
        		return this.failCount;
        	},

        	// 진행중인 step 관리
        	stepState : -1,
        	setStepState : function(state) {
        		this.stepState = state;
        	},
        	getStepState : function() {
        		return this.stepState;
        	},
        	resetStepState : function(beginStepIndex, endStepIndex) {
        		if (beginStepIndex == undefined || beginStepIndex == null || beginStepIndex < 0) {
        			beginStepIndex = 0;
        		}
        		if (endStepIndex == undefined || endStepIndex == null || endStepIndex < 0
        			|| endStepIndex >= this.stepList.size()) {
        			endStepIndex = this.stepList.size() - 1;
        		}
        		for(var i = beginStepIndex; i <= endStepIndex; i++) {
        			var step = this.stepList.get(i);
        			step.setStatus(TestAPI.STATUS_READY);
        		}
        	},

        	//-----------------------------------------------
        	// 테스트 시작시 capture phase의 step path 관리
        	//-----------------------------------------------
        	stagePhase : null,
        	setStagePhase : function(stagePhase) {
        		this.stagePhase = stagePhase;
        	},
        	getStagePhase : function() {
        		return this.stagePhase;
        	},

        	stageList : null,
        	getStageList : function() {
        		return this.stageList;
        	},

        	// 테스트를 실행할 첫번째 step 위치
        	beginStepIndex : 0,
        	setTestRange : function(beginIndex, endIndex) {
        		var origin = TestAPI.createLoggerOrigin ("ApplicationMonitor", "setTestRange");

        		if(TestAPI.DS)
        		devLogger.trace("Requested test ranges from ["
        			+ beginIndex + "] to [" + endIndex + "].", origin);

        		if(beginIndex == undefined || beginIndex < 0 || beginIndex >= this.stepList.size()) {
        			beginIndex = 0;
        		}
        		this.beginStepIndex = beginIndex;

        		if (endIndex == undefined) {
        			var beginStep = this.stepList.get(beginIndex);
        			endIndex = beginStep.getEndStepIndex();

        			if(TestAPI.DS) devLogger.trace("beginStep's last index=" + endIndex, origin);
        		} else
        		if (endIndex < 0 || endIndex >= this.stepList.size()) {
        			endIndex = this.stepList.size() - 1;

        			if(TestAPI.DS) devLogger.trace("stepList's last index=" + endIndex, origin);
        		} else {
        			var endStep = this.stepList.get(endIndex);
        			endIndex = endStep.getEndStepIndex();
        		}

        		this.setEndStepIndex(endIndex);

        		var logger = this.getLogger();

        		if(TestAPI.DS) devLogger.trace("Scheduled test ranges from step["
        			+ beginIndex + "] to step[" + endIndex + "].", origin);

        		var step = this.stepList.get(this.beginStepIndex);
        		this.stageList = new TestAPI.Container("StageList");

        		this.setStagePhase(TestAPI.PHASE_CAPTURE);
        		// if(TestAPI.DS) devLogger.trace("Stage phase is set to CAPTURE.", origin);

        		// capture path의 step 저장
        		 while(step != null) {
        			this.stageList.insert0(step);
        			// if(TestAPI.DS) devLogger.trace("staged step[" + step.getStepIndex() + "]", origin);

        			var parentIndex = step.getParentStepIndex();
        			if (parentIndex >= 0) {
        				step = this.stepList.get(parentIndex);
        			} else {
        				step = null;
        			}
        		}

        		if(TestAPI.isDisplayTestPlan()) {
        			if(this.getRunner().getRunnerMode() != TestAPI.RUNNER_BATCH && this.getRunner().getRunnerMode() != TestAPI.RUNNER_ANALAYZE) {
        				trace("------------------------- Capture phase step path -------------------------");
        				for(var i = 0; i < this.stageList.size(); i++) {
        					var stepInfo = this.stageList.get(i);
        					var tab = "\t\t\t\t".substring(0, stepInfo.getLevel());

        					trace(tab + "[" + stepInfo.getItemTypeName()
        						+ "] (index="	+ stepInfo.getStepIndex()
        						+ ", parent="	+ stepInfo.getParentStepIndex()
        						+ ", child="	+ stepInfo.getChildStepIndex()
        						+ ", next="		+ stepInfo.getNextStepIndex()
        						+ ", end="		+ stepInfo.getEndStepIndex()
        						+ ") :: "		+ stepInfo.getDescription()
        					);
        				}
        			}
        		}
        		this.stageList.rewind(-1);
        	},

        	// 테스트를 시작할 step 위치
        	getBeginStepIndex : function() {
        		return this.beginStepIndex;
        	},

        	// 테스트를 종료할 step 위치
        	endStepIndex : 0,
        	setEndStepIndex : function(stepIndex) {
        		this.endStepIndex = stepIndex;
        	},
        	getEndStepIndex : function() {
        		return this.endStepIndex;
        	},

        	markFailedStepInfos : function(failedStepInfo, failedStep) {
        		failedStepInfo.setFailed();
        		failedStepInfo.setAbnormalStepState(failedStep);

        		// this.bCheckResult = false;

        		// 상위 step에 대한 실패 처리
        		var stepList = this.getStepList();

        		var parentStepIdx = failedStepInfo.getParentStepIndex();
        		while(parentStepIdx >= 0) {
        			var parentStepInfo = stepList.get(parentStepIdx);
        			if (parentStepInfo.isPassed() != true) {
        				// 다른 step에 의해 이미 실패 처리 되어 있음
        				break;
        			}
        			parentStepInfo.setFailed();
        			parentStepIdx = parentStepInfo.getParentStepIndex();
        		}
        	},

        	//-----------------------------------------------
        	// 테스트 실행 관리
        	//-----------------------------------------------
        	notifyListenerLevel : TestAPI.STEP_APPL,
        	setNotifyListenerLevel : function(level) {
        		this.notifyListenerLevel = level;
        	},
        	clearNotifyListenerLevel : function() {
        		this.notifyListenerLevel = TestAPI.STEP_APPL;
        	},
        	getNotifyListenerLevel : function() {
        		return this.notifyListenerLevel;
        	},

        	jumpStep : function(step) {
        		return this.jumpStepByIndex(step.getStepIndex());
        	},

        	jumpStepByIndex : function(stepIndex) {
        		var stepList = this.getStepList();
        		stepList.move2Position(stepIndex - 1);
        		this.fetchStep();
        		return TestAPI.CF_WAIT;
        	},

        	fetchStep : function(step) {
        		var origin = TestAPI.createLoggerOrigin ("ApplicationMonitor", "fetchStep");

        		var runner = this.getRunner();
        		var devLogger = runner.getDevLogger();
        		var logger = runner.getLogger();

        		switch(this.getStagePhase()) {
        		case TestAPI.PHASE_CAPTURE :
        			if(TestAPI.DS) devLogger.trace2("1-1", origin);

        			step = this.stageList.fetchNext();

        			if(TestAPI.DS) devLogger.trace("CAPTURE stage - fetched item type=["
        				+ step.getItemType() + "] step index = [" + step.getStepIndex() + "]",
        				origin);

        			// this.setStepState(step.getItemType() + TestAPI.PHASE_CAPTURE);

        			if(this.stageList.hasNext() != true) {
        				this.setStagePhase(TestAPI.PHASE_TARGET);
        				// begin index 위치로 이동
        				this.stepList.move2Position(step.getStepIndex());

        				if(TestAPI.DS) devLogger.trace("stage phase changed to TARGET. stepList position = "
        					+ this.stepList.getPosition(), origin);
        			}
        			if(TestAPI.DS) devLogger.trace2("1-2", origin);
        			break;
        		case TestAPI.PHASE_BUBBLE :	// bubble은 step에서 처리
        			break;
        		case TestAPI.PHASE_TARGET :
        			// if(this.getStepState() == TestAPI.VC_RUN) {
        			if (step != null&& step.getLevel() == 3 && step.getStatus() == TestAPI.STATUS_RUN) {
        				if(TestAPI.DS) devLogger.trace2("2-1", origin);
        				step = this.stepList.getCurrent();
        			} else {
        				if(TestAPI.DS) devLogger.trace2("2-2", origin);
        				if (this.stepList.hasNext() == true) {
        					if(TestAPI.DS) devLogger.trace2("2-3", origin);
        					step = this.stepList.fetchNext();
        					// this.setStepState(step.getItemType() + TestAPI.PHASE_CAPTURE);
        				} else {
        					if(TestAPI.DS) devLogger.trace2("2-4 finished TARGET phase.", origin);
        					this.setStagePhase(TestAPI.PHASE_BUBBLE);
        					step = null;
        				}
        			}
        			if (step != null) {
        				if(TestAPI.DS) devLogger.trace("TARGET stage - fetched item type=["
        					+ step.getItemType() + "] step index = ["
        					+ step.getStepIndex() + "]", origin);
        			}
        			break;
        		}
        		TestAPI.setWorkingStepInfo(step);
        		return step;
        	},
        	// VC의 전체 실행 결과 저장 여부 관리
        	bMapRVtoEV : false,
        	setMapRVtoEV : function(bFlag) {
        		this.bMapRVtoEV = bFlag;
        	},
        	isMapRVtoEV : function() {
        		return this.bMapRVtoEV;
        	},

        	timerInterval : -1,	// millisecond
        	setTimerInterval : function(timerInterval) {
        		this.timerInterval = timerInterval;
        	},
        	getTimerInterval : function() {
        		return this.timerInterval;
        	},
        	monitor : function() {
        		var origin = TestAPI.createLoggerOrigin ("ApplicationMonitor", "monitor");

        		var runner = this.getRunner();
        		var devLogger = this.getRunner().getDevLogger();

        		var startTime = new Date();

        		//---------------------------------------------------
        		// (개발용) 무한 loop 실행을 방지하기 위함
        		var bProtectUnlimited = false;
        		if(bProtectUnlimited) var loopCount = 0;
        		//---------------------------------------------------

        		var step = null;
        		var controlFlow = TestAPI.CF_NEXTSTEP;

        		while(this.isWorking()) {
        // 			var now = new Date();
        // 			var elaps = now - startTime;
        // 			var interval = this.getTimerInterval();
        // 			if (interval > 0 && elaps >= interval) {
        // 				if(TestAPI.DS) devLogger.trace("paused by timeout.");
        // 				break;
        // 			}

        			// if(TestAPI.DS) devLogger.trace("stage phase = " + this.getStagePhase(), origin);
        			step = TestAPI.getWorkingStepInfo();
        			if(step == null) {
        				// trace("AM : step == null");
        				// this.finalize();
        				return TestAPI.CF_CLOSEAPP;
        			}

        // 			// step별 시간 초과 여부 확인
        // 			if(step == this.getLastStep()) {
        // 				if(this.maxStepTime > 0) {
        // 					if(now - this.getLastTouchTime() >= this.maxStepTime) {
        // 						// 시간 초과 : 강제 종료
        // 						return TestAPI.CF_CLOSEAPP;
        // 					}
        // 				}
        // 			}

        			// 대기 여부 확인
        			if (runner.isWait() == true) {
        				// if(TestAPI.DS) devLogger.trace2("waiting....");
        				// trace("ApplicationMonitor.monitor() : waiting release........" + runner.myName + ",  waitTime = " + runner.waitTime);
        				return TestAPI.CF_WAIT;	// 대기중 : 해제시까지 아무일도 안함
        			}

        			// Wait() 시간 초과 여부 확인
        			controlFlow = runner.popNextControlFlow();
        			if(controlFlow == TestAPI.CF_CLOSEAPP) {
        				return TestAPI.CF_CLOSEAPP;
        			}

        			// control flow 처리 여부를 반영하여 다시 step을 획득함
        			step = TestAPI.getWorkingStepInfo();

        			controlFlow = step.execute();

        			if (controlFlow == TestAPI.CF_CLOSEAPP) {
        				// trace("AM : controlFlow == TestAPI.CF_CLOSEAPP");
        				// this.finalize();
        				return TestAPI.CF_CLOSEAPP;
        			}
        		}
        		// if(TestAPI.DS) devLogger.warn("paused.", origin);
        	},
        }

        TestAPI.ApplicationMonitor.prototype.constructor = TestAPI.ApplicationMonitor;

        //=========================================================================
        //	TestcaseManager 정의
        //=========================================================================
        TestAPI.TestcaseManager = function() {
        	this.tcDefList = new TestAPI.Container("TcDefList");
        	this.tcAdtList = new TestAPI.Container("TcAdaptorList");

        	this.reset();
        }

        TestAPI.TestcaseManager.prototype = {
        	tcAdtList : null,		// Testcase Adaptor container
        	setTcAdaptorList : function(tcAdtList) {
        		this.tcAdtList = tcAdtList;
        	},
        	getTcAdaptorList : function() {
        		return this.tcAdtList;
        	},

        	tcDefList : null,	// Testcase 정의 container
        	setTcDefList : function(tcDefList) {
        		this.tcDefList = tcDefList;
        	},
        	getTcDefList : function() {
        		// trace("TestcaseManager. tcDefList.size() = " + this.tcDefList.size());
        		return this.tcDefList;
        	},
        	createTcAdaptor : function(tcDef) {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("TestcaseManager", "createTcAdaptor");
        		}

        		var tcAdt = new TestAPI.TcAdaptor(tcDef);
        		tcAdt.initValidtors();

        		tcAdt.setTcIndex(this.tcAdtList.size());
        		this.tcAdtList.add(tcAdt);

        		if(TestAPI.DS) devLogger.trace("tcAdt[" + tcAdt.getTcIndex() + "] created.", origin);

        		return tcAdt;
        	},
        	// 최초 실행 대기 상태로 전환
        	reset : function() {
        		this.tcDefList.rewind(-1);
        		this.tcAdtList.rewind(-1);
        		for(var i = 0; i < this.tcAdtList.size(); i++) {
        			var tcAdt = this.tcAdtList.get(i);
        			tcAdt.resetStatus();
        		}
        	},
        	// 원본 정의 상태로 전환
        	restore : function() {
        		if(this.tcAdtList != null) {
        			for(var i = 0; i < this.tcAdtList.size(); i++) {
        				var tcAdt = this.tcAdtList.get(i);

        				var vdAdtList = tcAdt.getVdAdaptorList();
        				if(vdAdtList != null) {
        					for(var j = 0; j < vdAdtList.size(); j++) {
        						var vdAdt = vdAdtList.get(j);

        						// analyze에서 platform별로 반복 초기화 지원
        						if(vdAdt.combiArgs != undefined) {
        							// trace("======================== vdAdt.combiArgs restore.");
        							var vcinfo = vdAdt.getVcInfo();
        							vcinfo.args = vdAdt.combiArgs;
        							vdAdt.combiArgs = undefined;
        						}
        					}
        				}
        			}
        		}
        	},
        	// 모든 자원 반환
        	clean : function() {
        		if(this.tcAdtList != null) {
        			for(var i = 0; i < this.tcAdtList.size(); i++) {
        				var tcAdt = this.tcAdtList.get(i);
        				tcAdt.clean();
        			}
        			this.tcAdtList.clean();
        			this.tcAdtList = null;
        		}
        		if(this.tcDefList != null) {
        			this.tcDefList.clean();
        			this.tcDefList = null;
        		}
        	},
        	cumulateVC : function(analyzedInfo, testType, objName, featureName, vc_cnt, a_statusName) {
        		// trace("cumulateVC() : " + objName + "." + featureName + " += " + vc_cnt);

        		var obj = analyzedInfo.objects[objName];
        		if(obj == undefined) {
        			obj = {
        				objectType : TestAPI.OT_OBJECT,
        				name : objName,
        				features : {},
        			};
        			if(testType) {
        				obj.objectType = testType;
        			}
        			analyzedInfo.objects[objName] = obj;
        		}
        		var ft = obj.features[featureName];
        		if (ft == undefined) {
        			ft = {
        				name : featureName,
        				vc_cnt : 0,
        				// tot_vbt_count : 1,
        				// tested_vbt_count : 0,	// value boundary type
        				status : [],	// status별 VCs
        			};
        			obj.features[featureName] = ft;
        		}

        		//VC 개수 누적
        		ft.vc_cnt += vc_cnt;
        		analyzedInfo.vc_cnt += vc_cnt;

        		if(a_statusName) {	// control test의 status 통계 처리
        			// Status 반영
        			var status = ft.status[a_statusName];
        			if(!status) {	// status 추가
        				status = {
        					name : a_statusName,
        					vc_cnt : 0
        				}
        				ft.status[a_statusName] = status;
        			}
        			status.vc_cnt += vc_cnt;
        		}
        	},
        	analyzeTC : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("TestcaseManager", "analyzeTC");
        		}

        		var	analyzedInfo = {
        			applInfo : TestAPI.parseApplicationUrl(),
        			tc_cnt : 0,
        			vd_cnt : 0,
        			vc_cnt : 0,
        			keyword : [],
        			objects : {}
        		};

        		var applInfo = analyzedInfo.applInfo;

        		var objName = undefined;
        		var itemtype = undefined;
        		var featureName = undefined;

        		if(applInfo.url != undefined) {
        			// 파일 명명 규칙으로부터 object name + item type + item name 획득
        			if(TestAPI.DS) devLogger.trace("objectName = "	+ applInfo.objectName + ", " +
        					"featureName = "	+ applInfo.featureName, origin);

        			objName = applInfo.objectName;
        			itemtype = applInfo.featureType;
        			featureName = applInfo.featureName;
        		}

        		if(this.tcAdtList != null) {
        			analyzedInfo.tc_cnt = this.tcAdtList.size();	// TC 개수 누적

        			for(var i = 0; i < this.tcAdtList.size(); i++) {
        				var tcObjName = objName;
        				var tcFeatureName = featureName;

        				var tcAdt = this.tcAdtList.get(i);
        				var tcDef = tcAdt.getDefObject();

        				// TC Metadata 처리
        				if(tcDef.metadata != undefined) {
        					var tcmd = tcDef.metadata;

        					// 키워드 추가
        					if(tcmd.keyword != undefined && tcmd.keyword.length > 0) {
        						for(var j = 0; j < tcmd.keyword.length; j++) {
        							var kwdUC = tcmd.keyword[j].toUpperCase();
        							if(kwdUC != null && kwdUC.length > 0) {
        								var bAdd = true;
        								// 중복 여부 검사
        								for(var k = 0; k < analyzedInfo.keyword.length; k++) {
        									if(analyzedInfo.keyword[k].toUpperCase() == kwdUC) {
        										bAdd = false;
        										break;
        									}
        								}
        								if(bAdd == true) {
        									analyzedInfo.keyword.push(tcmd.keyword[j]);
        								}
        							}
        						}
        					}
        					// Object name 획득
        					if(tcmd.objectId != undefined) {
        						var tokens = tcmd.objectId.split(".");	// nexacro.objectName
        						tcObjName = tokens[tokens.length - 1];
        					}
        					// object는 file명명 규칙에 따라 지정된 위치의 이름 그대로 사용
        					// object 이름의 유효 여부는 db에서 meta info의 등록 상태를 확인하여 결정
        					if(tcObjName == null) {
        						tcObjName = 'Unknown';
        					}

        					// Feature name 획득
        					var fn = tcmd.elementName;
        					if(fn != undefined && fn.length > 0) {
        						tcFeatureName = fn;
        					}
        					if(tcFeatureName == undefined || tcFeatureName == null) {
        						// item은 file명명 규칙에 따라 지정된 위치의 이름 그대로 사용
        						// item 이름의 유효 여부는 db에서 meta info의 등록 상태를 확인하여 결정
        						tcFeatureName = 'Unknown';
        					}
        				}

        				var vdList = tcAdt.getVdAdaptorList();
        				analyzedInfo.vd_cnt += vdList.size();	// vd 개수 누적
        				var ci = null;	// control info of role argument

        				for(var j = 0; j < vdList.size(); j++) {
        					var vdAdt = vdList.get(j);

        					// single VD
        					var vcInfo = vdAdt.getVcInfo();
        					if(vcInfo == undefined || vcInfo.argType == undefined || vcInfo.args == undefined) {
        						this.cumulateVC(analyzedInfo, TestAPI.OT_OBJECT, tcObjName, tcFeatureName, 1);	// vc 개수 누적
        						continue;
        					}

        					// list or combi args
        					var listArgs = vcInfo.args;	// combi는 조합이 풀어진 list를 이용

        					var vdDef = vdAdt.getDefObject();
        					var vdmd = vdDef.metadata;
        					if(vdmd == undefined) {
        						this.cumulateVC(analyzedInfo, TestAPI.OT_OBJECT, tcObjName, tcFeatureName, listArgs.length);
        						continue;
        					}

        					switch(vdmd.featureType) {
        					case TestAPI.FT_STYLE :		// control test : item = style * status
        						// 아래에서 VC 로직으로 처리
        						break;
        					default	:	// component test : item = feature
        						if(vdmd.objectIndex == undefined && vdmd.featureIndex == undefined) {
        							this.cumulateVC(analyzedInfo, TestAPI.OT_OBJECT, tcObjName, tcFeatureName, listArgs.length);	// vc 개수 누적
        							continue;
        						}
        					}

        					// object + item 분석
        					for(var k = 0; k < listArgs.length; k++) {
        						var listArg = listArgs[k];
        						var vcObjName = tcObjName;

        						switch(vdmd.featureType) {
        						case TestAPI.FT_STYLE :
        							// control test
        							var controlName = tcObjName;

        							// role(= component와 item) 추출
        							var componentName = "Unknown";
        							var itemName = "Unknown";
        							var rolePath = "Unknown";

        							if(vdmd.featureIndex != undefined && vdmd.featureIndex != null) {
        								if(vdmd.featureIndex >= 0 && vdmd.featureIndex < listArg.vc.length) {
        									var vc = listArg.vc[vdmd.featureIndex];
        									var cidef = null;

        									if(vc.length > 1) {
        										cidef = vc[1];
        									} else {
        										cidef = vc[0];
        									}
        									if(cidef == null || cidef == undefined || cidef.length < 5) {
        										continue;
        									}
        									ci = TestAPI.parseControlInfo(ci, cidef);

        									componentName = ci.getComponentTypeName();
        									itemName = ci.getItemName();
        									rolePath = ci.getStaticRolePath();
        								}
        							}

        							// style 추출
        							var styleName = null;
        							if(vdmd.styleIndex != undefined && vdmd.styleIndex != null) {
        								if(vdmd.styleIndex >= 0 && vdmd.styleIndex < listArg.vc.length) {
        									var vc = listArg.vc[vdmd.styleIndex];
        									if(vc.length > 1) {
        										styleName = vc[1];
        									} else {
        										styleName = vc[0];
        									}
        								}
        							}
        							// status 추출
        							var statusName = null;
        							if(vdmd.statusIndex != undefined && vdmd.statusIndex != null) {
        								if(vdmd.statusIndex >= 0 && vdmd.statusIndex < listArg.vc.length) {
        									var vc = listArg.vc[vdmd.statusIndex];
        									if(vc.length > 1) {
        										statusName = vc[1];
        									} else {
        										statusName = vc[0];
        									}
        								}
        							}
        							// vc 개수 누적
        							// this.cumulateVC(analyzedInfo, controlName, styleName, 1, statusName, componentName, itemName, rolePath);
        							if(vdmd.objectType == TestAPI.OT_OBJECT || vdmd.objectType == undefined){
        								this.cumulateVC(analyzedInfo, TestAPI.OT_OBJECT, tcObjName, styleName, 1, statusName);
        							} else {
        								this.cumulateVC(analyzedInfo, TestAPI.OT_CONTROL, controlName, styleName, 1, statusName);
        								//if(vdmd.objectType == TestAPI.OT_ROLE) {
        									this.cumulateVC(analyzedInfo, TestAPI.OT_ROLE, rolePath, controlName, 1, statusName);
        								//}
        							}
        							break;

        						default :	// component test
        							if(vdmd.objectIndex != undefined && vdmd.objectIndex >= 0 && vdmd.objectIndex < listArg.vc.length) {
        								// component 추출
        								var objArg = objArg = listArg.vc[vdmd.objectIndex];

        								if(objArg.length == 1) {
        									vcObjName = objArg[0];	// no VBT
        								} else {
        									vcObjName = objArg[1];	// has VBT
        								}
        								if(typeof vcObjName === 'object') {
        									// object instance의 type name 획득
        									vcObjName = vcObjName.name;
        								}

        								var vcFeatureName = tcFeatureName;
        								if(vdmd.featureIndex != undefined && vdmd.featureIndex >= 0 && vdmd.featureIndex < listArg.vc.length) {
        									var ftArg = listArg.vc[vdmd.featureIndex];
        									if(ftArg.length == 1) {
        										vcFeatureName = ftArg[0];	// no VBT
        									} else {
        										vcFeatureName = ftArg[1];	// has VBT
        									}
        								}
        								this.cumulateVC(analyzedInfo, TestAPI.OT_OBJECT, vcObjName, vcFeatureName, 1);	// vc 개수 누적
        							}
        						}	// end of switch
        					} // end of Args Loop
        				}	// end of vdAdt loop
        			}	// end of tcAdt loop
        		}	// end of if tcAdtList != null

        		if(TestAPI.isDisplayTestPlan()) {
        			trace("---------------- TestApplication analyzed informations ----------------");

        			var emulateEnv = TestAPI.getEmulatedEnv();
        			trace("\tEnv = "
        				+ emulateEnv.getOSName() + "." + emulateEnv.getOSVersion()
        				+ "::" + emulateEnv.getBrowserName() + "." + emulateEnv.getBrowserVersion() );

        			trace("\tAnalyzedInfo = "
        				+ " [ "	+ analyzedInfo.tc_cnt + " TCs, "
        						+ analyzedInfo.vd_cnt + " VDs, "
        						+ analyzedInfo.vc_cnt + " VCs"
        				+ " ]"
        			);

        // 			trace("\tFeature = " + analyzedInfo.applInfo.objectName
        // 				+ "." 	+ analyzedInfo.applInfo.featureName
        // 				+ " [ "	+ analyzedInfo.tc_cnt + " TCs, "
        // 						+ analyzedInfo.vd_cnt + " VDs, "
        // 						+ analyzedInfo.vc_cnt + " VCs"
        // 				+ " ]"
        // 			);

        			trace("\tKeyword = [" + analyzedInfo.keyword + "]");
        			trace("\tValidation Case(VC) Count :");

        			var objects = analyzedInfo.objects
        			for(var objName in analyzedInfo.objects) {
        				var obj = analyzedInfo.objects[objName];
        				for(var ftName in obj.features) {
        					var ft = obj.features[ftName];
        					var objtype = "";
        					switch(obj.objectType) {
        					case TestAPI.OT_OBJECT	: objtype = "[Object] ";	break;
        					case TestAPI.OT_CONTROL	: objtype = "[Control] ";	break;
        					case TestAPI.OT_ROLE	: objtype = "[Role] ";		break;
        					}
        					trace("\t\t-"
        						+ objtype
        						+ objName + "::" + ft.name + " = " + ft.vc_cnt + " VCs.");

        					if(obj.objectType == TestAPI.OT_CONTROL) {
        						var slist = "";
         						for(var statusName in ft.status) {
        							var status = ft.status[statusName];
        							if(slist != "") slist += ", ";
        							slist += status.name;
        							if(status.vc_cnt > 1) {
        								slist += "(" + status.vc_cnt + ")";
        							}
        						}
        						trace("\t\t\t[status] " + slist);
        					}
        				}
        			}
        			trace("");
        		}

        		return analyzedInfo;
        	},
        	clean : function() {
        		if(this.tcAdtList != null) {
        			this.tcAdtList.clean();
        			this.tcAdtList = null;
        		}
        		if(this.tcDefList != null) {
        			this.tcDefList.clean();
        			this.tcDefList = null;
        		}
        	},
        }
        TestAPI.TestcaseManager.prototype.constructor = TestAPI.TestcaseManager;

        //=========================================================================
        //	TcAdaptor 정의
        //=========================================================================
        TestAPI.TcAdaptor = function(tcDef) {
        	this.setDefObject(tcDef);
        }

        TestAPI.TcAdaptor.prototype = {
        	defObj : null,
        	setDefObject : function(defObj) {
        		this.defObj = defObj;
        	},
        	getDefObject : function() {
        		return this.defObj;
        	},

        // 	stepInfo : null,
        // 	setStepInfo : function(stepInfo) {
        // 		this.stepInfo = stepInfo;
        // 	},
        // 	getStepInfo : function() {
        // 		return this.stepInfo;
        // 	},

        	getDescription : function() {
        		return "tc[" + this.getTcIndex() + "]";
        	},

        	tcIndex : -1,	// testcase 구별자
        	setTcIndex : function(tcIndex) {
        		this.tcIndex = tcIndex;
        	},
        	getTcIndex : function() {
        		return this.tcIndex;
        	},

        	tcNo : -1,	// testcase 구별자
        	setTcNo : function(tcNo) {
        		this.tcNo = tcNo;
        	},
        	getTcNo : function() {
        		return this.tcNo;
        	},
         	initValidtors : function() {
         	},

        	resetStatus : function() {
        		this.succCount = 0;
        		this.failCount = 0;
        		if (this.vdAdtList != null) {
        			this.vdAdtList.rewind(-1);

        			for(var i = 0; i < this.vdAdtList.size(); i++) {
        				var vdAdt = this.vdAdtList.get(i);
        				vdAdt.resetStatus(-1);
        			}
        		}
        	},
        	clean : function() {
        		if(this.vdAdtList  != null) {
        			for(var i = 0; i < this.vdAdtList.size(); i++) {
        				var vdAdt = this.vdAdtList.get(i);
        				vdAdt.clean();
        			}
        			this.vdAdtList.clean();
        			this.vdAdtList = null;
        		}

        		this.defObj = null;
        	},

        	bAbnormalTerminated : false,
        	abnormalTerminatedMsg : null,
        	isAbnormalTerminated : function() {
        		return this.bAbnormalTerminated;
        	},
        	setAbnormalTerminated : function(errormsg) {
        		this.bAbnormalTerminated = true;
        		this.abnormalTerminatedMsg = errormsg;
        	},
        	clearAbnormalTerminated : function() {
        		this.bAbnormalTerminated = false;
        	},

        	createVdAdaptor : function(vdDef, vdName) {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("TcAdaptor", "createVdAdaptor");
        			devLogger.trace2("start", origin);
        		}

        		var argType = TestAPI.VCT_ARG_NONE;

        		var vcinfo = null;
        		if(TestAPI.version >= 0.71) {
        			vcinfo = vdDef.vcinfo;
        		} else {
        			vcinfo = vdDef.repeat;
        		}
        		if(vcinfo != undefined) {
        			if(vcinfo.argType != undefined && vcinfo.argType != null) {
        				argType = vcinfo.argType;
        			}
        		}
        		var vdAdt = null;

        		switch(argType) {
        		case TestAPI.VCT_ARG_NONE :
        			vdAdt = new TestAPI.SingleVCVdAdaptor(this, vdDef);
        			break;
        		case TestAPI.VCT_ARG_LIST :
        			vdAdt = new TestAPI.ListVCVdAdaptor(this, vdDef);
        			break;
        		case TestAPI.VCT_ARG_COMBI :
        			vdAdt = new TestAPI.CombiVCVdAdaptor(this, vdDef);
        			break;
        		default :
        			throw "TcAdaptor.createVdAdaptor() :: Unknown validator type ["
        				+ argType + "]";
        		}

        		vdAdt.setArgType(argType);
        		vdAdt.setId(vdName);

        		this.registerVdAdaptor(vdAdt);

        		// TestPlan 작성을 위해 Adaptor의 step 관리 정보만 미리 생성함
        		vdAdt.initialize();

        		if(TestAPI.DS) devLogger.trace(vdAdt.getName() + "::['" + vdAdt.getId()
        			+ "'] created.", origin);

        		return vdAdt;
        	},

        	vdAdtList : null,
        	getVdAdaptorList : function() {
        		return this.vdAdtList;
        	},
        	registerVdAdaptor : function(vdAdt) {
        		if (this.vdAdtList == null) {
        			this.vdAdtList = new TestAPI.Container("VdAdaptorList");
        		}
        		vdAdt.setVdNo(this.vdAdtList.size());
        		this.vdAdtList.add(vdAdt);
        	},

        	succCount : 0,
        	increaseSuccCount : function() {
        		this.succCount++;
        	},
        	getSuccCount : function() {
        		return this.succCount;
        	},
        	failCount : 0,
        	increaseFailCount : function() {
        		this.failCount++;
        	},
        	getFailCount : function() {
        		return this.failCount;
        	},

        	//----------------------------------------------
        	// testcase step 실행
        	//----------------------------------------------
        	tcStep : null,
        	setTCStep : function(step) {
        		this.tcStep = step;
        	},
        	getTCStep : function() {
        		return this.tcStep;
        	},

        	initialize : function(step) {
        		step.setStep("initialize");
        		this.setTCStep(step);

        		var ret = undefined;
        		var logger = TestAPI.getLogger();
        		var initializeDef = this.getDefObject().initialize;

        		if (initializeDef != undefined && initializeDef != null) {
        			ret = false;
        			var message = null;

        			try {
        				ret = initializeDef.call(TestAPI.getTestApplication());

        				// 무조건 step 단위로 기록
        				if (ret == undefined || ret == null) {
        					ret = true;
        				}
        				message = this.getDefObject().description;
        				logger.stepLog( step, ret, message);
        			} catch(err) {
        				ret = false;
        				step.setPassed(false);
        				message = err.message;
        				this.setAbnormalTerminated(message);
        			}
        			step.setMessage(message);
        		}
        		return ret;
        	},
        	finalize : function(step) {
        		step.setStep("finalize");

        		var logger = TestAPI.getLogger();
        		var defFinalize = this.getDefObject().finalize;

        		if (defFinalize != undefined && defFinalize != null) {
        			try {
        				var chk = defFinalize.call(TestAPI.getTestApplication());
        				// 무조건 step 단위로 기록
        				if (chk == undefined || chk == null) {
        					chk = true;
        				}
        				// TC 단위로 메모리 회수
        				nexacro.gc();
        				// logger.stepLog(step, chk, "");
        			} catch(err) {
        				// logger.stepLog(step, false, err.message);
        				step.setMessage(err.message);
        				this.setAbnormalTerminated(err.message);
        			}
        		}
        	},

        };

        TestAPI.TcAdaptor.prototype.constructor = TestAPI.TcAdaptor;

        //=========================================================================
        //	VdAdaptorBase 정의
        //=========================================================================
        TestAPI.VdAdaptorBase = function(tcAdt, vdDef)
        {
        	this.setTcAdaptor(tcAdt);
        	this.setDefObject(vdDef);
        	this.setName("VdAdaptorBase");

        	// this.initVdAdaptor();	// 오류 발생 : 이유 모름
        };

        TestAPI.VdAdaptorBase.prototype = {
        	name : null,	// VdAdaptor의 Object Type name
        	setName : function(name) {
        		this.name = name;
        	},
        	getName : function() {
        		return this.name;
        	},

        	id : null,		// Testcase에서 정의한 validator id
        	setId : function(id) {
        		this.id = id;
        	},
        	getId : function() {
        		return this.id;
        	},

        	vdIndex : -1,	// testcase 구별자
        	setVdIndex : function(vdIndex) {
        		this.vdIndex = vdIndex;
        	},
        	getVdIndex : function() {
        		return this.vdIndex;
        	},

        	getDescription : function() {
        		return this.tcAdt.getDescription() + "." + this.getId();
        	},

        	vdNo : null,		// Testcase에서 정의한 validator id
        	setVdNo : function(vdNo) {
        		this.vdNo = vdNo;
        	},
        	getVdNo : function() {
        		return this.vdNo;
        	},

        	argType : -1,	// == repeat.argType
        	setArgType : function(argType) {
        		this.argType = argType;
        	},
        	getArgType : function() {
        		return this.argType;
        	},

        	tcAdt : null,
        	setTcAdaptor : function(tcAdt) {
        		this.tcAdt = tcAdt;
        	},
        	// deprecated : use getTcAdaptor()
        	getTC : function() {
        		return this.tcAdt;
        	},
        	getTcAdaptor : function() {
        		return this.tcAdt;
        	},
        	defObj : null,	// Validator definition object
        	setDefObject : function(defObj) {
        		this.defObj = defObj;
        	},
        	getDefObject : function() {
        		return this.defObj;
        	},
        	getVcInfo : function() {
        		var vdDef = this.getDefObject();
        		if(vdDef.vcinfo != undefined)	return vdDef.vcinfo;
        		if(vdDef.repeat != undefined)	return vdDef.repeat;
        		return undefined;
        	},

        // 	stepInfo : null,
        // 	setStepInfo : function(stepInfo) {
        // 		this.stepInfo = stepInfo;
        // 	},
        // 	getStepInfo : function() {
        // 		return this.stepInfo;
        // 	},

        	vcStep : null,
        	setVCStep : function(vcStep) {
        		this.vcStep = vcStep;
        	},
        	getVCStep : function() {
        		return this.vcStep;
        	},
        	defaultMaxstepTime : 10000,
        	setMaxStepTime : function(maxStepTime) {
        		var runner = TestAPI.getRunner();
        		runner.getApplicationMonitor().setMaxStepTime(maxStepTime);
        	},
        	bAbnormalTerminated : false,
        	abnormalMessage : null,
        	isAbnormalTerminated : function() {
        		return this.bAbnormalTerminated;
        	},
        	setAbnormalTerminated : function(errormsg) {
        		this.bAbnormalTerminated = true;
        		this.abnormalMessage = errormsg;
        	},
        	getAbnormalMessage : function() {
        		return this.abnormalMessage;
        	},
        	clearAbnormalTerminated : function() {
        		this.bAbnormalTerminated = false;
        		this.abnormalMessage = null;
        	},
        	// initVdAdaptor : function() {	// validator 최초 실행시 초기화 처리
        	initialize : function() {	// validator 최초 실행시 초기화 처리
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "initialize");
        		}
        		if(TestAPI.DS) devLogger.trace2("start", origin);

        		if(this.defObj == null) {
        			throw "VdAdaptorBase.initialize() : Definition object is not declared.";
        		}
        // 		if (this.defObj.run == undefined || this.defObj.run == null) {
        // 			throw "VdAdaptorBase.initialize() : VdAdaptor must declare a run function.";
        // 		}

        		this.initArguments();
        		this.initTaskFlows();

        		// VCStep.prepare()에서 수행
        		// this.initNotifiers();	// ???

        		this.succCount = 0;
        		this.failCount = 0;

        		if(TestAPI.DS) devLogger.trace2("finish", origin);
        	},
        	resetStatus : function(index) {
        		this.autoTaskFlowNames.rewind(index);
        		this.clearNotifierStatus();

        		this.repeatIndex = 0;
        // 		this.vc_index = -1;				// VC 반복 일련번호
        // 		this.currArg = {vc : undefined, ev : undefined};
        // 		this.descVC = null;
        // 		this.expectedValue = null;		// 기대값 저장
        		this.bFinishedVC = false;

        		this.succCount = 0;
        		this.failCount = 0;

        	},
        	// finalizeVdAdaptor : function() {
        	finalize : function() {
        		// notifier 등록/해제 작업은 VC_END에서 VC별로 수행

        		// 여기에서는 비정상 종료시 남아있는 handler를 제거하기 위함
        		var nm = vdAdt.getNotifierManager();
        		if(nm != null) {
        			nm.unregisterNotifiers();
        		}

        	},
        	clean : function() {
        		if(this.autoTaskFlowNames != null) {
        			this.autoTaskFlowNames.clean();
        			this.autoTaskFlowNames = null;
        		}

        		if(this.notifierManager != null) {
        			this.notifierManager.clean();
        			this.notifierManager = null;
        		}
        	},

        	//------------------------------------------
        	// 자동 task flow 관리
        	//------------------------------------------
        	autoTaskFlowNames: null,	// == validator.autoTaskFlow
        	getTaskFlowNameList : function() {
        		return this.autoTaskFlowNames;
        	},
        	getTaskFlowName : function() {
        		if (this.autoTaskFlowNames.size() > 0) {
        			return this.autoTaskFlowNames.getCurrent();
        		}
        		return null;
        	},
        	getTaskFlowCount : function() {
        		return this.autoTaskFlowNames.size();
        	},
        	initTaskFlows : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "initTaskFlows");
        		}
        		if(TestAPI.DS) devLogger.debug("start", origin);

        		var vdDef = this.getDefObject();
        		this.autoTaskFlowNames = new TestAPI.Container("AutoTaskFlowNames");

        		if (vdDef != undefined && vdDef != null) {
        			var atf = vdDef.autoTaskFlow;
        			if(atf != undefined && atf != null) {
        				for(var i = 0; i < atf.length; i++) {
        					this.autoTaskFlowNames.add(atf[i]);
        				}
        			}
        		}
        		if(TestAPI.DS) devLogger.debug("registered " + this.autoTaskFlowNames.size()
        				+ " task flow names.", origin);
        	},

        	//------------------------------------------
        	// notifier 관리
        	//------------------------------------------
        	notifierManager : null,
        	getNotifierManager : function() {
        		return this.notifierManager;
        	},
        	initNotifiers : function() {
        // 		if(TestAPI.DS) {
        // 			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "initNotifiers");
        // 		}

        		var defList = this.getDefObject().notifier;

        		if (defList == undefined || defList == null || defList.length == 0) {
        			// 지정된 notifier 없음
        			return;
        		}
        		this.notifierManager = new TestAPI.NotifierManager(this, defList);
        	},
        // 	// 필수 event 발생
        // 	triggeredMandatoryEvent : function(targetObj, evtInfo) {
        // 		return this.triggeredEvent(TestAPI.NT_EH, evtInfo.eventid,
        // 					targetObj, evtInfo, TestAPI.NTT_MANDATORY);
        // 	},
        // 	// 선택 event 발생
        // 	triggeredOptionalEvent : function(targetObj, evtInfo) {
        // 		return this.triggeredEvent(TestAPI.NT_EH, evtInfo.eventid,
        // 					targetObj, evtInfo, TestAPI.NTT_OPTION);
        // 	},
        // 	// TestApplication의 callback event에서 notifier 발생 정보를 엔진에 등록
        // 	triggeredEvent : function(aNotifierType, aNotifierName,
        // 			targetObj, evtInfo, triggerType) {
        //
        // 		var nm = this.getNotifierManager();
        // 		if(nm == undefined || nm == null) {
        // 			this.notifierManager = new TestAPI.NotifierManager(this, notiDef);
        // 			nm = this.getNotifierManager();
        // 		}
        //
        // 		var notifierList = nm.getNotifierList();
        // 		var bRegistered = false;
        // 		var notifier = null;
        // 		var argId = targetObj.id + "." + aNotifierName;
        //
        // 		// 등록된 notifier인지 확인
        // 		for(var i = 0; i < notifierList.size(); i++) {
        // 			notifier = notifierList.get(i);
        // 			var notiId = notifier.getId();
        // 			if(notiId == argId) {
        // 				bRegistered = true;
        // 				break;
        // 			}
        // 		}
        // 		// notifier 등록
        // 		if(bRegistered == false) {
        // 			var notiDef = {
        // 					notifierType : aNotifierType,
        // 					targetObject : targetObj,
        // 					notifierName : aNotifierName,
        // 					trigger		 : triggerType
        // 				};
        // 			var bRegisterHandler = false;
        // 			notifier = nm.createTypedNotifier(this, notiDef.notifierType, notiDef, bRegisterHandler);
        //
        // 			notifierList.add(notifier);
        // 		}
        //
        // 		// Trigger logging
        // 		notifier.handle(targetObj, evtInfo);
        // 	},
        	triggeredEvent : function(targetObj, evtInfo) {

        		var nm = this.getNotifierManager();
        		if(nm == undefined || nm == null) {
        // 			this.notifierManager = new TestAPI.NotifierManager(this, notiDef);
        // 			nm = this.getNotifierManager();
        			trace("notifier가 정의되지 않음.");
        			return;
        		}

        		var notifierList = nm.getNotifierList();
        		// var bRegistered = false;
        		var notifier = null;
        		var argId = targetObj.id + "." + evtInfo.eventid;

        		// 등록된 notifier인지 확인
        		for(var i = 0; i < notifierList.size(); i++) {
        			var noti = notifierList.get(i);
        			var notiId = noti.getId();
        			if(notiId == argId) {
        				// bRegistered = true;
        				notifier = noti;
        				break;
        			}
        		}
        // 		// notifier 등록
        // 		if(notifier == null) {
        // 			var notiDef = {
        // 					notifierType : aNotifierType,
        // 					targetObject : targetObj,
        // 					notifierName : aNotifierName,
        // 					trigger		 : triggerType
        // 				};
        // 			var bRegisterHandler = false;
        // 			notifier = nm.createTypedNotifier(this, notiDef.notifierType, notiDef, bRegisterHandler);
        //
        // 			notifierList.add(notifier);
        // 		}

        		// Trigger logging
        		if(notifier != null) {
        			notifier.handle(targetObj, evtInfo);
        		} else {
        			trace("존재하지 않는 notifier : " + argId + ".");
        		}
        	},
        // 	// callback 발생
        // 	triggeredCallback : function(targetObj, callbackName) {
        // 		return this.triggeredNotifier(TestAPI.NT_CB_WAIT, callbackName,
        // 					targetObj, null, TestAPI.NTT_MANDATORY);
        // 	},
        // 	getEventNotifierType : function(eventId) {
        // 		switch(eventId) {
        // 		default :
        // 			return TestAPI.NT_EH_WAIT;
        // 		}
        // 	},
        	clearNotifierStatus : function() {
        		if (this.notifierManager != null) {
        			this.notifierManager.clearNotifierStatus();
        		}
        	},
        	// notifier가 정상적으로 발생되었는지,
        	//	발생된 event 값이 기대값과 일치하는지 확인
        	isNotifierPassed : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "isNotifierPassed");
        		}
        		if(TestAPI.DS) devLogger.trace2("start", origin);

        		if (this.notifierManager != null) {
        			return this.notifierManager.isNotifierPassed();
        		}
        		if(TestAPI.DS) devLogger.trace2("finish", origin);
        		return true;
        	},

        	//------------------------------------------
        	// flow control 관리
        	//------------------------------------------
        	beginWait : function(timeout, stepFlowControlType) {
        		var runner = TestAPI.getRunner();
        		if (runner == null) {
        			throw "VdAdaptorBase.beginWait() :: Runner is not started.";
        		}
        		runner.beginWait(timeout, stepFlowControlType);
        	},
        	releaseWait : function() {
        		var runner = TestAPI.getRunner();
        		if (runner == null) {
        			throw "VdAdaptorBase.releaseWait() :: Runner is not started.";
        		}
        		runner.releaseWait();
        	},
        	isWait : function() {
        		var runner = TestAPI.getRunner();
        		if (runner == null) {
        			throw "VdAdaptorBase.isWait() :: Runner is not started.";
        		}
        		return runner.isWait();
        	},
        	isReleasedWait : function() {
        		var runner = TestAPI.getRunner();
        		if (runner == null) {
        			throw "VdAdaptorBase.isReleasedWait() :: Runner is not started.";
        		}
        		return runner.isReleasedWait();
        	},

        	//------------------------------------------
        	// VD 반복 수행을 위한 VC의 metadata 관리
        	//------------------------------------------
        	initArguments : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "initArguments");
        		}
        		if(TestAPI.DS) devLogger.trace2("start", origin);
        		var vcInfo = this.getVcInfo();

        		if(vcInfo != undefined && vcInfo.repeatCount != undefined) {
        			var rc = vcInfo.repeatCount;
        			trace("Validator : repeat count = " + rc);
        			this.setRepeatCount(rc);
        		}

        		if(TestAPI.DS) devLogger.trace2("finish", origin);
        	},
        	argCount : 0,
        	getArgCount : function() {
        		return this.argCount;
        	},
        	setArgCount : function(argCount) {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "setArgCount");
        			devLogger.debug("start", origin);
        		}
        		if(argCount < 0) {
        			throw "VdAdaptorBase.setArgCount() :: invalid argument count " + argCount + ".";
        		}
        		this.argCount = argCount;
        		if(TestAPI.DS) devLogger.debug("registered " + this.getArgCount() + " args.", origin);
        	},
        	net_vc_count : 1,
        	setNetVCCount: function(count) {
        		this.net_vc_count = count;
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "setNetVCCount");
        			devLogger.debug("registered " + this.net_vc_count + " VCs.", origin);
        		}
        	},
        	getNetVCCount: function() {
        		return this.net_vc_count;
        	},
        	isCheckVC : function() {
        		var vdDef = this.getDefObject();
        		var vcinfo = this.getVcInfo(vdDef);

        		if (vcinfo == undefined || vcinfo == null || vcinfo.checkVC == undefined) {
        			return true;
        		}
        		return vcinfo.checkVC;
        	},
        	bHasBoundary : false,
        	setHasBoundary : function(bFlag) {
        		this.bHasBoundary = bFlag;
        	},
        	hasBoundary : function() {
        		return this.bHasBoundary;
        	},

        	//------------------------------------------
        	// repeat시 현재 사용중인 VC의 추적 관리
        	//------------------------------------------
        	repeatCount : 1,
        	getRepeatCount : function() {
        		return this.repeatCount;
        	},
        	setRepeatCount : function(count) {
        		this.repeatCount = count;
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "setNetVCCount");
        			devLogger.debug("registered " + this.repeatCount + " times repeater.", origin);
        		}
        	},
        	repeatIndex : 0,
        	getRepeatedCount : function() {
        		return this.repeatIndex;
        	},
        	increaseRepeatedCount : function() {
        		this.repeatIndex++;
        	},
        //	vc_index : -1,			// VC 반복 일련번호
        	initVC : function() {	// 반복 처리를 위한 VC의 status 초기화
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "initVC");
        			devLogger.trace2("start", origin);
        		}

        		// VC별로 초기화 대상
        		// this.taskFlowIndex = -1;	// initialize auto task flows index
        		this.autoTaskFlowNames.rewind(-1);
        		this.clearNotifierStatus();	// notifier 발생 여부

        		// VC별 초기화 하면 안되는 대상
        		// this.bFinishedVC = false;
        		// this.vc_index = -1;	// VC는 Validator에 대해 1번만 수행되어야 함

        		if(TestAPI.DS) devLogger.trace2("finish", origin);
        	},
         	getIndexVC : function() {
         		// return this.vc_index;
        		var step = this.getVCStep();
        		return step.getRefValue();
         	},
        	getValue : function(argIndex) {
        		return this.getVCStep().getValue(argIndex);
        	},
        	getBoundaryType : function(argIndex) {
        		return this.getVCStep().getBoundaryType(argIndex);
        	},
        	setExpectedValue : function(value) {
        		var vcstep = this.getVCStep();
        		vcstep.setExpectedValue(value);
        	},
        	getExpectedValue : function() {
        		return this.getVCStep().getExpectedValue();
        	},

        	//-----------------------------------
        	// 다중 task 실행시 VC의 종료 여부 관리
        	//-----------------------------------
        	bFinishedVC : false,
        	isFinishedVC : function() {
        		// return this.bFinishedVC;
        		var vcstep = this.getVCStep();
        		if(vcstep == null) {
        			throw "VdAdaptorBase.setExpectedValue() :: VcStep is undefined.";
        		}
        		if (vcstep.getRefValue() == this.getNetVCCount() - 1) {
        			return true;
        		}
        		return false;
        	},
        	finishedVC : function() {
        		this.bFinishedVC = true;
        	},

        	//-----------------------------------
        	// Test 결과 관리
        	//-----------------------------------
        	succCount : 0,
        	increaseSuccCount : function() {
        		this.succCount++;
        	},
        	getSuccCount : function() {
        		return this.succCount;
        	},
        	failCount : 0,
        	increaseFailCount : function() {
        		this.failCount++;
        	},
        	getFailCount : function() {
        		return this.failCount;
        	},

        	//-----------------------------------
        	// VD의 VC별 처리 단계 실행
        	//-----------------------------------
        	prepare : function(step) {
        		// var step = TestAPI.getWorkingStepInfo();
        		// step.setStep("prepare");

        		this.setVCStep(step);

        		this.initVC();

        		var ret = undefined;
        		var logger = TestAPI.getLogger();
        		var prepareDef = this.getDefObject().prepare;

        		if (prepareDef != undefined && prepareDef != null) {
         			ret = false;
        			try {
         				var ctx = TestAPI.getTestApplication();
        				ret = prepareDef.call(ctx);
        				if(ret == undefined || ret == null) {
        					ret = true;
        				}
        				logger.stepLog(step, ret, "");
        			} catch(err) {
        				this.setAbnormalTerminated(err.message);
        				// logger.stepLog(step, false, err.message);
        				step.setMessage(err.message);
        			}
        		}
        		return ret;
        	},

        	run : function(step) {
        		var logger = TestAPI.getLogger();
        		var runDef = this.getDefObject().run;

        		if (runDef == null || runDef == undefined) {
        			return undefined;
        		}

        		var resultValue = undefined;
        		try {
        			var ctx = TestAPI.getTestApplication();
        			resultValue = runDef.call(ctx);
        			step.setResultValue(resultValue);
        		} catch(err) {
        			var tfNameList = this.getTaskFlowNameList();
        			var taskName = "";
        			if(tfNameList.size() > 0) {
        				taskName = "[task=" + this.getTaskFlowName() + "] ";
        			}
        			var message = taskName + err.message;
        			this.setAbnormalTerminated(message);
        			// logger.stepLog(step, false, message);
        			step.setMessage(message);
        		}
        		return resultValue;
        	},
        	check : function(step) {
        		// var step = TestAPI.getWorkingStepInfo();
        		// step.setStep("check");

        		var logger = TestAPI.getLogger();

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "check");
        		}

        		var chk = false;
        		var checkDef = this.getDefObject().check;
        		var message = "";

        		if (checkDef != undefined && checkDef != null) {
         			try {
        				// notifier 결과는 isNotifierPassed()에서 기록
        				var notifierChk = this.isNotifierPassed();
        				if(notifierChk == undefined || notifierChk == true) {
        					notifierChk = true;
        				} else {
        					notifierChk = false;
        				}
        				step.setPassed(notifierChk);
        				// 개별 항목 단위만 기록
        				// logger.stepLog(step, notifierChk, "Notifier check.");

        				var ctx = TestAPI.getTestApplication();
        				var resultValue = step.getResultValue();
        				var expectedValue = step.getExpectedValue();

        				// 전체 실행 결과값을 저장 : 기대값을 결과값으로 생성하기 위함
        				var am = TestAPI.getRunner().getApplicationMonitor();
        				if(am.isMapRVtoEV() == true) {
        					this.setExpectedValue(resultValue);
        				}

        				var checkerChk = checkDef.call(ctx, resultValue, expectedValue);
        				// return을 안할 수도 있음 : 응용에서 API 이용하여 자체 logging 처리 가능
        				if (checkerChk != undefined) {
        					// 개별 항목단위만 기록
        					// check에서 변경할 수 있으므로 겨로가값을 다시 확인
        					resultValue = step.getResultValue();
        					expectedValue = step.getExpectedValue();

        					message = "result=<" + resultValue + ">, expected=<" +  expectedValue + ">";

        					if(checkerChk == false){
        						step.setPassed(checkerChk);
        					}
        					logger.stepLog(step, checkerChk, message);
        					step.setMessage(message);

        				}

        				if (checkerChk == undefined || checkerChk == true) {
        					checkerChk = true;
        				} else {
        					checkerChk = false;
        					step.setStatus(TestAPI.STATUS_ABNORMAL);
        				}

        				// notifier check 결과를 checker check 결과와 통합하여 최종 성공 여부 결정
        				chk = notifierChk & checkerChk;
        			} catch(err) {
        				this.setAbnormalTerminated(err.message);
        				// logger.stepLog(step, false, err.message);
        				step.setMessage(err.message);
        			}
        		}

        		return chk;
        	},
        	checkEvent : function(step, notifier, evtInfo) {
        		if(step == undefined || step.getArgument() == undefined) {
        			return undefined;
        		}
        		// step.setStep("checkEvent");	// step = run() 유지

        		// { vc : ..., ev : ..., notifier : { }
        		var notiId = notifier.getId();
        		var arg = step.getArgument();
        		var chkNoti = null;
        		var ev = undefined;

        		// notifier가 정의되었는지 여부 확인
        		if(arg.notifier != undefined) {
        			var vcNotiList = arg.notifier;
        			for(var i = 0; i < vcNotiList.length; i++) {
        				var vcNoti = vcNotiList[i];
        				if(vcNoti.id == notiId) {
        					chkNoti = vcNoti;
        					ev = chkNoti.ev;
        					break;
        				}
        			}
        		}

        		//  chkNoti가 없는 경우에도 checkNotifier 호출 : check 여부는 test application에서 결정
        // 		if(chkNoti == null) {
        // 			return undefined;
        // 		}

        		var checkEventDef = this.getDefObject().checkEvent;
        		if (checkEventDef == undefined) {
        			return undefined;
        		}

        		var bNotiChkResult = false;
        		var logger = TestAPI.getLogger();

        		try {
        			var ctx = TestAPI.getTestApplication();
        			bNotiChkResult = checkEventDef.call(ctx, notifier, evtInfo, ev);

        			if(bNotiChkResult == undefined) {
        				// test application에서 check한 경우(!= undefined)에만 logging
        				logger.logByStep(logger.WARN, step, "Event check 정의 안됨.", undefined)
        			}
        		} catch(err) {
        			this.setAbnormalTerminated(err.message);
        			// logger.stepLog(step, false, err.message);
        			step.setMessage(err.message);
        		}

        		return bNotiChkResult;
        	},
        	teardown : function(step) {
        		// var step = TestAPI.getWorkingStepInfo();
        		// step.setStep("teardown");

        		var logger = TestAPI.getLogger();

        		var teardownDef = this.getDefObject().teardown;
        		if (teardownDef != undefined && teardownDef != null) {
        			try {
         				var ctx = TestAPI.getTestApplication();
        				teardownDef.call(ctx);
        				logger.stepLog(step, undefined, "");
        			} catch(err) {
        				this.setAbnormalTerminated(err.message);
        				// logger.stepLog(step, false, err.message);
        				step.setMessage(err.message);
        			}
        		}
        	},

        	logCheckResult : function(resultValue, expectedValue, chk) {
        		var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "logCheckResult");

        		if(TestAPI.DS) {
        			devLogger.trace2("start", origin);
        		}

        		// var step = TestAPI.getWorkingStepInfo();
        		var step = this.getVCStep();
        		step.setResultValue(resultValue);
        		step.setExpectedValue(expectedValue);

        		if(chk == false) {
        			step.setFailed();
        		}

        		var msg = "result=<" + resultValue + ">, expect=<" + expectedValue + ">";

        		var logger = TestAPI.getLogger();
        		logger.stepLog(step, chk, msg);
        	},
        	logCheckError : function(msg) {
        		var origin = TestAPI.createLoggerOrigin ("VdAdaptorBase", "logCheckError");

        		devLogger.trace2("start", origin);

        		// var step = TestAPI.getWorkingStepInfo();
        		var step = this.getVCStep();
        		var logger = TestAPI.getLogger();

        		logger.stepLog(step, false, msg);
        	},
        };

        TestAPI.VdAdaptorBase.prototype.constructor = TestAPI.VdAdaptorBase;

        //=========================================================================
        //	SingleVCVdAdaptor 정의
        //=========================================================================
        TestAPI.SingleVCVdAdaptor = function(tcAdt, vdDef)
        {
        	this.setTcAdaptor(tcAdt);
        	this.setDefObject(vdDef);
        	this.setName("SingleVCVdAdaptor");
        };

        TestAPI.SingleVCVdAdaptor.prototype = Object.create(TestAPI.VdAdaptorBase.prototype, {
        	initArguments : {
        		value : function() {
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("SingleVCVdAdaptor", "initArguments");
        				devLogger.trace2("start", origin);
        			}
        			TestAPI.VdAdaptorBase.prototype.initArguments.call(this);

        			this.setNetVCCount(1);
        			this.setArgCount(0);
        			this.setHasBoundary(false);

        			// this.currArg = {vc : undefined, ev : undefined};
        			if(TestAPI.DS) devLogger.trace2("finish", origin);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        // 	move2NextVC : {
        // 		value : function() {
        // 			TestAPI.VdAdaptorBase.prototype.move2NextVC.call(this);
        // 			this.makeDescriptionVC();
        // 		},
        // 		enumerable : true,
        // 		configurable : true,
        // 		writable : true
        // 	},
        } );

        TestAPI.SingleVCVdAdaptor.prototype.constructor = TestAPI.SingleVCVdAdaptor;

        //=========================================================================
        //	ListVCVdAdaptor 정의
        //=========================================================================
        TestAPI.ListVCVdAdaptor = function(tcAdt, vdDef)
        {
        	TestAPI.VdAdaptorBase.call(this, tcAdt, vdDef);
        	this.setName("ListVCVdAdaptor");
        }

        TestAPI.ListVCVdAdaptor.prototype = Object.create(TestAPI.VdAdaptorBase.prototype, {
        	initArguments : {
        		value : function() {
        			var who = "ListVCVdAdaptor.initArguments()";
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("ListVCVdAdaptor", "initArguments");
        				devLogger.trace2("start", origin);
        			}
        			TestAPI.VdAdaptorBase.prototype.initArguments.call(this);

        			// var vdDef = this.getDefObject();
        			var vcinfo = this.getVcInfo();

        			if (vcinfo == undefined) {
        				if(TestAPI.version >= 0.71) {
        					throw who + " :: Validator.vcinfo is not defined.";
        				} else {
        					throw who + " :: Validator.repeat is not defined.";
        				}
        			}
        			var argDef = vcinfo.args;
        			if (argDef == undefined || argDef == null) {
        				if(TestAPI.version >= 0.71) {
        					throw who + " :: Validator.vcinfo.args is not defined.";
        				} else {
        					throw who + " :: Validator.repeat.args is not defined.";
        				}
        			}

        			// args = [	// has strategy
        			// 	{vc : [ [this.VBT_NORMAL, 10], [...] ], ev : 1},
        			// 	{vc : [ [this.VBT_NORMAL, 10], [...] ], ev : 2},
        			// 	{ vcN = [ ... ] }
        			// ]
        			//	or
        			// args = [	// has no strategy
        			// 	{ vc : [ 10, 20, 30, ... ], ev : 1},
        			// 	{ vc : [ 10, 20, 30, ... ], ev : 2},
        			// 	{ vcN = [ ... ] }
        			// ]
        			var netVcCount = 0;
        			var argCount = 0;
        			var bHasBoundary = false;

        			if(argDef.length != undefined && argDef.length > 0) {
        				netVcCount = argDef.length;
        				var arg= argDef[0];

        				// VC에 경계값 유형이 지정되어 있는지 확인
        				// getValue()시 값을 추출하는 index 위치를 결정하기 위함
        				// 형태 :
        				//		type-1 : args[0].vc[0] = [ [B1,V1], {B2,V2], ... ]	--> true
        				//		type-2 : args[0].vc[0] = [ V1, V2, ... ]			--> false
        				// args[0].vc[0] = '[' object, args[0].vc[0][0] = data type(number, string 등)
        				var vc = undefined;
        				if (arg.vc != undefined) {
        					vc = arg.vc;
        					if(vc.length == undefined) {
        						// {vc : 100, ev : 100 }
        						argCount = 1;
        					} else {
        						// { vc : [] , ev : xxx }
        						argCount = vc.length;
        						if (vc.length >= 1) {
        							argCount = vc.length;

        							var param = vc[0];
        							if(param.length != undefined && param.length > 1) {
        								// { vc : [[vbt, val], [vbt, val], ...] , ev : xxx }
        								bHasBoundary = true;
        							}
        						}
        					}
        				}
        	// 			trace ("argVC = <" + argVC + ">, type = " + vt
        	// 				// + ", length = " + argVC.length
        	// 			);

        				if(TestAPI.DS) {
        					if(bHasBoundary == true) {
        						devLogger.trace2("has boundary types. " + argCount + " args.", origin);
        					} else {
        						devLogger.trace2("has not boundary types. " + argCount + " args.", origin);
        					}
        				}
        			}


        			this.setNetVCCount(netVcCount);
        			this.setArgCount(argCount);
        			this.setHasBoundary(bHasBoundary);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	// 현재 index의 argument 획득
        // 	getCurrIndexedArg: {
        // 		value : function() {
        // 			if(TestAPI.DS) {
        // 				var origin = TestAPI.createLoggerOrigin ("ListVCVdAdaptor", "getCurrIndexedArg");
        // 				devLogger.trace2("start", origin);
        // 			}
        //
        // 			var vdDef = this.getDefObject();
        // 			if(TestAPI.DS) devLogger.trace2("1", origin);
        //
        // 			var vcIndex = this.getIndexVC();
        // 			if (vcIndex < 0) {
        // 				vcIndex = 0;
        // 			}
        // 			if(TestAPI.DS) devLogger.trace2("vc[" + vcIndex + "]", origin);
        //
        // 			var vcinfo = this.getVcInfo(vdDef);
        // 			var arg = vcinfo.args[vcIndex];
        // 			var currArg = null;
        //
        // 			if (this.hasBoundary) {
        // 				currArg = arg;
        // 			} else {
        // 				currArg = {vc : [], ev : arg.ev};
        // 				for(var i=0; i < arg.vc.length; i++) {
        // 					currArg.vc.push([TestAPI.VBT_UNDEFINED, currArg.vc[i]]);
        // 				}
        // 			}
        //
        // 			if(TestAPI.DS) devLogger.trace2("finish", origin);
        //
        // 			return currArg;
        // 		},
        // 		enumerable : true,
        // 		configurable : true,
        // 		writable : true
        // 	},
        // 	move2NextVC : {
        // 		value : function() {
        // 			// var desc = "tc.vd[" + this.getVdNo() + "].vc[" + this.getIndexVC() + "]";
        // 			TestAPI.VdAdaptorBase.prototype.move2NextVC.call(this);
        // 			var arg = this.getCurrIndexedArg();
        // 			this.setCurrArg(arg);
        // 		},
        // 		enumerable : true,
        // 		configurable : true,
        // 		writable : true
        // 	},
        // 	getValidationStrategy : {
        // 		value : function(vcIndex) {
        // 			var who = "ListVCVdAdaptor.getBoundaryType()";
        //
        // 			var vdDef = this.getDefObject();
        // 			var vcinfo = this.getVcInfo(vdDef);
        // 			var args = vcinfo.args;
        //
        // 			if(vcIndex < 0 || vcIndex >= args.length) {
        // 				throw who + " : args index violation : " + argNo;
        // 			}
        // 			var vc = args[vcIndex];
        // 			var boundaryTypes = [];
        //
        // 			for(var i = 0; i < vc.length; i++) {
        // 				var bt = this.vc[i][0];
        // 				boundaryTypes.push = bt;
        // 			}
        // 			return boundaryTypes;
        //
        // 		},
        // 		enumerable : true,
        // 		configurable : true,
        // 		writable : true
        // 	},
        // 	getValue : {
        // 		value : function(argIndex) {
        // 			if(TestAPI.DS) {
        // 				var origin = TestAPI.createLoggerOrigin ("ListVCVdAdaptor", "getValue");
        // 			}
        // 			var arg = this.getCurrIndexedArg();
        // 			if (arg == undefined || arg == null) {
        // 				return undefined;
        // 			}
        // // 			var vdDef = this.getDefObject();
        // // 			var vcinfo = this.getVcInfo(vdDef);
        // // 			var args = vcinfo.args;
        // // 			var arg = args[this.getIndexVC()];
        // // 			trace("getValue() : arg.vc = <" + arg.vc + ">");
        //
        // 			var val = null;
        // 			if (arg.vc[argIndex].length == 1) {
        // 				val = arg.vc[argIndex][0];
        // 			} else {
        // 				val = arg.vc[argIndex][1];
        // 			}
        // // 			var typeVal = typeof val;
        // // 			trace("typeof getValue() = " + typeVal + ", value = " + val);
        //
        // 			return val;
        // 		},
        // 		enumerable : true,
        // 		configurable : true,
        // 		writable : true
        // 	},


        } );

        TestAPI.ListVCVdAdaptor.prototype.constructor = TestAPI.ListVCVdAdaptor;

        //=========================================================================
        //	CombiVCVdAdaptor 정의
        //=========================================================================
        TestAPI.CombiVCVdAdaptor = function(tcAdt, vdDef)
        {
        	TestAPI.ListVCVdAdaptor.call(this, tcAdt, vdDef);
        	this.setName("CombiVCVdAdaptor");
        }

        TestAPI.CombiVCVdAdaptor.prototype = Object.create(TestAPI.ListVCVdAdaptor.prototype, {
        	combiArgs : {
        		value : undefined,	// original combination arg definitions
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	initArguments : {
        	value : function() {
        			this.transformCombiToList();
        			TestAPI.ListVCVdAdaptor.prototype.initArguments.call(this);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        	transformCombiToList : {
        		value : function() {
        			var who = "CombiVCVdAdaptor.transformCombiToList()";

        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("CombiVCVdAdaptor", "transformCombiToList");
        				devLogger.trace2("start", origin);
        			}

        			// var vdDef = this.getDefObject();
        			var vcinfo = this.getVcInfo();

        			if (vcinfo == undefined) {
        				if(TestAPI.version >= 0.71) {
        					throw who + " : validator.vcinfo is not declared.";
        				} else {
        					throw who + " : validator.repeat is not declared.";
        				}
        			}

        			if (vcinfo.args == undefined) {
        				if(TestAPI.version >= 0.71) {
        					throw who + " : validator.vcinfo.args is not declared.";
        				} else {
        					throw who + " : validator.repeat.args is not declared.";
        				}
        			}

        			this.combiArgs = vcinfo.args;
        			vcinfo.args = [];	// list type arg definitions

        			var argCount = this.combiArgs.length;
        			var argIndexes = [];

        			var vcCount = 1;
        			for(var argNo = 0; argNo < argCount; argNo++) {
        				argIndexes.push(0);
        				vcCount *= this.combiArgs[argNo].length;	// arg의 value 갯수
        			}
        			argIndexes[argCount - 1] = -1;

        			// arg type을 list type으로 변환
        			for(var vcIndex = 0; vcIndex < vcCount; vcIndex++) {
        				// position to next VC
        				for(var argNo = argCount - 1; argNo >= 0; argNo--) {
        					argIndexes[argNo]++;
        					if (argIndexes[argNo] < this.combiArgs[argNo].length) {
        						break;
        					}
        					argIndexes[argNo] = 0;
        				}
        				var arg = { vc : [], ev : undefined };

        				for(var argNo = 0; argNo < argCount; argNo++) {
        					var valIndex = argIndexes[argNo];
        					var argValue = this.combiArgs[argNo][valIndex];
        					arg.vc.push(argValue);
        				}
        				vcinfo.args.push(arg);	// 조합된 arg 추가
        			}

        			if(TestAPI.DS) devLogger.trace2("finish", origin);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        // 	getExpectedValue : {
        // 		value : function() {
        // 			if(TestAPI.DS) {
        // 				var origin = TestAPI.createLoggerOrigin ("CombiVCVdAdaptor", "getExpectedValue");
        // 				devLogger.trace2("start", origin);
        // 			}
        //
        // 			if(this.currArg == null) {
        // 				throw "CombiVCVdAdaptor.getExpectedValue() :: current arg is undefined error.";
        // 			}
        // 			if (this.currArg.ev == undefined || this.currArg.ev == null) {
        // 				this.currArg.ev = this.retrieveExpectedValue();
        // 			}
        // 			if(TestAPI.DS) devLogger.trace2("finish", origin);
        // 			return this.currArg.ev;
        // 		},
        // 		enumerable : true,
        // 		configurable : true,
        // 		writable : true
        // 	},
        	retrieveExpectedValue : {
        		value : function() {
        			if(TestAPI.DS) {
        				var origin = TestAPI.createLoggerOrigin ("CombiVCVdAdaptor", "retrieveExpectedValue");
        				devLogger.trace2("start", origin);
        			}

        // 			if(this.currArg == null) {
        // 				throw "CombiVCVdAdaptor.retrieveExpectedValue() :: current arg is undefined error.";
        // 			}

        			// var vdDef = this.getDefObject();
        			var vcinfo = this.getVcInfo();
        			var evDef = vcinfo.ev;
        			if (evDef == undefined || evDef == null) {
        				return;	// 기대값 함수 정의 안됨(반드시 정의할 의무는 없음
        			}

        			var step = this.getVCStep();
        			var ev = undefined;

        			// 최대 10개까지는 풀어서 넘김. 나머지는 알아서 뽑아쓸 것
        			try {
        				var args = [];
        				var vc = step.getArgument().vc;

        				for(var argIndex = 0; argIndex < vc.length; argIndex++) {
        					var stepArg = vc[argIndex];
        					var val = null;

        					if (stepArg.length != undefined && stepArg.length > 1) {
        						val = stepArg[1];
        					} else {
        						val = stepArg[0];
        					}
        					args.push(val);
        				}
        				var ctx = TestAPI.getTestApplication();
        				ev = evDef.apply(ctx, args);

        // 				trace("CombiVC.retrieveExpectedValue() : step["
        // 					+ step.getRefValue() + "]. args(" + args + "), ev = " + ev);
        				if(TestAPI.DS) devLogger.trace("request for args <" + args + ">", origin);
        			} catch(err) {
        				step.setExpectedValue(undefined);
        				devLogger.error(err.message, origin);
        			}
        			if(TestAPI.DS) devLogger.trace2("finish", origin);

        			return ev;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	finalize : {
        		value : function() {
        			TestAPI.VdAdaptorBase.prototype.finalize.call(this);
        			this.combiArgs = undefined;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},


        } );

        TestAPI.CombiVCVdAdaptor.prototype.constructor = TestAPI.CombiVCVdAdaptor;

        //=========================================================================
        //	NotifierManager 정의
        //=========================================================================
        TestAPI.NotifierManager = function(vdAdt, notifierDefList)
        {
        	this.setValidator(vdAdt);
        	this.parseNotifiers(notifierDefList);
        }

        TestAPI.NotifierManager.prototype = {
        	vdAdt : null,
        	setValidator : function(vdAdt) {
        		this.vdAdt = vdAdt;
        	},
        	getValidator : function() {
        		return this.vdAdt;
        	},

        	notifierList : null,
        	getNotifierList : function() {
        		return this.notifierList;
        	},
        	parseNotifiers : function(notifierDefList) {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierManager", "parseNotifiers");
        			devLogger.trace2("start", origin);
        		}
        		var vdAdt = this.getValidator();

        		this.notifierList = new TestAPI.Container("NotifierList");
        		if (notifierDefList == null || notifierDefList.length == 0) {
        			return;
        		}
        		var noti = null;
        		for(var i = 0; i < notifierDefList.length; i++) {
        			var notiDef = notifierDefList[i];
        			if (notiDef.targetObject == undefined || notiDef.targetObject == null) {
        				throw "notifier[" + i + "].targetObject is undefined.";
        			}
        			if (notiDef.notifierName == undefined || notiDef.notifierName == null
        				|| notiDef.notifierName.length == 0) {
        				throw "notifier[" + i + "].notifierName is undefined.";
        			}

        			noti = this.createNotifier(vdAdt, notiDef);
        			this.notifierList.add(noti);
        		}
        		if(TestAPI.DS) devLogger.trace("created " + this.notifierList.size()
        			+ " notifiers.", origin);
        	},
        	registerNotifiers : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierManager", "registerNotifiers");
        			// devLogger.trace2("start", origin);
        		}

        		for(var i = 0; i < this.notifierList.size(); i++) {
        			var notifier = this.notifierList.get(i);
        			if(notifier.isRegisterHandler() == true) {
        				notifier.registerHandler();
        			}
        		}

        		if(TestAPI.DS) devLogger.debug("finish - registered "
        			+ this.notifierList.size() + " notifiers.", origin);
        	},
        	// VCStep.prepare()시에 validator에서 정의한 notifier들을 초기화 한다.
        	restoreTriggerTypes : function(vcNotifiers) {	// argInfo = validator.arg[index]
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierManager", "registerNotifiers");
        			// devLogger.trace2("start", origin);
        		}

        		var vdAdt = this.getValidator();

        		switch(vdAdt.getName()) {
        		case 'ListVCVdAdaptor' :
        			var bDefinedNotifiers = true;
        			if(vcNotifiers == undefined || vcNotifiers == null) {
        				bDefinedNotifiers = false;
        			}

        			for(var i = 0; i < this.notifierList.size(); i++) {
        				var notifier = this.notifierList.get(i);
        				var triggerType = undefined;

        				if(bDefinedNotifiers) {
        					for(var j = 0; j < vcNotifiers.length; j++) {
        						var vcNotifier = vcNotifiers[j];
        						if(vcNotifier.trigger != undefined) {
        							if(vcNotifier.id == notifier.getId()) {
        								triggerType = vcNotifier.trigger;
        								break;
        							}
        						}
        					}
        				}
        				notifier.setTriggerType(triggerType);
        			}
        			break;
        		case 'CombiVCVdAdaptor' :
        			var vcinfo = vdAdt.getVcInfo();
        			if(vcinfo != undefined && vcinfo != null) {
        				var bDefinedTrigger = true;
        				if(vcinfo.trigger == undefined || vcinfo.trigger == null) {
        					bDefinedTrigger = false;
        				}
        				for(var i = 0; i < this.notifierList.size(); i++) {
        					var notifier = this.notifierList.get(i);
        					var triggerType = undefined;

        					if(bDefinedTrigger) {
        						triggerType = vcinfo.trigger(notifier.getId());
        					}
        					notifier.setTriggerType(triggerType);
        				}
        			}
        			break;
        		default :
        			if(notifier != undefined) {
        				notifier.setTriggerType(undefined);
        			}
        			break;
        		}

        		if(TestAPI.DS) devLogger.debug("finish - registered "
        			+ this.notifierList.size() + " notifiers.", origin);
        	},
        	unregisterNotifiers : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierManager", "unregisterNotifiers");
        			// devLogger.trace2("start", origin);
        		}

        		for(var i = 0; i < this.notifierList.size(); i++) {
        			var notifier = this.notifierList.get(i);
        			if(notifier.isRegisterHandler() == true) {
        				notifier.unregisterHandler();
        			}
        		}
        		if(TestAPI.DS) devLogger.debug("finish - unregistered "
        			+ this.notifierList.size() + " notifiers.", origin);
        	},
        	createNotifier : function(vdAdt, notifierDef) {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierManager", "createNotifier");
        			// devLogger.trace2("start", origin);
        		}
        		var bRegisterHandler = true;	// event handler를  생성하여 등록
        		var noti = this.createTypedNotifier(vdAdt, notifierDef.notifierType, notifierDef, bRegisterHandler);

        		if(TestAPI.DS) devLogger.trace2("created " + noti.getName()
        				+ "::" + noti.getId() + " notifier.", origin);

        		return noti;
        	},
        	createTypedNotifier : function(vdAdt, notifierType, notifierDef, bRegisterHandler) {
        		var noti = null;
        		switch(notifierType) {
        		case TestAPI.NT_EH :		// normal event handler : wait 자동 해제
        			noti = new TestAPI.NormalEventHandler(vdAdt, notifierDef, bRegisterHandler);
        			break;
        		case TestAPI.NT_EH_WAIT :		// wait event handler : wait 수동 해제
        			noti = new TestAPI.WaitEventHandler(vdAdt, notifierDef, bRegisterHandler);
        			break;
        		case TestAPI.NT_DH_TRUE :	// true return event handler
        			noti = new TestAPI.DecisionTrueEventHandler(vdAdt, notifierDef, bRegisterHandler);
        			break;
        		case TestAPI.NT_DH_FALSE :	// false return event handler
        			noti = new TestAPI.DecisionFalseEventHandler(vdAdt, notifierDef, bRegisterHandler);
        			break;
        		case TestAPI.NT_CALLBACK :	// notify callback function
        			noti = new TestAPI.NormalCallbackHandler(vdAdt, notifierDef, bRegisterHandler);
        			break;
        		case TestAPI.NT_CB_WAIT :	// wait callback function
        			noti = new TestAPI.WaitCallbackHandler(vdAdt, notifierDef, bRegisterHandler);
        			break;
        		default :
        			throw "NotifierManager.createNotifier() :: Unknown notifier type <"
        				+ notifierType + ">";
        		}
        		return noti;
        	},
        	getNotifierHandler : function(index) {
        		if (index < 0 || index >= this.notifierList.length) {
        			throw "NotifierManager.getNotifierHandler() : bound exception ["
        				+ index + "] for " + this.notifierList.length;
        		}
        		return this.notifierList[index].getHandler();
        	},
        	isNotifierPassed : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierManager", "isNotifierPassed");
        			devLogger.trace2("start - pass checking for "
        				+ this.notifierList.size() + " notifiers.", origin);
        		}

        		var failCount = 0;

        		for(var i=0; i < this.notifierList.size(); i++) {
        			var noti = this.notifierList.get(i);

        			// notifier가 발생되지 않았으면 실패
        			if(noti.checkTriggered() == false) {
        				failCount++
        			}
        			// notifier가 기대값과 발생값이 다른것이 있으면 실패
        			if(noti.isPassed() == false) {
        				failCount++
        			}
        		}

        		if(TestAPI.DS) devLogger.trace2("finish", origin);

        		if(failCount > 0) {
        			return false;
        		}
        		return true;
        	},
        	clearNotifierStatus : function() {
        		for(var i=0; i < this.notifierList.size(); i++) {
        			this.notifierList.get(i).clearStatus();
        		}
        	},
        	clean : function() {
        		if(this.notifierList != null) {
        			for(var i = 0; i < this.notifierList.size(); i++) {
        				var notifier = this.notifierList.get(i);
        				notifier.clean();
        			}
        			this.notifierList.clean();
        			this.notifierList = null;
        		}
        	}
        };

        TestAPI.NotifierManager.prototype.constructor = TestAPI.NotifierManager;

        //=========================================================================
        //	NotifierBase 정의
        //=========================================================================
        TestAPI.NotifierBase = function(vdAdt, notifierDef, bRegisterHandler)
        {
        	// trace("created " + this.getName());
        	this.initialize(vdAdt, notifierDef);

        	// handler를 생성할지 여부 지정
        	if(bRegisterHandler != undefined) {
        		this.setRegisterHandler(bRegisterHandler);
        	}
        }

        TestAPI.NotifierBase.prototype = {
        	initialize : function(vdAdt, notifierDef) {
        		this.setValidatorAdaptor(vdAdt);
        		this.setDefObject(notifierDef);
        //		this.setCheckResult(false);
        	},

        	// handler를 자동으로 등록할지 여부 지정
        	//	= true : (= default) Notifier 생성시 자동으로 handler를 생성하여 등록함
        	//	= false : Handler를 등록하지 않음(Test Application에서 event handler를 처리하는 경우
        	bRegisterHandler : false,
        	setRegisterHandler : function(bRegisterHandler) {
        		if(bRegisterHandler == false) {
        			this.bRegisterHandler = false;
        		} else {
        			this.bRegisterHandler = true;
        		}
        	},
        	isRegisterHandler : function() {
        		return this.bRegisterHandler;
        	},

        	vdAdt : null,
        	setValidatorAdaptor : function(vdAdt) {
        		var who = "NotifierBase.setValidatorAdaptor() : ";

        		if(vdAdt == undefined || vdAdt == null) {
        			throw who + "ValidatorAdaptor is not declared.";
        		}
        		this.vdAdt = vdAdt;
        	},
        	getValidatorAdaptor : function() {
        		return this.vdAdt;
        	},

        	defObj : null,
        	setDefObject : function(notifierDef) {
        		var who = "NotifierBase.setDefObject() : ";

        		if(notifierDef == undefined || notifierDef == null) {
        			throw who + "notifier is not declared.";
        		}
        		this.defObj = notifierDef;
        		this.id = notifierDef.targetObject.id + "." + notifierDef.notifierName;
        	},
        	getDefObject : function() {
        		return this.defObj;
        	},

        	name : null,	// notifierName
        	setName : function(name) {
        		this.name = name;
        	},
        	getName : function() {
        		return this.name;
        	},

        	typename : null,	// event || callback
        	setTypeName : function(typename) {
        		this.typename = typename;
        	},
        	getTypeName : function() {
        		return this.typename;
        	},

        	triggerType : null,
        	setTriggerType : function(triggerType) {
        		this.triggerType = triggerType;
        	},
        	getTriggerType : function() {
        		return this.triggerType;
        	},

        	getTriggerTypeName : function() {
        // 		var defObj = this.getDefObject();
        // 		var triggerType = defObj.trigger;
        		var triggerType = this.getTriggerType();

        		switch (triggerType) {
        		case TestAPI.NTT_OPTION :     return "선택";
        		case TestAPI.NTT_MANDATORY :  return "필수";
        		case TestAPI.NTT_EXCEPT :			return "제외";
        		case undefined :				return "undefined";
        		default :			return "Unknown Trigger Type [" + triggerType + "]";
        		}
        	},

        	id : null,	// objectId.notifierName
        	getId : function() {
        		return this.id;
        	},
        	handler : null,
        	setHandler : function(handle) {
        		// registerHandler() == true인 경우에만 등록 처리
        		var defObj = this.getDefObject();
        		if(defObj != undefined) {
        			if(defObj.callback == undefined || defObj.callback != true) {
        				this.handler = handle;
        				this.setRegisterHandler(true);
        			} else {
        				var message = "[callback] " + this.getId() + "의 handler를 등록하지 않음.";
        				var step = TestAPI.getWorkingStepInfo();
        				var logger = TestAPI.getLogger();
        				logger.logByStep(logger.WARN, step, message, undefined)
        			}
        		}
        	},

        	// TestApplication에서 notifier의 유효성 여부를 check 할지 여부 관리
        	// false인 경우 : notifier의 발생 여부만 check
        	// true 인 경우 : validator의 checkNotifier()를 호출하고, 비교 결과를 log로 기록
        // 	bCheckResult : null,
        // 	expectedValue : null,
        // 	setCheckResult : function(bCheckResult, expectedValue) {
        // 		this.bCheckResult = bCheckResult;
        // 		this.expectedValue = expectedValue;
        // 	},
        // 	isCheckResult : function() {
        // 		return this.bCheckResult;
        // 	},
        // 	getExpectedValue : function() {
        // 		return this.expectedValue;
        // 	},

        	getHandler : function() {
        		return this.handler;
        	},
        	registerHandler : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierBase", "registerHandler");
        			//devLogger.trace2("start", origin);
        		}

        		var target = this.defObj.targetObject;
        		target.addEventHandler(this.defObj.notifierName, this.getHandler(), this);

        		var vdAdt = this.getValidatorAdaptor();

        		if(TestAPI.DS) devLogger.trace2("registered " + "tc["
        				+ vdAdt.getTcAdaptor().getTcIndex() + "]."  + this.getId(), origin);
        	},
        	unregisterHandler : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierBase", "unregisterHandler");
        			//devLogger.trace2("start", origin);
        		}

        		var target = this.defObj.targetObject;
        		target.removeEventHandler(this.defObj.notifierName, this.getHandler(), this);

        		var vdAdt = this.getValidatorAdaptor();

        		if(TestAPI.DS) devLogger.trace2("unregistered " + "tc["
        				+ vdAdt.getTcAdaptor().getTcIndex() + "]." + this.getId(), origin);
        	},
        	bTrigger : false,
        	triggerCount : 0,
        	getTriggerCount : function() {
        		return this.triggerCount;
        	},
        	setTriggered : function(obj, notifierName, evtInfo, bReleaseWait) {
        		var step = TestAPI.getWorkingStepInfo();

        		// teardown에서 발생되는 notifier는 무시
        		if(step.getStep() == "teardown") {
        			return;
        		}

        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierBase", "setTriggered");
        			// devLogger.trace("start", origin);
        		}
        		this.bTrigger = true;
        		this.triggerCount++;

        		var vdAdt = this.getValidatorAdaptor();

        //
        // 		// devLogger.trace("--------- " + this.getName() + " : " + this.getId() + "-----------------");
        // 		var taskName = null;
        //
        // 		taskName = vdAdt.getTaskFlowName();
        // 		if (taskName == null) {
        // 			taskName = "*";
        // 		}
        // 		var msg = "tc["
        // 			+ vdAdt.getTcAdaptor().getTcIndex() + "]."
        // 			+ vdAdt.getId() + "[task='" + taskName + "']::"
        // 			+ this.getId()
        // 			+ " #" + this.getTriggerCount() + " triggered.";

        		var logger = TestAPI.getLogger();
        		logger.notiLog(logger.INFO, this, evtInfo); // , msg);

        		var bNotifierCheck = vdAdt.checkEvent(step, this, evtInfo);	// [ undefined | true | false ]

        		if(bReleaseWait == true) {	// wait시 해제
        			if(vdAdt.isWait()) {
        				vdAdt.releaseWait();
        			}
        		}
        	},
        	isTriggered : function() {
        		return this.bTrigger;
        	},
        	// 성공 여부 결정위햐여 성공,실페 건수만 누적
        	check : function(resultValue, expectedValue) {
        		var bEqual = false;
        		if(expectedValue == undefined || expectedValue == null) {
        			expectedValue = [];
        		}

        		if (typeof resultValue === 'string') {
        			if(resultValue == expectedValue) bEqual = true;
        		} else {
        			if("" + resultValue == "" + expectedValue) bEqual = true;
        		}

        		// notifier check logging
        		var message = "Notifier.check() : result=<" + resultValue
        			+ ">, expected=<" +  expectedValue + ">";

        		// trace(message);

        		var step = TestAPI.getWorkingStepInfo();

        		var logger = TestAPI.getLogger();
        		logger.stepLog(step, bEqual, message);

        		// notifier(발생값, 기대값) 비교 결과 처리
        		this.cumulateCheckCount(bEqual);

        		return bEqual;
        	},
        	passCount : 0,	// result == expected
        	failCount : 0,	// result != expected
        	cumulateCheckCount : function(bCheckResult) {
        		if(bCheckResult == true) {
        			this.passCount++;
        		} else {
        			this.failCount++;
        		}
        	},
        	checkTriggered : function() {
        		if(TestAPI.DS) {
        			var origin = TestAPI.createLoggerOrigin ("NotifierBase", "checkTriggered");
        			devLogger.trace2("start", origin);
        		}

        // 		var typename = "event";
        //
        // 		switch(defObj.notifierType) {
        // 		case TestAPI.NT_CALLBACK :
        // 		case TestAPI.NT_CB_WAIT :
        // 			typename = "callback";
        // 			break;
        // 		}

        		var message = this.getTriggerTypeName() + " " + this.getTypeName()
        			+ " [" + this.getId() + "]";

        		var logger = TestAPI.getLogger();
        		var logLevel = logger.INFO;

        		var chk = true;		// 발생 여부
        		// var triggerType = this.defObj.trigger;
        		var triggerType = this.getTriggerType();

        		switch (triggerType) {
        		case TestAPI.NTT_OPTION :
        			if (this.bTrigger == true) {
        				message += " is triggered.";
        			} else {
        				message += " is not triggered.";
        			}
        			chk = undefined;
        			break;
        		case TestAPI.NTT_MANDATORY :
        			if (this.bTrigger == true) {
        				message += " is triggered.";
        			} else {
        				chk = false;
        				logLevel = logger.ERROR;
        				message += " is not triggered.";
        			}
        			break;
        		case TestAPI.NTT_EXCEPT :
        			if (this.bTrigger == true) {
        				chk = false;
        				logLevel = logger.ERROR;
        				message += " is triggered.";
        			} else {
        				message += " is not triggered.";
        			}
        			break;
        		case undefined :
        			if (this.bTrigger == true) {
        				chk = true;
        				logLevel = logger.WARN;
        				message += " is triggered.";
        			} else {
        				message += " is not triggered.";
        			}
        			break;
        		default :
        			logLevel = logger.FATAL;
        			message += "Unknown notifier trigger type " + this.defObj.trigger;
        			chk = false;
        			break;
        		}

        		// logger.notiLog(this, logLevel, msg, chk);
        		var vdAdt = this.getValidatorAdaptor();
        		var step = TestAPI.getWorkingStepInfo();

        		step.setPassed(chk);
        		logger.stepLog(step, chk, message);	// check 결과

        		if(TestAPI.DS) devLogger.trace2("finish", origin);

        		return chk;
        	},
        	isPassed : function() {
        		if( this.failCount > 0)
        			return false;

        		// 발생되지 않았으면 성공
        		return true;
        	},
        	clearStatus : function() {
        		this.bTrigger = false;

        		this.triggerCount = 0;
        		this.passCount = 0;
        		this.failCount = 0;

        		if(this.vdAdt != null && this.vdAdt.isWait()) {
        			this.vdAdt.releaseWait();
        		}
        	},
        	clean : function() {
        		this.handler = null;
        		this.defObj = null;
        		this.vdAdt = null;
        	}
        };

        TestAPI.NotifierBase.prototype.constructor = TestAPI.NotifierBase;

        //=========================================================================
        //	Normal EventHandler 정의
        //=========================================================================
        TestAPI.NormalEventHandler = function(vdAdt, notifierDef, bRegisterHandler)
        {
        	this.setName("NormalEventHandler");
        	this.setTypeName("event");

        	TestAPI.NotifierBase.call(this, vdAdt, notifierDef, bRegisterHandler);

        	this.setHandler(this.handle);
        }

        TestAPI.NormalEventHandler.prototype = Object.create(TestAPI.NotifierBase.prototype, {
        	handle : {
        		value : function(obj, evtInfo) {
        			this.setTriggered(obj, evtInfo.eventid, evtInfo, true);

        			// 자동으로 wait 해제
        			var vdAdt = this.getValidatorAdaptor();
        			vdAdt.releaseWait();
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	}
        } );

        TestAPI.NormalEventHandler.prototype.constructor = TestAPI.NormalEventHandler;

        //=========================================================================
        //	Wait EventHandler 정의
        //=========================================================================
        TestAPI.WaitEventHandler = function(vdAdt, notifierDef, bRegisterHandler)
        {
        	this.setName("WaitEventHandler");
        	this.setTypeName("event");

        	TestAPI.NotifierBase.call(this, vdAdt, notifierDef, bRegisterHandler);

        	this.setHandler(this.handle);
        }

        TestAPI.WaitEventHandler.prototype = Object.create(TestAPI.NotifierBase.prototype, {
        	handle : {
        		value : function(obj, evtInfo) {
        			this.setTriggered(obj, evtInfo.eventid, evtInfo, false);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	}
        } );

        TestAPI.WaitEventHandler.prototype.constructor = TestAPI.WaitEventHandler;

        //=========================================================================
        //	Decision True Return EventHandler 정의
        //=========================================================================
        TestAPI.DecisionTrueEventHandler = function(vdAdt, notifierDef, bRegisterHandler)
        {
        	this.setName("DecisionTrueEventHandler");
        	this.setTypeName("event");

        	TestAPI.NotifierBase.call(this, vdAdt, notifierDef, bRegisterHandler);

        	this.setHandler(this.handle);
        }
        TestAPI.DecisionTrueEventHandler.prototype = Object.create(TestAPI.NotifierBase.prototype, {
        	handle : {
        		value : function(obj, evtInfo) {
        			this.setTriggered(obj, evtInfo.eventid, evtInfo, true);

        			var logger = TestAPI.getLogger();
        			var stepInfo = TestAPI.getWorkingStepInfo();
        			var message = "decision handler : true 반환";
        			logger.logByStep(logger.INFO, stepInfo, message, true);
        			stepInfo.setMessage(message);
        			return true;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	}
        } );

        TestAPI.DecisionTrueEventHandler.prototype.constructor = TestAPI.DecisionTrueEventHandler;

        //=========================================================================
        //	Decision False Return EventHandler 정의
        //=========================================================================
        TestAPI.DecisionFalseEventHandler = function(vdAdt, notifierDef, bRegisterHandler)
        {
        	this.setName("DecisionFalseEventHandler");
        	this.setTypeName("event");

        	TestAPI.NotifierBase.call(this, vdAdt, notifierDef, bRegisterHandler);

        	this.setHandler(this.handle);
        }
        TestAPI.DecisionFalseEventHandler.prototype = Object.create(TestAPI.NotifierBase.prototype, {
        	handle : {
        		value : function(obj, evtInfo) {
        			this.setTriggered(obj, evtInfo.eventid, evtInfo, true);

        			var logger = TestAPI.getLogger();
        			var stepInfo = TestAPI.getWorkingStepInfo();
        			var message = "decision handler : false 반환";
        			logger.logByStep(logger.INFO, stepInfo, message, true);
        			stepInfo.setMessage(message);
        			return false;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	}
        } );

        TestAPI.DecisionFalseEventHandler.prototype.constructor = TestAPI.DecisionFalseEventHandler;

        //=========================================================================
        //	Normal Callback Handler 정의
        //=========================================================================
        TestAPI.NormalCallbackHandler = function(vdAdt, notifierDef, bRegisterHandler)
        {
        	this.setName("NormalCallbackHandler");
        	this.setTypeName("callback");

        	TestAPI.NotifierBase.call(this, vdAdt, notifierDef, bRegisterHandler);

        	this.setHandler(this.handle);
        }
        TestAPI.NormalCallbackHandler.prototype = Object.create(TestAPI.NotifierBase.prototype, {
        	handle : {
        		value : function(obj, callbackName) {
        			var eventInfo = null;
        			var bWait = true;
        			this.setTriggered(obj, callbackName, eventInfo, bWait);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	}
        } );

        TestAPI.NormalCallbackHandler.prototype.constructor = TestAPI.NormalCallbackHandler;

        //=========================================================================
        //	Wait Callback Handler 정의
        //=========================================================================
        TestAPI.WaitCallbackHandler = function(vdAdt, notifierDef, bRegisterHandler)
        {
        	this.setName("WaitCallbackHandler");
        	this.setTypeName("callback");

        	TestAPI.NotifierBase.call(this, vdAdt, notifierDef, bRegisterHandler);

        	this.setHandler(this.handle);
        }
        TestAPI.WaitCallbackHandler.prototype = Object.create(TestAPI.NotifierBase.prototype, {
        	handle : {
        		value : function(obj, callbackName) {
        			var eventInfo = null;
        			var bWait = false;
        			this.setTriggered(obj, callbackName, eventInfo, bWait);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	}
        } );

        TestAPI.WaitCallbackHandler.prototype.constructor = TestAPI.WaitCallbackHandler;

        }
        //----------------- end of TestAPI.RunnerBase ----------------

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
