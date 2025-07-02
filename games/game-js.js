const canvas = document.getElementById('jsGameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 150;

let ball = {
  x: 150,
  y: 75,
  radius: 5,
  dx: 2, // Adjust this for ball speed
  dy: 2
};

let paddle = {
  width: 8,
  height: 40,
  x: 10,
  y: 55,
  speed: 4,
  dy: 0
};

function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  // Move paddle
  paddle.y += paddle.dy;
  if (paddle.y < 0) paddle.y = 0;
  if (paddle.y + paddle.height > canvas.height) paddle.y = canvas.height - paddle.height;

  // Ball movement
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Bounce
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) ball.dy *= -1;

  // Paddle collision
  if (ball.x - ball.radius < paddle.x + paddle.width &&
      ball.y > paddle.y &&
      ball.y < paddle.y + paddle.height) {
    ball.dx *= -1;
    ball.x = paddle.x + paddle.width + ball.radius;
  }

  // Missed
  if (ball.x - ball.radius < 0) {
    ball.x = 150;
    ball.y = 75;
    ball.dx = 2;
    ball.dy = 2;
  }

  requestAnimationFrame(update);
}

document.addEventListener('keydown', e => {
  if (e.key === 'w') paddle.dy = -paddle.speed;
  if (e.key === 's') paddle.dy = paddle.speed;
});

document.addEventListener('keyup', e => {
  if (e.key === 'w' || e.key === 's') paddle.dy = 0;
});

update();
