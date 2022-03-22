document.addEventListener('DOMContentLoaded', () => {

  try {
    const swiper2 = new Swiper('.check-courses__swiper', {
  
      slidesPerView: 2,
      spaceBetween: 29,
      navigation: {
        nextEl: '.check-courses .swiper-button-next',
        prevEl: '.check-courses .swiper-button-prev',
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
        570: {
          slidesPerView: 2,
          spaceBetween: 29,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 29,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 29,
        },
      }
    });


    let accBtns = document.querySelectorAll('.course-program__btn');
    let conts = document.querySelectorAll('.course-program__content');
    let accIcons = document.querySelectorAll('.course-program__icons');
    
    accBtns.forEach(accBtn => {
      accBtn.addEventListener('click', e => {
        if (e.target.closest('.show')) {
          e.target.classList.remove('show');
          e.target.nextElementSibling.classList.remove('show');
          e.target.parentNode.previousElementSibling.classList.remove('show');
        } else {
          for (let i = 0; i < accBtns.length; i++) {
            if (accBtns[i].classList.contains('show')) {
              accBtns[i].classList.remove('show');
              conts[i].classList.remove('show');
              accIcons[i].classList.remove('show');
            }
          }
          e.target.classList.toggle('show');
          e.target.nextElementSibling.classList.toggle('show'); 
          e.target.parentNode.previousElementSibling.classList.toggle('show')
        }
      })
      return
      })
    
  } catch (error) {
    console.log(error)
  }
});