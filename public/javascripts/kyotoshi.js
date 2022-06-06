set.play();
scoreWright();
flag = "wait";
const kyotoshi_ku_A = ["", "北区", "上京区", "左京区", "中京区", "東山区", "山科区", "下京区", "南区", "右京区", "西京区", "伏見区"];
const kyotoshi_ku_B = ["", "きたく", "かみぎょうく", "さきょうく", "なかぎょうく", "ひがしやまく", "やましなく", "しもぎょうく", "みなみく", "うきょうく", "にしきょうく", "ふしみく"];

var num = [];
var order = [];
var answer = [];

question.addEventListener("click", () => {
  set_question();
});

check.addEventListener("click", () => {
  check_answer();
});

show.addEventListener("click", () => {
  show_Answer();
});

function TBL_set() {
  TBL_kyotoshi.innerHTML = "";
  for (let i = 0; i < 11; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");
      switch (j) {
        case 0:
          td.innerText = i + 1;
          td.style.paddingRight = "10px";
          td.style.textAlign = "right";
          break;
        case 1:
          td.classList.add("droppable-elem");
          td.style.border = "solid 1px #333";
          td.style.width = "100px";
          break;
        case 2:
          td.style.width = "110px";
          break;
        case 3:
          td.classList.add("droppable-elem");
          td.style.border = "solid 1px #333";
          const div = document.createElement("div");
          div.classList.add("draggable-elem");
          div.style.border = "solid 1px #333";
          div.setAttribute("draggable", "true");
          div.innerHTML = `${kyotoshi_ku_B[i + 1]}<br>${kyotoshi_ku_A[i + 1]}`;
          td.appendChild(div);
          break;
      }
      tr.appendChild(td);
    }
    TBL_kyotoshi.appendChild(tr);
  }
  ugoki();
}
function set_question() {
  TBL_set();
  set.currentTime = 0;
  set.play();
  flag = false;
  text_box.setAttribute("class", "alert alert-light text-center");
  text_box.innerText = "□に当てはまる番号を入れよう。";
  num = [];
  order = [];

  //ランダムな配列を作る(問題)
  for (let n = 0; n < 11; n++) {
    num.push(n);
  }
  for (let n = 0; n < 11; n++) {
    order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
  }
  for (let n = 0; n < 11; n++) {
    answer[n] = `${kyotoshi_ku_B[order[n] + 1]}<br>${kyotoshi_ku_A[order[n] + 1]}`;
    console.log(n, answer[n]);
    const ku = document.getElementById("ku_" + order[n]);
    ku.innerText = parseInt(n + 1);
  }
}
function check_answer() {
  if (flag === false) {
    let count = 0;
    for (let n = 0; n < 11; n++) {
      let response = TBL_kyotoshi.rows[n].cells[1].firstChild;
      if (response != null && response.innerHTML == answer[n]) {
        TBL_kyotoshi.rows[n].cells[2].innerHTML = "<span style='color:red;'>　○<span/>";
        count++;
      } else {
        TBL_kyotoshi.rows[n].cells[2].innerHTML = "<span style='color:blue;'>　×<span/>";
      }
    }
    if (count === 11) {
      sendRight();
    } else {
      right.currentTime = 0;
      right.play();
    }
  } else {
    alert.currentTime = 0;
    alert.play();
    text_box.innerText = "はじめに　もんだいを　おしてね。";
    text_box.setAttribute("class", "alert alert-danger text-center");
  }
}
function show_Answer() {
  if (flag === false) {
    reset.currentTime = 0;
    reset.play();
    flag = true;
    for (let n = 0; n < 11; n++) {
      TBL_kyotoshi.rows[n].cells[2].style.color = "blue";
      TBL_kyotoshi.rows[n].cells[2].innerText = kyotoshi_ku_A[order[n] + 1];
    }
  } else {
    alert.currentTime = 0;
    alert.play();
    text_box.innerText = "はじめに　もんだいを　おしてね。";
    text_box.setAttribute("class", "alert alert-danger text-center");
  }
}
