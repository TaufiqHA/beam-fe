document.addEventListener('DOMContentLoaded', () => {
  const headerWrapper = document.querySelector('.hero-header-wrapper');
  if (headerWrapper) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        headerWrapper.classList.add('scrolled');
      } else {
        headerWrapper.classList.remove('scrolled');
      }
    });
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const heroNavBar = document.querySelector('.hero-nav-bar');
  
  if (mobileMenuBtn && heroNavBar) {
    mobileMenuBtn.addEventListener('click', () => {
      heroNavBar.classList.toggle('active');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (heroNavBar && heroNavBar.classList.contains('active')) {
        heroNavBar.classList.remove('active');
      }

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
