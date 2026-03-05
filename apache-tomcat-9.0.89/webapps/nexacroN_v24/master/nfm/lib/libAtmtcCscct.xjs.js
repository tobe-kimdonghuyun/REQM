//XJS=libAtmtcCscct.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        //경영계획부 > 법정축적/연년생장률 자동계산 로직

        // 법정축적 자동계산
        this.requestCalculateByDmntTreeJS = function() {
        	var stlndArea = this.divAreaSkill.form.stlndArea.value;
        	// 입목지가 0인 경우
        	if (stlndArea == null || stlndArea == '') {
        		this.gfnAlert("입목지값이 지정되지 않았습니다.");
        		return true;
        	} else {
        		if (stlndArea == 0) {
        			this.dsMnfrsExmn.setColumn(0, "haPartySttyAccmnArea", 0.0);
        			this.dsMnfrsExmn.setColumn(0, "sttyAccmnTotlSum", 0);
        		} else {
        			// 우세목수고
        			var tDmtreTrhgh = this.dsMnfrsExmn.getColumn(0, "dmtreTrhgh");
        			if (tDmtreTrhgh == null || tDmtreTrhgh == '') {
        				var isLittle = this.isLittleForest();
        				if (isLittle == null || isLittle == 'N') {
        					this.gfnAlert("우세목수고값이 지정되지 않았습니다.");
        				}
        				return true;
        			}

        			var mostMixRt = 0.0; // 혼효율이 가장높은 수종
        			var tAvgAge = 0.0; // 평균임령
        			var tKoftrCd = null; // 수종

        			for (var i = 0; i < this.dsKoftrExmn.rowcount; i++) {
        				var mixRt = this.dsKoftrExmn.getColumn(i, "mixtrRt");

        				//console.log('mixRt' + mixRt);

        				if (mixRt != null) {
        					if (mostMixRt < mixRt) {
        						mostMixRt = mixRt;
        						tKoftrCd = this.dsKoftrExmn.getColumn(i, "koftrCd");
        						tAvgAge = this.dsKoftrExmn.getColumn(i, "avrgFrag");
        					}
        				}
        			}

        			if (tKoftrCd == null || tKoftrCd == '') {
        				this.gfnAlert("주요수종이 지정되지 않았습니다.");
        				return false;
        			}
        			//console.log('requestCalculateByDmntTreeJS 1');
        			if (tAvgAge == null || tAvgAge == '') {
        				this.gfnAlert("평균임령이 입력되지 않았습니다.");
        				return false;
        			}

        			//console.log('requestCalculateByDmntTreeJS getCalculator');

        			var calc = this.getCalculator(tKoftrCd);
        			var val = calc.calculateByDmntTree(tDmtreTrhgh, tAvgAge);
        			var haStty = this.roundXL(val, 2);
        			var haSttyTot = Number(haStty)* Number(this.divAreaSkill.form.areaTotal.value);

        			this.dsMnfrsExmn.setColumn(0, "haPartySttyAccmnArea", haStty);
        			this.dsMnfrsExmn.setColumn(0, "sttyAccmnTotlSum", this.roundXL(haSttyTot, 0));
        		}
        	}

        	//console.log('requestCalculateByDmntTreeJS END');
        }


        // 전체 주요수종 기준 치수림 여부 ( Y, N, null)
        this.isLittleForest = function() {

        	var rowNum = this.dsKoftrExmn.rowcount; //주요수종조사 row수
        	//$("table#tblKoftrExmnns > tbody > tr").size();
        	var isLittle = null;
        	if (rowNum > 0) { //row가1개이상
        		isLittle = "Y";
        		for (var i = 0; i < rowNum; i++) {
        			if (parseFloat(this.dsKoftrExmn.getColumn(i, "avrgDmtr")) > 6.0){
        				//$('input[name="mnfrsExmnn.koftrExmnns[' + i + '].avrgDmtr"]').val()) > 6.0) {
        				isLittle = "N";
        			}
        		}
        	}
        	return isLittle;
        }

        // 연년생장율 자동계산 요청
        this.requestCalculateCairt = function() {

        	var haPartyRealtAccmnArea = this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea");
        	var realtAccmnTotlSum = this.dsMnfrsExmn.getColumn(0, "realtAccmnTotlSum");

        	if (haPartyRealtAccmnArea == null || haPartyRealtAccmnArea == '') {
        		this.gfnAlert("현실축적값이 입력되지 않았습니다.");
        		return false;
        	}

        	var lctnDaddr = '';
        	if (this.dsSbltLctn.rowcount > 0) {
        		lctnDaddr = this.dsSbltLctn.getColumn(0, "lctnDaddr");
        	}

        	if (lctnDaddr == null || lctnDaddr == '') {
        		this.gfnAlert("소반소재지가 지정되지 않았습니다.");
        		return false;
        	}

        	var tFrtpTpcd = this.dsMnfrsExmn.getColumn(0, "frtpTpcd"); //임상구분코드
        	if (tFrtpTpcd == null || tFrtpTpcd == '') {
        		this.gfnAlert("임상이 선택되지 않았습니다.");
        		return false;
        	}

        	// 혼효율이 가장높은 수종
        	var mostMixRt = 0.0;
        	// 평균임령
        	var tAvgAge = 0.0;
        	// 수종
        	for (var idx = 0; idx < this.dsKoftrExmn.rowcount; idx++) {

        		var mixRt = this.dsKoftrExmn.getColumn(idx, "mixtrRt");
        		if (mixRt != null) {

        			if (mostMixRt < mixRt) {

        				mostMixRt = mixRt;
        				tKoftrCd = this.dsKoftrExmn.getColumn(idx, "koftrCd");
        				tAvgAge = this.dsKoftrExmn.getColumn(idx, "avrgFrag");
        			}
        		}
        	};

        	if (tAvgAge == null && tAvgAge == '') {
        		this.gfnAlert("평균임령이 입력되지 않았습니다.");
        		return false;
        	}

        	var strSvcId    = "requestCalculateByAnnualGrowthRate";
        	var strSvcUrl   = "nfm/wplbk/requestCalculateCairt.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "frtpTpcd="+tFrtpTpcd+" lctnDaddr="+lctnDaddr+" avgAge="+tAvgAge;
        	var callBackFnc = "requestCalculateCairtCallback";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync, 		// 비동기통신 여부 [생략가능]
        						3);				// nDataType :: 3(JSON)
        };

        // 연년생장율 자동계산 요청 콜백
        this.requestCalculateCairtCallback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) { return; }

        	if (this.cairt != null) {

        		var cairt = this.roundXL(parseFloat(this.cairt), 1);

        		var haPartyRealtAccmnArea = this.dsMnfrsExmn.getColumn(0, "haPartyRealtAccmnArea");
        		//생장률
        		this.dsMnfrsExmn.setColumn(0, "cairt", cairt);
        		//ha당 연간생장량
        		this.dsMnfrsExmn.setColumn(0, "haPartyCanin", this.roundXL(parseFloat(haPartyRealtAccmnArea) * parseFloat(cairt) / 100, 0));
        		// 연간생장량
        		var realtAccmnTotlSum = this.dsMnfrsExmn.getColumn(0, "realtAccmnTotlSum");
        		this.dsMnfrsExmn.setColumn(0, "caninTotlSum", this.roundXL(parseFloat(realtAccmnTotlSum) * parseFloat(cairt) / 100, 0));
        	}
        }

        /**
         * 수종별 축척 계산기 생성
         */
        this.getCalculator = function(koftrCd) {

        	var calc = new Object();

        	calc.type = 'NVCQuercusMongolica';

        	// 수종코드와 계산기 맵핑
        	var nvcMap = this.newMap();
        	// 강원지방소나무 : 강원, 경북 북부(영주, 봉화, 울진, 양양) 지방
        	nvcMap.put('NVCGangwonPine', ['11005']);
        	// 중부지방소나무 : 강원지방소나무 적용지역 이외
        	nvcMap.put('NVCJungbuPine', ['11001','11006','11997']);
        	// 잣나무
        	nvcMap.put('NVCPinusKoraiensis', ['11019']);
        	// 낙엽송 : 전나무
        	nvcMap.put('NVCLarch', ['11017','11022']);
        	// 리기다소나무
        	nvcMap.put('NVCPinusRigida', ['11002']);
        	// 상수리나무 : 굴참나무, 고로쇠나무, 굴피나무, 물오리나무, 물푸레나무,
        	// 아까시나무, 오리나무, 음나무, 자작나무, 층층나무
        	nvcMap.put('NVCOak', ['12017','12005','12025','12015','12064','12009','12068','12070','12076']);
        	// 편백 : 삼나무
        	nvcMap.put('NVCChamaecyparisObtusa', ['11015','11016']);

        	var koftrArr = ['NVCGangwonPine','NVCJungbuPine','NVCPinusKoraiensis','NVCLarch','NVCPinusRigida','NVCOak','NVCChamaecyparisObtusa'];
        	for (var i = 0; i < koftrArr.length; i++) {
        		var key = koftrArr[i];
        		var arr = nvcMap.get(key);
        		for (var j = 0; j < arr.length; j++) {
        			var kCode = arr[j];

        			if (kCode.toString() == koftrCd.toString()) {

        				calc.type = key;
        				break;
        			}
        		}
        	}

        	calc.volumeExp = this.GetExpOf(calc.type);

        	switch (calc.type) {
        		case 'NVCGangwonPine':
        			// 강원지방소나무
        			calc.mMinDBHParam = [-5.5165069999999998, 0.71898200000000001, 30.147812999999999];
        			calc.mMaxDBHParam = [5.0687990000000003, 1.1099129999999999, 0.16676099999999999];
        			calc.mDbhSdParam = [-0.024771999999999999, 0.198686];
        			calc.mHeightParamByDBH = [0.71719200000000005, -0.029967000000000001, 0.64145799999999997, -0.357317];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return si * Math.pow((1.0 - Math.exp(-0.025295999999999999 * age)) / (1.0 - Math.exp(-0.75888)), 0.99947900000000001);
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.1919999999999999 * TreeHeight - 0.23208999999999999);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (0.2146459 + 0.030147 * si) * Math.pow(age, 0.96149499999999999);
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (36.540748000000001 + 1.663046 * si) * Math.pow(1.0 - Math.exp(-0.018027999999999999 * age), 0.84749399999999997);
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.75888)) / (1.0 - Math.exp(-0.025295999999999999 * age)), 0.99947900000000001));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {
        				var sq = '';
        		        var si_d = DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.75888)) / (1.0 - Math.exp(-0.025295999999999999 * age)), 0.99947900000000001);
        		        if(si_d < 13.0) {
        		        	sq = '\uD558';
        		        } else if(si_d >= 13.0 && si_d <= 15.0) {
        		        	sq = '\uC911';
        		        } else {
        		        	sq = '\uC0C1';
        		        }

        		        var si_i = Math.floor(si_d);
        		        if(si_i % 2 != 0) {
        		        	si_i++;
        		        }
        		        if(si_i < 12) {
        		        	si_i = 12;
        		        }
        		        else if(si_i > 16) {
        		        	si_i = 16;
        		        } else {

        		        }

        		        sq = si_i + '|' + sq;

        		        return sq;
        			};
        			break;
        		case 'NVCLarch':
        			// 낙엽송
        			calc.mMinDBHParam = [-9.2653379999999999, 0.86662099999999997, 52.524698999999998];
        			calc.mMaxDBHParam = [2.548489, 0.93588499999999997, 0.42921799999999999];
        			calc.mDbhSdParam = [-14.672465000000001, 0.20832600000000001];
        			calc.mHeightParamByDBH = [0.553118, 0.074057999999999999, 0.33120300000000003, 0.27499800000000002];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return si * Math.pow((1.0 - Math.exp(-0.038145999999999999 * age)) / (1.0 - Math.exp(-1.14438)), 1.0939410000000001);
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.1135900000000001 * TreeHeight - 0.10528999999999999);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (9.9704870000000003 + 1.2395860000000001 * si) * (1.0 - Math.exp(-0.005633 * Math.pow(age, 1.5246900000000001)));
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (27.045760000000001 + 0.66738699999999995 * si) * Math.exp(-5.6929569999999998 * Math.pow(age, -0.68369100000000005));
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(DmntTreeHeight * Math.pow((1.0 - Math.exp(-1.14438)) / (1.0 - Math.exp(-0.038145999999999999 * age)), 1.0939410000000001));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {

        				var sq = '';
        		        var si_d = DmntTreeHeight * Math.pow((1.0 - Math.exp(-1.14438)) / (1.0 - Math.exp(-0.038145999999999999 * age)), 1.0939410000000001);
        		        if(si_d < 19.0) {
        		        	sq = '\uD558';
        		        } else if(si_d >= 19.0 && si_d <= 23.0) {
        		        	sq = '\uC911';
        		        } else {
        		        	sq = '\uC0C1';
        		        }

        		        var si_i = Math.floor(si_d);
        		        if(si_i % 2 != 0) {
        		        	si_i++;
        		        }
        		        if(si_i < 16) {
        		        	si_i = 16;
        		        }
        		        else if(si_i > 26) {
        		        	si_i = 26;
        		        }
        		        sq = si_i + '|' + sq;

        		        return sq;
        			};
        			break;
        		case 'NVCPinusRigida':
        			// 리기다소나무
        			calc.mMinDBHParam = [-2.9439649999999999, 0.674346, 9.9615449999999992];
        			calc.mMaxDBHParam = [0.90792700000000004, 1.135365, 0.44046099999999999];
        			calc.mDbhSdParam = [-5.2540709999999997, 0.181203];
        			calc.mHeightParamByDBH = [0.61957600000000002, 0.044304000000000003, 0.44768000000000002, -0.035770999999999997];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return si * Math.pow((1.0 - Math.exp(-0.017964999999999998 * age)) / (1.0 - Math.exp(-0.53894999999999993)), 1.068454);
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.16171 * TreeHeight - 0.83467000000000002);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (0.31931199999999998 + 0.045005999999999997 * si) * Math.pow(age, 0.85270800000000002);
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (25.522862 + 1.3491519999999999 * si) * Math.exp(-7.3176709999999998 * Math.pow(age, -0.83279899999999996));
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.053391000000000001)) / (1.0 - Math.exp(-0.0017796999999999999 * age)), 0.89591659999999995));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {

        				var sq = '';

        		        var si_d = DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.053391000000000001)) / (1.0 - Math.exp(-0.0017796999999999999 * age)), 0.89591659999999995);
        		        if(si_d < 10.0) {
        		        	sq = '\uD558';
        		        } else if(si_d >= 11.0 && si_d <= 17.0) {
        		        	sq = '\uC911';
        		        } else {
        		        	sq = '\uC0C1';
        		        }

        		        var si_i = Math.floor(si_d);
        		        if(si_i % 2 != 0) {
        		        	si_i++;
        		        }
        		        if(si_i < 10) {
        		        	si_i = 10;
        		        } else if(si_i > 18) {
        		        	si_i = 18;
        		        } else {

        		        }

        		        sq = si_i + '|' + sq;
        		        return sq;
        			};
        			break;
        		case 'NVCOak':
        			// 상수리나무
        			calc.mMinDBHParam = [-14.258297000000001, 0.85078299999999996, 122.132682];
        			calc.mMaxDBHParam = [1.2707079999999999, 0.94795099999999999, 0.60553900000000005];
        			calc.mDbhSdParam = [5.5082940000000002, 0.175425];
        			calc.mHeightParamByDBH = [0.37935200000000002, 0.080703999999999998, 0.49132100000000001, 0.31484400000000001];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return si * Math.pow((1.0 - Math.exp(-0.0039252000000000002 * age)) / (1.0 - Math.exp(-0.117756)), 0.44586408999999999);
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.21549 * TreeHeight - 0.082530000000000006);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (0.883081 + 0.023185999999999998 * si) * Math.pow(age, 0.77017899999999995);
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (25.977841000000002 + 0.36070600000000003 * si) * (1.0 - Math.exp(-0.0073229999999999996 * Math.pow(age, 1.49746)));
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.117756)) / (1.0 - Math.exp(-0.0039252000000000002 * age)), 0.44586408999999999));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {

        				 var sq = '';
        			        var si_d = DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.117756)) / (1.0 - Math.exp(-0.0039252000000000002 * age)), 0.44586408999999999);
        			        if(si_d < 17.0) {
        			        	sq = '\uD558';
        			        } else if(si_d >= 17.0 && si_d <= 21.0) {
        			        	sq = '\uC911';
        			        } else {
        			        	sq = '\uC0C1';
        			        }

        			        var si_i = Math.floor(si_d);
        			        if(si_i % 2 != 0) {
        			        	si_i++;
        			        }
        			        if(si_i < 14) {
        			        	si_i = 14;
        			        } else if(si_i > 24) {
        			        	si_i = 24;
        			        }
        			        sq = si_i + '|' + sq;

        			        return sq;
        			};
        			break;
        		case 'NVCQuercusMongolica':
        			// 신갈나무
        			calc.mMinDBHParam = [0.83319399999999999, 0.43883100000000003, -9.8591409999999993];
        			calc.mMaxDBHParam = [7.8260329999999998, 1.7932239999999999, -0.39787800000000001];
        			calc.mDbhSdParam = [-10.066886999999999, 0.17780799999999999];
        			calc.mHeightParamByDBH = [0.25883200000000001, 0.108725, 0.33863500000000002, 0.76329899999999995];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return si * Math.pow((1.0 - Math.exp(-0.034148499999999998 * age)) / (1.0 - Math.exp(-1.0244549999999999)), 0.92405835000000003);
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.2808299999999999 * TreeHeight - 0.71691000000000005);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (56.540604999999999 + 0.46542800000000001 * si) * Math.pow(1.0 - Math.exp(-0.012433 * age), 1.210189);
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (28.017956000000002 + 0.74650700000000003 * si) * Math.pow(1.0 - Math.exp(-0.022235000000000001 * age), 0.62526199999999998);
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(DmntTreeHeight * Math.pow((1.0 - Math.exp(-1.0244549999999999)) / (1.0 - Math.exp(-0.034148499999999998 * age)), 0.92405835000000003));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {

        				var sq = '';
        		        var si_d = DmntTreeHeight * Math.pow((1.0 - Math.exp(-1.0244549999999999)) / (1.0 - Math.exp(-0.034148499999999998 * age)), 0.92405835000000003);

        		        if(si_d < 15.0) {
        		        	sq = '\uD558';
        		        } else if(si_d >= 15.0 && si_d <= 19.0) {
        		        	sq = '\uC911';
        		        } else {
        		        	sq = '\uC0C1';
        		        }

        		        var si_i = Math.floor(si_d);

        		        if(si_i % 2 != 0) {
        		        	si_i++;
        		        }

        		        if(si_i < 12) {
        		        	si_i = 12;
        		        } else if(si_i > 22) {
        		        	si_i = 22;
        		        }
        		        sq = si_i + '|' + sq;

        		        return sq;
        			};
        			break;
        		case 'NVCPinusKoraiensis':
        			// 잣나무
        			calc.mMinDBHParam = [-9.5356970000000008, 0.85365999999999997, 38.885258];
        			calc.mMaxDBHParam = [1.5686640000000001, 0.97823400000000005, 0.603271];
        			calc.mDbhSdParam = [2.4552770000000002, 0.167576];
        			calc.mHeightParamByDBH = [0.53475499999999998, 0.096598000000000003, 0.083773, 0.63683400000000001];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return si * Math.pow((1.0 - Math.exp(-0.022055000000000002 * age)) / (1.0 - Math.exp(-0.66165000000000007)), 1.0808279999999999);
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.10463 * TreeHeight - 0.19062000000000001);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (23.038674 + 1.2052160000000001 * si) * (1.0 - Math.exp(-0.0070190000000000001 * Math.pow(age, 1.371737)));
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (16.586145999999999 + 2.095666 * si) * Math.exp(-10.310245999999999 * Math.pow(age, -0.84441500000000003));
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.66165000000000007)) / (1.0 - Math.exp(-0.022055000000000002 * age)), 1.0808279999999999));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {

        				var sq = '';
        		        var si_d = DmntTreeHeight * Math.pow((1.0 - Math.exp(-0.66165000000000007)) / (1.0 - Math.exp(-0.022055000000000002 * age)), 1.0808279999999999);
        		        if(si_d < 13.0) {
        		        	sq = '\uD558';
        		        } else if(si_d >= 13.0 && si_d <= 17.0) {
        		        	sq = '\uC911';
        		        } else {
        		        	sq = '\uC0C1';
        		        }

        		        var si_i = Math.floor(si_d);
        		        if(si_i % 2 != 0) {
        		        	si_i++;
        		        }
        		        if(si_i < 12) {
        		        	si_i = 12;
        		        }
        		        else if(si_i > 20) {
        		        	si_i = 20;
        		        }
        		        sq = si_i + '|' + sq;

        		        return sq;
        			};
        			break;
        		case 'NVCJungbuPine':
        			// 중부지방소나무
        			calc.mMinDBHParam = [-1.894525, 0.56962800000000002, 13.711524000000001];
        			calc.mMaxDBHParam = [3.4945930000000001, 1.135165, 0.32431199999999999];
        			calc.mDbhSdParam = [-8.3583510000000008, 0.19692499999999999];
        			calc.mHeightParamByDBH = [0.65166000000000002, -0.014696000000000001, 0.57077, -0.22833100000000001];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return si * Math.pow((1.0 - Math.exp(-0.04828317 * age)) / (1.0 - Math.exp(-1.4484950999999999)), 1.43596057);
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.2458499999999999 * TreeHeight - 0.19617000000000001);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (18.139790000000001 + 1.7180550000000001 * si) * (1.0 - Math.exp(-0.0075859999999999999 * Math.pow(age, 1.243363)));
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (16.984435999999999 + 1.5442340000000001 * si) * Math.pow(1.0 - Math.exp(-0.109731 * age), 7.0397670000000003);
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(DmntTreeHeight * Math.pow((1.0 - Math.exp(-1.4484950999999999)) / (1.0 - Math.exp(-0.04828317 * age)), 1.43596057));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {

        				var sq = "";
        		        var si_d = DmntTreeHeight * Math.pow((1.0 - Math.exp(-1.4484950999999999)) / (1.0 - Math.exp(-0.04828317 * age)), 1.43596057);

        		        if(si_d < 11.0) {
        		        	sq = '\uD558';
        		        } else if(si_d >= 11.0 && si_d <= 17.0) {
        		        	sq = '\uC911';
        		        } else {
        		        	sq = '\uC0C1';
        		        }

        		        var si_i = Math.floor(si_d);
        		        if(si_i % 2 != 0) {
        		        	si_i++;
        		        }
        		        if(si_i < 10) {
        		        	si_i = 10;
        		        } else if(si_i > 18) {
        		        	si_i = 18;
        		        } else {

        		        }
        		        sq = si_i + '|' + sq;

        		        return sq;
        			};
        			break;
        		case 'NVCChamaecyparisObtusa':
        			// 편백나무
        			calc.mMinDBHParam = [-3.9055249999999999, 0.72467999999999999, 22.716840000000001];
        			calc.mMaxDBHParam = [-0.060810000000000003, 1.172631, 0.33497199999999999];
        			calc.mDbhSdParam = [-6.8691430000000002, 0.18468100000000001];
        			calc.mHeightParamByDBH = [0.61901300000000004, 0.028156, 0.34329100000000001, 0.11390400000000001];

        			calc.GetMinDBHParam = function(i) {
        				return this.mMinDBHParam[i];
        			};
        			calc.GetMaxDBHParam = function(i) {
        				return this.mMaxDBHParam[i];
        			};
        			calc.GetDbhSdParam = function(i) {
        				return this.mDbhSdParam[i];
        			};
        			calc.GetHeightParamByDBH = function(i) {
        				return this.mHeightParamByDBH[i];
        			};
        			calc.GetDominantHeight = function(si, age) {
        				return Math.exp(Math.log(si) - 16.326943 * (1.0 / age - 0.033333333333333333));
        			};
        			calc.GetDominantHeight = function(TreeHeight) {
        				return (1.1824300000000001 * TreeHeight - 0.43091000000000002);
        			};
        			calc.GetMeanDBH = function(si, age) {
        				return (27.050388999999999 + 1.8792450000000001 * si) * Math.exp(-7.1191338000000002 * Math.pow(age, -0.52412700000000001));
        			};
        			calc.GetTotalBasalArea = function(si, age) {
        				return (14.295256999999999 + 3.807436 * si) * Math.exp(-7.0271559999999997 * Math.pow(age, -0.60742300000000005));
        			};
        			calc.GetSiteIndex = function(DmntTreeHeight, age) {
        				return Math.round(Math.exp(Math.log(DmntTreeHeight) - 16.326943 * (0.033333333333333333 - 1.0 / age)));
        			};
        			calc.GetSiteQuality = function(DmntTreeHeight, age) {

        				var sq = '';
        		        var si_d = Math.exp(Math.log(DmntTreeHeight) - 16.326943 * (0.033333333333333333 - 1.0 / age));
        		        if(si_d < 11.0) {
        		        	sq = '\uD558';
        		        } else if(si_d >= 11.0 && si_d <= 17.0) {
        		        	sq = '\uC911';
        		        } else {
        		        	sq = '\uC0C1';
        		        }

        		        var si_i = Math.floor(si_d);

        		        if(si_i % 2 != 0) {
        		        	si_i++;
        		        }
        		        if(si_i < 10) {
        		        	si_i = 10;
        		        } else if(si_i > 18) {
        		        	si_i = 18;
        		        } else {

        		        }
        		        sq = si_i + '|' + sq;

        		        return sq;
        			};
        			break;
        		default:
        			return null;
        			break;
        	}

        	calc.CalcGamma = function(x) {
        	    return Math.exp((Math.log((((((0.011240582657165399 / (x + 5.0003589884831898) + 0.502197227033921)
        	    		/ (x + 3.9999966300007501) + 2.0962955353894999) / (x + 3.00000004672652) + 2.2502304753561799)
        	    		/ (x + 1.9999999996201001) + 0.85137081316503405) / (x + 1.0000000000006599) + 0.12242597732688)
        	    		/ x + 0.0056360656189756103) + (x - 0.5) * Math.log(x + 6.09750757539069)) - x);
        	};

        	/**
        	 * 지위지수와 임령에 따른 법정축적 계산
        	 * @param si	지위지수
        	 * @param age	임령
        	 * @return		법정축적()
        	 * @throws DefaultException
        	 */
        	calc.CalculateBySI = function(si, age) {
                var Domh = this.GetDominantHeight(si, age);
                var Mean_Dp = this.GetMeanDBH(si, age);
                var MeanBA_p = Math.pow(Mean_Dp / 2.0, 2.0) * 3.1415926535897931;
                var BA_p = this.GetTotalBasalArea(si, age);
                var N_p = BA_p / (MeanBA_p / 10000.0);
                var Min_Dp = this.GetMinDBHParam(0) + this.GetMinDBHParam(1) * Mean_Dp + this.GetMinDBHParam(2) / Domh;
                var Max_Dp = this.GetMaxDBHParam(0) + this.GetMaxDBHParam(1) * Mean_Dp + this.GetMaxDBHParam(2) * Domh;
                var STD_Dp = this.GetDbhSdParam(0) + this.GetDbhSdParam(1) * (Math.pow(Max_Dp, 2.0) - Math.pow(Min_Dp, 2.0));
                var cp = Math.pow((Min_Dp - 1.0) / 2.0, 2.0) * 3.1415926535897931;
                var Z2 = STD_Dp / (MeanBA_p - cp);
                var b2 = Z2 * (1.0 + Math.pow(1.0 - Z2, 2.0) * ((((-0.22004032000000001 - 0.001433169 * Z2) + 0.15061138099999999 * Math.pow(Z2, 2.0)) - 0.078575995999999995 * Math.pow(Z2, 3.0) - 0.0043057160000000002 * Math.pow(Z2, 4.0)) + 0.0088049440000000003 * Math.pow(Z2, 5.0)));
                var bp = 1.0 / b2;
                var ap1 = this.CalcGamma(1.0 + 1.0 / bp);
                var ap = Math.pow(ap1 / (MeanBA_p - cp), bp);
                var sumVol = 0.0;
                var oldFxp = 0.0;
                for(var i = 1; i <= 34; i++) {
                    var X = Math.pow((i * 2.0 + 1.0) / 2.0, 2.0) * 3.1415926535897931;
                    var fxp;
                    if(X < cp) {
                        fxp = 0.0;
                    } else {
                        var c_p = Math.exp(-ap * Math.pow(X - cp, bp));
                        fxp = 1.0 - c_p;
                    } if(fxp > 0.0) {
                        var ndp;
                        if(i == 1) {
                        	ndp = N_p * fxp;
                        } else {
                        	ndp = N_p * (fxp - oldFxp);
                        	if (ndp < 0.0) ndp = 0.0;
                        }
                        var Ht = Domh * (this.GetHeightParamByDBH(0) + (this.GetHeightParamByDBH(1) / Domh) * age + this.GetHeightParamByDBH(2) * Math.log(fxp + 1.0) + (this.GetHeightParamByDBH(3) / age) * Domh * Math.log(fxp + 1.0));
                        sumVol += this.volumeExp.CalcVolume(i * 2, Ht) * ndp;
                    }
                    oldFxp = fxp;
                }

                return sumVol;
            };

        	/**
        	 * 특정 우세목 수종의 경급, 나이에 따른 법정축적 계산
        	 * param koftrCd 	수종코드
        	 * param Domh 	경급
        	 * param age		임령
        	 */
        	calc.calculateByDmntTree = function(Domh, age) {

        		var si = this.GetSiteIndex(Domh, age);
        	        var Mean_Dp = this.GetMeanDBH(si, age);
        	        var MeanBA_p = Math.pow(Mean_Dp / 2.0, 2.0) * 3.1415926535897931;
        	        var BA_p = this.GetTotalBasalArea(si, age);
        	        var N_p = BA_p / (MeanBA_p / 10000.0);
        	        var Min_Dp = this.GetMinDBHParam(0) + this.GetMinDBHParam(1) * Mean_Dp + this.GetMinDBHParam(2) / Domh;
        	        var Max_Dp = this.GetMaxDBHParam(0) + this.GetMaxDBHParam(1) * Mean_Dp + this.GetMaxDBHParam(2) * Domh;
        	        var STD_Dp = this.GetDbhSdParam(0) + this.GetDbhSdParam(1) * (Math.pow(Max_Dp, 2.0) - Math.pow(Min_Dp, 2.0));
        	        var cp = Math.pow((Min_Dp - 1.0) / 2.0, 2.0) * 3.1415926535897931;
        	        var Z2 = STD_Dp / (MeanBA_p - cp);
        	        var b2 = Z2 * (1.0 + Math.pow(1.0 - Z2, 2) * ((((-0.22004032000000001 - 0.001433169 * Z2)
        	        				+ 0.15061138099999999 * Math.pow(Z2, 2.0)) - 0.078575995999999995 * Math.pow(Z2, 3.0)
        	        				- 0.0043057160000000002 * Math.pow(Z2, 4.0)) + 0.0088049440000000003 * Math.pow(Z2, 5.0)));
        	        var bp = 1.0 / b2;
        	        var ap1 = this.CalcGamma(1.0 + 1.0 / bp);
        	        var ap = Math.pow(ap1 / (MeanBA_p - cp), bp);
        	        var sumVol = 0.0;
        	        var oldFxp = 0.0;
        	        for(var i = 1; i <= 34; i++) {
        	            var X = Math.pow((i * 2.0 + 1.0) / 2.0, 2.0) * 3.1415926535897931;
        	            var fxp;
        	            if(X < cp) {
        	                fxp = 0.0;
        	            } else {
        	                var c_p = Math.exp(-ap * Math.pow(X - cp, bp));
        	                fxp = 1.0 - c_p;
        	            }
        	            if(fxp > 0.0) {
        	                var ndp;
        	                if(i == 1) {
        	                	ndp = N_p * fxp;
        	                } else {
        	                	ndp = N_p * (fxp - oldFxp);
        	                	if (ndp < 0.0) ndp = 0.0;
        	                }
        	                var Ht = Domh * (this.GetHeightParamByDBH(0) + (this.GetHeightParamByDBH(1) / Domh)
        	                				* age + this.GetHeightParamByDBH(2) * Math.log(fxp + 1.0)
        	                				+ (this.GetHeightParamByDBH(3) / age) * Domh * Math.log(fxp + 1.0));

        	                sumVol += this.volumeExp.CalcVolume(i * 2, Ht) * ndp;
        	            }
        	            oldFxp = fxp;
        	        }

        	        return sumVol;
        	};

        	return calc;
        }

        this.newMap = function() {
        	var map = {};
        	map.value = {};
        	map.getKey = function(id) {
        		return "k+"+id;
        	};
        	map.put = function(id, value) {
        		var key = map.getKey(id);
        		map.value[key] = value;
        	};
        	map.contains = function(id) {
        		var key = map.getKey(id);
        		if (map.value[key]) {
        			return true;
        		} else {
        			return false;
        		}
        	};
        	map.get = function(id) {
        		var key = map.getKey(id);
        		if (map.value[key]) {
        			return map.value[key];
        		}
        		return null;
        	};
        	map.remove = function(id) {
        		var key = map.getKey(id);
        		if (map.contains(id)) {
        			map.value[key] = undefined;
        		};

        	};
        	return map;
        };

        this.GetExpOf = function(calcType) {

        	// 수정 시 VolumeExp.java 파일의 GetExpOf(NormalVolumeCalculator nvc) 함수의 수치와 동일하게 반영하여야 함
        	// 2018.08.06 - appfac

        	var exp;

        	if (calcType != '') {

        		exp = new Object();

        		switch (calcType) {

        			case 'NVCGangwonPine':

        				// 강원지방소나무
        				exp.mA1 = 1.07417;
        				exp.mA2 = 0.89683;
        				exp.mA3 = 1.00127;
        				exp.mA4 = -0.01228;
        				exp.mA5 = -0.1073;
        				exp.mA6 = 0.47141;
        				exp.mA7 = 0.12325;
        				exp.mA8 = -0.02205;
        				exp.mB1 = 0.13261000000000001;
        				exp.mB2 = 0.41548000000000002;
        				exp.mB3 = 0.41045999999999999;
        				exp.mB4 = 0.64783999999999997;
        				exp.mB5 = 11.10356;
        				exp.mP = 0.3;
        				break;
        			case 'NVCLarch':
        				// 낙엽송
        				exp.mA1 = 0.9655;
        				exp.mA2 = 0.9773;
        				exp.mA3 = 0.9984;
        				exp.mA4 = 0.5759;
        				exp.mA5 = -0.0877;
        				exp.mA6 = 0.3327;
        				exp.mA7 = -0.101;
        				exp.mA8 = 0.1207;
        				exp.mB1 = 0.13150000000000001;
        				exp.mB2 = 0.68520000000000003;
        				exp.mB3 = 0.0041999999999999997;
        				exp.mB4 = 1.464;
        				exp.mB5 = 7.7464000000000004;
        				exp.mP = 0.25;
        				break;
        			case 'NVCPinusRigida':
        				// 리기다소나무
        				exp.mA1 = 1.017;
        				exp.mA2 = 0.961;
        				exp.mA3 = 1;
        				exp.mA4 = -0.092;
        				exp.mA5 = 0.001;
        				exp.mA6 = -0.724;
        				exp.mA7 = 0.524;
        				exp.mA8 = 0.0508;
        				exp.mB1 = 0.13908599999999999;
        				exp.mB2 = 0.79835299999999998;
        				exp.mB3 = 0.57418800000000003;
        				exp.mB4 = 0.246479;
        				exp.mB5 = 4.3707260000000003;
        				exp.mP = 0.2;
        				break;
        			case 'NVCOak':
        				// 상수리나무
        				exp.mA1 = 1.096;
        				exp.mA2 = 0.917;
        				exp.mA3 = 0.999;
        				exp.mA4 = 0.183;
        				exp.mA5 = -0.083;
        				exp.mA6 = 0.141;
        				exp.mA7 = 0.131;
        				exp.mA8 = 0.0393;
        				exp.mB1 = 0.32696900000000001;
        				exp.mB2 = 0.58194500000000005;
        				exp.mB3 = 1.6714819999999999;
        				exp.mB4 = -0.27738699999999999;
        				exp.mB5 = 8.3129639999999991;
        				exp.mP = 0.25;
        				break;
        			case 'NVCQuercusMongolica':
        				// 신갈나무
        				exp.mA1 = 1.1996;
        				exp.mA2 = 0.9141;
        				exp.mA3 = 0.9985;
        				exp.mA4 = 1.3612;
        				exp.mA5 = -0.3368;
        				exp.mA6 = 2.2859;
        				exp.mA7 = -1.1220;
        				exp.mA8 = 0.1378;
        				exp.mB1 = 0.16758300000000001;
        				exp.mB2 = 0.889208;
        				exp.mB3 = -0.0048110000000000002;
        				exp.mB4 = 1.6935180000000001;
        				exp.mB5 = 3.3115199999999998;
        				exp.mP = 0.25;
        				break;
        			case 'NVCPinusKoraiensis':
        				// 잣나무
        				exp.mA1 = 1.0332;
        				exp.mA2 = 0.937;
        				exp.mA3 = 0.9998;
        				exp.mA4 = 0.6748;
        				exp.mA5 = -0.1551;
        				exp.mA6 = 1.018;
        				exp.mA7 = -0.3671;
        				exp.mA8 = 0.0628;
        				exp.mB1 = 0.015376219999999999;
        				exp.mB2 = 1.1509791199999999;
        				exp.mB3 = 0.73026734999999998;
        				exp.mB4 = -0.21122879;
        				exp.mB5 = 0.21410392;
        				exp.mP = 0.3;
        				break;
        			case 'NVCJungbuPine':
        				// 중부지방소나무
        				exp.mA1 = 1.00454;
        				exp.mA2 = 0.92169;
        				exp.mA3 = 1.0009;
        				exp.mA4 = -0.17319;
        				exp.mA5 = -0.08764;
        				exp.mA6 = 0.40027;
        				exp.mA7 = 0.2271;
        				exp.mA8 = -0.04085;
        				exp.mB1 = 0.1696;
        				exp.mB2 = 0.3196;
        				exp.mB3 = 0.78259999999999996;
        				exp.mB4 = 0.39650000000000002;
        				exp.mB5 = 7.1151;
        				exp.mP = 0.3;
        				break;
        			case 'NVCChamaecyparisObtusa':
        				// 편백나무
        				exp.mA1 = 0.9880;
        				exp.mA2 = 0.9900;
        				exp.mA3 = 0.9980;
        				exp.mA4 = 1.140;
        				exp.mA5 = -0.2380;
        				exp.mA6 = 1.2980;
        				exp.mA7 = -0.6970;
        				exp.mA8 = 0.1400;
        				exp.mB1 = 0.20204026;
        				exp.mB2 = 0.51528262000000002;
        				exp.mB3 = 0.015912820000000001;
        				exp.mB4 = 1.04633333;
        				exp.mB5 = 3.0809289;
        				exp.mP = 0.2;
        				break;
        			default:
        				exp = null;
        				break;
        		}

        		/**
        		 * 축적 계산
        		 * exp			수종에 따른 수치정보
        		 * dbh		경급
        		 * height		수고
        		 */
        		exp.CalcVolume = function(dbh, height) {

        			if(dbh <= 0.0 || height <= 0.0) return null;

        		    var h_0 = 0.20000000000000001;
        		    var Z_0 = h_0 / height;
        		    var X_0 = (1.0 - Math.sqrt(h_0 / height)) / (1.0 - Math.sqrt(exp.mP));
        		    var d_0 = this.mA4 * Math.pow(Z_0, 2.0) + this.mA5 * Math.log(Z_0 + 0.001) + this.mA6 * Math.sqrt(Z_0) + this.mA7 * Math.exp(Z_0) + this.mA8 * (dbh / height);
        		    var d_h_0 = this.mA1 * Math.pow(dbh, this.mA2) * Math.pow(this.mA3, dbh) * Math.pow(X_0, d_0);
        		    var Bark_0 = this.mB1 * Math.pow(d_h_0, this.mB2) + this.mB3 * Math.pow(dbh, this.mB4) * Math.pow(1.0 - Z_0, this.mB5);
        		    var u_d_h_0 = d_h_0 - Bark_0;
        		    var h_e = height - 0.10000000000000001;
        		    var Z_e = h_e / height;
        		    var X_e = (1.0 - Math.sqrt(h_e / height)) / (1.0 - Math.sqrt(this.mP));
        		    var d_e = this.mA4 * Math.pow(Z_e, 2.0) + this.mA5 * Math.log(Z_e + 0.001) + this.mA6 * Math.sqrt(Z_e) + this.mA7 * Math.exp(Z_e) + this.mA8 * (dbh / height);
        		    var d_h_e = this.mA1 * Math.pow(dbh, this.mA2) * Math.pow(this.mA3, dbh) * Math.pow(X_e, d_e);
        		    var Bark_e = this.mB1 * Math.pow(d_h_e, this.mB2) + this.mB3 * Math.pow(dbh, this.mB4) * Math.pow(1.0 - Z_e, this.mB5);
        		    var u_d_h_e = d_h_e - Bark_e;
        		    var Volume_e = (((Math.pow(d_h_0, 2.0) * 3.1415926535897931) / 4.0 + (Math.pow(d_h_e, 2.0) * 3.1415926535897931) / 4.0) / 2.0) * 0.10000000000000001 * 0.0001;
        		    var b_Volume_e = (((Math.pow(u_d_h_0, 2.0) * 3.1415926535897931) / 4.0 + (Math.pow(u_d_h_e, 2.0) * 3.1415926535897931) / 4.0) / 2.0) * 0.10000000000000001 * 0.0001;
        		    var d_h1 = d_h_0 + 0.20000000000000001 * (d_h_0 - dbh);
        		    var Bark_n = this.mB1 * Math.pow(d_h1, this.mB2) + this.mB3 * Math.pow(dbh, this.mB4) * Math.pow(1.0, this.mB5);
        		    var u_d_h1 = d_h1 - Bark_n;
        		    var d_h2 = d_h_0 + 0.10000000000000001 * (d_h_0 - dbh);
        		    var Bark_n1 = this.mB1 * Math.pow(d_h2, this.mB2) + this.mB3 * Math.pow(dbh, this.mB4) * Math.pow(1.0 - 0.10000000000000001 / height, this.mB5);
        		    var u_d_h2 = d_h2 - Bark_n1;
        		    var Volume_n = (((Math.pow(d_h1, 2.0) * 3.1415926535897931) / 4.0 + (Math.pow(d_h2, 2.0) * 3.1415926535897931) / 4.0) / 2.0) * 0.10000000000000001 * 0.0001 + (((Math.pow(d_h_0, 2.0) * 3.1415926535897931) / 4.0 + (Math.pow(d_h2, 2.0) * 3.1415926535897931) / 4.0) / 2.0) * 0.10000000000000001 * 0.0001;
        		    var b_Volume_n = (((Math.pow(u_d_h1, 2.0) * 3.1415926535897931) / 4.0 + (Math.pow(u_d_h2, 2.0) * 3.1415926535897931) / 4.0) / 2.0) * 0.10000000000000001 * 0.0001 + (((Math.pow(u_d_h_0, 2.0) * 3.1415926535897931) / 4.0 + (Math.pow(u_d_h2, 2.0) * 3.1415926535897931) / 4.0) / 2.0) * 0.10000000000000001 * 0.0001;
        		    var totalBA = 0.0;
        		    var u_totalBA = 0.0;
        		    //
        		    var calC = 0.0;
        		    var tempH =  (height - 0.20000000000000001) * 10.0;

        		    /*2018.03.07 광주센터 확인 요청*/
        		    for(var H = 3.0; H <= tempH ; H++) {

        		        var h1 = H / 10.0;
        		        var Z = h1 / height;
        		        var X = (1.0 - Math.sqrt(h1 / height)) / (1.0 - Math.sqrt(this.mP));
        		        var D = this.mA4 * Math.pow(Z, 2.0) + this.mA5 * Math.log(Z + 0.001) + this.mA6 * Math.sqrt(Z) + this.mA7 * Math.exp(Z) + this.mA8 * (dbh / height);
        		        var d_h = this.mA1 * Math.pow(dbh, this.mA2) * Math.pow(this.mA3, dbh) * Math.pow(X, D);
        		        var Bark = this.mB1 * Math.pow(d_h, this.mB2) + this.mB3 * Math.pow(dbh, this.mB4) * Math.pow(1.0 - Z, this.mB5);
        		        var u_d_h = d_h - Bark;
        		        var BA = (Math.pow(d_h, 2.0) * 3.1415926535897931) / 4.0;
        		        totalBA = BA + totalBA;
        		        var u_BA = (Math.pow(u_d_h, 2.0) * 3.1415926535897931) / 4.0;
        		        u_totalBA = u_BA + u_totalBA;
        		    }
        		    calC = totalBA * 0.10000000000000001 * 0.0001 + Volume_e + ((3.1415926535897931 * Math.pow(d_h_e, 2.0)) / 4.0 / 3.0) * 0.10000000000000001 * 0.0001 + Volume_n;

        		    return calC;
        		};

        	} else {
        		exp = null;
        	}

        	return exp;
        }

        // 소수점 자리수 지정 함수 (반올림적용)
        this.roundXL = function(n, digits) {

        	if (digits >= 0)
        		return parseFloat(n.toFixed(digits)); // 소수부 반올림

        	digits = Math.pow(10, digits);
        	// 정수부 반올림
        	var t = Math.round(n * digits) / digits;

        	return parseFloat(t.toFixed(0));
        }

        // 기준목 index 반환
        this.getBaseTreeIndex = function()
        {
        	var size = this.dsKoftrExmn.rowcount;
        	if(size > 0){
        		// 주요수종이 하나만 있는 경우
        		if (size == 1) {
        			return 0;
        	}else{
        		// 주요수종이 2개 이상인 경우
        		var mixtrRtArr = new Array();
        		var avrgFragArr = new Array();
        		var avrgTrhghArr = new Array();
        		var avrgDmtrArr = new Array();

        		for (var i = 0; i < size; i++) {
        			mixtrRtArr.push(this.dsKoftrExmn.getColumn(i, "mixtrRt"));
        			avrgFragArr.push(this.dsKoftrExmn.getColumn(i, "avrgFrag"));
        			avrgTrhghArr.push(this.dsKoftrExmn.getColumn(i, "avrgTrhgh"));
        			avrgDmtrArr.push(this.dsKoftrExmn.getColumn(i, "avrgDmtr"));
        		}
        		// 혼요율이 가장 높은 수종
        			// 혼요율이 가장 높은 수종
        			var rst = this.getBiggerValue(mixtrRtArr);
        			if (rst > -1)
        				return rst;
        			// 수고가 가장 높은 수종
        			rst = this.getBiggerValue(avrgFragArr);
        			if (rst > -1)
        				return rst;
        			// 임령이 가장 높은 수종
        			rst = this.getBiggerValue(avrgTrhghArr);
        			if (rst > -1)
        				return rst;
        			// 경급이 가장 높은 수종
        			rst = this.getBiggerValue(avrgDmtrArr);
        			if (rst > -1)
        				return rst;
        			else
        				return 0;
        			// 위의 사항이 다 동일한 경우 1번째 인덱스 반환
        		}
        	}else{
        		return -1;
        	}
        };

        // 배열에서 가장 큰값의 인덱스 반환
        this.getBiggerValue = function(arr) {

        	var idx = 0;
        	var prev = 0;
        	var isSame = false;

        	for (var i = 0; i < arr.length; i++) {
        		if (prev < parseFloat(arr[i])) {
        			prev = parseFloat(arr[i]);
        			isSame = false;
        			idx = i;
        		} else if (prev == parseFloat(arr[i])) {
        			isSame = true;
        		} else {
        		}
        	}
        	if (isSame)
        		idx = -1;

        	return idx;
        }


        // 엑셀업로드시 법정축적 자동계산
        this.requestExcelCalculateByDmntTreeJS = function() {
        	for(var i = 0 ; i < this.dsWplbkVO.rowcount; i++){
        		var stlndArea = parseInt(this.dsWplbkVO.getColumn(i, "stlndArea"));
        		// 입목지가 0인 경우
        		if (stlndArea == null || stlndArea === '') {
        			this.gfnAlert("입목지값이 지정되지 않았습니다.");
        			return true;
        		} else {
        			if (stlndArea == 0) {
        				this.dsMnfrsExmn.setColumn(i, "haPartySttyAccmnArea", 0.0);
        				this.dsMnfrsExmn.setColumn(i, "sttyAccmnTotlSum", 0);
        			} else {
        				// 우세목수고
        				var tDmtreTrhgh = this.dsMnfrsExmn.getColumn(i, "dmtreTrhgh");
        				if (tDmtreTrhgh == null || tDmtreTrhgh === '') {
        					var isLittle = this.isLittleForest();
        					if (isLittle == null || isLittle == 'N') {
        						this.gfnAlert("우세목수고값이 지정되지 않았습니다.");
        					}
        					return true;
        				}

        				var mostMixRt = 0.0; // 혼효율이 가장높은 수종
        				var tAvgAge = 0.0; // 평균임령
        				var tKoftrCd = null; // 수종

        				for (var j = 0; j < this.dsKoftrExmn.rowcount; j++) {
        					var mixRt = this.dsKoftrExmn.getColumn(j, "mixtrRt");

        					//console.log('mixRt' + mixRt);

        					if (mixRt != null) {
        						if (mostMixRt < mixRt) {
        							mostMixRt = mixRt;
        							tKoftrCd = this.dsKoftrExmn.getColumn(j, "koftrCd");
        							tAvgAge = this.dsKoftrExmn.getColumn(j, "avrgFrag");
        						}
        					}
        				}

        				if (tKoftrCd == null || tKoftrCd == '') {
        					this.gfnAlert("주요수종이 지정되지 않았습니다.");
        					return false;
        				}
        				//console.log('requestCalculateByDmntTreeJS 1');
        				if (tAvgAge == null || tAvgAge === '') {
        					this.gfnAlert("평균임령이 입력되지 않았습니다.");
        					return false;
        				}

        				//console.log('requestCalculateByDmntTreeJS getCalculator');

        				var calc = this.getCalculator(tKoftrCd);
        				var val = calc.calculateByDmntTree(tDmtreTrhgh, tAvgAge);
        				var haStty = this.roundXL(val, 2);
        				var areaTotal = (parseFloat(this.dsWplbkVO.getColumn(i, "stlndArea")) + parseFloat(this.dsWplbkVO.getColumn(i, "blankArea")) + parseFloat(this.dsWplbkVO.getColumn(i, "nfrtldArea"))).toFixed(2);
        				var haSttyTot = Number(haStty)* Number(areaTotal);

        				this.dsMnfrsExmn.setColumn(i, "haPartySttyAccmnArea", haStty);
        				this.dsMnfrsExmn.setColumn(i, "sttyAccmnTotlSum", this.roundXL(haSttyTot, 0));
        			}
        		}

        		//console.log('requestCalculateByDmntTreeJS END');
        	}
        }

        // 연년생장율 자동계산 요청
        this.requestExcelCalculateCairt = function() {

        	for(var i = 0 ; i <this.dsMnfrsExmn.rowcount; i++){
        		var haPartyRealtAccmnArea = this.dsMnfrsExmn.getColumn(i, "haPartyRealtAccmnArea");
        		var realtAccmnTotlSum = this.dsMnfrsExmn.getColumn(i, "realtAccmnTotlSum");

        		if (haPartyRealtAccmnArea == null || haPartyRealtAccmnArea == '') {
        			this.gfnAlert("현실축적값이 입력되지 않았습니다.");
        			return true;
        		}

        		var lctnDaddr = '';
        		if (this.dsSbltLctn.rowcount > 0) {
        			lctnDaddr = this.dsSbltLctn.getColumn(i, "lctnDaddr");
        		}

        		if (lctnDaddr == null || lctnDaddr == '') {
        			this.gfnAlert("소반소재지가 지정되지 않았습니다.");
        			return true;
        		}

        		var tFrtpTpcd = this.dsMnfrsExmn.getColumn(i, "frtpTpcd"); //임상구분코드
        		if(this.dsWplbkVO.getColumn(i, "stlndArea") != '0'){
        			if (tFrtpTpcd == null || tFrtpTpcd == '') {
        				this.gfnAlert("임상이 선택되지 않았습니다.");
        				return true;
        			}
        		}

        		// 혼효율이 가장높은 수종
        		var mostMixRt = 0.0;
        		// 평균임령
        		var tAvgAge = 0.0;
        		// 수종
        		for (var idx = 0; idx < this.dsKoftrExmn.rowcount; idx++) {

        			var mixRt = this.dsKoftrExmn.getColumn(idx, "mixtrRt");
        			if (mixRt != null) {

        				if (mostMixRt < mixRt) {

        					mostMixRt = mixRt;
        					tKoftrCd = this.dsKoftrExmn.getColumn(idx, "koftrCd");
        					tAvgAge = this.dsKoftrExmn.getColumn(idx, "avrgFrag");
        				}
        			}
        		};

        		if (tAvgAge == null && tAvgAge == '') {
        			this.gfnAlert("평균임령이 입력되지 않았습니다.");
        			return true;
        		}

        		var strSvcId    = "requestCalculateByAnnualGrowthRate";
        		var strSvcUrl   = "nfm/wplbk/requestCalculateCairt.do";
        		var inData      = "";
        		var outData     = "";
        		var strArg      = "frtpTpcd="+tFrtpTpcd+" lctnDaddr="+lctnDaddr+" avgAge="+tAvgAge;
        		var callBackFnc = "requestExcelCalculateCairtCallback";
        		var isAsync   	= true;

        		this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        							strSvcUrl , 	// trabsaction을 요청할 주소
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc, 	// transaction의 결과를 받을 Function 이름
        							isAsync, 		// 비동기통신 여부 [생략가능]
        							3);				// nDataType :: 3(JSON)
        		}
        };

        // 연년생장율 자동계산 요청 콜백
        this.requestExcelCalculateCairtCallback = function(svcID,errorCode,errorMsg) {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0) { return; }

        	if (this.cairt != null) {

        		var cairt = this.roundXL(parseFloat(this.cairt), 1);
        		for(var i = 0 ; i < this.dsMnfrsExmn.rowcount; i++){
        			var haPartyRealtAccmnArea = this.dsMnfrsExmn.getColumn(i, "haPartyRealtAccmnArea");
        			//생장률
        			this.dsMnfrsExmn.setColumn(i, "cairt", cairt);
        			//ha당 연간생장량
        			this.dsMnfrsExmn.setColumn(i, "haPartyCanin", this.roundXL(parseFloat(haPartyRealtAccmnArea) * parseFloat(cairt) / 100, 0));
        			// 연간생장량
        			var realtAccmnTotlSum = this.dsMnfrsExmn.getColumn(0, "realtAccmnTotlSum");
        			this.dsMnfrsExmn.setColumn(i, "caninTotlSum", this.roundXL(parseFloat(realtAccmnTotlSum) * parseFloat(cairt) / 100, 0));
        		}
        	}
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
