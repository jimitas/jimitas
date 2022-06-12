//先頭までスクロールする。
function noScroll(event) {
  event.preventDefault();
}
//右クリック禁止
document.oncontextmenu = () => {
  return false;
};

//ダブルタップによる拡大禁止
document.addEventListener(
  "dblclick",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);

document.body.style.backgroundColor = "white";
document.body.style.color = "black";

//白黒反転
document.getElementById("UD").addEventListener("click", () => {
  reset.currentTime = 0;
  reset.play();
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});

document.getElementById("font_select").addEventListener("change", (event) => {
  reset.currentTime = 0;
  reset.play();
  switch (event.target.value) {
    case "0":
      document.body.style.fontFamily = "UD Digi Kyokasho N-B";
      break;
    case "1":
      document.body.style.fontFamily = "ヒラギノ明朝 ProN W6, HiraMinProN-W6, HG明朝E, ＭＳ Ｐ明朝,MS PMincho, MS 明朝, serif";
      break;
    case "2":
      document.body.style.fontFamily = "メイリオ,ヒラギノ角ゴ ProN,sans-serif";
      break;
  }
});

function f_end() {
  console.log("end");
}

//スワイプ禁止
// document.addEventListener(
//   "touchmove",
//   (event) => {
//     event.preventDefault();
//   },
//   { passive: false }
// );
// ピンチズーム禁止
// const touchHandler = (event) => {
//   if (event.touches.length > 1) {
//     event.preventDefault();
//   }
// };
// document.addEventListener("touchstart", touchHandler, {
//   passive: false,
// });

// スクロール禁止(SP)
// document.addEventListener("touchmove", noScroll, { passive: false });
// スクロール禁止(PC)
// document.addEventListener("mousewheel", noScroll, { passive: false });
