(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009M00");
            this.set_titletext("도면대출신청(서약서/보안서약서/ 자료관리서약서)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staSubTitle","30","110","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서약서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1100","110","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","30","110","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panForm","0","0","100.00%","901",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"div00\"/><PanelItem id=\"PanelItem03\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem04\" componentid=\"div01\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel01_02\"/><PanelItem id=\"PanelItem06\" componentid=\"div02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","70","100.00%","196",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","10","100%","80",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_value("■ 위 대출도면을 복제, 복사하지 않고 목적외 사용치 않을 것이며, 본 도면으로부터 알게 된 모든내용은 용도외 사용하지 않고 사용 후 \n즉시 파기하겠습니다. 이를 위반시에는 모든 책임을 질 것을 서약합니다.");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","0","50","100.00%","100",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staFlrplnLoanVwsAgreYn","80.00","218","100.00%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("도면대출 서약 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoFlrplnLoanVwsAgreYn","50.00","250","100.00%","31",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div00_form_rdoFlrplnLoanVwsAgreYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoFlrplnLoanVwsAgreYn_innerdataset", obj);
            div00_form_rdoFlrplnLoanVwsAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoFlrplnLoanVwsAgreYn_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","30.00","222","3000","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staFlrplnLoanVwsAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoFlrplnLoanVwsAgreYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","10","0","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("보안 서약서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1100","0","179","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle02","1360","180","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","336","100.00%","222",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","20","10","100%","108",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_value("■ 본인은 인천국제공항공사(입주자서비스센터)에서 제공하는 도면을 대출함에 있어 대출도면을 복제, 복사하지 않고 목적 외 사용치 않을 것을 서약하며, 본 도면으로부터 알게 된 모든 내용은 용도 외 사용하지 않고 공사 준공(완료) 이후 즉시 반납 및 폐기하겠습니다.\n■ 또한 업무상 지득한 중요기밀사항을 포함한 보안사항을 사전허가 없이 대출 중 또는 대출 종료 후에도 일체 타인에게 누설하지 않을 것과\n중요기밀사항을 누설하여 중대한 문제점을 야기하였을 경우에는 누설자가 처벌받음은 물론 어떠한 제재조치를 취하여도 이의를 제기하지 않을 것을 서약합니다.");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_00","0","49","100.00%","126",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea01\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staScrtyVwsAgreYn","700.00","486","100.00%","46",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("도면대출 서약 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoScrtyVwsAgreYn","650.00","519","100.00%","31",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div01_form_rdoScrtyVwsAgreYn_innerdataset = new nexacro.NormalDataset("div01_form_rdoScrtyVwsAgreYn_innerdataset", obj);
            div01_form_rdoScrtyVwsAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdoScrtyVwsAgreYn_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","459.00","486","300","86",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staScrtyVwsAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoScrtyVwsAgreYn\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Panel("pan02_00","439","486","100.00%","96",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("자료관리 서약서");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","1100","0","179","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","0","0","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div02","0","670","100.00%","231",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div02");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","20","10","96.88%","130",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_value("■ 본인은 상업시설/업무용시설의 임대차계약 관련하여 상기 자료를 인수,인계하는 데 있어 \"자료에 대한 보안관리\" 에 대한  다음 사항을 준수할 것을 엄숙히 서약합니다.- 임대계약에 관한 시설물 설치(변경) 및 원상회복 완료(퇴거) 시 제공한/제공받은 자료를 전량 파기한다.\n- 도면관련 자료는 인터넷 웹하드,P2P 등 인터넷 자료공유사이트 및 개인메일함에 저장을 금지하고 용역 발주기관과 용역업체간 전자우편을 이용해 자료 전송이 필요한 경우에는 자체 전자우편을 이용, 첨부자료 암호화 후 수발신한다.   (※ 단, 대외비 이상의 비밀은 전자우편으로 송수신 금지)\n- 시설물 설치(변경) 및 원상회복 수행으로 생산되는 산출물 및 기록은 보안담당관이 인가하지 않은 비인가자에게 제공,대여,열람하지 아니한다.");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("Panel00_02_01","0","46","100.00%","138",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00_01\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staDataMngVwsAgreYn","69.00","823","100.00%","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_text("도면대출 서약 동의 여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div02.addChild(obj.name, obj);

            obj = new Radio("rdoDataMngVwsAgreYn","209.00","850","100.00%","31",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var div02_form_rdoDataMngVwsAgreYn_innerdataset = new nexacro.NormalDataset("div02_form_rdoDataMngVwsAgreYn_innerdataset", obj);
            div02_form_rdoDataMngVwsAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div02_form_rdoDataMngVwsAgreYn_innerdataset);
            obj.set_text("신청자정보와동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","128.00","813","300","86",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staDataMngVwsAgreYn\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoDataMngVwsAgreYn\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("pan02_01","109","813","100.00%","93",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/></Contents>");
            this.div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea01.set_taborder("0");
                p.TextArea01.set_value("■ 본인은 인천국제공항공사(입주자서비스센터)에서 제공하는 도면을 대출함에 있어 대출도면을 복제, 복사하지 않고 목적 외 사용치 않을 것을 서약하며, 본 도면으로부터 알게 된 모든 내용은 용도 외 사용하지 않고 공사 준공(완료) 이후 즉시 반납 및 폐기하겠습니다.\n■ 또한 업무상 지득한 중요기밀사항을 포함한 보안사항을 사전허가 없이 대출 중 또는 대출 종료 후에도 일체 타인에게 누설하지 않을 것과\n중요기밀사항을 누설하여 중대한 문제점을 야기하였을 경우에는 누설자가 처벌받음은 물론 어떠한 제재조치를 취하여도 이의를 제기하지 않을 것을 서약합니다.");
                p.TextArea01.set_readonly("true");
                p.TextArea01.move("20","10","100%","108",null,null);

                p.Panel00_02_00.set_taborder("1");
                p.Panel00_02_00.set_fittocontents("height");
                p.Panel00_02_00.set_spacing("10px 20px 10px 20px");
                p.Panel00_02_00.move("0","49","100.00%","126",null,null);

                p.staScrtyVwsAgreYn.set_taborder("2");
                p.staScrtyVwsAgreYn.set_text("도면대출 서약 동의 여부");
                p.staScrtyVwsAgreYn.set_cssclass("sta_WF_Label_E");
                p.staScrtyVwsAgreYn.move("700.00","486","100.00%","46",null,null);

                p.rdoScrtyVwsAgreYn.set_taborder("3");
                p.rdoScrtyVwsAgreYn.set_innerdataset(div01_form_rdoScrtyVwsAgreYn_innerdataset);
                p.rdoScrtyVwsAgreYn.set_codecolumn("codecolumn");
                p.rdoScrtyVwsAgreYn.set_datacolumn("datacolumn");
                p.rdoScrtyVwsAgreYn.set_direction("vertical");
                p.rdoScrtyVwsAgreYn.set_fittocontents("width");
                p.rdoScrtyVwsAgreYn.set_value("0");
                p.rdoScrtyVwsAgreYn.set_index("0");
                p.rdoScrtyVwsAgreYn.move("650.00","519","100.00%","31",null,null);

                p.Panel02_00_00.set_taborder("4");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.move("459.00","486","300","86",null,null);

                p.pan02_00.set_taborder("5");
                p.pan02_00.set_horizontalgap("20");
                p.pan02_00.set_flexcrossaxiswrapalign("start");
                p.pan02_00.set_flexwrap("wrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_verticalgap("0");
                p.pan02_00.set_spacing("0px 20px 10px 20px");
                p.pan02_00.set_cssclass("pal_WF_DtlBg");
                p.pan02_00.move("439","486","100.00%","96",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div01.form
            obj = new Layout("mobile","",0,0,this.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div02.form
            obj = new Layout("default","",0,0,this.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00_01.set_taborder("0");
                p.TextArea00_01.set_value("■ 본인은 상업시설/업무용시설의 임대차계약 관련하여 상기 자료를 인수,인계하는 데 있어 \"자료에 대한 보안관리\" 에 대한  다음 사항을 준수할 것을 엄숙히 서약합니다.- 임대계약에 관한 시설물 설치(변경) 및 원상회복 완료(퇴거) 시 제공한/제공받은 자료를 전량 파기한다.\n- 도면관련 자료는 인터넷 웹하드,P2P 등 인터넷 자료공유사이트 및 개인메일함에 저장을 금지하고 용역 발주기관과 용역업체간 전자우편을 이용해 자료 전송이 필요한 경우에는 자체 전자우편을 이용, 첨부자료 암호화 후 수발신한다.   (※ 단, 대외비 이상의 비밀은 전자우편으로 송수신 금지)\n- 시설물 설치(변경) 및 원상회복 수행으로 생산되는 산출물 및 기록은 보안담당관이 인가하지 않은 비인가자에게 제공,대여,열람하지 아니한다.");
                p.TextArea00_01.set_readonly("true");
                p.TextArea00_01.move("20","10","96.88%","130",null,null);

                p.Panel00_02_01.set_taborder("1");
                p.Panel00_02_01.set_fittocontents("height");
                p.Panel00_02_01.set_spacing("10px 20px 10px 20px");
                p.Panel00_02_01.move("0","46","100.00%","138",null,null);

                p.staDataMngVwsAgreYn.set_taborder("2");
                p.staDataMngVwsAgreYn.set_text("도면대출 서약 동의 여부");
                p.staDataMngVwsAgreYn.set_cssclass("sta_WF_Label_E");
                p.staDataMngVwsAgreYn.move("69.00","823","100.00%","46",null,null);

                p.rdoDataMngVwsAgreYn.set_taborder("3");
                p.rdoDataMngVwsAgreYn.set_innerdataset(div02_form_rdoDataMngVwsAgreYn_innerdataset);
                p.rdoDataMngVwsAgreYn.set_codecolumn("codecolumn");
                p.rdoDataMngVwsAgreYn.set_datacolumn("datacolumn");
                p.rdoDataMngVwsAgreYn.set_direction("vertical");
                p.rdoDataMngVwsAgreYn.set_fittocontents("width");
                p.rdoDataMngVwsAgreYn.set_value("0");
                p.rdoDataMngVwsAgreYn.set_index("0");
                p.rdoDataMngVwsAgreYn.move("209.00","850","100.00%","31",null,null);

                p.Panel02_00_01.set_taborder("4");
                p.Panel02_00_01.set_type("vertical");
                p.Panel02_00_01.set_flexgrow("1");
                p.Panel02_00_01.move("128.00","813","300","86",null,null);

                p.pan02_01.set_taborder("5");
                p.pan02_01.set_horizontalgap("20");
                p.pan02_01.set_flexcrossaxiswrapalign("start");
                p.pan02_01.set_flexwrap("wrap");
                p.pan02_01.set_fittocontents("height");
                p.pan02_01.set_verticalgap("0");
                p.pan02_01.set_spacing("0px 20px 10px 20px");
                p.pan02_01.set_cssclass("pal_WF_DtlBg");
                p.pan02_01.move("109","813","100.00%","93",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div02.form
            obj = new Layout("mobile","",0,0,this.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("도면대출신청(서약서/보안서약서/ 자료관리서약서)");

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("서약서");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("30","110","100%","50",null,null);

                p.Panel00_00.set_taborder("1");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.move("1100","110","209","50",null,null);

                p.panTitle.set_taborder("2");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("30","110","100.00%","70",null,null);

                p.panForm.set_taborder("3");
                p.panForm.set_fittocontents("height");
                p.panForm.set_type("vertical");
                p.panForm.move("0","0","100.00%","901",null,null);

                p.div00.set_taborder("4");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("0","70","100.00%","196",null,null);

                p.staSubTitle00.set_taborder("5");
                p.staSubTitle00.set_text("보안 서약서");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("0","0","100%","50",null,null);

                p.Panel00_01.set_taborder("6");
                p.Panel00_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.set_flexmainaxisalign("end");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_spacing("0px 10px 0px 10px");
                p.Panel00_01.move("1100","0","179","50",null,null);

                p.panTitle02.set_taborder("7");
                p.panTitle02.set_flexcrossaxisalign("end");
                p.panTitle02.set_fittocontents("none");
                p.panTitle02.set_minheight("70");
                p.panTitle02.set_maxheight("");
                p.panTitle02.move("1360","180","100.00%","70",null,null);

                p.div01.set_taborder("8");
                p.div01.set_text("div01");
                p.div01.set_fittocontents("height");
                p.div01.move("0","336","100.00%","222",null,null);

                p.staSubTitle01.set_taborder("9");
                p.staSubTitle01.set_text("자료관리 서약서");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("0","0","100%","50",null,null);

                p.Panel00_03.set_taborder("10");
                p.Panel00_03.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_03.set_flexcrossaxisalign("center");
                p.Panel00_03.set_flexmainaxisalign("end");
                p.Panel00_03.set_horizontalgap("10");
                p.Panel00_03.set_spacing("0px 10px 0px 10px");
                p.Panel00_03.move("1100","0","179","50",null,null);

                p.Panel01_02.set_taborder("11");
                p.Panel01_02.set_fittocontents("none");
                p.Panel01_02.set_flexcrossaxisalign("end");
                p.Panel01_02.set_minheight("70");
                p.Panel01_02.set_maxheight("");
                p.Panel01_02.move("0","0","100.00%","70",null,null);

                p.div02.set_taborder("12");
                p.div02.set_text("div02");
                p.div02.set_fittocontents("height");
                p.div02.move("0","670","100.00%","231",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,600,this,
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
            obj = new BindItem("item0","div00.form.rdoFlrplnLoanVwsAgreYn","value","dsCadMaster","flrplnLoanVwsAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01.form.rdoScrtyVwsAgreYn","value","dsCadMaster","scrtyVwsAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div02.form.rdoDataMngVwsAgreYn","value","dsCadMaster","dataMngVwsAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST009M00_04.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST009M00_04.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/11
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/11			An							최초생성
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
            this.addEventHandler("onload",this.accordionmenu_onload,this);
        };
        this.loadIncludeScript("CST009M00_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
