(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,1090);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_feedback", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전화</Col><Col id=\"code\">C</Col></Row><Row><Col id=\"name\">문자</Col><Col id=\"code\">S</Col></Row><Row><Col id=\"name\">이메일</Col><Col id=\"code\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","45","839","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TAB키로 이동 시 라디오 접근성 속성 읽어주지 않고 선택된 아이템 정보만읽어주는 현상.\r\n선택된 아이템이 없을 시 \'브라우저\'만 음성출력 되는 현상.");
            this.addChild(obj.name, obj);

            obj = new Static("stcFeedback","90","230","140","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_StaticE");
            obj.set_taborder("1");
            obj.set_text("답변회신방법 <fc v=\'#fb6d3a\'><b v=\'true\'>*</b></fc>");
            obj.set_cssclass("sta_WF_writeTitle");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Radio("radFeedback","260","229","240","30",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_RadioE");
            obj.set_taborder("2");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_search");
            obj.set_innerdataset("ds_feedback");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_accessibilitylabel("답변회신방법");
            obj.set_text("제목+내용");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","80","331","164","49",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","266","395","389","78",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Radio0");
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_accessibilitylabel("라벨");
            obj.set_accessibilitydescription("디스크립션");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">A</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">B</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">C</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1300,1090,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","radFeedback","value","ds_InParam","REPLY_METHOD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("rp101484.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
