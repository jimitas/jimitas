set.play();
scoreWright();
flag = "wait";
const canvas = document.getElementById("clock");
const ctx = canvas.getContext("2d");
const hint1 = document.getElementById("hint1");
const hint2 = document.getElementById("hint2");
tokei_range.step = 15;
tokei_range.value = 360;
let hours = 6;
let minutes = 0;
let hari_hours;
let hari_minutes;
let Hint = "";

//時計の針を動かす。
tokei_range.addEventListener("input", () => {
  hours = Math.floor(tokei_range.value / 60);
  minutes = Math.floor(tokei_range.value % 60);
  kako.currentTime = 0;
  kako.play();
  draw();
});

//プラスボタンを押したとき
Plus.addEventListener("click", () => {
  tokei_range.value = Math.floor(Number(tokei_range.value) + Number(tokei_range.step));
  hours = Math.floor(tokei_range.value / 60);
  minutes = Math.floor(tokei_range.value % 60);
  kako.currentTime = 0;
  kako.play();
  draw();
});

//マイナスボタンを押したとき
Minus.addEventListener("click", () => {
  tokei_range.value = tokei_range.value - tokei_range.step;
  hours = Math.floor(tokei_range.value / 60);
  minutes = Math.floor(tokei_range.value % 60);
  kako.currentTime = 0;
  kako.play();
  draw();
});

question.addEventListener("click", () => {
  input_hours.value = "";
  input_minutes.value = "";
  text_box.style.color = "black";
  set.currentTime = 0;
  set.play();
  flag = true;
  hours = Math.floor(Math.random() * 12 + 1);
  switch (mode.value) {
    case "easy":
      minutes = Math.floor(Math.random() * 4) * 15;
      break;
    case "normal":
      minutes = Math.floor(Math.random() * 12) * 5;
      break;
    case "difficult":
      minutes = Math.floor(Math.random() * 60);
      break;
  }
  if (type.value == "nanji") {
    text_box.innerHTML = "なんじ　なんふん？";
    draw();
  } else if (type.value == "ugokasu") {
    hari_hours = hours;
    hari_minutes = minutes;
    text_box.innerHTML = `${hari_hours}じ　${hari_minutes}ふんに　はりを　うごかそう`;
    hours = 6;
    minutes = 0;
    tokei_range.value = 360;
    draw();
  }
});

type.addEventListener("change", () => {
  set.currentTime = 0;
  set.play();
});

mode.addEventListener("change", () => {
  switch (mode.value) {
    case "easy":
      tokei_range.step = 15;
      break;
    case "normal":
      tokei_range.step = 5;
      break;
    case "difficult":
      tokei_range.step = 1;
      break;
  }
  set.currentTime = 0;
  set.play();
});

hint1.addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  if (Hint == "hint1") {
    Hint = "";
  } else {
    Hint = "hint1";
  }
  draw();
});

hint2.addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  if (Hint == "hint2") {
    Hint = "";
  } else {
    Hint = "hint2";
  }
  draw();
});

input_hours.addEventListener("change", () => {
  pi.currentTime = 0;
  pi.play();
});

input_minutes.addEventListener("change", () => {
  pi.currentTime = 0;
  pi.play();
});

check.addEventListener("click", () => {
  if (hours == 0) hours = 12;
  if (type.value == "nanji") {
    var answer_hours = input_hours.value;
    if (input_hours.value == 0) input_hours.value = 12;
    var answer_minutes = input_minutes.value;
  } else if (type.value == "ugokasu") {
    hours = hari_hours;
    minutes = hari_minutes;
    var answer_hours = Math.floor(tokei_range.value / 60);
    if (answer_hours == 0) answer_hours = 12;
    var answer_minutes = Math.floor(tokei_range.value % 60);
  }

  if (hours == answer_hours && minutes == answer_minutes && flag == true) {
    sendRight();
    flag = false;
  } else if ((hours != answer_hours || minutes != answer_minutes) && flag == true) {
    sendWrong();
  }
});
ans.addEventListener("click", () => {
  seikai2.currentTime = 0;
  seikai2.play();
  if (hours == 0) hours = 12;
  if (type.value == "nanji") {
    text_box.style.color = "red";
    text_box.innerHTML = `こたえは　${hours}じ　${minutes}ふん　です。`;
  } else if (type.value == "ugokasu") {
    hours = hari_hours;
    minutes = hari_minutes;
    draw();
  }
});

function mRotate() {
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineWidth = 3.0;
  ctx.lineTo(200 + 130 * Math.cos((Math.PI / 180) * (270 + 6 * minutes)), 200 + 130 * Math.sin((Math.PI / 180) * (270 + 6 * minutes)));
  ctx.strokeStyle = "blue";
  ctx.stroke();
}

function hRotate() {
  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineWidth = 6.0;
  ctx.lineTo(200 + 100 * Math.cos((Math.PI / 180) * (270 + 30 * (hours + minutes / 60))), 200 + 100 * Math.sin((Math.PI / 180) * (270 + 30 * (hours + minutes / 60))));
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function rotate() {
  mRotate();
  hRotate();
}

function drawText() {
  ctx.font = "30px 'ＭＳ ゴシック'";
  ctx.textAlign = "center";
  const textArrX = [260, 305, 325, 310, 265, 200, 140, 95, 75, 95, 135, 200];
  const textArrY = [105, 150, 210, 275, 320, 335, 320, 270, 210, 150, 105, 85];
  const textArrX2 = [200, 280, 340, 360, 340, 280, 200, 120, 60, 40, 60, 120];
  const textArrY2 = [45, 65, 125, 205, 285, 345, 365, 345, 285, 205, 125, 65];
  for (let i = 0; i <= 11; i++) {
    ctx.fillText(i + 1, textArrX[i], textArrY[i]);
  }
  ctx.font = "15px 'ＭＳ ゴシック'";
  if (Hint == "hint1") {
    for (let i = 0; i <= 11; i++) {
      ctx.fillText(i * 5, textArrX2[i], textArrY2[i]);
    }
  } else if (Hint == "hint2") {
    for (let i = 0; i < 60; i++) {
      ctx.fillText(i, 200 + 160 * Math.cos((Math.PI / 180) * (270 + i * 6)), 205 + 160 * Math.sin((Math.PI / 180) * (270 + i * 6)));
    }
  }
  ctx.font = "10px 'ＭＳ ゴシック'";
}

function drawScale() {
  for (let l = 0; l < 60; l++) {
    ctx.beginPath();
    ctx.moveTo(200 + 150 * Math.cos((Math.PI / 180) * (270 + l * 6)), 200 + 150 * Math.sin((Math.PI / 180) * (270 + l * 6)));
    ctx.lineTo(200 + 145 * Math.cos((Math.PI / 180) * (270 + l * 6)), 200 + 145 * Math.sin((Math.PI / 180) * (270 + l * 6)));
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
  for (let m = 0; m < 12; m++) {
    ctx.beginPath();
    ctx.moveTo(200 + 150 * Math.cos((Math.PI / 180) * (270 + m * 30)), 200 + 150 * Math.sin((Math.PI / 180) * (270 + m * 30)));
    ctx.lineTo(200 + 140 * Math.cos((Math.PI / 180) * (270 + m * 30)), 200 + 140 * Math.sin((Math.PI / 180) * (270 + m * 30)));
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }
}

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(200, 200, 150, 0, Math.PI * 2);
  ctx.lineWidth = 1.0;
  ctx.strokeStyle = "black";
  ctx.stroke();
}

function draw() {
  drawBoard();
  drawScale();
  drawText();
  rotate();
}

draw();
