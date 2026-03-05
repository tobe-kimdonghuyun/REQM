(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LIF901P01");
            this.set_titletext("위치정보(룸번호)등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTscAplyRnbMng", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"aplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"aplyRnbMngNo\" type=\"STRING\" size=\"256\"/><Column id=\"pstnInfoRnb\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("위치정보(룸번호) 목록");
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

            obj = new Div("divGrd","20","0","100%","480",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_border("0px none,0px none,1px solid #dddddd,0px none");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn",null,"10","550","40","0",null,null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("1");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 20px 0px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/></Contents>");
            this.div00.form.divGrd.addChild(obj.name, obj);

            obj = new Grid("grdAplyRnbMng","20","50",null,null,"20","20",null,null,null,null,this.div00.form.divGrd.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTscAplyRnbMng");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.getSetter("uFunction").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"43\"/><Column size=\"237\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"룸번호(예시:1-10-32)\" cssclass=\"CellHead_E\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"normal\" text=\"bind:pstnInfoRnb\"/></Band></Format></Formats>");
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

            obj = new Button("btnIdnty","225","630","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","357","630","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_No");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel02:10","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnIdnty\"/><PanelItem id=\"PanelItem01\" componentid=\"btnCancel\"/></Contents>");
            this.addChild(obj.name, obj);
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
                p.panGrdBtn.move(null,"10","550","40","0",null);

                p.grdAplyRnbMng.set_taborder("0");
                p.grdAplyRnbMng.set_binddataset("dsTscAplyRnbMng");
                p.grdAplyRnbMng.set_autofittype("col");
                p.grdAplyRnbMng.set_autoenter("select");
                p.grdAplyRnbMng.getSetter("uFunction").set("");
                p.grdAplyRnbMng.move("20","50",null,null,"20","20");

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
                p.grdAplyRnbMng.set_autofittype("none");

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
            obj = new Layout("default","Desktop_screen,Phone_screen",500,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("위치정보(룸번호)등록");

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("위치정보(룸번호) 목록");
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

                p.btnIdnty.set_taborder("5");
                p.btnIdnty.set_text("확인");
                p.btnIdnty.set_cssclass("btn_WF_Yes");
                p.btnIdnty.move("225","630","100","40",null,null);

                p.btnCancel.set_taborder("6");
                p.btnCancel.set_text("취소");
                p.btnCancel.set_cssclass("btn_WF_No");
                p.btnCancel.move("357","630","100","40",null,null);

                p.Panel01.set_taborder("7");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("start");
                p.Panel01.set_flexcrossaxiswrapalign("start");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.move("0","Panel02:10","100%","40",null,null);
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
        this.registerScript("LIF901P01.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	LIF901P01.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2025/01/07
        *  @Desction    위치정보(룸번호)등록 팝업
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2025/01/07			김진섭							최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	//alert("====" + this.opener.dsTscAplyRnbMng.rowcount);
        	this.dsTscAplyRnbMng.copyData( this.opener.dsTscAplyRnbMng );
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        /**************************************************************************
         * @name : divGrd_btnGrdAdd_onclick
         * @description : 행추가
         ***************************************************************************/
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsTscAplyRnbMng.addRow();
        	var nCol = this.div00.form.divGrd.form.grdAplyRnbMng.getBindCellIndex("body", "pstnInfoRnb");
        	this.div00.form.divGrd.form.grdAplyRnbMng.showEditor(true);
        	this.div00.form.divGrd.form.grdAplyRnbMng.setCellPos(nCol,nRow);

        };

        /**************************************************************************
         * @name : divGrd_btnGrdDel_onclick
         * @description : 행삭제
         ***************************************************************************/
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	var nRow = this.dsTscAplyRnbMng.rowcount;

        	for(i=nRow; i>=0; i--)
        	{
        		var nChk = this.dsTscAplyRnbMng.getColumn(i, "chk");
        		if(nChk == 1)
        		{
        			this.dsTscAplyRnbMng.deleteRow(i);
        		}
        	}
        };

        // 확인
        this.btnIdnty_onclick = function(obj,e)
        {
        	//this.opener.fnRnbCopy(this.dsTscAplyRnbMng);
        	//this.close("close");
        	for(var i = 0; i < this.dsTscAplyRnbMng.rowcount; i++) {
        		var addRow = this.opener.dsTscAplyRnbMng.addRow();
        		this.opener.dsTscAplyRnbMng.copyRow(addRow, this.dsTscAplyRnbMng, i);
        	}

        	var resJson = {
        		  res : "Y"
        	};

        	this.close(JSON.stringify(resJson));

        };

        // 취소
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div00.form.divGrd.form.grdAplyRnbMng.addEventHandler("oncellclick",this.divGrd_grdRltwfCadList_oncellclick,this);
            this.div00.form.divGrd.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.div00.form.divGrd.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.btnIdnty.addEventHandler("onclick",this.btnIdnty_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("LIF901P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
