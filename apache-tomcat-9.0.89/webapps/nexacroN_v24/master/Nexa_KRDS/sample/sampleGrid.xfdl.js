(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGrid");
            this.set_titletext("그리드 기능");
            this.set_stepalign("left top");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,4800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSort", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "똘기","Column1" : "피카추","Column2" : "aaaa","Column3" : "123"},{"Column0" : "떵이","Column1" : "라이츄","Column2" : "aaaa","Column3" : "234"},{"Column0" : "호치","Column1" : "파이리","Column2" : "aaaa","Column3" : "345"},{"Column0" : "새초미","Column1" : "꼬부기","Column2" : "aaaa","Column3" : "456"},{"Column0" : "드라곤","Column1" : "버터플","Column2" : "bbbb","Column3" : "567"},{"Column0" : "요롱이","Column1" : "야도란","Column2" : "bbbb","Column3" : "678"},{"Column0" : "마초","Column1" : "피존투","Column2" : "aaaa","Column3" : "890"},{"Column0" : "미미","Column1" : "또가스","Column2" : "bbbb","Column3" : "321"},{"Column0" : "몽키","Column1" : "망나뇽","Column2" : "bbbb","Column3" : "214"},{"Column0" : "키키","Column1" : "어니부기","Column2" : "bbbb","Column3" : "543"},{"Column0" : "강다리","Column1" : "거북킹","Column2" : "aaaa","Column3" : "345"},{"Column0" : "찡찡이","Column1" : "지우","Column2" : "cccc","Column3" : "765"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSortMultiheader", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "똘기","Column1" : "피카추","Column2" : "aaaa","Column3" : "123","Column4" : "가나다라"},{"Column0" : "떵이","Column1" : "라이츄","Column2" : "aaaa","Column3" : "234","Column4" : "가다라마"},{"Column0" : "호치","Column1" : "파이리","Column2" : "aaaa","Column3" : "345","Column4" : "가라마바"},{"Column0" : "새초미","Column1" : "꼬부기","Column2" : "aaaa","Column3" : "456","Column4" : "나다라마"},{"Column0" : "드라곤","Column1" : "버터플","Column2" : "bbbb","Column3" : "567","Column4" : "나라마하"},{"Column0" : "요롱이","Column1" : "야도란","Column2" : "bbbb","Column3" : "678","Column4" : "다라마바"},{"Column0" : "마초","Column1" : "피존투","Column2" : "aaaa","Column3" : "890","Column4" : "아자차카"},{"Column0" : "미미","Column1" : "또가스","Column2" : "bbbb","Column3" : "321","Column4" : "다마바아"},{"Column0" : "몽키","Column1" : "망나뇽","Column2" : "bbbb","Column3" : "214","Column4" : "다바아자"},{"Column0" : "키키","Column1" : "어니부기","Column2" : "bbbb","Column3" : "543","Column4" : "차카타파"},{"Column0" : "강다리","Column1" : "거북킹","Column2" : "aaaa","Column3" : "345","Column4" : "카타파하"},{"Column0" : "찡찡이","Column1" : "지우","Column2" : "cccc","Column3" : "765","Column4" : "차타파하"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "normal","type" : "STRING","size" : "256"},{"id" : "button","type" : "STRING","size" : "256"},{"id" : "calendar","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "combo","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "date","type" : "STRING","size" : "256"},{"id" : "editControl","type" : "STRING","size" : "256"},{"id" : "number","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"}]},"Rows" : [{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColhide", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "stlInfo","type" : "STRING","size" : "256"},{"id" : "test1","type" : "STRING","size" : "256"},{"id" : "nocharge","type" : "STRING","size" : "256"},{"id" : "todayw","type" : "STRING","size" : "256"},{"id" : "sun","type" : "STRING","size" : "256"},{"id" : "rain","type" : "STRING","size" : "256"},{"id" : "stlStatus","type" : "STRING","size" : "256"},{"id" : "stlYN","type" : "STRING","size" : "256"},{"id" : "stn","type" : "STRING","size" : "256"},{"id" : "nochargeyn","type" : "STRING","size" : "256"},{"id" : "yestest","type" : "STRING","size" : "256"},{"id" : "notest","type" : "STRING","size" : "256"},{"id" : "test11","type" : "STRING","size" : "256"},{"id" : "test22","type" : "STRING","size" : "256"}]},"Rows" : [{"stlInfo" : "결제1","test1" : "TEST33","nocharge" : "10000","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "하하하","notest" : "dsfsdf","test11" : "eeeeeeeeeeeeee","test22" : "01","todayw" : "what"},{"stlInfo" : "결제1","test1" : "TEST33","nocharge" : "9999","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "계좌이체","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "가가가","notest" : "sdfsdf","test11" : "tttttttttttttttttt","test22" : "01","todayw" : "how"},{"stlInfo" : "결제1","test1" : "TEST33","nocharge" : "3333","sun" : "I Like it","rain" : "I Like it","stlStatus" : "개인계좌","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "나나나","notest" : "gaewqr","test11" : "tttttttttttt","test22" : "02","todayw" : "who"},{"stlInfo" : "결제2","test1" : "TEST33","nocharge" : "7777","sun" : "I Like it","rain" : "I Like it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "다다다","notest" : "afsd","test11" : "rrrrrrrrrrrrrrr","test22" : "02","todayw" : "when"},{"stlInfo" : "결제2","test1" : "TEST33","nocharge" : "6666","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "Y","yestest" : "라라라","notest" : "ghq2erwett","test11" : "eeeeeeeeeeeee","test22" : "03","todayw" : "where"},{"stlInfo" : "결제2","test1" : "TEST33","nocharge" : "45464","sun" : "I Like it","rain" : "I Like it","stlStatus" : "카드","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "Y","yestest" : "하하하","notest" : "asfdsf","test11" : "wwwwwwww","test22" : "03","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "1564","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "가가가","notest" : "dsfdgsafdsf","test11" : "qqqqqqqqqqqqq","test22" : "04","todayw" : "when"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "11","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "현금","stlYN" : "N","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "나나나","notest" : "tqrewrwe","test11" : "1111111111","test22" : "02","todayw" : "where"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "8798","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "현금","stlYN" : "N","stn" : "은행","nochargeyn" : "Y","yestest" : "하하하","notest" : "gafsfsd","test11" : "tttttttttttttttt","test22" : "02","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST44","nocharge" : "5464","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "N","stn" : "은행","nochargeyn" : "N","yestest" : "가가가","notest" : "agsdfsdf","test11" : "eeeeeeeeeeeeeeeeee","test22" : "01","todayw" : "what"},{"stlInfo" : "결제1","test1" : "TEST55","nocharge" : "0","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "N","stn" : "은행","nochargeyn" : "N","yestest" : "하하하","notest" : "gafsdfewrwe","test11" : "ssssssssssssssss","test22" : "01","todayw" : "how"},{"stlInfo" : "결제1","test1" : "TEST55","nocharge" : "4564","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "N","stn" : "은행","nochargeyn" : "N","yestest" : "가가가","notest" : "gadfsdfccc","test11" : "sfffffff","test22" : "01","todayw" : "who"},{"stlInfo" : "결제3","test1" : "TEST55","nocharge" : "54654","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "N","stn" : "은행","nochargeyn" : "Y","yestest" : "나나나","notest" : "asfaewqrew","test11" : "dssssssss","test22" : "03","todayw" : "when"},{"stlInfo" : "결제4","test1" : "TEST55","nocharge" : "564","sun" : "I Like it","rain" : "I Like it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "다다다","notest" : "afsdfsdg","test11" : "zzzzzzzzzzzzzz","test22" : "03","todayw" : "where"},{"stlInfo" : "결제2","test1" : "TEST55","nocharge" : "45688","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "Y","yestest" : "하하하","notest" : "asfdsghweee","test11" : "zasaaaaaaaaaa","test22" : "02","todayw" : "why"},{"stlInfo" : "결제2","test1" : "TEST55","nocharge" : "99","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "가가가","notest" : "afdsfqfdsfds","test11" : "eeeeeeeeeeeee","test22" : "02","todayw" : "when"},{"stlInfo" : "결제2","test1" : "TEST55","nocharge" : "77","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "Y","yestest" : "나나나","notest" : "sdfsdfcccc","test11" : "sssssssssssss","test22" : "01","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST55","nocharge" : "1111","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "다다다","notest" : "yyerjfgdfdsa","test11" : "rrrrrrrrrrrrrrrrrrr","test22" : "01","todayw" : "when"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "100","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "Y","yestest" : "하하하","notest" : "dsfhyeertwq","test11" : "eeeeeeeeeeee","test22" : "01","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "212","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "가가가","notest" : "dsdsfsd","test11" : "wwwwwwwwwww","test22" : "01","todayw" : "when"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "1546","sun" : "I Like it","rain" : "I Like it","stlStatus" : "무통장입금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "나나나","notest" : "gsdfsdf","test11" : "qqqqqqqqqqqqq","test22" : "01","todayw" : "what"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserheader", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "normal","type" : "STRING","size" : "256"},{"id" : "button","type" : "STRING","size" : "256"},{"id" : "calendar","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "combo","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "date","type" : "STRING","size" : "256"},{"id" : "decoText","type" : "STRING","size" : "256"},{"id" : "editControl","type" : "STRING","size" : "256"},{"id" : "mask","type" : "STRING","size" : "256"},{"id" : "maskEdit","type" : "STRING","size" : "256"},{"id" : "number","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"},{"id" : "textArea","type" : "STRING","size" : "256"},{"id" : "headTest1","type" : "STRING","size" : "256"},{"id" : "headTest12","type" : "STRING","size" : "256"},{"id" : "headTest13","type" : "STRING","size" : "256"},{"id" : "headTest14","type" : "STRING","size" : "256"}]},"Rows" : [{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","decoText" : "<fs v='16'>TEST</fs>","editControl" : "test","mask" : "8508301","maskEdit" : "8508301","number" : "9999999999999","text" : "test","textArea" : "test","headTest1" : "aa","headTest12" : "aa","headTest13" : "aa","headTest14" : "aa"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","decoText" : "<fc v='red'>T</fc><fc v='orange'>E</fc><fc v='purple'>S</fc><fc v='green'>E</fc>","editControl" : "TEST","mask" : "8303301","maskEdit" : "8303301","number" : "8888888888","text" : "TEST","textArea" : "TEST","headTest1" : "bb","headTest12" : "aa","headTest13" : "bb","headTest14" : "aa"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","decoText" : "<ff v='굴림'>TEST</ff>","editControl" : "Test","mask" : "8902022","maskEdit" : "8902022","number" : "7777777777","text" : "Test","textArea" : "Test","headTest1" : "cc","headTest12" : "aa","headTest13" : "cc","headTest14" : "bb"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","decoText" : "<b v='true'>TE</b><b v='false'>ST</b>","editControl" : "test1","mask" : "9201012","maskEdit" : "9201012","number" : "88888888888","text" : "test1","textArea" : "test1","headTest1" : "dd","headTest12" : "bb","headTest13" : "aa","headTest14" : "bb"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","decoText" : "<i v='true'>TE</i><i v='false'>ST</i>","editControl" : "서울특별시","mask" : "8702022","maskEdit" : "8702022","number" : "9999999999","text" : "서울특별시","textArea" : "서울특별시gsdfdsfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","headTest1" : "ee","headTest12" : "bbb","headTest13" : "bb","headTest14" : "bb"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","decoText" : "<u v='true'>TE</u><u v='false'>ST</u>","editControl" : "경기도","mask" : "8801012","maskEdit" : "8801012","number" : "8888888888","text" : "경기도","textArea" : "경기도","headTest1" : "ff","headTest12" : "bb","headTest13" : "cc","headTest14" : "bb"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","decoText" : "<s v='true'>TE</s><s v='false'>ST</s>","editControl" : "서울특별시","mask" : "9008301","maskEdit" : "9008301","number" : "4444444444","text" : "서울특별시","textArea" : "서울특별시","headTest1" : "gg","headTest12" : "cc","headTest13" : "aa","headTest14" : "cc"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","decoText" : "<fs v='16'>TEST</fs>","editControl" : "경기도","mask" : "9103301","maskEdit" : "9103301","number" : "5555555555","text" : "경기도","textArea" : "경기도","headTest1" : "hh","headTest12" : "ccc","headTest13" : "bb","headTest14" : "cc"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","decoText" : "<fc v='red'>T</fc><fc v='orange'>E</fc><fc v='purple'>S</fc><fc v='green'>E</fc>","editControl" : "경기도","mask" : "9205052","maskEdit" : "9205052","number" : "11111111111","text" : "경기도","textArea" : "경기도","headTest1" : "ii","headTest12" : "ccc","headTest13" : "cc","headTest14" : "cc"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","decoText" : "<ff v='굴림'>TEST</ff>","editControl" : "서울특별시","mask" : "9208302","maskEdit" : "9208302","number" : "2","text" : "서울특별시","textArea" : "서울특별시","headTest1" : "jj","headTest12" : "ddd","headTest13" : "aa","headTest14" : "dd"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","decoText" : "<b v='true'>TE</b><b v='false'>ST</b>","editControl" : "TEST","mask" : "8508301","maskEdit" : "8508301","number" : "222222222","text" : "TEST","textArea" : "TEST","headTest1" : "kk","headTest12" : "ddd","headTest13" : "bb","headTest14" : "dd"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","decoText" : "<i v='true'>TE</i><i v='false'>ST</i>","editControl" : "test","mask" : "8303301","maskEdit" : "8303301","number" : "2","text" : "test","textArea" : "test","headTest1" : "ll","headTest12" : "ddd","headTest13" : "cc","headTest14" : "dd"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","decoText" : "<u v='true'>TE</u><u v='false'>ST</u>","editControl" : "Test","mask" : "8902022","maskEdit" : "8902022","number" : "555555555","text" : "Test","textArea" : "Test","headTest1" : "nn","headTest12" : "eee","headTest13" : "aa","headTest14" : "ee"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","decoText" : "<fs v='16'>TEST</fs>","editControl" : "test","mask" : "9201012","maskEdit" : "9201012","number" : "233","text" : "test","textArea" : "test","headTest1" : "mm","headTest12" : "eee","headTest13" : "bb","headTest14" : "ee"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","decoText" : "<fc v='red'>T</fc><fc v='orange'>E</fc><fc v='purple'>S</fc><fc v='green'>E</fc>","editControl" : "test","mask" : "8702022","maskEdit" : "8702022","number" : "555555","text" : "test","textArea" : "test","headTest1" : "oo","headTest12" : "eee","headTest13" : "cc","headTest14" : "ee"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","decoText" : "<ff v='굴림'>TEST</ff>","editControl" : "TEST","mask" : "8801012","maskEdit" : "8801012","number" : "4444444","text" : "TEST","textArea" : "TEST","headTest1" : "pp","headTest12" : "eee","headTest13" : "cc","headTest14" : "ee"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","decoText" : "<b v='true'>TE</b><b v='false'>ST</b>","editControl" : "TEST","mask" : "9008301","maskEdit" : "9008301","number" : "1111111","text" : "TEST","textArea" : "TEST","headTest1" : "qq","headTest12" : "ee","headTest13" : "aa","headTest14" : "ee"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColfix", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "normal","type" : "STRING","size" : "256"},{"id" : "button","type" : "STRING","size" : "256"},{"id" : "calendar","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "combo","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "date","type" : "STRING","size" : "256"},{"id" : "editControl","type" : "STRING","size" : "256"},{"id" : "number","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column8","type" : "STRING","size" : "256"},{"id" : "Column9","type" : "STRING","size" : "256"},{"id" : "Column10","type" : "STRING","size" : "256"}]},"Rows" : [{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "똘기","Column1" : "피카추","Column2" : "aaaa","Column3" : "123"},{"Column0" : "떵이","Column1" : "라이츄","Column2" : "aaaa","Column3" : "234"},{"Column0" : "호치","Column1" : "파이리","Column2" : "aaaa","Column3" : "345"},{"Column0" : "새초미","Column1" : "꼬부기","Column2" : "aaaa","Column3" : "456"},{"Column0" : "드라곤","Column1" : "버터플","Column2" : "bbbb","Column3" : "567"},{"Column0" : "요롱이","Column1" : "야도란","Column2" : "bbbb","Column3" : "678"},{"Column0" : "마초","Column1" : "피존투","Column2" : "aaaa","Column3" : "890"},{"Column0" : "미미","Column1" : "또가스","Column2" : "bbbb","Column3" : "321"},{"Column0" : "몽키","Column1" : "망나뇽","Column2" : "bbbb","Column3" : "214"},{"Column0" : "키키","Column1" : "어니부기","Column2" : "bbbb","Column3" : "543"},{"Column0" : "강다리","Column1" : "거북킹","Column2" : "aaaa","Column3" : "345"},{"Column0" : "찡찡이","Column1" : "지우","Column2" : "cccc","Column3" : "765"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPaste", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "똘기","Column1" : "피카추","Column2" : "aaaa","Column3" : "123"},{"Column0" : "떵이","Column1" : "라이츄","Column2" : "aaaa","Column3" : "234"},{"Column0" : "호치","Column1" : "파이리","Column2" : "aaaa","Column3" : "345"},{"Column0" : "새초미","Column1" : "꼬부기","Column2" : "aaaa","Column3" : "456"},{"Column0" : "드라곤","Column1" : "버터플","Column2" : "bbbb","Column3" : "567"},{"Column0" : "요롱이","Column1" : "야도란","Column2" : "bbbb","Column3" : "678"},{"Column0" : "마초","Column1" : "피존투","Column2" : "aaaa","Column3" : "890"},{"Column0" : "미미","Column1" : "또가스","Column2" : "bbbb","Column3" : "321"},{"Column0" : "몽키","Column1" : "망나뇽","Column2" : "bbbb","Column3" : "214"},{"Column0" : "키키","Column1" : "어니부기","Column2" : "bbbb","Column3" : "543"},{"Column0" : "강다리","Column1" : "거북킹","Column2" : "aaaa","Column3" : "345"},{"Column0" : "찡찡이","Column1" : "지우","Column2" : "cccc","Column3" : "765"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilterNew", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "normal","type" : "STRING","size" : "256"},{"id" : "button","type" : "STRING","size" : "256"},{"id" : "calendar","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "combo","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "date","type" : "STRING","size" : "256"},{"id" : "editControl","type" : "STRING","size" : "256"},{"id" : "number","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"}]},"Rows" : [{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColhideNew", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "stlInfo","type" : "STRING","size" : "256"},{"id" : "test1","type" : "STRING","size" : "256"},{"id" : "nocharge","type" : "STRING","size" : "256"},{"id" : "todayw","type" : "STRING","size" : "256"},{"id" : "sun","type" : "STRING","size" : "256"},{"id" : "rain","type" : "STRING","size" : "256"},{"id" : "stlStatus","type" : "STRING","size" : "256"},{"id" : "stlYN","type" : "STRING","size" : "256"},{"id" : "stn","type" : "STRING","size" : "256"},{"id" : "nochargeyn","type" : "STRING","size" : "256"},{"id" : "yestest","type" : "STRING","size" : "256"},{"id" : "notest","type" : "STRING","size" : "256"},{"id" : "test11","type" : "STRING","size" : "256"},{"id" : "test22","type" : "STRING","size" : "256"}]},"Rows" : [{"stlInfo" : "결제1","test1" : "TEST33","nocharge" : "10000","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "하하하","notest" : "dsfsdf","test11" : "eeeeeeeeeeeeee","test22" : "01","todayw" : "what"},{"stlInfo" : "결제1","test1" : "TEST33","nocharge" : "9999","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "계좌이체","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "가가가","notest" : "sdfsdf","test11" : "tttttttttttttttttt","test22" : "01","todayw" : "how"},{"stlInfo" : "결제1","test1" : "TEST33","nocharge" : "3333","sun" : "I Like it","rain" : "I Like it","stlStatus" : "개인계좌","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "나나나","notest" : "gaewqr","test11" : "tttttttttttt","test22" : "02","todayw" : "who"},{"stlInfo" : "결제2","test1" : "TEST33","nocharge" : "7777","sun" : "I Like it","rain" : "I Like it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "다다다","notest" : "afsd","test11" : "rrrrrrrrrrrrrrr","test22" : "02","todayw" : "when"},{"stlInfo" : "결제2","test1" : "TEST33","nocharge" : "6666","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "Y","yestest" : "라라라","notest" : "ghq2erwett","test11" : "eeeeeeeeeeeee","test22" : "03","todayw" : "where"},{"stlInfo" : "결제2","test1" : "TEST33","nocharge" : "45464","sun" : "I Like it","rain" : "I Like it","stlStatus" : "카드","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "Y","yestest" : "하하하","notest" : "asfdsf","test11" : "wwwwwwww","test22" : "03","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "1564","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "가가가","notest" : "dsfdgsafdsf","test11" : "qqqqqqqqqqqqq","test22" : "04","todayw" : "when"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "11","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "현금","stlYN" : "N","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "나나나","notest" : "tqrewrwe","test11" : "1111111111","test22" : "02","todayw" : "where"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "8798","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "현금","stlYN" : "N","stn" : "은행","nochargeyn" : "Y","yestest" : "하하하","notest" : "gafsfsd","test11" : "tttttttttttttttt","test22" : "02","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST44","nocharge" : "5464","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "N","stn" : "은행","nochargeyn" : "N","yestest" : "가가가","notest" : "agsdfsdf","test11" : "eeeeeeeeeeeeeeeeee","test22" : "01","todayw" : "what"},{"stlInfo" : "결제1","test1" : "TEST55","nocharge" : "0","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "N","stn" : "은행","nochargeyn" : "N","yestest" : "하하하","notest" : "gafsdfewrwe","test11" : "ssssssssssssssss","test22" : "01","todayw" : "how"},{"stlInfo" : "결제1","test1" : "TEST55","nocharge" : "4564","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "N","stn" : "은행","nochargeyn" : "N","yestest" : "가가가","notest" : "gadfsdfccc","test11" : "sfffffff","test22" : "01","todayw" : "who"},{"stlInfo" : "결제3","test1" : "TEST55","nocharge" : "54654","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "N","stn" : "은행","nochargeyn" : "Y","yestest" : "나나나","notest" : "asfaewqrew","test11" : "dssssssss","test22" : "03","todayw" : "when"},{"stlInfo" : "결제4","test1" : "TEST55","nocharge" : "564","sun" : "I Like it","rain" : "I Like it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "다다다","notest" : "afsdfsdg","test11" : "zzzzzzzzzzzzzz","test22" : "03","todayw" : "where"},{"stlInfo" : "결제2","test1" : "TEST55","nocharge" : "45688","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "Y","yestest" : "하하하","notest" : "asfdsghweee","test11" : "zasaaaaaaaaaa","test22" : "02","todayw" : "why"},{"stlInfo" : "결제2","test1" : "TEST55","nocharge" : "99","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "N","yestest" : "가가가","notest" : "afdsfqfdsfds","test11" : "eeeeeeeeeeeee","test22" : "02","todayw" : "when"},{"stlInfo" : "결제2","test1" : "TEST55","nocharge" : "77","sun" : "I Hate it","rain" : "I Hate it","stlStatus" : "카드","stlYN" : "Y","stn" : "인터넷","nochargeyn" : "Y","yestest" : "나나나","notest" : "sdfsdfcccc","test11" : "sssssssssssss","test22" : "01","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST55","nocharge" : "1111","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "다다다","notest" : "yyerjfgdfdsa","test11" : "rrrrrrrrrrrrrrrrrrr","test22" : "01","todayw" : "when"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "100","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "Y","yestest" : "하하하","notest" : "dsfhyeertwq","test11" : "eeeeeeeeeeee","test22" : "01","todayw" : "why"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "212","sun" : "I Like it","rain" : "I Like it","stlStatus" : "현금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "가가가","notest" : "dsdsfsd","test11" : "wwwwwwwwwww","test22" : "01","todayw" : "when"},{"stlInfo" : "결제1","test1" : "TEST3344","nocharge" : "1546","sun" : "I Like it","rain" : "I Like it","stlStatus" : "무통장입금","stlYN" : "Y","stn" : "텔레뱅킹","nochargeyn" : "N","yestest" : "나나나","notest" : "gsdfsdf","test11" : "qqqqqqqqqqqqq","test22" : "01","todayw" : "what"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staH2","0","0","260","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드 공통기능");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","69","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0","104",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다양한 그리드 기능");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","sta02:20",null,"500","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("그리드기능\n - 정렬(sort), 열고정(colfix), 필터(filter), 컬럼숨기기/보이기(colhide) , 그리드데이터찾기(find)\n   초기화(initial), 셀copy&paste(cellcopypaste), 그리드설정초기화(initail) 기능들이 제공된다.\n\n - 그리드에 아무것도 설정하지 않을 시,  [정렬, 셀copy&paste] 기능을 사용 할 수 있다.\n\n - 기본기능외 다른 기능을 추가 할 경우 그리드에 userproperties를 추가하여 사용합니다\n    ※ 추가방법 :  그리드를 선택하고 프로퍼티창에서 마우스 우클릭 - add properties 를 선택하여 유저 프로퍼티를 추가 후 사용할 기능을 콤마(,)로 구분하여 나열한다.\n    예] user property name : uFunction\n          user property value : !sort,colhide\n\n - 기본 기능 중 사용하지 않을 기능 앞엔 느낌표(!)를 붙여 명시한다.\n    예] !sort,!cellcopypaste\n\n  - 소트,  셀copy&paste의 기능을 제외한 기능은 마우스 우클릭시 나오는 팝업메뉴를 띄워 제공한다.");
            obj.set_cssclass("txt_WF_Nochar");
            obj.set_scrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","txaGuide:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("정렬 (ctrl key= multisort)");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static03:16",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grd04\"/><PanelItem id=\"PanelItem01\" componentid=\"grd05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd04","0","Static03:20","320","321",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsSort");
            obj.set_selecttype("row");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd05","451","Static03:20","320","321",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsSortMultiheader");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell row=\"1\" colspan=\"2\" text=\"Column3\"/><Cell row=\"1\" col=\"2\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell row=\"1\" colspan=\"2\" text=\"bind:Column3\"/><Cell row=\"1\" col=\"2\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","Panel01:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("열고정, 행고정");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd07","0","Static05:16",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsColfix");
            obj.getSetter("uFunction").set("colfix,rowfix");
            obj.set_scrollpixel("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"button\"/><Cell col=\"2\" text=\"calendar\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"comboText\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"editControl\"/><Cell col=\"8\" text=\"number\"/><Cell col=\"9\" text=\"text\"/><Cell col=\"10\" text=\"Column0\"/><Cell col=\"11\" text=\"Column1\"/><Cell col=\"12\" text=\"Column2\"/><Cell col=\"13\" text=\"Column3\"/><Cell col=\"14\" text=\"Column4\"/><Cell col=\"15\" text=\"Column5\"/><Cell col=\"16\" text=\"Column6\"/><Cell col=\"17\" text=\"Column7\"/><Cell col=\"18\" text=\"Column8\"/><Cell col=\"19\" text=\"Column9\"/><Cell col=\"20\" text=\"Column10\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" text=\"bind:button\"/><Cell col=\"2\" text=\"bind:calendar\"/><Cell col=\"3\" text=\"bind:check\"/><Cell col=\"4\" text=\"bind:combo\"/><Cell col=\"5\" text=\"bind:comboText\"/><Cell col=\"6\" text=\"bind:date\"/><Cell col=\"7\" text=\"bind:editControl\"/><Cell col=\"8\" text=\"bind:number\"/><Cell col=\"9\" text=\"bind:text\"/><Cell col=\"10\" text=\"bind:Column0\"/><Cell col=\"11\" text=\"bind:Column1\"/><Cell col=\"12\" text=\"bind:Column2\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column4\"/><Cell col=\"15\" text=\"bind:Column5\"/><Cell col=\"16\" text=\"bind:Column6\"/><Cell col=\"17\" text=\"bind:Column7\"/><Cell col=\"18\" text=\"bind:Column8\"/><Cell col=\"19\" text=\"bind:Column9\"/><Cell col=\"20\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","grd07:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("그리드필터 (전체 설정) + 그리드 데이터 찾기, sort 방지");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd08","0","Static06:16",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsFilter");
            obj.getSetter("uFunction").set("filter,find,!sort");
            obj.set_scrollpixel("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"button\"/><Cell col=\"2\" text=\"calendar\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"comboText\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"editControl\"/><Cell col=\"8\" text=\"number\"/><Cell col=\"9\" text=\"text\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" text=\"bind:button\"/><Cell col=\"2\" text=\"bind:calendar\"/><Cell col=\"3\" text=\"bind:check\"/><Cell col=\"4\" text=\"bind:combo\"/><Cell col=\"5\" text=\"bind:comboText\"/><Cell col=\"6\" text=\"bind:date\"/><Cell col=\"7\" text=\"bind:editControl\"/><Cell col=\"8\" text=\"bind:number\"/><Cell col=\"9\" text=\"bind:text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","0","grd08:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("그리드필터 (컬럼별 설정) + 그리드 데이터 찾기");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd14","0","Static06_01:16",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("dsFilterNew");
            obj.getSetter("uFunction").set("filterNew,find,sort");
            obj.set_scrollpixel("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"button\"/><Cell col=\"2\" text=\"calendar\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"comboText\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"editControl\"/><Cell col=\"8\" text=\"number\"/><Cell col=\"9\" text=\"text\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" text=\"bind:button\"/><Cell col=\"2\" text=\"bind:calendar\"/><Cell col=\"3\" text=\"bind:check\"/><Cell col=\"4\" text=\"bind:combo\"/><Cell col=\"5\" text=\"bind:comboText\"/><Cell col=\"6\" text=\"bind:date\"/><Cell col=\"7\" text=\"bind:editControl\"/><Cell col=\"8\" text=\"bind:number\"/><Cell col=\"9\" text=\"bind:text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","0","grd14:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("칼럼 숨기기, 초기화 (전체 설정)");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd09_01","0","Static06_00_01:16",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsColhide");
            obj.getSetter("uFunction").set("colhide,initial,colhidefree");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"nocharge\"/><Cell col=\"3\" text=\"todayw\"/><Cell col=\"4\" text=\"sun\"/><Cell col=\"5\" text=\"rain\"/><Cell col=\"6\" text=\"stlStatus\"/><Cell col=\"7\" text=\"stlYN\"/><Cell col=\"8\" text=\"stn\"/><Cell col=\"9\" text=\"nochargeyn\"/><Cell col=\"10\" text=\"yestest\"/><Cell col=\"11\" text=\"notest\"/><Cell col=\"12\" text=\"test11\"/><Cell col=\"13\" text=\"test22\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\"/><Cell col=\"1\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:nocharge\"/><Cell col=\"3\" text=\"bind:todayw\"/><Cell col=\"4\" text=\"bind:sun\"/><Cell col=\"5\" text=\"bind:rain\"/><Cell col=\"6\" text=\"bind:stlStatus\"/><Cell col=\"7\" text=\"bind:stlYN\"/><Cell col=\"8\" text=\"bind:stn\"/><Cell col=\"9\" text=\"bind:nochargeyn\"/><Cell col=\"10\" text=\"bind:yestest\"/><Cell col=\"11\" text=\"bind:notest\"/><Cell col=\"12\" text=\"bind:test11\"/><Cell col=\"13\" text=\"bind:test22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","grd09_01:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("칼럼 숨기기, 초기화 (컬럼별 설정)");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd09","0","Static06_00:16",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsColhideNew");
            obj.getSetter("uFunction").set("colhideNew,initial,colhidefreeNew");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"nocharge\"/><Cell col=\"3\" text=\"todayw\"/><Cell col=\"4\" text=\"sun\"/><Cell col=\"5\" text=\"rain\"/><Cell col=\"6\" text=\"stlStatus\"/><Cell col=\"7\" text=\"stlYN\"/><Cell col=\"8\" text=\"stn\"/><Cell col=\"9\" text=\"nochargeyn\"/><Cell col=\"10\" text=\"yestest\"/><Cell col=\"11\" text=\"notest\"/><Cell col=\"12\" text=\"test11\"/><Cell col=\"13\" text=\"test22\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\"/><Cell col=\"1\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:nocharge\"/><Cell col=\"3\" text=\"bind:todayw\"/><Cell col=\"4\" text=\"bind:sun\"/><Cell col=\"5\" text=\"bind:rain\"/><Cell col=\"6\" text=\"bind:stlStatus\"/><Cell col=\"7\" text=\"bind:stlYN\"/><Cell col=\"8\" text=\"bind:stn\"/><Cell col=\"9\" text=\"bind:nochargeyn\"/><Cell col=\"10\" text=\"bind:yestest\"/><Cell col=\"11\" text=\"bind:notest\"/><Cell col=\"12\" text=\"bind:test11\"/><Cell col=\"13\" text=\"bind:test22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","0","grd09:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("스크롤, 복잡한 그리드 표현");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd10","0","Static06_00_00:16",null,"570","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsUserheader");
            obj.getSetter("uFunction").set("scroll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"39\" band=\"head\"/><Row size=\"39\" band=\"head\"/><Row size=\"39\" band=\"head\"/><Row size=\"57\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"텍스트모드\" expandchar=\"comp.textmode\"/><Cell col=\"6\" rowspan=\"2\" text=\"달력\" expandchar=\"comp.calendar\"/><Cell col=\"7\" rowspan=\"2\" text=\"체크박스\" expandchar=\"comp.check\"/><Cell col=\"8\" rowspan=\"2\" text=\"콤보\" expandchar=\"comp.combo\"/><Cell col=\"9\" rowspan=\"4\" colspan=\"2\" text=\"테스트\" expandchar=\"comp.test\"/><Cell row=\"1\" colspan=\"4\" text=\"텍스트\" expandchar=\"comp.text\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"숫자\" expandchar=\"comp.number\"/><Cell row=\"2\" text=\"normal\" calendarweekformat=\"bind:normal\"/><Cell row=\"2\" col=\"1\" rowspan=\"2\" text=\"text\" calendarweekformat=\"bind:text\"/><Cell row=\"2\" col=\"2\" text=\"editControl\" calendarweekformat=\"bind:editControl\"/><Cell row=\"2\" col=\"3\" rowspan=\"2\" text=\"textArea\" calendarweekformat=\"bind:textArea\"/><Cell row=\"2\" col=\"4\" text=\"maskedit\" calendarweekformat=\"bind:maskEdit\"/><Cell row=\"2\" col=\"5\" rowspan=\"2\" text=\"number\" calendarweekformat=\"bind:number\"/><Cell row=\"2\" col=\"6\" text=\"calendar\" calendarweekformat=\"bind:calendar\"/><Cell row=\"2\" col=\"7\" rowspan=\"2\" text=\"checkbox\"/><Cell row=\"2\" col=\"8\" text=\"combo\"/><Cell row=\"3\" text=\"button\" calendarweekformat=\"bind:button\"/><Cell row=\"3\" col=\"2\" text=\"decoText\" calendarweekformat=\"bind:decoText\"/><Cell row=\"3\" col=\"4\" text=\"mask\" calendarweekformat=\"bind:mask\"/><Cell row=\"3\" col=\"6\" text=\"date\" calendarweekformat=\"bind:date\"/><Cell row=\"3\" col=\"8\" text=\"comboText\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:text\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:editControl\" displaytype=\"editcontrol\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:textArea\" displaytype=\"textareacontrol\"/><Cell col=\"4\" text=\"bind:maskEdit\" displaytype=\"maskeditcontrol\"/><Cell col=\"5\" rowspan=\"2\" displaytype=\"number\" text=\"bind:number\"/><Cell col=\"6\" text=\"bind:calendar\" displaytype=\"calendarcontrol\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:check\" displaytype=\"checkboxcontrol\"/><Cell col=\"8\" text=\"bind:combo\" displaytype=\"combocontrol\"/><Cell col=\"9\" text=\"bind:headTest1\" displaytype=\"editcontrol\"/><Cell col=\"10\" text=\"bind:headTest13\" displaytype=\"editcontrol\"/><Cell row=\"1\" text=\"bind:button\" displaytype=\"buttoncontrol\"/><Cell row=\"1\" col=\"2\" text=\"bind:decoText\" displaytype=\"decoratetext\"/><Cell row=\"1\" col=\"4\" text=\"bind:mask\" displaytype=\"mask\"/><Cell row=\"1\" col=\"6\" text=\"bind:date\" displaytype=\"date\"/><Cell row=\"1\" col=\"8\" text=\"bind:comboText\" displaytype=\"combotext\"/><Cell row=\"1\" col=\"9\" text=\"bind:headTest12\" displaytype=\"editcontrol\"/><Cell row=\"1\" col=\"10\" text=\"bind:headTest14\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00","0","grd10:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Select, Cell copy and paste");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static06_00_00_00:16","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"btn04\"/><PanelItem id=\"PanelItem00\" componentid=\"btn02\"/><PanelItem id=\"PanelItem01\" componentid=\"btn03\"/><PanelItem id=\"PanelItem03\" componentid=\"btn05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btn04",null,"3923","200","48","188",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("selecttype = multirow");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"3923","200","48","585",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("selecttype = cell");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","311","3923","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("selecttype = row");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn05",null,"3923","200","48","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("selecttype = area");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel00:20",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"grd12\"/><PanelItem id=\"PanelItem01\" componentid=\"grd13\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd12","0","Panel00:20","320","321",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("dsCopy");
            obj.getSetter("uFunction").set("select,cellcopypaste");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd13","445.5","Panel00:20","320","321",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_binddataset("dsPaste");
            obj.set_flexgrow("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","0","Panel02:40",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("그리드 전체 기능");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Grid("grd09_00","0","Static06_00_00_00_00:16",null,"321","0",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_binddataset("dsColhide");
            obj.getSetter("uFunction").set("sort,colfix,rowfix,filter,find,colhide,scroll,select,cellcopypaste,initial");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"stlInfo\"/><Cell col=\"1\" text=\"test1\"/><Cell col=\"2\" text=\"nocharge\"/><Cell col=\"3\" text=\"todayw\"/><Cell col=\"4\" text=\"sun\"/><Cell col=\"5\" text=\"rain\"/><Cell col=\"6\" text=\"stlStatus\"/><Cell col=\"7\" text=\"stlYN\"/><Cell col=\"8\" text=\"stn\"/><Cell col=\"9\" text=\"nochargeyn\"/><Cell col=\"10\" text=\"yestest\"/><Cell col=\"11\" text=\"notest\"/><Cell col=\"12\" text=\"test11\"/><Cell col=\"13\" text=\"test22\"/></Band><Band id=\"body\"><Cell text=\"bind:stlInfo\"/><Cell col=\"1\" text=\"bind:test1\"/><Cell col=\"2\" text=\"bind:nocharge\"/><Cell col=\"3\" text=\"bind:todayw\"/><Cell col=\"4\" text=\"bind:sun\"/><Cell col=\"5\" text=\"bind:rain\"/><Cell col=\"6\" text=\"bind:stlStatus\"/><Cell col=\"7\" text=\"bind:stlYN\"/><Cell col=\"8\" text=\"bind:stn\"/><Cell col=\"9\" text=\"bind:nochargeyn\"/><Cell col=\"10\" text=\"bind:yestest\"/><Cell col=\"11\" text=\"bind:notest\"/><Cell col=\"12\" text=\"bind:test11\"/><Cell col=\"13\" text=\"bind:test22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,4800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGrid.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleGird.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/07
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/07			TOBESOFT					최초생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn02_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("cell");
        	this.grd13.set_selecttype("cell");
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn03_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("row");
        	this.grd13.set_selecttype("row");
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn04_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("multirow");
        	this.grd13.set_selecttype("multirow");
        };

        /**
         * @description cell copy and paste 그리드 selecttype변경
        */
        this.btn05_onclick = function(obj,e)
        {
        	this.grd12.set_selecttype("area");
        	this.grd13.set_selecttype("area");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn05.addEventHandler("onclick",this.btn05_onclick,this);
        };
        this.loadIncludeScript("sampleGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
