var finger;
//運指データ(0_あける　1_おさえる 2_サミング)
const u1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const u2 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1];
const u3 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0];
const u4 = [1, 1, 1, 1, 1, 1, 0, 1, 0, 0];
const u5 = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
const u6 = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
const u7 = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1];
const u8 = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
const u9 = [1, 1, 1, 0, 1, 1, 0, 1, 0, 0];
const u10 = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
const u11 = [1, 1, 0, 1, 1, 0, 0, 0, 0, 0];
const u12 = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
const u13 = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0];
const u14 = [0, 1, 1, 0, 0, 0, 0, 0, 0, 0];
const u15 = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
const u16 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 0];
const u17 = [2, 1, 1, 1, 1, 1, 0, 0, 0, 0];
const u18 = [2, 1, 1, 1, 1, 0, 0, 0, 0, 0];
const u19 = [2, 1, 1, 1, 0, 1, 0, 0, 1, 1];
const u20 = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0];
const u21 = [2, 1, 1, 1, 0, 1, 0, 0, 0, 0];
const u22 = [2, 1, 1, 0, 0, 0, 0, 0, 0, 0];
const u23 = [2, 1, 1, 0, 1, 1, 1, 1, 0, 0];
const u24 = [2, 1, 1, 0, 1, 1, 0, 0, 0, 0];
const u25 = [2, 1, 0, 0, 1, 1, 0, 0, 0, 0];
const u26 = [2, 1, 0, 1, 1, 0, 1, 1, 1, 1];
const u27 = [2, 1, 0, 1, 1, 0, 1, 1, 0, 0];

//リコーダー穴の部分の作成
const hole = [];
for (let i = 0; i < 10; i++) {
  hole[i] = document.getElementById("hole_" + i);
}

// インスタンスを生成
for (let i = 8; i < 35; i++) {
  const Key = document.querySelector("#KE_" + i);
  const se = new Howl({
    //読み込む音声ファイル
    src: ["../Sounds/re_" + i + ".mp3"],

    // 設定 (以下はデフォルト値です)
    preload: true, // 事前ロード
    volume: 1.0, // 音量(0.0〜1.0の範囲で指定)
    loop: false, // ループ再生するか
    autoplay: false, // 自動再生するか

    // 読み込み完了時に実行する処理
    onload: () => {
      Key.removeAttribute("disabled"); // ボタンを使用可能にする
    },
  });

  Key.addEventListener("mousedown", () => {
    Finger(i - 7);
    unshi(finger);
    se.play();
  });
  Key.addEventListener("mouseup", () => {
    se.stop();
  });
  Key.addEventListener("touchstart", () => {
    Finger(i - 7);
    unshi(finger);
    se.play();
  });
  Key.addEventListener("touchend", () => {
    se.stop();
  });
}

function Finger(i) {
  switch (i) {
    case 1:
      finger = u1;
      break;
    case 2:
      finger = u2;
      break;
    case 3:
      finger = u3;
      break;
    case 4:
      finger = u4;
      break;
    case 5:
      finger = u5;
      break;
    case 6:
      finger = u6;
      break;
    case 7:
      finger = u7;
      break;
    case 8:
      finger = u8;
      break;
    case 9:
      finger = u9;
      break;
    case 10:
      finger = u10;
      break;
    case 11:
      finger = u11;
      break;
    case 12:
      finger = u12;
      break;
    case 13:
      finger = u13;
      break;
    case 14:
      finger = u14;
      break;
    case 15:
      finger = u15;
      break;
    case 16:
      finger = u16;
      break;
    case 17:
      finger = u17;
      break;
    case 18:
      finger = u18;
      break;
    case 19:
      finger = u19;
      break;
    case 20:
      finger = u20;
      break;
    case 21:
      finger = u21;
      break;
    case 22:
      finger = u22;
      break;
    case 23:
      finger = u23;
      break;
    case 24:
      finger = u24;
      break;
    case 25:
      finger = u25;
      break;
    case 26:
      finger = u26;
      break;
    case 27:
      finger = u27;
      break;
  }
  return finger;
}

function unshi(finger) {
  for (let i = 0; i < 10; i++) {
    switch (finger[i]) {
      case 0:
        hole[i].style.backgroundColor = "white";
        hole[i].style.backgroundImage = "linear-gradient(45deg, transparent 49%, white 49%, white 51%, transparent 51%, transparent)";
        break;
      case 1:
        hole[i].style.backgroundColor = "black";
        hole[i].style.backgroundImage = "linear-gradient(45deg, transparent 49%, black 49%, black 51%, transparent 51%, transparent)";
        break;
      case 2:
        hole[i].style.backgroundColor = "white";
        hole[i].style.backgroundImage = "linear-gradient(45deg, transparent 0%, black 0%, black 50%, transparent 50%, transparent)";
        break;
    }
  }
}
