/**
* @fileoverview 파라메터/응답 값 검증함수
* 내부적으로 사용하는 라이브러리이며 업무에서 직접호출 하지 않는다
* @author 문호상
* @version 0.7  버전
*/

/*
	this.astfAssertParamValueIsInputComponentType(component, "component");
	this.astfAssertParamValueIsContainerComponentType(container, "container");
	this.astfAssertParamIsGridType(grid, 'grid'); 
	this.astfAssertParamValueIsDatasetType(datasetOfGrid, 'datasetOfGrid'); 
	this.astfAssertParamValueIsStringType(validateExpression, 'validateExpression'); 
	this.astfAssertParamValueIsStringType(columnName, 'columnName');
	this.astfAssertParamValueIsBooleanType(isMark, 'isMark');
	this.astfAssertParamValueIsInputTypeComponentType(obj, nexacro.Edit, "obj", "Edit");
	this.astfAssertAllOfElementOfArrayType = function(arrayValue, typeOfElement, paramArrayName, assertTargetFunc);
	 
*/

var prForm = nexacro.Form.prototype; 

var astvUndefinedType = typeof undefined;
var astvStringType = typeof "";
var astvNumberType = typeof 0;
var astvPlainObjectType = typeof {};
var astvObjectType = typeof {};
var astvBooleanType = typeof true; 

prForm.astvUndefinedType = typeof undefined;
prForm.astvStringType = typeof "";
prForm.astvNumberType = typeof 0;
prForm.astvPlainObjectType = typeof {};
prForm.astvObjectType = typeof {};
prForm.astvBooleanType = typeof true; 



/**
 * 값이 array대상 값에 포함되는지 확인한다
 * @return : boolean
 */
prForm.astfIsRange = function(){
    var value = arguments[0];
    
    for(var i=1,size=arguments.length; i<size; i++){
        if(arguments[i] == value) return true;
    }
    
    return false;
};

/**
 * 형식화된 문자열로 리턴한다
 * @format 포맷 문자열
 * @return : 형식화된 문자열
 * @example : this.astfSprintf("%s은 필수입니다", "성명");
 */
prForm.astfSprintf = function(format){
    for(var i=1; i<arguments.length; i++){
        format = format.replace("%s", (""+arguments[i]));
    }
    return format;
};

/**
 * caller를 list로 리턴한다
 * @return : list
 */
prForm.astfGetCallerList = function(){
    var result = [];
    var cr = arguments.callee

	var i = 100;
    while(this.isNotNil(cr)){
        result.push(cr);
        cr = cr.caller;
	
		if(i-- == 0) break;
    }
	
    return result;
};


/**
 * 호출스택을 함수명으로 표시한다
 * @return : String 
 */
prForm.astfGetCallerFunctionNameList = function(withoutAssertFunctionStack, startCaller){
    var callerList = [];
	
	if(startCaller){
		var cr = startCaller;
	}else{
		var cr = arguments.callee.caller;//자기자신 제외
	}

	var limited = false;
	var cnt = 0;
    while(this.isNotNil(cr) && cr != cr.caller){
        callerList.push(cr);
        cr = cr.caller;
		 
		 if(cnt++ == 20){
			limited = true;
			break;
		 }
    }

    var result = [];
    for(var i in callerList){
        var func = callerList[i];
        
        var functionName = this.astfGetFunctionNameInContext(func);
        if(withoutAssertFunctionStack == true){
            if(functionName.indexOf("astf") == 0) continue;
            if(functionName.indexOf("anonymous_funcion") == 0) continue;
        }
        result.push(this.astfGetFunctionNameInContext(func));
    }
	 
	 if(limited == true){
		result.push("생략(20 stack 초과)...");
	 }

    return result; 
};

/**
 * 함수가 익명함수인지 여부를 리턴한다
 * @func 함수객체
 * @return : boolean
 */
prForm.astfIsAnonymounsFunction = function(func){
    var funcName = this.astfFunctionName(func);
    return "anonymous" == funcName;
};

/**
 * 예외를 발생시킨다
 * @message 오류메시지
 * @return : void
 */
prForm.astfThrowInvalidArgumentExcept = function(message, startCaller){
    message = "잘못된 파라메터입니다\n" + message;
    this.astfThrowDevException(message, startCaller);
};

/**
 * 개발실수 예외를 발생시킨다
 * @message 오류메시지
 * @return : void
 */
