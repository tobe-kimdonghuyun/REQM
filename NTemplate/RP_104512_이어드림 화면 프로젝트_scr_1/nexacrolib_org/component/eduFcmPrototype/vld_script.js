/**
 * @fileoverview backend/frontend 유효성검사를 통합하는 라이브러리
 *
 * @author 문호상
 * @version 0.7  버전
 */
var prForm = nexacro.Form.prototype;



//var prForm = this;
 
prForm.smfCreateOrGetValidationRulsetDataset = function(){
	if(! this['_dsValidationRuleset']){
		var dsValidationRuleset = this.smfGetOrCreateDataset("_dsValidationRuleset", false);
		dsValidationRuleset.useclientlayout = true;
		dsValidationRuleset.addColumn("rulesetName", "string");
		dsValidationRuleset.addColumn("rulesets", "string");
		dsValidationRuleset.addColumn("component", "string");
		dsValidationRuleset.addColumn("expression", "string");
	}

	if(! this['_dsValidationRulesetManage']){
		var dsValidationRuleset = this.smfGetOrCreateDataset("_dsValidationRulesetManage", false);
		dsValidationRuleset.useclientlayout = true;
		dsValidationRuleset.addColumn("rulesetName", "string");
		dsValidationRuleset.addColumn("rulesets", "string");
		dsValidationRuleset.addColumn("component", "string");
		dsValidationRuleset.addColumn("expression", "string");
		dsValidationRuleset.addColumn("serviceId", "string");
	}

	return dsValidationRuleset;
};

prForm.smvMapperList = []; // smfGetRuleMapperList에서 설정
prForm.smvRuleNameMapper = {}; // smfGetRuleMapperList에서 설정


prForm.smfGetRuleMapperList = function(){
	if(this.smvMapperList.length != 0) this.smvMapperList;
	
	var rawMapperList = [
		  ["필수",     "required",                  "required",                "required",                   '()',                                   "required"                                                                                          ] 
		, ["필수",     "radio-required",            "radioRequired",           "radiorequired",              '("roadAddress", "jibunAddress")',      "입력된 프로퍼티중 값이 하나만 있는지 확인. 보통 여러게의 입력항목중 하나만 입력 받을 때 사용한다"  ] 
		, ["필수",     "group-required",            "groupRequired",           "grouprequired",              '("checkbox1", "checkbox2", "checkbox3")',               "입력된 프로퍼티중 하나라도 값이 있는지 확인. 보통 여러게의 checkbox중 하나라도 체크되어있는지 확인할때 사용한다"  ] 
		, ["제목지정", "label",                     "label",                   "title",                      '("레이블입력")',                      "제목을 지정한다"                                                                                          ]
		, ["조사지정", "post-position",             "postPosition",           "postposition",                '("조사입력")',                        "조사(~의, ~를..등)를 지정한다"                                                                            ]
		, ["메시지",   "for-fully-message",         "withFullyMessage",        "fullymessage",               '("전체(레이블+조사+룰메시지) 메시지입력")',                      "룰에 대한 전체 메시지를 지정한다"                                                  ]
		, ["메시지",   "for-property-message",      "message",                 "propertymessage",            '("메시지입력")',                      "프로퍼티에 대한 메시지를 지정한다. 어떤 룰이 invalid가 발생해도 이 메시지가 표시된다"           ]		
		, ["태그",     "tag",                       "tag",                     "tag",                        '("1", "2", "3")',                      'rowType을 지정한다. "1":등록, "2": 수정, "3":삭제'                                                        ] 
		, ["도메인",   "business-number",           "businessNumber",          "bizno",                      '()',                                   "사업자등록번호 체크"                                                                                        ]   
		, ["도메인",   "corporation-number",        "corporationNumber",       "corpno",                     '()',                                   "법인번호체크"                                                                                          ] 
		, ["도메인",   "credit-card",               "creditCard",              "creditcard",                 '()',                                   "카드번호체크"                                                                                          ] 
		, ["도메인",   "email",                     "email",                   "email",                      '()',                                   "이메일번호"                                                                                          ] 
		// , ["도메인",   "enumeration",               "enumeration",             "Combo 를 이용",             '()',                                     "enum타입체크"                                                                                ]           
		, ["도메인",   "frn",                       "frn",                     "frm",                        '()',                                   "외국인등록번호 체크"                                                                                        ]   
		, ["도메인",   "mobile-number",             "mobileNumber",            "mobileno",                   '()',                                   "모바일 번호 체크"                                                                                          ] 
		, ["도메인",   "phone-number",              "phoneNumber",             "phoneno",                    '()',                                   "전화번호 체크"                                                                                          ] 
		, ["도메인",   "rrn",                       "rrn",                     "rrn",                        '()',                                   "주민번호 체크"                                                                                          ] 
		, ["도메인",   "previous-rrn",              "previousRrn",             "rrnold",                     '()',                                   "과거방식 주민번호 체크"                                                                               ] 
		
		/* 사용안함 */, ["도메인",   "rrn-before",                "rrnBefore",               "rrnbefore",                  '()',                                   "주민번호 체크(앞자리)"                                                                                          ] 
		/* 사용안함 */, ["도메인",   "rrn-after",                 "rrnAfter",                "rrnafter",                   '()',                                   "주민번호 체크(뒷자리)"                                                                                          ] 
		, ["도메인",   "uon",                       "uon",                     "uon",                        '()',                                   "Y/N 체크"                                                                                          ] 
		, ["도메인",   "zip-cd",                    "zipCd",                   "zipcd",                      '()',                                   "우편번호 체크"                                                                                          ] 
		, ["복합",     "between",                   "between",                 "between",                    '("1000", "2000")',                     "문자열 between인지 체크"                                                                                          ] 
		, ["복합",     "integer-between",           "between",                 "between",                    '(1000, 2000)',                         "숫자 between인지 체크"                                                                                          ] 
		, ["복합",     "big-decimal-between",       "between",                 "between",                    '(1000.1, 2000.2)',                         "숫자 between인지 체크"                                                                                          ] 		
		, ["문자",     "equal-to",                  "compareEqualTo",          "equalto",                    '("비교할 propertyName")',               "동일값 체크"                                                                                          ] 
		, ["문자",     "compare-greater-or-equal",  "compareGreaterOrEqual",   "comparemax",                 '("비교할 less propertyName")',          "기준값보다 크거나 같은지 검증"                                                                              ]             
		, ["문자",     "compare-less-or-equal",     "compareLessOrEqual",      "comparemin",                 '("비교할 greater propertyName")',       "비교대상 값보다 작은지 검증"                                                                                ]           
		, ["문자",     "fixed-length",              "fixedLength",             "fixedlength",                '(6)',                                  "고정길이체크"                                                         ] 
		, ["문자",     "length",                    "length",                  "minlength",                  '(2, 100)',                              " maxlength 결합하여 사용	최소, 최대 길이체크"                                                             ]                              
		, ["문자",     "min-length",                "minLength",               "minlength",                  '(2)',                                   "최소길이 체크"                                                                                          ] 
		, ["문자",     "max-length",                "maxLength",               "maxlength",                  '(30)',                                  "최대길이 체크"                                                                                          ] 
		, ["문자",     "byte-length",               "byteLength",              "bytelength",                 '(3, 30)',                               "최소, 최대 길이체크. 영문1byte, 한글3byte. length를 사용권장"                                        ]                              
		, ["문자",     "min-byte-length",           "minByteLength",           "minlengthB",                 '(30)',                                  "바이트 최소길이 체크.  영문1byte, 한글3byte. minLength 사용권장"                                     ]                               
		, ["문자",     "max-byte-length",           "maxByteLength",           "maxlengthB",                 '(300)',                                 "바이트 최대길이 체크.  영문1byte, 한글3byte. maxLength 사용권장"                                     ]    
		, ["문자",     "code",                      "code",                    "Combo컴포넌트 사용",       '()',                                    "콤보박스 및 리스트로 사용"                                     ]    
		, ["숫자",     "small-integer",             "smallInt",                "smallinteger",               '()',                                   "2byte integer 체크"                                                                                         ]
		, ["숫자",     "integer",                   "integer",                 "integer",                    '()',                                    "4byte 정수 체크"                                                                                          ]
		, ["숫자",     "big-integer",               "bigInt",                  "biginteger",                 '()',                                    "8byte 정수 체크"                                                                                          ] 	
		, ["숫자",     "fixed-decimal",             "decimal",                 "decimal",                    '(8, 2)',                                "precision, scale 숫자 범위 체크"                                                                          ] 
		, ["숫자",     "max-length-digits",         "digit",                   "digits",                     '(10)',                                  "max length를 가지는 0~9로 구성된 숫자체크"                                                                                   ]
//		, ["숫자",     "digits",                    "digits",                  "digits",                     '()',                                    "0~9로 구성된 숫자 여부체크"                                                                                   ]
		, ["숫자",     "min",                       "min",                     "min",                        '(20)',                                   "숫자(Integer, BigDecimal) 최소값체크"                                                                                          ]
		, ["숫자",     "max",                       "max",                     "max",                        '(100)',                                  "숫자(Integer, BigDecimal) 최대값 체크"                                                                                               ]
		, ["숫자",     "max-decimal-point-length",  "maxDecimalPointLength",   "마스크컴포넌트사용",      '(2)',                                   "최대 소수점 자리수 체크"                                                                 ]
		, ["숫자",     "min-decimal-point-length",  "minDecimalPointLength",   "마스크컴포넌트사용",      '(2)',                                   "최소 소수점 자리수 체크"                                                                                    ]
//		, ["숫자",     "no-negative-number",        "noNegativeNumber",        "nonegative",                 '()',                                   "음수 제외숫자체크"                                                                                          ]
//		, ["숫자",     "size",                      "size",                    "range",                      '(100, 200)',                            "최소,최대 값체크"                                                                                          ]
		, ["날짜",     "formatless-date",           "date",                    "date",                       '()',                                   "날짜(yyyyMMdd) 체크"                                                                                        ]
		, ["날짜",     "datef",                     "datef",                   "날짜컴포넌트 사용",        '()',                                     "날짜(yyyy.MM.dd) 체크"                                                                                   ]
		, ["날짜",     "datetime",                  "datetime",                "날짜컴포넌트 사용",        '()',                                   "날짜(yyyyMMddHHmmss) 체크"                                               ]
		, ["날짜",     "datetimef",                 "datetimef",               "날짜컴포넌트 사용",        '()',                                   "날짜(yyyy.MM.dd HH:mm:ss) 체크"                                          ]
		, ["날짜",     "time",                      "time",                    "마스크컴포넌트 사용",      '()',                                   "시간(HHmm)체크"                                                          ]
		, ["날짜",     "timef",                     "timef",                   "마스크컴포넌트 사용",      '()',                                   "시간(HH:mm)체크"                                                         ]
		, ["날짜",     "timestamp",                 "timestamp",               "마스크컴포넌트 사용",      '()',                                   "타임스탬프(yyyyMMddHHmmssSSS) 체크"                                                                         ]
		, ["날짜",     "timestampf",                "timestampf",              "마스크컴포넌트 사용",      '()',                                   "타임스탬프(yyyy.MM.dd HH:mm:ss.SSS) 체크"                                                                   ]
		, ["날짜",     "formatless-year-month",     "yearMonth",               "dateym",                       '()',                                   "년월(yyyyMM) 체크"                                                                                          ]
		, ["날짜",     "formatted-year-month",      "yearMonthf",              "마스크를 이용하여 체크",   '()',                                   " ####.##"                                                                              ]
		, ["주석",     "comment",                    "comment",                "-",                          '("property주석")',                      "주석"                                                                                          ] 
		, ["기타",     "trim",                       "trim",                   "trim",                         '()',                                  "trim 처리"                                                                                          ] 
		, ["기타",     "trim-left",                  "trimLeft",               "trimleft",                     '()',                                  "trim left 처리"                                                                                          ] 
		, ["기타",     "trim-right",                 "trimRight",              "trimright",                     '()',                                  "trim right 처리"                                                                                          ] 
		, ["기타",     "focus",                      "focus",                  "focus",                       '(userId)',                              "유효성검사 실패시 포커스할 UI의 컴포넌트를 지정"                                                                                          ] 
		, ["기타",     "lambda",                    "lambda",                  "-",                          '(v->true)',                               "람다체크"                                                                                          ] 
		, ["기타",     "list",                      "list",                    "-",                          '()',                                     "List 타입 체크"                                                                                          ] 
		, ["기타",     "map",                       "map",                     "-",                          '()',                                     "Map 타입체크"                                                                                          ] 
		, ["기타",     "regex",                     "regex",                   "불가. java와js 표현식 다름",'(Pattern.compile("regular expression"))',"정규식으로 검사"                                                                                          ] 
	];

	this.smvMapperList = rawMapperList;	
	
	for(var i in rawMapperList){
		var category = 0;
		var backendRuleName = 1;
		var backendMethod = 2;
		var forntendRuleName = 3;
		
		var rawMapper = rawMapperList[i];
		
		this.smvRuleNameMapper[rawMapper[backendRuleName]] = rawMapper[forntendRuleName];
	}
	
	
	return rawMapperList;
};

