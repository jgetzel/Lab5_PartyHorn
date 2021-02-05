// main.js

// TODO

var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var volumeForm = document.getElementById("party-horn-form");

var volumeImage = document.getElementById("volume-image");
var soundImage = document.getElementById("sound-image");

var audio = document.getElementById("horn-sound");

var honkButton = document.getElementById("honk-btn");
var honkForm = document.getElementById("party-horn-form");

var airhornRadio = document.getElementById("radio-air-horn-container");
var carRadio = document.getElementById("radio-car-horn-container");
var partyRadio = document.getElementById("radio-party-horn-container");

//Allow inputs to change volume
volumeNumber.addEventListener("input", function(){ onChangeVolume(volumeNumber)});
volumeSlider.addEventListener("input", function(){ onChangeVolume(volumeSlider)});

//Make sure we don't refresh the page by accidentally submitting the form
volumeForm.addEventListener("submit", function(e){e.preventDefault()})
honkForm.addEventListener("submit", function(e){e.preventDefault()})

//Select the noise to be played
airhornRadio.addEventListener("change",function(){ 
    audio.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg";
});
carRadio.addEventListener("change", function(){ 
    audio.src = "./assets/media/audio/car-horn.mp3";
    soundImage.src = "./assets/media/images/car.svg";
} );
partyRadio.addEventListener("change", function(){ 
    audio.src = "./assets/media/audio/party-horn.mp3";
    soundImage.src = "./assets/media/images/party-horn.svg";
});

//Play the honk
honkButton.addEventListener("click", playAudio);

function onChangeVolume(trigger){

    //Check inputted Values
    if(isNaN(trigger.valueAsNumber)) {
        trigger.valueAsNumber = 0;
        console.log("Invalid Input");
    }
    if(trigger.valueAsNumber < 0) trigger.valueAsNumber = 0;
    if(trigger.valueAsNumber > 100) trigger.valueAsNumber = 100;

    //update visual values
    let volume = trigger.valueAsNumber;
    volumeNumber.valueAsNumber = volume;
    volumeSlider.valueAsNumber = volume;

    if(volume >= 67) volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    else if (volume >= 34) volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    else if (volume >= 1) volumeImage.src = "./assets/media/icons/volume-level-1.svg";
    else if (volume == 0) volumeImage.src = "./assets/media/icons/volume-level-0.svg";

    //Change audio levels
    audio.volume = (volume/100);


    //Disable "Honk" if volume is muted
    if(volume == 0) honkButton.disabled = true;
    else honkButton.disabled = false;

    console.log("Changed Volume to " + volume);
}

function playAudio(){
    audio.play();
}


