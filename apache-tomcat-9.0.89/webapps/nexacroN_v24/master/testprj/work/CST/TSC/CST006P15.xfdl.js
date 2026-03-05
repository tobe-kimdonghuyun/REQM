(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006P15");
            this.set_titletext("입주자시설담당부서 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1150,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu00", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">01</Col><Col id=\"MENU_NM\">상세메뉴1</Col></Row><Row><Col id=\"MENU_CD\">02</Col><Col id=\"MENU_NM\">상세메뉴2</Col></Row><Row><Col id=\"MENU_CD\">03</Col><Col id=\"MENU_NM\">상세메뉴3</Col></Row><Row><Col id=\"MENU_CD\">04</Col><Col id=\"MENU_NM\">상세메뉴4</Col></Row><Row><Col id=\"MENU_CD\">05</Col><Col id=\"MENU_NM\">상세메뉴5</Col></Row><Row><Col id=\"MENU_CD\">06</Col><Col id=\"MENU_NM\">상세메뉴6</Col></Row><Row><Col id=\"MENU_CD\">07</Col><Col id=\"MENU_NM\">상세메뉴7</Col></Row><Row><Col id=\"MENU_CD\">08</Col><Col id=\"MENU_NM\">상세메뉴8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuick", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">기본정보</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"title\">임차관련 정보</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"title\">기타요청정보</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"title\">증빙자료 첨부</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"title\">임차희망서 검토의견</Col><Col id=\"code\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"주요내용\" type=\"STRING\" size=\"256\"/><Column id=\"부서명\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"주요내용\">T1지역(제1여객, 제1교통, 제1합동, 탑승동) 내 사무실</Col><Col id=\"부서명\">입주자서비스센터</Col><Col id=\"연락처\">T1. 741-3301~2</Col><Col id=\"구분\">사무실 및 &#13;&#10;라운지 등</Col></Row><Row><Col id=\"주요내용\">T2지역(제2여객, 제2교통, 제2합동) 내 사무실</Col><Col id=\"부서명\">입주자서비스센터</Col><Col id=\"연락처\">T2. 741-3535~6</Col><Col id=\"구분\">사무실 및 &#13;&#10;라운지 등</Col></Row><Row><Col id=\"주요내용\">항공사 라운지, 체크인카운터 / 환승카운터</Col><Col id=\"부서명\">운영기획팀</Col><Col id=\"연락처\">741-2402~3</Col><Col id=\"구분\">사무실 및 &#13;&#10;라운지 등</Col></Row><Row><Col id=\"주요내용\">광고사업, 금융서비스(화물터미널 포함), 보험,로밍, 와이파이, 렌터카, 택배,차량정비고/세차장, 내국세환급</Col><Col id=\"부서명\">상업기획팀</Col><Col id=\"연락처\">741-2218~9</Col><Col id=\"구분\">상업시설</Col></Row><Row><Col id=\"주요내용\">식음료, 상주직원식당, 테마카페, 편의점, 서점, 약국,환승라운지, 편의매점, 외곽 및 화물 터미널 사업권, ※주유소/충전소 : 식음서비스팀 -&gt; 교통서비스팀 업무이관</Col><Col id=\"부서명\">식음서비스팀</Col><Col id=\"연락처\">741-2244~5</Col><Col id=\"구분\">상업시설</Col></Row><Row><Col id=\"주요내용\">면세점, 면세품 인도장, 면세점 프로모션</Col><Col id=\"부서명\">면세사업팀</Col><Col id=\"연락처\">741-2408~9</Col><Col id=\"구분\">상업시설</Col></Row><Row><Col id=\"구분\">화물터미널/&#13;&#10;자유무역지역</Col><Col id=\"주요내용\">화물터미널(A동/C동/E동), 운송대리점(A동/C동),항공화물창고(1남/2북), 북측항공화물창고,화물터미널지역(기타지역), 사업/행정지원센터, 제1물류단지(기타지역), 페덱스</Col><Col id=\"부서명\">물류운영팀</Col><Col id=\"연락처\">741-2288</Col></Row><Row><Col id=\"구분\">화물터미널/&#13;&#10;자유무역지역</Col><Col id=\"주요내용\">쿨카고</Col><Col id=\"부서명\">물류개발팀</Col><Col id=\"연락처\">741-6211</Col></Row><Row><Col id=\"구분\">이동지역</Col><Col id=\"주요내용\">이동지역 차량장비 등록 및 관리, 장비 정치장 관리</Col><Col id=\"부서명\">운항안전팀</Col><Col id=\"연락처\">741-2604~5</Col></Row><Row><Col id=\"주요내용\">항공유 저장시설 위험물 관리, 항공유급유시설(hydrant pit) 운영 및 유지보수 관리</Col><Col id=\"구분\">이동지역</Col><Col id=\"부서명\">플랜트시설팀</Col><Col id=\"연락처\">741-2456~7</Col></Row><Row><Col id=\"주요내용\">항공사 취항행사</Col><Col id=\"구분\">기타</Col><Col id=\"부서명\">항공마케팅팀</Col><Col id=\"연락처\">741-2346</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default autoindicator");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","10","100%","630",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"600\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"주요내용\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" cssclass=\"CellEnd\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:구분\" suppressalign=\"middle\" suppress=\"1\" displaytype=\"text\" cssclass=\"CellHead\"/><Cell col=\"1\" text=\"bind:주요내용\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:부서명\"/><Cell col=\"3\" text=\"bind:연락처\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,function(p){});
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1150,640,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST006P15.xfdl", function() {
        /********************************************************************
            created:	  2024/08/08
            filename: 	C:\developer\tsp_view\publishing\work\LIF\test.xfdl
            file path:	C:\developer\tsp_view\publishing\work\LIF
            file base: 	test
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

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

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
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

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
        	var btnClass = obj.cssclass;
        	if(btnClass =='btn_WF_SchClose'){
        	this.divForm.form.divSch.form.panLabel.fittocontents="none";
        	this.divForm.form.divSch.form.panLabel.set_height("50px");
        	obj.set_cssclass('btn_WF_SchOpen');
        	}
        	else if(btnClass =='btn_WF_SchOpen'){
        	this.divForm.form.divSch.form.panLabel.fittocontents="height";
        	obj.set_cssclass('btn_WF_SchClose');
        	}

        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("CST006P15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
