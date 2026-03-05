(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dgstfnExmn");
            this.set_titletext("만족도조사");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">1</Col><Col id=\"cdNm\">1점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">2</Col><Col id=\"cdNm\">2점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">3</Col><Col id=\"cdNm\">3점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">4</Col><Col id=\"cdNm\">4점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">5</Col><Col id=\"cdNm\">5점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">6</Col><Col id=\"cdNm\">6점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">7</Col><Col id=\"cdNm\">7점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">8</Col><Col id=\"cdNm\">8점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">9</Col><Col id=\"cdNm\">9점</Col></Row><Row><Col id=\"cdTypeId\">DGSTFN_SCR</Col><Col id=\"cdId\">10</Col><Col id=\"cdNm\">10점</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDgstfn", this);
            obj._setContents("<ColumnInfo><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnTtl\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnCn\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnScr\" type=\"STRING\" size=\"256\"/><Column id=\"dgstfnExmnYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"no\">1</Col><Col id=\"dgstfnTtl\">1. 요청하신 서비스 결과에 대한 전반적인 만족도는 어느 정도입니까? (1점 매우불만족 ~ 10점 매우만족)</Col></Row><Row><Col id=\"no\">2</Col><Col id=\"dgstfnTtl\">2. 해당서비스의 신청업무(신청서작성)은 쉽고 편리하다. (1점 매우불만족 ~ 10점 매우만족)</Col></Row><Row><Col id=\"no\">3</Col><Col id=\"dgstfnTtl\">3. 해당서비스의 신청기한은 적당하다. (1점 매우불만족 ~ 10점 매우만족)</Col></Row><Row><Col id=\"no\">4</Col><Col id=\"dgstfnTtl\">4. 서비스 처리와 관련하여 느끼셨던 칭찬사항을 말씀해 주십시요.</Col></Row><Row><Col id=\"no\">5</Col><Col id=\"dgstfnTtl\">5. 서비스 처리와 관련하여 느끼셨던 불만사항을 말씀해 주십시요. </Col></Row><Row><Col id=\"no\">6</Col><Col id=\"dgstfnTtl\">6. 업무처리 과정에서 불편함을 느꼈거나 관련 직원에게 요구를 받은 적이 있으십니까? 혹은 이외 개선이 필요하다고 생각되는 부분이 있다면 알려주세요.</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,"7921","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","0","100%","873",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("1. 요청하신 서비스 결과에 대한 전반적인 만족도는 어느 정도입니까? (1점 매우불만족 ~ 10점 매우만족)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo01","98","90","100%","62",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_direction("horizontal");
            obj.set_fittocontents("both");
            obj.set_rowcount("2");
            obj.set_text("");
            obj.set_value("-1");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","10.00","98","100%","108",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","119",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel00_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel02","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("2. 해당서비스의 신청업무(신청서작성)은 쉽고 편리하다. (1점 매우불만족 ~ 10점 매우만족)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo02","98","90","100%","62",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_direction("horizontal");
            obj.set_fittocontents("both");
            obj.set_rowcount("2");
            obj.set_text("");
            obj.set_value("-1");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","10.00","98","100%","108",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel02\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","119",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel03","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("3. 해당서비스의 신청기한은 적당하다. (1점 매우불만족 ~ 10점 매우만족)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Radio("rdo03","98","90","100%","62",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_direction("horizontal");
            obj.set_fittocontents("both");
            obj.set_rowcount("2");
            obj.set_text("");
            obj.set_value("-1");
            obj.set_index("-1");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","10.00","98","100%","108",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03\"/><PanelItem id=\"PanelItem02\" componentid=\"rdo03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan03","0","60","100.00%","119",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel04","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("4. 서비스 처리와 관련하여 느끼셨던 칭찬사항을 말씀해 주십시요.");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","171","111","100%","180",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panell09_01_01","10.00","98","100%","105",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel09_01","10.00","98","970","161",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panell09_01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","0","60","100.00%","172",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("18");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel05","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("5. 서비스 처리와 관련하여 느끼셨던 불만사항을 말씀해 주십시요. ");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordWrap("char");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","171","111","100%","180",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panell09_01_01_00","10.00","98","100%","105",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea02\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel09_01_00","10.00","98","970","161",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05\"/><PanelItem id=\"PanelItem05\" componentid=\"Panell09_01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan05","0","60","100.00%","172",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel06","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("6. 업무처리 과정에서 불편함을 느꼈거나 관련 직원에게 요구를 받은 적이 있으십니까? 혹은 이외 개선이 필요하다고 생각되는 부분이 있다면 알려주세요.");
            obj.set_cssclass("sta_WF_Label");
            obj.set_wordWrap("char");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","171","111","100%","180",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_displaynulltext("내용입력");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panell09_01_01_00_00","10.00","98","100%","105",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel09_01_00_00","10.00","98","970","161",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06\"/><PanelItem id=\"PanelItem05\" componentid=\"Panell09_01_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan06","0","60","100.00%","172",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_01_00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01.set_taborder("0");
                p.staLabel01.set_text("1. 요청하신 서비스 결과에 대한 전반적인 만족도는 어느 정도입니까? (1점 매우불만족 ~ 10점 매우만족)");
                p.staLabel01.set_cssclass("sta_WF_Label");
                p.staLabel01.set_wordWrap("char");
                p.staLabel01.set_fittocontents("height");
                p.staLabel01.move("10","98","100%","46",null,null);

                p.rdo01.set_taborder("1");
                p.rdo01.set_innerdataset("dsCombo");
                p.rdo01.set_codecolumn("cdId");
                p.rdo01.set_datacolumn("cdNm");
                p.rdo01.set_direction("horizontal");
                p.rdo01.set_fittocontents("both");
                p.rdo01.set_rowcount("2");
                p.rdo01.set_value("-1");
                p.rdo01.set_index("-1");
                p.rdo01.move("98","90","100%","62",null,null);

                p.Panel00_01.set_taborder("7");
                p.Panel00_01.set_type("vertical");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.move("10.00","98","100%","108",null,null);

                p.pan01.set_taborder("8");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_fittocontents("height");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.move("0","60","100.00%","119",null,null);

                p.staLabel02.set_taborder("9");
                p.staLabel02.set_text("2. 해당서비스의 신청업무(신청서작성)은 쉽고 편리하다. (1점 매우불만족 ~ 10점 매우만족)");
                p.staLabel02.set_cssclass("sta_WF_Label");
                p.staLabel02.set_wordWrap("char");
                p.staLabel02.set_fittocontents("height");
                p.staLabel02.move("10","98","100%","46",null,null);

                p.rdo02.set_taborder("2");
                p.rdo02.set_innerdataset("dsCombo");
                p.rdo02.set_codecolumn("cdId");
                p.rdo02.set_datacolumn("cdNm");
                p.rdo02.set_direction("horizontal");
                p.rdo02.set_fittocontents("both");
                p.rdo02.set_rowcount("2");
                p.rdo02.set_value("-1");
                p.rdo02.set_index("-1");
                p.rdo02.move("98","90","100%","62",null,null);

                p.Panel01_01.set_taborder("10");
                p.Panel01_01.set_type("vertical");
                p.Panel01_01.set_flexgrow("1");
                p.Panel01_01.move("10.00","98","100%","108",null,null);

                p.pan02.set_taborder("11");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","119",null,null);

                p.staLabel03.set_taborder("12");
                p.staLabel03.set_text("3. 해당서비스의 신청기한은 적당하다. (1점 매우불만족 ~ 10점 매우만족)");
                p.staLabel03.set_cssclass("sta_WF_Label");
                p.staLabel03.set_wordWrap("char");
                p.staLabel03.set_fittocontents("height");
                p.staLabel03.move("10","98","100%","46",null,null);

                p.rdo03.set_taborder("3");
                p.rdo03.set_innerdataset("dsCombo");
                p.rdo03.set_codecolumn("cdId");
                p.rdo03.set_datacolumn("cdNm");
                p.rdo03.set_direction("horizontal");
                p.rdo03.set_fittocontents("both");
                p.rdo03.set_rowcount("2");
                p.rdo03.set_value("-1");
                p.rdo03.set_index("-1");
                p.rdo03.move("98","90","100%","62",null,null);

                p.Panel02_01.set_taborder("13");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("10.00","98","100%","108",null,null);

                p.pan03.set_taborder("14");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","60","100.00%","119",null,null);

                p.staLabel04.set_taborder("15");
                p.staLabel04.set_text("4. 서비스 처리와 관련하여 느끼셨던 칭찬사항을 말씀해 주십시요.");
                p.staLabel04.set_cssclass("sta_WF_Label");
                p.staLabel04.set_wordWrap("char");
                p.staLabel04.set_fittocontents("height");
                p.staLabel04.move("10","98","100%","46",null,null);

                p.TextArea01.set_taborder("4");
                p.TextArea01.set_readonly("false");
                p.TextArea01.set_displaynulltext("내용입력");
                p.TextArea01.move("171","111","100%","180",null,null);

                p.Panell09_01_01.set_taborder("16");
                p.Panell09_01_01.set_type("vertical");
                p.Panell09_01_01.set_minwidth("");
                p.Panell09_01_01.move("10.00","98","100%","105",null,null);

                p.Panel09_01.set_taborder("17");
                p.Panel09_01.set_type("vertical");
                p.Panel09_01.set_flexgrow("1");
                p.Panel09_01.set_verticalgap("10");
                p.Panel09_01.set_minwidth("");
                p.Panel09_01.move("10.00","98","970","161",null,null);

                p.pan04.set_taborder("18");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("0px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_type("horizontal");
                p.pan04.move("0","60","100.00%","172",null,null);

                p.staLabel05.set_taborder("19");
                p.staLabel05.set_text("5. 서비스 처리와 관련하여 느끼셨던 불만사항을 말씀해 주십시요. ");
                p.staLabel05.set_cssclass("sta_WF_Label");
                p.staLabel05.set_wordWrap("char");
                p.staLabel05.move("10","98","100%","46",null,null);

                p.TextArea02.set_taborder("5");
                p.TextArea02.set_readonly("false");
                p.TextArea02.set_displaynulltext("내용입력");
                p.TextArea02.move("171","111","100%","180",null,null);

                p.Panell09_01_01_00.set_taborder("20");
                p.Panell09_01_01_00.set_type("vertical");
                p.Panell09_01_01_00.set_minwidth("");
                p.Panell09_01_01_00.move("10.00","98","100%","105",null,null);

                p.Panel09_01_00.set_taborder("21");
                p.Panel09_01_00.set_type("vertical");
                p.Panel09_01_00.set_flexgrow("1");
                p.Panel09_01_00.set_verticalgap("10");
                p.Panel09_01_00.set_minwidth("");
                p.Panel09_01_00.move("10.00","98","970","161",null,null);

                p.pan05.set_taborder("22");
                p.pan05.set_horizontalgap("20");
                p.pan05.set_flexcrossaxiswrapalign("start");
                p.pan05.set_flexwrap("wrap");
                p.pan05.set_fittocontents("height");
                p.pan05.set_verticalgap("0");
                p.pan05.set_spacing("0px 20px 10px 20px");
                p.pan05.set_cssclass("pal_WF_DtlBg");
                p.pan05.set_type("horizontal");
                p.pan05.move("0","60","100.00%","172",null,null);

                p.staLabel06.set_taborder("23");
                p.staLabel06.set_text("6. 업무처리 과정에서 불편함을 느꼈거나 관련 직원에게 요구를 받은 적이 있으십니까? 혹은 이외 개선이 필요하다고 생각되는 부분이 있다면 알려주세요.");
                p.staLabel06.set_cssclass("sta_WF_Label");
                p.staLabel06.set_wordWrap("char");
                p.staLabel06.move("10","98","100%","46",null,null);

                p.TextArea03.set_taborder("6");
                p.TextArea03.set_readonly("false");
                p.TextArea03.set_displaynulltext("내용입력");
                p.TextArea03.move("171","111","100%","180",null,null);

                p.Panell09_01_01_00_00.set_taborder("24");
                p.Panell09_01_01_00_00.set_type("vertical");
                p.Panell09_01_01_00_00.set_minwidth("");
                p.Panell09_01_01_00_00.move("10.00","98","100%","105",null,null);

                p.Panel09_01_00_00.set_taborder("25");
                p.Panel09_01_00_00.set_type("vertical");
                p.Panel09_01_00_00.set_flexgrow("1");
                p.Panel09_01_00_00.set_verticalgap("10");
                p.Panel09_01_00_00.set_minwidth("");
                p.Panel09_01_00_00.move("10.00","98","970","161",null,null);

                p.pan06.set_taborder("26");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.set_type("horizontal");
                p.pan06.move("0","60","100.00%","172",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel06.set_fittocontents("height");
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("0","0","100%","873",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
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
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("center");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("만족도조사");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","10",null,"7921","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,5000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_fittocontents("none");
                p.divForm.set_cssclass("div_WF_QuickFrBgM");
                p.divForm.move("0","0",null,null,"0","0");
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
        this.registerScript("dgstfnExmn.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	dgstfnExmn.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/11/18
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/18			조규완					최초생성
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
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {

        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_Div01_rdo01_onitemchanged = function(obj,e)
        {
        	var scr = obj.value;
        	if (!this.gfnIsNull(scr)) {
        		this.dsDgstfn.setColumn(0, "dgstfnScr", scr);
        		this.dsDgstfn.setColumn(0, "dgstfnExmnYn", "Y");
        	} else {
        		this.dsDgstfn.setColumn(0, "dgstfnExmnYn", "N");
        	}
        };

        this.divForm_Div01_rdo02_onitemchanged = function(obj,e)
        {
        	var scr = obj.value;
        	if (!this.gfnIsNull(scr)) {
        		this.dsDgstfn.setColumn(1, "dgstfnScr", scr);
        		this.dsDgstfn.setColumn(1, "dgstfnExmnYn", "Y");
        	} else {
        		this.dsDgstfn.setColumn(1, "dgstfnExmnYn", "N");
        	}
        };

        this.divForm_Div01_rdo03_onitemchanged = function(obj,e)
        {
        	var scr = obj.value;
        	if (!this.gfnIsNull(scr)) {
        		this.dsDgstfn.setColumn(2, "dgstfnScr", scr);
        		this.dsDgstfn.setColumn(2, "dgstfnExmnYn", "Y");
        	} else {
        		this.dsDgstfn.setColumn(2, "dgstfnExmnYn", "N");
        	}
        };

        this.divForm_Div01_TextArea01_onkillfocus = function(obj,e)
        {
        	var cn = obj.value;
        	if (!this.gfnIsNull(cn)) {
        		this.dsDgstfn.setColumn(3, "dgstfnCn", cn);
        		this.dsDgstfn.setColumn(3, "dgstfnExmnYn", "Y");
        	} else {
        		this.dsDgstfn.setColumn(3, "dgstfnExmnYn", "N");
        	}
        };

        this.divForm_Div01_TextArea02_onkillfocus = function(obj,e)
        {
        	var cn = obj.value;
        	if (!this.gfnIsNull(cn)) {
        		this.dsDgstfn.setColumn(4, "dgstfnCn", cn);
        		this.dsDgstfn.setColumn(4, "dgstfnExmnYn", "Y");
        	} else {
        		this.dsDgstfn.setColumn(4, "dgstfnExmnYn", "N");
        	}
        };

        this.divForm_Div01_TextArea03_onkillfocus = function(obj,e)
        {
        	var cn = obj.value;
        	if (!this.gfnIsNull(cn)) {
        		this.dsDgstfn.setColumn(5, "dgstfnCn", cn);
        		this.dsDgstfn.setColumn(5, "dgstfnExmnYn", "Y");
        	} else {
        		this.dsDgstfn.setColumn(5, "dgstfnExmnYn", "N");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Div01.form.rdo01.addEventHandler("onitemchanged",this.divForm_Div01_rdo01_onitemchanged,this);
            this.divForm.form.Div01.form.rdo02.addEventHandler("onitemchanged",this.divForm_Div01_rdo02_onitemchanged,this);
            this.divForm.form.Div01.form.rdo03.addEventHandler("onitemchanged",this.divForm_Div01_rdo03_onitemchanged,this);
            this.divForm.form.Div01.form.TextArea01.addEventHandler("onkillfocus",this.divForm_Div01_TextArea01_onkillfocus,this);
            this.divForm.form.Div01.form.TextArea02.addEventHandler("onkillfocus",this.divForm_Div01_TextArea02_onkillfocus,this);
            this.divForm.form.Div01.form.TextArea03.addEventHandler("onkillfocus",this.divForm_Div01_TextArea03_onkillfocus,this);
        };
        this.loadIncludeScript("dgstfnExmn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
