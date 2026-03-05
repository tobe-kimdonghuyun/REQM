(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST009M00");
            this.set_titletext("도면대출신청(신청도면목록)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청도면 목록");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1070","0","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1451","30","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","100.00%","550",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","70","100.00%","500",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","20.00","10","100%","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("도면은 공사방침에따라 DWG, PDF, PNG 등 임의의 파일형태로 제공됩니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","20.00","44","100%","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("DWG로 제공받으실 경우를 대비하여 CAD 프로그램이나 CAD 뷰어 프로그램을 준비하시길 바랍니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00","20.00","78","100%","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("룸번호는 다음과 같이 기재해주시길 바랍니다. (예시 : 1-10-032)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00_00_00","20.00","112","100%","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("건물 및 공중마다 도면 담당자가 다르기떄문에 필요 건물에따른 공종 전부 각각 기입");
            obj.set_cssclass("sta_WF_Des2");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","0","50","100.00%","152",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_01_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"sta00_00_01_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divGrd","20","0","100%","480",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_border("0px none,0px none,1px solid #dddddd,0px none");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"0","550","34","0",null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdRltwfCadList","20","44",null,null,"20","20",null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsRltwfCadList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.getSetter("uFunction").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"43\"/><Column size=\"165\"/><Column size=\"200\"/><Column size=\"230\"/><Column size=\"84\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"건물위치\" cssclass=\"CellHead_E\"/><Cell col=\"3\" text=\"룸번호(예시:1-10-032)\" cssclass=\"CellHead_E\"/><Cell col=\"4\" text=\"사용목적\" cssclass=\"CellHead_E\"/><Cell col=\"5\" text=\"공종분야\" cssclass=\"CellHead_E\"/><Cell col=\"6\" text=\"비고\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCadBleCombo\" combocodecol=\"cdId\" combodatacol=\"cdNm\" text=\"bind:bldgNm\"/><Cell col=\"3\" text=\"bind:rnb\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:usePrpsCn\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:cstrnKndFldCd\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsTsccopaCombo\" combocodecol=\"cdId\" combodatacol=\"cdNm\"/><Cell col=\"6\" cssclass=\"CellEnd\" text=\"bind:rmrkCn\" displaytype=\"editcontrol\" edittype=\"normal\"/></Band></Format></Formats>");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div00.form.divGrd.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.divGrd.form
            obj = new Layout("default","",0,0,this.div00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panGrdBtn.set_taborder("1");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("0px 20px 0px 0px");
                p.panGrdBtn.move(null,"0","550","34","0",null);

                p.grdRltwfCadList.set_taborder("0");
                p.grdRltwfCadList.set_binddataset("dsRltwfCadList");
                p.grdRltwfCadList.set_autofittype("col");
                p.grdRltwfCadList.set_autoenter("select");
                p.grdRltwfCadList.getSetter("uFunction").set("checkbox");
                p.grdRltwfCadList.move("20","44",null,null,"20","20");

                p.btnGrdAdd.set_taborder("2");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDel.set_taborder("3");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);
            	}
            );
            obj.set_verticalgap("20");
            this.div00.form.divGrd.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.divGrd.form
            obj = new Layout("Layout0","",0,0,this.div00.form.divGrd.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRltwfCadList.set_autofittype("none");

                p.btnGrdAdd.set_visible("false");

                p.btnGrdRegi.set_visible("false");

                p.btnGrdDel.set_visible("false");

                p.btnGrdDw.set_visible("false");
            	}
            );
            obj.set_verticalgap("20");
            this.div00.form.divGrd.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00_00_01.set_taborder("0");
                p.sta00_00_01.set_text("도면은 공사방침에따라 DWG, PDF, PNG 등 임의의 파일형태로 제공됩니다.");
                p.sta00_00_01.set_cssclass("sta_WF_Des");
                p.sta00_00_01.set_fittocontents("height");
                p.sta00_00_01.set_flexgrow("1");
                p.sta00_00_01.move("20.00","10","100%","30",null,null);

                p.sta00_00_01_00.set_taborder("1");
                p.sta00_00_01_00.set_text("DWG로 제공받으실 경우를 대비하여 CAD 프로그램이나 CAD 뷰어 프로그램을 준비하시길 바랍니다.");
                p.sta00_00_01_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00.set_fittocontents("height");
                p.sta00_00_01_00.set_flexgrow("1");
                p.sta00_00_01_00.move("20.00","44","100%","30",null,null);

                p.sta00_00_01_00_00.set_taborder("2");
                p.sta00_00_01_00_00.set_text("룸번호는 다음과 같이 기재해주시길 바랍니다. (예시 : 1-10-032)");
                p.sta00_00_01_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_01_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00.set_flexgrow("1");
                p.sta00_00_01_00_00.move("20.00","78","100%","30",null,null);

                p.sta00_00_01_00_00_00.set_taborder("3");
                p.sta00_00_01_00_00_00.set_text("건물 및 공중마다 도면 담당자가 다르기떄문에 필요 건물에따른 공종 전부 각각 기입");
                p.sta00_00_01_00_00_00.set_cssclass("sta_WF_Des2");
                p.sta00_00_01_00_00_00.set_fittocontents("height");
                p.sta00_00_01_00_00_00.set_flexgrow("1");
                p.sta00_00_01_00_00_00.move("20.00","112","100%","30",null,null);

                p.Panel00_02.set_taborder("4");
                p.Panel00_02.set_fittocontents("height");
                p.Panel00_02.set_type("vertical");
                p.Panel00_02.set_verticalgap("4");
                p.Panel00_02.set_spacing("10px 20px 10px 20px");
                p.Panel00_02.move("0","50","100.00%","152",null,null);

                p.divGrd.set_taborder("5");
                p.divGrd.set_text("Div01");
                p.divGrd.set_formscrollbartype("none none");
                p.divGrd.set_formscrolltype("none");
                p.divGrd.set_border("0px none,0px none,1px solid #dddddd,0px none");
                p.divGrd.move("20","0","100%","480",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("mobile","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("도면대출신청(신청도면목록)");

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("신청도면 목록");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.move("1070","0","209","50",null,null);

                p.Panel01_00.set_taborder("2");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.set_fittocontents("none");
                p.Panel01_00.set_minheight("70");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.move("1451","30","100.00%","70",null,null);

                p.Panel02.set_taborder("3");
                p.Panel02.set_type("vertical");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","0","100.00%","550",null,null);

                p.div00.set_taborder("4");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("0","70","100.00%","500",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",390,600,this,
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
        this.registerScript("CST009M00_03.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST009M00_03.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/09/11
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/09/11			An							최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.dsRltwfCadList = this.lookup("dsRltwfCadList");
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
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
        this.fnListSize = function()
        {
        	var vPx = this.div00.form.divGrd.form.grdRltwfCadList.getPixelHeight();
         	var vDicPx = this.div00.form.divGrd.getPixelHeight();

         	var nCnt = this.dsRltwfCadList.rowcount-4;

         	for(i=0; i<nCnt; i++ )
         	{
         		vPx = nexacro.toNumber(vPx) + 44;
        		vDicPx = nexacro.toNumber(vDicPx) + 44;
         	}
         	this.div00.form.divGrd.form.grdRltwfCadList.height = vPx;
        	this.div00.form.divGrd.height = vDicPx;

         	this.resetScroll();
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        /**************************************************************************
         * @name : divGrd_btnGrdAdd_onclick
         * @description : 행추가
         ***************************************************************************/
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsRltwfCadList.addRow();
        	this.dsRltwfCadList.setColumn(nRow, "aplyTypeCd" , "CAD_REQ");

        	/*var nCnt = this.dsRltwfCadList.rowcount;

        	if(nCnt > 4)
        	{
        		var vPx    = this.div00.form.divGrd.form.grdRltwfCadList.getPixelHeight()+44;
        		var vDicPx = this.div00.form.divGrd.getPixelHeight()+44;
        		var vDiv   = this.div00.getPixelHeight()+44;

        		this.div00.height = vDiv;
        		this.div00.form.divGrd.height = vDicPx;
        		this.div00.form.divGrd.form.grdRltwfCadList.height = vPx;
        	}
        	this.resetScroll();
        	*/
        };

        /**************************************************************************
         * @name : divGrd_btnGrdDel_onclick
         * @description : 행삭제
         ***************************************************************************/
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var nRow = this.dsRltwfCadList.rowcount;

        	for(i=nRow; i>=0; i--)
        	{
        		var nChk = this.dsRltwfCadList.getColumn(i, "chk");
        		if(nChk == 1)
        		{
        			this.dsRltwfCadList.deleteRow(i);
        		}
        	}
        };

        this.divGrd_grdRltwfCadList_oncellclick = function(obj,e)
        {
        	//obj.dropdownCombo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
            this.div00.form.divGrd.form.grdRltwfCadList.addEventHandler("oncellclick",this.divGrd_grdRltwfCadList_oncellclick,this);
            this.div00.form.divGrd.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.div00.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
        };
        this.loadIncludeScript("CST009M00_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
