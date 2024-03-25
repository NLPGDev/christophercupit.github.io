const balls = document.getElementsByClassName('ball');
const balls1 = document.getElementsByClassName('ball1');
document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  balls[0].style.left = x;
  balls[0].style.top = y;
  balls[0].transform = 'translate(-' + x + ',-' + y + ')';
  balls1[0].style.left = x;
  balls1[0].style.top = y;
  balls1[0].transform = 'translate(-' + x + ',-' + y + ')';
};