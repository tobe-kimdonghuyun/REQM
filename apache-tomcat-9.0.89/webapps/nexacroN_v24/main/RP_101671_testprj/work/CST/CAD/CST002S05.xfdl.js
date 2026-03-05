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
            this.set_titletext("만족도조사");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST002S05.xfdl","xjs::TaskCom.xjs");
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
        	var ro = !this.cfnGetAtrb.call("isTAS00333");
        	Array.from(this.divDgstfnExmn.form.components).forEach(function(v) {
        		if(v instanceof Radio || v instanceof TextArea) {
        			v.readonly = ro;
        		}
        	});
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
