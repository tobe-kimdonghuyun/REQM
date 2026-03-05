(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P062");
            this.set_titletext("상세-화면상태");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1050);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAcntlist", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"rfltDt\" type=\"STRING\" size=\"256\"/><Column id=\"chgType\" type=\"STRING\" size=\"256\"/><Column id=\"chgVl\" type=\"STRING\" size=\"256\"/><Column id=\"chgDmndId\" type=\"STRING\" size=\"256\"/><Column id=\"chgRsn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrplist", this);
            obj._setContents("<ColumnInfo><Column id=\"jobGroupId\" type=\"STRING\" size=\"256\"/><Column id=\"jobGroupNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthrlist", this);
            obj._setContents("<ColumnInfo><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/><Column id=\"chgType\" type=\"STRING\" size=\"256\"/><Column id=\"rfltDt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAcntChgType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChgType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdNm\">생성</Col><Col id=\"cdId\">1</Col></Row><Row><Col id=\"cdId\">2</Col><Col id=\"cdNm\">적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("Div04_00","0","0","100%","300",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","99.83%","48",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("0");
            obj.set_text("계정 상태 변경 현황");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","230",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div04_00.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div04_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%","230",null,null,null,null,null,null,this.divForm.form.Div04_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAcntlist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"변경항목\"/><Cell col=\"1\" text=\"변경값\"/><Cell col=\"2\" text=\"처리자\"/><Cell col=\"3\" text=\"처리사유\"/><Cell col=\"4\" text=\"처리일시\"/></Band><Band id=\"body\"><Cell text=\"bind:chgType\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsAcntChgType\" combocodecol=\"cdId\" combodatacol=\"cdNm\" cssclass=\"expr:currow == 0 ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:chgVl\" displaytype=\"text\" textAlign=\"center\" cssclass=\"expr:currow == 0 ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:userNm\" displaytype=\"text\" textAlign=\"center\" cssclass=\"expr:currow == 0 ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:chgRsn\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:currow == 0 ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:rfltDt\" displaytype=\"date\" cssclass=\"expr:currow == 0 ? &apos;CellSum02&apos; : &apos;&apos;\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.divForm.form.Div04_00.form.divGrd.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","30","100%","250",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("작업 그룹 현황");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%","190",null,null,null,null,null,null,this.divForm.form.Div01_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsGrplist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"그룹명\"/><Cell col=\"1\" text=\"그룹ID\"/><Cell col=\"2\" text=\"부여일시\"/></Band><Band id=\"body\"><Cell text=\"bind:jobGroupNm\" cssclass=\"expr:useYn == &apos;Y&apos; ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:jobGroupId\" textAlign=\"center\" cssclass=\"expr:useYn == &apos;Y&apos; ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:frstRegDt\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" cssclass=\"expr:useYn == &apos;Y&apos; ? &apos;CellSum02&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.Div01_00.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","190",null,null,null,null,null,null,this.divForm.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div01_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","250",null,null,null,null,null,null,this.divForm.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01_00_00","0","30","100%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100.00%","50",null,null,null,null,null,null,this.divForm.form.Div01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("계정 권한 현황");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Div("divGrd","0","30","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0","100.00%","335",null,null,null,null,null,null,this.divForm.form.Div01_00_00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthrlist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"권한명\"/><Cell col=\"1\" text=\"권한ID\"/><Cell col=\"2\" text=\"권한변경\"/><Cell col=\"3\" text=\"권한변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:authrtNm\" cssclass=\"expr:chgType == &apos;2&apos; ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:authrtId\" cssclass=\"expr:chgType == &apos;2&apos; ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:chgType\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsChgType\" combocodecol=\"cdId\" combodatacol=\"cdNm\" cssclass=\"expr:chgType == &apos;2&apos; ? &apos;CellSum02&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:rfltDt\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" cssclass=\"expr:chgType == &apos;2&apos; ? &apos;CellSum02&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divForm.form.Div01_00_00.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","100%","100%",null,null,null,null,null,null,this.divForm.form.Div01_00_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrd\"/></Contents>");
            this.divForm.form.Div01_00_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","100%",null,null,null,null,null,null,this.divForm.form.Div01_00_00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divForm.form.Div01_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div04_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_binddataset("dsAcntlist");
                p.Grid00.move("0","0","100.00%","230",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div04_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div04_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div04_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div04_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div04_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("계정 상태 변경 현황");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","99.83%","48",null,null);

                p.pan00.set_taborder("1");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("10px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.set_fittocontents("height");
                p.pan00.move("0","60","100.00%","250",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","230",null,null);

                p.divGrd.set_taborder("3");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","100%",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div04_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div04_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div04_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_binddataset("dsGrplist");
                p.Grid00.move("0","0","100.00%","190",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div01_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div01_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("작업 그룹 현황");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","100%",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","190",null,null);

                p.pan00_00.set_taborder("3");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("10px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","250",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01_00_00.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_taborder("1");
                p.Grid00.set_autofittype("col");
                p.Grid00.set_binddataset("dsAuthrlist");
                p.Grid00.move("0","0","100.00%","335",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div01_00_00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01_00_00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.Div01_00_00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.Div01_00_00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.Div01_00_00.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("계정 권한 현황");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100.00%","50",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","30","100.00%","100%",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","100%","100%",null,null);

                p.pan00_00.set_taborder("3");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("10px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","100%",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01_00_00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div04_00.set_taborder("0");
                p.Div04_00.set_text("Div00");
                p.Div04_00.set_fittocontents("height");
                p.Div04_00.move("0","0","100%","300",null,null);

                p.Div01_00.set_taborder("1");
                p.Div01_00.set_text("Div00");
                p.Div01_00.set_cssclass("div_WF_Bg");
                p.Div01_00.set_fittocontents("height");
                p.Div01_00.move("0","30","100%","250",null,null);

                p.Div01_00_00.set_taborder("2");
                p.Div01_00_00.set_text("Div00");
                p.Div01_00_00.set_cssclass("div_WF_Bg");
                p.Div01_00_00.set_fittocontents("height");
                p.Div01_00_00.move("0","30","100%","400",null,null);
            	}
            );
            obj.set_verticalgap("30");
            obj.set_spacing("10px 10px 10px 10px");
            obj.set_flexwrap("nowrap");
            obj.set_type("vertical");
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
            obj.set_spacing("0px 10px 0px 20px");
            obj.set_verticalgap("30");
            obj.set_flexwrap("nowrap");
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1000,1050,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("상세-화면상태");

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.move("10","10",null,null,"10","10");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","170",null,"2112","0",null);
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
        this.registerScript("COM024P062.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	COM024P062.xfdl
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
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	this.fnInit();

        	if(!this.gfnIsNull(this.getOwnerFrame().userId)) {
        		this.userId = this.getOwnerFrame().userId;
        		this.cfnSearch();
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.getSearchTransaction();
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
        this.getSearchTransaction = function()
        {
        	var strSvcId    = "search";
        	var strSvcUrl   = "sysMng/acntGroupAuthrtHstryInq.do";
        	var inData      = "";
        	var outData     = "dsAcntlist=dsAcntlist dsGrplist=dsGrplist dsAuthrlist=dsAuthrlist";
        	var strArg      = "id=" + this.userId;
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "search":
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	this.gfnCmmCode("acntChgType", "dsAcntChgType", "ACNT_CHG_TYPE", "");
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("COM024P062.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
