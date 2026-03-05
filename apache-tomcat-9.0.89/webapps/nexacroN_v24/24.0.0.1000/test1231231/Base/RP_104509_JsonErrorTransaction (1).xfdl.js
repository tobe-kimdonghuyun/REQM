(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("JsonErrorTransaction");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input_param", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "lotNo","type" : "STRING","size" : "256"},{"id" : "eqpId","type" : "STRING","size" : "256"},{"id" : "inspItemCd","type" : "STRING","size" : "256"},{"id" : "inspItemNm","type" : "STRING","size" : "256"},{"id" : "incomJobId","type" : "STRING","size" : "256"},{"id" : "incomSpecAbn","type" : "STRING","size" : "256"},{"id" : "incomCpk","type" : "STRING","size" : "256"},{"id" : "incomCpkLevel","type" : "STRING","size" : "256"},{"id" : "incomCpkStatus","type" : "STRING","size" : "256"},{"id" : "incomCriteria","type" : "STRING","size" : "256"},{"id" : "signDiffLevel","type" : "STRING","size" : "256"},{"id" : "signDiffStatus","type" : "STRING","size" : "256"},{"id" : "lotJobId","type" : "STRING","size" : "256"},{"id" : "lotAnaLevel","type" : "STRING","size" : "256"},{"id" : "lotAnaStatus","type" : "STRING","size" : "256"},{"id" : "lotCriteria","type" : "STRING","size" : "256"},{"id" : "incomCpkLevelNm","type" : "STRING","size" : "256"},{"id" : "incomSpecLevelNm","type" : "STRING","size" : "256"},{"id" : "incomPcSpecAbn","type" : "STRING","size" : "256"},{"id" : "incomPcSpecLevelNm","type" : "STRING","size" : "256"},{"id" : "lotAnaLevelNm","type" : "STRING","size" : "256"},{"id" : "signDiffLevelNm","type" : "STRING","size" : "256"},{"id" : "incomCpkLevelText","type" : "STRING","size" : "256"},{"id" : "plantCd","type" : "STRING","size" : "256"},{"id" : "plantNm","type" : "STRING","size" : "256"},{"id" : "status","type" : "STRING","size" : "256"},{"id" : "statusNm","type" : "STRING","size" : "256"},{"id" : "statusHist","type" : "STRING","size" : "256"},{"id" : "statusHistNm","type" : "STRING","size" : "256"},{"id" : "jobId","type" : "STRING","size" : "256"},{"id" : "gbmCd","type" : "STRING","size" : "256"},{"id" : "fctCd","type" : "STRING","size" : "256"},{"id" : "query","type" : "STRING","size" : "256"},{"id" : "_action","type" : "string","size" : "256"}]},"Rows" : [{"lotNo" : "MTEN8H1314","inspItemCd" : "QPP-11A011001","inspItemNm" : "Center MPCD[WHITE_255]","incomJobId" : "ANA_ABNC_PORT_202312144676","incomCpk" : "1.7","incomCpkLevel" : "1","incomCpkStatus" : "NORMAL","incomCriteria" : "","signDiffLevel" : "-9999","signDiffStatus" : "NORMAL","lotJobId" : "ANA_ABN_202312144718","lotAnaLevel" : "1","lotAnaStatus" : "NORMAL","lotCriteria" : "0","incomCpkLevelNm" : "PASS","incomSpecLevelNm" : "PASS","incomPcSpecAbn" : "PASS","incomPcSpecLevelNm" : "0(0%)","lotAnaLevelNm" : "동일(1)","signDiffLevelNm" : "분석제외","incomCpkLevelText" : "1.7","plantCd" : "P104","plantNm" : "[SEC]Mobile Gumi-Bonded","status" : "READY","statusNm" : "Ready","query" : " WITH CRI_LVL AS (   \n       SELECT *    \n       FROM   TBM_QA_ANAL_STD_LVL   \n       WHERE  1=1   \n       AND    ANAL_MODU        IN ('PRT')   \n       AND    ANAL_WAY         IN ('ABN_ANAL')   \n       AND    ANAL_STD_CODE    IN ('Criteria')   \n       AND    DEL_YN           = 'N' \n       AND    USE_YN           = 'Y' \n   ), CPK_LVL AS (   \n       SELECT *    \n       FROM   TBM_QA_ANAL_STD_LVL   \n       WHERE  1=1   \n       AND    ANAL_MODU        IN ('PRT')   \n       AND    ANAL_WAY         IN ('CPK_ANAL')   \n       AND    ANAL_STD_CODE    IN ('Cpk')   \n       AND    DEL_YN           = 'N' \n       AND    USE_YN           = 'Y' \n   )   \n   SELECT T3.VEND_CD \n        , T3.MATR_CD \n        , T3.LOT_NO             \n        , T3.EQP_ID             \n        , T3.INSP_ITEM_CD       \n        , T3.INSP_ITEM_NM       \n        , T3.INCOM_JOB_ID        \n        , T3.INCOM_CPK          \n        , T3.INCOM_CPK_LEVEL    \n        , T3.INCOM_CPK_STATUS   \n        , T3.INCOM_CRITERIA \n        , T3.INCOM_ANAL_MSG \n        , T3.SIGN_DIFF_LEVEL     \n        , T3.SIGN_DIFF_STATUS   \n        , T3.LOT_JOB_ID          \n        , T3.LOT_ANA_LEVEL         \n        , T3.LOT_ANA_STATUS     \n        , T3.LOT_CRITERIA \n        , T3.LOT_ANAL_MSG \n        , CASE WHEN (T3.INCOM_CPK_STATUS > = 'NORMAL') THEN 'PASS' ELSE 'FAIL' END      AS INCOM_CPK_LEVEL_NM \n        , CASE WHEN LOT_JOB_STATUS IN ('A','R','P') THEN '분석중'    \n               WHEN (T3.LOT_ANA_LEVEL_NM IS NULL OR LOT_JOB_STATUS IN ('E','N','M')) THEN '분석제외'                 \n               ELSE T3.LOT_ANA_LEVEL_NM || '(' || T3.LOT_ANA_LEVEL || ')' END           AS LOT_ANA_LEVEL_NM                                                                                            \n        , CASE WHEN INCOM_JOB_STATUS IN ('A','R','P') THEN '분석중'    \n               WHEN (T3.SIGN_DIFF_LEVEL_NM IS NULL OR INCOM_JOB_STATUS IN ('E','N','M')) THEN '분석제외'    \n               ELSE T3.SIGN_DIFF_LEVEL_NM || '(' || T3.SIGN_DIFF_LEVEL || ')'  END      AS SIGN_DIFF_LEVEL_NM                                                                                          \n        , NVL2(T3.INCOM_CPK,                                                                                                                                                                           \n        RTRIM(TO_CHAR(T3.INCOM_CPK, 'FM999,999,999,990.99'),'.'), CASE WHEN INCOM_JOB_STATUS IN ('A','R','P') THEN '분석중' ELSE '분석제외' END) AS INCOM_CPK_LEVEL_TEXT           \n        , NVL2(T3.INCOM_SPEC_ABN,                                                                                                                                                                      \n              CASE WHEN (T3.INCOM_SPEC_ABN = 'FAIL') THEN 'FAIL' || '' || '(' || TO_CHAR(T3.OVER_SL_CNT_SUM, 'FM999,999,999,990') || '/' || TO_CHAR(T3.INSP_CNT_SUM, 'FM999,999,999,990') || ')'      \n              ELSE  T3.INCOM_SPEC_ABN  END, CASE WHEN INCOM_JOB_STATUS IN ('A','R','P') THEN '분석중' ELSE '분석제외' END)                                AS INCOM_SPEC_LEVEL_NM \n   --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n , T3.INCOM_PC_SPEC_ABN AS INCOM_PC_SPEC_ABN                                                                                                                                                                     \n , NVL2(T3.INCOM_PC_SPEC_ABN,                                                                                                                                                                     \n        CASE WHEN T3.INCOM_PC_SPEC_ABN = 'FAIL' THEN 'FAIL' ELSE T3.PC_CNT_SUM || '' || '(' || RTRIM(TO_CHAR(NVL(T3.INCOM_PC_RATIO,0) * 100, 'FM999,999,999,990.99'),'.') || '%' || ')' END, '-') AS INCOM_PC_SPEC_LEVEL_NM    \n        , MM.PLANT_CD \n        , NVL(PC.PLANT_NM, MM.PLANT_CD) AS PLANT_NM \n        , MM.STATUS \n        ,CASE WHEN MM.STATUS = 'READY' THEN 'Ready'                             \n              WHEN MM.STATUS = 'CLOSED_AUTO' THEN 'Auto Closed'                    \n              WHEN MM.STATUS = 'CLOSED_MANUAL' THEN 'Manual Closed'  END        AS STATUS_NM           -- 상태명 \n        , MM.STATUS_HIST \n        , HM.COMM_CODE_NM AS STATUS_HIST_NM \n       FROM \n       ( \n       SELECT T2.VEND_CD  \n             ,T2.MATR_CD \n             ,T2.LOT_NO                                                AS LOT_NO               -- LOT NO \n             ,T2.MATR_GRP_CD \n             ,T2.EQP_ID                                                AS EQP_ID               -- 설비ID \n             ,T2.INSP_ITEM_CD                                          AS INSP_ITEM_CD         -- 검사항목코드 \n             ,T2.INSP_ITEM_NM                                          AS INSP_ITEM_NM         -- 검사항목명        \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.JOBID))          AS INCOM_JOB_ID         -- 입고검사 JOBID  \n             /*----------------------------------------------------------------------*/ \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.SPEC_ABN))       AS INCOM_SPEC_ABN       -- SPEC이상 \n             /*----------------------------------------------------------------------*/ \n              --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.PC_SPEC_ABN))    AS INCOM_PC_SPEC_ABN    -- PC SPEC이상 \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.PC_RATIO))       AS INCOM_PC_RATIO       -- PC RATIO \n             /*----------------------------------------------------------------------*/ \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.INSP_CPK))       AS INCOM_CPK            -- 공정능력 지수 \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.CPK_LEVEL))      AS INCOM_CPK_LEVEL      -- 공정능력 수준 \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.CPK_STATUS))     AS INCOM_CPK_STATUS     -- 공정능력 수준 상태(경고,주의) \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.CRITERIA))       AS INCOM_CRITERIA \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.ANAL_MSG))       AS INCOM_ANAL_MSG \n             /*----------------------------------------------------------------------*/ \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.ANA_LEVEL))      AS SIGN_DIFF_LEVEL      -- 유의차분석 수준 \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.ANA_LEVEL_NM))   AS SIGN_DIFF_LEVEL_NM   -- 유의차분석 수준명 \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA', T2.ANA_STATUS))     AS SIGN_DIFF_STATUS     -- 유의차분석 수준 상태(경고,주의) \n             /*----------------------------------------------------------------------*/ \n             ,MAX(DECODE(T2.ANA_CTGR, 'LOT_ANA'  , T2.JOBID))          AS LOT_JOB_ID            -- LOT비교분석 JOBID \n             ,MAX(DECODE(T2.ANA_CTGR, 'LOT_ANA'  , T2.ANA_LEVEL))      AS LOT_ANA_LEVEL        -- LOT비교분석 수준 \n             ,MAX(DECODE(T2.ANA_CTGR, 'LOT_ANA'  , T2.ANA_LEVEL_NM))   AS LOT_ANA_LEVEL_NM     -- LOT비교분석 수준명 \n             ,MAX(DECODE(T2.ANA_CTGR, 'LOT_ANA'  , T2.ANA_STATUS))     AS LOT_ANA_STATUS       -- LOT비교분석 수준 상태(경고,주의) \n             ,MAX(DECODE(T2.ANA_CTGR, 'LOT_ANA'  , T2.CRITERIA))       AS LOT_CRITERIA \n             ,MAX(DECODE(T2.ANA_CTGR, 'LOT_ANA'  , T2.ANAL_MSG))       AS LOT_ANAL_MSG \n             ,SUM(T2.INSP_CNT)       AS INSP_CNT_SUM \n             --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n             ,SUM(T2.PC_CNT)         AS PC_CNT_SUM \n             ,SUM(T2.OVER_SL_CNT)    AS OVER_SL_CNT_SUM \n             ,MAX(DECODE(T2.ANA_CTGR, 'INCOM_ANA'  , T2.JOB_STATUS))       AS INCOM_JOB_STATUS        \n             ,MAX(DECODE(T2.ANA_CTGR, 'LOT_ANA'  , T2.JOB_STATUS))         AS LOT_JOB_STATUS        \n        FROM  \n        ( \n         SELECT T1.JOBID  \n               ,T1.VEND_CD   \n               ,T1.MATR_CD  \n               ,T1.LOT_NO                        AS LOT_NO  \n               ,T1.MATR_GRP_CD                   AS MATR_GRP_CD  \n               ,T1.EQP_ID                        AS EQP_ID  \n               ,T1.ANA_CTGR                      AS ANA_CTGR  \n               ,T1.INSP_ITEM_CD                  AS INSP_ITEM_CD  \n               ,MP.INSP_ITEM_NM                  AS INSP_ITEM_NM  \n               ,T1.SPEC_ABN                      AS SPEC_ABN  \n                --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n               ,T1.PC_SPEC_ABN                   AS PC_SPEC_ABN  \n               ,ROUND(T1.INSP_CPK,2)             AS INSP_CPK  \n               ,T1.CPK_LEVEL                     AS CPK_LEVEL        -- CPK 차이수준      \n               ,CASE WHEN (T1.CPK_LEVEL  >= DECODE(RU.CPK_WAR, NULL, AR.CPK_WAR, RU.CPK_WAR)) THEN 'WARNING'   \n                     WHEN (T1.CPK_LEVEL  <  DECODE(RU.CPK_WAR, NULL, AR.CPK_WAR, RU.CPK_WAR))  \n                      AND (T1.CPK_LEVEL  >= DECODE(RU.CPK_CAU, NULL, AR.CPK_CAU, RU.CPK_CAU)) THEN 'CAUTION'   \n                     WHEN  T1.CPK_LEVEL  = -9999                                              THEN 'N/A'       \n                     ELSE  'NORMAL' END          AS CPK_STATUS   \n              ,T1.CRITERIA                       AS CRITERIA  \n              ,T1.ANA_LEVEL                      AS ANA_LEVEL      \n              ,CASE WHEN (T1.ANA_LEVEL   >= DECODE(RU.EQUI_WAR, NULL, AR.EQUI_WAR, RU.EQUI_WAR)) THEN 'WARNING'  \n                    WHEN (T1.ANA_LEVEL   <  DECODE(RU.EQUI_WAR, NULL, AR.EQUI_WAR, RU.EQUI_WAR)) AND  \n                        (T1.ANA_LEVEL    >= DECODE(RU.EQUI_CAU, NULL, AR.EQUI_CAU, RU.EQUI_CAU)) THEN 'CAUTION' \n                    WHEN  T1.ANA_LEVEL   = -9999                                                 THEN 'N/A'      \n               ELSE 'NORMAL' END        AS ANA_STATUS   \n              ,CM.COMM_CODE_NM          AS ANA_LEVEL_NM     -- 차이수준(동일,주의,수용,개선,비동일)  \n              ,T1.INSP_CNT \n              --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n              ,T1.PC_CNT \n              ,T1.PC_RATIO \n              ,T1.OVER_SL_CNT  \n              ,T1.ANAL_MSG \n              ,AN.JOB_STATUS -- ADD 2020.09.23 \n           FROM \n               ( \n                     /*------------------------------------------------------------*/   \n                     -- 입고검사분석(SPEC이상, 공정능력이상, 유의차분석)   \n                     /*------------------------------------------------------------*/   \n                     SELECT DISTINCT   \n                            MD.JOBID                              \n                           ,MM.VEND_CD               AS VEND_CD   \n                           ,MM.MATR_CD               AS MATR_CD                              \n                           ,MD.LOT_NO                AS LOT_NO   \n                           ,MM.INSP_YMD              AS INSP_YMD   \n                           --,A2.MATR_GRP_CD           AS MATR_GRP_CD --2020.09.25 A2 -> MM  \n                           ,MM.MATR_GRP_CD           AS MATR_GRP_CD   \n                           ,MD.EQP_ID                AS EQP_ID   \n                           ,MD.ANA_CTGR              AS ANA_CTGR   \n                           ,MD.INSP_ITEM_CD          AS INSP_ITEM_CD   \n                           ,A2.SPEC_ABN              AS SPEC_ABN   \n                           ,A2.PC_SPEC_ABN           AS PC_SPEC_ABN   \n                           ,(SELECT MIN(INSP_CPK) FROM TBA_ABNPRT2_OUTPUT WHERE JOBID = 'ANA_ABNC_PORT_202312144676') AS INSP_CPK   \n                           ,NVL2((SELECT MIN(INSP_CPK) FROM TBA_ABNPRT2_OUTPUT WHERE JOBID = 'ANA_ABNC_PORT_202312144676')          \n                               , (SELECT ANAL_LVL FROM CPK_LVL WHERE (A2.INSP_CPK >= ANAL_LVL_FROM AND A2.INSP_CPK < ANAL_LVL_TO)  AND ROWNUM < 2), -9999) AS CPK_LEVEL   -- 공정능력 차이수준  \n                           ,A2.CRITERIA              AS CRITERIA    \n                           ,NVL2(A2.CRITERIA, (SELECT ANAL_LVL FROM CRI_LVL WHERE (A2.CRITERIA >= ANAL_LVL_FROM AND A2.CRITERIA < ANAL_LVL_TO)  AND ROWNUM < 2), -9999) AS ANA_LEVEL   -- 유의차 차이수준    \n                           ,MM.PROD_GRP_CD   \n                           ,MM.MODEL_CD    \n                           ,MM.STATUS    \n                           ,A2.INSP_CNT        AS INSP_CNT \n                          --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n                           ,A2.PC_CNT          AS PC_CNT \n                           ,A2.PC_RATIO        AS PC_RATIO \n                           ,A2.OVER_SL_CNT     AS OVER_SL_CNT \n                           ,A2.ANAL_MSG        AS ANAL_MSG                        \n                     FROM   TBM_QA_PARTS_INCOM_MNTR  MM   \n                           ,TBD_QA_PARTS_INCOM_MNTR  MD   \n                           ,TBA_ABNPRT2_OUTPUT       A2      \n                     WHERE  1=1   \n                     AND    MM.VEND_CD               = MD.VEND_CD   \n                     AND    MM.MATR_CD               = MD.MATR_CD   \n                     AND    MM.LOT_NO                = MD.LOT_NO   \n                     AND    MD.JOBID                 = A2.JOBID(+)  --2020.09.25 outer join 변경 \n                     AND    MD.ANA_CTGR              IN ('INCOM_ANA')   \n                     AND    A2.JIG_CD(+)             IN ('TOTAL')   --2020.09.25 outer join 변경 \n                     AND    MM.MATR_CD               = 'GH96-14066A' \n                     AND    MM.VEND_CD               = 'C114-A3'                                   \n                     AND    MM.LOT_NO                = 'MTEN8H1314'                     \n                     AND    MM.DEL_YN                = 'N' \n                     UNION ALL   \n                     /*------------------------------------------------------------*/   \n                     -- LOT비교분석   \n                     /*------------------------------------------------------------*/   \n                     SELECT DISTINCT   \n                            MD.JOBID   \n                           ,MM.VEND_CD               AS VEND_CD   \n                           ,MM.MATR_CD               AS MATR_CD   \n                           ,MD.LOT_NO                AS LOT_NO   \n                           ,MM.INSP_YMD              AS INSP_YMD                             \n                           --,A3.MATR_GRP_CD           AS MATR_GRP_CD --2020.09.25 A3 -> MM  \n                           ,MM.MATR_GRP_CD           AS MATR_GRP_CD --2020.09.25 A3 -> MM  \n                           ,MD.EQP_ID                AS EQP_ID   \n                           ,MD.ANA_CTGR              AS ANA_CTGR   \n                           ,MD.INSP_ITEM_CD          AS INSP_ITEM_CD   \n                           ,NULL                     AS SPEC_ABN   \n                           --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n                           ,NULL                     AS PC_SPEC_ABN   \n                           ,NULL                     AS INSP_CPK   \n                           ,NULL                     AS CPK_LEVEL                       \n                           ,A3.CRITERIA              AS CRITERIA   \n                           ,(SELECT ANAL_LVL FROM CRI_LVL WHERE (A3.CRITERIA >= ANAL_LVL_FROM AND A3.CRITERIA < ANAL_LVL_TO)  AND ROWNUM < 2) AS ANA_LEVEL   -- LOT비교분석 차이수준   \n                           ,MM.PROD_GRP_CD   \n                           ,MM.MODEL_CD     \n                           ,MM.STATUS   \n                           ,0                        AS INSP_CNT \n                           --[IT VOC : 20200525081950599] PRE CONTROL 이상감지 추가  \n                           ,0                        AS PC_CNT \n                           ,0                        AS PC_RATIO \n                           ,0                        AS OVER_SL_CNT \n                           ,A3.ANAL_MSG              AS ANAL_MSG \n                     FROM   TBM_QA_PARTS_INCOM_MNTR  MM    \n                           ,TBD_QA_PARTS_INCOM_MNTR  MD   \n                           ,TBA_ABNPRT3_OUTPUT       A3        \n                     WHERE  1=1   \n                     AND    MM.VEND_CD               = MD.VEND_CD   \n                     AND    MM.MATR_CD               = MD.MATR_CD   \n                     AND    MM.LOT_NO                = MD.LOT_NO                       \n                     AND    MD.JOBID                 = A3.JOBID(+) --2020.09.25 outer join 변경  \n                     AND    A3.ANAL_FLAG(+)             = 'Y'      --2020.09.25 outer join 변경  \n                     AND    MM.MATR_CD               = 'GH96-14066A' \n                     AND    MM.VEND_CD               = 'C114-A3'                                   \n                     AND    MM.LOT_NO                = 'MTEN8H1314' \n                     AND    MM.DEL_YN                = 'N' \n               ) T1                                  \n               ,TBM_QA_PARTS_INSP_MAPP   MP         \n               ,TBM_QA_ANALYSIS          AN \n                 /*-------- 검사항목별 RULE 설정값 조회 -------------------------*/  \n                ,(SELECT *   \n                  FROM   TBM_QA_PARTS_ABN_RULE  \n                  WHERE  1=1  \n                  AND    RULE_TYPE        = 'INCOM'  \n                  AND    USE_YN           = 'Y'  \n                  AND    DEL_YN           = 'N'  \n                  AND    EQUI_CRT         = 'CRITERIA' \n                  AND    INSP_ITEM_CD     <> '*' )       RU  \n                 /*-------- 전체(DEFAULT) RULE 설정값 조회 ----------------------*/  \n                 ,(SELECT *   \n                   FROM   TBM_QA_PARTS_ABN_RULE   \n                   WHERE  1=1  \n                   AND    RULE_TYPE        = 'INCOM'   \n                   AND    USE_YN           = 'Y'  \n                   AND    DEL_YN           = 'N'  \n                   AND    EQUI_CRT         = 'CRITERIA'  \n                   AND    MATR_GRP_CD  = 'DISPLAY' \n                   AND    INSP_ITEM_CD     = '*') AR               \n                  /*-------- 차이수준명 조회 ----------------------*/  \n                ,( SELECT COMM_CODE, COMM_CODE_NM                        ------------- ADD    \n                   FROM   TBC_QA_COMM_CODE   \n                   WHERE  1=1  \n                   AND    CTGR_CODE      IN ('PARTS_ABN_CRITERIA_LVL')   \n                   AND    USE_YN         = 'Y' \n                   AND    DEL_YN         = 'N' ) CM    \n                 WHERE  1=1 \n                   AND    T1.MATR_GRP_CD           =  MP.MATR_GRP_CD \n                   AND    T1.INSP_ITEM_CD          =  MP.INSP_ITEM_CD \n                   AND    T1.ANA_LEVEL             =  CM.COMM_CODE(+) \n                   AND    MP.MAGT_CTF_YN           = 'Y' \n                   AND    MP.USE_YN                = 'Y' \n                   AND    MP.DEL_YN                = 'N' \n                   AND    MP.INSP_ITEM_SEQ         = 1 \n                   AND    T1.JOBID                 = AN.JOB_SEQ \n                   --AND    AN.JOB_STATUS            IN ('C', 'F') --2020.09.25 \n                   AND    T1.MATR_GRP_CD           =  RU.MATR_GRP_CD(+) \n                   AND    T1.INSP_ITEM_CD          =  RU.INSP_ITEM_CD(+) \n                   AND    T1.MATR_GRP_CD           =  AR.MATR_GRP_CD(+)           \n           ) T2 \n           GROUP  BY T2.VEND_CD, T2.MATR_CD, T2.LOT_NO, T2.MATR_GRP_CD, T2.EQP_ID, T2.INSP_ITEM_CD , T2.INSP_ITEM_NM \n     ) T3       \n     , TBM_QA_PARTS_INCOM_MNTR  MM   --재조인 \n     , TBC_MD_PLANT             PC \n       /*-------- STATUS_HIST_NM 조회 ----------------------*/   \n     ,( SELECT COMM_CODE, COMM_CODE_NM                          \n        FROM   TBC_QA_COMM_CODE    \n        WHERE  1=1   \n        AND    CTGR_CODE      IN ('PARTS_STATUS_HIS')    \n        AND    USE_YN         = 'Y'  \n        AND    DEL_YN         = 'N' ) HM         \n WHERE T3.VEND_CD = MM.VEND_CD(+) \n   AND T3.MATR_CD = MM.MATR_CD(+) \n   AND T3.LOT_NO  = MM.LOT_NO(+) \n   AND MM.PLANT_CD = PC.PLANT_CODE(+) \n   AND MM.STATUS_HIST = HM.COMM_CODE(+) \n   AND T3.INSP_ITEM_CD = 'QPP-11A011001' \n /* com.samsung.mes4.qa.csi.rqm.biz.AG131UM10DAO.getInspSummary.001 */ \n"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_out", this);
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "lotNo","type" : "STRING","size" : "256"},{"id" : "eqpId","type" : "STRING","size" : "256"},{"id" : "inspItemCd","type" : "STRING","size" : "256"},{"id" : "inspItemNm","type" : "STRING","size" : "256"},{"id" : "incomJobId","type" : "STRING","size" : "256"},{"id" : "incomSpecAbn","type" : "STRING","size" : "256"},{"id" : "incomCpk","type" : "STRING","size" : "256"},{"id" : "incomCpkLevel","type" : "STRING","size" : "256"},{"id" : "incomCpkStatus","type" : "STRING","size" : "256"},{"id" : "incomCriteria","type" : "STRING","size" : "256"},{"id" : "signDiffLevel","type" : "STRING","size" : "256"},{"id" : "signDiffStatus","type" : "STRING","size" : "256"},{"id" : "lotJobId","type" : "STRING","size" : "256"},{"id" : "lotAnaLevel","type" : "STRING","size" : "256"},{"id" : "lotAnaStatus","type" : "STRING","size" : "256"},{"id" : "lotCriteria","type" : "STRING","size" : "256"},{"id" : "incomCpkLevelNm","type" : "STRING","size" : "256"},{"id" : "incomSpecLevelNm","type" : "STRING","size" : "256"},{"id" : "incomPcSpecAbn","type" : "STRING","size" : "256"},{"id" : "incomPcSpecLevelNm","type" : "STRING","size" : "256"},{"id" : "lotAnaLevelNm","type" : "STRING","size" : "256"},{"id" : "signDiffLevelNm","type" : "STRING","size" : "256"},{"id" : "incomCpkLevelText","type" : "STRING","size" : "256"},{"id" : "plantCd","type" : "STRING","size" : "256"},{"id" : "plantNm","type" : "STRING","size" : "256"},{"id" : "status","type" : "STRING","size" : "256"},{"id" : "statusNm","type" : "STRING","size" : "256"},{"id" : "statusHist","type" : "STRING","size" : "256"},{"id" : "statusHistNm","type" : "STRING","size" : "256"},{"id" : "jobId","type" : "STRING","size" : "256"},{"id" : "gbmCd","type" : "STRING","size" : "256"},{"id" : "fctCd","type" : "STRING","size" : "256"},{"id" : "query","type" : "STRING","size" : "256"},{"id" : "_action","type" : "string","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","80","156","348","89",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_background("pink");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","489","152","391","96",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","132","84","280","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "XML"},{"codecolumn" : "1","datacolumn" : "Binary"},{"codecolumn" : "2","datacolumn" : "SSV"},{"codecolumn" : "3","datacolumn" : "JSON"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("Button02","78","276","358","89",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
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
        this.registerScript("RP_104509_JsonErrorTransaction (1).xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	let nDataType = "";
        	switch(this.Radio00.text) {
        	case "XML":
        		nDataType = 0;
        		break;
        	case "Bianry" :
        		nDataType = 1;
        		break;
        	case "SSV" :
        		nDataType = 2;
        		break;
        	case "JSON" :
        		nDataType = 3;
        		break;
        	default:
        	}
        	this.transaction("JsonErrorTr"
        			   ,"http://172.10.12.45:9090/service_jsp/RP_104509_dummyXML.jsp"
        			   ,"ds_out=ds_input_param"
        			   ,""
        			   ,""
        			   ,"fnCallback"
        			   ,true
        			   ,nDataType);
        };

        this.fnCallback = function(svcid, errCode, errMsg)
        {
        	trace("\nㅡㅡㅡㅡㅡㅡㅡㅡ" + svcid + " / " + errCode + " / " + errMsg + "ㅡㅡㅡㅡㅡㅡㅡㅡ\n");
        }
        this.Button01_onclick = function(obj,e)
        {
        	let nDataType = "";
        	switch(this.Radio00.text) {
        	case "XML":
        		nDataType = 0;
        		break;
        	case "Bianry" :
        		nDataType = 1;
        		break;
        	case "SSV" :
        		nDataType = 2;
        		break;
        	case "JSON" :
        		nDataType = 3;
        		break;
        	default:
        	}
        	this.transaction("JsonErrorTr2"
        			   ,"http://172.10.12.45:9090/service_jsp/RP_104509_dummyXML2.jsp"
        			   ,"ds_out=ds_input_param"
        			   ,""
        			   ,""
        			   ,"fnCallback"
        			   ,true
        			   ,nDataType);
        };

        this.Button02_onclick = function(obj,e)
        {
        		let nDataType = "";
        	switch(this.Radio00.text) {
        	case "XML":
        		nDataType = 0;
        		break;
        	case "Bianry" :
        		nDataType = 1;
        		break;
        	case "SSV" :
        		nDataType = 2;
        		break;
        	case "JSON" :
        		nDataType = 3;
        		break;
        	default:
        	}
        	this.transaction("JsonErrorTr3"
        			   ,"http://172.10.12.45:9090/service_jsp/test_100_JSON.jsp"
        			   ,"ds_out=ds_input_param"
        			   ,""
        			   ,""
        			   ,"fnCallback"
        			   ,true
        			   ,nDataType);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("RP_104509_JsonErrorTransaction (1).xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
