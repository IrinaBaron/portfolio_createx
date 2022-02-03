document.addEventListener('DOMContentLoaded', (e) => {

  const swiper = new Swiper('.team__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.team .swiper-button-next',
      prevEl: '.team .swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 30,

  });

  let teams = document.querySelectorAll('.team__img');
  let socials = document.querySelectorAll('.team__social');

  for(let i = 0; i < teams.length; i++) {
    let team = teams[i];
    let soc = socials[i];

    team.addEventListener('click', () => {
      soc.classList.toggle('show');
    })

    soc.addEventListener('click', () => {
      soc.classList.toggle('show')
    })
  }

  // document.addEventListener('click', function(e) {
  //   console.log(e.target)
  //   if(e.target.closest('.team__img')) {
      
  //   }
  // })

  // const swiper1 = new Swiper('.swiper2', {

  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,

  //   slidesPerView: "auto",
  //   coverflowEffect: {
  //     rotate: 30,
  //     scale: 1,
  //     // stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: false,
  //   },
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.exclusive .swiper-button-next',
  //     prevEl: '.exclusive .swiper-button-prev',
  //   },

  // });

  // -----------------------drop-menu--------------------

  let dropS = document.querySelectorAll('.drop');
  let listDrop = document.querySelectorAll('.drop__list');

  function searchShow() {
    for (let i = 0; i < dropS.length; i++) {

      if (dropS[i].classList.contains('show')) {
        dropS[i].classList.remove('show');
        listDrop[i].classList.remove('show');
      }
    }
 
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest(['.drop', '.drop__list', '.drop__item'])) {
      searchShow();
    }
  })

  dropS.forEach(drop => {

    drop.addEventListener('click', (e) => {
      if (e.target.closest('.show')) {
        e.target.classList.remove('show');
        e.target.nextElementSibling.classList.remove('show');
      } else {
        searchShow();
        e.target.classList.toggle('show');
        e.target.nextElementSibling.classList.toggle('show'); 
      }
    })
    return
  })

  // // -----------burger-------------

  document.querySelector('.header-burger').addEventListener('click', () => {
    document.querySelector('.header__item').classList.remove('active');
    document.body.classList.toggle('stop-scrolling');
    document.querySelector('.header-burger').classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
  })

  // ------------scroll--------------
  const btnScroll = document.querySelector('.btn__scroll');
  window.addEventListener('scroll', () => {
    let scrollNum = window.pageYOffset;

    if (scrollNum >= '100') {
      btnScroll.style.display = 'block';
      btnScroll.style.position = 'fixed';
      btnScroll.style.bottom = '80px';
      btnScroll.style.right = '40px';

    } else {
      btnScroll.style.display = 'none';
    }

  }, { passive: true })

  let links = document.querySelectorAll('.hero__link');

  links.forEach(link => {
    link.addEventListener('click', () => {
      window.scroll({ behavior: 'smooth' })
    })
  })

  // -----------tabs------------

let jsTriggers = document.querySelectorAll('.js-tab-trigger'),
jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function (trigger) { // 1
trigger.addEventListener('click', function () { // 2
  // клик!
  let id = this.getAttribute('data-tab'), // 1
    content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'), // 2
    activeTrigger = document.querySelector('.js-tab-trigger.active'), // 3
    activeContent = document.querySelector('.js-tab-content.active'); // 4

  activeTrigger.classList.remove('active'); // 1
  trigger.classList.add('active'); // 2

  activeContent.classList.remove('active'); // 3
  content.classList.add('active'); // 4
});
});

})
