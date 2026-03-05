(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testGridButton");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ntcMteId","type" : "string","size" : "256"},{"id" : "ntcMteTitlNm","type" : "string","size" : "256"},{"id" : "ntcMteCn","type" : "string","size" : "256"},{"id" : "ntcMteClfCd","type" : "string","size" : "256"},{"id" : "pstStsCd","type" : "string","size" : "256"},{"id" : "fileRefrnId","type" : "string","size" : "256"},{"id" : "ntcMteInqCnt","type" : "bigdecimal","size" : "256"},{"id" : "aplcnBgngYmd","type" : "string","size" : "256"},{"id" : "aplcnEndYmd","type" : "string","size" : "256"},{"id" : "aplcnBgngTm","type" : "string","size" : "256"},{"id" : "aplcnEndTm","type" : "string","size" : "256"},{"id" : "imptYn","type" : "string","size" : "256"},{"id" : "rgtrNm","type" : "string","size" : "256"},{"id" : "rgtrDptNm","type" : "string","size" : "256"},{"id" : "mdfrNm","type" : "string","size" : "256"},{"id" : "mdfrDptNm","type" : "string","size" : "256"},{"id" : "rgtrId","type" : "string","size" : "256"},{"id" : "regDt","type" : "string","size" : "256"},{"id" : "mdfrId","type" : "string","size" : "256"},{"id" : "mdfcnDt","type" : "string","size" : "256"},{"id" : "chk","type" : "int","size" : "1"}]},"Rows" : [{"ntcMteId" : "NTCPASA002023060006","ntcMteTitlNm" : "[대국민서비스] 나이스 대국민서비스 상담센터 번호 안내입니다.","ntcMteCn" : "<strong><span style=\"color: #4397f0\">나이스 대국민서비스</span></strong>와 관련하여 상담센터 전화번호를 안내드립니다.\n\n나이스 대국민서비스 홈페이지를 사용하시면서 생기신 사용질의 그 밖에 궁금하신 사항이 있으시면 상담센터로 문의 부탁드립니다.\n\n\\- 운영시간: 08:00 \\~ 18:00 \\(월\\~금\\, 주말 및 공휴일 제외\\)\n\\- 상담번호: 1600\\-7440 \\(나이스 대국민서비스\\, 사용자지원\\)\n\n나이스 대국민서비스의 안정적 제공을 위해 최선을 다하겠습니다.\n\n감사합니다.","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "39535","aplcnBgngYmd" : "20230619","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "Y","rgtrNm" : "교육부기관마스터","rgtrDptNm" : "교육부","mdfrNm" : "이우영","mdfrDptNm" : "한국교육학술정보원(KERIS)","rgtrId" : "aumA000","regDt" : "20230609135331870","mdfrId" : "wylee1","mdfcnDt" : "20250415092002577","chk" : "0"},{"ntcMteId" : "NTCPASA002024120002","ntcMteTitlNm" : "나이스-정부24 시스템 작업으로 인한 교육제증명 발급 일시 중단 안내","ntcMteCn" : "나이스와 정부24 간 시스템 연계 구조 개선 작업으로 교육제증명 발급 서비스가 일시 중단될 예정입니다.\n\n○ 중단일시 : 2024. 12. 5.(목) 19시 \\~ 22시(3시간)\n ※ 제증명 발급 중단 시간은 작업 상황에 따라 변동될 수 있습니다.\n\n항상 안정적인 서비스를 제공하기 위해 노력하겠습니다.\n감사합니다.","pstStsCd" : "01","fileRefrnId" : "[E4AmOR3yQ0goY40G1X/k3LtUoQjGCo1tM+DlmUXmfdk=","ntcMteInqCnt" : "7721","aplcnBgngYmd" : "20241203","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "이우영","rgtrDptNm" : "디지털인프라담당관","mdfrNm" : "이우영","mdfrDptNm" : "디지털인프라담당관","rgtrId" : "wylee1","regDt" : "20241203095127486","mdfrId" : "wylee1","mdfcnDt" : "20241203095127486","chk" : "0"},{"ntcMteId" : "NTCPASA002024060001","ntcMteTitlNm" : "정부24 시스템 정기점검으로 인한 교육제증명 발급 일시 중단 안내","ntcMteCn" : "**<span style=\"font-size: 10pt;\">안정적인 정부24 운영을 위한 시스템 정기점검으로</span>**\n**<span style=\"font-size: 10pt;\">교육제증명 발급 서비스가 일시 중단될 예정입니다.</span>**\n\n**<span style=\"font-size: 10pt;\">작업 일시: 2024. 6.14.(금) 22:00 \\~ 6.15.(토) 08:00 (총 10시간)</span>**\n**<span style=\"font-size: 10pt;\">서비스 중단 시간:</span> <span style=\"font-size: 13.3333px;\">2024\\. 6\\.14\\.\\(금\\) 22:00 \\~ 6\\.15\\.\\(토\\) 06:00 \\(총 8시간\\)</span></strong>\n**<span style=\"font-size: 13.3333px;\">※ 작업 진행 상황에 따라 시간이 변동될 수 있습니다.</span>**\n\n**<span style=\"font-size: 13.3333px;\">이용에 불편을 드려 죄송합니다.</span>**","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "8605","aplcnBgngYmd" : "20240613","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "주상훈","rgtrDptNm" : "디지털인프라담당관","mdfrNm" : "주상훈","mdfrDptNm" : "디지털인프라담당관","rgtrId" : "kswaste","regDt" : "20240613135253569","mdfrId" : "kswaste","mdfcnDt" : "20240613135253569","chk" : "0"},{"ntcMteId" : "NTCPASA002024010003","ntcMteTitlNm" : "전북특별자치도교육청나이스 대국민 서비스중지 안내","ntcMteCn" : "전북특별자치도교육청 출범(2024.01.18.)에 따른 명칭 변경을 위해 다음과 같이 제증명 발급 서비스가 일시 중단되오니 참고하시기 바랍니다.\n○ 중지기간: 2024. 1. 17. (수) 18:00 \\~ 1. 18. (목) 18:00\n(※ 중지 기간은 작업 상황에 따라 변동 될 수 있음)\n○ 중지 대상: 전북특별자치도교육청 나이스 대국민 서비스 전체 및 교육제증명\n(※ 교육제증명: 졸업증명서, 학교생활기록부 등 34종)\n※ 교육비 원클릭 신청시스템은 사회보장정보시스템(행복이음, 범정부) 서비스 중단으로 인하여 1.19(금) 오전 9시까지 중단됩니다.","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "18751","aplcnBgngYmd" : "20240119","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "이윤정","rgtrDptNm" : "교육정보시스템운영팀","mdfrNm" : "이윤정","mdfrDptNm" : "교육정보시스템운영팀","rgtrId" : "lyj432","regDt" : "20240119111743035","mdfrId" : "lyj432","mdfcnDt" : "20240119111743035","chk" : "0"},{"ntcMteId" : "NTCPASA002023070001","ntcMteTitlNm" : " 나이스 학부모서비스 리뉴얼 안내","ntcMteCn" : "안녕하세요.\n<strong><span style=\"color: #197ee7\">나이스 학부모서비스</span></strong>가 새롭게 개편되었습니다.\n\n안정적인 서비스를 위해 <strong>내부점검 및 베타서비스\\* 기간</strong>을 거쳐\n빠른 시일 내에 서비스가 제공될 수 있도록 최선을 다하겠습니다.\n\n운영 초기이므로 다소 서비스가 원활하지 못할 수 있습니다.\n양해 부탁드립니다. 감사합니다.\n\n<br>\n#### **<span style=\"color: #197ee7\">\\* 베타서비스 기간: 2023년 7월 중</span>**\n\n###### ※ 개통예정일은 재안내 예정입니다.\n\n###### ※ 자녀의 학교생활기록은 정부24 또는 나이스플러스 신규 서비스에서 학생의 학교생활 메뉴에서 확인할 수 있습니다.","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "131330","aplcnBgngYmd" : "20230703","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "나이스마스터","rgtrDptNm" : "교육부","mdfrNm" : "나이스마스터","mdfrDptNm" : "교육부","rgtrId" : "neismaster","regDt" : "20230703155807823","mdfrId" : "neismaster","mdfcnDt" : "20230703160033194","chk" : "0"},{"ntcMteId" : "NTCPASA002023060013","ntcMteTitlNm" : "[대국민서비스] 일부 서비스 사용 일시 중단 안내","ntcMteCn" : "4세대 나이스 전환을 위하여 일부 서비스의 사용이 일시 중단됩니다.\n이용에 불편을 드려 죄송합니다.\n더욱 편리한 서비스를 제공하기 위해 시일이 걸리오니 양해 부탁드립니다.\n\n* **일시 중단 서비스 : 학부모서비스**","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "61173","aplcnBgngYmd" : "20230621","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "이윤정","rgtrDptNm" : "교육정보시스템운영팀","mdfrNm" : "나이스마스터","mdfrDptNm" : "교육부","rgtrId" : "lyj432","regDt" : "20230621181604032","mdfrId" : "neismaster","mdfcnDt" : "20230701094120818","chk" : "0"},{"ntcMteId" : "NTCPASA002023060012","ntcMteTitlNm" : "[대국민서비스] 나이스 대국민 앱 운영 중단 안내","ntcMteCn" : "안녕하세요.\n나이스 대국민서비스 담당자입니다.\n\n기존 나이스 대국민(iOS, Android) 앱은 2023.6.15 18시 이후 운영 중단되었습니다.\n\n그 동안 관심을 가지고 사용해주신 사용자분들께 감사드립니다.","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "20722","aplcnBgngYmd" : "20230621","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "이윤정","rgtrDptNm" : "교육정보시스템운영팀","mdfrNm" : "나이스마스터","mdfrDptNm" : "교육부","rgtrId" : "lyj432","regDt" : "20230621181419404","mdfrId" : "neismaster","mdfcnDt" : "20230623133114566","chk" : "0"},{"ntcMteId" : "NTCPASA002023060010","ntcMteTitlNm" : "[대국민서비스] 나이스 클라우드 서비스 오픈 일정","ntcMteCn" : "**[나이스 클라우드 서비스 오픈 일정]**\n\n<br>\n● 수업지원\n\n* 나이스 플러스(neisplus.kr) : 6월 21일 오전 6시\n* 학부모서비스(parents.neis.go.kr) : 7월 중순\n\n● 학교행정\n\n* 에듀로(eduro.go.kr) : 6월 21일 오전 6시\n* 교육비원클릭(oneclick.neis.go.kr) : 7월 1일 오전 9시\n* 업무지원(cowork.neis.go.kr) : 6월 21일 오전 6시\n\n● 일반행정\n\n* 검정고시(kged.go.kr) : 6월 21일 오전 6시\n* 평생교육(hakwon.neis.go.kr) : 6월 21일 오전 6시\n* 법인(nonprofit.neis.go.kr) : 6월 21일 오전 6시\n* 채용(edurecruit.go.kr) : 6월 23일 오전 10시\n\n● 나이스 대국민(neis.go.kr) : 6월 21일 오전 6시\n\n● 공통\n\n* 일반설문(survey.neis.go.kr) : 6월 21일 오전 6시\n* 교육디지털원패스(edupass.neisplus.kr) : 6월 21일 오전 6시\n\n● 유치원 학부모서비스(firstschool.neis.go.kr) : 7월 중순","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "10636","aplcnBgngYmd" : "20230620","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "나이스마스터","rgtrDptNm" : "교육부","mdfrNm" : "나이스마스터","mdfrDptNm" : "교육부","rgtrId" : "neismaster","regDt" : "20230620203542768","mdfrId" : "neismaster","mdfcnDt" : "20230630163711028","chk" : "0"},{"ntcMteId" : "NTCPASA002023060009","ntcMteTitlNm" : "[대국민서비스] 홍보캐릭터 유니 관련 자료를 다운받을 수 있습니다.","ntcMteCn" : "<strong><span style=\"color: #4f80f8\">나이스 대국민서비스</span></strong>의 홍보캐릭터 유니(Uni)와 관련된 자료를 첨부파일로 제공해드립니다.\n\n홍보캐릭터 유니의 AI파일과 PNG 파일이 필요하신 분은 첨부파일을 다운로드 받으시기 바랍니다.\n\n유니에 대한 소개는 나이스 대국민서비스 홈페이지 상단의 메인메뉴 중 <strong>[서비스 홍보]</strong>에서 찾아보실 수 있습니다.\n\n나이스 대국민서비스의 안정적 제공을 위해 최선을 다하겠습니다.\n\n감사합니다.","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "1327","aplcnBgngYmd" : "20230619","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "나이스마스터","rgtrDptNm" : "교육부","mdfrNm" : "나이스마스터","mdfrDptNm" : "교육부","rgtrId" : "neismaster","regDt" : "20230620000150991","mdfrId" : "neismaster","mdfcnDt" : "20230620203403485","chk" : "0"},{"ntcMteId" : "NTCPASA002023060007","ntcMteTitlNm" : "[대국민서비스] 정부24에서 온라인 민원을 신청할 수 있습니다.","ntcMteCn" : "앞으로는 나이스 홈에듀 민원서비스가 아닌 <strong>정부24</strong>에서 온라인 민원을 신청하실 수 있습니다.\n\n온라인 민원을 발급하고자 하시는 분들께서는 아래와 같이 <strong>정부24</strong>에서 신청해주십시오.\n\n**1\\. 정부24민원서비스 접속**\nhttps://www.gov.kr/ 접속 후 초기화면에서 민원 종류를 검색합니다.\n\n**2\\. 신원 확인\\(공동인증서\\)**\n정부24민원서비스를 이용하기 위해서는 사전에 은행 또는 증권사에서 공동인증서를 발급 받아 신원확인 절차를 거쳐야 교육제증명 발급이 가능합니다.\n\n**3\\. 민원서류 신청**\n온라인 발급 가능한 민원에서 해당 민원 종류를 선택 후 민원인 신청정보 입력(주소, 용도 등)을 입력합니다.\n\n**4\\. 민원서류 발급\\(저장 및 프린터 출력\\)**\n민원서류를 PDF 파일로 개인 컴퓨터에 저장하여 프린터를 통해 출력이 가능합니다.\n\n나이스 교육제증명의 안정적 제공을 위해 최선을 다하겠습니다.\n\n감사합니다.","pstStsCd" : "01","fileRefrnId" : "","ntcMteInqCnt" : "36055","aplcnBgngYmd" : "20230619","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "교육부기관마스터","rgtrDptNm" : "교육부","mdfrNm" : "나이스마스터","mdfrDptNm" : "교육부","rgtrId" : "aumA000","regDt" : "20230609135524642","mdfrId" : "neismaster","mdfcnDt" : "20230620000407715","chk" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj.set_useclientlayout("true");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ntcMteId","type" : "string","size" : "256"},{"id" : "ntcMteTitlNm","type" : "string","size" : "256"},{"id" : "ntcMteCn","type" : "string","size" : "256"},{"id" : "ntcMteClfCd","type" : "string","size" : "256"},{"id" : "pstStsCd","type" : "string","size" : "256"},{"id" : "fileRefrnId","type" : "string","size" : "256"},{"id" : "ntcMteInqCnt","type" : "bigdecimal","size" : "256"},{"id" : "aplcnBgngYmd","type" : "string","size" : "256"},{"id" : "aplcnEndYmd","type" : "string","size" : "256"},{"id" : "aplcnBgngTm","type" : "string","size" : "256"},{"id" : "aplcnEndTm","type" : "string","size" : "256"},{"id" : "imptYn","type" : "string","size" : "256"},{"id" : "rgtrNm","type" : "string","size" : "256"},{"id" : "rgtrDptNm","type" : "string","size" : "256"},{"id" : "mdfrNm","type" : "string","size" : "256"},{"id" : "mdfrDptNm","type" : "string","size" : "256"},{"id" : "rgtrId","type" : "string","size" : "256"},{"id" : "regDt","type" : "string","size" : "256"},{"id" : "mdfrId","type" : "string","size" : "256"},{"id" : "mdfcnDt","type" : "string","size" : "256"},{"id" : "chk","type" : "int","size" : "1"}]},"Rows" : [{"ntcMteId" : "NTCPASA002023060006","ntcMteTitlNm" : "[대국민서비스] 나이스 대국민서비스 상담센터 번호 안내입니다.","ntcMteCn" : "<strong><span style=\"color: #4397f0\">나이스 대국민서비스</span></strong>와 관련하여 상담센터 전화번호를 안내드립니다.\n\n나이스 대국민서비스 홈페이지를 사용하시면서 생기신 사용질의 그 밖에 궁금하신 사항이 있으시면 상담센터로 문의 부탁드립니다.\n\n\\- 운영시간: 08:00 \\~ 18:00 \\(월\\~금\\, 주말 및 공휴일 제외\\)\n\\- 상담번호: 1600\\-7440 \\(나이스 대국민서비스\\, 사용자지원\\)\n\n나이스 대국민서비스의 안정적 제공을 위해 최선을 다하겠습니다.\n\n감사합니다.","pstStsCd" : "01버튼","fileRefrnId" : "","ntcMteInqCnt" : "39535","aplcnBgngYmd" : "20230619","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "Y","rgtrNm" : "교육부기관마스터","rgtrDptNm" : "교육부","mdfrNm" : "이우영","mdfrDptNm" : "한국교육학술정보원(KERIS)","rgtrId" : "aumA000","regDt" : "20230609135331870","mdfrId" : "wylee1","mdfcnDt" : "20250415092002577","chk" : "0"},{"ntcMteId" : "NTCPASA002024120002","ntcMteTitlNm" : "나이스-정부24 시스템 작업으로 인한 교육제증명 발급 일시 중단 안내","ntcMteCn" : "나이스와 정부24 간 시스템 연계 구조 개선 작업으로 교육제증명 발급 서비스가 일시 중단될 예정입니다.\n\n○ 중단일시 : 2024. 12. 5.(목) 19시 \\~ 22시(3시간)\n ※ 제증명 발급 중단 시간은 작업 상황에 따라 변동될 수 있습니다.\n\n항상 안정적인 서비스를 제공하기 위해 노력하겠습니다.\n감사합니다.","pstStsCd" : "02버튼","fileRefrnId" : "[E4AmOR3yQ0goY40G1X/k3LtUoQjGCo1tM+DlmUXmfdk=","ntcMteInqCnt" : "7721","aplcnBgngYmd" : "20241203","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "이우영","rgtrDptNm" : "디지털인프라담당관","mdfrNm" : "이우영","mdfrDptNm" : "디지털인프라담당관","rgtrId" : "wylee1","regDt" : "20241203095127486","mdfrId" : "wylee1","mdfcnDt" : "20241203095127486","chk" : "0"},{"ntcMteId" : "NTCPASA002024060001","ntcMteTitlNm" : "정부24 시스템 정기점검으로 인한 교육제증명 발급 일시 중단 안내","ntcMteCn" : "**<span style=\"font-size: 10pt;\">안정적인 정부24 운영을 위한 시스템 정기점검으로</span>**\n**<span style=\"font-size: 10pt;\">교육제증명 발급 서비스가 일시 중단될 예정입니다.</span>**\n\n**<span style=\"font-size: 10pt;\">작업 일시: 2024. 6.14.(금) 22:00 \\~ 6.15.(토) 08:00 (총 10시간)</span>**\n**<span style=\"font-size: 10pt;\">서비스 중단 시간:</span> <span style=\"font-size: 13.3333px;\">2024\\. 6\\.14\\.\\(금\\) 22:00 \\~ 6\\.15\\.\\(토\\) 06:00 \\(총 8시간\\)</span></strong>\n**<span style=\"font-size: 13.3333px;\">※ 작업 진행 상황에 따라 시간이 변동될 수 있습니다.</span>**\n\n**<span style=\"font-size: 13.3333px;\">이용에 불편을 드려 죄송합니다.</span>**","pstStsCd" : "03버튼","fileRefrnId" : "","ntcMteInqCnt" : "8605","aplcnBgngYmd" : "20240613","aplcnEndYmd" : "99991231","aplcnBgngTm" : "000000","aplcnEndTm" : "235900","imptYn" : "N","rgtrNm" : "주상훈","rgtrDptNm" : "디지털인프라담당관","mdfrNm" : "주상훈","mdfrDptNm" : "디지털인프라담당관","rgtrId" : "kswaste","regDt" : "20240613135253569","mdfrId" : "kswaste","mdfcnDt" : "20240613135253569","chk" : "0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","45","5","114","62",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("55");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","46","85","824","185",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_createrowstype("all");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj.set_selecttype("cell");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/><Cell col=\"2\" text=\"col3\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:ntcMteTitlNm\"/><Cell col=\"1\" edittype=\"button\" displaytype=\"buttoncontrol\" accessibilitydescription=\"test button description\" text=\"bind:pstStsCd\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:regDt\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","58","757","94","67",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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

        };
        this.loadIncludeScript("RP_104406_testGridButton.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
