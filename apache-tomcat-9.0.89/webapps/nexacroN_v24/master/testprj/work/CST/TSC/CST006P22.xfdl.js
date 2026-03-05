(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST006P22");
            this.set_titletext("서비스별 작업신고서 연결 가능 단계 확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,594);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grid00","20","20",null,"486","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"서비스명\"/><Cell col=\"1\" colspan=\"3\" text=\"단계 명\"/><Cell col=\"4\" text=\"연결 가능여부\"/></Band><Band id=\"body\"><Cell rowspan=\"6\" text=\"시설물&#13;&#10;설치(변경)\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D1. 준공검사확인\"/><Cell col=\"2\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D4. 준공검사요청\"/><Cell col=\"3\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D2. 관련부서처리\"/><Cell col=\"4\" rowspan=\"3\" textAlign=\"center\" text=\"연결가능\" cssclass=\"CellTxtBlue\"/><Cell row=\"1\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D3. 준공검사\"/><Cell row=\"1\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D5. 신청자조치사항보완\"/><Cell row=\"1\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D6. 관련부서처리\"/><Cell row=\"2\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D31. 조건부확인\"/><Cell row=\"2\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"72D7. 도면 및 서류 최종확인\"/><Cell row=\"2\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"-\"/><Cell row=\"3\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7211. 신청서작성\"/><Cell row=\"3\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7212. 신청서보완\"/><Cell row=\"3\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7213. 신청서보완\"/><Cell row=\"3\" col=\"4\" rowspan=\"3\" textAlign=\"center\" text=\"연결 불가\" cssclass=\"CellTxtRed\"/><Cell row=\"4\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7221. 담당자 접수\"/><Cell row=\"4\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7261. 서류심사확인\"/><Cell row=\"4\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7262. 관련부서처리\"/><Cell row=\"5\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7263. 착공승인검토\"/><Cell row=\"5\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7264. 관련부서처리\"/><Cell row=\"5\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"-\"/><Cell row=\"6\" rowspan=\"4\" text=\"원상회복(퇴거)\" textAlign=\"center\"/><Cell row=\"6\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"7364. 원상회복확인요청\"/><Cell row=\"6\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"73D1. 원상회복확인\"/><Cell row=\"6\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"73D4. 신청자조치사항보완\"/><Cell row=\"6\" col=\"4\" rowspan=\"2\" textAlign=\"center\" text=\"연결가능\" cssclass=\"CellTxtBlue\"/><Cell row=\"7\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"73D2. 관련부서처리\"/><Cell row=\"7\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"73D3. 검토 및 심사\"/><Cell row=\"7\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum04\" text=\"73D5. 조건부완료\"/><Cell row=\"8\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7311. 신청서작성\"/><Cell row=\"8\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7312. 신청서보완\"/><Cell row=\"8\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7313. 담당자 접수\"/><Cell row=\"8\" col=\"4\" rowspan=\"2\" textAlign=\"center\" text=\"연결 불가\" cssclass=\"CellTxtRed\"/><Cell row=\"9\" col=\"1\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7361. 착공승인검토\"/><Cell row=\"9\" col=\"2\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7362. 관련부서처리\"/><Cell row=\"9\" col=\"3\" textAlign=\"center\" cssclass=\"CellSum03\" text=\"7363. 검토 및 승인\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","grid00:4",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'#f00000\'>연결 불가 단계</fc>에서 작업신고서 신고가 필요할 경우 입주자서비스 센터와 <fc v=\'#1e4ebe\'>기 협의한 후</fc> 작업여부 [아니오] 선택 후 작성하시길 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","Static00:4",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시설물 설치(변경) 및 원상회복(퇴거) 신청서가 <fc v=\'#f00000\'>만족도조사 및 종료처리 된 경우 연결하실 수 없습니다.</fc>");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1000,594,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("서비스별 작업신고서 연결 가능 단계 확인");

                p.grid00.set_taborder("0");
                p.grid00.set_fillareatype("allrow");
                p.grid00.set_autofittype("col");
                p.grid00.move("20","20",null,"486","20",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("<fc v=\'#f00000\'>연결 불가 단계</fc>에서 작업신고서 신고가 필요할 경우 입주자서비스 센터와 <fc v=\'#1e4ebe\'>기 협의한 후</fc> 작업여부 [아니오] 선택 후 작성하시길 바랍니다.");
                p.Static00.set_fittocontents("height");
                p.Static00.set_cssclass("sta_WF_Des");
                p.Static00.set_usedecorate("true");
                p.Static00.move("20","grid00:4",null,"30","20",null);

                p.Static00_00.set_taborder("2");
                p.Static00_00.set_text("시설물 설치(변경) 및 원상회복(퇴거) 신청서가 <fc v=\'#f00000\'>만족도조사 및 종료처리 된 경우 연결하실 수 없습니다.</fc>");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.set_cssclass("sta_WF_Des");
                p.Static00_00.set_usedecorate("true");
                p.Static00_00.move("20","Static00:4",null,"30","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,604,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grid00.set_autofittype("none");
                p.grid00.move("20","20",null,"496","20",null);
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
        this.registerScript("CST006P22.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CST006P22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
