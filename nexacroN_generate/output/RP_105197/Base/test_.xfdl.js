(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","64","57","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","230","50","184","61",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","655","293","570","317",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","580","85","414","127",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        	                  , 0
        					  , 0
        					  , 400
        					  , 350
        					  , null
        					  , null
        					  , "Base::test_pop.xfdl");


        	objChildFrame.showtitlebar = false;
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.dragmovetype = "all";

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , ""
        						  , this
        						  , "fn_popupCallback");
        };
        var bDrag = false;
        var nStartX  = 0;   // mousedown 시점 screenX
        var nStartY  = 0;
        var nObjLeft = 0;   // mousedown 시점 Static left
        var nObjTop  = 0;
        this.Button01_onclick = function(obj,e)
        {
        	var me = this;

        	// 기존 동적 Div 제거 (중복 방지)
        	if (me.div_dynamic)
        	{
        		me.removeChild("div_dynamic");
        	}
        	//onlbuttondown
        	// ── Div 동적 생성 ──────────────────────────────
        	var divObj = new Div("div_dynamic", 100, 150, 500, 350, null, null, null, null, null, null, me);
        	divObj.set_taborder("10");
        	divObj.set_border("1px solid #1976D2");
        	divObj.set_background("#F0F4FF");
        	me.addChild(divObj.name, divObj);
        	divObj.show();

        	// ── Static 동적 생성 (Div 내부) ───────────────
        	var stObj = new Static("st_drag", 10, 10, 150, 50, null, null, null, null, null, null, divObj.form);
        	stObj.set_text("드래그하세요");
        	stObj.set_cursor("move");
        	stObj.set_border("1px solid #1565C0");
        	stObj.set_background("#1976D2");
        	stObj.set_color("#FFFFFF");

        	divObj.form.addChild(stObj.name, stObj);
        	stObj.show();

        	// ── 드래그 상태 변수 ──────────────────────────


        	stObj.addEventHandler( "onlbuttondown", this.stObj_onlbuttondown, this );
        	stObj.addEventHandler( "onmousemove", this.stObj_onmousemove, this );
        	stObj.addEventHandler( "onlbuttonup", this.stObj_onlbuttonup, this );
        // 	stObj.addEventHandler("onmouseup", function(sObj, sE)
        // 	{
        // 		if (!bDrag) return;
        // 		bDrag = false;
        // 		sObj.releaseCapture();
        // 	}, me);
        }

        // stObj.addEventHandler("onmouseup", function(sObj, sE)
        // 	{
        // 		if (!bDrag) return;
        // 		bDrag = false;
        // 		sObj.releaseCapture();
        // 	}, me);
        // ── onmousedown : 드래그 시작 ─────────────────
        this.stObj_onlbuttondown  = function(obj,  e)
        {
        	bDrag    = true;
        	nStartX  = e.screenX;
        	nStartY  = e.screenY;
        	nObjLeft = obj.getOffsetLeft();
        	nObjTop  = obj.getOffsetTop();
        	obj.setCapture();
        }

        this.stObj_onlbuttonup  = function(obj,  e)
        {
        	if (!bDrag) return;
        		bDrag = false;
        	obj.releaseCapture();
        }
        this.stObj_onmousemove  = function(obj,  e)
        {
        	if (!bDrag) return;

        	var nNewLeft = nObjLeft + (e.screenX - nStartX);
        	var nNewTop  = nObjTop  + (e.screenY - nStartY);

        	// Div 경계 내로 제한
        	var nMaxLeft = obj.parent.getOffsetWidth()  - obj.getOffsetWidth();
        	var nMaxTop  = obj.parent.getOffsetHeight() - obj.getOffsetHeight();

        	nNewLeft = Math.max(0, Math.min(nNewLeft, nMaxLeft));
        	nNewTop  = Math.max(0, Math.min(nNewTop,  nMaxTop));

        	obj.set_left(nNewLeft);
        	obj.set_top(nNewTop);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
