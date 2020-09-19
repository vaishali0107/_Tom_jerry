var scoreboard = 0;
var flag = true;

var music = new Audio("tom_and_jerry.mp3");
var music2 = new Audio("startsong.mp3");

document.onkeydown = function(e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        var dino = document.querySelector('.dino');
        dino.classList.add('dinoAnimation');
        setTimeout(() => {
            dino.classList.remove('dinoAnimation')
        }, 700);

    } else if (e.keyCode == 39) {
        var dino = document.querySelector('.dino');
        var dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dx + 80 + "px";
    } else if (e.keyCode == 37) {
        var dino = document.querySelector('.dino');
        var dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        console.log(dy);
        dino.style.left = dy - 80 + "px";
    }
}
setInterval(function myFunction() {
    var dino = document.querySelector(".dino");
    var dragon = document.querySelector(".dragon");
    var gameover = document.querySelector(".gameover");

    var dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    var dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));


    var drx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
    var dry = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

    var differencex = Math.abs(dx - drx);
    var differencey = Math.abs(dy - dry);
    if (differencex < 73 && differencey < 53) {
        gameover.style.visibility = 'visible';
        dragon.classList.remove("dragonAnimation");
        flag = false;
        setTimeout(() => {
            music2.pause();
        }, 10);
        music.play();
        setTimeout(() => {
            music.play();
        }, 1000);

    } else if (differencex < 120 && flag) {
        scoreboard = scoreboard + 1;
        updateScore(scoreboard);
        flag = false;
        setTimeout(() => {
            flag = true;
        }, 1000);
        setTimeout(() => {
            music2.play();
        }, 10);


    }
}, 10);

function updateScore(scoreboard) {
    score.innerHTML = "Your score:" + scoreboard;
}