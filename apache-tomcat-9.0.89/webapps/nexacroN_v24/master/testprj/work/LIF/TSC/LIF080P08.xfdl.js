(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF080P08");
            this.set_titletext("전동차 안전운전 및 규정준수에 관한 서약서");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"주요내용\" type=\"STRING\" size=\"256\"/><Column id=\"부서명\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"주요내용\">T1지역(제1여객, 제1교통, 제1합동, 탑승동) 내 사무실</Col><Col id=\"부서명\">입주자서비스센터</Col><Col id=\"연락처\">T1. 741-3301~2</Col><Col id=\"구분\">사무실 및 &#13;&#10;라운지 등</Col></Row><Row><Col id=\"주요내용\">T2지역(제2여객, 제2교통, 제2합동) 내 사무실</Col><Col id=\"부서명\">입주자서비스센터</Col><Col id=\"연락처\">T2. 741-3535~6</Col><Col id=\"구분\">사무실 및 &#13;&#10;라운지 등</Col></Row><Row><Col id=\"주요내용\">항공사 라운지, 체크인카운터 / 환승카운터</Col><Col id=\"부서명\">운영기획팀</Col><Col id=\"연락처\">741-2402~3</Col><Col id=\"구분\">사무실 및 &#13;&#10;라운지 등</Col></Row><Row><Col id=\"주요내용\">광고사업, 금융서비스(화물터미널 포함), 보험,로밍, 와이파이, 렌터카, 택배,차량정비고/세차장, 내국세환급</Col><Col id=\"부서명\">상업기획팀</Col><Col id=\"연락처\">741-2218~9</Col><Col id=\"구분\">상업시설</Col></Row><Row><Col id=\"주요내용\">식음료, 상주직원식당, 테마카페, 편의점, 서점, 약국,환승라운지, 편의매점, 외곽 및 화물 터미널 사업권, ※주유소/충전소 : 식음서비스팀 -&gt; 교통서비스팀 업무이관</Col><Col id=\"부서명\">식음서비스팀</Col><Col id=\"연락처\">741-2244~5</Col><Col id=\"구분\">상업시설</Col></Row><Row><Col id=\"주요내용\">면세점, 면세품 인도장, 면세점 프로모션</Col><Col id=\"부서명\">면세사업팀</Col><Col id=\"연락처\">741-2408~9</Col><Col id=\"구분\">상업시설</Col></Row><Row><Col id=\"구분\">화물터미널/&#13;&#10;자유무역지역</Col><Col id=\"주요내용\">화물터미널(A동/C동/E동), 운송대리점(A동/C동),항공화물창고(1남/2북), 북측항공화물창고,화물터미널지역(기타지역), 사업/행정지원센터, 제1물류단지(기타지역), 페덱스</Col><Col id=\"부서명\">물류운영팀</Col><Col id=\"연락처\">741-2288</Col></Row><Row><Col id=\"구분\">화물터미널/&#13;&#10;자유무역지역</Col><Col id=\"주요내용\">쿨카고</Col><Col id=\"부서명\">물류개발팀</Col><Col id=\"연락처\">741-6211</Col></Row><Row><Col id=\"구분\">이동지역</Col><Col id=\"주요내용\">이동지역 차량장비 등록 및 관리, 장비 정치장 관리</Col><Col id=\"부서명\">운항안전팀</Col><Col id=\"연락처\">741-2604~5</Col></Row><Row><Col id=\"주요내용\">항공유 저장시설 위험물 관리, 항공유급유시설(hydrant pit) 운영 및 유지보수 관리</Col><Col id=\"구분\">이동지역</Col><Col id=\"부서명\">플랜트시설팀</Col><Col id=\"연락처\">741-2456~7</Col></Row><Row><Col id=\"주요내용\">항공사 취항행사</Col><Col id=\"구분\">기타</Col><Col id=\"부서명\">항공마케팅팀</Col><Col id=\"연락처\">741-2346</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default autoindicator");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","10","100%","510",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default autoindicator");
            this.divForm.addChild(obj.name, obj);

            obj = new TextArea("txtCn","171","111","100%","200",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("본인은 인천국제공항 내 교통약자용 전동차 운전 업무를 수행하기에 앞서\n[인천국제공항 전동차 운영 메뉴얼] 을 숙지하였음을 서약합니다.\n\n또한, 본인은 인천국제공항 내 교통약자용 전동차 운전 업무를 수행함에 있어\n여객안전을 최우선으로 하며, [인천국제공항 전동차 운영 메뉴얼] 항상 준수할 것을 서약합니다.\n\n아울러, 본인은 [인천국제공항 전동차 운영 메뉴얼]에 위반되는 행위로 인해\n인천국제공항공사(이하 \'공사\')로부터 지적 또는 제재를 받을 시 지체없이 시정할것이며,\n이의를 제기하지 않을 것 을 서약합니다.");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","220",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"txtCn\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staYmd","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_text("2024년 10월 24일");
            obj.set_textAlign("center");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staInstNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("소속 : 인천공항시설관리(주)");
            obj.set_textAlign("right");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staNm","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("성명 : 박규태");
            obj.set_textAlign("right");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","158",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staYmd\"/><PanelItem id=\"PanelItem02\" componentid=\"staInstNm\"/><PanelItem id=\"PanelItem03\" componentid=\"staNm\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkAgreYn","274.00","355","228","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_textAlign("right");
            obj.set_value("0");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Button("btnAgre","813","76","240","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_text("전동차에 관한 서약에 동의합니다.");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100%","66",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"chkAgreYn\"/><PanelItem id=\"PanelItem00\" componentid=\"btnAgre\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_03_00_00_00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("인천국제공항공사 사장 귀하");
            obj.set_textAlign("center");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","66",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_03_00_00_00_02\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.txtCn.set_taborder("0");
                p.txtCn.set_readonly("true");
                p.txtCn.set_value("본인은 인천국제공항 내 교통약자용 전동차 운전 업무를 수행하기에 앞서\n[인천국제공항 전동차 운영 메뉴얼] 을 숙지하였음을 서약합니다.\n\n또한, 본인은 인천국제공항 내 교통약자용 전동차 운전 업무를 수행함에 있어\n여객안전을 최우선으로 하며, [인천국제공항 전동차 운영 메뉴얼] 항상 준수할 것을 서약합니다.\n\n아울러, 본인은 [인천국제공항 전동차 운영 메뉴얼]에 위반되는 행위로 인해\n인천국제공항공사(이하 \'공사\')로부터 지적 또는 제재를 받을 시 지체없이 시정할것이며,\n이의를 제기하지 않을 것 을 서약합니다.");
                p.txtCn.move("171","111","100%","200",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.move("0","60","100.00%","220",null,null);

                p.staYmd.set_taborder("2");
                p.staYmd.set_text("2024년 10월 24일");
                p.staYmd.set_textAlign("center");
                p.staYmd.move("10","98","100%","46",null,null);

                p.staInstNm.set_taborder("3");
                p.staInstNm.set_text("소속 : 인천공항시설관리(주)");
                p.staInstNm.set_textAlign("right");
                p.staInstNm.move("10","98","100%","46",null,null);

                p.staNm.set_taborder("4");
                p.staNm.set_text("성명 : 박규태");
                p.staNm.set_textAlign("right");
                p.staNm.move("10","98","100%","46",null,null);

                p.pan01.set_taborder("5");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("10px 20px 10px 20px");
                p.pan01.move("0","60","100.00%","158",null,null);

                p.chkAgreYn.set_taborder("6");
                p.chkAgreYn.set_truevalue("1");
                p.chkAgreYn.set_falsevalue("0");
                p.chkAgreYn.set_textAlign("right");
                p.chkAgreYn.set_value("0");
                p.chkAgreYn.move("274.00","355","228","46",null,null);

                p.btnAgre.set_taborder("7");
                p.btnAgre.set_text("전동차에 관한 서약에 동의합니다.");
                p.btnAgre.set_cssclass("btn_WF_Small");
                p.btnAgre.set_fittocontents("width");
                p.btnAgre.move("813","76","240","40",null,null);

                p.pan02.set_taborder("8");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("10px 20px 10px 20px");
                p.pan02.move("0","60","100%","66",null,null);

                p.staLabel00_03_00_00_00_02.set_taborder("9");
                p.staLabel00_03_00_00_00_02.set_text("인천국제공항공사 사장 귀하");
                p.staLabel00_03_00_00_00_02.set_textAlign("center");
                p.staLabel00_03_00_00_00_02.move("10","98","100%","46",null,null);

                p.pan01_00.set_taborder("10");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("10px 20px 10px 20px");
                p.pan01_00.move("0","60","100.00%","66",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_flexwrap("nowrap");
            this.divForm.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_taborder("0");
                p.div00.set_text("div00");
                p.div00.set_visible("true");
                p.div00.set_formscrollbartype("default autoindicator");
                p.div00.set_maxwidth("");
                p.div00.move("10","10","100%","510",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("nowrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("nowrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",800,530,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("전동차 안전운전 및 규정준수에 관한 서약서");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default autoindicator");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",390,470,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("LIF080P08.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	LIF080P08.xfdl
        *  @Creator 	CHG
        *  @CreateDate 	2024/10/24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/24				CHG							최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*
        	params {
        		  paramInstNm	: 기관명
        		, paramNm 		: 사원명
        	}

        	return {
        		wtohAgreYn		: 동의여부
        	}
        */

        this.paramInstNm = this.getOwnerFrame().paramInstNm;
        this.paramNm = this.getOwnerFrame().paramNm;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.divForm.form.div00.form.staInstNm.text = "소속 : " + this.paramInstNm;
        	this.divForm.form.div00.form.staNm.text = "성명 : " + this.paramNm;

        	this.gfnAlertMsg("msg", "MSG_011", ["서약서에 동의하셔야 전동차등록신청 \n및 허가신청을 신청하실 수 있습니다."]);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "") {
        		if(oRtn.result == "Y") {

        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnAgre_onclick
         * @description : 서약서동의 버튼 클릭
         ***************************************************************************/
        this.btnAgre_onclick = function(obj,e)
        {
        	var chkYn = this.divForm.form.div00.form.chkAgreYn.value;

        	if(chkYn != "1"){
        		this.gfnAlertMsg("msg", "MSG_011", ["서약서에 동의하셔야 전동차허가(신청)\n을 신청하실 수 있습니다."]);

        	}else{
        		var resJson = {
        			  wtohAgreYn : chkYn
        		};

        		this.close(JSON.stringify(resJson));
        		// this.gfnClosePopup(JSON.stringify(resJson));

        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.div00.form.pan00.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.div00.form.pan01.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.div00.form.btnAgre.addEventHandler("onclick",this.btnAgre_onclick,this);
            this.divForm.form.div00.form.pan02.addEventHandler("onclick",this.Common_onclick,this);
            this.divForm.form.div00.form.pan01_00.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("LIF080P08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
