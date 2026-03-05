(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("frameMain");
            this.set_scrollbartype("auto auto");
            this.set_scrollindicatorsize("10");
            this.getSetter("nHeight").set("30");
            if (Form == this.constructor)
            {
                this._setFormPosition(1900,1382);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"120","0",null,null,null,null,null,this);
            obj.set_initvalueid("ivDivAccessibilityOn");
            obj.set_taborder("0");
            obj.set_async("false");
            obj.set_tabstop("true");
            obj.set_accessibilityrole("heading");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_accessibilitylabel("Top영역");
            obj.set_background("green");
            this.addChild(obj.name, obj);

            obj = new Div("divAll","0","120",null,null,"0","0",null,null,null,null,this);
            obj.set_initvalueid("ivDivAccessibilityOff");
            obj.set_taborder("1");
            obj.set_formscrollbartype("auto auto");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("true");
            obj.set_accessibilityrole("none");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","0","0",null,"754","0",null,null,null,null,null,this.divAll.form);
            obj.set_initvalueid("ivDivAccessibilityOn");
            obj.set_taborder("0");
            obj.set_async("false");
            obj.set_tabstop("true");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            obj.set_accessibilityrole("heading");
            obj.set_accessibilitylabel("화면영역");
            obj.set_url("Base::sample_raonKeyboardTest.xfdl");
            this.divAll.addChild(obj.name, obj);

            obj = new Div("divBottom","0","884",null,"280","0",null,null,null,null,null,this.divAll.form);
            obj.set_initvalueid("ivDivAccessibilityOn");
            obj.set_taborder("1");
            obj.set_async("false");
            obj.set_tabstop("true");
            obj.set_accessibilitylabel("Bottom영역");
            obj.set_accessibilityrole("heading");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            obj.set_background("yellow");
            this.divAll.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form.divWork
            obj = new Layout("default","",0,0,this.divAll.form.divWork.form,function(p){});
            this.divAll.form.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form.divBottom
            obj = new Layout("default","",0,0,this.divAll.form.divBottom.form,function(p){});
            this.divAll.form.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form
            obj = new Layout("default","",0,0,this.divAll.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divWork.set_taborder("0");
                p.divWork.set_async("false");
                p.divWork.set_tabstop("true");
                p.divWork.set_formscrollbartype("none none");
                p.divWork.set_text("");
                p.divWork.set_accessibilityrole("heading");
                p.divWork.set_accessibilitylabel("화면영역");
                p.divWork.set_url("Base::sample_raonKeyboardTest.xfdl");
                p.divWork.move("0","0",null,"754","0",null);

                p.divBottom.set_taborder("1");
                p.divBottom.set_async("false");
                p.divBottom.set_tabstop("true");
                p.divBottom.set_accessibilitylabel("Bottom영역");
                p.divBottom.set_accessibilityrole("heading");
                p.divBottom.set_formscrollbartype("none none");
                p.divBottom.set_text("");
                p.divBottom.set_background("yellow");
                p.divBottom.move("0","884",null,"280","0",null);
            	}
            );
            this.divAll.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divAll.form
            obj = new Layout("Layout0","",0,0,this.divAll.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divWork.set_taborder("0");
                p.divWork.set_formscrollbartype("autoindicator autoindicator");
                p.divWork.set_minwidth("300");
                p.divWork.set_maxwidth("1920");
                p.divWork.move("0","0",null,"654","0",null);

                p.divBottom.set_taborder("1");
                p.divBottom.set_text("");
                p.divBottom.move("0","784",null,"580","0",null);
            	}
            );
            this.divAll.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","ScreenDeskTop",1900,1382,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("frameMain");
                p.set_scrollbartype("auto auto");
                p.set_scrollindicatorsize("10");
                p.getSetter("nHeight").set("30");

                p.divTop.set_taborder("0");
                p.divTop.set_async("false");
                p.divTop.set_tabstop("true");
                p.divTop.set_accessibilityrole("heading");
                p.divTop.set_text("");
                p.divTop.set_formscrollbartype("none none");
                p.divTop.set_formscrolltype("none");
                p.divTop.set_accessibilitylabel("Top영역");
                p.divTop.set_background("green");
                p.divTop.move("0","0",null,"120","0",null);

                p.divAll.set_taborder("1");
                p.divAll.set_formscrollbartype("auto auto");
                p.divAll.set_text("");
                p.divAll.set_accessibilityenable("false");
                p.divAll.set_tabstop("true");
                p.divAll.set_accessibilityrole("none");
                p.divAll.set_formscrolltype("both");
                p.divAll.move("0","120",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile,tablet",640,1705,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrollbartype("autoindicator autoindicator");

                p.divAll.set_formscrolltype("vertical");
                p.divAll.set_formscrollbartype("autoindicator autoindicator");
                p.divAll.move("0","divTop:0",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::sample_raonKeyboardTest.xfdl");
        };
        
        // User Script
        this.registerScript("frameMain.xfdl", function() {
        /**
        *  교육디지털 원패스
        *  @MenuPath    frame > frameMain
        *  @FileName 	frameMain.xfdl
        *  @Creator 	kmp
        *  @CreateDate 	2021.12.27
        *  @Desction    base가 되는 화면
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2021.12.27     		kmp		 	  			최초 생성
        *******************************************************************************
        */
        /************************************************************************************************
         * include 영역(업무화면에서 꼭 필요한 경우에만 사용하세요)
         ************************************************************************************************/
        //include "lib::sm_script.xjs";


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/


        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/

        /**
         * 화면 onload시 처리내역
        */
        this.form_onload = function(obj,e)
        {

        };

        /**
         * @description 사이즈 변경시 위치변경
        */
        this.frameMain_onsize = function(obj,e)
        {

        };
        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * 팝업의 콜백함수 지정한다
         * @param : e - 팝업에서 전달한 파라메터
         * @param : sender - 팝업호출시 전달한 팝업호출객체
         */
        this.fnPopupCallback = function(e, sender){

        };
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        //세로 스크롤 (divQuickMenu 위치 이동)
        this.divAll_onvscroll = function(obj,e)
        {
        	var nTopGap = 32;   // Top으로부터 떨어진 거리

        	if(this.divAll.form.divQuickMenu.visible)
        	{
        		this.divAll.form.divQuickMenu.setOffsetTop(e.pos+nTopGap);
        	}
        };


        //가로 스크롤 (divTop 가로스크롤 이동)
        this.divAll_onhscroll = function(obj,e)
        {
        	this.divTop.form.fnTopMenuOnhscroll(e.pos);
        	this.divNotice.form.fnDivNoticeOnhscroll(e.pos);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.frameMain_onsize,this);
        };
        this.loadIncludeScript("frameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
