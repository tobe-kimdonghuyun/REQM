class VoiceRecorder {
	constructor() {
		if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			console.log("getUserMedia supported")
		} else {
			console.log("getUserMedia is not supported on your browser!")
		}

		this.mediaRecorder
		this.stream
		this.chunks = []
		this.isRecording = false

		this.recorderRef = document.querySelector("#recorder")
		this.playerRef = document.querySelector("#player")
		this.startRef = document.querySelector("#start")
		this.stopRef = document.querySelector("#stop")
		
		this.startRef.onclick = this.startRecording.bind(this)
		this.stopRef.onclick = this.stopRecording.bind(this)

		this.constraints = {
			audio: true,
			video: false
		}
		
		this.audioURL;
	}

	handleSuccess(stream) {
		this.stream = stream
		this.stream.oninactive = () => {
			console.log("Stream ended!")
		};
		this.recorderRef.srcObject = this.stream
		this.mediaRecorder = new MediaRecorder(this.stream)
		console.log(this.mediaRecorder)
		this.mediaRecorder.ondataavailable = this.onMediaRecorderDataAvailable.bind(this)
		this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this)
		this.recorderRef.play()
		this.mediaRecorder.start()
	}

	handleError(error) {
		console.log("navigator.getUserMedia error: ", error)
	}
	
	onMediaRecorderDataAvailable(e) { this.chunks.push(e.data) }
	
	onMediaRecorderStop(e) { 
			//const blob = new Blob(this.chunks, { 'type': 'audio/mpeg; codecs=opus' })
			const blob = new Blob(this.chunks, { 'type': 'audio/wav;' })
			
			//document.getElementById('voiceBlob').value = blob;
			
			blob.lastModifiedDate = new Date();
			blob.name = "test.wav";

			sendAudioFile(blob);

			this.audioURL = window.URL.createObjectURL(blob)

			var file = new File([blob], blob.name);
			
			//window.open(this.audioURL);
			//
			//window.URL.revokeObjectURL(this.audioURL);

			this.playerRef.src = this.audioURL
			this.chunks = []
			this.stream.getAudioTracks().forEach(track => track.stop())
			this.stream = null
	}

	startRecording() {
		if (this.isRecording) return
		this.isRecording = true
		this.startRef.innerHTML = 'Recording...'
		this.playerRef.src = ''
		navigator.mediaDevices
			.getUserMedia(this.constraints)
			.then(this.handleSuccess.bind(this))
			.catch(this.handleError.bind(this))
	}
	
	stopRecording() {
		if (!this.isRecording) return
		this.isRecording = false
		this.startRef.innerHTML = 'Record'
		this.recorderRef.pause()
		this.mediaRecorder.stop()
		console.log("audioURL: ", this.audioURL)
	}
	
}



window.voiceRecorder = new VoiceRecorder()
window.headersJSON = {}

function init(headersJSON) {
	window.headersJSON = headersJSON;
}

function startRecording() {
	window.voiceRecorder.startRecording();
}

function stopRecording() {
	window.voiceRecorder.stopRecording();
}

function getAudioURL() {
	alert(window.voiceRecorder.audioURL);
	return window.voiceRecorder.audioURL;
}

function sendAudioFile(blob) {

	var url = "http://localhost:8081/la-file/upload";

	var file = new File([blob], blob.name);

	const formData = new FormData();
	formData.append('files', file);
	formData.append('serviceType', "la");
	formData.append('detailSavePath', "/tmp");

	fetch(url, {
		method: "POST",
		mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: window.headersJSON,
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: formData, // body data type must match "Content-Type" header
	}).then(res => res.json().then(data => {
		var fileId = "";
		if(!(data === "" || data.result === "" || data.result[0] === "" || data.result[0].fileId === "")) fileId = data.result[0].fileId;
		alert(fileId);

	}))
	.catch(err => console.log("err : ", err));
}