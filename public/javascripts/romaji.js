set.play();
scoreWright();
const romaji_data_1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ' ĀĪŪĒŌ";
const romaji_data_2 = "abcdefghijklmnopqrstuvwxyz' âîûêô";
const moji_togle = document.getElementById("moji_togle");
const TBL_romaji = document.getElementById("TBL_romaji");

check_answer.addEventListener("click", () => {
  for (let num = 1; num < kotae_length + 1; num++) {
    kotae = romaji_kotoba[kotae_index + num];
    console.log(text_box.innerText, kotae);
    if (input_box.innerText == kotae) {
      sendRight();
      return;
    } else {
      sendWrong();
    }
  }
});

moji_togle.addEventListener("change", () => {
  pi.currentTime = 0;
  pi.play();
  createTable();
});

createTable();

function createTable() {
  TBL_romaji.innerHTML = "";
  switch (moji_togle.checked) {
    case false:
      var romaji_data = romaji_data_1;
      var moji_color = "burlywood";
      break;
    case true:
      var romaji_data = romaji_data_2;
      var moji_color = "#f7c6bd";
      break;
  }

  //文字テーブル作成
  for (let j = 4; j > -1; j--) {
    const tr = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      const td = document.createElement("td");
      td.classList.add("romaji_masu");
      td.style.backgroundColor = moji_color;
      const div = document.createElement("div");
      let moji;
      moji = romaji_data.charAt((4 - j) * 7 + i);
      div.classList.add("romaji_moji");
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
    TBL_romaji.appendChild(tr);
  }
}
