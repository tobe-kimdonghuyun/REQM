//XJS=sem_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
         *	환경관리 SEM 공통 스크립트
         *	@MenuPath	환경관리
         *	@FileName 	sem_script.xjs
         *	@Creator 	김민성
         *	@CreateDate	2022.12.16
         *	@Desction
         ************** 소스 수정 이력 ***********************************************
         *	date			Modifier			Description
         *******************************************************************************
         *	2022.12.16		김민성				최초 생성
         *******************************************************************************
         */

        /**
         * 결과업로드 버튼 컨트롤
         * @param : objGrdId		- 양식업로드그리드
         * @param : dsExcel			- 업로드된 데이터셋
         * @param : poKey			- 비교컬럼
         * @param : handler			- 콜백함수
         */
        this.fnGridUpload = function (objGrdId, dsExcel, poKey, handler){

            // 업로드 전, 데이터 건수(그리드상의 검사항목 개수)
        	var voDs = this.smfFindComponentInThisContext(objGrdId.binddataset);
            var vnPreDsCnt = voDs.getRowCount();

            // 데이터건수가 없으면 return
            if(vnPreDsCnt < 1){
                this.smfAlert('LI002', [], this.fnMessageCallback);
                return;
            }

        	this.smfLiteralConfirm("양식데이터를 업로드 하시겠습니까?", function(){
        		//취소 버튼 클릭시
        		if(!arguments[0].confirmResult) return;

        		// 업로드 후, 데이터 건수(엑셀업로드의 검사항목 개수)
        		var vnPostDsCnt = dsExcel.getRowCount();

        		// 업로드 전,후 데이터 건수 비교
        		if(vnPreDsCnt != vnPostDsCnt){
        			this.smfAlert('LI155', ['양식 다운로드/업로드 갯수가 맞지 않습니다.\n다시 처리하시기 바랍니다.'], this.fnMessageCallback);
        			return;
        		}

        		// 오류메시지 표시
        		var vsMsg = "";

        		// poKey 변경여부
        		var vsKeyMsg = new Array();
        		for(var i = 0; i < vnPreDsCnt; i++){
        			var vsKeyTmp = "";
        			for(var j = 0, x = poKey.length; j < x; j++){
        				var vsKey1 = voDs.getColumn(i, poKey[j]);		// 원본
        				var vsKey2 = dsExcel.getColumn(i, poKey[j]);	// 엑셀업로드
        				if(vsKey1 != vsKey2){
        					if(vsKeyTmp == ""){
        						vsKeyTmp = (i+1);
        					}
        				}
        			}
        			if(vsKeyTmp != ""){
        				vsKeyMsg.push(vsKeyTmp);
        			}
        		}
        		if(vsKeyMsg.length > 0){
        			this.smfAlert('LI155', ['다른 양식의 파일입니다. 확인 후 다시하시기 바랍니다.'], this.fnMessageCallback);
        			return;
        		}

        		for(var i = 0; i < vnPreDsCnt; i++){
        			for(var j = 0; j < dsExcel.getColCount(); j++){
        				var vsCol = dsExcel.getColID(j);
        				var vsTmpMsg = "";
        				if (this.smfIsNull(dsExcel.getColumn(i, j))){
        					continue;
        				}
        				voDs.setColumn(i, vsCol, dsExcel.getColumn(i, j));

        				// 최초/최종 결과수치
        				if(vsCol.indexOf("RltNmvl") > -1){
        					var rltNmvl = dsExcel.getColumn(i, j) || '';
        					rltNmvl.replaceAll(",", "") ;

        					if(this.smfIsNum(rltNmvl)){
        						if(this.smfLength(rltNmvl, 1) > 5){
        							vsTmpMsg += (i+1)+"번째 행 : ";
        							if(vsCol.indexOf("Frst") > -1){
        								vsTmpMsg += "[최초결과값]";
        							}else if(vsCol.indexOf("Last") > -1){
        								vsTmpMsg += "[최종결과값]";
        							}
        							vsTmpMsg += " [입력가능값 : 99999 이하(숫자)] ※ 입력값 : " + rltNmvl;
        						}
        					}else{
        						vsTmpMsg += (i+1)+"번째 행 : ";
        						if(vsCol.indexOf("Frst") > -1){
        							vsTmpMsg += "[최초결과값]";
        						}else if(vsCol.indexOf("Last") > -1){
        							vsTmpMsg += "[최종결과값]";
        						}
        						vsTmpMsg += "은 숫자만 입력가능합니다.";
        					}
        					if(vsTmpMsg != ""){
        						vsTmpMsg += "\n";
        					}
        				}
        				// 최초/최종 조치사항
        				if(vsCol.indexOf("MteCn") > -1){
        					var mteCn = dsExcel.getColumn(i, j) || '';

        					if(this.smfLength(mteCn, 1) > 100){
        						vsTmpMsg += (i+1)+"번째 행 : ";
        						if(vsCol.indexOf("Frst") > -1){
        							vsTmpMsg += "[최초조치사항]";
        						}else if(vsCol.indexOf("Last") > -1){
        							vsTmpMsg += "[최종조치사항]";
        						}
        						vsTmpMsg += " [입력가능값 : 100자 이내] ※ 입력값 : " + mteCn;
        					}
        					if(vsTmpMsg != ""){
        						vsTmpMsg += "\n";
        					}
        				}
        				// 검사업체
        				if(vsCol.indexOf("ComyNm") > -1){
        					var comyNm = dsExcel.getColumn(i, vsCol) || '';
        					if(this.smfLength(comyNm, 1) > 100){
        						vsTmpMsg += (i+1)+"번째 행 : [최종검사업체]" + " [입력가능값 : 100자 이내] ※ 입력값 : " + comyNm;
        					}
        					if(vsTmpMsg != ""){
        						vsTmpMsg += "\n";
        					}
        				}
        				if(vsTmpMsg != ""){
        					vsMsg += vsTmpMsg;
        				}
        			}
        		}

        		if(vsMsg != ""){
        			this.smfAlert('LI155', [vsMsg], null);
        		}else{
        			if(handler){
        				handler();
        			}
        		}
        	}, null);
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
