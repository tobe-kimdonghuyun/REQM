(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SimplePyramid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(768,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_browser_lanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"value\">220</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"value\">890</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"value\">120</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"value\">320</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"value\">550</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"value\">2000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PyramidChart("PyramidChart00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("binddataset").set("ds_browser_lanking");
            obj.getSetter("categorycolumn").set("bind:value");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",768,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SimplePyramid.xfdl", function() {
        this.numFormat = function(nNumber,nDetail)
        {
        	if (nNumber == null)	return "";
        	if (nDetail	== null)	nDetail	= 0;

        	nNumber				= parseFloat(nNumber);

        	if ( !afn_utils.isNull(nDetail))
        		nNumber	=  nexacro.round( nNumber, nDetail);
        		//nNumber				=  afn_utils.roundPrecision(nNumber, nDetail);//Math.round(nNumber, nDetail);

        	var strNumber		= new String(nNumber);
        	var arrNumber		= strNumber.split(".");
        	var strFormatNum	= "";
        	var j = 0;

        	for ( i = arrNumber[0].length - 1; i >= 0; i--)
        	{
        		if (i != strNumber.length && j == 3)
        		{
        			strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
        			j = 0;
        		}
        		else
        		{
        			strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
        		}
        		j++;
        	}

        	if (arrNumber.length > 1)	strFormatNum = strFormatNum + "." + arrNumber[1];

        	return strFormatNum;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("SimplePyramid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
