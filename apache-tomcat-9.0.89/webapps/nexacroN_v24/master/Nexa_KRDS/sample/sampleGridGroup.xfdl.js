(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGridGroup");
            this.set_titletext("그리드 grouping/suppress");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,4930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSample", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "FLOAT","size" : "256"},{"id" : "chk","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "color","Column1" : "warm","Column2" : "red","Column3" : "1","chk" : "1","Column4" : "aaa","Column5" : "bbb","Column6" : "ccc"},{"Column0" : "color","Column1" : "warm","Column2" : "yellow","Column3" : "1200","Column4" : "ddd","Column5" : "eee","Column6" : "fff","chk" : "1"},{"Column0" : "color","Column1" : "cool","Column2" : "blue","Column3" : "3","chk" : "0"},{"Column0" : "color","Column1" : "cool","Column2" : "navy","Column3" : "4","chk" : "0"},{"Column0" : "fruits","Column1" : "acid","Column2" : "lemon","Column3" : "5","chk" : "1"},{"Column0" : "fruits","Column1" : "acid","Column2" : "orange","Column3" : "1600","chk" : "1"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "test","Column3" : "7","chk" : "0"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "strawberry","Column3" : "8","chk" : "0"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "banana","Column3" : "9","chk" : "0"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample00", this);
            obj.set_keystring("Column0");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "row","type" : "FLOAT","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "BIGDECIMAL","size" : "256"}]},"Rows" : [{"Column0" : "color","Column1" : "warm","Column2" : "red","Column3" : "1200","row" : "1"},{"Column0" : "color","Column1" : "warm","Column2" : "yellow","Column3" : "1","row" : "2"},{"Column0" : "color","Column1" : "cool","Column2" : "blue","Column3" : "2","row" : "3"},{"Column0" : "color","Column1" : "cool","Column2" : "navy","Column3" : "3","row" : "4"},{"Column0" : "fruits","Column1" : "acid","Column2" : "lemon","Column3" : "5","row" : "5"},{"Column0" : "fruits","Column1" : "acid","Column2" : "orange","Column3" : "1600","row" : "6"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "test","Column3" : "7","row" : "7"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "strawberry","Column3" : "8","row" : "8"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "banana","Column3" : "9","row" : "9"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSize", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "INT","size" : "256"}]},"Rows" : [{"Column0" : "가","Column1" : "band 속성값이 \"body\"인 Row 의 높이가 자동조절됩니다.","Column2" : "red","Column3" : "1"},{"Column0" : "가나","Column1" : "band 속성값이 \"body\"인 Row 의 높이가 자동조절됩니다.\nRow 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.","Column2" : "yellow","Column3" : "2"},{"Column0" : "가나다","Column1" : "band 속성값이 \"body\"인 Row 의 높이가 자동조절됩니다.\nRow 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.\nband 속성값이 \"head\", \"summary\" 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.","Column2" : "blue","Column3" : "3"},{"Column0" : "가나다라","Column1" : "band 속성값이 \"body\"인 Row 의 높이가 자동조절됩니다.\nRow 중 가장 높이가 큰 Row에 맞게 모든 Row의 높이가 설정됩니다.\nband 속성값이 \"head\", \"summary\" 인 Row 의 높이는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.\n\nband 속성값이 \"body\"인 Column 의 너비가 자동조절됩니다.\n각 Column 별로 가장 너비가 큰 Cell 에 맞게 Column의 너비가 따로 설정됩니다.\nband 속성값이 \"left\", \"right\" 인 Column 의 너비는 자동조절하지 않고, 디자인 시 설정한 크기로 유지합니다.","Column2" : "navy","Column3" : "4"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample01", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "BIGDECIMAL","size" : "256"}]},"Rows" : [{"Column0" : "color","Column1" : "warm","Column2" : "red","Column3" : "1"},{"Column0" : "color","Column1" : "warm","Column2" : "yellow","Column3" : "1200"},{"Column0" : "color","Column1" : "cool","Column2" : "blue","Column3" : "3"},{"Column0" : "color","Column1" : "cool","Column2" : "navy","Column3" : "4"},{"Column2" : "소계","Column3" : "1208","Column0" : "color"},{"Column0" : "fruits","Column1" : "acid","Column2" : "lemon","Column3" : "5"},{"Column0" : "fruits","Column1" : "acid","Column2" : "orange","Column3" : "1600"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "test","Column3" : "7"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "strawberry","Column3" : "8"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "banana","Column3" : "9"},{"Column2" : "소계","Column3" : "1629","Column0" : "fruits"},{"Column2" : "합계","Column3" : "2837","Column0" : "항목"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample02", this);
            obj.set_keystring("G:Column0");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "row","type" : "FLOAT","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "BIGDECIMAL","size" : "256","prop" : "AVG"}]},"Rows" : [{"Column0" : "color","Column1" : "warm","Column2" : "red","Column3" : "1","row" : "1"},{"Column0" : "color","Column1" : "warm","Column2" : "yellow","Column3" : "1200","row" : "2"},{"Column0" : "color","Column1" : "cool","Column2" : "blue","Column3" : "3","row" : "3"},{"Column0" : "color","Column1" : "cool","Column2" : "navy","Column3" : "4","row" : "4"},{"Column0" : "fruits","Column1" : "acid","Column2" : "lemon","Column3" : "5","row" : "5"},{"Column0" : "fruits","Column1" : "acid","Column2" : "orange","Column3" : "1600","row" : "6"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "test","Column3" : "7","row" : "7"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "strawberry","Column3" : "8","row" : "8"},{"Column0" : "fruits","Column1" : "sweet","Column2" : "banana","Column3" : "9","row" : "9"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample03", this);
            obj.set_keystring("G:Column0-Column1,Column2-Column3");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column9","type" : "BIGDECIMAL","size" : "256","prop" : "SUM"}]},"Rows" : [{"Column0" : "2","Column1" : "코드2","Column9" : "3","Column2" : "1","Column3" : "코드명1"},{"Column0" : "2","Column1" : "코드2","Column9" : "4","Column2" : "2","Column3" : "코드명2"},{"Column0" : "1","Column1" : "명칭1","Column9" : "1","Column2" : "11","Column3" : "CCC"},{"Column0" : "1","Column1" : "명칭1","Column9" : "2","Column2" : "11","Column3" : "CCC"},{"Column0" : "1","Column1" : "명칭1","Column2" : "22","Column3" : "BBB","Column9" : "3"},{"Column0" : "1","Column1" : "명칭1","Column2" : "22","Column3" : "BBB","Column9" : "4"},{"Column0" : "3","Column1" : "구분3","Column9" : "5","Column2" : "3","Column3" : "구분명3"},{"Column0" : "3","Column1" : "구분3","Column2" : "4","Column3" : "구분명4","Column9" : "5"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSize2", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "INT","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "가","Column1" : "band 속성값이 \"body\"인 ","Column2" : "red","Column3" : "1","Column4" : "반갑습니다."},{"Column0" : "가나","Column1" : "band 속성값이 \"body\"인 Row 의 높이가 ","Column2" : "yellow","Column3" : "2","Column4" : "오랜만입니다."},{"Column0" : "가나다","Column1" : "band 속성값이 \"body\"인 Row 의 높이가 자동","Column2" : "blue","Column3" : "3","Column4" : "감사합니다."},{"Column0" : "가나다라","Column1" : "band 속성값이 \"body\"인 Row 의 높이가 자동 조절됩니다.","Column2" : "navy","Column3" : "4","Column4" : "즐거웠습니다."}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBgtEndwDetailList", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "pblntfDetlCd","type" : "STRING","size" : "256"},{"id" : "pblntfLevlOrdr","type" : "BIGDECIMAL","size" : "256"},{"id" : "divNm1","type" : "STRING","size" : "256"},{"id" : "divNm2","type" : "STRING","size" : "256"},{"id" : "divNm3","type" : "STRING","size" : "256"},{"id" : "divNm4","type" : "STRING","size" : "256"},{"id" : "bgnnAmt4","type" : "BIGDECIMAL","size" : "256"},{"id" : "lastAmt4","type" : "BIGDECIMAL","size" : "256"},{"id" : "bgnnAmt3","type" : "BIGDECIMAL","size" : "256"},{"id" : "lastAmt3","type" : "BIGDECIMAL","size" : "256"},{"id" : "bgnnAmt2","type" : "BIGDECIMAL","size" : "256"},{"id" : "lastAmt2","type" : "BIGDECIMAL","size" : "256"},{"id" : "bgnnAmt1","type" : "BIGDECIMAL","size" : "256"},{"id" : "lastAmt1","type" : "BIGDECIMAL","size" : "256"},{"id" : "bgnnAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "lastAmt","type" : "BIGDECIMAL","size" : "256"},{"id" : "updusrId","type" : "STRING","size" : "256"},{"id" : "accnutYr","type" : "STRING","size" : "256"},{"id" : "pblntfSeCd","type" : "STRING","size" : "256"},{"id" : "cddcSeCd","type" : "STRING","size" : "256"},{"id" : "pblntfCd","type" : "STRING","size" : "256"},{"id" : "chk","type" : "INT","size" : "1"}]},"Rows" : [{"pblntfDetlCd" : "R1001_PRIM020107_001","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "계","divNm4" : "계","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "254756407000","lastAmt1" : "10000000","bgnnAmt" : "210100000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_003","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "출연금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "4000","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_005","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "교특전입금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "99000000000","lastAmt1" : "5000000","bgnnAmt" : "10000000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_007","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "예수금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_009","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "예탁금원금회수예탁금원금회수","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_011","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "경상수입","divNm4" : "이자수입","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "2977509000","lastAmt1" : "2000000","bgnnAmt" : "100000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_013","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "경상수입","divNm4" : "기타수입","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_015","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "국고보조금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_017","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "지방보조금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_019","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "기부금및지원금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_021","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "기타이전수입","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_023","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "자본수입","divNm4" : "자본수입금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_025","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "융자회수","divNm4" : "융자금회수","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_027","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "차입금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_029","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "예치금회수","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "152778898000","lastAmt1" : "3000000","bgnnAmt" : "200000000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_031","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "전년도이월금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_059","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "순세계잉여금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_033","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "계","divNm4" : "계","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "254756407000","lastAmt1" : "11001000000","bgnnAmt" : "101010000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_035","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "내부거래","divNm4" : "교특회계전출금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_037","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "내부거래","divNm4" : "예탁금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_039","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "내부거래","divNm4" : "예수금원리금상환","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_041","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "인력운영비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_043","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "기본경비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "10000000","lastAmt1" : "1000000","bgnnAmt" : "10000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_045","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "비융자성사업비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "11729774000","lastAmt1" : "1000000000","bgnnAmt" : "1000000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_047","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "기타지출","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_049","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "자본지출","divNm4" : "비융자성사업비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_051","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "융자지출","divNm4" : "융자성사업비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_053","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "보전지출","divNm4" : "예치금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "243016633000","lastAmt1" : "10000000000","bgnnAmt" : "100000000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_055","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "보전지출","divNm4" : "차입원리금상환","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1001_PRIM020107_057","pblntfLevlOrdr" : "1","divNm1" : "통폐합학교지원기금","divNm2" : "지출","divNm3" : "보전지출","divNm4" : "다음연도이월액","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_001","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "계","divNm4" : "계","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "6346779000","lastAmt1" : "1502000000","bgnnAmt" : "4055000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_003","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "출연금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_005","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "교특전입금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_007","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "예수금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_009","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "내부거래","divNm4" : "예탁금원금회수","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_011","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "경상수입","divNm4" : "이자수입","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "50000000","lastAmt1" : "1500000","bgnnAmt" : "50000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_013","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "경상수입","divNm4" : "기타수입","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "5000000","lastAmt1" : "500000","bgnnAmt" : "5000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_015","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "국고보조금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_017","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "지방보조금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_019","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "기부금및지원금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_021","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "이전수입","divNm4" : "기타이전수입","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_023","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "자본수입","divNm4" : "자본수입금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_025","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "융자회수","divNm4" : "융자금회수","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "3000000000","lastAmt1" : "1000000000","bgnnAmt" : "3000000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_027","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "차입금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_029","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "예치금회수","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "3291779000","lastAmt1" : "500000000","bgnnAmt" : "1000000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_031","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "전년도이월금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_059","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "수입","divNm3" : "보전수입","divNm4" : "순세계잉여금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_033","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "계","divNm4" : "계","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "6346779000","lastAmt1" : "3000000","bgnnAmt" : "5300000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_035","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "내부거래","divNm4" : "교특회계전출금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_037","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "내부거래","divNm4" : "예탁금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_039","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "내부거래","divNm4" : "예수금원리금상환","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_041","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "인력운영비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_043","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "기본경비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_045","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "비융자성사업비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_047","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "경상지출","divNm4" : "기타지출","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_049","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "자본지출","divNm4" : "비융자성사업비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_051","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "융자지출","divNm4" : "융자성사업비","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "5300000000","lastAmt1" : "1000000","bgnnAmt" : "5000000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_053","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "보전지출","divNm4" : "예치금","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "1046779000","lastAmt1" : "2000000","bgnnAmt" : "300000000","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_055","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "보전지출","divNm4" : "차입원리금상환","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"},{"pblntfDetlCd" : "R1002_PRIM020107_057","pblntfLevlOrdr" : "1","divNm1" : "경상북도교육청공무원복지기금","divNm2" : "지출","divNm3" : "보전지출","divNm4" : "다음연도이월액","bgnnAmt4" : "0","lastAmt4" : "0","bgnnAmt3" : "0","lastAmt3" : "0","bgnnAmt2" : "0","lastAmt2" : "0","bgnnAmt1" : "0","lastAmt1" : "0","bgnnAmt" : "0","lastAmt" : "0","updusrId" : "zz","accnutYr" : "2018","pblntfSeCd" : "PRIM","cddcSeCd" : "R10","pblntfCd" : "PRIM020107","chk" : "0"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 그룹");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","149","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Suppress");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","100","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Suppress");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSuppress","0","staTitle00:16",null,"330","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"2\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","grdSuppress:40","330","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Suppress<fs v=\'15\'>(checkbox suppress)</fs>");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSuppress00","0","staTitle01:16",null,"380","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsSample");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"270\"/><Column size=\"200\"/><Column size=\"160\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"chk\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"chk\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" suppress=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" rowspan=\"3\" text=\"bind:Column1\" suppress=\"1\"/><Cell col=\"2\" expandshow=\"hide\" cssclass=\"cell_NoLineH\"/><Cell col=\"3\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:chk\"/><Cell row=\"1\" col=\"2\" expandshow=\"show\" text=\"bind:Column2\" displaytype=\"editcontrol\" edittype=\"text\" cssclass=\"cell_NoLineH\" expandsize=\"48\"/><Cell row=\"1\" col=\"3\" text=\"bind:Column5\" textAlign=\"left\"/><Cell row=\"1\" col=\"4\" text=\"bind:chk\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\" text=\"bind:Column6\" textAlign=\"left\"/><Cell row=\"2\" col=\"4\" text=\"bind:chk\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","grdSuppress00:40",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("평균 - Dataset의 prop 설정");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDatasetProp","0","staTitle02:16",null,"326","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsSample02");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"170\"/><Column size=\"160\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"37\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"rowLevel\"/></Band><Band id=\"body\"><Cell cssclass=\"cell_WF_Center\" expr=\"dataset.getRowLevel(currow) == 1 ? &quot;&quot; : row\" text=\"bind:row\"/><Cell col=\"1\" text=\"bind:Column0\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" suppress=\"1\" expr=\"dataset.getRowLevel(currow) == 0 ? Column0 : &apos;평균&apos;\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:Column2\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"mask\"/><Cell col=\"5\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow)\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getSum(&apos;Column3&apos;)\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staCount","0","grdDatasetProp:10",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("총 <fc v=\'#25649e\'>0</fc> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_Txt17B");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","staCount:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","447","362","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("평균, 갯수/소계/합계 계산식");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","640","421","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn03\"/><PanelItem id=\"PanelItem01\" componentid=\"btn02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn03",null,"421","100","48","148",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"421","100","48","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCal","0","Panel02:16",null,"326","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsSample00");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"37\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"rowLevel\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 0 ? Column0 : &apos;갯수/평균/소계&apos;\" suppress=\"1\" edittype=\"expr:dataset.getRowLevel(currow) == 0 ? &quot;normal&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 0 ? Column1 : dataset.getGroupRangeCount(currow)\" edittype=\"expr:dataset.getRowLevel(currow) == 0 ? &quot;normal&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 0 ? Column2 : comp.parent.gfnRound(Column3/dataset.getGroupRangeCount(currow),2)\" edittype=\"expr:dataset.getRowLevel(currow) == 0 ? &quot;normal&quot; : &quot;none&quot;\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"expr:dataset.getRowLevel(currow) == 0 ? &quot;normal&quot; : &quot;none&quot;\"/><Cell col=\"4\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow)\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getSum(&apos;Column3&apos;)\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","grdCal:40","220","38",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("소계, 합계 cell class");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCellClass","0","staTitle04:16",null,"326","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("dsSample01");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"210\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"expr:Column2 == &apos;소계&apos; ? &quot;cell_SubTotal&quot; : Column2 == &apos;합계&apos; ? &quot;cell_Total&quot; : &quot;&quot;\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"expr:Column2 == &apos;소계&apos; ? &quot;cell_SubTotal&quot; : Column2 == &apos;합계&apos; ? &quot;cell_Total&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"expr:Column2 == &apos;소계&apos; ? &quot;cell_SubTotal&quot; : Column2 == &apos;합계&apos; ? &quot;cell_Total&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:Column2 == &apos;소계&apos; ? &quot;cell_SubTotal&quot; : Column2 == &apos;합계&apos; ? &quot;cell_Total&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","grdCellClass:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle05\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSubRowHidden\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle05","427","1142","150","38",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("소계 숨기기");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSubRowHidden",null,null,"196","48","39","5972",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("소계 Row 표시안하기");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","0","Panel00:16",null,"326","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("dsSample00");
            obj.set_selecttype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"37\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"Column0\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"Column1\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"Column2\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"Column3\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\" textAlign=\"right\"/><Cell col=\"4\" displaytype=\"number\" expr=\"dataset.getSum(&apos;Column3&apos;)/100\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","Grid03:40",null,"86","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("명칭으로 Group 및 suppress 시 코드로 Sort 방법<fs v=\'15\'> ( keystring G:Column0-Column1,Column2-Column3 )</fs>");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            obj.set_usedecorate("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","staTitle06:16",null,"319","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsSample03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"대분류\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"중분류\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"값\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"대분류코드\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"중분류코드\" cssclass=\"cell_WF_Center\"/><Cell col=\"5\" text=\"rowLevel\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\" expr=\"dataset.getRowLevel(currow) == 2 ? &apos;대분류 소계&apos; : Column1\" suppress=\"1\" cssclass=\"expr:dataset.getRowLevel(currow) == 2 ? &quot;cell_SubTotal&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:Column3\" expr=\"dataset.getRowLevel(currow) == 1 ? &apos;중분류 소계&apos; : Column3\" suppress=\"2\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : (dataset.getRowLevel(currow) == 2 ? &quot;cell_SubTotal&quot; : &quot;&quot;)\"/><Cell col=\"2\" text=\"bind:Column9\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : (dataset.getRowLevel(currow) == 2 ? &quot;cell_SubTotal&quot; : &quot;&quot;)\"/><Cell col=\"3\" text=\"bind:Column0\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : (dataset.getRowLevel(currow) == 2 ? &quot;cell_SubTotal&quot; : &quot;&quot;)\"/><Cell col=\"4\" text=\"bind:Column2\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : (dataset.getRowLevel(currow) == 2 ? &quot;cell_SubTotal&quot; : &quot;&quot;)\"/><Cell col=\"5\" expr=\"dataset.getRowLevel(currow)\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : (dataset.getRowLevel(currow) == 2 ? &quot;cell_SubTotal&quot; : &quot;&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","grd00:40","140","38",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Auto Size");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAutoSize1","0","staTitle07:16",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"405\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"칼럼2\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"칼럼3\" autosizecol=\"limitmin\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"칼럼1\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column2\"/><Cell col=\"2\" text=\"bind:Column3\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:Column1\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAutoSize2","0","grdAutoSize1:16",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("dsSize");
            obj.set_autosizingtype("both");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"365\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" text=\"칼럼1\" cssclass=\"cell_WF_Center\"/><Cell col=\"2\" text=\"칼럼2\" cssclass=\"cell_WF_Center\"/><Cell col=\"3\" text=\"칼럼3\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAutoSize00","0","grdAutoSize2:24",null,"285","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_binddataset("dsSize2");
            obj.set_autosizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"204\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"칼럼0\" cssclass=\"cell_WF_Center\"/><Cell col=\"1\" colspan=\"3\" text=\"칼럼1\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" text=\"칼럼4\" cssclass=\"cell_WF_Center\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\" edittype=\"text\" displaytype=\"editcontrol\" cssclass=\"cell_NoLineV\"/><Cell col=\"2\" text=\"변경\" displaytype=\"buttoncontrol\" autosizecol=\"limitmin\" cssclass=\"cell_NoLineV\"/><Cell col=\"3\" text=\"취소\" displaytype=\"buttoncontrol\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","grdAutoSize00:40","400","38",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Suppress & Auto size & wordWrap");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBgtEndwDetailList","0","staTitle08:16",null,"375","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_autoenter("select");
            obj.set_binddataset("dsBgtEndwDetailList");
            obj.getSetter("uFunction").set("!sort");
            obj.set_cellsizingtype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("none");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"4\" text=\"구분\" cssclass=\"cell_WF_Center\"/><Cell col=\"4\" colspan=\"2\" text=\"2014년\"/><Cell col=\"6\" colspan=\"2\" text=\"2015년\"/><Cell col=\"8\" colspan=\"2\" text=\"2016년\"/><Cell col=\"10\" colspan=\"2\" text=\"2017년\"/><Cell col=\"12\" colspan=\"2\" text=\"2018년\"/><Cell row=\"1\" col=\"4\" text=\"당초\"/><Cell row=\"1\" col=\"5\" text=\"최종\"/><Cell row=\"1\" col=\"6\" text=\"당초\"/><Cell row=\"1\" col=\"7\" text=\"최종\"/><Cell row=\"1\" col=\"8\" text=\"당초\"/><Cell row=\"1\" col=\"9\" text=\"최종\"/><Cell row=\"1\" col=\"10\" text=\"당초\"/><Cell row=\"1\" col=\"11\" text=\"최종\"/><Cell row=\"1\" col=\"12\" text=\"당초\"/><Cell row=\"1\" col=\"13\" text=\"최종\"/></Band><Band id=\"body\"><Cell text=\"bind:divNm1\" textAlign=\"left\" wordWrap=\"char\" suppressalign=\"middle\" suppress=\"1\" font=\"normal 13px/normal &quot;Dotum&quot;\"/><Cell col=\"1\" text=\"bind:divNm2\" textAlign=\"center\" wordWrap=\"char\" suppress=\"2\" suppressalign=\"middle\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:divNm3\" textAlign=\"left\" suppress=\"3\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:divNm4\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:bgnnAmt4\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:lastAmt4\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:bgnnAmt3\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:lastAmt3\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:bgnnAmt2\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:lastAmt2\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:bgnnAmt1\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:lastAmt1\" edittype=\"mask\" displaytype=\"maskeditcontrol\" textAlign=\"right\" maskeditformat=\"###,###\" editimemode=\"none\" editinputfilter=\"none,dot,sign,space,symbol,comma,alpha\" editinputtype=\"number\" maskeditautoselect=\"true\" editautoselect=\"true\"/><Cell col=\"12\" text=\"bind:bgnnAmt\" edittype=\"mask\" displaytype=\"maskeditcontrol\" textAlign=\"right\" maskeditformat=\"###,###\" editimemode=\"none\" editinputfilter=\"none,dot,sign,space,symbol,comma,alpha\" editinputtype=\"number\" maskeditautoselect=\"true\" editautoselect=\"true\"/><Cell col=\"13\" text=\"bind:lastAmt\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,4930,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("그리드 grouping/suppress");

                p.Static00.set_taborder("0");
                p.Static00.set_text("그리드 그룹");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","190","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Suppress");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","149","60",null,null);

                p.staTitle00.set_taborder("3");
                p.staTitle00.set_text("Suppress");
                p.staTitle00.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle00.set_accessibilityrole("heading4");
                p.staTitle00.move("0","100","130","38",null,null);

                p.grdSuppress.set_taborder("4");
                p.grdSuppress.set_binddataset("dsSample");
                p.grdSuppress.move("0","staTitle00:16",null,"330","0",null);

                p.staTitle01.set_taborder("5");
                p.staTitle01.set_text("Suppress<fs v=\'15\'>(checkbox suppress)</fs>");
                p.staTitle01.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle01.set_accessibilityrole("heading4");
                p.staTitle01.set_usedecorate("true");
                p.staTitle01.move("0","grdSuppress:40","330","38",null,null);

                p.grdSuppress00.set_taborder("6");
                p.grdSuppress00.set_binddataset("dsSample");
                p.grdSuppress00.set_autoenter("select");
                p.grdSuppress00.move("0","staTitle01:16",null,"380","0",null);

                p.staTitle02.set_taborder("7");
                p.staTitle02.set_text("평균 - Dataset의 prop 설정");
                p.staTitle02.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle02.set_accessibilityrole("heading4");
                p.staTitle02.move("0","grdSuppress00:40",null,"38","0",null);

                p.grdDatasetProp.set_taborder("8");
                p.grdDatasetProp.set_binddataset("dsSample02");
                p.grdDatasetProp.set_selecttype("row");
                p.grdDatasetProp.move("0","staTitle02:16",null,"326","0",null);

                p.staCount.set_taborder("9");
                p.staCount.set_text("총 <fc v=\'#25649e\'>0</fc> 건");
                p.staCount.set_usedecorate("true");
                p.staCount.set_cssclass("sta_WF_Txt17B");
                p.staCount.move("0","grdDatasetProp:10",null,"31","0",null);

                p.Panel02.set_taborder("10");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_horizontalgap("24");
                p.Panel02.set_verticalgap("16");
                p.Panel02.move("0","staCount:40",null,"48","0",null);

                p.staTitle03.set_taborder("11");
                p.staTitle03.set_text("평균, 갯수/소계/합계 계산식");
                p.staTitle03.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle03.set_accessibilityrole("heading4");
                p.staTitle03.set_flexgrow("1");
                p.staTitle03.move("447","362","300","38",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("640","421","200","48",null,null);

                p.btn03.set_taborder("13");
                p.btn03.set_text("btn03");
                p.btn03.move(null,"421","100","48","148",null);

                p.btn02.set_taborder("14");
                p.btn02.set_text("입력");
                p.btn02.move(null,"421","100","48","20",null);

                p.grdCal.set_taborder("15");
                p.grdCal.set_binddataset("dsSample00");
                p.grdCal.set_selecttype("row");
                p.grdCal.set_autoenter("select");
                p.grdCal.move("0","Panel02:16",null,"326","0",null);

                p.staTitle04.set_taborder("16");
                p.staTitle04.set_text("소계, 합계 cell class");
                p.staTitle04.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle04.set_accessibilityrole("heading4");
                p.staTitle04.move("0","grdCal:40","220","38",null,null);

                p.grdCellClass.set_taborder("17");
                p.grdCellClass.set_binddataset("dsSample01");
                p.grdCellClass.set_selecttype("row");
                p.grdCellClass.move("0","staTitle04:16",null,"326","0",null);

                p.Panel00.set_taborder("18");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.move("0","grdCellClass:40",null,"48","0",null);

                p.staTitle05.set_taborder("19");
                p.staTitle05.set_text("소계 숨기기");
                p.staTitle05.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle05.set_accessibilityrole("heading4");
                p.staTitle05.set_flexgrow("1");
                p.staTitle05.move("427","1142","150","38",null,null);

                p.btnSubRowHidden.set_taborder("20");
                p.btnSubRowHidden.set_text("소계 Row 표시안하기");
                p.btnSubRowHidden.move(null,null,"196","48","39","5972");

                p.Grid03.set_taborder("21");
                p.Grid03.set_binddataset("dsSample00");
                p.Grid03.set_selecttype("row");
                p.Grid03.set_extendsizetype("row");
                p.Grid03.move("0","Panel00:16",null,"326","0",null);

                p.staTitle06.set_taborder("22");
                p.staTitle06.set_text("명칭으로 Group 및 suppress 시 코드로 Sort 방법<fs v=\'15\'> ( keystring G:Column0-Column1,Column2-Column3 )</fs>");
                p.staTitle06.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle06.set_accessibilityrole("heading4");
                p.staTitle06.set_usedecorate("true");
                p.staTitle06.set_fittocontents("height");
                p.staTitle06.move("0","Grid03:40",null,"86","0",null);

                p.grd00.set_taborder("23");
                p.grd00.set_binddataset("dsSample03");
                p.grd00.move("0","staTitle06:16",null,"319","0",null);

                p.staTitle07.set_taborder("24");
                p.staTitle07.set_text("Auto Size");
                p.staTitle07.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle07.set_accessibilityrole("heading4");
                p.staTitle07.move("0","grd00:40","140","38",null,null);

                p.grdAutoSize1.set_taborder("25");
                p.grdAutoSize1.set_binddataset("dsSize");
                p.grdAutoSize1.set_autosizingtype("col");
                p.grdAutoSize1.set_cellsizingtype("col");
                p.grdAutoSize1.move("0","staTitle07:16",null,"300","0",null);

                p.grdAutoSize2.set_taborder("26");
                p.grdAutoSize2.set_binddataset("dsSize");
                p.grdAutoSize2.set_autosizingtype("both");
                p.grdAutoSize2.set_extendsizetype("row");
                p.grdAutoSize2.set_cellsizingtype("both");
                p.grdAutoSize2.move("0","grdAutoSize1:16",null,"400","0",null);

                p.grdAutoSize00.set_taborder("27");
                p.grdAutoSize00.set_binddataset("dsSize2");
                p.grdAutoSize00.set_autosizingtype("col");
                p.grdAutoSize00.set_extendsizetype("row");
                p.grdAutoSize00.set_cellsizingtype("col");
                p.grdAutoSize00.move("0","grdAutoSize2:24",null,"285","0",null);

                p.staTitle08.set_taborder("29");
                p.staTitle08.set_text("Suppress & Auto size & wordWrap");
                p.staTitle08.set_cssclass("sta_WF_ParaH4_pc");
                p.staTitle08.set_accessibilityrole("heading4");
                p.staTitle08.move("0","grdAutoSize00:40","400","38",null,null);

                p.grdBgtEndwDetailList.set_taborder("28");
                p.grdBgtEndwDetailList.set_autoenter("select");
                p.grdBgtEndwDetailList.set_binddataset("dsBgtEndwDetailList");
                p.grdBgtEndwDetailList.getSetter("uFunction").set("!sort");
                p.grdBgtEndwDetailList.set_cellsizingtype("col");
                p.grdBgtEndwDetailList.set_autosizingtype("row");
                p.grdBgtEndwDetailList.set_extendsizetype("none");
                p.grdBgtEndwDetailList.set_autosizebandtype("body");
                p.grdBgtEndwDetailList.move("0","staTitle08:16",null,"375","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,4930,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle00.move("0","104","130","43",null,null);

                p.grdSuppress.move("0","163",null,"319","0",null);

                p.grdSuppress00.move("0","581",null,"380","0",null);

                p.grdDatasetProp.move("0","1060",null,"326","0",null);

                p.grdCal.move("0","1531",null,"326","0",null);

                p.grdCellClass.move("0","1956",null,"326","0",null);

                p.Grid03.move("0","2386",null,"326","0",null);

                p.staTitle06.set_fittocontents("height");
                p.staTitle06.move("0","2752",null,"96","0",null);

                p.grd00.move("0","2864",null,"319","0",null);

                p.grdAutoSize1.move("0","3282",null,"300","0",null);

                p.grdBgtEndwDetailList.move("0","4406",null,"375","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGridGroup.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleGridGroup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.staCount.set_text("총 <fc v='#25649e'>"+this.dsSample02.rowcount+"</fc> 건")

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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btn00_onclick = function(obj,e)
        {
        	trace(this.dsSample00.keystring);
        	this.edt00.set_value(this.dsSample00.keystring);
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.dsSample00.set_keystring(this.edt00.value);
        };

        this.grdSuppress00_onexpandup = function(obj,e)
        {
        	trace("grdSuppress00_onexpandup");
        };

        this.btnSubRowHidden_onclick = function(obj,e)
        {
        	var objGrid = this.Grid03;
        	var objDsList = this.Grid03.getBindDataset();

        	objGrid.set_enableredraw(false);

        	// 소계 부분 높이 조정하기(1px)
        	for(var i = 0 ; i < objGrid.rowcount ; i++) {
        		if(objDsList.getRowLevel(i) == 1) {
        			objGrid.setRealRowSize(i, 1);
        		}
        	}

        	// 소계부분 line 숨기기
        	var sExpr = "expr:dataset.getRowLevel(currow+1) == 1 ? 'cell_NoLineH' : ''";
        	objGrid.setCellProperty("body",0, "cssclass", sExpr);
        	objGrid.setCellProperty("body",1, "cssclass", sExpr);
        	objGrid.setCellProperty("body",2, "cssclass", sExpr);
        	objGrid.setCellProperty("body",3, "cssclass", sExpr);
        	objGrid.setCellProperty("body",4, "cssclass", sExpr);

        	objGrid.set_enableredraw(true);
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.dsSample00.insertRow(this.dsSample00.rowposition);
        };

        this.dsSample00_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "Column3") {
        		// dataSet의 Logical Data 갱신
        		obj.updateSortGroup(obj.keystring);
        	}
        };

        this.btn03_onclick = function(obj,e)
        {
        	var nRtn = this.grdCal.mergeContentsCell("body", 1, 0, 1, 3, 3, true);
        	trace("nRtn : " + nRtn);
        };

        this.dsSample_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "chk") {
        		var nChk = e.newvalue;
        		var sKey = this.dsSample.getColumn(e.row, "Column1");
        		this.dsSample.set_enableevent(false);
        		for (var i=0; i < this.dsSample.rowcount; i++) {
        			if (this.dsSample.getColumn(i, "Column1") == sKey) {
        				this.dsSample.setColumn(i, "chk", nChk);
        			}
        		}
        		this.dsSample.set_enableevent(true);
        	}
        };

        this.grdSuppress_oncellclick = function(obj,e)
        {
        	trace(	obj.getCurEditType());
        	trace(e.fromobject + "||"+ e.fromreferenceobject);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdSuppress.addEventHandler("oncellclick",this.grdSuppress_oncellclick,this);
            this.grdSuppress00.addEventHandler("onexpandup",this.grdSuppress00_onexpandup,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btnSubRowHidden.addEventHandler("onclick",this.btnSubRowHidden_onclick,this);
            this.grdBgtEndwDetailList.addEventHandler("onheadclick",this.grdChargerMangList_onheadclick,this);
            this.dsSample.addEventHandler("oncolumnchanged",this.dsSample_oncolumnchanged,this);
            this.dsSample00.addEventHandler("oncolumnchanged",this.dsSample00_oncolumnchanged,this);
            this.dsSample02.addEventHandler("onrowposchanged",this.dsSample00_onrowposchanged,this);
            this.dsSample03.addEventHandler("onrowposchanged",this.dsSample00_onrowposchanged,this);
        };
        this.loadIncludeScript("sampleGridGroup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
