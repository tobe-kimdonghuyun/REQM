(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pagging");
            this.set_titletext("페이징");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnFirst","0","0","36",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_first");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","35","0","36",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_prev");
            this.addChild(obj.name, obj);

            obj = new Button("btn0","70","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","104","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","138","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","172","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn4","206","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn5","240","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn6","274","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn7","308","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn8","342","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btn9","376","0","35",null,null,"0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","410","0","36",null,null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_next");
            this.addChild(obj.name, obj);

            obj = new Button("btnLast",null,"0","35",null,"0","0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("false");
            obj.set_cssclass("btn_paging_end");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pagging.xfdl", function() {
        this.fv_listCount = 10;
        this.fv_pageCount = 20;
        this.fv_pagesCount;
        this.fv_totalCount;
        this.fv_pageIdx;
        this.fv_listIdx;

        this.pagging_onload = function(obj,e)
        {
        };

        this.Button_onclick = function(obj,e)
        {
        	var sPage = obj.name.replace("btn", "");
        	this.setPage(sPage);
        };

        this.BtnNum_onclick = function(obj,e)
        {
        	var sPage = obj.text;
        	this.setPage(sPage);
        };

        this.initPages = function(totalCount, pageCount)
        {
        	this.fv_totalCount = totalCount;
        	this.fv_pageCount = pageCount;
        	this.fv_pagesCount = nexacro.ceil(this.fv_totalCount/this.fv_pageCount);

        	if(this.fv_pagesCount>1)
        	{
        		this.btnFirst.set_visible(true);
        		this.btnPrev.set_visible(true);
        		this.btnNext.set_visible(true);
        		this.btnLast.set_visible(true);

        		this.parent.set_visible(true);
        	}else
        	{
        		this.parent.set_visible(false);
        	}
        	this.setPage1();
        }

        this.setPage1 = function()
        {
        	var sPage = 1;
        	var nPageNum;

        	if(sPage=="First")
        	{
        		this.fv_pageIdx = 0;
        		this.fv_listIdx = 0;
        	}
        	else if(sPage=="Last")
        	{
        		this.fv_pageIdx = this.fv_pagesCount - 1;
        	}
        	else if(sPage=="Prev")
        	{
        		this.fv_pageIdx = this.fv_pageIdx-1;
        	}
        	else if(sPage=="Next")
        	{
        		this.fv_pageIdx = this.fv_pageIdx+1;
        	}else
        	{
        		this.fv_pageIdx = nexacro.toNumber(sPage)-1;
        	}

        	if(this.fv_pageIdx<0)this.fv_pageIdx = 0;
        	else if(this.fv_pageIdx>this.fv_pagesCount-1)this.fv_pageIdx = this.fv_pagesCount-1;

        	this.fv_listIdx = nexacro.floor(this.fv_pageIdx / this.fv_listCount);

        	for(i=0;i<this.fv_listCount;i++)
        	{
        		nPageNum = (this.fv_listIdx * this.fv_listCount) + i + 1;

        		objBtnPage = this.components["btn"+i];

        		if(nPageNum<=this.fv_pagesCount)
        		{
        			objBtnPage.set_text(nPageNum);
        			objBtnPage.set_visible(true);


        			if (nPageNum==this.fv_pageIdx+1) {
        				objBtnPage.set_enable(false);
        				objBtnPage.set_cssclass("btn_paging_num_S");
        			} else {
        				 objBtnPage.set_enable(true);
        				objBtnPage.set_cssclass("btn_paging_num");
        			}

        		}else
        		{
        			objBtnPage.set_visible(false);
        		}
        	}

        //	this.parent.parent.setPageAfter(this.fv_pageIdx+1);
        }

        this.setPage = function(sPage)
        {
        	var nPageNum;

        	if(sPage=="First")
        	{
        		this.fv_pageIdx = 0;
        		this.fv_listIdx = 0;
        	}
        	else if(sPage=="Last")
        	{
        		this.fv_pageIdx = this.fv_pagesCount - 1;
        	}
        	else if(sPage=="Prev")
        	{
        		this.fv_pageIdx = this.fv_pageIdx-1;
        	}
        	else if(sPage=="Next")
        	{
        		this.fv_pageIdx = this.fv_pageIdx+1;
        	}else
        	{
        		this.fv_pageIdx = nexacro.toNumber(sPage)-1;
        	}

        	if(this.fv_pageIdx<0)this.fv_pageIdx = 0;
        	else if(this.fv_pageIdx>this.fv_pagesCount-1)this.fv_pageIdx = this.fv_pagesCount-1;

        	this.fv_listIdx = nexacro.floor(this.fv_pageIdx / this.fv_listCount);

        	for(i=0;i<this.fv_listCount;i++)
        	{
        		nPageNum = (this.fv_listIdx * this.fv_listCount) + i + 1;

        		objBtnPage = this.components["btn"+i];

        		if(nPageNum<=this.fv_pagesCount)
        		{
        			objBtnPage.set_text(nPageNum);
        			objBtnPage.set_visible(true);

        			if (nPageNum==this.fv_pageIdx+1) {
        				objBtnPage.set_enable(false);
        				objBtnPage.set_cssclass("btn_paging_num_S");
        			} else {
        				objBtnPage.set_enable(true);
        				objBtnPage.set_cssclass("btn_paging_num");
        			}

        		}else
        		{
        			objBtnPage.set_visible(false);
        		}
        	}

        	this.parent.parent.setPageAfter(this.fv_pageIdx+1);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnFirst.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrev.addEventHandler("onclick",this.Button_onclick,this);
            this.btn0.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn1.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn2.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn3.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn4.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn5.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn6.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn7.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn8.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btn9.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.btnNext.addEventHandler("onclick",this.Button_onclick,this);
            this.btnLast.addEventHandler("onclick",this.Button_onclick,this);
        };
        this.loadIncludeScript("pagging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