prForm.astfThrowDevException = function(message, startCaller){
    var msg = "개발오류입니다\n" + message +"\n".trim();
    msg += "\n\n\nreversed call stacktrace:\n    ";
    
    var callStackTraceList = this.astfGetCallerFunctionNameList(true, startCaller);
    var reversedCallStackTraceList = callStackTraceList.reverse();
    msg += reversedCallStackTraceList.join("\n    ");
    

    trace(msg);
	
	// 운영인 경우 개발자용 메세지를 출력하지 않도록 함
	var sRunMode = nexacro.getEnvironmentVariable("ev_runMode");	
	if(sRunMode!="3")  // 운영
	{
		alert(msg);
	}
	
    throw new Error(msg);
};

/**
 * context에 속한 함수객체의 이름을 얻는다
 * @functionObjectOfContext 함수객체
 * @context 컨텍스트(null이면 this) 
 * @return : String 함수명
 */
prForm.astfGetFunctionNameInContext = function(functionObjectOfContext, isWithoutParamNames, context){
    if(this.isNil(context)) context = this;
    
    var limit = 200;
    
    for(var i in context){
        limit--;
        if(limit == 0) break;
        if(context[i] == functionObjectOfContext){
			if(isWithoutParamNames == true){
				return i;
			} else{ 
				//  function(obj,e)
				var firstLine = (functionObjectOfContext+"").split("\n")[0];
				
				// function(obj,e) -> (obj,e)
				var argumentText = firstLine.substring(firstLine.indexOf("("), firstLine.indexOf(")")+1);
				return i + argumentText;
			}
        }
    }
    
    return "anonymous_funcion()";
};

/**
 * 함수객체의 이름을 얻는다
 * @func 함수객체
 * @return : String 함수명
 */
prForm.astfFunctionName = function(func){
    return this.astfGetFunctionNameInContext(func);
// 	if(this.isNil(func)){
// 		return "";
// 	}
// 	 
// 	if(typeof func == this.astvStringType) return func;
// 
//     // Match:
//     // - ^          the beginning of the string
//     // - function   the word 'function'
//     // - \s+        at least some white space
//     // - ([\w\$]+)  capture one or more valid JavaScript identifier characters
//     // - \s*        optionally followed by white space (in theory there won't be any here,
//     //              so if performance is an issue this can be omitted[1]
//     // - \(         followed by an opening brace
//     //
//     var result = /^function\s+([\w\$]+)\s*\(/.exec( func.toString() )
// 
//     return  result  ?  result[ 1 ]  :  'anonymous' // for an anonymous this.there = function won't be a match
};


/**
 * assert object 포맷
 * @value obj 대상 value
 * @value obj  파라메터 명
 * @objectFormat objectFormat 포맷
 * @return : void
 */
prForm.astfAssertParamValueObjectFormat = function(obj, paramName, objectFormat){
	this.astfAssertParamValueIsObjectType(obj, paramName);

	var self = this;

	var throwMessage = function(propertyName, expectType, actualType){
		var parameterName = paramName + "." + propertyName;
		// callee = throwMessage
		// callee.caller = astfAssertParamValueObjectFormat
		// astfAssertParamValueObjectFormat를 호출한 함수
		var funcName = self.astfFunctionName(arguments.callee.caller.caller); 
		self.astfThrowInvalidArgumentExcept(self.astfSprintf("function %s의\n파라메터 %s는\n%s타입이어야 합니다.\n실제:%s", funcName, parameterName, (typeof expectType), (typeof actualType)));					
	};
	
	for(var propertyName in objectFormat){
		var propertyValue = obj[propertyName];
		var formatValue = objectFormat[propertyName];
		var required = formatValue[0];
		var valueType = formatValue[1];
		
		if(! (propertyValue)){
			if(required == true){
				throwMessage(propertyName, valueType, undefined);
			}
		}
		
		if(! this.astfIsParamBuiltinType(propertyValue, valueType)){
			throwMessage(propertyName, valueType, typeof propertyValue);  
		}
	}
};

/**
 * assert 파라메터 타입
 * @value assert 대상 value
 * @expect 예상타입
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueType = function(value, expect, paramName, assertTargetFunc){
    if(typeof value == expect) return;
    var funcName = this.astfFunctionName(assertTargetFunc);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 %s는 %s타입이어야 합니다.\n실제:%s", funcName, paramName, expect, typeof value));
};


/**
 * assert 파라메터 타입
 * @value assert 대상 value
 * @expect 예상타입
 * @return : boolean
 */
prForm.astfIsParamBuiltinType = function(value, expect){
    if((typeof value) == expect) return true;
    return false;
};
 

/**
 * assert 파라메터 타입
 * @value assert 대상 value
 * @expect 예상타입
 * @return : boolean
 */
prForm.astfIsParamInstanceofType = function(value, expect){
    if(value instanceof expect) return true;
    return false;
};



