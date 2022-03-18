document.addEventListener('DOMContentLoaded', () => {
  try {

    const swiper7 = new Swiper('.may-also__swiper', {
      // Optional parameters
      slidesPerView: 3,
      spaceBetween: 30,
      direction: 'horizontal',
      loop: false,
  
      navigation: {
        nextEl: '.may-also__container .swiper-button-next',
        prevEl: '.may-also__container .swiper-button-prev',
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
        571: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
  
    });


    let listsBlogs = document.querySelectorAll('.may-also__swiper .swiper-slide');

    listsBlogs.forEach(item => {
      item.addEventListener('click', e => {
        window.location.href = 'blog-info.html';
      })
      item.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          window.location.href = 'blog-info.html';
        }
      })
    })


  } catch (error) {
    console.log(error)
  }




})