(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testtemp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSpceListGrp","0","30","79.69%","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("PanTotalBtn","0","40","100.00%","50",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelTotal\"/></Contents>");
            this.divSpceListGrp.addChild(obj.name, obj);

            obj = new Div("divGrdSpceList","0","0","100%","236",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divSpceListGrp.addChild(obj.name, obj);

            obj = new Grid("grdSpceList","0","0","100.00%","236",null,null,null,null,null,null,this.divSpceListGrp.form.divGrdSpceList.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSpceList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"250\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"건물명\"/><Cell col=\"2\" text=\"호실번호\"/><Cell col=\"3\" text=\"사용용도\" cssclass=\"CellHead\"/><Cell col=\"4\" text=\"면적(m2)\"/><Cell col=\"5\" text=\"사용인원수\"/><Cell col=\"6\" text=\"계약기간\" cssclass=\"CellHead\"/><Cell col=\"7\" text=\"희망연장일자\"/><Cell col=\"8\" text=\"확정연장일자\" cssclass=\"CellHead_E\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chc\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\"/><Cell col=\"1\" textAlign=\"left\" verticalAlign=\"middle\" displaytype=\"normal\" edittype=\"none\" text=\"bind:bldgNm\"/><Cell col=\"2\" suppressalign=\"middle\" textAlign=\"center\" verticalAlign=\"middle\" edittype=\"none\" displaytype=\"normal\" cssclass=\"CellReadonly\" text=\"bind:rmnmNo\"/><Cell col=\"3\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:dtlUsgNm\" edittype=\"none\" combodataset=\"dsCboDtlUsgCd\" combodatacol=\"cdNm\" combocodecol=\"cdId\"/><Cell col=\"4\" textAlign=\"right\" verticalAlign=\"middle\" displaytype=\"normal\" text=\"bind:rntar\"/><Cell col=\"5\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:userCnt\" edittype=\"none\"/><Cell col=\"6\" textAlign=\"center\" verticalAlign=\"middle\" text=\"bind:ctrtPrd\" edittype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\" maskeditmaskchar=\" \"/><Cell col=\"7\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:hpePrlgYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" maskeditmaskchar=\" \"/><Cell col=\"8\" textAlign=\"center\" verticalAlign=\"middle\" displaytype=\"date\" text=\"bind:cfmtnPrlgYmd\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" maskeditmaskchar=\" \" edittype=\"date\"/></Band></Format></Formats>");
            this.divSpceListGrp.form.divGrdSpceList.addChild(obj.name, obj);

            obj = new Panel("panSpceList","0","40","100.00%","301",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divGrdSpceList\"/></Contents>");
            this.divSpceListGrp.addChild(obj.name, obj);

            obj = new Static("staTotal_00","10.00","0","55","34",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("3");
            obj.set_text("변경");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            this.divSpceListGrp.addChild(obj.name, obj);

            obj = new Static("staTotalCnt","0","0","40","34",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("4");
            obj.set_text("2");
            obj.set_cssclass("sta_WF_Total");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divSpceListGrp.addChild(obj.name, obj);

            obj = new Static("staTotal02_00","0","0","30","34",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("5");
            obj.set_text("건");
            obj.set_usedecorate("true");
            this.divSpceListGrp.addChild(obj.name, obj);

            obj = new Panel("PanelTotal00_00","10.00","0","100","34",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("6");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTotal_00\"/><PanelItem id=\"PanelItem03\" componentid=\"staTotalCnt\"/><PanelItem id=\"PanelItem01\" componentid=\"staTotal02_00\"/></Contents>");
            this.divSpceListGrp.addChild(obj.name, obj);

            obj = new Panel("PanelTotal","0","0","480","34",null,null,null,null,null,null,this.divSpceListGrp.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"PanelTotal00_00\"/></Contents>");
            this.divSpceListGrp.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("default","",0,0,this.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSpceList.set_taborder("0");
                p.grdSpceList.set_binddataset("dsSpceList");
                p.grdSpceList.set_autofittype("none");
                p.grdSpceList.set_autoenter("select");
                p.grdSpceList.move("0","0","100.00%","236",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("Layout0","",0,0,this.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdSpceList.set_autofittype("none");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSpceListGrp.form.divGrdSpceList.form
            obj = new Layout("mobile","",0,0,this.divSpceListGrp.form.divGrdSpceList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divSpceListGrp.form.divGrdSpceList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divSpceListGrp.form
            obj = new Layout("default","",0,0,this.divSpceListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanTotalBtn.set_taborder("0");
                p.PanTotalBtn.set_horizontalgap("20");
                p.PanTotalBtn.set_flexcrossaxiswrapalign("start");
                p.PanTotalBtn.set_flexwrap("wrap");
                p.PanTotalBtn.set_fittocontents("height");
                p.PanTotalBtn.set_verticalgap("0");
                p.PanTotalBtn.set_spacing("10px 20px 10px 20px");
                p.PanTotalBtn.set_type("horizontal");
                p.PanTotalBtn.move("0","40","100.00%","50",null,null);

                p.divGrdSpceList.set_taborder("1");
                p.divGrdSpceList.set_text("Div01");
                p.divGrdSpceList.set_fittocontents("height");
                p.divGrdSpceList.set_formscrollbartype("none none");
                p.divGrdSpceList.set_formscrolltype("none");
                p.divGrdSpceList.move("0","0","100%","236",null,null);

                p.panSpceList.set_taborder("2");
                p.panSpceList.set_horizontalgap("20");
                p.panSpceList.set_flexcrossaxiswrapalign("start");
                p.panSpceList.set_flexwrap("wrap");
                p.panSpceList.set_fittocontents("height");
                p.panSpceList.set_verticalgap("0");
                p.panSpceList.set_spacing("10px 20px 10px 20px");
                p.panSpceList.set_cssclass("pal_WF_DtlBg");
                p.panSpceList.set_type("horizontal");
                p.panSpceList.move("0","40","100.00%","301",null,null);

                p.staTotal_00.set_taborder("3");
                p.staTotal_00.set_text("변경");
                p.staTotal_00.set_cssclass("sta_WF_SchLabel");
                p.staTotal_00.set_usedecorate("true");
                p.staTotal_00.set_fittocontents("none");
                p.staTotal_00.move("10.00","0","55","34",null,null);

                p.staTotalCnt.set_taborder("4");
                p.staTotalCnt.set_text("2");
                p.staTotalCnt.set_cssclass("sta_WF_Total");
                p.staTotalCnt.set_usedecorate("true");
                p.staTotalCnt.set_fittocontents("width");
                p.staTotalCnt.move("0","0","40","34",null,null);

                p.staTotal02_00.set_taborder("5");
                p.staTotal02_00.set_text("건");
                p.staTotal02_00.set_usedecorate("true");
                p.staTotal02_00.move("0","0","30","34",null,null);

                p.PanelTotal00_00.set_taborder("6");
                p.PanelTotal00_00.move("10.00","0","100","34",null,null);

                p.PanelTotal.set_taborder("7");
                p.PanelTotal.set_horizontalgap("20");
                p.PanelTotal.move("0","0","480","34",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divSpceListGrp.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSpceListGrp.form
            obj = new Layout("mobile","",0,0,this.divSpceListGrp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divSpceListGrp.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
        this.loadIncludeScript("testtemp_REN042M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
