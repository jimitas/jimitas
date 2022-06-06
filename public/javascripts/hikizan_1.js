set.play();
scoreWright();
text_box.innerText = "";
var higensu = 0;
var gensu = 0;
var answer = 0;

question.addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  createBlocks();
});

next.addEventListener("click", () => {
  pi.currentTime = 0;
  pi.play();
  createBlocks();
});

shiki_set.addEventListener("click", () => {
  higensu = calc_L.value;
  gensu = calc_R.value;
  answer = higensu - gensu;
  if (higensu > 20) {
    alert.currentTime = 0;
    alert.play();
    window.alert("20までのかずにしましょう。");
    return;
  } else if (higensu < gensu) {
    alert.currentTime = 0;
    alert.play();
    window.alert("ひくかずは　ひかれるかずより　ちいさくしましょう。");
    return;
  } else {
    set.currentTime = 0;
    set.play();
  }
  createTables();
});

show_answer.addEventListener("click", () => {
  reset.currentTime = 0;
  reset.play();
  calc_result.value = answer;
  calc_result.style.color = "blue";
  flag = true;
});

form_select.addEventListener("change", () => {
  set.currentTime = 0;
  set.play();
  createBlocks();
});

calc_result.addEventListener("change", () => {
  checkAnswer(calc_result.value, answer);
});

for (let i = 0; i < 21; i++) {
  document.getElementById("btn" + i).addEventListener("click", () => {
    calc_result.value = i;
    checkAnswer(i, answer);
  });
}

function clearTables() {
  TBL_A.innerHTML = "";
  TBL_B.innerHTML = "";
  TBL_C.innerHTML = "";
}

function createBlocks() {
  flag = false;
  //モードによって式を変える
  switch (form_select.value) {
    case "1":
      higensu = Math.floor(Math.random() * 10 + 1);
      gensu = Math.floor(Math.random() * higensu + 1);
      break;
    case "2":
      higensu = 10;
      gensu = Math.floor(Math.random() * higensu + 1);
      break;
    case "3":
      higensu = Math.floor(Math.random() * 9 + 11);
      gensu = Math.floor(Math.random() * (higensu - 11) + 1);
      break;
    case "4":
      higensu = Math.floor(Math.random() * 9 + 11);
      var ichi = 20 - higensu;
      gensu = Math.floor(Math.random() * ichi + (10 - ichi));
      break;
  }
  answer = higensu - gensu;
  calc_L.value = higensu;
  calc_R.value = gensu;
  calc_result.value = answer; //
  createTables();
}

function createTables() {
  clearTables();
  text_box.innerText = "";
  text_box.setAttribute("class", "alert alert-light text-center");
  calc_result.style.color = "black";
  calc_result.value = "";
  var remain_right = 0;
  var put_left = higensu;
  if (put_left > 9) {
    put_left = 10;
    remain_right = higensu - 10;
  }
  for (let i = 0; i < 3; i++) {
    for (let row = 0; row < 2; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 5; col++) {
        const td = document.createElement("td");
        td.classList.add("droppable-elem");
        tr.appendChild(td);
        if (i === 0 && row * 5 + col < put_left) {
          const div = document.createElement("div");
          div.classList.add("draggable-elem");
          div.setAttribute("draggable", "true");
          div.style.backgroundColor = "#ff2599";
          td.appendChild(div);
        }
        if (i === 1 && row * 5 + col < remain_right) {
          const div = document.createElement("div");
          div.classList.add("draggable-elem");
          div.setAttribute("draggable", "true");
          div.style.backgroundColor = "#3b82c4";
          td.appendChild(div);
        }
      }
      if (i === 0) TBL_A.appendChild(tr);
      if (i === 1) TBL_B.appendChild(tr);
      if (i === 2) TBL_C.appendChild(tr);
    }
  }
  ugoki();
}

createBlocks();
