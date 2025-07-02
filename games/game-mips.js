const mipsHud = document.getElementById('mipsGameOutput');
let mipsScore = 0;

function simulateMipsLogic() {
  mipsScore += 1;

  mipsHud.innerText = `
MIPS REGISTER STATUS:
-----------------------
$t0: ${10 + mipsScore}
$t1: ${5 * mipsScore}
$t2: ${mipsScore * mipsScore}

INSTRUCTION TRACE:
lw $t0, val
addi $t0, $t0, ${mipsScore}
sw $t0, val

Cycles Elapsed: ${100 + mipsScore}
`;

  if (mipsScore < 20) setTimeout(simulateMipsLogic, 1000);
}

simulateMipsLogic();