prForm.smfCreateBackendRulesetMapper = function(){
	var rawMapperList = this.smfGetRuleMapperList();
	
	var backendMappers = {};
	for(var i in rawMapperList){
		var category = 0;
		var backendRuleName = 1;
		var backendMethod = 2;
		var forntendRuleName = 3;
		
		var rawMapper = rawMapperList[i];
		
		backendMappers[rawMapper[backendRuleName]] = rawMapper[forntendRuleName];
	}

	return backendMappers;
};

prForm.smfGetOrCreateBackendRulesetMapper = function(){
	if(! this.smvBackendRulesetMapper){
		this.smvBackendRulesetMapper = this.smfCreateBackendRulesetMapper();
	}
	
	return this.smvBackendRulesetMapper;
};


/**
 * (공통만사용) 유효성검사 form onload 수행
 *
 * @return service
 */
prForm.smfFormOnloadValidate = function(obj){
	// sm_script smfInit에서 호출한다
	
	try{
		obj.smfTravelComponents(obj, function (component, fnc, nLvl){
			if(obj.isNil(component.validate)) return;
			
			obj.smfUpdateValidateToComponent(component.validate, component);
		});
	}catch(e){
		this.trace(e);
	}
};

/**
 * 유효성검사 초기화 서비스를 생성한다
 *
 * @param  serviceId : 서비스아이디
 * @return service
 */
prForm.smfValidateService = function(serviceId, properties){
	this.astfAssertParamValueIsStringType(serviceId, 'serviceId');
	this.astfAssertParamRangeValue(this.smfGetServiceIdPrefix(serviceId), "serviceId", ["validate"]);
	this.astfAssertParamValueObjectFormat(properties, "properties", {
		url: [true, this.astvStringType]
	});
	
	
	var dsValidationRuleset = this.smfCreateOrGetValidationRulsetDataset();

	var context = this;
	var service = this.smfDynService(serviceId, {
		id: serviceId, 
		url: properties.url,
		inDatasets: this.smfStr(properties.inDatasets),
		outDatasets: "_dsValidationRuleset=validationRuleset"
	});
	service.caller = this.smfValidateService.caller;
	service.callee = arguments.callee;
	
	// 컴포넌트용
	var formRulesetMapper = {};
	
	// 컴포넌트 데이터셋 용
	var formDatasetRulesetMapper = {};

	// 데이터셋용
	var datasetRulesetMapper = {};
	service.messagePrefix(this.smfGetMessagePrefixByServiceId(serviceId));
	service.showConfirm(false);
	
	
	
	/**
	 * backend로부터 전달받은 룰셋을 폼에 바인딩 한다
	 * 룰셋의 프로퍼티를 컴포넌트에 바인드하는 규칙은 아래와 같다
	 * 컴포넌트에 바인드되어있는 데이터셋의 컬럼과 
	 * backend로 부터 전달받은 propertyName이 일치하는 룰셋을 컴포넌트에 바인드한다
	 * @param  container - 컴포넌트를 관리하는 그룹 객체
	 * @param  rulesetName - backend로부터 전달받은 룰셋명
	 * @return void
	 */
	service.mappingRulesetToForm = function(container, rulesetName){
		context.astfAssertParamValueIsContainerComponentType(container, "container");
		context.astfAssertParamValueIsStringType(rulesetName, "rulesetName");
		
		formRulesetMapper[rulesetName] = {
			container: container,
		};

		return service;
	};
	
	// 폼과 데이터셋 바인딩
	service.mappingRulesetToFormDataset = function(container, validDataset, rulesetName){
		context.astfAssertParamValueIsContainerComponentType(container, "container");
		context.astfAssertParamValueIsDatasetType(validDataset, "validDataset");
		context.astfAssertParamValueIsStringType(rulesetName, "rulesetName");
		
		formDatasetRulesetMapper[rulesetName] = {
			container: container,
			dataset: validDataset,
		};

		return service;
	};
	
	/**
	 * backend로부터 전달받은 룰셋을 데이터셋에 바인딩 한다
	 * 룰셋의 프로퍼티를 컬럼에 바인드하는 규칙은 아래와 같다
	 * 데이터셋의 컬럼과 
	 * backend로 부터 전달받은 propertyName이 일치하는 룰셋을 컴포넌트에 바인드한다
	 * @param  validDataset - 유효성 검사 룰셋을 관리하는 데이터셋 객체
	 * @param  rulesetName - backend로부터 전달받은 룰셋명
	 * @return void
	 */
	service.mappingRulesetToDataset = function(validDataset, rulesetName){
		context.astfAssertParamValueIsDatasetType(validDataset, "validDataset");
		context.astfAssertParamValueIsStringType(rulesetName, "rulesetName");

		datasetRulesetMapper[rulesetName] = {
			dataset: validDataset,
		};
		return service;
	};
	
	
	/**
	 * 개별 컴포넌트나 개별 데이터셋 컬럼에 룰셋을 매핑한다
	 *
     * 개별 컴포넌트에 룰셋을 매핑하려면 
	 * rulesetBinder.bindComponent(rulesetName, propertyName, componentObject) 를 사용한다
	 * 예제) rulesetBinder.bindComponent('save', 'name', this.dsMainValid, "name");
	 *
	 * 개별 데이터셋 컬럼에 룰셋을 매핑하려면  
	 * rulesetBinder.bindColumn(rulesetName, propertyName, datasetObject, columnName)을 사용한다
 	 * 예제) rulesetBinder.bindColumn('save', 'name', this.dsMainValid, "name");
	 *
	 * @param func - customRulesetMappingFunction - 개별컴포넌트나 개별 데이터셋에 룰셋을 바인딩하는 유저정의함수
	 * @return void
	 */	
	service.mappingRulesetCustom = function(func){
		context.astfAssertParamValueIsFunctionType(func, 'func');
		
		var mappingRulesetCustomFunction = function(callbackParams){
			if(callbackParams.errors) return;
			
			var rulesets = {
				
			};
			
			var rulesetBinder = {
				bindForm: function(rulesetName, container){
					context.astfAssertParamValueIsStringType(rulesetName, "rulesetName");
					context.astfIsContainerComponentType(container, "container");

					if(! (rulesetName in rulesets)){
						context.astfThrowDevException(context.format("등록되지 않은 rulesetName입니다 : " + rulesetName));
					}

					var rulesetText = rulesets[rulesetName];
					context.smfInternalBindRulesetToForm(rulesets, container);
				},
				
				bindComponent: function(rulesetName, propertyName, component){
					context.astfAssertParamValueIsStringType(rulesetName, "rulesetName");
					context.astfAssertParamValueIsStringType(propertyName, "propertyName");
					context.astfAssertParamValueIsInputComponentType(component, "component");

					if(! (rulesetName in rulesets)){
						context.astfThrowDevException(context.format("등록되지 않은 rulesetName입니다 : " + rulesetName));
					}

					var rulesetText = rulesets[rulesetName];
					
					
					/*
						exctvNm=title:임원명,required
						noprfExctvScCd=title:임원구분,required
						chaiYn=title:이사장여부,required
						->
						{
							"exctvNm" : "title:임원명,required",
							"noprfExctvScCd" : "title:임원구분,required",
							"chaiYn":"title : 이사장여부,required"
						}
					 */
					var rulesetMap = this.smfSplitedByNewlineExpressionToExpressionMap(rulesetText);
					
					// "title:임원명,required"
					var propertyRulesetExpression = this.smfStr(rulesetMap[propertyName]);
					// {title: "임원명", required:""}
					var ruleMap = this.smfRuleExpressionToMap(propertyRulesetExpression);
					
					context.smfInternalBindRulesetToComponent(ruleMap, component);
				},
				
				bindColumn: function(rulesetName, propertyName, dsValid, columnName){
					context.astfAssertParamValueIsStringType(rulesetName, "rulesetName");
					context.astfAssertParamValueIsStringType(propertyName, "propertyName");
					context.astfAssertParamValueIsDatasetType(dsValid, "dsValid");
					context.astfAssertParamValueIsStringType(columnName, "columnName");
					
					if(! (rulesetName in rulesets)){
						context.astfThrowDevException(context.format("등록되지 않은 rulesetName입니다 : " + rulesetName));
					}

					/*
					name=title:성명,minlength:1,maxlength:100
					artist=title:아티스트,minlength:10,maxlength:100
					genreCode=title:장르					
					*/
					var rulesetText = rulesets[rulesetName];
					context.smfInternalBindRulesetToDatasetColumn(rulesetText, propertyName, dsValid, columnName);
					
				}			
			};
			
			for(var i=0,size=this._dsValidationRuleset.rowcount; i<size; i++){
				var rulesetName = this._dsValidationRuleset.getColumn(i, 'rulesetName');
				var expression = this._dsValidationRuleset.getColumn(i, 'expression');
				
				rulesets[rulesetName] = expression;
			}

			func.call(context, rulesets, rulesetBinder);
		};

		service.properties.internalAfterServiceCallbackList.push(mappingRulesetCustomFunction);
		return service;
	};


	var callback = function(callbackParams){
		// 과거 내역 제거
		var dsManage = this._dsValidationRulesetManage;
		for(var i=dsManage.rowcount-1; i>=0; i--){
			if(dsManage.getColumn(i, "serviceId") == serviceId){
				dsManage.deleteRow(i);
			}
		}

		if(! callbackParams.errors){
			context.smfBindValidationRulesets.call(context, service.caller, service.callee, this._dsValidationRuleset, formRulesetMapper, formDatasetRulesetMapper, datasetRulesetMapper);
		}else{
			return;
		}
		
		// serviceId를 갱신한다
		var lastRow = dsManage.rowcount;
		dsManage.appendData(this._dsValidationRuleset);
		for(var i=lastRow,size=dsManage.rowcount; i<size; i++){
			dsManage.setColumn(i, "serviceId", serviceId);
		}
	};

	service.properties.internalAfterServiceCallbackList.push(callback);
	
	return service;
};

