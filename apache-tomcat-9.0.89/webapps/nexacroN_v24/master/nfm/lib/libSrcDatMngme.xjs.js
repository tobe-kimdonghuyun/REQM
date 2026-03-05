//XJS=libSrcDatMngme.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /**
        * @description 	   : 그리드 전체체크/체크해제 실행 함수
        * @param obj	   : 설정 그리드
        * @param e		   : 이벤트 오브젝트
        * @return          : 없음
        */
        this.gfnSetGridCheckAll = function (obj, e)
        {
        	var sChk;
        	var sVal;
        	var objDs;
        	var nCellIdx  = e.cell;
        	var sColumnId;

        	//그리드에 연결된 데이터셋 가져오기
        	objDs  = obj.getBindDataset();

        	//데이터셋에 데이터가 없을 경우 리턴
        	if(objDs.rowcount < 1) return;

        	//전체 체크/체크해제할 컬럼명 구하기
        	sColumnId = obj.getCellProperty("body", nCellIdx, "text");
        	sColumnId = sColumnId.toString().replace("bind:", "");

        	//Head의 현재 Check설정 값 가져오기
        	sVal = obj.getCellProperty("head", nCellIdx, "text");

        	//현재 체크상태일 경우
        	if (sVal == "1" ) {
        		//Head의 값을 체크해제로 설정
        		obj.setCellProperty("head", nCellIdx, "text", "0");
        		sChk="0";
        	}
        	//현재 체크해제상태일 경우
        	else {
        		//Head의 값을 체크로 설정
        		obj.setCellProperty("head", nCellIdx, "text", "1");
        		sChk="1";
        	}


        	//성능 개선을 위해 이벤트 발생 정지
        	objDs.set_enableevent(false);

        	// Body에 전체 체크/체크해제 상태 적용
        	for(var i=0 ; i< objDs.rowcount ; i++) {
        		objDs.setColumn(i, sColumnId, sChk);
        	}

        	//성능 개선을 위해 이벤트 발생 재실행
        	objDs.set_enableevent(true);
        };

        /**
        * @description 	   : framWork - divWork - set- url
        * @param 		   :
        * @return          :
        */
        this.gfnFramWorkDivWorkSetUrl = function ( sId, sUrl )
        {
        	this.parent.parent.set_enableevent(false);
        	this.parent.parent.set_height(768);
        	this.go( sUrl );
        	this.parent.parent.set_enableevent(true);
        };

        /**
        * @description 	   : framWork - divWork - set- url
        * @param 		   :
        * @return          :
        */
        this.gfnFramWorkDivWorkSetUrlSetParam = function ( sId, sUrl, oArg )
        {
        	/*
        	var dsParam = new Dataset;
        	for (var key in oArg) {
        		if (oArg.hasOwnProperty(key)) {
        			dsParam.addColumn( key, "string", 256 );
        		}
        	}
        	dsParam.addRow();
        	for (var key in oArg) {
        		if (oArg.hasOwnProperty(key)) {
        			dsParam.setColumn(0, key, oArg[key]);
        		}
        	}
        	this.parent.parent.addChild("dsParam", dsParam);
        	*/
        	this.parent.parent.addChild("param", oArg);

        	this.parent.parent.set_enableevent(false);
        	this.parent.parent.set_height(768);
        	this.go( sUrl );
        	this.parent.parent.set_enableevent(true);
        };

        /**
        * @description 	   : framWork - divWork - set- url
        * @param 		   :
        * @return          :
        */
        this.gfnFramWorkDivWorkSetUrlGetParam = function ()
        {

        //	var cllctSeq = this.parent.parent.param["cllctSeq"];
        //	this.parent.parent.param.destroy();
        	var param = this.parent.parent.param;
        	this.parent.parent.removeChild( "param" );
        	return param;

        };

        /**
         * @class 정규식을 이용한 trim 구현 - 문자열 전체의 공백 제거 <br>
         * @param {String} sValue - 변경하려는 값
         * @return {String} 문자열
        */
        this.gfnAllTrim = function(sValue)
        {
            var objValue = new String(sValue);
            var sRtnValue="";
            var i;

            if ( sValue != null ) {
                for ( var i = 0; i < objValue.length; i++ ) {
                    if ( objValue.charAt(i) != " " ) {
                        sRtnValue = sRtnValue + objValue.charAt(i);
                    }
                }
            } else {
                return -1;
            }

            return sRtnValue;
        };

        /**
         * @class 시간 형식에 맞는지 Check 한다. <br>
         * @param {String} strTime - 6자리의 숫자로 된 내부시간형식(HHMMSS)
         * @return {Boolean}
         */
        this.gfnIsTime = function(strTime)
        {
        	strTime = this.gfnAllTrim(strTime);

        	if (strTime.length != 6) {
        		return false;
        	}

        	var t01 = Number(strTime.substr(0, 2));
        	var t02 = Number(strTime.substr(2, 2));
        	var t03 = Number(strTime.substr(4, 2));

        	if((t01 < 0 || t01 > 23) || (t02 < 0 || t02 > 59) || (t03 < 0 || t03 > 59)) {
        		return false;
        	} else {
        		return true;
        	}
        };

        /**
        * @description 	   : JsonToDataset
        * @param 		   :
        * @return          :
        */
        this.gfnJsonToDataset = function (th, json, dataset)
        {
        	dataset.clear();
        	dataset.loadJSON( json );

        	/*
        	var ds = new Dataset;
        	ds.load();
        	th.addChild("DatasetID", ds);
        	th.DatasetID.loadJSON( json );

        	for(var i=0; i<th.DatasetID.getColCount(); i++) {
        		var colID = th.DatasetID.getColID(i);
        		dataset.addColumn(colID, "string");
        	}
        	for(var i=0; i<th.DatasetID.rowcount; i++) {
        		dataset.addRow();
        		dataset.copyRow(i, th.DatasetID, i);
        	}

        	th.removeChild( "DatasetID" );
        	*/
        };

        /**
        * @description 	   : DatasetToJson
        * @param 		   :
        * @return          :
        */
        this.gfnDatasetToJson = function (th, dataset)
        {
        	var ds = new Dataset;
        	ds.load();
        	th.addChild("DatasetID", ds);

        	for(var i=0; i<dataset.getColCount(); i++) {
        		var colID = dataset.getColID(i);
        		th.DatasetID.addColumn(colID, "string");
        	}
        	for(var i=0; i<dataset.rowcount; i++) {
        		th.DatasetID.addRow();
        		th.DatasetID.copyRow(i, dataset, i);
        	}

        	var json = th.DatasetID.saveJSON();
        	th.removeChild( "DatasetID" );

        	return json;

        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
