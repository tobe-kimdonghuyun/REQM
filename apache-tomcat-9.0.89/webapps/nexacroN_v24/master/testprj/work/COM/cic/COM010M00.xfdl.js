(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM010M00");
            this.set_titletext("청렴신문고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","0","0",null,"50","60",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","0","60",null,"2000","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","0","100%","232",null,null,null,"750",null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_imagealign("left top");
            obj.set_stretch("fit");
            obj.set_image("url(\'theme::tsp/images/sta_WF_integrity01.png\')");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static2","15","ImageViewer00:10",null,"43","15",null,null,"710",null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("소통과 공감을 통한 인천공항 ‘부패 Zero’ 실현하기 위하여 공사-협력사-입주사 책임과 역할을\r\n준수함으로써 청렴한 인천공항을 만드는데 앞장서겠습니다.");
            obj.set_cssclass("sta_WF_Dot");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static3","15","Static2:10",null,"43","15",null,null,"710",null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("공항공사는 2016년 국민권익위원회가 시행한 ‘부패방지시책평가 최우수기관’으로 선정되었으며,\r\n공정한 업무처리와 책임감으로 내부고객인 입주자 만족도를 높여가겠습니다.");
            obj.set_cssclass("sta_WF_Dot");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static4","15","Static3:10",null,"64","15",null,null,"710",null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("인천공항 입주자 업무관련하여 임직원의 부정부패, 인사청탁, 비위 등의 위법행위가 발생하였거나,\r\n발생하였다는 사실을 알게 된 경우 신고하여 주시기 바랍니다.\r\n청렴신문고(<l v=\'https://www.airport.kr/co_cnt/ko/cuspar/newspape/ifmtus/ifmtus.do\'> https://www.airport.kr/co_cnt/ko/cuspar/newspape/ifmtus/ifmtus.do)</l>");
            obj.set_cssclass("sta_WF_Dot");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static5","15","Static4:10",null,"36","15",null,null,"710",null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("※ 공항공사가 아닌 공항 내 정부기관 및 항공사 등과 관련된 부조리사항은 해당 기관으로 신고하여\r\n주시기 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.divForm.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","0","Static5:20",null,"248","0",null,null,"750",null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_imagealign("left top");
            obj.set_stretch("fit");
            obj.set_image("url(\'theme::tsp/images/sta_WF_integrity02.png\')");
            this.divForm.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00","0","ImageViewer00_00:0",null,"426","0",null,null,"750",null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_image("url(\'theme::tsp/images/sta_WF_integrity03.png\')");
            obj.set_imagealign("left top");
            obj.set_stretch("fit");
            this.divForm.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00_00","0","ImageViewer00_00_00:0",null,"539","0",null,null,"750",null,null,this.divForm.form);
            obj.set_taborder("7");
            obj.set_image("url(\'theme::tsp/images/sta_WF_integrity04.png\')");
            obj.set_imagealign("left top");
            obj.set_stretch("fit");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static00","1482","72","550","157",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("웹뷰 띄우면 이미지 정상적으로 나옵니다");
            obj.set_color("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.ImageViewer00.set_taborder("0");
                p.ImageViewer00.set_imagealign("left top");
                p.ImageViewer00.set_stretch("fit");
                p.ImageViewer00.set_image("url(\'theme::tsp/images/sta_WF_integrity01.png\')");
                p.ImageViewer00.set_minwidth("");
                p.ImageViewer00.set_maxwidth("750");
                p.ImageViewer00.move("0","0","100%","232",null,null);

                p.Static2.set_taborder("1");
                p.Static2.set_text("소통과 공감을 통한 인천공항 ‘부패 Zero’ 실현하기 위하여 공사-협력사-입주사 책임과 역할을\r\n준수함으로써 청렴한 인천공항을 만드는데 앞장서겠습니다.");
                p.Static2.set_cssclass("sta_WF_Dot");
                p.Static2.set_fittocontents("height");
                p.Static2.set_usedecorate("true");
                p.Static2.set_wordWrap("char");
                p.Static2.set_minwidth("");
                p.Static2.set_maxwidth("710");
                p.Static2.move("15","ImageViewer00:10",null,"43","15",null);

                p.Static3.set_taborder("2");
                p.Static3.set_text("공항공사는 2016년 국민권익위원회가 시행한 ‘부패방지시책평가 최우수기관’으로 선정되었으며,\r\n공정한 업무처리와 책임감으로 내부고객인 입주자 만족도를 높여가겠습니다.");
                p.Static3.set_cssclass("sta_WF_Dot");
                p.Static3.set_fittocontents("height");
                p.Static3.set_usedecorate("true");
                p.Static3.set_wordWrap("char");
                p.Static3.set_minwidth("");
                p.Static3.set_maxwidth("710");
                p.Static3.move("15","Static2:10",null,"43","15",null);

                p.Static4.set_taborder("3");
                p.Static4.set_text("인천공항 입주자 업무관련하여 임직원의 부정부패, 인사청탁, 비위 등의 위법행위가 발생하였거나,\r\n발생하였다는 사실을 알게 된 경우 신고하여 주시기 바랍니다.\r\n청렴신문고(<l v=\'https://www.airport.kr/co_cnt/ko/cuspar/newspape/ifmtus/ifmtus.do\'> https://www.airport.kr/co_cnt/ko/cuspar/newspape/ifmtus/ifmtus.do)</l>");
                p.Static4.set_cssclass("sta_WF_Dot");
                p.Static4.set_fittocontents("height");
                p.Static4.set_usedecorate("true");
                p.Static4.set_wordWrap("char");
                p.Static4.set_minwidth("");
                p.Static4.set_maxwidth("710");
                p.Static4.move("15","Static3:10",null,"64","15",null);

                p.Static5.set_taborder("4");
                p.Static5.set_text("※ 공항공사가 아닌 공항 내 정부기관 및 항공사 등과 관련된 부조리사항은 해당 기관으로 신고하여\r\n주시기 바랍니다.");
                p.Static5.set_fittocontents("height");
                p.Static5.set_usedecorate("true");
                p.Static5.set_wordWrap("char");
                p.Static5.set_minwidth("");
                p.Static5.set_maxwidth("710");
                p.Static5.move("15","Static4:10",null,"36","15",null);

                p.ImageViewer00_00.set_taborder("5");
                p.ImageViewer00_00.set_imagealign("left top");
                p.ImageViewer00_00.set_stretch("fit");
                p.ImageViewer00_00.set_image("url(\'theme::tsp/images/sta_WF_integrity02.png\')");
                p.ImageViewer00_00.set_minwidth("");
                p.ImageViewer00_00.set_maxwidth("750");
                p.ImageViewer00_00.move("0","Static5:20",null,"248","0",null);

                p.ImageViewer00_00_00.set_taborder("6");
                p.ImageViewer00_00_00.set_image("url(\'theme::tsp/images/sta_WF_integrity03.png\')");
                p.ImageViewer00_00_00.set_imagealign("left top");
                p.ImageViewer00_00_00.set_stretch("fit");
                p.ImageViewer00_00_00.set_minwidth("");
                p.ImageViewer00_00_00.set_maxwidth("750");
                p.ImageViewer00_00_00.move("0","ImageViewer00_00:0",null,"426","0",null);

                p.ImageViewer00_00_00_00.set_taborder("7");
                p.ImageViewer00_00_00_00.set_image("url(\'theme::tsp/images/sta_WF_integrity04.png\')");
                p.ImageViewer00_00_00_00.set_imagealign("left top");
                p.ImageViewer00_00_00_00.set_stretch("fit");
                p.ImageViewer00_00_00_00.set_minwidth("");
                p.ImageViewer00_00_00_00.set_maxwidth("750");
                p.ImageViewer00_00_00_00.move("0","ImageViewer00_00_00:0",null,"539","0",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("Layout0","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.ImageViewer00.move("0","0","100%","232",null,null);

                p.ImageViewer00_00.move("0","Static5:20","100%","248",null,null);

                p.ImageViewer00_00_00.move("0","ImageViewer00_00:0","100%","426",null,null);

                p.ImageViewer00_00_00_00.move("0","ImageViewer00_00_00:0","100%","539",null,null);

                p.Static2.move("0","ImageViewer00:10",null,"43","0",null);

                p.Static3.move("0","Static2:10",null,"43","0",null);

                p.Static4.move("0","Static3:10",null,"64","0",null);

                p.Static5.move("0","Static4:10",null,"36","0",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1480,720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("청렴신문고");

                p.divTitle.set_taborder("0");
                p.divTitle.set_text("");
                p.divTitle.set_url("frame::frmWorkTitleDv.xfdl");
                p.divTitle.set_formscrolltype("none");
                p.divTitle.set_maxwidth("");
                p.divTitle.move("0","0",null,"50","60",null);

                p.divForm.set_taborder("1");
                p.divForm.set_text("div00");
                p.divForm.set_fittocontents("height");
                p.divForm.set_maxwidth("");
                p.divForm.move("0","60",null,"2000","60",null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("웹뷰 띄우면 이미지 정상적으로 나옵니다");
                p.Static00.set_color("red");
                p.Static00.set_visible("false");
                p.Static00.move("1482","72","550","157",null,null);
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
                p.divForm.move("20","60",null,"2000","20",null);

                p.divTitle.move("0","0",null,"50","0",null);
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
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("COM010M00.xfdl", function() {
        // /**
        // *  PcMdi 프로젝트
        // *  @FileName 	COM010M00.xfdl
        // *  @Creator 	TOBESOFT
        // *  @CreateDate 	2023/10/30
        // *  @Desction
        // ************** 소스 수정 이력 ***********************************************
        // * Date					Modifier					Description
        // *******************************************************************************
        // * 2023/10/30			TOBESOFT					최초생성
        // *******************************************************************************
        // */
        //
        // /*******************************************************************************************************************************
        //  * FORM 변수 선언 영역
        // *******************************************************************************************************************************/
        // this.objApp = nexacro.getApplication();
        //
        // /*******************************************************************************************************************************
        //  * FORM EVENT 영역(onload, onbeforeclose..)
        // *******************************************************************************************************************************/
        // this.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // 	this.gfnFormOnload(obj); //필수함수
        // };
        this.divForm_ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.ImageViewer00.addEventHandler("onclick",this.divForm_ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("COM010M00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
