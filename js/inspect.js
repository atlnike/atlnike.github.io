document.addEventListener('DOMContentLoaded', () => {
    const inspectLink = document.querySelector('a[href="#inspect"]');
    const inspectSection = document.getElementById('inspect');
    const closeBtn = document.getElementById('closeInspect');
  
    inspectLink.addEventListener('click', e => {
      e.preventDefault();
      inspectSection.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
  
      // INIT JavaScript game here (optional: restart if re-opened)
      if (typeof initJsGame === 'function') {
        initJsGame();
      }
  
      // INIT MIPS game here
      if (typeof initMipsGame === 'function') {
        initMipsGame();
      }
    });
  
    closeBtn.addEventListener('click', () => {
      inspectSection.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
  