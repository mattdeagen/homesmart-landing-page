import './style.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

const menuClosed = document.getElementById('menu-closed')
const menuOpen = document.getElementById('menu-open')

navBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
  menuClosed.classList.toggle('hidden');
  menuOpen.classList.toggle('hidden');
})