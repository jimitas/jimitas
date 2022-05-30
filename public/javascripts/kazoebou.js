const data = ["hyaku", "80px", "juu", "30px", "ichi", "20px", "gomibako", "60px"];
var count_result;
img_set();

count_bou.addEventListener("click", () => {
  set.currentTime = 0;
  set.play();
  count_result = $("#kazoebou_pallet .hyaku").length * 100 + $("#kazoebou_pallet .juu").length * 10 + $("#kazoebou_pallet .ichi").length;
  text_box.innerText = "かずの大きさは，" + count_result + "です。";
});

function img_set() {
  var ele = document.getElementById("kazoebou_pallet_2");
  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      const img = document.createElement("img");
      img.setAttribute("src", "./images/" + data[i * 2] + ".png");
      img.setAttribute("class", "draggable-elem");
      img.classList.add("class", data[i * 2]);
      img.style.width = data[i * 2 + 1];
      img.style.height = "80px";
      img.style.cursor = "pointer";
      kazoebou_pallet_2.appendChild(img);
    }
  }
  ugoki();
}

function f_end() {
  img_set();
}
