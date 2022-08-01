var jumpSound = new Audio("Resorsouces/jump.mp3");
var runSound = new Audio("Resorsouces/run.mp3 ");
var load_Music = new Audio("Resorsouces/bounce.mp3");
load_Music.loop = true;
runSound.loop = true;
let milSec = 100;
function keyCheck(event) {
  var keyCode = event.which;

//<!---Enter key function--->

  if (keyCode == 13) {
    // enter
    if (backgroundMoveAnimationId == 0) {
      backgroundMoveAnimationId = setInterval(backgroundMove, milSec);
    }
    if (boyRunAnimationId == 0) boyRunAnimationId = setInterval(boyRun, milSec);
    runSound.play();
    if (boxAnimationId == 0) {
      boxAnimationId = setInterval(boxAnimation, milSec);
    }
  }

  //<!---Space key function--->

  if (keyCode == 32) {
    //space
    if (boyJumpAnimationId == 0) {
      clearInterval(boyRunAnimationId);
      runSound.pause();
      runSound.currentTime = 0;
      boyRunAnimationId = 1;
      boyRunAnimationId = 0;
      boyJumpAnimationId = setInterval(boyJumpAnimation, milSec);
      jumpSound.play();
      
    }
    setTimeout(() => {
      if (boxAnimationId == 0) {
        boxAnimationId = setInterval(boxAnimation, milSec);
      }
    }, 1000);
  }
}

//<!--Score and background move and background move speed changing fucntion-->

var backgroundImagePositionX = 0;
var backgroundMoveAnimationId = 0;
var backgroundMove1AnimationId = 0;
var backgroundMove2AnimationId = 0;
var backgroundMove3AnimationId = 0;
var backgroundMove3AnimationId = 0;
var backgroundMove4AnimationId = 0;
var backgroundMove5AnimationId = 0;
var backgroundMove6AnimationId = 0;
var backgroundMove7AnimationId = 0;

var score = 0;
function backgroundMove() {
  backgroundImagePositionX = backgroundImagePositionX - 20;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
  if (score == 100) {
    backgroundMove1AnimationId = setInterval(backgroundMove1,milSec);
  }
  if (score == 200) {
    backgroundMove2AnimationId = setInterval(backgroundMove2,milSec);
  }
  if (score == 300) {
    backgroundMove3AnimationId = setInterval(backgroundMove3,milSec);
  }
  if (score == 400) {
    backgroundMove4AnimationId = setInterval(backgroundMove4,milSec);
  }
  if (score == 500) {
    backgroundMove5AnimationId = setInterval(backgroundMove5,200);
  }
  if (score == 600) {
    backgroundMove6AnimationId = setInterval(backgroundMove6,200);
  }
  if (score == 700) {
    backgroundMove7AnimationId = setInterval(backgroundMove7,200);
  }
}

function backgroundMove1() {
  backgroundImagePositionX = backgroundImagePositionX - 30;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
  
}
function backgroundMove2() {
  backgroundImagePositionX = backgroundImagePositionX - 40;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
}
function backgroundMove3() {
  backgroundImagePositionX = backgroundImagePositionX - 50;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
}
function backgroundMove4() {
  backgroundImagePositionX = backgroundImagePositionX - 60;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
}
function backgroundMove5() {
  backgroundImagePositionX = backgroundImagePositionX - 70;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
}
function backgroundMove6() {
  backgroundImagePositionX = backgroundImagePositionX - 80;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
}
function backgroundMove7() {
  backgroundImagePositionX = backgroundImagePositionX - 90;
  document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";
  score = score + 1;
  document.getElementById("score").innerHTML = score;
}
//<!--Boy run animation function setup-->

var boyRunAnimationId = 0;
var boyImageId = 1;
function boyRun() {
  boyImageId = boyImageId + 1;
  if (boyImageId == 9) {
    boyImageId = 1;
  }
  document.getElementById("boy").src = "Resorsouces/Run (" + boyImageId + ").png";
}

