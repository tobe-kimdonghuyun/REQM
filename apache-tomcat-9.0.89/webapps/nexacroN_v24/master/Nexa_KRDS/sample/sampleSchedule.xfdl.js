(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scheduleMainFm");
            this.set_titletext("캘린더(월) 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsScdInfo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SCD_SHARE_CD","type" : "string","size" : "32"},{"id" : "MGR_NM","type" : "string","size" : "32"},{"id" : "MGR_ID","type" : "string","size" : "32"},{"id" : "USED_YN","type" : "string","size" : "32"},{"id" : "SCD_NM","type" : "string","size" : "32"},{"id" : "APND_YN","type" : "string","size" : "32"},{"id" : "DEPT_NM","type" : "STRING","size" : "256"},{"id" : "MGR_EMP_NO","type" : "string","size" : "32"},{"id" : "SCD_CD","type" : "string","size" : "32"},{"id" : "DEPT_CD","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "YYYYMM","type" : "STRING","size" : "256"},{"id" : "SCD_CD","type" : "STRING","size" : "256"},{"id" : "DEPT_CD","type" : "STRING","size" : "256"},{"id" : "SECTDATE","type" : "STRING","size" : "256"},{"id" : "USER_ID","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthDate", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "THU","type" : "string","size" : "32"},{"id" : "TUE","type" : "string","size" : "32"},{"id" : "WED","type" : "string","size" : "32"},{"id" : "SAT","type" : "string","size" : "32"},{"id" : "FRI","type" : "string","size" : "32"},{"id" : "SUN","type" : "string","size" : "32"},{"id" : "MON","type" : "string","size" : "32"}]},"Rows" : [{"THU" : "20230105","TUE" : "20230103","WED" : "20230104","SAT" : "20230107","FRI" : "20230106","SUN" : "20230101","MON" : "20230102"},{"THU" : "20230112","TUE" : "20230110","WED" : "20230111","SAT" : "20230114","FRI" : "20230113","SUN" : "20230108","MON" : "20230109"},{"THU" : "20230119","TUE" : "20230117","WED" : "20230118","SAT" : "20230121","FRI" : "20230120","SUN" : "20230115","MON" : "20230116"},{"THU" : "20230126","TUE" : "20230124","WED" : "20230125","SAT" : "20230128","FRI" : "20230127","SUN" : "20230122","MON" : "20230123"},{"THU" : "20230202","TUE" : "20230131","WED" : "20230201","SAT" : "20230204","FRI" : "20230203","SUN" : "20230129","MON" : "20230130"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScdData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "INPT_EMP_NO","type" : "string","size" : "32"},{"id" : "START_TIME","type" : "string","size" : "32"},{"id" : "LAST_DATE","type" : "string","size" : "32"},{"id" : "CHGE_IP","type" : "string","size" : "32"},{"id" : "SCD_SECT_CD","type" : "string","size" : "32"},{"id" : "START_MINUTES","type" : "string","size" : "32"},{"id" : "END_DAY","type" : "string","size" : "32"},{"id" : "FILE_ID","type" : "STRING","size" : "256"},{"id" : "CHGE_ID","type" : "string","size" : "32"},{"id" : "CAL_DATE","type" : "string","size" : "32"},{"id" : "INPT_IP","type" : "string","size" : "32"},{"id" : "FIRST_DATE","type" : "string","size" : "32"},{"id" : "END_TIME","type" : "string","size" : "32"},{"id" : "SCD_ID","type" : "bigdecimal","size" : "16"},{"id" : "CHGE_DTTM","type" : "datetime","size" : "17"},{"id" : "SCD_NM","type" : "string","size" : "32"},{"id" : "TITLE","type" : "string","size" : "32"},{"id" : "SSC_CD_KORN_NM","type" : "string","size" : "32"},{"id" : "INPT_DTTM","type" : "datetime","size" : "17"},{"id" : "END_MINUTES","type" : "string","size" : "32"},{"id" : "SCD_CD","type" : "string","size" : "32"},{"id" : "START_DAY","type" : "string","size" : "32"},{"id" : "INPT_ID","type" : "string","size" : "32"}]},"Rows" : [{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "VC","START_MINUTES" : "00","END_DAY" : "20230103","CHGE_ID" : "","CAL_DATE" : "20230102","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "11022","CHGE_DTTM" : "20230104092413000","SCD_NM" : "컨설팅사업1팀","TITLE" : "특별휴가 - 독감","SSC_CD_KORN_NM" : "휴가","INPT_DTTM" : "20230102095006000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230102","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "VC","START_MINUTES" : "00","END_DAY" : "20230102","CHGE_ID" : "","CAL_DATE" : "20230102","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "10923","CHGE_DTTM" : "20221227140455000","SCD_NM" : "컨설팅사업1팀","TITLE" : "휴가","SSC_CD_KORN_NM" : "휴가","INPT_DTTM" : "20221227140455000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230102","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "13","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "MT","START_MINUTES" : "00","END_DAY" : "20230102","CHGE_ID" : "","CAL_DATE" : "20230102","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "11021","CHGE_DTTM" : "20230102091112000","SCD_NM" : "컨설팅사업1팀","TITLE" : "차세대시스템 미팅","SSC_CD_KORN_NM" : "미팅","INPT_DTTM" : "20230102091112000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230102","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "VC","START_MINUTES" : "00","END_DAY" : "20230103","CHGE_ID" : "","CAL_DATE" : "20230103","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "11022","CHGE_DTTM" : "20230104092413000","SCD_NM" : "컨설팅사업1팀","TITLE" : "특별휴가 - 독감","SSC_CD_KORN_NM" : "휴가","INPT_DTTM" : "20230102095006000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230102","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "CF","START_MINUTES" : "00","END_DAY" : "20230103","CHGE_ID" : "","CAL_DATE" : "20230103","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "11","SCD_ID" : "11141","CHGE_DTTM" : "20230104154506000","SCD_NM" : "컨설팅사업1팀","TITLE" : "Floating Label 대응 방안 협의","SSC_CD_KORN_NM" : "회의","INPT_DTTM" : "20230104154506000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230103","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "VC","START_MINUTES" : "00","END_DAY" : "20230104","CHGE_ID" : "","CAL_DATE" : "20230104","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "11122","CHGE_DTTM" : "20230104092359000","SCD_NM" : "컨설팅사업1팀","TITLE" : "연차휴가","SSC_CD_KORN_NM" : "휴가","INPT_DTTM" : "20230104092359000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230104","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "CF","START_MINUTES" : "00","END_DAY" : "20230104","CHGE_ID" : "","CAL_DATE" : "20230104","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "11","SCD_ID" : "11142","CHGE_DTTM" : "20230104154516000","SCD_NM" : "컨설팅사업1팀","TITLE" : "Floating Label 대응 방안 협의","SSC_CD_KORN_NM" : "회의","INPT_DTTM" : "20230104154516000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230104","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "MT","START_MINUTES" : "00","END_DAY" : "20230105","CHGE_ID" : "","CAL_DATE" : "20230105","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "11123","CHGE_DTTM" : "20230104093512000","SCD_NM" : "컨설팅사업1팀","TITLE" : "모바일 수행방안 논의","SSC_CD_KORN_NM" : "미팅","INPT_DTTM" : "20230104093512000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230105","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "10","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "MT","START_MINUTES" : "00","END_DAY" : "20230106","CHGE_ID" : "","CAL_DATE" : "20230106","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "12","SCD_ID" : "11081","CHGE_DTTM" : "20230104113204000","SCD_NM" : "컨설팅사업1팀","TITLE" : "연동 협의","SSC_CD_KORN_NM" : "미팅","INPT_DTTM" : "20230103134727000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230106","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "14","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "MT","START_MINUTES" : "00","END_DAY" : "20230110","CHGE_ID" : "","CAL_DATE" : "20230110","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "11061","CHGE_DTTM" : "20230103090258000","SCD_NM" : "컨설팅사업1팀","TITLE" : "컨버젼 미팅","SSC_CD_KORN_NM" : "미팅","INPT_DTTM" : "20230103090258000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230110","INPT_ID" : ""},{"INPT_EMP_NO" : "","START_TIME" : "09","LAST_DATE" : "20230204","CHGE_IP" : "","SCD_SECT_CD" : "MT","START_MINUTES" : "00","END_DAY" : "20230112","CHGE_ID" : "","CAL_DATE" : "20230112","INPT_IP" : "","FIRST_DATE" : "20230101","END_TIME" : "18","SCD_ID" : "10802","CHGE_DTTM" : "20221223132110000","SCD_NM" : "컨설팅사업1팀","TITLE" : "프로젝트 진행확인","SSC_CD_KORN_NM" : "미팅","INPT_DTTM" : "20221223132110000","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230112","INPT_ID" : ""}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchedule", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "scdId0_1","type" : "STRING","size" : "256"},{"id" : "scdId1_1","type" : "STRING","size" : "256"},{"id" : "scdId2_1","type" : "STRING","size" : "256"},{"id" : "scdId3_1","type" : "STRING","size" : "256"},{"id" : "scdId4_1","type" : "STRING","size" : "256"},{"id" : "scdId5_1","type" : "STRING","size" : "256"},{"id" : "scdId6_1","type" : "STRING","size" : "256"},{"id" : "scdId0_2","type" : "STRING","size" : "256"},{"id" : "scdId1_2","type" : "STRING","size" : "256"},{"id" : "scdId2_2","type" : "STRING","size" : "256"},{"id" : "scdId3_2","type" : "STRING","size" : "256"},{"id" : "scdId4_2","type" : "STRING","size" : "256"},{"id" : "scdId5_2","type" : "STRING","size" : "256"},{"id" : "scdId6_2","type" : "STRING","size" : "256"},{"id" : "scdId0_3","type" : "STRING","size" : "256"},{"id" : "scdId1_3","type" : "STRING","size" : "256"},{"id" : "scdId2_3","type" : "STRING","size" : "256"},{"id" : "scdId3_3","type" : "STRING","size" : "256"},{"id" : "scdId4_3","type" : "STRING","size" : "256"},{"id" : "scdId5_3","type" : "STRING","size" : "256"},{"id" : "scdId6_3","type" : "STRING","size" : "256"},{"id" : "DAY0","type" : "STRING","size" : "256"},{"id" : "DAY1","type" : "STRING","size" : "256"},{"id" : "DAY2","type" : "STRING","size" : "256"},{"id" : "DAY3","type" : "STRING","size" : "256"},{"id" : "DAY4","type" : "STRING","size" : "256"},{"id" : "DAY5","type" : "STRING","size" : "256"},{"id" : "DAY6","type" : "STRING","size" : "256"},{"id" : "scd0_1","type" : "STRING","size" : "256"},{"id" : "scd1_1","type" : "STRING","size" : "256"},{"id" : "scd2_1","type" : "STRING","size" : "256"},{"id" : "scd3_1","type" : "STRING","size" : "256"},{"id" : "scd4_1","type" : "STRING","size" : "256"},{"id" : "scd5_1","type" : "STRING","size" : "256"},{"id" : "scd6_1","type" : "STRING","size" : "256"},{"id" : "scd0_2","type" : "STRING","size" : "256"},{"id" : "scd1_2","type" : "STRING","size" : "256"},{"id" : "scd2_2","type" : "STRING","size" : "256"},{"id" : "scd3_2","type" : "STRING","size" : "256"},{"id" : "scd4_2","type" : "STRING","size" : "256"},{"id" : "scd5_2","type" : "STRING","size" : "256"},{"id" : "scd6_2","type" : "STRING","size" : "256"},{"id" : "scd0_3","type" : "STRING","size" : "256"},{"id" : "scd1_3","type" : "STRING","size" : "256"},{"id" : "scd2_3","type" : "STRING","size" : "256"},{"id" : "scd3_3","type" : "STRING","size" : "256"},{"id" : "scd4_3","type" : "STRING","size" : "256"},{"id" : "scd5_3","type" : "STRING","size" : "256"},{"id" : "scd6_3","type" : "STRING","size" : "256"},{"id" : "hol0","type" : "STRING","size" : "256"},{"id" : "hol1","type" : "STRING","size" : "256"},{"id" : "hol2","type" : "STRING","size" : "256"},{"id" : "hol3","type" : "STRING","size" : "256"},{"id" : "hol4","type" : "STRING","size" : "256"},{"id" : "hol5","type" : "STRING","size" : "256"},{"id" : "hol6","type" : "STRING","size" : "256"},{"id" : "moreYN0","type" : "STRING","size" : "256"},{"id" : "moreYN1","type" : "STRING","size" : "256"},{"id" : "moreYN2","type" : "STRING","size" : "256"},{"id" : "moreYN3","type" : "STRING","size" : "256"},{"id" : "moreYN4","type" : "STRING","size" : "256"},{"id" : "moreYN5","type" : "STRING","size" : "256"},{"id" : "moreYN6","type" : "STRING","size" : "256"},{"id" : "YYYYMMDD0","type" : "STRING","size" : "256"},{"id" : "YYYYMMDD1","type" : "STRING","size" : "256"},{"id" : "YYYYMMDD2","type" : "STRING","size" : "256"},{"id" : "YYYYMMDD3","type" : "STRING","size" : "256"},{"id" : "YYYYMMDD4","type" : "STRING","size" : "256"},{"id" : "YYYYMMDD5","type" : "STRING","size" : "256"},{"id" : "YYYYMMDD6","type" : "STRING","size" : "256"},{"id" : "css0","type" : "STRING","size" : "256"},{"id" : "css1","type" : "STRING","size" : "256"},{"id" : "css2","type" : "STRING","size" : "256"},{"id" : "css3","type" : "STRING","size" : "256"},{"id" : "css4","type" : "STRING","size" : "256"},{"id" : "css5","type" : "STRING","size" : "256"},{"id" : "css6","type" : "STRING","size" : "256"},{"id" : "cssscd0_1","type" : "STRING","size" : "256"},{"id" : "cssscd1_1","type" : "STRING","size" : "256"},{"id" : "cssscd2_1","type" : "STRING","size" : "256"},{"id" : "cssscd3_1","type" : "STRING","size" : "256"},{"id" : "cssscd4_1","type" : "STRING","size" : "256"},{"id" : "cssscd5_1","type" : "STRING","size" : "256"},{"id" : "cssscd6_1","type" : "STRING","size" : "256"},{"id" : "cssscd0_2","type" : "STRING","size" : "256"},{"id" : "cssscd1_2","type" : "STRING","size" : "256"},{"id" : "cssscd2_2","type" : "STRING","size" : "256"},{"id" : "cssscd3_2","type" : "STRING","size" : "256"},{"id" : "cssscd4_2","type" : "STRING","size" : "256"},{"id" : "cssscd5_2","type" : "STRING","size" : "256"},{"id" : "cssscd6_2","type" : "STRING","size" : "256"},{"id" : "cssscd0_3","type" : "STRING","size" : "256"},{"id" : "cssscd1_3","type" : "STRING","size" : "256"},{"id" : "cssscd2_3","type" : "STRING","size" : "256"},{"id" : "cssscd3_3","type" : "STRING","size" : "256"},{"id" : "cssscd4_3","type" : "STRING","size" : "256"},{"id" : "cssscd5_3","type" : "STRING","size" : "256"},{"id" : "cssscd6_3","type" : "STRING","size" : "256"},{"id" : "cssTrailing0","type" : "STRING","size" : "256"},{"id" : "cssTrailing1","type" : "STRING","size" : "256"},{"id" : "cssTrailing2","type" : "STRING","size" : "256"},{"id" : "cssTrailing3","type" : "STRING","size" : "256"},{"id" : "cssTrailing4","type" : "STRING","size" : "256"},{"id" : "cssTrailing5","type" : "STRING","size" : "256"},{"id" : "cssTrailing6","type" : "STRING","size" : "256"}]},"Rows" : [{"scdId1_1" : "11022","scdId2_1" : "11022","scdId3_1" : "11122","scdId4_1" : "11123","scdId5_1" : "11081","scdId1_2" : "10923","scdId2_2" : "11141","scdId3_2" : "11142","scdId1_3" : "11021","DAY0" : "1","DAY1" : "2","DAY2" : "3","DAY3" : "4","DAY4" : "5","DAY5" : "6","DAY6" : "7","scd1_1" : "특별휴가 - 독감","scd2_1" : "특별휴가 - 독감","scd3_1" : "연차휴가","scd4_1" : "모바일 수행방안 논의","scd5_1" : "연동 협의","scd1_2" : "휴가","scd2_2" : "Floating Label 대응 방안 협의","scd3_2" : "Floating Label 대응 방안 협의","scd1_3" : "차세대시스템 미팅","hol0" : "신정","YYYYMMDD0" : "20230101","YYYYMMDD1" : "20230102","YYYYMMDD2" : "20230103","YYYYMMDD3" : "20230104","YYYYMMDD4" : "20230105","YYYYMMDD5" : "20230106","YYYYMMDD6" : "20230107","css0" : "cell_Sunday","css1" : "cell_Day","css2" : "cell_Day","css3" : "cell_Day","css4" : "cell_Today","css5" : "cell_Day","css6" : "cell_Saturday","cssscd1_1" : "label03","cssscd2_1" : "label03","cssscd3_1" : "label03","cssscd4_1" : "label01","cssscd5_1" : "label01","cssscd1_2" : "label03","cssscd2_2" : "label02","cssscd3_2" : "label02","cssscd1_3" : "label01"},{"scdId2_1" : "11061","scdId4_1" : "10802","DAY0" : "8","DAY1" : "9","DAY2" : "10","DAY3" : "11","DAY4" : "12","DAY5" : "13","DAY6" : "14","scd2_1" : "컨버젼 미팅","scd4_1" : "진행확인","YYYYMMDD0" : "20230108","YYYYMMDD1" : "20230109","YYYYMMDD2" : "20230110","YYYYMMDD3" : "20230111","YYYYMMDD4" : "20230112","YYYYMMDD5" : "20230113","YYYYMMDD6" : "20230114","css0" : "cell_Sunday","css1" : "cell_Day","css2" : "cell_Day","css3" : "cell_Day","css4" : "cell_Day","css5" : "cell_Day","css6" : "cell_Saturday","cssscd2_1" : "label01","cssscd4_1" : "label01"},{"DAY0" : "15","DAY1" : "16","DAY2" : "17","DAY3" : "18","DAY4" : "19","DAY5" : "20","DAY6" : "21","hol6" : "설날","YYYYMMDD0" : "20230115","YYYYMMDD1" : "20230116","YYYYMMDD2" : "20230117","YYYYMMDD3" : "20230118","YYYYMMDD4" : "20230119","YYYYMMDD5" : "20230120","YYYYMMDD6" : "20230121","css0" : "cell_Sunday","css1" : "cell_Day","css2" : "cell_Day","css3" : "cell_Day","css4" : "cell_Day","css5" : "cell_Day","css6" : "cell_Saturday"},{"DAY0" : "22","DAY1" : "23","DAY2" : "24","DAY3" : "25","DAY4" : "26","DAY5" : "27","DAY6" : "28","hol0" : "설날","hol1" : "설날","YYYYMMDD0" : "20230122","YYYYMMDD1" : "20230123","YYYYMMDD2" : "20230124","YYYYMMDD3" : "20230125","YYYYMMDD4" : "20230126","YYYYMMDD5" : "20230127","YYYYMMDD6" : "20230128","css0" : "cell_Sunday","css1" : "cell_Day","css2" : "cell_Day","css3" : "cell_Day","css4" : "cell_Day","css5" : "cell_Day","css6" : "cell_Saturday"},{"DAY0" : "29","DAY1" : "30","DAY2" : "31","DAY3" : "1","DAY4" : "2","DAY5" : "3","DAY6" : "4","YYYYMMDD0" : "20230129","YYYYMMDD1" : "20230130","YYYYMMDD2" : "20230131","YYYYMMDD3" : "20230201","YYYYMMDD4" : "20230202","YYYYMMDD5" : "20230203","YYYYMMDD6" : "20230204","css0" : "cell_Sunday","css1" : "cell_Day","css2" : "cell_Day","css3" : "cell_Day","css4" : "cell_Day","css5" : "cell_Day","css6" : "cell_Saturday","cssTrailing3" : "Y","cssTrailing4" : "Y","cssTrailing5" : "Y","cssTrailing6" : "Y"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScdList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "INPT_EMP_NO","type" : "string","size" : "32"},{"id" : "START_TIME","type" : "string","size" : "32"},{"id" : "CHGE_IP","type" : "string","size" : "32"},{"id" : "SCD_SECT_CD","type" : "string","size" : "32"},{"id" : "START_MINUTES","type" : "string","size" : "32"},{"id" : "END_DAY","type" : "string","size" : "32"},{"id" : "FILE_ID","type" : "STRING","size" : "256"},{"id" : "CHGE_ID","type" : "string","size" : "32"},{"id" : "INPT_IP","type" : "string","size" : "32"},{"id" : "END_TIME","type" : "string","size" : "32"},{"id" : "SCD_ID","type" : "bigdecimal","size" : "16"},{"id" : "CHGE_DTTM","type" : "datetime","size" : "17"},{"id" : "SCD_NM","type" : "string","size" : "32"},{"id" : "TITLE","type" : "string","size" : "32"},{"id" : "SSC_CD_KORN_NM","type" : "string","size" : "32"},{"id" : "INPT_DTTM","type" : "datetime","size" : "17"},{"id" : "END_MINUTES","type" : "string","size" : "32"},{"id" : "SCD_CD","type" : "string","size" : "32"},{"id" : "START_DAY","type" : "string","size" : "32"},{"id" : "INPT_ID","type" : "string","size" : "32"}]},"Rows" : [{"INPT_EMP_NO" : "","START_TIME" : "09","CHGE_IP" : "","SCD_SECT_CD" : "MT","START_MINUTES" : "00","END_DAY" : "20230105","CHGE_ID" : "0000000002","INPT_IP" : "","END_TIME" : "18","SCD_ID" : "11123","CHGE_DTTM" : "","SCD_NM" : "컨설팅사업1팀","TITLE" : "모바일 수행방안 논의","SSC_CD_KORN_NM" : "미팅","INPT_DTTM" : "","END_MINUTES" : "00","SCD_CD" : "1010410","START_DAY" : "20230105","INPT_ID" : "0000000002"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSetCd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GRP_CD_4","type" : "STRING","size" : "256"},{"id" : "GRP_CD_5","type" : "STRING","size" : "256"},{"id" : "SSC_NUMB","type" : "string","size" : "32"},{"id" : "GRP_CD_6","type" : "STRING","size" : "256"},{"id" : "GRP_CD_7","type" : "STRING","size" : "256"},{"id" : "SSC_CD_ENGL_NM","type" : "string","size" : "32"},{"id" : "GRP_CD_8","type" : "STRING","size" : "256"},{"id" : "GRP_CD_9","type" : "STRING","size" : "256"},{"id" : "ABBR_ENGL_NM","type" : "STRING","size" : "256"},{"id" : "SSC_CD","type" : "string","size" : "32"},{"id" : "SORT_ORDR","type" : "bigdecimal","size" : "16"},{"id" : "ABBR_KORN_NM","type" : "STRING","size" : "256"},{"id" : "USED_YN","type" : "string","size" : "32"},{"id" : "REMK","type" : "STRING","size" : "256"},{"id" : "SSC_CD_KORN_NM","type" : "string","size" : "32"},{"id" : "GRP_CD_1","type" : "STRING","size" : "256"},{"id" : "HCL_CD","type" : "string","size" : "32"},{"id" : "GRP_CD_2","type" : "STRING","size" : "256"},{"id" : "GRP_CD_3","type" : "STRING","size" : "256"}]},"Rows" : [{"SSC_NUMB" : "00000585","SSC_CD_ENGL_NM" : "미팅","SSC_CD" : "MT","SORT_ORDR" : "1","USED_YN" : "1","REMK" : "1. 미팅사 : \n2. 지역 : \n3. 방문시간 : \n4. 목적 : \n5. 동행자 : \n6. 기타 : ","SSC_CD_KORN_NM" : "미팅","HCL_CD" : "CM03"},{"SSC_NUMB" : "00000592","SSC_CD_ENGL_NM" : "회의","SSC_CD" : "CF","SORT_ORDR" : "2","USED_YN" : "1","SSC_CD_KORN_NM" : "회의","HCL_CD" : "CM03"},{"SSC_NUMB" : "00000586","SSC_CD_ENGL_NM" : "휴가","SSC_CD" : "VC","SORT_ORDR" : "3","USED_YN" : "1","SSC_CD_KORN_NM" : "휴가","HCL_CD" : "CM03"},{"SSC_NUMB" : "00000587","SSC_CD_ENGL_NM" : "행사","SSC_CD" : "EV","SORT_ORDR" : "4","USED_YN" : "1","SSC_CD_KORN_NM" : "행사","HCL_CD" : "CM03"},{"SSC_NUMB" : "00000588","SSC_CD_ENGL_NM" : "교육","SSC_CD" : "ED","SORT_ORDR" : "5","USED_YN" : "1","SSC_CD_KORN_NM" : "교육","HCL_CD" : "CM03"},{"SSC_NUMB" : "00000589","SSC_CD_ENGL_NM" : "채용","SSC_CD" : "IV","SORT_ORDR" : "6","USED_YN" : "1","SSC_CD_KORN_NM" : "채용","HCL_CD" : "CM03"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","0","0",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H18");
            this.addChild(obj.name, obj);

            obj = new Div("divCal","0","18",null,null,"300","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("div_CalHead","0","0",null,"50","0",null,null,null,null,null,this.divCal.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_CalHead");
            this.divCal.addChild(obj.name, obj);

            obj = new Button("btnToday","20","10","62","28",null,null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_CalToday");
            obj.set_text("오늘");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Button("btnCloseOpen",null,"10","120","28","20",null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_CalClose");
            obj.set_text("상세일정 감추기");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"10","96","28","143",null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalRefresh");
            obj.set_text("새로고침");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Static("staYyyyMm","40.00%","7","90","28",null,null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("4");
            obj.set_text("2021.11");
            obj.set_cssclass("sta_CalMonth");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Button("btnPre",null,"10","25","28","staYyyyMm:10",null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_CalPrev");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Button("btnNext","staYyyyMm:5","10","25","28",null,null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CalNext");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Button("btnPreYear",null,"10","25","28","btnPre:0",null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_CalYearPrev");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Button("btnNextYear","btnNext:0","10","25","28",null,null,null,null,null,null,this.divCal.form.div_CalHead.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_CalYearNext");
            this.divCal.form.div_CalHead.addChild(obj.name, obj);

            obj = new Grid("grd00","0","div_CalHead:-1",null,"33","0",null,null,null,null,null,this.divCal.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_WF_CalHead");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"34\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"일\" cssclass=\"Hcell_sunday\"/><Cell col=\"1\" text=\"월\" cssclass=\"Hcell_day\"/><Cell col=\"2\" text=\"화\" cssclass=\"Hcell_day\"/><Cell col=\"3\" text=\"수\" cssclass=\"Hcell_day\"/><Cell col=\"4\" text=\"목\" cssclass=\"Hcell_day\"/><Cell col=\"5\" text=\"금\" cssclass=\"Hcell_day\"/><Cell col=\"6\" text=\"토\" cssclass=\"Hcell_saturday\"/></Band></Format></Formats>");
            this.divCal.addChild(obj.name, obj);

            obj = new Grid("grdList","0","grd00:-1",null,null,"0","0",null,null,null,null,this.divCal.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_selecttype("area");
            obj.set_cssclass("grd_WF_CalMgmt");
            obj.set_binddataset("dsSchedule");
            obj.getSetter("uFunction").set("!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"83\"/><Column size=\"28\"/><Column size=\"25\"/><Column size=\"83\"/><Column size=\"28\"/><Column size=\"25\"/><Column size=\"83\"/><Column size=\"28\"/><Column size=\"25\"/><Column size=\"83\"/><Column size=\"28\"/><Column size=\"25\"/><Column size=\"83\"/><Column size=\"28\"/><Column size=\"25\"/><Column size=\"83\"/><Column size=\"28\"/><Column size=\"25\"/><Column size=\"83\"/><Column size=\"28\"/></Columns><Rows><Row size=\"26\"/><Row size=\"0\"/><Row size=\"25\"/><Row size=\"0\"/><Row size=\"25\"/><Row size=\"0\"/><Row size=\"25\"/><Row size=\"22\"/></Rows><Band id=\"head\" background=\"#e2e4ec\"/><Band id=\"body\"><Cell expandshow=\"hide\" text=\"bind:DAY0\" autosizecol=\"default\" border=\"0px none\" cssclass=\"expr:cssTrailing0==&apos;Y&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg&quot; : (cssTrailing0==&apos;T&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg, cell_TodayTD&quot; : css0)\"/><Cell col=\"1\" border=\"0px none\" cssclass=\"expr:cssTrailing0==&apos;Y&apos; || cssTrailing0==&apos;T&apos; ? &quot;cell_Holiday, cell_Trailingdaybg&quot; :&quot;cell_Holiday&quot;\" text=\"bind:hol0\" cursor=\"pointer\"/><Cell col=\"2\" expandsize=\"20\" imagestretch=\"none\" displaytype=\"buttoncontrol\" expandshow=\"hide\" cssclass=\"expr:cssTrailing0==&apos;Y&apos;|| cssTrailing0==&apos;T&apos;  ? &quot;cell_CaladdTD, cell_Trailingdaybg&quot; : &quot;cell_Caladd&quot;\"/><Cell col=\"3\" cssclass=\"expr:cssTrailing1==&apos;Y&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg&quot; :  (cssTrailing1==&apos;T&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg, cell_TodayTD&quot;:css1)\" text=\"bind:DAY1\" autosizecol=\"default\" border=\"0px none\"/><Cell col=\"4\" border=\"0px none\" text=\"bind:hol1\" cssclass=\"expr:cssTrailing1==&apos;Y&apos; || cssTrailing1==&apos;T&apos;  ? &quot;cell_Holiday, cell_Trailingdaybg&quot; : &quot;cell_Holiday&quot;\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" cssclass=\"expr:cssTrailing1==&apos;Y&apos;|| cssTrailing1==&apos;T&apos;  ? &quot;cell_CaladdTD, cell_Trailingdaybg&quot; : &quot;cell_Caladd&quot;\"/><Cell col=\"6\" cssclass=\"expr:cssTrailing2==&apos;Y&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg&quot; : (cssTrailing2==&apos;T&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg, cell_TodayTD&quot; : css2)\" text=\"bind:DAY2\" autosizecol=\"default\" border=\"0px none\"/><Cell col=\"7\" border=\"0px none\" text=\"bind:hol2\" cssclass=\"expr:cssTrailing2==&apos;Y&apos; || cssTrailing2==&apos;T&apos; ? &quot;cell_Holiday, cell_Trailingdaybg&quot; : &quot;cell_Holiday&quot;\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" cssclass=\"expr:cssTrailing2==&apos;Y&apos; || cssTrailing2==&apos;T&apos; ? &quot;cell_CaladdTD, cell_Trailingdaybg&quot; : &quot;cell_Caladd&quot;\"/><Cell col=\"9\" cssclass=\"expr:cssTrailing3==&apos;Y&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg&quot; : (cssTrailing3==&apos;T&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg, cell_TodayTD&quot; : css3)\" text=\"bind:DAY3\" autosizecol=\"default\" border=\"0px none\"/><Cell col=\"10\" border=\"0px none\" text=\"bind:hol3\" cssclass=\"expr:cssTrailing3==&apos;Y&apos; ||cssTrailing3 == &apos;T&apos;? &quot;cell_Holiday, cell_Trailingdaybg&quot; : &quot;cell_Holiday&quot;\"/><Cell col=\"11\" displaytype=\"buttoncontrol\" cssclass=\"expr:cssTrailing3==&apos;Y&apos;||cssTrailing3 == &apos;T&apos; ? &quot;cell_CaladdTD, cell_Trailingdaybg&quot; : &quot;cell_Caladd&quot;\"/><Cell col=\"12\" cssclass=\"expr:cssTrailing4==&apos;Y&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg&quot; : (cssTrailing4==&apos;T&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg, cell_TodayTD&quot; : css4)\" border=\"0px none\" text=\"bind:DAY4\"/><Cell col=\"13\" border=\"0px none\" text=\"bind:hol4\" cssclass=\"expr:cssTrailing4==&apos;Y&apos; ||cssTrailing4 == &apos;T&apos;? &quot;cell_Holiday, cell_Trailingdaybg&quot; : &quot;cell_Holiday&quot;\"/><Cell col=\"14\" displaytype=\"buttoncontrol\" cssclass=\"expr:cssTrailing4==&apos;Y&apos;||cssTrailing4 == &apos;T&apos; ? &quot;cell_CaladdTD, cell_Trailingdaybg&quot; : &quot;cell_Caladd&quot;\"/><Cell col=\"15\" cssclass=\"expr:cssTrailing5==&apos;Y&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg&quot; :  (cssTrailing5==&apos;T&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg, cell_TodayTD&quot; : css5)\" border=\"0px none\" text=\"bind:DAY5\"/><Cell col=\"16\" border=\"0px none\" text=\"bind:hol5\" cssclass=\"expr:cssTrailing5==&apos;Y&apos; ||cssTrailing5 == &apos;T&apos; ? &quot;cell_Holiday, cell_Trailingdaybg&quot; : &quot;cell_Holiday&quot;\"/><Cell col=\"17\" displaytype=\"buttoncontrol\" cssclass=\"expr:cssTrailing5==&apos;Y&apos; ||cssTrailing5 == &apos;T&apos;? &quot;cell_CaladdTD, cell_Trailingdaybg&quot; : &quot;cell_Caladd&quot;\"/><Cell col=\"18\" cssclass=\"expr:cssTrailing6==&apos;Y&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg&quot; : (cssTrailing6==&apos;T&apos; ? &quot;cell_Trailingday, cell_Trailingdaybg, cell_TodayTD&quot; : css6)\" border=\"0px none\" text=\"bind:DAY6\"/><Cell col=\"19\" border=\"0px none\" text=\"bind:hol6\" cssclass=\"expr:cssTrailing6==&apos;Y&apos; ||cssTrailing6 == &apos;T&apos;? &quot;cell_Holiday, cell_Trailingdaybg&quot; : &quot;cell_Holiday&quot;\"/><Cell col=\"20\" displaytype=\"buttoncontrol\" cssclass=\"expr:cssTrailing6==&apos;Y&apos;||cssTrailing6 == &apos;T&apos; ? &quot;cell_CaladdTD, cell_Trailingdaybg&quot; : &quot;cell_Caladd&quot;\"/><Cell row=\"1\" colspan=\"3\" text=\"bind:scdId0_1\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"bind:scdId1_1\"/><Cell row=\"1\" col=\"6\" colspan=\"3\" text=\"bind:scdId2_1\"/><Cell row=\"1\" col=\"9\" colspan=\"3\" text=\"bind:scdId3_1\"/><Cell row=\"1\" col=\"12\" colspan=\"3\" text=\"bind:scdId4_1\"/><Cell row=\"1\" col=\"15\" colspan=\"3\" text=\"bind:scdId5_1\"/><Cell row=\"1\" col=\"18\" colspan=\"3\" text=\"bind:scdId6_1\"/><Cell row=\"2\" colspan=\"3\" text=\"bind:scd0_1\" cssclass=\"expr:cssTrailing0==&apos;Y&apos;|| cssTrailing0==&apos;T&apos;  ? (cssscd0_1==null ? &quot;cell_Trailingdaybg&quot; : cssscd0_1)  : cssscd0_1\" tooltiptext=\"bind:scd0_1\"/><Cell row=\"2\" col=\"3\" colspan=\"3\" text=\"bind:scd1_1\" cssclass=\"expr:cssTrailing1==&apos;Y&apos;|| cssTrailing1==&apos;T&apos;  ? (cssscd1_1==null ? &quot;cell_Trailingdaybg&quot; : cssscd1_1)  : cssscd1_1\" tooltiptext=\"bind:scd1_1\"/><Cell row=\"2\" col=\"6\" colspan=\"3\" text=\"bind:scd2_1\" cssclass=\"expr:cssTrailing2==&apos;Y&apos;|| cssTrailing2==&apos;T&apos; ? (cssscd2_1==null ? &quot;cell_Trailingdaybg&quot; : cssscd2_1)  : cssscd2_1\" tooltiptext=\"bind:scd2_1\"/><Cell row=\"2\" col=\"9\" colspan=\"3\" text=\"bind:scd3_1\" cssclass=\"expr:cssTrailing3==&apos;Y&apos;||cssTrailing3 == &apos;T&apos; ? (cssscd3_1==null ? &quot;cell_Trailingdaybg&quot; : cssscd3_1)  : cssscd3_1\" tooltiptext=\"bind:scd3_1\"/><Cell row=\"2\" col=\"12\" colspan=\"3\" text=\"bind:scd4_1\" cssclass=\"expr:cssTrailing4==&apos;Y&apos; ||cssTrailing4 == &apos;T&apos;? (cssscd4_1==null ? &quot;cell_Trailingdaybg&quot; : cssscd4_1)  : cssscd4_1\" tooltiptext=\"bind:scd4_1\"/><Cell row=\"2\" col=\"15\" colspan=\"3\" text=\"bind:scd5_1\" cssclass=\"expr:cssTrailing5==&apos;Y&apos; ||cssTrailing5 == &apos;T&apos;? (cssscd5_1==null ? &quot;cell_Trailingdaybg&quot; : cssscd5_1)  : cssscd5_1\" tooltiptext=\"bind:scd5_1\"/><Cell row=\"2\" col=\"18\" colspan=\"3\" text=\"bind:scd6_1\" cssclass=\"expr:cssTrailing6==&apos;Y&apos; ||cssTrailing6 == &apos;T&apos;? (cssscd6_1==null ? &quot;cell_Trailingdaybg&quot; : cssscd6_1)  : cssscd6_1\" tooltiptext=\"bind:scd6_1\"/><Cell row=\"3\" colspan=\"3\" text=\"bind:scdId0_2\"/><Cell row=\"3\" col=\"3\" colspan=\"3\" text=\"bind:scdId1_2\"/><Cell row=\"3\" col=\"6\" colspan=\"3\" text=\"bind:scdId2_2\"/><Cell row=\"3\" col=\"9\" colspan=\"3\" text=\"bind:scdId3_2\"/><Cell row=\"3\" col=\"12\" colspan=\"3\" text=\"bind:scdId4_2\"/><Cell row=\"3\" col=\"15\" colspan=\"3\" text=\"bind:scdId5_2\"/><Cell row=\"3\" col=\"18\" colspan=\"3\" text=\"bind:scdId6_2\"/><Cell row=\"4\" colspan=\"3\" text=\"bind:scd0_2\" cssclass=\"expr:cssTrailing0==&apos;Y&apos;|| cssTrailing0==&apos;T&apos;  ? (cssscd0_2==null ? &quot;cell_Trailingdaybg&quot; : cssscd0_2)  : cssscd0_2\" tooltiptext=\"bind:scd0_2\"/><Cell row=\"4\" col=\"3\" colspan=\"3\" text=\"bind:scd1_2\" cssclass=\"expr:cssTrailing1==&apos;Y&apos;|| cssTrailing1==&apos;T&apos;  ? (cssscd1_2==null ? &quot;cell_Trailingdaybg&quot; : cssscd1_2)  : cssscd1_2\" tooltiptext=\"bind:scd1_2\"/><Cell row=\"4\" col=\"6\" colspan=\"3\" text=\"bind:scd2_2\" cssclass=\"expr:cssTrailing2==&apos;Y&apos; || cssTrailing2==&apos;T&apos;? (cssscd2_2==null ? &quot;cell_Trailingdaybg&quot; : cssscd2_2)  : cssscd2_2\" tooltiptext=\"bind:scd2_2\"/><Cell row=\"4\" col=\"9\" colspan=\"3\" text=\"bind:scd3_2\" cssclass=\"expr:cssTrailing3==&apos;Y&apos; ||cssTrailing3 == &apos;T&apos;? (cssscd3_2==null ? &quot;cell_Trailingdaybg&quot; : cssscd3_2)  : cssscd3_2\" tooltiptext=\"bind:scd3_2\"/><Cell row=\"4\" col=\"12\" colspan=\"3\" text=\"bind:scd4_2\" cssclass=\"expr:cssTrailing4==&apos;Y&apos;||cssTrailing4 == &apos;T&apos; ? (cssscd4_2==null ? &quot;cell_Trailingdaybg&quot; : cssscd4_2)  : cssscd4_2\" tooltiptext=\"bind:scd4_2\"/><Cell row=\"4\" col=\"15\" colspan=\"3\" text=\"bind:scd5_2\" cssclass=\"expr:cssTrailing5==&apos;Y&apos;||cssTrailing5 == &apos;T&apos; ? (cssscd5_2==null ? &quot;cell_Trailingdaybg&quot; : cssscd5_2)  : cssscd5_2\" tooltiptext=\"bind:scd5_2\"/><Cell row=\"4\" col=\"18\" colspan=\"3\" text=\"bind:scd6_2\" cssclass=\"expr:cssTrailing6==&apos;Y&apos; ||cssTrailing6 == &apos;T&apos;? (cssscd6_2==null ? &quot;cell_Trailingdaybg&quot; : cssscd6_2)  : cssscd6_2\" tooltiptext=\"bind:scd6_2\"/><Cell row=\"5\" colspan=\"3\" text=\"bind:scdId0_3\"/><Cell row=\"5\" col=\"3\" colspan=\"3\" text=\"bind:scdId1_3\"/><Cell row=\"5\" col=\"6\" colspan=\"3\" text=\"bind:scdId2_3\"/><Cell row=\"5\" col=\"9\" colspan=\"3\" text=\"bind:scdId3_3\"/><Cell row=\"5\" col=\"12\" colspan=\"3\" text=\"bind:scdId4_3\"/><Cell row=\"5\" col=\"15\" colspan=\"3\" text=\"bind:scdId5_3\"/><Cell row=\"5\" col=\"18\" colspan=\"3\" text=\"bind:scdId6_3\"/><Cell row=\"6\" colspan=\"3\" text=\"bind:scd0_3\" cssclass=\"expr:cssTrailing0==&apos;Y&apos;|| cssTrailing0==&apos;T&apos;  ? (cssscd0_3==null ? &quot;cell_Trailingdaybg&quot; : cssscd0_3)  : cssscd0_3\" tooltiptext=\"bind:scd0_3\"/><Cell row=\"6\" col=\"3\" colspan=\"3\" text=\"bind:scd1_3\" cssclass=\"expr:cssTrailing1==&apos;Y&apos; || cssTrailing1==&apos;T&apos; ? (cssscd1_3==null ? &quot;cell_Trailingdaybg&quot; : cssscd1_3)  : cssscd1_3\" tooltiptext=\"bind:scd1_3\"/><Cell row=\"6\" col=\"6\" colspan=\"3\" text=\"bind:scd2_3\" cssclass=\"expr:cssTrailing2==&apos;Y&apos; || cssTrailing2==&apos;T&apos;? (cssscd2_3==null ? &quot;cell_Trailingdaybg&quot; : cssscd2_3)  : cssscd2_3\" tooltiptext=\"bind:scd2_3\"/><Cell row=\"6\" col=\"9\" colspan=\"3\" text=\"bind:scd3_3\" cssclass=\"expr:cssTrailing3==&apos;Y&apos;||cssTrailing3 == &apos;T&apos; ? (cssscd3_3==null ? &quot;cell_Trailingdaybg&quot; : cssscd3_3)  : cssscd3_3\" tooltiptext=\"bind:scd3_3\"/><Cell row=\"6\" col=\"12\" colspan=\"3\" text=\"bind:scd4_3\" cssclass=\"expr:cssTrailing4==&apos;Y&apos; ||cssTrailing4 == &apos;T&apos;? (cssscd4_3==null ? &quot;cell_Trailingdaybg&quot; : cssscd4_3)  : cssscd4_3\" tooltiptext=\"bind:scd4_3\"/><Cell row=\"6\" col=\"15\" colspan=\"3\" text=\"bind:scd5_3\" cssclass=\"expr:cssTrailing5==&apos;Y&apos; ||cssTrailing5 == &apos;T&apos;? (cssscd5_3==null ? &quot;cell_Trailingdaybg&quot; : cssscd5_3)  : cssscd5_3\" tooltiptext=\"bind:scd5_3\"/><Cell row=\"6\" col=\"18\" colspan=\"3\" text=\"bind:scd6_3\" cssclass=\"expr:cssTrailing6==&apos;Y&apos;||cssTrailing6 == &apos;T&apos; ? (cssscd6_3==null ? &quot;cell_Trailingdaybg&quot; : cssscd6_3)  : cssscd6_3\" tooltiptext=\"bind:scd6_3\"/><Cell row=\"7\" colspan=\"3\" displaytype=\"normal\" expr=\"moreYN0 == &apos;Y&apos; ? dataset.parent.fnCountScd(dataset, currow, this.col) : &quot;&quot;\" textAlign=\"right\" cssclass=\"expr:cssTrailing0 == &apos;Y&apos; || cssTrailing0==&apos;T&apos; ? &quot;cell_End, cell_Trailingdaybg&quot; : &quot;cell_End&quot;\"/><Cell row=\"7\" col=\"3\" colspan=\"3\" displaytype=\"normal\" cssclass=\"expr:cssTrailing1 == &apos;Y&apos;|| cssTrailing1==&apos;T&apos;  ? &quot;cell_End, cell_Trailingdaybg&quot; : &quot;cell_End&quot;\" expr=\"moreYN1 == &apos;Y&apos; ? dataset.parent.fnCountScd(dataset, currow, this.col) : &quot;&quot;\" textAlign=\"right\"/><Cell row=\"7\" col=\"6\" colspan=\"3\" displaytype=\"normal\" cssclass=\"expr:cssTrailing2 == &apos;Y&apos; || cssTrailing2==&apos;T&apos;? &quot;cell_End, cell_Trailingdaybg&quot; : &quot;cell_End&quot;\" expr=\"moreYN2 == &apos;Y&apos; ? dataset.parent.fnCountScd(dataset, currow, this.col) : &quot;&quot;\" textAlign=\"right\"/><Cell row=\"7\" col=\"9\" colspan=\"3\" displaytype=\"normal\" cssclass=\"expr:cssTrailing3 == &apos;Y&apos; ||cssTrailing3 == &apos;T&apos; ? &quot;cell_End, cell_Trailingdaybg&quot; : &quot;cell_End&quot;\" expr=\"moreYN3 == &apos;Y&apos; ? dataset.parent.fnCountScd(dataset, currow, this.col) : &quot;&quot;\" textAlign=\"right\"/><Cell row=\"7\" col=\"12\" colspan=\"3\" displaytype=\"normal\" cssclass=\"expr:cssTrailing4 == &apos;Y&apos; ||cssTrailing4 == &apos;T&apos;? &quot;cell_End, cell_Trailingdaybg&quot; : &quot;cell_End&quot;\" expr=\"moreYN4 == &apos;Y&apos; ? dataset.parent.fnCountScd(dataset, currow, this.col) : &quot;&quot;\" textAlign=\"right\"/><Cell row=\"7\" col=\"15\" colspan=\"3\" displaytype=\"normal\" cssclass=\"expr:cssTrailing5 == &apos;Y&apos; ||cssTrailing5 == &apos;T&apos;? &quot;cell_End, cell_Trailingdaybg&quot; : &quot;cell_End&quot;\" expr=\"moreYN5 == &apos;Y&apos; ? dataset.parent.fnCountScd(dataset, currow, this.col) : &quot;&quot;\" textAlign=\"right\"/><Cell row=\"7\" col=\"18\" colspan=\"3\" displaytype=\"normal\" cssclass=\"expr:cssTrailing6 == &apos;Y&apos;||cssTrailing6 == &apos;T&apos;? &quot;cell_End, cell_Trailingdaybg&quot; : &quot;cell_End&quot;\" expr=\"moreYN6 == &apos;Y&apos; ? dataset.parent.fnCountScd(dataset, currow, this.col) : &quot;&quot;\" textAlign=\"right\"/></Band></Format></Formats>");
            this.divCal.addChild(obj.name, obj);

            obj = new Div("divList","divCal:-1","18",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_text("");
            obj.set_cssclass("div_CalView");
            obj.getSetter("usecustomexpr").set("");
            this.addChild(obj.name, obj);

            obj = new Static("staMmDd","16","8",null,"29","69",null,null,null,null,null,this.divList.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_CalTitle");
            obj.set_fittocontents("none");
            this.divList.addChild(obj.name, obj);

            obj = new ListView("lst00","8","46",null,null,"5","0",null,null,null,null,this.divList.form);
            obj.set_taborder("0");
            obj.set_cssclass("lst_WF_Calview");
            obj.set_binddataset("dsScdList");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"83\"><Cell id=\"Cell02\" left=\"14\" top=\"10\" width=\"27\" height=\"16\" cssclass=\"expr:dataset.parent.fnSetSectCdCss1(SCD_SECT_CD)\" displaytype=\"text\" text=\"bind:SSC_CD_KORN_NM\"/><Cell id=\"Cell05\" left=\"46\" top=\"9\" height=\"16\" text=\"bind:TITLE\" cssclass=\"cell_CalTitle\" displaytype=\"normal\" right=\"35\" tooltiptext=\"bind:TITLE\"/><Cell id=\"Cell07\" left=\"20\" top=\"52\" height=\"15\" text=\"expr:dataset.parent.fnListViewGetDate(dataset, currow)\" right=\"25\" cssclass=\"cell_CalCon\"/><Cell id=\"Cell08\" top=\"10\" width=\"16\" height=\"16\" text=\"attach\" cssclass=\"expr:FILE_ID!=undefined ? &quot;ico_Attachment&quot; : &quot;&quot;\" edittype=\"none\" displaytype=\"imagecontrol\" right=\"15\"/><Cell id=\"Cell11\" left=\"22\" top=\"82\" text=\"bind:contents\" right=\"22\" cssclass=\"cell_CalCon\" bottom=\"20\"/><Cell id=\"Cell00\" left=\"20\" top=\"35\" height=\"15\" text=\"expr:INPT_EMP_NO + &quot;  |  &quot; + SCD_NM\" right=\"25\" cssclass=\"cell_CalCode\"/></Band></Format></Formats>");
            this.divList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCal.form.div_CalHead.form
            obj = new Layout("default","",0,0,this.divCal.form.div_CalHead.form,function(p){});
            this.divCal.form.div_CalHead.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCal.form
            obj = new Layout("default","",0,0,this.divCal.form,function(p){});
            this.divCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divList.form
            obj = new Layout("default","",0,0,this.divList.form,function(p){});
            this.divList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleSchedule.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleSchedule.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/11/10
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/11/10			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvProgCd 	= "";
        this.fvMenuCd 	= "";
        this.fvScdCd 	= "";
        this.fvScdId 	= "";
        this.fvDeptCd 	= "";
        this.fvUserId 	= "";

        //접근 권한
        this.fvAccess 	= "";

        // 일정 List
        this.fvListFlag = "1";	//0:숨김 1:보여짐

        // 달력
        this.fvSelYyyy 	= "";	//사용자가 선택한 년도
        this.fvSelMm 	= "";	//사용자가 선택한 월
        this.fvSelDd 	= "";	//사용자가 선택한 일

        // 일정 마스터 정보
        this.fvScdInfo 	= {};
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//필수함수
        	this.gfnFormOnload(obj,e);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //신규
        this.cfnAdd = function()
        {
        	this.fnOpenScdP("add");
        }

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "Search" :
        			this.fnSearch();
        			break;
        	}
        };

        //popup callback
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 일정 list 보이기, 숨기기
        this.fnSetScdList = function()
        {
        	if(this.fvListFlag == 0){
        		this.divList.set_visible(false);
        		this.divCal.set_right("20");
        		this.divCal.form.div_CalHead.form.btnCloseOpen.set_cssclass("btn_WF_CalOpen");
        		this.divCal.form.div_CalHead.form.btnCloseOpen.set_text("상세일정 보기");
        	}else{
        		this.divList.set_visible(true);
        		this.divCal.set_right("300");
        		this.divList.form.staMmDd.set_text(this.fvSelMm + "월 " + this.fvSelDd + "일 (" + this.gfnGetDayKor(this.fvSelYyyy+this.fvSelMm+this.fvSelDd) + ")");
        		this.divCal.form.div_CalHead.form.btnCloseOpen.set_cssclass("btn_WF_CalClose");
        		this.divCal.form.div_CalHead.form.btnCloseOpen.set_text("상세일정 감추기");
        	}
        };

        // 일정 목록 조회
        this.fnSetScheduleList = function()
        {
        	var sDate = this.fvSelYyyy + this.fvSelMm + this.fvSelDd;
        	this.dsSearch.setColumn(0,"SECTDATE",sDate);
        	this.fnTranSectOneDay(sDate);
        };

        // 일정마스터정보
        this.fnSetScdInfo = function()
        {
        	if( this.dsScdInfo.getRowCount() == 0 ){
        		this.gfnAlert("msg.nomenu");
        		nexacro.getApplication().gvFrmMdi.form.fnCloseMenu(this.fvMenuCd);
        		return;
        	}

        	var nRowCount = this.dsScdInfo.getRowCount();
        	if(nRowCount=='1'){
        		this.fvScdInfo = {
        			scdNm	: this.dsScdInfo.getColumn(0,"SCD_NM")
        			, scdCd : this.dsScdInfo.getColumn(0,"SCD_CD")
        			, apndYn: this.dsScdInfo.getColumn(0,"APND_YN")
        			, mgrCd : this.dsScdInfo.getColumn(0,"MGR_ID")
        		};
        	}
        };

        // 접근 권한에 따라 일정 조회
        this.fnSelectSchedule = function()
        {
        	if(this.fvAccess=="MY"){
        		this.fnTranGetMySchedule();
        		this.fnSetScheduleList();
        	}
        	else if(this.fvAccess == "Y"){
        		this.fnTranGetSchedule();
        		this.fnSetScheduleList();
        	}
        };

        // 달력 그리기
        this.fnCalendarSetting = function ()
        {
        	this.divCal.form.div_CalHead.form.staYyyyMm.set_text(this.fvSelYyyy +"."+ this.fvSelMm);

        	this.dsSearch.setColumn(0,"YYYYMM", this.fvSelYyyy+this.fvSelMm+this.fvSelDd);
        	var sYyyyMm = this.dsSearch.getColumn(0,"YYYYMM");
        	if(this.gfnIsNull(sYyyyMm)) 	sYyyyMm = this.gfnGetDate().substr(0,6);
         	this.fvSelYyyy = sYyyyMm.substr(0,4).toString();
         	this.fvSelMm = sYyyyMm.substr(4,2).toString();

         	this.dsSearch.setColumn(0, "YYYYMM", sYyyyMm.substr(0,6));
        	this.dsSearch.setColumn(0, "SCD_CD", this.fvScdCd);
        	this.dsSearch.setColumn(0, "DEPT_CD", this.fvDeptCd);

         	this.fnTranGetMonthDate();
        };

        // 달력에 날짜 셋팅
        this.fnSetDate = function()
        {
        	this.dsSchedule.clearData();
        	this.divCal.form.grdList.set_enableredraw(false);
        	this.divCal.form.grdList.set_enableevent(false);
        	this.dsSchedule.set_enableevent(false);
        	for(var i=0; i<this.dsMonthDate.rowcount; i++) {
        		// 그리드 날짜 셋팅
        		var nRow = this.dsSchedule.addRow();
        		// 00일
        		this.dsSchedule.setColumn(nRow, "DAY0", this.fnMakeDay(this.dsMonthDate.getColumn(nRow, "SUN")));
        		this.dsSchedule.setColumn(nRow, "DAY1", this.fnMakeDay(this.dsMonthDate.getColumn(nRow, "MON")));
        		this.dsSchedule.setColumn(nRow, "DAY2", this.fnMakeDay(this.dsMonthDate.getColumn(nRow, "TUE")));
        		this.dsSchedule.setColumn(nRow, "DAY3", this.fnMakeDay(this.dsMonthDate.getColumn(nRow, "WED")));
        		this.dsSchedule.setColumn(nRow, "DAY4", this.fnMakeDay(this.dsMonthDate.getColumn(nRow, "THU")));
        		this.dsSchedule.setColumn(nRow, "DAY5", this.fnMakeDay(this.dsMonthDate.getColumn(nRow, "FRI")));
        		this.dsSchedule.setColumn(nRow, "DAY6", this.fnMakeDay(this.dsMonthDate.getColumn(nRow, "SAT")));
        		// 일정날짜
        		this.dsSchedule.setColumn(nRow, "YYYYMMDD0", this.dsMonthDate.getColumn(nRow, "SUN"));
        		this.dsSchedule.setColumn(nRow, "YYYYMMDD1", this.dsMonthDate.getColumn(nRow, "MON"));
        		this.dsSchedule.setColumn(nRow, "YYYYMMDD2", this.dsMonthDate.getColumn(nRow, "TUE"));
        		this.dsSchedule.setColumn(nRow, "YYYYMMDD3", this.dsMonthDate.getColumn(nRow, "WED"));
        		this.dsSchedule.setColumn(nRow, "YYYYMMDD4", this.dsMonthDate.getColumn(nRow, "THU"));
        		this.dsSchedule.setColumn(nRow, "YYYYMMDD5", this.dsMonthDate.getColumn(nRow, "FRI"));
        		this.dsSchedule.setColumn(nRow, "YYYYMMDD6", this.dsMonthDate.getColumn(nRow, "SAT"));

        		this.dsSchedule.setColumn(nRow,"css0", "cell_Sunday"); 	//일요일
        		this.dsSchedule.setColumn(nRow,"css1", "cell_Day"); 		//월요일
        		this.dsSchedule.setColumn(nRow,"css2", "cell_Day"); 		//화요일
        		this.dsSchedule.setColumn(nRow,"css3", "cell_Day"); 		//수요일
        		this.dsSchedule.setColumn(nRow,"css4", "cell_Day"); 		//목요일
        		this.dsSchedule.setColumn(nRow,"css5", "cell_Day"); 		//금요일
        		this.dsSchedule.setColumn(nRow,"css6", "cell_Saturday"); 	//토요일

        		this.fnSetCalendarCss(nRow);
        	}
        	this.dsSchedule.set_enableevent(true);
        	this.divCal.form.grdList.set_enableevent(true);
        	this.divCal.form.grdList.set_enableredraw(true);

        	//일정 데이터 조회
        	this.fnSelectSchedule();
        };

        //캘린더에 css추가하기
        this.fnSetCalendarCss = function(i)
        {
        	var aHolidays = this.gfnGetHolidays(this.fvSelYyyy);
        	for(var j=0; j<7; j++){
        		var nYYYYMMDD = this.dsSchedule.getColumn(i, "YYYYMMDD"+j);
        		//공휴일
        		var sHoliday= this.fnIsHoliday(nYYYYMMDD, aHolidays);
        		if(sHoliday!=""){
        			this.dsSchedule.setColumn(i, "hol"+j, sHoliday);
        		}

        		//선택된 날짜 색상 변경
        		if(this.fvSelYyyy+this.fvSelMm+this.fvSelDd == this.dsSchedule.getColumn(i, "YYYYMMDD"+j)){
        			this.dsSchedule.setColumn(i,"css"+j, "cell_Today");
        		}

        		// 지난 달, 이후 달
        		var sMonth = nYYYYMMDD.substr(4,2);
        		if(this.fvSelMm == sMonth){
        			continue;
        		}else{
        			this.dsSchedule.setColumn(i,"cssTrailing"+j, "Y");
        		}
        	}
        };

        // 공휴일 확인
        this.fnIsHoliday = function(sDate, aHolidays)
        {
        	for(var i=0; i<aHolidays.length; i++){

        		if(aHolidays[i].substr(0,8) == sDate){
        			return aHolidays[i].substr(8);
        		}
        	}
        	return "";
        };

        // 날짜 가져오기. 2021103 -> 3
        this.fnMakeDay =function(sYYYYMMDD)
        {
        	if(this.gfnIsNull(sYYYYMMDD)) return;
        	var sDate =  sYYYYMMDD.substr(6,2).toString();
        	if(10 > sDate)  sDate = sDate.replace("0", "");

        	return sDate;
        };

        // 날짜 가져오기 03->3
        this.fnMakeDayDd =function(nDay)
        {
        	if(this.gfnIsNull(nDay)) return;
        	if(10 > nDay)  nDay = nDay.replace("0", "");
        	return nDay;
        };

        // 일정 셋팅
        this.fnSetScd = function()
        {
        	var nRow = -1;
        	var nMore = ""; // 일정 더보기

        	this.divCal.form.grdList.set_enableevent(false);
        	this.dsSchedule.set_enableevent(false);
        	var nRow = -1;
        	for(var i=0; i<this.dsScdData.rowcount; i++){
        		for(var j=0; j<7; j++){
        			nRow = this.dsSchedule.findRow("YYYYMMDD"+j,this.dsScdData.getColumn(i,"CAL_DATE"));
        			var aScdId = new Array();
        			if(nRow > -1){
        				//어제와 같은 scdid가 있는지 확인, 있다면 같은 줄에 데이터 넣기
        				for(var s=0; s<3; s++){
        					if(j==0){
        						if(!this.gfnIsNull(this.dsSchedule.getColumn(nRow-1, "scdId6_"+(s+1)))){
        							aScdId[s] = this.dsSchedule.getColumn(nRow-1, "scdId6_"+(s+1));
        						}
        					}else{
        						if(!this.gfnIsNull(this.dsSchedule.getColumn(nRow, "scdId" + (j-1) + "_"+(s+1)))){
        							aScdId[s] = this.dsSchedule.getColumn(nRow, "scdId" + (j-1) + "_"+(s+1));
        						}
        					}
        				}
        				if(aScdId.length > 0){
        					if(aScdId[0] == this.dsScdData.getColumn(i,"SCD_ID")) {
        						this.dsSchedule.setColumn(nRow, "scd"+j+"_1", this.dsScdData.getColumn(i, "TITLE"));
        						this.dsSchedule.setColumn(nRow, "scdId"+j+"_1", this.dsScdData.getColumn(i, "SCD_ID"));
        						sCssScd = this.fnSetSectCdCss(i);
        						this.dsSchedule.setColumn(nRow, "cssscd"+j+"_1", sCssScd);
        						break;
        					}else if(aScdId[1] == this.dsScdData.getColumn(i,"SCD_ID")){
        						this.dsSchedule.setColumn(nRow, "scd"+j+"_2", this.dsScdData.getColumn(i, "TITLE"));
        						this.dsSchedule.setColumn(nRow, "scdId"+j+"_2", this.dsScdData.getColumn(i, "SCD_ID"));
        						sCssScd = this.fnSetSectCdCss(i);
        						this.dsSchedule.setColumn(nRow, "cssscd"+j+"_2", sCssScd);
        						break;
        					}else if(aScdId[2] == this.dsScdData.getColumn(i,"SCD_ID")){
        						this.dsSchedule.setColumn(nRow, "scd"+j+"_3", this.dsScdData.getColumn(i, "TITLE"));
        						this.dsSchedule.setColumn(nRow, "scdId"+j+"_3", this.dsScdData.getColumn(i, "SCD_ID"));
        						sCssScd = this.fnSetSectCdCss(i);
        						this.dsSchedule.setColumn(nRow, "cssscd"+j+"_3", sCssScd);
        						break;
        					}else{
        						this.fnSetSchedule("scd"+j+"_", "scdId"+j+"_", "moreYN"+j, nRow, i);
        						break;
        					}
        				}else{
        					this.fnSetSchedule("scd"+j+"_", "scdId"+j+"_", "moreYN"+j, nRow, i);
        					continue;
        				}
        			}
        		}
        	}
        	this.divCal.form.grdList.set_enableevent(true);
        	this.dsSchedule.set_enableevent(true);
        };

        // 일정셋팅
        this.fnSetSchedule = function(scd, scdId, moreYN, nRow, i)
        {
          var nNum = "";
          var sCssScd = "";

          for(nNum = 1; nNum <=3; nNum++){
        	if(this.gfnIsNull(this.dsSchedule.getColumn(nRow,scd+nNum))){
        		this.dsSchedule.setColumn(nRow, scd+nNum, this.dsScdData.getColumn(i, "TITLE"));
        		this.dsSchedule.setColumn(nRow, scdId+nNum, this.dsScdData.getColumn(i, "SCD_ID"));
        		sCssScd = this.fnSetSectCdCss(i);
        		this.dsSchedule.setColumn(nRow, "css"+scd+nNum, sCssScd);
        		break;
        	}else if(nNum == 3 && !this.gfnIsNull(this.dsSchedule.getColumn(nRow, scd+3))){
        		this.dsSchedule.setColumn(nRow, moreYN, "Y");
        	}
          }
        };

        //일정 유형 별 Css
        this.fnSetSectCdCss = function(i)
        {
        	var sScdSectCd = this.dsScdData.getColumn(i, "SCD_SECT_CD");
        	return "label" + this.gfnLPad(this.dsSetCd.findRow("SSC_CD", sScdSectCd)+1, 0, 2);
        };

        //일정 유형 별 Css
        this.fnSetSectCdCss1 = function(sScdSectCd)
        {
        	return "label" + this.gfnLPad(this.dsSetCd.findRow("SSC_CD", sScdSectCd)+1, 0, 2);
        };

        //다른 날짜 클릭 시 Css 삭제
        this.fnRemoveDayCss = function()
        {
        	var nRowC = "";
        	var nRowT = "";
        	var i = "";
        	for(i=0; i<7; i++){
        		nRowC = this.dsSchedule.findRow("css"+i, "cell_Today");
        		nRowT = this.dsSchedule.findRow("cssTrailing"+i, "T");
        		if(nRowC > -1 || nRowT > -1)  break;
        	}

        	if(nRowC > -1){
        		//요일별로 css설정
        		if(i=="0"){
        			this.dsSchedule.setColumn(nRowC, "css"+i, "cell_Sunday");
        		}else if(i=="6"){
        			this.dsSchedule.setColumn(nRowC, "css"+i, "cell_Saturday");
        		}else{
        			this.dsSchedule.setColumn(nRowC, "css"+i, "cell_Day");
        		}
        	}else if(nRowT > -1){
        		this.dsSchedule.setColumn(nRowT, "cssTrailing"+i, "Y");
        	}
        };

        // 날짜 변경
        this.fnMoveDate = function(sDate)
        {
        	var sToday = this.gfnGetDate();
        	this.fvSelYyyy = sDate.substr(0,4);
        	this.fvSelMm   = sDate.substr(4,2);

        	//현재 날짜와 똑같은 년,월일 때 오늘 날짜로 변경
        	if(sDate.substr(0,6)==sToday.substr(0,6)){
        		this.fvSelDd   = sToday.substr(6,2);
        	}else{
        		this.fvSelDd   = sDate.substr(6,2);
        	}

        	this.fnCalendarSetting();
        };

        //listView 일정 일자 출력(expr)
        this.fnListViewGetDate = function(dataset, currow)
        {
        	var nStartDay	= dataset.getColumn(currow,'START_DAY');
        	var nEndDay	 	= dataset.getColumn(currow,'END_DAY');
        	var nStartTime	= dataset.getColumn(currow,'START_TIME');
        	var nStartMinutes = dataset.getColumn(currow, 'START_MINUTES');
        	var nEndTime	= dataset.getColumn(currow, 'END_TIME');
        	var nEndMinutes	= dataset.getColumn(currow, 'END_MINUTES');
        	var sRtn	  = "";

        	if(nStartDay == nEndDay){
        		sRtn = nStartDay.substr(0,4) + "." + nStartDay.substr(4,2) + "." + nStartDay.substr(6,2) + "(" + this.gfnGetDayKor(nStartDay) + ") "
        			   + nStartTime + ":" + nStartMinutes + " ~ " + nEndTime + ":" + nEndMinutes;
        	}else{
        		sRtn = nStartDay.substr(0,4) + "." + nStartDay.substr(4,2) + "." + nStartDay.substr(6,2) + "(" + this.gfnGetDayKor(nStartDay) + ") "
        			   + nStartTime + ":" + nStartMinutes + " ~ "
        			   + nEndDay.substr(0,4) + "." + nEndDay.substr(4,2) + "." + nEndDay.substr(6,2) + "(" + this.gfnGetDayKor(nEndDay) + ") " + nEndTime + ":" + nEndMinutes;
        	}
        	return sRtn;
        };

        //grid 건수 출력(expr)
        this.fnCountScd = function(dataset, currow, col)
        {
        	var nNum = col/3;
        	var nDate = dataset.getColumn(currow, "YYYYMMDD"+nNum);

        	this.dsScdData.filter("CAL_DATE ==" + nDate);
        	var nCount = this.dsScdData.getRowCount();
        	this.dsScdData.filter("");

        	return "총 " + nCount +"건";
        };


        //입력/조회/수정 팝업 오픈
        this.fnOpenScdP = function (sStatus, sScdId)
        {
        	var sTitle 		= "";

        	var popupId 	= "";
        	var popupUrl 	= "";

        	var readUrl		= "";
        	var addUrl		= "";
        	var updateUrl	= "";

        	//PC로 로그인
        	if(nexacro.getApplication().gdsUser.getColumn(0,"SYTM_FLAG_CD")=="PC")
        	//조회
        	if(sStatus=="read"){
        		//일정모아보기 경우 셋팅
        		if(this.dsScdInfo.getRowCount() > 1){
        			var	nRow = this.dsScdInfo.findRow("SCD_CD", this.fvScdCd);
        			this.fvScdInfo = {  scdNm	: this.dsScdInfo.getColumn(nRow,"SCD_NM")
        								, scdCd : this.dsScdInfo.getColumn(nRow,"SCD_CD")
        								, apndYn: this.dsScdInfo.getColumn(nRow,"APND_YN")
        								, mgrCd : this.dsScdInfo.getColumn(nRow,"MGR_ID")
        							};
        		}

        		sTitle		= "일정 상세조회";
        		popupId 	= "readScd";
        		popupUrl 	= "sample::sampleScheduleReadPu.xfdl";
        		var oArg   	= {pvApndYn		: this.fvScdInfo.apndYn
        					  ,pvTitle 		: this.fvScdInfo.scdNm// 일정 마스터 타이틀
        					  ,pvScdCd		: this.fvScdCd
        					  ,pvScdId		: sScdId // 일정 번호
        					  ,pvDeptCd		: this.fvDeptCd //부서코드
        					  ,pvOpenType	: "read"
        					  ,pvMgrCd	 	: this.fvScdInfo.mgrCd// 관리자
        					  ,pvYyyyMmDd	: this.fvSelYyyy+this.fvSelMm+this.fvSelDd
        					  };
        	//추가
        	} else if(sStatus=="add"){
        		this.fvScdCd = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.param);

        		var sScdType = "";
        		if(this.fvAccess=="MY") {
        			this.fvScdCd = this.fvDeptCd;
        			sScdType = "MY";
        		}else{
        			sScdType = "Y";
        		}

        		sTitle		= "일정 등록";
        		popupId 	= "addScd";
        		popupUrl 	= "comm::schedule/schedulePu.xfdl";
        		var oArg  	= { pvApndYn	: this.fvScdInfo.apndYn// 첨부파일 여부
        					  ,pvTitle 		: this.fvScdInfo.scdNm // 일정마스터타이틀
        					  ,pvScdTitle	: "" // 추가될 스케쥴의 타이틀
        					  ,pvScdCd		: this.fvScdCd //일정마스터코드
        					  ,pvYyyy 		: this.fvSelYyyy
        					  ,pvMm 		: this.fvSelMm
        					  ,pvDd			: this.fvSelDd
        					  ,pvDeptCd     : this.fvDeptCd
        					  ,pvOpenType	: "add"
        					  ,pvScdType	: sScdType
        					};
        	//수정
        	} else if(sStatus=="update"){
        		sTitle		= "일정 수정";
        		popupId 	= "updateScd";
        		popupUrl 	= "comm::schedule/schedulePu.xfdl";
        		var oArg   	= {pvApndYn		: this.fvScdInfo.apndYn
        					  ,pvScdCd		: this.fvScdCd
        					  ,pvScdId		: this.fvScdId
        					  ,pvDeptCd		: this.fvDeptCd
        					  ,pvTitle		: this.fvScdInfo.scdNm
        					  ,pvOpenType	: "update"
        					};
        	}

        	var oOption 	= {title:sTitle
        					,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // < 버튼 클릭
        this.divCal_div_CalHead_btnPre_onclick = function(obj,e)
        {
        	var sYyyyMm = this.divCal.form.div_CalHead.form.staYyyyMm.text;
        	var sDate = this.gfnAddMonth((sYyyyMm.substr(0,4) + sYyyyMm.substr(5,2))+"01", -1);
        	this.fnMoveDate(sDate);
        };

        // > 버튼 클릭
        this.divCal_div_CalHead_btnNext_onclick = function(obj,e)
        {
        	var sYyyyMm = this.divCal.form.div_CalHead.form.staYyyyMm.text;
        	var sDate = this.gfnAddMonth((sYyyyMm.substr(0,4) + sYyyyMm.substr(5,2))+"01", +1);
        	this.fnMoveDate(sDate);
        };

        // << 버튼 클릭
        this.divCal_div_CalHead_btnPreYear_onclick = function(obj,e)
        {
        	var sYyyyMm = this.divCal.form.div_CalHead.form.staYyyyMm.text;
        	var sDate = (Number(sYyyyMm.substr(0,4)) - 1) + sYyyyMm.substr(5,2) + "01";
        	this.fnMoveDate(sDate);
        };

        // >> 버튼 클릭
        this.divCal_div_CalHead_btnNextYear_onclick = function(obj,e)
        {
        	var sYyyyMm = this.divCal.form.div_CalHead.form.staYyyyMm.text;
        	var sDate = (Number(sYyyyMm.substr(0,4)) + 1) + sYyyyMm.substr(5,2) + "01";
        	this.fnMoveDate(sDate);
        };

        //Today버튼 클릭
        this.divCal_div_CalHead_btnToday_onclick = function(obj,e)
        {
        	var sDate = this.gfnGetDate();
        	this.fnMoveDate(sDate);
        };

        //Reload버튼 클릭
        this.divCal_div_CalHead_btnReload_onclick = function(obj,e)
        {
        	var sDate =  this.divCal.form.div_CalHead.form.staYyyyMm.text.substr(0,4)
        				+ this.divCal.form.div_CalHead.form.staYyyyMm.text.substr(5,2)
        				+ "01" ;
        	this.fnMoveDate(sDate);
        };

        //그리드 Cell 선택 (일정 제목, 더보기, 글쓰기)
        this.grdList_oncellclick = function(obj,e)
        {
        	return;
        	var sDisplay	= obj.getCellPropertyValue(e.row, e.cell, "displaytype");
        	var sText		= obj.getCellProperty("body", e.cell, "text");
        	var sDate 		= "";
        	var sScdId		= obj.getCellPropertyValue(e.row, e.cell-7, "text");

        	// 날짜, 공휴일 클릭
        	if (!this.gfnIsNull(sText)  && (sText.indexOf("DAY") > -1 || sText.indexOf("hol") >-1) ) {
        		var nCell = "";
        		if( sText.indexOf("DAY") > -1) 	 nCell = e.cell/3;
        		else if(sText.indexOf("hol") > -1)  nCell = (e.cell-1)/3;

        		sDate = this.dsSchedule.getColumn(e.row, "YYYYMMDD"+ nCell);

        		//CSS적용
        		this.fnRemoveDayCss();
        		if(sDate.substr(4,2)!=this.divCal.form.div_CalHead.form.staYyyyMm.text.substr(5,2)){
        			this.dsSchedule.setColumn(e.row, "cssTrailing"+nCell, "T");
        		}else{
        			this.dsSchedule.setColumn(e.row,"css"+nCell, "cell_Today");
        		}

        		this.fvSelYyyy  = sDate.substr(0,4);
        		this.fvSelMm	= sDate.substr(4,2);
        		this.fvSelDd = sDate.substr(6,2);
        		this.fnSetScheduleList();
        	}
        	// + 클릭(일정 추가)
        	else if (sDisplay=="buttoncontrol") {
        		// 추가 권한 체크
        		if (!this.gfnGetAuth("Add")) {
        			this.gfnAlert("msg.nosearchscope");//권한이 업습니다.
        			return;
        		}
        		sDate = this.dsSchedule.getColumn(e.row, "YYYYMMDD"+((e.cell-2)/3));
        		this.fvSelYyyy = sDate.substr(0,4);
        		this.fvSelMm = sDate.substr(4,2);
        		this.fvSelDd = sDate.substr(6,2);

        		this.cfnAdd();
        	}
        	// 일정 조회
        	else if (!this.gfnIsNull(sText) && sText.indexOf("scd")>-1 && !this.gfnIsNull(sScdId)){
        		sDate = this.dsSchedule.getColumn(e.row, "YYYYMMDD"+(e.cell%7));
        		var nRow = this.dsScdData.findRow("SCD_ID", sScdId);
        		this.fvScdCd = this.dsScdData.getColumn(nRow,"SCD_CD");
        		this.fvScdId = sScdId;
        		this.fnOpenScdP("read", sScdId);
        	}
        };

        //일정 목록 리스트뷰 선택(조회)
        this.divList_lst00_oncellclick = function(obj,e)
        {return;
        	var sScdId = this.dsScdList.getColumn(e.row, "SCD_ID");
        	// 일정 조회
        	if(!this.gfnIsNull(sScdId)){
        		var nRow = this.dsScdData.findRow("SCD_ID", sScdId);
        		this.fvScdCd = this.dsScdData.getColumn(nRow,"SCD_CD");
        		this.fvScdId = sScdId;
        		this.fnOpenScdP("read", sScdId);
        	}
        };

        //일정 목록 닫기, 열기
        this.divCal_div_CalHead_btnCloseOpen_onclick = function(obj,e)
        {
        	if(obj.cssclass =="btn_WF_CalClose"){
        		this.fvListFlag = "0";
        		this.fnSetScdList();
        	}else if(obj.cssclass =="btn_WF_CalOpen"){
        		this.fvListFlag = "1";
        		this.fnSetScdList();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divCal.form.div_CalHead.form.btnToday.addEventHandler("onclick",this.divCal_div_CalHead_btnToday_onclick,this);
            this.divCal.form.div_CalHead.form.btnCloseOpen.addEventHandler("onclick",this.divCal_div_CalHead_btnCloseOpen_onclick,this);
            this.divCal.form.div_CalHead.form.btnReload.addEventHandler("onclick",this.divCal_div_CalHead_btnReload_onclick,this);
            this.divCal.form.div_CalHead.form.btnPre.addEventHandler("onclick",this.divCal_div_CalHead_btnPre_onclick,this);
            this.divCal.form.div_CalHead.form.btnNext.addEventHandler("onclick",this.divCal_div_CalHead_btnNext_onclick,this);
            this.divCal.form.div_CalHead.form.btnPreYear.addEventHandler("onclick",this.divCal_div_CalHead_btnPreYear_onclick,this);
            this.divCal.form.div_CalHead.form.btnNextYear.addEventHandler("onclick",this.divCal_div_CalHead_btnNextYear_onclick,this);
            this.divCal.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divList.form.lst00.addEventHandler("oncellclick",this.divList_lst00_oncellclick,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsSchedule.addEventHandler("oncolumnchanged",this.dsSchedule_oncolumnchanged,this);
        };
        this.loadIncludeScript("sampleSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
