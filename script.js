document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      
      const icon = menuBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('ri-menu-3-line');
        icon.classList.toggle('ri-close-line');
      }
    });
  }

  // console.log("Working");

  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('click', function () {
      navItems.forEach((nav) => nav.classList.remove('active'));
      this.classList.add('active');
      if (navMenu && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        const icon = menuBtn ? menuBtn.querySelector('i') : null;
        if (icon) {
          icon.classList.add('ri-menu-3-line');
          icon.classList.remove('ri-close-line');
        }
      }
    });
  });
  const revealElements = document.querySelectorAll('.reveal');

  // console.log("Working");

  function handleScrollReveal() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScrollReveal);
  handleScrollReveal();
});
