(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST016M00");
            this.set_titletext("개인정보동의(전산실작업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,427);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100.00%","696",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"div01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","90","86","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인정보 수집 이용 동의");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","780","86","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","90","86","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1180.00","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1201.00","10","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00","118","148","100.00%","191",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20.00","10","100%","100",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_value("1. 개인정보의 수집 . 이용 목적\n보안구역위해물품 사용신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n\n2. 수집하려는 개인정보의 항목\n필수항목 : 주관사 회사명, 주관사 부서명 , 주관사관리책임자(정) , 주관사 휴대전화번호(정) , 주관사관리책임자(부) , 주관사 휴대전화번호(부) , 주관사회사번호,\n실제사용자 회사명, 실제사용자 관리책임자(정) , 실제사용자 휴대전화번호(정) , 실제사용자 관리책임자(부) , 실제사용자 휴대전화번호(부) , 실제사용자 회사번호\n\n3. 개인정보의 보유 및 이용 기간\n계약종료 후 3년, 회원탈퇴 시 까지\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 보안구역위해물품 승인요청서 작성건의 신청을 할 수 없습니다.");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","1188","528","100.00%","102",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("개인정보 수집(필수) 동의여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoPrvcClctEsntlAgreYn","0","46","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_form_rdoPrvcClctEsntlAgreYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoPrvcClctEsntlAgreYn_innerdataset", obj);
            div00_form_rdoPrvcClctEsntlAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoPrvcClctEsntlAgreYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","0","100%","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoPrvcClctEsntlAgreYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00","1188","630","100.00%","89",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","1290","345","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("정보보호서약서 및 개인 정보동의서 등록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","2480","353","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","2525","353","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","2400","345","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1290","325","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("11");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div01","270","493","100.00%","365",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","365",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panGrdBtn\"/><PanelItem id=\"PanelItem02\" componentid=\"grdCmproIncmgOprtrNmMst\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Button("Button00","0","20","120","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","690","20","100%","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grdCmproIncmgOprtrNmMst","0","20","100.00%","300",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsCmproIncmgOprtrNmMst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"성명\" cssclass=\"CellE\"/><Cell col=\"2\" text=\"생년월일\" cssclass=\"CellE\"/><Cell col=\"3\" text=\"휴대전화번호\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"등록일자\"/><Cell col=\"6\" text=\"동의시작일자\"/><Cell col=\"7\" text=\"동의종료일자\"/><Cell col=\"8\" text=\"서약시작일자\"/><Cell col=\"9\" text=\"서약종료일자\"/><Cell col=\"10\" colspan=\"2\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:utztnAgreRgtr\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:brdt\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"center\" maskedittype=\"string\" maskeditformat=\"####-##-##\" maskeditlimitbymask=\"integer\" maskeditmaskchar=\" \"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:mblTelno\" textAlign=\"center\" maskedittype=\"string\" maskeditformat=\"###-####-####\" maskeditlimitbymask=\"integer\" maskeditmaskchar=\" \"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:regYmd\" displaytype=\"mask\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"6\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:agreBgngDt\"/><Cell col=\"7\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:agreEndDt\"/><Cell col=\"8\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:vwsBgngDt\"/><Cell col=\"9\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:vwsEndDt\"/><Cell col=\"10\" displaytype=\"text\" cssclass=\"CellMerge,CellLink\" text=\"bind:atflMngInfo\"/><Cell col=\"11\" text=\"파일등록\" displaytype=\"buttoncontrol\" cssclass=\"CellEnd,CellFileUp\" edittype=\"button\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.TextArea00.set_taborder("0");
                p.TextArea00.set_value("1. 개인정보의 수집 . 이용 목적\n보안구역위해물품 사용신청 시 작성건의 접수와 처리를 위해 개인정보를 수집목적에 필요한 최소한의 범위 내에서 수집하고 있습니다.\n\n2. 수집하려는 개인정보의 항목\n필수항목 : 주관사 회사명, 주관사 부서명 , 주관사관리책임자(정) , 주관사 휴대전화번호(정) , 주관사관리책임자(부) , 주관사 휴대전화번호(부) , 주관사회사번호,\n실제사용자 회사명, 실제사용자 관리책임자(정) , 실제사용자 휴대전화번호(정) , 실제사용자 관리책임자(부) , 실제사용자 휴대전화번호(부) , 실제사용자 회사번호\n\n3. 개인정보의 보유 및 이용 기간\n계약종료 후 3년, 회원탈퇴 시 까지\n\n4. 동의를 거부할 권리와 거부에 따른 불이익 내용\n귀하는 개인정보 수집에 거부할 권리가 있으며, 필수항목 수집을 거부할 경우 보안구역위해물품 승인요청서 작성건의 신청을 할 수 없습니다.");
                p.TextArea00.set_readonly("true");
                p.TextArea00.move("20.00","10","100%","100",null,null);

                p.Panel02.set_taborder("1");
                p.Panel02.set_spacing("10px 20px 0px 20px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("1188","528","100.00%","102",null,null);

                p.staLabel00.set_taborder("2");
                p.staLabel00.set_text("개인정보 수집(필수) 동의여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("0","0","100%","46",null,null);

                p.rdoPrvcClctEsntlAgreYn.set_taborder("3");
                p.rdoPrvcClctEsntlAgreYn.set_fittocontents("none");
                p.rdoPrvcClctEsntlAgreYn.set_innerdataset(div00_form_rdoPrvcClctEsntlAgreYn_innerdataset);
                p.rdoPrvcClctEsntlAgreYn.set_codecolumn("codecolumn");
                p.rdoPrvcClctEsntlAgreYn.set_datacolumn("datacolumn");
                p.rdoPrvcClctEsntlAgreYn.set_direction("horizontal");
                p.rdoPrvcClctEsntlAgreYn.set_columncount("-1");
                p.rdoPrvcClctEsntlAgreYn.set_rowcount("-1");
                p.rdoPrvcClctEsntlAgreYn.set_value("0");
                p.rdoPrvcClctEsntlAgreYn.set_index("0");
                p.rdoPrvcClctEsntlAgreYn.move("0","46","100%","40",null,null);

                p.Panel00_00_00.set_taborder("4");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","0","100%","86",null,null);

                p.pan00.set_taborder("5");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("1188","630","100.00%","89",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.move("0","0","100.00%","365",null,null);

                p.btnGrdAdd.set_taborder("1");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDel.set_taborder("2");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.Button00.set_taborder("3");
                p.Button00.set_text("양식다운로드");
                p.Button00.set_cssclass("btn_WF_GrdDw");
                p.Button00.set_fittocontents("width");
                p.Button00.move("0","20","120","34",null,null);

                p.panGrdBtn.set_taborder("4");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("10px 0px 0px");
                p.panGrdBtn.move("690","20","100%","44",null,null);

                p.grdCmproIncmgOprtrNmMst.set_taborder("5");
                p.grdCmproIncmgOprtrNmMst.set_binddataset("dsCmproIncmgOprtrNmMst");
                p.grdCmproIncmgOprtrNmMst.move("0","20","100.00%","300",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div01.form
            obj = new Layout("Layout0","",0,0,this.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,427,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("개인정보동의(전산실작업)");

                p.Panel00.set_taborder("0");
                p.Panel00.set_type("vertical");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0","100.00%","696",null,null);

                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_text("개인정보 수집 이용 동의");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("90","86","100%","50",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.move("780","86","194","50",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.set_minheight("70");
                p.Panel01.set_maxheight("");
                p.Panel01.move("90","86","100%","70",null,null);

                p.Button01.set_taborder("4");
                p.Button01.set_cssclass("btn_WF_ACPlus");
                p.Button01.set_visible("false");
                p.Button01.move("1180.00","6","34","34",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_cssclass("btn_WF_ACMinus");
                p.Button00.move("1201.00","10","34","34",null,null);

                p.div00.set_taborder("6");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("118","148","100.00%","191",null,null);

                p.staSubTitle00.set_taborder("7");
                p.staSubTitle00.set_text("정보보호서약서 및 개인 정보동의서 등록");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("1290","345","100%","50",null,null);

                p.Button00_00.set_taborder("8");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("2480","353","34","34",null,null);

                p.Button01_00.set_taborder("9");
                p.Button01_00.set_cssclass("btn_WF_ACPlus");
                p.Button01_00.set_visible("false");
                p.Button01_00.move("2525","353","34","34",null,null);

                p.Panel00_01.set_taborder("10");
                p.Panel00_01.set_spacing("0px 10px 0px 10px");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.set_flexmainaxisalign("end");
                p.Panel00_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_01.move("2400","345","194","50",null,null);

                p.Panel01_00.set_taborder("11");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.set_minheight("70");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.move("1290","325","100.00%","70",null,null);

                p.div01.set_taborder("12");
                p.div01.set_text("div01");
                p.div01.set_fittocontents("height");
                p.div01.move("270","493","100.00%","365",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,427,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.move("0","0","100.00%","698",null,null);
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
        this.addIncludeScript("CST016M03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST016M03.xfdl", function() {
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
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	this.dsCmproIncmgOprtrNmMst = this.lookup("dsCmproIncmgOprtrNmMst");
        	this.RaonkUpload 			= this.lookup("RaonkUpload");				//Raonk Upload
        	this.dsFile					= this.lookup("dsFile");					//첨부파일 컬럼 id
        	this.dsAtfl 				= this.lookup("dsAtfl");					//첨부파일 목록
        	this.dsAtflDn 				= this.lookup("dsAtflDn");					//다운로드 첨부파일 정보
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

        /**************************************************************************
         * @name : divGrd_btnGrdAdd_onclick
         * @description : 추가버튼
         ***************************************************************************/
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	this.dsCmproIncmgOprtrNmMst.addRow();
        	this.dsCmproIncmgOprtrNmMst.setColumn(this.dsCmproIncmgOprtrNmMst.rowposition, "agreBgngDt", this.gfnGetDate());
        	this.dsCmproIncmgOprtrNmMst.setColumn(this.dsCmproIncmgOprtrNmMst.rowposition, "vwsBgngDt" , this.gfnGetDate());
        	this.dsCmproIncmgOprtrNmMst.setColumn(this.dsCmproIncmgOprtrNmMst.rowposition, "regYmd"    , this.gfnGetDate());
        };

        /**************************************************************************
         * @name : divGrd_btnGrdDel_onclick
         * @description : 삭제버튼
         ***************************************************************************/
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	this.dsCmproIncmgOprtrNmMst.deleteRow(e.rowposition);
        };

        /**************************************************************************
         * @name : divGrd_grdCmproIncmgOprtrNmMst_oncellclick
         * @description :
         ***************************************************************************/
        this.divGrd_grdCmproIncmgOprtrNmMst_oncellclick = function(obj,e)
        {
        	var utztnAgreRgtr = this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "utztnAgreRgtr");
        	var brdt          = this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "brdt");
        	var mblTelno 	  = this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "mblTelno");
        	var colId         = "";

        	if(e.fromobject.name == "cellbutton") {
        		if(!this.gfnIsNull(utztnAgreRgtr) && !this.gfnIsNull(brdt) && !this.gfnIsNull(mblTelno)) {
        			//생년월일_전화번호
        			this.dsCmproIncmgOprtrNmMst.setColumn(e.row, "colId", brdt+"_"+mblTelno);

        			//첨부파일 정보
        			this.RaonkUpload.upatflinfo = {colid : this.dsCmproIncmgOprtrNmMst.getColumn(e.row, "colId")};
        			this.RaonkUpload.OpenFileDialog();
        		} else {
        			this.gfnAlertMsg("msg", "MSG_011", ["성명/생년월일/휴대전화번호를 먼저 입력하세요."]);
        			return;
        		}
        	}
        };
        //개인정보 수집 이용 동의
        this.Button00_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00.visible = true;
        	} else {
        		this.div00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00.form.resetScroll();
        };
        //정보보호서약서 및 개인 정보동의서 등록
        this.Button00_00_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div01.visible = true;
        	} else {
        		this.div01.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div01.form.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.div01.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.div01.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.div01.form.grdCmproIncmgOprtrNmMst.addEventHandler("oncellclick",this.divGrd_grdCmproIncmgOprtrNmMst_oncellclick,this);
        };
        this.loadIncludeScript("CST016M03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
