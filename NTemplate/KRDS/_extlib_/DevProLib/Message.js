/**
*  devPro Library
*  @FileName 	Message.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Description
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Message Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;
pForm.TOAST_MESSAGE = [];
pForm.BEFORE_MESSAGE_ID;

/**
* @class 메세지팝업오픈
* @param {String} sMsgId - 메세지ID	
* @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
* @param {String} [sPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
* @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
* @param {Array} [arrButton] - 확인 창에서 버튼의 명칭 배열
* @param {Array} [arrRtn]    - 확인 창에서 버튼 클릭시 리턴할 값 배열
* @return N/A
* @example
* // {0} 항목의 최대 입력글자수를 초과하였습니다. 최대길이 : {1}
* this.gfnAlert("NAA0023", ["이름", "3자"]);
* // 저장하시겠습니까?
* this.gfnAlert("NAA0012", null, "NAA0012", "fnMsgCallback", ["예", "아니오", "취소"], ["Y", "N", "C"]);
*/
pForm.gfnAlert = function (sMsgId, arrArg, sPopId, sCallback, arrButton, arrRtn)
{
    var objApp = nexacro.getApplication();
	
	var nCnt   = 1;
	
	// 버튼 명칭 사용 시
	if (!this.gfnIsNull(arrButton) && !this.gfnIsNull(arrRtn))
	{
		if (arrButton.length != arrRtn.length) 
		{
			alert("Button 명 배열의 크기와 Return 될 값 배열의 크기가 다릅니다.");
			return;
		}

		if (arrButton.length == 1 || arrButton.length > 3) 
		{
			alert("Button 의 갯수는 2 ~ 3개 만 지원됩니다.");
			return;
		}		
	}

	// QuickView
	if (nexacro._quickview_formurl) {
		var strSvcId    = "searchQuickViewMessageList";
		var strSvcUrl   = "searchQuickViewMessageList.do";
		var inData      = "";
		var outData     = "gdsCommCode=dsComboData gdsMessage=dsMessage";
		var strArg      = "";	
		var callBackFnc = "fnCallback";
		
		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
							strSvcUrl , 	// trabsaction을 요청할 주소
							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
							callBackFnc,
							false);   // 통신방법 정의 [생략가능]
	}
	
	// 서비스 오류, 사용자 오류(Transaction에서 공통 처리)
	if (sMsgId.indexOf("|") > -1) 
	{
		var sMsg = (sMsgId.split("|"))[1];
		// 줄바꿈 변경
		sMsg = sMsg.replace(/\\\\n/g, String.fromCharCode(10));
		sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
		
		// 공백문자 변경
		sMsg = sMsg.replace(/&#32;/g, " ");
		
		var sMsgType = objApp.gdsMessage.lookup("MSGE_CD", (sMsgId.split("|"))[0], "MSGE_FLAG_CD");
		if( this.gfnIsNull(sMsgType) ) sMsgType = "WAN";
	// UI 메시지
	} else 
	{
		// validation.js 에서 사용시(화면에서는 sMsgId에 "{0}" 사용 불가)
		if (sMsgId == "msg.validator") 
		{
			var sMsg = "{0}";
			var sMsgType = "WAN";
		// 프레임에서 사용시(화면에서는 sMsgId에 "{0}" 사용 불가)
		} else if (sMsgId == "msg.confirm") 
		{
			var sMsg = "{0}";
			var sMsgType = "CFN";
			var sMsgTitle = "확인";
		// 화면에서 사용시
		} else 
		{			
			if (objApp.gdsMessage.findRow("MSGE_CD", sMsgId) < 0) 
			{
				// gdsMessage 데이터가 없을 경우 예외처리
				if(objApp.gdsMessage.findRow("MSGE_CD", "msg.general") > 0) this.gfnAlert("msg.general",["해당하는 메시지 코드가 없습니다. \n메시지 코드를 확인하세요!\n입력코드 : " + sMsgId]);
				else alert("해당하는 메시지 코드가 없습니다. 메시지 코드를 확인하세요!");
				return false;
			}

			var sMsg = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, "KORN_MSGE");
			var sMsgType = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, "MSGE_FLAG_CD");
			var sMsgTitle = "";
			if( sMsgType == "INF") sMsgTitle = "알림";
			else if( sMsgType == "WAN") sMsgTitle = "경고";
			else if( sMsgType == "ERR") sMsgTitle = "에러";
			else if( sMsgType == "CFN") sMsgTitle = "확인";
		}
		
		// 아이콘옆에 메시지 표시를 위해 줄바꿈 갯수에 따라 빈줄 삽입
		var arrMsg = sMsg.split("\\n");
		nCnt = arrMsg.length;
		
		// 줄바꿈 변경
		sMsg = sMsg.replace(/\\\\n/g, String.fromCharCode(10));
		sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
		
		// 공백문자 변경
		sMsg = sMsg.replace(/&#32;/g, " ");
		
		// 메시지 생성
		sMsg =  this.gfnConvertMessage(sMsg, arrArg);
	}
	
	if (this.gfnIsNull(sPopId)) sPopId = sMsgId;

	var sMsgUrl ="";
	switch(sMsgType) 
	{
		case "WAN": case "ERR":	case "INF":
			sMsgUrl = "common::cmmAlert.xfdl";
			break;
			
		case "CFN":
			sMsgUrl = "common::cmmConfirm.xfdl";
			if(this.gfnIsNull(sCallback)) trace("callback함수를 지정하지 않았습니다");
			break;
	}
	
	if(this.gfnIsNull(sCallback)){
		sCallback = "gfnMsgCallback";
	}
	
	var objArg = {paramContents:sMsg, paramType:sMsgType, paramButton:arrButton, paramRtn:arrRtn};
	var objOption = {titlebar:"true", title:sMsgTitle};	
	
	// messagePopup
	if (nexacro.getEnvironmentVariable("evMessagePopup") == "true") 
	{
		this.gfnOpenPopup(sPopId, sMsgUrl, objArg, sCallback, objOption);
	// alert-cofirm
	} else {
		if (sMsgType == "WAN" || sMsgType == "ERR" ||sMsgType == "INF") 
		{
			alert(sMsg);
		} else 
		{
			confirm(sMsg);
		}
	}
};

