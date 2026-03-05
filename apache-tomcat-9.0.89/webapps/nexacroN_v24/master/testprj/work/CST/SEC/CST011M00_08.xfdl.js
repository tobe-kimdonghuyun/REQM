(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00_08");
            this.set_titletext("위해물품 만족도조사(만족도조사)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staSubTitle","284","120","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("만족도조사");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold","1130","15","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1354","120","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","284","120","100.00%","70",null,null,null,null,null,"70",this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divFold","1330","124","100.00%","846",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("1");
            obj.set_text("1. 요청하신 서비스 결과에 대한 전반적인 만족도는 어느 정도입니까?");
            obj.set_cssclass("sta_WF_Label");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","300","85.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoDgstfnArtclFstVl\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Radio("rdoDgstfnArtclFstVl","134","97","100%","93",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_fittocontents("height");
            var divFold_form_rdoDgstfnArtclFstVl_innerdataset = new nexacro.NormalDataset("divFold_form_rdoDgstfnArtclFstVl_innerdataset", obj);
            divFold_form_rdoDgstfnArtclFstVl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1점(매우불만족)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2점</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3점</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4점</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5점</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6점</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7점</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8점</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9점</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10점(매우만족)</Col></Row></Rows>");
            obj.set_innerdataset(divFold_form_rdoDgstfnArtclFstVl_innerdataset);
            this.divFold.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("4");
            obj.set_text("2. 해당서비스의 신청업무(신청서작성)은 쉽고 편리하다.");
            obj.set_cssclass("sta_WF_Label");
            this.divFold.addChild(obj.name, obj);

            obj = new Radio("rdoDgstfnArtclSecdVl","134","97","100%","93",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_fittocontents("height");
            var divFold_form_rdoDgstfnArtclSecdVl_innerdataset = new nexacro.NormalDataset("divFold_form_rdoDgstfnArtclSecdVl_innerdataset", obj);
            divFold_form_rdoDgstfnArtclSecdVl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1점(매우불만족)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2점</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3점</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4점</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5점</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6점</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7점</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8점</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9점</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10점(매우만족)</Col></Row></Rows>");
            obj.set_innerdataset(divFold_form_rdoDgstfnArtclSecdVl_innerdataset);
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","10.00","98","300","85.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoDgstfnArtclSecdVl\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","96.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("8");
            obj.set_text("3. 해당서비스의 신청기한은 적정하다.");
            obj.set_cssclass("sta_WF_Label");
            this.divFold.addChild(obj.name, obj);

            obj = new Radio("rdoDgstfnArtclThrVl","134","97","100%","93",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            obj.set_fittocontents("height");
            var divFold_form_rdoDgstfnArtclThrVl_innerdataset = new nexacro.NormalDataset("divFold_form_rdoDgstfnArtclThrVl_innerdataset", obj);
            divFold_form_rdoDgstfnArtclThrVl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1점(매우불만족)</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2점</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3점</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4점</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5점</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6점</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7점</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8점</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9점</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10점(매우만족)</Col></Row></Rows>");
            obj.set_innerdataset(divFold_form_rdoDgstfnArtclThrVl_innerdataset);
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","10.00","98","300","85.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoDgstfnArtclThrVl\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00","0","60","100.00%","96.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("12");
            obj.set_text("4. 서비스 처리와 관련하여 느끼셨던 칭찬사항을 말씀해 주십시요.");
            obj.set_cssclass("sta_WF_Label");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00","10.00","98","300","85.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtDgstfnArtclFstCn\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00","0","60","100.00%","96.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new TextArea("txtDgstfnArtclFstCn","92","554","100%","100",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("18");
            obj.set_maxlength("4000");
            this.divFold.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00_00","10","98","100%","46",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("15");
            obj.set_text("5. 서비스 처리와 관련하여 느끼셨던 불만사항을 말씀해 주십시요.");
            obj.set_cssclass("sta_WF_Label");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00","10.00","98","300","85.999",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtDgstfnArtclSecdCn\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00_00","0","60","100.00%","110",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new TextArea("txtDgstfnArtclSecdCn","57","644","100%","100",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("19");
            obj.set_maxlength("4000");
            this.divFold.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00_00_00_00_00","10","98","100%","66",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("20");
            obj.set_text("6. 업무처리 과정에서 불편함을 느꼈거나 관련 직원에게 불합리한 요구를 받은 적이 있으십니까? \r\n혹은 이외 개선이 필요하다고 생각되는 부분이 있다면 알려주세요.");
            obj.set_cssclass("sta_WF_Label");
            obj.set_fittocontents("height");
            obj.set_verticalAlign("top");
            obj.set_padding("16px 0px 10px 15px");
            this.divFold.addChild(obj.name, obj);

            obj = new TextArea("txtDgstfnArtclThrCn","57","644","100%","100",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("21");
            obj.set_maxlength("4000");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00_00_00_00_00","10.00","98","300","120",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"txtDgstfnArtclThrCn\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("pan00_00_00_00_00_00_00","0","60","100.00%","131",null,null,null,null,null,null,this.divFold.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00_00_00_00_00_00\"/></Contents>");
            this.divFold.addChild(obj.name, obj);

            obj = new Panel("panForm","0","5","100.00%","828",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"divFold\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFold.form
            obj = new Layout("default","",0,0,this.divFold.form,
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
                p.pan00.move("0","60","100.00%","96.999",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("1. 요청하신 서비스 결과에 대한 전반적인 만족도는 어느 정도입니까?");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","300","85.999",null,null);

                p.rdoDgstfnArtclFstVl.set_taborder("3");
                p.rdoDgstfnArtclFstVl.set_innerdataset(divFold_form_rdoDgstfnArtclFstVl_innerdataset);
                p.rdoDgstfnArtclFstVl.set_codecolumn("codecolumn");
                p.rdoDgstfnArtclFstVl.set_datacolumn("datacolumn");
                p.rdoDgstfnArtclFstVl.set_columncount("3");
                p.rdoDgstfnArtclFstVl.set_fittocontents("height");
                p.rdoDgstfnArtclFstVl.move("134","97","100%","93",null,null);

                p.staLabel00_00.set_taborder("4");
                p.staLabel00_00.set_text("2. 해당서비스의 신청업무(신청서작성)은 쉽고 편리하다.");
                p.staLabel00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.rdoDgstfnArtclSecdVl.set_taborder("5");
                p.rdoDgstfnArtclSecdVl.set_innerdataset(divFold_form_rdoDgstfnArtclSecdVl_innerdataset);
                p.rdoDgstfnArtclSecdVl.set_codecolumn("codecolumn");
                p.rdoDgstfnArtclSecdVl.set_datacolumn("datacolumn");
                p.rdoDgstfnArtclSecdVl.set_columncount("3");
                p.rdoDgstfnArtclSecdVl.set_fittocontents("height");
                p.rdoDgstfnArtclSecdVl.move("134","97","100%","93",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("10.00","98","300","85.999",null,null);

                p.pan00_00.set_taborder("7");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","96.999",null,null);

                p.staLabel00_00_00.set_taborder("8");
                p.staLabel00_00_00.set_text("3. 해당서비스의 신청기한은 적정하다.");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00.move("10","98","100%","46",null,null);

                p.rdoDgstfnArtclThrVl.set_taborder("9");
                p.rdoDgstfnArtclThrVl.set_innerdataset(divFold_form_rdoDgstfnArtclThrVl_innerdataset);
                p.rdoDgstfnArtclThrVl.set_codecolumn("codecolumn");
                p.rdoDgstfnArtclThrVl.set_datacolumn("datacolumn");
                p.rdoDgstfnArtclThrVl.set_columncount("3");
                p.rdoDgstfnArtclThrVl.set_fittocontents("height");
                p.rdoDgstfnArtclThrVl.move("134","97","100%","93",null,null);

                p.Panel00_00_00_00.set_taborder("10");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("10.00","98","300","85.999",null,null);

                p.pan00_00_00.set_taborder("11");
                p.pan00_00_00.set_horizontalgap("20");
                p.pan00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00_00.set_flexwrap("wrap");
                p.pan00_00_00.set_fittocontents("height");
                p.pan00_00_00.set_verticalgap("0");
                p.pan00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00_00.move("0","60","100.00%","96.999",null,null);

                p.staLabel00_00_00_00_00.set_taborder("12");
                p.staLabel00_00_00_00_00.set_text("4. 서비스 처리와 관련하여 느끼셨던 칭찬사항을 말씀해 주십시요.");
                p.staLabel00_00_00_00_00.set_cssclass("sta_WF_Label");
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

                p.txtDgstfnArtclFstCn.set_taborder("18");
                p.txtDgstfnArtclFstCn.set_maxlength("4000");
                p.txtDgstfnArtclFstCn.move("92","554","100%","100",null,null);

                p.staLabel00_00_00_00_00_00.set_taborder("15");
                p.staLabel00_00_00_00_00_00.set_text("5. 서비스 처리와 관련하여 느끼셨던 불만사항을 말씀해 주십시요.");
                p.staLabel00_00_00_00_00_00.set_cssclass("sta_WF_Label");
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

                p.txtDgstfnArtclSecdCn.set_taborder("19");
                p.txtDgstfnArtclSecdCn.set_maxlength("4000");
                p.txtDgstfnArtclSecdCn.move("57","644","100%","100",null,null);

                p.staLabel00_00_00_00_00_00_00.set_taborder("20");
                p.staLabel00_00_00_00_00_00_00.set_text("6. 업무처리 과정에서 불편함을 느꼈거나 관련 직원에게 불합리한 요구를 받은 적이 있으십니까? \r\n혹은 이외 개선이 필요하다고 생각되는 부분이 있다면 알려주세요.");
                p.staLabel00_00_00_00_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel00_00_00_00_00_00_00.set_fittocontents("height");
                p.staLabel00_00_00_00_00_00_00.set_verticalAlign("top");
                p.staLabel00_00_00_00_00_00_00.set_padding("16px 0px 10px 15px");
                p.staLabel00_00_00_00_00_00_00.move("10","98","100%","66",null,null);

                p.txtDgstfnArtclThrCn.set_taborder("21");
                p.txtDgstfnArtclThrCn.set_maxlength("4000");
                p.txtDgstfnArtclThrCn.move("57","644","100%","100",null,null);

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
                p.pan00_00_00_00_00_00_00.move("0","60","100.00%","131",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divFold.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divFold.form
            obj = new Layout("mobile","",0,0,this.divFold.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divFold.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divFold.form
            obj = new Layout("Layout0","",0,0,this.divFold.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_00_00_00_00_00_00.move("10","98","400","62",null,null);

                p.Panel00_00_00_00_00_00_00_00.move("10.00","98","100%","120",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divFold.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("위해물품 만족도조사(만족도조사)");

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("만족도조사");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("284","120","100%","50",null,null);

                p.btnFold.set_taborder("1");
                p.btnFold.set_cssclass("btn_WF_ACMinus");
                p.btnFold.set_visible("false");
                p.btnFold.move("1130","15","34","34",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.move("1354","120","209","50",null,null);

                p.panTitle.set_taborder("3");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_minheight("");
                p.panTitle.set_maxheight("70");
                p.panTitle.move("284","120","100.00%","70",null,null);

                p.divFold.set_taborder("4");
                p.divFold.set_text("신청자정보");
                p.divFold.set_cssclass("div_WF_Bg");
                p.divFold.set_fittocontents("height");
                p.divFold.move("1330","124","100.00%","846",null,null);

                p.panForm.set_taborder("5");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","5","100.00%","828",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
                p.panForm.set_fittocontents("height");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divFold.form.rdoDgstfnArtclFstVl","value","dsMst","dgstfnArtclFstVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divFold.form.rdoDgstfnArtclSecdVl","value","dsMst","dgstfnArtclSecdVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divFold.form.rdoDgstfnArtclThrVl","value","dsMst","dgstfnArtclThrVl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divFold.form.txtDgstfnArtclFstCn","value","dsMst","dgstfnArtclFstCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divFold.form.txtDgstfnArtclSecdCn","value","dsMst","dgstfnArtclSecdCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divFold.form.txtDgstfnArtclThrCn","value","dsMst","dgstfnArtclThrCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST011M00_08.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011M00_08.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011M00_06.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/11
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/12/26			박상희						최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvParent = this.parent.parent;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };

        /*******************************************************************************************************************************
         * 공통함수영역
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
        this.fnInit = function () {

        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //버튼 접기, 펼치기
        this.btnFold_onclick = function(obj,e)
        {
        	this.cfnFold(obj, e.ctrlkey);
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnFold.addEventHandler("onclick",this.btnFold_onclick,this);
        };
        this.loadIncludeScript("CST011M00_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
