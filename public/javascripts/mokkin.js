// インスタンスを生成
for (let i = 1; i < 28; i++) {
  const Key = document.querySelector("#KE_" + i);
  // if (i < 9) Key.classList.add("white");
  const se = new Howl({
    //読み込む音声ファイル
    src: ["../Sounds/mo_" + i + ".mp3"],

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

  Key.addEventListener("touchstart", () => {
    se.play();
  });
  Key.addEventListener("mousedown", () => {
    se.play();
  });

  Key.addEventListener("touchend", () => {
    se.pause();
    se.seek(0);
  });
  Key.addEventListener("mouseup", () => {
    se.pause();
    se.seek(0);
  });
}
