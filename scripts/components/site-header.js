class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <button class="burger" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <a href="/" class="logo">Арина Емашова</a>
        <div class="nav-right">
          <ul class="nav-links">
            <li><a href="#cases">Кейсы</a></li>
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#services">Услуги</a></li>
          </ul>
          <a href="https://t.me/winkisoo" class="btn-telegram" target="_blank" rel="noopener">
            <span class="btn-text">Связаться в Telegram</span>
            <span class="btn-icon">
              <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </span>
          </a>
        </div>
      </nav>
      <div class="mobile-menu">
        <a href="#cases">Кейсы</a>
        <a href="#about">Обо мне</a>
        <a href="#reviews">Отзывы</a>
        <a href="#services">Услуги</a>
      </div>
    `;

    const burger = this.querySelector('.burger');
    const mobileMenu = this.querySelector('.mobile-menu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }
}

customElements.define('site-header', SiteHeader);
