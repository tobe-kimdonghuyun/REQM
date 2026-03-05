import dictionary from "./dictionary.js";
import grammar1 from "./grammar/Lookup.js";
import grammar2 from "./grammar/Lookup2.js";
import grammar3 from "./grammar/Lookup3.js";
import grammar4 from "./grammar/Lookup4.js";
import grammar5 from "./grammar/Lookup5.js";
import grammar6 from "./grammar/Lookup6.js";
import correctionDefault from "./correction/default.js";
import correctionEnglish from "./correction/english.js";
import correctionNumber from "./correction/number.js";
import correctionKorean from "./correction/korean.js";

const subscriptionKey = "25bfb17211d64444a674026084eb5c3b";
const serviceRegion = "koreacentral";
let speechSDK = "";

let speechConfig;
let audioConfig;
let recognizer;
let connection;
let phraseList;

let grammar;
let grammarIndex;
let grammarArray = null;
let grammarVowelArray = null;
let distance = 0;
let grammarVowelLength = 1;

let correction;

let audioStream = null;

let isContinueStt = true;

let startTime;
let endTime;
let period;

let convertStartTime;
let convertEndTime;
let convertPeriod;

// 초기화
export async function init() {
    try {
        speechSDK = window.SpeechSDK;
        setGrammar();
        setCorrection();
    
        setSpeechConfig();
        setAudioConfig();
    
        window.init = init;
        window.stt = stt;
        window.sttStop = sttStop;
    
        setMicrophone();
        setRecognizer();
    
        fnSendMessage("INIT", "init");
    } catch (error) {
        fnLog(e.stack, "init");
    }

};

// 마이크 셋팅
async function setMicrophone() {
    // add video constraints if required

    try {
        if (typeof audioStream === "undefined" || audioStream === null)
            audioStream = await navigator.mediaDevices.getUserMedia({audio: true});
        fnLog("[확인] 마이크 연결 완료.", "setMicrophone");
        return audioStream;
    } catch (error) {
        fnSttCallback({serviceId: "init", result: "", errorYn: "Y", error: error.name + "\n" + error.message + "\n" + error.stack});
    }
};

// 마이크 해제
function clearMicrophone() {
    try {
        if (typeof audioStream === "undefined" || audioStream === null) return;

        audioStream.getAudioTracks().forEach(track => track.stop());
        audioStream = null;
    } catch (error) {
        fnLog(e.stack, "clearMicrophone");
    }
};

// SpeechConfig 셋팅
function setSpeechConfig() {
    try {
        if (speechConfig == null) {
            speechConfig = speechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
            speechConfig.speechRecognitionLanguage = "ko-KR";
        }
    } catch (error) {
        fnLog(e.stack, "setSpeechConfig");
    }
};

// AudioConfig 셋팅
function setAudioConfig() {
    try {
        if (audioConfig == null)
            audioConfig = speechSDK.AudioConfig.fromDefaultMicrophoneInput();
    } catch (error) {
        fnLog(e.stack, "setAudioConfig");
    }
};

