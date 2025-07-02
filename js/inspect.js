const inspectSection = document.getElementById('inspect');
const javaPane = document.getElementById('java-pane');
const mipsPane = document.getElementById('mips-pane');
const closeBtn = document.getElementById('closeInspect');

// Open inspect on clicking the utility link (make sure utility link href="#inspect")
document.querySelector('a[href="#inspect"]').addEventListener('click', e => {
  e.preventDefault();
  inspectSection.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // disable background scroll
  javaPane.focus();
});

// Close button hides the showroom
closeBtn.addEventListener('click', () => {
  inspectSection.classList.add('hidden');
  document.body.style.overflow = ''; // restore scroll
});

// Sync scroll positions
javaPane.addEventListener('scroll', () => {
  mipsPane.scrollTop = javaPane.scrollTop;
});
mipsPane.addEventListener('scroll', () => {
  javaPane.scrollTop = mipsPane.scrollTop;
});
