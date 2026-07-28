document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.style.display === 'flex';
      navMenu.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '76px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#090a0f';
        navMenu.style.padding = '24px';
        navMenu.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
      }
    });
  }

  // Copy Email to Clipboard
  const emailBtn = document.getElementById('email-btn');
  const emailLabel = document.getElementById('email-label');

  if (emailBtn && emailLabel) {
    emailBtn.addEventListener('click', () => {
      const email = emailBtn.getAttribute('data-email');
      navigator.clipboard.writeText(email).then(() => {
        const originalText = emailLabel.textContent;
        emailLabel.textContent = 'E-mail copiado!';
        emailBtn.style.background = '#10b981';
        emailBtn.style.boxShadow = '0 0 24px rgba(16, 185, 129, 0.4)';

        setTimeout(() => {
          emailLabel.textContent = originalText;
          emailBtn.style.background = 'var(--accent-cyan)';
          emailBtn.style.boxShadow = '0 0 24px rgba(0, 229, 255, 0.3)';
        }, 3000);
      }).catch(err => {
        console.error('Erro ao copiar email:', err);
      });
    });
  }

  // Active Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