prForm.smfBindValidationRulesets = function(caller, callee, dataset, formRulesetMapper, formDatasetRulesetMapper, datasetRulesetMapper){
	var backendMapper = this.smfGetOrCreateBackendRulesetMapper();
	var ruleExpressionResolver = this.smfCreateRuleExpressionResolver();
	
	
	//////////////////////////////////////////////////////////////// 검증 ////////////////////////////////////////////////////////////////
	var backendRulesetNames = [];
	for(var i=0,size=dataset.rowcount; i<size; i++){
		var rulesetName = dataset.getColumn(i, "rulesetName");//backendRulesetName
		backendRulesetNames.push(rulesetName);
	}
	
	// 폼 바인딩 룰셋 검증
	for(var rulesetName in formRulesetMapper){
		if(dataset.findRow("rulesetName", rulesetName) == -1){
			var message = this.format("{0}\nthis.smfValidateService 메소드에서 정의한 ruleset [{1}]을 찾을 수 없습니다\n"
			                         +"서버에서 받은 룰셋목록\n{2}", [this.name+'.'+this.smfFuncName(caller), rulesetName, backendRulesetNames.join('\n')]);
			this.smfDevException(message, caller);
		}
	}
	
	// 폼 데이터셋 바인딩 룰셋 검증
	for(var rulesetName in formDatasetRulesetMapper){
		if(dataset.findRow("rulesetName", rulesetName) == -1){
			var message = this.format("{0}\nthis.smfValidateService 메소드에서 정의한 ruleset [{1}]을 찾을 수 없습니다\n"
			                         +"서버에서 받은 룰셋목록\n{2}", [this.name+'.'+this.smfFuncName(caller), rulesetName, backendRulesetNames.join('\n')]);
			this.smfDevException(message, caller);
		}
	}
	

	
	// 데이터셋 바인딩 룰셋 검증
	for(var rulesetName in datasetRulesetMapper){
		if(dataset.findRow("rulesetName", rulesetName) == -1){
			var message = this.format("{0}\nthis.smfValidateService 메소드에서 정의한 ruleset [{1}]을 찾을 수 없습니다\n"
			                         +"서버에서 받은 룰셋목록\n{2}", [this.name+'.'+this.smfFuncName(caller), rulesetName, backendRulesetNames.join('\n')]);
			this.smfDevException(message, caller);
		}
	}
	//////////////////////////////////////////////////////////////// 검증완료 ////////////////////////////////////////////////////////////////
	
	
	for(var i=0,size=dataset.rowcount; i<size; i++){
		var rulesetsText = dataset.getColumn(i, "rulesets");
		var rulesets = JSON.parse(rulesetsText);

		var rulesetName = dataset.getColumn(i, "rulesetName");//backendRulesetName
		var propertyRulesetExpressions = this.smfCreatePropertyRulesetExpressions(rulesets, ruleExpressionResolver, backendMapper);
		
		var expressionList = [];
		for(var n in propertyRulesetExpressions){
			expressionList.push(propertyRulesetExpressions[n].propertyName + "=" + propertyRulesetExpressions[n].expression);
		}
		
		dataset.setColumn(i, "expression", expressionList.join("\n"));
		
		if(rulesetName in formRulesetMapper){ // 폼
			var container = formRulesetMapper[rulesetName].container; 
			dataset.setColumn(i, "component", this.smfGetQualifiedName(container));
	
			this.smfInternalBindRulesetToForm(propertyRulesetExpressions, container);
		}else if(rulesetName in formDatasetRulesetMapper){ // 폼
			var container = formDatasetRulesetMapper[rulesetName].container; 
			var validationDataset = formDatasetRulesetMapper[rulesetName].dataset; 
			dataset.setColumn(i, "component", this.smfGetQualifiedName(container));
			dataset.setColumn(i, "dataset", validationDataset.name);
	
			this.smfInternalBindRulesetToFormDataset(propertyRulesetExpressions, container, validationDataset);
		}else if(rulesetName in datasetRulesetMapper){ // 데이터셋
			var datasetOfValid = datasetRulesetMapper[rulesetName].dataset; 
			dataset.setColumn(i, "component", datasetOfValid.name);
			
			this.smfInternalBindRulesetToDataset(propertyRulesetExpressions, datasetOfValid);
		}
	} 
};



prForm.smfCreatePropertyRulesetExpressions = function(rulesets, ruleExpressionResolver, backendMapper){
	var expressionSet = [];
	for(var propertyName in rulesets){
		var propertyRuleset = rulesets[propertyName];
		var rules = rulesets[propertyName]['rules'];
		
 
		var aryExpression = this.smfProcessRulesetExpression(propertyRuleset, backendMapper, ruleExpressionResolver);
		
		// title, required를 맨 앞으로 추가하기 위해 처리
		var title = "";
		var required = "";
		var orderedExpression = [];
		for(var i=aryExpression.length-1; i>=0; i--){
			var expression = aryExpression[i];
			if( this.smfStartsStr("required", expression) ){
				required = expression;
				aryExpression.splice(i, 1); // i번째에서 1개 제거
			}else if( this.smfStartsStr("title", expression) ){
				title = expression;
				aryExpression.splice(i, 1); // i번째에서 1개 제거
			}			
		}
		
		// 맨앞으로 추가
		if(required) aryExpression.unshift(required);
		// 맨앞으로 추가
		if(title) aryExpression.unshift(title);
		
		
		// expression에는 tag를 제거한다
		var stringForExpression = [];
		for(var i in aryExpression){
			// if(aryExpression[i].indexOf("tag") == 0) continue;
			stringForExpression.push(aryExpression[i]);
		}
		
		
		
		expressionSet.push({
			propertyName: propertyName,
			expression: stringForExpression.join(","),
			aryExpression: aryExpression
		});
	}
	
	return expressionSet;
};

prForm.smfInternalBindRulesetToDataset = function(propertyRulesetExpressions, datasetOfValid, callbackFunction){
	if(this.isNil(callbackFunction)) callbackFunction = function(){};
	var dsValid = datasetOfValid;

	dsValid.clearData();
	dsValid.addRow(); // C를 위함
	dsValid.addRow(); // U를 위함
	
	var expressionSet = [];

	for(var i in propertyRulesetExpressions){
		var propertyName = propertyRulesetExpressions[i].propertyName;
		var expression = propertyRulesetExpressions[i].expression;
		var aryExpression = propertyRulesetExpressions[i].aryExpression;
		
		var ruleMap = this.smfRuleExpressionToMap(expression);

		var columnInfo = dsValid.getColumnInfo(propertyName);
		if(columnInfo == null) continue;

		// insert, update용 expression을 설정한다
		var hasTag = false;
		var hasInsert = true;
		var hasUpdate = true;
		
		
		if("tag" in ruleMap){
			hasTag = true;
			
			var tagParams = ruleMap["tag"];
			
			hasInsert = this.smfContainsStr(tagParams, "1") || this.smfContainsStr(tagParams, "C");
			hasUpdate = this.smfContainsStr(tagParams, "2") || this.smfContainsStr(tagParams, "U");
			
			// 태그 제거한다
			this.smfRemoveRule(ruleMap, "tag");
			
			// tag를 제거했으니 expression을 갱신
			expression = this.smfRuleMapToExpression(ruleMap);
		}

		// 태그가 없으면 insert,update동일하게 설정한다
		if(hasTag != true || (hasInsert == true && hasUpdate == true)){
			dsValid.setColumn(0, propertyName, expression);
			dsValid.setColumn(1, propertyName, "=");		
		}else{
			if(hasInsert == true){
				dsValid.setColumn(0, propertyName, expression);
			}
			if(hasUpdate == true){
				dsValid.setColumn(1, propertyName, expression);
			}
		}
	}
};

prForm.smfInternalBindRulesetToForm = function(propertyRulesetExpressions, container, callbackFunction){
	/*
		{
		  "id" : {
			"propertyName" : "id",
			"rules" : [ {
			  "name" : "required"
			}, {
			  "name" : "fixed-length",
			  "arguments" : {
				"fixedLength" : 6
			  }
			}, {
			  "name" : "label",
			  "arguments" : {
				"label" : "아이디"
			  }
			} ]
		  }
		}
	*/
	if(this.isNil(callbackFunction)) callbackFunction = function(){};
	
	var bindInfos = this.smfGetBindingInfoOf(container);
	
	for(var i in propertyRulesetExpressions){
		var propertyName = propertyRulesetExpressions[i].propertyName;
		var expression = propertyRulesetExpressions[i].expression;
		var ruleMap = this.smfRuleExpressionToMap(expression);
		
		var bindInfo =  bindInfos[propertyName];
		if(! bindInfo) continue;
		
		
		// 태그 제거한다
		this.smfRemoveRule(ruleMap, "tag");
		
		var component = bindInfo.component;
		
		this.smfInternalBindRulesetToComponent(ruleMap, component);
	}
};

prForm.smfInternalBindRulesetToFormDataset = function(propertyRulesetExpressions, container, validationDataset){
	/*
		{
		  "id" : {
			"propertyName" : "id",
			"rules" : [ {
			  "name" : "required"
			}, {
			  "name" : "fixed-length",
			  "arguments" : {
				"fixedLength" : 6
			  }
			}, {
			  "name" : "label",
			  "arguments" : {
				"label" : "아이디"
			  }
			} ]
		  }
		} 
	*/
	this.smfInternalBindRulesetToForm(propertyRulesetExpressions, container);
	this.smfInternalBindRulesetToDataset(propertyRulesetExpressions, validationDataset);
};

