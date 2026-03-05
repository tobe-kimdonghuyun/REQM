(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST002S06");
            this.set_titletext("만족도조사(시설물설치)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panForm","0","0","100.00%","930",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"divDgstfnExmn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","34","74","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("만족도조사");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1104","74","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1200","16","34","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","1150","10","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","34","74","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divDgstfnExmn","0","70","100.00%","1036",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","170",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("1");
            obj.set_text("1. 요청하신 서비스 결과에 대한 전반적인 만족도는 어느 정도입니까?");
            obj.set_cssclass("sta_WF_Label");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","300","170",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Radio("Radio00","134","97","100%","140",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_fittocontents("height");
            var divDgstfnExmn_form_Radio00_innerdataset = new nexacro.NormalDataset("divDgstfnExmn_form_Radio00_innerdataset", obj);
            divDgstfnExmn_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1점(매우불만족)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2점</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3점</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4점</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5점</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6점</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7점</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8점</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9점</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10점(매우만족)</Col></Row></Rows>");
            obj.set_innerdataset(divDgstfnExmn_form_Radio00_innerdataset);
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("4");
            obj.set_text("2. 해당서비스의 신청업무(신청서작성)은 쉽고 편리하다.");
            obj.set_cssclass("sta_WF_Label");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","134","97","100%","140",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_fittocontents("height");
            var divDgstfnExmn_form_Radio00_00_innerdataset = new nexacro.NormalDataset("divDgstfnExmn_form_Radio00_00_innerdataset", obj);
            divDgstfnExmn_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1점(매우불만족)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2점</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3점</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4점</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5점</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6점</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7점</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8점</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9점</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10점(매우만족)</Col></Row></Rows>");
            obj.set_innerdataset(divDgstfnExmn_form_Radio00_00_innerdataset);
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","300","170",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","170",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("8");
            obj.set_text("3. 해당서비스의 신청기한은 적정하다.");
            obj.set_cssclass("sta_WF_Label");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","134","97","100%","140",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_fittocontents("height");
            var divDgstfnExmn_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("divDgstfnExmn_form_Radio00_00_00_innerdataset", obj);
            divDgstfnExmn_form_Radio00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1점(매우불만족)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2점</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3점</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4점</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5점</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6점</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7점</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8점</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9점</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10점(매우만족)</Col></Row></Rows>");
            obj.set_innerdataset(divDgstfnExmn_form_Radio00_00_00_innerdataset);
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","300","170",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","170",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("12");
            obj.set_text("4. 서비스 처리와 관련하여 느끼셨던 칭찬사항을 말씀해 주십시요.");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("16px 0px 10px 15px");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","10.00","98","300","85.999",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00","0","60","100.00%","96.999",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","92","554","100%","100",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("18");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("15");
            obj.set_text("5. 서비스 처리와 관련하여 느끼셨던 불만사항을 말씀해 주십시요.");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("16px 0px 10px 15px");
            obj.set_fittocontents("height");
            obj.set_wordWrap("char");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00","10.00","98","300","85.999",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00_00","0","60","100.00%","110",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","57","644","100%","100",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("19");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00_00_00","10","98","100%","76",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("20");
            obj.set_text("6. 업무처리 과정에서 불편함을 느꼈거나 관련 직원에게 불합리한 요구를 받은 적이 있으십니까? \r\n혹은 이외 개선이 필요하다고 생각되는 부분이 있다면 알려주세요.");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("16px 0px 10px 15px");
            obj.set_fittocontents("height");
            obj.set_verticalAlign("top");
            obj.set_wordWrap("char");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00","57","644","100%","100",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("21");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00_00","10.00","98","300","120",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00_00_00","0","60","100.00%","150",null,null,null,null,null,null,this.divDgstfnExmn.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00_00\"/></Contents>");
            this.divDgstfnExmn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDgstfnExmn.form
            obj = new Layout("default","",0,0,this.divDgstfnExmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","170",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("1. 요청하신 서비스 결과에 대한 전반적인 만족도는 어느 정도입니까?");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","300","170",null,null);

                p.Radio00.set_taborder("3");
                p.Radio00.set_innerdataset(divDgstfnExmn_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_columncount("3");
                p.Radio00.set_fittocontents("height");
                p.Radio00.move("134","97","100%","140",null,null);

                p.staLabel00_00.set_taborder("4");
                p.staLabel00_00.set_text("2. 해당서비스의 신청업무(신청서작성)은 쉽고 편리하다.");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.Radio00_00.set_taborder("5");
                p.Radio00_00.set_innerdataset(divDgstfnExmn_form_Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_columncount("3");
                p.Radio00_00.set_fittocontents("height");
                p.Radio00_00.move("134","97","100%","140",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","300","170",null,null);

                p.pan00_00.set_taborder("7");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","170",null,null);

                p.staLabel00_00_00.set_taborder("8");
                p.staLabel00_00_00.set_text("3. 해당서비스의 신청기한은 적정하다.");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.Radio00_00_00.set_taborder("9");
                p.Radio00_00_00.set_innerdataset(divDgstfnExmn_form_Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_columncount("3");
                p.Radio00_00_00.set_fittocontents("height");
                p.Radio00_00_00.move("134","97","100%","140",null,null);

                p.Panel00_00_00_00.set_taborder("10");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","300","170",null,null);

                p.pan00_00_00.set_taborder("11");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","170",null,null);

                p.staLabel00_00_00_00_00.set_taborder("12");
                p.staLabel00_00_00_00_00.set_text("4. 서비스 처리와 관련하여 느끼셨던 칭찬사항을 말씀해 주십시요.");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00.set_padding("16px 0px 10px 15px");
                p.staLabel00_00_00_00_00.set_fittocontents("height");
                p.staLabel00_00_00_00_00.set_wordWrap("char");
                p.staLabel00_00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00_00.set_taborder("13");
                p.Panel00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00_00.move("10.00","98","300","85.999",null,null);

                p.pan00_00_00_00_00.set_taborder("14");
                p.pan00_00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00_00.move("0","60","100.00%","96.999",null,null);

                p.TextArea00.set_taborder("18");
                p.TextArea00.move("92","554","100%","100",null,null);

                p.staLabel00_00_00_00_00_00.set_taborder("15");
                p.staLabel00_00_00_00_00_00.set_text("5. 서비스 처리와 관련하여 느끼셨던 불만사항을 말씀해 주십시요.");
                p.staLabel00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00_00.set_padding("16px 0px 10px 15px");
                p.staLabel00_00_00_00_00_00.set_fittocontents("height");
                p.staLabel00_00_00_00_00_00.set_wordWrap("char");
                p.staLabel00_00_00_00_00_00.move("10","98","100%","46",null,null);

                p.Panel00_00_00_00_00_00_00.set_taborder("16");
                p.Panel00_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00_00_00.move("10.00","98","300","85.999",null,null);

                p.pan00_00_00_00_00_00.set_taborder("17");
                p.pan00_00_00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00_00_00.move("0","60","100.00%","110",null,null);

                p.TextArea01.set_taborder("19");
                p.TextArea01.move("57","644","100%","100",null,null);

                p.staLabel00_00_00_00_00_00_00.set_taborder("20");
                p.staLabel00_00_00_00_00_00_00.set_text("6. 업무처리 과정에서 불편함을 느꼈거나 관련 직원에게 불합리한 요구를 받은 적이 있으십니까? \r\n혹은 이외 개선이 필요하다고 생각되는 부분이 있다면 알려주세요.");
                p.staLabel00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00_00_00.set_padding("16px 0px 10px 15px");
                p.staLabel00_00_00_00_00_00_00.set_fittocontents("height");
                p.staLabel00_00_00_00_00_00_00.set_verticalAlign("top");
                p.staLabel00_00_00_00_00_00_00.set_wordWrap("char");
                p.staLabel00_00_00_00_00_00_00.move("10","98","100%","76",null,null);

                p.TextArea01_00.set_taborder("21");
                p.TextArea01_00.move("57","644","100%","100",null,null);

                p.Panel00_00_00_00_00_00_00_00.set_taborder("22");
                p.Panel00_00_00_00_00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00_00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00_00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00_00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00_00_00_00_00.move("10.00","98","300","120",null,null);

                p.pan00_00_00_00_00_00_00.set_taborder("23");
                p.pan00_00_00_00_00_00_00.set_horizontalgap("20");
                p.pan00_00_00_00_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00_00_00_00_00.set_flexwrap("wrap");
                p.pan00_00_00_00_00_00_00.set_fittocontents("height");
                p.pan00_00_00_00_00_00_00.set_verticalgap("0");
                p.pan00_00_00_00_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00_00_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00_00_00_00_00.move("0","60","100.00%","150",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divDgstfnExmn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDgstfnExmn.form
            obj = new Layout("mobile","",0,0,this.divDgstfnExmn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divDgstfnExmn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,500,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDgstfnExmn.form.Radio00","value","dsMst","dgstfnArtclFstVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDgstfnExmn.form.Radio00_00","value","dsMst","dgstfnArtclSecdVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDgstfnExmn.form.Radio00_00_00","value","dsMst","dgstfnArtclThrVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDgstfnExmn.form.TextArea00","value","dsMst","dgstfnArtclFstCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDgstfnExmn.form.TextArea01","value","dsMst","dgstfnArtclSecdCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDgstfnExmn.form.TextArea01_00","value","dsMst","dgstfnArtclThrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDgstfnExmn.form.Radio00","readonly","dsAtrb","roDgstfnExmn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDgstfnExmn.form.Radio00_00","readonly","dsAtrb","roDgstfnExmn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDgstfnExmn.form.Radio00_00_00","readonly","dsAtrb","roDgstfnExmn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDgstfnExmn.form.TextArea00","readonly","dsAtrb","roDgstfnExmn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDgstfnExmn.form.TextArea01","readonly","dsAtrb","roDgstfnExmn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDgstfnExmn.form.TextArea01_00","readonly","dsAtrb","roDgstfnExmn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST002S05.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST002S06.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/25
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/25			김주화					최초생성
        *******************************************************************************
        */

        //include "xjs::TaskCom.xjs";  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
            trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_11111");
        	this.gfnFormOnload(obj);        // 필수함수

        	// 첨부파일 표출용 Dataset
            this.dsFile = this.lookup("dsFile");
        	// 속성 Dataset
            this.dsAtrb = this.lookup("dsAtrb");
        	this.dsAtrb.addEventHandler("onvaluechanged", this.dsAtrb_onvaluechanged, this);
        	// 단계별 속성 값 조회
        	this.cfnGetAtrb = this.lookupFunc("cfnGetAtrb");
        	// 업무처리흐름 정보 유무 확인
        	this.cfnIsExstTaskPrcsFlw = this.lookupFunc("cfnIsExstTaskPrcsFlw");

        	trace(this.name + "_LLLLLLLLLLLLLLLLLLLLLLLLLL_22222");
        };

        this.dsAtrb_onvaluechanged = function(obj,e)
        {
        	// readonly 처리
        // 	var ro = this.cfnGetAtrb.call("roDgstfnExmn");
        // 	Array.from(this.divDgstfnExmn.form.components).forEach(function(v) {
        // 		if(v instanceof Radio || v instanceof TextArea) {
        // 			v.readonly = ro;
        // 		}
        // 	});
        };






        //test
        /**
        *  입주자 서비스 플랫폼 구축(업무공통)
        *  @FileName 	TaskCom.xjs
        *  @Creator 	김주화
        *  @CreateDate 	2024/08/27
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2024/08/27			김주화	T				업무공통 Library
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.FV_DS_INPT_GRD_PRZT_INFO  = "dsInptGrdPrztInfo"  ;  // 개인화정보관련 입력 데이터셋
        this.FV_DS_OTPT_GRD_PRZT_INFO  = "dsOtptGrdPrztInfo"  ;  // 개인화정보관련 출력 데이터셋
        this.FV_DS_INPT_WORK_FLOW_INFO = "dsInptWorkFlowInfo" ;  // 워크플로우 입력 데이터셋
        this.FV_DS_OTPT_WORK_FLOW_INFO = "dsOtptWorkFlowInfo" ;  // 워크플로우 출력 데이터셋
        this.FV_DS_OTPT_TASK_FLOW_INFO = "dsOtptTaskPrcsFlwWf";  // 업무처리흐름 출력 데이터셋
        this.FV_DS_OTPT_GET_APLY_SE_NM = "dsOtptGetAplySeNm"  ;  // 신청구분명 가져오기 출력 데이터셋
        this.FV_DS_ATRB_NAME           = "dsAtrb"             ;  // 속성 데이터셋
        this.FV_DS_FILE_DWNLD          = "dsFileDwnld"        ;  // 파일 다운로드용 데이터셋
        this.FV_ARGS_WORK_FLOW_INFO    = "";                     // 워크플로우 조회 조건


        /**
        * @class grid 필수입력여부 체크하기
        * @param objGrid : 그리드 정보
        * @return true/false
        * @example if (this.cfnGrdIsValidated(this.divGrd.form.grdList) == false) return
        */
        this.cfnGrdIsValidated = function(objGrid) {

        	for (var i = 0; i < objGrid.rowcount; i++) {
        		for (var j = 0; j < objGrid.getCellCount("head"); j++) {
        			if (objGrid.getCellPropertyValue(-1,j,"cssclass" ) == "CellHead_E") {
        				if (objGrid.getCellPropertyValue(i,j,"edittype" ) == "date") {
        					if (!this.gfn_isYMD(objGrid.getCellValue(i,j))) {
        						// {0} 날짜 오류입니다.
        						this.gfnAlertMsg("msg", "REN_013", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				} else {
        					if (this.gfnIsNull(objGrid.getCellValue(i,j))) {
        						//{0} 을(를) 입력하십시오.
        						this.gfnAlertMsg("msg", "MSG_009", [(i+1) + "라인에 " + objGrid.getHeadValue(j) ]);
        						//objGrid.setFocusRow(i);
        						objGrid.setCellPos(j, i);
        						//objGrid.showEditor(true);

        						return false;
        					}
        				}
        			}
        		}
        	}

        	return true;
        };

        /**
        * @class 공통코드 불러오기
        * @param objJson : 공통코드 정보
        * @return 없음
        * @example this.cfnComCdLoad({ id:"commonCodeSearch", cbf:"fn_callBack", dsCd1:"EMPTIT:A", dsCd2:"SVCCD:S", dsCd3:"Y10:B", dsCd4:"COMPROC" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnComCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnComCdLoad_";
        	var strSvcUrl   = "com/comCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += " " + key + ":" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 기타코드 불러오기
        * @param objJson : 기타코드 정보
        * @return 없음
        * @example this.cfnEtcCdLoad({ id:"etcCodeSearch", cbf:"fn_callBack", dsCd1:"selectEtcCode:A", dsCd2:"selectEtcCode2:S", dsCd3:"selectEtcCode3:B", dsCd4:"selectEtcCode4" });
        *          :A = "전체", :S = "선택", :B 또는 : = ""
        *
        */
        this.cfnEtcCdLoad = function(objJson) {
            var strSvcId    = objJson.id || "_cfnEtcCdLoad_";
        	var strSvcUrl   = "com/etcCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	for(key in objJson) {
        		if(key.startsWith("ds")) {
        			strArg  += "|" + key + ";" + objJson[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnSetGrdPrztInfo({ userId:"admin", scrnId:"CST002M00" });
        *          this.cfnSetGrdPrztInfo();
        */
        this.cfnSetGrdPrztInfo = function(objJson) {
            objJson = objJson ? objJson : {};

            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId", 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId", this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId", this.name || objJson.scrnId || "TEST");

            // 출력 데이터셋
        	this[this.FV_DS_OTPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_OTPT_GRD_PRZT_INFO);

            // 서비스 호출
            var strSvcId    = "_cfnSetGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoLoad.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = this.FV_DS_OTPT_GRD_PRZT_INFO + "=" + this.FV_DS_OTPT_GRD_PRZT_INFO;
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 저장
        * @param objJson : 그리드ID 정보
        * @return 없음
        * @example this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"grdList", prztInfo:"그리드format" });
        *          this.cfnStrgGrdPrztInfo({ userId:"admin", scrnId:"CST002M00", objtId:"this.tabMain.tpgWord.form.divForm.form.divGrd.form.grdList", prztInfo:"그리드format" });
        *
        */
        this.cfnStrgGrdPrztInfo = function(objJson) {
            // 입력 데이터셋
        	this[this.FV_DS_INPT_GRD_PRZT_INFO] = new Dataset(this.FV_DS_INPT_GRD_PRZT_INFO);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("userId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("scrnId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("objtId"  , 'String');
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].addColumn("prztInfo", 'String');

        	var nRow = this[this.FV_DS_INPT_GRD_PRZT_INFO].addRow();
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "userId"  , this.objApp.gdsUser.getColumn(0,"userId") || objJson.userId || "test");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "scrnId"  , objJson.scrnId || this.name || "TEST");
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "objtId"  , objJson.objtId);
        	this[this.FV_DS_INPT_GRD_PRZT_INFO].setColumn(nRow, "prztInfo", objJson.prztInfo);

            // 서비스 호출
            var strSvcId    = "_cfnStrgGrdPrztInfo_";
        	var strSvcUrl   = "com/comGrdPrztInfoStrg.do";
        	var inData      = this.FV_DS_INPT_GRD_PRZT_INFO + "=" + this.FV_DS_INPT_GRD_PRZT_INFO;
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "cbfComGrdPrztInfo";
        	var isASync     = true;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 개인화정보 불러오기 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfComGrdPrztInfo = function(srvcId, errCd, errMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errCd != 0) { return; }

        	if(srvcId == "_cfnSetGrdPrztInfo_") {   // 개인화정보 조회
        		if(this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount == 0) { return; };

        		for(var i = 0; i < this[this.FV_DS_OTPT_GRD_PRZT_INFO].rowcount; i++) {
        			var objGrd = [this, this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "objtId").split(".")].map(function(v, i, o) { if(i == 0) { for(var x of o[1]) { v = v[x]; } return v; } })[0];
        			objGrd["orgnlFrm"] = objGrd.getFormatString();  // 원본 형식을 저장
        			objGrd.set_formats(this[this.FV_DS_OTPT_GRD_PRZT_INFO].getColumn(i, "prztInfo"));
        		}

        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        		if(this.isValidObject(this.FV_DS_OTPT_GRD_PRZT_INFO)) this.removeChild(this.FV_DS_OTPT_GRD_PRZT_INFO);
        	} else if(srvcId == "_cfnStrgGrdPrztInfo_") {  // 개인화정보 저장

        	}
        };

        /**
        * @class 버튼생성
        * @param objJson : 조회조건(조회 조건 중 필요한 항목만 전달하면 됨)
        * @return 없음
        * @example this.cfnBtnCrt({ crtTrgt:this.divBtn, lnkgEvnt:this.Button_onclick, cbf:"fnCallback", inqCnd : { jobSeCd:"TSC", jobTycoSeCd:"TSPTSC003", taskPrcsStepSeCd:"ACT10135", jobPrcsPrgrsSeCd:"TAS10397", prcsSeCd:"CTL10875", nextStepJobPrcsPrgrsSeCd:"TAS10397"} });
        *
        */
        this.cfnBtnCrt = function(objJson) {
            this.FV_ARGS_WORK_FLOW_INFO = objJson;  // 조회조건 저장

            // 입력 데이터셋
        	this[this.FV_DS_INPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_INPT_WORK_FLOW_INFO);

        	// 컬럼생성
        	for(key in objJson.inqCnd) {
        	    this[this.FV_DS_INPT_WORK_FLOW_INFO].addColumn(key, 'String');
        	}

        	var nRow = this[this.FV_DS_INPT_WORK_FLOW_INFO].addRow();
        	// 컬럼값 지정
        	for(key in objJson.inqCnd) {
        		this[this.FV_DS_INPT_WORK_FLOW_INFO].setColumn(nRow, key, objJson.inqCnd[key]);
        	}

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_WORK_FLOW_INFO);
        	this[this.FV_DS_OTPT_TASK_FLOW_INFO] = new Dataset(this.FV_DS_OTPT_TASK_FLOW_INFO);

            // 서비스 호출
            var strSvcId    = this.FV_ARGS_WORK_FLOW_INFO.id || "_cfnBtnCrt_";
        	var strSvcUrl   = "com/workFlowLoad.do";
        	var inData      = this.FV_DS_INPT_WORK_FLOW_INFO + "=" + this.FV_DS_INPT_WORK_FLOW_INFO;
        	var outData     = this.FV_DS_OTPT_WORK_FLOW_INFO + "=" + this.FV_DS_OTPT_WORK_FLOW_INFO + " "
        	                + this.FV_DS_OTPT_TASK_FLOW_INFO + "=" + this.FV_DS_OTPT_TASK_FLOW_INFO
        					;
        	var strArg      = "";
        	var callBackFnc = "cbfBtnCrt";
        	var isASync     = false;

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 버튼생성 콜백함수
        * @param
        * @return 없음
        * @example
        *
        */
        this.cbfBtnCrt = function(srvcId, errCd, errMsg)
        {
        	// 버튼을 생성할 대상이 있으면...
        	if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt) {
        		// 기존 버튼 제거
        		Array.from(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.components).forEach(function(v) {
        			if(v.name.startsWith("CTL")) { v.destroy(); v = null; }
        		});

        		// 에러 시 화면 처리 내역
        		if(errCd != 0) { return; }

        		var dsOtpt = this[this.FV_DS_OTPT_WORK_FLOW_INFO];
        		for(var i = 0; i < dsOtpt.rowcount; i++) {
        			var btnNew = new nexacro.Button;
        			var btnId  = dsOtpt.getColumn(i, "prcsSeCd");
        			var btnNm  = dsOtpt.getColumn(i, "prcsSeCdNm");

        			btnNew.init(btnId, 0, 0, 0, 40);          // 초기화
        			btnNew.fittocontents = "width";           // 넓이 자동조절
        			btnNew.text          = btnNm;             // 버튼 문자
        			btnNew.cssclass      = dsOtpt.getColumn(i, "cssClass") || "btn_WF_No";
        			btnNew.addEventHandler("onclick", this.FV_ARGS_WORK_FLOW_INFO.lnkgEvnt, this);
        			this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.addChild(btnId, btnNew);
        			btnNew.expr = dsOtpt.getColumn(i, "exclCnd");

        			if(this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.isValidObject(btnId)) {
        				btnNew.show();
        			} else {
        				this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form[btnId] = null;
        			}
        		}
        	}

        	if(this.isValidObject(this.FV_DS_INPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_INPT_WORK_FLOW_INFO) };
        	//if(this.isValidObject(this.FV_DS_OTPT_WORK_FLOW_INFO)) { this.removeChild(this.FV_DS_OTPT_WORK_FLOW_INFO) };

        	if(this.FV_ARGS_WORK_FLOW_INFO.cbf) {
        		this.lookupFunc(this.FV_ARGS_WORK_FLOW_INFO.cbf).call(srvcId, errCd, errMsg);
        	}

        	// 버튼 Div
        	this.FV_ARGS_WORK_FLOW_INFO.crtTrgt.form.resetScroll();
        };

        /**
        * @class 신청구분명 불러오기
        * @param objJson : 신청구분 정보
        * @return 없음
        * @example this.cfnGetAplySeNm({ id:"getAplySeNm", cbf:"fnCallBack", aplySeCd:"TSPTSC001" });
        *
        */
        this.cfnGetAplySeNm = function(objJson) {
            var strSvcId    = objJson.id || "_cfnGetAplySeNm_";
        	var strSvcUrl   = "com/getAplySeNm.do";
        	var inData      = "";
        	var outData     = this.FV_DS_OTPT_GET_APLY_SE_NM + "=" + this.FV_DS_OTPT_GET_APLY_SE_NM;
        	var strArg      = "inData=" + nexacro.wrapQuote(objJson.aplySeCd);
        	var callBackFnc = objJson.cbf;
        	var isASync     = true;

        	// 출력 데이터셋
        	this[this.FV_DS_OTPT_GET_APLY_SE_NM] = new Dataset(this.FV_DS_OTPT_GET_APLY_SE_NM);

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        };

        /**
        * @class 신청구분명 돌려주기
        * @param
        * @return aplySeNm : 신청구분명
        * @example this.cfnGvbkAplySeNm();
        *
        */
        this.cfnGvbkAplySeNm = function()
        {
            var aplySeNm = "";

            if(this[this.FV_DS_OTPT_GET_APLY_SE_NM].rowcount > 0) {
        		aplySeNm = this[this.FV_DS_OTPT_GET_APLY_SE_NM].getColumn(0, "aplySeNm");
        	}

        	if(this.isValidObject(this.FV_DS_OTPT_GET_APLY_SE_NM)) this.removeChild(this.FV_DS_OTPT_GET_APLY_SE_NM);

        	return aplySeNm;
        };

        /**
        * @class panel의 Items의 항목을 배열로 반환한다.
        * @param pan : panel
        * @return 배열
        * @example this.cfnToArray(this.panel);
        *
        */
        this.cfnToArray = function(pan)
        {
            var oArry = new Array();
            if(!pan || !pan.items || !pan.items.length) { return oArry; }

        	for(var i = 0; i < pan.items.length; i++) {
        		oArry.push(pan.parent[pan.items[i].componentid]);
        	}

        	return oArry;
        };

        /**
        * @class 현재 사용자의 공사 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsCstrnEmp();
        *
        */
        this.cfnIsCstrnEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "iiacEmpYn") == "1";  // 공사직원여부
        };

        /**
        * @class 현재 사용자의 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsPrcrEmp();
        *
        */
        this.cfnIsPrcrEmp = function()
        {
            return this.objApp.gdsUser.getColumn(0, "cpatcoEmpYn") == "1";  // 협력사직원여부
        };

        /**
        * @class 현재 사용자의 공사 직원 및 처리자 직원 여부를 반환한다.
        * @param
        * @return boolean
        * @example this.cfnIsEmp();
        *
        */
        this.cfnIsEmp = function()
        {
            return this.cfnIsCstrnEmp() || this.cfnIsPrcrEmp();  // 공사직원 Or 협력사직원
        };

        /**
        * @class 화면에서 접기(펼침) 버튼 클릭시 접기 또는 펼침 기능 수행
        * @param  obj : 버튼
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnFold = function(obj, ctrlkey)
        {
            // 서브 타이틀 그룹
            if(this.getPanel(obj)) {
        		var oForm = this;
        		var oDiv = this["div" + obj.name.substr(3)];
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        		oDiv.visible = obj.cssclass != "btn_WF_ACPlus";

        		if(ctrlkey) {
        			this.cfnToArray(this.panForm).forEach(function(v) {
        				if(oForm["pan" + v.name.substr(3)]) {
        					if(v.name == oDiv.name || v instanceof Panel) { return; }
        					if(oForm["pan" + v.name.substr(3)].visible) {
        						v.visible = oDiv.visible;
        						oForm["btn" + v.name.substr(3)].cssclass = obj.cssclass;
        					}
        				}
        			});
        		}
        	// Div(가이드, 업무처리흐름도...)
        	} else {
        	    obj.parent.parent.upheight        = !obj.parent.parent.upheight        ? obj.parent.parent.height        : obj.parent.parent.upheight       ;  // div height 저장
        	    obj.parent.parent.upfittocontents = !obj.parent.parent.upfittocontents ? obj.parent.parent.fittocontents : obj.parent.parent.upfittocontents;  // div fittocontents 저장
        		obj.parent.parent.height          = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upheight        : "54"  ;  // div height 변경
        		obj.parent.parent.fittocontents   = obj.cssclass == "btn_WF_ACPlus" ? obj.parent.parent.upfittocontents : "none";  // div fittocontents 변경
        		obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";             // +,- css 변경
        	}
        };

        /**
        * @class Left Menu 및 화면전환
        * @param oItems : 화면ID
        * @return
        * @example this.fnMovePage(Left MenuID, 화면ID, 화면Url);
        *          this.fnMovePage("MNG_0000000021", "MNG_0000000144", "work::CST/CAD/CST009M01.xfdl");
        */
        this.fnMovePage = function(leftId, menuId, menuUrl)
        {
        	var objArg   = {};
        	this.objApp.gvVfrs.set_separatesize("108,*,0,0");

        	this.gfnLeftMenuCreate(leftId);
        	this.gfnMenuFocus(leftId);
        	this.gfnLeftTit(leftId);

        	var actNm = '';
        	this.gfnPageOpen(menuId, menuUrl, actNm, objArg);
        };

        /**
        * @class Dataset의 현재 행 정보를 JSON 형태로 변환하여 돌려준다
        * @param  obj : Dataset
        * @return
        * @example this.cfnFold(obj);
        *
        */
        this.cfnGetToJson = function(obj) {
        	var oJson = {};
        	for(var i = 0; i < obj.getColCount(); i++) {
        		oJson[obj.getColID(i)] = obj.getColumn(obj.rowposition, obj.getColID(i));
        	}

        	return oJson;
        };

        /**
        * @class obj 그룹 내의 Grid를 찾아 바인딩된 첫번째 컬럼명(colId)을 돌려준다
        * @param  ru : RaonkUpload, obj : Object
        * @return
        * @example this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        *
        */
        this.cfnSetAtflInfo = function(ru, obj) {
        	// Grid 에서 찾기
        	if(obj instanceof Grid) {
        		ru.upatflinfo = { colid:obj.getCellProperty("body", 0, "text").substr(5) };
        		return ru;
            // PANEL 에서 찾기
        	} else if(this.getPanel(obj) instanceof Panel) {
        		for(var i = 0, obj = this.getPanel(obj); i <= 5; i++) {
        			var grd = null;
        			Array.from(obj.items).forEach(function(v) { if(obj.parent[v.componentid] instanceof Grid) { grd = obj.parent[v.componentid]; }});
        			if(grd) {
        				ru.upatflinfo = { colid:grd.getCellProperty("body", 0, "text").substr(5) };
        				return ru;
        			} else {
        				obj = this.getPanel(obj);
        			}
        		}
        	}

        	return null;
        };

        /**
        * @class RaonkUpload용 customValue를 돌려준다.
        * @param  str : String("bgncstAprvRvwY06110" 또는 JSON.stringify({ "strCustomValue" : "bgncstAprvRvwY06110" }))
        * @return customValue
        * @example this.cfnGetCustomValue(JSON.stringify({ "strCustomValue" : colid }));
        *
        */
        this.cfnGetCustomValue = function(str) {
            try {
        	    return JSON.parse(str).strCustomValue;
        	} catch (e) {
        	    return str;
        	}
        };

        /**
        * @class obj 그룹 내의 특정 유형을 찾아 돌려준다
        * @param  obj : Object, type : 컴포넌트 유형
        * @return  Object
        * @example this.cfnSetObjInGroup(obj, Div);
        *
        */
        this.cfnFindObjByAtrb = function(obj, atrb, name) {
         	for(var i = 0, comps = obj.components; i <= 20; i++) {
        	    var obj = Array.from(comps).filter(function(v) {
        			return v[atrb]  == name; })[0];
        		if(obj) { return obj; };
        	}

        	return null;
        };

        /**
        * @class 현재 단계의 속성 값을 생성한다
        * @param dsAtrb:속성DS, taskCd:현재업무코드, isEdtrPsblty:정보편집권한여부
        * @return 없음
        * @example this.cfnAtrbCrt(dsAtrb, taskCd, isEdtrPsblty);
        */
        this.cfnAtrbCrt = function(ds, taskCd, isEdtrPsblty) {
            this.FV_DS_ATRB_NAME = ds.name;  // 속성 DS 명

        	ds.enableevent = false;
        	ds.clearData();
            // DS 컬럼 초기화
        	for(var i = ds.colcount - 1; i >= 0; i--) { ds.deleteColumn(i);	}

            // 데이터셋 컬럼 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		ds.addColumn("vs" + colId, "INT"   );  // visible
        		ds.addColumn("ro" + colId, "INT"   );  // readonly
        		ds.addColumn("cc" + colId, "STRING");  // cssclass
        	}
        	ds.addRow();

        	// 데이터셋 컬럼 값 생성
        	for(var i = 0; i < ds.getConstCount(); i++) {
        		var colId = ds.getConstColID(i);
        		var json  = JSON.parse(ds.getConstColumn(i));
        		var isEditable = json.editable.indexOf(taskCd) != -1;  // 편집가능여부
        		var isReadonly = json.readonly.indexOf(taskCd) != -1;  // 읽기전용여부

                // 이미 처리된 단계 여부 확인
        	    var bIsPrcs = this[this.FV_DS_OTPT_TASK_FLOW_INFO] && this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(nexacro.wrapQuote(json.editable) + ".indexOf(jobCd) != -1") != -1;

        		ds.setColumn(0, "vs" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? false : !isEdtrPsblty || isEditable || isReadonly);
        		ds.setColumn(0, "ro" + colId, !isEdtrPsblty && (colId.endsWith("Edtr") || !bIsPrcs) ? true  : !isEdtrPsblty || !isEditable);
        		ds.setColumn(0, "cc" + colId, "sta_WF_Label" + (isEdtrPsblty && isEditable ? "_E" : ""));
        	}

        	ds.enableevent = true;
        };


        /**
        * @class 워크플로우 정보 가져오기
        * @param prcsSeCd : 기능ID(버튼ID)
        * @return 워크플로우 정보(JSON)
        * @example this.getWfInfo("CTL00459");
        *
        */
        this.cfnGetWfInfo = function(prcsSeCd) {
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = false;
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition = this[this.FV_DS_OTPT_WORK_FLOW_INFO].findRow("prcsSeCd", prcsSeCd);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].setRowType(this[this.FV_DS_OTPT_WORK_FLOW_INFO].rowposition, Dataset.ROWTYPE_UPDATE);
        	this[this.FV_DS_OTPT_WORK_FLOW_INFO].updatecontrol = true;

        	return this.cfnGetToJson(this[this.FV_DS_OTPT_WORK_FLOW_INFO]);
        };

        // Main 화면의 함수만 호출하기 위한 처리
        // -------------------------------------
        if(this.parent.name == "divWork") {
        	/**
        	* @class 단계의 속성 값을 돌려준다
        	* @param colId : 속성 컬럼 ID
        	* @return 없음
        	* @example this.cfnGetAtrb(colId);
        	*/
        	this.cfnGetAtrb = function(colId) {
        		var ds = this[this.FV_DS_ATRB_NAME];
        		return colId.split(",").filter(function(v) { return ds.getColumn(0, v); }).length > 0;
        	};

        	/**
        	* @class 업무처리흐름 정보 유무 확인
        	* @param cnd : 조건
        	* @return 여부
        	* @example this.cfnIsExstTaskPrcsFlw({ seq:"999", jobCd:"TAS10453", nextJobCd:"TAS10404" }));
        	*
        	*/
        	this.cfnIsExstTaskPrcsFlw = function(cnd) {
        		if(this.isValidObject(this.FV_DS_OTPT_TASK_FLOW_INFO)) {
        			return this[this.FV_DS_OTPT_TASK_FLOW_INFO].findRowExpr(Object.keys(cnd).map(function(k) { return (k + " == '" + cnd[k] + "'"); }).join(" && ")) != -1;
        		}

        		return false;
        	};
        }

        /**
        * @class 탭페이지 Index 찾기
        * @param this.tab : Tab Object, name : TabPageName
        * @return TabPageName의 Index
        * @example this.cfnGetTabIndex(this.tab, tappagename);
        *
        */
        this.cfnGetTabIndex = function(obj, name) {
            return Array.from(obj.tabpages).map(function(v) { return v.name; }).indexOf(name);
        };

        /**
        * @class 첨부파일 다운로드
        * @param ru : RaonkUpload, ds : dataset, colId : 다운로드 대상 column ID, e : event
        * @return
        * @example this.cfnFileDwnld(RaonkUpload, ds, colId, e);
        *
        */
        this.cfnFileDwnld = function(ru, ds, colId, e) {
            this[this.FV_DS_FILE_DWNLD] = new Dataset(this.FV_DS_FILE_DWNLD);  // 데이터셋 생성
        	var dsFile = this[this.FV_DS_FILE_DWNLD];
        	dsFile.copyData(ds);  // 데이터셋 형식 복사를 위한 처리
        	dsFile.clearData();   // 데이터셋 행 삭제
        	dsFile.copyRow(dsFile.addRow(), ds, ds.findRow("colId", colId));  // 다운로드 대상 파일 정보 복사
        	//console.log(dsFile.saveXML());
            this.gfnDownloadFile(ru, dsFile, e);  // 다운로드
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("CST002S05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
