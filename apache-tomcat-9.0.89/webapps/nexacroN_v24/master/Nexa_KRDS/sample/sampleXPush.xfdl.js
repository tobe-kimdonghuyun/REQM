(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleXPush");
            this.set_titletext("XPush 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMessage", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TOPIC_TYPE","type" : "STRING","size" : "256"},{"id" : "TOPIC_ID","type" : "STRING","size" : "256"},{"id" : "MSG","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new XPush("XPush", this);
            obj.getSetter("layouturl").set("xpushUrl::pushMessageLayout.xml");
            obj.getSetter("onerror").set("XPush_onerror");
            obj.getSetter("onsuccess").set("XPush_onsuccess");
            obj.getSetter("protocolversion").set("3");
            obj.getSetter("debug").set("true");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("X-PUSH 연결");
            obj.set_cssclass("sta_WF_H2_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","Static00:48",null,"556","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchBar");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","600","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtProjId\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트ID");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProjId","112","5","200","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("[@staTitle00]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","56","600","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtIpAddr\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","56","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("IP 주소");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtIpAddr","112","61","200","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("[@staTitle01]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","117","600","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtUserId\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","117","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("유저 아이디");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserId","112","122","200","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("[@staTitle02]");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel05","294","0","808","102",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel01","294","0","286","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"cboProtocol\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","294","0","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("프로토콜 버전");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboProtocol","406","5","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("[@staTitle03]");
            var divDetail_form_cboProtocol_innerdataset = new nexacro.NormalDataset("divDetail_form_cboProtocol_innerdataset", obj);
            divDetail_form_cboProtocol_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "2","datacolumn" : "2"},{"codecolumn" : "3","datacolumn" : "3"}]});
            obj.set_innerdataset(divDetail_form_cboProtocol_innerdataset);
            obj.set_text("3");
            obj.set_value("3");
            obj.set_index("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta00","533","2","100%","46",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("2 설정 시 v2.8 미만 버전의 X-PUSH 서버 기능을 사용 할 수 있습니다.\r\n3 설정 시 v2.8 이상 버전의 X-PUSH 서버 기능을 사용 할 수 있습니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_SchInfor");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel06","294","56","808","102",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel03","294","56","286","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"cboPort\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","294","56","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("Port");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboPort","406","61","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("[@staTitle04]");
            var divDetail_form_cboPort_innerdataset = new nexacro.NormalDataset("divDetail_form_cboPort_innerdataset", obj);
            divDetail_form_cboPort_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "50000","datacolumn" : "50000"},{"codecolumn" : "50001","datacolumn" : "50001"}]});
            obj.set_innerdataset(divDetail_form_cboPort_innerdataset);
            obj.set_text("공지사항");
            obj.set_value("0000");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta00_00","495","88","100%","46",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("웹 브라우저 접속 포트(50000), 전용 브라우저 접속 포트(50001)입니다.\r\nxpush_config.xml 파일에 정의되어 있습니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_SchInfor");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel07","40","460","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnConnect\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnConnect","746","232","120","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("connect");
            obj.set_cssclass("btn_WF_Crud01");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtContents","0","divDetail:16",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","txtContents:40","200","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메시지 보내기");
            obj.set_cssclass("sta_WF_H4_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divSend","0","Static00_01:5",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_SchBar");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","40","40","600","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divSend.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","300","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"cboTopicType\"/></Contents>");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","0","120","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("2");
            obj.set_text("Topic Type");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSend.addChild(obj.name, obj);

            obj = new Combo("cboTopicType","112","5","180","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSend_form_cboTopicType_innerdataset = new nexacro.NormalDataset("divSend_form_cboTopicType_innerdataset", obj);
            divSend_form_cboTopicType_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0000","datacolumn" : "공지사항"},{"codecolumn" : "0001","datacolumn" : "주간보고"},{"codecolumn" : "0002","datacolumn" : "일정"}]});
            obj.set_innerdataset(divSend_form_cboTopicType_innerdataset);
            obj.set_text("공지사항");
            obj.set_value("0000");
            obj.set_index("0");
            this.divSend.addChild(obj.name, obj);

            obj = new Panel("Panel01","294","0","300","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"cboTopicId\"/></Contents>");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("staTitle04_00_00","294","0","120","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("5");
            obj.set_text("Topic Id");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSend.addChild(obj.name, obj);

            obj = new Combo("cboTopicId","406","5","180","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSend_form_cboTopicId_innerdataset = new nexacro.NormalDataset("divSend_form_cboTopicId_innerdataset", obj);
            divSend_form_cboTopicId_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "CODE1"},{"codecolumn" : "2","datacolumn" : "CODE2"},{"codecolumn" : "3","datacolumn" : "CODE3"}]});
            obj.set_innerdataset(divSend_form_cboTopicId_innerdataset);
            obj.set_text("공지사항");
            obj.set_value("0000");
            obj.set_index("0");
            this.divSend.addChild(obj.name, obj);

            obj = new Button("btnSend","763","5","120","48",null,null,null,null,null,null,this.divSend.form);
            obj.set_taborder("7");
            obj.set_text("send");
            obj.set_cssclass("btn_WF_Crud01");
            this.divSend.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","divSend:40","200","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전달받은 메시지");
            obj.set_cssclass("sta_WF_H4_pc");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","Static00_00:16",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMessage");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"272\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"TOPIC_ID\"/><Cell col=\"1\" text=\"MSG\"/></Band><Band id=\"body\"><Cell text=\"bind:TOPIC_ID\"/><Cell col=\"1\" text=\"bind:MSG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_spacing("40px 40px 40px 40px");
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSend.form
            obj = new Layout("default","",0,0,this.divSend.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_verticalgap("16");
            this.divSend.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleXPush.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleXPush.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/30
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/30			TOBESOFT					최초생성
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
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
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


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description 공급자 jsp 호출
        */
        this.fnCallProvider = function (argumentMsg)
        {
        	var strSvcId 	= "sendMassage";
        	var strSvcUrl 	= "xpushMessage.do";
        	var inData 		= "";
        	var outData 	= "";
        	var strArg 		= argumentMsg;
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (svcId, nErrCd, sErrMsg)
        {
        	switch(svcId) {
        		case "sendMassage" :
        			break;
        		default:break;
        	}
        };


        /**
        * @description X-PUSH에 subscribe로 등록한 토픽의 메시지를 받음
        * @param
        	> ChangeRow : 변경된 Row의 index, 데이터셋 저장 타입이 "allUpdate"면 ","로 구분되어 설정
            > ChangeCol : 변경된 Column ID 가 "," 로 구분되어 설정, "allUpdate"면 Null 값 설정
            > ColList : 모든 Column ID 가 "," 로 구분되어 설정, "allUpdate"면 변경된 Row 와 Column 의 ID 가 배열로 설정
            > strMsgType : "DATA" or "RECOVERY" 값이 설정
        	> strActionType : 실시간 메시지 수신 : "PUSH" , 신뢰성 메시지수신 : "RECT"
        	> strMsgID : 메시지를 구분할 수 있는 값 설정

        	*strMsgType : "RECOVERY" 값일 때 = Recovery 메시지를 받았을 경우*
        	 > ChangeRow : -1 값 설정, ChangeCol
             > ChangeCol : 빈 문자열 설정
             > ColList : 빈 문자열 설정
        * @return
        */
        this.fnPushCallback = function(ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID)
        {
        	if(strActionType == "PUSH")
        	{
        		this.fnReceiveMessage(ChangeRow);
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
         /**
         * @description 사용할 user id를 등록 한 후 X-PUSH 서버 연결
        */
        this.fnPushConnect = function ()
        {
        	this.XPush.set_projectid(this.divDetail.form.edtProjId.value); //project_id 정보를 설정합니다.
        	this.XPush.set_protocolversion(this.divDetail.form.cboProtocol.value); //x-push와 통신할 프로토콜 버전을 설정합니다.

        	var ip = this.divDetail.form.edtIpAddr.value;
        	var port = this.divDetail.form.cboPort.value;
        	var ipAddr = "http://" + ip + ":" + port;

        	//connect : X-PUSH 서버와 접속을 합니다.
        	this.XPush.set_iplist(ipAddr); //네트워크 주소 설정
        	this.XPush.set_userid(this.divDetail.form.edtUserId.value);	//userid 설정
        	this.XPush.connect(); //XPUSH 연결
        };


        /**
        * @description X-PUSH 연결 성공 후 메시지 처리
        * @param
        * @return
        */
        this.fnLoginMessage = function()
        {
        	//subscribe: 메시지를 받기 위해 연결된 X-PUSH 서버에 Topic(Topic Type 및 Topic Id(message key))을 등록
        	var sTopicType = 'CODETYPE';

        	/*1개의 토픽타입에 3개의 메시지 키 등록 1=CODE1, 2=CODE2, 3=CODE3
        	사용할 토픽 변경 시 토픽 정보 변경 필수*/
        	this.XPush.subscribe('0000', 'CODE1', this, this.dsMessage, "append", "fnPushCallback");
        	this.XPush.subscribe('0000', 'CODE2', this, this.dsMessage, "append", "fnPushCallback");
        	this.XPush.subscribe('0000', 'CODE3', this, this.dsMessage, "append", "fnPushCallback");

        	this.XPush.subscribe('0001', 'CODE1', this, this.dsMessage, "append", "fnPushCallback");
        	this.XPush.subscribe('0001', 'CODE2', this, this.dsMessage, "append", "fnPushCallback");
        	this.XPush.subscribe('0001', 'CODE3', this, this.dsMessage, "append", "fnPushCallback");

        	this.XPush.subscribe('0002', 'CODE1', this, this.dsMessage, "append", "fnPushCallback");
        	this.XPush.subscribe('0002', 'CODE2', this, this.dsMessage, "append", "fnPushCallback");
        	this.XPush.subscribe('0002', 'CODE3', this, this.dsMessage, "append", "fnPushCallback");

        	//사용자 입력 정보
        	var sText = this.XPush.userid + ' 로그인 완료.';

        	//입력값 추가
        	this.txtContents.set_value(sText);
        }

        /**
        * @description 입력값 textarea에 추가, TOPIC ID 매칭값이 존재할 때 공급자 호출
        * @param
        * @return
        */
        this.fnSendMessage = function()
        {
        	var sNotices =  "TOPIC_TYPE=" + this.divSend.form.cboTopicType.value;
        		sNotices += " TOPIC_ID=" + this.divSend.form.cboTopicId.text;
        		sNotices += " USER_ID=" + this.divDetail.form.edtUserId.value;
        		sNotices += " PROJECT_ID=" + this.divDetail.form.edtProjId.value;
        	this.fnCallProvider(sNotices);
        }

        /**
        * @description 메시지 공급을 위해 서비스 호출
        * @param nRow : 추가된 Row num
        * @return
        */
        this.fnReceiveMessage = function(nRow)
        {

        	var text = this.dsMessage.getColumn(nRow, "MSG");

        	if (!("Notification" in window)) {
        	  this.alert("이 브라우저는 알림을 지원하지 않습니다.");
        	}
        	// 사용자에게 알림 권한을 요청
        	else if (Notification.permission !== "denied") {
        	  Notification.requestPermission().then(function (permission) {
        		// 사용자가 알림 허용
        		if (permission === "granted") {
        		  // 알림 생성
        		  var notification = new Notification("알림 제목", {
        			body: text,
        			icon: ""
        		  });

        		  // 알림이 클릭되었을 때 처리
        		  notification.onclick = function () {
        			// 여기에 클릭했을 때 수행할 동작 추가
        			console.log("알림이 클릭되었습니다.");
        		  };
        		}
        	  });
        	}
        	else {
        		alert('알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다.');
        	}
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        this.divDetail_btnConnect_onclick = function(obj,e)
        {
        	this.fnPushConnect();
        };

        this.divSend_btnSend_onclick = function(obj,e)
        {
        	this.fnSendMessage();
        };


        /**
         * @description XPush_onsuccess
        */
        this.XPush_onsuccess = function(obj,e)
        {

        	if(e.action == 0)
        	{
        		//connect() 메소드로 Push 서버 연결에 성공했을 때
        		this.fnLoginMessage();	//X-PUSH connect
        	}
        };

        /**
         * @description XPush_onerror
        */
        this.XPush_onerror = function(obj,e)
        {
        	if(e.message != null)
        	{
        		trace( "e.message != null\n" +
        			" - e.message.messagetype: " + e.message.messagetype + "\n" +
        			" - e.message.messagekey: " + e.message.messagekey + "\n" +
        			" - e.message.messageid: " + e.message.messageid + "\n" +
        			" - e.message.devicetoken: " + e.message.devicetoken);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divDetail.form.btnConnect.addEventHandler("onclick",this.divDetail_btnConnect_onclick,this);
            this.divSend.form.btnSend.addEventHandler("onclick",this.divSend_btnSend_onclick,this);
        };
        this.loadIncludeScript("sampleXPush.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