/**
* @class 메시지 팝업 콜백
* @param {String} sId - popupid	
* @param {String} sReturn - return value	 
* @return N/A	
* @example this.gfnMsgCallback(sId, sReturn);	
*/
pForm.gfnMsgCallback = function (sPopupId, sRtn)
{
	//TODO..
	//공통 메세지 콜백
};

/**
* @class 메세지 치환 후 완성된 메시지 리턴
* @param {String} sMsgId - 메세지ID	
* @param {Array}  arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
* @return {String} 치환된 메시지
* @example this.gfnGetMessage(sMsgId, arrArg);
*/
pForm.gfnGetMessage = function(sMsgId, arrArg) 
{
    var objApp = nexacro.getApplication();
	if(objApp.gdsMessage.findRow("MSGE_CD", sMsgId) < 0) return false;

	//var sMsg = objApp.gdsMessage.lookup("msgId", sMsgId, "ntcnMsgCn");
	var sMsg = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, "KORN_MSGE");

	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\\\n/g, String.fromCharCode(10));
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));	
	sMsg =  this.gfnConvertMessage(sMsg, arrArg);
	
	return sMsg;
};

/**
* @class 메세지 치환
* @param {String} msg - 메세지	
* @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
* @return {String} 치환된 메시지
* @example this.gfnConvertMessage(sMsg, arrArg);
*/
pForm.gfnConvertMessage = function(msg, values) 
{
    return msg.replace(/\{(\d+)\}/g, function() 
	{
		return values[arguments[1]];
    });
};

