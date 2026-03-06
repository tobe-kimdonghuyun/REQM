/* 온라인 대기표
 * 
//구성
       개발
            강원
				서비스목록1
					액션1
					액션2
					액션3
					...
       운영
	        시도
				서비스목록1
					액션1
					액션2
					액션3
					...

				서비스목록2
					액션1
					액션2
					액션3
					...
				서비스목록3
					액션1
					액션2
					액션3
					...
				...
				...
*/
prForm.nfnvNetFunnelActionList = {
	//개발
	"dev": {
		"K10": {
			"active" : false,
			"protocol" : "http",
			"host" : "nf2.netfunnel.co.kr",
			"port" : "0",

			//biz 목록
			//로그인
			"login": {"service": "service_4","action": "act_2"},

			//일반행정, 복무, 출장
			"bcm_cfmrt01_m00": {"service": "service_4","action": "act_2"},

			//교무고등
			"his_edctm05_m00" : {"service": "service_4","action": "act_2" },//교육과정-시간표관리-전체시간표관리
			"his_srgaa09_m00" : {"service": "service_4","action": "act_2" },//학적-출결현황및통계-학급별출결현황
			"his_srgcf09_m00" : {"service": "service_4","action": "act_2" },//학적-반편성관리-진급자학적반영
			"his_sdlaw00_m00" : {"service": "service_4","action": "act_2" },//학생생활-수상경력-수상대장관리
			"his_scrsp21_m00" : {"service": "service_4","action": "act_2" },//성적-성적처리-과목별성적산출
			"his_slrcm00_m00" : {"service": "service_4","action": "act_2" },//학생부-학교생활기록부-자료반영
			"his_uessc03_m00" : {"service": "service_4","action": "act_2" },//대입전형-재학생전형자료 생성 및 검증-대입전형자료생성
			"his_uesgc01_m00" : {"service": "service_4","action": "act_2" },//대입전형-졸업생전형자료 생성 및 검증-졸업생대입전형자료생성

			//교무중등
			"mis_edctm05_m00" : {"service": "service_4","action": "act_2"},//교육과정-시간표관리-전체시간표관리
			"mis_srgaa09_m00" : {"service": "service_4","action": "act_2"},//학적-출결현황및통계-학급별출결현황
			"mis_srgcf09_m00" : {"service": "service_4","action": "act_2"},//학적-반편성관리-진급자학적반영
			"mis_sdlaw00_m00" : {"service": "service_4","action": "act_2"},//학생생활-수상경력-수상대장관리
			"mis_scrsp21_m00" : {"service": "service_4","action": "act_2"},//성적-성적처리-과목별성적산출
			"mis_slrcm00_m00" : {"service": "service_4","action": "act_2"},//학생부-학교생활기록부-자료반영

			//교무초등
			"els_edctm05_m00" : {"service": "service_4","action": "act_2"},//교육과정-시간표관리-반별시간표
			"els_srgaa51_m00" : {"service": "service_4","action": "act_2"},//학적-출결관리-담임용출결통계
			"els_srgcf09_m00" : {"service": "service_4","action": "act_2"},//학적-진급관리-진급자학적반영
			"els_sdlaw00_m00" : {"service": "service_4","action": "act_2"},//학생생활-수상경력-수상대장관리
			"els_scrde10_m00" : {"service": "service_4","action": "act_2"},//성적-학생평가-교과평가
			"els_slrcm00_m00" : {"service": "service_4","action": "act_2"},//학생부-학교생활기록부-자료반영

			//민원
			"cva_carvc00_m00" : {"service": "service_1","action": "minwon_neis"}//민원신청
		}
	},


	//검수 사용안함, 개발의 것을 사용
	"examine": {
		"K10": {
			"active" : true,
			"protocol" : "http",
			"host" : "nf2.netfunnel.co.kr",
			"port" : "0",

			//biz 목록

			//로그인
			"login": {
				"service": "default",
				"action": "act_2"
			},


			//일반행정, 복무, 출장
			"ga.srv.ser.bt": {
				"service": "default",
				"action": "act_2"
			}
		}
	},

	// 직접입력
	"custom": {
		//민원
		"CVA": {
			"active" : true,
			"protocol" : "http",
			"host" : "apc.neis.go.kr",
			"port" : 80,

			//민원
			"cva_carvc00_m00" : {"service": "service_1","action": "minwon_neis"}//민원신청
		}
	},

	"product": {
		//경기도
		"J10": {
			"active" : true,
			"protocol" : "http",
			"host" : "210.90.79.49",
			"port" : 80,


			//biz 목록
 			"login": {"service": "service_1","action": "action1"},//로그인
			//"ga.srv.ser.bt": {"service": "service_1","action": "action2"},//일반행정, 복무, 출장

			"his_edctm05_m00" : {"service": "service_1","action": "action3" },//교육과정-시간표관리-전체시간표관리
			"his_srgaa09_m00" : {"service": "service_1","action": "action4" },//학적-출결현황및통계-학급별출결현황
			"his_srgcf09_m00" : {"service": "service_1","action": "action5" },//학적-반편성관리-진급자학적반영
			"his_sdlaw00_m00" : {"service": "service_1","action": "action6" },//학생생활-수상경력-수상대장관리
			"his_scrsp21_m00" : {"service": "service_1","action": "action7" },//성적-성적처리-과목별성적산출
			"his_slrcm00_m00" : {"service": "service_1","action": "action8" },//학생부-학교생활기록부-자료반영
			"his_uessc03_m00" : {"service": "service_1","action": "action5" },//대입전형-재학생전형자료 생성 및 검증-대입전형자료생성
			"his_uesgc01_m00" : {"service": "service_1","action": "action11"},//대입전형-졸업생전형자료 생성 및 검증-졸업생대입전형자료생성


			"mis_edctm05_m00" : {"service": "service_1","action": "action9" },//교육과정-시간표관리-전체시간표관리
			"mis_srgaa09_m00" : {"service": "service_1","action": "action10"},//학적-출결현황및통계-학급별출결현황
			"mis_srgcf09_m00" : {"service": "service_1","action": "action11"},//학적-반편성관리-진급자학적반영
			"mis_sdlaw00_m00" : {"service": "service_1","action": "action12"},//학생생활-수상경력-수상대장관리
			"mis_scrsp21_m00" : {"service": "service_1","action": "action13"},//성적-성적처리-과목별성적산출
			"mis_slrcm00_m00" : {"service": "service_1","action": "action14"},//학생부-학교생활기록부-자료반영


			"els_edctm05_m00" : {"service": "service_1","action": "action15"},//교육과정-시간표관리-반별시간표
			"els_srgaa51_m00" : {"service": "service_1","action": "action16"},//학적-출결관리-담임용출결통계
			"els_srgcf09_m00" : {"service": "service_1","action": "action17"},//학적-진급관리-진급자학적반영
			"els_sdlaw00_m00" : {"service": "service_1","action": "action18"},//학생생활-수상경력-수상대장관리
			"els_scrde10_m00" : {"service": "service_1","action": "action19"},//성적-학생평가-교과평가
			"els_slrcm00_m00" : {"service": "service_1","action": "action20"}//학생부-학교생활기록부-자료반영
		}
	}
};

