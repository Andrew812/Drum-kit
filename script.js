const button = document.getElementById("button");
const audio = document.getElementById("audio");

button.addEventListener("click", function() {
    audio.currentTime = 0;
    audio.play();
    
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyA') {
        audio.currentTime = 0;
        audio.play();
        button.classList.toggle('sound');
    }
});

document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyA') {
        button.classList.toggle('sound');
    }
});

const button1 = document.getElementById("button1");
const audio1 = document.getElementById("audio1");

button1.addEventListener("click", function() {
    audio1.currentTime = 0;
    audio1.play();
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyS') {
        audio1.currentTime = 0;
        audio1.play();
        button1.classList.toggle('sound');
    }
});
document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyS') {
        button1.classList.toggle('sound');
    }
});
const button2 = document.getElementById("button2");
const audio2 = document.getElementById("audio2");

button2.addEventListener("click", function() {
    audio2.currentTime = 0;
    audio2.play();
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyD') {
        audio2.currentTime = 0;
        audio2.play();
        button2.classList.toggle('sound');
    }
});
document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyD') {
        button2.classList.toggle('sound');
    }
});
const button3 = document.getElementById("button3");
const audio3 = document.getElementById("audio3");

button3.addEventListener("click", function() {
    audio3.currentTime = 0;
    audio3.play();
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyF') {
        audio3.currentTime = 0;
        audio3.play();
        button3.classList.toggle('sound');
    }
})
document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyF') {
        button3.classList.toggle('sound');
    }
});
const button4 = document.getElementById("button4");
const audio4 = document.getElementById("audio4");

button4.addEventListener("click", function() {
    audio4.currentTime = 0;
    audio4.play();
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyG') {
        audio4.currentTime = 0;
        audio4.play();
        button4.classList.toggle('sound');
    }
});
document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyG') {
        button4.classList.toggle('sound');
    }
});
const button5 = document.getElementById("button5");
const audio5 = document.getElementById("audio5");

button5.addEventListener("click", function() {
    audio5.currentTime = 0;
    audio5.play();
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyH') {
        audio5.currentTime = 0;
        audio5.play();
        button5.classList.toggle('sound');
    }
});
document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyH') {
        button5.classList.toggle('sound');
    }
});
const button6 = document.getElementById("button6");
const audio6 = document.getElementById("audio6");

button6.addEventListener("click", function() {
    audio6.currentTime = 0;
    audio6.play();
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyJ') {
        audio6.currentTime = 0;
        audio6.play();
        button6.classList.toggle('sound');
    }
});
document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyJ') {
        button6.classList.toggle('sound');
    }
});
const button7 = document.getElementById("button7");
const audio7 = document.getElementById("audio7");

button7.addEventListener("click", function() {
    audio7.currentTime = 0;
    audio7.play();
});

document.addEventListener("keydown", function (event) {
    if(event.code == 'KeyK') {
        audio7.currentTime = 0;
        audio7.play();
        button7.classList.toggle('sound');
    }
});
document.addEventListener("keyup", function (event) {
    if(event.code == 'KeyK') {
        button7.classList.toggle('sound');
    }
});