(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFloating");
            this.set_titletext("Floating Label(동적생성방식)");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div00","40","40",null,"544","40",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_border("1px solid darkgray");
            obj.set_borderRadius("5px");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","47","48","329","55",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid darkgray");
            obj.set_background("#FAFAFA");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","57","65","80","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("Name");
            obj.set_font("normal bold 16pt/normal \"Arial\"");
            obj.set_background("#FAFAFA");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00","392","44","143","61",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",888,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFloatingLabel.xfdl", function() {
        this.aniMode = false;
        this.sample_20221226_onload = function(obj,e)
        {
        	// Create Object
        	this.objAni = new nexacro.Animation("Animation00", this);
        	// Add Object to Parent Form
        	this.addChild( "Animation00", this.objAni );

        	// Set Object
        	this.objAni.set_duration( 200 );
        	this.objAni.set_easing( "linear" );
        	this.objAni.setEventHandler( "oncomplete", this.Animation00_oncomplete, this);

        	// Add Item to Object
        	this.objAni.addTarget( "AniItem00", this.div00.form.sta00, "top:[60,35], width:[80,35], font:['normal bold 16pt/normal Arial','normal bold 9pt/normal Arial']" );


        	// Create Object
        	this.objAni1 = new nexacro.Animation("Animation01", this);
        	// Add Object to Parent Form
        	this.addChild( "Animation01", this.objAni1 );

        	// Set Object
        	this.objAni1.set_duration( 200 );
        	this.objAni1.set_easing( "linear" );
        	this.objAni1.setEventHandler( "oncomplete", this.Animation01_oncomplete, this);

        	// Add Item to Object
        	this.objAni1.addTarget( "AniItem01", this.div00.form.sta00, "top:[35,60], width:[35,80], font:['normal bold 9pt/normal Arial','normal bold 16pt/normal Arial']" );
        };

        this.div00_sta00_onclick = function(obj,e)
        {
        	if(!this.aniMode){
        		// Play Object
        		this.objAni.set_direction("normal");
        		this.objAni.play();
        	}
        };

        this.Animation00_oncomplete = function(obj,e)
        {
        	this.div00.form.sta00.set_color("blue");
        	this.div00.form.edt00.set_border("2px solid blue");
        	this.div00.form.edt00.setFocus();
        	this.aniMode = true;
        }

        this.Animation01_oncomplete = function(obj,e)
        {
        	this.div00.form.sta00.set_color("black");
        	this.div00.form.edt00.set_border("1px solid darkgray");
        	this.aniMode = false;
        }

        this.div00_edt00_onkillfocus = function(obj,e)
        {
        	if(!obj.value){
        		// Play Object
        		//this.objAni.set_direction("reverse");
        		this.objAni1.play();
        	}
        };

        this.div00_edt00_onsetfocus = function(obj,e)
        {
        	if(!obj.value && this.aniMode){
        		// Play Object
        		this.objAni.set_direction("normal");
        		this.objAni.play();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample_20221226_onload,this);
            this.div00.form.edt00.addEventHandler("onkillfocus",this.div00_edt00_onkillfocus,this);
            this.div00.form.edt00.addEventHandler("onsetfocus",this.div00_edt00_onsetfocus,this);
            this.div00.form.sta00.addEventHandler("onclick",this.div00_sta00_onclick,this);
        };
        this.loadIncludeScript("sampleFloatingLabel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