// Recognizer 셋팅
function setRecognizer() {
    try {
        if (typeof recognizer === "undefined" || recognizer === null) {
            recognizer = new speechSDK.SpeechRecognizer(speechConfig, audioConfig);

            recognizer.recognizing = (s, e) => {
                if(startTime == null) startTime = Date.now();

                console.log(`RECOGNIZING: Text=${e.result.text}`);
            };
            
            recognizer.recognized = (s, e) => {
                try {
                    if (e.result.reason == speechSDK.ResultReason.RecognizedSpeech) {

                        endTime = Date.now();
                        if(startTime != null){
                            period = (endTime - startTime) / 1000;
                            startTime = null;
                            //fnLog(""+ period, "[Azure]");     
                        }else{
                            period = -1;
                        }

                        convertStartTime = Date.now();
                        var txt = convert(e.result.text);
                        convertEndTime = Date.now();
                        convertPeriod = (convertEndTime - convertStartTime) / 1000;
                        //fnLog(""+ convertPeriod, "[Convert]");   

                        fnSttCallback({
                            serviceId: "stt",
                            result: txt,
                            distance: distance,
                            grammarVowelLength : grammarVowelLength,
                            resultPhrase: getDictionary(txt),
                            errorYn: "N",
                            log: logText,
                            grammarIndex: grammarIndex,
                            period : period,
                            convertPeriod : convertPeriod,
                        });
                        //fnLog(logText, "logText");
                    }
                    else if(e.result.reason == speechSDK.ResultReason.NoMatch){
                        startTime = null;
                        var noMatchDetail = speechSDK.NoMatchDetails.fromResult(e.result);
                        fnLog(`NoMatchReason: ${speechSDK.NoMatchReason[noMatchDetail.reason]}`, "[NoMatch]");
                    }else if(e.result.reason == speechSDK.ResultReason.Canceled){
                        startTime = null;
                        var canceledDetail = speechSDK.CancellationDetails.fromResult(e.result);
                        fnLog(`CanceledReason: ${canceledDetail.reason}`, "[CanceledReason]");   
                        if (canceledDetail.reason == speechSDK.CancellationReason.Error) {
                            fnLog(`CanceledReason ErrorDetail: ${canceledDetail.errorDetails}`, "[CanceledReason]"); 
                        }                     
                    }
                } catch (error) {
                    startTime = null;
                    fnLog(error.stack, "error");
                }
            };
            
            recognizer.canceled = (s, e) => {
                console.log(`CANCELED: Reason=${e.reason}`);
            
                if (e.reason == speechSDK.CancellationReason.Error) {
                    fnLog(`"CANCELED: ErrorCode=${e.errorCode}`, "stt error");
                    fnLog(`"CANCELED: ErrorDetails=${e.errorDetails}`, "stt error");
                }
            
                recognizer.stopContinuousRecognitionAsync(
                    () => {
                        clearRecognizer();
                        clearMicrophone();
                        fnSttCallback({serviceId: "stt", result: "", errorYn: "Y", error: e.stack, log: ""});
                    },
                    (err) => {
                        clearRecognizer();
                        clearMicrophone();
                        fnSttCallback({serviceId: "stt", result: "", errorYn: "Y", error: err.stack, log: ""});
                        fnLog(`"CANCELED: ErrorDetails=${err.errorDetails}`, "stt close error");
                    }
                );
            };
            
            recognizer.sessionStopped = (s, e) => {
                console.log("\n    Session stopped event.");
                recognizer.stopContinuousRecognitionAsync(
                    () => {
                        clearRecognizer();
                        clearMicrophone();
                        fnSttCallback({serviceId: "stt", result: "", errorYn: "Y", error: e.stack, log: ""});
                    },
                    (error) => {
                        clearRecognizer();
                        clearMicrophone();
                        fnSttCallback({serviceId: "stt", result: "", errorYn: "Y", error: error.stack, log: ""});
                    }
                );
            };
        }
        
        setPhraseList();
        setConnection(recognizer);
    } catch (error) {
        fnLog(e.stack, "setRecognizer");
    }
};

// Recognizer 해제
function clearRecognizer() {
    if (typeof recognizer === "undefined" || recognizer === null) return;

    recognizer.close();
    recognizer = undefined;
}

// PhraseList 셋팅
function setPhraseList() {
    try{
        if (phraseList == null) {
            phraseList = speechSDK.PhraseListGrammar.fromRecognizer(recognizer);

            for (let index = 1; index < grammarArray.length; index++) {
                phraseList.addPhrases(grammarArray[i]);
            }
        }
    } catch (error) {
        fnLog(e.stack, "setPhraseList");
    }
};

// Connection 셋팅
function setConnection(recognizer) {
    try{
        if (typeof connection === "undefined" || connection === null) {
            try {
                connection = speechSDK.Connection.fromRecognizer(recognizer);
                connection.setMessageProperty("speech.context", "phraseDetection", {
                    "INTERACTIVE": {
                        "segmentation": {
                            "mode": "custom",
                            "segmentationSilenceTimeoutMs": 150 // 묵음 기준 시간(ms)
                        }
                    },
                    mode: "Interactive"
                });
            } catch (error) {
                fnLog(error.stack, "setConnection");
            }
        }
    } catch (error) {
        fnLog(e.stack, "setConnection");
    }
};

