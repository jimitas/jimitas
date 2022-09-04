//和音
const C = ["C3", "C4", "E4", "G4"];
const Dm = ["D3", "D4", "F4", "A4"];
const Em = ["E3", "E4", "G4", "B4"];
const F = ["F3", "F4", "A4", "C5"];
const G = ["G3", "G4", "B4", "D5"];
const Am = ["A3", "A4", "C5", "E5"];
const Bm_5 = ["B3", "B4", "D5", "F5"];
const CM7 = ["C4", "E4", "G4", "B4"];
const Dm7 = ["D4", "F4", "A4", "C5"];
const Em7 = ["E4", "G4", "B4", "D5"];
const FM7 = ["F4", "A4", "C5", "E5"];
const G7 = ["G4", "B4", "D5", "F5"];
const Am7 = ["A4", "C5", "E5", "G5"];
const Bm7_5 = ["B4", "D5", "F5", "A5"];
const No = ["", "", "", ""];

const Chord = [C, Dm, Em, F, G, Am, Bm_5, CM7, Dm7, Em7, FM7, G7, Am7, Bm7_5, No];
const ChordName = ["C", "Dm", "Em", "F", "G", "Am", "Bm_5", "CM7", "Dm7", "Em7", "FM7", "G7", "Am7", "Bm7_5", "とめる"];

//シンセ生成
var synth = new Tone.PolySynth().toMaster();
Tone.Transport.bpm.value = 84;

document.getElementById("tempo").addEventListener("input", () => {
  Tone.Transport.bpm.value = tempo.value;
  document.getElementById("range").innerText = tempo.value + "　";
});

const TBL = document.createElement("table");
for (let i = 0; i < 2; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 7; j++) {
    const td = document.createElement("td");
    const btn = document.createElement("button");
    btn.style.width = "100px";
    if (i == 0) {
      btn.classList.add("btn", "btn-primary", "m-2");
    } else if (i == 1) {
      btn.classList.add("btn", "btn-success", "m-2");
    }
    btn.innerHTML = `${j + 1}の和音<br>(${ChordName[i * 7 + j]})`;
    btn.addEventListener("click", () => {
      synth.triggerAttackRelease(Chord[i * 7 + j], "1n");
    });
    td.appendChild(btn);
    tr.appendChild(td);
  }
  TBL.appendChild(tr);
}
document.getElementById("piano").appendChild(TBL);
const btn = document.createElement("button");
btn.style.width = "100px";
btn.classList.add("btn", "btn-danger", "m-2");
btn.innerHTML = "とめる";
btn.addEventListener("click", () => {
  synth.triggerAttackRelease(No, "16n");
});
document.getElementById("piano").appendChild(btn);