prForm.smfProcessRulesetExpression = function(propertyRuleset, backendMapper, ruleExpressionResolver){
	var rules = propertyRuleset.rules;
	var aryRulesetExprssion = [];
	for(var i in rules){
		var rule = rules[i];
		if(! backendMapper[rule.name]){
			this.trace("서버에서 넘어온 알 수 없는 rule : " + rule.name);
			continue;
		}
		
		var frontendRuleName = backendMapper[rule.name];
		var ruleExpression = ruleExpressionResolver.getExpression(rule);
		if(ruleExpression){
			aryRulesetExprssion.push(ruleExpression);
		}
	}
	return aryRulesetExprssion;
};

prForm.smfCreateRuleExpressionResolver = function(){
	var converters = {};

	var context = this;

	var ruleExpressionResolver = {
		getExpression:  function(rule){
			var backendRuleName = rule.name;
			if(!(backendRuleName in converters)){
				if(backendRuleName == "code") return "";
				trace("제공하지 않은 룰셋 = " + backendRuleName);
				return "";
			}
			
			return converters[backendRuleName].call(context, rule);
		},
		
		converters: converters,
	};
	
	converters["required"] = function(rule){
		return "required";
	};
	
	converters["group-required"] = function(rule){
		// name,artist,genrCode
		var propertyNames = rule.arguments.propertyNames;
		propertyNames = this.smfReplace(propertyNames, ",", ":"); 
		// propertyNames = this.smfEscapeValidationExpression(propertyNames); 
		return this.format("grouprequired:{0}", [propertyNames]);
	};
	
// 	converters["code"] = function(rule){
// 		return "code";
// 	};
	
	
	converters["label"] = function(rule){
		return this.format("title:{0}", [rule.arguments.label]);
	};
	
	converters["post-position"] = function(rule){
		var postPosition = this.smfEscapeValidationExpression(rule.arguments.postPosition);
		return this.format("postposition:{0}", [postPosition]);
	};
	
	
	converters["for-fully-message"] = function(rule){
		var fullyMessage = this.smfEscapeValidationExpression(rule.arguments.fullyMessage);

		//backendrulename -> frontendRuleName
		// max-length -> maxlength
		var backendRuleName = rule.arguments.forRuleName;
		var frontendRuleName = context.smvRuleNameMapper[backendRuleName];
		
		if(! frontendRuleName) return "";
		return this.format("fullymessage_{0}:{1}", [frontendRuleName, fullyMessage]);
	};
	
	converters["for-property-message"] = function(rule){
		var propertyMessage = this.smfEscapeValidationExpression(rule.arguments.message);
		return this.format("propertymessage:{0}", [propertyMessage]);
	};

	
	
	
	converters["max-length-digits"] = function(rule){
		return this.format("digits:{0}", [rule.arguments.maxLength]);
	};
	
	converters["business-number"] = function(rule){
		return "bizno";
	};
	
	converters["corporation-number"] = function(rule){
		return "corpno";
	};
	
	converters["credit-card"] = function(rule){
		return "creditcard";
	};
	
	converters["email"] = function(rule){
		return "email";
	};
	
	converters["frn"] = function(rule){
		return "frn";
	};
	
	converters["mobile-number"] = function(rule){
		return "mobileno";
	};
	
	converters["phone-number"] = function(rule){
		return "phoneno";
	};
	
	converters["regex"] = function(rule){
		return this.format("regex:{0}", [rule.arguments.regex]);
	};
	
	
	converters["rrn"] = function(rule){
		return this.format("rrn", []);
	};
	
	converters["rrn-before"] = function(rule){
		return this.format("rrnbefore", []);
	};
	
	converters["rrn-after"] = function(rule){
		return this.format("rrnafter", []);
	};
	
	converters["previous-rrn"] = function(rule){
		return "rrnold";
	};
	
	converters["uon"] = function(rule){
		return "uon";
	};
	
	converters["zip-cd"] = function(rule){
		return "zipcd";
	};
	
	converters["between"] = function(rule){
		return this.format("between:{0}:{1}", [rule.arguments.from, rule.arguments.to]);
	};
	
	converters["integer-between"] = function(rule){
		return this.format("between:{0}:{1}", [rule.arguments.from, rule.arguments.to]);
	};
	
	converters["big-decimal-between"] = function(rule){
		return this.format("between:{0}:{1}", [rule.arguments.from, rule.arguments.to]);
	};

	converters["equal-to"] = function(rule){
		return this.format("equalto:{0}", [rule.arguments.otherPropertyName]);
	};

	converters["compare-greater-or-equal"] = function(rule){
		return this.format("comparemax:{0}", [rule.arguments.lessPropertyName]);
	};

	converters["compare-less-or-equal"] = function(rule){
		return this.format("comparemin:{0}", [rule.arguments.greaterPropertyName]);
	};

	converters["fixed-length"] = function(rule){
		return this.format("fixedlength:{0}", [rule.arguments.fixedLength]);
	};

	converters["length"] = function(rule){
		return this.format("minlength:{0},maxlength:{1}", [rule.arguments.minLength, rule.arguments.maxLength]);
	};

	converters["min-length"] = function(rule){
		return this.format("minlength:{0}", [rule.arguments.minLength]);
	};

	converters["max-length"] = function(rule){
		return this.format("maxlength:{0}", [rule.arguments.maxLength]);
	};

	converters["byte-length"] = function(rule){
		return this.format("minlengthB:{0},maxlengthB:{0}", [rule.arguments.minLength, rule.arguments.maxLength]);
	};

	converters["min-byte-length"] = function(rule){
		return this.format("minlengthB:{0}", [rule.arguments.minLength]);
	};

	converters["max-byte-length"] = function(rule){
		return this.format("maxlengthB:{0}", [rule.arguments.maxLength]);
	};

	converters["small-integer"] = function(rule){
		return this.format("smallinteger", []);
	};
	
	converters["big-integer"] = function(rule){
		return this.format("biginteger", []);
	};

	converters["decimal"] = function(rule){
		return this.format("decimal:{0}:{1}", [rule.arguments.precision, rule.arguments.scale]);
	};

	converters["fixed-decimal"] = function(rule){
		return this.format("decimal:{0}:{1}", [rule.arguments.precision, rule.arguments.scale]);
	};

	converters["digits"] = function(rule){
		return this.format("digits", []);
	};

	converters["max-length-digits"] = function(rule){
		return this.format("digits:{0}", [rule.arguments.maxLength]);
	};

	converters["integer"] = function(rule){
		return this.format("integer", []);
	};

	converters["max"] = function(rule){
		return this.format("max:{0}", [rule.arguments.max]);
	};

	converters["min"] = function(rule){
		return this.format("min:{0}", [rule.arguments.min]);
	};

	converters["max-decimal-point-length"] = function(rule){
		// 마스크 이용	체크
		return "";
	};

	converters["min-decimal-point-length"] = function(rule){
		// 마스크 이용	체크
		return "";
	};

	converters["no-negative-number"] = function(rule){
		return "nonegative";
	};

	converters["size"] = function(rule){
		return this.format("range:{0}:{1}", [rule.arguments.min, rule.arguments.max]);
	};

	converters["small-int"] = function(rule){
		return this.format("smallinteger", []);
	};

	converters["formatless-date"] = function(rule){
		return this.format("date", []);
	};

	converters["formatless-year-month"] = function(rule){
		return this.format("dateym", []);
	};

	converters["tag"] = function(rule){
		return this.format("tag:{0}", [nexacro.replaceAll(rule.arguments.tags, ",", ":")]);
	};

	converters["trim"] = function(rule){
		return this.format("trim", []);
	};

	converters["trim-left"] = function(rule){
		return this.format("trimleft", []);
	};

	converters["trim-right"] = function(rule){
		return this.format("trimright", []);
	};
	
	converters["focus"] = function(rule){
		var focusPropertyName = this.smfEscapeValidationExpression(rule.arguments.propertyName);
		return this.format("focus:{0}", [focusPropertyName]);
	};
	
	

	return ruleExpressionResolver;
};

/**
 *  array expression을 rulesetMap으로 변환한다
 *  
 */
prForm.smfSplitedByNewlineExpressionToExpressionMap = function(splitedByLineBreakExpressions){
	var rulesetMap = {};
	
	/*
		exctvNm=title:임원명,required
		noprfExctvScCd=title:임원구분,required
		chaiYn=title:이사장여부,required
		->
		{
			"exctvNm" : "title:임원명,required",
			"noprfExctvScCd" : "title:임원구분,required",
			"chaiYn":"title : 이사장여부,required"
		}
	 */
	
	var arrayExpressions = splitedByLineBreakExpressions.split("\n");
	for(var i in arrayExpressions){
		var expression = arrayExpressions[i];
		if(this.isNil(expression)) continue;
		
		var splitedExpression = expression.split("=");
		var propertyName = this.smfStr(splitedExpression[0]);
		var propertyRulesetExpression = this.smfStr(splitedExpression[1]);
		
		rulesetMap[propertyName] = propertyRulesetExpression;
	}
	
	return rulesetMap;
};

/**
 * 룰셋 array expression에서 propertyName에 해당하는 expression을 얻는다
 */
prForm.smfGetExpressionOfPropertyName = function(aryExpression, propertyName){
	var rulesetMap = this.smfSplitedByNewlineExpressionToExpressionMap(aryExpression);

	return this.smfStr(rulesetMap[propertyName]);
};


/**
 * (공통만사용)
 * {ruleMap}을 컴포넌트에 바인딩한다
 */
prForm.smfInternalBindRulesetToComponent = function(ruleMap, component){
	this.astfAssertParamValueIsObjectType(ruleMap, "ruleMap");
	this.astfAssertParamValueIsInputComponentType(component, "component");


	// 태그를 제거한다
	this.smfRemoveRule(ruleMap, "tag");
	
	var hasRequired = "required" in ruleMap;
	
	// required는 가장 앞으로
	if(hasRequired == true){
		this.smfInternalMoveRequiredRule(ruleMap);
	}
	
	//{title:"한글", required:"", maxlength:"10"}
	// -> title:한글,required,maxlength:10
	var newValidate = this.smfRuleMapToExpression(ruleMap);
	
	component.validate = newValidate;
	component.rulesetExpressioinByBackend = newValidate;
	
	this.smfSetRequired(component, hasRequired);	
};

/**
 * required를 이동시킨다
 * required는 가장앞에 위치해야하기때문에 맨 앞으로 위치 시킨다
 */
prForm.smfInternalMoveRequiredRule = function(ruleMap){
	delete ruleMap["required"];
	
	var firstRuleName = this.smfFirstAttributeNameOfObject(ruleMap);
	if(firstRuleName == "title"){
		this.smfInsertRule(ruleMap, "required", "", 1);
	}else{
		this.smfInsertRule(ruleMap, "required", "", 0);
	}
};

/**
 * {propertyRulesetExpression}을 컬럼에 바인딩한다
 * {propertyRulesetExpression} -> title:이름,required,maxlength:10
 */
