document.addEventListener('DOMContentLoaded', function () {

  /* ========== Секция: Мобильное меню ========== */
  var mobileMenu = document.getElementById('mobile-menu');
  var menuOpenBtn = document.querySelector('[data-menu-open]');
  var menuCloseBtns = document.querySelectorAll('[data-menu-close]');

  if (mobileMenu && menuOpenBtn) {
    function openMenu() {
      mobileMenu.classList.add('mobile-menu_is-open');
      document.body.classList.add('body_mobile-menu-open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      menuOpenBtn.setAttribute('aria-expanded', 'true');
      menuOpenBtn.setAttribute('aria-label', 'Закрыть меню');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      mobileMenu.classList.remove('mobile-menu_is-open');
      document.body.classList.remove('body_mobile-menu-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      menuOpenBtn.setAttribute('aria-expanded', 'false');
      menuOpenBtn.setAttribute('aria-label', 'Открыть меню');
      document.body.style.overflow = '';
    }
    menuOpenBtn.addEventListener('click', function () {
      if (mobileMenu.classList.contains('mobile-menu_is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    menuCloseBtns.forEach(function (btn) {
      btn.addEventListener('click', closeMenu);
    });
  }

  /* ========== Секция: Дропдаун «Каталог» в мобильном меню ========== */
  var dropdownBlock = document.querySelector('[data-dropdown]');
  var dropdownToggle = document.querySelector('[data-dropdown-toggle]');
  if (dropdownBlock && dropdownToggle) {
    dropdownToggle.addEventListener('click', function () {
      var isOpen = dropdownBlock.classList.toggle('mobile-menu__dropdown_is-open');
      dropdownToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  /* ========== Секция: Hero-contact ========== */
  var heroContact = document.getElementById('hero-contact');
  var contactTrigger = document.querySelector('[data-contact-trigger]');

  if (heroContact && contactTrigger) {
    contactTrigger.addEventListener('click', function () {
      heroContact.classList.toggle('hero-contact_is-open');
      var open = heroContact.classList.contains('hero-contact_is-open');
      heroContact.setAttribute('aria-expanded', open);
      contactTrigger.setAttribute('aria-label', open ? 'Закрыть' : 'Способы связи');
    });
  }

  /* ========== Секция: Табы каталога ========== */
  var catalogTabs = document.querySelectorAll('.catalog__tab');
  var catalogPanels = document.querySelectorAll('.catalog__panel');

  if (catalogTabs.length && catalogPanels.length) {
    catalogTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var tabName = this.getAttribute('data-tab');
        catalogTabs.forEach(function (t) { t.classList.remove('catalog__tab_active'); });
        this.classList.add('catalog__tab_active');
        catalogPanels.forEach(function (panel) {
          panel.classList.remove('catalog__panel_active');
          if (panel.getAttribute('data-panel') === tabName) {
            panel.classList.add('catalog__panel_active');
          }
        });
      });
    });
  }

  /* ========== Секция: Слайдер «О компании» ========== */
  var aboutGallery = document.querySelector('.about__gallery');
  if (aboutGallery) {
    new Swiper('.about__gallery', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: '.about__pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    });
  }
});
