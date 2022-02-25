try {
  let events = document.querySelectorAll('.events__item');
  console.log(events.length)
  let numShow = document.querySelector('.events-show');
  document.querySelector('.events__btns_list').innerHTML = '';

  let value = 9;
  cleanList();
  for (let i = 0; i < +value; i++) {
    events[i].style.display = 'flex';
  };
  let pages;
  // console.log(pages);

  function createNumPages(value) {
    pages = Math.ceil(events.length / +value);
    for (let k = 0; k < pages; k++) {
      let li = document.createElement('li');
      let btnPages = document.createElement('button');
      li.classList.add('events__btns_item');

      btnPages.classList.add('events__page');
      btnPages.textContent = k + 1;

      li.append(btnPages);
      document.querySelector('.events__btns_list').append(li);
    }
  }
  createNumPages(value);


  numShow.addEventListener('input', () => {
    value = numShow.value;
    console.log(value);
    cleanList();

    if (value < 0) {
      numShow.value = 0;
    };
    if (value === '') {
      value = 9;
    };
    // btnsPages.forEach(btn => {

    //   btn.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     let num = e.target.textContent;
    //     console.log('ok')
    //     cleanList();
    //     console.log((num - 1) * value);
    //     for (let i = ((num - 1) * value); i < (value * num); i++) {
    //       e.target.classList.add('active');
    //       events[i].style.display = 'flex';
    //     }
    //     return
    //   })
    // })
    for (let j = 0; j < +value; j++) {
      document.querySelector('.events__btns_list').innerHTML = '';
      createNumPages(value);
      events[j].style.display = 'flex';
    };
    return value;
  })

  let btnsPages = document.querySelectorAll('.events__page');

  btnsPages.forEach(btn => {
    btn.classList.remove('active');
  })
  // console.log(btnsPages.length)
  btnsPages.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // console.log(value)
      let num = e.target.textContent;
      cleanList();
      console.log((num - 1) * value);
      for (let i = ((num - 1) * value); i < (value * num); i++) {
        e.target.classList.add('active');
        events[i].style.display = 'flex';
      }
      return
    })
    
  })

  function cleanList() {
    events.forEach(event => {
      event.style.display = 'none';
    });
  }




} catch (error) {
  console.log(error)
}