prForm.smfInternalBindRulesetToDatasetColumn = function(propertyRulesetExpression, propertyName, dsValid, columnName){
	this.astfAssertParamValueIsStringType(propertyRulesetExpression, "propertyRulesetExpression");
	this.astfAssertParamValueIsStringType(propertyName, "propertyName");
	this.astfAssertParamValueIsDatasetType(dsValid, "dsValid");
	this.astfAssertParamValueIsStringType(columnName, "columnName");
	
	var aryExpression = propertyRulesetExpression.trim().split("\n");
	var context = this;
	
	/*
		exctvNm=title:임원명,required
		noprfExctvScCd=title:임원구분,required
		chaiYn=title:이사장여부,required
		->
		{
			"exctvNm" : "title:임원명,required",
			"noprfExctvScCd" : "title:임원구분,required",
			"chaiYn":"title : 이사장여부,required"
		}
	 */	
	var rulesetMap = this.smfSplitedByNewlineExpressionToExpressionMap(aryExpression);
	

	var expression = this.smfStr(rulesetMap[propertyName]);
	if(! expression) return;
	
	var hasInsert = true;
	var hasUpdate = true;
	
	var ruleMap = this.smfRuleExpressionToMap(expression);
	
	// 태그 존재
	var tagRule = this.smfGetRule(ruleMap, "tag");
	if(tagRule){
		var tags = tagRule.paramsText;

		hasInsert = this.smfContainsStr(tags, "1") || this.smfContainsStr(tags, "C");
		hasUpdate = this.smfContainsStr(tags, "2") || this.smfContainsStr(tags, "U");
	}	
	
	
	if(hasInsert == true){
		if(dsValid.rowcount == 0){
			dsValid.addRow();
		}
	}
	if(hasUpdate == true){
		if(dsValid.rowcount == 0){
			dsValid.addRow();
			dsValid.addRow();
		}else if(dsValid.rowcount == 1){
			dsValid.addRow();
		}
	}
	
	
	// 태그를 제거한다
	this.smfRemoveRule(ruleMap, "tag");
	var newExpression = this.smfRuleMapToExpression(ruleMap);
	if(hasInsert && hasUpdate){
		dsValid.setColumn(0, columnName, expression);
		dsValid.setColumn(1, columnName, "=");
	}else if(hasInsert){
		dsValid.setColumn(0, columnName, expression);
	}else if(hasUpdate){
		dsValid.setColumn(1, columnName, expression);
	}
};



/**
 * propertyRuleExpression을 Array로 리턴한다
 * title:이름,required,maxlength:30 -> ["title:이름", "required", "maxlength:30"]
 *
 * @propertyRuleExpression -> title:이름,required,maxlength:30
 * @return ["title:이름", "required", "maxlength:30"]
 */
prForm.smfSplitRuleExpression = function(propertyRuleExpression){
	var aryExpression = propertyRuleExpression.split(",");
	
	return aryExpression;
};


/**
 * Array로 구성된 rulset을 객체로 변환한다
 * ["title:이름", "required", "maxlength:30"] -> {title:"이름", required:"", maxlength: 30}
 */
prForm.smfRuleExpressionToMap = function(propertyRuleExpression){
	propertyRuleExpression = this.smfStr(propertyRuleExpression);
	var ruleMap = {
	};
	
	var aryExpression = this.smfSplitRuleExpression(propertyRuleExpression);
	
	for(var i in aryExpression){
		var ruleExpression = aryExpression[i];
		
		var aryRuleNameAndArguments = ruleExpression.split(":");
		var ruleName = aryRuleNameAndArguments[0];
		var ruleArguments = this.smfStr(aryRuleNameAndArguments[1]);
		
		ruleMap[ruleName] = ruleArguments;
	}

	return ruleMap;
};

/**
 * Array로 구성된 rulset을 객체로 변환한다
 * {title:"이름", required:"", maxlength: 30} -> "title:이름,required,maxlength:30"
 */
prForm.smfRuleMapToExpression = function(ruleMap){
	var rules = [];
	for(var ruleName in ruleMap){
		if(! ruleName) continue;
		var paramText = this.smfStr(ruleMap[ruleName]);
		if(paramText != ""){
			rules.push(ruleName + ":" + paramText);
		}else{
			rules.push(ruleName);
		}
	}

	return rules.join(",");
};


/**
 * ruleMap에 rule을 index위치에 삽입한다
 * @return true/false
 */
prForm.smfInsertRule = function(ruleMap, ruleName, params, index){
	if(this.isNil(index)) index = -1; // -1는 마지막에 삽입
	
	if(index == -1){
		ruleMap[ruleName] = params;
		return;
	}

	var newRuleMap = {};
	
	var added = false;
	var i = -1;
	for(var localRuleName in ruleMap){
		i++;
		if(i == index){
			added = true;
			newRuleMap[ruleName] = params;
		}

		var localParamsText = ruleMap[localRuleName];
		newRuleMap[localRuleName] = localParamsText;
	}

	if(added == false){
		newRuleMap[ruleName] = params;
	}
	
	// 클리어
	for(var memberName in ruleMap){
		delete ruleMap[memberName];
	}


	for(var ruleName in newRuleMap){
		ruleMap[ruleName] = newRuleMap[ruleName];
	}

	return newRuleMap;
};

/**
 * ruleMap에 rule을 맨앞에 추가한다
 * @return true/false
 */
prForm.smfAddFirstRule = function(ruleMap, ruleName, params){
	this.smfInsertRule(ruleMap, ruleName, params, 0);
};

/**
 * ruleMap에 rule을 맨뒤에 추가한다
 * @return true/false
 */
prForm.smfAppendRule = function(ruleMap, ruleName, params){
	this.smfInsertRule(ruleMap, ruleName, params, -1);
};


/**
 * ruleMap에서 ruleName이 있는지 여부
 * ruleMap -> {title:"이름", required:"", maxlength: 30}
 * @return true/false
 */
prForm.smfHasRule = function(ruleMap, ruleName){
	return ruleName in ruleMap;
};


/**
 * expression에서 rule을 얻는다
 * title:이름,required,maxlength:30 -> ["title:이름", "required", "maxlength:30"]
 *
 * @propertyRuleExpression -> title:이름,required,maxlength:30
 * @return ["title:이름", "required", "maxlength:30"]
 */
prForm.smfGetRule = function(ruleMap, ruleName){
	if(!(ruleName in ruleMap)){	
		return null;
	}
	
	var ruleParams = ruleMap[ruleName];

	return {
		ruleName: ruleName,
		params: ruleParams.split(":"),
		paramsText: ruleParams
	};
};

/**
 * ruleMap에서 ruleName을 제거한다
 *
 * @propertyRuleExpression -> title:이름,required,maxlength:30
 * @return ["title:이름", "required", "maxlength:30"]
 */
prForm.smfRemoveRule = function(ruleMap, ruleName){
	if(!(ruleName in ruleMap)){	
		return false;
	}

	delete ruleMap[ruleName];
	
	return true;
};


/**
 * rule을 추가/제거한다
 * required rule은 index에 관계없이 맨앞(혹은 title바로 뒤)에 추가된다.
 * 
 * @isAdd 추가/제거 여부
 * @ruleExpression 룰표현식 maxlength:30
 * @component 대상 INPUT 컴포넌트
 * @index 추가할 위치. (null, undefined, -1, out of bound index)이면 맨끝에 추가한다
 * 
 * @return void
 * @see 
 *      this.smfToggleRuleToComponent(true, "required", this.requiredComponent); //  required추가
 *      this.smfToggleRuleToComponent(this.chk.value, "required", this.requiredComponent); // 체크에 따라 required 추가/제거
 */
prForm.smfToggleRuleToComponent = function(isAdd, ruleExpression, component, index){
	this.astfAssertParamValueIsBooleanType(isAdd, "isAdd");
	this.astfAssertParamValueIsStringType(ruleExpression, "ruleExpression");


	if(isAdd){
		this.smfInsertRuleToComponent(ruleExpression, component, index);
	}else{
		var ruleName = ruleExpression.split(":")[0];
		this.smfRemoveRuleFromComponent(ruleName, component);
	}
};


/**
 * rule을 추가한다
 * required rule은 index에 관계없이 맨앞(혹은 title바로 뒤)에 추가된다.
 * 
 * @ruleExpression 룰표현식 maxlength:30
 * @component 대상 INPUT 컴포넌트
 * @index 추가할 위치. (null, undefined, -1, out of bound index)이면 맨끝에 추가한다
 * 
 * @return void
 * @see this.smfInsertRuleToComponent("required", this.requiredComponent); //  required추가
 */
prForm.smfInsertRuleToComponent = function(ruleExpression, component, index){
	this.astfAssertParamValueIsStringType(ruleExpression, "ruleExpression");
	this.astfAssertParamValueIsInputComponentType(component, "component");
	if(this.isNil(index)) index = -1;

	var validate = this.smfStr(component.validate);
	
	var ruleMap = this.smfRuleExpressionToMap(validate);
	
	var idx = ruleExpression.indexOf(":");
	if(idx != -1){
		var ruleName = ruleExpression.substring(0, idx);
		var ruleParams = ruleExpression.substring(idx+1);
	}else{
		var ruleName = ruleExpression;
		var ruleParams = "";
	}
	
	this.smfInsertRule(ruleMap, ruleName, ruleParams, index);
	this.smfInternalBindRulesetToComponent(ruleMap, component);
};

/**
 * rule을 제거한다
 * 
 * @ruleName 룰명
 * @component 대상 INPUT 컴포넌트
 * 
 * @return 제거성공(true)
 * @see this.smfRemoveRuleFromComponent("required", this.requiredComponent); //  required제거
 */
prForm.smfRemoveRuleFromComponent = function(ruleName, component){
	this.astfAssertParamValueIsStringType(ruleName, "ruleName");
	this.astfAssertParamValueIsInputComponentType(component, "component");

	var validate = this.smfStr(component.validate);
	var ruleMap = this.smfRuleExpressionToMap(validate);
	
	var succRemoved = this.smfRemoveRule(ruleMap, ruleName);

	if(succRemoved == true){
		this.smfInternalBindRulesetToComponent(ruleMap, component);
	}

	return succRemoved;
};


/**
 * rule이 컴포넌트에 포함되어있는지 확인한다
 * 
 * @ruleName 룰명
 * @component 대상 INPUT 컴포넌트
 * 
 * @return boolean
 * @see 
 */
prForm.smfHasRuleInComponent = function(ruleName, component){
	this.astfAssertParamValueIsStringType(ruleName, "ruleName");
	this.astfAssertParamValueIsInputComponentType(component, "component");

	var ruleMap = this.smfRuleExpressionToMap(component.validate);
	return ruleName in ruleMap;
};


/**
 * 컴포넌트의 ruleset을 clear한다
 * @component 컴포넌트
 * 
 * @return 
 */
prForm.smfClearRulesetToComponent = function(component){
	this.smfInternalBindRulesetToComponent({}, component);
};



/**
 * 유효성검사 룰셋표현식을 컴포넌트에 지정한다
 *
 * @propertyRuleExpression -> title:이름,required,maxlength:30
 * @return 
 * @see this.smfUpdateValidateToComponent("title:이름,required,maxlength:30", this.edtName); // 이름 컴포넌트에 required, maxlength 룰 설정
 */
