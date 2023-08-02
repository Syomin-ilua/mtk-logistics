const cap = document.querySelector('.header__cap');
const headerContainer = document.querySelector('.header__container');

window.addEventListener('DOMContentLoaded', function() {
  scrollPageController();
});

window.addEventListener('scroll', function() {
  scrollPageController();
});

function scrollPageController() {
  let scrollPage = Math.floor(this.scrollY);
    
  if(scrollPage >= 0) {
    cap.classList.add('header__fixed_cap');
    headerContainer.style.paddingTop = '207px';
  } else {
    cap.classList.remove('header__fixed_cap');
    headerContainer.style.paddingTop = '';
  }
}

// Бургер меню
const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu');
const headerDescription = document.querySelector('.header__description');
const burgerMenuBtnClose = document.querySelector('.burgerMenu__btn_close');


burgerBtn.addEventListener('click', function (e) { 
    e.preventDefault();

      burgerMenu.classList.add('active_menu');
      scrollController.disabledScroll();
      headerDescription.style.position = 'static';
      burgerBtn.style.opacity = '0';
});

burgerMenuBtnClose.addEventListener('click', function (e) { 
    e.preventDefault();
    
    burgerMenu.classList.remove('active_menu');
    headerDescription.style.position = 'relative';
    scrollController.enabledScroll();
    burgerBtn.style.opacity = '1';
});

const swiper = new Swiper(".reviews__swipper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const linksSectionDesktop = document.querySelectorAll('.link__desktop');
const linksSectionMobile = document.querySelectorAll('.link__mobile');

for(let link of linksSectionDesktop) {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const blockID = link.getAttribute('href');

      document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
  });
}

for(let link of linksSectionMobile) {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const blockID = link.getAttribute('href');

      burgerBtn.classList.remove('active_burger_btn');
      burgerMenu.classList.remove('active_menu');
      scrollController.enabledScroll();
      headerDescription.style.position = 'relative';
      burgerBtn.style.opacity = '1';
      

      document.querySelector('' + blockID).scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
  });
}


// Блокировка скролла
const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
          overflow: hidden;
          position: fixed;
          top: -${scrollController.scrollPosition}px;
          left: 0;
          height: 100vh;
          width: 100vw;
          padding-right: ${window.innerWidth - document.body.offsetWidth}px;
      `;
      document.documentElement.style.scrollBehavior = 'unset';
  },
  enabledScroll() {
      document.body.style.cssText = '';
      window.scroll({top: scrollController.scrollPosition})
      document.documentElement.style.scrollBehavior = '';
  }
}

const inputTel = document.querySelectorAll('.input__form_tel');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(inputTel);

let valueInputLocationOne = document.querySelector('.input__location-1');
let valueInputLocationTwo = document.querySelector('.input__location-2');
const reverseBtn = document.querySelector('.reverse_btn');
let valueInput;

reverseBtn.addEventListener('click', function () { 
  valueInput = valueInputLocationOne.value;

  valueInputLocationOne.value = valueInputLocationTwo.value;
  valueInputLocationTwo.value = valueInput;
});

const formCalculator = document.querySelector('.form__calculator');

formCalculator.addEventListener('submit', function(e) {
  e.preventDefault();

  return;
});

const formServices = document.querySelector('.form__services');

formServices.addEventListener('submit', function (e) {
  e.preventDefault();

  return;
});

const dontKnowSectionForm = document.querySelector('.dontKnowSection__form');

dontKnowSectionForm.addEventListener('submit', function (e) {
  e.preventDefault();

  return;
});