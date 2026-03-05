//XJS=uds_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
         *	대입전형자료제공 UDS 공통 스크립트
         *	@MenuPath	대입전형자료제공
         *	@FileName 	uds_script.xjs
         *	@Creator 	김동업
         *	@CreateDate	2022.08.22
         *	@Desction
         ************** 소스 수정 이력 ***********************************************
         *	date			Modifier			Description
         *******************************************************************************
         *	2022.08.22		김동업				최초 생성
         *******************************************************************************
         */

        /**
         * 대입모집구분명 값 조회
         * @param : coaRcritScCd - 대입모집구분코드
         * @return : coaRcritScNm - 대입모집구분명
         */
        this.udsfGetCoaRcritScNm = function(pv_coaRcritScCd){
        	var coaRcritScNm = "";
        	var coaRcritScCd = pv_coaRcritScCd;
        	if(this.smfIsNull(coaRcritScCd)){
        		coaRcritScCd = this.smfIsNull(nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd")) ? "" : nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd");
        	}
        	switch (coaRcritScCd) {
        		case "1":
        			coaRcritScNm = "정시";
        		break;
        		case "2":
        			coaRcritScNm = "수시";
        		break;
        		case "3":
        			coaRcritScNm = "정시(사전운영)";
        		break;
        		case "4":
        			coaRcritScNm = "수시(사전운영)";
        		break;
        		default:
        			coaRcritScNm = "";
        		break;
        	}
        	return coaRcritScNm;
        }

        /**
         * 대입전형자료경로 조회
         * @return : coaDataPath - 대입전형자료경로
         */
        this.udsfGetCoaDataPath = function(){
        	return nexacro.getPrivateProfile(this.udsv_coaDataPathValue);
        }

        /**
         * 대입전형자료수신경로 조회
         * @return : coaDataPath - 대입전형자료경로
         */
        this.udsfGetCoaDataDownPath = function(){
        	return nexacro.getPrivateProfile(this.udsv_coaDataPathValue) + "\\" + this.udsv_coaDataDownDir + "\\";
        }

        /**
         * 대입전형자료블라인드경로 조회
         * @return : coaDataPath - 대입전형자료경로
         */
        this.udsfGetCoaDataBlindPath = function(){
        	return nexacro.getPrivateProfile(this.udsv_coaDataPathValue) + "\\" + this.udsv_coaDataBlindDir + "\\";
        }

        /**
         * 대입전형자료경로 조회
         * @return : coaDataPath - 대입전형자료경로
         */
        this.udsfGetCoaDataDecrPath = function(){
        	return nexacro.getPrivateProfile(this.udsv_coaDataPathValue) + "\\" + this.udsv_coaDataDecrDir + "\\";
        }

        /**
         * 대입전형자료상세경로 조회
         * @return : coaDataDtlPath - 대입전형자료상세경로
         */
        this.udsfGetCoaDataDtlPath = function(coaDataPath){
        	var coaDataDtlPath = "";

        	if(this.smfIsNull(coaDataPath)){
        		coaDataPath = nexacro.getPrivateProfile(this.udsv_coaDataPathValue);
        	}
        	// coaDataDtlPath += "[2024학년도 수시 전형자료경로]";
        	coaDataDtlPath += "- 전형자료 수신 경로 :\n   " + coaDataPath + "\\" + this.udsv_coaDataDownDir + "\\";
        	coaDataDtlPath += "\n- 블라인드자료 복호화 경로 :\n   " + coaDataPath + "\\" + this.udsv_coaDataBlindDir + "\\";
        	coaDataDtlPath += "\n- 블라인드해제자료 복호화 경로 :\n   " + coaDataPath + "\\" + this.udsv_coaDataDecrDir + "\\";

        	return coaDataDtlPath;
        }

        /**
         * 대입전형자료경로 설정
         * @return : coaDataDtlPath - 대입전형자료상세경로
         */
        this.udsfSetCoaDataPath = function(coaDataPath){

        	nexacro.setPrivateProfile(this.udsv_coaDataPathValue, coaDataPath);

        	var objExtCommon = this.smfCreateExtCommonAPI();

        	var return1 = objExtCommon._ext_getCheckDir(this.divMain.form.edtCoaDataPath.text + "\\" + this.udsv_coaDataDownDir, 1);
        	var return2 = objExtCommon._ext_getCheckDir(this.divMain.form.edtCoaDataPath.text + "\\" + this.udsv_coaDataBlindDir, 1);
        	var return3 = objExtCommon._ext_getCheckDir(this.divMain.form.edtCoaDataPath.text + "\\" + this.udsv_coaDataDecrDir, 1);

        	objExtCommon = null;
        }

        // 대입전형 임시 세션 호출
        // this.udsfTempSession();

        /**
         * 대입전형자료제공 UDS 변수 선언
         */
        this.udsv_coaAyr = this.smfIsNull(nexacro.getApplication().gdsSession.getColumn(0, "coaAyr")) ? "" : nexacro.getApplication().gdsSession.getColumn(0, "coaAyr");
        this.udsv_coaRcritScCd = this.smfIsNull(nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd")) ? "" : nexacro.getApplication().gdsSession.getColumn(0, "coaRcritScCd");
        this.udsv_coaRcritScNm = this.udsfGetCoaRcritScNm();

        this.udsv_coaDataPathValue = "univDataPath"+this.udsv_coaAyr+this.udsv_coaRcritScCd;
        this.udsv_coaDataDownDir = "1.전형자료수신";
        this.udsv_coaDataBlindDir = "2.블라인드자료복호화";
        this.udsv_coaDataDecrDir = "3.블라인드해제자료복호화";



        // trace(" udsv_coaAyr : " + this.udsv_coaAyr + ", udsv_coaRcritScCd : " + this.udsv_coaRcritScCd + ", udsv_coaRcritScNm " + this.udsv_coaRcritScNm);


        /**
         * 컬럼의 타이틀 생성
         *
         * 유효성 데이터셋의 title
         * 그리드의 bind 컬럼의 head text
         *
         * @param  grd       		그리드
         * @param  dsValid   		유효성 데이터셋
         * @return void
         */
        this.udsfGetColTitle = function(grd, dsValid){
        	var colTitle = {};

        	if(dsValid){
        		for(var i = 0; i < dsValid.getColCount(); i++){
        			var ruleExpression = this.smfStr(dsValid.getColumn(0, i));
        			var aRule = ruleExpression.match(/(?<=title\:)(.*?)(?=\,|$)/gi);
        			if(aRule instanceof Array){
        				var id = this.smfStr(dsValid.getColID(i));
        				var title = this.smfStr(aRule[0]).trim();
        				if(!this.smfIsNull(id) && !this.smfIsNull(title)){
        					colTitle[id] = title;
        				}
        			}
        		}
        	}

        	for(var i = 0; i < grd.getCellCount('body'); i++){
        		var id = this.smfStr(grd.getCellProperty('body', i, 'text').replace('bind:',''));
        		var title = this.smfStr(grd.getCellProperty('head', i, 'text')).trim();
        		if(!this.smfIsNull(id) && !this.smfIsNull(title) && this.smfIsNull(colTitle[id])){
        			colTitle[id] = title.trim();
        		}
        	}

        	return colTitle;
        }

        /***
         * 그리드의 '&&' 조건식을 만들어 준다.
         * param : paCol = ['ayr', 'grd'], paVal = ['2020', '1']
         * return : ayr == '2020' && grd == '1'
         * @param {Array, String} paCol
         * @param {Array, String} paVal
         * @param {String} psSep
         * @param {String} psOpr
         * @return {String}
         */
        this.udsfGetCondition = function (paCol, paVal, psOpr, psSep){
        	var _that = this;
        	var vaCol = Array.isArray(paCol) ? paCol : [paCol];
        	var vaVal = Array.isArray(paVal) ? paVal : [paVal];

        	if(this.smfIsNull(psSep)) psSep = ' && ';
        	if(this.smfIsNull(psOpr)) psOpr = ' == ';

        	var voObj = vaCol.reduce(function(oVal, sCol, nIdx){
        		var vsCol = _that.smfStr(sCol);
        		var vsVal = _that.smfStr(vaVal[nIdx]);
        		var vaColTmp = vsCol.split("|");
        		var vaValTmp = vsVal.split("|");
        		oVal.col.push(vaColTmp);
        		oVal.val.push(vaValTmp);
        		return oVal;
        	}, { col : [], val : [] })

        	voObj.col = voObj.col.flat();
        	voObj.val = voObj.val.flat();

        	return voObj.col.reduce(function(aVal, sCol, nIdx){
        		aVal.push(sCol + psOpr + "'" + voObj.val[nIdx] + "'");
        		return aVal;
        	}, []).join(psSep);
        }

        /**
         * @description 그리드의 조건식을 만들어준다
         * @param {Array, String} sCon - col1 == {0} || ( col2 == {1} && col3 == {2} )
         * @param {Dataset} ds
         * @param {int} i
         */
        this.udsfGetConditionFormatWithDataset = function(sCon, ds, i){
        	var cols = sCon.match(/([a-zA-Z]+\d)|[a-zA-Z]+/gi);
        	var paVal = cols.map((v) => "'" + ds.getColumn(i, v) + "'");
        	return this.format(sCon, paVal);
        }

        /**
         * @description 조건식을 만들어준다
         * @param {Array, String} sCon - col1 == {0} || ( col2 == {1} && col3 == {2} )
         * @param {Dataset} ds
         * @param {int} i
         */
        this.udsfGetConditionFormat = function(sCon, ...paVal){
        	var cols = sCon.match(/([a-zA-Z]+\d)|[a-zA-Z]+/gi);
        	var paVal = cols.map((v, i) => "'" + paVal[i] + "'");
        	return this.format(sCon, paVal);
        }

        /**
         * @description 큐
         */
        this.udsfCreateQueue = function(){
        	var _arr = [];
        	var _queue = {};

        	_queue.init = (v)  => {
        		_arr.length = 0;
        		if(Array.isArray(v)){
        			_arr = [...v];
        		}else if(this.smfIsNum(v) && v > 0){
        			_arr = Array(v).fill(0).map((n, i) => i);
        		}
        	};
        	_queue.enqueue = (v) => Array.isArray(v) ? _arr.push(...v) : _arr.push(v);
        	_queue.dequeue = () => _arr.shift();
        	_queue.clear = () => _arr.length = 0;
        	_queue.isEmpty = () => _arr.length == 0;
        	_queue.first = (idx) => {
        		const i = this.smfIsNull(idx) ? 0 : (idx < 0 ? _arr.length + idx : idx);
        		return _arr[i];
        	}
        	_queue.length = () => _arr.length;

        	return _queue;
        };


        /**
         * @description _ext_readFile 실패 확인
         * @param : str - _ext_readFile함수로 읽은 결과값
         */
        this.udsfIsExtReadFileFailed = function(str){
        	return !this.smfIsNull(str.match(/^Failed/gi));
        };

        /**
         * @description _ext_readFile 읽기 실패시 반복 읽기
         * @param : extCommon ExtCommonAPI
         * @param : path
         * @param : format - default utf-8
         * @param : cnt - 실패반복수 ( default 3 )
         */
        this.udsfExtReadFileRetry = function(extCommon, path, format, cnt){
        	format = this.smfNvl(format, 'utf-8');
        	cnt = this.smfNvl(cnt, 3);

        	var data = extCommon._ext_readFile(path, format);

        	if(this.udsfIsExtReadFileFailed(data)){
        		trace('\n_ext_readFile error first\n' + 'data : ' + data + '\n' + 'path : ' + path);
        		var isSuccess = false;
        		for(var i = 0; i < cnt; i++){
        			data = extCommon._ext_readFile(path, format);
        			if(!this.udsfIsExtReadFileFailed(data)){
        				isSuccess = true;
        				break;
        			}else{
        				trace('\n_ext_readFile error retry ' + i + '\n' + 'data : ' + data + '\n' + 'path : ' + path);
        			}
        		}

        		if(!isSuccess) return '';
        	}

        	return data;
        }

        /**
         * @description 학교코드로 영재학교 여부를 판단하는 기능
         * @param {String} shlCd
         * @return Boolean
         */
        this.udsfGetGfcrShlYn = function(shlCd){
            var vaList = ['K100000354', 'J100000447', 'D100000288', 'B100000569', 'F100000096', 'G100000177', 'I100000149', 'E100002238'];
        	return !this.smfIsNull(vaList.find((v) => v == shlCd))
        }

        /**
         * @description 데이터셋복사
         * @param {Dstaset} dsSrc
         * @param {String} condition
         * @return Dstaset
         */
        this.udsfCopyRows = function(dsSrc, condition){
        	var ds = new Dataset();
        	ds.assign(dsSrc);
        	ds.clearData();
        	this.smfCopyRows(dsSrc, ds, condition);
        	return ds;
        }

        /**
         * @description 서비스사용체크
         * @param {Dstaset} dsSrc
         * @param {String} condition
         * @return Dstaset
         */
        this.udsfCoaSvcChck = function(callback){
        	var pgeId = this.name;
        	var _dsCoaCtr = this.smfGetOrCreateDataset("_dsCoaCtr");
        	_dsCoaCtr.addColumn("coaAyr");
        	_dsCoaCtr.addColumn("coaRcritScCd");
        	_dsCoaCtr.addColumn("beginYmd");
        	_dsCoaCtr.addColumn("endYmd");
        	_dsCoaCtr.addColumn("addBgngYmd");
        	_dsCoaCtr.addColumn("addEndYmd");
        	_dsCoaCtr.addColumn("coaRcritPlsYn");
        	_dsCoaCtr.addColumn("coaRcritPrd");
        	_dsCoaCtr.addColumn("orgCd");
        	_dsCoaCtr.addColumn("orgNm");
        	_dsCoaCtr.addColumn("uvstKndScCd");
        	_dsCoaCtr.addColumn("uvstOrgCd");
        	_dsCoaCtr.useclientlayout = true;

        	this.smfDynService("listCoaCtr", {
        			url: "/uds_ueu_cm00_012.do",
        			inDatasets: "",
        			outDatasets: "_dsCoaCtr=dsCoaCtr",
        			bindingControls: "",
        		})
        		.showConfirm(false)
        		.run() // 실행
        		.callback(function(callbackParams){ // 콜백
        			if(callbackParams.errors) return;
        			var isPrcs = true;
        			if(isPrcs && (_dsCoaCtr.getRowCount() == 0)){
        				isPrcs = false;
        				this.smfLiteralAlert("대입전형 기준정보 조회 중 오류가 발생하였습니다.", function(){
        					this.smfSetWorkPage("pa_uds_ueu_dd::uds_ueudd00_m00.xfdl",{},false);
        				});
        			}

        			if(isPrcs && (pgeId == "uds_ueudd00_m02" || pgeId == "uds_ueudd00_m03" || pgeId == "uds_ueudd00_m04" || pgeId == "uds_ueudd00_m05" || pgeId == "uds_ueudd00_m06" || pgeId == "uds_ueudd00_m07"
        				|| pgeId == "uds_ueudd01_m00" || pgeId == "uds_ueudd02_m00" || pgeId == "uds_ueudd03_m00" || pgeId == "uds_ueudi01_m00")
        			){
        				if(_dsCoaCtr.getColumn(0, "coaRcritPlsYn") != "Y"){
        					isPrcs = false;
        					this.smfLiteralAlert("대입전형 모집기간을 확인바랍니다. \n\n - " + _dsCoaCtr.getColumn(0, "coaRcritPrd"), function(){
        						if(pgeId == "uds_ueudd01_m00" || pgeId == "uds_ueudd02_m00" || pgeId == "uds_ueudd03_m00" || pgeId == "uds_ueudi01_m00"){
        							this.smfSetWorkPage("frame::uds/frameSubMain.xfdl",{},false);
        						} else {
        							this.smfSetWorkPage("pa_uds_ueu_dd::uds_ueudd00_m00.xfdl",{},false);
        						}
        					});
        				}
        			}

        			if(isPrcs && (pgeId == "uds_ueudd00_m02" || pgeId == "uds_ueudd00_m03" || pgeId == "uds_ueudd00_m04" || pgeId == "uds_ueudd00_m05" || pgeId == "uds_ueudd00_m06" || pgeId == "uds_ueudd00_m07"
        				|| pgeId == "uds_ueudd01_m00" || pgeId == "uds_ueudd02_m00" || pgeId == "uds_ueudd03_m00" || pgeId == "uds_ueudi00_m00" || pgeId == "uds_ueudi01_m00")
        			){
        				if(this.isNil(_dsCoaCtr.getColumn(0, "uvstOrgCd"))){
        					isPrcs = false;
        					this.smfLiteralAlert("해당 메뉴는 대입 담당자 정보 저장 후 사용이 가능합니다.", function(){
        						if(pgeId == "uds_ueudd01_m00" || pgeId == "uds_ueudd02_m00" || pgeId == "uds_ueudd03_m00" || pgeId == "uds_ueudi00_m00" || pgeId == "uds_ueudi01_m00"){
        							this.smfSetWorkPage("frame::uds/frameSubMain.xfdl",{},false);
        						} else {
        							this.smfSetWorkPage("pa_uds_ueu_dd::uds_ueudd00_m00.xfdl",{},false);
        						}
        					});
        				}
        			}

        			if(isPrcs){
        				if(this.smfIsFunc(callback)) callback.call(this, callbackParams);
        			}
        			// if(callbackParams.reason == -1) return;
        		});
        }

        /**
         * @description 스텝 워커 생성
         * @param : grd - 그리드
         * @param : ds - 데이터셋 ( 엑셀 업로드 )
         * @param : dsValid - 데이터셋 유효성
         * @param : dsTo - 유효성 검사 결과 저장 데이터셋
         * @return : 워커 모듈
         */
        this.udsfCreateStepWorker = function(grd, ds, dsValid, dsTo){
        	var _that = this;
        	var _validator = {};
        	var _command = [];
        	var _que = this.udsfCreateQueue();
        	var _argements = arguments;
        	var _errorChecker = null;
        	var _completeCallback = null;
        	var _hasError = false;
        	var _isComplete = false;

        	_que.init(ds.getRowCount());

        	_validator.command = function(cmd, val){
        		if(_that.smfIsFunc(cmd)){
        			_command.push({ 'cmd' : cmd, 'val' : val});
        		}
        		return _validator;
        	}

        	_validator.complete = function(callback){
        		if(_that.smfIsFunc(callback)) _completeCallback = callback;
        		return _validator;
        	}

        	_validator.errorChecker = function(checker){
        		if(_that.smfIsFunc(checker)) _errorChecker = checker;
        		return _validator;
        	}

        	_validator.hasError = () => _hasError;
        	_validator.isComplete = () => _isComplete;

        	_validator.next = function(){
        		if(!_que.isEmpty()){
        			var nRow = _que.dequeue();
        			var beforResult = undefined;

        			_command.forEach(function(f){
        				beforResult = f.cmd.apply(_that, [..._argements, nRow, beforResult, f.val]);
        				if(_that.smfIsFunc(_errorChecker) && !_hasError) _hasError = _errorChecker.call(_that, beforResult);
        			});

        			return true;
        		}else{
        			_isComplete = true;
        			if(_that.smfIsFunc(_completeCallback)) _completeCallback.call(_that, _hasError);
        		}

        		return false;
        	}

        	return _validator;
        }

        /**
         * @description 공백 확인 워커
         * @param : grd - 그리드
         * @param : ds - 데이터셋 ( 엑셀 업로드 )
         * @param : dsValid - 데이터셋 유효성
         * @param : dsTo - 유효성 검사 결과 저장 데이터셋
         * @param : nRow - 현재 검사하고 있는 로우 인덱스
         * @param : beforResult - 이전워커 리턴값
         * @param : val - 워커 생성할때 전달되는 상수값
         * @return : val의 컬럼이 모두 공백이면 true
         */
        this.udsfStepWorkCommandEmptyCols = function(grd, ds, dsValid, dsTo, nRow, beforResult, val){
        	return val.map((v) => this.smfTrim(ds.getColumn(nRow, v))).every((v) => this.smfIsNull(v));
        }

        /**
         * @description 유효성 검사 워커
         * @param : grd - 그리드
         * @param : ds - 데이터셋 ( 엑셀 업로드 )
         * @param : dsValid - 데이터셋 유효성
         * @param : dsTo - 유효성 검사 결과 저장 데이터셋
         * @param : nRow - 현재 검사하고 있는 로우 인덱스
         * @param : beforResult - 이전워커 리턴값
         * @param : val - 워커 생성할때 전달되는 상수값
         * @return : 유효성 검사 결과
         */
        this.udsfStepWorkCommandValidate = function(grd, ds, dsValid, dsTo, nRow, beforResult, val){
        	if(!beforResult){
        		var rtnVal = true;
        		var mCol = 0;

        		for(mCol = 0; mCol < this.dsExcelUpload.getColCount(); mCol++){
        			rtnVal = this._svcfItemCheck(nRow, mCol, grd, ds, dsValid, {});
        			if(rtnVal !== true) break;
        		}

        		var idx = dsTo.addRow();
        		dsTo.copyRow(idx, ds, nRow);
        		dsTo.setColumn(idx, 'regSn', idx + 1);

        		if(rtnVal !== true){
        			dsTo.setColumn(idx, 'stsNm', '오류');
        			dsTo.setColumn(idx, 'rmkCn', rtnVal);
        		}else{
        			dsTo.setColumn(idx, 'stsNm', '대기');
        		}

        		return { 'idx' : idx, 'rtnVal' : rtnVal, 'error' : rtnVal !== true };
        	}

        	return false;
        }

         /**
         * @description 중복 검사 워커
         * @param : grd - 그리드
         * @param : ds - 데이터셋 ( 엑셀 업로드 )
         * @param : dsValid - 데이터셋 유효성
         * @param : dsTo - 유효성 검사 결과 저장 데이터셋
         * @param : nRow - 현재 검사하고 있는 로우 인덱스
         * @param : beforResult - 이전워커 리턴값
         * @param : val - 워커 생성할때 전달되는 상수값
         * @return : 중복 검사 결과
         */
        this.udsfStepWorkCommandDup = function(grd, ds, dsValid, dsTo, nRow, beforResult, val){
        	if(!this.smfIsNull(beforResult.idx)){
        		var idx = beforResult.idx;
        		var rtnVal = beforResult.rtnVal;

        		if(rtnVal === true){ //정상일때
        			//중복확인
        			var sSearchText = this.udsfGetConditionFormatWithDataset(val.cond, ds, nRow);
        			var nRowDup = ds.findRowExpr(sSearchText, nRow + 1, ds.getRowCount());

        			if(nRowDup > -1){
        				rtnVal = this.format('{0}의 {1}행과 {2}행이 중복됩니다.', [val.msg, nRow + 1, nRowDup + 1]);
        				dsTo.setColumn(idx, 'stsNm', '오류');
        				dsTo.setColumn(idx, 'rmkCn', rtnVal);
        			}

        			return { 'idx' : idx, 'rtnVal' : rtnVal, 'error' : rtnVal !== true };
        		}
        	}

        	return false;
        }

         /**
         * @description 수량 감시 옵저버 워커
         * @param : grd - 그리드
         * @param : ds - 데이터셋 ( 엑셀 업로드 )
         * @param : dsValid - 데이터셋 유효성
         * @param : dsTo - 유효성 검사 결과 저장 데이터셋
         * @param : nRow - 현재 검사하고 있는 로우 인덱스
         * @param : beforResult - 이전워커 리턴값
         * @param : val - 워커 생성할때 전달되는 상수값 ( cnt:콜백카운트, val.callback:콜백 )
         * @return : true
         */
        this.udsfStepWorkCommandObserver = function(grd, ds, dsValid, dsTo, nRow, beforResult, val){
        	if(nRow % val.cnt == 0){
        		if(this.smfIsFunc(val.callback)) val.callback.call(this);
        	}
        	return true;
        }

        /**
         * @description 대입전형업무 처리 히스토리
         * - 자동생성 ( 아래 항목의 이름은 UI에서 생성하지 말것 )
         *   > 데이터셋 : dsCoaWrkHstr
         *   > 서비스 : saveCoaWrkHstr
         * @param : serviceInjectionId - dsService의 수량 확인할 id
         *          해당 WAS의 컨트롤에서는 dsCoaWrkHstr의 coaDataPrcsNocs에 수량을 더해주어야 함
         * @return : object
         */
        this.udsfCreateCoaWrkHstr = function(coaWrkPrcsScCd, serviceInjectionId){
        	var _that = this;
        	var _hstr = {};
        	var _coaWrkPrcsScCd = coaWrkPrcsScCd;
        	var _injectionId = Array.isArray(serviceInjectionId) ? serviceInjectionId : [serviceInjectionId];

        	//데이터셋 생성
        	if(this.smfIsNull(this.dsCoaWrkHstr)){
        		var ds = new Dataset;

        		ds.addColumn("regSn", "BIGDECIMAL", 10)
        		ds.addColumn("coaDataPrcsNocs", "BIGDECIMAL", 10)
        		ds.addColumn("coaWrkPrcsScCd", "STRING", 4)
        		ds.addColumn("jobCmptnYn", "STRING", 1)

        		this.addChild("dsCoaWrkHstr", ds);
        	}

        	//데이터셋 초기화
        	this.dsCoaWrkHstr.clearData();
        	var nRow = this.dsCoaWrkHstr.addRow();

        	this.dsCoaWrkHstr.setColumn(nRow, 'regSn', -1);
        	this.dsCoaWrkHstr.setColumn(nRow, 'coaDataPrcsNocs', 0);
        	this.dsCoaWrkHstr.setColumn(nRow, 'coaWrkPrcsScCd', '');
        	this.dsCoaWrkHstr.setColumn(nRow, 'jobCmptnYn', 'N');

        	//서비스 생성
        	var idx = this.dsService.findRowExpr("id == 'saveCoaWrkHstr'");
        	if(idx < 0){
        		var nRow = this.dsService.addRow();
        		this.dsService.setColumn(nRow, 'id', 'saveCoaWrkHstr');
        		this.dsService.setColumn(nRow, 'url', 'uds_ueu_cm00_101.do');
        		this.dsService.setColumn(nRow, 'inDatasets', 'dsSearch dsCoaWrkHstr');
        		this.dsService.setColumn(nRow, 'outDatasets', 'dsCoaWrkHstr');
        	}

        	//해당 서비스의 의존성 주입
        	_injectionId.forEach(function(injId){
        		trace('injId : ' + injId);
        		var idx = _that.dsService.findRowExpr(_that.udsfGetConditionFormat("id == {0}", injId));
        		if(idx > -1){
        			var inDatasets = _that.dsService.getColumn(idx, 'inDatasets');
        			var outDatasets = _that.dsService.getColumn(idx, 'outDatasets');

        			if(inDatasets.match(/(?<=^|[\s])(dsCoaWrkHstr)(?=[\s]|$)/gi) == null){
        				var inDs = inDatasets.match(/[A-Z0-9\=]+/gi)
        				if(inDs == null){
        					_that.dsService.setColumn(idx, 'inDatasets', 'dsCoaWrkHstr');
        				}else{
        					inDs.push('dsCoaWrkHstr');
        					_that.dsService.setColumn(idx, 'inDatasets', inDs.join(' '));
        				}
        			}

        			if(outDatasets.match(/(?<=^|[\s])(dsCoaWrkHstr)(?=[\s]|$)/gi) == null){
        				var outDs = outDatasets.match(/[A-Z0-9\=]+/gi)
        				if(outDs == null){
        					_that.dsService.setColumn(idx, 'outDatasets', 'dsCoaWrkHstr');
        				}else{
        					outDs.push('dsCoaWrkHstr');
        					_that.dsService.setColumn(idx, 'outDatasets', outDs.join(' '));
        				}
        			}
        		}
        	});

        	_hstr.send = function(isCmptn, callback){
        		if(isCmptn == true){
        			_that.dsCoaWrkHstr.setColumn(0, 'jobCmptnYn', 'Y')
        		}else{
        			_that.dsCoaWrkHstr.setColumn(0, 'regSn', -1)
        			_that.dsCoaWrkHstr.setColumn(0, 'coaDataPrcsNocs', 0)
        			_that.dsCoaWrkHstr.setColumn(0, 'jobCmptnYn', 'N')
        		}

        		_that.dsCoaWrkHstr.setColumn(0, 'coaWrkPrcsScCd', _coaWrkPrcsScCd);

        		// 저장 서비스
        		_that.smfSaveService("saveCoaWrkHstr")
        			.showConfirm(false)
        			.requireExistsData(_that.dsSearch)   // 데이터 존재 필수
        			.run() // 실행
        			.callback(function(callbackParams){
        				if(callbackParams.errors) return;

        				if(_that.smfIsFunc(callback)) callback.call(_that);
        			}); // 콜백
        	}

        	return _hstr;
        }

        /**
         * @description 인증서를 검증 및 실행
         * - 자동생성 ( 아래 항목의 이름은 UI에서 생성하지 말것 )
         *   > 데이터셋 : dsEltsInfo
         *   > 서비스 : executeCertElts
         * @param : callback - 인증서 검증 및 실행이 완료되면 호출
         *
         */
        this.udsfExecuteCert = function(callback){
        	//데이터셋 생성
        	if(this.smfIsNull(this.dsEltsInfo)){
        		var ds = new Dataset;

        		ds.addColumn("certDtcNm", "STRING", 256)
        		ds.addColumn("eltsCertNo", "STRING", 256)
        		ds.addColumn("eltsDataValue", "STRING", 256)

        		this.addChild("dsEltsInfo", ds);
        	}

        	this.dsEltsInfo.clearData();

        	//서비스 생성
        	var idx = this.dsService.findRowExpr("id == 'executeCertElts'");
        	if(idx < 0){
        		var nRow = this.dsService.addRow();
        		this.dsService.setColumn(nRow, 'id', 'executeCertElts');
        		this.dsService.setColumn(nRow, 'url', 'uds_ueu_cm00_015.do');
        		this.dsService.setColumn(nRow, 'inDatasets', 'dsSearch dsEltsInfo');
        		this.dsService.setColumn(nRow, 'outDatasets', 'dsEltsInfo');
        	}

        	var keyUserDn = this.objKCASE.callMethod("SelectCertKM");
        	var certInfo = this.objKCASE.callMethod("GetCertInfoKM", "");
        	var certInfoList = certInfo.split("|");

        	this.dsEltsInfo.addRow();
        	this.dsEltsInfo.setColumn(0, "certDtcNm", certInfoList[0]);
        	this.dsEltsInfo.setColumn(0, "eltsCertNo", certInfoList[1]);
        	this.dsEltsInfo.setColumn(0, "eltsDataValue", certInfoList[2]);

        	if(this.isNil(keyUserDn) || this.objKCASE.callMethod("GetErrorCode") != 0){
        		// 인증서 오류
        		if(this.objKCASE.callMethod("GetErrorCode") != 110007){
        			this.smfAlert("인증서와 비밀번호를 확인하세요.", function(){});
        		}
        		return false;
        	} else {
        		// 저장 서비스
        		this.smfExecuteService("executeCertElts")
        			.messagePrefix("인증서")
        			.requireExistsData(this.dsSearch)   //데이터 존재 필수
        			.showConfirm(false)
        			.run() // 실행
        			.callback(function(callbackParams){
        				if(callbackParams.errors) return;

        				var eltsDataValue = this.dsEltsInfo.getColumn(0, 'eltsDataValue')
        				if(!this.smfIsNull(eltsDataValue)){
        					if(this.smfIsFunc(callback)) callback.call(this, eltsDataValue);
        				}else{
        					this.smfLiteralAlert("인증서 정보가 일치하지 않습니다. 인증서를 확인하여 주십시오.");
        				}
        			}); // 콜백
        	}
        }

        /**
         * @description 한글 3, 이외 1의 길이로 User Properties의 validate속성의 maxlengthB의 값보다 크면 자름
         * @param : obj - input component
         *
         */
        this.udsfCutMaxlengthB = function(obj)
        {
        	if(this.smfIsNull(obj.validate)) return;

        	var sVal = obj.text;
        	if(this.smfIsNull(sVal)) return;

        	var maxLen = obj.validate.replace(/.*maxlengthB:([0-9]+).*/, '$1')
        	if(!this.smfIsNum(maxLen)) return;

        	var len = 0;
        	var i = 0;

            for (i=0; i<sVal.length; i++)
            {
        			if (sVal.charCodeAt(i) > 127)
        				len += 3;
        			else
        				len += 1;

        			if(len > maxLen){
        				obj.set_value(sVal.substr(0, i));
        				return;
        			}
            }
        };

        /**
         * @description 세션 값 가져오기
         * @param : obj - input component
         *
         */
        this.udsfGetSession = function(key, def){
        	if(this.smfIsNull(def)) def = "";
        	return this.smfNvl(nexacro.getApplication().gdsSession.getColumn(0, key), def);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
