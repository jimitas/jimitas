set.play();
scoreWright();
flag = false;
const katakana_data_1 = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤ　ユ　ヨラリルレロワ　ヲ　ン";
const katakana_data_2 = "ガキグゲゴザジズゼゾダヂヅデドバビブベボパピプペポーャュョッ";
const moji_togle = document.getElementById("moji_togle");
const TBL_katakana_1 = document.getElementById("TBL_katakana");

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
  TBL_katakana_1.innerHTML = "";
  switch (moji_togle.checked) {
    case false:
      var katakana_data = katakana_data_1;
      var moji_color = "burlywood";
      break;
    case true:
      var katakana_data = katakana_data_2;
      var moji_color = "#f7c6bd";
      break;
  }

  //文字テーブル作成
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const td = document.createElement("td");
      td.classList.add("katakana_masu");
      td.style.backgroundColor = moji_color;
      const div = document.createElement("div");
      let moji;
      moji = katakana_data.charAt((9 - j) * 5 + i);
      div.classList.add("katakana_moji");
      div.innerHTML = moji;
      div.addEventListener("click", () => {
        input_box.style.color = "black";
        if (input_box.innerText.length < 10) {
          pi.currentTime = 0;
          pi.play();
          input_box.innerText = input_box.innerText + moji;
        } else {
          alert.currentTime = 0;
          alert.play();
          text_box.innerText = "１０もじまでにしてね。";
          text_box.setAttribute("class", "alert alert-danger text-center");
        }
      });
      td.appendChild(div);
      tr.appendChild(td);
    }
    TBL_katakana.appendChild(tr);
  }
}