/**
 * assert 파라메터 타입
 * @paramValue assert 대상 paramValue
 * @expectedType 예상타입
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamInstanceofType = function(paramValue, paramName, expectedType, expectedTypeName, assertTargetFunc){
   if(this.astfIsParamInstanceofType(paramValue, expectedType)) return;
   
   var funcName = this.astfFunctionName(assertTargetFunc);
   this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 %s는 %s타입이어야 합니다.실제:%s", funcName, paramName, expectedTypeName, typeof paramValue));
};

/**
 * is Array type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfIsArrayType = function(value){
    return Array.isArray(value);
};


/**
 * assert Array type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsArrayType = function(value, paramName, assertTargetFunc){
    if(this.astfIsArrayType(value)) return;
    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    var funcName = this.astfFunctionName(assertTargetFunc);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 %s는 Array이어야 합니다.실제:%s", funcName, paramName, typeof value));
};


/**
 * assert 배열의 엘레먼트의 타입을 검증한다
 * @arrayValue 배열
 * @index 배열 index
 * @typeOfElement 엘레먼트 타입
 * @paramArrayName 파라메터명
 * @return : void
 */
prForm.astfAssertElementOfArrayType = function(arrayValue, index, typeOfElement, expectedTypeName, paramArrayName, assertTargetFunc){
	var element = arrayValue[index];
	// if(this.astfIsParamBuiltinType(element, typeOfElement)) return;

    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    var funcName = this.astfFunctionName(assertTargetFunc);
	var element = arrayValue[index];
	if(this.astfIsParamInstanceofType(element, typeOfElement)) return;	
	
	var elementTypeName = this.astfGetTypeName(element);
	


    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 %s[%s]의 타입은 %s이어야 합니다.실제:%s", funcName, paramArrayName, index, expectedTypeName, elementTypeName));
};

/**
 * assert 배열의 엘레먼트의 타입을 검증한다
 * @arrayValue 배열
 * @index 배열 index
 * @typeOfElement 엘레먼트 타입
 * @paramArrayName 파라메터명
 * @return : void
 * @see this.astfAssertAllOfElementOfArrayType(datasetOrAryDataset, nexacro.Dataset, "datasetOrAryDataset");
 */
prForm.astfAssertAllOfElementOfArrayType = function(arrayValue, typeOfElement, expectedTypeName, paramArrayName, assertTargetFunc){
    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;
	

	for(var index in arrayValue){
		// function(arrayValue, index, typeOfElement, paramArrayName, assertTargetFunc){
		this.astfAssertElementOfArrayType(arrayValue, index, typeOfElement, expectedTypeName, paramArrayName, assertTargetFunc);
	}
};






/**
 * assert Object type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsObjectType = function(value, paramName, assertTargetFunc){
    if((typeof value) == this.astvPlainObjectType) return;

    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    var funcName = this.astfFunctionName(assertTargetFunc);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 %s는 PlainObject이어야 합니다.실제:%s", funcName, paramName, typeof value));
};

/**
 * assert Boolean type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsBooleanType = function(value, paramName, assertTargetFunc){
    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    this.astfAssertParamValueType(value, this.astvBooleanType, paramName, assertTargetFunc);
};

/**
 * assert Number type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsNumberType = function(value, paramName, assertTargetFunc){
    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    this.astfAssertParamValueType(value, this.astvNumberType, paramName, assertTargetFunc);
};

/**
 * assert String type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsStringType = function(value, paramName, assertTargetFunc){
    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    this.astfAssertParamValueType(value, this.astvStringType, paramName, assertTargetFunc);
};

/**
 * assert InputComponent type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsInputComponentType = function(value, paramName, assertTargetFunc){
    if(typeof value == 'object'){
        if("_type_name" in value && "name" in value && "set_name" in value) return;
    }

    this.astfThrowInvalidArgumentExcept(this.astfSprintf("파라메터 %s는 input component type이 필요합니다.실제:%s", paramName, typeof value));
};


/**
 * assert InputComponent type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsInputTypeComponentType = function(value, expectedType, paramName, expectedTypeName, assertTargetFunc){
	// nexacro.Static
	if(value instanceof expectedType){ 
		return;
	}
	var actualTypeName = value+"";
    if(typeof value == 'object'){
        if("_type_name" in value && "name" in value && "set_name" in value){
			actualTypeName = value._type_name;
		}
    }
	

    this.astfThrowInvalidArgumentExcept(this.astfSprintf("파라메터 %s는 input component(%s)이 필요합니다.실제:%s", paramName, expectedTypeName, actualTypeName));
};


/**
 * 컴포넌트 타입명을 얻는다
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfGetTypeName= function(value){
	return this.smfGetObjectTypeName(value);
};

/**
 * is ContainerInputComponent type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : boolean
 */
