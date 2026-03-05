(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmBottom");
            this.set_titletext("Bottom Frame");
            this.set_background("#484c53");
            if (Form == this.constructor)
            {
                this._setFormPosition(1918,86);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staInfo1","20","0","803","86",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("[302-701] 대전광역시 서구 청사로 189 1동(산림청)      대표전화 :  1811-7434     FAX : 042-472-3222    E-MAIL    dev01@mail.go.kr");
            obj.set_cssclass("sta_BF_copyright");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("divGroup",null,"23","263","38","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_BF_group");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","8","52","20",null,null,null,null,null,null,this.divGroup.form);
            obj.set_taborder("1");
            obj.set_text("TODAY");
            obj.set_cssclass("sta_BF_label");
            this.divGroup.addChild(obj.name, obj);

            obj = new Static("staTodayCnt","Static00:10","8","38","20",null,null,null,null,null,null,this.divGroup.form);
            obj.set_taborder("3");
            obj.set_text("10,000");
            obj.set_cssclass("sta_BF_count");
            this.divGroup.addChild(obj.name, obj);

            obj = new Static("staLine","staTodayCnt:10","0","1",null,null,"0",null,null,null,null,this.divGroup.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BF_line");
            this.divGroup.addChild(obj.name, obj);

            obj = new Static("Static00_00","staLine:20","8","50","20",null,null,null,null,null,null,this.divGroup.form);
            obj.set_taborder("2");
            obj.set_text("TOTAL");
            obj.set_cssclass("sta_BF_label");
            this.divGroup.addChild(obj.name, obj);

            obj = new Static("staTotCnt","Static00_00:9","8","50","20",null,null,null,null,null,null,this.divGroup.form);
            obj.set_taborder("4");
            obj.set_text("16,967");
            obj.set_cssclass("sta_BF_count");
            this.divGroup.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","244","86","divGroup:23",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("copyrightⓒ 산림청.  all right reserved.");
            obj.set_cssclass("sta_BF_copyright");
            obj.set_wordWrap("char");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo2","20","0","482","86",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[302-701] 대전광역시 서구 청사로 189 1동(산림청)      \r\n대표전화 :  1811-7434     FAX : 042-472-3222    E-MAIL    dev01@mail.go.kr");
            obj.set_cssclass("sta_BF_copyright");
            obj.set_wordWrap("char");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","171","208","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1280~1400에서 staInfo2를 사용하며 \r\n그외에서는 staInfo1을 사용합니다.");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divGroup.form
            obj = new Layout("default","",0,0,this.divGroup.form,function(p){});
            this.divGroup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1918,86,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmBottom.xfdl", function() {
        /**
         *  @FileName 	frmBottom.xfdl
         *  @Creator 	박준하
         *  @CreateDate 2023/09/18
         *  @Desction
         ************** 소스 수정 이력 ***********************************************
         * Date					Modifier					Description
         *******************************************************************************
         * 2023/09/18			박준하						최초생성
         *******************************************************************************
        **/

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description Form 로드 완료
        **/
        this.form_onload = function(obj,e)
        {//trace(obj.name, e.eventid);
        	app.gvFrmBottom = obj.parent;
        	//this.fnSetCount();
        };

        /**
         * @description Form 크기 변경
        **/
        this.form_onsize = function(obj,e)
        {
        	if (obj.getOffsetWidth() <= 1400)
        	{
        		this.staInfo1.set_visible(false);
        		this.staInfo2.set_visible(true);
        	}
        	else
        	{
        		this.staInfo1.set_visible(true);
        		this.staInfo2.set_visible(false);
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
        this.fnSetCount = function()
        {
        	this.divGroup.form.staTodayCnt.set_text(app.gdsCount.getColumn(0, 'todayCnt').toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
        	this.divGroup.form.staTotCnt.set_text(app.gdsCount.getColumn(0, 'totCnt').toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
        };
        this.loadIncludeScript("frmBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
