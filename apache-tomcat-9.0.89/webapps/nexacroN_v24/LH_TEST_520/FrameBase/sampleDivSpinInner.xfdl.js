(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDivSpinInner");
            this.set_titletext("divSpin연결폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtSpin","0","0",null,null,"50","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("직접");
            this.addChild(obj.name, obj);

            obj = new Button("btnIncrease",null,"0","50","50%","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("▲");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btnDecrease",null,"btnIncrease:0","50",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("▼");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,50,this,function(p){});
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleDivSpinInner.xfdl", function() {
        this.ucirculation = "";
        this.udisplaycomma = "";
        this.udisplaynulltext = "";
        this.uincrement = "";
        this.umax = "";
        this.umin = "";
        this.uunit = "";
        this.uvalue = "";
        this.utext = "";
        this.ualign = "";
        this.oDiv = null;

        //접근성관련옵션
        //edit
        this.ueditaccessibilityenable="";
        this.ueditaccessibilitylabel="";
        this.ueditaccessibilitydescription="";
        //increase버튼
        this.uincreaseaccessibilitydescription="";
        this.uincreaseaccessibilityenable="";
        this.uincreaseaccessibilitylabel="";
        //decrease버튼
        this.udecreaseaccessibilitydescription="";
        this.udecreaseaccessibilityenable="";
        this.udecreaseaccessibilitylabel="";

        this.form_onload = function(obj,e)
        {
        	this.oDiv 				= this.parent;

        	//Spin 의 value 속성값이 null 또는 undefined 일 때 Spin 에 표시될 대체 문자열을 설정하는 속성입니다.
        	this.udisplaynulltext 	= this.oDiv.udisplaynulltext;
        	if(this.gfnIsNull(this.udisplaynulltext)) this.udisplaynulltext  = "";
        	else{
        		this.edtSpin.displaynulltext = this.udisplaynulltext;
        	}

        	//스핀버튼에 의해 value 속성값이 max/min 값에 도달했을 때 값을 순환시킬지 설정하는 속성입니다.
        	this.ucirculation 		= this.oDiv.ucirculation;
        	if(this.gfnIsNull(this.ucirculation)) this.ucirculation  = "false";

        	//Spin의 편집영역에서 천단위로 콤마를 표시할지 설정하는 속성입니다.
        	this.udisplaycomma 		= this.oDiv.udisplaycomma;
        	if(this.gfnIsNull(this.udisplaycomma)) this.udisplaycomma  = "false";

        	//Spin 에서 스핀버튼 클릭 시 value 속성값을 증가/감소시킬 값을 설정하는 속성입니다.
        	this.uincrement 		= this.oDiv.uincrement;
        	if(this.gfnIsNull(this.uincrement)) this.uincrement  = "1";

        	//value 속성이 가질 수 있는 최대값을 설정하는 속성입니다.
        	this.umax 				= this.oDiv.umax;
        	if(this.gfnIsNull(this.umax)) this.umax  = "1000";

        	//value 속성이 가질 수 있는 최소값을 설정하는 속성입니다.
        	this.umin 				= this.oDiv.umin;
        	if(this.gfnIsNull(this.umax)) this.umax  = "0";

        	//단위값 value + unit 표시로 text에 반영됩니다.
        	this.uunit 				= this.oDiv.uunit;
        	if(this.gfnIsNull(this.umax)) this.umax  = "";

        	//Spin 이 갖는 실제 값을 설정하는 속성입니다.
        	this.uvalue = this.oDiv.uvalue;
        	if(this.gfnIsNull(this.uvalue)) this.uvalue  = null;

        	//Spin 에 표시되는 값을 갖는 속성입니다.
        	this.utext 	= this.oDiv.utext;
        	if(this.gfnIsNull(this.utext)) this.utext  = "";

        	//text align
        	this.ualign 	= this.oDiv.ualign;
        	if(this.gfnIsNull(this.ualign)) this.ualign  = "right";
        	this.edtSpin.textAlign = this.ualign;

        	//접근성관련옵션
        	//edit
        	//enable
        	this.ueditaccessibilityenable=this.oDiv.editaccessibilityenable;
        	if(this.gfnIsNull(this.ueditaccessibilityenable)) this.ueditaccessibilityenable  = "true";
        	this.edtSpin.accessibilityenable = this.ueditaccessibilityenable;
        	//label
        	this.ueditaccessibilitylabel=this.oDiv.editaccessibilitylabel;
        	if(this.gfnIsNull(this.ueditaccessibilitylabel)) this.ueditaccessibilitylabel  = "";
        	this.edtSpin.accessibilitylabel = this.ueditaccessibilitylabel;
        	//description
        	this.ueditaccessibilitydescription=this.oDiv.editaccessibilitydescription;
        	if(this.gfnIsNull(this.ueditaccessibilitydescription)) this.ueditaccessibilitydescription  = "";
        	this.edtSpin.accessibilitydescription = this.ueditaccessibilitydescription;
        	//increase버튼
        	//enable
        	this.uincreaseaccessibilityenable=this.oDiv.increaseaccessibilityenable;
        	if(this.gfnIsNull(this.uincreaseaccessibilityenable)) this.uincreaseaccessibilityenable  = "true";
        	this.btnIncrease.accessibilityenable = this.uincreaseaccessibilityenable;
        	//label
        	this.uincreaseaccessibilitylabel=this.oDiv.increaseaccessibilitylabel;
        	if(this.gfnIsNull(this.uincreaseaccessibilitylabel)) this.uincreaseaccessibilitylabel  = "";
        	this.btnIncrease.accessibilitylabel = this.uincreaseaccessibilitylabel;
        	//description
        	this.uincreaseaccessibilitydescription=this.oDiv.increaseaccessibilitydescription;
        	if(this.gfnIsNull(this.uincreaseaccessibilitydescription)) this.uincreaseaccessibilitydescription  = "";
        	this.btnIncrease.accessibilitydescription = this.uincreaseaccessibilitydescription;
        	//decrease버튼
        	//enable
        	this.udecreaseaccessibilityenable=this.oDiv.decreaseaccessibilityenable;
        	if(this.gfnIsNull(this.udecreaseaccessibilityenable)) this.udecreaseaccessibilityenable  = "true";
        	this.btnDecrease.accessibilityenable = this.udecreaseaccessibilityenable;
        	//label
        	this.udecreaseaccessibilitylabel=this.oDiv.decreaseaccessibilitylabel;
        	if(this.gfnIsNull(this.udecreaseaccessibilitylabel)) this.udecreaseaccessibilitylabel  = "";
        	this.btnDecrease.accessibilitylabel = this.udecreaseaccessibilitylabel;
        	//description
        	this.udecreaseaccessibilitydescription=this.oDiv.decreaseaccessibilitydescription;
        	if(this.gfnIsNull(this.udecreaseaccessibilitydescription)) this.udecreaseaccessibilitydescription  = "";
        	this.btnDecrease.accessibilitydescription = this.udecreaseaccessibilitydescription;


        	this.setValue(this.uvalue);
        };

        this.form_bindingvaluechanged = function(obj,e)
        {
        	trace(e.columnid + " e... " + e.newvalue );
        };

        this.editaccessibilityenable = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "true";

        	this.ueditaccessibilityenable = sVal;
        	this.oDiv.editaccessibilityenable = sVal;
        	this.edtSpin.accessibilityenable = val;
        };

        this.editaccessibilitylabel = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "";

        	this.ueditaccessibilitylabel = sVal;
        	this.oDiv.editaccessibilitylabel = sVal;
        	this.edtSpin.accessibilitylabel = val;
        };

        this.editaccessibilitydescription = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "";

        	this.ueditaccessibilitydescription = sVal;
        	this.oDiv.editaccessibilitydescription = sVal;
        	this.edtSpin.accessibilitydescription = val;
        };

        this.increaseaccessibilityenable = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "true";

        	this.uincreaseaccessibilityenable = sVal;
        	this.oDiv.increaseaccessibilityenable = sVal;
        	this.btnIncrease.accessibilityenable = val;
        };

        this.increaseaccessibilitylabel = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "";

        	this.uincreaseaccessibilitylabel = sVal;
        	this.oDiv.increaseaccessibilitylabel = sVal;
        	this.btnIncrease.accessibilitylabel = val;
        };

        this.increaseaccessibilitydescription = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "";

        	this.uincreaseaccessibilitydescription = sVal;
        	this.oDiv.increaseaccessibilitydescription = sVal;
        	this.btnIncrease.accessibilitydescription = val;
        };

        this.decreaseaccessibilityenable = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "true";

        	this.udecreaseaccessibilityenable = sVal;
        	this.oDiv.decreaseaccessibilityenable = sVal;
        	this.btnDecrease.accessibilityenable = val;
        };

        this.decreaseaccessibilitylabel = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "";

        	this.udecreaseaccessibilitylabel = sVal;
        	this.oDiv.decreaseaccessibilitylabel = sVal;
        	this.btnDecrease.accessibilitylabel = val;
        };

        this.decreaseaccessibilitydescription = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "";

        	this.udecreaseaccessibilitydescription = sVal;
        	this.oDiv.decreaseaccessibilitydescription = sVal;
        	this.btnDecrease.accessibilitydescription = val;
        };

        this.align = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "right";

        	this.ualign = sVal;
        	this.oDiv.ualign = sVal;
        	this.edtSpin.textAlign = val;
        };

        this.circulation = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "false";

        	this.ucirculation = sVal;
        	this.oDiv.ucirculation = sVal;
        	this.setButton();
        };

        this.displaycomma = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "false";

        	this.udisplaycomma = sVal;
        	this.oDiv.udisplaycomma = sVal;
        	this.setText();
        };

        this.unit = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "";

        	this.uunit = sVal;
        	this.oDiv.uunit = sVal;
        	this.setText();
        };

        this.increment = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "1";

        	this.uincrement = sVal;
        	this.oDiv.uincrement = sVal;
        };

        this.max = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "1000";

        	this.umax = sVal;
        	this.oDiv.umax = sVal;
        };

        this.min = function (val)
        {
        	let sVal = val;
        	if( this.gfnIsNull(sVal)) sVal = "1000";

        	this.umin = sVal;
        	this.oDiv.umin = sVal;
        };

        this.setButton = function ()
        {
        	if( this.ucirculation == "true"){
        		this.btnIncrease.enable = true;
        		this.btnDecrease.enable = true;
        	}else{
        		let nValue = nexacro.toNumber(this.uvalue);
        		let nMax = nexacro.toNumber(this.umax);
        		let nMin = nexacro.toNumber(this.umin);

        		if( this.gfnIsNull(nValue)) nValue = this.umin;

        		if( nValue >= nMax ) this.btnIncrease.enable = false;
        		else this.btnIncrease.enable = true;

        		if( nValue <= nMin ) this.btnDecrease.enable = false;
        		else this.btnDecrease.enable = true;
        	}
        };

        this.setValue = function (val)
        {
        	let sVal = val;

        	if(this.gfnIsNull(sVal)) {
        		sVal = null;
        	}else{
        		let nValue = nexacro.toNumber(sVal);
        		let nMax = nexacro.toNumber(this.umax);
        		let nMin = nexacro.toNumber(this.umin);
        		if( this.ucirculation == "true"){
        			if( sVal > nMax ) sVal = nMin;
        			if( sVal < nMin ) sVal = nMax;
        		}else{
        			if( sVal > nMax ) sVal = nMax;
        			if( sVal < nMin ) sVal = nMin;
        		}
        	}
        	this.value = sVal;
        	this.uvalue = sVal;
        	this.oDiv.uvalue = sVal;

        	this.setText();
        	this.setButton();
        };

        this.setText = function ()
        {
        	if( this.gfnIsNull(this.uvalue)) {
        		this.edtSpin.value = null;
        	}else{
        		if( this.udisplaycomma == "true"){
        			this.utext = this.gfnAppendComma(this.uvalue);
        		}else{
        			this.utext = this.uvalue
        		}
        		if( !this.gfnIsNull(this.uunit)) this.utext += this.uunit;

        		this.edtSpin.value = this.utext;
        	}
        	this.utext = this.edtSpin.value;
        	this.oDiv.utext = this.edtSpin.value;
        };

        this.getValue = function ()
        {
        	return this.uvalue;
        };

        this.getText = function ()
        {
        	return this.utext;
        };

        this.btnIncrease_onclick = function(obj,e)
        {
        	let nValue = nexacro.toNumber(this.uvalue);
        	let nMax = nexacro.toNumber(this.umax);
        	let nMin = nexacro.toNumber(this.umin);
        	let nIncre = nexacro.toNumber(this.uincrement);

        	if( this.gfnIsNull( nValue)) nValue = 0;
        	let nVal = nValue + nIncre;
        	if( this.ucirculation == "true"){
        		if( nVal > nMax ) nVal = nMin;
        	}else{
        		if( nVal > nMax ) nVal = nMax;
        		if( nVal < nMin ) nVal = nMin;
        	}

        	this.setValue(nVal);
        };

        this.btnDecrease_onclick = function(obj,e)
        {
        	let nValue = nexacro.toNumber(this.uvalue);
        	let nMax = nexacro.toNumber(this.umax);
        	let nMin = nexacro.toNumber(this.umin);
        	let nIncre = nexacro.toNumber(this.uincrement);

        	if( this.gfnIsNull( nValue)) nValue = 0;

        	let nVal = nValue - nIncre;
        	if( this.ucirculation == "true"){
        		if( nVal > nMax ) nVal = nMin;
        	}else{
        		if( nVal > nMax ) nVal = nMax;
        		if( nVal < nMin ) nVal = nMin;
        	}

        	this.setValue(nVal);
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

        this.gfnAppendComma = function (nNumber, nDetail) {
          if (nNumber == null) return "";
          if (nDetail == null) nDetail = 0;

          nNumber = parseFloat(nNumber);
          nNumber = nexacro.round(nNumber, nDetail);

          var strNumber = new String(nNumber);
          var arrNumber = strNumber.split(".");
          var strFormatNum = "";
          var j = 0;

          for (var i = arrNumber[0].length - 1; i >= 0; i--) {
            if (i != strNumber.length && j == 3) {
              strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
              j = 0;
            } else {
              strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
            }
            j++;
          }

          if (arrNumber.length > 1) strFormatNum = strFormatNum + "." + arrNumber[1];

          return strFormatNum;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbindingvaluechanged",this.form_bindingvaluechanged,this);
            this.edtSpin.addEventHandler("onchanged",this.edtSpin_onchanged,this);
            this.btnIncrease.addEventHandler("onclick",this.btnIncrease_onclick,this);
            this.btnDecrease.addEventHandler("onclick",this.btnDecrease_onclick,this);
        };
        this.loadIncludeScript("sampleDivSpinInner.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
