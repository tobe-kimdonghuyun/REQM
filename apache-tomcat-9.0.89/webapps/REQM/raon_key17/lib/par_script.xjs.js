//XJS=par_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /**
         *	유치원 학부모서비스(PAR) 공통 스크립트
         *	@MenuPath	유치원 학부모서비스
         *	@FileName 	par_script.xjs
         *	@Creator 	문형선
         *	@CreateDate	2022.08.22
         *	@Desction
         ************** 소스 수정 이력 ***********************************************
         *	date			Modifier			Description
         *******************************************************************************
         *	2022.08.22		문형선				최초 생성
         *******************************************************************************
         */

        // 소재정보, 개인번호, 학년도 체크
        this.parfValidate = function(dateset){
        	for(i = 0; i < dateset.getRowCount(); i++){
        		if(this.smfIsNull(dateset.getColumn(i, "cddcScCd"))){
        			this.smfLiteralAlert("유아의 소재정보가 존재하지 않아 유아 자료를 요청할 수 없습니다.\n해당 유치원에 문의해 주세요.");
        			return false;
        		}else if(this.smfIsNull(dateset.getColumn(i, "stuInvlNo"))){
        			this.smfLiteralAlert("유아의 학적정보가 존재하지 않아 유아 자료를 조회할 수 없습니다.\n해당 유치원에 문의해 주세요.");
        			return false;
        		}else if(this.smfIsNull(dateset.getColumn(i, "ayr"))){
        			this.smfLiteralAlert("유치원의 학년도/학기 정보가 설정되지 않아 학부모서비스를 정상 이용하실 수 없습니다.\n해당 유치원에 문의해 주세요.");
        			return false;
        		}
        	}
        	return true;
        }

        // 학부모서비스 임시 세션
        this.parfTempSession = function(){
        	var objSessionDs = nexacro.getApplication().gdsSession;

        	objSessionDs.setColumn(0,"userId", "A000001081"); // 사용자ID
        	objSessionDs.setColumn(0,"instCd", "A000001081"); // 기관코드
        	objSessionDs.setColumn(0,"instNm", "한국대학교"); // 기관명

        	objSessionDs.setColumn(0,"ayr", "2024"); // 년도
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
