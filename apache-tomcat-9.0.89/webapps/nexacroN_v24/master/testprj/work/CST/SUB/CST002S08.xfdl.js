(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002M00_01");
            this.set_titletext("개인정보 수집〮이용 동의");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("개인정보 수집〮이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","114.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","158.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1077","0","202","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20.00","10","100%","170",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:0","100.00%","180",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","1240","86",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","Panel02:0","100.00%","96",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CST002S08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
