/*
	NEXACRO 17 : Raon 키보드보안 / E2E / 가상키패드
*/

if(!nexacro.plugInRaon && nexacro._Browser != "Runtime") {
	nexacro.plugInRaon = {
			"useE2E"			: true,				    // E2E 사용여부 , false=키보안만 사용 , true=가상키보드 및 E2E 사용시 
			"useKeyMask"		: false,				// MaskEdit도 키보안으로 사용할 지 여부로 케이스별 오류 생길 소지 있으므로 가급적 비권장(false로 지정). 
			
			"keyPropertyName" 	: "useRaon",		    // key 보안 사용 시 Component 대상 속성명
			"keyPropertyValue" 	: "Y",				    // key 보안 사용 시 Component 대상 속성의 값 예) useRaon=Y
			"keyElemAttr" 		: "data-security",	    // 내부용 - key 보안 element attribute
			"keyElemAttrValue"	: ["off","on"],		    // 내부용 - key 보안 element attribute value [off,on]
			
			"e2ePropertyName" 	: "e2e",			    // e2ePropertyName가 지정된 경우 대상필드의 속성명	{ "enc" : "on", "maxLength" : 8, "kbdType" : "qwerty", "dataType" : "n" }
			"e2eElemAttr" 		: "data-enc",		    // 내부용 - key 보안 element attribute
			"e2eElemAttrValue"	: "on",				    // 내부용 - key 보안 element attribute value [off,on]
			"isMobile"			: nexacro._isMobile(),	// 내부용 - 모바일 여부
			"moduleCheck"		: false,				// 내부용 - 라온함수 include 여부
			"formClickClose"    : false,                 // 가상키패드 외 다른곳을 클릭시 가상키패드 종료여부 (true:종료/false:유지)
			"nxkeyE2E"          : false                 // e2e 사용여부 (true/false)
	};
	//----------------------------------------------------------------------
	// overriding => raon 키보안 처리를 위함.
	//----------------------------------------------------------------------
	var _pEdit 			= nexacro.Edit.prototype;
	var _pMaskEdit 		= nexacro.MaskEdit.prototype;
	var _pInputElement	= nexacro.InputElement.prototype;
	var _pForm 			= nexacro.Form.prototype;
	var _pComponent 	= nexacro.Component.prototype;
	
	//------------------------------------------------------------
	// initTranskey 개별노드별 처리 - 라온측에서 추가해주어야 하나 할때마다 누락되어 강제.
	//------------------------------------------------------------
	function _nxraon_initTranskey_sh(inputobj) {
	   setMaxDigits(131);   
	   if(tk==null){
		  transkey.objs= new Array();
		  tk = new Transkey();
		  tk.generateSessionKey(transkey_surl);
	   }
	   tk.setKeyboard(inputobj, transkey_isMultiCursor, tk_useButton, tk_useTranskey);		
	}
	
	function _nxraon_initmTranskey_sh(inputobj) {
	   setMaxDigits(131);   
	   if(tk==null){
		  transkey.objs= new Array();
		  mtk = new Transkey();
		  mtk.generateSessionKey(transkey_surl);
	   }
	   tk.setKeyboard(inputobj, transkey_isMultiCursor, mtk_useButton, mtk_useTranskey);		
	}
	
	//------------------------------------------------------------
	// 가상키 js load 여부
	//------------------------------------------------------------
	function _nxraon_transkeyLoadCheck() {
		var rtn = false;
		if(typeof(initmTranskey_sh) == "function") rtn = true;
		if(typeof(initTranskey_sh) == "function") rtn = true;
		if(rtn == false && nexacro.plugInRaon.useE2E) {
			if(typeof(initTranskey) == "function") {
				rtn = true;
			}else if(typeof(initmTranskey) == "function"){
				rtn = true; 
			}else {
				trace("[Error ==== 가상키보드 관련 라온js가 include되지 않았습니다.]");
			}
		}
		return rtn;
	}
	//----------------------------------------------------------------------
	// _nxraon_getElemInfo
	//	- component의 node info
	//----------------------------------------------------------------------		
	function _nxraon_getElemInfo(obj) {
		var node = obj._input_element.handle;
		if(node) {
			return [node,node.getAttribute("id")];
		}
	}
	//----------------------------------------------------------------------
	// Raon Transkey Check
	//----------------------------------------------------------------------  	
	function _nxraon_getTK() {
		if(typeof(mtk)=="object") return mtk;			//if(typeof(initmTranskey_sh) != "function") return false;
		else if(typeof(tk)=="object") return tk;		//if(typeof(initTranskey_sh) != "function") return false;
		
		return false;
	}
	//----------------------------------------------------------------------
	// Raon Transkey init
	//----------------------------------------------------------------------  	
	function _nxraon_initTranskey(node) {
		if(typeof(initmTranskey_sh) == "function") {
			initmTranskey_sh(node);
		} else if(typeof(initTranskey_sh) == "function") {
			initTranskey_sh(node);
		} else if(typeof(initTranskey) == "function") {
			//_nxraon_initTranskey_sh(node);
			initTranskey(node);
		} else if(typeof(initmTranskey_sh) == "function") {
			initmTranskey_sh(node);
		} else if(typeof(initmTranskey) == "function") {
			//_nxraon_initTranskey_sh(node);
			initmTranskey(node);
		}
		var tk__ = _nxraon_getTK();
		if(!tk__) {
			trace("라온 object 참조 error : TK ===> include check [transkey.js...]");
			return false;
		}
	}
	//----------------------------------------------------------------------
	// _nxraon_keySecureSetAttribue
	//	- readonly
	//	- 키보안 속성 지정
	//----------------------------------------------------------------------		
	function _nxraon_keySecureSetAttribue(obj, sId, node, v) {
		if(v == true) node.setAttribute(nexacro.plugInRaon.keyElemAttr,nexacro.plugInRaon.keyElemAttrValue[0]);
		else node.setAttribute(nexacro.plugInRaon.keyElemAttr,nexacro.plugInRaon.keyElemAttrValue[1]);
	}
	//----------------------------------------------------------------------
	// _nxraon_e2eSetAttribue
	//	- e2e설정 - { "enc" : "on", "maxLength" : 8, "kbdType" : "qwerty", "dataType" : "n" }
	//----------------------------------------------------------------------		
	function _nxraon_e2eSetAttribue(obj, node, objJS) {
		if(objJS && objJS.enc) {
			if(nexacro.plugInRaon.nxkeyE2E){
				node.setAttribute("data-enc", objJS.enc);
			}
			if(objJS.maxLength) node.setAttribute("maxLength", objJS.maxLength);
			if(objJS.kbdType) node.setAttribute("data-tk-kbdType", objJS.kbdType);
			if(objJS.dataType) node.setAttribute("data-tk-dataType", objJS.dataType);
			if(objJS.maxLength) node.setAttribute("data-tk-maxLength", objJS.maxLength);
		}
	}
	//----------------------------------------------------------------------
	// _nxraon_secureCreate
	//	- edit,maskedit 키보드 보안 적용
	//	- 키보안 속성 지정
	//----------------------------------------------------------------------		
	function _nxraon_secureCreate(obj, bReadOnly) {
		if(obj._type_name != "MaskEdit" && obj._type_name != "Edit") return;
		if(obj.enable == false) return;
		if(!obj._input_element) return;
		
		var v_key = obj[nexacro.plugInRaon.keyPropertyName];
		var v_e2e = obj[nexacro.plugInRaon.e2ePropertyName];
		if(v_e2e == "") v_e2e = null;
		if(!v_key && !v_e2e) return;
		if(!v_e2e && (v_key != nexacro.plugInRaon.keyPropertyValue)) return;
		
		if(nexacro.plugInRaon.moduleCheck == false && (_nxraon_transkeyLoadCheck() == false)) {
			if(typeof(TK_EnqueueListById) != "function" && nexacro.plugInRaon.isMobile == false) {
				trace("[Error ==== 라온js가 include되지 않았습니다.]");
				return;
			}
			nexacro.plugInRaon.moduleCheck = true;
		}
		var node = obj._input_element.handle;
		var sId = node.getAttribute("id");
		if(!node) return;

		if(obj.displaynulltext && obj.displaynulltext != "") {		// displaynulltext는 오동작 - placeholder로 대체
			node.setAttribute("placeholder",obj.displaynulltext);
			obj.set_displaynulltext(null);
			if(obj._type_name == "Edit" && obj.password == true) {
				node.setAttribute("type","password");
			}
		}
		obj._isE2E = false;
		if(nexacro.plugInRaon.useE2E == false) {
			_nxraon_keySecureSetAttribue(obj, sId, node, obj.readonly);	// secure element
		} else {
			if(v_e2e && v_e2e != "") {		// E2E
				var objJS;
				try {
					if(typeof(v_e2e) == "string") {
						objJS = JSON.parse(nexacro.trim(v_e2e));
					} else {
						objJS = v_e2e;
					}
					if(!objJS.enc) {
						trace("e2e 속성의 enc 값이 없습니다.:" + v_e2e);
						return;
					}
				} catch(e) {
					trace("property value error:" + v_e2e)
					return;
				}
				_nxraon_e2eSetAttribue(obj, node, objJS);
				obj._isE2E = true;
			} else {
				_nxraon_keySecureSetAttribue(obj, sId, node, obj.readonly);	// secure element
			}
		}
		if(obj._type_name == "Edit") {
			if(obj.inputtype == "number") {
				node.setAttribute("data-tk-dataType","n");
			}
		}
		try {
			if(bReadOnly === false) {
				obj.set_value("");
			}
			if(nexacro.plugInRaon.isMobile) return;
			TK_EnqueueListById(sId);	// //TouchEnKeyEnqueueListById(sId);
		} catch(e) {
		}
	}
	//----------------------------------------------------------------------
	// _nxraon_mobileCheckElem - 모바일 가상키 전용
	//	- Click시 가상키가 있는 경우 대상이 아닌 경우 닫아주고, 대상인 경우 오픈
	//----------------------------------------------------------------------	
	function _nxraon_mobileCheckElem(obj) {
		var tk__ = _nxraon_getTK();
		if(!tk__) return;
		
		if (obj._type_name == "MainFrame" || (obj._type_name == "Form" && !nexacro.plugInRaon.formClickClose)) return;
		try {
			if (obj._type_name == "Edit" || obj._type_name == "MaskEdit") {
				if(obj.inittranskey) {	// 가상키 대상
					var arrElem = _nxraon_getElemInfo(obj);
					if(!arrElem) return false;
					var node 	= arrElem[0];	// component element
					var sId 	= arrElem[1];	// component element id
					if((tk__ && tk__.now==null) || (tk__ && tk__.now && (tk__.now.inputObj != node))) {
						if(tk__.now) {
							tk__.close();
						}
						var trk = transkey[sId];
						if(obj.inittranskey_always == true || (trk && trk.useTranskey==true)) {
							tk__.onKeyboard(node);
						}
						arrElem = null;
						return;
					} else if(tk__ && tk__.now && (tk__.now.inputObj == node)) {
						if(tk__.now.div.style.display!="none") return;
					}
				}
			}
			if (tk__ && tk__.now) {
				tk__.close();
			}
		} catch (e) {
		}
		tk__ = null;
	}	
	//----------------------------------------------------------------------
	// _pEdit on_created_contents
	//----------------------------------------------------------------------		
	_pEdit.origin_on_attach_contents_handle = _pEdit.on_attach_contents_handle;
	_pEdit.on_attach_contents_handle = function (win) {
		var input_elem = this._input_element;
		if (input_elem) {
			var rtn = this.origin_on_attach_contents_handle(win);
			_nxraon_secureCreate(this);
			return rtn;
		}
	};
	//----------------------------------------------------------------------
	// _pEdit readonly시 키보안 해제
	//----------------------------------------------------------------------		
	_pEdit._orginalSet_readonly = _pEdit.set_readonly;
	_pEdit.set_readonly = function (v) {
		var rtn = this._orginalSet_readonly(v);
		if(v === false) {
			_nxraon_secureCreate(this, v);	// KEY Secure
		}
		return rtn;
	};
	//----------------------------------------------------------------------
	// 종료시 가상키 정보 제거
	//----------------------------------------------------------------------		
	_pEdit.originalOn_destroy_contents = _pEdit.on_destroy_contents;
	_pEdit.on_destroy_contents = function () {
		if(this.inittranskey == true) {
			var tk__ = _nxraon_getTK();
			if(tk__ != null && tk__ && this._raonelem && (typeof(transkey)=="object")) {
				var tko = transkey[this._raonelem];
				if( tko && tko.inputObj != null){
					try {
						tk__.remove(tko.inputObj);
					} catch(e) {
					}
				}
			}
			this._raonelem = this.inittranskey = this.inittranskey_always = this.onKeyboardOpen = this.onKeyboardClose = null;
		}
		return this.originalOn_destroy_contents();
	};
	//----------------------------------------------------------------------
	// _pMaskEdit on_created_contents
	//----------------------------------------------------------------------		
	_pMaskEdit.origin_on_attach_contents_handle = _pMaskEdit.on_attach_contents_handle;
	_pMaskEdit.on_attach_contents_handle = function (win) {
		var input_elem = this._input_element;
		if (input_elem) {
			var rtn = this.origin_on_attach_contents_handle(win);
			_nxraon_secureCreate(this);
			return rtn;
		}
	};
	//----------------------------------------------------------------------
	// _pMaskEdit readonly시 키보안 해제
	//----------------------------------------------------------------------	
	_pMaskEdit._orginalSet_readonly = _pMaskEdit.set_readonly;
	_pMaskEdit.set_readonly = function (v) {
		var rtn = this._orginalSet_readonly(v);
		if(v === false) {
			_nxraon_secureCreate(this, v);	// KEY Secure
		}		
		return rtn;
	};
	//**************************************************************************************************
	// E2E 사용 하는 경우
	//**************************************************************************************************
	if(nexacro.plugInRaon.useE2E == true) {
		//--------------------------------------------------------------------------------------------------
		// Element_HTML5  ( ** E2E 확인 필요 ** )
		// 	- 가상키보드인 경우 input node에만 값이 저장되고 Component Value 인지 못함. focus out시 clear 되는 현상
		//  - _updateInputValue : Element_HTML5 IE8이하/IE9이상/기타 3개로 구분되어 있고 IE8은 무시 기타 2개를 머지
		//---------------------------------------------------------------------- ----------------------------
		
		_pInputElement._originalUpdateInputValue = _pInputElement._updateInputValue;
		_pInputElement._updateInputValue = function (value, fireevent, selectionStart, selectionEnd) {
			var comp = this.parent_elem.linkedcontrol;
			var bTarget = false;
			// 가상키보드 대상인 경우만 재정의
			if(comp.inittranskey_always == true) {
				bTarget = true;
			} else if(comp.inittranskey == true) {		// 가상키보드이고 선택입력인 경우 - 키입력 E2E시 확인필요.
				var arrElem = _nxraon_getElemInfo(comp);
				var sId 	= arrElem[1];				// component element id
				var tk__ = _nxraon_getTK();
				if(tk__ && transkey) {					// 가상키대상
					var trk = transkey[sId];
					if(trk.useTranskey==true) {
						bTarget = true;
					}
				}
				arrElem = tk__ = null;
			}
			if(bTarget == true) {
				var input_handle = this.handle;
				if (input_handle) {
					if(nexacro._Browser == "IE") {
						if (this._composer && this._composer.isComposing()) {
							input_handle.blur();
							input_handle.focus();
						}
					} else if (nexacro._Browser == "Chrome") {
						if (this._composer && this._composer.isComposing()) {
							this._composer.setStatus(nexacro._CompositionState.END, selectionEnd);
						}
					}

					this._input_text = value;
					comp.value = value;	// component value 값을 변경.

					if (selectionStart != null && selectionStart > -1) {
						if (selectionEnd == -1) {
							selectionEnd = value.length;
						}
						if (selectionEnd == null || selectionEnd < selectionStart) {
							selectionEnd = selectionStart;
						}
						var _doc = this._getRootWindowHandle();
						if (_doc) {
							nexacro.__setDOMNode_SetSelect(_doc, input_handle, selectionStart, selectionEnd);
						}
						this._setElementLastSelectionRange([selectionStart, selectionEnd]);
					}

					if (fireevent) {
						nexacro.__fireHTMLEvent(input_handle, "input", "oninput");
					}
				}
				input_handle = comp = null;
			} else {
				return this._originalUpdateInputValue(value, fireevent, selectionStart, selectionEnd);
			}
		};
		
		//--------------------------------------------------------------------------------------------
		// Raon E2E 속성 설정 - Edit Component에 미리 설정하지 않고 스크립트로 할 경우
		//--------------------------------------------------------------------------------------------
		// param
		//		1. obj 		: 대상 Edit component
		//		2. keyProp 	: 키보안 적용 속성 ex - Y/N
		//		3. prop 	: E2E 적용 값 ex - { "enc" : "on", "maxLength" : 8, "kbdType" : "qwerty", "dataType" : "n" }
		//--------------------------------------------------------------------------------------------
		_pForm.raon_ApplyProperty = function(obj, keyProp, e2eProp) {
			
			var objJS;
			try {
				if(typeof(e2eProp) == "string") {
					objJS = JSON.parse(nexacro.trim(e2eProp));
				} else {
					objJS = e2eProp;
				}
				if(!objJS.enc) {
					trace("e2e 속성의 enc 값이 없습니다.:" + e2eProp);
					return;
				}
				var arrElem = _nxraon_getElemInfo(obj);
				if(!arrElem) return false;
				var node 	= arrElem[0];	// component element				
				if(obj.displaynulltext && obj.displaynulltext != "") {		// displaynulltext는 오동작 - placeholder로 대체
					node.setAttribute("placeholder",obj.displaynulltext);
					obj.set_displaynulltext(null);
					if(obj._type_name == "Edit" && obj.password == true) {
						node.setAttribute("type","password");
					}
				}
				_nxraon_e2eSetAttribue(obj, node, objJS);
				
				
			} catch(e) {
				trace("property value error:" + e2eProp)
				return;
			}
			/*
			if(keyProp && keyProp != "") obj[nexacro.plugInRaon.keyPropertyName] = keyProp
			if(e2eProp && e2eProp != "") obj[nexacro.plugInRaon.e2ePropertyName] = e2eProp
			_nxraon_secureCreate(obj, obj.readonly);
			*/
		};
		//--------------------------------------------------------------------------------------------
		// RaonKey 가상키 초기화
		//--------------------------------------------------------------------------------------------
		// param
		//		1. obj 		: 입력 대상 object
		//--------------------------------------------------------------------------------------------		
		 _pForm.raon_ClearTranskey = _pForm.Raon_ClearTranskey = _pForm.raon_ClearSecure = function(obj) {
			if(_nxraon_transkeyLoadCheck() == false) return false;
			
			var sVal = "";
			var arrElem = _nxraon_getElemInfo(obj);
			if(!arrElem) return;
			var node 	= arrElem[0];	// component element
			var sId 	= arrElem[1];	// component element id
			if(obj.inittranskey && transkey) {
				if(transkey[sId]) transkey[sId].clear();
			}
			obj.set_value(sVal);
			if (node) node.value = sVal;
			return true;
		 };
		//--------------------------------------------------------------------------------------------
		// 가상키보안을 위한 처리
		//--------------------------------------------------------------------------------------------
		// param
		//		1. obj 		: 대상 component
		//		2. objKey 	: 대상 component와 쌍으로 있는 마우스입력 체크박스 - static으로 구성
		//		3. bShow 	: 마우스입력 체크박스 보이기 여부
		//		4. e2eProp 	: 스크립트로 E2E 설정할 경우 : 이 경우는 키보드보안을 사용하지 않는다.
		//		* transkey는 span tag를 찾아 키보안의 trankey.js에서 강제 변환하므로 span tag를 추가해주어야 함.
		//--------------------------------------------------------------------------------------------
		_pForm.raon_ApplyTransKey = _pForm.Raon_ApplyTranskey = function(obj, objKey, bShow, e2eProp) {
			if(_nxraon_transkeyLoadCheck() == false) return;
			
			if(e2eProp && e2eProp != "") {
				this.raon_ApplyProperty(obj, "", e2eProp);
			}
			if(nexacro.plugInRaon.isMobile) bShow = false;
			
			if(obj.inittranskey == true) {	// 기존에 등록한놈 제거
				var tk__ = _nxraon_getTK();
				if(tk__ != null && this._raonelem && transkey) {
					var tko = transkey[this._raonelem];
					if( tko.inputObj != null){
					  tk__.remove(tko.inputObj);
					}
				}
			}
			//if(useCheckTranskey === true) useCheckTranskey = false;	// useCheckTranskey가 true일 경우 라온측에서 event를 체크하나 nexacro에서 하도록 false 처리
			if(bShow !== true) bShow = false;
			if(obj._type_name != "Edit") {
				trace("가상키는 Edit만 가능 합니다.");
				return false;
			}
			if(!objKey || objKey._type_name != "Static") {
				trace("가상키 체크박스는 Static으로 구성하여야 합니다.");
				return false;
			}
			if(!e2eProp || e2eProp == "") {
				if(!obj[nexacro.plugInRaon.e2ePropertyName] || obj[nexacro.plugInRaon.e2ePropertyName] == "") {
					trace("가상키는 E2E 설정이 먼저 필요합니다." + obj.name);
					return false;
				}
			}
			var arrElem = _nxraon_getElemInfo(obj);
			if(!arrElem) return false;
			var node 	= arrElem[0];	// component element
			var sId 	= arrElem[1];	// component element id
			if(node.getAttribute(nexacro.plugInRaon.e2eElemAttr) != nexacro.plugInRaon.e2eElemAttrValue) {
				//trace("E2E 설정이 되지 않았습니다.");
				//return false;
			}
			if(!objKey._cell_elem) {
				trace("Oooooops!!!! Static에 Text를 설정하세요.");
				return false;
			}
			var cElem = objKey._cell_elem.handle;
			var pElem = cElem.parentNode;
			if(!pElem) return false;
			
			var spanid = sId + "_tk_btn";
			var spanTag = document.getElementById(spanid); 	// div내에 span tag를 생성한다.
			if(!spanTag) {
				spanTag = document.createElement("span"); 	// div내에 span tag를 생성한다.
				spanTag.setAttribute("id",	spanid);		// id는 반드시 transkey 대상 component의 element node id + "_tk_btn";
				spanTag.setAttribute("data-tk-btnType", "img");
				spanTag.innerHTML = "        " + objKey.text;
				cElem.style.display = "none";
				objKey.set_text("");
				pElem.appendChild(spanTag);
			}
			if(bShow == false) {
				spanTag.style.display = "none";
				//obj.inittranskey_always = true;
			}
			_nxraon_initTranskey(node);
			obj.inittranskey = true;
			obj._raonelem = sId;
			
			return true;
		};
		
		_pForm.raon_GetTranskeyValue = function (obj)
        {
        	var arrElem = _nxraon_getElemInfo(obj);
			if(!arrElem) return false;
			var node 	= arrElem[0];	// component element
			var sId 	= arrElem[1];	// component element id			
			var sCheckValueId = "Tk_"+sId+"_checkbox_value";			
			var checkEl = document.getElementById(sCheckValueId);
			
			if (!checkEl) return -1;
			
			return checkEl.value;
        }
		
		//--------------------------------------------------------------------------------------------
		// E2E 및 가상키보안 적용된 암호화값을 읽어 Transaction parameter로 return한다. (가상키 + E2E)
		//--------------------------------------------------------------------------------------------
		// param
		//		1. arrComp		: 대상 Component List
		//		2. arrRenameCol	: 대상 Component List를 대체할 name (생략가능 - 생략시 prefix는 component name)
		//--------------------------------------------------------------------------------------------	
		_pForm.raon_GetEncData = function(arrComp, arrRenameCol) {
			var tk__ = _nxraon_getTK();
			if(tk__) {
				tk__.fillEncData();
				tk__ = null;
			}
			if(typeof(GetEncData) == "function") {
				GetEncData();	// RAON Function - GetEncDataById 가 사라짐.
			}
			var arrElemId = [];
			var arrParamName = [];
			arrParamName[0]  = "e2e";
			arrParamName[1]  = "tk_col_check";
			arrParamName[2]  = "transkey";
			arrParamName[3]  = "transkey_HM";
			arrParamName[4]  = "elemid";
			arrParamName[5]  = "transkeyUuid";	// 키보안에서 생성되는 element를 dataset column으로 지정
			arrParamName[6]  = "hid_key_data";	// 키보안에서 생성되는 element를 dataset column으로 지정
			arrParamName[7]  = "mobile";		// 모바일 구분
			
			var return_param = "";
			var obj,sId,arrElem,rtn,objname;
			var nRow = -1;
			for(var nn=0;nn<arrComp.length;nn++) {
				obj = arrComp[nn];
				if(arrRenameCol && arrRenameCol[nn]) {
					objname = arrRenameCol[nn];
				} else {
					objname = obj.name;
				}
				//if(!obj._isE2E && !obj.inittranskey) continue;
				arrElem = _nxraon_getElemInfo(obj);
				sId = arrElem[1];			// component element id		
				
				arrElemId = [];
				// 키보안 Element - node
				arrElemId[0]  = "E2E_" 			+ sId;
				arrElemId[1]  = "Tk_" 			+ sId + "_check";
				arrElemId[2]  = "transkey_" 	+ sId;
				arrElemId[3]  = "transkey_HM_" 	+ sId;
				arrElemId[4]  = sId;
				arrElemId[5]  = "transkeyUuid";		// 키보안에서 생성되는 element를 dataset column으로 지정
				arrElemId[6]  = "hid_key_data";		// 키보안에서 생성되는 element를 dataset column으로 지정
				arrElemId[7]  = nexacro.plugInRaon.isMobile?"Y":"N";	// 모바일 여부
								
				for(var i=0;i<arrParamName.length;i++) {
					rtn = null;
					if(i == 4 || i == 7) {	// elem id || mobile check
						rtn = arrElemId[i];
					} else {
						var el = document.getElementById(arrElemId[i]);
									
						if(el) rtn = el.value;
						if(i==1) {
							if(!rtn || rtn == "") {	// PC인 경우
								if(!obj.inittranskey && obj._isE2E) rtn = "e2e";
								if(nexacro.plugInRaon.isMobile || obj.inittranskey_always == true) {
									rtn = "transkey";
								}
							}
						}
						el = null;
						
					}
					
					if(rtn == undefined || rtn == "undefined" || rtn == null) rtn = "";
					if(return_param == "" ) {
						return_param = objname + "_" + arrParamName[i] + "=" + nexacro.wrapQuote(rtn);
					} else {
						return_param = return_param + " " + objname + "_" + arrParamName[i] + "=" + nexacro.wrapQuote(rtn);
					}
					
				}
			}
			arrElemId = arrElem = arrParamName = arrComp = obj = null;
			return return_param;
		};
		//------------------------------------------------------------
		// Click시 가상키가 있는 경우 대상이 아닌 경우 닫아주고, 대상인 경우 오픈
		//------------------------------------------------------------		
		_pComponent._originalOn_click = _pComponent._on_click;
		_pComponent._on_click = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY) {
			_nxraon_mobileCheckElem(this);
			return this._originalOn_click(elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY);
		};
		 
		//20230717 가상키패드 2개 뜨는 현상 수정 내용 
		_pInputElement._original_on_sys_focus = _pInputElement._on_sys_focus;
		_pInputElement._on_sys_focus=function(_a){
			var tk__ = _nxraon_getTK();
			if(tk__&&tk__.now){trace("####tk close");tk__.close();}
			_pInputElement._original_on_sys_focus(_a);
		};
				
	}	// end nexacro.plugInRaon.useE2E == true
		
 	if(nexacro.plugInRaon.isMobile == true) {	// mobile
		nexacro._original_syshandler_ontouchmove = nexacro._syshandler_ontouchmove;
		nexacro._syshandler_ontouchmove = function (_sysEvent, node, evt) {
			var tk__ = _nxraon_getTK();
			if(tk__ && tk__.now) {
				evt.preventDefault();
				tk__ = null;
				// (2013.06.13) 모바일에서 스크롤할 경우 함께 키보드가 이동안하는 문제 해결용
				//return;
			}
			tk__ = null;
			nexacro._original_syshandler_ontouchmove(_sysEvent, node, evt);
		};
	} else {	// PC - MaskEdit 키보안 적용 시
		if(nexacro.plugInRaon.useKeyMask == true) {
			//----------------------------------------------------------------------
			// pc 키보드보안 경우만 : MaskEdit 입력 시 이상동작.
			// 2018.11 raon 최신 모듈 키이벤트 이상 동작 - 라온측 처리 어려움 통보 - code 48,65 추가됨
			//----------------------------------------------------------------------    
			if (_pInputElement._use_event_beforeinput) {
				/*
				_pInputElement._originalOn_sys_beforeinput_forward = _pInputElement._on_sys_beforeinput_forward;
				_pInputElement._on_sys_beforeinput_forward = function (evt) {
					console.log("_on_sys_beforeinput_forward");
					var node = (evt.target || evt.srcElement);
					var pThis = node._linked_element;
					var comp = pThis.parent_elem.linkedcontrol;				
					var node_attr = node.getAttribute(nexacro.plugInRaon.keyElemAttr);
					if(comp._type_name == "MaskEdit" && node_attr == nexacro.plugInRaon.keyElemAttrValue[1]) {
						pThis._use_event_beforeinput = false;
						return false;;
					}
					return pThis._originalOn_sys_beforeinput_forward(evt);			
				};
				*/
				_pInputElement._originalOn_sys_keyinput = _pInputElement._on_sys_keyinput;
				_pInputElement._on_sys_keyinput = function (evt) {
					var node = (evt.target || evt.srcElement);
					var pThis = node._linked_element;
					var comp = pThis.parent_elem.linkedcontrol;
					var node_attr = node.getAttribute(nexacro.plugInRaon.keyElemAttr);
					if(comp._type_name == "MaskEdit" || comp._type_name == "Edit" && node_attr == nexacro.plugInRaon.keyElemAttrValue[1]) {
						pThis._use_event_beforeinput = false;
						return pThis._on_sys_keyinput_false_use_event(evt);
					}
					return pThis._originalOn_sys_keyinput(evt);
				};
				//-----------------------------------------------------------------------------------------------
				// Element_HTML5.js 
				// _pInputElement._on_sys_keyinput : _pInputElement._use_event_beforeinput=FALSE Routine Copy
				//-----------------------------------------------------------------------------------------------
				_pInputElement._on_sys_keyinput_false_use_event = function (evt) {
					var input_handle = (evt.target || evt.srcElement);
					if (input_handle) {
						var pThis = input_handle._linked_element;
						var comp = pThis.parent_elem.linkedcontrol;

						var composing_status = pThis._composer.status;
						var beginOffset, endOffset;

						var value = pThis._getInputValue();

						var pos = pThis.getElementCaretPos();
						if (composing_status == nexacro._CompositionState.NONE) {
							beginOffset = pThis._paste_caret_pos ? pThis._paste_caret_pos.begin : pThis._composer.startOffset;
							endOffset = pThis._paste_caret_pos ? pThis._paste_caret_pos.end : pos.end;
						} else {
							var offsetCompose = pThis._composer.getOffset();
							beginOffset = offsetCompose.begin;
							endOffset = offsetCompose.end;
							if (beginOffset == endOffset && (composing_status == 3 || composing_status == 1)) {
								if (pThis._last_selection_range) {
									beginOffset = pThis._last_selection_range[0];
								} else {
									beginOffset -= 1;
								}
							}
							if (pThis._composer.isComposing()) {
								endOffset = pos.end;
							}
						}
						var bBackspace = pThis._checkBackspaceKeyInKeyInput(pThis.value, value, beginOffset, endOffset);
						var bSelect = pThis._checkSelectionInKeyInput(pThis.value, value, beginOffset, endOffset);

						if (bBackspace) {
							nexacro.__fireHTMLEvent(input_handle, "keydown", "onkeydown");
						}

						if (bSelect !== false) {
							beginOffset = bSelect;
						}

						var value2 = value;		// diff
						if(!value2) value2 = "";// diff
						if (comp._on_beforekeyinput) {
							comp._on_beforekeyinput(pThis, value2, composing_status, beginOffset, endOffset);
							if (pThis._event_stop) {
								nexacro._stopSysEvent(evt);
								pThis._event_stop = false;
								return false;
							}
						}
						value = pThis._getInputValue();
						pos = pThis.getElementCaretPos();
						var ismax = false;
						if (pThis.maxlength > 0) {
							var caretpos = pThis._paste_caret_pos ? pThis._paste_caret_pos.end : pos.end;
							var check = pThis._checkMaxLength(value, caretpos);
							if (check) {
								ismax = check.ismax;
								var newpos = check.pos;
								if (ismax) {
									if (caretpos != newpos) {
										value = value.substring(0, newpos) + value.substring(caretpos);
										pThis._updateInputValue(value);
										pThis.setElementSetSelect(newpos, newpos);

										value = pThis._getInputValue();
										pos = pThis.getElementCaretPos();
									}

									pThis.setCompositionComplete();
								}
							}
						}
						if (pThis._composer.isComposing()) {
							pThis._composer.setStatus(nexacro._CompositionState.COMPOSING, pos.end);
						}
						var old_value = pThis.value;
						pThis._updateElementValue(value);

						var prev_status = pThis._composer._prev_status;
						var cur_status = pThis._composer.status;

						if (prev_status == cur_status && pThis.value == old_value) {
							if (comp._on_input_autoskip) {
								comp._on_input_autoskip();
								return;
							}
						}
						pThis._composer._prev_status = cur_status;
						if (comp._on_keyinput) {
							comp._on_keyinput(pThis);
						}
						if (pThis._event_stop) {
							nexacro._stopSysEvent(evt);
							pThis._event_stop = false;
							return false;
						}
						if (ismax && pThis.autoskip) {
							if (pThis.value && value.length > pThis.value.length) {
								ismax = false;
							}
							if (ismax) {
								if (nexacro._Browser == "Safari") {
									setTimeout(function () {
										pThis._go_next_focus();
									}, 0);
								} else {
									pThis._go_next_focus();
								}
							}
						}
					}
				};		
			}	// _pInputElement._use_event_beforeinput
		}	// MaskEdit 적용여부
	}	// end PC
	
	//----------------------------------------------------------------------
	// Mobile Transkey - redefined
	// - 화면영역에서 Open,Close 시 Event 처리를 하기 위함.
	// - mTranskey 관련 JS는 반드시 Raonkey.js 보다 먼저 선언되어 있어야 함.
	//----------------------------------------------------------------------    
	if(typeof(mTranskey) != "undefined") {
		if(!mTranskey.originalOnKeyboard) {
			var mtkey = mTranskey.prototype;
			// 가상키보드 열릴때
			mtkey.originalOnKeyboard = mtkey.onKeyboard;
			mtkey.onKeyboard = function(inputObj){
				var rtn = this.originalOnKeyboard(inputObj);
				if(inputObj._linked_element) {
					var comp = inputObj._linked_element.parent.parent;
					if(comp.onKeyboardOpen) {
						var xtk = document.getElementById("mtk_" + inputObj.id);
						comp.onKeyboardOpen.call(comp._refform, comp, xtk);
					}
				}
				//var div = this.now.div;
				//div.style.overflow = "visible";				
				return rtn;
			};
			// 가상키보드 닫기 - 다른영역 클릭하여 닫기
			mtkey.orgClose = mtkey.close;
			mtkey.close = function(){
				var elem = mtk.now.inputObj;
				var rtn = this.orgClose();
				if(elem._linked_element) {
					var comp = elem._linked_element.parent.parent;
					if(comp) {
						var input_elem = comp._input_element;
						comp.value = comp._default_value = comp.text = comp._default_text = input_elem.value = input_elem._input_text = elem.value;
					}
					if(comp.onKeyboardClose) {
						comp.onKeyboardClose.call(comp._refform, comp);
					}
				}
				return rtn;
			};
			// 가상키보드 확인버튼 닫기
			mtkey.orgDone = mtkey.done;
			mtkey.done = function(e, ele){
				var elem = mtk.now.inputObj;
				var rtn = this.orgDone(e, ele);		
				if(elem._linked_element) {
					var comp = elem._linked_element.parent.parent;
					if(comp) {
						var input_elem = comp._input_element;
						comp.value = comp._default_value = comp.text = comp._default_text = input_elem.value = input_elem._input_text = elem.value;
					}
					if(comp.onKeyboardClose) {
						comp.onKeyboardClose.call(comp._refform, comp);
					}
				}
				return rtn;				
			};
		}
	}
	//----------------------------------------------------------------------

	delete _pEdit;
	delete _pMaskEdit;
	delete _pInputElement;
	delete _pComponent;
	delete _pForm;
	
} else if(!nexacro.plugInRaon && nexacro._Browser == "Runtime") {
	nexacro.plugInRaon = {};
	var _pForm = nexacro.Form.prototype;
	_pForm.raon_ApplyProperty = function() { trace("raon_ApplyProperty - 전용브라우저에서는 실행 할 수 없습니다."); };
	_pForm.raon_ClearTranskey = function() { trace("raon_ClearTranskey - 전용브라우저에서는 실행 할 수 없습니다."); };
	_pForm.raon_ApplyTransKey = function() { trace("raon_ApplyTransKey - 전용브라우저에서는 실행 할 수 없습니다."); };
	_pForm.raon_GetEncData = function() { trace("raon_GetEncData - 전용브라우저에서는 실행 할 수 없습니다."); };
	_pForm.raon_FillEncData = function() { trace("raon_FillEncData - 전용브라우저에서는 실행 할 수 없습니다."); };
	delete _pForm;
}