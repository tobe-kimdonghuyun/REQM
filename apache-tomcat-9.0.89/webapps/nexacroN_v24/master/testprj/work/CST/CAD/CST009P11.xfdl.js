(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009P11");
            this.set_titletext("입주자 시설 담당부서 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1150,640);
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

            obj = new Grid("Grid00","20.00","10","100%","630",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"600\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"주요내용\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" cssclass=\"CellEnd\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:구분\" suppressalign=\"middle\" suppress=\"1\" displaytype=\"text\" cssclass=\"CellHead\"/><Cell col=\"1\" text=\"bind:주요내용\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:부서명\"/><Cell col=\"3\" text=\"bind:연락처\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("ds00");
                p.Grid00.move("20.00","10","100%","630",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("30");
            obj.set_spacing("10px 20px 10px 20px");
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
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1150,640,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("입주자 시설 담당부서 현황");

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
            obj = new Layout("mobile","",480,500,this,
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
        this.registerScript("CST009P11.xfdl", function() {
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
        	/*this.gfnFormOnload(obj); //필수함수
        	this.divForm.set_width("100%");
        	this.divForm.fittocontents = "height";*/
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("CST009P11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
