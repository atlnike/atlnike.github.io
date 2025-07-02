function initMipsGame() {
    const out = document.getElementById('mipsGameOutput');
    let score = 0;
    const step = () => {
      score++;
      out.textContent = `
  $t0: ${10+score}
  $t1: ${(5*score).toFixed(1)}
  $t2: ${(score*score)}
  [ lw $t0, val | addi $t0, $t0, ${score} | sw $t0, val ]
  Cycles: ${100 + score}
  `;
      if (score < 20) setTimeout(step, 1000);
    };
    out.textContent = 'Initializing...';
    setTimeout(step, 500);
  }
  