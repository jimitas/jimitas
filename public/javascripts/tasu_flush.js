var higensu = "?";
var gensu = "?";
var answer;
var response = "?";
var timerVariable;
var totalSeconds = 0;
var srore = 0;
var flag = false;
var flag_res = false;
const left = document.getElementById("left");
const mid = document.getElementById("mid");
const kotae = document.getElementById("kotae");
init();

function select_change() {
  set.play();
  init();
}

// 初期化
function init() {
  flag = false;
  flag_res = false;
  clearInterval(timerVariable);
  totalSeconds = 0;
  score = 0;
  showTime();
  higensu = "?";
  gensu = "?";
  answer = "?";
  response = "?";
  showScore();
  write();
  document.getElementById("message").innerText = "スタートをおしてね。";
  document.getElementById("message").style.backgroundColor = "lightpink";
  document.getElementById("flush_card").style.border = "solid 2px red";
}

// リセットボタンを押したときの処理
function countReset() {
  if (flag === false) {
    reset.play();
    init();
  } else {
    alert.play();
    document.getElementById("message").innerText = "リセットしたいときはストップをおしてから。";
    document.getElementById("message").style.backgroundColor = "lightpink";
  }
}
// スタートボタンを押したときの処理
function countStart() {
  if (flag === false) {
    document.getElementById("message").innerText = "スタート。";
    document.getElementById("message").style.backgroundColor = "lightblue";
    set.play();
    flag = true;
    timerVariable = setInterval(countUpTimer, 1000);
    question();
  }
}
// ストップボタンを押したときの処理
function countStop() {
  document.getElementById("message").innerText = "ストップ。（リセットまたはスタート）";
  document.getElementById("message").style.backgroundColor = "lightgray";
  document.getElementById("flush_card").style.border = "solid 2px gray";
  move2.play();
  if (flag === true) {
    clearInterval(timerVariable);
    flag = false;
  }
}
// つぎへボタンを押したときの処理
function next_send() {
  if (score > 20) retuen;
  if (score == 20) send_end();
  if (flag_res === true) {
    flag_res = false;
    document.getElementById("flush_card").style.border = "solid 5px red";
    kotae.innerText = answer;
    set.play();
    setTimeout(question, 1000);
  }
}

// 問題を出す
function question() {
  response = "?";
  document.getElementById("flush_card").style.border = "solid 5px blue";
  //モードによって式を変える
  switch (form_select.value) {
    case "1":
      answer = Math.floor(Math.random() * 10 + 1);
      higensu = Math.floor(Math.random() * answer + 1);
      gensu = answer - higensu;
      break;
    case "2":
      answer = Math.floor(Math.random() * 10 + 11);
      var mode = Math.floor(Math.random() * 2 + 1);
      if (mode === 1) {
        higensu = 10;
        gensu = answer - higensu;
      } else if (mode === 2) {
        gensu = 10;
        higensu = answer - gensu;
      }
      break;
    case "3":
      answer = Math.floor(Math.random() * 9 + 12);
      var mode = Math.floor(Math.random() * 2 + 1);
      if (mode === 1) {
        higensu = Math.floor(Math.random() * (answer - 11) + 1);
        gensu = answer - higensu;
      } else if (mode === 2) {
        gensu = Math.floor(Math.random() * (answer - 11) + 1);
        higensu = answer - gensu;
      }
      break;
    case "4":
      higensu = Math.floor(Math.random() * 9 + 2);
      gensu = Math.floor(Math.random() * higensu + (10 - higensu) + 1);
      answer = Math.floor(higensu) + Math.floor(gensu);
      break;
  }
  flag_res = true;
  write();
}

// 正解を送る
function send_right() {
  document.getElementById("flush_card").style.border = "solid 5px red";
  score++;
  showScore();
  if (score >= 20) {
    flag_res = false;
    send_end();
    return;
  }
  right.play();
  setTimeout(question, 500);
}
// 間違いを送る
function send_wrong() {
  document.getElementById("flush_card").style.border = "solid 5px gray";
  alert.play();
}
//終了を送る
function send_end() {
  clearInterval(timerVariable);
  flag = false;
  flag_res = false;
  seikai1.play();
  document.getElementById("message").innerText = "おわりです。";
}
// 回答したときの処理
function res(event) {
  response = event.target.innerText;
  if (flag_res === true) {
    write();
    if (response == answer) {
      flag_res = false;
      send_right();
    } else {
      send_wrong();
    }
  } else {
    return;
  }
}

// カウントアップタイマー
function countUpTimer() {
  ++totalSeconds;
  showTime();
}

// タイムを更新する
function showTime() {
  var minute = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  document.getElementById("count_up_timer").innerHTML = minute + "ふん" + seconds + "びょう";
}
// 問題を更新する
function write() {
  left.innerText = higensu;
  mid.innerText = gensu;
  kotae.innerText = response;
}
// スコアを更新する;
function showScore() {
  document.getElementById("score-point").innerText = score + "てん";
}
