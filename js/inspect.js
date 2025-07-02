document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('a[href="#inspect"]');
    const panel = document.getElementById('inspect');
    const close = document.getElementById('closeInspect');
  
    link.addEventListener('click', e => {
      e.preventDefault();
      panel.classList.remove('hidden');
      if (typeof initJsGame === 'function') initJsGame();
      if (typeof initMipsGame === 'function') initMipsGame();
    });
  
    close.addEventListener('click', () => {
      panel.classList.add('hidden');
    });
  });
  