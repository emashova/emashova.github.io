class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    
    this.innerHTML = `
      <div class="footer-content">
        <div class="footer-main">
          <p class="text-sm text-muted">© ${year} Арина Емашова</p>
          <a href="mailto:emashovaarina@gmail.com" class="footer-email">emashovaarina@gmail.com</a>
        </div>
        <div class="footer-legal text-sm text-muted">
          <a href="/privacy">Конфиденциальность</a>
          <a href="/terms">Правила пользования</a>
        </div>
      </div>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
