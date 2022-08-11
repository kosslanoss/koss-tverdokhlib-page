$(function(){
  
  const cursor = document.querySelector('.cursor');
  const links = document.querySelectorAll('a, .cursor-zoom');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  })

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('large');
    })
  })

  links.forEach(link => {
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('large');
    })
  })



  $('.header__cursor-btn').on('click', function () {
    $('.cursor').toggleClass('cursor--hidden');
  });



  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });



  $('.menu a').on('click', function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.hero__link').on('click', function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.btn-up').on('click', function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });



  const tabHeaders = document.querySelectorAll('[data-tab]');
  const contentBoxes = document.querySelectorAll('[data-tab-content]');
  const tabActive = document.querySelector('.expertise-tab__title--active');

  tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

      contentBoxes.forEach(function (item) {
        item.classList.add('expertise-tab__content-hidden');
      });
      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('expertise-tab__content-hidden');
    })
  });



  $('.expertise-tab__title').on('click', function (e) {
    $('.expertise-tab__title').removeClass('expertise-tab__title--active');
    $(this).addClass('expertise-tab__title--active');
  });
  
  

  const accordeonHeader = document.querySelectorAll('[data-name="accordeon-title"]')

  accordeonHeader.forEach(function (item) {
    item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('hidden');
    })
  })
  accordeonHeader.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('expertise-list__item-head--active');
    })
  })



  const buttonModal = document.querySelector('[data-modal-button]');
  const windowModal = document.querySelector('[data-modal]');
  const buttonModalClose = document.querySelector('[data-modal-close]');
  
    buttonModal.addEventListener('click', function () {
      windowModal.classList.remove('hidden');
      buttonModalClose.addEventListener('click', function () {
        windowModal.classList.add('hidden');
      })
      windowModal.addEventListener('click', function () {
        windowModal.classList.add('hidden');
      })
      windowModal.querySelector('.modal__window').addEventListener('click', function (e) {
        e.stopPropagation();
      })
      
    })



    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').on('click', function () {
      $(this).toggleClass('open');
    });



  const swiper = new Swiper('.motion__slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const swiper2 = new Swiper('.portfolio__slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  });

  

});



