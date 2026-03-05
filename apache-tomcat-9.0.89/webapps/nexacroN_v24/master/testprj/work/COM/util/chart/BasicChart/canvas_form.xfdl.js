(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("canvas_form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","62","107","698","353",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","60","30","160","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","62","495","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("canvas_form.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ImageViewer00.set_image("images::picture.jpg");
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.fn_test(this.ImageViewer00);
        };

        this.CanvasComp = null;
        this.CanvasSX = 0;
        this.CanvasSY = 0;
        this.CanvasEX = 0;
        this.CanvasEY = 0;
        this.fn_test = function(objImageViewer) {
        	var p = objImageViewer._refform;
        	var cid = "cvs_" + objImageViewer.id;
        	var CanvasComp = new nexacro.CanvasComponent(cid, objImageViewer.getOffsetLeft(), objImageViewer.getOffsetTop(), objImageViewer.getOffsetWidth(), objImageViewer.getOffsetHeight());
        	p.addChild(cid, CanvasComp);
        	CanvasComp.show();
        	CanvasComp.set_enableevent(true);

        	CanvasComp.addEventHandler('ondrag', this.CanvasCrop_ondrag, this);
        	CanvasComp.addEventHandler('ondragenter', this.CanvasCropondragenter, this);
        	CanvasComp.addEventHandler('ondragmove', this.CanvasCropondragmove, this);
        	CanvasComp.addEventHandler('ondragleave', this.CanvasCroponondragleave, this);
        	CanvasComp.addEventHandler('onmouseup', this.CanvasCropononmouseup, this);

        	//CanvasComp.addEventHandler('onmousemove', this.CanvasCropononmousemove, this);

        	CanvasComp.bringToFront();

        	var img = objImageViewer._image._img_elem;
        	CanvasComp._canvas.drawImage(img,0,0,objImageViewer.getOffsetWidth(),objImageViewer.getOffsetHeight());
        	objImageViewer.set_visible(false);

        	this.CanvasComp = CanvasComp;
        }
        this.CanvasCropononmouseup = function(obj, e) {
        	console.log("CanvasCropononmouseup", e);
        }
        this.CanvasCropononmousemove = function(obj, e) {
        	console.log("CanvasCropononmousemove", e);
        }
        this.CanvasCrop_ondrag = function(obj, e) {
        	console.log("CanvasCrop_ondrag", e);
        }
        this.CanvasCropondragenter = function(obj, e) {
        	console.log("CanvasCropondragenter", e);
        }
        this.CanvasCropondragmove = function(obj, e) {
        	this.CanvasComp._canvas.clearRect(0,0,this.CanvasComp.width,this.CanvasComp.height);
        	this.CanvasComp._canvas.rect(this.CanvasSX, this.CanvasSY, e.canvasx, e.canvasy);
        	this.CanvasComp._canvas.stroke();
        	console.log("CanvasCropondragmove", e);
        }
        this.CanvasCroponondragleave = function(obj, e) {
        	console.log("CanvasCroponondragleave", e);
        }

        this.canvas_form_ondrag = function(obj,e)
        {
        	this.CanvasComp._canvas.clearRect(0,0,this.CanvasComp.width,this.CanvasComp.height);
        	this.CanvasSX = e.canvasx;
        	this.CanvasSY = e.canvasy;
        	console.log("canvas_form_ondrag", e);
        };

        this.canvas_form_ondragenter = function(obj,e)
        {
        	console.log("canvas_form_ondragenter", e);
        };

        this.canvas_form_ondragleave = function(obj,e)
        {
        	console.log("canvas_form_ondragleave", e);
        };

        this.canvas_form_ondragmove = function(obj,e)
        {
        	console.log("canvas_form_ondragmove", e);
        };

        this.canvas_form_ondrop = function(obj,e)
        {
        	console.log("canvas_form_ondrop", e);
        };

        this.canvas_form_ontouchstart = function(obj,e)
        {
        	console.log("canvas_form_ontouchstart", e);
        };

        this.canvas_form_onmousemove = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrag",this.canvas_form_ondrag,this);
            this.addEventHandler("ondragenter",this.canvas_form_ondragenter,this);
            this.addEventHandler("ondragleave",this.canvas_form_ondragleave,this);
            this.addEventHandler("ondragmove",this.canvas_form_ondragmove,this);
            this.addEventHandler("ondrop",this.canvas_form_ondrop,this);
            this.addEventHandler("ontouchstart",this.canvas_form_ontouchstart,this);
            this.addEventHandler("onmousemove",this.canvas_form_onmousemove,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("canvas_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
