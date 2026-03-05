(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp06");
            this.set_titletext("Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,697);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">01</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">02</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">03</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">04</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">05</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">06</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">07</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">08</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">09</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">11</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">12</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">13</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">14</Col></Row><Row><Col id=\"Column1\">넥사크로 N</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">123,45</Col><Col id=\"Column0\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabjustify("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("첫번째탭");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","20",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("두번째탭");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","20",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"102\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"54\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"가격\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","mobile",480,697,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp18.xfdl", function() {
        /**
        *  Mobile 프로젝트
        *  @FileName 	Temp18.xfdl
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//필수함수
        	this.gfnFormOnLoadM(obj);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("Temp18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
