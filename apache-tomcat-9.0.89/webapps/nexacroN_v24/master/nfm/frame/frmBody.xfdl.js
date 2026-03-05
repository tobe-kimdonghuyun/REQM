(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmBody");
            this.set_titletext("MainFrame");
            this.set_scrollbarsize("11");
            this.set_scrollbardecbuttonsize("0");
            this.set_scrollbarincbuttonsize("0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"biznDivCd\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"rn\" type=\"STRING\" size=\"256\"/><Column id=\"lgnPolcyId\" type=\"STRING\" size=\"256\"/><Column id=\"authrtId\" type=\"STRING\" size=\"256\"/><Column id=\"taskTpcd\" type=\"STRING\" size=\"256\"/><Column id=\"lgnIp\" type=\"STRING\" size=\"256\"/><Column id=\"lgnIpLmtYn\" type=\"STRING\" size=\"256\"/><Column id=\"lgnPolcyExpln\" type=\"STRING\" size=\"256\"/><Column id=\"frstRgtrId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfrId\" type=\"STRING\" size=\"256\"/><Column id=\"lastMdfcnDt\" type=\"STRING\" size=\"256\"/><Column id=\"authrtNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"86","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("frame::frmBottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","0","269",null,null,"divBottom:0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Left Frame");
            obj.set_url("frame::frmLeft.xfdl");
            obj.set_formscrollbartype("none auto");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","divLeft:0","0",null,null,"233","divBottom:0","1280",null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("frame::frmMain.xfdl");
            obj.set_text("Home Frame");
            this.addChild(obj.name, obj);

            obj = new Div("divRight","divMain:0","0","233",null,null,"divBottom:0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_url("frame::frmRight.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","divLeft:0","0",null,null,"233","divBottom:0","1280",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftMenuShowHide",null,"0","14","34","divMain:-14",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_hide");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnRightMenuShowHide","divMain:-14","0","14","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_RF_hide");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight
            obj = new Layout("default","",0,0,this.divRight.form,function(p){});
            this.divRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmBottom.xfdl");
            this._addPreloadList("fdl","frame::frmLeft.xfdl");
            this._addPreloadList("fdl","frame::frmMain.xfdl");
            this._addPreloadList("fdl","frame::frmRight.xfdl");
        };
        
        // User Script
        this.registerScript("frmBody.xfdl", function() {
        /**
         *  @FileName 	frmBody.xfdl
         *  @Creator 	박준하
         *  @CreateDate 2023/09/18
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2023/09/18			박준하						최초생성
         *******************************************************************************
        **/

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        this.form_onload = function(obj,e)
        {//trace(obj.name, e.eventid);
        	app.gvFrmRight = app.gvFrmBody.form.divRight;
        	app.gvFrsWork = app.gvFrmBody.form.divWork;
        	app.gvFrsWork.org_right = Number(this.divWork.right);

        	this.fnToggleFrame();

        	this.setTimer(1,1000);
        };

        /**
         * @description Form 크기 변경
        **/
        this.form_onsize = function(obj,e)
        {//trace(obj.name, e.eventid, this.hscrollbar.max);
        	this.fnToggleFrame();
        	this.fnResizeBodyHeight();
        };

        /**
         * @description Form 수직 스크롤
        **/
        this.form_onvscroll = function(obj,e)
        {//trace(obj.name, e.eventid);
        	if (this.divWork.visible)
        	{
        		let divMdi = app.gvFrsWork.form[app.gvFrmMdi.form.fnGetActiveId()];
        		if (divMdi.visible) divMdi._vscrollbar_pos = e.pos;
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "searchLgnChk":

        			var authrtId = app.gdsUserInfo.getColumn(0, 'athry');
        			var ip = app.gdsUserInfo.getColumn(0, 'ip');

        			var chk = false;

        			for (let row = 0; row < this.dsList.rowcount; row++) {
        				if(this.dsList.getColumn(row, 'authrtId') == authrtId && this.dsList.getColumn(row, 'lgnIp') == ip && this.dsList.getColumn(row, 'lgnIpLmtYn') == 'Y') {
        					this.alert("사용자님의 권한은 해당 IP 접속이 차단되어 있습니다.\n관리자에게 문의해 주세요.");
        					chk = true;
        					break;
        				}

        			}

        			if(chk == false){
        				break;
        			}else{
        				window.location.href = "/cmmn/login/actionLogout.do";
        				break;
        			}

        			break;



        	}
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnLgnPolcySearch = function ()
        {
        	var authrtId = app.gdsUserInfo.getColumn(0, 'athry');
        	this.dsSearch.setColumn(0,'authrtId',authrtId);
        	var strSvcId    = "searchLgnChk";
        	var strSvcUrl   = "/cmmnn/sysMng/lngPolcyMng/readLngPolcyChkList.do";
        	var inData      = "dsSearch=dsSearch";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };

        /**
         * @description Bottom Frame 넓이 조정
        **/
        this.fnResizeBottomWidth = function()
        {
        	if (this.hscrollbar.max > 0)
        	{
        		this.divBottom.set_width(this.divLeft.getOffsetWidth() + this.divMain.getOffsetWidth() + this.divRight.getOffsetWidth());
        	}
        	else
        	{
        		this.divBottom.set_right('0');
        	}

         	this.resetScroll();
        }

        /**
         * @description Body Frame 높이 조정
        **/
        this.fnResizeBodyHeight = function()
        {
        	let tabMdi = app.gvFrmMdi.form.tabMdi;
        	if (tabMdi.getTabpageCount() > 0)
        	{
        		this.gfnResizeFrameHeight(app.gvFrsWork.form.components[tabMdi.tabpages[tabMdi.tabindex].name].form.divWork.form, true);
        	}
        	else
        	{
        		this.gfnResizeFrameHeight(app.gvFrmMain.form.divWork.form);
        	}
        }

        /**
         * @description Left/Right Frame 접힘/펼침 처리
        **/
        this.fnToggleFrame = function()
        {
        	if (this.getOffsetWidth() < Number(this.divMain.minwidth) + this.divLeft.org_width + this.divRight.org_width)
        	{
        		this.gfnHideRightFrame();
        	}
        	else if (this.getOffsetWidth() >= Number(this.divMain.minwidth) + this.divLeft.org_width + this.divRight.org_width)
        	{
        		this.gfnShowRightFrame();
        	}

        	if (this.getOffsetWidth() < Number(this.divMain.minwidth) + this.divLeft.org_width)
        	{
        		this.gfnHideLeftFrame();
        	}
        	else if (this.getOffsetWidth() >= Number(this.divMain.minwidth) + this.divLeft.org_width)
        	{
        		this.gfnShowLeftFrame();
        	}

        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        /**
         * @description 접기/펼치기 버튼 click
        **/
        this.btnLeftMenuShowHide_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_LF_show")
        	{
        		this.gfnShowLeftFrame();
        	}
        	else
        	{
        		this.gfnHideLeftFrame();
        	}
        };

        this.btnRightMenuShowHide_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_RF_show")
        	{
        		this.gfnShowRightFrame();
        	}
        	else
        	{
        		this.gfnHideRightFrame();
        	}
        };


        this.on_timer = function(obj,e)
        {
        	if(e.timerid == 1){
        		this.fnLgnPolcySearch();
        		this.killTimer(1)
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onvscroll",this.form_onvscroll,this);
            this.addEventHandler("ontimer",this.on_timer,this);
            this.btnLeftMenuShowHide.addEventHandler("onclick",this.btnLeftMenuShowHide_onclick,this);
            this.btnRightMenuShowHide.addEventHandler("onclick",this.btnRightMenuShowHide_onclick,this);
        };
        this.loadIncludeScript("frmBody.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
