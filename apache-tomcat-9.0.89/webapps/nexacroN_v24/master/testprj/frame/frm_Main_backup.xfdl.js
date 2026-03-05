(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Main");
            this.set_titletext("Form_Main");
            this.set_scrollbartype("none auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1440,1250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBbsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupTopSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupLeftSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupWdthSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupVrtcSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"popupEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsInqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\">2024년 인천국제공항 Landside 토목시설...</Col><Col id=\"bbsNm\">2024년 인천국제공항 Landside 토목시설...</Col></Row><Row><Col id=\"bbsId\">정보통신서비스 이용약관(2024.01.01계정)</Col><Col id=\"bbsNm\">정보통신서비스 이용약관(2024.01.01계정)</Col></Row><Row><Col id=\"bbsId\">입주자용 종량제봉투 판매료 조정 등 변경사항 알림</Col><Col id=\"bbsNm\">입주자용 종량제봉투 판매료 조정 등 변경사항 알림</Col></Row><Row><Col id=\"bbsId\">스카이패스티벌(9.16~17) 행사 연기 알림</Col><Col id=\"bbsNm\">스카이패스티벌(9.16~17) 행사 연기 알림</Col></Row><Row><Col id=\"bbsId\">제목신규 사이버인재개발원(LMS) 서비스 오픈에...</Col><Col id=\"bbsNm\">제목신규 사이버인재개발원(LMS) 서비스 오픈에...</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsData", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupTopSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupLeftSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupWdthSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupVrtcSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"popupEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsInqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\">입주자 도면제출 양식자료</Col><Col id=\"bbsNm\">입주자 도면제출 양식자료</Col></Row><Row><Col id=\"bbsId\">이동지역 업체등록 절차 안내</Col><Col id=\"bbsNm\">이동지역 업체등록 절차 안내</Col></Row><Row><Col id=\"bbsId\">이동지역안전지침(Rev.22)</Col><Col id=\"bbsNm\">이동지역안전지침(Rev.22)</Col></Row><Row><Col id=\"bbsId\">양식(입주자 시설공사 시공검사서(ITP))</Col><Col id=\"bbsNm\">양식(입주자 시설공사 시공검사서(ITP))</Col></Row><Row><Col id=\"bbsId\">인천국제공항 전기사용약관 제13차 개정본</Col><Col id=\"bbsNm\">인천국제공항 전기사용약관 제13차 개정본</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBbsFaq", this);
            obj._setContents("<ColumnInfo><Column id=\"bbsId\" type=\"STRING\" size=\"256\"/><Column id=\"bbsNm\" type=\"STRING\" size=\"256\"/><Column id=\"bbsCn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupYn\" type=\"STRING\" size=\"256\"/><Column id=\"popupTopSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupLeftSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupWdthSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupVrtcSz\" type=\"STRING\" size=\"256\"/><Column id=\"popupBgngDt\" type=\"STRING\" size=\"256\"/><Column id=\"popupEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"bbsTy\" type=\"STRING\" size=\"256\"/><Column id=\"bbsInqCnt\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"srvcSe\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bbsId\">ID신청 방법 및 이용가능 서비스</Col><Col id=\"bbsNm\">ID신청 방법 및 이용가능 서비스</Col></Row><Row><Col id=\"bbsId\">시설운영-작업신고서, 시설물설치(변...</Col><Col id=\"bbsNm\">시설운영-작업신고서, 시설물설치(변...</Col></Row><Row><Col id=\"bbsId\">보안-보호구역위해물폼</Col><Col id=\"bbsNm\">보안-보호구역위해물폼</Col></Row><Row><Col id=\"bbsId\">전기-전기신청, 전기소모품교체, 난로...</Col><Col id=\"bbsNm\">전기-전기신청, 전기소모품교체, 난로...</Col></Row><Row><Col id=\"bbsId\">수도-수도신청</Col><Col id=\"bbsNm\">수도-수도신청</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet00", this);
            obj._setContents("<ColumnInfo><Column id=\"MenuImg\" type=\"STRING\" size=\"256\"/><Column id=\"MenuNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MenuNm\">인수인계</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet01", this);
            obj._setContents("<ColumnInfo><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"건수\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">접수</Col><Col id=\"건수\">0</Col></Row><Row><Col id=\"구분\">진행중</Col><Col id=\"건수\">0</Col></Row><Row><Col id=\"구분\">완료</Col><Col id=\"건수\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dataSet02", this);
            obj._setContents("<ColumnInfo><Column id=\"신청일시\" type=\"STRING\" size=\"256\"/><Column id=\"신청번호\" type=\"STRING\" size=\"256\"/><Column id=\"서비스구분\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"진행현황\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"제목\">-</Col><Col id=\"진행현황\">접수</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"제목\">-</Col><Col id=\"진행현황\">접수</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"제목\">일반직업/계류장/기동지역 토목작업</Col><Col id=\"진행현황\">진행중</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"진행현황\">접수</Col><Col id=\"제목\">-</Col></Row><Row><Col id=\"신청일시\">20240507</Col><Col id=\"신청번호\">AIS2111_01234</Col><Col id=\"서비스구분\">차량정비 반입신청</Col><Col id=\"진행현황\">접수</Col><Col id=\"제목\">-</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntProcessList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntProcessMenuList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcntProcessMenuList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","288","92","376","129",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1440,1250,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Main");
                p.set_scrollbartype("none auto");

                p.Button00.set_taborder("0");
                p.Button00.set_text("Button00");
                p.Button00.move("288","92","376","129",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,1250,this,
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
        this.registerScript("frm_Main.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("frm_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
