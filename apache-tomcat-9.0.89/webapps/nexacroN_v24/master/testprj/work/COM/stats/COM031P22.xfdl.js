(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM031P22");
            this.set_titletext("검색관리 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,1200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"신청번호\" type=\"STRING\" size=\"256\"/><Column id=\"단계\" type=\"STRING\" size=\"256\"/><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"종료구분\" type=\"STRING\" size=\"256\"/><Column id=\"서비스\" type=\"STRING\" size=\"256\"/><Column id=\"발생일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성일시\" type=\"STRING\" size=\"256\"/><Column id=\"작성자명\" type=\"STRING\" size=\"256\"/><Column id=\"연락처\" type=\"STRING\" size=\"256\"/><Column id=\"업체명\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/><Column id=\"처리자명\" type=\"STRING\" size=\"256\"/><Column id=\"처리완료일시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"신청번호\">ptn01</Col><Col id=\"단계\">이동지역</Col><Col id=\"구분\">2024-10-21</Col><Col id=\"종료구분\">전*동</Col><Col id=\"서비스\">0000100001</Col><Col id=\"발생일시\">대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-06-11</Col><Col id=\"업체명\"/><Col id=\"내용\">032-***-0000</Col><Col id=\"처리자명\">010-****-5678</Col><Col id=\"처리완료일시\">○</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">입주자</Col><Col id=\"구분\">2024-10-15</Col><Col id=\"종료구분\">홍*동</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">㈜대한항공</Col><Col id=\"작성일시\">110-81-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">2050-07-10</Col></Row><Row><Col id=\"신청번호\">steg1</Col><Col id=\"단계\">공사직원</Col><Col id=\"구분\">2024-09-21</Col><Col id=\"종료구분\">오*수</Col><Col id=\"서비스\">100000001</Col><Col id=\"발생일시\">인천국제공항공사</Col><Col id=\"작성일시\">123-45-*****</Col><Col id=\"작성자명\"/><Col id=\"연락처\">9000-12-31</Col><Col id=\"업체명\">터미널건축팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","10",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1660.00","262","100%","300",null,null,null,null,"300",null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_visible("false");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSchClose",null,"10","34","34","10",null,null,null,null,null,this.divForm.form.divInfoGuide.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            this.divForm.form.divInfoGuide.addChild(obj.name, obj);

            obj = new Div("divGrd","0","480","100%","1200",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn",null,"0","450","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDw00\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdDw\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grd01_01","0","PanelGrdBtn:10","100.00%","60",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("10");
            obj.set_autofittype("none");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"250\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"250\"/><Column size=\"48\"/></Columns><Rows><Row size=\"48\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/><Cell col=\"3\" text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/><Cell col=\"6\" text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"7\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/><Cell col=\"9\" text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"10\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"11\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/><Cell col=\"12\" text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"13\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"14\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/><Cell col=\"15\" text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"16\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"17\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/><Cell col=\"18\" text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellSortDown\"/><Cell col=\"19\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"20\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellDownArrow\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","grd01_01:10","100.00%","410",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"56\" band=\"head\"/><Row size=\"56\" band=\"head\"/><Row size=\"56\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"데이터항목(행)\"/><Cell col=\"1\" colspan=\"4\" text=\"데이터항목(열) 컬럼3\" cssclass=\"CellEnd\"/><Cell row=\"1\" col=\"1\" text=\"데이터항목(열) 컬럼4\"/><Cell row=\"1\" col=\"2\" text=\"데이터항목(열) 컬럼4\"/><Cell row=\"1\" col=\"3\" text=\"데이터항목(열) 컬럼4\"/><Cell row=\"1\" col=\"4\" text=\"데이터항목(열) 컬럼4\" cssclass=\"CellEnd\"/><Cell row=\"2\" col=\"1\" text=\"측정값(총계)\"/><Cell row=\"2\" col=\"2\" text=\"측정값(총계)\"/><Cell row=\"2\" col=\"3\" text=\"측정값(총계)\"/><Cell row=\"2\" col=\"4\" text=\"측정값(총계)\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","1368","3","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw00","336.00","10","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("측정값 변경");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Panel("PanelGrdBtn00",null,"Grid00:20","100%","34","0",null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("end");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnGrdDw00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnGrdDw00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnGrdDw00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDw01\"/></Contents>");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw00_00_00","202.00","10","105","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("5");
            obj.set_text("차트 종류 변경 ");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw01","345.00","0","124","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("6");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_fittocontents("width");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw00_00_00_00","0","0","129","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("7");
            obj.set_text("차트의 행과 열 변경");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDw00_00","109.00","0","112","34",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("8");
            obj.set_text("레전드위치 변경");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("Div00","0","PanelGrdBtn00:10","100%","300",null,null,null,null,null,null,this.divForm.form.divGrd.form);
            obj.set_taborder("9");
            obj.set_background("#ffffff");
            obj.set_cssclass("div_WF_ChartBg");
            this.divForm.form.divGrd.addChild(obj.name, obj);

            obj = new Div("divGuide","1590.00","135","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Div("divPopBtn","20","divForm:20",null,"60","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_01_00_00","200.00","365","116","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("보고서 출력");
            obj.set_cssclass("btn_WF_No");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSchClose.set_taborder("0");
                p.btnSchClose.set_cssclass("btn_WF_ACPlus");
                p.btnSchClose.move(null,"10","34","34","10",null);
            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divForm.form.divInfoGuide.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divGrd.form.Div00
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form.Div00.form,function(p){});
            this.divForm.form.divGrd.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.divGrd.form
            obj = new Layout("default","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.PanelGrdBtn.set_taborder("1");
                p.PanelGrdBtn.set_flexcrossaxisalign("start");
                p.PanelGrdBtn.set_flexcrossaxiswrapalign("start");
                p.PanelGrdBtn.set_flexmainaxisalign("end");
                p.PanelGrdBtn.set_fittocontents("width");
                p.PanelGrdBtn.set_horizontalgap("10");
                p.PanelGrdBtn.move(null,"0","450","34","0",null);

                p.grd01_01.set_taborder("10");
                p.grd01_01.set_autofittype("none");
                p.grd01_01.set_treeinitstatus("expand,all");
                p.grd01_01.set_treeuseimage("false");
                p.grd01_01.set_treeusecheckbox("false");
                p.grd01_01.set_treeuseexpandkey("false");
                p.grd01_01.set_treeusebutton("use");
                p.grd01_01.set_treeuseline("true");
                p.grd01_01.set_treeasynctoggle("false");
                p.grd01_01.set_cssclass("grd_WF_Tree");
                p.grd01_01.set_binddataset("Dataset00");
                p.grd01_01.move("0","PanelGrdBtn:10","100.00%","60",null,null);

                p.Grid00.set_taborder("0");
                p.Grid00.set_binddataset("Dataset00");
                p.Grid00.set_autofittype("col");
                p.Grid00.move("0","grd01_01:10","100.00%","410",null,null);

                p.btnGrdDw.set_taborder("2");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("1368","3","124","34",null,null);

                p.btnGrdDw00.set_taborder("3");
                p.btnGrdDw00.set_text("측정값 변경");
                p.btnGrdDw00.set_fittocontents("width");
                p.btnGrdDw00.set_cssclass("btn_WF_Small");
                p.btnGrdDw00.move("336.00","10","124","34",null,null);

                p.PanelGrdBtn00.set_taborder("4");
                p.PanelGrdBtn00.set_flexcrossaxisalign("start");
                p.PanelGrdBtn00.set_fittocontents("height");
                p.PanelGrdBtn00.set_horizontalgap("10");
                p.PanelGrdBtn00.set_flexwrap("wrap");
                p.PanelGrdBtn00.set_type("horizontal");
                p.PanelGrdBtn00.set_flexmainaxisalign("end");
                p.PanelGrdBtn00.set_verticalgap("10");
                p.PanelGrdBtn00.move(null,"Grid00:20","100%","34","0",null);

                p.btnGrdDw00_00_00.set_taborder("5");
                p.btnGrdDw00_00_00.set_text("차트 종류 변경 ");
                p.btnGrdDw00_00_00.set_fittocontents("width");
                p.btnGrdDw00_00_00.set_cssclass("btn_WF_Small");
                p.btnGrdDw00_00_00.move("202.00","10","105","34",null,null);

                p.btnGrdDw01.set_taborder("6");
                p.btnGrdDw01.set_text("다운로드(엑셀)");
                p.btnGrdDw01.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw01.set_fittocontents("width");
                p.btnGrdDw01.move("345.00","0","124","34",null,null);

                p.btnGrdDw00_00_00_00.set_taborder("7");
                p.btnGrdDw00_00_00_00.set_text("차트의 행과 열 변경");
                p.btnGrdDw00_00_00_00.set_fittocontents("width");
                p.btnGrdDw00_00_00_00.set_cssclass("btn_WF_Small");
                p.btnGrdDw00_00_00_00.move("0","0","129","34",null,null);

                p.btnGrdDw00_00.set_taborder("8");
                p.btnGrdDw00_00.set_text("레전드위치 변경");
                p.btnGrdDw00_00.set_fittocontents("width");
                p.btnGrdDw00_00.set_cssclass("btn_WF_Small");
                p.btnGrdDw00_00.move("109.00","0","112","34",null,null);

                p.Div00.set_taborder("9");
                p.Div00.set_background("#ffffff");
                p.Div00.set_cssclass("div_WF_ChartBg");
                p.Div00.move("0","PanelGrdBtn00:10","100%","300",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.divForm.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Grid00.set_autofittype("none");
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
                p.Div00.move("0","PanelGrdBtn00:10","100%","300",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.divForm.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divInfoGuide.set_taborder("0");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_visible("false");
                p.divInfoGuide.set_minheight("300");
                p.divInfoGuide.set_maxheight("");
                p.divInfoGuide.move("1660.00","262","100%","300",null,null);

                p.divGrd.set_taborder("1");
                p.divGrd.set_text("Div01");
                p.divGrd.set_fittocontents("height");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.move("0","480","100%","1200",null,null);
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
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00_01_00_00.set_taborder("1");
                p.btn00_01_00_00.set_text("보고서 출력");
                p.btn00_01_00_00.set_cssclass("btn_WF_No");
                p.btn00_01_00_00.set_fittocontents("width");
                p.btn00_01_00_00.move("200.00","365","116","40",null,null);

                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn00_01_00_00.set_text("보고서 출력");
            	}
            );
            obj.set_flexmainaxisalign("start");
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,1200,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("검색관리 상세");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("20","10",null,null,"20","70");

                p.divGuide.set_taborder("1");
                p.divGuide.set_text("div00");
                p.divGuide.set_visible("false");
                p.divGuide.set_cssclass("div_GD_Tip");
                p.divGuide.move("1590.00","135","450","385",null,null);

                p.divPopBtn.set_taborder("2");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("20","divForm:20",null,"60","20",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,1200,this,
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM031P22.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.divForm.form.divSch.set_width("100%");
        	this.divForm.form.divSch.fittocontents = "height";
        }



        this.divForm_divSch_btnSchClose_onclick = function(obj,e)
        {
        	this.divForm.form.divSch.form.panLabel.fittocontents="none";
        	this.divForm.form.divSch.form.panLabel.set_height("45px");
        	this.divForm.form.divSch.fittocontents="none";
        	this.divForm.form.divSch.set_height("145px");
        	this.divForm.form.divSch.form.btnSchClose.set_cssclass("btn_WF_SchOpen");
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.divInfoGuide.form.btnSchClose.addEventHandler("onclick",this.divInfoGuide_btnSchClose_onclick,this);
            this.divForm.form.divGrd.form.grd01_01.addEventHandler("ondrag",this.grd03_ondrag,this);
            this.divForm.form.divGrd.form.grd01_01.addEventHandler("ondrop",this.grd03_ondrop,this);
            this.divForm.form.divGrd.form.grd01_01.addEventHandler("ondragmove",this.grd03_ondragmove,this);
            this.divForm.form.divGrd.form.grd01_01.addEventHandler("ondragenter",this.grd03_ondragenter,this);
            this.divForm.form.divGrd.form.grd01_01.addEventHandler("ondragleave",this.grd03_ondragleave,this);
            this.divForm.form.divGrd.form.grd01_01.addEventHandler("ondropdown",this.grd03_ondropdown,this);
            this.divForm.form.divGrd.form.grd01_01.addEventHandler("onenterdown",this.grd03_onenterdown,this);
        };
        this.loadIncludeScript("COM031P22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
