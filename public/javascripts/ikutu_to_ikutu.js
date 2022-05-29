set.play();
scoreWright();
text_box.innerText = "";
var count_result;
var max_answer;

next.addEventListener("click", () => {
  pi.currentTime = 0;
  pi.play();
  createBlocks();
});

form_select.addEventListener("change", () => {
  set.currentTime = 0;
  set.play();
  createBlocks();
});

form_select_2.addEventListener("change", () => {
  set.currentTime = 0;
  set.play();
  createBlocks();
});

for (let i = 0; i < 11; i++) {
  document.getElementById("btn" + i).addEventListener("click", () => {
    checkAnswer(i,answer);
  });
}

function clearTables() {
  TBL_A.innerHTML = "";
  TBL_B.innerHTML = "";
}

function createBlocks() {
  flag = false;
  max_answer = form_select.value;
  createTables();
  answer = Math.floor(Math.random() * max_answer + 1);
  if (form_select_2.value == 0) text_box.innerText = max_answer + "は，" + "□" + "と" + answer;
  if (form_select_2.value == 1) text_box.innerText = max_answer + "は，" + answer + "と□";
  answer = max_answer - answer;
  text_box.setAttribute("class", "alert alert-light text-center");
}

function createTables() {
  clearTables();
  for (let i = 0; i < 2; i++) {
    for (let row = 0; row < 2; row++) {
      const tr = document.createElement("tr");
      for (let col = 0; col < 5; col++) {
        const td = document.createElement("td");
        td.classList.add("droppable-elem");
        tr.appendChild(td);
        if (i == form_select_2.value && row * 5 + col < max_answer) {
          const div = document.createElement("div");
          div.classList.add("draggable-elem");
          div.setAttribute("draggable", "true");
          td.appendChild(div);
          switch (form_select_2.value) {
            case "0":
              div.style.backgroundColor = "#ff2599";
              break;
            case "1":
              div.style.backgroundColor = "#3b82c4";
              break;
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
      }
    }
  }
  ugoki();
}

createBlocks();
