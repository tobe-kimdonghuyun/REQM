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
            this.set_titletext("도면대출신청(전달사항)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1070","0","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1301","25","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","1240","322",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj.set_spacing("10px 0px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"txtCnvyMttrCn\"/><PanelItem id=\"PanelItem00\" componentid=\"grdCnvyMttrCn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","1330","160","100.00%","310",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttrCn","0.00","10","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("내용 입력");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCnvyMttrCn","0.00","118","100%","166",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsCnvyMttrCn");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"204\"/><Column size=\"100\"/><Column size=\"801\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:frstRegDt\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd hh:mm:ss\" calendareditformat=\"yyyy-MM-dd hh:mm:ss\" calendardisplaynulltype=\"nulltext\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:frstRegNm\"/><Cell col=\"3\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","100%","530",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan02\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,390,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("도면대출신청(전달사항)");

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("전달사항");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("1070","0","209","50",null,null);

                p.Panel01_00.set_taborder("2");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.set_fittocontents("none");
                p.Panel01_00.set_minheight("70");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.move("1301","25","100.00%","70",null,null);

                p.Panel02_00.set_taborder("5");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_verticalgap("8");
                p.Panel02_00.set_spacing("10px 0px 0px 0px");
                p.Panel02_00.move("20.00","0","1240","322",null,null);

                p.pan02.set_taborder("6");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("1330","160","100.00%","310",null,null);

                p.txtCnvyMttrCn.set_taborder("3");
                p.txtCnvyMttrCn.set_displaynulltext("내용 입력");
                p.txtCnvyMttrCn.move("0.00","10","100%","100",null,null);

                p.grdCnvyMttrCn.set_taborder("4");
                p.grdCnvyMttrCn.set_binddataset("dsCnvyMttrCn");
                p.grdCnvyMttrCn.set_autofittype("col");
                p.grdCnvyMttrCn.move("0.00","118","100%","166",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_type("vertical");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","0","100%","530",null,null);
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
            obj = new BindItem("item0","txtCnvyMttrCn","value","dsCadMaster","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST009M00_05.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST009M00_05.xfdl
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
         this.dsCnvyMttrCn = this.lookup("dsCnvyMttrCn");
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
        this.fnGridSize = function()
        {
         	var vPx = this.grdCnvyMttrCn.getPixelHeight();

         	var nCnt = this.dsCnvyMttrCn.rowcount-2;

         	for(i=0; i<nCnt; i++ )
         	{
         		vPx = nexacro.toNumber(vPx) + 48;
         	}
         	this.grdCnvyMttrCn.height = vPx;
         	this.resetScroll();
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
        };
        this.loadIncludeScript("CST009M00_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
