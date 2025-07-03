const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const paddleWidth = 10, paddleHeight = 60, ballSize = 10;
let paddleY = canvas.height / 2 - paddleHeight / 2;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSpeedX = 5, ballSpeedY = 5;

function draw() {
  ctx.fillStyle = '#FF2800';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#FFF200';
  ctx.fillRect(canvas.width - paddleWidth, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = '#111111';
  ctx.fillRect(ballX - ballSize / 2, ballY - ballSize / 2, ballSize, ballSize);
}

function update() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  if (ballY < 0 || ballY > canvas.height) ballSpeedY = -ballSpeedY;
  if (ballX < 0) {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
  }
  if (ballX > canvas.width - paddleWidth && ballY > paddleY && ballY < paddleY + paddleHeight) {
    ballSpeedX = -ballSpeedX;
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') paddleY = Math.max(0, paddleY - 10);
  if (e.key === 'ArrowDown') paddleY = Math.min(canvas.height - paddleHeight, paddleY + 10);
});

function gameLoop() {
  draw();
  update();
  requestAnimationFrame(gameLoop);
}

gameLoop();