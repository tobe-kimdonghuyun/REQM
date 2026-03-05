(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalY");
            this.set_titletext("년력");
            if (Form == this.constructor)
            {
                this._setFormPosition(175,48);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calY","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_popuptype("none");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivCal","0","48","324","238",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_text("");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn01","8","65","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn02","86","65","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn03","164","65","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn04","242","65","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn08","242","121","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn07","164","121","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn06","86","121","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn05","8","121","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn09","8","177","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn10","86","177","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn11","164","177","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn12","242","177","74","52",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Cal");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"14","29","29","16",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_CalNext");
            obj.set_text("");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnPrev","16","14","32","32",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_CalPrev");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Static("staYearFrom","72","14","70","29",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("15");
            obj.set_text("2020");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_textAlign("center");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Static("staYear00_00","154","14","12","29",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("16");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_textAlign("center");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Static("staYearTo","168","14","70","29",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("17");
            obj.set_text("2031");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_textAlign("center");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Panel("Panel00","50","14",null,"29","50",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("18");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staYearFrom\"/><PanelItem id=\"PanelItem01\" componentid=\"staYear00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"staYearTo\"/></Contents>");
            this.pdivCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivCal.form
            obj = new Layout("default","",0,0,this.pdivCal.form,function(p){});
            this.pdivCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",175,48,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalY.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	cmmCalY.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/03
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/03			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        this.fvDiv = null;
        this.fvSelectCss = "btn_WF_Crud";
        this.fvBtn = null;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.fvDiv = this.parent;

        	this.fvBtn = [];
        	this.fvBtn.push(this.pdivCal.form.btn01);
        	this.fvBtn.push(this.pdivCal.form.btn02);
        	this.fvBtn.push(this.pdivCal.form.btn03);
        	this.fvBtn.push(this.pdivCal.form.btn04);
        	this.fvBtn.push(this.pdivCal.form.btn05);
        	this.fvBtn.push(this.pdivCal.form.btn06);
        	this.fvBtn.push(this.pdivCal.form.btn07);
        	this.fvBtn.push(this.pdivCal.form.btn08);
        	this.fvBtn.push(this.pdivCal.form.btn09);
        	this.fvBtn.push(this.pdivCal.form.btn10);
        	this.fvBtn.push(this.pdivCal.form.btn11);
        	this.fvBtn.push(this.pdivCal.form.btn12);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
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
        this.fnOpenPopupdiv= function ()
        {
        	this.pdivCal.trackPopupByComponent(this.calY, 0, this.calY.getOffsetHeight());
        };

        this.fnShowCalendarData = function (sYear)
        {
        	if( sYear == "0000"){
        		sYear = this.gfnGetDate().substr(0,4);
        	}
        	var sYearFrom = nexacro.floor(sYear,-1)-1;
        	var sYearTo = sYearFrom+10;
        	//trace("sYear : " + sYear + " sYearFrom : " + sYearFrom + " sYearTo : " + sYearTo);
        	this.pdivCal.form.staYearFrom.set_text(sYearFrom);
        	this.pdivCal.form.staYearTo.set_text(sYearTo);
        	var sCurValue = this.calY.value;

        	for( var i=0; i<this.fvBtn.length; i++){
        		this.fvBtn[i].set_text(sYearFrom+i);
        	}

        };


        /**
         * @description  return date
        */
        this.getDate = function ()
        {
        	if( !this.gfnIsNull(this.calY.value)) return this.calY.value.substr(0,6);
        	else return this.calY.value;
        };

        /**
         * @description date setting
        */
        this.setDate = function (value)
        {
        	this.calY.set_value(value.substr(0,4)+""+value.substr(4,2)+"01");
        };

        /**
         * @description  필수여부 css 변경
        */
        this.setRequired = function(bValue)
        {
        	if (bValue) {
        		this.calY.set_cssclass("essential");
        	}else {
        		this.calY.set_cssclass("");
        	}
        };

        /**
         * @description  ReadOnly여부 변경
        */
        this.setReadOnly = function(bValue)
        {
        	this.calY.set_readonly(bValue);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.calY_ondropdown = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.calY_oneditclick = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.pdivCal_onpopup = function(obj,e)
        {
        	var sDate = this.calY.value;
        	if(this.gfnIsNull(sDate)){
        		sDate = "00000000";//this.gfnGetDate();
        	}

        	var sYear  = sDate.substr(0, 4);
            //var sMonth = sDate.substr(4, 2);
            //var sDay   = sDate.substr(6, 2);

        	this.fnShowCalendarData(sYear);
        };

        this.btnMonth_onclick = function(obj,e)
        {
        	var sYear = obj.text;
        	this.calY.set_value(sYear+""+"0101");
        	this.pdivCal.closePopup();
        };

        this.pdivCal_btnPrev_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.pdivCal.form.staYearFrom.text);
        	//this.pdivCal.form.staYearFrom.set_text(sDate - 10);
        	//this.pdivCal.form.staYearTo.set_text(this.pdivCal.form.staYearFrom + 10);
        	this.fnShowCalendarData(sDate - 10);
        };

        this.pdivCal_btnNext_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.pdivCal.form.staYearFrom.text);
        	//this.pdivCal.form.staYearFrom.set_text(sDate + 10 );
        	//this.pdivCal.form.staYearTo.set_text(this.pdivCal.form.staYearFrom + 10);
        	this.fnShowCalendarData(sDate + 11);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calY.addEventHandler("ondropdown",this.calY_ondropdown,this);
            this.calY.addEventHandler("oneditclick",this.calY_oneditclick,this);
            this.calY.addEventHandler("onchanged",this.calY_onchanged,this);
            this.pdivCal.addEventHandler("onpopup",this.pdivCal_onpopup,this);
            this.pdivCal.form.btn01.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn02.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn03.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn04.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn08.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn07.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn06.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn05.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn09.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn10.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn11.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn12.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btnNext.addEventHandler("onclick",this.pdivCal_btnNext_onclick,this);
            this.pdivCal.form.btnPrev.addEventHandler("onclick",this.pdivCal_btnPrev_onclick,this);
            this.pdivCal.form.staYear00_00.addEventHandler("onclick",this.Div00_staYear00_onclick,this);
            this.pdivCal.form.staYearTo.addEventHandler("onclick",this.Div00_staYear00_onclick,this);
        };
        this.loadIncludeScript("cmmCalY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
