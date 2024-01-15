var positionX = 100;
var positionY = 0;
var velocity = 100;
var reverse = false;
let x = 5;
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball3 = document.getElementById("ball3");
var ball4 = document.getElementById("ball4");
var ball5 = document.getElementById("ball5");
var ball6 = document.getElementById("ball6");
var ball7 = document.getElementById("ball7");
var ball8 = document.getElementById("ball8");
var ball9 = document.getElementById("ball9");
var ball10 = document.getElementById("ball10");
//const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
//write a function that can change the position of the html element "ball"

function moveBall() {
  const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
  var Xmin = 0;
  var Xmax = 400;

  var Ymin = 0;
  var Ymax = 400;
  context = myCanvas.getContext('2d');
    context.beginPath();

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = getRandom(0, 600)+'px';
    ball.style.top = getRandom(0, 600)+'px';
      ball2.style.left = getRandom(0, 600)+'px';
    ball2.style.top = getRandom(0, 600)+'px';
       ball3.style.left = getRandom(0, 600)+'px';
    ball3.style.top = getRandom(0, 600)+'px';
      ball4.style.left = getRandom(0, 600)+'px';
    ball4.style.top = getRandom(0, 600)+'px';
      ball5.style.left = getRandom(0, 600)+'px';
    ball5.style.top = getRandom(0, 600)+'px';
       ball6.style.left = getRandom(0, 600)+'px';
       ball6.style.top = getRandom(0, 600)+'px';
       ball7.style.left = getRandom(0, 600)+'px';
   ball7.style.top = getRandom(0, 600)+'px';
     ball8.style.left = getRandom(0, 600)+'px';
   ball8.style.top = getRandom(0, 600)+'px';
     ball9.style.left = getRandom(0, 600)+'px';
   ball9.style.top = getRandom(0, 600)+'px';
      ball10.style.left = getRandom(0, 600)+'px';
   ball10.style.top = getRandom(0, 600)+'px';
 } else {
   positionX = positionX + velocity;
   positionY = positionY + velocity;
   ball.style.left = getRandom(0, 600)+'px';
   ball.style.top = getRandom(0, 600)+'px';
     ball2.style.left = getRandom(0, 600)+'px';
   ball2.style.top = getRandom(0, 600)+'px';
      ball3.style.left = getRandom(0, 600)+'px';
   ball3.style.top = getRandom(0, 600)+'px';
     ball4.style.left = getRandom(0, 600)+'px';
   ball4.style.top = getRandom(0, 600)+'px';
     ball5.style.left = getRandom(0, 600)+'px';
   ball5.style.top = getRandom(0, 600)+'px';
      ball6.style.left = getRandom(0, 600)+'px';
   ball6.style.top = getRandom(0, 600)+'px';
       ball7.style.left = getRandom(0, 600)+'px';
   ball7.style.top = getRandom(0, 600)+'px';
     ball8.style.left = getRandom(0, 600)+'px';
   ball8.style.top = getRandom(0, 600)+'px';
     ball9.style.left = getRandom(0, 600)+'px';
   ball9.style.top = getRandom(0, 600)+'px';
      ball10.style.left = getRandom(0, 600)+'px';
   ball10.style.top = getRandom(0, 600)+'px';
 }
 if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}




setInterval(moveBall, 200);