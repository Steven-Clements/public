const open = document.getElementById('context-btn');
const close = document.getElementById('context-close');
const menu = document.getElementById('context-menu');

open.addEventListener('click', () => {
  menu.style.display = 'flex';
  close.style.display = 'block';
  open.style.display = 'none';
})

close.addEventListener('click', () => {
  menu.style.display = 'none';
  close.style.display = 'none';
  open.style.display = 'block';
})
