(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("treeGrid");
            this.set_titletext("New Form");
            this.getSetter("classname").set("treeGrid");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "1","Column1" : "1"},{"Column0" : "11","Column1" : "2"},{"Column0" : "12","Column1" : "2"},{"Column0" : "2","Column1" : "1"},{"Column0" : "21","Column1" : "2"},{"Column0" : "22","Column1" : "2"},{"Column0" : "3","Column1" : "1"},{"Column0" : "31","Column1" : "2"},{"Column0" : "32","Column1" : "2"},{"Column0" : "4","Column1" : "1"},{"Column0" : "41","Column1" : "2"},{"Column0" : "42","Column1" : "2"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","2.5%","96",null,"372","3.13%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Dataset00");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"268\"/><Column size=\"28\"/><Column size=\"40\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\" style=\"selectbackground:chocolate;\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:Column0\" treestartlevel=\"1\" treelevel=\"bind:Column1\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","81.41%","17",null,"69","2.03%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메인");
            obj.set_cssclass("WF_btn_Pnt");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","4.84%","520",null,"51","67.97%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,960,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_44948_treeGrid.xfdl", function() {
        this.nrow=-1;
        this.Grid00_oncellclick = function(obj, e)
        {
        	this.nrow = e.row;
        	this.setTimer(0,100);
        }


        this.fn_TreeMenuSet1 = function()
        {
        trace("cellclick " + this.Grid00.rowcount);

        	var nRow = this.nrow;
        	var nTreeRow = this.Grid00.getTreeRow(nRow);
        	this.Grid00.set_enableevent(false);
        trace("0 :" + nTreeRow);
        	for(var i = this.Grid00.rowcount - 1; i >= 0; i--) {
        trace("1-" + i + ":" + this.Grid00.getTreeChildCount(i, false));
        		if(this.Grid00.getTreeChildCount(i, false) > 0) {

        			//var nGridrow = this.Grid00.getTreeRow(i);
        trace("11:" + nTreeRow + ":" + i + ":" + this.Grid00.getTreeStatus(i));
        			if(nTreeRow == i && this.Grid00.getTreeStatus(i) == false) {
        trace("222");
        				this.Grid00.setTreeStatus(i, true);
        			} else {
        trace("333");
        				this.Grid00.setTreeStatus(i, false);

        			}
        		}
        	}

        	this.Grid00.set_enableevent(true);
        }

        this.Button03_onclick = function(obj,  e)
        {
        	this.go("Sample::testMain.xfdl");
        }


        this.treeGrid_ontimer = function(obj, e)
        {
        	this.killTimer(e.timerid);
        	if(e.timerid == 0)
        	{
        		this.fn_TreeMenuSet1();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.treeGrid_ontimer,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("RP_44948_treeGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