prForm.nfnvNetfunnelBizName = "";
/**
 * 넷퍼넬 초기화 onload 이벤트에서 호출한다
 * @param form : onload의 obj를 넘긴다
 * @param bizName : 업무구분명을 넘긴다
 */
prForm.nfnfInitNetFunnel = function(form, bizName){
	this.nfnvNetfunnelBizName = bizName;

	if(form.findEventHandler('onclose' ,this.nfnfCleanupNetFunnel, this) == -1){
		form.addEventHandler('onclose' ,this.nfnfCleanupNetFunnel, this);
	}
};


/**
 * 내부에서만 호출
 * 폼이 닫힐때 넷퍼넬을 종료한다.
 */
prForm.nfnfCleanupNetFunnel = function(obj,e){
	if(this.isNil(this.nfnvNetfunnelBizName)) return;

	try{
		this.nfnfEndNetFunnel(this);
	}catch(e){
		this.trace(e.message);
	}
};

prForm.nfnfGetServerInfo = function(serverName){
	// null인 경우
	// custom/A00 ->
	// custom 경우가 있음

	var splitedServerNames = [];
	serverName = this.smfStr(serverName);
	if(this.isNil(serverName)){
		splitedServerNames = ["", ""];
	}else if(this.smfContainsStr(serverName, "/")){
		splitedServerNames = serverName.split("/");
	}else{
		splitedServerNames = [serverName, this.smfGetSession("conctAtptScCode")];
	} 

	var serverType = splitedServerNames[0];

	if(this.isNil(serverType)){
		//로컬
		if(this.smfIsLocalMode()){
			serverType = "dev";
		//개발 강원인경우
		}else if(this.smfIsDevMode()){
			serverType = "dev";
		//검수 강원인경우
		}else if(this.smfIsExamineMode()){
			serverType = "dev";
		}else if(this.smfIsProductMode()){
			serverType = "product";
		}
	}


	var atptName = splitedServerNames[1];
	if(this.isNil(atptName)){
		atptName = this.smfGetSession("conctAtptScCode");
	}

	/* [X-LOG] 변수(serverType)가 있는지 확인이 필요합니다. [X-LOG] 변수(atptName)가 있는지 확인이 필요합니다.*/var result = {
		"serverType" : serverType,
		"atptName" : atptName
	};
	this.trace("serverName = " + serverName + ", " + "serverType=" + result.serverType + ", " + "atptName = " + result.atptName);
	return result;
};

