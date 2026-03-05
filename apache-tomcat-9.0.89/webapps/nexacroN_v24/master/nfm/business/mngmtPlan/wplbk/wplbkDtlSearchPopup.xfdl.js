(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("wplbkDtlSearchPopup");
            this.set_titletext("경영계획부 상세검색 팝업화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(860,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsClsf", this);
            obj._setContents("<ColumnInfo><Column id=\"clsfId\" type=\"STRING\" size=\"256\"/><Column id=\"clsfNm\" type=\"STRING\" size=\"256\"/><Column id=\"upClsfId\" type=\"STRING\" size=\"256\"/><Column id=\"clsfKind\" type=\"STRING\" size=\"256\"/><Column id=\"clsfDataSet\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"INT\" size=\"256\"/><Column id=\"clsfQuery\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"clsfId\">A</Col><Col id=\"clsfNm\">일반</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"clsfId\">A01</Col><Col id=\"clsfNm\">관리구역</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">INST</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">A02</Col><Col id=\"clsfNm\">행정구역</Col><Col id=\"upClsfId\">A</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">A0201</Col><Col id=\"clsfNm\">주소</Col><Col id=\"upClsfId\">A02</Col><Col id=\"clsfKind\">TEXT</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">lctn_daddr like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">A0202</Col><Col id=\"clsfNm\">지적</Col><Col id=\"upClsfId\">A02</Col><Col id=\"clsfKind\">ADDR</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"clsfId\">A03</Col><Col id=\"clsfNm\">특수림</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsSpwodKindCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">spwod_kind_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">A04</Col><Col id=\"clsfNm\">면적</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">SEL_RANGE</Col><Col id=\"clsfDataSet\">dsAreaTpcd</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">A05</Col><Col id=\"clsfNm\">주기능</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsMnfrsSkillCd</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">A06</Col><Col id=\"clsfNm\">보조기능</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsMnfrsSkillCd</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">A07</Col><Col id=\"clsfNm\">목표임상</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsKoftrCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">goal_koftr_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">A08</Col><Col id=\"clsfNm\">법정지정림</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">SEL_RANGE</Col><Col id=\"clsfDataSet\">dsSttyApwodCd</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">A09</Col><Col id=\"clsfNm\">관리사항</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">TEXT</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">mng_mttr like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">A10</Col><Col id=\"clsfNm\">계획수립배경</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">TEXT</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">biz_bckgr_cn like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">A11</Col><Col id=\"clsfNm\">작업지시서</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">TEXT</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">job_dirct_cn like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">A12</Col><Col id=\"clsfNm\">소반연혁</Col><Col id=\"upClsfId\">A</Col><Col id=\"clsfKind\">TEXT</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">sblt_hstry like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">B</Col><Col id=\"clsfNm\">지황</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"clsfId\">B01</Col><Col id=\"clsfNm\">방위</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsOrbrnCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">orbrn_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">B02</Col><Col id=\"clsfNm\">경사도</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsGrdntCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">grdnt_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">B03</Col><Col id=\"clsfNm\">표고</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_RANGE</Col><Col id=\"clsfDataSet\">dsAlttdCd</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">B04</Col><Col id=\"clsfNm\">토성</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsScstxCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">mnfrs_exmn_scstx_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">B05</Col><Col id=\"clsfNm\">토심</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsSldptTpcd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">vld_sldpt_tpcd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">B06</Col><Col id=\"clsfNm\">건습도</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsHgdgrTpcd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">hgdgr_tpcd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">B07</Col><Col id=\"clsfNm\">지위</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsPstonCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">pston_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">B08</Col><Col id=\"clsfNm\">지리</Col><Col id=\"upClsfId\">B</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsMnfrsExmnGgrphCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">mnfrs_exmn_ggrph_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">C</Col><Col id=\"clsfNm\">임황</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"clsfId\">C01</Col><Col id=\"clsfNm\">우세목수고</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">dmtre_trhgh</Col></Row><Row><Col id=\"clsfId\">C02</Col><Col id=\"clsfNm\">우세목임령</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">dmtre_frag</Col></Row><Row><Col id=\"clsfId\">C03</Col><Col id=\"clsfNm\">임종</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsFrorCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">fror_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">C04</Col><Col id=\"clsfNm\">임상</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsFrtpTpcd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">frtp_tpcd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">C05</Col><Col id=\"clsfNm\">소밀도</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsCrdnsCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">crdns_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">C06</Col><Col id=\"clsfNm\">주요수종</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsKoftrCd</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">koftr_cd in ($value1$)</Col></Row><Row><Col id=\"clsfId\">C07</Col><Col id=\"clsfNm\">혼효율</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">mixtr_rt</Col></Row><Row><Col id=\"clsfId\">C08</Col><Col id=\"clsfNm\">최저임령</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">mnmm_frag</Col></Row><Row><Col id=\"clsfId\">C09</Col><Col id=\"clsfNm\">최고임령</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">mxmm_frag</Col></Row><Row><Col id=\"clsfId\">C10</Col><Col id=\"clsfNm\">평균임령</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">avrg_frag</Col></Row><Row><Col id=\"clsfId\">C11</Col><Col id=\"clsfNm\">평균수고</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">avrg_trhgh</Col></Row><Row><Col id=\"clsfId\">C12</Col><Col id=\"clsfNm\">평균경급</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">avrg_dmtr</Col></Row><Row><Col id=\"clsfId\">C13</Col><Col id=\"clsfNm\">현실축적</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">realt_accmn_totl_sum</Col></Row><Row><Col id=\"clsfId\">C14</Col><Col id=\"clsfNm\">법정축적</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">stty_accmn_totl_sum</Col></Row><Row><Col id=\"clsfId\">C15</Col><Col id=\"clsfNm\">연년생장율</Col><Col id=\"upClsfId\">C</Col><Col id=\"clsfKind\">RANGE</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">cairt</Col></Row><Row><Col id=\"clsfId\">D</Col><Col id=\"clsfNm\">기타</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"clsfId\">D01</Col><Col id=\"clsfNm\">특정임산물</Col><Col id=\"upClsfId\">D</Col><Col id=\"clsfKind\">TEXT</Col><Col id=\"lev\">1</Col><Col id=\"clsfQuery\">spcfc_foprd_nm like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">E</Col><Col id=\"clsfNm\">사업</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"clsfId\">E01</Col><Col id=\"clsfNm\">조림</Col><Col id=\"upClsfId\">E</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">E0101</Col><Col id=\"clsfNm\">연도</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE_YR</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_yr</Col></Row><Row><Col id=\"clsfId\">E0102</Col><Col id=\"clsfNm\">면적</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_area</Col></Row><Row><Col id=\"clsfId\">E0103</Col><Col id=\"clsfNm\">노동력</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_lbper</Col></Row><Row><Col id=\"clsfId\">E0104</Col><Col id=\"clsfNm\">시급성</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsUrgntCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">urgnt_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0105</Col><Col id=\"clsfNm\">종별</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsAffrsSpecsTpcd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_kind_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0106</Col><Col id=\"clsfNm\">본수</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_qntt</Col></Row><Row><Col id=\"clsfId\">E0107</Col><Col id=\"clsfNm\">사유</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsAffrsRsnCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_rsn_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0108</Col><Col id=\"clsfNm\">지출금액</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_amt</Col></Row><Row><Col id=\"clsfId\">E0109</Col><Col id=\"clsfNm\">지출일</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">expnd_day</Col></Row><Row><Col id=\"clsfId\">E0110</Col><Col id=\"clsfNm\">수입금액</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_amt</Col></Row><Row><Col id=\"clsfId\">E0111</Col><Col id=\"clsfNm\">수입일</Col><Col id=\"upClsfId\">E01</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_day</Col></Row><Row><Col id=\"clsfId\">E02</Col><Col id=\"clsfNm\">숲가꾸기</Col><Col id=\"upClsfId\">E</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">E0201</Col><Col id=\"clsfNm\">연도</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE_YR</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_yr</Col></Row><Row><Col id=\"clsfId\">E0202</Col><Col id=\"clsfNm\">면적</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_area</Col></Row><Row><Col id=\"clsfId\">E0203</Col><Col id=\"clsfNm\">누적면적</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_accml_area</Col></Row><Row><Col id=\"clsfId\">E0204</Col><Col id=\"clsfNm\">노동력</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_lbper</Col></Row><Row><Col id=\"clsfId\">E0205</Col><Col id=\"clsfNm\">시급성</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsUrgntCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">urgnt_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0206</Col><Col id=\"clsfNm\">종별</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsFrestGrdnnSpecsTpcd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_kind_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0207</Col><Col id=\"clsfNm\">횟수</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_qntt</Col></Row><Row><Col id=\"clsfId\">E0208</Col><Col id=\"clsfNm\">지출금액</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_amt</Col></Row><Row><Col id=\"clsfId\">E0209</Col><Col id=\"clsfNm\">지출일</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">expnd_day</Col></Row><Row><Col id=\"clsfId\">E0210</Col><Col id=\"clsfNm\">수입금액</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_amt</Col></Row><Row><Col id=\"clsfId\">E0211</Col><Col id=\"clsfNm\">수입일</Col><Col id=\"upClsfId\">E02</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_day</Col></Row><Row><Col id=\"clsfId\">E03</Col><Col id=\"clsfNm\">목재수확</Col><Col id=\"upClsfId\">E</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">E0301</Col><Col id=\"clsfNm\">연도</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE_YR</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_yr</Col></Row><Row><Col id=\"clsfId\">E0302</Col><Col id=\"clsfNm\">면적</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_area</Col></Row><Row><Col id=\"clsfId\">E0303</Col><Col id=\"clsfNm\">종별</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsSctslTpcd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_kind_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0304</Col><Col id=\"clsfNm\">노동력</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_lbper</Col></Row><Row><Col id=\"clsfId\">E0305</Col><Col id=\"clsfNm\">시급성</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsUrgntCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">urgnt_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0306</Col><Col id=\"clsfNm\">목재수확종</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsFellyMthdCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">frtre_prdctn_assrt_tpcd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0307</Col><Col id=\"clsfNm\">목재수확률</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">frtre_prdctn_felly_rt</Col></Row><Row><Col id=\"clsfId\">E0309</Col><Col id=\"clsfNm\">생산방법</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsPrdctnMthdCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">prdctn_mthd_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0310</Col><Col id=\"clsfNm\">지출금액</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_amt</Col></Row><Row><Col id=\"clsfId\">E0311</Col><Col id=\"clsfNm\">지출일</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">expnd_day</Col></Row><Row><Col id=\"clsfId\">E0312</Col><Col id=\"clsfNm\">수입금액</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_amt</Col></Row><Row><Col id=\"clsfId\">E0313</Col><Col id=\"clsfNm\">수입일</Col><Col id=\"upClsfId\">E03</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_day</Col></Row><Row><Col id=\"clsfId\">E04</Col><Col id=\"clsfNm\">시설</Col><Col id=\"upClsfId\">E</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">E0401</Col><Col id=\"clsfNm\">연도</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_RANGE_YR</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_yr</Col></Row><Row><Col id=\"clsfId\">E0402</Col><Col id=\"clsfNm\">종류</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsFcltKindCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_kind_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0403</Col><Col id=\"clsfNm\">시급성</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsUrgntCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">urgnt_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0404</Col><Col id=\"clsfNm\">물량</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_qntt</Col></Row><Row><Col id=\"clsfId\">E0405</Col><Col id=\"clsfNm\">노동력</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_lbper</Col></Row><Row><Col id=\"clsfId\">E0406</Col><Col id=\"clsfNm\">지출금액</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_amt</Col></Row><Row><Col id=\"clsfId\">E0407</Col><Col id=\"clsfNm\">지출일</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">expnd_day</Col></Row><Row><Col id=\"clsfId\">E0408</Col><Col id=\"clsfNm\">수입금액</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_amt</Col></Row><Row><Col id=\"clsfId\">E0409</Col><Col id=\"clsfNm\">수입일</Col><Col id=\"upClsfId\">E04</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_day</Col></Row><Row><Col id=\"clsfId\">E05</Col><Col id=\"clsfNm\">소득</Col><Col id=\"upClsfId\">E</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">E0501</Col><Col id=\"clsfNm\">연도</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_RANGE_YR</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_yr</Col></Row><Row><Col id=\"clsfId\">E0502</Col><Col id=\"clsfNm\">종류</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsEarnSpecsClsfCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_kind_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0503</Col><Col id=\"clsfNm\">기타소득종명</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_TEXT</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_etc_kind_nm like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">E0504</Col><Col id=\"clsfNm\">시급성</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsUrgntCd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">urgnt_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0505</Col><Col id=\"clsfNm\">생산량</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_qntt</Col></Row><Row><Col id=\"clsfId\">E0506</Col><Col id=\"clsfNm\">노동력</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_lbper</Col></Row><Row><Col id=\"clsfId\">E0507</Col><Col id=\"clsfNm\">지출금액</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_amt</Col></Row><Row><Col id=\"clsfId\">E0508</Col><Col id=\"clsfNm\">지출일</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">expnd_day</Col></Row><Row><Col id=\"clsfId\">E0509</Col><Col id=\"clsfNm\">수입금액</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_amt</Col></Row><Row><Col id=\"clsfId\">E0510</Col><Col id=\"clsfNm\">수입일</Col><Col id=\"upClsfId\">E05</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_day</Col></Row><Row><Col id=\"clsfId\">E06</Col><Col id=\"clsfNm\">복구</Col><Col id=\"upClsfId\">E</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"clsfId\">E0601</Col><Col id=\"clsfNm\">연도</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_RANGE_YR</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_yr</Col></Row><Row><Col id=\"clsfId\">E0602</Col><Col id=\"clsfNm\">종류</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_SEL_ARRAY</Col><Col id=\"clsfDataSet\">dsRecovrSpecsTpcd</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_kind_cd in (&apos;$value1$&apos;)</Col></Row><Row><Col id=\"clsfId\">E0603</Col><Col id=\"clsfNm\">기타복구종명</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_TEXT</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_etc_kind_nm like &apos;%$value1$%&apos;</Col></Row><Row><Col id=\"clsfId\">E0604</Col><Col id=\"clsfNm\">면적</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_area</Col></Row><Row><Col id=\"clsfId\">E0605</Col><Col id=\"clsfNm\">노동력</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_lbper</Col></Row><Row><Col id=\"clsfId\">E0606</Col><Col id=\"clsfNm\">지출금액</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">biz_amt</Col></Row><Row><Col id=\"clsfId\">E0607</Col><Col id=\"clsfNm\">지출일</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">expnd_day</Col></Row><Row><Col id=\"clsfId\">E0608</Col><Col id=\"clsfNm\">수입금액</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_RANGE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_amt</Col></Row><Row><Col id=\"clsfId\">E0609</Col><Col id=\"clsfNm\">수입일</Col><Col id=\"upClsfId\">E06</Col><Col id=\"clsfKind\">BIZ_RANGE_DATE</Col><Col id=\"lev\">2</Col><Col id=\"clsfQuery\">incm_day</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupList", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"searchCn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSpwodKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnfrsSkillCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">생활환경보전림</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">자연환경보전림</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">수원함양림</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"data\">산지재해방지림</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"data\">산림휴양림</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"data\">목재생산림</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrbrnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdntCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScstxCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSldptTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHgdgrTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMnfrsExmnGgrphCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrorCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtpTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrdnsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPstonCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAreaTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">합계</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">입목지</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">미립목지</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"data\">제지</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSttyApwodCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAlttdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"data\">최고</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">최저</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsKoftrCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDataTypeTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUrgntCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsSpecsTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAffrsRsnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrestGrdnnSpecsTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSctslTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFellyMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrdctnMthdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcltKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEarnSpecsClsfCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecovrSpecsTpcd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQuerySet", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">합집합</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">교집합</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"gubun\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"upId\" type=\"STRING\" size=\"256\"/><Column id=\"searchCn\" type=\"STRING\" size=\"256\"/><Column id=\"searchQuery\" type=\"STRING\" size=\"256\"/><Column id=\"querySet\" type=\"STRING\" size=\"256\"/><Column id=\"clsfId\" type=\"STRING\" size=\"256\"/><Column id=\"groupDp\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("StaticDtlSttus","9","20","212","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdClsfA","20","StaticDtlSttus:20","24.42%","495",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsClsf");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"205\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:clsfNm\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchCndtn","grdClsfA:7.9879999999999995","68",null,"111","17",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("1px solid #52aaa4,0px none,1px solid #bdcac9");
            obj.set_cssclass("div_DA");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchCndtnArea","0","4","100.00%","100",null,null,null,null,null,null,this.divSearchCndtn.form);
            obj.set_taborder("0");
            obj.set_background("#fff");
            obj.set_text("분류를 선택해주세요.");
            this.divSearchCndtn.addChild(obj.name, obj);

            obj = new Static("StaticDtlSttus00","231","divSearchCndtn:30","271","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색조건 목록");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSearchList","241","StaticDtlSttus00:20","602","306",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSearchList");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("no");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"349\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"검색조건내용\"/><Cell col=\"2\" text=\"집합연산자\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:searchCn\" textAlign=\"left\" treelevel=\"bind:lev\" displaytype=\"treeitemcontrol\" edittype=\"tree\"/><Cell col=\"2\" combodataset=\"dsQuerySet\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"expr:gubun == &apos;G&apos; &amp;&amp; groupDp == &apos;Y&apos; ? &apos;combocontrol&apos; : &apos;none&apos;\" edittype=\"expr:gubun == &apos;G&apos; &amp;&amp; groupDp == &apos;Y&apos; ? &apos;combo&apos; : &apos;none&apos;\" text=\"bind:querySet\" accessibilityenable=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDtlSearch",null,"grdSearchList:20","11.76%","32","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("검색");
            obj.set_cssclass("btn_SA_search");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelRow","744","208","99","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Button("btnGroupAdd",null,"208","99","32","btnDelRow:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("그룹추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);

            obj = new Static("StaticDtlSttus01","231","20","271","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건 입력");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGroup","640","20","98","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsGroupList");
            obj.set_datacolumn("searchCn");
            obj.set_codecolumn("id");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCndtnAdd","744","18","99","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조건추가");
            obj.set_cssclass("btn_WF_module_line");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearchCndtn.form.divSearchCndtnArea
            obj = new Layout("default","",0,0,this.divSearchCndtn.form.divSearchCndtnArea.form,function(p){});
            this.divSearchCndtn.form.divSearchCndtnArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearchCndtn.form
            obj = new Layout("default","",0,0,this.divSearchCndtn.form,function(p){});
            this.divSearchCndtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",860,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearchCndtn.form.txtSpcfcFoprdNm","value","dsMnfrsExmn","spcfcFoprdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearchCndtn.form.chkSeedPckngPsbltyYn","value","dsMnfrsExmn","seedPckngPsbltyYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearchCndtn.form.cmbSdgthTpcd","value","dsMnfrsExmn","sdgthTpcd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearchCndtn.form.cmbSdgthKoftrCd","value","dsMnfrsExmn","sdgthKoftrCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearchCndtn.form.edtsdgthPsbltyQntt","value","dsMnfrsExmn","sdgthPsbltyQntt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearchCndtn.form.edtsdgthPsbltyQntt","accessibilityaction","dsMnfrsExmn","sdgthPssblQntt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("wplbkDtlSearchPopup.xfdl","lib::lib_nfm.xjs");
        this.registerScript("wplbkDtlSearchPopup.xfdl", function() {
        /**
        *  상세검색 팝업화면
        *  @MenuPath    경영계획 - 경영계획부 - 경영계획부 조회 - 상세검색 팝업화면
        *  @FileName 	wplbkDtlSearchPopup.xfdl
        *  @Creator 	hdh
        *  @CreateDate 	241014
        *  @Desction      경영계획수립
        ************************ 소스 수정 이력 **************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  241014               hdh                     최초생성
        *******************************************************************************
        */
        this.executeIncludeScript("lib::lib_nfm.xjs"); /*include "lib::lib_nfm.xjs"*/;

        const publicArgs = this.gfnGetMdiRootDiv() ? this.gfnGetMdiRootDiv().arguments.menuParam : this.getOwnerFrame();
        var groupCnt = 0;
        this.form_onload = function(obj,e) {
        	this.gfnFormOnLoad(obj,e); //필수함수

        	var codeArgs = [
        		['SPWOD_KIND_CD', 'ORBRN_CD', 'GRDNT_CD', 'SCSTX_CD', 'SLDPT_TPCD'
        		, 'HGDGR_TPCD', 'MNFRS_EXMN_GGRPH_CD', 'FROR_CD', 'FRTP_TPCD', 'CRDNS_CD', 'PSTON_CD'
        		, 'STTY_APWOD_CD', 'KOFTR_CD', 'BIZ_DATA_TYPE_TPCD', 'AFFRS_SPECS_TPCD'
        		, 'URGNT_CD', 'FELLY_MTHD_CD', 'AFFRS_RSN_CD', 'FREST_GRDNN_SPECS_TPCD'
        		, 'SCTSL_TPCD', 'PRDCTN_MTHD_CD', 'FCLT_KIND_CD', 'EARN_SPECS_CLSF_CD', 'RECOVR_SPECS_TPCD']
        	];

        	this.nfmCodeSet(codeArgs); //코드세팅
        };

        this.fnCallback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "codeSearch": //코드세팅
        			for(var i = 0 ; i < this.dsBizDataTypeTpcd.rowcount; i++){
        				if(this.dsBizDataTypeTpcd.getColumn(i, "code") == '02'){ //연간계획 삭제
        					this.dsBizDataTypeTpcd.deleteRow(i);
        				}
        			}
        			this.dsSearchList.copyData(this.opener.dsSearchList);
        			var grdRowCount = this.dsSearchList.getRowCount();
        			for(var i = 0; i < grdRowCount; i++) {
        				var gubun = this.dsSearchList.getColumn(i, 'gubun');
        				var id = this.dsSearchList.getColumn(i, 'id');
        				var searchCn = this.dsSearchList.getColumn(i, 'searchCn');
        				if(gubun == 'G') {
        					var groupRow = this.dsGroupList.addRow();
        					this.dsGroupList.setColumn(groupRow, 'id', id);
        					this.dsGroupList.setColumn(groupRow, 'searchCn', searchCn);

        					groupCnt = id*1;
        				}
        			}

        			if(grdRowCount == 0) {
        				this.btnGroupAdd_onclick();
        			}

        			this.cboGroup.set_index(0);

        			this.fnDivSearch_Draw();
        			break;
        	}
        }

        this.grdClsf_oncellposchanged = function(obj,e) {
        	this.fnDivSearch_Draw();
        };

        this.fnDivSearch_Draw = function() {
        	this.divSearchCndtn.form.divSearchCndtnArea.set_url('');
        	var clsKind = this.dsClsf.getColumn(this.dsClsf.rowposition, 'clsfKind');

        	if(typeof clsKind !== 'undefined') {
        		this.divSearchCndtn.form.divSearchCndtnArea.set_url("business::mngmtPlan/wplbk/clsfType/"+clsKind+".xfdl");
        	}
        }

        this.fnDivSearch_onloadCode = function(type) {
        	var clsDataSet = this.dsClsf.getColumn(this.dsClsf.rowposition, 'clsfDataSet');

        	if(type == 'SEL_RANGE') {
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.cmbCode.set_innerdataset(this[clsDataSet]);
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.cmbCode.set_datacolumn('data');
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.cmbCode.set_codecolumn('code');

        		this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.cmbCode.set_index(0);
        	}
        	if(type == 'SEL_ARRAY') {
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divSelArray.form.mcb.set_innerdataset(this[clsDataSet]);
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divSelArray.form.mcb.set_datacolumn('data');
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divSelArray.form.mcb.set_codecolumn('code');
        	}
        	if(type == 'BIZ_SEL_ARRAY') {
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divBizSelArray.form.mcb.set_innerdataset(this[clsDataSet]);
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divBizSelArray.form.mcb.set_datacolumn('data');
        		this.divSearchCndtn.form.divSearchCndtnArea.form.divBizSelArray.form.mcb.set_codecolumn('code');
        	}
        }

        this.btnGroupAdd_onclick = function(obj,e) {
        	var row = this.dsSearchList.addRow();
        	this.dsSearchList.setColumn(row, 'id', groupCnt+1);
        	this.dsSearchList.setColumn(row, 'searchCn', '그룹'+(groupCnt+1));
        	this.dsSearchList.setColumn(row, 'gubun', 'G');
        	this.dsSearchList.setColumn(row, 'querySet', '01');
        	this.dsSearchList.setColumn(row, 'lev', 0);
        	this.dsSearchList.setColumn(row, 'groupDp', 'Y');


        	var groupRow = this.dsGroupList.addRow();
        	this.dsGroupList.setColumn(groupRow, 'id', groupCnt+1);
        	this.dsGroupList.setColumn(groupRow, 'searchCn', '그룹'+(groupCnt+1));

        	this.cboGroup.set_index(0);

        	groupCnt++;

        	var grdRowCount = this.dsSearchList.getRowCount();

        	var tempGroupCnt = 0;
        	for(var i = 0; i < grdRowCount; i++) {
        		var gubun = this.dsSearchList.getColumn(i, 'gubun');
        		if(gubun == 'G') {
        			tempGroupCnt++;
        		}
        	}

        	if(tempGroupCnt == 1) {//그룹이 하나일때
        		for(var i = 0; i < grdRowCount; i++) {
        			var gubun = this.dsSearchList.getColumn(i, 'gubun');
        			if(gubun == 'G') {
        				this.dsSearchList.setColumn(i, 'groupDp', 'N')
        			}
        		}
        	} else if(tempGroupCnt > 1) {//그룹이 여러개일때
        		//마지막그룹은 N처리
        		var v_tempGroupCnt = 0;
        		for(var i = 0; i < grdRowCount; i++) {
        			var gubun = this.dsSearchList.getColumn(i, 'gubun');
        			if(gubun == 'G') {
        				v_tempGroupCnt++;
        				if(tempGroupCnt == v_tempGroupCnt) {
        					this.dsSearchList.setColumn(i, 'groupDp', 'N');
        				} else {
        					this.dsSearchList.setColumn(i, 'groupDp', 'Y');
        				}
        			}
        		}
        	}
        };

        this.btnDelRow_onclick = function(obj,e) {
        	//체크대상 row를 배열로 저장
        	var delRows = [];
        	var grdRowCount = this.dsSearchList.getRowCount();
        	for(var i = 0; i < grdRowCount; i++) {
        		var chk = this.dsSearchList.getColumn(i, 'chk');
        		if(chk == 1) {
        			delRows.push(i);

        			var gubun = this.dsSearchList.getColumn(i, 'gubun');
        			var id = this.dsSearchList.getColumn(i, 'id');
        			if(gubun == 'G') {
        				var row = this.dsGroupList.findRow('id', id);
        				this.dsGroupList.deleteRow(row);

        				this.cboGroup.set_index(0);
        			}
        		}
        	}

        	//역순으로 삭제
        	var reserseDelRows = delRows.reverse();
        	for(var i = 0; i < reserseDelRows.length; i++) {
        		this.dsSearchList.deleteRow(reserseDelRows[i]);
        	}

        	var grdRowCount = this.dsSearchList.getRowCount();

        	var tempGroupCnt = 0;
        	for(var i = 0; i < grdRowCount; i++) {
        		var gubun = this.dsSearchList.getColumn(i, 'gubun');
        		if(gubun == 'G') {
        			tempGroupCnt++;
        		}
        	}

        	if(tempGroupCnt == 1) {//그룹이 하나일때
        		for(var i = 0; i < grdRowCount; i++) {
        			var gubun = this.dsSearchList.getColumn(i, 'gubun');
        			if(gubun == 'G') {
        				this.dsSearchList.setColumn(i, 'groupDp', 'N')
        			}
        		}
        	} else if(tempGroupCnt > 1) {//그룹이 여러개일때
        		//마지막그룹은 N처리
        		var v_tempGroupCnt = 0;
        		for(var i = 0; i < grdRowCount; i++) {
        			var gubun = this.dsSearchList.getColumn(i, 'gubun');
        			if(gubun == 'G') {
        				v_tempGroupCnt++;
        				if(tempGroupCnt == v_tempGroupCnt) {
        					this.dsSearchList.setColumn(i, 'groupDp', 'N');
        				} else {
        					this.dsSearchList.setColumn(i, 'groupDp', 'Y');
        				}
        			}
        		}
        	}
        };

        this.divSearchCndtn_btnCndtnAdd_onclick = function(obj,e) {
        	var groupId = this.cboGroup.value;
        	if(this.gfnIsEmpty(groupId)) {
        		this.gfnAlert("조건추가할 그룹을 선택해주세요.");
        		return false;
        	}

        	var clsfKind = this.dsClsf.getColumn(this.dsClsf.rowposition, 'clsfKind');
        	var clsfNm = this.dsClsf.getColumn(this.dsClsf.rowposition, 'clsfNm');
        	var clsfId = this.dsClsf.getColumn(this.dsClsf.rowposition, 'clsfId');
        	var upClsfId = this.dsClsf.getColumn(this.dsClsf.rowposition, 'upClsfId');
        	var clsfQuery = this.dsClsf.getColumn(this.dsClsf.rowposition, 'clsfQuery');

        	if(this.gfnIsEmpty(clsfKind)) {
        		this.gfnAlert("최하위의 분류를 선택해주세요.");
        		return false;
        	}

        	var searchObj = {
        		chk : 0
        		, lev : 1
        		, gubun : 'S' //G:그룹 S:검색
        		, id : clsfId
        		, upId : groupId
        		, searchCn : ''
        		, searchQuery : ''
        		, clsfId : this.dsClsf.getColumn(this.dsClsf.rowposition, 'clsfId')
        	}

        	//검색조건 항목 뽑기

        	//공통
        	var selValue = '';
        	var selText = '';
        	var value1;
        	var value2;
        	var valueText1 = '';
        	var valueText2 = '';

        	if(clsfKind == 'TEXT') {
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.edtText.value;
        	} else if(clsfKind == 'RANGE') {
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divRange.form.edtText1.value;
        		value2 = this.divSearchCndtn.form.divSearchCndtnArea.form.divRange.form.edtText2.value;
        	} else if(clsfKind == 'SEL_RANGE') {
        		selValue = this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.cmbCode.value;
        		selText = this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.cmbCode.text;
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.edtText1.value;
        		value2 = this.divSearchCndtn.form.divSearchCndtnArea.form.divSelRange.form.edtText2.value;
        	} else if(clsfKind == 'SEL_ARRAY') {
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divSelArray.form.mcb.value;
        		valueText1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divSelArray.form.mcb.text;
        	} else if(clsfKind == 'BIZ_TEXT') {
        		selValue = this.divSearchCndtn.form.divSearchCndtnArea.form.cboBizDataTypeTpcd.value;
        		selText = this.divSearchCndtn.form.divSearchCndtnArea.form.cboBizDataTypeTpcd.text;
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.edtText.value;
        	} else if(clsfKind == 'BIZ_RANGE') {
        		selValue = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRange.form.cboBizDataTypeTpcd.value;
        		selText = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRange.form.cboBizDataTypeTpcd.text;
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRange.form.edtText1.value;
        		value2 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRange.form.edtText2.value;
        	} else if(clsfKind == 'BIZ_RANGE_YR') {
        		selValue = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeYr.form.cboBizDataTypeTpcd.value;
        		selText = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeYr.form.cboBizDataTypeTpcd.text;
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeYr.form.edtText1.value;
        		value2 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeYr.form.edtText2.value;
        	}else if(clsfKind == 'BIZ_RANGE_DATE') {
        		selValue = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeDate.form.cboBizDataTypeTpcd.value;
        		selText = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeDate.form.cboBizDataTypeTpcd.text;
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeDate.form.edtDate1.form.getDate();
        		value2 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizRangeDate.form.edtDate2.form.getDate();
        	} else if(clsfKind == 'BIZ_SEL_ARRAY') {
        		selValue = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizSelArray.form.cboBizDataTypeTpcd.value;
        		selText = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizSelArray.form.cboBizDataTypeTpcd.text;
        		value1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizSelArray.form.mcb.value;
        		valueText1 = this.divSearchCndtn.form.divSearchCndtnArea.form.divBizSelArray.form.mcb.text;
        	}

        	//검색조건 내용 만들기
        	var searchCn = '';

        	if(clsfKind != 'ADDR' && clsfKind != 'INST') {
        		if(this.gfnIsEmpty(value1) && this.gfnIsEmpty(value2)) {
        			this.gfnAlert("검색어를 입력해주세요.");
        			return false;
        		} else {
        			if(!this.gfnIsEmpty(selText)) {
        				searchCn = '('+selText+') ';
        			}

        			if(clsfKind.indexOf('RANGE') > -1) {
        				if(this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)) {
        					searchCn += clsfNm+' '+value2+' 이하';
        				} else if(this.gfnIsEmpty(value2) && !this.gfnIsEmpty(value1)) {
        					searchCn += clsfNm+' '+value1+' 이상';
        				} else if(!this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)){
        					searchCn += clsfNm+' BETWEEN '+value1+' AND '+value2;
        				}
        			} else if(clsfKind.indexOf('TEXT') > -1) {
        				searchCn += clsfNm+' LIKE %'+value1+'%';
        			} else if(clsfKind.indexOf('ARRAY') > -1) {
        				searchCn += clsfNm+' IN ('+valueText1+')';
        			}
        		}
        	} else if(clsfKind == 'ADDR') {
        		var sido = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbSido.value;
        		var sigungu = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbSigungu.value;
        		var emd = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbEmd.value;
        		var ri = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbRi.value;
        		var isSan = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.chkMtn.value;
        		var bonbun = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.edtBonbun.value;
        		var bubun = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.edtBubun.value;

        		searchCn = clsfNm+' [';
        		if(!this.gfnIsEmpty(sido)) {
        			searchCn += this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbSido.text;
        		} else {
        			this.gfnAlert("검색어를 입력해주세요.");
        			return false;
        		}
        		if(!this.gfnIsEmpty(sigungu)) {
        			searchCn += ' '+this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbSigungu.text;
        		}
        		if(!this.gfnIsEmpty(emd)) {
        			searchCn += ' '+this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbEmd.text;
        		}
        		if(!this.gfnIsEmpty(ri)) {
        			searchCn += ' '+this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbRi.text;
        		}
        		if(isSan) {
        			searchCn += ' 산';
        			if(this.gfnIsEmpty(bonbun)) {
        				this.gfnAlert("지번을 입력해주세요.");
        				return false;
        			}
        		}
        		if(!this.gfnIsEmpty(bonbun)) {
        			searchCn += this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.edtBonbun.value;
        			if(!this.gfnIsEmpty(bubun)) {
        				searchCn += '-'+this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.edtBubun.value;
        			}
        		}

        		searchCn += ']';
        	} else if(clsfKind == 'INST') {
        		var upInstId = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbUpInstId.value;
        		var instId = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbInstId.value;
        		var wplarId = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbWplarId.value;
        		var nxtrmNo = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbNxtrmNo.value;
        		var isNowNxtrm = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.chkNowNxtrm.value;

        		searchCn = clsfNm+' [';
        		if(!this.gfnIsEmpty(upInstId)) {
        			searchCn += this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbUpInstId.text;
        		} else {
        			this.gfnAlert("검색어를 입력해주세요.");
        			return false;
        		}
        		if(!this.gfnIsEmpty(instId)) {
        			searchCn += '-'+this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbInstId.text;
        		}
        		if(!this.gfnIsEmpty(wplarId)) {
        			searchCn += '-'+this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbWplarId.text;
        		}
        		if(!this.gfnIsEmpty(nxtrmNo) && !isNowNxtrm) {
        			searchCn += '-'+this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbNxtrmNo.text+'차기';
        		}
        		if(isNowNxtrm) {
        			searchCn += '-(현차기)';
        		}

        		searchCn += ']';
        	}

        	searchObj['searchCn'] = 'AND '+ searchCn;


        	//검색조건 쿼리만들기
        	var searchQuery = 'AND (';

        	if(clsfKind == 'TEXT' || clsfKind == 'BIZ_TEXT') {
        		searchQuery += clsfQuery.replace('$value1$', value1);
        	} else if(clsfKind == 'RANGE' || clsfKind == 'BIZ_RANGE' || clsfKind == 'BIZ_RANGE_DATE') {
        		searchQuery += clsfQuery;
        		if(this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)) {
        			searchQuery += '<='+value2
        		} else if(this.gfnIsEmpty(value2) && !this.gfnIsEmpty(value1)) {
        			searchQuery += '>='+value1
        		} else if(!this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)){
        			searchQuery += ' between '+value1+' and '+value2;
        		}
        	} else if(clsfKind == 'BIZ_RANGE_YR') { //연도
        		searchQuery += clsfQuery;
        		if(this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)) {
        			searchQuery += '<='+value2
        		} else if(this.gfnIsEmpty(value2) && !this.gfnIsEmpty(value1)) {
        			searchQuery += '>='+value1
        		} else if(!this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)){
        			searchQuery += " between '"+value1+"' and '"+value2+"' ";
        		}
        	}else if(clsfKind == 'SEL_RANGE') {
        		//A04, A08, B03 예외
        		if(clsfId == 'A04') {//면적
        			if(selValue == '01') {//합계
        				clsfQuery = 'tot_area';
        			} else if(selValue == '02') {//입목지
        				clsfQuery = 'stlnd_area';
        			} else if(selValue == '03') {//미립목지
        				clsfQuery = 'blank_area';
        			} else if(selValue == '04') {//제지
        				clsfQuery = 'nfrtld_area';
        			}

        			searchQuery += clsfQuery;
        			if(this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)) {
        				searchQuery += '<='+value2
        			} else if(this.gfnIsEmpty(value2) && !this.gfnIsEmpty(value1)) {
        				searchQuery += '>='+value1
        			} else if(!this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)){
        				searchQuery += ' between '+value1+' and '+value2;
        			}
        		} else if(clsfId == 'A08') {//법정지정림
        			clsfQuery = 'stty_apwod_area';
        			searchQuery += "stty_apwod_cd='"+selValue+"' AND ";
        			searchQuery += clsfQuery;
        			if(this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)) {
        				searchQuery += '<='+value2
        			} else if(this.gfnIsEmpty(value2) && !this.gfnIsEmpty(value1)) {
        				searchQuery += '>='+value1
        			} else if(!this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)){
        				searchQuery += ' between '+value1+' and '+value2;
        			}
        		} else if(clsfId == 'B03') {//표고
        			if(selValue == '01') {//최고
        				clsfQuery = 'alttd_mxmm_vl';
        			} else if(selValue == '02') {//최저
        				clsfQuery = 'alttd_mnmm_vl';
        			}
        			searchQuery += clsfQuery;
        			if(this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)) {
        				searchQuery += '<='+value2
        			} else if(this.gfnIsEmpty(value2) && !this.gfnIsEmpty(value1)) {
        				searchQuery += '>='+value1
        			} else if(!this.gfnIsEmpty(value1) && !this.gfnIsEmpty(value2)){
        				searchQuery += ' between '+value1+' and '+value2;
        			}
        		}
        	} else if(clsfKind == 'SEL_ARRAY' || clsfKind == 'BIZ_SEL_ARRAY') {
        		//A05, A06 예외
        		if(clsfId == 'A05' || clsfId == 'A06') {//주기능/보조기능
        			var value1s = value1.split(',');

        			for(var i = 0; i < value1s.length; i++){
        				if(value1s[i].indexOf('01') > -1) {
        					clsfQuery = 'lfenv_frsrsr_skill_tpcd';
        				} else if(value1s[i].indexOf('02') > -1) {
        					clsfQuery = 'ntr_envrn_frsrsr_skill_tpcd';
        				} else if(value1s[i].indexOf('03') > -1) {
        					clsfQuery = 'crpar_skill_tpcd';
        				} else if(value1s[i].indexOf('04') > -1) {
        					clsfQuery = 'dprrs_skill_tpcd';
        				} else if(value1s[i].indexOf('05') > -1) {
        					clsfQuery = 'mnfrs_rcrfr_skill_tpcd';
        				} else if(value1s[i].indexOf('06') > -1) {
        					clsfQuery = 'tmbr_pdfrt_skill_tpcd';
        				}

        				if(i>0) {
        					searchQuery += ' or '
        				}

        				if(clsfId == 'A05') {
        					searchQuery += clsfQuery+"='P'"
        				} else if(clsfId == 'A06') {
        					searchQuery += clsfQuery+"='Y'"
        				}
        			}
        		} else if(clsfId.startsWith('E')){ //BIZ_SEL_ARRAY이면서 사업에 속할때
        			value1 = value1.replaceAll(",", "','");
        			searchQuery += clsfQuery.replace('$value1$', value1);
        		}else {
        			value1 = value1.replaceAll(",", "','");
        			value1 = "'"+value1+"'";
        			searchQuery += clsfQuery.replace('$value1$', value1);
        		}
        	} else if(clsfKind == 'INST'){
        		var upInstId = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbUpInstId.value;
        		var instId = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbInstId.value;
        		var wplarId = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbWplarId.value;
        		var nxtrmNo = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.cmbNxtrmNo.value;
        		var isNowNxtrm = this.divSearchCndtn.form.divSearchCndtnArea.form.divInst.form.chkNowNxtrm.value;

        		if(!this.gfnIsEmpty(upInstId)) {
        			searchQuery += "up_inst_id = '"+upInstId+"'";
        		}
        		if(!this.gfnIsEmpty(instId)) {
        			searchQuery += " AND inst_id = '"+instId+"'";
        		}
        		if(!this.gfnIsEmpty(wplarId)) {
        			searchQuery += " AND wplar_id = '"+wplarId+"'";
        		}
        		if(!this.gfnIsEmpty(nxtrmNo) && !isNowNxtrm) {
        			searchQuery += " AND nxtrm_no = "+nxtrmNo;
        		}
        		if(isNowNxtrm) {
        			searchQuery += " AND TO_CHAR (NOW(), 'YYYYMMDD') BETWEEN PLAN_BGDT AND PLAN_EDDT";
        		}
        	} else if(clsfKind == 'ADDR'){
        		var sido = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbSido.value;
        		var sigungu = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbSigungu.value;
        		var emd = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbEmd.value;
        		var ri = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.cmbRi.value;
        		var isSan = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.chkMtn.value;
        		var bonbun = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.edtBonbun.value;
        		var bubun = this.divSearchCndtn.form.divSearchCndtnArea.form.divAddr.form.edtBubun.value;

        		if(!this.gfnIsEmpty(sido)) {
        			searchQuery += "SUBSTR(PNU_CD, 1, 2) ='"+sido+"'";
        		}
        		if(!this.gfnIsEmpty(sigungu)) {
        			searchQuery += " AND SUBSTR(PNU_CD, 1, 5) ='"+sigungu+"'";
        		}
        		if(!this.gfnIsEmpty(emd)) {
        			searchQuery += " AND SUBSTR(PNU_CD, 1, 8) ='"+emd+"'";
        		}
        		if(!this.gfnIsEmpty(ri)) {
        			searchQuery += " AND SUBSTR(PNU_CD, 1, 10) ='"+ri+"'";
        		}

        		if(!this.gfnIsEmpty(bonbun)) {
        			if(isSan) {
        				searchQuery += "AND SUBSTR(PNU_CD, 11, 1) = '2'";
        			} else {
        				searchQuery += "AND SUBSTR(PNU_CD, 11, 1) <> '2'";
        			}
        			searchQuery += " AND SUBSTR(PNU_CD, 12, 4) = LPAD('"+bonbun+"', 4, '0')";
        			if(!this.gfnIsEmpty(bubun)) {
        					searchQuery += " AND SUBSTR(PNU_CD, 16, 4) = LPAD('"+bubun+"', 4, '0')";
        			}
        		}
        	}

        	if(upClsfId == 'E01') {//BIZ = wplbk_biz_tpcd 01:조림 02:숲가꾸기 03:목재수확(임목생산) 04:시설 05:소득 06:복구
        		searchQuery += " AND wplbk_biz_tpcd='01' AND biz_data_type_tpcd='"+selValue+"'";
        	} else if(upClsfId == 'E02') {
        		searchQuery += " AND wplbk_biz_tpcd='02' AND biz_data_type_tpcd='"+selValue+"'";
        	} else if(upClsfId == 'E03') {
        		searchQuery += " AND wplbk_biz_tpcd='03' AND biz_data_type_tpcd='"+selValue+"'";
        	} else if(upClsfId == 'E04') {
        		searchQuery += " AND wplbk_biz_tpcd='04' AND biz_data_type_tpcd='"+selValue+"'";
        	} else if(upClsfId == 'E05') {
        		searchQuery += " AND wplbk_biz_tpcd='05' AND biz_data_type_tpcd='"+selValue+"'";
        	} else if(upClsfId == 'E06') {
        		searchQuery += " AND wplbk_biz_tpcd='06' AND biz_data_type_tpcd='"+selValue+"'";
        	}

        	searchQuery += ')';

        	searchObj['searchQuery'] = searchQuery;

        	var caseCount = this.dsSearchList.getCaseCount('id == "'+searchObj['upId']+'" || upId == "'+searchObj['upId']+'"'); //해당그룹소속의 조건 수
        	var findRow = this.dsSearchList.findRowExpr('id == "'+searchObj['upId']+'" && gubun == "G"'); //선택한 그룹위치

        	var row = caseCount+findRow;
        	this.dsSearchList.insertRow(row);
        	this.dsSearchList.setColumn(row, 'chk', searchObj['chk']);
        	this.dsSearchList.setColumn(row, 'lev', searchObj['lev']);
        	this.dsSearchList.setColumn(row, 'gubun', searchObj['gubun']);
        	this.dsSearchList.setColumn(row, 'id', searchObj['id']);
        	this.dsSearchList.setColumn(row, 'upId', searchObj['upId']);
        	this.dsSearchList.setColumn(row, 'searchCn', searchObj['searchCn']);
        	this.dsSearchList.setColumn(row, 'searchQuery', searchObj['searchQuery']);
        	this.dsSearchList.setColumn(row, 'clsfId', searchObj['clsfId']);
        };

        this.grdSearchList_oncellclick = function(obj,e) {
        	if(e.cell == 0) {
        		var id = this.dsSearchList.getColumn(e.row, 'id');
        		var gubun = this.dsSearchList.getColumn(e.row, 'gubun');
        		var chk = this.dsSearchList.getColumn(e.row, 'chk');
        		if(gubun == 'G') {
        			if(chk == 0) {//그룹체크해제
        				for(var i = 0; i < this.dsSearchList.getRowCount(); i++){
        					var upId = this.dsSearchList.getColumn(i, 'upId');
        					if(upId == id) {
        						this.dsSearchList.setColumn(i, 'chk', 0);
        					}
        				}
        			} else {//그룹체크
        				for(var i = 0; i < this.dsSearchList.getRowCount(); i++){
        					var upId = this.dsSearchList.getColumn(i, 'upId');
        					if(upId == id) {
        						this.dsSearchList.setColumn(i, 'chk', 1);
        					}
        				}
        			}
        		}
        	}
        };

        this.btnDtlSearch_onclick = function(obj,e) {
        	var rowCount = this.dsSearchList.getRowCount();

        	if(rowCount == 0) {
        		this.gfnAlert("검색할 조건이 없습니다.");
        		return false;
        	}

        	var lastGroupRow = -1; //마지막그룹
        	for(var i = 0; i < rowCount; i++) {
        		var gubun = this.dsSearchList.getColumn(i, 'gubun');
        		var id = this.dsSearchList.getColumn(i, 'id');
        		if(gubun == 'G') {
        			var caseCount = this.dsSearchList.getCaseCount('upId == "'+id+'"'); //해당그룹소속의 조건 수
        			if(caseCount == 0) {
        				this.gfnAlert("조건이 없는 그룹이 있습니다.");
        				return false;
        			}

        			lastGroupRow = i;
        		}
        	}

        	if(lastGroupRow > 0) {
        		//this.dsSearchList.setColumn(lastGroupRow, 'querySet', '');//마지막 그룹의 집합연산자 삭제 쿼리 <trim> 으로 해결
        	}
        	this.opener.dsSearchList.copyData(this.dsSearchList);
        	this.gfnClosePopup(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdClsfA.addEventHandler("oncellposchanged",this.grdClsf_oncellposchanged,this);
            this.grdSearchList.addEventHandler("oncellclick",this.grdSearchList_oncellclick,this);
            this.btnDtlSearch.addEventHandler("onclick",this.btnDtlSearch_onclick,this);
            this.btnDelRow.addEventHandler("onclick",this.btnDelRow_onclick,this);
            this.btnGroupAdd.addEventHandler("onclick",this.btnGroupAdd_onclick,this);
            this.btnCndtnAdd.addEventHandler("onclick",this.divSearchCndtn_btnCndtnAdd_onclick,this);
        };
        this.loadIncludeScript("wplbkDtlSearchPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
