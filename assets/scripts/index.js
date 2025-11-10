const mobileNavButton = document.querySelector('.mobile-nav-button');
const headerMobile = document.querySelector('.header-mobile');
let flag = false;

if (mobileNavButton && headerMobile) {
  mobileNavButton.addEventListener('click', () => {
    flag = !flag;
    if (flag) {
      headerMobile.style.opacity = '1';
      headerMobile.style.pointerEvents = 'all';
    } else {
      headerMobile.style.opacity = '0';
      headerMobile.style.pointerEvents = 'none';
    }
  });
}