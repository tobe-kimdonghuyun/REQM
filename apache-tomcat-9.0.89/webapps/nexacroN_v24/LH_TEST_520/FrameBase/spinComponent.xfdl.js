(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("spinComponent");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,574);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"BIND_TEST\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSpin","70","107","270","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("ucirculation").set("");
            obj.getSetter("udisplaycomma").set("");
            obj.getSetter("uincrement").set("");
            obj.getSetter("umax").set("");
            obj.getSetter("umin").set("");
            obj.getSetter("uvalue").set("");
            obj.getSetter("utext").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btnIncrease",null,"0","50","50%","0",null,null,null,null,null,this.divSpin.form);
            obj.set_taborder("0");
            obj.set_text("▲");
            this.divSpin.addChild(obj.name, obj);

            obj = new Button("btnDecrease",null,"btnIncrease:0","50",null,"0","0",null,null,null,null,this.divSpin.form);
            obj.set_taborder("1");
            obj.set_text("▼");
            this.divSpin.addChild(obj.name, obj);

            obj = new MaskEdit("medSpin","0","0",null,null,"btnIncrease:0","0",null,null,null,null,this.divSpin.form);
            obj.set_taborder("2");
            obj.set_value("0");
            this.divSpin.addChild(obj.name, obj);

            obj = new Spin("spn00","325","30","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetValue","15","212","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("get value");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetText","15.00","250","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("get text");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetValue","15.00","288","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("set value");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetValue","btnSetValue:6.00","288","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetCirculation","15","326","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("set ucirculation");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetDisplay","15.00","364","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("set udisplaycomma");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetIncrement","15.00","402","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("set uincrement");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMax","15.00","440","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set max");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMin","15.00","478","125","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("set min");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetIncrem","146.00","404","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMax","146.00","440","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSetMin","146.00","476","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSetCircul","146","326","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboSetCircul_innerdataset = new nexacro.NormalDataset("cboSetCircul_innerdataset", obj);
            cboSetCircul_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(cboSetCircul_innerdataset);
            obj.set_text("true");
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSetDisplay","146.00","366","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboSetDisplay_innerdataset = new nexacro.NormalDataset("cboSetDisplay_innerdataset", obj);
            cboSetDisplay_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">true</Col><Col id=\"datacolumn\">true</Col></Row><Row><Col id=\"codecolumn\">false</Col><Col id=\"datacolumn\">false</Col></Row></Rows>");
            obj.set_innerdataset(cboSetDisplay_innerdataset);
            obj.set_text("true");
            obj.set_value("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSpin.form
            obj = new Layout("default","",0,0,this.divSpin.form,function(p){});
            this.divSpin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,574,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSpin.form.medSpin","value","ds00","BIND_TEST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("spinComponent.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfnSpinInit(this, this.divSpin); //gfnFormOnload 에추가
        };

        this.ds00_oncolumnchanged = function(obj,e)
        {
        	//바인드시 필수추가
        	if( e.columnid == "BIND_TEST"){
        		this.gfnSetSpinValue(this.divSpin, e.newvalue);
        	}
        };

        this.gfnSpinInit = function (pForm, obj)
        {
        	//스핀버튼에 의해 value 속성값이 max/min 값에 도달했을 때 값을 순환시킬지 설정하는 속성입니다.
        	if(this.gfnIsNull(obj.ucirculation)) obj.ucirculation  = "false";

        	//Spin의 편집영역에서 천단위로 콤마를 표시할지 설정하는 속성입니다.
        	if(this.gfnIsNull(obj.udisplaycomma)) obj.udisplaycomma  = "false";

        	//Spin 에서 스핀버튼 클릭 시 value 속성값을 증가/감소시킬 값을 설정하는 속성입니다.
        	if(this.gfnIsNull(obj.uincrement)) obj.uincrement  = "1";

        	//value 속성이 가질 수 있는 최대값을 설정하는 속성입니다.
        	if(this.gfnIsNull(obj.umax)) obj.umax  = "10000";

        	//value 속성이 가질 수 있는 최소값을 설정하는 속성입니다.
        	if(this.gfnIsNull(obj.umax)) obj.umax  = "0";

        	//Spin 이 갖는 실제 값을 설정하는 속성입니다.
        	if(this.gfnIsNull(obj.uvalue)) obj.uvalue  = 0;

        	//Spin 에 표시되는 값을 갖는 속성입니다.
        	if(this.gfnIsNull(obj.utext)) obj.utext  = "";

        	this.gfnSetSpinValue(obj, obj.uvalue);
        };

        this.gfnSetSpinValue = function (obj, val)
        {
        	let sVal = val;

        	if(this.gfnIsNull(sVal)) {
        		sVal = null;
        	}else{
        		let nValue 	= nexacro.toNumber(sVal);
        		let nMax 	= nexacro.toNumber(obj.umax);
        		let nMin 	= nexacro.toNumber(obj.umin);

        		if( obj.ucirculation == "true"){
        			if( nValue > nMax ) sVal = nMin;
        			if( nValue < nMin ) sVal = nMax;
        		}else{
        			if( nValue > nMax ) sVal = nMax;
        			if( nValue < nMin ) sVal = nMin;
        		}
        	}

        	obj.uvalue = sVal;
        	obj.form.medSpin.value = sVal;

        	this.gfnSetSpinText(obj);
        	this.gfnSetSpinButton(obj);
        };

        this.gfnSetSpinText = function (obj)
        {
        	if( this.gfnIsNull(obj.uvalue)) {
        		obj.form.medSpin.value = null;
        	}else{
        		if( obj.udisplaycomma == "true"){
        			obj.form.medSpin.format = "9,999";
        		}else{
        			obj.form.medSpin.format = "9999";
        		}
        	}
        	obj.form.medSpin.value = obj.uvalue;
        	obj.utext = obj.form.medSpin.text;
        };

        this.gfnSetSpinButton = function (obj)
        {
        	if( obj.ucirculation == "true"){
        		obj.form.btnIncrease.enable = true;
        		obj.form.btnDecrease.enable = true;
        	}else{
        		let nValue 	= nexacro.toNumber(obj.uvalue);
        		let nMax 	= nexacro.toNumber(obj.umax);
        		let nMin 	= nexacro.toNumber(obj.umin);

        		if( this.gfnIsNull(nValue)) nValue = obj.umin;

        		if( nValue >= nMax ) obj.form.btnIncrease.enable = false;
        		else obj.form.btnIncrease.enable = true;

        		if( nValue <= nMin ) obj.form.btnDecrease.enable = false;
        		else obj.form.btnDecrease.enable = true;
        	}
        };

        this.gfnSpinIncrease_onclick = function(obj,e)
        {
        	let oDiv	= obj.parent.parent;
        	let nValue 	= nexacro.toNumber(oDiv.uvalue);
        	let nMax 	= nexacro.toNumber(oDiv.umax);
        	let nMin 	= nexacro.toNumber(oDiv.umin);
        	let nIncre	= nexacro.toNumber(oDiv.uincrement);

        	if( this.gfnIsNull(nValue)) nValue = 0;
        	let nVal = nValue + nIncre;
        	if( oDiv.ucirculation == "true"){
        		if( nVal > nMax ) nVal = nMin;
        	}else{
        		if( nVal > nMax ) nVal = nMax;
        		if( nVal < nMin ) nVal = nMin;
        	}

        	this.gfnSetSpinValue(oDiv, nVal);
        };

        this.gfnSpinDecrease_onclick = function(obj,e)
        {
        	let oDiv	= obj.parent.parent;
        	let nValue  = nexacro.toNumber(oDiv.uvalue);
        	let nMax 	= nexacro.toNumber(oDiv.umax);
        	let nMin 	= nexacro.toNumber(oDiv.umin);
        	let nIncre  = nexacro.toNumber(oDiv.uincrement);

        	if( this.gfnIsNull(nValue)) nValue = 0;

        	let nVal = nValue - nIncre;
        	if( oDiv.ucirculation == "true"){
        		if( nVal > nMax ) nVal = nMin;
        	}else{
        		if( nVal > nMax ) nVal = nMax;
        		if( nVal < nMin ) nVal = nMin;
        	}

        	this.gfnSetSpinValue(oDiv, nVal);
        };

        this.gfnSpinEdt_oninput = function(obj,e)
        {
        	let oDiv = obj.parent.parent;
        	let nVal = -1;
        	if( !this.gfnIsNull(obj.value)) {
        		nVal = nexacro.toNumber(obj.value);
        	}else{
        		nVal = nexacro.toNumber(oDiv.umin);
        	}

        	this.gfnSetSpinValue(oDiv, nVal);
        };

        this.gfnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this.btnGetValue_onclick = function(obj,e)
        {
        	alert( this.divSpin.uvalue);
        };

        this.btnGetText_onclick = function(obj,e)
        {
        	alert(this.divSpin.utext);
        };

        this.btnSetValue_onclick = function(obj,e)
        {
        	if( this.gfnIsNull(this.edtSetValue.value)) return;

        	this.gfnSetSpinValue(this.divSpin, this.edtSetValue.value);
        };

        this.btnSetCirculation_onclick = function(obj,e)
        {
        	if( this.gfnIsNull(this.cboSetCircul.value)) return;

        	this.divSpin.ucirculation = this.cboSetCircul.value;
        	this.gfnSetSpinValue(this.divSpin, this.divSpin.form.medSpin.value);
        };

        this.btnSetDisplay_onclick = function(obj,e)
        {
        	if( this.gfnIsNull(this.cboSetDisplay.value)) return;

        	this.divSpin.udisplaycomma = this.cboSetDisplay.value;
        	this.gfnSetSpinValue(this.divSpin, this.divSpin.form.medSpin.value);
        };

        this.btnSetIncrement_onclick = function(obj,e)
        {
        	if( this.gfnIsNull(this.edtSetIncrem.value)) return;

        	this.divSpin.uincrement = this.edtSetIncrem.value;
        	this.gfnSetSpinValue(this.divSpin, this.divSpin.form.medSpin.value);
        };

        this.btnSetMax_onclick = function(obj,e)
        {
        	if( this.gfnIsNull(this.edtSetMax.value)) return;

        	this.divSpin.umax = this.edtSetMax.value;
        	this.gfnSetSpinValue(this.divSpin, this.divSpin.form.medSpin.value);
        };

        this.btnSetMin_onclick = function(obj,e)
        {
        	if( this.gfnIsNull(this.edtSetMin.value)) return;

        	this.divSpin.umin = this.edtSetMin.value;
        	this.gfnSetSpinValue(this.divSpin, this.divSpin.form.medSpin.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSpin.form.btnIncrease.addEventHandler("onclick",this.gfnSpinIncrease_onclick,this);
            this.divSpin.form.btnDecrease.addEventHandler("onclick",this.gfnSpinDecrease_onclick,this);
            this.divSpin.form.medSpin.addEventHandler("oninput",this.gfnSpinEdt_oninput,this);
            this.btnGetValue.addEventHandler("onclick",this.btnGetValue_onclick,this);
            this.btnGetText.addEventHandler("onclick",this.btnGetText_onclick,this);
            this.btnSetValue.addEventHandler("onclick",this.btnSetValue_onclick,this);
            this.btnSetCirculation.addEventHandler("onclick",this.btnSetCirculation_onclick,this);
            this.btnSetDisplay.addEventHandler("onclick",this.btnSetDisplay_onclick,this);
            this.btnSetIncrement.addEventHandler("onclick",this.btnSetIncrement_onclick,this);
            this.btnSetMax.addEventHandler("onclick",this.btnSetMax_onclick,this);
            this.btnSetMin.addEventHandler("onclick",this.btnSetMin_onclick,this);
            this.ds00.addEventHandler("cancolumnchange",this.ds00_cancolumnchange,this);
            this.ds00.addEventHandler("oncolumnchanged",this.ds00_oncolumnchanged,this);
        };
        this.loadIncludeScript("spinComponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
