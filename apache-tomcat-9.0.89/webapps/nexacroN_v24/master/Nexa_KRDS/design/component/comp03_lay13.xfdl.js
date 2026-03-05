(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay13");
            this.set_titletext("레이아웃 및 표현_텍스트 목록");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,3280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accodian", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BODY_TITLE","type" : "STRING","size" : "256"},{"id" : "DETAIL_CON","type" : "STRING","size" : "256"}]},"Rows" : [{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"},{"BODY_TITLE" : "아코디언 타이틀 영역"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "content01","type" : "STRING","size" : "256"},{"id" : "content02","type" : "STRING","size" : "256"},{"id" : "context","type" : "STRING","size" : "256"}]},"Rows" : [{"content01" : "내용","content02" : "내용","context" : "표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다."},{"content01" : "내용","content02" : "내용","context" : "표는 데이터를 하나 이상의 행과 열로 조직화하여 표현하는 형식으로 사용자가 빠르게 많은 양의 정보를 확인하고 비교할 수 있도록 도와준다."}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridSample", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "BodyTitle","type" : "STRING","size" : "256"},{"id" : "DetailText","type" : "STRING","size" : "256"}]},"Rows" : [{"BodyTitle" : "기본형 아코디언","DetailText" : "내용"},{"BodyTitle" : "기본형 아코디언","DetailText" : "내용"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","186","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("텍스트 목록");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","101","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Text list");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staDes","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("텍스트 목록은 계층 구조가 있는 텍스트 블록을 읽기 쉽게 구성한 것이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staTit01","0","staDes:80","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Unordered");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("staUL1","0","staTit01:20","200","114",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("⦁   텍스트 목록 레벨1\r\n⦁   텍스트 목록 레벨1\r\n⦁   텍스트 목록 레벨1");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            this.addChild(obj.name, obj);

            obj = new Static("staUl2","0","staUL1:2","200","136",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("-   텍스트 목록 레벨2\r\n-   텍스트 목록 레벨2\r\n-   텍스트 목록 레벨2\r\n-   텍스트 목록 레벨2");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            this.addChild(obj.name, obj);

            obj = new Static("staUl3","0","staUl2:4","200","136",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("◦   텍스트 목록 레벨3\r\n◦   텍스트 목록 레벨3\r\n◦   텍스트 목록 레벨3\r\n◦   텍스트 목록 레벨3");
            obj.set_cssclass("sta_WF_TxtlstLv03");
            this.addChild(obj.name, obj);

            obj = new Static("staTit02","0","staUl3:100","194","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Ordered");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("staOl1","0","staTit02:20","200","380",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1.   텍스트 목록 레벨1\r\n2.   텍스트 목록 레벨1\r\n3.   텍스트 목록 레벨1\r\n4.   텍스트 목록 레벨1\r\n5.   텍스트 목록 레벨1\r\n6.   텍스트 목록 레벨1\r\n7.   텍스트 목록 레벨1\r\n8.   텍스트 목록 레벨1\r\n9.   텍스트 목록 레벨1\r\n10. 텍스트 목록 레벨1");
            obj.set_cssclass("sta_WF_TxtlstOLv01");
            this.addChild(obj.name, obj);

            obj = new Static("staOl2","0","staOl1:6","200","136",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("a.  텍스트 목록 레벨2\r\nb.  텍스트 목록 레벨2\r\nc.  텍스트 목록 레벨2\r\nd.  텍스트 목록 레벨2");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            this.addChild(obj.name, obj);

            obj = new Static("staOl3","0","staOl2:4","200","308",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("①   텍스트 목록 레벨3\r\n②   텍스트 목록 레벨3\r\n③   텍스트 목록 레벨3\r\n④   텍스트 목록 레벨3\r\n⑤   텍스트 목록 레벨3\r\n⑥   텍스트 목록 레벨3\r\n⑦   텍스트 목록 레벨3\r\n⑧   텍스트 목록 레벨3\r\n⑨   텍스트 목록 레벨3\r\n⑩   텍스트 목록 레벨3");
            obj.set_cssclass("sta_WF_TxtlstLv03");
            this.addChild(obj.name, obj);

            obj = new Static("staTit03","0","staOl3:100","194","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("혼합형");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("staOl1_01","0","staTit03:20","671","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("1.   Orderd List의 준말인 ol 은 순서를 명시적으로 보여주면서 리스트를 표현할 수 있다.");
            obj.set_cssclass("sta_WF_TxtlstOL01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staUl2_01","0","staOl1_01:10",null,"102","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("-   Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.\r\n-   Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.\r\n-   Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staOl3_01","0","staUl2_01:4",null,"124","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("①   텍스트 목록 레벨3\r\n②   텍스트 목록 레벨3\r\n③   텍스트 목록 레벨3\r\n④   텍스트 목록 레벨3");
            obj.set_cssclass("sta_WF_TxtlstLv03");
            this.addChild(obj.name, obj);

            obj = new Static("staUl2_02","0","staOl3_01:2",null,"102","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("-   Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.\r\n-   Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.\r\n-   Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staOl1_02","0","staUl2_02:6",null,"102","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("2.   Orderd List의 준말인 ol 은 순서를 명시적으로 보여주면서 리스트를 표현할 수 있다.\r\n3.   Orderd List의 준말인 ol 은 순서를 명시적으로 보여주면서 리스트를 표현할 수 있다.\r\n4.   Orderd List의 준말인 ol 은 순서를 명시적으로 보여주면서 리스트를 표현할 수 있다.");
            obj.set_cssclass("sta_WF_TxtlstOL01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staOl1_03","0","staOl1_02:100",null,"26","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("1.   Orderd List의 준말인 ol 은 순서를 명시적으로 보여주면서 리스트를 표현할 수 있다.");
            obj.set_cssclass("sta_WF_TxtlstOL01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staOl2_01","0","staOl1_03:10","662","68",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("a.  텍스트 목록 레벨2\r\nb.  텍스트 목록 레벨2");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            this.addChild(obj.name, obj);

            obj = new Static("staul3_01","0","staOl2_01:4","594","124",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("◦   텍스트 목록 레벨3\r\n◦   텍스트 목록 레벨3\r\n◦   텍스트 목록 레벨3\r\n◦   텍스트 목록 레벨3");
            obj.set_cssclass("sta_WF_TxtlstLv03");
            this.addChild(obj.name, obj);

            obj = new Static("staUl1_01","0","staul3_01:80","671","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("⦁   Orderd List의 준말인 ol 은 순서를 명시적으로 보여주면서 리스트를 표현할 수 있다.");
            obj.set_cssclass("sta_WF_TxtlstUL01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staUl2_03","0","staUl1_01:10",null,"155","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("a.  Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.\r\nb.  Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.\r\nc.  Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.\r\nd.  Unordered List 의 준말인 ul 은 순서를 보여주지 않고 리스트를 표현할 수 있다.");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staGuide","0","staUl2_03:80",null,"292","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_GUIDE_Inforbg");
            obj.set_text("㉠ ㉡ ㉢ ㉣ ㉤ ㉥ ㉦ ㉧ ㉨ ㉩ ㉪ ㉫ ㉬ ㉭ ㉮ ㉯ ㉰ ㉱ ㉲ ㉳ ㉴ ㉵ ㉶ ㉷ ㉸ ㉹ ㉺ ㉻\r\n ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮\r\n＊✽✱  ＠ § ※ ☆ ★ ○ ● ◎ ◉ ⦿ ◈ ◇ ◆ ❖ □ ▣ ■  → ← ↑ ↓ ↔ 〓 ♡ ♥ ◀︎ ◁ ▷ ▶ ▼ ▽ ▲ △ ☞ ☛ ➢ ➣ ➤ \r\n＋ － ＜ ＝ ＞ ± × ÷ ≠ ≤ ≥ ∞ ∴  ∵ ∫ ∬\r\n ∙ • ・ ◦   ▪︎ ▫︎ ◻︎ ◼︎✓  ✕  ✗ ✘ ☐ ☑ ☒ ☓");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,3280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp03_lay13.xfdl", function() {

        this.lay13_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay13_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.staUl2.addEventHandler("onclick",this.Static06_00_onclick,this);
            this.staOl1.addEventHandler("onclick",this.Static06_01_onclick,this);
        };
        this.loadIncludeScript("comp03_lay13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
