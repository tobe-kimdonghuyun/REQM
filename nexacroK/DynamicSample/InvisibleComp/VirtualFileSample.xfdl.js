(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("VirtualFileSample");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_vflist", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "NO","size" : "5","type" : "string"},{"id" : "FILENAME","size" : "100","type" : "string"},{"id" : "FILESIZE","size" : "20","type" : "string"},{"id" : "TYPE","size" : "20","type" : "string"},{"id" : "CONTENT","size" : "500","type" : "string"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Static("stc_title","10","10","700","28",null,null,null,null,null,null,this);
            obj.set_color("#065f46");
            obj.set_font("bold 14 \'Malgun Gothic\'");
            obj.set_taborder("0");
            obj.set_text("[비가시적] VirtualFile 동적 생성 샘플");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_desc","10","44","1200","22",null,null,null,null,null,null,this);
            obj.set_color("#555555");
            obj.set_taborder("1");
            obj.set_text("new nexacro.VirtualFile() — WRE: 파일 드래그앤드롭으로 VirtualFile 획득 / NRE: 독립 생성 후 파일 R/W 가능");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_env_label","10","74","80","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("실행 환경:");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_env","95","74","300","28",null,null,null,null,null,null,this);
            obj.set_color("#1a56db");
            obj.set_font("bold 13 \'Malgun Gothic\'");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_createVF","10","110","170","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("VirtualFile 동적 생성");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_writeFile","190","110","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("파일 쓰기 (NRE)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_readFile","330","110","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일 읽기 (NRE)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_clear","470","110","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("VirtualFile 삭제");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_result","614","116","630","22",null,null,null,null,null,null,this);
            obj.set_color("#cc0000");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_dnd_title","10","152","700","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("9");
            obj.set_text("▼ 드래그앤드롭 영역 (파일을 여기에 놓으면 VirtualFile 동적 생성)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_dnd_area","10","176","620","120",null,null,null,null,null,null,this);
            obj.set_background("color:#f0f9ff");
            obj.set_color("#1a56db");
            obj.getSetter("ondragenter").set("stc_dnd_area_ondragenter");
            obj.getSetter("ondragleave").set("stc_dnd_area_ondragleave");
            obj.getSetter("ondrop").set("stc_dnd_area_ondrop");
            obj.set_taborder("10");
            obj.set_text("파일을 여기에 드래그앤드롭 하세요");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("stc_list_title","10","310","400","20",null,null,null,null,null,null,this);
            obj.set_color("#888888");
            obj.set_taborder("11");
            obj.set_text("▼ 획득된 VirtualFile 목록");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd_vflist","10","334","1250","300",null,null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_taborder("12");
            obj._setContents("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("VirtualFileSample.xfdl", function(nexacro, system, trace, environment, application) {

        var bVFCreated = false;
        var nVFCount   = 0;
        var sFilePath  = "C:\\Temp\\nexacro_vf_sample.txt";

        this.VirtualFileSample_onload = function(obj, e)
        {
            this.grd_vflist.set_binddataset("ds_vflist");
            this.grd_vflist.createFormat();

            // 실행 환경 감지
            var sEnv = (typeof system != "undefined" && system.osversion != "") ? "NRE (네이티브 런타임)" : "WRE (웹 브라우저)";
            this.stc_env.set_text(sEnv);
            if (sEnv.indexOf("NRE") >= 0) {
                this.stc_result.set_text("NRE 환경: new nexacro.VirtualFile()로 독립 생성 가능. 파일 쓰기/읽기 사용 가능.");
            } else {
                this.stc_result.set_text("WRE 환경: 드래그앤드롭으로만 VirtualFile 획득 가능. 파일 쓰기/읽기는 NRE 전용.");
            }
        };

        // ── VirtualFile 동적 생성 (NRE 전용 독립 생성) ─────────────────
        this.btn_createVF_onclick = function(obj, e)
        {
            if (bVFCreated) { this.stc_result.set_text("이미 VirtualFile이 생성되어 있습니다."); return; }

            // new nexacro.VirtualFile() 동적 생성
            var vf = new nexacro.VirtualFile("vf_sample", this);
            this.addChild("vf_sample", vf);
            vf.addEventHandler("onsuccess", this.vf_sample_onsuccess, this);
            vf.addEventHandler("onerror",   this.vf_sample_onerror,   this);

            bVFCreated = true;
            this.stc_result.set_text("✔ new nexacro.VirtualFile() 동적 생성 완료! id=vf_sample");
        };

        // ── 파일 쓰기 (NRE 전용) ──────────────────────────────────────
        this.btn_writeFile_onclick = function(obj, e)
        {
            var vf = this["vf_sample"];
            if (!vf) { this.stc_result.set_text("먼저 VirtualFile을 생성하세요."); return; }

            try {
                // NRE에서 텍스트 파일 쓰기
                var sContent = "nexacro VirtualFile 쓰기 테스트\n생성일시: " + nexacro.getDate("YYYY-MM-DD") + " " + nexacro.getTime("HH:MM:SS") + "\nnew nexacro.VirtualFile()으로 동적 생성됨";
                vf.open(sFilePath, "w");
                vf.write(sContent);
                vf.close();
                this.stc_result.set_text("✔ 파일 쓰기 완료: " + sFilePath);

                var r = this.ds_vflist.addRow();
                this.ds_vflist.setColumn(r, "NO",       ++nVFCount);
                this.ds_vflist.setColumn(r, "FILENAME",  sFilePath);
                this.ds_vflist.setColumn(r, "FILESIZE",  sContent.length + " bytes");
                this.ds_vflist.setColumn(r, "TYPE",      "쓰기");
                this.ds_vflist.setColumn(r, "CONTENT",   sContent.split("\n")[0]);
            } catch(ex) {
                this.stc_result.set_text("파일 쓰기 실패 (WRE에서는 지원하지 않음): " + ex);
            }
        };

        // ── 파일 읽기 (NRE 전용) ──────────────────────────────────────
        this.btn_readFile_onclick = function(obj, e)
        {
            var vf = this["vf_sample"];
            if (!vf) { this.stc_result.set_text("먼저 VirtualFile을 생성하세요."); return; }

            try {
                vf.open(sFilePath, "r");
                var sContent = vf.read();
                vf.close();
                this.stc_result.set_text("✔ 파일 읽기 완료: " + sContent.split("\n").length + "줄");

                var r = this.ds_vflist.addRow();
                this.ds_vflist.setColumn(r, "NO",       ++nVFCount);
                this.ds_vflist.setColumn(r, "FILENAME",  sFilePath);
                this.ds_vflist.setColumn(r, "FILESIZE",  sContent.length + " bytes");
                this.ds_vflist.setColumn(r, "TYPE",      "읽기");
                this.ds_vflist.setColumn(r, "CONTENT",   sContent.split("\n")[0]);
                this.alert("읽은 내용:\n" + sContent);
            } catch(ex) {
                this.stc_result.set_text("파일 읽기 실패 (WRE에서는 지원하지 않음): " + ex);
            }
        };

        // ── 드래그앤드롭 이벤트 (WRE에서 VirtualFile 획득) ───────────────
        this.stc_dnd_area_ondragenter = function(obj, e)
        {
            if (e.datatype == "file") {
                obj.set_background("color:#bfdbfe");
                obj.set_text("파일을 놓으세요!");
            }
        };

        this.stc_dnd_area_ondragleave = function(obj, e)
        {
            obj.set_background("color:#f0f9ff");
            obj.set_text("파일을 여기에 드래그앤드롭 하세요");
        };

        this.stc_dnd_area_ondrop = function(obj, e)
        {
            obj.set_background("color:#f0f9ff");
            obj.set_text("파일을 여기에 드래그앤드롭 하세요");

            if (e.datatype != "file") return;

            for (var i = 0; i < e.filelist.length; i++)
            {
                var vf = e.filelist[i];
                // VirtualFile 이벤트 핸들러 등록 후 파일 정보 조회
                vf.addEventHandler("onsuccess", this.dropVF_onsuccess, this);
                vf.getFileInfo();  // reason=9 에서 완료
            }
        };

        // 드래그앤드롭으로 획득한 VirtualFile 정보 표시
        this.dropVF_onsuccess = function(obj, e)
        {
            // reason == 9: 파일 정보 조회 완료
            if (e.reason != 9) return;

            nVFCount++;
            var r = this.ds_vflist.addRow();
            this.ds_vflist.setColumn(r, "NO",       nVFCount);
            this.ds_vflist.setColumn(r, "FILENAME",  obj.filename);
            this.ds_vflist.setColumn(r, "FILESIZE",  obj.filesize + " bytes");
            this.ds_vflist.setColumn(r, "TYPE",      "드래그앤드롭");
            this.ds_vflist.setColumn(r, "CONTENT",   "파일 획득 완료 (VirtualFile 동적 생성)");

            this.stc_result.set_text("✔ 드래그앤드롭으로 VirtualFile 획득: " + obj.filename + " (" + obj.filesize + " bytes)");
        };

        this.vf_sample_onsuccess = function(obj, e) { trace("[VF onsuccess] reason=" + e.reason); };
        this.vf_sample_onerror   = function(obj, e) { this.stc_result.set_text("VirtualFile 오류: " + e.errormsg); };

        this.btn_clear_onclick = function(obj, e)
        {
            var vf = this["vf_sample"];
            if (vf) { this.removeChild("vf_sample"); vf.destroy(); }
            this.ds_vflist.clearData();
            bVFCreated = false;
            nVFCount   = 0;
            this.stc_result.set_text("VirtualFile 삭제 완료. 목록 초기화.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.VirtualFileSample_onload,this);
            this.btn_createVF.addEventHandler("onclick",this.btn_createVF_onclick,this);
            this.btn_writeFile.addEventHandler("onclick",this.btn_writeFile_onclick,this);
            this.btn_readFile.addEventHandler("onclick",this.btn_readFile_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("VirtualFileSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=VirtualFileSample.xfdl.js.map
