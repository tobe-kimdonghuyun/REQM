(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Component03");
            this.set_titletext("grd,tree,cellclass");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,2840);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dc_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Text\" type=\"STRING\" size=\"256\"/><Column id=\"Number\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/><Column id=\"ProgressBar\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Number\">1500000</Col><Col id=\"Text\">가나다라마</Col><Col id=\"체크박스\">1</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">01</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">02</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">03</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">2</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"체크박스\"/><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"Button\">버튼</Col><Col id=\"NO\">04</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">3</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">05</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">4</Col></Row><Row><Col id=\"Edit\">투비</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"Calendar\">20201225</Col><Col id=\"Expand\"/><Col id=\"Combo\">가나다라</Col><Col id=\"Text\">가나다라마</Col><Col id=\"Number\">1500000</Col><Col id=\"체크박스\"/><Col id=\"Button\">버튼</Col><Col id=\"NO\">06</Col><Col id=\"ProgressBar\">50%</Col><Col id=\"code\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"매입계산서번호\" type=\"STRING\" size=\"256\"/><Column id=\"전표발행\" type=\"STRING\" size=\"256\"/><Column id=\"정산일\" type=\"STRING\" size=\"256\"/><Column id=\"발생일자\" type=\"STRING\" size=\"256\"/><Column id=\"시간구분\" type=\"STRING\" size=\"256\"/><Column id=\"과세구분\" type=\"STRING\" size=\"256\"/><Column id=\"대금지불유형\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"단가\">1500000000</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"NO\">01</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">02</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">03</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"NO\">04</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">05</Col><Col id=\"단위\">KRW</Col></Row><Row><Col id=\"매입계산서번호\">가나다라마바사아</Col><Col id=\"전표발행\"/><Col id=\"발생일자\">2019-12-25</Col><Col id=\"시간구분\">미정</Col><Col id=\"정산일\">2020-12</Col><Col id=\"과세구분\">가나다라</Col><Col id=\"대금지불유형\">가나다라</Col><Col id=\"단가\">1500000000</Col><Col id=\"NO\">06</Col><Col id=\"단위\">KRW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"data\">1뎁스메뉴</Col></Row><Row><Col id=\"lev\">1</Col><Col id=\"data\">2뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">1뎁스메뉴</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"data\">2뎁스메뉴</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"data\">3뎁스메뉴</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"lev\">2</Col><Col id=\"data\">3뎁스메뉴</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dc_nodata", this);
            obj._setContents("<ColumnInfo><Column id=\"체크박스\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lstv", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"img\" type=\"STRING\" size=\"256\"/><Column id=\"decoratetext\" type=\"STRING\" size=\"256\"/><Column id=\"cbo\" type=\"STRING\" size=\"256\"/><Column id=\"expand\" type=\"STRING\" size=\"256\"/><Column id=\"prgs\" type=\"STRING\" size=\"256\"/><Column id=\"edi\" type=\"STRING\" size=\"256\"/><Column id=\"num\" type=\"STRING\" size=\"256\"/><Column id=\"cal\" type=\"STRING\" size=\"256\"/><Column id=\"msk\" type=\"STRING\" size=\"256\"/><Column id=\"msknum\" type=\"STRING\" size=\"256\"/><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">1</Col><Col id=\"img\">URL(&quot;theme://images/lstv_WF_Image01.png&quot;)</Col><Col id=\"decoratetext\">&lt;b v=&apos;true&apos;&gt;ListView&lt;/b&gt;body</Col><Col id=\"cbo\">가나다라</Col><Col id=\"expand\">expand</Col><Col id=\"edi\">Edit</Col><Col id=\"num\">999999999</Col><Col id=\"cal\">20181229</Col><Col id=\"msk\">123123123456</Col><Col id=\"msknum\">999999999</Col><Col id=\"txt\">TextArea</Col><Col id=\"btn\">버튼</Col><Col id=\"prgs\">50</Col></Row><Row><Col id=\"chk\">1</Col><Col id=\"img\">URL(&quot;theme://images/lstv_WF_Image02.png&quot;)</Col><Col id=\"decoratetext\">&lt;b v=&apos;true&apos;&gt;ListView&lt;/b&gt;body</Col><Col id=\"cbo\">가나다라</Col><Col id=\"expand\">expand</Col><Col id=\"edi\">Edit</Col><Col id=\"num\">999999999</Col><Col id=\"cal\">20181229</Col><Col id=\"msk\">123123123456</Col><Col id=\"msknum\">999999999</Col><Col id=\"txt\">TextArea</Col><Col id=\"btn\">버튼</Col><Col id=\"prgs\">30</Col></Row><Row><Col id=\"chk\">1</Col><Col id=\"img\">URL(&quot;theme://images/lstv_WF_Image03.png&quot;)</Col><Col id=\"decoratetext\">&lt;b v=&apos;true&apos;&gt;ListView&lt;/b&gt;body</Col><Col id=\"cbo\">가나다라</Col><Col id=\"expand\">expand</Col><Col id=\"edi\">Edit</Col><Col id=\"num\">999999999</Col><Col id=\"cal\">20181229</Col><Col id=\"msk\">123123123456</Col><Col id=\"msknum\">999999999</Col><Col id=\"txt\">TextArea</Col><Col id=\"btn\">버튼</Col><Col id=\"prgs\">45</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">가나다라</Col><Col id=\"text\">가나다라</Col></Row><Row><Col id=\"code\">가나다라</Col><Col id=\"text\">가나다라</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta109","48","160",null,"1294","52",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta109_00","48","1474",null,"1294","52",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_Box");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","98","210","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Grid");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","130","280","26","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_GTxt02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","130","310",null,"298","131",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dc_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"134\"/><Column size=\"157\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"37\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"Calendar\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"Expand\"/><Cell col=\"8\" text=\"Text\"/><Cell col=\"9\" text=\"Number\"/><Cell col=\"10\" text=\"Button\"/><Cell col=\"11\" text=\"ProgressBar\"/></Band><Band id=\"body\"><Cell text=\"bind:체크박스\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NO\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Edit\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:MaskEdit\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Combo\" combodataset=\"ds00\" combodatacol=\"text\" combocodecol=\"code\"/><Cell col=\"5\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Calendar\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"6\" expandshow=\"show\" expandsize=\"30\" cssclass=\"cell_WF_Cal\"/><Cell col=\"7\" text=\"bind:Expand\" edittype=\"text\" expandshow=\"show\" expandsize=\"30\" cssclass=\"cell_WF_Edit\" displaytype=\"editcontrol\"/><Cell col=\"8\" displaytype=\"normal\" text=\"bind:Text\"/><Cell col=\"9\" text=\"bind:Number\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"11\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" text=\"총계\" displaytype=\"text\"/><Cell col=\"9\" colspan=\"3\" text=\"1,500,000,000\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","130","671","107","14",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Double Line Head");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","130","701",null,"285","131",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dc_grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"60\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"두줄&#13;&#10;헤더라벨\"/><Cell col=\"2\" text=\"체크\"/><Cell col=\"3\" text=\"라벨\"/><Cell col=\"4\" text=\"라벨\"/><Cell col=\"5\" text=\"라벨\"/><Cell col=\"6\" text=\"라벨\"/><Cell col=\"7\" text=\"라벨\"/><Cell col=\"8\" text=\"라벨\"/><Cell col=\"9\" text=\"라벨\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:매입계산서번호\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:전표발행\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:정산일\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:발생일자\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:시간구분\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:과세구분\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:대금지불유형\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:단가\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:단위\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","130","1056","84","14",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Multiple Head");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","130","1086",null,"285","131",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dc_grd01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"37\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"라벨\"/><Cell col=\"2\" rowspan=\"2\" text=\"체크\"/><Cell col=\"3\" rowspan=\"2\" text=\"라벨\"/><Cell col=\"4\" rowspan=\"2\" text=\"라벨\"/><Cell col=\"5\" rowspan=\"2\" text=\"라벨\"/><Cell col=\"6\" rowspan=\"2\" text=\"라벨\"/><Cell col=\"7\" rowspan=\"2\" text=\"라벨\"/><Cell col=\"8\" colspan=\"2\" text=\"라벨\"/><Cell col=\"10\" rowspan=\"2\" text=\"라벨\"/><Cell row=\"1\" col=\"8\" text=\"라벨\"/><Cell row=\"1\" col=\"9\" text=\"라벨\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:매입계산서번호\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:전표발행\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:정산일\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:발생일자\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:시간구분\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:과세구분\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:대금지불유형\" displaytype=\"text\"/><Cell col=\"8\" colspan=\"2\" text=\"가나다\"/><Cell col=\"10\" text=\"bind:단위\" displaytype=\"text\"/><Cell row=\"1\" text=\"bind:NO\" displaytype=\"text\"/><Cell row=\"1\" col=\"1\" text=\"bind:매입계산서번호\" displaytype=\"text\"/><Cell row=\"1\" col=\"2\" text=\"bind:전표발행\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"3\" text=\"bind:정산일\" displaytype=\"text\"/><Cell row=\"1\" col=\"4\" text=\"bind:발생일자\" displaytype=\"text\"/><Cell row=\"1\" col=\"5\" text=\"bind:시간구분\" displaytype=\"text\"/><Cell row=\"1\" col=\"6\" text=\"bind:과세구분\" displaytype=\"text\"/><Cell row=\"1\" col=\"7\" text=\"bind:대금지불유형\" displaytype=\"text\"/><Cell row=\"1\" col=\"8\" text=\"가나다\"/><Cell row=\"1\" col=\"9\" text=\"가나다\"/><Cell row=\"1\" col=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","130","1582","56","14",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Tree");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","130","1612","315","359",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:lev\" cssclass=\"EXPR(lev==&apos;0&apos;?&quot;cell_WF_1Depth&quot;:lev==&apos;1&apos;?&quot;cell_WF_2Depth&quot;:lev==&apos;2&apos;?&quot;cell_WF_3Depth&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static102","108","320","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("32");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","101","727","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("62");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","104","1113","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("62");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","108","357","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("32");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","746","1095","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("31");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","746","1126","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("31");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","130","2360",null,"334","131",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dc_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\" band=\"summ\"/><Row size=\"32\" band=\"summ\"/><Row size=\"32\" band=\"summ\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"셀고정\" cssclass=\"cell_WF_fixing\"/><Cell col=\"1\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"2\" text=\"텍스트정렬\"/><Cell col=\"3\" text=\"강조 텍스트컬러\"/><Cell col=\"4\" text=\"강조 바탕컬러\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" cssclass=\"cell_WF_Left\" text=\"왼쪽정렬\"/><Cell col=\"3\" text=\"부정\" cssclass=\"cell_WF_Point01\"/><Cell col=\"4\" text=\"부정\" cssclass=\"cell_WF_PointTxt01\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"오른쪽정렬\" cssclass=\"cell_WF_Right\"/><Cell row=\"1\" col=\"3\" text=\"부정\" cssclass=\"cell_WF_Point02\"/><Cell row=\"1\" col=\"4\" text=\"부정\" cssclass=\"cell_WF_PointTxt02\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_WF_Link\" text=\"링크텍스트\"/><Cell row=\"2\" col=\"3\" text=\"긍정\" cssclass=\"cell_WF_Point03\"/><Cell row=\"2\" col=\"4\" text=\"긍정\" cssclass=\"cell_WF_PointTxt03\"/><Cell row=\"3\"/><Cell row=\"3\" col=\"1\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\" text=\"긍정\" cssclass=\"cell_WF_Point04\"/><Cell row=\"3\" col=\"4\" text=\"긍정\" cssclass=\"cell_WF_PointTxt04\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"소계01\" displaytype=\"text\" cssclass=\"cell_WF_Sum01\"/><Cell col=\"4\" text=\"235,000\" cssclass=\"cell_WF_Sum01\"/><Cell row=\"1\" colspan=\"4\" text=\"소계02\" displaytype=\"text\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"1\" col=\"4\" text=\"235,000\" cssclass=\"cell_WF_Sum02\"/><Cell row=\"2\" colspan=\"4\" text=\"소계03\" displaytype=\"text\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"2\" col=\"4\" text=\"235,000\" cssclass=\"cell_WF_Sum03\"/><Cell row=\"3\" colspan=\"4\" text=\"총계\" displaytype=\"text\"/><Cell row=\"3\" col=\"4\" text=\"235,000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","130","2330","56","14",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("CellClass");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05","130","2052",null,"223","131",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dc_grd");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_NoneS");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"157\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"Combo\"/><Cell col=\"5\" text=\"Calendar\"/><Cell col=\"6\" text=\"Expand\"/><Cell col=\"7\" text=\"Text\"/><Cell col=\"8\" text=\"Number\"/><Cell col=\"9\" text=\"Button\"/><Cell col=\"10\" text=\"ProgressBar\"/></Band><Band id=\"body\"><Cell text=\"bind:체크박스\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NO\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:Edit\"/><Cell col=\"3\" displaytype=\"maskeditcontrol\" edittype=\"mask\" text=\"bind:MaskEdit\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:Combo\" combodataset=\"ds00\" combodatacol=\"text\" combocodecol=\"code\"/><Cell col=\"5\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:Calendar\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"6\" text=\"bind:Expand\" edittype=\"text\" expandshow=\"show\" expandsize=\"30\" cssclass=\"cell_WF_Edit\" displaytype=\"editcontrol\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:Text\"/><Cell col=\"8\" text=\"bind:Number\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"10\" text=\"bind:ProgressBar\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"총계\" displaytype=\"text\"/><Cell col=\"8\" colspan=\"3\" text=\"1,500,000,000\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","130","2018","326","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Cell 상태값 (mouseover/selected) 없을시 ");
            obj.set_cssclass("sta_WF_GTxt02B");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","122","311","9","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","122","343","9","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","122","570","9","37",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","108","581","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("37");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"305","9","5","243",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"312","22","13","229",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static11",null,"284","22","13","602",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("28");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12",null,"277","9","28","603",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","116","701","9","62",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","118","1087","9","62",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","729","1087","9","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","729","1118","9","31",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","104","1625","22","13",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("32");
            obj.set_cssclass("sta_WF_GTxt04");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","118","1612","9","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_GLineV");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","402","2018","195","23",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Class: grd_WF_NoneS");
            obj.set_cssclass("sta_WF_GTxt05");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","98","1524","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_GTxt01");
            obj.set_text("Other");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid06","509","1612","430","359",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_binddataset("dc_nodata");
            obj.set_autofittype("col");
            obj.set_nodataimage("url(\'theme://images/grd_WF_Nodata.png\')");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"MaskEdit\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","509","1586","56","14",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("No Data");
            obj.set_cssclass("sta_WF_GTxt02B");
            this.addChild(obj.name, obj);

            obj = new Div("div00",null,"277","467","33","131",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnCust00_00_00","348","0","119","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnCust01_00_00","238","0","107","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button36","164","0","71","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button35","89","0","72","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.div00.addChild(obj.name, obj);

            obj = new Button("Button48","0","0","86","28",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("커스텀버튼");
            obj.set_fittocontents("width");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"151","0",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_GBar");
            obj.set_text("<fc v=\'#3683e2\'><fs v=\'13\'>TOBESOFT</fs></fc>\r\nComponent KIT\r\n<fc v=\'#acafbb\'><fs v=\'11\'>grd, tree, cellclass</fs></fc>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01",null,"64","61","50","50",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("03");
            obj.set_cssclass("sta_WF_GNum");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,2840,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static102.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static58.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static59.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static75.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static62.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static93.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static08.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static11.addEventHandler("onclick",this.Static102_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static102_onclick,this);
        };
        this.loadIncludeScript("Component03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
