(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("REN007M01");
            this.set_titletext("임차확정등록 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"currentPageNo\" type=\"STRING\" size=\"256\"/><Column id=\"recordCountPerPage\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"recordCountPerPage\">10</Col><Col id=\"currentPageNo\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"rcptNo\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRgstt\" type=\"STRING\" size=\"256\"/><Column id=\"pPrcrYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hireLohNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hireWtngNtfctnDt\" type=\"STRING\" size=\"256\"/><Column id=\"polSpceId\" type=\"STRING\" size=\"256\"/><Column id=\"bldgCd\" type=\"STRING\" size=\"256\"/><Column id=\"rmnmNo\" type=\"STRING\" size=\"256\"/><Column id=\"rntar\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hireRfsRsn\" type=\"STRING\" size=\"256\"/><Column id=\"ntfctnYn\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRegId\" type=\"STRING\" size=\"256\"/><Column id=\"hireYnRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"prgrsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"userSe\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPstnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBldgCd", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboHireYnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" type=\"STRING\" size=\"256\"/><Column id=\"datacolumn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">임차확정</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">임차거부</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,null,"60","60",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","100%","800",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","60","100.00%","100",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel00_03\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHirerNm","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","50","255","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHirerNm\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","417","62","255","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRcptNo\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel01_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHireYnRegDt","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","417","62","255","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHireYnRegDt\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","384","516","100%","650",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_type("horizontal");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grdList\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grdList","20","215","100%","100%",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsList");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"400\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"위치\" displaytype=\"normal\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"면적(m2)\"/><Cell col=\"4\" text=\"임차여부\"/><Cell col=\"5\" text=\"임차거부 사유\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:pstnCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCboPstnCd\" combocodecol=\"cdId\" combodatacol=\"cdNm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:bldgCd\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCboBldgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:rmnmNo\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rntar\" displaytype=\"text\" combotype=\"dropdown\" comboautoselect=\"true\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:hireYnCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboHireYnCd\" combocodecol=\"codecolumn\" combodatacol=\"datacolumn\" expr=\"hireYnCd == &apos;1&apos; ? &apos;임차확정&apos; : &apos;임차거부&apos;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:hireRfsRsn \" displaytype=\"text\" edittype=\"none\" maskedittype=\"string\" textAlign=\"center\" cssclass=\"CellEnd\" editmaxlength=\"100\"/></Band></Format></Formats>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Static("staLabel00_03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edtHireYnRegId","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","417","62","255","86",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtHireYnRegId\"/></Contents>");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Div("divBtn","0","10","100%","80",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Ck");
            this.divForm.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnCancel","200.00","365","110","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.divForm.form.Div00.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnSave","200.00","365","110","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_visible("true");
            this.divForm.form.Div00.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnInit","457.00","30","110","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_No");
            this.divForm.form.Div00.form.divBtn.addChild(obj.name, obj);

            obj = new Button("btnCnddNtfctn","1291","4","110","40",null,null,null,null,null,null,this.divForm.form.Div00.form.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("후보공간\r\n없음통보");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divForm.form.Div00.form.divBtn.addChild(obj.name, obj);

            obj = new Edit("edtRcptNo","384","58","100%","40",null,null,null,null,null,null,this.divForm.form.Div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.divForm.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div00.form.divBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnCancel.set_taborder("2");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("200.00","365","110","40",null,null);

                p.btnSave.set_taborder("0");
                p.btnSave.set_text("저장");
                p.btnSave.set_cssclass("btn_WF_Yes");
                p.btnSave.set_visible("true");
                p.btnSave.move("200.00","365","110","40",null,null);

                p.btnInit.set_taborder("1");
                p.btnInit.set_text("초기화");
                p.btnInit.set_cssclass("btn_WF_No");
                p.btnInit.move("457.00","30","110","40",null,null);

                p.btnCnddNtfctn.set_taborder("3");
                p.btnCnddNtfctn.set_text("후보공간\r\n없음통보");
                p.btnCnddNtfctn.set_cssclass("btn_WF_Yes");
                p.btnCnddNtfctn.set_fittocontents("width");
                p.btnCnddNtfctn.set_visible("false");
                p.btnCnddNtfctn.move("1291","4","110","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.Div00.form.divBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form.divBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div00.form.divBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            obj.set_spacing("10px 20px 10px 20px");
            this.divForm.form.Div00.form.divBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_horizontalgap("20");
                p.Panel00.set_flexcrossaxiswrapalign("start");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("0");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.move("0","60","100.00%","100",null,null);

                p.staLabel00_00.set_taborder("1");
                p.staLabel00_00.set_text("업체명");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edtHirerNm.set_taborder("2");
                p.edtHirerNm.set_readonly("true");
                p.edtHirerNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.move("20.00","50","255","86",null,null);

                p.Panel00_01.set_taborder("4");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("417","62","255","86",null,null);

                p.staLabel01_01.set_taborder("5");
                p.staLabel01_01.set_text("접수번호");
                p.staLabel01_01.set_cssclass("sta_WF_Label");
                p.staLabel01_01.move("10","98","100%","46",null,null);

                p.staLabel00_02.set_taborder("6");
                p.staLabel00_02.set_text("등록일자");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.move("10","98","100%","46",null,null);

                p.edtHireYnRegDt.set_taborder("7");
                p.edtHireYnRegDt.set_readonly("true");
                p.edtHireYnRegDt.move("10.00","158","100%","40",null,null);

                p.Panel00_02.set_taborder("8");
                p.Panel00_02.set_type("vertical");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.move("417","62","255","86",null,null);

                p.Panel01.set_taborder("9");
                p.Panel01.set_cssclass("pal_WF_DtlBg");
                p.Panel01.set_spacing("10px 20px 10px 20px");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_horizontalgap("20");
                p.Panel01.set_type("horizontal");
                p.Panel01.set_verticalgap("0");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_minheight("");
                p.Panel01.move("384","516","100%","650",null,null);

                p.grdList.set_taborder("10");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("none");
                p.grdList.move("20","215","100%","100%",null,null);

                p.staLabel00_03.set_taborder("12");
                p.staLabel00_03.set_text("등록자");
                p.staLabel00_03.set_cssclass("sta_WF_Label");
                p.staLabel00_03.move("10","98","100%","46",null,null);

                p.edtHireYnRegId.set_taborder("13");
                p.edtHireYnRegId.set_readonly("true");
                p.edtHireYnRegId.move("10.00","158","100%","40",null,null);

                p.Panel00_03.set_taborder("14");
                p.Panel00_03.set_type("vertical");
                p.Panel00_03.set_flexgrow("1");
                p.Panel00_03.move("417","62","255","86",null,null);

                p.divBtn.set_taborder("11");
                p.divBtn.set_text("Div00");
                p.divBtn.set_cssclass("div_WF_Ck");
                p.divBtn.move("0","10","100%","80",null,null);

                p.edtRcptNo.set_taborder("15");
                p.edtRcptNo.set_readonly("true");
                p.edtRcptNo.move("384","58","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_type("horizontal");
                p.Panel00.set_spacing("0px 10px 10px 10px");
                p.Panel00.move("0","56.713","100.00%","193",null,null);

                p.Panel01.set_spacing("0px 10px 10px 10px");
                p.Panel01.set_type("horizontal");
                p.Panel01.move("0","60","100.00%","231",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","0","100%","800",null,null);
            	}
            );
            obj.set_verticalgap("20");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.move("20","27.544","100%","745",null,null);

                p.Div01.move("0","Div00:50","100%","745",null,null);

                p.Div02.move("0","Div01:50","100%","176",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("30");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("임차확정등록 등록");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","divTitle:10",null,null,"60","60");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","60",null,null,"20","60");

                p.divTitle.move("0","0",null,"50","0",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","edtHireLohNo","value","dsList","hireLohNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.Div00.form.edtHirerNm","value","dsGet","bzentyNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div00.form.edtRcptNo","value","dsGet","rcptNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.Div00.form.edtHireYnRegDt","value","dsGet","hireYnRegDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.Div00.form.edtHireYnRegId","value","dsGet","hireYnRgstt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("REN007M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("REN007M01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	REN007M01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/10/22
        *  @Desction   ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/10/22			박영수						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;

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
        // 조회
        this.cfnSearch = function ()
        {
        	this.selectTransaction();
        };

        this.cfnClose = function (){};

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 조회
        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "ren/frs/selectHireCfmtnReg.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsGet=dsGet dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 저장
        this.updateTransaction = function()
        {
        	var strSvcId    = "update";
        	var strSvcUrl   = "ren/frs/updateHireCfmtnReg.do";
        	var inData      = "dsList=dsList:U ";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        // 후보공간없음통보
        this.cnddNtfctnTransaction = function()
        {
        	var strSvcId    = "cnddNtfctn";
        	var strSvcUrl   = "ren/frs/updateCnddSpceNoneNtfctn.do";
        	var inData      = "dsList=dsList:U ";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "_cfnComCdLoad_":
        			break;

        		case "select":
        			this.dsSearch.setColumn(0,"bzentyNm",this.objApp.gdsUser.getColumn(0, "userNm"));
        			break;

        		case "update":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg")]);

        			if (this.objApp.screenid == "Desktop_screen") {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        				this._gfnOpenMenu(cMenuId.substring(0,14),"",true);
        			} else {
        				this.close();
        			}

        			break;

        		case "cnddNtfctn":
        			this.gfnAlertMsg("msg", "MSG_007", [ this.objApp.getVariable("gvRetMsg") ]);
        			this.hireYnCdListTransaction();
        			break;
        	}
        };

        // 얼럿창 콜백 함수
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if (sPopupId == "update_confirm" && oRtn.result == "Y") {
        		this.dsList.setColumn(0, "rowSttsCd", "U");
        		this.updateTransaction();
        	}

        	if (sPopupId == "cnddNtfctn_confirm" && oRtn.result == "Y") {
        		this.dsList.setColumn(0, "ntfctnYn", "Y");
        		this.cnddNtfctnTransaction();
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	if (this.opener) {
        		this.param = {
        			"status" : this.getOwnerFrame().status
        			,"bzentyNm" : this.getOwnerFrame().bzentyNm
        		}
        	} else {
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.userNm = this.objApp.gdsUser.getColumn(0, "userNm");

        	if (this.gfnIsNull(this.param.bzentyNm)) {
        		this.userNm = this.objApp.gdsUser.getColumn(0, "userNm");
        	} else {
        		this.userNm = this.param.bzentyNm;
        	}

        	this.dsSearch.setColumn(0, "bzentyNm", this.userNm);

        	// 공통코드 함수 호출
        	this.cfnComCdLoad({dsCboPstnCd:"ZONE_SE_CD:B"});
        	this.cfnEtcCdLoad({dsCboBldgCd:"{id:'selectTaskComListCd', cnd:{cdTyId:'RENT_ASN_BLDG'}, opt:'A:cdNm'}"});

        	if (this.param.status == "reg") {
        		this.divForm.form.Div00.form.Panel00_02.set_visible(false);
        		this.divForm.form.Div00.form.Panel00_03.set_visible(false);
        	}

        	// 그리드 속성 변경
        	this.divForm.form.Div00.form.grdList.setCellProperty("body", 5, "edittype","expr:hireYnCd == '2' ? 'text' : 'none'");

        	this.cfnSearch();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 취소
        this.divBtn_btnCancel_onclick = function(obj,e)
        {
        	if (this.objApp.screenid == "Desktop_screen") {
        		var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        		this.gfnCloseMenu(cMenuId);
        	} else {
        		this.close();
        	}
        }

        // 저장
        this.divForm_Div00_divBtn_btnSave_onclick = function(obj,e)
        {
        	for (var i=0; i < this.dsList.rowcount; i++)
        	{
        		if (this.dsList.getColumn(i, "hireYnCd") == 2) {
        			if (this.gfnIsNull(this.dsList.getColumn(i, "hireRfsRsn"))) {
        				this.gfnAlertMsg("msg", "MSG_011", [i+1 + "행 임차거부 사유를 입력하세요."]);
        				return;
        			}
        		} else if (this.dsList.getColumn(i, "hireYnCd") == 0) {
        			if (this.gfnIsNull(this.dsList.getColumn(i, "hireRfsRsn"))) {
        				this.gfnAlertMsg("msg", "MSG_011", [i+1 + "행 임차여부를 선택하세요."]);
        				return;
        			}
        		}
        	}

        	if (this.gfnIsNull(this.param.bzentyNm)) { // 신청자, 처리자 구분
        		this.dsList.setColumn(0, "userSe", "1");
        	} else {
        		this.dsList.setColumn(0, "userSe", "2");
        	}

        	this.gfnConfirmMsg("update_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
        };

        // 초기화
        this.divForm_Div00_divBtn_btnInit_onclick = function(obj,e)
        {
        	for (var i=0; i<this.dsList.getColCount(); i++) {
        		this.dsList.setColumn(i, "hireYnCd", 0);
        		this.dsList.setColumn(i, "hireRfsRsn", "");
        	}
        };

        // 후보공간없음통보
        this.divGrd_btnCnddNtfctn_onclick = function(obj,e)
        {
        	if (!this.gfnIsNull(this.dsList.getColumn(0, "hireWtngNtfctnDt"))) {
        		this.gfnAlertMsg("msg", "MSG_011", ["통보 대상이 아닙니다."]);
        	} else {
        		this.gfnConfirmMsg("cnddNtfctn_confirm", "CST_001", "msgCallback", ["확인", "취소"], ["Y", "N"], "", ["후보공간없음통보"]);
        	}
        };

        // 임차여부 거부
        this.divForm_Div00_grdList_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	var hireYnCnt = 0;


        	for (var i=0; i< this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "hireYnCd") == 1) {
        			this.dsList.setColumn(i, "prgrsSttsCd", "26");
        			this.dsList.setColumn(i, "hireRfsRsn", "");
        		} else {
        			this.dsList.setColumn(i, "prgrsSttsCd", "27");
        		}

        		if (this.dsList.getColumn(i,"hireYnCd") == 2 && !this.gfnIsNull(this.param.bzentyNm)) { //처리자인경우 후보공간없음통보 표시
        			this.divForm.form.Div00.form.divBtn.form.btnCnddNtfctn.set_visible(true);
        			hireYnCnt = hireYnCnt + 1;
        		}
        	}

        	if (hireYnCnt == 0) {
        		this.divForm.form.Div00.form.divBtn.form.btnCnddNtfctn.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div00.form.grdList.addEventHandler("oncloseup",this.divForm_Div00_grdList_oncloseup,this);
            this.divForm.form.Div00.form.divBtn.form.btnCancel.addEventHandler("onclick",this.divBtn_btnCancel_onclick,this);
            this.divForm.form.Div00.form.divBtn.form.btnSave.addEventHandler("onclick",this.divForm_Div00_divBtn_btnSave_onclick,this);
            this.divForm.form.Div00.form.divBtn.form.btnInit.addEventHandler("onclick",this.divForm_Div00_divBtn_btnInit_onclick,this);
            this.divForm.form.Div00.form.divBtn.form.btnCnddNtfctn.addEventHandler("onclick",this.divGrd_btnCnddNtfctn_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("REN007M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
