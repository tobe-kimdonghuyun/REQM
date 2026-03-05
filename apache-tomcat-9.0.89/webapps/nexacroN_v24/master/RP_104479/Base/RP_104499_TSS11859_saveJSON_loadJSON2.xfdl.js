(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TSS11859_saveJSON_loadJSON");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("DataObject00", this);
            obj._setContents({
            	"id" : "Dataset00",
            	"ColumnInfo" : {
            		"Column" : [
            			{
            				"id" : "Column0",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column1",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column2",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column3",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column4",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column5",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column6",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column7",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column8",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column9",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column10",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column11",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column12",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column13",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column14",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column15",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column16",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column17",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column18",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column19",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column20",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column21",
            				"type" : "STRING",
            				"size" : "256"
            			},
            			{
            				"id" : "Column22",
            				"type" : "STRING",
            				"size" : "256"
            			}
            		]
            	},
            	"Rows" : [
            		{
            			"Column0" : "DA\nB",
            			"Column1" : "DA\\nB",
            			"Column2" : "DA\\\nB",
            			"Column3" : "DA\\\\nB",
            			"Column4" : "DA\\\\\nB",
            			"Column5" : "DA\tB",
            			"Column6" : "DA\\tB",
            			"Column7" : "DA\\\tB",
            			"Column8" : "DA\\\\tB",
            			"Column9" : "DA\\\\\tB",
            			"Column10" : "DA\"B",
            			"Column11" : "DA\\\"B",
            			"Column12" : "DA\r;B",
            			"Column13" : "DA\\rB",
            			"Column14" : "DA\\rB",
            			"Column15" : "DA\bB",
            			"Column16" : "DA\\bB",
            			"Column17" : "DA\fB",
            			"Column18" : "DA\\fB",
            			"Column19" : "DA\u0007B",
            			"Column20" : "DA\\u0007B",
            			"Column21" : "DA\u000AB",
            			"Column22" : "DA\\u000AB"
            		}
            	]
            });
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column8","type" : "STRING","size" : "256"},{"id" : "Column9","type" : "STRING","size" : "256"},{"id" : "Column10","type" : "STRING","size" : "256"},{"id" : "Column11","type" : "STRING","size" : "256"},{"id" : "Column12","type" : "STRING","size" : "256"},{"id" : "Column13","type" : "STRING","size" : "256"},{"id" : "Column14","type" : "STRING","size" : "256"},{"id" : "Column15","type" : "STRING","size" : "256"},{"id" : "Column16","type" : "STRING","size" : "256"},{"id" : "Column17","type" : "STRING","size" : "256"},{"id" : "Column18","type" : "STRING","size" : "256"},{"id" : "Column19","type" : "STRING","size" : "256"},{"id" : "Column20","type" : "STRING","size" : "256"},{"id" : "Column21","type" : "STRING","size" : "256"},{"id" : "Column22","type" : "STRING","size" : "256"},{"id" : "Column23","type" : "STRING","size" : "256"},{"id" : "Column24","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "DA\nB","Column1" : "DA\\nB","Column2" : "DA\\\\nB","Column3" : "DA\\\\\\nB","Column4" : "DA\\\\\\\\nB","Column5" : "DA\tB","Column6" : "DA\\tB","Column7" : "DA\\\\tB","Column8" : "DA\\\\\\tB","Column9" : "DA\\\\\\\\tB","Column10" : "DA\\\"B","Column11" : "DA\\\\\"B","Column12" : "DA\rB","Column13" : "DA\\rB","Column14" : "DA\\\\rB","Column15" : "DA\\bB","Column16" : "DA\\\\bB","Column17" : "DA\\fB","Column18" : "DA\\fB","Column19" : "DA\\u0007B","Column20" : "DA\\\\u0007B","Column21" : "DA\\u000AB","Column22" : "DA\\\\u000AB","Column23" : "DA\\/B","Column24" : "DA\\\\/B"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.set_binddataobject("DataObject00");
            obj.set_dataobjectpath("$.Rows[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","datapath" : "@.Column0","type" : "STRING","size" : "256"},{"id" : "Column1","datapath" : "@.Column1","type" : "STRING","size" : "256"},{"id" : "Column2","datapath" : "@.Column2","type" : "STRING","size" : "256"},{"id" : "Column3","datapath" : "@.Column3","type" : "STRING","size" : "256"},{"id" : "Column4","datapath" : "@.Column4","type" : "STRING","size" : "256"},{"id" : "Column5","datapath" : "@.Column5","type" : "STRING","size" : "256"},{"id" : "Column6","datapath" : "@.Column6","type" : "STRING","size" : "256"},{"id" : "Column7","datapath" : "@.Column7","type" : "STRING","size" : "256"},{"id" : "Column8","datapath" : "@.Column8","type" : "STRING","size" : "256"},{"id" : "Column9","datapath" : "@.Column9","type" : "STRING","size" : "256"},{"id" : "Column10","datapath" : "@.Column10","type" : "STRING","size" : "256"},{"id" : "Column11","datapath" : "@.Column11","type" : "STRING","size" : "256"},{"id" : "Column12","datapath" : "@.Column12","type" : "STRING","size" : "256"},{"id" : "Column13","datapath" : "@.Column13","type" : "STRING","size" : "256"},{"id" : "Column14","datapath" : "@.Column14","type" : "STRING","size" : "256"},{"id" : "Column15","datapath" : "@.Column15","type" : "STRING","size" : "256"},{"id" : "Column16","datapath" : "@.Column16","type" : "STRING","size" : "256"},{"id" : "Column17","datapath" : "@.Column17","type" : "STRING","size" : "256"},{"id" : "Column18","datapath" : "@.Column18","type" : "STRING","size" : "256"},{"id" : "Column19","datapath" : "@.Column19","type" : "STRING","size" : "256"},{"id" : "Column20","datapath" : "@.Column20","type" : "STRING","size" : "256"},{"id" : "Column21","datapath" : "@.Column21","type" : "STRING","size" : "256"},{"id" : "Column22","datapath" : "@.Column22","type" : "STRING","size" : "256"},{"id" : "Column23","type" : "STRING","size" : "256","datapath" : "@.Column23"},{"id" : "Column24","type" : "STRING","size" : "256","datapath" : "@.Column24"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"},{"id" : "Column8","type" : "STRING","size" : "256"},{"id" : "Column9","type" : "STRING","size" : "256"},{"id" : "Column10","type" : "STRING","size" : "256"},{"id" : "Column11","type" : "STRING","size" : "256"},{"id" : "Column12","type" : "STRING","size" : "256"},{"id" : "Column13","type" : "STRING","size" : "256"},{"id" : "Column14","type" : "STRING","size" : "256"},{"id" : "Column15","type" : "STRING","size" : "256"},{"id" : "Column16","type" : "STRING","size" : "256"},{"id" : "Column17","type" : "STRING","size" : "256"},{"id" : "Column18","type" : "STRING","size" : "256"},{"id" : "Column19","type" : "STRING","size" : "256"},{"id" : "Column20","type" : "STRING","size" : "256"},{"id" : "Column21","type" : "STRING","size" : "256"},{"id" : "Column22","type" : "STRING","size" : "256"},{"id" : "Column23","type" : "STRING","size" : "256"},{"id" : "Column24","type" : "STRING","size" : "256"}]},"Rows" : []});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","11","15","129","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Load JSON String : ");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLoadJSONString","130","10","1340","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("{\"id\":\"Dataset00\",\"ColumnInfo\":{\"Column\":[{\"id\":\"Column0\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column2\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column3\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column4\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column5\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column6\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column7\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column8\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column9\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column10\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column11\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column12\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column13\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column14\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column15\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column16\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column17\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column18\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column19\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column20\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column21\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column22\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column23\",\"type\":\"STRING\",\"size\":\"256\"},{\"id\":\"Column24\",\"type\":\"STRING\",\"size\":\"256\"}]},\"Rows\":[{\"Column0\":\"A\\nB\",\"Column1\":\"A\\\\nB\",\"Column2\":\"A\\\\\\nB\",\"Column3\":\"A\\\\\\\\nB\",\"Column4\":\"A\\\\\\\\\\nB\",\"Column5\":\"A\\tB\",\"Column6\":\"A\\\\tB\",\"Column7\":\"A\\\\\\tB\",\"Column8\":\"A\\\\\\\\tB\",\"Column9\":\"A\\\\\\\\\\tB\",\"Column10\":\"A\\\"B\",\"Column11\":\"A\\\\\\\"B\",\"Column12\":\"A\\rB\",\"Column13\":\"A\\\\rB\",\"Column14\":\"A\\\\\\rB\",\"Column15\":\"A\\bB\",\"Column16\":\"A\\\\bB\",\"Column17\":\"A\\fB\",\"Column18\":\"A\\\\fB\",\"Column19\":\"A\\u0007B\",\"Column20\":\"A\\\\u0007B\",\"Column21\":\"A\\nB\",\"Column22\":\"A\\\\u000AB\",\"Column23\":\"A\\/B\",\"Column24\":\"A\\\\/B\"}]}");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","221","1420","99",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"61\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"58\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"52\"/></Rows><Band id=\"head\"><Cell text=\"\\n(LF)\"/><Cell col=\"1\" text=\"\\\\n\"/><Cell col=\"2\" text=\"\\\\\\n\"/><Cell col=\"3\" text=\"\\\\\\\\n\"/><Cell col=\"4\" text=\"\\\\\\\\\\n\"/><Cell col=\"5\" text=\"\\t(TAB)\"/><Cell col=\"6\" text=\"\\\\t\"/><Cell col=\"7\" text=\"\\\\\\t\"/><Cell col=\"8\" text=\"\\\\\\\\t\"/><Cell col=\"9\" text=\"\\\\\\\\\\t\"/><Cell col=\"10\" text=\"\\&quot;\"/><Cell col=\"11\" text=\"\\\\\\&quot;\"/><Cell col=\"12\" text=\"\\r(CR)\"/><Cell col=\"13\" text=\"\\\\r\"/><Cell col=\"14\" text=\"\\\\\\r\"/><Cell col=\"15\" text=\"\\b\"/><Cell col=\"16\" text=\"\\\\b\"/><Cell col=\"17\" text=\"\\f\"/><Cell col=\"18\" text=\"\\\\f\"/><Cell col=\"19\" text=\"\\u0007\"/><Cell col=\"20\" text=\"\\\\u0007\"/><Cell col=\"21\" text=\"\\u000A\"/><Cell col=\"22\" text=\"\\\\u000A\"/><Cell col=\"23\" text=\"\\/\"/><Cell col=\"24\" text=\"\\\\/\"/></Band><Band id=\"body\" font=\"12px/normal &quot;JetBrains Mono NL&quot;\"><Cell text=\"bind:Column0\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:Column1\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:Column2\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:Column3\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:Column4\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:Column5\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:Column6\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:Column7\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:Column8\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:Column9\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:Column10\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:Column11\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:Column12\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:Column13\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:Column14\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"bind:Column15\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" text=\"bind:Column16\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" text=\"bind:Column17\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"18\" text=\"bind:Column18\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"19\" text=\"bind:Column19\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"20\" text=\"bind:Column20\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"21\" text=\"bind:Column21\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"22\" text=\"bind:Column22\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"23\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\" text=\"bind:Column23\"/><Cell col=\"24\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\" text=\"bind:Column24\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","30","490","1420","100",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"61\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"58\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"52\"/></Rows><Band id=\"head\"><Cell text=\"\\n(LF)\"/><Cell col=\"1\" text=\"\\\\n\"/><Cell col=\"2\" text=\"\\\\\\n\"/><Cell col=\"3\" text=\"\\\\\\\\n\"/><Cell col=\"4\" text=\"\\\\\\\\\\n\"/><Cell col=\"5\" text=\"\\t(TAB)\"/><Cell col=\"6\" text=\"\\\\t\"/><Cell col=\"7\" text=\"\\\\\\t\"/><Cell col=\"8\" text=\"\\\\\\\\t\"/><Cell col=\"9\" text=\"\\\\\\\\\\t\"/><Cell col=\"10\" text=\"\\&quot;\"/><Cell col=\"11\" text=\"\\\\\\&quot;\"/><Cell col=\"12\" text=\"\\r(CR)\"/><Cell col=\"13\" text=\"\\\\r\"/><Cell col=\"14\" text=\"\\\\\\r\"/><Cell col=\"15\" text=\"\\b\"/><Cell col=\"16\" text=\"\\\\b\"/><Cell col=\"17\" text=\"\\f\"/><Cell col=\"18\" text=\"\\\\f\"/><Cell col=\"19\" text=\"\\u0007\"/><Cell col=\"20\" text=\"\\\\u0007\"/><Cell col=\"21\" text=\"\\u000A\"/><Cell col=\"22\" text=\"\\\\u000A\"/><Cell col=\"23\" text=\"\\/\"/><Cell col=\"24\" text=\"\\\\/\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:Column1\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:Column2\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:Column3\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:Column4\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:Column5\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\" text=\"bind:Column6\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:Column7\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"8\" text=\"bind:Column8\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"9\" text=\"bind:Column9\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"10\" text=\"bind:Column10\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"11\" text=\"bind:Column11\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"12\" text=\"bind:Column12\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"13\" text=\"bind:Column13\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"14\" text=\"bind:Column14\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"15\" text=\"bind:Column15\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"16\" text=\"bind:Column16\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"17\" text=\"bind:Column17\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"18\" text=\"bind:Column18\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"19\" text=\"bind:Column19\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"20\" text=\"bind:Column20\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"21\" text=\"bind:Column21\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"22\" text=\"bind:Column22\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"23\" text=\"bind:Column23\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/><Cell col=\"24\" text=\"bind:Column24\" font=\"9px/normal &quot;Meiryo&quot;,&quot;Verdana&quot;,&quot;Roboto&quot;,&quot;Droid Sans&quot;,&quot;游ゴシック&quot;,&quot;YuGothic&quot;,&quot;ヒラギノ角ゴ ProN W3&quot;,&quot;Hiragino Kaku Gothic ProN&quot;,&quot;ＭＳ Ｐゴシック&quot;,&quot;MS Gothic&quot;,&quot;sans-serif&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoadJSON01","0","90","250","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Dataset.loadJSON()");
            obj.set_background("orange");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONParseToLoadJSON","30","440","250","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("JSON.parse -> Dataobject.set_data()");
            obj.set_background("darkseagreen");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveJSON01","30","370","250","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Dataset.saveJSON()");
            obj.set_background("orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","11","658","129","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Save JSON String : ");
            this.addChild(obj.name, obj);

            obj = new TextArea("taSaveJSONString","130","653","1340","150",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Button("btnJSONStringify","30","590","250","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Dataobject.data -> JSON.stringify");
            obj.set_background("darkseagreen");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopySaveJSONStringToLoadJSONString","1470","10","110","793",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<<<---\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nCopy \r\n[Save \r\nJSON \r\nString]\r\n -> \r\n[Load \r\nJSON \r\nString]\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n--->>>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClearGridData","1235","371","215","120",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Clear Grid Data");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","30","320","1420","52",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"61\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"47\"/><Column size=\"58\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"\\n(LF)\"/><Cell col=\"1\" text=\"\\\\n\"/><Cell col=\"2\" text=\"\\\\\\n\"/><Cell col=\"3\" text=\"\\\\\\\\n\"/><Cell col=\"4\" text=\"\\\\\\\\\\n\"/><Cell col=\"5\" text=\"\\t(TAB)\"/><Cell col=\"6\" text=\"\\\\t\"/><Cell col=\"7\" text=\"\\\\\\t\"/><Cell col=\"8\" text=\"\\\\\\\\t\"/><Cell col=\"9\" text=\"\\\\\\\\\\t\"/><Cell col=\"10\" text=\"\\&quot;\"/><Cell col=\"11\" text=\"\\\\\\&quot;\"/><Cell col=\"12\" text=\"\\r(CR)\"/><Cell col=\"13\" text=\"\\\\r\"/><Cell col=\"14\" text=\"\\\\\\r\"/><Cell col=\"15\" text=\"\\b\"/><Cell col=\"16\" text=\"\\\\b\"/><Cell col=\"17\" text=\"\\f\"/><Cell col=\"18\" text=\"\\\\f\"/><Cell col=\"19\" text=\"\\u0007\"/><Cell col=\"20\" text=\"\\\\u0007\"/><Cell col=\"21\" text=\"\\u000A\"/><Cell col=\"22\" text=\"\\\\u000A\"/><Cell col=\"23\" text=\"\\/\"/><Cell col=\"24\" text=\"\\\\/\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/><Cell col=\"12\" text=\"bind:Column12\"/><Cell col=\"13\" text=\"bind:Column13\"/><Cell col=\"14\" text=\"bind:Column14\"/><Cell col=\"15\" text=\"bind:Column15\"/><Cell col=\"16\" text=\"bind:Column16\"/><Cell col=\"17\" text=\"bind:Column17\"/><Cell col=\"18\" text=\"bind:Column18\"/><Cell col=\"19\" text=\"bind:Column19\"/><Cell col=\"20\" text=\"bind:Column20\"/><Cell col=\"21\" text=\"bind:Column21\"/><Cell col=\"22\" text=\"bind:Column22\"/><Cell col=\"23\" text=\"bind:Column23\"/><Cell col=\"24\" text=\"bind:Column24\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnComparginGrid","410","372","280","118",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Comparing loadJSON and JSON.parse Grid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1600,900,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104499_TSS11859_saveJSON_loadJSON2.xfdl", function() {

        this.btnLoadJSON_onclick = function(obj,e)
        {
        	var sJSON = this.taLoadJSONString.value;
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	this.Dataset00.loadJSON(sJSON);
        };

        this.btnJSONParseToLoadJSON_onclick = function(obj,e)
        {
        	var sJSON = this.taLoadJSONString.value;
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	var oJSON = JSON.parse(sJSON);
        	this.DataObject00.set_data(oJSON);
        };


        this.btnSaveJSON01_onclick = function(obj,e)
        {
        	var sJSON = this.Dataset00.saveJSON();
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	this.taSaveJSONString.set_value(sJSON);
        };

        this.btnJSONStringify_onclick = function(obj,e)
        {
        	var oJSON = this.DataObject00.data;
        	var sJSON = JSON.stringify(oJSON);
        	trace("JSON String = [[[" + sJSON + "]]]\n");
        	this.taSaveJSONString.set_value(sJSON);
        };

        this.btnCopySaveJSONStringToLoadJSONString_onclick = function(obj,e)
        {
        	this.taLoadJSONString.set_value(this.taSaveJSONString.value);
        };

        this.btnClearGridData_onclick = function(obj,e)
        {
        	this.Dataset00.clearData();
        	this.Dataset01.clearData();
        	this.Dataset02.clearData();
        };

        this.btnComparginGrid_onclick = function(obj,e)
        {
        	this.Dataset02.clearData();
        	var nRow = this.Dataset02.addRow();
        	var sLoadJson, sJsonParse;
        	var iMaxCol = this.Dataset00.getColCount();
        	for(var i = 0; i <= iMaxCol; i++) {
        		var result = "";
        		var sColName = "Column" + i;
        		sLoadJson = this.Dataset00.getColumn(0, sColName);
        		sJsonParse = this.Dataset01.getColumn(0, sColName);
        		if(sLoadJson == sJsonParse) {
        			result = "OK";
        		} else {
        			result = "NG";
        		}
        		trace(sColName + " : [loadJSON:[[" + sLoadJson + "]]] == [JSON.parse:[[" + sJsonParse +"]]] = " + result);
        		this.Dataset02.setColumn(0, i, result);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnLoadJSON01.addEventHandler("onclick",this.btnLoadJSON_onclick,this);
            this.btnJSONParseToLoadJSON.addEventHandler("onclick",this.btnJSONParseToLoadJSON_onclick,this);
            this.btnSaveJSON01.addEventHandler("onclick",this.btnSaveJSON01_onclick,this);
            this.btnJSONStringify.addEventHandler("onclick",this.btnJSONStringify_onclick,this);
            this.btnCopySaveJSONStringToLoadJSONString.addEventHandler("onclick",this.btnCopySaveJSONStringToLoadJSONString_onclick,this);
            this.btnClearGridData.addEventHandler("onclick",this.btnClearGridData_onclick,this);
            this.btnComparginGrid.addEventHandler("onclick",this.btnComparginGrid_onclick,this);
        };
        this.loadIncludeScript("RP_104499_TSS11859_saveJSON_loadJSON2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
