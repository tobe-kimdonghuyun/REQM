(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("TopFrame");
            this.set_cssclass("frm_TF_bg");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1918,88);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divLeft","0","0","269","88",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staLogoBig","25","25","228","44",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_logo_big");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staLogo","divLeft:9","1","178","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_logo");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnNotice",null,"3","28","28","100",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_notice");
            this.addChild(obj.name, obj);

            obj = new Button("btnUser",null,"5","290","28","141",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("춘천국유림관리소 홍길동님, 안녕하세요");
            obj.set_cssclass("btn_TF_user");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staCount","btnNotice:-15","3",null,"16","78",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1284");
            obj.set_cssclass("sta_TF_count");
            obj.set_verticalAlign("top");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","divLeft:0","38",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staLine","divLeft:90","53",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MDI_line");
            this.addChild(obj.name, obj);

            obj = new Div("divMdi","divLeft:90","53",null,"35","321",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("divMdi");
            obj.set_url("frame::frmMdi.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"5","80","28","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("| 로그아웃");
            obj.set_cssclass("btn_TF_logout");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMdi
            obj = new Layout("default","",0,0,this.divMdi.form,function(p){});
            this.divMdi.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1918,88,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmMdi.xfdl");
        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
         *  @FileName 	frmTop.xfdl
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
        	if(!app.gdsUserInfo.getColumn(0, 'name')) {
        		//window.location.href = window.location.protocol + "//" + window.location.host + "/cmmn/login/actionMain.do";
        	}
        	app.gvFrmMdi = app.gvFrmTop.form.divMdi;
        	this.divLeft.org_width = this.divLeft.width;
        	this.divMdi.org_right = this.divMdi.right;

        	let insttNm = this.gfnIsNull(app.gdsUserInfo.getColumn(0, 'insttNm'))? '' :  app.gdsUserInfo.getColumn(0, 'insttNm') + ' ';

        	this.btnUser.set_text(insttNm + app.gdsUserInfo.getColumn(0, 'name') + '님 안녕하세요.');

        	this.fnSetCount();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnMsgCallback = function (strId, strVal)
        {
            if(strId == "logout") {
                if(strVal) {
        			window.location.href = "/cmmn/login/actionLogout.do";
                }
            }
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetCount = function()
        {
        	if(Number(app.gdsNtfcnCnt.getColumn(0, 'ntfcnCnt')) > 0)
        	{
        		this.staCount.set_text(Number(app.gdsNtfcnCnt.getColumn(0, 'ntfcnCnt')));
        	} else {
        		this.staCount.set_visible(false);
        	}
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnLogout_onclick = function(obj,e)
        {
        	var sMsgId = "confirm.general";                       		//메세지ID
        	var arrArg = ["로그아웃 하시겠습니까?"];                                                //메세지취환될값 배열[생략가능]
        	var sPopId = "logout";                                            //메세지팝업ID[생략가능]    *해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        	var sMsgCallback = "fnMsgCallback";                             //메세지콜백[생략가능]         * confirm성 메시지를 사용 시 반드시 필요

        	// 변경된 내역을 저장 하시겠습니까?
        	this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        };

        this.staCount_onclick = function(obj,e)
        {
        	this.gfnOpenMenu('NFM_06_04_00_0');
        };

        this.btnNotice_onclick = function(obj,e)
        {
        	this.gfnOpenMenu('NFM_06_04_00_0');
        };

        this.divLeft_staLogoBig_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divLeft.form.staLogoBig.addEventHandler("onclick",this.divLeft_staLogoBig_onclick,this);
            this.btnNotice.addEventHandler("onclick",this.btnNotice_onclick,this);
            this.staCount.addEventHandler("onclick",this.staCount_onclick,this);
            this.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
