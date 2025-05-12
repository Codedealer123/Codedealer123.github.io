let localStream, remoteStream, pc;
const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

async function initiateVideoCall() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  document.getElementById("localVideo").srcObject = localStream;

  pc = new RTCPeerConnection(config);
  localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

  pc.ontrack = event => {
    remoteStream = event.streams[0];
    document.getElementById("remoteVideo").srcObject = remoteStream;
  };
}