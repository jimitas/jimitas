const kotoba = [
  { no: 1, img: "bear", kana: "くま", katakana:"クマ", type: "h" },
  { no: 2, img: "balloon", kana: "ふうせん", katakana:"フーセン", type: "h" },
  { no: 3, img: "bird", kana: "とり", katakana:"トリ", type: "h" },
  { no: 4, img: "book", kana: "ほん", katakana:"ホン", type: "h" },
  { no: 5, img: "box", kana: "はこ", katakana:"ハコ", type: "h" },
  { no: 6, img: "candy", kana: "あめ", katakana:"アメ", type: "h" },
  { no: 7, img: "car", kana: "くるま", katakana:"クルマ", type: "h" },
  { no: 8, img: "cat", kana: "ねこ", katakana:"ネコ", type: "h" },
  { no: 9, img: "chicken", kana: "にわとり", katakana:"ニワトリ", type: "h" },
  { no: 10, img: "crayon", kana: "くれよん", katakana:"クレヨン", type: "h" },
  { no: 11, img: "dog", kana: "いぬ", katakana:"イヌ", type: "h" },
  { no: 12, img: "duck", kana: "あひる", katakana:"アヒル", type: "h" },
  { no: 13, img: "fish", kana: "さかな", katakana:"サカナ", type: "h" },
  { no: 14, img: "frog", kana: "かえる", katakana:"カエル", type: "h" },
  { no: 15, img: "horse", kana: "うま", katakana:"ウマ", type: "h" },
  { no: 16, img: "kiui", kana: "きうい", katakana:"キウイ", type: "h" },
  { no: 17, img: "lemon", kana: "れもん", katakana:"レモン", type: "h" },
  { no: 18, img: "maraka", kana: "まらかす", katakana:"マラカス", type: "h" },
  { no: 19, img: "meron", kana: "めろん", katakana:"メロン", type: "h" },
  { no: 20, img: "monday", kana: "つき", katakana:"ツキ", type: "h" },
  { no: 21, img: "monkey", kana: "さる", katakana:"サル", type: "h" },
  { no: 22, img: "orange", kana: "みかん", katakana:"ミカン", type: "h" },
  { no: 23, img: "peach", kana: "もも", katakana:"モモ", type: "h" },
  { no: 24, img: "remon", kana: "れもん", katakana:"レモン", type: "h" },
  { no: 25, img: "retasu", kana: "れたす", katakana:"レタス", type: "h" },
  { no: 26, img: "shu", kana: "くつ", katakana:"クツ", type: "h" },
  { no: 27, img: "sun", kana: "たいよう", katakana:"タイヨウ", type: "h" },
  { no: 28, img: "tomato", kana: "とまと", katakana:"トマト", type: "h" },
  { no: 29, img: "umbrella", kana: "かさ", katakana:"カサ", type: "h" },
  { no: 30, img: "flower", kana: "はな", katakana:"ハナ", type: "h" },
  { no: 31, img: "apple", kana: "りんご", katakana:"リンゴ", type: "d" },
  { no: 32, img: "carrot", kana: "にんじん", katakana:"ニンジン", type: "d" },
  { no: 33, img: "cucumber", kana: "きゅうり", katakana:"キューリ", type: "y" },
  { no: 34, img: "egg", kana: "たまご", katakana:"タマゴ", type: "d" },
  { no: 35, img: "eraser", kana: "けしごむ", katakana:"ケシゴム", type: "d" },
  { no: 36, img: "furaipan", kana: "ふらいぱん", katakana:"フライパン", type: "hd" },
  { no: 37, img: "gam", kana: "がむ", katakana:"ガム", type: "d" },
  { no: 38, img: "goldfish", kana: "きんぎょ", katakana:"キンギョ", type: "dy" },
  { no: 39, img: "gorilla", kana: "ごりら", katakana:"ゴリラ", type: "d" },
  { no: 40, img: "grapes", kana: "ぶどう", katakana:"ブドウ", type: "d" },
  { no: 41, img: "hat", kana: "ぼうし", katakana:"ボーシ", type: "d" },
  { no: 42, img: "ichigo", kana: "いちご", katakana:"イチゴ", type: "d" },
  { no: 43, img: "koppu", kana: "こっぷ", katakana:"コップ", type: "hds" },
  { no: 44, img: "mouse", kana: "ねずみ", katakana:"ネズミ", type: "d" },
  { no: 45, img: "onion", kana: "たまねぎ", katakana:"タマネギ", type: "d" },
  { no: 46, img: "pan", kana: "ぱん", katakana:"パン", type: "hd" },
  { no: 47, img: "pig", kana: "ぶた", katakana:"ブタ", type: "d" },
  { no: 48, img: "pumpkin", kana: "かぼちゃ", katakana:"カボチャ", type: "dy" },
  { no: 49, img: "rabbit", kana: "うさぎ", katakana:"ウサギ", type: "d" },
  { no: 50, img: "randoseru", kana: "らんどせる", katakana:"ランドセル", type: "d" },
  { no: 51, img: "rice ball", kana: "おにぎり", katakana:"オニギリ", type: "d" },
  { no: 52, img: "snake", kana: "へび", katakana:"ヘビ", type: "d" },
  { no: 53, img: "suzu", kana: "すず", katakana:"スズ", type: "d" },
  { no: 54, img: "table tennis", kana: "たっきゅう", katakana:"タッキュー", type: "sy" },
  { no: 55, img: "sheep", kana: "ひつじ", katakana:"ヒツジ", type: "d" },
  { no: 56, img: "epuron", kana: "えぷろん", katakana:"エプロン", type: "hd" },
  { no: 57, img: "banana", kana: "ばなな", katakana:"バナナ", type: "d" },
  { no: 58, img: "ball", kana: "ぼおる", katakana:"ボール", type: "c" },
  { no: 59, img: "torai", kana: "とらいあんぐる", katakana:"トライアングル", type: "d" },
  { no: 60, img: "supun", kana: "すぷうん", katakana:"スプーン", type: "hdc" },
  { no: 61, img: "bear", kana: "くま", katakana:"クマ", type: "h" },
  { no: 62, img: "bird", kana: "とり", katakana:"トリ", type: "h" },
  { no: 63, img: "car", kana: "くるま", katakana:"クルマ", type: "h" },
  { no: 64, img: "cat", kana: "ねこ", katakana:"ネコ", type: "h" },
  { no: 65, img: "chicken", kana: "にわとり", katakana:"ニワトリ", type: "h" },
  { no: 66, img: "crayon", kana: "くれよん", katakana:"クレヨン", type: "h" },
  { no: 67, img: "dog", kana: "いぬ", katakana:"イヌ", type: "h" },
  { no: 68, img: "duck", kana: "あひる", katakana:"アヒル", type: "h" },
  { no: 69, img: "fish", kana: "さかな", katakana:"サカナ", type: "h" },
  { no: 70, img: "frog", kana: "かえる", katakana:"カエル", type: "h" },
  { no: 71, img: "horse", kana: "うま", katakana:"ウマ", type: "h" },
  { no: 72, img: "kiui", kana: "きうい", katakana:"キウイ", type: "h" },
  { no: 73, img: "lemon", kana: "れもん", katakana:"レモン", type: "h" },
  { no: 74, img: "maraka", kana: "まらかす", katakana:"マラカス", type: "h" },
  { no: 75, img: "meron", kana: "めろん", katakana:"メロン", type: "h" },
  { no: 76, img: "monkey", kana: "さる", katakana:"サル", type: "h" },
  { no: 77, img: "orange", kana: "みかん", katakana:"ミカン", type: "h" },
  { no: 78, img: "peach", kana: "もも", katakana:"モモ", type: "h" },
  { no: 79, img: "remon", kana: "れもん", katakana:"レモン", type: "h" },
  { no: 80, img: "retasu", kana: "れたす", katakana:"レタス", type: "h" },
  { no: 81, img: "tomato", kana: "とまと", katakana:"トマト", type: "h" },
  { no: 82, img: "umbrella", kana: "かさ", katakana:"カサ", type: "h" },
  { no: 83, img: "flower", kana: "はな", katakana:"ハナ", type: "h" },
  { no: 84, img: "apple", kana: "りんご", katakana:"リンゴ", type: "d" },
  { no: 85, img: "carrot", kana: "にんじん", katakana:"ニンジン", type: "d" },
  { no: 86, img: "cucumber", kana: "きゅうり", katakana:"キューリ", type: "y" },
  { no: 87, img: "cake", kana: "", katakana:"ケーキ", type: "c" },
  { no: 88, img: "broccoli", kana: "", katakana:"ブロッコリー", type: "dyc" },
  { no: 89, img: "dodgeball", kana: "", katakana:"ドッジボール", type: "ydc" },
  { no: 90, img: "hamburger", kana: "", katakana:"ハンバーガー", type: "y" },
  { no: 91, img: "eraser", kana: "けしごむ", katakana:"ケシゴム", type: "d" },
  { no: 92, img: "furaipan", kana: "ふらいぱん", katakana:"フライパン", type: "hd" },
  { no: 93, img: "gam", kana: "がむ", katakana:"ガム", type: "d" },
  { no: 94, img: "goldfish", kana: "きんぎょ", katakana:"キンギョ", type: "dy" },
  { no: 95, img: "gorilla", kana: "ごりら", katakana:"ゴリラ", type: "d" },
  { no: 96, img: "grapes", kana: "ぶどう", katakana:"ブドウ", type: "d" },
  { no: 97, img: "ichigo", kana: "いちご", katakana:"イチゴ", type: "d" },
  { no: 98, img: "koppu", kana: "こっぷ", katakana:"コップ", type: "hds" },
  { no: 99, img: "mouse", kana: "ねずみ", katakana:"ネズミ", type: "d" },
  { no: 100, img: "onion", kana: "たまねぎ", katakana:"タマネギ", type: "d" },
  { no: 101, img: "pan", kana: "ぱん", katakana:"パン", type: "hd" },
  { no: 102, img: "pig", kana: "ぶた", katakana:"ブタ", type: "d" },
  { no: 103, img: "pumpkin", kana: "かぼちゃ", katakana:"カボチャ", type: "dy" },
  { no: 104, img: "rabbit", kana: "うさぎ", katakana:"ウサギ", type: "d" },
  { no: 105, img: "randoseru", kana: "らんどせる", katakana:"ランドセル", type: "d" },
  { no: 106, img: "snake", kana: "へび", katakana:"ヘビ", type: "d" },
  { no: 107, img: "suzu", kana: "すず", katakana:"スズ", type: "d" },
  { no: 108, img: "sheep", kana: "ひつじ", katakana:"ヒツジ", type: "d" },
  { no: 109, img: "epuron", kana: "えぷろん", katakana:"エプロン", type: "hd" },
  { no: 110, img: "banana", kana: "ばなな", katakana:"バナナ", type: "d" },
  { no: 111, img: "ball", kana: "ぼおる", katakana:"ボール", type: "c" },
  { no: 112, img: "torai", kana: "とらいあんぐる", katakana:"トライアングル", type: "d" },
  { no: 113, img: "supun", kana: "すぷうん", katakana:"スプーン", type: "hdc" },
  { no: 114, img: "cookie", kana: "", katakana:"クッキー", type: "yc" },
  { no: 115, img: "bus", kana: "", katakana:"バス", type: "d" },
  { no: 116, img: "heriko", kana: "", katakana:"ヘリコプター", type: "hdy" },
  { no: 117, img: "hotto", kana: "", katakana:"ホットケーキ", type: "yc" },
  { no: 118, img: "jam", kana: "", katakana:"ジャム", type: "dy" },
  { no: 119, img: "soccer", kana: "", katakana:"サッカー", type: "yc" },
  { no: 120, img: "panda", kana: "", katakana:"パンダ", type: "dhd" },

];

var kaishi;
var shuryou;

if (title.innerText == "ひらがな　１") {
  kaishi = 0;
  shuryou = 30;
} else if (title.innerText == "ひらがな　２") {
  kaishi = 30;
  shuryou = 60;
} else if (title.innerText == "カタカナ") {
  kaishi = 61;
  shuryou = 120;
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
  if (title.innerText == "ひらがな　１" || title.innerText == "ひらがな　２") {
    kotae = kotoba[arr[n] + kaishi].kana;
  } else if (title.innerText == "カタカナ") {
    kotae = kotoba[arr[n] + kaishi].katakana;
  }
  set.currentTime = 0;
  set.play();
}
