class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <a href="/" class="logo">Арина Емашова</a>
        <ul class="nav-links">
          <li><a href="#cases">Кейсы</a></li>
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#services">Услуги</a></li>
        </ul>
        <a href="https://t.me/winkisoo" class="button" target="_blank" rel="noopener">Telegram</a>
      </nav>
    `;
  }
}

customElements.define('site-header', SiteHeader);