prForm.astfIsFormType = function(value){
    if(value == '[object Form]') return true;
    return false;
};


/**
 * assert ContainerInputComponent type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsFormType = function(value, paramName, assertTargetFunc){
    if(this.astfIsFormType(value)) return;

    this.astfThrowInvalidArgumentExcept(this.astfSprintf("파라메터 %s는 Form이 필요합니다.실제:%s", paramName, typeof value));
};


/**
 * is ContainerInputComponent type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : boolean
 */
prForm.astfIsContainerComponentType = function(value){
    if(typeof value == 'object'){
        if("_type_name" in value && "name" in value && "set_name" in value && "form" in value) return true;
    }
    return false;
};

/**
 * assert ContainerInputComponent type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsContainerComponentType = function(value, paramName, assertTargetFunc){
    if(this.astfIsContainerComponentType(value)) return;


    this.astfThrowInvalidArgumentExcept(this.astfSprintf("파라메터 %s는 container component(Tab, Div, TabPage...) type이 필요합니다.실제:%s", paramName, typeof value));
};


/**
 * assert Form or ContainerInputComponent type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsFormOrContainerComponentType = function(value, paramName, assertTargetFunc){
	if(this.astfIsFormType(value)) return;
    if(this.astfIsContainerComponentType(value)) return;


    this.astfThrowInvalidArgumentExcept(this.astfSprintf("파라메터 %s는 Form 또는container component(Tab, Div, TabPage...) type이 필요합니다.실제:%s", paramName, typeof value));
};

/**
 * assert Function type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsFunctionType = function(value, paramName, assertTargetFunc){
    if(isFunction(value))return;

    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    var funcName = this.astfFunctionName(assertTargetFunc);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 %s는 function이어야 합니다.실제:%s", funcName, paramName, typeof value));
};

/**
 * assert Dataset type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsDatasetType = function(ds, paramName, assertTargetFunc){
    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    this.astfAssertParamInstanceofType(ds, paramName, nexacro.Dataset, "Dataset", assertTargetFunc);
};


/**
 * assert Grid type
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamIsGridType = function(grid, paramName, assertTargetFunc){
   if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    this.astfAssertParamInstanceofType(grid, paramName, nexacro.Grid, "Grid", assertTargetFunc);
};


/**
 * assert range values
 * @value assert 대상 value 
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamValueIsInTypes = function(checkedTypeResults, value, paramName, typeNames){
    for(var i in checkedTypeResults){
        if(checkedTypeResults[i] == true) return;
    }
    var funcName = this.astfFunctionName(arguments.caller);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 [%s]는 [%s]값중에 하나이어야 합니다. 실제(%s)", funcName, paramName, typeNames, this.astfGetTypeName(value)));
};

/**
 * assert range values
 * @value assert 대상 value 
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertParamRangeValue = function(value, paramName, rangeValues, assertTargetFunc){
    var isRangedValue = this.astfIsRange.apply(this, [value].concat(rangeValues));

    if(isRangedValue) return;

    if(this.isNil(assertTargetFunc)) assertTargetFunc = arguments.callee.caller;

    var funcName = this.astfFunctionName(assertTargetFunc);
	var message = this.astfSprintf("function %s의\n파라메터 [%s]는 [%s]값중에 하나이어야 합니다. 실제(%s)", funcName, paramName, rangeValues.join(", "), value);
    this.astfThrowInvalidArgumentExcept(message);
};

/**
 * assert true
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertTrueParam = function(isValid, assertTargetFunc, message){
    if(isValid) return;
    var funcName = this.astfFunctionName(assertTargetFunc);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의 %s", funcName, message));
};


/**
 * 오류메시지 발생
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertErrorParam = function(assertTargetFunc, message){
    var funcName = this.astfFunctionName(assertTargetFunc);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의 %s", funcName, message));
};

/**
 * value가 null이면 오류메시지 발생
 * @value assert 대상 value
 * @paramName 파라메터명
 * @assertTargetFunc caller
 * @return : String 함수명
 */
prForm.astfAssertNotEmptyParamValue = function(value, paramName, assertTargetFunc){
    if(this.isNotNil(value)) return;

    var funcName = this.astfFunctionName(assertTargetFunc);
    this.astfThrowInvalidArgumentExcept(this.astfSprintf("function %s의\n파라메터 %s는 null값이면 안됩니다", funcName, paramName));
};