prForm.nfnfIsActiveNetFunnel = function(bizName, serverName){
	if(this.isNil(bizName)) return false;

	var serverInfo = this.nfnfGetServerInfo(serverName);
	if(this.isNil(this.nfnvNetFunnelActionList[serverInfo.serverType])){
		return false;
	}

	var serviceMap = {};
	serviceMap = this.nfnvNetFunnelActionList[serverInfo.serverType][serverInfo.atptName];

	if(this.isNil(serviceMap)) return false;

	//bizName에 해당하는 정보가 없으면 False
	if(this.isNil(serviceMap[this.nfnfConvertBizName(bizName)])) return false;

	return true == serviceMap["active"];
};

prForm.nfnfGetNetFunnelServiceMap = function(serverName){
	var serviceMap = {};
	var serverInfo = this.nfnfGetServerInfo(serverName);
	serviceMap = this.nfnvNetFunnelActionList[serverInfo.serverType][serverInfo.atptName];

	return serviceMap;
};



/**
 * bizName을 해석한다.
 */
prForm.nfnfConvertBizName = function(bizName){
	bizName = this.smfStr(bizName);
	//#byPageMenuName은 메인메뉴의 form name을 bizName으로 사용한다.
	if(bizName.toUpperCase() == "#byMenuPageName".toUpperCase()){
		var formName = this.smfMenuForm(this).name;
		return formName;
	}else{
		return bizName;
	}
};

/**
 * 넷퍼넬 포트 검색
 * @param atptScCode : 시도교육청코드, "J10", "J10,dvk,ack"
 * @param scCode : port
 * @return 네포넬적용 잘 적용되면 true, 사용자가 중지버튼 누르면 false
 * @see    nfnfBeginNetFunnel("sw.srg");
           nfnfBeginNetFunnel("sw.srg", "K10"); //강원도만 적용하게

   시작과 종료 방법
			//NetFUNNEL 시작(업무구분코드)
			nfnfBeginNetFunnel("sw.srg");

			//NetFunnel 종료
			swf_EndNetFunnel();
 */
prForm.nfnfBeginNetFunnel = function(owner, serverName){
	var serviceMap = this.nfnfGetNetFunnelServiceMap(serverName);
	/* [X-LOG] 변수(serviceActionMap)가 있는지 확인이 필요합니다.*/ serviceActionMap = serviceMap[this.nfnfConvertBizName(this.nfnvNetfunnelBizName)];

	/* [X-LOG] 변수(serviceActionMap)가 있는지 확인이 필요합니다.*/var serviceName = serviceActionMap["service"];
	/* [X-LOG] 변수(serviceActionMap)가 있는지 확인이 필요합니다.*/var actionName = serviceActionMap["action"];

	var nfProtocol = serviceMap["protocol"];
	var nfHost = serviceMap["host"];
	var nfPort = serviceMap["port"];

	//순서대로
	//  <형식>
	// "도메인ID, 서비스명 , NetFUNNEL SID, protocol, NetFUNNEL서버IP , NetFUNNEL서버Port, [대기화면URL | -] /"
	/* [X-LOG] 변수(ServiceList)가 있는지 확인이 필요합니다.*/ owner.NetFUNNEL.ServiceList = this.format("default , {0} , {0} , {1}, {2} , {3} , - /", [serviceName, nfProtocol, nfHost, nfPort]);

	/* [X-LOG] 함수(SetService)를 찾을 수 없습니다.*/ owner.NetFUNNEL.SetService(serviceName,actionName);
	//NetFUNNEL.SetServerInfo("http", host, port);
	// A-1. NetFUNNEL제어를 시작(대기처리 및 진입) 한다.
	if(/* [X-LOG] 함수(BEGIN)를 찾을 수 없습니다.*/ !owner.NetFUNNEL.BEGIN(this))
	{
		// TODO: 블럭킹이 발생한경우에 처리가 필요하다
		if(/* [X-LOG] 함수(isBlocking)를 찾을 수 없습니다.*/ owner.NetFUNNEL.isBlocking())
		{
			if(/* [X-LOG] 함수(isServiceBlocking)를 찾을 수 없습니다.*/ owner.NetFUNNEL.isServiceBlocking()){
				// 서비스에서 막은 정상적인 블럭킹
			}else{
				// 사용자 패턴이 이상하여 시스템에서 막은 블럭킹
			}
		}
		this.alert_opacity("NetFUNNEL 처리중 중지하였습니다.");
		throw "서비스 실행 취소, 사유:사용자요청으로 넷퍼넷 중지";
		return false;
	}
	return true;
};

/**
 * 네포넬 적용 종료
 * @param conctAtptScCodeOrList : 시도교육청코드(["K10"])
 * @return
 * @see    //NetFunnel 종료
		   swf_EndNetFunnel();
 */
prForm.nfnfEndNetFunnel = function(owner, serverName){
	/* [X-LOG] 함수(END)를 찾을 수 없습니다.*/ owner.NetFUNNEL.END(this);
};