prForm.smfUpdateValidateToComponent = function(propertyRuleExpression, component, bFlag){
	this.astfAssertParamValueIsStringType(propertyRuleExpression, "propertyRuleExpression");
	this.astfAssertParamValueIsInputComponentType(component, "component");
	
	//@KBR  레이블에 css를 동기화 하지 않는다
	//component.samelabelcss =  this.smfNvl(bFlag, "true");
	if(bFlag==false)
	{
		component.samelabelcss = "false";
	}
	
	var ruleMap = this.smfRuleExpressionToMap(propertyRuleExpression);
	this.smfInternalBindRulesetToComponent(ruleMap, component);
};




prForm.smfBindRulesetExpressionToForm = function(rulesetText, container){
	this.astfAssertParamValueIsStringType(rulesetText, "rulesetText");
	this.astfAssertParamValueIsContainerComponentType(container, "container");

	var ruleExpressionResolver = this.smfCreateRuleExpressionResolver();
	var backendMapper = this.smfGetOrCreateBackendRulesetMapper();
	var rulesets = JSON.parse(rulesetText);

	var expressionSet = this.smfCreatePropertyRulesetExpressions(rulesets, ruleExpressionResolver, backendMapper);
	
	this.smfInternalBindRulesetToForm(expressionSet, container);
};

// 
prForm.smfClearRulesetToForm = function(container){
	var bindInfos = this.smfGetBindingInfoOf(container);
	
	for(var componentName in bindInfos){
		var component = bindInfos[componentName].component;
		this.smfClearRulesetToComponent(component);
	}	
};

/**
 * {rulesetName}에서 {propertyName}에 해당하는 expression을 추출한다
 * serviceId
 *
 * @rulesetName 컨테이너
 * @serviceId 룰셋명
 * @return 
 */
prForm.smfGetRulsetFromValidationRulesetManage = function(rulesetName, serviceId){
	if(this.isNil(this._dsValidationRulesetManage)){
		this.smfDevException("this._dsValidationRulesetManage 데이터셋이 없습니다\nthis.smfValidateService를 먼저 호출해야 합니다");
	}
	
	var findRowExpr = this.format("serviceId == '{0}' && rulesetName == '{1}'", [serviceId, rulesetName]);
	var rowIndex = this._dsValidationRulesetManage.findRowExpr(findRowExpr);
	if(rowIndex == -1){
		this.smfDevException("this._dsValidationRulesetManage에서\n(" + findRowExpr + ")에 해당하는 룰셋을 찾을 수 없습니다");
	}
	var expression = this._dsValidationRulesetManage.getColumn(rowIndex, "expression");
	var rulesets = this._dsValidationRulesetManage.getColumn(rowIndex, "rulesets");
	
	return {
		expression: expression,
		rulesets: rulesets,
	};
};


/**
 * {arrayExpression}에서 {propertyName}에 해당하는 expression을 추출한다
 *
 * @propertyName 컨테이너
 * @arrayExpression 룰셋명
 * @return string propertyName에 해당하는 arrayExpression
 */
prForm.smfGetPropertyExpressionFromExpressions = function(propertyName, arrayExpression){
	this.astfAssertParamValueIsStringType(propertyName, "propertyName");
	this.astfAssertParamValueIsArrayType(arrayExpression, "arrayExpression");

	for(var i in arrayExpression){
		var expression = arrayExpression[i];
		var idx = expression.indexOf(propertyName + "=");
		if(idx != 0) continue;

		return expression.substring(idx);
	}
	
	return "";
};

/**
 * 룰셋정보를 container에 맵핑한다
 * @container 컨테이너
 * @rulesetName 룰셋명
 * @serviceId 서비스아이디
 * @return : void
 */
prForm.smfMappingRulesetToForm = function(container, rulesetName, serviceId){
	this.astfAssertParamValueIsContainerComponentType(container, "container");
	this.astfAssertParamValueIsStringType(rulesetName, "rulesetName");
	
	if(this.isNil(serviceId)) serviceId = "validateMain";
	
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	
	var rulesetObject = this.smfGetRulsetFromValidationRulesetManage(rulesetName, serviceId);
	var expression = rulesetObject.expression;
	var rulesets = JSON.parse(rulesetObject.rulesets);
	// var 

	var backendMapper = this.smfGetOrCreateBackendRulesetMapper();
	var ruleExpressionResolver = this.smfCreateRuleExpressionResolver();
	var propertyRulesetExpressions = this.smfCreatePropertyRulesetExpressions(rulesets, ruleExpressionResolver, backendMapper);

	this.smfClearRulesetToForm(container);
	this.smfInternalBindRulesetToForm(propertyRulesetExpressions, container);
};

/**
 * 룰셋을 컴포넌트에 적용한다
 * @component 컴포넌트
 * @propertyName 프로퍼티명
 * @rulesetName 룰셋명
 * @serviceId 서비스아이디
 * @see this.smfMappingRulesetToComponent(this.divSearch.edtName, "name", "search");
 */
prForm.smfMappingRulesetToComponent = function(component, propertyName, rulesetGroupName, serviceId){
	this.astfAssertParamValueIsInputComponentType(component, "component");
	this.astfAssertParamValueIsStringType(propertyName, "propertyName");
	this.astfAssertParamValueIsStringType(rulesetGroupName, "rulesetGroupName");
	if(this.isNil(serviceId)) serviceId = "validateMain";
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");	
	

	/*
	*/
	var rulesetObject = this.smfGetRulsetFromValidationRulesetManage(rulesetGroupName, serviceId);
	var rulesetMap = this.smfSplitedByNewlineExpressionToExpressionMap(rulesetObject.expression);
	var propertyRulesetExpression = this.smfStr(rulesetMap[propertyName]);
	
	var ruleMap = this.smfRuleExpressionToMap(propertyRulesetExpression);

	this.smfInternalBindRulesetToComponent(ruleMap, component);     	
};



// todo d
prForm.smfMappingRulesetToDataset = function(datasetOfValid, rulesetName, serviceId){
	this.astfAssertParamValueIsDatasetType(datasetOfValid, 'datasetOfValid');
	this.astfAssertParamValueIsStringType(rulesetName, "rulesetName");
	this.astfAssertParamValueIsStringType(serviceId, "serviceId");
	
	var rulesetObject = this.smfGetRulsetFromValidationRulesetManage(rulesetName, serviceId);
	var expression = rulesetObject.expression;
	var rulesets = JSON.parse(rulesetObject.rulesets);	

	var backendMapper = this.smfGetOrCreateBackendRulesetMapper();
	var ruleExpressionResolver = this.smfCreateRuleExpressionResolver();
	var propertyRulesetExpressions = this.smfCreatePropertyRulesetExpressions(rulesets, ruleExpressionResolver, backendMapper);
	
	
	this.smfInternalBindRulesetToDataset(propertyRulesetExpressions, datasetOfValid);
};




// 유효성검사에서 사용할 컴포넌트 찾기 함수
prForm.smfSearchComponentForValidate = function(container, baseComponent, propertyName){
	this.astfAssertParamValueIsContainerComponentType(container, "container");
	this.astfAssertParamValueIsStringType(propertyName, 'propertyName');
	
	var result = {
		component: null,
		value: null,
		text: "",
	};
	
	// 컴포넌트를 검색한다
	var otherComponent = this.smfSearchComponent(container, propertyName);
	if(otherComponent){
		result.component = otherComponent;
		result.value = otherComponent.value;
		result.text = this.nvl(otherComponent.text, result.value);
	}else{
		// 없으면 데이터셋에서 검색한다
		var binditem = this.smfBindItemByComponent(baseComponent);
		if(binditem){
			var dataset = this[binditem.datasetid];
			if(dataset){
				var columnName = propertyName;
				var otherValue = dataset.getColumn(dataset.rowposition, columnName);
				
				var otherBindInfo = this.smfBindItemByDatasetColumnName(binditem.datasetid, columnName);
				if(! otherBindInfo){
					return result;
				}
				var otherComponentName = otherBindInfo.compid;
				
				otherComponent = this.smfFastFindComponent(this, otherComponentName); 
				if(otherComponent){
					result.component = otherComponent;
					result.value = otherComponent.value;
					result.text = this.nvl(otherComponent.text, otherValue);						
				}
			}
		}
	}

	return result;
};