// Grammar 셋팅
function setGrammar() {
    try{
        // grammar2 처리
        let grammar2Tmp = []; // 조합이 필수
        for (let i = 0; i < grammar2[0].length; i++) {
            for (let j = 0; j < grammar2[1].length; j++) {
                for (let k = 0; k < grammar2[2].length; k++) {
                    for (let l = 0; l < grammar2[3].length; l++) {
                        for (let m = 0; m < grammar2[4].length; m++) {
                            for (let n = 0; n < grammar2[5].length; n++) {
                                grammar2Tmp.push(grammar2[0][i] + " " + grammar2[1][j] + grammar2[2][k] + grammar2[3][l] + grammar2[4][m] + grammar2[5][n]);
                            }
                        }
                    }
                }
            }
        }

        // grammar2 처리 - Sydney + 넘겨/다음/넥스트 처리
        for (let i = 0; i < grammar2[0].length; i++) {
            for (let j = 0; j < grammar2[1].length; j++) {
                for (let k = 0; k < grammar2[2].length; k++) {
                    for (let l = 0; l < grammar2[3].length; l++) {
                        for (let m = 0; m < grammar2[4].length; m++) {
                            for (let n = 0; n < grammar2[5].length; n++) {
                                for (let o = 0; o < grammar2[6].length; o++) {
                                    grammar2Tmp.push(grammar2[0][i] + " " + grammar2[1][j] + grammar2[2][k] + grammar2[3][l] + grammar2[4][m] + grammar2[5][n] + " " + grammar2[6][o]);
                                }
                            }
                        }
                    }
                }
            }
        }

        // grammar4 처리
        let grammar4Tmp = []; // 조합이 필수
        for (let i = 0; i < grammar4[0].length; i++) {
            for (let j = 0; j < grammar4[1].length; j++) {
                grammar4Tmp.push(grammar4[0][i] + grammar4[1][j]);
            }
        }

        // grammar6 처리
        let grammar6Tmp = []; // 조합이 필수
        for (let i = 0; i < grammar6[0].length; i++) {
            for (let j = 0; j < grammar6[1].length; j++) {
                grammar6Tmp.push(grammar6[0][i] + grammar6[1][j]);
            }
        }

        try {
            grammar1.sort((a,b) => getConstantVowel(a).length - getConstantVowel(b).length);
            grammar2Tmp.sort((a,b) => getConstantVowel(a).length - getConstantVowel(b).length);
            grammar3.sort((a,b) => getConstantVowel(a).length - getConstantVowel(b).length);
            grammar4Tmp.sort((a,b) => getConstantVowel(a).length - getConstantVowel(b).length);
            grammar5.sort((a,b) => getConstantVowel(a).length - getConstantVowel(b).length);
            grammar6Tmp.sort((a,b) => getConstantVowel(a).length - getConstantVowel(b).length);
        } catch (error) {
            fnLog(error.stack, "[sort error]");
        }

        grammarArray = [[], grammar1, grammar2Tmp, grammar3, grammar4Tmp, grammar5, grammar6Tmp];

        grammarVowelArray = [[], [], [], [], [], [], []];

        for (let i = 1; i < grammarArray.length; i++) {
            for (let j = 0; j < grammarArray[i].length; j++) {
                grammarVowelArray[i].push(getConstantVowel(grammarArray[i][j]));
            }
        }
    } catch (error) {
        fnLog(e.stack, "setGrammar");
    }
};

function setCorrection() {
    correction = [correctionDefault, correctionNumber, correctionEnglish, correctionKorean];
}

// 전문의 테스트 결과, Grammar에 맞지 않는 경우 보정 
function doCorrection(inText) {
    correction.forEach(correctionJson => {
        for (const key in correctionJson) {
            if (Object.prototype.hasOwnProperty.call(correctionJson, key)) {
                inText = inText.replaceAll(key, correctionJson[key]);
            }
        }
    });

    return inText;
}

// 시드니 음성 명령 기능 개선
function doSydneyCorrection(inText) {
    // 진단문구 or Sydney + 넘겨/다음/넥스트 처리
    var nextText = "";

    if(/.+넘겨$/.test(inText)){     nextText = "넘겨"; }
    if(/.+다음$/.test(inText)){     nextText = "다음"; }
    if(/.+넥스트$/.test(inText)){   nextText = "넥스트"; }
    if(nextText){inText = inText.replaceAll(nextText, "").trim();}

    // 전문의 테스트 결과, 에스를 얘기 안 하는 경우가 많아 시드니 숫자만 얘기하는 경우 에스 추가
    if(/^[영일이삼구]+$/.test(inText)){
        inText = "에스" + inText;
    }

    // 전문의 테스트 결과, 시드니 입력 시 "에스"를 "엑스"로 발음하는 케이스가 꽤 많아 보정
    if(/^엑스[영일이삼구]+$/.test(inText)){
        inText.replace("엑스", "에스");
    }

    // 전문의 테스트 결과, 시드니 입력 시 "에스"를 "지금"으로 발음하는 케이스가 꽤 많아 보정
    if(/^지금[영일이삼구]+$/.test(inText)){
        inText.replace("지금", "에스");
    }

    // 시드니코드 9는 4번째 자리에만 올 수 있음
    if(/^에스[영일이삼구]+$/.test(inText) && inText.includes("구")){
        var sydneyCodeLeft = inText.substring(2, inText.indexOf("구"));
        var sydneyCodeRight = inText.substring(inText.indexOf("구"));
        var addZeroCountLeft = 3 - sydneyCodeLeft.length;
        var addZeroCountRight = 2 - sydneyCodeRight.length;
        for (let i = 0; i < addZeroCountLeft; i++) {
            sydneyCodeLeft = "영" + sydneyCodeLeft;
        }
        for (let i = 0; i < addZeroCountRight; i++) {
            sydneyCodeRight =  sydneyCodeRight + "영";
        }
        inText = "에스" + sydneyCodeLeft + sydneyCodeRight;
    }

    // 시드니코드 5자리 셋팅
    if(/^에스[영일이삼구]+$/.test(inText) && inText.length < 7){
        var sydneyCode = inText.substring(2);
        var addZeroCount = 5 - sydneyCode.length;
        for (let i = 0; i < addZeroCount; i++) {
            sydneyCode = "영" + sydneyCode;
        }
        inText = "에스" + sydneyCode;
    }

    // 시드니코드가 5자리 이상인 경우, 6번째부터 제거
    if(/^에스[영일이삼구]+$/.test(inText) && inText.length > 7){
        inText = inText.substring(0, 8);
    }

    // 시드니코드에 4번째 숫자 외에 "9"는 "0"으로 치환
    if(/^에스[영일이삼구]+$/.test(inText)){
        var sydneyNumber4 = inText.charAt(5);
        inText = inText.replaceAll("구", "영");
        inText = inText.substring(0, 5) + sydneyNumber4 + inText.charAt(6);
    }

    return inText + (nextText ? " " + nextText : "");
}

