const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('.res-nav-overlay').style.display='grid'
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.querySelector('.res-nav-overlay').style.display='none'

  }
});