// expose.js
//import JSConfetti from '/assets/scripts/js-confetti.browser.js'

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  //we add all our event listeners here. Will trigger the outside functions
  //horn select listener
  let horn = document.getElementById("horn-select");
  horn.addEventListener('change', hornSelect);

  //volume listener
  let volumeSlider = document.getElementById("volume");
  volumeSlider.addEventListener('change', volumeSet);
  //btw the volume is set to 50% by default so lets make that happen
  let hornAudio = document.querySelector("#expose audio");
  hornAudio.volume = 0.5;

  //play sound listener
  let playSoundButton = document.querySelector("#expose button");
  playSoundButton.addEventListener('click', playSound);

  //creating instance of jsConfetting
}

function hornSelect(ev) {
  //let's show the correct image
  let hornImage = document.querySelector("#expose img");
  //let's keep the height the same so things don't move around while changing the source image
  let height = hornImage.height
  hornImage.src = "assets/images/" + ev.target.value + ".svg";
  hornImage.alt = "picture of a " + ev.target.options[ev.target.selectedIndex].text;
  hornImage.height = height;

  //let's load the audio. 
  let hornAudio = document.querySelector("#expose audio");
  hornAudio.src = "assets/audio/" + ev.target.value + ".mp3";
}

function volumeSet(ev) {
  let volumeLevel = ev.target.value;
  let volumeIconPath = "assets/icons/volume-level-"
  let volumeIcon = document.querySelector("#volume-controls img");
  if (volumeLevel == 0){
    volumeIcon.src = volumeIconPath + "0.svg";
  } else if (volumeLevel < 33) {
    volumeIcon.src = volumeIconPath + "1.svg";
  } else if (volumeLevel <  67){
    volumeIcon.src = volumeIconPath + "2.svg";
  } else {
    volumeIcon.src = volumeIconPath + "3.svg";
  }

  let hornAudio = document.querySelector("#expose audio");
  hornAudio.volume = volumeLevel/100;
}

function playSound(ev){
  let hornAudio = document.querySelector("#expose audio");
  hornAudio.pause();
  hornAudio.currentTime = 0;
  hornAudio.play();

  jsConfetti.addConfetti()
}