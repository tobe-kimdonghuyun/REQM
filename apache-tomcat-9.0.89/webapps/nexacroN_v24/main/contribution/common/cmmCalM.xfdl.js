(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalM");
            this.set_titletext("월력");
            if (Form == this.constructor)
            {
                this._setFormPosition(175,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calM","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivCal","0","40","180","175",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pdivCal.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GBg01");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Static("staYear","0","7",null,"29","0",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("1");
            obj.set_text("2020");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_textAlign("center");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnPrev","10","7","29","29",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CalLeft");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"7","29","29","10",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CalRight");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn01","6","43","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Cal01");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn02","btn01:2","43","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Cal02");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn03","btn02:2","43","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Cal03");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn04","btn03:2","43","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_Cal04");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn05","6","btn01:2","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Cal05");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn06","48","btn02:2","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_Cal06");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn07","90","btn03:2","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Cal07");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn08","132","btn04:2","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_Cal08");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn09","6","127","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Cal09");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn10","48","127","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Cal10");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn11","90","127","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Cal11");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn12","132","127","40","40",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Cal12");
            this.pdivCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivCal.form
            obj = new Layout("default","",0,0,this.pdivCal.form,function(p){});
            this.pdivCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",175,28,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalM.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmCalM.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/03
        *  @Desction
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
        	this.pdivCal.trackPopupByComponent(this.calM, 0, this.calM.getOffsetHeight());
        };

        this.fnShowCalendarData = function (sYear, sMonth)
        {
        	if( sYear == "0000"){
        		sYear = this.gfnGetDate().substr(0,4);
        	}
        	this.pdivCal.form.staYear.set_text(sYear);
        	var sCurValue = this.calM.value;

        	if( !this.gfnIsNull(sCurValue)){
        		for( var i=0; i<this.fvBtn.length; i++){
        			if( this.fvBtn[i].name.replace("btn","") == sCurValue.substr(4,2) && sCurValue.substr(0,4)==sYear){
        				//this.fvBtn[i].set_cssclass(this.fvSelectCss);
        			}else{
        				//this.fvBtn[i].set_cssclass("");
        			}
        		}
        	}
        };


        /**
         * @description  return date
        */
        this.getDate = function ()
        {
        	if( !this.gfnIsNull(this.calM.value)) return this.calM.value.substr(0,6);
        	else return this.calM.value;
        };

        /**
         * @description date setting
        */
        this.setDate = function (value)
        {
        	this.calM.set_value(value.substr(0,4)+""+value.substr(4,2)+"01");
        };

        /**
         * @description  필수여부 css 변경
        */
        this.setRequired = function(bValue)
        {
        	if (bValue) {
        		this.calM.set_cssclass("essential");
        	}else {
        		this.calM.set_cssclass("");
        	}
        };

        /**
         * @description  ReadOnly여부 변경
        */
        this.setReadOnly = function(bValue)
        {
        	this.calM.set_readonly(bValue);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.calM_ondropdown = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.calM_oneditclick = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.pdivCal_onpopup = function(obj,e)
        {
        	var sDate = this.calM.value;
        	if(this.gfnIsNull(sDate)){
        		sDate = "00000000";//this.gfnGetDate();
        	}

        	var sYear  = sDate.substr(0, 4);
            var sMonth = sDate.substr(4, 2);
            var sDay   = sDate.substr(6, 2);

        	this.fnShowCalendarData(sYear, sMonth);
        };

        this.btnMonth_onclick = function(obj,e)
        {
        	var sYear = this.pdivCal.form.staYear.text;
        	var sMonth = obj.name.replace("btn","");

        	this.calM.set_value(sYear+""+sMonth+"01");
        	this.pdivCal.closePopup();
        };

        this.pdivCal_btnPrev_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.pdivCal.form.staYear.text);
        	this.pdivCal.form.staYear.set_text(sDate - 1 );

        	this.fnShowCalendarData(sDate - 1 , "00");
        };

        this.pdivCal_btnNext_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.pdivCal.form.staYear.text);
        	this.pdivCal.form.staYear.set_text(sDate + 1 );

        	this.fnShowCalendarData(sDate + 1, "00");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calM.addEventHandler("ondropdown",this.calM_ondropdown,this);
            this.calM.addEventHandler("oneditclick",this.calM_oneditclick,this);
            this.pdivCal.addEventHandler("onpopup",this.pdivCal_onpopup,this);
            this.pdivCal.form.btnPrev.addEventHandler("onclick",this.pdivCal_btnPrev_onclick,this);
            this.pdivCal.form.btnNext.addEventHandler("onclick",this.pdivCal_btnNext_onclick,this);
            this.pdivCal.form.btn01.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn02.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn03.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn04.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn05.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn06.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn07.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn08.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn09.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn10.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn11.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn12.addEventHandler("onclick",this.btnMonth_onclick,this);
        };
        this.loadIncludeScript("cmmCalM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