prForm.smfAfterBackendValidationResultMessageProcess = function(service, serviceId, reason, message){
	// #invalid#^json
	message = this.smfStr(message).trim();
	// this.trace("message = " + message);
	
	// 정규식으로 유효성검사 오류 메시지인지 확인한다
	// 아래와 같은 규격으로 서버에서 전달된다
	// CM155|{"rule":{"propertyName":"id","label":"아이디","ruleName":"required","message":"아이디는 필수입니다"}}
	// CM155|{\n"
	if(message.search(/CM155\|\{/) != 0) return;
	
	// JSON String만 추출
	// CM155|{"rule":{"propertyName":"id","label":"아이디","ruleName":"required","message":"아이디는 필수입니다"}}
	// -> {"rule":{"propertyName":"id","label":"아이디","ruleName":"required","message":"아이디는 필수입니다"}}
	var validationResultJsonString = message.split("|")[1];
	/*
CM155|{
  "isValid" : false,
  "state" : null,
  "message" : null,
  "invalids" : {
    "id" : {
      "propertyName" : "id",
      "label" : "아이디",
      "ruleName" : "required",
      "message" : "아이디는 필수입니다"
    },
    "listenCnt" : {
      "propertyName" : "listenCnt",
      "label" : "청취수",
      "ruleName" : "required",
      "message" : "청취수는 필수입니다"
    }
  },
  "formName" : "save"
}
	*/
	
	
	var invalid = JSON.parse(validationResultJsonString);

	if(this.isNotNil(invalid.listName)){	
		// 그리드용 후처리
		this.smfSetFocusThatInvalidBackendDataset(serviceId, invalid.listName, invalid);
		return;
	}

	// 폼용 후처리
	if(this.isNotNil(invalid.formName)){
		var invalidMessages = invalid.invalids;
		for(var propertyName in invalidMessages){
			var propertyInvalidRule = invalidMessages[propertyName];
			var invalidMessage = propertyInvalidRule.message;
			// component에 의한 유효성검사
			if(this.isNotNil(invalid.formName)){
				// 컴포넌트에 의한 유효성검사 수행 결과가
				// invalid할때 focus를 지정한다
				this.smfSetFocusThatInvalidBackendForm(invalid.formName, invalid);
			}else if(this.isNotNil(invalid.listName)){
				// Dataset(주로 그리드)에 의한 유효성검사 수행 결과가
				// invalid할때 focus를 지정한다
				this.smfSetFocusThatInvalidBackendDataset(invalid.listName, invalid);
			}
		
			// 첫번째 메시지만 표시한다
			this.smfLiteralAlert(invalidMessage, [], function(){
			});
			return;
		}
	}
};	

/**
 * backend에서 유효성검사를 수행후 그리드에 focusing한다
 * 
 * @param  datasetName
 * @param  invalid
 * @return void
 */
prForm.smfSetFocusThatInvalidBackendDataset = function(serviceId, serverSideDatasetName, invalid){
	// 서버로부터 전달받은 메시지를 이용하여 메시지를 생성하고
	// 메시지를 사용자에 표시한다

	if(this.isNil(invalid.list)) return;
	/*
		 {
		  "isValid" : false,
		  "listName" : "main",
		  "list" : {
			"0" : {
			  "artist" : {
				"propertyName" : "artist",
				"label" : "아티스트",
				"ruleName" : "required",
				"message" : "아티스트는 필수입니다"
			  }
			}
		  }
		}	
	*/


	var theGrid = null;
	var theDataset = null;
	
	// 서버로부터 전달받은 listName을 이용하여 데이터셋을 얻는다
	// main=dsMain:U search=dsSearch:N
	var sInDatasets = this.smfStr(this.dsService.getColumn(this.dsService.findRow("id", serviceId), "inDatasets")).trim();
	sInDatasets = sInDatasets.replace("  ", " ");
	
	// 그리드를 찾는다
	// 기준 1 : 서버로 부터 전달받은 listName을 데이터셋으로 판단하고 찾는다
	// 기준 2 : 서버로 전달하는 데이터셋중 그리드와 연결되어있는 데이터셋을 하나 찾는다. 맨먼저 찾는 데이터셋이 기준이 된다
	var pairDatasets = this.smfGetPairDatasets(sInDatasets);
	

	// 기준 1 : 서버로 부터 전달받은 listName을 데이터셋으로 판단하고 찾는다
	for(var i in pairDatasets){
		var pairDataset = pairDatasets[i];
		var backendDatasetName = pairDataset.leftDatasetName;
		if(serverSideDatasetName == backendDatasetName){
			var frontendDataset = pairDataset.rightDataset;
			if(this.isNotNil(frontendDataset)){
				theGrid = this.smfGridByDataset(frontendDataset);
				// 그리드를 찾음
				if(this.isNotNil(theGrid)){
					theDataset = frontendDataset;
					break;
				}
			}
		}
	}
	
	
	// 기준 2 : 서버로 전달하는 데이터셋중 그리드와 연결되어있는 데이터셋을 하나 찾는다. 맨먼저 찾는 데이터셋이 기준이 된다
	if(this.isNil(theGrid)){
		for(var i in pairDatasets){
			var pairDataset = pairDatasets[i];
			var frontendDataset = pairDataset.rightDataset;
			if(this.isNotNil(frontendDataset)){
				theGrid = this.smfGridByDataset(frontendDataset);
				// 그리드를 찾음
				if(this.isNotNil(theGrid)){
					theDataset = frontendDataset;
					break;
				}
			}
		}
	}
	
	// 첫번재 index를 얻는다
	var listIndexName = this.smfFirstAttributeNameOfObject(invalid.list);
	var invalidRow = invalid.list[listIndexName];
	var propertyName = this.smfFirstAttributeNameOfObject(invalidRow);
	var invalidPropertyOfFirst = invalidRow[propertyName];
	var invalidPropertyMessage = invalidPropertyOfFirst.message;
	
	if(this.isNil(theDataset)){
		var message = this.format("서버로부터 전달받은 listName({0})을 이용하여 데이터셋을 찾을 수 없음. 서버로 전달한 데이터셋 = {1}", [serverSideDatasetName, sInDatasets]);
		this.trace(message);
	
		if(this.isNotNil(invalidPropertyMessage)){
			this.smfAlert(invalidPropertyMessage);
		}else{
			this.smfAlert("입력값이 유효하지 않습니다");
		}
		return;
	}
	
	var grid = this.smfGridByDataset(theDataset);
	
	
	
	this.smfAlert(invalidPropertyMessage);
};

/**
 * backend에서 유효성검사를 수행후 컴포넌트에 focusing한다
 * 
 * @param  rulesetName
 * @param  invalid
 * @return void
 */
prForm.smfSetFocusThatInvalidBackendForm = function(rulesetName, invalid){
	var rowIndex = this._dsValidationRulesetManage.findRow("rulesetName", rulesetName);
	

	
	var componentName = this._dsValidationRulesetManage.getColumn(rowIndex, "component");
	
	if(this.isNil(componentName)){
		this.trace("컴포넌트를 찾을 수 없습니다 = " + componentName);
		return;
	}
	
	
	var containerComponent = this.smfFastFindComponent(this, componentName);
	
	if(this.isNil(containerComponent)){
		this.trace("컴포넌트를 찾을 수 없습니다.. = " + containerComponent);
		return;
	}
	
	// 첫번재 프로퍼티 명을 얻어온다
	var firstPropertyName = "";
	for(var propertyName in invalid.invalids){
		firstPropertyName = propertyName;
		break;
	}
	
	this.trace("firstPropertyName = " + firstPropertyName);
	this.trace("containerComponent = " + containerComponent);
	
	var binditem = this.smfFilterBindItemFirst(function(binditem){
		return binditem.propid == 'value' && binditem.columnid == firstPropertyName;
	});
	
	if(binditem == null) return;
	this.trace('binditem.compid = ' + binditem.compid);
	var propertyComponent = this.smfFastFindComponent(this, binditem.compid);

	this.trace("propertyComponent = " + propertyComponent);
	propertyComponent.setFocus();
};

/**
 * backend에서 유효성검사를 수행후 그리드에 focusing한다
 * 
 * @param  datasetName
 * @param  invalid
 * @return void
 */
// prForm.smfSetFocusThatInvalidBackendDataset = function(datasetName, invalid){
// 	//todo
// };



/**
 * invalid항목을 array로 변환한다
 * 
 * @param  validationResultObject
 * @return Array<InvalidRule>
 */
prForm.smfSplitInvalids = function(validationResultObject){
	var invalidProperties = [];

	for(var propertyName in validationResultObject){
		var invalid = validationResultObject[propertyName];
		invalidProperties.push(invalid);
	}

	return invalidProperties; 
};

prForm.smfAfterValidationResult = function(svcid, errcd, errmsg, validationResultJsonString){
	if(this.isNil(this.smfStr(validationResultJsonString).trim())) return;
		
	var validationResultObject = JSON.parse(validationResultJsonString);
	
	if(this.smfIsEmptyObject(validationResultObject)) return;
	
	/*
{
  "message" : "5자리로 입력하세요",
  "properties" : { },
  "form" : {
    "fondScCode" : {
      "propertyName" : "fondScCode",
      "ruleName" : "length",
      "arguments" : {
        "minLength" : 5,
        "maxLength" : 100
      },
      "value" : "dddd"
    }
  },

  "list" : { 
	"0": {
		"fondScCode" : {
		  "propertyName" : "fondScCode",
		  "ruleName" : "length",
		  "arguments" : {
			"minLength" : 5,
			"maxLength" : 100
		  },
	},
  }
}
	*/ 
	//메시지가 있으면 우선 메시지 출력
	var message = validationResultObject.message;
	if(this.isNotNil(message)){
		alert(message);
		return;
	}

	if(! this.smfIsEmptyObject(validationResultObject.form)){
		this.smfAfterValidationResultForForm(svcid, errcd, errmsg, validationResultObject.form);
		return;
	}else if(! this.smfIsEmptyObject(validationResultObject.list)){
		this.smfAfterValidationResultForList(svcid, errcd, errmsg, validationResultObject.list);
		return;
	}
};

prForm.smfAfterValidationResultForForm = function(svcid, errcd, errmsg, validationResultFormObject){
	var invalidProperties = this.smfSplitInvalids(validationResultFormObject);

	var firstInvalid = invalidProperties[0]; 

	// 
	var containerNameOfInputComponents = this.dsService.lookup("id", svcid, "containerNameOfInputComponents");
	
	var containerComponent = this.smfFindComponentInThisContext(containerNameOfInputComponents);
	var invalidInputComponent = this.smfFindComponent(containerComponent, firstInvalid.propertyName);

	
	//  컨테이너 컴포넌트에 바인드되어있는 모든 정보가 필요
	// firstInvalid.propertyName
	// smfFindComponent();
	// containerComponent
	var bindinfos = this.smfGetBindingInfoOf(containerComponent); 

	// 포커스 처리와 
	// input에 대한 라벨을 결합하여 메시지화 한다
	if(firstInvalid.propertyName in bindinfos){
		var bindinfo = bindinfos[firstInvalid.propertyName];

		this.smfNotifyInvalidInputComponentToUser(firstInvalid, bindinfo);
	}
};

prForm.smfAfterValidationResultForList = function(svcid, errcd, errmsg, validationResultListObject){

	/*
		{
		  "list" : {
			"0" : {
			  "cdcValue" : {
				"propertyName" : "cdcValue",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  },
			  "useYn" : {
				"propertyName" : "useYn",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  }
			},
			"1" : {
			  "cdcValueNm" : {
				"propertyName" : "cdcValueNm",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  },
			  "clsfCodeValue" : {
				"propertyName" : "clsfCodeValue",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  }
			}
		  }
		}	
	*/
	
	var containerNameOfInputComponents = this.dsService.lookup("id", svcid, "containerNameOfInputComponents");
	
	var gridOrContainerComponent = this.smfFindComponentInThisContext(containerNameOfInputComponents);
	if(gridOrContainerComponent == null) return;
	
	this.astfAssertParamValueIsObjectType(gridOrContainerComponent);
	
	if(gridOrContainerComponent instanceof nexacro.Grid){
		// 아래에서 코드 진행
	}else if(this.isNotNil(gridComponent.form)){
		return this.smfAfterValidationResultForForm(svcid, errcd, errmsg);
	}else{
		trace('알수 없는 컴포넌트 : ' + gridOrContainerComponent.name);
		return;
	}
	
	var rowIndex = 0;
	// row index를 얻는다
	for(var i in validationResultListObject){
		rowIndex = parseInt(i);
		break;
	}
	var invalidProperties = this.smfSplitInvalids(validationResultListObject);
	var firstRowInvalid = invalidProperties[0];
	var grid = gridOrContainerComponent;
	var dataset = this.smfFindComponentInThisContext(grid.binddataset);

	var firstColumnInvalid = this.smfSplitInvalids(firstRowInvalid)[0];
	
	
	// label찾기
	var label = "";
	for(var i=0,size=grid.getCellCount("head"); i<size; i++){
		var celltext = this.smfStr(grid.getCellProperty("body", i, "text"));
		if(celltext == "bind:" + firstColumnInvalid.propertyName){
			label = this.smfStr(grid.getCellProperty("head", i, "text"));
			break;
		}
	}
	
	// 해당 propertyName에 해당하는 셀을 찾아 focus를 지정한다
	for(var i=0,size=grid.getCellCount("body"); i<size; i++){
		var celltext = this.smfStr(grid.getCellProperty("body", i, "text"));
		if(celltext == "bind:" + firstColumnInvalid.propertyName){
			if(this.isNotNil(label)){
				alert(label + " 항목은 " + firstColumnInvalid.message);
			}else{
				alert(firstColumnInvalid.message);
			}
			this.smfSetFocus(grid);
			dataset.set_rowposition(rowIndex);
			grid.setCellPos(i);
			grid.showEditor();
			break;
		}
	}
	
}


/**
 * 컴포넌트의 레이블을 얻는다
 * 검색 순서 : 1. validate 프로퍼티에서 title
                2. 동일 container에 소속한 Static 컴포넌트에서 refinputcomponent 속성이 component의 name과 일치
				3. 동일 container에 소속한 Static대상으로 component.taborder보다 작은 탭오더를 가진 Static
				   해당 후보 Static의 text프로퍼티가 비었으면(isEmpty) 다른 후보를 찾는다
 */
prForm.smfGetLabelOf = function(component){
	this.astfAssertParamValueIsObjectType(component, 'component'); 

	var labelText = "";
	// 1. validate 표현식에서 검색
	if(this.smfContainsStr(component.validate, "title")){
		var rules = this.smfStr(component.validate).split(",");
		for(var i in rules){
			var rule = rules[i];
			if(this.smfStartsStr("title", rule)){
				//title:성명
				labelText = rule.split(":")[1];
				return labelText;
			}
		}
	}
	
	// 2. 동일 container에 소속한 Static 컴포넌트에서 refinputcomponent 속성이 component의 name과 일치
	this.smfTravelComponents(component.parent, function (oComp, fnc, nLvl){
		if(this.isNil(oComp.refinputcomponent)) return;
		if(component.name != oComp.refinputcomponent) return;
		
		// label을 찾음
		labelText = this.smfStr(this.nvl(oComp.value, oComp.text));
		return false;
	});
	if(this.isNotNil(labelText)) return labelText;
	
	
	// 동일 container에 소속한 Static대상으로 component.taborder보다 작은 탭오더를 가진 Static
	// 현재 컴포넌트의 이전 컴포넌트가 label이라면 그것을 label로 사용한다
	var components = this.smfSortByTabOrder(component.parent);
	for(var i=component.taborder; i>=0; i--){
		var comp = components[i];
		// 컴포넌트를 찾아서
		// 이전 taborder의 컴포넌트를 컴포넌트
		
		if(comp instanceof nexacro.Static){
			labelText = this.nvl(comp.text, comp.value);
			// 라벨이 비었으면 패스
			if(this.isNil(labelText)) continue;
			
			return labelText;
		}
	}
	
	return "";
};


/**
 * 그리드의 columnName의 레이블을 얻는다
 * 검색 순서 : 1. validate 프로퍼티에서 title
                2. columnName을 이용한 grid의 헤더
 */
prForm.smfGetLabelOfGridColumn = function(grid, datasetOfGrid, validateExpression, columnName){
	this.astfAssertParamIsGridType(grid, 'grid'); 
	this.astfAssertParamValueIsDatasetType(datasetOfGrid, 'datasetOfGrid'); 
	this.astfAssertParamValueIsStringType(validateExpression, 'validateExpression'); 
	this.astfAssertParamValueIsStringType(columnName, 'columnName'); 

	var labelText = "";
	// 1. validate 표현식에서 검색
	if(this.smfContainsStr(validateExpression, "title")){
		var rules = this.smfStr(validateExpression).split(",");
		for(var i in rules){
			var rule = rules[i];
			if(this.smfStartsStr("title", rule)){
				//title:성명
				labelText = rule.split(":")[1];
				return labelText;
			}
		}
	}
	
	
	
	// 2. 그리드에서 검색
    for(var i=0,size=grid.getCellCount("body"); i<size; i++){
        var text = this.smfStr(grid.getCellProperty("body", i, "text"));
        if("bind:" + columnName == text){
            //title:성명
            labelText = grid.getCellProperty("head", i, "text");
            return labelText;
        }
    }
	
	return "";
};

/**
 * 유효성검사 결과 객체를 이용하여 메시지를 작성한다
 */
prForm.smfGetMessageValidationResult = function(invalid, bindinfo){
	this.astfAssertParamValueIsObjectType(invalid, 'invalid');
	this.astfAssertParamValueIsObjectType(bindinfo, 'bindinfo');

	// 컴포넌트에 대한 label정보를 획득한다
	var label = this.smfGetLabelOf(bindinfo.component);
	
	var message = invalid.message;

	// 레이블이 있으면 포함한다
	if(this.isNotNil(label)){
		message = label + " 항목은 " + message;
	} 

	return message;
};

/**
 * input에 대한 유효성검사 결과
 * 메시지를 사용자에게 표시한다
 */
prForm.smfNotifyInvalidInputComponentToUser = function(invalid, bindinfo){
	this.astfAssertParamValueIsObjectType(invalid, 'invalid');
	this.astfAssertParamValueIsObjectType(bindinfo, 'bindinfo');

	var propertyName = invalid.propertyName;
	var ruleName = invalid.ruleName;
	var args = invalid["arguments"];
	var message = invalid.message;
	
	var message = this.smfGetMessageValidationResult(invalid, bindinfo);
	this.alert(message);
	this.smfSetFocus(bindinfo.component);
};


/**
 * 유효성검사 결과 객체를 이용하여 메시지를 작성한다
 */
prForm.smfGetMessageValidationResult = function(invalid, bindinfo){
	this.astfAssertParamValueIsObjectType(invalid, 'invalid');
	this.astfAssertParamValueIsObjectType(bindinfo, 'bindinfo');

	// 컴포넌트에 대한 label정보를 획득한다
	var label = this.smfGetLabelOf(bindinfo.component);
	
	var message = invalid.message;

	// 레이블이 있으면 포함한다
	if(this.isNotNil(label)){
		message = label + " 항목은 " + message;
	} 

	return message;
};

/**
 * input에 대한 유효성검사 결과
 * 메시지를 사용자에게 표시한다
 */
prForm.smfNotifyInvalidInputComponentToUser = function(invalid, bindinfo){
	this.astfAssertParamValueIsObjectType(invalid, 'invalid');
	this.astfAssertParamValueIsObjectType(bindinfo, 'bindinfo');

	var propertyName = invalid.propertyName;
	var ruleName = invalid.ruleName;
	var args = invalid["arguments"];
	var message = invalid.message;
	
	var message = this.smfGetMessageValidationResult(invalid, bindinfo);
	this.alert(message);
	this.smfSetFocus(bindinfo.component);
};



prForm.smfAfterValidationResultForForm = function(svcid, errcd, errmsg, validationResultFormObject){
	var invalidProperties = this.smfSplitInvalids(validationResultFormObject);

	var firstInvalid = invalidProperties[0];

	// 
	var containerNameOfInputComponents = this.dsService.lookup("id", svcid, "containerNameOfInputComponents");
	
	var containerComponent = this.smfFindComponentInThisContext(containerNameOfInputComponents);
	var invalidInputComponent = this.smfFindComponent(containerComponent, firstInvalid.propertyName);

	
	//  컨테이너 컴포넌트에 바인드되어있는 모든 정보가 필요
	// firstInvalid.propertyName
	// smfFindComponent();
	// containerComponent
	var bindinfos = this.smfGetBindingInfoOf(containerComponent); 

	// 포커스 처리와 
	// input에 대한 라벨을 결합하여 메시지화 한다
	if(firstInvalid.propertyName in bindinfos){
		var bindinfo = bindinfos[firstInvalid.propertyName];

		this.smfNotifyInvalidInputComponentToUser(firstInvalid, bindinfo);
	}
};

prForm.smfAfterValidationResultForList = function(svcid, errcd, errmsg, validationResultListObject){

	/*
		{
		  "list" : {
			"0" : {
			  "cdcValue" : {
				"propertyName" : "cdcValue",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  },
			  "useYn" : {
				"propertyName" : "useYn",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  }
			},
			"1" : {
			  "cdcValueNm" : {
				"propertyName" : "cdcValueNm",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  },
			  "clsfCodeValue" : {
				"propertyName" : "clsfCodeValue",
				"ruleName" : "required",
				"arguments" : { },
				"message" : "필수입니다"
			  }
			}
		  }
		}	
	*/
	
	var containerNameOfInputComponents = this.dsService.lookup("id", svcid, "containerNameOfInputComponents");
	
	var gridOrContainerComponent = this.smfFindComponentInThisContext(containerNameOfInputComponents);
	if(gridOrContainerComponent == null) return;
	
	this.astfAssertParamValueIsObjectType(gridOrContainerComponent);
	
	if(gridOrContainerComponent instanceof nexacro.Grid){
		// 아래에서 코드 진행
	}else if(this.isNotNil(gridComponent.form)){
		return this.smfAfterValidationResultForForm(svcid, errcd, errmsg);
	}else{
		trace('알수 없는 컴포넌트 : ' + gridOrContainerComponent.name);
		return;
	}
	
	var rowIndex = 0;
	// row index를 얻는다
	for(var i in validationResultListObject){
		rowIndex = parseInt(i);
		break;
	}
	var invalidProperties = this.smfSplitInvalids(validationResultListObject);
	var firstRowInvalid = invalidProperties[0];
	var grid = gridOrContainerComponent;
	var dataset = this.smfFindComponentInThisContext(grid.binddataset);

	var firstColumnInvalid = this.smfSplitInvalids(firstRowInvalid)[0];
	
	
	// label찾기
	var label = "";
	for(var i=0,size=grid.getCellCount("head"); i<size; i++){
		var celltext = this.smfStr(grid.getCellProperty("body", i, "text"));
		if(celltext == "bind:" + firstColumnInvalid.propertyName){
			label = this.smfStr(grid.getCellProperty("head", i, "text"));
			break;
		}
	}
	
	// 해당 propertyName에 해당하는 셀을 찾아 focus를 지정한다
	for(var i=0,size=grid.getCellCount("body"); i<size; i++){
		var celltext = this.smfStr(grid.getCellProperty("body", i, "text"));
		if(celltext == "bind:" + firstColumnInvalid.propertyName){
			if(this.isNotNil(label)){
				alert(label + " 항목은 " + firstColumnInvalid.message);
			}else{
				alert(firstColumnInvalid.message);
			}
			this.smfSetFocus(grid);
			dataset.set_rowposition(rowIndex);
			grid.setCellPos(i);
			grid.showEditor();
			break;
		}
	}
};



prForm.smfEscapeValidationExpression = function(expression){
	expression = nexacro.replaceAll(expression, ":", "${colon}");
	expression = nexacro.replaceAll(expression, ",", "${comma}");
	return expression;
};

prForm.smfUnescapeValidationExpression = function(escapedExpression){
	var expression = escapedExpression;
	expression = nexacro.replaceAll(expression, "${colon}", ":");
	expression = nexacro.replaceAll(expression, "${comma}", ",");
	return expression;
};




