//和音
var C_chord = ["C3", "C4", "E4", "G4"];
var F_chord = ["F2", "C4", "F4", "A4"];
var G_chord = ["G2", "B3", "D4", "G4"];
var G7_chord = ["G2", "B3", "F4", "G4"];
var Am_chord = ["A2", "C4", "E4", "A4"];
var Dm_chord = ["D2", "D3", "F4", "A4"];
var E_chord = ["E3", "B3", "E4", "G#4"];
var E7_chord = ["E3", "D4", "E4", "G#4"];
var stop_chord = ["", "", "", ""];

//シンセ生成
var synth = new Tone.PolySynth().toMaster();
Tone.Transport.bpm.value = 84;

document.getElementById("tempo").addEventListener("input", () => {
  Tone.Transport.bpm.value = tempo.value;
  document.getElementById("range").innerText = tempo.value + "　";
});

function chord(c) {
  switch (c) {
    case 1:
      synth.triggerAttackRelease(C_chord, "1n");
      break;
    case 2:
      synth.triggerAttackRelease(F_chord, "1n");
      break;
    case 3:
      synth.triggerAttackRelease(G_chord, "1n");
      break;
    case 4:
      synth.triggerAttackRelease(G7_chord, "1n");
      break;
    case 5:
      synth.triggerAttackRelease(Am_chord, "1n");
      break;
    case 6:
      synth.triggerAttackRelease(Dm_chord, "1n");
      break;
    case 7:
      synth.triggerAttackRelease(E_chord, "1n");
      break;
    case 8:
      synth.triggerAttackRelease(E7_chord, "1n");
      break;
    case 9:
      synth.triggerAttackRelease(stop_chord, "16n");
      break;
  }
}