/**
* @class 토스트메세지 생성
* @param {String} sMsgId - 메세지ID	
* @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
* @param {String} sPosition - 메세지가 표시될 위치 {C, LT, LB, RT, RB}
* @return N/A
* @example
* // {0} 은(는) {1} 중 하나의 값이어야 합니다.
* this.gfnToast("msg.err.validator.code", ["이름", "보기"]);
* this.gfnToast("msg.err.validator.code", ["이름", "보기"], "RT");
*/
pForm.gfnToast = function (sMsgId, arrArg, sPosition)
{
	var objApp = nexacro.getApplication();
	var objId = "divToast" + parseInt(Math.random() * 1000);
	var nAniSpeed = 3000;
	var sAniType = "easeInCubic";
	var nLeft = 0;
	var nTop = null;
	var nWidth = 420;
	var nHeight = 100;
	var nRight = null;
	var nBottom = 20;
	var sMsg = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, "KORN_MSGE");
	var sMsgType = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, "MSGE_FLAG_CD");
	var sToastType = "";
	var arrSize = [];
	var sDivCss = "";
	var sStaCss = "";
	
	if (this.gfnIsNull(sMsg)) return;
	
	var arrMsg = sMsg.split("\\n");
	
	// sPosition 입력 안할 시 C로 고정
	if (this.gfnIsNull(sPosition)) sPosition = "C";
	
	// 동적생성한 div를 배열에 추가 (oncomplete 후 삭제목적)
	this.TOAST_MESSAGE.push(objId);
	
	// 메세지 타입 설정
	if (sMsgId.indexOf("success") > -1)
	{
		sToastType = "Success";
	}
	else if (sMsgType == "WAN")
	{
		sToastType = "Warning"
	}
	else if (sMsgId.indexOf("err") > -1)
	{
		sToastType = "Error";
	}
	else if (sMsgId.indexOf("general") > -1)
	{
		sToastType = "Custom";
	}
	else
	{
		sToastType = "Information";
	}
	
	sDivCss = "div_WF_Toast" + sToastType;
	sStaCss = "sta_WF_Toast" + sToastType;
	
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg = sMsg.replace(/\n/g, ' ');
	
	// 메시지 생성
	sMsg =  this.gfnConvertMessage(sMsg, arrArg);
	
	// 메세지 크기
	var nMsgSize = nexacro.getTextSize(sMsg, "bold 14px 'Malgun Gothic'").nx;
	
	if (nMsgSize > 336)
	{
		var nSize = nMsgSize - 336;
		nWidth += nSize;
	}
	
	// Div 동적 생성 
	var objDiv = new Div();

	objDiv.init(objId, nLeft, nTop, nWidth, nHeight, nRight, nBottom);
	
	// 처음 생성 시에만 addChild, 동적생성한 컴포넌트가 있을 경우 insertChild
	var nIdx = this.components.indexOf(this.BEFORE_MESSAGE_ID);
	
	if (this.gfnIsNull(nIdx))
	{
		this.addChild(objId, objDiv);
	}
	else
	{
		this.insertChild(nIdx, objId, objDiv);
	};
	
	// Div 컴포넌트 속성 설정
	objDiv.set_async(false);
	objDiv.set_url("common::cmmToast.xfdl");
	objDiv.set_visible(false);
	objDiv.form.divToast.set_cssclass(sDivCss);
	objDiv.form.divToast.form.staToastTitle.set_cssclass(sStaCss);
	objDiv.form.divToast.form.staToastTitle.set_text(sToastType);
	objDiv.form.divToast.form.staToast.set_text(sMsg);
	objDiv.form.divToast.form.resetScroll()
	objDiv.show();
	
	// sPosition 에 따른 메세지 위치 변경
	arrSize = this.gfnToastPosition(objDiv, sPosition);
	objDiv.set_top(arrSize[0]);
	objDiv.set_left(arrSize[1]);
	objDiv.set_right(arrSize[2]);
	objDiv.set_bottom(arrSize[3]);
	
	// 기존에 생성된 메세지 이동
	if (this.gfnIsNotNull(this.BEFORE_MESSAGE_ID))
	{
		if (sPosition.indexOf("B") > -1 || sPosition.indexOf("C") > -1)
		{
			this.components[this.BEFORE_MESSAGE_ID].set_bottom(objId + ":3");
		}
		else
		{
			this.components[this.BEFORE_MESSAGE_ID].set_top(objId + ":3");
		}
		this.resetScroll();
	}
	
	// 이전에 생성한 메세지 ID 저장 : 이 값으로 addchild, insertchild 구분
	this.BEFORE_MESSAGE_ID = objId;
	
	// 애니메이션 생성
	var objAni = new nexacro.Animation("ani" + objDiv.name, this);
	this.addChild(objAni.name, objAni);
	
	// 애니메이션 속성 설정
	objAni.set_easing(sAniType);
	objAni.set_duration(nAniSpeed);
    objAni.addTarget("aniItem" + objDiv.name, objDiv, "opacity:['100%','0%']");
	objAni.setEventHandler("oncomplete", this.gfnToastDestroyAni_oncomplete, this);
	objDiv.set_visible(true);
	
	// 애니메이션 실행
	objAni.play();
};

