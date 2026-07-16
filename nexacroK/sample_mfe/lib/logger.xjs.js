//XJS=logger.xjs
(function()
{
    return function(path, nexacro, system, trace, environment, application)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"libevent::event.lib.xjs");
        this.addIncludeScript(path,"libevent::event.util.xjs");
        this.addIncludeScript(path,"libevent::event.wrapper.xjs");
        this.addIncludeScript(path,"libstyle::style.wrapper.xjs");
        this.registerScript(path, function(nexacro, system, trace, environment, application) {
        this.executeIncludeScript("libevent::event.lib.xjs"); /*include "libevent::event.lib.xjs"*/
        this.executeIncludeScript("libevent::event.util.xjs"); /*include "libevent::event.util.xjs"*/;
        this.executeIncludeScript("libevent::event.wrapper.xjs"); /*include "libevent::event.wrapper.xjs"*/
        this.executeIncludeScript("libstyle::style.wrapper.xjs"); /*include "libstyle::style.wrapper.xjs"*/

        if (typeof nexacro.test.api === 'undefined') {
        	nexacro.test.api = {};
        	// trace("nexacro.test.api created.......................");
        }

        var TestAPI = nexacro.test.api;


        // ------------- begin TestAPI.LoggerBase  -------------
        // if (typeof TestAPI.LoggerBase === 'undefined') {		// LogViewer display 안됨

        /*	Test Application Format Version
        	0.6		최초 open 버전
        	0.7		Validator draft 버전
        	0.71	validator.repeat name 변경
        			scope를 this에서 TestAPI로 변경
        			tcInfo 구조 추가
        */
        TestAPI.version = 0.6;

        // TestApplication에서 생성한 TestAPI 객체 반환
        this.gfnGetTestAPI = function() {
        	return TestAPI;
        }
        // TestApplication에서 요구한 버전으로 TestAPI 객체 생성
        this.gfnLoadTestAPI = function(applicationFormatVersion) {
        	if (applicationFormatVersion != undefined && applicationFormatVersion != null) {
        		TestAPI.version = applicationFormatVersion;
        	}
        	return this.gfnGetTestAPI();
        }

        TestAPI.LOG_MAX_COUNT	= 2000;	// Logger의 최대 logging 건수 제한

        // define log level
        TestAPI.FATAL	= 999;		// very severe error events that will presumably lead the application to abort
        TestAPI.ERROR	= 500;		// error events that might still allow the application to continue running
        TestAPI.WARN	= 400;		// potentially harmful situations
        TestAPI.INFO	= 300;		// informational messages that highlight the progress of the application at coarse-grained level
        TestAPI.DEBUG	= 200;		// Fine-grained informational events that are most useful to debug an application
        TestAPI.TRACE	= 100;		// finer-grained informational events than the DEBUG
        TestAPI.TRACE2	= 10;		// finest-grained informational events than the DEBUG
        TestAPI.ALL		= 0;		// all levels including custom levels

        if(TestAPI.version < 0.7) {
        	this.FATAL	= TestAPI.FATAL;
        	this.ERROR	= TestAPI.ERROR;
        	this.WARN	= TestAPI.WARN;
        	this.INFO	= TestAPI.INFO;
        	this.DEBUG	= TestAPI.DEBUG;
        	this.TRACE	= TestAPI.TRACE;
        	this.TRACE2	= TestAPI.TRACE2;
        	this.ALL	= TestAPI.ALL;
        }

        TestAPI.createLoggerOrigin = function(aTargetObject, aMethodName) {
        	return {
        		targetObject : aTargetObject,
        		methodName : aMethodName
        	};
        }

        TestAPI.openLogViewer = function ()
        {
         	var runner = TestAPI.getRunner();
         	var logger = runner.getLogger();
         	var dsLog = logger.getDataset();

        	var oArg = {objDsLog : dsLog};
        	var oOption = {popuptype:"modal", title:"LogViewer"};
        	var sPopupCallBack = "";
        	TestAPI.openPopup("debugging","cmm::cmmLogViewer.xfdl",oArg,sPopupCallBack,oOption);
        };

        //=========================================================================
        //	LoggerBase 정의
        //=========================================================================
        TestAPI.LoggerBase = function()
        {
        }

        TestAPI.LoggerBase.prototype = {
        	FATAL	: TestAPI.FATAL,
        	ERROR	: TestAPI.ERROR,
        	WARN	: TestAPI.WARN,
        	INFO	: TestAPI.INFO,
        	DEBUG	: TestAPI.DEBUG,
        	TRACE	: TestAPI.TRACE,
        	TRACE2	: TestAPI.TRACE2,
        	ALL		: TestAPI.ALL,

        	typename : null,
        	setTypeName : function(typename) {
        		this.typename = typename;
        	},
        	getTypeName : function() {
        		return this.typename;
        	},

        	logLevel : TestAPI.INFO,	// ALL
        	setLogLevel : function(level) {
        		this.logLevel = level;
        	},
        	getLogLevel : function() {
        		return this.logLevel;
        	},
        	runner : null,	// application runner
        	setRunner : function(runner) {
        		this.runner = runner;
        	},
        	targetObject : null,
        	setTargetObject : function(objName) {
        		this.targetObject = objName;
        	},
        	getLevelDescription : function(level) {
        		switch(level) {
        			case this.FATAL :	return "FATAL";
        			case this.ERROR :	return "ERROR";
        			case this.WARN :	return "WARN";
        			case this.INFO :	return "INFO";
        			case this.DEBUG :	return "DEBUG";
        			case this.TRACE :	return "TRACE";
        			case this.TRACE2 :	return "TRACE2";
        			case this.ALL :		return "ALL";
        			default :			return "Unknown";
        		}
        	},
        	fatal : function(msg, origin, stepInfo) {
        		this.log(this.FATAL, msg, origin, stepInfo);
        	},
        	error : function(msg, origin, stepInfo) {
        		this.log(this.ERROR, msg, origin, stepInfo);
        	},
        	warn : function(msg, origin, stepInfo) {
        		this.log(this.WARN, msg, origin, stepInfo);
        	},
        	info : function(msg, origin, stepInfo) {
        		this.log(this.INFO, msg, origin, stepInfo);
        	},
        	debug : function(msg, origin, stepInfo) {
        		this.log(this.DEBUG, msg, origin, stepInfo);
        	},
        	trace : function(msg, origin, stepInfo) {
        		this.log(this.TRACE, msg, origin, stepInfo);
        	},
        	trace2 : function(msg, origin, stepInfo) {
        		this.log(this.TRACE2, msg, origin, stepInfo);
        	},
        	logCount : 0,	// 총 logging 개수
        	log : function(level, msg, origin, stepInfo) {
        		if (this.logLevel <= level)
        		{
        			var message = "";
        			if(origin != undefined && origin != null) {
        				var targetObject = origin.targetObject;
        				var methodName = origin.methodName;

        // 				if (targetObject == undefined || targetObject == null) {
        // 					if (this.targetObject != null) {
        // 						targetObject = this.targetObject;
        // 					}
        // 				}
        				if(targetObject != null) {
        					message += targetObject;
        					if(methodName != undefined && methodName != null) {
        						message += ".";
        					}
        				}
        				if(methodName != undefined && methodName != null) {
        					message += methodName + "() :: ";
        				} else {
        					message += " :: ";
        				}
        			}
        			// trace("----------------origin = " + message);
        			message += msg;

        			if(stepInfo == undefined || stepInfo == null) {
        				stepInfo = TestAPI.getWorkingStepInfo();
        			}
        			this.logByStep(level, stepInfo, message);
        		}
        	},

        	stepLog : function(stepInfo, chk, msg) {
        			var level = this.INFO;

        // 			if(chk != undefined) {
        // 				stepInfo.setPassed(chk);
        // 			} else {
        // 				stepInfo.setPassed(true);
        // 			}
        			if (chk == undefined) {
        				chk = true;
        			} else
        			// if(chk == false && stepInfo.isPassed() == false) {
        			if(chk == false) {
        				level = this.ERROR;
        				if(stepInfo.getStatus() == TestAPI.STATUS_ABNORMAL2) {
        					level = this.WARN;
        					chk = stepInfo.isPassed();
        				}
        			}
        // 			var res = "";
        //
        // 			if(chk != undefined) {
        // 				if (chk == true) {
        // 					res = "<성공> ";
        // 				} else {
        // 					res = "<실패> ";
        // 					level = this.ERROR;
        // 				}
        // 			}
        			// var message = res + msg;
        			var message = msg;

        			this.logByStep(level, stepInfo, message, chk);
        	},
        	notiLog : function(level, notiObj, evtInfo) {
        			var vdAdt = notiObj.getValidatorAdaptor();
        			var taskName = vdAdt.getTaskFlowName();
        			if (taskName == null) {
        				taskName = "*";
        			}

        			var message = "[task=" + taskName + "] "
        				+ notiObj.getId() + " #" + notiObj.getTriggerCount() + " triggered.";

        			var stepInfo = TestAPI.getWorkingStepInfo();

        			this.logByStep(level, stepInfo, message, stepInfo.isPassed());
        	},
        };

        TestAPI.LoggerBase.prototype.constructor = TestAPI.LoggerBase;

        //=========================================================================
        //	ConsoleLogger 정의
        //=========================================================================
        TestAPI.ConsoleLogger = function() {
        	this.setLogLevel(TestAPI.INFO);
        	this.setTypeName("ConsoleLogger");
        	// trace("created ConsoleLogger.");
        }

        TestAPI.ConsoleLogger.prototype = Object.create(TestAPI.LoggerBase.prototype, {
        	logByStep : {
        		value : function(level, stepInfo, msg, chk) {
        			if (this.logLevel <= level)
        			{
        				if(this.logCount > TestAPI.LOG_MAX_COUNT) {
        					return;
        				}
        				this.logCount++;

        				var sLevel = this.getLevelDescription(level);

        				var message = "[" + sLevel +"] ";

        				if (stepInfo != null) {
        					message += stepInfo.getDescription() + " :: " + stepInfo.getStep() + " :: ";
        				}
        				message += msg;

        				trace(message);
        			}
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	clean : {
        		value : function() {
        			this.logCount = 0;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        } );

        TestAPI.ConsoleLogger.prototype.constructor = TestAPI.ConsoleLogger;

        //=========================================================================
        //	DatasetLogger 정의
        //=========================================================================
        TestAPI.DatasetLogger = function(bAutoCreateDs) {
        	if(bAutoCreateDs == true) {
        		this.createDataset();
        	}
        	this.setTypeName("DatasetLogger");
        	// trace("created DatasetLogger.");
        }

        TestAPI.DatasetLogger.prototype = Object.create(TestAPI.LoggerBase.prototype, {
        	dsLog : {
        		value : null,
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	clean : {
        		value : function() {
        			if(this.dsLog != null) {
        				this.dsLog.clearData();
        				this.logCount = 0;
        			}
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	createDataset : {
        		value : function() {
        			var dsLog = new Dataset("dsLog", this);

        			dsLog.addColumn( "STEP_INDEX", "int",256);
        			dsLog.addColumn( "TEST_RESULT", "string",4);	// [ "FAIL" | "PASS" ]
        			dsLog.addColumn( "LOG_LEVEL_CODE", "int", 256);
        			dsLog.addColumn( "LOG_LEVEL", "string", 256);
        			dsLog.addColumn( "ITEM_TYPE", "string", 10);
        			dsLog.addColumn( "ITEM", "string", 256);
        			dsLog.addColumn( "STEP", "string", 256);
        			dsLog.addColumn( "MESSAGE", "string", 1024);

        			this.setDataset(dsLog);
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	setDataset : {
        		value : function(dsLog) {
        			this.dsLog = dsLog;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	getDataset : {
        		value : function() {
        			return this.dsLog;
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},
        	logByStep : {
        		value : function(level, stepInfo, message, chk) {
        			if (this.logLevel <= level)
        			{
        				if(this.logCount > TestAPI.LOG_MAX_COUNT) {
        					return;
        				}
        				this.logCount++;

        				var dsLog = this.getDataset();
        				var nRow = dsLog.addRow();

        				dsLog.setColumn(nRow, "LOG_LEVEL_CODE",		level);
        				dsLog.setColumn(nRow, "LOG_LEVEL",		this.getLevelDescription(level));

        				if(stepInfo != null) {
        					dsLog.setColumn(nRow, "STEP_INDEX",		stepInfo.getStepIndex());

        					var test_result = "PASS";
        					if (chk != true) {
        						test_result = "FAIL";
        					}
        					dsLog.setColumn(nRow, "TEST_RESULT",	test_result);
        					dsLog.setColumn(nRow, "ITEM_TYPE",		stepInfo.getItemTypeName());
        					dsLog.setColumn(nRow, "ITEM",			stepInfo.getDescription());
        					dsLog.setColumn(nRow, "STEP",			stepInfo.getStep());
        				}
        				dsLog.setColumn(nRow, "MESSAGE", message);

        				//TestAPI.devLogger.logByStep(level, stepInfo, message);
        			}
        		},
        		enumerable : true,
        		configurable : true,
        		writable : true
        	},

        } );

        TestAPI.DatasetLogger.prototype.constructor = TestAPI.DatasetLogger;

        // //-----------------------------------------------------------------------
        // // Engine Debug용 Console Logger 정의
        // //-----------------------------------------------------------------------
        // TestAPI.devLogger = null;
        //
        // TestAPI.createDevLogger = function() {
        // 	TestAPI.devLogger = new TestAPI.ConsoleLogger();
        // }
        // TestAPI.setLogLevel = function(logLevel) {
        // 	TestAPI.devLogger.setLogLevel(logLevel);
        // }
        //
        // TestAPI.fatal = function(msg, origin) {
        // 	TestAPI.devLogger.fatal(msg, origin);
        // }
        //
        // TestAPI.error = function(msg, origin) {
        // 	TestAPI.devLogger.error(msg, origin);
        // }
        //
        // TestAPI.warn = function(msg, origin) {
        // 	TestAPI.devLogger.warn(msg, origin);
        // }
        //
        // TestAPI.info = function(msg, origin) {
        // 	TestAPI.devLogger.info(msg, origin);
        // }
        //
        // TestAPI.debug = function(msg, origin) {
        // 	TestAPI.devLogger.debug(msg, origin);
        // }
        //
        // TestAPI.trace = function(msg, origin) {
        // 	TestAPI.devLogger.trace(msg, origin);
        // }
        //
        // TestAPI.trace2 = function(msg, origin) {
        // 	TestAPI.devLogger.trace2(msg, origin);
        // }
        //
        // if(TestAPI.version < 0.7) {
        // 	this.fatal = function(msg, origin) {
        // 		TestAPI.fatal(msg, origin);
        // 	}
        //
        // 	this.error = function(msg, origin) {
        // 		TestAPI.error(msg, origin);
        // 	}
        //
        // 	this.warn = function(msg, origin) {
        // 		TestAPI.warn(msg, origin);
        // 	}
        //
        // 	this.info = function(msg, origin) {
        // 		TestAPI.info(msg, origin);
        // 	}
        //
        // 	this.debug = function(msg, origin) {
        // 		TestAPI.debug(msg, origin);
        // 	}
        //
        // 	this.trace = function(msg, origin) {
        // 		TestAPI.trace(msg, origin);
        // 	}
        //
        // 	this.trace2 = function(msg, origin) {
        // 		TestAPI.trace2(msg, origin);
        // 	}
        // }

        //-----------------------------------------------------------------------------
        // 엔진과 test 응용을 debugging mode로 실행할지 여부 관리
        //-----------------------------------------------------------------------------
        TestAPI.DS = false;		// 테스트시스템 개발자용 debug mode 관리
        TestAPI.systemDebugOn = function() {
        	TestAPI.DS = true;
        }
        TestAPI.systemDebugOff = function() {
        	TestAPI.DS = false;
        }

        TestAPI.gfnSystemDebugOn = function() {
        	if(TestAPI.version >= 0.7)
        	trace("[WARN] Deprecated TestAPI.gfnSystemDebugOn(). Use TestAPI.systemDebugOn().");

        	TestAPI.systemDebugOn();
        }
        TestAPI.gfnSystemDebugOff = function() {
        	if(TestAPI.version >= 0.7)
        	trace("[WARN] Deprecated TestAPI.gfnSystemDebugOff(). Use TestAPI.systemDebugOff().");

        	TestAPI.systemDebugOff();
        }

        TestAPI.D = false;		// 테스트 응용 개발자용 debug mode 관리
        TestAPI.debugOn = function(level) {
        	TestAPI.D = true;
        }
        TestAPI.debugOff = function() {
        	TestAPI.D = false;
        }

        TestAPI.gfnDebugOn = function(level) {
        	if(TestAPI.version >= 0.7)
        	trace("[WARN] Deprecated TestAPI.gfnDebugOn(). Use TestAPI.debugOn().");

        	TestAPI.debugOn();
        }
        TestAPI.gfnDebugOff = function() {
        	if(TestAPI.version >= 0.7)
        	trace("[WARN] Deprecated TestAPI.gfnDebugOff(). Use TestAPI.debugOff().");

        	TestAPI.debugOff();
        }

        if(TestAPI.version < 0.7) {
        	this.gfnSystemDebugOn = function() {
        		TestAPI.systemDebugOn();
        	}
        	this.gfnSystemDebugOff = function() {
        		TestAPI.systemDebugOff();
        	}
        	this.gfnDebugOn = function(level) {
        		TestAPI.debugOn();
        	}
        	this.gfnDebugOff = function() {
        		TestAPI.debugOff();
        	}
        }

        //----------------  용도를 모르겠음 -------------------------------------------------------------

        TestAPI.logger = {
        		isRunner: false,
        		trace : function(methodName, msg) {
        			if(!this.isRunner) {
        				trace(methodName +":"+ msg);
        			}
        		}
        };

        if(TestAPI.version < 0.7) {
        	this.logger = TestAPI.logger;
        }

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
        TestAPI.openPopup = function ( sPopupId, sUrl, oArg, sPopupCallback, oOption)
        {
        //     //----------- 추가 -------------------------------
        // 	var pForm = TestAPI.gfnGetTestApplication();
        // 	//------------------------------------------------

        	var objApp = pForm.gfnGetApplication();
        	var nLeft = -1;
        	var nTop = -1;
        	var nWidth = objApp.mainframe.width * 0.9;
        	var nHeight = objApp.mainframe.height * 0.9;
        	var bShowTitle = true;
        	var bShowStatus = false;
        	var sPopupType = "modal";
        	var bLayered = false;
        	var nOpacity = 100;
        	var bAutoSize = false;
        	var bResizable = true;
        	//var sPopupCallback = (this.gfn_isNull(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;
        	var sTitleText = "";

        	if (nWidth > 970){
        		nWidth = 970;
        	}

        	if (nHeight > 480){
        		nHeight = 480;
        	}


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
        		nLeft   =  pForm.getOffsetLeft() + nLeft;
        		nTop   =  pForm.getOffsetTop() + nTop;
        	}

        	if(nWidth == -1 || nHeight == -1)
        	{
        	    bAutoSize = true;
        	}

        	var objParentFrame = pForm.getOwnerFrame();

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
        			nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight, pForm);
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
        		if(!pForm.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
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
        		if(!pForm.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
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
        		if(!pForm.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
        		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
        		newChild.set_openalign(sOpenalign);
        		newChild.set_layered(bLayered);
        		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");
        		newChild.showModal(objParentFrame, oArg, TestAPI, pForm[sPopupCallback]);
            }
        };

        // }
        //------------ end of TestAPI.LoggerBase ----------------------


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
