(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S35");
            this.set_titletext("개인정보 수집〮이용 동의");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"orgnlFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"fileSz\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngSno\" type=\"STRING\" size=\"256\"/><Column id=\"flpth\" type=\"STRING\" size=\"256\"/><Column id=\"colId\" type=\"STRING\" size=\"256\"/><Column id=\"fileUniqueId\" type=\"STRING\" size=\"256\"/><Column id=\"atflMngNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"fullName\">Iaad010101 [PDF, 328KB]</Col><Col id=\"fileSz\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("개인정보 수집〮이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_01_00","0","50","100.00%","360",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인정보 수집〮이용 동의");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20.00","10","100%","210",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("5");
            obj.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_readonly("true");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100.00%","243",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("4");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("1");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","305","86",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio01\"/></Contents>");
            this.div00_01_01_00.addChild(obj.name, obj);

            obj = new Radio("Radio01","74","77","100%","40",null,null,null,null,null,null,this.div00_01_01_00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_01_01_00_form_Radio01_innerdataset = new nexacro.NormalDataset("div00_01_01_00_form_Radio01_innerdataset", obj);
            div00_01_01_00_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_01_00_form_Radio01_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00_01_01_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_01_00.form
            obj = new Layout("default","",0,0,this.div00_01_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_taborder("5");
                p.TextArea00.set_value("1. 개인정보의 수집ㆍ이용 목적\n  인계인수 신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n2. 수집하려는 개인정보의 항목\n  필수항목 : 총괄책임자 및 시설관리책임자 성명, 총괄책임자 및 시설관리책임자 휴대폰번호\n3. 개인정보의 보유 및 이용 기간\n  계약종료 후 3년, 회원탈퇴 시까지\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n  귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 인계인수 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.TextArea00.set_readonly("true");
                p.TextArea00.move("20.00","10","100%","210",null,null);

                p.Panel02.set_taborder("4");
                p.Panel02.set_spacing("10px 20px 0px 20px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","0","100.00%","243",null,null);

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
                p.staLabel00.set_text("개인정보 수집(필수) 동의여부");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","305","86",null,null);

                p.Radio01.set_taborder("3");
                p.Radio01.set_fittocontents("width");
                p.Radio01.set_innerdataset(div00_01_01_00_form_Radio01_innerdataset);
                p.Radio01.set_codecolumn("codecolumn");
                p.Radio01.set_datacolumn("datacolumn");
                p.Radio01.set_direction("vertical");
                p.Radio01.set_value("0");
                p.Radio01.set_index("0");
                p.Radio01.move("74","77","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_01_00.form
            obj = new Layout("mobile","",0,0,this.div00_01_01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_01_01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,410,this,function(p){});
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
        this.loadIncludeScript("CST002S35.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