// 보정
function convert(sttOriginalResultText) {
    try{
        // 초기화
        var convertedAlphabetAndNumberToKorean = "인식불가";
        var mostSimilarTextFromGrammar = "인식불가";
        var tmp = "인식불가";

        if(!(typeof sttOriginalResultText === "undefined" || sttOriginalResultText === "undefined" || sttOriginalResultText === "")){
            convertedAlphabetAndNumberToKorean = convertAlphabetAndNumberToKorean(sttOriginalResultText);
            mostSimilarTextFromGrammar = getMostSimilarTextFromGrammar(convertedAlphabetAndNumberToKorean);
            tmp = mostSimilarTextFromGrammar;
        }

        var log = "Azure : " + sttOriginalResultText
            + "\nconvertAlphabetAndNumberToKorean : " + convertedAlphabetAndNumberToKorean
            + "\ngrammar : " + mostSimilarTextFromGrammar;
            //+ "\ndictionary : " + getDictionary(tmp) + "\n";

        fnSetLogText(log);
        // //fnLog("====================================", "convert");
        //fnLog(log, "convert");

        return tmp; // grammar만 리턴해달라고 요구, dictionary는 병리에서 관리(24.02.22)
    } catch (error) {
        fnLog(e.stack, "convert");
    }
};

// STT start
async function stt(isUserCallStt) {
    try {
        if(isUserCallStt == true) isContinueStt = true;

        if(!isContinueStt) return;
    
        await setMicrophone();
        await setRecognizer();
        // Start the continuous recognition/translation operation.
        recognizer.startContinuousRecognitionAsync();
    } catch (error) {
        fnLog(error.stack, "stt");
    }
};

// STT Stop
function sttStop() {
    try{
        fnLog("sttStop start", "sttStop");
        isContinueStt = false;
        recognizer.stopContinuousRecognitionAsync(
            () => {
                clearRecognizer();
                clearMicrophone();
                fnLog("success", "stt close success");
            },
            (err) => {
                clearRecognizer();
                clearMicrophone();
                fnLog(`"sttStop: ErrorDetails=${err.errorDetails}`, "stt close error");
            }
        );
    } catch (error) {
        fnLog(error.stack, "sttStop");
    }
}

// 단일 Grammar 타입에 대한 단어 유사도 체크
function checkSingleGrammar(grammarIndex, inTextVowel, resultObj) {
    try{
        if (typeof inTextVowel === "undefined" || inTextVowel === null)
            return resultObj;

        const grammarLength = grammarVowelArray[grammarIndex].length;
        let str;
        let tmpDistance;
        for (let j = 0; j < grammarLength; j++) {
            str = grammarVowelArray[grammarIndex][j];

            if(typeof str === "undefined" || str === null || str.length == 0) continue;

            // 글자 수 많이 차이나면 비교 자체를 하지 않도록 함.
            if(inTextVowel.length > 10 && inTextVowel.length * 2 < str.length)
                break;

            tmpDistance = new Levenshtein(str, inTextVowel).valueOf();
            if (tmpDistance < resultObj.mostSimilarDistance) {
                resultObj.mostSimilarDistance = tmpDistance;
                resultObj.mostSimilarText = grammarArray[grammarIndex][j];
                resultObj.mostSimilarGrammarIndex = grammarIndex;
                resultObj.grammarVowelLength = str.length;

                if (resultObj.mostSimilarDistance === 0) {
                    resultObj.isMatched = true;
                    break;
                }
            }
        }
        return resultObj;
    } catch (error) {
        fnLog(error.stack, "checkSingleGrammar");
    }
}

