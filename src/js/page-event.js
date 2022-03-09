try {
  let allEvents = document.querySelectorAll('.interested .events__item');
  console.log(allEvents.length)
  allEvents.forEach(event => {
    event.style.display = 'flex';
    event.style.width = '390px';
    return
  })

  const swiperInterested = new Swiper('.interested__swiper', {
  
    slidesPerView: 3,
    direction: 'horizontal',
    // slidesPerGroup: 3,
    loopFillGroupWithBlank: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.interested .swiper-button-next',
      prevEl: '.interested .swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      }
    }
  });

  
  // for(let i = 0; i < allEvents.length; i++) {
  //   allEvents[i].style.display = 'flex'
  // }




} catch (error) {
  console.log(error)
}