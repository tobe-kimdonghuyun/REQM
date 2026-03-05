(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("grdsort");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsColfix", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "normal","type" : "STRING","size" : "256"},{"id" : "button","type" : "STRING","size" : "256"},{"id" : "calendar","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "combo","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "date","type" : "STRING","size" : "256"},{"id" : "editControl","type" : "STRING","size" : "256"},{"id" : "number","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column8","type" : "STRING","size" : "256"},{"id" : "Column9","type" : "STRING","size" : "256"},{"id" : "Column10","type" : "STRING","size" : "256"},{"id" : "Column11","type" : "STRING","size" : "256"},{"id" : "Column12","type" : "STRING","size" : "256"},{"id" : "Column13","type" : "STRING","size" : "256"},{"id" : "Column14","type" : "STRING","size" : "256"},{"id" : "Column15","type" : "STRING","size" : "256"},{"id" : "Column16","type" : "STRING","size" : "256"},{"id" : "Column17","type" : "STRING","size" : "256"},{"id" : "Column18","type" : "STRING","size" : "256"},{"id" : "Column19","type" : "STRING","size" : "256"},{"id" : "Column20","type" : "STRING","size" : "256"},{"id" : "Column21","type" : "STRING","size" : "256"},{"id" : "Column22","type" : "STRING","size" : "256"},{"id" : "Column23","type" : "STRING","size" : "256"},{"id" : "Column24","type" : "STRING","size" : "256"},{"id" : "Column25","type" : "STRING","size" : "256"},{"id" : "Column26","type" : "STRING","size" : "256"},{"id" : "Column27","type" : "STRING","size" : "256"},{"id" : "Column28","type" : "STRING","size" : "256"}]},"Rows" : [{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColfix00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "normal","type" : "STRING","size" : "256"},{"id" : "button","type" : "STRING","size" : "256"},{"id" : "calendar","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "combo","type" : "STRING","size" : "256"},{"id" : "comboText","type" : "STRING","size" : "256"},{"id" : "date","type" : "STRING","size" : "256"},{"id" : "editControl","type" : "STRING","size" : "256"},{"id" : "number","type" : "STRING","size" : "256"},{"id" : "text","type" : "STRING","size" : "256"},{"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column8","type" : "STRING","size" : "256"},{"id" : "Column9","type" : "STRING","size" : "256"},{"id" : "Column10","type" : "STRING","size" : "256"},{"id" : "Column11","type" : "STRING","size" : "256"},{"id" : "Column12","type" : "STRING","size" : "256"},{"id" : "Column13","type" : "STRING","size" : "256"},{"id" : "Column14","type" : "STRING","size" : "256"},{"id" : "Column15","type" : "STRING","size" : "256"},{"id" : "Column16","type" : "STRING","size" : "256"},{"id" : "Column17","type" : "STRING","size" : "256"},{"id" : "Column18","type" : "STRING","size" : "256"},{"id" : "Column19","type" : "STRING","size" : "256"},{"id" : "Column20","type" : "STRING","size" : "256"},{"id" : "Column21","type" : "STRING","size" : "256"},{"id" : "Column22","type" : "STRING","size" : "256"},{"id" : "Column23","type" : "STRING","size" : "256"},{"id" : "Column24","type" : "STRING","size" : "256"},{"id" : "Column25","type" : "STRING","size" : "256"},{"id" : "Column26","type" : "STRING","size" : "256"},{"id" : "Column27","type" : "STRING","size" : "256"},{"id" : "Column28","type" : "STRING","size" : "256"}]},"Rows" : [{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "test","number" : "9999999999999","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "TEST","number" : "8888888888","text" : "TEST"},{"normal" : "Test","button" : "Test","calendar" : "19890912","check" : "0","combo" : "all","comboText" : "all","date" : "19890912","editControl" : "Test","number" : "7777777777","text" : "Test"},{"normal" : "test1","button" : "test1","calendar" : "19890810","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890810","editControl" : "test1","number" : "88888888888","text" : "test1"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "서울특별시","number" : "9999999999","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "all","comboText" : "all","date" : "19890810","editControl" : "경기도","number" : "8888888888","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "0","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "4444444444","text" : "서울특별시"},{"normal" : "경기도","button" : "경기도","calendar" : "19890810","check" : "0","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "경기도","number" : "5555555555","text" : "경기도"},{"normal" : "경기도","button" : "경기도","calendar" : "19880826","check" : "0","combo" : "all","comboText" : "all","date" : "19880826","editControl" : "경기도","number" : "11111111111","text" : "경기도"},{"normal" : "서울특별시","button" : "서울특별시","calendar" : "19890912","check" : "1","combo" : "prev","comboText" : "prev","date" : "19890912","editControl" : "서울특별시","number" : "2","text" : "서울특별시"},{"normal" : "TEST","button" : "TEST","calendar" : "19890810","check" : "1","combo" : "next","comboText" : "next","date" : "19890810","editControl" : "TEST","number" : "222222222","text" : "TEST"},{"normal" : "test","button" : "test","calendar" : "19890826","check" : "1","combo" : "all","comboText" : "all","date" : "19890826","editControl" : "test","number" : "2","text" : "test"},{"normal" : "Test","button" : "Test","calendar" : "19880826","check" : "1","combo" : "prev","comboText" : "prev","date" : "19880826","editControl" : "Test","number" : "555555555","text" : "Test"},{"normal" : "test","button" : "test","calendar" : "19890912","check" : "1","combo" : "next","comboText" : "next","date" : "19890912","editControl" : "test","number" : "233","text" : "test"},{"normal" : "test","button" : "test","calendar" : "19880810","check" : "1","combo" : "all","comboText" : "all","date" : "19880810","editControl" : "test","number" : "555555","text" : "test"},{"normal" : "TEST","button" : "TEST","calendar" : "20171019","check" : "1","combo" : "prev","comboText" : "prev","date" : "20171019","editControl" : "TEST","number" : "4444444","text" : "TEST"},{"normal" : "TEST","button" : "TEST","calendar" : "20171018","check" : "0","combo" : "next","comboText" : "next","date" : "20171018","editControl" : "TEST","number" : "1111111","text" : "TEST"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","39","63",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsColfix");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" text=\"button\"/><Cell col=\"2\" text=\"calendar\"/><Cell col=\"3\" text=\"check\"/><Cell col=\"4\" text=\"combo\"/><Cell col=\"5\" text=\"comboText\"/><Cell col=\"6\" text=\"date\"/><Cell col=\"7\" text=\"editControl\"/><Cell col=\"8\" text=\"number\"/><Cell col=\"9\" text=\"text\"/><Cell col=\"10\" text=\"Column0\"/><Cell col=\"11\" text=\"Column1\"/><Cell col=\"12\" text=\"Column2\"/><Cell col=\"13\" text=\"Column3\"/><Cell col=\"14\" text=\"Column4\"/><Cell col=\"15\" text=\"Column5\"/><Cell col=\"16\" text=\"Column6\"/><Cell col=\"17\" text=\"Column7\"/><Cell col=\"18\" text=\"Column8\"/><Cell col=\"19\" text=\"Column9\"/><Cell col=\"20\" text=\"Column10\"/><Cell col=\"21\" text=\"Column11\"/><Cell col=\"22\" text=\"Column12\"/><Cell col=\"23\" text=\"Column13\"/><Cell col=\"24\" text=\"Column14\"/><Cell col=\"25\" text=\"Column15\"/><Cell col=\"26\" text=\"Column16\"/><Cell col=\"27\" text=\"Column17\"/><Cell col=\"28\" text=\"Column18\"/><Cell col=\"29\" text=\"Column19\"/><Cell col=\"30\" text=\"Column20\"/><Cell col=\"31\" text=\"Column21\"/><Cell col=\"32\" text=\"Column22\"/><Cell col=\"33\" text=\"Column23\"/><Cell col=\"34\" text=\"Column24\"/><Cell col=\"35\" text=\"Column25\"/><Cell col=\"36\" text=\"Column26\"/><Cell col=\"37\" text=\"Column27\"/><Cell col=\"38\" text=\"Column28\"/></Band><Band id=\"body\"><Cell text=\"bind:normal\" cssclass=\"cell_fix\"/><Cell col=\"1\" text=\"bind:button\" cssclass=\"cell_fix\"/><Cell col=\"2\" text=\"bind:calendar\" cssclass=\"cell_fix\"/><Cell col=\"3\" text=\"bind:check\" cssclass=\"cell_fix\"/><Cell col=\"4\" text=\"bind:combo\" cssclass=\"cell_fix\"/><Cell col=\"5\" text=\"bind:comboText\"/><Cell col=\"6\" text=\"bind:date\"/><Cell col=\"7\" text=\"bind:editControl\"/><Cell col=\"8\" text=\"bind:number\"/><Cell col=\"9\" text=\"bind:text\"/><Cell col=\"10\" text=\"bind:Column0\"/><Cell col=\"11\" text=\"bind:Column1\"/><Cell col=\"12\" text=\"bind:Column2\"/><Cell col=\"13\" text=\"bind:Column3\"/><Cell col=\"14\" text=\"bind:Column4\"/><Cell col=\"15\" text=\"bind:Column5\"/><Cell col=\"16\" text=\"bind:Column6\"/><Cell col=\"17\" text=\"bind:Column7\"/><Cell col=\"18\" text=\"bind:Column8\"/><Cell col=\"19\" text=\"bind:Column9\"/><Cell col=\"20\" text=\"bind:Column10\"/><Cell col=\"21\" text=\"bind:Column11\"/><Cell col=\"22\" text=\"bind:Column12\"/><Cell col=\"23\" text=\"bind:Column13\"/><Cell col=\"24\" text=\"bind:Column14\"/><Cell col=\"25\" text=\"bind:Column15\"/><Cell col=\"26\" text=\"bind:Column16\"/><Cell col=\"27\" text=\"bind:Column17\"/><Cell col=\"28\" text=\"bind:Column18\"/><Cell col=\"29\" text=\"bind:Column19\"/><Cell col=\"30\" text=\"bind:Column20\"/><Cell col=\"31\" text=\"bind:Column21\"/><Cell col=\"32\" text=\"bind:Column22\"/><Cell col=\"33\" text=\"bind:Column23\"/><Cell col=\"34\" text=\"bind:Column24\"/><Cell col=\"35\" text=\"bind:Column25\"/><Cell col=\"36\" text=\"bind:Column26\"/><Cell col=\"37\" text=\"bind:Column27\"/><Cell col=\"38\" text=\"bind:Column28\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","40","20","206","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("데이터복제");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","300","20","206","0",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("데이터복제");
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
        this.registerScript("grdsort.xfdl", function() {
        this.GridConfig = {
        	"popmenulist" : ["sort","colfix","rowfix","filter","filterNew","find","colhide","colhideNew","scroll","select","cellcopypaste","initial"],	// 전체 메뉴
        	"defaultmenulist" : ["sort","cellcopypaste"],	// default 메뉴
        	"sort" : 	{
        					sortTogleCancel		: true ,	// 헤더 클릭시 정렬 false= 오름/내림 true= 오름/내림/없음
        					ascText  			: "▲"  ,	// ascending text
        					descText 			: "▼"  ,	// descending text
        					cellInfo			: []		// 내부용
        				}
        };

        this.Button00_onclick = function(obj,e)
        {
        	const start = performance.now();
        	for(var i=0;i<60;i++) {
        		this.dsColfix.appendData(this.dsColfix00);
        	}
        	 const end = performance.now();
        	const elapsed = end - start;
        	const hours = Math.floor(elapsed / (1000 * 60 * 60));
          const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
          const milliseconds = Math.floor(elapsed % 1000);

          console.log(
            `실행 시간: ${hours}시간 ${minutes}분 ${seconds}초 ${milliseconds}ms`
          );
        	alert(this.dsColfix.rowcount);

        };

        this.Grid00_onheadclick = function(obj,e)
        {
        	var objGrid = this.Grid00;
        	var rtn = this._gfnGridSetSortStatus(objGrid, e.cell, false);
        	if (rtn) {
        		this._gfnGridExecuteSort(objGrid);
        	}
        };



        this.gfnIsNull = function(sValue)
        {
            if (new String(sValue).valueOf() == "undefined") return true;
            if (sValue == null) return true;

            var ChkStr = new String(sValue);

            if (ChkStr == null) return true;
            if (ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this._gfnGridGetBodyCellIndex = function(objGrid, nHeadCellIndex, bUseColspan)
        {
        	if (this.gfnIsNull(bUseColspan)) bUseColspan=false;

        	// Max Head Row Index
        	var nMaxHeadRow = 0;
        	for (var i=0, len=objGrid.getCellCount("head"); i<len; i++)
        	{
        		var row = objGrid.getCellProperty("head", i, "row");
        		if (nMaxHeadRow < row)
        		{
        			nMaxHeadRow = row;
        		}
        	}

        	// Max Body Row Index
        	var nMaxBodyRow = 0;
        	for (var i=0, len=objGrid.getCellCount("body"); i<len; i++)
        	{
        		var row = objGrid.getCellProperty("body", i, "row");
        		if (nMaxBodyRow < row)
        		{
        			nMaxBodyRow = row;
        		}
        	}

        	if (nMaxHeadRow == 0 && nMaxBodyRow == 0)
        	{
        		bUseColspan = true;
        	}

        	// Body Row 가 1개 이상일 경우
        	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
        	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
        	var nCellIndex = -1;
        	var sRow = -1;
        	var nRow = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "row"));
        	var nCol = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "col"));
        	var nColspan = parseInt(objGrid.getCellProperty("head", nHeadCellIndex, "colspan"));

        	if (nMaxHeadRow > nMaxBodyRow)
        	{
        		sRow = nRow - (nMaxHeadRow - nMaxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	} else
        	{
        		sRow = nRow;
        	}

        	var cRow, cCol, cColspan, cRowspan;

        	for (var i=0, len=objGrid.getCellCount("body"); i<len; i++)
        	{
        		cRow = parseInt(objGrid.getCellProperty("body", i, "row"));
        		cCol = parseInt(objGrid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(objGrid.getCellProperty("body", i, "colspan"));
        		cRowspan = parseInt(objGrid.getCellProperty("body", i, "rowspan"));
        		if( cRowspan > 1 )
        		{
        			if (bUseColspan)
        			{
        				if (sRow >= cRow && nCol <= cCol && cCol < (nCol + nColspan))
        				{
        					nCellIndex = i;
        					break;
        				}
        			} else
        			{
        				if (sRow >= cRow && nCol == cCol && nColspan == cColspan)
        				{
        					nCellIndex = i;
        					break;
        				}
        			}
        		} else
        		{
        			if (bUseColspan)
        			{
        				if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan))
        				{
        					nCellIndex = i;
        					break;
        				}
        			} else
        			{
        				if (sRow == cRow && nCol == cCol && nColspan == cColspan)
        				{
        					nCellIndex = i;
        					break;
        				}
        			}
        		}
        	}
        	return nCellIndex;
        };

        this.gfnGetBindColName = function(objGrid, nIndex)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = objGrid.getCellProperty("body", nIndex, "subcell");
        	if ( subCell > 0 )
        	{
        		text = objGrid.getSubCellProperty("body", nIndex, 0, "text");
        	} else
        	{
        		text = objGrid.getCellProperty("body", nIndex, "text");
        	}

        	if (!this.gfnIsNull(text) )
        	{
        		if ( text.search(/^BIND\(/) > -1 )
        		{
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		} else if ( text.search(/^bind:/) > -1 )
        		{
        			columnid = text.replace(/^bind:/, "");
        		}
        	}
        	return columnid;
        };

        this._gfnGridGetGridCellObject = function(objGrid, sBand, nIndex)
        {
        	// 내부속성을 통해 얻어온다.
        	var objCell;

        	var format = objGrid._curFormat;
        	if (format)
        	{
        		if (sBand == "head")
        		{
        			objCell = format._headcells[nIndex];
        		} else if (sBand == "body")
        		{
        			objCell = format._bodycells[nIndex];
        		} else if (sBand == "summ" || sBand == "summary")
        		{
        			objCell = format._summcells[nIndex];
        		}
        	}
        	return objCell;
        };

        this._gfnGridSetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus, bodyCellIndex)
        {
        	// head cell index 에 해당하는 body cell index
        	if( this.gfnIsNull(bodyCellIndex)){
        		bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, headCellIndex);
        	}
        	if ( bodyCellIndex < 0 ) return false;

        	// body cell index 에 해당하는 바인드 컬럼명
        	var columnName = this.gfnGetBindColName(grid, bodyCellIndex);
        	if (this.gfnIsNull(columnName)) {
        		trace("bind가 되지 않은 cell은 sort가 되지 않습니다.");
        		return false;
        	}

        	if ( this.gfnIsNull(isMultiple) ) isMultiple = false;
        	if ( this.gfnIsNull(sortStatus) ) sortStatus = -1;

        	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
        	if ( this.gfnIsNull(grid.sortInfos) ){
        		grid.sortInfos = {};
        	}

        	// 정렬대상컬럼 (순서중요)
        	if ( this.gfnIsNull(grid.sortItems) ){
        		grid.sortItems = [];
        	}

        	var sortInfos = grid.sortInfos,
        		sortItems = grid.sortItems,
        		sortInfo = sortInfos[columnName],
        		sortItem,
        		status;

        	if (this.gfnIsNull(sortInfo)) {
        		var headText = grid.getCellText(-1, headCellIndex);

        		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
        		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다.
        		var refCell = this._gfnGridGetGridCellObject(grid, "head", headCellIndex);
        		sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
        	}
        	// set sort status
        	if ( isMultiple ) {
        		status = sortInfo.status;
        		if ( sortStatus == -1 ) {
        			if ( status == 0 ) {
        				sortInfo.status = 1;
        			}
        			else if ( status == 1 ) {
        				sortInfo.status = 2;
        			}
        			else if ( status == 2 ) {
        				sortInfo.status = ( this.GridConfig.sort.sortTogleCancel ? 0 : 1);
        			}
        		}
        		else {
        			sortInfo.status = sortStatus;
        		}
        	}
        	else {
        		for (var p in sortInfos) {
        			if ( sortInfos.hasOwnProperty(p) )
        			{
        				sortInfo = sortInfos[p];
        				if ( p == columnName ) {
        					status = sortInfo.status;
        					if ( sortStatus == -1 ) {
        						if ( status == 0 ) {
        							sortInfo.status = 1;
        						}
        						else if ( status == 1 ) {
        							sortInfo.status = 2;
        						}
        						else if ( status == 2) {
        							sortInfo.status = ( this.GridConfig.sort.sortTogleCancel ? 0 : 1);
        						}
        					}else {
        						sortInfo.status = sortStatus;
        					}
        				}else {
        					sortInfo.status = 0;
        				}
        				if ( sortInfo.status == 0 ){
        					for (var j=0, len2=sortItems.length; j<len2; j++) {
        						if ( sortItems[j] !== columnName ) {
        							sortItems.splice(j, 1);
        							break;
        						}
        					}
        				}
        			}
        		}
        	}

        	// 컬럼정보 등록
        	var hasItem = false;
        	for (var i=0, len=sortItems.length; i<len; i++) {
        		if ( sortItems[i] == columnName ) {
        			hasItem = true;
        			break;
        		}
        	}
        	if (!hasItem) {
        		sortItems.push(columnName);
        	}
        	return true;
        };

        this.gfnDecode = function ()
        {
        	var varRtnValue = null;

        	var arrArgument = this.gfnDecode.arguments;
        	var varValue = arrArgument[0];
        	var bIsDefault = false;
        	var nCount = 0;

        	if ((arrArgument.length % 2) == 0)
        	{
        		nCount = arrArgument.length - 1;
        		bIsDefault = true;
        	}
        	else
        	{
        		nCount = arrArgument.length;
        		bIsDefault = false;
        	}

        	for (var i = 1; i < nCount; i += 2)
        	{
        		if (varValue == arrArgument[i])
        		{
        			varRtnValue = arrArgument[i + 1];
        			i = nCount;
        		}
        	}

        	if (varRtnValue == null && bIsDefault)
        	{
        		varRtnValue = arrArgument[arrArgument.length - 1];
        	}

        	return varRtnValue;
        };


        /**
        * @class 소트를 실행한다
        * @param {Object}  grid 대상 Grid Component
        * @return{String}  N/A
        * @example this._gfnGridExecuteSort(obj);
        */
        this._gfnGridExecuteSort = function(grid)
        {
        	var sortInfo,
        		sortItem,
        		sortInfos = grid.sortInfos,
        		sortItems = grid.sortItems,
        		columnName,
        		status,
        		cell,
        		sortString = "";

        	if ( this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems) ) return;

        	// keystring 조합
        	for (var i=0; i<sortItems.length; i++) {
        		columnName = sortItems[i];
        		sortInfo = sortInfos[columnName];
        		status = sortInfo.status;
        		cell = sortInfo.refCell;

        		// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
        		// 확인하여 없으면 제거해 준다.
        		if ( this.gfnIsNull(cell) || grid.getBindCellIndex("body", columnName) < 0 ){
        			// 컬럼정보제거
        			sortItems.splice(i, 1);
        			sortInfos[columnName] = null;
        			delete sortInfos[columnName];

        			i--;
        		}
        		else if ( status > 0 ) {
        			sortString += (status == 1 ? "+" : "-") + columnName;
        		}
        	}

        	var ds = grid.getBindDataset();

        	// keystring 확인
        	var curKeyString = ds.keystring;
        	var groupKeyString = "";

        	if (curKeyString.length > 0 && curKeyString.indexOf(",") < 0) {
        		var sIndex = curKeyString.indexOf("S:");
        		var gIndex = curKeyString.indexOf("G:");

        		if (sIndex > -1) {
        			groupKeyString = "";
        		}
        		else {
        			if (gIndex < 0) {
        				groupKeyString = "G:"+curKeyString;
        			}
        			else {
        				groupKeyString = curKeyString;
        			}
        		}
        	}
        	else {
        		var temps = curKeyString.split(",");
        		var temp;
        		for (var i=0,len=temps.length; i<len; i++) {
        			temp = temps[i];
        			if (temp.length > 0 && temp.indexOf("S:") < 0) {
        				if (temp.indexOf("G:") < 0) {
        					groupKeyString = "G:"+temp;
        				}
        				else {
        					groupKeyString = temp;
        				}
        			}
        		}
        	}

        	grid.set_enableredraw(false);

        	if (sortString.length > 0) {
        		var sortKeyString = "S:"+sortString;

        		if ( groupKeyString.length > 0 ) {
        			ds.set_keystring(groupKeyString + "," +  sortKeyString);
        		}
        		else {
        			ds.set_keystring(sortKeyString);
        		}

        		grid.sortKeyString = sortKeyString;
        	}
        	else {
        		ds.set_keystring(groupKeyString);
        		grid.sortKeyString = "";
        	}

        	// 정렬표시
        	var index, marker;
        	for (var p in sortInfos) {
        		if ( sortInfos.hasOwnProperty(p) )
        		{
        			sortInfo = sortInfos[p];
        			cell = sortInfo.refCell;
        			if ( cell )
        			{
        				index = cell._cellidx;
        				marker = this.gfnDecode(sortInfo.status, 1, this.GridConfig.sort.ascText, 2, this.GridConfig.sort.descText, "");
        				grid.setCellProperty( "head", index, "text", sortInfo.text + marker);
        			}
        		}
        	}

        	// rowposition을 최상단으로 이동 필요시
        	//ds.set_rowposition(0);

        	grid.set_enableredraw(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("grdsort.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
