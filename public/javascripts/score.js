const field = document.getElementById("field");
const form_select = document.getElementById("form-select");
const next = document.getElementById("next");
const score_field = document.getElementById("score-field");
const score_point = document.getElementById("score-point");
const text_box = document.getElementById("text_box");
var answer = 5;
var response = 0;
var score = document.cookie;
var flag = false;
var result;

function checkAnswer(response, answer) {
  if (response == answer && flag === false) {
    sendRight();
  } else if (response != answer && flag === false) {
    sendWrong();
  } else {
    pi.currentTime = 0;
    pi.play();
    text_box.innerText = "「つぎの　もんだいへ」を　おしてね。";
    text_box.setAttribute("class", "alert alert-light text-center");
  }
}

function sendRight() {
  text_box.innerText = "せいかい！";
  text_box.setAttribute("class", "alert alert-primary text-center");
  seikai1.currentTime = 0;
  seikai1.play();
  flag = true;
  score++;
  scoreWright();
  result = "collect";
  return result;
}

function sendWrong() {
  alert.currentTime = 0;
  alert.play();
  text_box.setAttribute("class", "alert alert-danger text-center");
  result = "wrong";
  return result;
}

function scoreWright() {
  score_field.innerHTML = "";
  score_point.innerText = score + "てん　";
  var score_10 = parseInt(score / 10);
  var score_1 = score % 10;
  for (let i = 0; i < score_10; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", "../images/medal.png");
    img.setAttribute("class", "medal");
    div.appendChild(img);
    score_field.appendChild(div);
  }
  for (let i = 0; i < score_1; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", "../images/coin.png");
    img.setAttribute("class", "coin");
    div.appendChild(img);
    score_field.appendChild(div);
  }
  document.cookie = score;
}
