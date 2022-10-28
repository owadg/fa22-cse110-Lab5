// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  loadVoices();
  //lets add a click event handler to the button
  let ptt = document.querySelector('#explore button');
  ptt.addEventListener('click', playTTS)
}

function loadVoices(){
  let voiceSelect = document.querySelector("#voice-select");
  let voices = speechSynthesis.getVoices();
  //name +(lang)
  let voiceOptions = [];
  for(let i = 0; i < voices.length; i++){
    let voiceOption = new Option();
    voiceOption.text = voices[i].name + " (" + voices[i].lang + ")";
    if (voices[i].default){
      voiceOption.text += ' -- DEFAULT';
    }
    voiceOption.setAttribute('data-lang', voices[i].lang);
    voiceOption.setAttribute('data-name', voices[i].name);
    voiceOption.setAttribute('voice-index', i);

    voiceSelect.appendChild(voiceOption);
  }
}

function playTTS(ev){
  let textArea = document.querySelector('#explore textarea');
  const utterThis = new SpeechSynthesisUtterance(textArea.value);
  let voiceSelect = document.querySelector("#voice-select");
  if (voiceSelect.value === "select"){
    alert("Please pick a voice.");
    return;
  }
  let voiceIndex = voiceSelect.selectedOptions[0].getAttribute('voice-index');
  let voices =  speechSynthesis.getVoices();
  utterThis.voice = voices[voiceIndex];

  let face = document.querySelector('#explore img');
  let oldSRC = face.src;
  let oldAlt = face.alt;
  face.src = "assets/images/smiling-open.png"
  face.alt = "Smiling talking face"

  utterThis.addEventListener('end', (event) => {face.src = oldSRC; face.alt = oldAlt;})
  //have it speak
  speechSynthesis.speak(utterThis);
}