//<!--Boy Jump function setup-->

var boyJumpImageId = 1;
var boyJumpAnimationId = 0;
var boyMargingTop = 400;

function boyJumpAnimation() {
  boyJumpImageId = boyJumpImageId + 1;
  if (boyJumpImageId <= 7) {
    boyMargingTop = boyMargingTop - 30;
    document.getElementById("boy").style.marginTop = boyMargingTop + "px";
  }
  if (boyJumpImageId >= 8) {
    boyMargingTop = boyMargingTop + 10;
    document.getElementById("boy").style.marginTop = boyMargingTop + "px";
    boyMargingTop = 380;
  }
  if (boyJumpImageId == 13) {
    clearInterval(boyJumpAnimationId);
    jumpSound.pause();
    jumpSound.currentTime = 0;
    boyJumpImageId = 1;
    boyJumpAnimationId = 0;
    boyRunAnimationId = setInterval(boyRun, milSec);
    runSound.play();

    if (backgroundMoveAnimationId == 0) {
      backgroundMoveAnimationId = setInterval(backgroundMove, milSec);
    }
  }
  document.getElementById("boy").src = "Resorsouces/jump (" + boyJumpImageId + ").png";
}

//<!--Boy Dead function setup-->

var boyDeadImageId = 1;
var boyDeadAnimationId = 0;
var deadSound = new Audio("Resorsouces/dead.mp3");

function boyDeadAnimation() {
  boyDeadImageId = boyDeadImageId + 1;
  if (boyDeadImageId == 11) {
    clearInterval(boyDeadAnimationId);
    boyDeadImageId = 10;
    game_over_notify(score);
   
  }
  document.getElementById("boy").src = "Resorsouces/Dead (" + boyDeadImageId + ").png";
}

//<!--fire object made section and move section setup-->

var boxMragin = 1000;
function createBoxes() {
  for (var i = 0; i < 1000; i++) {
    var box = document.createElement("div");
    box.className = "box1";
    box.id = "box" + i;
    box.style.marginLeft = boxMragin + "px";
    boxMragin = boxMragin + 1000;
    document.getElementById("background").appendChild(box);
  }
}
var boxAnimationId = 0;
function boxAnimation() {
  for (var i = 0; i < 1000; i++) {
    var box = document.getElementById("box" + i);
    var curremtMarginLeft = getComputedStyle(box).marginLeft;
    var newMarginLeft = parseInt(curremtMarginLeft) - 50;
    box.style.marginLeft = newMarginLeft + "px";

    if ((newMarginLeft <= 170) & (newMarginLeft >= 120)) {
      if (boyMargingTop >= 380) {
        clearInterval(boxAnimationId);

        clearInterval(boyRunAnimationId);
        runSound.pause();
        boyRunAnimationId = -1;

        clearInterval(boyJumpAnimationId);
        jumpSound.pause();
        boyJumpAnimationId = -1;
        clearInterval(backgroundMoveAnimationId);
        backgroundMoveAnimationId = -1;
        clearInterval(backgroundMove1AnimationId);
        backgroundMove1AnimationId = -1;
        clearInterval(backgroundMove2AnimationId);
        backgroundMove2AnimationId = -1;
        clearInterval(backgroundMove3AnimationId);
        backgroundMove3AnimationId = -1;
        clearInterval(backgroundMove4AnimationId);
        backgroundMove4AnimationId = -1;
        clearInterval(backgroundMove5AnimationId);
        backgroundMove5AnimationId = -1;
        clearInterval(backgroundMove6AnimationId);
        backgroundMove6AnimationId = -1;
        clearInterval(backgroundMove7AnimationId);
        backgroundMove7AnimationId = -1;

        boyDeadAnimationId = setInterval(boyDeadAnimation, milSec);
        deadSound.play();

   
      }
    }
  }
}


