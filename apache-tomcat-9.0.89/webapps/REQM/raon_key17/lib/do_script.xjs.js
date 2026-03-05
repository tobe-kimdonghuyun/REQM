//XJS=do_script.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        //등록된 ip인경우 본인인증 하지 않음
        this._isPassIp = false;

        //본인인증 패스 IP대역
        this.checkIpObj = ["172.16.30","172.16.31","172.16.40","172.16.41","172.16.42","172.16.43","192.168.10"];

        //본인인증 패스 IP대역 중 본인인증 필요한 IP
        this.checkIpObj2 = [
         "172.16.30.73"
        ,"172.16.30.77"
        ,"172.16.30.74"
        ,"172.16.31.167"
        ,"172.16.31.171"
        ,"172.16.30.32"
        ,"172.16.30.111"
        ,"172.16.12.28"
        ,"172.16.40.17"
        ,"172.16.40.190"
        ,"172.16.40.191"
        ,"172.16.40.192"
        ,"172.16.40.193"
        ,"172.16.40.194"
        ,"172.16.40.195"
        ,"172.16.40.196"
        ,"172.16.40.197"
        ,"172.16.40.198"
        ,"172.16.40.200"
        ,"172.16.40.201"
        ,"172.16.40.202"
        ,"172.16.40.203"
        ,"172.16.40.220"
        ,"172.16.40.221"
        ];

        //ip dataset 생성
        if (! this["ds_ipInfo"] ){
        	var _nDs = new Dataset("ds_ipInfo");
        	_nDs.addColumn("ip");
        	_nDs.addColumn("serverIp");
        	_nDs.set_useclientlayout(true);
        	this.addChild("ds_ipInfo", _nDs);
        }

        //service 등록
        if(this.dsService.findRowExpr("id=='select_Ip'") == -1 ){
        	var row = this.dsService.addRow();
        	this.dsService.setColumn(row,"id","select_Ip");
        	this.dsService.setColumn(row,"outDatasets","ds_ipInfo=resultMap");
        	this.dsService.setColumn(row,"url","edo_edo_mi02_010.do");
        	this.dsService.setColumn(row,"callback","fnTransCallback");
        	this.dsService.setColumn(row,"svctp","R");
        }

        if ( !this.fnTransCallback ){
        	this.fnTransCallback  = function(svcid,errcd,errmsg){
        		if(errcd < 0)
        		{
        			return;
        		}
        	};
        }

        //ip 검색 service 호출
        // 서비스 객체 생성
        this.smfSearchService("select_Ip")
        .run()
        // 콜백
        .callback(function(callbackParams){
        	if(callbackParams.errors) return;
        	var ip = this.ds_ipInfo.getColumn(0,"ip");
        	var ipArray = (ip.split(",")[0]).split(".");
        	ipArray.splice(3);
        	var ip2 = ipArray.join(".");
        	var serverIp = this.ds_ipInfo.getColumn(0,"serverIp");

        	if(this.checkIpObj.indexOf(ip2) > -1){
        		//인증 패스 대역중에 해당IP는 본인인증 필요함(서버가 local 서버인경우 체크하지 않음)
        		if(this.checkIpObj2.indexOf(ip) > -1 && serverIp != ip && serverIp.indexOf("localhost") == -1 ){
        			this._isPassIp = false;
        		}else{
        			this._isPassIp = true;
        		}
        	}

        	this._isPassIp = false;
        });

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
