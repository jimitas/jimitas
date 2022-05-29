set.play();
scoreWright();
text_box.innerText = "";
var hikasu = 0;
var kasu = 0;
var answer = 0;

form_select.addEventListener("change", () => {
  console.log(calc_L.value);
});

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
}

function createBlocks() {
  flag = false;
  //モードによって式を変える
  switch (form_select.value) {
    case "1":
      answer = Math.floor(Math.random() * 10 + 1);
      hikasu = Math.floor(Math.random() * answer + 1);
      kasu = answer - hikasu;
      break;
    case "2":
      answer = Math.floor(Math.random() * 10 + 11);
      var mode = Math.floor(Math.random() * 2 + 1);
      if (mode === 1) {
        hikasu = 10;
        kasu = answer - hikasu;
      } else if (mode === 2) {
        kasu = 10;
        hikasu = answer - kasu;
      }
      break;
    case "3":
      answer = Math.floor(Math.random() * 9 + 12);
      var mode = Math.floor(Math.random() * 2 + 1);
      if (mode === 1) {
        hikasu = Math.floor(Math.random() * (answer - 11) + 1);
        kasu = answer - hikasu;
      } else if (mode === 2) {
        kasu = Math.floor(Math.random() * (answer - 11) + 1);
        hikasu = answer - kasu;
      }
      break;
    case "4":
      hikasu = Math.floor(Math.random() * 9 + 2);
      kasu = Math.floor(Math.random() * hikasu + (10 - hikasu) + 1);
      answer = hikasu + kasu;
      break;
  }
  calc_L.value = hikasu;
  calc_R.value = kasu;
  calc_result.value = "";

  createTables();
  text_box.setAttribute("class", "alert alert-light text-center");
}

function createTables() {
  clearTables();
  var remain_right = 0;
  var remain_left = 0;
  var put_left = hikasu;
  if (put_left > 9) {
    put_left = 10;
    remain_right = hikasu - 10;
  }
  var put_right = kasu;
  if (put_right > 9) {
    put_right = 10;
    remain_left = kasu - 10;
  }
  for (let i = 0; i < 2; i++) {
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
        if (i === 1 && row * 5 + col < put_right) {
          const div = document.createElement("div");
          div.classList.add("draggable-elem");
          div.setAttribute("draggable", "true");
          div.style.backgroundColor = "#3b82c4";
          td.appendChild(div);
        }
      }
      if (i === 0) TBL_A.appendChild(tr);
      if (i === 1) TBL_B.appendChild(tr);
    }
  }
  for (let i = 0; i < remain_left; i++) {
    const div = document.createElement("div");
    div.classList.add("draggable-elem");
    div.setAttribute("draggable", "true");
    div.style.backgroundColor = "#3b82c4";
    TBL_A.rows[1 - parseInt(i / 5)].cells[4 - (i % 5)].appendChild(div);
  }
  for (let i = 0; i < remain_right; i++) {
    const div = document.createElement("div");
    div.classList.add("draggable-elem");
    div.setAttribute("draggable", "true");
    div.style.backgroundColor = "#ff2599";
    TBL_B.rows[1 - parseInt(i / 5)].cells[4 - (i % 5)].appendChild(div);
  }
  ugoki();
}

createBlocks();
