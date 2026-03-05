(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST005P18");
            this.set_titletext("사전협의등록(팝업)");
            this.set_cssclass("CST001P04");
            this.set_scrolltype("vertical");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1150,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChkList01", this);
            obj._setContents("<ColumnInfo><Column id=\"slfCheckDvsNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckDvsCd\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckChckNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckCd\" type=\"STRING\" size=\"256\"/><Column id=\"chkItem\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"N\" type=\"STRING\" size=\"256\"/><Column id=\"NA\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">ⓛ 미관심의 대상 시설 중 “경미한 사항＂에 해당한다.&#13;&#10;1. 운영을 위한 임시 시설물&#13;&#10;2. 유사 자문/심의 등을 거친 시설물&#13;&#10;3. 기타 미관관리부서와 협의한 사항</Col><Col id=\"비고\">“경미한 사항“에 해당 될 경우“체크리스트“를 시행결의에 첨부하여 미관 관리&#10;</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">② 미관심의 예외 대상에 해당하지 않는다.&#13;&#10;1. 인천공항 단계별 건설계획에 따라 건설되는 시설물&#13;&#10;2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물&#13;&#10;3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물&#13;&#10;4. 정기적인 시설물 교체 및 유지관리&#10;</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">1. 인천공항 단계별 건설계획에 따라 건설되는 시설물</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckChckNm\">4. 정기적인 시설물 교체 및 유지관리</Col><Col id=\"비고\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkList", this);
            obj._setContents("<ColumnInfo><Column id=\"slfCheckDvsNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckDvsCd\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckNm\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckCd\" type=\"STRING\" size=\"256\"/><Column id=\"remark\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckVal\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">ⓛ 미관심의 대상 시설 중 “경미한 사항＂에 해당한다.&#13;&#10;1. 운영을 위한 임시 시설물&#13;&#10;2. 유사 자문/심의 등을 거친 시설물&#13;&#10;3. 기타 미관관리부서와 협의한 사항</Col><Col id=\"remark\">“경미한 사항“에 해당 될 경우“체크리스트“를 시행결의에 첨부하여 미관 관리&#10;</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">② 미관심의 예외 대상에 해당하지 않는다.&#13;&#10;1. 인천공항 단계별 건설계획에 따라 건설되는 시설물&#13;&#10;2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물&#13;&#10;3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물&#13;&#10;4. 정기적인 시설물 교체 및 유지관리&#10;</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">1. 인천공항 단계별 건설계획에 따라 건설되는 시설물</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">2. 이사회 또는 디자인혁신자문위원회에서 미관/디자인 등에 대하여 검토 및 결정한 시설물</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">3. 「건축법」 제4조(건축위원회)에 의거하여 심의를 시행한 기본 시설물</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">05</Col></Row><Row><Col id=\"slfCheckDvsNm\">자가&#13;&#10;Check-List&#13;&#10;대상검토</Col><Col id=\"slfCheckNm\">4. 정기적인 시설물 교체 및 유지관리</Col><Col id=\"remark\">“예외 사항”에 해당될 경우 별도의 미관관리를 시행하지 않음</Col><Col id=\"slfCheckDvsCd\">A01</Col><Col id=\"slfCheckCd\">06</Col></Row><Row><Col id=\"slfCheckNm\">시설물의 배치가 여객의 이동 동선 및 공항의 운영에 지장을 주지 않는다.</Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckNm\">시설 본연의 기능성 및 공간 효율성을 고려하여 배치한다.</Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckNm\">주변 공용시설물의 사용에 지장을 주지 않는다. </Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckNm\">코튼월 혹은 커브사이드 주변 등 개방성이 중요한 공간에서는 여객의 시선 높이 등을 고려하여 개방감과 공간감에 과한 지장을 주지 않는다. </Col><Col id=\"slfCheckDvsNm\">배치</Col><Col id=\"slfCheckDvsCd\">B01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">인접 시설물과 조화성을 고려하여 크기(높이,  두께, 너비)를 결정한다. </Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">휴먼스케일을 고려한 형태 및 높이, 크기를 설정한다.</Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">과도하고 인위적인 형태를 지양하고, 간결한 형태를 통해 주변 환경과 조회를 유도한다. </Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckDvsNm\">형태</Col><Col id=\"slfCheckNm\">교통약자를 고려한 디자인 적용 여부를 검토한다.</Col><Col id=\"slfCheckDvsCd\">C01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckNm\">설계 시 색채표기는 표준기준법(NCS코드)를 따른다.</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckNm\">과도한 원색 및 고채도의 색사용은 지양한다.</Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">02</Col></Row><Row><Col id=\"slfCheckNm\">단일 대상에 과도하게 많은 색상의 사용은 지앙한다. </Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">03</Col></Row><Row><Col id=\"slfCheckNm\">인근 공용지역 마감과 조화를 이루도록 유도한다.</Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">04</Col></Row><Row><Col id=\"slfCheckNm\">인천국제공항의 주조색(백색계약 / 회색계약 / 우드패턴 등) 우선적용을 검토한 후, 강조가 필요한 시설물로 판단되는 경우에만 강조색을 적용했다.</Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">05</Col></Row><Row><Col id=\"slfCheckNm\">커튼월 혹은 커브사이드 주변에 설치할 경우 자연재료 및 투명소재를 사용하여 개방적은 공간을 되도록 유지했다. </Col><Col id=\"slfCheckDvsNm\">색채 및 자재</Col><Col id=\"slfCheckDvsCd\">D01</Col><Col id=\"slfCheckCd\">06</Col></Row><Row><Col id=\"slfCheckNm\">설치 위치가 속해있는 터미널(T1, T2 및 탑승동)의 디자인·미관 콘셉트 및 주변 시설물과의 통일성·조화로움을 고려했다.</Col><Col id=\"slfCheckDvsNm\">콘셉트</Col><Col id=\"slfCheckDvsCd\">E01</Col><Col id=\"slfCheckCd\">01</Col></Row><Row><Col id=\"slfCheckNm\">시설물에 대한 카트프로텍터 필요 여부를 검토한다.</Col><Col id=\"slfCheckDvsNm\">기타</Col><Col id=\"slfCheckDvsCd\">F01</Col><Col id=\"slfCheckCd\">01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWrtr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"slfCheckYmd\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckWrtrId\" type=\"STRING\" size=\"256\"/><Column id=\"slfCheckRvwCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBfhdClsltn", this);
            obj._setContents("<ColumnInfo><Column id=\"ctrtGubn\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdCnsltnNo\" type=\"STRING\" size=\"256\"/><Column id=\"bfhdCnsltnYmd\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntId\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntNm\" type=\"STRING\" size=\"256\"/><Column id=\"aplcntMblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"coId\" type=\"STRING\" size=\"256\"/><Column id=\"coNm\" type=\"STRING\" size=\"256\"/><Column id=\"ctrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtCtrtNo\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtInptPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"hwrtPstnInfoCn\" type=\"STRING\" size=\"256\"/><Column id=\"jobNm\" type=\"STRING\" size=\"256\"/><Column id=\"instlRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"dsinCnsltnYn\" type=\"STRING\" size=\"256\"/><Column id=\"dsinCnsltnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dsinPicNm\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ctrtGubn\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","0",null,null,"-40","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("work::CST/BFH/CST001M00.xfdl");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_formscrollbarsize("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1150,1080,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사전협의등록(팝업)");
                p.set_cssclass("CST001P04");
                p.set_scrolltype("vertical");
                p.set_scrollbartype("none none");

                p.divForm.set_taborder("0");
                p.divForm.set_text("Div00");
                p.divForm.set_url("work::CST/BFH/CST001M00.xfdl");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrollbarsize("0");
                p.divForm.move("20","0",null,null,"-40","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,700,this,
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
            this._addPreloadList("fdl","work::CST/BFH/CST001M00.xfdl");
        };
        
        // User Script
        this.registerScript("CST001P04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST001P04.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCurDate = this.gfnGetDate();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	switch(svcId) {

        	default:
        		break;
        	}
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	this.fvBfhdCnsltnNo = this.getOwnerFrame().bfhdCnsltnNo;
        	this.divForm.form.divForm.form.fnGetParam(this.fvBfhdCnsltnNo);
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsChkList.addEventHandler("oncolumnchanged",this.dsChkList_oncolumnchanged,this);
            this.dsBfhdClsltn.addEventHandler("oncolumnchanged",this.dsBfhdClsltn_oncolumnchanged,this);
        };
        this.loadIncludeScript("CST001P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
