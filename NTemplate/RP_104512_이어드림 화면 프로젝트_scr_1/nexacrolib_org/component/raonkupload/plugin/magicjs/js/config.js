G_KUPlugin["magicjs"].options = {
    extraJsModules: ['/KU/zTest/magicjs/magicjs_1.2.4.0.min.js'],
    MagicLineJSAPI: null, // KUPLOADTOP.MagicLineJSAPI
    encrypt: {
        use: '1',
        decryptInServer: '1',
        cipherAlg: 'ARIA128-CBC',
        serverCertificateArgs: ['WEB', 'DER']
    },
    hash: {
        use: '1',
        hashAlg: 'sha256'
    },
    signature: {
        use: '1',
        sessionId: '',
        signOpt: { sign: ["OPT_USE_CONTNET_INFO", "OPT_HASHED_CONTENT"] }
    },
    customObject: {

    }
};
