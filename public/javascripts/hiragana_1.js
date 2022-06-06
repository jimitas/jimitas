set.play();
scoreWright();
flag = false;
const hiragana_data_1 = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもや　ゆ　よらりるれろわっをーん";
const moji_togle = document.getElementById("moji_togle");
const TBL_hiragana_1 = document.getElementById("TBL_hiragana_1");

check_answer.addEventListener("click", () => {
  checkAnswer(input_box.innerText, kotae);
  if (result == "wrong") {
    text_box.innerText = "もういちど";
  }
});

moji_togle.addEventListener("change", () => {
  pi.currentTime = 0;
  pi.play();
  createTable();
});

createTable();

function createTable() {
  TBL_hiragana_1.innerHTML = "";
  switch (moji_togle.checked) {
    case false:
      var hiragana_data = hiragana_data_1;
      var moji_color = "burlywood";
      break;
    case true:
      var hiragana_data = hiragana_data_2;
      var moji_color = "#f7c6bd";
      break;
  }
  //文字テーブル作成
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const td = document.createElement("td");
      td.classList.add("hiragana_masu");
      td.style.backgroundColor = moji_color;
      const div = document.createElement("div");
      let moji;
      moji = hiragana_data.charAt((9 - j) * 5 + i);
      div.classList.add("hiragana_moji");
      div.innerHTML = moji;
      div.addEventListener("click", () => {
        input_box.style.color = "black";
        if (input_box.innerText.length < 10){
          pi.currentTime = 0;
          pi.play();
          input_box.innerText = input_box.innerText + moji;
        } else {
          alert.currentTime=0;
          alert.play();
          text_box.innerText ="１０もじまでにしてね。"
          text_box.setAttribute("class", "alert alert-danger text-center");
        };
      });
      td.appendChild(div);
      tr.appendChild(td);
    }
    TBL_hiragana_1.appendChild(tr);
  }
}
