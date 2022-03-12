try {
  let allEvents = document.querySelectorAll('.interested__swiper .events__item');
  console.log(allEvents.length)
  allEvents.forEach(event => {
    event.style.display = 'flex';
    return
  });

  const swiper5 = new Swiper('.interested__swiper.swiper', {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.interested__container .swiper-button-next',
      prevEl: '.interested__container .swiper-button-prev',
    },
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  })

  

} catch (error) {
  console.log(error)
}