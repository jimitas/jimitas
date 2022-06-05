let tate_masu = parseInt((window.innerHeight - 300) / 25);
let yoko_masu = parseInt((window.innerWidth - 200) / 25);
console.log(tate_masu, yoko_masu);
let line_thickness = "5px";
let div_color = "red";

const Colors = [
  "red",
  "あか",
  "black",
  "くろ",
  "yellow",
  "きいろ",
  "blue",
  "あお",
  "orange",
  "オレンジ",
  "white",
  "しろ",
  "green",
  "みどり",
  "purple",
  "むらさき",
  "pink",
  "ピンク",
  "brown",
  "ちゃいろ",
];

for (let i = 1; i <= 2; i++) {
  const Type = document.createElement("option");
  Type.value = i;
  if (i == 1) Type.textContent = "せんをひく";
  else if (i == 2) Type.textContent = "ますをぬる";
  masu_type.appendChild(Type);
}
for (let i = 1; i <= 10; i++) {
  const Color = document.createElement("option");
  Color.value = i;
  Color.textContent = Colors[i * 2 - 1];
  color_val.appendChild(Color);
}

document.getElementById("color_val").addEventListener("change", () => {
  div_color = Colors[color_val.value * 2 - 2];
  set.currentTime = 0;
  set.play();
});
document.getElementById("masu_type").addEventListener("change", () => {
  set.currentTime = 0;
  set.play();
});

document.getElementById("reset_btn").addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  var result = window.confirm("ぬった　いろを　もとに　もどしますか？");
  if (result === true) {
    reset.currentTime = 0;
    reset.play();
    var ele = document.getElementById("kei_sen");
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }
    masu_write();
  }
});

const Width = ["25px", "5px", "25px"];
const Left = ["20px", "15px", "20px"];
const Height = ["5px", "25px", "25px"];
const Top = ["120px", "125px", "125px"];
const B_color = ["lightblue", "lightblue", "white"];

masu_write();

function masu_write() {
  for (let h = 0; h < 3; h++) {
    for (let i = 0; i <= tate_masu; i++) {
      for (let j = 0; j <= yoko_masu; j++) {
        if ((h == 2 || h == 0) && j == yoko_masu) continue;
        if ((h == 2 || h == 1) && i == tate_masu) continue;
        const div = document.createElement("div");
        let flag = false;
        div.setAttribute("style", "position: fixed;");
        div.style.width = Width[h];
        div.style.height = Height[h];
        div.style.backgroundColor = B_color[h];
        div.style.top = `calc(${i * 30}px + ${Top[h]} )`;
        div.style.left = `calc(${j * 30}px + ${Left[h]})`;
        div.addEventListener("click", () => {
          pi.currentTime = 0;
          pi.play();
          if (h < 2) {
            div.style.cursor = "pointer";
            if ((masu_type.value == "1" && flag === false) || (masu_type.value == "1" && flag === true && div.style.backgroundColor != div_color)) {
              div.style.backgroundColor = div_color;
              flag = true;
            } else if (masu_type.value == "1" && flag === true && div.style.backgroundColor == div_color) {
              div.style.backgroundColor = B_color[h];
              flag = false;
            }
          } else if (h == 2) {
            if ((masu_type.value == "2" && flag === false) || (masu_type.value == "2" && flag === true && div.style.backgroundColor != div_color)) {
              div.style.backgroundColor = div_color;
              flag = true;
            } else if (masu_type.value == "2" && flag === true && div.style.backgroundColor == div_color) {
              div.style.backgroundColor = B_color[h];
              flag = false;
            }
          }
        });
        kei_sen.appendChild(div);
      }
    }
  }
}
