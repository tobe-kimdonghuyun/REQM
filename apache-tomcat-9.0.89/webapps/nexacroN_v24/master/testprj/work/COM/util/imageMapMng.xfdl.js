(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("imageMapMng");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRects", this);
            obj._setContents("<ColumnInfo><Column id=\"x1\" type=\"INT\" size=\"256\"/><Column id=\"x2\" type=\"INT\" size=\"256\"/><Column id=\"y1\" type=\"INT\" size=\"256\"/><Column id=\"y2\" type=\"INT\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"x1\">50</Col><Col id=\"x2\">50</Col><Col id=\"y1\">50</Col><Col id=\"y2\">50</Col><Col id=\"id\">rect01</Col></Row><Row><Col id=\"x1\">120</Col><Col id=\"x2\">50</Col><Col id=\"y1\">30</Col><Col id=\"y2\">70</Col><Col id=\"id\">rect02</Col></Row><Row><Col id=\"x1\">100</Col><Col id=\"x2\">100</Col><Col id=\"y1\">300</Col><Col id=\"y2\">70</Col><Col id=\"id\">rect03</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Graphics("Graphics00","14.00","14","636","486",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("onclick").set("Graphics00_onclick");
            obj.getSetter("border").set("1px solid black");
            obj.getSetter("onmousemove").set("Graphics00_onmousemove");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","723.00","40","147","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Add Objects");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","723.00","105","147","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택취소");
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
        this.registerScript("imageMapMng.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	Temp06.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/10/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/10/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        var selectedRectObj = null;
        var selectedRectObjId = null;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnClose = function ()
        {
        	trace('cfnClose');
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.Button01_onclick = function(obj,e)
        {
        	this.addGraphicsControl();
        	this.Graphics00.redraw();
        };

        this.addGraphicsControl = function()
        {
        	// GraphicsGroup
        	var objGGroup = new nexacro.GraphicsGroup();
        	this.Graphics00.addChild( "GraphicsGroup00", objGGroup);

        	// GraphicsImage
        	var objGImage = new nexacro.GraphicsImage();
        	objGImage.set_x(200);
        	objGImage.set_y(50);
        	objGImage.set_width(150);
        	objGImage.set_height(150);
        	objGImage.set_image("url('imagerc::img_50.png')");
        	objGGroup.addChild("GraphicsImage00", objGImage);

        	// GraphicsText
        	var objGText = new nexacro.GraphicsText();
        	objGText.set_x(300);
        	objGText.set_y(50);
        	objGText.set_color('red');
        	objGText.set_font('12pt/normal Verdana');
         	objGText.set_text('Ryan');
        	objGGroup.addChild("GraphicsText00", objGText);

        	for(var i=0;i<this.dsRects.rowcount;i++) {
        		var rectId = this.dsRects.getColumn(i, "id");
        		var x1 = this.dsRects.getColumn(i, "x1");
        		var x2 = this.dsRects.getColumn(i, "x2");
        		var y1 = this.dsRects.getColumn(i, "y1");
        		var y2 = this.dsRects.getColumn(i, "y2");

        		//GraphicsRect
        		var objGRect = new nexacro.GraphicsRect();
        		objGRect.set_x(x1);
        		objGRect.set_y(y1);
        		objGRect.set_width(x2);
        		objGRect.set_height(y2);
        		objGRect.set_strokepen("1px solid red");
        		objGGroup.addChild(rectId, objGRect);
        	}
        }

        this.Graphics00_onclick = function(obj,e)
        {
        	for(var i=0;i<this.dsRects.rowcount;i++) {
        		var rectId = this.dsRects.getColumn(i, "id");
        		var x1 = this.dsRects.getColumn(i, "x1");
        		var x2 = this.dsRects.getColumn(i, "x2");
        		var y1 = this.dsRects.getColumn(i, "y1");
        		var y2 = this.dsRects.getColumn(i, "y2");

        		var rectObj = obj.getObjectByID(rectId);

        		if(rectObj != null && rectObj != undefined) {
        			if(x1 <= e.canvasx && y1 <= e.canvasy && (x1+x2) >= e.canvasx && (y1+y2) >= e.canvasy) {
        				rectObj.set_strokepen("5px solid blue");
        				selectedRectObj = rectObj;
        				selectedRectObjId = rectId;
        			}
        		}
        	}

        	var sRow = this.dsRects.findRow("id", selectedRectObjId);
        	var id = this.dsRects.getColumn(sRow, "id");
        	trace(id);
        	//메타데이터를 화면에 표출하여 보여준다.

        };

        this.Graphics00_onmousemove = function(obj,e)
        {
        	for(var i=0;i<this.dsRects.rowcount;i++) {
        		var rectId = this.dsRects.getColumn(i, "id");
        		var x1 = this.dsRects.getColumn(i, "x1");
        		var x2 = this.dsRects.getColumn(i, "x2");
        		var y1 = this.dsRects.getColumn(i, "y1");
        		var y2 = this.dsRects.getColumn(i, "y2");

        		var rectObj = obj.getObjectByID(rectId);

        		if(rectObj != null && rectObj != undefined) {
        			if(x1 <= e.canvasx && y1 <= e.canvasy && (x1+x2) >= e.canvasx && (y1+y2) >= e.canvasy) {
        				rectObj.set_strokepen("5px solid blue");
        				// 선택이 되어지면 마우스포인터를 손가락으로 변경 하자
        			} else {
        				if(selectedRectObj != rectObj) {
        					rectObj.set_strokepen("1px solid red");
        				}
        			}
        		}
        	}

        	this.Graphics00.redraw();
        };

        this.Button03_onclick = function(obj,e)
        {
        	selectedRectObj.set_strokepen("1px solid red");
        	selectedRectObj = null;
        	selectedRectObjId = null;
        	this.Graphics00.redraw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("imageMapMng.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
