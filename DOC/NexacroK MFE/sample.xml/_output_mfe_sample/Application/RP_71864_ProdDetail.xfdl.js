(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_cssclass("frm_Bg");
            this.set_name("ProdRegister");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("dsImageList1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "fileId","size" : "256","type" : "STRING"},{"id" : "productId","size" : "256","type" : "STRING"},{"id" : "fileOrder","size" : "256","type" : "STRING"},{"id" : "filenmOrg","size" : "256","type" : "STRING"},{"id" : "filenmSys","size" : "256","type" : "STRING"},{"id" : "filePath","size" : "256","type" : "STRING"},{"id" : "useFlag","size" : "256","type" : "STRING"},{"id" : "imgVodFlag","size" : "256","type" : "STRING"},{"id" : "repFlag","size" : "256","type" : "STRING"},{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "fileSize","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsCatg1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "cId","size" : "256","type" : "STRING"},{"id" : "cName","size" : "256","type" : "STRING"},{"id" : "depth","size" : "256","type" : "STRING"},{"id" : "level1","size" : "256","type" : "STRING"},{"id" : "level2","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsCatg2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "cId","size" : "256","type" : "STRING"},{"id" : "cName","size" : "256","type" : "STRING"},{"id" : "depth","size" : "256","type" : "STRING"},{"id" : "level1","size" : "256","type" : "STRING"},{"id" : "level2","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsRate", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "usd","size" : "256","type" : "FLOAT"},{"id" : "jpy","size" : "256","type" : "FLOAT"},{"id" : "cny","size" : "256","type" : "FLOAT"},{"id" : "eur","size" : "256","type" : "FLOAT"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsMatr", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "matrCode","size" : "256","type" : "STRING"},{"id" : "matrName","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsProdCatg", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "catgSeq","size" : "256","type" : "STRING"},{"id" : "catgProductId","size" : "256","type" : "STRING"},{"id" : "catgCode1","size" : "256","type" : "STRING"},{"id" : "catgCode2","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsProdMatr", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "matrId","size" : "256","type" : "STRING"},{"id" : "matrProductId","size" : "256","type" : "STRING"},{"id" : "matrCode","size" : "256","type" : "STRING"},{"id" : "matrPerct","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsProdDetail", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "qrCodePath","size" : "256","type" : "STRING"},{"id" : "qrFileName","size" : "256","type" : "STRING"},{"id" : "qrContents","size" : "256","type" : "STRING"},{"id" : "sellerName","size" : "256","type" : "STRING"},{"id" : "sellerCode","size" : "256","type" : "STRING"},{"id" : "shopCode","size" : "256","type" : "STRING"},{"id" : "prodCode","size" : "256","type" : "STRING"},{"id" : "prodId","size" : "256","type" : "STRING"},{"id" : "prodNameKr","size" : "2000","type" : "STRING"},{"id" : "prodNameCh","size" : "2000","type" : "STRING"},{"id" : "prodDiscKr","size" : "2000","type" : "STRING"},{"id" : "prodDiscCh","size" : "2000","type" : "STRING"},{"id" : "prodPriceDispYN","size" : "256","type" : "STRING"},{"id" : "prodPriceKr","size" : "256","type" : "STRING"},{"id" : "prodPriceChy","size" : "256","type" : "STRING"},{"id" : "dispStartTime","size" : "256","type" : "STRING"},{"id" : "dispEndTime","size" : "256","type" : "STRING"},{"id" : "displayYN","size" : "256","type" : "STRING"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsCallbackFile", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "fileId","size" : "256","type" : "STRING"},{"id" : "productId","size" : "256","type" : "STRING"},{"id" : "fileOrder","size" : "256","type" : "STRING"},{"id" : "filenmOrg","size" : "256","type" : "STRING"},{"id" : "filenmSys","size" : "256","type" : "STRING"},{"id" : "filePath","size" : "256","type" : "STRING"},{"id" : "useFlag","size" : "256","type" : "STRING"},{"id" : "imgVodFlag","size" : "256","type" : "STRING"},{"id" : "repFlag","size" : "256","type" : "STRING"},{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "fileSize","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsImageList2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "fileId","size" : "256","type" : "STRING"},{"id" : "productId","size" : "256","type" : "STRING"},{"id" : "fileOrder","size" : "256","type" : "STRING"},{"id" : "filenmOrg","size" : "256","type" : "STRING"},{"id" : "filenmSys","size" : "256","type" : "STRING"},{"id" : "filePath","size" : "256","type" : "STRING"},{"id" : "useFlag","size" : "256","type" : "STRING"},{"id" : "imgVodFlag","size" : "256","type" : "STRING"},{"id" : "repFlag","size" : "256","type" : "STRING"},{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "fileSize","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsMovList1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "fileId","size" : "256","type" : "STRING"},{"id" : "productId","size" : "256","type" : "STRING"},{"id" : "fileOrder","size" : "256","type" : "STRING"},{"id" : "filenmOrg","size" : "256","type" : "STRING"},{"id" : "filenmSys","size" : "256","type" : "STRING"},{"id" : "filePath","size" : "256","type" : "STRING"},{"id" : "useFlag","size" : "256","type" : "STRING"},{"id" : "imgVodFlag","size" : "256","type" : "STRING"},{"id" : "repFlag","size" : "256","type" : "STRING"},{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "fileSize","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsMovList2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "fileId","size" : "256","type" : "STRING"},{"id" : "productId","size" : "256","type" : "STRING"},{"id" : "fileOrder","size" : "256","type" : "STRING"},{"id" : "filenmOrg","size" : "256","type" : "STRING"},{"id" : "filenmSys","size" : "256","type" : "STRING"},{"id" : "filePath","size" : "256","type" : "STRING"},{"id" : "useFlag","size" : "256","type" : "STRING"},{"id" : "imgVodFlag","size" : "256","type" : "STRING"},{"id" : "repFlag","size" : "256","type" : "STRING"},{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "fileSize","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsStillcutList1", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "fileId","size" : "256","type" : "STRING"},{"id" : "productId","size" : "256","type" : "STRING"},{"id" : "fileOrder","size" : "256","type" : "STRING"},{"id" : "filenmOrg","size" : "256","type" : "STRING"},{"id" : "filenmSys","size" : "256","type" : "STRING"},{"id" : "filePath","size" : "256","type" : "STRING"},{"id" : "useFlag","size" : "256","type" : "STRING"},{"id" : "imgVodFlag","size" : "256","type" : "STRING"},{"id" : "repFlag","size" : "256","type" : "STRING"},{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "fileSize","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);


            obj = new nexacro.Dataset("dsStillcutList2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "fileId","size" : "256","type" : "STRING"},{"id" : "productId","size" : "256","type" : "STRING"},{"id" : "fileOrder","size" : "256","type" : "STRING"},{"id" : "filenmOrg","size" : "256","type" : "STRING"},{"id" : "filenmSys","size" : "256","type" : "STRING"},{"id" : "filePath","size" : "256","type" : "STRING"},{"id" : "useFlag","size" : "256","type" : "STRING"},{"id" : "imgVodFlag","size" : "256","type" : "STRING"},{"id" : "repFlag","size" : "256","type" : "STRING"},{"id" : "delFlag","size" : "256","type" : "STRING"},{"id" : "fileSize","size" : "256","type" : "STRING"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Div("Div2","20","10",null,"606","20",null,null,null,null,null,this);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("");
            obj.getSetter("topbase").set("Div1.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("fileUploadMov2","444","343","60","23",null,null,null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_multiselect("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("13");
            obj.getSetter("topbase").set("");
            obj.set_visible("true");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("fileUploadImg2","483","45","70","22",null,null,null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_multiselect("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("13");
            obj.getSetter("topbase").set("");
            obj.set_visible("true");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("stTbTitle2","0","0",null,"40","0",null,null,null,null,null,this.Div2.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.set_cssclass("sta_WF_SubTitle01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("디지털 사이니지");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("Static13","0","-1","150","297",null,null,null,null,null,null,this.Div2.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("디지털 사이니지용\r\n이미지등록");
            obj.getSetter("topbase").set("stTbTitle2.bottom");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("Static16","149","-1",null,"297","0",null,null,null,null,null,this.Div2.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("stTbTitle2.bottom");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("Static15","0","-1","150","136",null,null,null,null,null,null,this.Div2.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("디지털 사이니지용\r\n동영상등록");
            obj.getSetter("topbase").set("Static13.bottom");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","149","-1","621","136",null,null,null,null,null,null,this.Div2.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static16.bottom");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegImg2",null,null,"80","22","3","5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdImgList2.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDelImg2.left");
            obj.set_taborder("14");
            obj.set_text("이미지추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDelImg2",null,null,"80","22","0","5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdImgList2.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("grdImgList2.right");
            obj.set_taborder("14");
            obj.set_text("이미지삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Grid("grdImgList2","157","73","518","253",null,null,null,null,null,null,this.Div2.form);
            obj.set_binddataset("dsImageList2");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"40\"/><Column size=\"49\"/><Column size=\"362\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"대표\"/><Cell col=\"3\" text=\"이미지파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:delFlag\"/><Cell col=\"1\" text=\"bind:fileOrder\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:repFlag\"/><Cell col=\"3\" text=\"bind:filenmOrg\"/></Band></Format></Formats>");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnUpImg2","0",null,"22","22",null,"5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdImgList2.top");
            obj.set_cssclass("btn_WF_Up");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("grdImgList2.left");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDownImg2","3",null,"22","22",null,"5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdImgList2.top");
            obj.set_cssclass("btn_WF_Down");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("btnUpImg2.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegImgMov1",null,null,"80","22","3","5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdMovList2.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDelMov1.left");
            obj.set_taborder("14");
            obj.set_text("동영상추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDelMov1",null,null,"80","22","0","5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdMovList2.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("grdMovList2.right");
            obj.set_taborder("14");
            obj.set_text("동영상삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Grid("grdMovList2","157","370","518","90",null,null,null,null,null,null,this.Div2.form);
            obj.set_binddataset("dsMovList2");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("12");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"40\"/><Column size=\"49\"/><Column size=\"362\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"대표\"/><Cell col=\"3\" text=\"이미지파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:delFlag\"/><Cell col=\"1\" text=\"bind:fileOrder\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:repFlag\"/><Cell col=\"3\" text=\"bind:filenmOrg\"/></Band></Format></Formats>");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnUpMov1","0",null,"22","22",null,"5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdMovList2.top");
            obj.set_cssclass("btn_WF_Up");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("grdMovList2.left");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDownMov1","3",null,"22","22",null,"5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdMovList2.top");
            obj.set_cssclass("btn_WF_Down");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("btnUpMov1.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.ImageViewer("ivImgView2",null,"50","347","276","15",null,null,null,null,null,this.Div2.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_stretch("fixaspectratio");
            obj.set_taborder("20");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.set_visible("false");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("fileUploadStillcut2","455","484","45","23",null,null,null,null,null,null,this.Div2.form);
            obj.set_multiselect("true");
            obj.set_taborder("13");
            obj.set_visible("true");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("Static18","0","-1","150","136",null,null,null,null,null,null,this.Div2.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("모바일 서비스용\r\n스틸컷등록");
            obj.getSetter("topbase").set("Static15.bottom");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("Static19","149","-1","621","136",null,null,null,null,null,null,this.Div2.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static00.bottom");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegStillcut2",null,null,"80","22","3","5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdStillcutList2.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDelStillcut2.left");
            obj.set_taborder("14");
            obj.set_text("스틸컷추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDelStillcut2",null,null,"80","22","0","5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdStillcutList2.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("grdStillcutList2.right");
            obj.set_taborder("14");
            obj.set_text("스틸컷삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Grid("grdStillcutList2","157","507","518","90",null,null,null,null,null,null,this.Div2.form);
            obj.set_binddataset("dsStillcutList2");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"40\"/><Column size=\"49\"/><Column size=\"362\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"대표\"/><Cell col=\"3\" text=\"이미지파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:delFlag\"/><Cell col=\"1\" text=\"bind:fileOrder\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:repFlag\"/><Cell col=\"3\" text=\"bind:filenmOrg\"/></Band></Format></Formats>");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDownStillcut1","3",null,"22","22",null,"5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdStillcutList2.top");
            obj.set_cssclass("btn_WF_Down");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("btnUpStillcut1.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Button("btnUpStillcut1","0",null,"22","22",null,"5",null,null,null,null,this.Div2.form);
            obj.getSetter("bottombase").set("grdStillcutList2.top");
            obj.set_cssclass("btn_WF_Up");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("grdStillcutList2.left");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Static("Static20","-1","-1",null,"271","0",null,null,null,null,null,this.Div2.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("Static00.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("22");
            obj.set_text("");
            obj.getSetter("topbase").set("Static16.bottom");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.ImageViewer("ivImgView22",null,"350","347","244","13",null,null,null,null,null,this.Div2.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_stretch("fixaspectratio");
            obj.set_taborder("20");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.set_visible("false");
            obj.getSetter("widthbase").set("");
            this.Div2.addChild(obj.name, obj);

            obj = new nexacro.Div("Div3","20","10",null,"210","20",null,null,null,null,null,this);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("4");
            obj.set_text("");
            obj.getSetter("topbase").set("Div2.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stTbTitle3","0","0",null,"40","0",null,null,null,null,null,this.Div3.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.set_cssclass("sta_WF_SubTitle01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("상품분류 선택");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div3.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","0","-1","150","171",null,null,null,null,null,null,this.Div3.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("상품분류");
            obj.getSetter("topbase").set("stTbTitle3.bottom");
            obj.getSetter("widthbase").set("");
            this.Div3.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","149","-1",null,"171","0",null,null,null,null,null,this.Div3.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("stTbTitle3.bottom");
            obj.getSetter("widthbase").set("");
            this.Div3.addChild(obj.name, obj);

            obj = new nexacro.Grid("GridCatg","157","75","518","125",null,null,null,null,null,null,this.Div3.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsProdCatg");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"234\"/><Column size=\"217\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell id=\"대분류\" text=\"대분류\"/><Cell col=\"1\" id=\"소분류\" text=\"소분류\"/></Band><Band id=\"body\"><Cell combocodecol=\"cId\" combodatacol=\"cName\" combodataset=\"dsCatg1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:catgCode1\"/><Cell autosizerow=\"\" col=\"1\" combocodecol=\"cId\" combodatacol=\"cName\" combodataset=\"dsCatg2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:catgCode2\"/></Band></Format></Formats>");
            this.Div3.addChild(obj.name, obj);

            obj = new nexacro.Button("btnAdd",null,null,"33","22","3","5",null,null,null,null,this.Div3.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("GridCatg.top");
            obj.set_color("");
            obj.set_font("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDel.left");
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div3.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDel",null,null,"33","22","0","5",null,null,null,null,this.Div3.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("GridCatg.top");
            obj.set_color("");
            obj.set_font("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("GridCatg.right");
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div3.addChild(obj.name, obj);

            obj = new nexacro.Div("Div4","20","10",null,"210","20",null,null,null,null,null,this);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Div3.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stTbTitle4","0","0",null,"40","0",null,null,null,null,null,this.Div4.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.set_cssclass("sta_WF_SubTitle01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("소재정보등록");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div4.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","0","-1","150","171",null,null,null,null,null,null,this.Div4.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("상품소재");
            obj.getSetter("topbase").set("stTbTitle4.bottom");
            obj.getSetter("widthbase").set("");
            this.Div4.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","149","-1",null,"171","0",null,null,null,null,null,this.Div4.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("stTbTitle4.bottom");
            obj.getSetter("widthbase").set("");
            this.Div4.addChild(obj.name, obj);

            obj = new nexacro.Grid("GridMatr","157","76","518","125",null,null,null,null,null,null,this.Div4.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsProdMatr");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"109\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"소재\"/><Cell col=\"1\" text=\"함유량(%)\"/></Band><Band id=\"body\"><Cell combocodecol=\"matrCode\" combodatacol=\"matrName\" combodataset=\"dsMatr\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:matrCode\"/><Cell col=\"1\" displaytype=\"text\" editfilter=\"number\" edittype=\"text\" text=\"bind:matrPerct\"/></Band></Format></Formats>");
            this.Div4.addChild(obj.name, obj);

            obj = new nexacro.Button("btnAdd",null,null,"33","22","3","5",null,null,null,null,this.Div4.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("GridMatr.top");
            obj.set_color("");
            obj.set_font("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDel.left");
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div4.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDel",null,null,"33","22","0","5",null,null,null,null,this.Div4.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("GridMatr.top");
            obj.set_color("");
            obj.set_font("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("GridMatr.right");
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div4.addChild(obj.name, obj);

            obj = new nexacro.Div("Div5","20","10",null,"115","20",null,null,null,null,null,this);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.set_text("");
            obj.getSetter("topbase").set("Div4.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stTbTitle5","0","0",null,"40","0",null,null,null,null,null,this.Div5.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.set_cssclass("sta_WF_SubTitle01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("판매정보 등록");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","0","-1","150","75",null,null,null,null,null,null,this.Div5.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("도매가");
            obj.getSetter("topbase").set("stTbTitle5.bottom");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","149","-1",null,"38","0",null,null,null,null,null,this.Div5.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("stTbTitle5.bottom");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","149","-1",null,"38","0",null,null,null,null,null,this.Div5.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static00.bottom");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtPriceKr","157","47","254","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.getSetter("leftbase").set("");
            obj.set_readonly("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_textAlign("right");
            obj.getSetter("topbase").set("");
            obj.set_visible("true");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtPriceCh","157","85","254","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_readonly("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_textAlign("right");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","424","48","51","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("KRW");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","424","85","51","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("CNY");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","476","85","102","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("환율 : 1 CNY = ");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("stRate","568","85","56","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static07","605","85","51","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("KRW");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdPriceDispYN","479","48","208","22",null,null,null,null,null,null,this.Div5.form);
            obj.getSetter("bottombase").set("");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("9");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj.set_value("N");
            obj.set_index("0");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static21",null,"0","66","38","0",null,null,null,null,null,this.Div5.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L03");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_letterSpacing("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("Static01.right");
            obj.set_taborder("1");
            obj.set_text("한국");
            obj.getSetter("topbase").set("Static01.top");
            obj.getSetter("widthbase").set("");
            obj.set_wordSpacing("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Static("Static22",null,"-1","66","38","0",null,null,null,null,null,this.Div5.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L03");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_letterSpacing("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("Static01.right");
            obj.set_taborder("1");
            obj.set_text("중국");
            obj.getSetter("topbase").set("Static21.bottom");
            obj.getSetter("widthbase").set("");
            obj.set_wordSpacing("");
            this.Div5.addChild(obj.name, obj);

            obj = new nexacro.Div("Div6","20","10",null,"114","20",null,null,null,null,null,this);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.set_text("");
            obj.getSetter("topbase").set("Div5.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stTbTitle6","0","0",null,"40","0",null,null,null,null,null,this.Div6.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.set_cssclass("sta_WF_SubTitle01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("상품진열");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","0","-1","150","38",null,null,null,null,null,null,this.Div6.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("상품진열기간");
            obj.getSetter("topbase").set("stTbTitle6.bottom");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","0","-1","150","38",null,null,null,null,null,null,this.Div6.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("상품진열여부");
            obj.getSetter("topbase").set("Static01.bottom");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","149","-1",null,"38","0",null,null,null,null,null,this.Div6.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("stTbTitle6.bottom");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","149","-1",null,"38","0",null,null,null,null,null,this.Div6.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static00.bottom");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Calendar("calDisplayStart","157","48","199","22",null,null,null,null,null,null,this.Div6.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Calendar("calDisplayEnd","388","48","199","22",null,null,null,null,null,null,this.Div6.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","361","48","22","22",null,null,null,null,null,null,this.Div6.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.getSetter("topbase").set("");
            obj.set_verticalAlign("middle");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Button("btnWeek1","592","48","39","22",null,null,null,null,null,null,this.Div6.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("1주");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Button("btnWeek2","636","48","39","22",null,null,null,null,null,null,this.Div6.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("2주");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Button("btnWeek3","680","48","39","22",null,null,null,null,null,null,this.Div6.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("3주");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Button("btnWeek4","724","48","39","22",null,null,null,null,null,null,this.Div6.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("4주");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Radio("rdDisplayYN","157","86","173","22",null,null,null,null,null,null,this.Div6.form);
            obj.getSetter("bottombase").set("");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div6.addChild(obj.name, obj);

            obj = new nexacro.Div("Div1","20","10",null,"858","20",null,null,null,null,null,this);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("fileUploadImg1","431","297","68","20",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_multiselect("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("13");
            obj.getSetter("topbase").set("");
            obj.set_visible("true");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("fileUploadMov1","455","599","45","23",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_multiselect("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("13");
            obj.getSetter("topbase").set("");
            obj.set_visible("true");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("stTbTitle1","0","0",null,"30","0",null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.set_cssclass("sta_WF_SubTitle01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("0");
            obj.set_text("기본정보 등록");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","0","0","150","38",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("매장명");
            obj.getSetter("topbase").set("stTbTitle1.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","0","-1","150","75",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("상품명");
            obj.getSetter("topbase").set("Static00.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","149","0",null,"38","0",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("2");
            obj.set_text("");
            obj.getSetter("topbase").set("stTbTitle1.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnSearchSeller","157","39","85","22",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("3");
            obj.set_text("매장검색");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static03","543","0","150","39",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border(",  1px solid black, 1px solid black , 1px solid black");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("상품코드");
            obj.getSetter("topbase").set("stTbTitle1.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static04","149","-1",null,"38","0",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static02.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static05","149","-1",null,"38","0",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static04.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtProdNmKr","157","75","500","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_maxlength("20");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtProdNmCh","157","113","500","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_maxlength("20");
            obj.set_readonly("false");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("6");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("stChaLimit1","7","73","74","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("edtProdNmKr.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("4");
            obj.set_text("(0/20)");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("stChaLimit2","7","111","74","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("edtProdNmCh.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("4");
            obj.set_text("(0/20)");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static08","0","-1","150","151",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("상품설명");
            obj.getSetter("topbase").set("Static01.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static09","149","-1",null,"76","0",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static05.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static12","149","-1",null,"76","0",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static09.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.TextArea("taProdExpKr","157","148","800","62",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_maxlength("1000");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("stChaLimit3","7","186","74","21",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("taProdExpKr.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("4");
            obj.set_text("(0/1000)");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.TextArea("taProdExpCh","157","223","800","62",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_maxlength("1000");
            obj.set_readonly("false");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("8");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("stChaLimit4","7","261","74","21",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("taProdExpCh.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("4");
            obj.set_text("(0/1000)");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static13","0","-1","150","297",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01E");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("모바일 서비스용\r\n이미지등록");
            obj.getSetter("topbase").set("Static08.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static15","0","-1","150","136",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("모바일 서비스용\r\n동영상등록");
            obj.getSetter("topbase").set("Static13.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static16","149","-1","621","136",null,null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static14.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static14","149","-1",null,"297","0",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static12.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Grid("grdImgList1","157","327","518","253",null,null,null,null,null,null,this.Div1.form);
            obj.set_binddataset("dsImageList1");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"40\"/><Column size=\"49\"/><Column size=\"362\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"대표\"/><Cell col=\"3\" text=\"이미지파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:delFlag\"/><Cell col=\"1\" text=\"bind:fileOrder\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:repFlag\"/><Cell col=\"3\" text=\"bind:filenmOrg\"/></Band></Format></Formats>");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDelImg1",null,null,"80","22","0","5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdImgList1.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("grdImgList1.right");
            obj.set_taborder("14");
            obj.set_text("이미지삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnUpImg1","0",null,"22","22",null,"5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdImgList1.top");
            obj.set_cssclass("btn_WF_Up");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("grdImgList1.left");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDownImg1","3",null,"22","22",null,"5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdImgList1.top");
            obj.set_cssclass("btn_WF_Down");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("btnUpImg1.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegImg1",null,null,"80","22","3","5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdImgList1.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDelImg1.left");
            obj.set_taborder("14");
            obj.set_text("이미지추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtSellerCode","449","39","48","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("16");
            obj.getSetter("topbase").set("");
            obj.set_value("");
            obj.set_visible("false");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtProdCode","701","39","140","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_displaynulltext("등록후 자동생성");
            obj.set_enable("false");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_readonly("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("18");
            obj.set_tooltiptext("상품코드는 자동으로 채번됩니다.");
            obj.getSetter("topbase").set("");
            obj.set_usecontextmenu("false");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtShopCode","441","39","45","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("19");
            obj.getSetter("topbase").set("");
            obj.set_value("");
            obj.set_visible("false");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegImgMov1",null,null,"80","22","3","5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdMovList1.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDelMov1.left");
            obj.set_taborder("14");
            obj.set_text("동영상추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDelMov1",null,null,"80","22","0","5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdMovList1.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("grdMovList1.right");
            obj.set_taborder("14");
            obj.set_text("동영상삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Grid("grdMovList1","157","623","518","90",null,null,null,null,null,null,this.Div1.form);
            obj.set_binddataset("dsMovList1");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("12");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"40\"/><Column size=\"49\"/><Column size=\"362\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"대표\"/><Cell col=\"3\" text=\"동영상파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:delFlag\"/><Cell col=\"1\" text=\"bind:fileOrder\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:repFlag\"/><Cell col=\"3\" text=\"bind:filenmOrg\"/></Band></Format></Formats>");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnUpMov1","0",null,"22","22",null,"5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdMovList1.top");
            obj.set_cssclass("btn_WF_Up");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("grdMovList1.left");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDownMov1","3",null,"22","22",null,"5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdMovList1.top");
            obj.set_cssclass("btn_WF_Down");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("btnUpMov1.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.ImageViewer("ivImgView1",null,"301","347","276","15",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("Static14.right");
            obj.set_stretch("fixaspectratio");
            obj.set_taborder("20");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.set_visible("false");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static17","854","0","150","112",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border(",  1px solid black, 1px solid black , 1px solid black");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("QR코드");
            obj.getSetter("topbase").set("stTbTitle1.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.FileUpload("fileUploadStillcut1","455","732","45","23",null,null,null,null,null,null,this.Div1.form);
            obj.set_multiselect("true");
            obj.set_taborder("13");
            obj.set_visible("true");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static18","0","-1","150","136",null,null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L01");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("모바일 서비스용\r\n스틸컷등록");
            obj.getSetter("topbase").set("Static15.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static19","149","-1","621","136",null,null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("5");
            obj.set_text("");
            obj.getSetter("topbase").set("Static16.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegStillcut1",null,null,"80","22","3","5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdStillcutList1.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("btnDelStillcut1.left");
            obj.set_taborder("14");
            obj.set_text("스틸컷추가");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDelStillcut1",null,null,"80","22","0","5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdStillcutList1.top");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("grdStillcutList1.right");
            obj.set_taborder("14");
            obj.set_text("스틸컷삭제");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Grid("grdStillcutList1","157","758","518","90",null,null,null,null,null,null,this.Div1.form);
            obj.set_binddataset("dsStillcutList1");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"40\"/><Column size=\"49\"/><Column size=\"362\"/></Columns><Rows><Row band=\"head\" size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"대표\"/><Cell col=\"3\" text=\"이미지파일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:delFlag\"/><Cell col=\"1\" text=\"bind:fileOrder\"/><Cell col=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:repFlag\"/><Cell col=\"3\" text=\"bind:filenmOrg\"/></Band></Format></Formats>");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnDownStillcut1","3",null,"22","22",null,"5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdStillcutList1.top");
            obj.set_cssclass("btn_WF_Down");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("btnUpStillcut1.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Button("btnUpStillcut1","0",null,"22","22",null,"5",null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("grdStillcutList1.top");
            obj.set_cssclass("btn_WF_Up");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("grdStillcutList1.left");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("15");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Edit("edtSellerName","249","39","281","22",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_enable("false");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_readonly("true");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("17");
            obj.getSetter("topbase").set("");
            obj.set_value("");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static21",null,"-1","66","38","0",null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L03");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_letterSpacing("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("Static01.right");
            obj.set_taborder("1");
            obj.set_text("한국어");
            obj.getSetter("topbase").set("Static00.bottom");
            obj.getSetter("widthbase").set("");
            obj.set_wordSpacing("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static22","84","-1",null,"38","0",null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L03");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_letterSpacing("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("Static01.right");
            obj.set_taborder("1");
            obj.set_text("중국어");
            obj.getSetter("topbase").set("Static21.bottom");
            obj.getSetter("widthbase").set("");
            obj.set_wordSpacing("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","-1","0",null,"112","0",null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("Static17.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("23");
            obj.set_text("");
            obj.getSetter("topbase").set("stTbTitle1.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.ImageViewer("ivQRcode","1025","38","97","97",null,null,null,null,null,null,this.Div1.form);
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_stretch("fit");
            obj.set_taborder("21");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.set_visible("false");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static23",null,"0","66","76","0",null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L03");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_letterSpacing("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("Static08.right");
            obj.set_taborder("1");
            obj.set_text("한국어");
            obj.getSetter("topbase").set("Static08.top");
            obj.getSetter("widthbase").set("");
            obj.set_wordSpacing("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static24",null,"-1","66","76","0",null,null,null,null,null,this.Div1.form);
            obj.set_background("");
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L03");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.set_letterSpacing("");
            obj.set_padding("");
            obj.getSetter("rightbase").set("Static08.right");
            obj.set_taborder("1");
            obj.set_text("중국어");
            obj.getSetter("topbase").set("Static23.bottom");
            obj.getSetter("widthbase").set("");
            obj.set_wordSpacing("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static20","-1","-1",null,null,"0","0",null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("sta_L02");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("Static16.right");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("22");
            obj.set_text("");
            obj.getSetter("topbase").set("Static14.bottom");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.ImageViewer("ivImgView11",null,"602","347","244","15",null,null,null,null,null,this.Div1.form);
            obj.set_border("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_stretch("fixaspectratio");
            obj.set_taborder("20");
            obj.set_text("");
            obj.getSetter("topbase").set("");
            obj.set_visible("false");
            obj.getSetter("widthbase").set("");
            this.Div1.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","20","0",null,"66","20",null,null,null,null,null,this);
            obj.set_background("white");
            obj.getSetter("bottombase").set("");
            obj.set_color("");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("9");
            obj.set_text("");
            obj.getSetter("topbase").set("Div6.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnCancel","575","12","58","31",null,null,null,null,null,null,this);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("btn_WF_Close");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.getSetter("topbase").set("Div6.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnRegister","514","12","58","31",null,null,null,null,null,null,this);
            obj.getSetter("bottombase").set("");
            obj.set_cssclass("btn_WF_Save");
            obj.getSetter("heightbase").set("");
            obj.getSetter("leftbase").set("");
            obj.getSetter("rightbase").set("");
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.getSetter("topbase").set("Div6.bottom");
            obj.getSetter("widthbase").set("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div2.form
            obj = new nexacro.Layout("default","",0,0,this.Div2.form,function(p){});
            this.Div2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div3.form
            obj = new nexacro.Layout("default","",0,0,this.Div3.form,function(p){});
            this.Div3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div4.form
            obj = new nexacro.Layout("default","",0,0,this.Div4.form,function(p){});
            this.Div4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div5.form
            obj = new nexacro.Layout("default","",0,0,this.Div5.form,function(p){});
            this.Div5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div6.form
            obj = new nexacro.Layout("default","",0,0,this.Div6.form,function(p){});
            this.Div6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div1.form
            obj = new nexacro.Layout("default","",0,0,this.Div1.form,function(p){});
            this.Div1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1200,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item3","Div1.form.edtProdNmKr","value","dsProdDetail","prodNameKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item4","Div1.form.edtProdNmCh","value","dsProdDetail","prodNameCh");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item5","Div1.form.taProdExpKr","value","dsProdDetail","prodDiscKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item6","Div1.form.taProdExpCh","value","dsProdDetail","prodDiscCh");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item7","Div5.form.edtPriceKr","value","dsProdDetail","prodPriceKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item8","Div5.form.edtPriceCh","value","dsProdDetail","prodPriceChy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item9","Div6.form.Calendar00","value","dsProdDetail","dispStartTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item10","Div6.form.Calendar01","value","dsProdDetail","dispEndTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item11","Div6.form.Radio00","value","dsProdDetail","displayYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item1","Div1.form.edtSellerCode","value","dsProdDetail","sellerCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item0","Div1.form.edtProdCode","value","dsProdDetail","prodCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item2","Div1.form.edtSellerName","value","dsProdDetail","sellerName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item12","Div1.form.edtShopCode","value","dsProdDetail","shopCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item14","Div6.form.calDisplayEnd","innerdataset","dsProdDetail","dispEndTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item13","Div6.form.calDisplayStart","value","dsProdDetail","dispStartTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item15","Div6.form.calDisplayEnd","value","dsProdDetail","dispEndTime");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item16","Div5.form.rdPriceDispYN","value","dsProdDetail","prodPriceDispYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new nexacro.BindItem("item17","Div6.form.rdDisplayYN","value","dsProdDetail","displayYN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_71864_ProdDetail.xfdl", function(nexacro, system, trace, environment, application) {
        /***************************************************************
         * System Name	:	ECP
         * Job Name 			:	Product Register and Detail
         * File Name 			:	ProdDeatil.xfdl
         * Creator 			:	TOBESOFT
         * Make Date 		:	2016.10.05
         *
         * Description  		:
         *---------------------------------------------------------------------------------------
         * Modify Date     	Modifier  		Modify Description
         *---------------------------------------------------------------------------------------
         * 2016.10.05  		TOBESOFT 	Initial Make Program
         *
         *---------------------------------------------------------------------------------------
         ***************************************************************/

        //================================================
        // Global Form Variable
        //---------------------------------------------------------------------------------------
        this.gvImgNo1 = 0;// 모바일용 이미지 순번
        this.gvMovNo1 = 0;// 모바일용 동영상 순번
        this.gvStillNo1 = 0;// 모바일용 스틸컷 순번
        this.gvImgNo2 = 0;// 사이니지용 이미지순번
        this.gvMovNo2 = 0;// 사이니지용 동영상 순번
        this.gvStillNo2 = 0;// 사이니지용 스틸컷 순번
        this.gvQRcodeName = "PRODUCT_QRCODE.png";// QR코드 파일명
        this.gvMode = "1"; // 1:상품등록 2:상품수정
        this.gvArryImgExtension = ['jpeg','jpg','png','gif'];
        this.gvArryMovExtension = ['mp4','mov'];
        //================================================
        // Common Function : onload
        //---------------------------------------------------------------------------------------
        this.Form_onload = function(obj,e)
        {
        // 	this.ufInitCode();
        // 	// 상품상세 수정경로를 통해 들어온경우
        // 	var paramPid = this.parent.param;
        // 	if (!gfnIsNull(paramPid))
        // 	{
        // 		// 1. 상품코드 dataset에 세팅
        // 		this.dsProdDetail.setColumn(0,'prodId',paramPid)
        // 		// 2. 상품수정모드
        // 		this.gvMode = "2";
        // 		// 3. 상품상세데이터 호출
        // 		this.ufSearchProdDetail();
        // 		// 4. 매장선택 비활성화
        // 		this.Div1.form.btnSearchSeller.set_enable(false);
        // 	}
        }

        //================================================
        // Common Function : search
        //--------------------------------------------------------------------------------------

        // 화면 로드시
        // 상품분류, 상품소개, 환율정보 코드 가져오기.
        this.ufInitCode = function()
        {
        	var strSvcId		= "initCode";
        	var strUrl 			= "Svc::initCodeProdDetail.do";
        	var strInDs 		= "";
        	var strOutDs		= "dsCatg1=outputCatgCode1 dsCatg2=outputCatgCode2 dsMatr=outputMatrCode dsRate=outputRate ";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackCode";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        }

        // 상품수정으로 open 한경우
        this.ufSearchProdDetail = function()
        {
        	var strSvcId		= "searchProdDetail";
        	var strUrl 			= "Svc::searchProdDetail.do";
        	var strInDs 		= "ds_search=dsProdDetail";
        	var strOutDs		= " dsProdDetail=outputProdDetail "
        	                         +" dsImageList1=outputMobileImgList "
        	                         +" dsMovList1=outputMobileMovList "
        							 +" dsStillcutList1=outputMobileStillcutList "
        	                         +" dsImageList2=outputSignImgList "
        	                         +" dsMovList2=outputSignMovList "
        							 +" dsStillcutList2=outputSignStillcutList "
        	                         +" dsProdCatg=outputCatgInfoList "
        	                         +" dsProdMatr=outputMetrInfoList ";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackSearchDetail";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        }

        // 상품저장
        this.ufRegProduct = function()
        {
        	var strSvcId		= "insertProductDetail";
        	var strUrl 			= "Svc::insertProductDetail.do";
        	var strInDs 		= "inputDsProdDetail=dsProdDetail "
        							+" inputDsImageList1=dsImageList1 "
        							+" inputDsMovList1=dsMovList1 "
        							+" inputDsStillcutList1=dsStillcutList1 "
        							+" inputDsImageList2=dsImageList2 "
        							+" inputDsMovList2=dsMovList2 "
        							+" inputDsStillcutList2=dsStillcutList2 "
        							+" inputDsProdCatg=dsProdCatg "
        							+" inputDsProdMatr=dsProdMatr ";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackReg";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        }

        // 상품수정
        this.ufUpdateProduct = function()
        {
        	var strSvcId		= "updateProductDetail";
        	var strUrl 			= "Svc::updateProductDetail.do";
        	var strInDs 		= "inputDsProdDetail=dsProdDetail "
        							+" inputDsImageList1=dsImageList1 "
        							+" inputDsMovList1=dsMovList1 "
        							+" inputDsStillcutList1=dsStillcutList1 "
        							+" inputDsImageList2=dsImageList2 "
        							+" inputDsMovList2=dsMovList2 "
        							+" inputDsStillcutList2=dsStillcutList2 "
        							+" inputDsProdCatg=dsProdCatg:A "
        							+" inputDsProdMatr=dsProdMatr:A ";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackUpdate";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        }

        // 최초 상품상세 메타정보 insert
        this.ufInstInitiProdMetaInfo = function()
        {
        	var strSvcId		= "insertInitProdMeta";
        	var strUrl 			= "Svc::insertInitProdMetaInfo.do";
        	var strInDs 		= "inputDsProdDetail=dsProdDetail";
        	var strOutDs		= "dsProdDetail=outputDsProdDetail";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackinsertInitProdMeta";
        	var bAsync 		= false; // 동기 : 최초 상품정보 입력후 알림 메시지가 뜨고나서  파일업로드 다이얼로그가 나타나야함.

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        }

        // QR 코드 생성
        this.ufMakeQRCode = function ()
        {
        	var strSvcId		= "ufMakeQRCode";
        	var strUrl 			= "Svc::ufMakeQRCode.do";
        	var strInDs 		= "inputDsProdDetail=dsProdDetail";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackMakeQRCode";
        	var bAsync 		= false;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        };

        // 최초 파일메타정보 insert
        this.ufInsertFileMetaInfo = function(dsFile,e)
        {
            // 서버에서 전달된 저장된파일정보 dataset
        	var rowCount = e.datasets[0].rowcount;
        	// dsCallbackFile 초기화
            this.dsCallbackFile.clearData();
        	for(var i=0; i<rowCount; i++)
        	{
        		trace(" 생성된 파일명 : "+ e.datasets[0].getColumn(i, "filenamesys"));
        		trace(" 파일사이즈 : "+ e.datasets[0].getColumn(i, "filesize"));
        		// 파일메타정보 update
        		var nRow = dsFile.rowcount - (rowCount-i);
        		dsFile.setColumn(nRow, "filenmSys", e.datasets[0].getColumn(i, "filenamesys"));// 서버에서 만든 파일이름
        		dsFile.setColumn(nRow, "fileSize", e.datasets[0].getColumn(i, "filesize"));
        		var addRow = this.dsCallbackFile.addRow();
        		this.dsCallbackFile.copyRow(addRow,dsFile,nRow);
        	}

        	var strSvcId		= "insertFileMeta";
        	var strUrl 			= "Svc::insertFileMeta.do";
        	var strInDs 		= "inputDsCallbackFile=dsCallbackFile:A";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackUploadFile";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        }

        // 파일삭제
        this.ufDeleteFileInfo = function(dataSet)
        {
        	var strSvcId		= dataSet;
        	var strUrl 			= "Svc::deleteProdFileInfo.do";
        	var strInDs 		= "inputDsDeleteFile="+dataSet+":A";
        	var strOutDs		= "";
        	var strArg 		= "";
        	var strCallBack	= "fn_CallbackDelFile";
        	var bAsync 		= true;

        	ecpTran(this, strSvcId, strUrl, strInDs, strOutDs, strArg, strCallBack, bAsync);
        }


        //================================================
        // Common Function : add
        //--------------------------------------------------------------------------------------
        // 파일업로드
        this.fn_fileUpload = function(fileObj,path,prefix,stillCutYN)
        {

        	// upload 전에 insert( 메타정보를 상품테이블에 입력한다)
        	fileObj.set_uploadurl("Svc::advancedUploadFiles.do?path="+path+"&prefix="+prefix+"&stillCutYN="+stillCutYN);
        	fileObj.upload();
        }

        //================================================
        // Common Function : save
        //--------------------------------------------------------------------------------------

        //================================================
        // Common Function : export excel
        //--------------------------------------------------------------------------------------

        //================================================
        // Common Function : close
        //--------------------------------------------------------------------------------------

        //================================================
        // Common Function : PopUp CallBack
        //--------------------------------------------------------------------------------------

        //================================================
        // Transaction CallBack
        //--------------------------------------------------------------------------------------

        // 코드설정
        this.fn_CallbackCode = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        		return;
        	} else {
        		// 카테고리 세팅
        		this.ufSetCategory();
        		// 소재 세팅
        		this.ufSetMaterial();
        		// 환율 세팅
        		this.ufSetRate();
        		// 라디오버튼세팅
        		this.ufSetRadio();
        	}
        }

        // 상품코드세팅후 파일등록
        this.fn_CallbackinsertInitProdMeta = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        		return;
        	} else {
        		// QR코드 작성
        		var qrPath = this.ufMakeQRCodeFilePath();

        		var envObj = nexacro.getEnvironment();
        		var qrContensUrl = envObj.services["QRURL"].url
        		this.dsProdDetail.setColumn(0,'qrCodePath',qrPath);// QR코드 경로 세팅
        		this.dsProdDetail.setColumn(0,'qrFileName',this.gvQRcodeName);//QR코드 파일명
        		this.dsProdDetail.setColumn(0,'qrContents',qrContensUrl);//QR코드 contents url 세팅
        		this.ufMakeQRCode();
        		// 매장선택 비활성화
        		this.Div1.form.btnSearchSeller.set_enable(false);
        		alert("상품코드["+this.dsProdDetail.getColumn(0,'prodCode')+"]가 발행되었습니다. \n\r#상품코드가 발행된 후 매장은 변경하실수 없습니다.");
        	}
        };

        // 매장지정후 후 callback
        this.fn_popCallBack = function (strID, rtnVal)
        {
        	var strJason = '({'+rtnVal+'})';
        	json = eval(strJason);
        	if (json.flg)
        	{
        		this.Div1.form.edtSellerName.set_value(json.sName);
        		this.Div1.form.edtShopCode.set_value(json.shopCode);
        		this.Div1.form.edtSellerCode.set_value(json.sellerCode);
        	}
        };

        // 상품등록 후 callback
        this.fn_CallbackReg = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        		return;
        	}
            else
        	{
        		alert("상품이 등록되었습니다.");
        		var strJson="flg:true";
        		this.close(strJson);
        	}
        };

        // 파일삭제후
        this.fn_CallbackDelFile = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        	}
            else
        	{
        		var flag = false;
        		var dataSet;
        		if (strSvcID == 'dsImageList1')
        		{
        			dataSet =  this.dsImageList1;
        		}
        		else if (strSvcID == 'dsImageList2')
        		{
        			dataSet =  this.dsImageList2;
        		}
        		else if (strSvcID == 'dsMovList1')
        		{
        			dataSet =  this.dsMovList1;
        		}
        		else if (strSvcID == 'dsMovList2')
        		{
        			dataSet =  this.dsMovList2;
        		}
        		else if (strSvcID == 'dsStillcutList1')
        		{
        			dataSet =  this.dsStillcutList1;
        		}
        		else if (strSvcID == 'dsStillcutList2')
        		{
        			dataSet =  this.dsStillcutList2;
        		}
        		var rowCount = dataSet.getRowCount();
        		for(var i=rowCount-1; i>=0; i--)
        		{
        			var delFlag = dataSet.getColumn(i,"delFlag");
        			if(delFlag == 1)
        			{
        				// row 삭제
        				dataSet.deleteRow(i);
        				flag = true;
        			}
        		}
        		if(!flag)
        		{
        			alert('삭제할 파일을 선택하세요');
        			return;
        		}
        		// 순번바꾸기
        		this.ufDataSetOrderReset(dataSet);

        		// 이미지순번 리셋
        		var newRowCount = dataSet.getRowCount();
        		if (strSvcID == 'dsImageList1')
        		{
        			this.gvImgNo1 = newRowCount;
        			// 미리보기 없애기
        			this.Div1.form.ivImgView1.set_visible(false);
        		}
        		else if (strSvcID == 'dsImageList2')
        		{
        			this.gvImgNo2 = newRowCount;
        			// 미리보기 없애기
        			this.Div2.form.ivImgView2.set_visible(false);
        		}
        		else if (strSvcID == 'dsStillcutList1')
        		{
        			this.gvStillNo1 = newRowCount;
        			// 미리보기 없애기
        			this.Div1.form.ivImgView11.set_visible(false);
        		}
        		else if (strSvcID == 'dsStillcutList2')
        		{
        			this.gvStillNo2 = newRowCount;
        			// 미리보기 없애기
        			this.Div2.form.ivImgView22.set_visible(false);
        		}
        		else if (strSvcID == 'dsMovList1')
        		{
        			this.gvMovNo1 = newRowCount;
        		}
        		else if (strSvcID == 'dsMovList2')
        		{
        			this.gvMovNo2 = newRowCount;
        		}
        		alert("파일이 삭제되었습니다.");
        	}
        };

        // 수정으로 open 하고 상품상세를 search 한후 callback
        this.fn_CallbackSearchDetail = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        		return;
        	}
            else
        	{
        		// QR코드 load
        		this.ufShowQRcode();
        		// 가격입력란 활설비활성화
        		if (this.dsProdDetail.getColumn(0,'prodPriceDispYN') == 'N')
        		{
        			//가격비노출시--> 가격입력란 비활성화
        			this.Div5.form.edtPriceKr.set_readonly(true);
        		}
        		else
        		{
        			//가격비출시--> 가격입력란 활성화
        			this.Div5.form.edtPriceKr.set_readonly(false);
        		}
        		trace("상품상세보기로딩완료!");
        	}
        }

        // 수정완료후 메세지
        this.fn_CallbackUpdate = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        		return;
        	}
            else
        	{
        		trace("상품수정완료!");
        		alert("상품정보수정을 완료하였습니다.");
        		var strJson="flg:true";
        		this.close(strJson);
        	}
        }
        // 파일저장완료후
        this.fn_CallbackUploadFile = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        		return;
        	}
            else
        	{
        		trace("파일저장완료!");
        		alert("파일이 저장되었습니다.");
        	}
        }

        // QR코드 저장후 이미지 표시
        this.fn_CallbackMakeQRCode = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0) {
        		alert(strErrorMag);
        		return;
        	}
            else
        	{
        		this.ufShowQRcode();
        	}

        }

        //================================================
        // User Function
        //--------------------------------------------------------------------------------------
        // 카테고리 세팅
        this.ufSetCategory = function ()
        {

        	// 대분류_카테고리
        	this.dsCatg1.set_filterstr("depth == 0");
        	this.dsCatg1.insertRow(0);
        	this.dsCatg1.setColumn(0, "cId", '00');// 대분류값세팅
        	this.dsCatg1.setColumn(0, "cName", "대분류");

        	// 세분류_카테고리
        	this.dsCatg2.insertRow(0);
        	this.dsCatg2.setColumn(0, "cId", '01');//세분류값세팅
        	this.dsCatg2.setColumn(0, "depth", 99); // 임의의 depth
        	this.dsCatg2.setColumn(0, "cName", "세분류");
        	this.dsCatg2.set_filterstr("depth == 99");
        }
        // 소재 세팅
        this.ufSetMaterial = function()
        {
        	this.dsMatr.insertRow(0);
        	this.dsMatr.setColumn(0, "matrCode", "00000");
        	this.dsMatr.setColumn(0, "matrName", "소재선택");
        };
        // 환율세팅
        this.ufSetRate = function()
        {
        	var cny = this.dsRate.getColumn(0,"cny");
        	this.Div5.form.stRate.set_text(cny);
        };
        // 라디오버튼 세팅
        this.ufSetRadio = function ()
        {
        	this.Div5.form.rdPriceDispYN.set_value("N");
        	this.Div6.form.rdDisplayYN.set_value("Y");
        };

        // 항목체크
        // 1. 이미지추가 버튼클릭시에 체크항목
        this.ufCheckInitMetaInfo = function ()
        {
        	if (gfnIsNull(this.Div1.form.edtSellerName.value))
        	{
        		this.alert("매장명을 입력해주세요.");
        		this.Div1.form.btnSearchSeller.setFocus();
        		return false;
        	}
        	if (gfnIsNull(this.Div1.form.edtProdNmKr.value))
        	{
        		this.alert("상품명_한국어를 입력해주세요.");
        		this.Div1.form.edtProdNmKr.setFocus();
        		return false;
        	}
        	if (gfnIsNull(this.Div1.form.edtProdNmCh.value))
        	{
        		this.alert("상품명_중국어를 입력해주세요.");
        		this.Div1.form.edtProdNmCh.setFocus();
        		return false;
        	}
        	if (gfnIsNull(this.Div1.form.taProdExpKr.value))
        	{
        		this.alert("상품설명_한국어를 입력해주세요.");
        		this.Div1.form.taProdExpKr.setFocus();
        		return false;
        	}
        	if (gfnIsNull(this.Div1.form.taProdExpCh.value))
        	{
        		this.alert("상품설명_중국어를 입력해주세요.");
        		this.Div1.form.taProdExpCh.setFocus();
        		return false;
        	}
        	return true;
        };

        // 전체 필수체크
        this.ufCheckAlldata = function ()
        {
        	if (!this.ufCheckInitMetaInfo())
        	{
        		return false;
        	}

        	// 모바일이미지 체크
        	var imgCount1 = this.dsImageList1.rowcount;
        	if (imgCount1 == 0)
        	{
        		alert("모바일 서비스용 이미지를 추가하세요");
        		this.Div1.form.btnRegImg1.setFocus();
        		return false;
        	}

        	// 모바일 대표이미지 체크(1개)
        	var imgRepCount1 = 0;
        	for(var i=0;i<imgCount1; i++)
        	{
        		var regFlag = this.dsImageList1.getColumn(i,'repFlag');
        		if (regFlag == '1')
        		{
        			imgRepCount1 = imgRepCount1+1;
        		}
        	}
        	if (imgRepCount1 > 1)
        	{
        		alert("모바일 서비스용 대표이미지를 한개만 선택하세요");
        		this.Div1.form.grdImgList1.setFocus();
        		return false;
        	}
        	else if (imgRepCount1 == 0)
        	{
        		alert("모바일 서비스용 대표이미지를 선택하세요");
        		this.Div1.form.grdImgList1.setFocus();
        		return false;
        	}

        	// 모바일  동영상 대표 체크(1개)
        	var movRepCount1 = 0;
        	var movCount1 = this.dsMovList1.rowcount;
        	for(var i=0;i<movCount1; i++)
        	{
        		var regFlag = this.dsMovList1.getColumn(i,'repFlag');
        		if (regFlag == '1')
        		{
        			movRepCount1 = movRepCount1+1;
        		}
        	}
        	if (movRepCount1 > 1)
        	{
        		alert("모바일 서비스용 대표동영상을 한개만 선택하세요");
        		this.Div1.form.grdImgList1.setFocus();
        		return false;
        	}
        	else if (movRepCount1 == 0)
        	{
        		alert("모바일 서비스용 대표동영상을 선택하세요");
        		this.Div1.form.grdImgList1.setFocus();
        		return false;
        	}

        	// 모바일  스틸컷 대표이미지 체크(1개)
        	var stillRepCount1 = 0;
        	var stillCount1 = this.dsStillcutList1.rowcount;
        	for(var i=0;i<stillCount1; i++)
        	{
        		var regFlag = this.dsStillcutList1.getColumn(i,'repFlag');
        		if (regFlag == '1')
        		{
        			stillRepCount1 = stillRepCount1+1;
        		}
        	}
        	if (stillRepCount1 > 1)
        	{
        		alert("모바일 서비스용 대표스틸컷을 한개만 선택하세요");
        		this.Div1.form.grdStillcutList1.setFocus();
        		return false;
        	}
        	else if (stillRepCount1 == 0)
        	{
        		alert("모바일 서비스용 대표스틸컷을 선택하세요");
        		this.Div1.form.grdStillcutList1.setFocus();
        		return false;
        	}

        	// 디지털 사이니지 이미지가 체크
        	var imgCount2 = this.dsImageList2.rowcount;
        	if (imgCount2 == 0)
        	{
        		alert("디지털 사이니지용 이미지를 추가하세요");
        		this.Div2.form.btnRegImg2.setFocus();
        		return false;
        	}

        	// 디지털 사이니지 대표이미지 체크(1개)
        	var imgRepCount2 = 0;
        	for(var i=0;i<imgCount2; i++)
        	{
        		var regFlag = this.dsImageList2.getColumn(i,'repFlag');
        		if (regFlag == '1')
        		{
        			imgRepCount2 = imgRepCount2+1;
        		}
        	}
        	if (imgRepCount2 > 1)
        	{
        		alert("디지털 사이니지용 대표이미지를 한개만 선택하세요");
        		this.Div2.form.grdImgList2.setFocus();
        		return false;
        	}
        	else if (imgRepCount2 == 0)
        	{
        		alert("디지털 사이니지용 대표이미지를 선택하세요");
        		this.Div2.form.grdImgList2.setFocus();
        		return false;
        	}

        	// 상품분류선택 체크
        	if (this.dsProdCatg.rowcount == 0)
        	{
        		alert("상품분류를 추가하세요");
        		this.Div3.form.btnAdd.setFocus();
        		return false;
        	}

        	// 디지털 사이니지용  대표이미지 체크(1개)
        	var movRepCount2 = 0;
        	var movCount2 = this.dsMovList2.rowcount;
        	for(var i=0;i<movCount2; i++)
        	{
        		var regFlag = this.dsMovList2.getColumn(i,'repFlag');
        		if (regFlag == '1')
        		{
        			movRepCount2 = movRepCount2+1;
        		}
        	}
        	if (movRepCount2 > 1)
        	{
        		alert("디지털 사이니지용 대표동영상을 한개만 선택하세요");
        		this.Div2.form.grdImgList2.setFocus();
        		return false;
        	}
        	else if (movRepCount2 == 0)
        	{
        		alert("디지털 사이니지용 대표동영상을 선택하세요");
        		this.Div2.form.grdImgList2.setFocus();
        		return false;
        	}

        	// 디지털 사이니지용  스틸컷 대표이미지 체크(1개)
        	var stillRepCount2 = 0;
        	var stillCount2 = this.dsStillcutList2.rowcount;
        	for(var i=0;i<stillCount2; i++)
        	{
        		var regFlag = this.dsStillcutList2.getColumn(i,'repFlag');
        		if (regFlag == '1')
        		{
        			stillRepCount2 = stillRepCount2+1;
        		}
        	}
        	if (stillRepCount2 > 1)
        	{
        		alert("디지털 사이니지용 대표스틸컷을 한개만 선택하세요");
        		this.Div2.form.grdStillcutList2.setFocus();
        		return false;
        	}
        	else if (stillRepCount2 == 0)
        	{
        		alert("디지털 사이니지용 대표스틸컷을 선택하세요");
        		this.Div2.form.grdStillcutList2.setFocus();
        		return false;
        	}

        	// 상품분류추가후 선택을 안했을 경우
        	var catgRow = this.dsProdCatg.rowcount;
        	for(var i=0; i<catgRow; i++)
        	{
        		var catgCode1 = this.dsProdCatg.getColumn(i,'catgCode1');
        		if (catgCode1=='00')
        		{
        			alert("상품분류[대분류]를 선택하세요");
        			this.Div3.form.GridCatg.setFocus();
        			return false;
        		}
        	}

        	// 상품소재선택 체크
        	if (this.dsProdMatr.rowcount == 0)
        	{
        		alert("상품소재를 추가하세요");
        		this.Div3.form.btnAdd.setFocus();
        		return false;
        	}

        	// 상품소재추가후 선택을 안했을 경우
        	var matrRow = this.dsProdMatr.rowcount;
        	for(var i=0; i<matrRow; i++)
        	{
        		var matrCode = this.dsProdMatr.getColumn(i,'matrCode');
        		if (matrCode=='00000')
        		{
        			alert("상품소재를 선택하세요");
        			this.Div4.form.form.GridMatr.setFocus();
        			return false;
        		}

        		// 함유량을 입력하지 않았을 경우
        		var matrPerct = this.dsProdMatr.getColumn(i,'matrPerct');
        		if (gfnIsNull(matrPerct) || matrPerct == 0)
        		{
        			alert("함유량을 입력하세요");
        			this.Div4.form.form.GridMatr.setFocus();
        			return false;
        		}
        	}

        	// 상품진열기간을 입력하지 않은 경우
        	var startDate = this.Div6.form.calDisplayStart.value;
        	var endDate =  this.Div6.form.calDisplayEnd.value;

        	if(gfnIsNull(startDate))
        	{
        		alert("상품진열기간(시작일)을 입력하세요");
        		this.Div6.form.calDisplayStart.setFocus();
        		return false;
        	}

        	if(gfnIsNull(endDate))
        	{
        		alert("상품진열기간(마감일)을 입력하세요");
        		this.Div6.form.calDisplayStart.setFocus();
        		return false;
        	}

        	if(startDate>endDate){
        		alert("상품진열기간(시작일)이 (마감일)보다 클 수 없습니다.");
        		this.Div6.form.calDisplayStart.setFocus();
        		return false;
        	}

        	return true;
        };


        // dataSet  순번 reset
        // 1. 아이템이 위,아래 포지션이 바뀐후
        // 2. 아이템 삭제후
        this.ufDataSetOrderReset = function (dataSetList)
        {
        	var rowCount = dataSetList.rowcount;
        	for(var i=0; i<rowCount; i++)
        	{
        		dataSetList.setColumn(i,'fileOrder',i+1)
        	}
        };

        // 파일디렉토리 만들기
        this.ufMakeFilePath = function (arg1, arg2)
        {
        	var shopCode = this.Div1.form.edtShopCode.value;// 상가코드
        	var sellerCode = this.Div1.form.edtSellerCode.value;//상점코드
        	var prodId = this.dsProdDetail.getColumn(0,'prodId');//상품ID(pk 일련번호)
        	var path = "mnt/nas/mediapic.com/SHOP/"+shopCode+"/"+sellerCode+"/"+arg1+"/"+prodId+"/"+arg2+"/"; // 상가코드/상점코드/MOBILE/상품ID/IMG
        	return path;
        };

        // 미리보기 디렉토리 만들기
        this.ufMakeFileViewPath = function (arg1, arg2)
        {
        	var shopCode = this.Div1.form.edtShopCode.value;// 상가코드
        	var sellerCode = this.Div1.form.edtSellerCode.value;//상점코드
        	var prodId = this.dsProdDetail.getColumn(0,'prodId');//상품ID(pk 일련번호)
        	var path = "media/SHOP/"+shopCode+"/"+sellerCode+"/"+arg1+"/"+prodId+"/"+arg2+"/"; // 상가코드/상점코드/MOBILE/상품ID/IMG
        	return path;
        };

        // QR코드 파일디렉토리 만들기
        this.ufMakeQRCodeFilePath = function ()
        {
        	var shopCode = this.Div1.form.edtShopCode.value;// 상가코드
        	var sellerCode = this.Div1.form.edtSellerCode.value;//상점코드
        	var prodId = this.dsProdDetail.getColumn(0,'prodId');//상품ID(pk 일련번호)
        	var path = "mnt/nas/mediapic.com/SHOP/"+shopCode+"/"+sellerCode+"/MOBILE/"+prodId+"/";  // 상가코드/상점코드/MOBILE/상품ID/

        	return path;
        };

        // 미리보기 QR코드 파일디렉토리 만들기
        this.ufMakeQRCodeFileViewPath = function ()
        {
        	var shopCode = this.Div1.form.edtShopCode.value;// 상가코드
        	var sellerCode = this.Div1.form.edtSellerCode.value;//상점코드
        	var prodId = this.dsProdDetail.getColumn(0,'prodId');//상품ID(pk 일련번호)
        	var path = "media/SHOP/"+shopCode+"/"+sellerCode+"/MOBILE/"+prodId+"/";  // 상가코드/상점코드/MOBILE/상품ID/

        	return path;
        };

        // 이미지 저장전 체크 및 상품상세 최초 정보 insert
        this.ufCheckInsertProdInitInfo = function()
        {
        	// 화면에서 상품메타정보가 입력되어있는지 확인
        	if(this.ufCheckInitMetaInfo() == false) return false;

        	// 최초 상품코드가 채번이 되어있지 않을경우
        	// 메타정보입력 및 채번을 함
        	if (gfnIsNull(this.Div1.form.edtProdCode.value))
        	{
        		// upload 전에 insert( 메타정보를 상품테이블에 입력한다+QR코드)
        		this.ufInstInitiProdMetaInfo(); // 메타정보저장
        	}
        	return true;
        }
        // 이미지 순위 올리기
        this.ufUpImgOrder = function (dataSet)
        {
        	var rowPosition = dataSet.rowposition;
        	var newRowPosition = rowPosition - 1;
        	if (newRowPosition < 0) return;
        	dataSet.moveRow(rowPosition,newRowPosition);
        	// 순번바꾸기
        	this.ufDataSetOrderReset(dataSet);
        };

        // 이미지 순위 내리기
        this.ufDownImgOrder = function (dataSet)
        {
        	var rowCount = dataSet.rowcount;
        	var rowPosition = dataSet.rowposition;
        	var newRowPosition = rowPosition + 1;
        	if (newRowPosition >= rowCount) return;
        	dataSet.moveRow(rowPosition,newRowPosition);
        	// 순번바꾸기
        	this.ufDataSetOrderReset(dataSet);
        };
        // 이미지정보 dataset에 세팅
        this.ufSetImgDataset = function (fileUpload,dataSet,dataSetName,path,kbn)
        {
        	// 선택파일갯수만큼 dataset  에 설정
        	var item = fileUpload.value.split(",");
        	// 확장자 체크
        	if (!this.ufCheckFileExtension(item,kbn))return false;

        	var prodId = this.dsProdDetail.getColumn(0,'prodId');// 최초 상품코드 생성후 가져온 상품ID
        	var stillCutYN = 'N';
        	for(var i=0; i<item.length; i++)
        	{
        		var orderNo = 0
        		var useFlag = '0';
        		var imgMov = '0';
        		if (dataSetName == 'dsImageList1')
        		{
        			this.gvImgNo1 = this.gvImgNo1 +1;
        			useFlag = '0';
        			imgMov = '0';
        			orderNo = this.gvImgNo1;
        		}
        		else if (dataSetName == 'dsImageList2')
        		{
        			this.gvImgNo2 = this.gvImgNo2 +1;
        			useFlag = '1';
        			imgMov = '0';
        			orderNo = this.gvImgNo2;
        		}
        		else if (dataSetName == 'dsMovList1')
        		{
        			this.gvMovNo1 = this.gvMovNo1 +1;
        			useFlag = '0';
        			imgMov = '1';
        			orderNo = this.gvMovNo1;
        		}
        		else if (dataSetName == 'dsMovList2')
        		{
        			this.gvMovNo2 = this.gvMovNo2 +1;
        			useFlag = '1';
        			imgMov = '1';
        			orderNo = this.gvMovNo2;
        		}
        		else if (dataSetName == 'dsStillcutList1')
        		{
        			this.gvStillNo1 = this.gvStillNo1 +1;
        			useFlag = '0';
        			imgMov = '2';
        			stillCutYN = 'Y';
        			orderNo = this.gvStillNo1;
        		}
        		else if (dataSetName == 'dsStillcutList2')
        		{
        			this.gvStillNo2 = this.gvStillNo2 +1;
        			useFlag = '1';
        			imgMov = '2';
        			stillCutYN = 'Y';
        			orderNo = this.gvStillNo2;
        		}
        		var insRow = dataSet.addRow();
        		dataSet.setColumn(insRow,"productId",prodId);
        		dataSet.setColumn(insRow,"fileOrder",orderNo);
        		dataSet.setColumn(insRow,"filenmOrg",gfn_GetFileName(item[i].toString(),true));
        		dataSet.setColumn(insRow,"filePath",path);
        		dataSet.setColumn(insRow,"useFlag",useFlag);//0:모바일서비스용, 1:사이니지용, 2: 스틸컷이미지
        		dataSet.setColumn(insRow,"imgVodFlag",imgMov);//0:이미지파일, 1:동영상파일
        		dataSet.setColumn(insRow,"repFlag",'0');
        		dataSet.setColumn(insRow,"delFlag",'0');
        		dataSet.setRowType(insRow, Dataset.ROWTYPE_INSERT);
        	}
        	var prefix = prodId;// 상품ID (파일명-->상품ID_timestap.xxx)
        	// 파일 업로드 트랜젝션
         	this.fn_fileUpload(fileUpload,path,prefix,stillCutYN);
        };

        // 확장자체크
        this.ufCheckFileExtension = function (item,kbn)
        {
        	for(var i=0; i<item.length; i++)
        	{
        		var sPath = item[i].toString();
        		var end_pos = gfn_PosReverse(sPath, ".");
        		if (end_pos < 0)
        		{
        			end_pos = sPath.length;
        		}
        		var extension = sPath.substr(end_pos+1);

        		if (kbn == 'img')
        		{
        			var cnt = 0;
        			for(var y=0; y<this.gvArryImgExtension.length; y++)
        			{
        				if (extension.toLowerCase() == this.gvArryImgExtension[y])
        				{
        					cnt = cnt+1;
        				}
        			}
        			if (cnt==0)
        			{
        				alert("이미지 파일확장자는 ["+this.gvArryImgExtension.toString()+"] 만 가능합니다.");
        				return false;
        			}
        		}
        		else
        		{
        			var cnt = 0;
        			for(var y=0; y<this.gvArryMovExtension.length; y++)
        			{
        				if (extension.toLowerCase() == this.gvArryMovExtension[y])
        				{
        					cnt = cnt+1;
        				}
        			}
        			if (cnt==0)
        			{
        				alert("동영상 파일확장자는 ["+this.gvArryMovExtension.toString()+"] 만 가능합니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        };

        // 날짜세팅
        this.ufSetCalendar = function (day)
        {
        	var today = gfnGetToday();
        	var objDateFormat = gfnAddDate(today, -day);
        	this.Div6.form.calDisplayStart.set_value(objDateFormat);
        	this.Div6.form.calDisplayEnd.set_value(today);
        };

        // QR코드 보여주기
        this.ufShowQRcode = function ()
        {
        	this.Div1.form.ivQRcode.set_visible(true);
        	var fileName = this.gvQRcodeName;//QR코드 파일명
        	var str_Path = this.ufMakeQRCodeFileViewPath();
        	var imgUrl = str_Path+fileName;
        	trace(imgUrl);
        	this.Div1.form.ivQRcode.set_image("URL('SVCIMG::"+imgUrl+"')") ;
        };
        //================================================
        // Component Event
        //--------------------------------------------------------------------------------------

        // 상품분류:더하기
        this.Div3_btnAdd_onclick = function(obj,e)
        {
        	var insRow = this.dsProdCatg.addRow();
        	this.dsProdCatg.setColumn(insRow, "catgCode1", '00'); //대분류
        	this.dsProdCatg.setColumn(insRow, "catgCode2", '01');	//세분류
        	this.dsProdCatg.setRowType(insRow, Dataset.ROWTYPE_INSERT);
        }
        // 상품분류 : 삭제하기
        this.Div3_btnDel_onclick = function(obj,e)
        {
        	var delRow = this.Div3.form.GridCatg.currentrow;
        	this.dsProdCatg.deleteRow(delRow);
        	this.dsProdCatg.setRowType(delRow, Dataset.ROWTYPE_DELETE);
        };

        //  대분류 선택후 세분류 필터링
        this.Div3_GridCatg_oncloseup = function(obj,e)
        {
        	if (e.col == 0)
        	{
        		// 세분류 필터링
        		var CatgCode1 = e.value;
        		var nRow = this.dsCatg1.findRow("cId",CatgCode1);
        		var level1 =this.dsCatg1.getColumn(nRow,"level1");
        		this.dsCatg2.set_filterstr("(depth == 1 && level1 == "+level1+") || depth == 99");
        		// 필터링후 [세분류]로 선택
        		this.dsProdCatg.setColumn(e.row,"catgCode2",'01');
        	}
        };

        // 다른 row 의 세분류 선택시 필터링
        this.dsProdCatg_onrowposchanged = function(obj,e)
        {
        	var nRow = e.newrow;
        	var CatgCode1 =this.dsProdCatg.getColumn(nRow,"catgCode1");
        	var nCatgRow = this.dsCatg1.findRow("cId",CatgCode1);
        	var level1 =this.dsCatg1.getColumn(nCatgRow,"level1");
        	this.dsCatg2.set_filterstr("(depth == 1 && level1 == "+level1+") || depth == 99");
        }

        // 상품소재 : 더하기
        this.Div4_btnAdd_onclick = function(obj,e)
        {
        	var insRow = this.dsProdMatr.addRow();

        	this.dsProdMatr.setColumn(insRow, "matrId", "");
        	this.dsProdMatr.setColumn(insRow, "matrProductId", "");
        	this.dsProdMatr.setColumn(insRow, "matrCode", "00000");
        	this.dsProdMatr.setColumn(insRow, "percentage", "");
        	this.dsProdMatr.setRowType(insRow, Dataset.ROWTYPE_INSERT);
        }

        // 상품소재 : 삭제하기
        this.Div4_btnDel_onclick = function(obj,e)
        {
        	var delRow = this.Div4.form.GridMatr.currentrow;
        	this.dsProdMatr.deleteRow(delRow);
        	this.dsProdMatr.setRowType(delRow, Dataset.ROWTYPE_DELETE);
        };

        // 환율자동계산
        this.Div5_edtPriceKr_oninput = function(obj,e)
        {
        	var krw = obj.value;//원 입력값
        	var cal = krw / this.dsRate.getColumn(0,"cny");  //위안으로 변환한값
        	var chy  = Math.round(cal*100)/100;

        	this.Div5.form.edtPriceCh.set_value(chy);
        }

        // 모바일 서비스용 이미지등록하기
        this.Div1_btnRegImg1_onclick = function(obj,e)
        {
        	if (this.ufCheckInsertProdInitInfo())
        	{
        		this.Div1.form.fileUploadImg1.filefindbuttons[0].click();
        	};
        }

        // 모바일 서비스용 동영상등록하기
        this.Div1_btnRegMov1_onclick = function(obj,e)
        {
        	if (this.ufCheckInsertProdInitInfo())
        	{
        		this.Div1.form.fileUploadMov1.filefindbuttons[0].click();
        	};
        };

        // 모바일 서비스용 스틸컷등록하기
        this.Div1_btnRegStillcut1_onclick = function(obj,e)
        {
        	if (this.ufCheckInsertProdInitInfo())
        	{
        		this.Div1.form.fileUploadStillcut1.filefindbuttons[0].click();
        	};
        };

        // 사이니지 서비스용 이미지등록하기
        this.Div2_btnRegImg2_onclick = function(obj,e)
        {
        	if (this.ufCheckInsertProdInitInfo())
        	{
        		this.Div2.form.fileUploadImg2.filefindbuttons[0].click();
        	};
        }

        // 사이니지 서비스용 동영상등록하기
        this.Div2_btnRegMov2_onclick = function(obj,e)
        {
        	if (this.ufCheckInsertProdInitInfo())
        	{
        		this.Div2.form.fileUploadMov2.filefindbuttons[0].click();
        	};
        };

        // 사이니지 서비스용 스틸컷등록하기
        this.Div2_btnRegStillcut2_onclick = function(obj,e)
        {
        	if (this.ufCheckInsertProdInitInfo())
        	{
        		this.Div2.form.fileUploadStillcut2.filefindbuttons[0].click();
        	};
        };

        // 모바일 이미지파일명 그리드에 세팅
        this.Div1_fileUploadImg1_onitemchanged = function(obj,e)
        {
            // 경로설정
         	var path = this.ufMakeFilePath('MOBILE','IMG');
        	// dataset 세팅
        	this.ufSetImgDataset(obj,this.dsImageList1,'dsImageList1',path,'img');
        };

        // 모바일 동영상파일명 그리드에 세팅
        this.Div1_fileUploadMov1_onitemchanged = function(obj,e)
        {
            // 경로설정
         	var path = this.ufMakeFilePath('MOBILE','MOV');
        	// dataset 세팅
        	this.ufSetImgDataset(obj,this.dsMovList1,'dsMovList1',path,'mov');
        };

        // 모바일 스틸컷파일명 그리드에 세팅
        this.Div1_fileUploadStillcut1_onitemchanged = function(obj,e)
        {
            // 경로설정
         	var path = this.ufMakeFilePath('MOBILE','MOV');
        	// dataset 세팅
        	this.ufSetImgDataset(obj,this.dsStillcutList1,'dsStillcutList1',path,'img');
        };

        // 사이니지 이미지 파일명 그리드에 세팅
        this.Div2_fileUploadImg2_onitemchanged = function(obj,e)
        {
        	// 경로설정
         	var path = this.ufMakeFilePath('SIGNAGE','IMG');
        	// dataset 세팅
        	this.ufSetImgDataset(obj,this.dsImageList2,'dsImageList2',path,'img');
        };

        // 사이니지 동영상 파일명 그리드에 세팅
        this.Div2_fileUploadMov2_onitemchanged = function(obj,e)
        {
        	// 경로설정
         	var path = this.ufMakeFilePath('SIGNAGE','MOV');
        	// dataset 세팅
        	this.ufSetImgDataset(obj,this.dsMovList2,'dsMovList2',path,'mov');
        };

        // 사이니지 스틸컷 파일명 그리드에 세팅
        this.Div2_fileUploadStillcut2_onitemchanged = function(obj,e)
        {
        	// 경로설정
         	var path = this.ufMakeFilePath('SIGNAGE','MOV');
        	// dataset 세팅
        	this.ufSetImgDataset(obj,this.dsStillcutList2,'dsStillcutList2',path,'img');
        };



        // 모바일 서비스용 이미지삭제하기
        this.Div1_btnDelImg1_onclick = function(obj,e)
        {
        	// 파일삭제  transaction
        	this.ufDeleteFileInfo('dsImageList1');
        };

        // 모바일 서비스용 동영상삭제하기
        this.Div1_btnDelMov1_onclick = function(obj,e)
        {
        	// 파일삭제  transaction
        	this.ufDeleteFileInfo('dsMovList1');
        };

        // 모바일 서비스용 스틸컷삭제하기
        this.Div1_btnDelStillcut1_onclick = function(obj,e)
        {
        	// 파일삭제  transaction
        	this.ufDeleteFileInfo('dsStillcutList1');
        };

        // 사이니지 서비스용 이미지삭제하기
        this.Div2_btnDelImg2_onclick = function(obj,e)
        {
        	// 파일삭제  transaction
        	this.ufDeleteFileInfo('dsImageList2');
        };

        // 사이니지 서비스용 이미지삭제하기
        this.Div2_btnDelMov2_onclick = function(obj,e)
        {
        	// 파일삭제  transaction
        	this.ufDeleteFileInfo('dsMovList2');
        };

        // 사이니지 서비스용 스틸컷삭제하기
        this.Div2_btnDelStillcut2_onclick = function(obj,e)
        {
        	// 파일삭제  transaction
        	this.ufDeleteFileInfo('dsStillcutList2');
        };

        // 모바일 서비스용 이미지 순위 올리기
        this.Div1_btnUpImg1_onclick = function(obj,e)
        {
        	this.ufUpImgOrder(this.dsImageList1);
        };

        // 모바일 서비스용 이미지 순위 내리기
        this.Div1_btnDownImg1_onclick = function(obj,e)
        {
            this.ufDownImgOrder(this.dsImageList1);
        };

        // 모바일 서비스용 동영상 순위 올리기
        this.Div1_btnUpMov1_onclick = function(obj,e)
        {
        	this.ufUpImgOrder(this.dsMovList1);
        };

        // 모바일 서비스용 동영상 순위 내리기
        this.Div1_btnDownMov1_onclick = function(obj,e)
        {
        	this.ufDownImgOrder(this.dsMovList1);
        };

        // 모바일 서비스용 스틸컷 순위 올리기
        this.Div1_btnUpStillcut1_onclick = function(obj,e)
        {
        	this.ufUpImgOrder(this.dsStillcutList1);
        };

        // 모바일 서비스용 스틸컷 순위 내리기
        this.Div1_btnDownStillcut1_onclick = function(obj,e)
        {
        	this.ufDownImgOrder(this.dsStillcutList1);
        };

        // 모바일 서비스용 동영상 순위 내리기
        this.Div1_btnDownMov1_onclick = function(obj,e)
        {
        	this.ufDownImgOrder(this.dsMovList1);
        };

        // 사이니지 서비스용 이미지 순위 올리기
        this.Div2_btnUpImg2_onclick = function(obj,e)
        {
        	this.ufUpImgOrder(this.dsImageList2);
        }

        // 사이니지 서비스용 이미지 순위 내리기
        this.Div2_btnDownImg2_onclick = function(obj,e)
        {
            this.ufDownImgOrder(this.dsImageList2);
        }

        // 사이니지 서비스용 동영상 순위 올리기
        this.Div2_btnUpMov2_onclick = function(obj,e)
        {
        	this.ufUpImgOrder(this.dsMovList2);
        };

        // 사이니지 서비스용 동영상 순위 내리기
        this.Div2_btnDownMov2_onclick = function(obj,e)
        {
        	this.ufDownImgOrder(this.dsMovList2);
        };

        // 사이니지 서비스용 스틸컷 순위 올리기
        this.Div2_btnUpStillcut2_onclick = function(obj,e)
        {
        	this.ufUpImgOrder(this.dsStillcutList2);
        };

        // 사이니지 서비스용 스틸컷 순위 내리기
        this.Div2_btnDownStillcut2_onclick = function(obj,e)
        {
        	this.ufDownImgOrder(this.dsStillcutList2);
        };

        // 모바일 서비스용 이미지 파일저장 완료후
        this.Div1_fileUploadImg1_onsuccess = function(obj,e)
        {
        	if (e.errorcode != 0)
        	{
        		alert(e.errormsg);
        		return;
        	}

        	// 파일테이블에 insert (product_file_info)
        	this.ufInsertFileMetaInfo(this.dsImageList1,e);
        }

        // 모바일 서비스용 동영상 파일저장 완료후
        this.Div1_fileUploadMov1_onsuccess = function(obj,e)
        {
        	if (e.errorcode != 0)
        	{
        		alert(e.errormsg);
        		return;
        	}
        	// 파일테이블에 insert (product_file_info)
        	this.ufInsertFileMetaInfo(this.dsMovList1,e);
        };

        // 모바일 서비스용 스틸컷 파일저장 완료후
        this.Div1_fileUploadStillcut1_onsuccess = function(obj,e)
        {
        	if (e.errorcode != 0)
        	{
        		alert(e.errormsg);
        		return;
        	}
        	// 파일테이블에 insert (product_file_info)
        	this.ufInsertFileMetaInfo(this.dsStillcutList1,e);
        };

        // 사이니지 서비스용 이미지 업데이트완료후
        this.Div2_fileUploadImg2_onsuccess = function(obj,e)
        {
        	if (e.errorcode != 0)
        	{
        		alert(e.errormsg);
        		return;
        	}
        	// 파일테이블에 insert (product_file_info)
        	this.ufInsertFileMetaInfo(this.dsImageList2,e);
        }

        // 사이니지 서비스용 동영상 업데이트완료후
        this.Div2_fileUploadMov2_onsuccess = function(obj,e)
        {
        	if (e.errorcode != 0)
        	{
        		alert(e.errormsg);
        		return;
        	}
        	// 파일테이블에 insert (product_file_info)
        	this.ufInsertFileMetaInfo(this.dsMovList2,e);
        };

        // 사이니지 서비스용 스틸컷 업데이트완료후
        this.Div2_fileUploadStillcut2_onsuccess = function(obj,e)
        {
        	if (e.errorcode != 0)
        	{
        		alert(e.errormsg);
        		return;
        	}
        	// 파일테이블에 insert (product_file_info)
        	this.ufInsertFileMetaInfo(this.dsStillcutList2,e);
        };

        // 모바일 서비스용 이미지 파일 미리보기
        this.Div1_grdImgList1_oncellclick = function(obj,e)
        {
        	this.Div1.form.ivImgView1.set_visible(true);
        	var filenmSys = this.dsImageList1.getColumn(e.row,'filenmSys');
        	var str_Path = this.ufMakeFileViewPath('MOBILE','IMG');
        	var imgUrl = str_Path+filenmSys;
        	trace(imgUrl);
        	this.Div1.form.ivImgView1.set_image("URL('SVCIMG::"+imgUrl+"')") ;
        };

        // 모바일 서비스용 스틸컷 이미지 파일 미리보기
        this.Div1_grdStillcutList1_oncellclick = function(obj,e)
        {
        	this.Div1.form.ivImgView11.set_visible(true);
        	var filenmSys = this.dsStillcutList1.getColumn(e.row,'filenmSys');
        	var str_Path = this.ufMakeFileViewPath('MOBILE','MOV');
        	var imgUrl = str_Path+filenmSys;
        	this.Div1.form.ivImgView11.set_image("URL('SVCIMG::"+imgUrl+"')") ;
        };

        // 사이니지 서비스용 이미지 파일 미리보기
        this.Div2_grdImgList2_oncellclick = function(obj,e)
        {
        	this.Div2.form.ivImgView2.set_visible(true);
        	var filenmSys = this.dsImageList2.getColumn(e.row,'filenmSys');
        	var str_Path = this.ufMakeFileViewPath('SIGNAGE','IMG');
        	var imgUrl = str_Path+filenmSys;
        	this.Div2.form.ivImgView2.set_image("URL('SVCIMG::"+imgUrl+"')") ;
        };

        // 사이니지 서비스용 스틸컷 이미지 파일 미리보기
        this.Div2_grdStillcutList2_oncellclick = function(obj,e)
        {
        	this.Div2.form.ivImgView22.set_visible(true);
        	var filenmSys = this.dsStillcutList2.getColumn(e.row,'filenmSys');
        	var str_Path = this.ufMakeFileViewPath('SIGNAGE','MOV');
        	var imgUrl = str_Path+filenmSys;
        	this.Div2.form.ivImgView22.set_image("URL('SVCIMG::"+imgUrl+"')") ;
        };

        // 모바일용 동영상 미리보기
        this.Div1_grdMovList1_oncelldblclick = function(obj,e)
        {
        	var filenmSys = this.dsMovList1.getColumn(e.row,'filenmSys');
        	var str_Path = this.ufMakeFileViewPath('MOBILE','MOV');
        	var objEnv = nexacro.getEnvironment();
        	var url = objEnv.services["SVC"].url;
        	var url2 = objEnv.services["SVCIMG"].url;
        	var imgUrl = url+"jsp/VideoPlayer.jsp?movPath="+url2+str_Path+filenmSys;
        	nexacro.System.execBrowser(imgUrl);
        };

        // 사이니지용 동영상 미리보기
        this.Div2_grdMovList2_oncelldblclick = function(obj,e)
        {
        	var filenmSys = this.dsMovList2.getColumn(e.row,'filenmSys');
        	var str_Path = this.ufMakeFileViewPath('SIGNAGE','MOV');
        	var objEnv = nexacro.getEnvironment();
        	var url = objEnv.services["SVC"].url;
        	var url2 = objEnv.services["SVCIMG"].url;
        	var imgUrl = url+"jsp/VideoPlayer.jsp?movPath="+url2+str_Path+filenmSys;
        	nexacro.System.execBrowser(imgUrl);
        };

        // 매장검색 팝업
        this.Div1_btnSearchSeller_onclick = function(obj,e)
        {
        	var parentFrame = this.getOwnerFrame();
        	var childFrame = new ChildFrame;
        	var sArgument = {};

        	childFrame.set_openalign("center middle");
        	childFrame.init("SearchSeller","absolute" , -1, -1, 504, 544, null, null, "Product::SearchSeller.xfdl");

        	childFrame.set_titletext("셀러매장조회");
        	childFrame.set_showtitlebar(true);
        	childFrame.set_autosize(true);
        	childFrame.set_resizable(false);
        	childFrame.showModal(parentFrame, sArgument, this, "fn_popCallBack", false);
        };

        // 닫기버튼
        this.Static00_onclick = function(obj,e)
        {
        	this.close('flg:false');
        };
        // 1주클릭
        this.Div6_btnWeek1_onclick = function(obj,e)
        {
        	this.ufSetCalendar(-7);
        };

        // 2주클릭
        this.Div6_btnWeek2_onclick = function(obj,e)
        {
        	this.ufSetCalendar(-14);
        };

        // 3주클릭
        this.Div6_btnWeek3_onclick = function(obj,e)
        {
        	this.ufSetCalendar(-21);
        };

        // 4주클릭
        this.Div6_btnWeek4_onclick = function(obj,e)
        {
        	this.ufSetCalendar(-28);
        };

        // 전체삭제 체크박스 클릭
        this.Div_grd_onheadclick = function(obj,e)
        {
        	gfn_setGridCheckAll(obj, e.cell);
        };

        // 가격노출,비노출  클릭시
        this.Div5_rdPriceDispYN_canitemchange = function(obj,e)
        {
        	if (e.postvalue == 'N')
        	{
        		//가격비노출시--> 가격입력란 비활성화
        		this.Div5.form.edtPriceKr.set_readonly(true);
        	}
        	else
        	{
        		//가격비출시--> 가격입력란 활성화
        		this.Div5.form.edtPriceKr.set_readonly(false);
        	}
        };

        // 상품등록 및 저장
        this.btnRegister_onclick = function(obj,e)
        {
        	if (this.ufCheckAlldata())
        	{
        		if (this.gvMode == '1')
        		{
        			this.ufRegProduct();
        		}
        		else
        		{
        			this.ufUpdateProduct();
        		}
        	}
        };

        // 상품명 한국어  글자수 표시
        this.Div1_edtProdNmKr_oninput = function(obj,e)
        {
        	var value = obj.value;
        	var len = value.length;
        	this.Div1.form.stChaLimit1.set_text("("+len+"/20)");

        };

        // 상품명 중국어 글자수 표시
        this.Div1_edtProdNmCh_oninput = function(obj,e)
        {
        	var value = obj.value;
        	var len = value.length;
        	this.Div1.form.stChaLimit2.set_text("("+len+"/20)");
        };

        // 상품설명 한국어 글자수 표시
        this.Div1_taProdExpKr_oninput = function(obj,e)
        {
        	var value = obj.value;
        	var len = value.length;
        	this.Div1.form.stChaLimit3.set_text("("+len+"/1000)");
        };

        // 상품설명 중국어 글자수 표시
        this.Div1_taProdExpCh_oninput = function(obj,e)
        {
        	var value = obj.value;
        	var len = value.length;
        	this.Div1.form.stChaLimit4.set_text("("+len+"/1000)");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Div2.form.fileUploadMov2.addEventHandler("onitemchanged",this.Div2_fileUploadMov2_onitemchanged,this);
            this.Div2.form.fileUploadMov2.addEventHandler("onsuccess",this.Div2_fileUploadMov2_onsuccess,this);
            this.Div2.form.fileUploadImg2.addEventHandler("onitemchanged",this.Div2_fileUploadImg2_onitemchanged,this);
            this.Div2.form.fileUploadImg2.addEventHandler("onsuccess",this.Div2_fileUploadImg2_onsuccess,this);
            this.Div2.form.btnRegImg2.addEventHandler("onclick",this.Div2_btnRegImg2_onclick,this);
            this.Div2.form.btnDelImg2.addEventHandler("onclick",this.Div2_btnDelImg2_onclick,this);
            this.Div2.form.grdImgList2.addEventHandler("oncellclick",this.Div2_grdImgList2_oncellclick,this);
            this.Div2.form.grdImgList2.addEventHandler("onheadclick",this.Div_grd_onheadclick,this);
            this.Div2.form.btnUpImg2.addEventHandler("onclick",this.Div2_btnUpImg2_onclick,this);
            this.Div2.form.btnDownImg2.addEventHandler("onclick",this.Div2_btnDownImg2_onclick,this);
            this.Div2.form.btnRegImgMov1.addEventHandler("onclick",this.Div2_btnRegMov2_onclick,this);
            this.Div2.form.btnDelMov1.addEventHandler("onclick",this.Div2_btnDelMov2_onclick,this);
            this.Div2.form.grdMovList2.addEventHandler("oncelldblclick",this.Div2_grdMovList2_oncelldblclick,this);
            this.Div2.form.grdMovList2.addEventHandler("onheadclick",this.Div_grd_onheadclick,this);
            this.Div2.form.btnUpMov1.addEventHandler("onclick",this.Div2_btnUpMov2_onclick,this);
            this.Div2.form.btnDownMov1.addEventHandler("onclick",this.Div2_btnDownMov2_onclick,this);
            this.Div2.form.fileUploadStillcut2.addEventHandler("onitemchanged",this.Div2_fileUploadStillcut2_onitemchanged,this);
            this.Div2.form.fileUploadStillcut2.addEventHandler("onsuccess",this.Div2_fileUploadStillcut2_onsuccess,this);
            this.Div2.form.btnRegStillcut2.addEventHandler("onclick",this.Div2_btnRegStillcut2_onclick,this);
            this.Div2.form.btnDelStillcut2.addEventHandler("onclick",this.Div2_btnDelStillcut2_onclick,this);
            this.Div2.form.grdStillcutList2.addEventHandler("oncellclick",this.Div2_grdStillcutList2_oncellclick,this);
            this.Div2.form.grdStillcutList2.addEventHandler("onheadclick",this.Div_grd_onheadclick,this);
            this.Div2.form.btnDownStillcut1.addEventHandler("onclick",this.Div2_btnDownStillcut2_onclick,this);
            this.Div2.form.btnUpStillcut1.addEventHandler("onclick",this.Div2_btnUpStillcut2_onclick,this);
            this.Div3.form.GridCatg.addEventHandler("oncloseup",this.Div3_GridCatg_oncloseup,this);
            this.Div3.form.btnAdd.addEventHandler("onclick",this.Div3_btnAdd_onclick,this);
            this.Div3.form.btnDel.addEventHandler("onclick",this.Div3_btnDel_onclick,this);
            this.Div4.form.btnAdd.addEventHandler("onclick",this.Div4_btnAdd_onclick,this);
            this.Div4.form.btnDel.addEventHandler("onclick",this.Div4_btnDel_onclick,this);
            this.Div5.form.edtPriceKr.addEventHandler("oninput",this.Div5_edtPriceKr_oninput,this);
            this.Div5.form.rdPriceDispYN.addEventHandler("canitemchange",this.Div5_rdPriceDispYN_canitemchange,this);
            this.Div6.form.btnWeek1.addEventHandler("onclick",this.Div6_btnWeek1_onclick,this);
            this.Div6.form.btnWeek2.addEventHandler("onclick",this.Div6_btnWeek2_onclick,this);
            this.Div6.form.btnWeek3.addEventHandler("onclick",this.Div6_btnWeek3_onclick,this);
            this.Div6.form.btnWeek4.addEventHandler("onclick",this.Div6_btnWeek4_onclick,this);
            this.Div1.form.fileUploadImg1.addEventHandler("onitemchanged",this.Div1_fileUploadImg1_onitemchanged,this);
            this.Div1.form.fileUploadImg1.addEventHandler("onsuccess",this.Div1_fileUploadImg1_onsuccess,this);
            this.Div1.form.fileUploadMov1.addEventHandler("onitemchanged",this.Div1_fileUploadMov1_onitemchanged,this);
            this.Div1.form.fileUploadMov1.addEventHandler("onsuccess",this.Div1_fileUploadMov1_onsuccess,this);
            this.Div1.form.btnSearchSeller.addEventHandler("onclick",this.Div1_btnSearchSeller_onclick,this);
            this.Div1.form.edtProdNmKr.addEventHandler("oninput",this.Div1_edtProdNmKr_oninput,this);
            this.Div1.form.edtProdNmCh.addEventHandler("oninput",this.Div1_edtProdNmCh_oninput,this);
            this.Div1.form.taProdExpKr.addEventHandler("oninput",this.Div1_taProdExpKr_oninput,this);
            this.Div1.form.taProdExpCh.addEventHandler("oninput",this.Div1_taProdExpCh_oninput,this);
            this.Div1.form.grdImgList1.addEventHandler("oncellclick",this.Div1_grdImgList1_oncellclick,this);
            this.Div1.form.grdImgList1.addEventHandler("onheadclick",this.Div_grd_onheadclick,this);
            this.Div1.form.btnDelImg1.addEventHandler("onclick",this.Div1_btnDelImg1_onclick,this);
            this.Div1.form.btnUpImg1.addEventHandler("onclick",this.Div1_btnUpImg1_onclick,this);
            this.Div1.form.btnDownImg1.addEventHandler("onclick",this.Div1_btnDownImg1_onclick,this);
            this.Div1.form.btnRegImg1.addEventHandler("onclick",this.Div1_btnRegImg1_onclick,this);
            this.Div1.form.btnRegImgMov1.addEventHandler("onclick",this.Div1_btnRegMov1_onclick,this);
            this.Div1.form.btnDelMov1.addEventHandler("onclick",this.Div1_btnDelMov1_onclick,this);
            this.Div1.form.grdMovList1.addEventHandler("oncelldblclick",this.Div1_grdMovList1_oncelldblclick,this);
            this.Div1.form.grdMovList1.addEventHandler("onheadclick",this.Div_grd_onheadclick,this);
            this.Div1.form.btnUpMov1.addEventHandler("onclick",this.Div1_btnUpMov1_onclick,this);
            this.Div1.form.btnDownMov1.addEventHandler("onclick",this.Div1_btnDownMov1_onclick,this);
            this.Div1.form.fileUploadStillcut1.addEventHandler("onitemchanged",this.Div1_fileUploadStillcut1_onitemchanged,this);
            this.Div1.form.fileUploadStillcut1.addEventHandler("onsuccess",this.Div1_fileUploadStillcut1_onsuccess,this);
            this.Div1.form.btnRegStillcut1.addEventHandler("onclick",this.Div1_btnRegStillcut1_onclick,this);
            this.Div1.form.btnDelStillcut1.addEventHandler("onclick",this.Div1_btnDelStillcut1_onclick,this);
            this.Div1.form.grdStillcutList1.addEventHandler("oncellclick",this.Div1_grdStillcutList1_oncellclick,this);
            this.Div1.form.grdStillcutList1.addEventHandler("onheadclick",this.Div_grd_onheadclick,this);
            this.Div1.form.btnDownStillcut1.addEventHandler("onclick",this.Div1_btnDownStillcut1_onclick,this);
            this.Div1.form.btnUpStillcut1.addEventHandler("onclick",this.Div1_btnUpStillcut1_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.Static00_onclick,this);
            this.btnRegister.addEventHandler("onclick",this.btnRegister_onclick,this);
            this.dsProdCatg.addEventHandler("onrowposchanged",this.dsProdCatg_onrowposchanged,this);
        };

        this.loadIncludeScript("RP_71864_ProdDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
