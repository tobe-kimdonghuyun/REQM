(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("prgmPopup");
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(990,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCd1", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd2", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd3", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCd4", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCdType", this);
            obj._setContents("<ColumnInfo><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cdId\">CEAUSECD</Col><Col id=\"cdNm\">[통신/구내전용회선]신청구분</Col></Row><Row><Col id=\"cdId\">CDAUSECD</Col><Col id=\"cdNm\">[통신/국내전용회선]신청구분</Col></Row><Row><Col id=\"cdId\">CDAGB</Col><Col id=\"cdNm\">[통신/국내전용회선]구분</Col></Row><Row><Col id=\"cdId\">CDATGB</Col><Col id=\"cdNm\">[통신/국내전용회선]전화구분</Col></Row><Row><Col id=\"cdId\">CDABT</Col><Col id=\"cdNm\">[통신/국내전용회선]벨타입</Col></Row><Row><Col id=\"cdId\">CDARGB</Col><Col id=\"cdNm\">[통신/국내전용회선]라디오회선</Col></Row><Row><Col id=\"cdId\">AISDLAMAA</Col><Col id=\"cdNm\">[이동지역/운전자면허신청]기동지역출입여부</Col></Row><Row><Col id=\"cdId\">TSCFWLBLD</Col><Col id=\"cdNm\">[시설관리/시설물설치작업계획서]건물구분</Col></Row><Row><Col id=\"cdId\">TSCFWLDNN</Col><Col id=\"cdNm\">[시설관리/시설물설치작업계획서]작업시간구분</Col></Row><Row><Col id=\"cdId\">TSCFWLARA</Col><Col id=\"cdNm\">[시설관리/시설물설치작업계획서]작업지역구분</Col></Row><Row><Col id=\"cdId\">TSCFWLOBJ</Col><Col id=\"cdNm\">[시설관리/시설물설치작업계획서]공사목적구분</Col></Row><Row><Col id=\"cdId\">W43</Col><Col id=\"cdNm\">서비스문의 유형</Col></Row><Row><Col id=\"cdId\">W44</Col><Col id=\"cdNm\">처리완료코드</Col></Row><Row><Col id=\"cdId\">W46</Col><Col id=\"cdNm\">상태 코드</Col></Row><Row><Col id=\"cdId\">ISMMAJOR</Col><Col id=\"cdNm\">이슈 우선순위</Col></Row><Row><Col id=\"cdId\">ISMAREA</Col><Col id=\"cdNm\">이슈 업무영역</Col></Row><Row><Col id=\"cdId\">RIMEFFECT</Col><Col id=\"cdNm\">리스크 영향도</Col></Row><Row><Col id=\"cdId\">RIMCONTROL</Col><Col id=\"cdNm\">리스크 통제수준</Col></Row><Row><Col id=\"cdId\">RISKAREA</Col><Col id=\"cdNm\">리스크 리스크영역</Col></Row><Row><Col id=\"cdId\">HAPPENPER</Col><Col id=\"cdNm\">리스크 발생가능성</Col></Row><Row><Col id=\"cdId\">RISKLOOK</Col><Col id=\"cdNm\">리스크 노출도</Col></Row><Row><Col id=\"cdId\">WORKLEVEL</Col><Col id=\"cdNm\">업무단계</Col></Row><Row><Col id=\"cdId\">RISKCODE</Col><Col id=\"cdNm\">리스크 YES/NO</Col></Row><Row><Col id=\"cdId\">SDUSER</Col><Col id=\"cdNm\">서비스데스크 등록자</Col></Row><Row><Col id=\"cdId\">SDCODE</Col><Col id=\"cdNm\">서비스데스크 상태(YN)</Col></Row><Row><Col id=\"cdId\">PSRWRK</Col><Col id=\"cdNm\">작업유형</Col></Row><Row><Col id=\"cdId\">PSRFRM</Col><Col id=\"cdNm\">작업형태</Col></Row><Row><Col id=\"cdId\">PSRIMP</Col><Col id=\"cdNm\">중요도</Col></Row><Row><Col id=\"cdId\">PSRURG</Col><Col id=\"cdNm\">긴급도</Col></Row><Row><Col id=\"cdId\">PSRMED</Col><Col id=\"cdNm\">접수경로</Col></Row><Row><Col id=\"cdId\">PSRCST</Col><Col id=\"cdNm\">협의결과</Col></Row><Row><Col id=\"cdId\">ECCAT</Col><Col id=\"cdNm\">통합테스트Pool 유형</Col></Row><Row><Col id=\"cdId\">RIMTERM</Col><Col id=\"cdNm\">리스크 평가주기</Col></Row><Row><Col id=\"cdId\">USEROPENYN</Col><Col id=\"cdNm\">리스크 고객공개여부</Col></Row><Row><Col id=\"cdId\">CHECKRST</Col><Col id=\"cdNm\">이슈 검토결과</Col></Row><Row><Col id=\"cdId\">RIMTYPE</Col><Col id=\"cdNm\">리스크 조치유형</Col></Row><Row><Col id=\"cdId\">REQCAT</Col><Col id=\"cdNm\">요구사항유형</Col></Row><Row><Col id=\"cdId\">ELEUSECLO</Col><Col id=\"cdNm\">[전기사용/난로신청]사용기간 종료유형</Col></Row><Row><Col id=\"cdId\">PRI</Col><Col id=\"cdNm\">요구사항우선순위</Col></Row><Row><Col id=\"cdId\">ROLENAME</Col><Col id=\"cdNm\">권한리스트</Col></Row><Row><Col id=\"cdId\">DEADDAY</Col><Col id=\"cdNm\">남은기한</Col></Row><Row><Col id=\"cdId\">MW</Col><Col id=\"cdNm\">월간/주간구분</Col></Row><Row><Col id=\"cdId\">RPT03</Col><Col id=\"cdNm\">AO 보고서</Col></Row><Row><Col id=\"cdId\">W16</Col><Col id=\"cdNm\">해결방안</Col></Row><Row><Col id=\"cdId\">W13</Col><Col id=\"cdNm\">작업유형</Col></Row><Row><Col id=\"cdId\">Z07</Col><Col id=\"cdNm\">완료코드(자료신청)</Col></Row><Row><Col id=\"cdId\">Z04</Col><Col id=\"cdNm\">우선순위</Col></Row><Row><Col id=\"cdId\">S01</Col><Col id=\"cdNm\">범주</Col></Row><Row><Col id=\"cdId\">AISVECVET</Col><Col id=\"cdNm\">[이동지역/차량장비말소]차량장비구분CD</Col></Row><Row><Col id=\"cdId\">AISVIOVET</Col><Col id=\"cdNm\">[이동지역/차량장비반출입]차량장비구분CD</Col></Row><Row><Col id=\"cdId\">AISVIOCHR</Col><Col id=\"cdNm\">[이동지역/차량장비반출입]과금여부</Col></Row><Row><Col id=\"cdId\">AISDLARES</Col><Col id=\"cdNm\">[이동지역/운전자면허신청]시험결과</Col></Row><Row><Col id=\"cdId\">AISDLASTS</Col><Col id=\"cdNm\">[이동지역/운전자면허신청]신청상태</Col></Row><Row><Col id=\"cdId\">W34</Col><Col id=\"cdNm\">영향도</Col></Row><Row><Col id=\"cdId\">W36</Col><Col id=\"cdNm\">반려횟수</Col></Row><Row><Col id=\"cdId\">W35</Col><Col id=\"cdNm\">처리종료유형</Col></Row><Row><Col id=\"cdId\">W38</Col><Col id=\"cdNm\">공정관리코드</Col></Row><Row><Col id=\"cdId\">W37</Col><Col id=\"cdNm\">검토결과</Col></Row><Row><Col id=\"cdId\">W40</Col><Col id=\"cdNm\">배포작업유형</Col></Row><Row><Col id=\"cdId\">W39</Col><Col id=\"cdNm\">결과판정</Col></Row><Row><Col id=\"cdId\">W42</Col><Col id=\"cdNm\">적합도평가 기준</Col></Row><Row><Col id=\"cdId\">W41</Col><Col id=\"cdNm\">배포결과</Col></Row><Row><Col id=\"cdId\">TELGRADE</Col><Col id=\"cdNm\">[통신/공사신청]전화등급</Col></Row><Row><Col id=\"cdId\">TELSUB</Col><Col id=\"cdNm\">[통신/공사신청]부가기능</Col></Row><Row><Col id=\"cdId\">TELUSE</Col><Col id=\"cdNm\">[통신/공사신청]용도</Col></Row><Row><Col id=\"cdId\">TELCATEGORY</Col><Col id=\"cdNm\">[통신/공사신청]종류</Col></Row><Row><Col id=\"cdId\">TELTYPE</Col><Col id=\"cdNm\">[통신/공사신청]신청구분</Col></Row><Row><Col id=\"cdId\">LANCATEGORY</Col><Col id=\"cdNm\">[통신/공사신청]종류</Col></Row><Row><Col id=\"cdId\">LANTYPE</Col><Col id=\"cdNm\">[통신/공사신청]신청구분</Col></Row><Row><Col id=\"cdId\">CABLEDATATYPE</Col><Col id=\"cdNm\">[통신/공사신청]데이터</Col></Row><Row><Col id=\"cdId\">CABLEUSE</Col><Col id=\"cdNm\">[통신/공사신청]용도</Col></Row><Row><Col id=\"cdId\">CABLECABLETYPE</Col><Col id=\"cdNm\">[통신/공사신청]구분</Col></Row><Row><Col id=\"cdId\">CABLETYPE</Col><Col id=\"cdNm\">[통신/공사신청]신청구분</Col></Row><Row><Col id=\"cdId\">CABLEFORMLR</Col><Col id=\"cdNm\">[통신/공사신청]선식</Col></Row><Row><Col id=\"cdId\">CABLETELTYPE</Col><Col id=\"cdNm\">[통신/공사신청]전화</Col></Row><Row><Col id=\"cdId\">CATVTERM</Col><Col id=\"cdNm\">[통신/공사신청]사용기간</Col></Row><Row><Col id=\"cdId\">CATVTVTYPE</Col><Col id=\"cdNm\">[통신/공사신청]TV방식</Col></Row><Row><Col id=\"cdId\">CATVTYPE</Col><Col id=\"cdNm\">[통신/공사신청]신청구분</Col></Row><Row><Col id=\"cdId\">ELEETACAN</Col><Col id=\"cdNm\">[전기]해지사유</Col></Row><Row><Col id=\"cdId\">ELEFLAFEE</Col><Col id=\"cdNm\">[전기사용/형광램프]청구유무</Col></Row><Row><Col id=\"cdId\">ELESTAPRD</Col><Col id=\"cdNm\">[전기사용/난로신청]제품종류</Col></Row><Row><Col id=\"cdId\">EOAAgree</Col><Col id=\"cdNm\">[전기사용/공사미소유건물]합의서 동의</Col></Row><Row><Col id=\"cdId\">EOAEleGb</Col><Col id=\"cdNm\">[전기사용/공사미소유건물]전기전원방식</Col></Row><Row><Col id=\"cdId\">EOAEleType</Col><Col id=\"cdNm\">[전기사용/공사미소유건물]전기사용방식</Col></Row><Row><Col id=\"cdId\">BN</Col><Col id=\"cdNm\">식별위치정보-장소</Col></Row><Row><Col id=\"cdId\">TITLECD</Col><Col id=\"cdNm\">직책코드</Col></Row><Row><Col id=\"cdId\">GRADECD</Col><Col id=\"cdNm\">직급코드</Col></Row><Row><Col id=\"cdId\">MNDTCD</Col><Col id=\"cdNm\">보임코드</Col></Row><Row><Col id=\"cdId\">01-Apr</Col><Col id=\"cdNm\">결재선유형</Col></Row><Row><Col id=\"cdId\">TIMESET</Col><Col id=\"cdNm\">TIMESET</Col></Row><Row><Col id=\"cdId\">aprstatus</Col><Col id=\"cdNm\">결재상태</Col></Row><Row><Col id=\"cdId\">aprent</Col><Col id=\"cdNm\">결재유형</Col></Row><Row><Col id=\"cdId\">Y280</Col><Col id=\"cdNm\">전결대상</Col></Row><Row><Col id=\"cdId\">STAT100</Col><Col id=\"cdNm\">ARC</Col></Row><Row><Col id=\"cdId\">TSP</Col><Col id=\"cdNm\">입주자지원시스템</Col></Row><Row><Col id=\"cdId\">ELEEEACLA</Col><Col id=\"cdNm\">[전기사용/공사건물]신청종류</Col></Row><Row><Col id=\"cdId\">TSCWPLBLD</Col><Col id=\"cdNm\">[시설관리/작업계획서]건물구분</Col></Row><Row><Col id=\"cdId\">TSCWPLDNN</Col><Col id=\"cdNm\">[시설관리/작업계획서]작업시간구분</Col></Row><Row><Col id=\"cdId\">TSCWPLARA</Col><Col id=\"cdNm\">[시설관리/작업계획서]작업지역구분</Col></Row><Row><Col id=\"cdId\">TSCWPLOBJ</Col><Col id=\"cdNm\">[시설관리/작업계획서]공사목적구분</Col></Row><Row><Col id=\"cdId\">TSCWPLMAT</Col><Col id=\"cdNm\">[시설관리/작업계획서]기존시설물구분</Col></Row><Row><Col id=\"cdId\">EEAEleType</Col><Col id=\"cdNm\">[전기사용/공사건물]사용방식</Col></Row><Row><Col id=\"cdId\">EEAEleGb</Col><Col id=\"cdNm\">[전기사용/공사건물]전원방식</Col></Row><Row><Col id=\"cdId\">EEAElHiLo</Col><Col id=\"cdNm\">[전기사용/공사건물]고/저압 구분</Col></Row><Row><Col id=\"cdId\">EEAAgree</Col><Col id=\"cdNm\">[전기사용/공사건물]합의서 동의</Col></Row><Row><Col id=\"cdId\">EEAUseEleDtlDoc</Col><Col id=\"cdNm\">[전기사용/공사건물]시설명세서 작성여부</Col></Row><Row><Col id=\"cdId\">EEAUseEleFee</Col><Col id=\"cdNm\">[전기사용/공사건물]전기료 발생유무</Col></Row><Row><Col id=\"cdId\">WATERTYP</Col><Col id=\"cdNm\">[수도]구분</Col></Row><Row><Col id=\"cdId\">WATSTATUS</Col><Col id=\"cdNm\">[수도]수도사용상태</Col></Row><Row><Col id=\"cdId\">WALIVESTATUS</Col><Col id=\"cdNm\">[수도]입주상태</Col></Row><Row><Col id=\"cdId\">TSC7WORK</Col><Col id=\"cdNm\">[시설관리/작업계획서]7공정</Col></Row><Row><Col id=\"cdId\">PAICLA</Col><Col id=\"cdNm\">[FTZ]출입증신청구분</Col></Row><Row><Col id=\"cdId\">PAISTATUS</Col><Col id=\"cdNm\">[FTZ]발급상태</Col></Row><Row><Col id=\"cdId\">DSAAREA</Col><Col id=\"cdNm\">[위해물품]지역</Col></Row><Row><Col id=\"cdId\">AISVERFUE</Col><Col id=\"cdNm\">[이동지역]연료종류</Col></Row><Row><Col id=\"cdId\">AISVERSTA</Col><Col id=\"cdNm\">[이동지역]차량장비운용상태</Col></Row><Row><Col id=\"cdId\">AISVERVTY</Col><Col id=\"cdNm\">[이동지역]차량장비구분</Col></Row><Row><Col id=\"cdId\">CMMCLA</Col><Col id=\"cdNm\">[ICT]서비스구분</Col></Row><Row><Col id=\"cdId\">CMMCUST</Col><Col id=\"cdNm\">[통신]고객유형</Col></Row><Row><Col id=\"cdId\">CACTP</Col><Col id=\"cdNm\">[통신]신규/변경구분</Col></Row><Row><Col id=\"cdId\">ELEEUASTP</Col><Col id=\"cdNm\">[전기사용/변압기]해지방법</Col></Row><Row><Col id=\"cdId\">CACTELSERV</Col><Col id=\"cdNm\">[통신[기간사업자</Col></Row><Row><Col id=\"cdId\">CACCANTP</Col><Col id=\"cdNm\">[통신]해지구분</Col></Row><Row><Col id=\"cdId\">ELEEUAFEE</Col><Col id=\"cdNm\">[전기사용/변압기]요금</Col></Row><Row><Col id=\"cdId\">ELEEUAPFE</Col><Col id=\"cdNm\">[전기사용/변압기]이용선택요금</Col></Row><Row><Col id=\"cdId\">ELELFSCPR</Col><Col id=\"cdNm\">[전기/부하시설]계약전력환산율(Kw)</Col></Row><Row><Col id=\"cdId\">ELELFSMTR</Col><Col id=\"cdNm\">[전기/부하시설]환산설비명</Col></Row><Row><Col id=\"cdId\">AISSAFETY</Col><Col id=\"cdNm\">차량검사기관</Col></Row><Row><Col id=\"cdId\">TSCWPLARAN</Col><Col id=\"cdNm\">[시설관리/작업계획서]작업지역구분</Col></Row><Row><Col id=\"cdId\">PRCLA</Col><Col id=\"cdNm\">[FTZ/출입증반납]신청구분</Col></Row><Row><Col id=\"cdId\">WAPWATCHBOX</Col><Col id=\"cdNm\">[이동지역/작업승인]반입초소</Col></Row><Row><Col id=\"cdId\">TSCFWLMAT</Col><Col id=\"cdNm\">[시설관리/시설물설치작업계획서]기존시설물구분</Col></Row><Row><Col id=\"cdId\">AISVIOVOS</Col><Col id=\"cdNm\">[이동지역/차량장비반출입]차량장비운용상태</Col></Row><Row><Col id=\"cdId\">AISWAPDNN</Col><Col id=\"cdNm\">[이동지역/작업승인]작업시간구분</Col></Row><Row><Col id=\"cdId\">AISWAPLOC</Col><Col id=\"cdNm\">[이동지역/작업승인]작업/공사위치</Col></Row><Row><Col id=\"cdId\">AISWAPOBJ</Col><Col id=\"cdNm\">[이동지역/작업승인]작업목적</Col></Row><Row><Col id=\"cdId\">AISWAPSTA</Col><Col id=\"cdNm\">[이동지역/작업승인]처리상태</Col></Row><Row><Col id=\"cdId\">WATWTSTA</Col><Col id=\"cdNm\">[수도/수도해지]수도사용상태</Col></Row><Row><Col id=\"cdId\">TSCRWLBLD</Col><Col id=\"cdNm\">[시설관리/원상회복작업계획서]건물구분</Col></Row><Row><Col id=\"cdId\">TSCRWLDNN</Col><Col id=\"cdNm\">[시설관리/원상회복작업계획서]작업시간구분</Col></Row><Row><Col id=\"cdId\">TSCRWLARA</Col><Col id=\"cdNm\">[시설관리/원상회복작업계획서]작업지역구분</Col></Row><Row><Col id=\"cdId\">TSCRWLOBJ</Col><Col id=\"cdNm\">[시설관리/원상회복작업계획서]공사목적구분</Col></Row><Row><Col id=\"cdId\">TSCRWLMAT</Col><Col id=\"cdNm\">[시설관리/원상회복작업계획서]기존시설물구분</Col></Row><Row><Col id=\"cdId\">WORDIT</Col><Col id=\"cdNm\">유입시점</Col></Row><Row><Col id=\"cdId\">WORDSIG</Col><Col id=\"cdNm\">결함중요도</Col></Row><Row><Col id=\"cdId\">WORUNIT</Col><Col id=\"cdNm\">단위</Col></Row><Row><Col id=\"cdId\">W20</Col><Col id=\"cdNm\">테스트 결과 분류</Col></Row><Row><Col id=\"cdId\">W19</Col><Col id=\"cdNm\">테스트 미수행 분류</Col></Row><Row><Col id=\"cdId\">CDATVGB</Col><Col id=\"cdNm\">[통신/국내전용회선]TV회선</Col></Row><Row><Col id=\"cdId\">CARUSECD</Col><Col id=\"cdNm\">[통신/공항통신장비임대]신청구분</Col></Row><Row><Col id=\"cdId\">CAFUSECD</Col><Col id=\"cdNm\">[통신/공항시설물사용신청]신청구분</Col></Row><Row><Col id=\"cdId\">CSTGB</Col><Col id=\"cdNm\">[통신/양도양수신청]승계대상구분</Col></Row><Row><Col id=\"cdId\">CSTTY</Col><Col id=\"cdNm\">[통신/양도양수신청]전화가입형태</Col></Row><Row><Col id=\"cdId\">CTPCANCD</Col><Col id=\"cdNm\">[통신/전화서비스해지]해지구분</Col></Row><Row><Col id=\"cdId\">CLPLTY</Col><Col id=\"cdNm\">[통신/LAN해지]서비스구분</Col></Row><Row><Col id=\"cdId\">CLPCANCD</Col><Col id=\"cdNm\">[통신/LAN해지]해지구분</Col></Row><Row><Col id=\"cdId\">CCSUSECD</Col><Col id=\"cdNm\">[통신/공항CATV신청]신청구분</Col></Row><Row><Col id=\"cdId\">TSPCLO</Col><Col id=\"cdNm\">[입주자지원포탈]종료코드</Col></Row><Row><Col id=\"cdId\">ORGCMNCODNM</Col><Col id=\"cdNm\">고객유형명</Col></Row><Row><Col id=\"cdId\">WORSTATUS</Col><Col id=\"cdNm\">[공종]처리상태</Col></Row><Row><Col id=\"cdId\">WORFT</Col><Col id=\"cdNm\">[작업지시]승인여부</Col></Row><Row><Col id=\"cdId\">SAMPLECONT</Col><Col id=\"cdNm\">[샘플]계약정보</Col></Row><Row><Col id=\"cdId\">SAMPLELOCAL</Col><Col id=\"cdNm\">[샘플]위치정보</Col></Row><Row><Col id=\"cdId\">FTECD</Col><Col id=\"cdNm\">[FTZ]인원출입증_구분</Col></Row><Row><Col id=\"cdId\">FTEETC</Col><Col id=\"cdNm\">[FTZ]인원출입증_기타</Col></Row><Row><Col id=\"cdId\">GPCODE</Col><Col id=\"cdNm\">[이동지역]초소목록코드</Col></Row><Row><Col id=\"cdId\">TIDCAT</Col><Col id=\"cdNm\">[입주자서비스/ID신청]신청ID유형</Col></Row><Row><Col id=\"cdId\">TIDSTATUS</Col><Col id=\"cdNm\">[입주자서비스/ID신청]처리상태</Col></Row><Row><Col id=\"cdId\">AISVERVHDV</Col><Col id=\"cdNm\">[이동지역]차종(배기량)규모</Col></Row><Row><Col id=\"cdId\">AISVERVHNAME</Col><Col id=\"cdNm\">[이동지역/차량등록]차량장비명</Col></Row><Row><Col id=\"cdId\">AISVERVHUSE</Col><Col id=\"cdNm\">[이동지역/차량등록]용도</Col></Row><Row><Col id=\"cdId\">CMMCACCPC</Col><Col id=\"cdNm\">[통신/신청변경]통화허용등급</Col></Row><Row><Col id=\"cdId\">AISVIOGUBUN</Col><Col id=\"cdNm\">[이동지역/차량장비반출입]반입반출구분</Col></Row><Row><Col id=\"cdId\">ELEFLACOST</Col><Col id=\"cdNm\">[전기/형광램프]램프/안정기단가</Col></Row><Row><Col id=\"cdId\">TSPLOC</Col><Col id=\"cdNm\">입주자지원_신청위치구분</Col></Row><Row><Col id=\"cdId\">TSPASSCD</Col><Col id=\"cdNm\">입주자지원_처리자구분</Col></Row><Row><Col id=\"cdId\">FCACLA</Col><Col id=\"cdNm\">[FTZ]통행증신청구분</Col></Row><Row><Col id=\"cdId\">FCAVHTYPE</Col><Col id=\"cdNm\">[FTZ/통행증]차종구분</Col></Row><Row><Col id=\"cdId\">FCALICTYPE</Col><Col id=\"cdNm\">[FTZ/통행증]면허종류</Col></Row><Row><Col id=\"cdId\">WPLWORKAREA</Col><Col id=\"cdNm\">[작업계획서]작업지역구분</Col></Row><Row><Col id=\"cdId\">WPLWATCHBOX</Col><Col id=\"cdNm\">[작업계획서]반입초소</Col></Row><Row><Col id=\"cdId\">WPLWORKGUBUN</Col><Col id=\"cdNm\">[작업계획서]작업구분</Col></Row><Row><Col id=\"cdId\">TIDCATCD</Col><Col id=\"cdNm\">[입주자서비스/ID신청]신청구분</Col></Row><Row><Col id=\"cdId\">TIDPTNCD</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사구분</Col></Row><Row><Col id=\"cdId\">TIDREQCD</Col><Col id=\"cdNm\">[입주자서비스/ID신청]ID신청구분</Col></Row><Row><Col id=\"cdId\">TSPDOC</Col><Col id=\"cdNm\">[TSP]프로세스별 문서명</Col></Row><Row><Col id=\"cdId\">TIDPTNWOG</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹</Col></Row><Row><Col id=\"cdId\">TIDPTNWOGELE</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹_전기</Col></Row><Row><Col id=\"cdId\">TIDPTNWOGWAT</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹_수도,오수</Col></Row><Row><Col id=\"cdId\">TIDPTNWOGCMM</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹_통신</Col></Row><Row><Col id=\"cdId\">TIDPTNWOGFTZ</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹_FTZ</Col></Row><Row><Col id=\"cdId\">TIDPTNWOGSEC</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹_위해물품</Col></Row><Row><Col id=\"cdId\">TIDPTNWOGAIS</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹_이동지역</Col></Row><Row><Col id=\"cdId\">TIDPTNWOGTSC</Col><Col id=\"cdNm\">[입주자서비스/ID신청]협력사작업그룹_시설운영</Col></Row><Row><Col id=\"cdId\">STAPWR</Col><Col id=\"cdNm\">[전기/난로]전기용량구분</Col></Row><Row><Col id=\"cdId\">CAATELCAT</Col><Col id=\"cdNm\">[통신/공사신청]전화종류</Col></Row><Row><Col id=\"cdId\">CAATELGRA</Col><Col id=\"cdNm\">[통신/공사신청]전화등급</Col></Row><Row><Col id=\"cdId\">CAATELSUB</Col><Col id=\"cdNm\">[통신/공사신청]부가기능</Col></Row><Row><Col id=\"cdId\">CAATELTYP</Col><Col id=\"cdNm\">[통신/공사신청]신청구분</Col></Row><Row><Col id=\"cdId\">CAALANTYP</Col><Col id=\"cdNm\">[통신/공사신청]LAN신청구분</Col></Row><Row><Col id=\"cdId\">CAACABCTYP</Col><Col id=\"cdNm\">[통신/공사신청]케이블구분</Col></Row><Row><Col id=\"cdId\">CAACABTYP</Col><Col id=\"cdNm\">[통신/공사신청]케이블신청구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","25","23","135","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("코드유형");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSelList","25","66","455",null,null,"70",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCdType");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"cd\"/><Cell col=\"1\" text=\"nm\"/></Band><Band id=\"body\"><Cell text=\"bind:cdId\"/><Cell col=\"1\" text=\"bind:cdNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEctList",null,"66","455",null,"25","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCd1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"cd\"/><Cell col=\"1\" text=\"nm\"/></Band><Band id=\"body\"><Cell text=\"bind:cdId\"/><Cell col=\"1\" text=\"bind:cdNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","515","23","185","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"50","28","25","22",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",990,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("getCommonCode.xfdl", function() {
        /**
        *  PcMdi 프로젝트
        *  @FileName 	setGridFormat.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/06/05
        *  @Desction    팝업 유형 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/06/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearch = "";	// 부모에서 넘긴 검색조건

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수

        	// 초기화
        	this.fnInit();

        	// 그리드 항목명 목록 초기화
        	this.fnInitGrid();

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 초기화
        */
        this.fnInit = function()
        {
        	this.pvGrid = this.getOwnerFrame().pvGrid;
        	if (this.gfnIsNull(this.pvGrid)) {
        	    this.btnClose.click();

        		return;
        	}

        }

        /**
         * @description 그리드 항목명 목록 초기화
        */
        this.fnInitGrid = function()
        {

        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/



        this.btnSearch_onclick = function(obj,e)
        {
        	var arg = { id:"commonCodeSearch", cbf:"fn_callBack", dsCd1:"EMPTIT:A", dsCd2:"SVCCD:S", dsCd3:"Y10:B", dsCd4:"COMPROC" };

        	this.fn_CmmnCdLoad(arg);
        };

        this.fn_CmmnCdLoad = function(arg) {
            var strSvcId    = arg.id;
        	var strSvcUrl   = "com/comCdLoad.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = arg.cbf;
        	var isASync     = true;

        	for(key in arg) {
        		if(key.startsWith("ds")) {
        			strArg  += " " + key + ":" + arg[key];
        			outData += " " + key + "=" + key;
        		}
        	}

        	strArg   = "inData=" + nexacro.wrapQuote(strArg.trim());
        	outData = outData.trim();

            trace(strSvcId);
        	trace(callBackFnc);
        	trace(outData);
        	trace(strArg);

            this.gfnTransaction (strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isASync);
        }

        this.fn_callBack = function (sId)
        {
            //trace(this.dsCd1.saveXML());
        };

        this.dsCdType_onrowposchanged = function(obj,e)
        {
        	var arg = { id:"commonCodeSearch", cbf:"fn_callBack", dsCd1:this.dsCdType.getColumn(e.newrow, "cd") };

        	this.fn_CmmnCdLoad(arg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.grdSelList.addEventHandler("onselectchanged",this.grdSelList_onselectchanged,this);
            this.sta00_00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsCdType.addEventHandler("onrowposchanged",this.dsCdType_onrowposchanged,this);
        };
        this.loadIncludeScript("getCommonCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
