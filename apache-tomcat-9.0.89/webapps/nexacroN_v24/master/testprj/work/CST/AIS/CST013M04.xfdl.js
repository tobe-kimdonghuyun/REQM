(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST13M00_01");
            this.set_titletext("작업시준수사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose","1205","5","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpen","1155","20","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100%","456",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem02\" componentid=\"div00_01_01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","200","90","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이동지역 내 작업시 준수사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1270","90","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btnClose\"/><PanelItem id=\"PanelItem02\" componentid=\"btnOpen\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","200","90","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00_00","1090","494","100.00%","356",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","68","61","100%","180",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("5");
            obj.set_value("1. 작업시행자는 작업구역 내 작업책임자를 배치하고 작업책임자는 작업자에게 이동지역내의 질서유지와 안전 확보를 위한 안전준수사항 교육\n2. 작업책임자는 작업계획서 사전 제출및 승인 후 작업착수, 허가된 작업시간 준수(시간 연장이 필요한 경우 이동지역안전관리소와 사전 협의)\n3. 작업책임자는 작업 시작과 종료 사실을 유선 또는 무선 통신수단을 이용하여 이동지역안전관리소에 반드시 통보\n4. 작업자는 작업승인지역 외 출입금지, 작업구역 출입 및 이동경로, 이동지역 내 절대 흡연금지(차량내부 포함) 준수\n5. 기동지역 및 항공기 이동과 관련된 계류장내 작업자는 무전교신장비 사용요령 및 교신절차를 준수하고 교신내용청취 및 사주경계 철저\n6. 항공기 이동에 영향을 미치는 작업구역 내 작업자는 필요시 관련기관(서울지방항공청, 항공정보통신센터, 관제탑, 계류장관제소, 계류장관리소 등)과 사전 협의\n7. 작업자는 안전조끼, 작업구역별 적정한 안전 및 보호장구 착용, 안전수칙사항 준수");
            obj.set_readonly("true");
            obj.set_scrollbartype("none default");
            obj.set_scrolltype("vertical");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","47","100.00%","190",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("4");
            obj.set_spacing("10px 20px 0px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("작업준수사항동의");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","300","86",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoJobCmpanAgreYn\"/></Contents>");
            this.div00_01_01_00_00.addChild(obj.name, obj);

            obj = new Radio("rdoJobCmpanAgreYn","74","77","100%","40",null,null,null,null,null,null,this.div00_01_01_00_00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_01_00_00_form_rdoJobCmpanAgreYn_innerdataset = new nexacro.NormalDataset("div00_01_01_00_00_form_rdoJobCmpanAgreYn_innerdataset", obj);
            div00_01_01_00_00_form_rdoJobCmpanAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_01_00_00_form_rdoJobCmpanAgreYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_01_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_01_00_00.form
            obj = new Layout("default","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_taborder("5");
                p.TextArea00.set_value("1. 작업시행자는 작업구역 내 작업책임자를 배치하고 작업책임자는 작업자에게 이동지역내의 질서유지와 안전 확보를 위한 안전준수사항 교육\n2. 작업책임자는 작업계획서 사전 제출및 승인 후 작업착수, 허가된 작업시간 준수(시간 연장이 필요한 경우 이동지역안전관리소와 사전 협의)\n3. 작업책임자는 작업 시작과 종료 사실을 유선 또는 무선 통신수단을 이용하여 이동지역안전관리소에 반드시 통보\n4. 작업자는 작업승인지역 외 출입금지, 작업구역 출입 및 이동경로, 이동지역 내 절대 흡연금지(차량내부 포함) 준수\n5. 기동지역 및 항공기 이동과 관련된 계류장내 작업자는 무전교신장비 사용요령 및 교신절차를 준수하고 교신내용청취 및 사주경계 철저\n6. 항공기 이동에 영향을 미치는 작업구역 내 작업자는 필요시 관련기관(서울지방항공청, 항공정보통신센터, 관제탑, 계류장관제소, 계류장관리소 등)과 사전 협의\n7. 작업자는 안전조끼, 작업구역별 적정한 안전 및 보호장구 착용, 안전수칙사항 준수");
                p.TextArea00.set_readonly("true");
                p.TextArea00.set_scrollbartype("none default");
                p.TextArea00.set_scrolltype("vertical");
                p.TextArea00.move("68","61","100%","180",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_spacing("10px 20px 0px 20px");
                p.Panel02.move("0","47","100.00%","190",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("작업준수사항동의");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","300","86",null,null);

                p.rdoJobCmpanAgreYn.set_taborder("3");
                p.rdoJobCmpanAgreYn.set_fittocontents("none");
                p.rdoJobCmpanAgreYn.set_innerdataset(div00_01_01_00_00_form_rdoJobCmpanAgreYn_innerdataset);
                p.rdoJobCmpanAgreYn.set_codecolumn("codecolumn");
                p.rdoJobCmpanAgreYn.set_datacolumn("datacolumn");
                p.rdoJobCmpanAgreYn.set_direction("vertical");
                p.rdoJobCmpanAgreYn.set_columncount("-1");
                p.rdoJobCmpanAgreYn.set_rowcount("-1");
                p.rdoJobCmpanAgreYn.set_value("0");
                p.rdoJobCmpanAgreYn.set_index("0");
                p.rdoJobCmpanAgreYn.move("74","77","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,450,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업시준수사항");

                p.btnClose.set_taborder("5");
                p.btnClose.set_cssclass("btn_WF_ACPlus");
                p.btnClose.set_visible("false");
                p.btnClose.move("1205","5","34","34",null,null);

                p.btnOpen.set_taborder("6");
                p.btnOpen.set_cssclass("btn_WF_ACMinus");
                p.btnOpen.move("1155","20","34","34",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0","100%","456",null,null);

                p.staSubTitle.set_taborder("2");
                p.staSubTitle.set_text("이동지역 내 작업시 준수사항");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("200","90","100%","50",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.move("1270","90","209","50",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_fittocontents("none");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_minheight("70");
                p.Panel01.set_maxheight("");
                p.Panel01.move("200","90","100.00%","70",null,null);

                p.div00_01_01_00_00.set_taborder("0");
                p.div00_01_01_00_00.set_text("신청자정보");
                p.div00_01_01_00_00.set_cssclass("div_WF_Bg");
                p.div00_01_01_00_00.set_fittocontents("height");
                p.div00_01_01_00_00.set_formscrollbartype("none none");
                p.div00_01_01_00_00.set_formscrolltype("none");
                p.div00_01_01_00_00.move("1090","494","100.00%","356",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,450,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_fittocontents("height");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00_01_01_00_00.form.rdoJobCmpanAgreYn","value","dsCstJobAprv","jobCmpanAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST013M04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST013M04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	test.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			김완성					최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj);

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

        this.cfnClose = function() {};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnInit
         * @description : 초기화
         ***************************************************************************/
        this.fnInit = function()
        {

        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	trace("callBack :: " +svcID);
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) {
        		return;
        	}

        	switch(svcID) {

        		case "search": //조회

        		break;
        		default :
        		break;
        	}

        };

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnFold1_onclick
         * @description : 작업방법 안내 접기/펴기
         ***************************************************************************/
        this.btnFold1_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_01_00_00.visible = true;
        	} else {
        		this.div00_01_01_00_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00_01_01_00_00.form.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOpen.addEventHandler("onclick",this.btnFold1_onclick,this);
        };
        this.loadIncludeScript("CST013M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
