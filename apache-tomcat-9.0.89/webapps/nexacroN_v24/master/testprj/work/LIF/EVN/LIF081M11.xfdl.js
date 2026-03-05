(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF081M01");
            this.set_titletext("영접카운터사용일정현황(처리자)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"schdlMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"evntFcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"secNo\" type=\"STRING\" size=\"256\"/><Column id=\"evntNm\" type=\"STRING\" size=\"256\"/><Column id=\"evtozrNm\" type=\"STRING\" size=\"256\"/><Column id=\"useBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"wrdTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"fxno\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"useIpbtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useIpbtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"useYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchdlList", this);
            obj._setContents("<ColumnInfo><Column id=\"schdlMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"evntFcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"secNo\" type=\"STRING\" size=\"256\"/><Column id=\"day1\" type=\"STRING\" size=\"256\"/><Column id=\"day2\" type=\"STRING\" size=\"256\"/><Column id=\"day3\" type=\"STRING\" size=\"256\"/><Column id=\"day4\" type=\"STRING\" size=\"256\"/><Column id=\"day5\" type=\"STRING\" size=\"256\"/><Column id=\"day6\" type=\"STRING\" size=\"256\"/><Column id=\"day7\" type=\"STRING\" size=\"256\"/><Column id=\"day8\" type=\"STRING\" size=\"256\"/><Column id=\"day9\" type=\"STRING\" size=\"256\"/><Column id=\"day10\" type=\"STRING\" size=\"256\"/><Column id=\"day11\" type=\"STRING\" size=\"256\"/><Column id=\"day12\" type=\"STRING\" size=\"256\"/><Column id=\"day13\" type=\"STRING\" size=\"256\"/><Column id=\"day14\" type=\"STRING\" size=\"256\"/><Column id=\"day15\" type=\"STRING\" size=\"256\"/><Column id=\"day16\" type=\"STRING\" size=\"256\"/><Column id=\"day17\" type=\"STRING\" size=\"256\"/><Column id=\"day18\" type=\"STRING\" size=\"256\"/><Column id=\"day19\" type=\"STRING\" size=\"256\"/><Column id=\"day20\" type=\"STRING\" size=\"256\"/><Column id=\"day21\" type=\"STRING\" size=\"256\"/><Column id=\"day22\" type=\"STRING\" size=\"256\"/><Column id=\"day23\" type=\"STRING\" size=\"256\"/><Column id=\"day24\" type=\"STRING\" size=\"256\"/><Column id=\"day25\" type=\"STRING\" size=\"256\"/><Column id=\"day26\" type=\"STRING\" size=\"256\"/><Column id=\"day27\" type=\"STRING\" size=\"256\"/><Column id=\"day28\" type=\"STRING\" size=\"256\"/><Column id=\"day29\" type=\"STRING\" size=\"256\"/><Column id=\"day30\" type=\"STRING\" size=\"256\"/><Column id=\"day31\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrcsSttsCdList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">01</Col><Col id=\"cdNm\">일정등록완료</Col><Col id=\"cdTypeId\"/></Row><Row><Col id=\"cdId\">02</Col><Col id=\"cdNm\">신청서작성중</Col><Col id=\"cdTypeId\"/></Row><Row><Col id=\"cdId\">03</Col><Col id=\"cdNm\">신청서승인완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboCtrNoList", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdVl\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">T117</Col><Col id=\"cdNm\">17번</Col><Col id=\"cdTypeId\"/></Row><Row><Col id=\"cdId\">T118</Col><Col id=\"cdNm\">18번</Col><Col id=\"cdTypeId\"/></Row><Row><Col id=\"cdId\">T119</Col><Col id=\"cdNm\">19번</Col></Row><Row><Col id=\"cdId\">T122</Col><Col id=\"cdNm\">22번</Col></Row><Row><Col id=\"cdId\">T136</Col><Col id=\"cdNm\">36번</Col></Row><Row><Col id=\"cdId\">T139</Col><Col id=\"cdNm\">39번</Col></Row><Row><Col id=\"cdId\">T144</Col><Col id=\"cdNm\">44번</Col></Row><Row><Col id=\"cdId\">T161</Col><Col id=\"cdNm\">61번</Col></Row><Row><Col id=\"cdId\">T172</Col><Col id=\"cdNm\">72번</Col></Row><Row><Col id=\"cdId\">T173</Col><Col id=\"cdNm\">73번</Col></Row><Row><Col id=\"cdId\">T216</Col><Col id=\"cdNm\">16(B01)번</Col></Row><Row><Col id=\"cdId\">T217</Col><Col id=\"cdNm\">17(B02)번</Col></Row><Row><Col id=\"cdId\">T218</Col><Col id=\"cdNm\">18(B03)번</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCopy", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"schdlMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"brno\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"evntFcltSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"rgnSeCd\" type=\"STRING\" size=\"256\"/><Column id=\"ctrNo\" type=\"STRING\" size=\"256\"/><Column id=\"secNo\" type=\"STRING\" size=\"256\"/><Column id=\"evntNm\" type=\"STRING\" size=\"256\"/><Column id=\"evtozrNm\" type=\"STRING\" size=\"256\"/><Column id=\"useBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useEndYmd\" type=\"STRING\" size=\"256\"/><Column id=\"prcsSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"bzentyNm\" type=\"STRING\" size=\"256\"/><Column id=\"wrdTelno\" type=\"STRING\" size=\"256\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"256\"/><Column id=\"rprsvNm\" type=\"STRING\" size=\"256\"/><Column id=\"crno\" type=\"STRING\" size=\"256\"/><Column id=\"fxno\" type=\"STRING\" size=\"256\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"256\"/><Column id=\"rmrkCn\" type=\"STRING\" size=\"256\"/><Column id=\"rowSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastChgId\" type=\"STRING\" size=\"256\"/><Column id=\"useIpbtBgngYmd\" type=\"STRING\" size=\"256\"/><Column id=\"useIpbtEndYmd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"48","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","divTitle:10",null,"1840","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divSch","0","0","100.00%","70",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SchBg");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("panLabel","20","14","100%","60",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("0");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("40");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02\"/><PanelItem id=\"PanelItem03\" componentid=\"panSchBtn\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("panSchBtn","632","235","255","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSch\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Button("btnSch","570","192","112","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("2");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Search");
            obj.set_fittocontents("width");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","0","0","100","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("3");
            obj.set_text("사용년월");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_flexshrink("0");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan01","20.00","67","255","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("4");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"calUseYmd\"/></Contents>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02","20.00","67","255","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("5");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Calendar("calUseYmd","0","0","25.00%","40",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Panel("pan02_00","20.00","67","255","1",null,null,null,null,null,null,this.divForm.form.divSch.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("nowrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.divSch.addChild(obj.name, obj);

            obj = new Div("divGrd","0","divSch:54","100.00%","666",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdSchdList","0","PanelGrdBtn:10","100%","576",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsSchdlList");
            obj.set_useselcolor("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("데이타가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"지역\"/><Cell col=\"2\" text=\"카운터번호\"/><Cell col=\"3\" text=\"1\"/><Cell col=\"4\" text=\"2\"/><Cell col=\"5\" text=\"3\"/><Cell col=\"6\" text=\"4\"/><Cell col=\"7\" text=\"5\"/><Cell col=\"8\" text=\"6\"/><Cell col=\"9\" text=\"7\"/><Cell col=\"10\" text=\"8\"/><Cell col=\"11\" text=\"9\"/><Cell col=\"12\" text=\"10\"/><Cell col=\"13\" text=\"11\"/><Cell col=\"14\" text=\"12\"/><Cell col=\"15\" text=\"13\"/><Cell col=\"16\" text=\"14\"/><Cell col=\"17\" text=\"15\"/><Cell col=\"18\" text=\"16\"/><Cell col=\"19\" text=\"17\"/><Cell col=\"20\" text=\"18\"/><Cell col=\"21\" text=\"19\"/><Cell col=\"22\" text=\"20\"/><Cell col=\"23\" text=\"21\"/><Cell col=\"24\" text=\"22\"/><Cell col=\"25\" text=\"23\"/><Cell col=\"26\" text=\"24\"/><Cell col=\"27\" text=\"25\"/><Cell col=\"28\" text=\"26\"/><Cell col=\"29\" text=\"27\"/><Cell col=\"30\" text=\"28\"/><Cell col=\"31\" text=\"29\"/><Cell col=\"32\" text=\"30\"/><Cell col=\"33\" text=\"31\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:rgnSeCd\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ctrNo\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCboCtrNoList\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:day1\" cssclass=\"expr:day1==&apos;사용중&apos;?&apos;CellYellow&apos;: (day1==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:day2\" cssclass=\"expr:day2==&apos;사용중&apos;?&apos;CellYellow&apos;: (day2==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:day3\" cssclass=\"expr:day3==&apos;사용중&apos;?&apos;CellYellow&apos;: (day3==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:day4\" cssclass=\"expr:day4==&apos;사용중&apos;?&apos;CellYellow&apos;: (day4==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:day5\" cssclass=\"expr:day5==&apos;사용중&apos;?&apos;CellYellow&apos;: (day5==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:day6\" cssclass=\"expr:day6==&apos;사용중&apos;?&apos;CellYellow&apos;: (day6==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:day7\" cssclass=\"expr:day7==&apos;사용중&apos;?&apos;CellYellow&apos;: (day7==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:day8\" cssclass=\"expr:day8==&apos;사용중&apos;?&apos;CellYellow&apos;: (day8==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:day9\" cssclass=\"expr:day9==&apos;사용중&apos;?&apos;CellYellow&apos;: (day9==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:day10\" cssclass=\"expr:day10==&apos;사용중&apos;?&apos;CellYellow&apos;: (day10==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:day11\" cssclass=\"expr:day11==&apos;사용중&apos;?&apos;CellYellow&apos;: (day11==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:day12\" cssclass=\"expr:day12==&apos;사용중&apos;?&apos;CellYellow&apos;: (day12==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:day13\" cssclass=\"expr:day13==&apos;사용중&apos;?&apos;CellYellow&apos;: (day13==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:day14\" cssclass=\"expr:day14==&apos;사용중&apos;?&apos;CellYellow&apos;: (day14==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:day15\" cssclass=\"expr:day15==&apos;사용중&apos;?&apos;CellYellow&apos;: (day15==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:day16\" cssclass=\"expr:day16==&apos;사용중&apos;?&apos;CellYellow&apos;: (day16==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:day17\" cssclass=\"expr:day17==&apos;사용중&apos;?&apos;CellYellow&apos;: (day17==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:day18\" cssclass=\"expr:day18==&apos;사용중&apos;?&apos;CellYellow&apos;: (day18==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"21\" text=\"bind:day19\" cssclass=\"expr:day19==&apos;사용중&apos;?&apos;CellYellow&apos;: (day19==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"22\" text=\"bind:day20\" cssclass=\"expr:day20==&apos;사용중&apos;?&apos;CellYellow&apos;: (day20==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"23\" text=\"bind:day21\" cssclass=\"expr:day21==&apos;사용중&apos;?&apos;CellYellow&apos;: (day21==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"24\" text=\"bind:day22\" cssclass=\"expr:day22==&apos;사용중&apos;?&apos;CellYellow&apos;: (day22==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"25\" text=\"bind:day23\" cssclass=\"expr:day23==&apos;사용중&apos;?&apos;CellYellow&apos;: (day23==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"26\" text=\"bind:day24\" cssclass=\"expr:day24==&apos;사용중&apos;?&apos;CellYellow&apos;: (day24==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"27\" text=\"bind:day25\" cssclass=\"expr:day25==&apos;사용중&apos;?&apos;CellYellow&apos;: (day25==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"28\" text=\"bind:day26\" cssclass=\"expr:day26==&apos;사용중&apos;?&apos;CellYellow&apos;: (day26==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"29\" text=\"bind:day27\" cssclass=\"expr:day27==&apos;사용중&apos;?&apos;CellYellow&apos;: (day27==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"30\" text=\"bind:day28\" cssclass=\"expr:day28==&apos;사용중&apos;?&apos;CellYellow&apos;: (day28==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"31\" text=\"bind:day29\" cssclass=\"expr:day29==&apos;사용중&apos;?&apos;CellYellow&apos;: (day29==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"32\" text=\"bind:day30\" cssclass=\"expr:day30==&apos;사용중&apos;?&apos;CellYellow&apos;: (day30==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/><Cell col=\"33\" text=\"bind:day31\" cssclass=\"expr:day31==&apos;사용중&apos;?&apos;CellYellow&apos;: (day31==&apos;사용불가&apos;?&apos;CellGray&apos;: &apos;&apos;)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","140","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("영접카운터 사용현황");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00","887","8","79","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("5");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01","1008","22","22","22",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_cssclass("pan_WF_Chip1");
            obj._setContents("");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00","923","11","52","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_text("사용불가");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10","10","22","22",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_cssclass("pan_WF_Chip2");
            obj._setContents("");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00_00","54","10","52","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("사용가능");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","31","10","79","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("5");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10","10","22","22",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_cssclass("pan_WF_Chip3");
            obj._setContents("");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Static("Static00_01","54","10","52","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_text("사용중");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","21","0","79","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("5");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGrd00","0","54","100.00%","400",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staTotal","0","0","140","34",null,null,null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("0");
            obj.set_text("행사현황");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Grid("grdList","0","44","100.00%",null,null,"87",null,null,null,null,this.divForm.form.divGrd00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsListCopy");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"59\"/><Column size=\"123\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"123\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"지역\"/><Cell col=\"2\" text=\"카운터번호\"/><Cell col=\"3\" text=\"접수번호\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"법인등록번호\"/><Cell col=\"6\" text=\"행사명\"/><Cell col=\"7\" text=\"행사&#13;&#10;주최자\"/><Cell col=\"8\" text=\"사용시작&#13;&#10;기간\"/><Cell col=\"9\" text=\"사용종료&#13;&#10;기간\"/><Cell col=\"10\" text=\"일수\"/><Cell col=\"11\" text=\"업체명\"/><Cell col=\"12\" text=\"연락처\"/><Cell col=\"13\" text=\"진행상태\"/><Cell col=\"14\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:rgnSeCd\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ctrNo\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCboCtrNoList\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:aplyNo\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:brno\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:crno\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:evntNm\"/><Cell col=\"7\" text=\"bind:evtozrNm\"/><Cell col=\"8\" text=\"bind:useBgngYmd\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:useEndYmd\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"10\" text=\"bind:일수\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:bzentyNm\"/><Cell col=\"12\" text=\"bind:wrdTelno\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:prcsSttsCd\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCboPrcsSttsCdList\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"14\" text=\"bind:rmrkCn\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd00.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("btnSchClose","24.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_SchClose");
            this.divGuide.addChild(obj.name, obj);

            obj = new Button("btnSchOpen","100.00","55","52","30",null,null,null,null,null,null,this.divGuide.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_SchOpen");
            this.divGuide.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divSch.form
            obj = new Layout("default","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panLabel.set_taborder("0");
                p.panLabel.set_verticalgap("8");
                p.panLabel.set_flexwrap("wrap");
                p.panLabel.set_spacing("0px 0px 10px 0px");
                p.panLabel.set_type("horizontal");
                p.panLabel.set_flexcrossaxisalign("start");
                p.panLabel.set_horizontalgap("40");
                p.panLabel.set_fittocontents("height");
                p.panLabel.set_maxheight("");
                p.panLabel.move("20","14","100%","60",null,null);

                p.panSchBtn.set_taborder("1");
                p.panSchBtn.set_flexmainaxisalign("end");
                p.panSchBtn.set_horizontalgap("10");
                p.panSchBtn.set_fittocontents("width");
                p.panSchBtn.move("632","235","255","40",null,null);

                p.btnSch.set_taborder("2");
                p.btnSch.set_text("조회하기");
                p.btnSch.set_cssclass("btn_WF_Search");
                p.btnSch.set_fittocontents("width");
                p.btnSch.move("570","192","112","40",null,null);

                p.staLabel03_01.set_taborder("3");
                p.staLabel03_01.set_text("사용년월");
                p.staLabel03_01.set_cssclass("sta_WF_SchLabel");
                p.staLabel03_01.set_flexshrink("0");
                p.staLabel03_01.set_maxwidth("");
                p.staLabel03_01.move("0","0","100","40",null,null);

                p.pan01.set_taborder("4");
                p.pan01.set_type("horizontal");
                p.pan01.set_horizontalgap("10");
                p.pan01.set_flexwrap("nowrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_flexgrow("1");
                p.pan01.set_minwidth("");
                p.pan01.move("20.00","67","255","40",null,null);

                p.pan02.set_taborder("5");
                p.pan02.set_type("horizontal");
                p.pan02.set_horizontalgap("10");
                p.pan02.set_flexwrap("nowrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_flexgrow("1");
                p.pan02.set_minwidth("");
                p.pan02.move("20.00","67","255","1",null,null);

                p.calUseYmd.set_taborder("6");
                p.calUseYmd.set_dateformat("yyyy-MM");
                p.calUseYmd.set_editformat("yyyy-MM");
                p.calUseYmd.move("0","0","25.00%","40",null,null);

                p.pan02_00.set_taborder("7");
                p.pan02_00.set_type("horizontal");
                p.pan02_00.set_horizontalgap("10");
                p.pan02_00.set_flexwrap("nowrap");
                p.pan02_00.set_fittocontents("height");
                p.pan02_00.set_flexgrow("1");
                p.pan02_00.set_minwidth("");
                p.pan02_00.move("20.00","67","255","1",null,null);
            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divSch.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divSch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("14px 20px 12px 20px");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            this.divForm.form.divSch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("0");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","550","34","0",null);

                p.grdSchdList.set_taborder("2");
                p.grdSchdList.set_binddataset("dsSchdlList");
                p.grdSchdList.set_useselcolor("false");
                p.grdSchdList.set_autofittype("col");
                p.grdSchdList.set_nodatatext("데이타가 없습니다.");
                p.grdSchdList.move("0","PanelGrdBtn:10","100%","576",null,null);

                p.staTotal.set_taborder("1");
                p.staTotal.set_text("영접카운터 사용현황");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","140","34",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_horizontalgap("5");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_fittocontents("width");
                p.Panel00.move("887","8","79","34",null,null);

                p.Panel01.set_taborder("5");
                p.Panel01.set_cssclass("pan_WF_Chip1");
                p.Panel01.move("1008","22","22","22",null,null);

                p.Static00.set_taborder("4");
                p.Static00.set_text("사용불가");
                p.Static00.set_fittocontents("width");
                p.Static00.move("923","11","52","34",null,null);

                p.Panel01_00.set_taborder("6");
                p.Panel01_00.set_cssclass("pan_WF_Chip2");
                p.Panel01_00.move("10","10","22","22",null,null);

                p.Static00_00.set_taborder("7");
                p.Static00_00.set_text("사용가능");
                p.Static00_00.set_fittocontents("width");
                p.Static00_00.move("54","10","52","34",null,null);

                p.Panel00_00.set_taborder("8");
                p.Panel00_00.set_horizontalgap("5");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_fittocontents("width");
                p.Panel00_00.move("31","10","79","34",null,null);

                p.Panel01_01.set_taborder("9");
                p.Panel01_01.set_cssclass("pan_WF_Chip3");
                p.Panel01_01.move("10","10","22","22",null,null);

                p.Static00_01.set_taborder("10");
                p.Static00_01.set_text("사용중");
                p.Static00_01.set_fittocontents("width");
                p.Static00_01.move("54","10","52","34",null,null);

                p.Panel00_01.set_taborder("11");
                p.Panel00_01.set_horizontalgap("5");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.set_fittocontents("width");
                p.Panel00_01.move("21","0","79","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd00.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTotal.set_taborder("0");
                p.staTotal.set_text("행사현황");
                p.staTotal.set_cssclass("sta_WF_SchLabel");
                p.staTotal.set_usedecorate("true");
                p.staTotal.set_fittocontents("width");
                p.staTotal.move("0","0","140","34",null,null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsListCopy");
                p.grdList.set_nodatatext("데이타가 없습니다.");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","44","100.00%",null,null,"87");
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divGrd00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSch.set_taborder("0");
                p.divSch.set_text("Div00");
                p.divSch.set_cssclass("div_WF_SchBg");
                p.divSch.set_formscrollbartype("none none");
                p.divSch.set_formscrolltype("none");
                p.divSch.set_fittocontents("height");
                p.divSch.move("0","0","100.00%","70",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","divSch:54","100.00%","666",null,null);

                p.divGrd00.set_taborder("2");
                p.divGrd00.set_text("Div01");
                p.divGrd00.set_fittocontents("height");
                p.divGrd00.set_formscrollbartype("none none");
                p.divGrd00.set_formscrolltype("none");
                p.divGrd00.move("0","54","100.00%","400",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("20");
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
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide.form
            obj = new Layout("default","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_SchClose");
                p.btnSchClose.move("24.00","55","52","30",null,null);

                p.btnSchOpen.set_taborder("1");
                p.btnSchOpen.set_cssclass("btn_WF_SchOpen");
                p.btnSchOpen.move("100.00","55","52","30",null,null);
            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide.form
            obj = new Layout("mobile","",0,0,this.divGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("영접카운터사용일정현황(처리자)");

                p.divTitle.set_taborder("1");
                p.divTitle.set_text("Div01");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.move("0","0",null,"48","60",null);

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","divTitle:10",null,"1840","60",null);

                p.divGuide.set_taborder("2");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","divTitle:10",null,"834","20",null);

                p.divTitle.move("0","0",null,"48","0",null);
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
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.addIncludeScript("LIF081M11.xfdl","xjs::TaskCom.xjs");
        this.registerScript("LIF081M11.xfdl", function() {
        /******************************************************************************
        *  PcMdi 프로젝트
        *  @FileName 	LIF081M11.xfdl
        *  @Creator 	김진섭
        *  @CreateDate 	2024/12/22
        *  @Desction    생활 > 영접카운터사용일정현황(처리자)
        ******************* 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/22				김진섭							최초생성
        ********************************************************************************/
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

        	// 로그인 ID
        	this.gvUserId = this.objApp.gdsUser.getColumn(0,"userId");

        	// 공통 코드 조회
        	//this.fnAplyKndSrch();	// 신청종류
        	//this.fnBldgSrch();		// 건물구분
        	//this.fnPstnSrch();		// 구역구분

        	// 기본값 세팅
        	var curYmd = this.gfnGetDate();
        	//this.divForm.form.divSch.form.cboCrtrYmd.index = 0;
        	//this.divForm.form.divSch.form.DivCal.form.calBgngYmd.value = this.gfnAddMonth(curYmd, -1);
        	this.divForm.form.divSch.form.calUseYmd.value = curYmd;

        	//자동조회
        	this.fnSearch();
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

        //추가버튼1
        this.cfnbtnAdd1 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼1입니다."]);
        	return;
        };

        //추가버튼2
        this.cfnbtnAdd2 = function ()
        {
        	this.gfnAlert("msg.confirm", ["추가버튼2입니다."]);
        	return;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnAplyKndSrch
         * @description : 신청종류코드 조회
         ***************************************************************************/
        this.fnAplyKndSrch = function()
        {
        	if(this.dsAplyKnd.getRowCount() > 0){
        		this.dsAplyKnd.clearData();

        	}

        	this.dsAplyKnd.addRow();
        	this.dsAplyKnd.setColumn(0, "useYn", "Y");
        	this.dsAplyKnd.setColumn(0, "cdTypeId", "FACREQTYPE");


        	var strSvcId    = "fnAplyKndSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsAplyKnd";
        	var outData     = "dsAplyKndList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnBldgSrch
         * @description : 건물구분 조회
         ***************************************************************************/
        this.fnBldgSrch = function()
        {
        	if(this.dsBldgSe.getRowCount() > 0){
        		this.dsBldgSe.clearData();

        	}

        	this.dsBldgSe.addRow();
        	this.dsBldgSe.setColumn(0, "useYn", "Y");
        	this.dsBldgSe.setColumn(0, "cdTypeId", "TSPLOC");


        	var strSvcId    = "fnBldgSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsBldgSe";
        	var outData     = "dsBldgSeList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnPstnSrch
         * @description : 구역구분 조회
         ***************************************************************************/
        this.fnPstnSrch = function()
        {
        	if(this.dsPstnSe.getRowCount() > 0){
        		this.dsPstnSe.clearData();

        	}

        	this.dsPstnSe.addRow();
        	this.dsPstnSe.setColumn(0, "useYn", "Y");
        	this.dsPstnSe.setColumn(0, "cdTypeId", "TSCWPLARA");


        	var strSvcId    = "fnPstnSrch";
        	var strSvcUrl   = "lifCom/selectComCd.do";
        	var inData      = "dsSearch=dsPstnSe";
        	var outData     = "dsPstnSeList=dsCdList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /**************************************************************************
         * @name : fnSearch
         * @description : 리스트 조회
         ***************************************************************************/
        this.fnSearch = function()
        {
        	if(this.dsSearch.getRowCount() > 0){
        		this.dsSearch.clearData();

        	}

        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "useYmd", this.divForm.form.divSch.form.calUseYmd.value);

        	var strSvcId    = "fnSearch";
        	var strSvcUrl   = "evntFcltSchdlAply/selectEvntFcltSchdlAplyListInq.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : fnCallback
         * @description : 서비스 콜백
         ***************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "fnAplyKndSrch" : // 신청종류 조회
        			// 전체 조회를 위해 [선택] 추가
        			this.dsAplyKndList.insertRow(0);
        			this.dsAplyKndList.setColumn(0, "cdId", "");
        			this.dsAplyKndList.setColumn(0, "cdNm", "[선택]");

        			break;

        		case "fnBldgSrch": // 건물구분 조회
        			// 건물구분 제한값 'TSPLOCTSC010', 'TSPLOCTSC070', 'TSPLOCTSC020'
        			this.dsBldgSeList.filter("cdId == 'TSPLOCTSC010' || cdId == 'TSPLOCTSC070' || cdId == 'TSPLOCTSC020'");

        			// 전체 조회를 위해 [선택] 추가
        			this.dsBldgSeList.insertRow(0);
        			this.dsBldgSeList.setColumn(0, "cdId", "");
        			this.dsBldgSeList.setColumn(0, "cdNm", "[선택]");

        			break;

        		case "fnPstnSrch" : // 구역구분 조회
        			// 전체 조회를 위해 [선택] 추가
        			this.dsPstnSeList.insertRow(0);
        			this.dsPstnSeList.setColumn(0, "cdId", "");
        			this.dsPstnSeList.setColumn(0, "cdNm", "[선택]");

        			break;

        		case "fnSearch" : // 리스트 조회

        			this.dsSchdlList.clearData();

        			var ctrNo_Tmp = "";
        			for(var i = 0; i < this.dsList.rowcount; i++) {

        				//trace("ffffff_ddd===>" + this.dsList.getColumn(i, "ctrNo") + " ; " +  ctrNo_Tmp );
        				if(this.dsList.getColumn(i, "ctrNo") == ctrNo_Tmp){
        					trace("ee");

        				}else{//todo ROW단위로 콘트롤하는 방법??
        					var nRow = this.dsSchdlList.addRow();
        					this.dsSchdlList.setColumn(nRow, "rgnSeCd", this.dsList.getColumn(i, "rgnSeCd"));
        					this.dsSchdlList.setColumn(nRow, "ctrNo", this.dsList.getColumn(i, "ctrNo"));
        					//trace("nRow==>" + nRow);

        					ctrNo_Tmp = this.dsList.getColumn(i, "ctrNo");
        					//trace("ctrNo_Tmp===>" + ctrNo_Tmp );
        				}

        				var stDt = this.dsList.getColumn(i, "useIpbtBgngYmd");
        				var edDt = this.dsList.getColumn(i, "useIpbtEndYmd");
        				var stDd = stDt.substring(6, 8);
        				var edDd = edDt.substring(6, 8);
        				//trace("stDd===>" + stDd );
        				//trace("edDd===>" + edDd );
        				for(var j = stDd; j <= edDd; j++) {
        					//trace("j===>" + j );
        					//TODO k = parseInt(j)+1;
        					k = parseInt(j);
        					//trace("k===>" + k );
        					//TODO this.divForm.form.divGrd.form.grdSchdList.setCellProperty("body", k, "background" ,"#fdfcc8");
        					var LL = "day" + k;
        					this.dsSchdlList.setColumn(nRow, LL, "사용불가");//1:사용중
        				}

        				var stDt = this.dsList.getColumn(i, "useBgngYmd");
        				var edDt = this.dsList.getColumn(i, "useEndYmd");
        				var stDd = stDt.substring(6, 8);
        				var edDd = edDt.substring(6, 8);
        				//trace("stDd===>" + stDd );
        				//trace("edDd===>" + edDd );
        				for(var j = stDd; j <= edDd; j++) {
        					//trace("j===>" + j );
        					//TODO k = parseInt(j)+1;
        					k = parseInt(j);
        					//trace("k===>" + k );
        					//TODO this.divForm.form.divGrd.form.grdSchdList.setCellProperty("body", k, "background" ,"#fdfcc8");
        					var LL = "day" + k;
        					this.dsSchdlList.setColumn(nRow, LL, "사용중");//1:사용중
        				}
        			}

        			this.dsListCopy.clearData();
        			for(var i=0; i<this.dsList.getRowCount(); i++) {
        				if(this.dsList.getColumn(i, "aplyNo") != "") {
        					var nRow = this.dsListCopy.addRow();
        					this.dsListCopy.copyRow(nRow, this.dsList, i);
        				}
        			}

        			alert("조회가 완료되었습니다.");

        			break;

        		default :
        			break;
        	}
        };

        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (sPopupId == "plcSch") // 담당자 찾기
        	{
        		if (this.gfnIsNull(sRtn)) return;
        		var objRtn = JSON.parse(sRtn);

        		var sUserId = objRtn.rUserId;
        		var sUserNm = objRtn.rUserNm;

        		if (!this.gfnIsNull(sUserId))
        		{
        			for(i=0; i < this.dsWfEmps.rowcount; i++)
        			{
        				var vDsUserId = this.dsWfEmps.getColumn(i,"wfeEmpId");
        				if(vDsUserId == sUserId)
        				{
        					this.divFrom01.form.divEdtPop01.form.mtiArptPicId.setSelect(i,true);
        					return;
        				}
        			}
        			nRow = this.dsWfEmps.addRow();
        			this.dsWfEmps.setColumn(nRow, "wfeEmpId" , sUserId);
        			this.dsWfEmps.setColumn(nRow, "userNm" , sUserNm);
        			/**수정해야함*/
        			this.dsWfEmps.setColumn(nRow, "wfeId" , "1000");
        			this.dsWfEmps.setColumn(nRow, "wfeJobCd" , "TAS10373");
        			this.dsWfEmps.setColumn(nRow, "wfeSrcEntId" , "CAD");
        			////////////////////////////////////////////////////////
        			this.divFrom01.form.divEdtPop01.form.mtiArptPicId.setSelect(nRow,true);
        		}
        	}
        }

        /**************************************************************************
         * @name : msgCallback
         * @description : 얼럿창 콜백 함수
         ***************************************************************************/
        this.msgCallback = function(sPopupId, sRtn) {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			var vStrSvcId  = "flrplnAply";
        			var vStrSvcUrl = "cad/flrplnAply.do";//신청
        			this.fnSave(vStrSvcId, vStrSvcUrl);
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**************************************************************************
         * @name : btnSch_onclick
         * @description : 조회 버튼 클릭
         ***************************************************************************/
        this.divForm_divSch_btnSch_onclick = function(obj,e)
        {
        	// 조회
        	this.fnSearch();
        };

        /**************************************************************************
         * @name : grdList_oncellclick
         * @description : 그리드 클릭
         ***************************************************************************/
        this.grdList_oncellclick = function(obj,e)
        {
        	// 신청번호 index값
        	var cellIdx = obj.getBindCellIndex("BODY", "aplyNo");

        	if(e.row > -1){
        		if(cellIdx == e.cell){
        			var sTitle = this.dsList.getColumn(e.row,"jobNm");
        			var objArg   = {
        				"aplyNo" : this.dsList.getColumn(e.row, "aplyNo"),
        				// "jobCd"  : this.dsList.getColumn(e.row, "jobCd"),
        				"view"   : "popup"
        			};

        			var objOption = {
        				popuptype: "modal"	//modal,modaless
        				, width: 1440
        				, height: 900			//width,height 지정하지 않음 popup form size적용
        				//, autosize: true
        				, title: sTitle
        				, resize: true
        				, titlebar: true
        			};
        			var sPopupCallBack = "fnPopupCallback";

        			this.gfnOpenPopup("popup", "work::LIF/FAC/LIF079M00.xfdl", objArg, sPopupCallBack, objOption);

        		}
        	}
        };


        /**************************************************************************
         * @name : grdList_oncellclick
         * @description : 그리드 클릭
         ***************************************************************************/
        this.divForm_divGrd00_grdList_oncellclick = function(obj,e)
        {
        // 	if(e.cell == 3) //접수번호
        // 	{
        // 		var aplyNo = this.dsList.getColumn(e.row, "aplyNo");
        // 		var schdlMngNo = this.dsList.getColumn(e.row, "schdlMngNo");
        // 		var param = {
        // 			 "aplyNo" : aplyNo
        // 			,"schdlMngNo" : schdlMngNo
        //
        // 		};
        //
        // 		var sMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        // 		var sMenuUrl = "work::LIF/EVN/LIF081M06.xfdl";
        // 		var actNm = '신청서작성';
        //
        // 		this.gfnPageOpen(sMenuId, sMenuUrl, actNm, param);
        // 	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divSch.form.btnSch.addEventHandler("onclick",this.divForm_divSch_btnSch_onclick,this);
            this.divForm.form.divGrd00.form.grdList.addEventHandler("oncellclick",this.divForm_divGrd00_grdList_oncellclick,this);
        };
        this.loadIncludeScript("LIF081M11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
