set.play();
scoreWright();
text_box.innerText = "「もんだい」か「しらべる」を　おしてね。";
var count_result;
flag = "wait";

question.addEventListener("click", () => {
  pi.currentTime = 0;
  pi.play();
  createBlocks();
});
next.addEventListener("click", () => {
  pi.currentTime = 0;
  pi.play();
  createBlocks();
});
count.addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  countBlock();
  text_box.setAttribute("class", "alert alert-light text-center");
  if (flag === false) {
    text_box.innerText = count_result + "こ　ならべたよ。" + answer + "こ　ならべよう。";
  } else {
    text_box.innerText = count_result + "こ　ならべたよ。";
  }
});
form_select.addEventListener("change", () => {
  set.currentTime = 0;
  set.play();
  createTables();
});
check_answer.addEventListener("click", () => {
  countBlock();
  checkAnswer(count_result, answer);
});

function countBlock() {
  count_result = $("#TBL_A .draggable-elem").length + $("#TBL_B .draggable-elem").length;
}
function clearTables() {
  TBL_A.innerHTML = "";
  TBL_B.innerHTML = "";
  TBL_C.innerHTML = "";
  TBL_D.innerHTML = "";
}
function createBlocks() {
  createTables();
  flag = false;
  var max_answer = form_select.value;
  answer = Math.floor(Math.random() * max_answer + 1);
  text_box.innerText = answer + "こ　ならべよう。";
  text_box.setAttribute("class", "alert alert-light text-center");
}
function createTables() {
  clearTables();
  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < 2; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 5; col++) {
        const td = document.createElement("td");
        td.classList.add("droppable-elem");
        tr.appendChild(td);
        if (i > 1) {
          const div = document.createElement("div");
          div.classList.add("draggable-elem");
          div.setAttribute("draggable", "true");
          td.appendChild(div);
          if (i == 2) {
            div.style.backgroundColor = "#ff2599";
          } else if (i == 3) {
            div.style.backgroundColor = "#3b82c4";
          }
        }
      }
      switch (i) {
        case 0:
          TBL_A.appendChild(tr);
          break;
        case 1:
          TBL_B.appendChild(tr);
          break;
        case 2:
          TBL_C.appendChild(tr);
          break;
        case 3:
          TBL_D.appendChild(tr);
          break;
      }
    }
  }
  ugoki();
}

createTables();
