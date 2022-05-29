const kotoba = [
  { no: 1, img: "bear", kana: "くま", type: "h" },
  { no: 2, img: "balloon", kana: "ふうせん", type: "h" },
  { no: 3, img: "bird", kana: "とり", type: "h" },
  { no: 4, img: "book", kana: "ほん", type: "h" },
  { no: 5, img: "box", kana: "はこ", type: "h" },
  { no: 6, img: "candy", kana: "あめ", type: "h" },
  { no: 7, img: "car", kana: "くるま", type: "h" },
  { no: 8, img: "cat", kana: "ねこ", type: "h" },
  { no: 9, img: "chicken", kana: "にわとり", type: "h" },
  { no: 10, img: "crayon", kana: "くれよん", type: "h" },
  { no: 11, img: "dog", kana: "いぬ", type: "h" },
  { no: 12, img: "duck", kana: "あひる", type: "h" },
  { no: 13, img: "fish", kana: "さかな", type: "h" },
  { no: 14, img: "frog", kana: "かえる", type: "h" },
  { no: 15, img: "horse", kana: "うま", type: "h" },
  { no: 16, img: "kiui", kana: "きうい", type: "h" },
  { no: 17, img: "lemon", kana: "れもん", type: "h" },
  { no: 18, img: "maraka", kana: "まらかす", type: "h" },
  { no: 19, img: "meron", kana: "めろん", type: "h" },
  { no: 20, img: "monday", kana: "つき", type: "h" },
  { no: 21, img: "monkey", kana: "さる", type: "h" },
  { no: 22, img: "orange", kana: "みかん", type: "h" },
  { no: 23, img: "peach", kana: "もも", type: "h" },
  { no: 24, img: "remon", kana: "れもん", type: "h" },
  { no: 25, img: "retasu", kana: "れたす", type: "h" },
  { no: 26, img: "shu", kana: "くつ", type: "h" },
  { no: 27, img: "sun", kana: "たいよう", type: "h" },
  { no: 28, img: "tomato", kana: "とまと", type: "h" },
  { no: 29, img: "umbrella", kana: "かさ", type: "h" },
  { no: 30, img: "flower", kana: "はな", type: "h" },
  { no: 31, img: "apple", kana: "りんご", type: "d" },
  { no: 32, img: "carrot", kana: "にんじん", type: "d" },
  { no: 33, img: "cucumber", kana: "きゅうり", type: "y" },
  { no: 34, img: "egg", kana: "たまご", type: "d" },
  { no: 35, img: "eraser", kana: "けしごむ", type: "d" },
  { no: 36, img: "furaipan", kana: "ふらいぱん", type: "hd" },
  { no: 37, img: "gam", kana: "がむ", type: "d" },
  { no: 38, img: "goldfish", kana: "きんぎょ", type: "dy" },
  { no: 39, img: "gorilla", kana: "ごりら", type: "d" },
  { no: 40, img: "grapes", kana: "ぶどう", type: "d" },
  { no: 41, img: "hat", kana: "ぼうし", type: "d" },
  { no: 42, img: "ichigo", kana: "いちご", type: "d" },
  { no: 43, img: "koppu", kana: "こっぷ", type: "hds" },
  { no: 44, img: "mouse", kana: "ねずみ", type: "d" },
  { no: 45, img: "onion", kana: "たまねぎ", type: "d" },
  { no: 46, img: "pan", kana: "ぱん", type: "hd" },
  { no: 47, img: "pig", kana: "ぶた", type: "d" },
  { no: 48, img: "pumpkin", kana: "かぼちゃ", type: "dy" },
  { no: 49, img: "rabbit", kana: "うさぎ", type: "d" },
  { no: 50, img: "randoseru", kana: "らんどせる", type: "d" },
  { no: 51, img: "rice ball", kana: "おにぎり", type: "d" },
  { no: 52, img: "snake", kana: "へび", type: "d" },
  { no: 53, img: "suzu", kana: "すず", type: "d" },
  { no: 54, img: "table tennis", kana: "たっきゅう", type: "sy" },
  { no: 55, img: "sheep", kana: "ひつじ", type: "d" },
  { no: 56, img: "epuron", kana: "えぷろん", type: "hd" },
  { no: 57, img: "banana", kana: "ばなな", type: "d" },
  { no: 58, img: "ball", kana: "ぼおる", type: "c" },
  { no: 59, img: "torai", kana: "とらいあんぐる", type: "d" },
  { no: 60, img: "supun", kana: "すぷうん", type: "hdc" },
];

var kaishi;
var shuryou;

if (title.innerText == "ひらがな　１") {
  kaishi = 0;
  shuryou = 30;
} else if (title.innerText == "ひらがな　２") {
  kaishi = 30;
  shuryou = 60;
}

const img = document.getElementById("myimg");

// 配列の入れ替え・設定
var n = 0;
var kotae;
const hairetu = [];
let arr = [];
for (let j = 0; j < shuryou - kaishi; j++) {
  hairetu[j] = j;
}
for (let j = 0; j < shuryou - kaishi; j++) {
  arr.push(...hairetu.splice(Math.floor(Math.random() * hairetu.length - 1), 1));
}

mondai_set();

//文字をぜんぶけす
document.getElementById("clear").addEventListener("click", () => {
  text_box.setAttribute("class", "alert alert-light text-center");
  input_box.innerText = "";
  move2.currentTime = 0;
  move2.play();
});

//文字を1文字消去
document.getElementById("del").addEventListener("click", () => {
  text_box.setAttribute("class", "alert alert-light text-center");
  input_box.innerText = input_box.innerText.slice(0, input_box.innerText.length - 1);
  move1.currentTime = 0;
  move1.play();
});

//次の問題を表示
document.getElementById("next").addEventListener("click", () => {
  n = n + 1;
  if (shuryou - kaishi < n + 1) n = 0;
  mondai_set();
});

//こたえの表示
document.getElementById("response").addEventListener("click", () => {
  text_box.setAttribute("class", "alert alert-light text-center");
  text_box.style.color = "blue";
  text_box.innerText = kotae;
  reset.currentTime = 0;
  reset.play();
});

//問題のセット
function mondai_set() {
  text_box.setAttribute("class", "alert alert-light text-center");
  flag = false;
  input_box.style.color = "black";
  input_box.innerText = "";
  text_box.style.color = "black";
  text_box.innerText = "";
  img.setAttribute("src", "./images/" + kotoba[arr[n] + kaishi].img + ".png");
  kotae = kotoba[arr[n] + kaishi].kana;
  set.currentTime = 0;
  set.play();
}
