(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BMT_03");
            this.set_titletext("멀티 TAB");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_multi","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_multi);
            obj.set_text("TAB1");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_multi);
            obj.set_text("TAB2");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_multi);
            obj.set_text("TAB3");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.tab_multi);
            obj.set_text("TAB4");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.tab_multi);
            obj.set_text("TAB5");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.tab_multi);
            obj.set_text("TAB6");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.tab_multi);
            obj.set_text("TAB7");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.tab_multi);
            obj.set_text("TAB8");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage9",this.tab_multi);
            obj.set_text("TAB9");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage10",this.tab_multi);
            obj.set_text("TAB10");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage11",this.tab_multi);
            obj.set_text("TAB11");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage12",this.tab_multi);
            obj.set_text("TAB12");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage13",this.tab_multi);
            obj.set_text("TAB13");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage14",this.tab_multi);
            obj.set_text("TAB14");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage15",this.tab_multi);
            obj.set_text("TAB15");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage16",this.tab_multi);
            obj.set_text("TAB16");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage17",this.tab_multi);
            obj.set_text("TAB17");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage18",this.tab_multi);
            obj.set_text("TAB18");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage19",this.tab_multi);
            obj.set_text("TAB19");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage20",this.tab_multi);
            obj.set_text("TAB20");
            obj.set_url("BMT::BMT_01.xfdl");
            obj.set_async("true");
            this.tab_multi.addChild(obj.name, obj);

            obj = new Button("btn_delTab",null,"5","30","30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_DelTab");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addTab00",null,"5","30","30","45",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_AddTab");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_multi.Tabpage1
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage1.form,function(p){});
            this.tab_multi.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage2
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage2.form,function(p){});
            this.tab_multi.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage3
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage3.form,function(p){});
            this.tab_multi.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage4
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage4.form,function(p){});
            this.tab_multi.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage5
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage5.form,function(p){});
            this.tab_multi.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage6
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage6.form,function(p){});
            this.tab_multi.Tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage7
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage7.form,function(p){});
            this.tab_multi.Tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage8
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage8.form,function(p){});
            this.tab_multi.Tabpage8.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage9
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage9.form,function(p){});
            this.tab_multi.Tabpage9.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage10
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage10.form,function(p){});
            this.tab_multi.Tabpage10.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage11
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage11.form,function(p){});
            this.tab_multi.Tabpage11.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage12
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage12.form,function(p){});
            this.tab_multi.Tabpage12.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage13
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage13.form,function(p){});
            this.tab_multi.Tabpage13.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage14
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage14.form,function(p){});
            this.tab_multi.Tabpage14.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage15
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage15.form,function(p){});
            this.tab_multi.Tabpage15.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage16
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage16.form,function(p){});
            this.tab_multi.Tabpage16.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage17
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage17.form,function(p){});
            this.tab_multi.Tabpage17.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage18
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage18.form,function(p){});
            this.tab_multi.Tabpage18.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage19
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage19.form,function(p){});
            this.tab_multi.Tabpage19.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_multi.Tabpage20
            obj = new Layout("default","",0,0,this.tab_multi.Tabpage20.form,function(p){});
            this.tab_multi.Tabpage20.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","BMT::BMT_01.xfdl");
        };
        
        // User Script
        this.registerScript("BMT_03.xfdl", function() {
        /**
        *  Nexacro DEMO
        *  @FileName 	BMT_03.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/11/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/11/04			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.tabIdx = 20;

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.BMT_03_onload = function(obj,e)
        {
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
        this.notify_tabLoadComplete = function()
        {
        	//this.logger.timestamp(this.tabIdx+'탭추가|종료', true);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /*
         *	탭추가
         */
        this.btn_addTab_onclick = function(obj,e)
        {
        	this.tab_multi.preload = false;
        	if(this.tabIdx >= 30) {
        		alert('탭 페이지는 최대 30개 까지 입니다.');
        		return;
        	}

        	this.tabIdx++;

        	this.tab_multi.insertTabpage('TAB'+this.tabIdx, -1, "BMT::BMT_01.xfdl", 'TAB'+this.tabIdx);
        	//this.tab_multi.tabpages[this.tabIdx-1].set_formscrolltype("vertical");
        };

        /*
         *	탭삭제
         */
        this.btn_delTab_onclick = function(obj,e)
        {
        	let idx = this.tab_multi.tabindex;
        	let result = this.tab_multi.removeTabpage(idx);

        	if(result == 0) {
        		this.tabIdx--;
        		//alert("탭 페이지 삭제에 성공했습니다.");
        	} else if (result == -1) {
        		alert("탭 페이지 삭제에 실패했습니다.");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BMT_03_onload,this);
            this.btn_delTab.addEventHandler("onclick",this.btn_delTab_onclick,this);
            this.btn_addTab00.addEventHandler("onclick",this.btn_addTab_onclick,this);
        };
        this.loadIncludeScript("BMT_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
