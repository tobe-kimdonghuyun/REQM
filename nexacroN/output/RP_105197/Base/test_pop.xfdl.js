(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_pop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","7","10","1056","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("test_pop.xfdl", function() {

        // var static_lbuttondown = 0;
        var down_x = 0;
        var down_y = 0;
        var down_position_t;
        var down_position_l

        this.Static00_onlbuttondown = function(obj,e)
        {
        	down_x = e.screenx
        	down_y = e.screeny;
        	trace(down_x);
        	trace(down_y);
        	down_position_l = this.getOwnerFrame().getOffsetLeft();
        	down_position_t = this.getOwnerFrame().getOffsetTop();
        	//static_lbuttondown = 1;
        };

        this.test_pop_ondrag = function(obj,e)
        {
        	return true;
        };

        this.test_pop_ondragmove = function(obj,e)
        {
        	this.DragObjMove(obj,e);
        };


        this.DragObjMove = function(obj, e)
        {
        // 	trace(down_position_l);
        // 	trace(down_position_t);

        	var left, top;
        	left = down_position_l + (e.screenx - down_x);
        	top = down_position_t + (e.screeny - down_y);

        	this.getOwnerFrame().move(left, top);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrag",this.test_pop_ondrag,this);
            this.addEventHandler("ondragmove",this.test_pop_ondragmove,this);
            this.Static00.addEventHandler("onlbuttondown",this.Static00_onlbuttondown,this);
        };
        this.loadIncludeScript("test_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