/**
* @class 토스트 메세지 애니메이션 실행 완료
* @param {Object} obj - 대상 애니메이션
* @param {Event} e - 애니메이션 이벤트
* @return N/A
* @example this.gfnToastDestroyAni_oncomplete();
*/
pForm.gfnToastDestroyAni_oncomplete = function (obj, e)
{
	// 배열에 추가된 마지막 Static id가 가장 마지막에 생성된 Static id와 일치할 경우 
	if (this.TOAST_MESSAGE[this.TOAST_MESSAGE.length-1] == obj.name.substr(3))
	{
		do {
			// 애니메이션 Item 과 애니메이션 컴포넌트 삭제
			var objAniItem = this.all["ani" + this.TOAST_MESSAGE[0]].removeTarget("aniItem" + this.TOAST_MESSAGE[0]);
			var objAni = this.removeChild("ani" + this.TOAST_MESSAGE[0]);
			objAniItem.destroy();
			objAniItem = null;	
			objAni.destroy();
			objAni = null;
			
			// Static 삭제 
			this.all[this.TOAST_MESSAGE[0]].destroy();
			
			// 배열에서 삭제
			var nRemoveIdx = this.TOAST_MESSAGE.indexOf(this.TOAST_MESSAGE[0]);
			if (nRemoveIdx != -1)
			{
				this.TOAST_MESSAGE.splice(nRemoveIdx, 1);
			};
		} while(this.TOAST_MESSAGE.length > 0);
		
		// 동적으로 생성한 모든 컴포넌트 삭제 시 초기화
		this.BEFORE_MESSAGE_ID = "";
	};
	
	this.resetScroll();
};

/**
* @class 토스트 메세지 위치 설정
* @param {Object} objDiv - 대상 메세지 Static
* @param {String} sPosition - 메세지 위치 구분값
* @return arrSize
* @example this.gfnToastPosition(objDiv, sPosition);
*/
pForm.gfnToastPosition = function (objDiv, sPosition)
{
	var objApp = nexacro.getApplication();
	var nTop = 5;
	var nLeft = 0;
	var nRight = 0;
	var nBottom = 20;
	
	switch(sPosition)
	{
		case "C":
			nTop = null;
			nLeft = (objApp.mainframe.width/2) - (objDiv.getOffsetWidth()/2);
			nRight = null;
			// 좌측메뉴 열려있을 경우 값 조절
			//if (objApp.gvFrmLeft.form.fvMenuStatus == "open") nLeft -= objApp.gvFrmLeft.form.getOffsetWidth();
			break;
		case "LT":
			nLeft = 5;
			nRight = null;
			nBottom = null;
			break;
		case "LB":
			nTop = null;
			nLeft = 5;
			nRight = null;
			break;
		case "RT":
			nLeft = null;
			nRight = 25;
			nBottom = null;
			break;
		case "RB":
			nTop = null;
			nLeft = null;
			nRight = 25;
			break;
		default: return;
	}
	
	var arrSize = [nTop, nLeft, nRight, nBottom];
	return arrSize;
};

pForm = null;