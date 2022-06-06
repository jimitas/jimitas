set.play();
scoreWright();
flag = "wait";
const ken_A = ["右京区", "左京区", "北区", "南区", "東山区", "伏見区", "西京区", "山科区", "上京区", "下京区", "中京区"];
const ken_B = ["うきょうく", "さきょうく", "きたく", "みなみく", "ひがしやまく", "ふしみく", "にしきょうく", "やましなく", "かみぎょうく", "しもぎょうく", "なかぎょうく"];
var num = [];
var order = [];

question.addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  flag = false;
  num = [];
  order = [];
  text_box.setAttribute("class", "alert alert-light text-center");
  text_box.innerText = "□に当てはまる番号を入れよう。";
  for (let n = 0; n < 11; n++) {
    num.push(n);
  }
  for (let n = 0; n < 11; n++) {
    order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
  }
  for (let n = 1; n <= 11; n++) {
    const ku = document.getElementById("ku_" + n);
    ku.innerText = parseInt(order[n - 1] + 1);
    ku_nyuryoku.rows[n - 1].cells[2].innerText = "　？";
    ku_nyuryoku.rows[n - 1].cells[2].style.color = "black";
    let ku_input = document.getElementById("ku_input_" + n);
    ku_input.value = "";
  }
});

check.addEventListener("click", () => {
  if (flag === false) {
    right.currentTime = 0;
    right.play();
    let count = 0;
    for (let n = 0; n < 11; n++) {
      let ku_input = document.getElementById("ku_input_" + (n + 1));
      if (ku_input.value != null && ku_input.value == parseInt(order[n] + 1)) {
        ku_nyuryoku.rows[n].cells[2].innerHTML = "<span style='color:red;'>　○<span/>";
        count++;
      } else {
        ku_nyuryoku.rows[n].cells[2].innerHTML = "<span style='color:red;'>　×<span/>";
      }
    }
    if (count === 11) {
      score += 9; //ボーナス加算分
      sendRight();
    }
  } else {
    alert.currentTime = 0;
    alert.play();
    text_box.innerText = "はじめに　もんだいを　おしてね。";
    text_box.setAttribute("class", "alert alert-danger text-center");
  }
});

show_answer.addEventListener("click", () => {
  if (flag === false) {
    reset.currentTime = 0;
    reset.play();
    flag = true;
    for (let n = 0; n < 11; n++) {
      ku_nyuryoku.rows[n].cells[2].innerText = "　" + parseInt(order[n] + 1) + "ばん";
      ku_nyuryoku.rows[n].cells[2].style.color = "blue";
    }
  } else {
    alert.currentTime = 0;
    alert.play();
    text_box.innerText = "はじめに　もんだいを　おしてね。";
    text_box.setAttribute("class", "alert alert-danger text-center");
  }
});
