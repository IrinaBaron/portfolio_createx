document.addEventListener('DOMContentLoaded', (e) => {

  try {
    
    const swiper = new Swiper('.team__swiper', {
      // Optional parameters
      slidesPerView: 4,
      spaceBetween: 30,
      direction: 'horizontal',
      loop: false,
  
      navigation: {
        nextEl: '.team__container .swiper-button-next',
        prevEl: '.team__container .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }
  
    });
    // clickOnEventsCard();
    let events = document.querySelectorAll('.lectures__item');
    events.forEach(event => {
      event.addEventListener('click', e => {
        window.location.href='event.html';
      })
      event.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          window.location.href='event.html';
        }
      })
    })

    let teams = document.querySelectorAll('.team__img');
    let socials = document.querySelectorAll('.team__social');
  
    for (let i = 0; i < teams.length; i++) {
      let team = teams[i];
      let soc = socials[i];
  
      team.addEventListener('click', () => {
        soc.classList.toggle('show');
      })
  
      soc.addEventListener('click', () => {
        soc.classList.toggle('show')
      })
    }
  
  
    const swiper1 = new Swiper('.say__swiper', {
  
      slidesPerView: 1,
      pagination: {
        el: '.say__swiper .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.say .swiper-button-next',
        prevEl: '.say .swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
  
    });
  
    // -------link-----
    let linksCourses = document.querySelectorAll('.featured__item');
    // let teacherLocal = localStorage.getItem(teacherLocal);
  
    linksCourses.forEach(linkCourse => {
      linkCourse.addEventListener('click', (e) => {
        let teacher = linkCourse.querySelector('.featured__teacher');
        // localStorage.setItem(teacher, teacherLocal);
        // console.log(teacher)
        // e.preventDefault();
        window.location.href='course.html';
        
      })
    })

    // // -----------burger-------------
    document.querySelector('.header-burger').addEventListener('click', () => {
      document.querySelector('.header__item').classList.remove('active');
      document.body.classList.toggle('stop-scrolling');
      document.querySelector('.header-burger').classList.toggle('active');
      document.querySelector('.header__nav').classList.toggle('active');
      if (document.documentElement.clientWidth <= 575) {
        document.querySelector('.header__wrap').classList.toggle('active');
      }
    })
  
    // ------------scroll--------------
    const btnScroll = document.querySelector('.btn__scroll');
    window.addEventListener('scroll', () => {
      let scrollNum = window.pageYOffset;
      document.querySelector('.footer__go');
      document.querySelector('.footer__link_logo');
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
    
    
  } catch (error) {
    console.log(error)
  }

})