// 가장 유사한 Grammar 찾기
function getMostSimilarTextFromGrammar(inText) {
    try{
        let resultObj = {
            mostSimilarDistance: 99999,
            grammarVowelLength: 1,
            mostSimilarText: "",
            mostSimilarGrammarIndex: -1,
            isMatched: false
        };

        if (typeof inText === "undefined" || inText === "undefined" || inText === "") return "";

        const inTextVowel = getConstantVowel(inText);

        for (let i = 1; i < grammarArray.length; i++) {
            resultObj = checkSingleGrammar(i, inTextVowel, resultObj);
            
            if(resultObj.isMatched) break;
        }

        grammarIndex = resultObj.mostSimilarGrammarIndex;
        distance = resultObj.mostSimilarDistance;
        grammarVowelLength = resultObj.grammarVowelLength;

        if(resultObj.mostSimilarText == "정도관리저염" || resultObj.mostSimilarText == "정도관리절염색")
            resultObj.mostSimilarText = "정도관리저염색";

        if(resultObj.mostSimilarText == "정도관리적임")
            resultObj.mostSimilarText = "정도관리접힘";

        return resultObj.mostSimilarText;
    } catch (error) {
        fnLog(error.stack, "getMostSimilarTextFromGrammar");
    }
};

// 알파벳, 숫자의 한국어 변환 등 Azure 결과 텍스트 1차 보정
function convertAlphabetAndNumberToKorean(inText) {
    try{
        if (typeof inText === "undefined" || inText === "undefined" || inText === "") return "";
        inText = inText.toUpperCase();

        // Grammar 및 Dictionary에 맞게 변환
        inText = doCorrection(inText);
        // Grammar 및 Dictionary에 맞게 변환(Sydney)
        inText = doSydneyCorrection(inText);

        return inText;
    } catch (error) {
        fnLog(error.stack, "getMostSimilarTextFromGrammar");
    }
};

// Dictionary 조회
function getDictionary(beforeText) {
    try{
        if (typeof beforeText === "undefined" || beforeText === "undefined" || beforeText === "") return "";

        //20240227 추가테스트
        var grammerIdx = parseInt(grammarIndex);

        // //fnLog(" getDictionary beforeText : " + beforeText + ", beforeText.split=" + beforeText.split(" "), "getDictionary");
        // //fnLog(" getDictionary grammarIndex : " + grammerIdx + "\n\n", "getDictionary");

        var rtnValue = "";

        if(grammarIndex == 1 || grammarIndex == 2 || grammarIndex == 4) {
            rtnValue = beforeText;
        }
        else if(grammarIndex == 6){
            var nextText = "";
            var diagnosisText = "";

            for (let i = 0; i < grammar6[1].length; i++) {
                var element = grammar6[1][i];
                if(beforeText.includes(element)){
                    nextText = element;
                    diagnosisText = beforeText.replaceAll(element, "").trim();
                } 
                break;
            }

            rtnValue = dictionary[diagnosisText] ? dictionary[diagnosisText] + " " + nextText : diagnosisText;
        }else{
            rtnValue = dictionary[beforeText] ? dictionary[beforeText] : beforeText;
        }

        return rtnValue;
    } catch (error) {
        fnLog(error.stack, "getDictionary");
    }
}

// 초기화
init(0, function (result) {
    fnLog(result, "init");
})

// 한글 초/중/종성 분리
function getConstantVowel(korStr) {
    try{
        if (typeof korStr === "undefined" || korStr === null) return "";

        const f = [ "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ",
                    "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ",
                    "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
        const s = [ "ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ",
                    "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ",
                    "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
        const t = [ "", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ",
                    "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ",
                    "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ",
                    "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

        const ga = 44032;

        let result = "";
        for (let i = 0; i < korStr.length; i++) {
            const curChar = korStr[i];
            let uni = curChar.charCodeAt(0);
            uni = uni - ga;

            let fn = parseInt(uni / 588);
            let sn = parseInt((uni - (fn * 588)) / 28);
            let tn = parseInt(uni % 28);

            result += f[fn] + s[sn] + t[tn];
        }

        return result;
    } catch (error) {
        fnLog(error.stack, "getConstantVowel");
    }
}