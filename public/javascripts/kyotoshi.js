set.play();
scoreWright();
const ken_A = ["右京区", "左京区", "北区", "南区", "東山区", "伏見区", "西京区", "山科区", "上京区", "下京区", "中京区"];
const ken_B = ["うきょうく", "さきょうく", "きたく", "みなみく", "ひがしやまく", "ふしみく", "にしきょうく", "やましなく", "かみぎょうく", "しもぎょうく", "なかぎょうく"];

question.addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  text_box.innerText="□に当てはまる番号を入れよう。"
  let num = [];
  let order = [];
  for (let n = 0; n < 11; n++) {
    num.push(n);
  }
  for (let n = 0; n < 11; n++) {
    order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
  }

  for (let n = 1; n <= 11; n++) {
    const ku = document.getElementById("ku_" + n);
    ku.innerText = parseInt(order[n - 1] + 1);
  }
});
