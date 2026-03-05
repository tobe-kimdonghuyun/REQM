(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BMT_01");
            this.set_titletext("화면로딩");
            if (Form == this.constructor)
            {
                this._setFormPosition(799,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","type" : "STRING","size" : "256"},{"id" : "datacolumn","type" : "STRING","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "Radio1"},{"codecolumn" : "2","datacolumn" : "Radio2"},{"codecolumn" : "3","datacolumn" : "Radio3"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","type" : "STRING","size" : "256"},{"id" : "datacolumn","type" : "STRING","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "Combo1"},{"codecolumn" : "2","datacolumn" : "Combo2"},{"codecolumn" : "3","datacolumn" : "Combo3"},{"codecolumn" : "4","datacolumn" : "Combo4"},{"codecolumn" : "5","datacolumn" : "Combo5"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkbox", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","type" : "STRING","size" : "256"},{"id" : "datacolumn","type" : "STRING","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "Chk1"},{"codecolumn" : "2","datacolumn" : "Chk2"},{"codecolumn" : "3","datacolumn" : "Chk3"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",799,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BMT_01_copy0.xfdl", function() {
        /**
        *  Nexacro DEMO
        *  @FileName 	BMT_01.xfdl
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.BMT_01_onload = function(obj, e) {
        	this.setTimer('start', 10);
        };

        this.BMT_01_ontimer = function(obj,e)
        {
        	if(e.timerid == 'start') {
        		this.killTimer('start');
        		// 로딩 시작 로그 및 컴포넌트 생성

                // 필수 및 선택 컴포넌트 동기적 로드
        		/*
        			Static
        			Button
        			Div
        			Edit
        			MaskEdit
        			Combo
        			Tab
        			CheckBox
        			TextArea
        			Radio
        		*/
        		console.time('fnDrawComponent');
        		this.fnDrawComponent();

        		let istabpage = this.parent instanceof nexacro.Tabpage;
        		let isapply = !istabpage || (istabpage && this.parent._p_visible);
        		nexacro._applyComponents(this.parent, this.complist, undefined, isapply);

        		this.resetScroll();

        		this.complist = [];
        		console.timeEnd('fnDrawComponent');

                // 로딩 종료 로그
        		if(this.parent instanceof nexacro.Tabpage) {
        			this.parent.parent.parent.notify_tabLoadComplete();
        		}
        	}
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
        this.complist = [];

        this.fnDrawComponent = function()
        {
        	let oCaption;
        	let oComp;
        	let cCnt 	= 1000;
        	let nWidth 	= 200;
        	let nHeigth = 40;
        	let wGap 	= 15;
        	let hGap 	= 15;
        	let nLeft 	= 10;
        	let nTop 	= 10;
        //
        // 	let nCntItem = 10;
        // 	let nCntLine = 50;
        	let cnt = 0;

        	//let arrComps = ['Edit', 'MaskEdit', 'Static', 'Button', 'Radio', 'CheckBox', 'Combo', 'TextArea', 'Div', 'Grid'];
        	let arrComps = ['Radio', 'CheckBox', 'Edit', 'Combo', 'Button'];

        	for (let i = 0; i < arrComps.length; i++)
        	{
        		nWidth 	= 200;
        		nHeigth = 40;
        		oCaption = new Static("cp_"+arrComps[i], nLeft, nTop, nWidth , nHeigth, null, null);
        		oCaption.set_text('<'+arrComps[i]+'>');
        		oCaption.set_cssclass("sta_WF_CompLabel");
        		this.addChild(oCaption.name, oCaption);
        		oCaption.show();

        		nTop = nTop + nHeigth + hGap;
        		cnt = 0;

        		switch (arrComps[i])
        		{
        			case "Edit":
        				nWidth 	= 100;
        				nHeigth = 40;
        				while(cnt < cCnt)
        				{
        					for (let y = 1; y <= 10; y++)
        					{
        						if(cnt >= cCnt) { break; }

        						++cnt;
        						oComp = new Edit("Edit"+cnt, nLeft, nTop, nWidth, nHeigth, null, null);
        						//oComp.set_displaynulltext(cnt);
        						oComp.set_value(cnt);

        						this.addChild(oComp.name, oComp);
        						oComp.show(true);
        						this.complist.push(oComp);

        						nLeft = nLeft + nWidth + wGap;
        					}
        					nLeft = 10;
        					nTop = nTop + nHeigth + hGap;
        				}
        				break;
        			case "Button":
        				nWidth 	= 100;
        				nHeigth = 40;
        				while(cnt < cCnt)
        				{
        					for (let y = 1; y <= 10; y++)
        					{
        						if(cnt >= cCnt) { break; }

        						++cnt;
        						oComp = new Button("Button"+cnt, nLeft, nTop, nWidth, nHeigth, null, null);
        						oComp.set_text(cnt);

        						this.addChild(oComp.name, oComp);
        						oComp.show(true);
        						this.complist.push(oComp);
        						nLeft = nLeft + nWidth + wGap;
        					}
        					nLeft = 10;
        					nTop = nTop + nHeigth + hGap;
        				}
        				break;
        			case "Radio":
        				nWidth 	= 200;
        				nHeigth = 40;
        				while(cnt < cCnt)
        				{
        					for (let y = 1; y <= 5; y++)
        					{
        						if(cnt >= cCnt) { break; }

        						++cnt;
        						oComp = new Radio("Radio"+cnt, nLeft, nTop, nWidth, nHeigth, null, null);
        						oComp.set_codecolumn("codecolumn");
        						oComp.set_datacolumn("datacolumn");
        						oComp.setInnerDataset(this.ds_radio);

        						this.addChild(oComp.name, oComp);
        						oComp.show(true);
        						this.complist.push(oComp);

        						nLeft = nLeft + nWidth + wGap;
        					}
        					nLeft = 10;
        					nTop = nTop + nHeigth + hGap;
        				}
        				break;
        			case "CheckBox":
        				nWidth 	= 100;
        				nHeigth = 40;
        				while(cnt < cCnt)
        				{
        					for (let y = 1; y <= 10; y++)
        					{
        						if(cnt >= cCnt) { break; }

        						++cnt;
        						oComp = new CheckBox("CheckBox"+cnt, nLeft, nTop, nWidth, nHeigth, null, null);
        						oComp.set_text(cnt);
        						this.addChild(oComp.name, oComp);
        						oComp.show(true);
        						this.complist.push(oComp);

        						nLeft = nLeft + nWidth + wGap;
        					}
        					nLeft = 10;
        					nTop = nTop + nHeigth + hGap;
        				}
        				break;
        			case "CheckBoxSet":
        				nWidth 	= 200;
        				nHeigth = 40;
        				while(cnt < cCnt)
        				{
        					for (let y = 1; y <= 5; y++)
        					{
        						if(cnt >= cCnt) { break; }

        						++cnt;
        						oComp = new CheckBoxSet("CheckBox"+cnt, nLeft, nTop, nWidth, nHeigth, null, null);
        						oComp.set_codecolumn("codecolumn");
        						oComp.set_datacolumn("datacolumn");
        						oComp.setInnerDataset(this.ds_checkbox);

        						this.addChild(oComp.name, oComp);
        						oComp.show(true);
        						this.complist.push(oComp);

        						nLeft = nLeft + nWidth + wGap;
        					}
        					nLeft = 10;
        					nTop = nTop + nHeigth + hGap;
        				}
        				break;
        			case "Combo":
        				nWidth 	= 100;
        				nHeigth = 40;
        				while(cnt < cCnt)
        				{
        					for (let y = 1; y <= 10; y++)
        					{
        						if(cnt >= cCnt) { break; }

        						++cnt;
        						oComp = new Combo("Combo"+cnt, nLeft, nTop, nWidth, nHeigth, null, null);
        						oComp.set_displaynulltext(cnt);
        oComp.set_codecolumn("codecolumn");
        oComp.set_datacolumn("datacolumn");
        oComp.setInnerDataset(this.ds_combo);

        						this.addChild(oComp.name, oComp);
        						oComp.show(true);
        						this.complist.push(oComp);

        						nLeft = nLeft + nWidth + wGap;
        					}
        					nLeft = 10;
        					nTop = nTop + nHeigth + hGap;
        				}
        				break;
        			case "Grid":
        				nWidth 	= 800;
        				nHeigth = 840;
        				while(cnt < 3)
        				{
        					++cnt;
        					oComp = new Div("Grid"+cnt, nLeft, nTop, nWidth, nHeigth, null, null);
        					oComp.set_url("BMT::BMT_02.xfdl");

        					this.addChild(oComp.name, oComp);
        					oComp.show();

        					nLeft = 10;
        					nTop = nTop + nHeigth + hGap;
        				}
        				break;
        		}

        	}
        	//this.resetScroll();

        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BMT_01_onload,this);
            this.addEventHandler("ontimer",this.BMT_01_ontimer,this);
        };
        this.loadIncludeScript("BMT_01_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
