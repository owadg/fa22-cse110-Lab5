// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  loadVoices();

}

function loadVoices(){
  let voiceSelect = document.querySelector("#voice-select");
  let voices = speechSynthesis.getVoices();
  console.log(voices);
  let voiceOptions = [];
  for(let i = 0; i < voices.length; i++){
    let voiceOption = new Option();
    voiceOption.text = voices[i].name;
    console.log(voiceOption.text);
  }
}

