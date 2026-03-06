/*
 파일 암호화 커스터마이징 함수 입니다.
 이 함수 안에서 암호화 작업을 한 후 암호화된 결과를 callback으로 호출해 주시면 됩니다.

	options.fileArrayBuffer : 암호화할 파일 array buffer
	options.callback : 콜백 함수(작업이 완료 된 후 결과를 이 함수로 호출해 주시면 됩니다. 이 함수를 호출하면 업로드를 시작합니다.)
	options.chunkIdx : 청크의 index 값(int)
	options.isLast : 마지막 청크인지 값(bool)
	options.updateExtraData: 업로드 결과 값에 추가 데이터를 넣고 싶을 때 사용 합니다. 예) 해시 값 저장

 */

magicjs.init('VY96H+R2XE3YGQFIYkmQ2T9nlN3AAZxySnea4QnAkyMt2sVVAtAjHLgqysutif0cnDkIkrkrdmVF6SCKvp9JB/j6FNgrG0CFGngvsmWUXjZquQg6xIIJrVCrWy5AZ78VyE8mtibYh8suGsXDhv5BlFRaM5BmEQm11w1C4pcPFNkDd59VNgPY1dmiKI/R3Q5fXpjEPmdbsKVPpQJWOWCvG7F9O/sH1M0GTphfAJ8ngpUk4tuL5SxeuTnlWSADJMPtA9nY45hU9hrL19SNjzLGbra5jKjiLoe6YkMRyxS3PQ7mSghrB7FDxE0Mu4PMCun0YZQ9t0+P+M+PuOPKVEnOYA==');

var G_MAGICJS_IV = null;
var G_MAGICJS_SECRETKEY = null;
var G_MAGICJS_CIPHER = null;
var G_MAGICJS_CIPHERKEY = '';

var G_MAGICJS_ORIGINAL_MD = null; // 원본 파일 해시값 추출 시 사용
var G_MAGICJS_ENCRYPTED_MD = null; // 암호화된 파일 해시값 추출 시 사용

var uploadUsingMagicJs = function (options) {
	var fileArrayBuffer = options.fileArrayBuffer;
	var callback = options.callback;
	var chunkIdx = options.chunkIdx;
	var isLast = options.isLast;
	var updateExtraData = options.updateExtraData;
	var magicJsOptions = options.magicJsOptions;

	var extraData = {
		originalFileHash: '',
		encryptedFileHash: '',
		signedData: '',
		cipherKey: G_MAGICJS_CIPHERKEY
	};

	var errorObj = null;

	if (chunkIdx == 0) {
		updateExtraData(null);
		updateExtraData(extraData);
	}

	var uploadChunk = function (resultByte, magicJsOptions) {
		if (magicJsOptions.encrypt.use == '1') {
			callback(magicjs.hex.encode(resultByte));
		} else {
			callback(resultByte);
		}
	};

	// 암호화
	var resultByte = null;
	var cipherText = null;

	if (magicJsOptions.encrypt.use == '1') {
		if (chunkIdx == 0) {
			G_MAGICJS_CIPHER = magicjs.cipher.create(true, magicJsOptions.encrypt.cipherAlg, G_MAGICJS_SECRETKEY);
		}

		if (magicJsOptions.encrypt.decryptInServer == '0') {
			// 서버에서 암호화 된 채로 저장하는 경우
			if (chunkIdx == 0) {
				G_MAGICJS_CIPHER.init(G_MAGICJS_IV);
			}

			cipherText = G_MAGICJS_CIPHER.update(fileArrayBuffer);

			if (isLast) { // 마지막 청크 일 때에 finish 처리해줌
				cipherText = G_MAGICJS_CIPHER.finish();
			}

			resultByte = cipherText.getBytes();
		} else {
			// 서버에서 복호화를 하여 저장하는 경우
			G_MAGICJS_CIPHER.init(G_MAGICJS_IV);

			cipherText = G_MAGICJS_CIPHER.update(fileArrayBuffer);

			cipherText = G_MAGICJS_CIPHER.finish();

			resultByte = cipherText.getBytes();
		}
	} else {
		resultByte = fileArrayBuffer;
	}
	/////

	// 해시값 추출
	if (magicJsOptions.hash.use == '1' || magicJsOptions.signature.use == '1') {
		// 원본 파일에 대한 해시값 추출
		if (chunkIdx == 0) {
			G_MAGICJS_ORIGINAL_MD = magicjs.md.create(magicJsOptions.hash.hashAlg);
			G_MAGICJS_ORIGINAL_MD.init();
		}

		G_MAGICJS_ORIGINAL_MD.update(fileArrayBuffer);

		if (isLast) {
			var digest = G_MAGICJS_ORIGINAL_MD.digest();
			var originalFileHash = digest.toHex();

			extraData.originalFileHash = originalFileHash;
		}
		////

		// 암호화된 파일에 대한 해시값 추출
		if (magicJsOptions.encrypt.use == '1' && magicJsOptions.encrypt.decryptInServer == '0') { // 서버에서 복호화를 하지 않는 경우에만 추출
			if (chunkIdx == 0) {
				G_MAGICJS_ENCRYPTED_MD = magicjs.md.create(magicJsOptions.hash.hashAlg);
				G_MAGICJS_ENCRYPTED_MD.init();
			}

			G_MAGICJS_ENCRYPTED_MD.update(resultByte);

			if (isLast) {
				var digest = G_MAGICJS_ENCRYPTED_MD.digest();
				var encryptedFileHash = digest.toHex();
				extraData.encryptedFileHash = encryptedFileHash;
			}
		}
		////
	}
	/////

	if (isLast) {
		updateExtraData(extraData);
		//// 전자서명
		if (magicJsOptions.signature.use == '1') {
			var plaintext = extraData.originalFileHash;  // 파일 해시값
			var signOpt = magicJsOptions.signature.signOpt;
			var MagicLineJSAPI = magicJsOptions.MagicLineJSAPI;
			MagicLineJSAPI.makeSignedData(magicJsOptions.signature.sessionId, plaintext, signOpt, function (result) {
				if (result === false) {
					// 오류처리
					errorObj = {
						message: MagicLineJSAPI.getLastErrorMessage()
					}
					callback(null, errorObj);
				} else {
					// 정상처리
					extraData.signedData = result;
					updateExtraData(extraData);

					// 업로드 시작
					uploadChunk(resultByte, magicJsOptions);
				}
			});
		} else {
			// 업로드 시작
			uploadChunk(resultByte, magicJsOptions);
		}
	} else {
		// 업로드 시작
		uploadChunk(resultByte, magicJsOptions);
	}
};

var setMagicJsCipherKey = function (options) {
	var MagicLineJSAPI = options.MagicLineJSAPI;

	var keyLen = 16;
	var ivLen = 16;

	G_MAGICJS_SECRETKEY = magicjs.generateRandomBytes(keyLen);
	G_MAGICJS_IV = magicjs.generateRandomBytes(ivLen);

	var kmCert = MagicLineJSAPI.getEncServerCertificate(options.encrypt.serverCertificateArgs[0], options.encrypt.serverCertificateArgs[1]);
	var encKey = magicjs.hex.encode(G_MAGICJS_SECRETKEY) + magicjs.hex.encode(G_MAGICJS_IV);

	G_MAGICJS_CIPHERKEY = MagicLineJSAPI.rsaEncrypt(encKey, kmCert);
};

var getMagicJsCipherKey = function () {
	return G_MAGICJS_CIPHERKEY;
}