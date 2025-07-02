function initJsGame() {
  const canvas = document.getElementById('jsGameCanvas');
  const ctx = canvas.getContext('2d');

  let ball = { x:150, y:75, r:6, dx:2, dy:2 };
  let paddle = { x:10, y:55, w:8, h:36, dy:0, speed:4 };
  const animate = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#a0aec0";
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
    ctx.fill();

    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

    paddle.y = Math.max(0, Math.min(canvas.height - paddle.h, paddle.y + paddle.dy));
    ball.x += ball.dx; ball.y += ball.dy;

    if (ball.y < ball.r || ball.y > canvas.height - ball.r) ball.dy *= -1;

    if (ball.x - ball.r < paddle.x + paddle.w &&
        ball.y > paddle.y &&
        ball.y < paddle.y + paddle.h) {
      ball.dx *= -1;
      ball.x = paddle.x + paddle.w + ball.r;
    }

    if (ball.x < 0) {
      ball.x = 150;
      ball.y = 75;
      ball.dx = 2;
      ball.dy = 2;
    }

    requestAnimationFrame(animate);
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'w') paddle.dy = -paddle.speed;
    if (e.key === 's') paddle.dy = paddle.speed;
  });
  document.addEventListener('keyup', e => {
    if (['w','s'].includes(e.key)) paddle.dy = 0;
  });

  animate();
}
