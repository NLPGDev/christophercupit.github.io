var velocity = 100;
var positionX = 0;
var positionY = 0;
var reverse = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
var Xmin = 0;
  var Xmax = 300;
  var Ymin = 0;
  var Ymax = 300;
  if (reverse = true) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  
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

  
// This call the moveBall function every 100ms
setInterval(moveBall, 100);
