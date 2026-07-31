(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("dsMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "CODE","size" : "10","type" : "string"},{"id" : "NAME","size" : "60","type" : "string"},{"id" : "URL","size" : "100","type" : "string"},{"id" : "DESC","size" : "200","type" : "string"}]},"Rows" : [{"CODE" : "BTN","NAME" : "[가시적] Button 동적 생성","URL" : "VisibleComp::ButtonSample.xfdl","DESC" : "new nexacro.Button() — 버튼을 동적으로 생성하고 이벤트를 연결합니다"},{"CODE" : "EDT","NAME" : "[가시적] Edit 동적 생성","URL" : "VisibleComp::EditSample.xfdl","DESC" : "new nexacro.Edit() — Edit/MaskEdit을 동적으로 생성합니다"},{"CODE" : "GRD","NAME" : "[가시적] Grid 동적 생성","URL" : "VisibleComp::GridSample.xfdl","DESC" : "new nexacro.Grid() — Grid와 Dataset을 동적으로 생성하고 바인딩합니다"},{"CODE" : "CMB","NAME" : "[가시적] Combo 동적 생성","URL" : "VisibleComp::ComboSample.xfdl","DESC" : "new nexacro.Combo() — Combo와 이너 Dataset을 동적으로 생성합니다"},{"CODE" : "CHK","NAME" : "[가시적] CheckBox 동적 생성","URL" : "VisibleComp::CheckBoxSample.xfdl","DESC" : "new nexacro.CheckBox() — CheckBox를 다양한 옵션으로 동적 생성합니다"},{"CODE" : "RAD","NAME" : "[가시적] Radio 동적 생성","URL" : "VisibleComp::RadioSample.xfdl","DESC" : "new nexacro.Radio() — Radio를 innerdataset과 함께 동적으로 생성합니다"},{"CODE" : "TAB","NAME" : "[가시적] Tab 동적 생성","URL" : "VisibleComp::TabSample.xfdl","DESC" : "new nexacro.Tab() — Tab과 TabPage를 동적으로 생성/추가합니다"},{"CODE" : "STC","NAME" : "[가시적] Static 동적 생성","URL" : "VisibleComp::StaticSample.xfdl","DESC" : "new nexacro.Static() — Static을 다양한 스타일로 동적 생성합니다"},{"CODE" : "TXA","NAME" : "[가시적] TextArea 동적 생성","URL" : "VisibleComp::TextAreaSample.xfdl","DESC" : "new nexacro.TextArea() — TextArea를 동적으로 생성합니다"},{"CODE" : "LST","NAME" : "[가시적] ListBox 동적 생성","URL" : "VisibleComp::ListBoxSample.xfdl","DESC" : "new nexacro.ListBox() — ListBox와 Dataset을 동적으로 생성합니다"},{"CODE" : "CAL","NAME" : "[가시적] Calendar 동적 생성","URL" : "VisibleComp::CalendarSample.xfdl","DESC" : "new nexacro.Calendar() — Calendar를 동적으로 생성하고 날짜 선택 이벤트를 연결합니다"},{"CODE" : "MSK","NAME" : "[가시적] MaskEdit 동적 생성","URL" : "VisibleComp::MaskEditSample.xfdl","DESC" : "new nexacro.MaskEdit() — 다양한 format의 MaskEdit을 동적으로 생성합니다"},{"CODE" : "DS","NAME" : "[비가시적] Dataset 동적 생성","URL" : "InvisibleComp::DatasetSample.xfdl","DESC" : "new nexacro.Dataset() — Dataset을 동적 생성하고 Grid에 바인딩하여 CRUD를 수행합니다"},{"CODE" : "DO","NAME" : "[비가시적] DataObject 동적 생성","URL" : "InvisibleComp::DataObjectSample.xfdl","DESC" : "new nexacro.DataObject() — REST API를 호출하고 결과를 Grid에 표시합니다"},{"CODE" : "VF","NAME" : "[비가시적] VirtualFile 동적 생성","URL" : "InvisibleComp::VirtualFileSample.xfdl","DESC" : "new nexacro.VirtualFile() — 파일 드래그앤드롭으로 VirtualFile을 획득하고 정보를 표시합니다"},{"CODE" : "TR1","NAME" : "[비가시적] transaction — Promise 방식","URL" : "InvisibleComp::TransactionSample01.xfdl","DESC" : "this.transaction() 반환 Promise에 .then().catch()를 체이닝하여 서버 통신 결과를 처리합니다"},{"CODE" : "TR2","NAME" : "[비가시적] transaction — async/await 방식","URL" : "InvisibleComp::TransactionSample02.xfdl","DESC" : "async function에서 await this.transaction()으로 절차적으로 결과를 처리합니다"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("stc_title","10","10","700","32",null,null,null,null,null,null,this);
            obj.set_font("bold 16 \'Malgun Gothic\'");
            obj.set_taborder("0");
            obj.set_text("넥사크로 동적 컴포넌트 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_label","10","55","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("화면 선택:");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cmb_menu","85","52","380","32",null,null,null,null,null,null,this);
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsMenu");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","480","58","780","24",null,null,null,null,null,null,this);
            obj.set_color("#666666");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div_content","0","90","1280","670",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div_content
            obj = new nexacro.Layout("default","",0,0,this.div_content.form,function(p){});
            this.div_content.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,760,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("main.xfdl", function(nexacro, system, trace, environment, application) {

        this.main_onload = function(obj, e)
        {
            if (this.dsMenu.rowcount > 0)
            {
                this.cmb_menu.set_value(this.dsMenu.getColumn(0, "CODE"));
                this.stc_desc.set_text(this.dsMenu.getColumn(0, "DESC"));
                this.div_content.set_url(this.dsMenu.getColumn(0, "URL"));
            }
        };

        this.cmb_menu_onitemchanged = function(obj, e)
        {
            var nRow = this.dsMenu.findRow("CODE", obj.value);
            if (nRow >= 0)
            {
                this.stc_desc.set_text(this.dsMenu.getColumn(nRow, "DESC"));
                this.div_content.set_url(this.dsMenu.getColumn(nRow, "URL"));
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_onload,this);
            this.cmb_menu.addEventHandler("onitemchanged",this.cmb_menu_onitemchanged,this);
        };

        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=main.xfdl.js.map
