var audioCtx = null,
  oscillator = null;
var type = "sine";

// ボタンを押したときの挙動
document.getElementById("play").addEventListener(
  "click",
  () => {
    sound_play();
  },
  false
);

document.getElementById("stop").addEventListener(
  "click",
  () => {
    sound_stop();
  },
  false
);

document.getElementById("select").addEventListener(
  "change",
  () => {
    sound_stop();
  },
  false
);

//周波数変更
document.getElementById("hz").addEventListener("input", function () {
  document.getElementById("hz_label").innerHTML = document.getElementById("hz").value + "Hz";
  if (oscillator != null) {
    let hz = document.getElementById("hz").value;
    oscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);
  }
});

//音を鳴らす
function sound_play() {
  type = select.value;
  if (audioCtx == null) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (oscillator == null) {
    oscillator = audioCtx.createOscillator();
    oscillator.type = type;
    let hz = document.getElementById("hz").value;
    oscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);
    oscillator.connect(audioCtx.destination);
    oscillator.start();
  }
}

//音を止める
function sound_stop() {
  if (oscillator !== null) {
    oscillator.stop();
    oscillator = null;
  }
}

function setHz(hz) {
  document.getElementById("hz").value = hz;
  document.getElementById("hz_label").innerHTML = hz + "Hz";
  if (oscillator != null) {
    let hz = document.getElementById("hz").value;
    oscillator.frequency.setValueAtTime(hz, audioCtx.currentTime);
  }
}
