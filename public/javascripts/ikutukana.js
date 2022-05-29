set.play();
scoreWright();
text_box.innerText = "";

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

for (let i = 1; i < 11; i++) {
  document.getElementById("btn" + i).addEventListener("click", () => {
    checkAnswer(i,answer);
  });
}

function createBlocks() {
  flag = false;
  field.innerHTML = "";
  text_box.innerText = "いくつかな？";
  text_box.setAttribute("class", "alert alert-light text-center");
  var max_answer = form_select.value;
  answer = Math.floor(Math.random() * max_answer + 1);
  for (let i = 0; i < answer; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", "../images/apple.png");
    div.appendChild(img);
    field.appendChild(div);
  }
}

createBlocks();
