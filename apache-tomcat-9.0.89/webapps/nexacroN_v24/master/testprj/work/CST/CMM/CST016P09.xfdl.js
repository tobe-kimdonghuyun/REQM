(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016P09");
            this.set_titletext("위험작업 대상(팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,490);
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
            obj._setContents("<ColumnInfo><Column id=\"작업종류\" type=\"STRING\" size=\"256\"/><Column id=\"정의\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"작업종류\">고소 작업&#13;&#10;(2m 이상 작업)&#10;</Col><Col id=\"정의\">2m 이상의 높이 작업장 및 개구부에서 이루어지는 작업&#13;&#10;추락 가능한 바닥면으로부터 작업자 발 높이까지&#10;</Col></Row><Row><Col id=\"작업종류\">전기 작업&#13;&#10;(활선근접작업)&#10;</Col><Col id=\"정의\">전기 기계.가구.전로 등의 노출된 충전부를 직접/간접 접촉하는 작업 및 노출된 충전부 접근&#10;우려가 있는 작업&#10;</Col></Row><Row><Col id=\"작업종류\">중장비 작업&#10;</Col><Col id=\"정의\">중장비를 사용하는 작업 또는 중장비를 사용하여 중량물을 위급하는 작업(중장비 :  동력을 이&#10;용하여 중량물을 취급하는 지게차, 크레인(이동식, 천정크레인 등, 테이블리프트, 고소작업대,&#10;스카이, 차량탑재형 고소작업대, 굴삭기 등)&#10;</Col></Row><Row><Col id=\"작업종류\">밀폐 작업</Col><Col id=\"정의\">질식, 중독, 화재, 폴발 등의 위험이 있는 장소에서의 작업</Col></Row><Row><Col id=\"작업종류\">굴착 작업</Col><Col id=\"정의\">깊이 30Cm이상 지반을 파고 배관, 전기케이블 등의 지하 매설 작업</Col></Row><Row><Col id=\"작업종류\">화기 작업</Col><Col id=\"정의\">화염 또는 스파크를 발생시키는 작업(용접, 용단, 연마, 드릴, 절단 등)</Col></Row><Row><Col id=\"작업종류\">방사선 작업</Col><Col id=\"정의\">방사선을 사용하여 기기의 점검 또는 비파괴 검사 하는 작업</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100.00%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("default autoindicator");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20.00","10","100%","458",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"600\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"작업종료\"/><Cell col=\"2\" text=\"정의\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"expr:currow+1\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:작업종류\" displaytype=\"text\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:정의\" wordWrap=\"char\" cssclass=\"CellEnd\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
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
                p.Grid00.set_autosizingtype("row");
                p.Grid00.set_extendsizetype("row");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("20.00","10","100%","458",null,null);
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
            obj = new Layout("default","Desktop_screen,Phone_screen",1000,490,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("위험작업 대상(팝업)");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("default autoindicator");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","0","100.00%",null,null,"0");
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
        this.registerScript("CST016P09.xfdl", function() {
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
        	//this.divForm.form.divSch.set_width("100%");
        	//this.divForm.form.divSch.fittocontents = "height";
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
        this.loadIncludeScript("CST016P09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
