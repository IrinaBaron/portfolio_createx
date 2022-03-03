try {
  let events = document.querySelectorAll('.events__item');
  console.log(events.length)
  let numShow = document.querySelector('.events-show');
  document.querySelector('.events__btns_list').innerHTML = '';
  cleanList();
  let value = 9;
  let pages;
  let btnsPages;

  function createVisibleCards() {
    for (let i = 0; i < +value; i++) {
      events[i].style.display = 'flex';
    };
    return
  }
  createVisibleCards()
  

  function createNumPages(value) {
    pages = Math.ceil(events.length / +value);
    for (let k = 0; k < pages; k++) {
      let li = document.createElement('li');
      let btnPages = document.createElement('button');
      li.classList.add('events__btns_item');

      btnPages.classList.add('events__page');
      btnPages.textContent = k + 1;
      if (k === 0) {
        btnPages.classList.add('active');
      }

      li.append(btnPages);
      document.querySelector('.events__btns_list').append(li);
    }
    btnsPages = document.querySelectorAll('.events__page');

    btnsPages.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        let num = e.target.textContent;
        cleanList();

        if(+num > 1) {
          document.querySelector('.events-prev').removeAttribute('disabled');
        } 
        if(+num === 1) {
          document.querySelector('.events-prev').setAttribute('disabled', true);
        }
        if((+num + 1) > btnsPages.length) {
          document.querySelector('.events-next').setAttribute('disabled', true);
        } else {
          document.querySelector('.events-next').removeAttribute('disabled');
        }

        for (let i = ((num - 1) * value); i < (value * num); i++) {
          cleanBtnsPages();
          e.target.classList.add('active');
          events[i].style.display = 'flex';
        }
        return
      })

    })

  }
  createNumPages(value);

  btnsPages = document.querySelectorAll('.events__page');

  document.querySelector('.events-next').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.events-prev').removeAttribute('disabled');
    cleanList();

    for (let i = 0; i < btnsPages.length; i++) {
      let btn = btnsPages[i];

      if (btn.classList.contains('active')) {
        cleanBtnsPages();
        
        if((+btn.textContent + 2) > btnsPages.length) {
          document.querySelector('.events-next').setAttribute('disabled', true);
        }
        if ((+btn.textContent + 1) == (+btnsPages[i + 1].textContent)) {
          cleanBtnsPages();
          btnsPages[i + 1].classList.add('active');
        }

        for (let k = (+btn.textContent * value); k < (value * (+btn.textContent + 1)); k++) {
          events[k].style.display = 'flex';

        }
        return
      }
    }
    return
  });

  document.querySelector('.events-prev').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.events-next').removeAttribute('disabled');
    cleanList();

    for (let i = 0; i < btnsPages.length; i++) {
      let btn = btnsPages[i];

      if (btn.classList.contains('active')) {
        console.log(btn.textContent)
        if ((+btn.textContent - 1) === 1) {
          document.querySelector('.events-prev').setAttribute('disabled', true);
        }
        cleanBtnsPages();
        if ((+btn.textContent - 1) == (+btnsPages[i - 1].textContent)) {
          cleanBtnsPages();
          btnsPages[i - 1].classList.add('active');
        }
        for (let k = ((+btn.textContent - 2) * value); k < (value * (+btn.textContent - 1)); k++) {
          events[k].style.display = 'flex';
        }


        // return
      }

    }
    return
  })

  numShow.addEventListener('input', () => {
    value = numShow.value;
    // console.log(value);
    cleanList();

    if (value < 0) {
      numShow.value = 0;
    };
    if (value === '') {
      value = 9;
    };

    for (let j = 0; j < +value; j++) {
      document.querySelector('.events__btns_list').innerHTML = '';
      createNumPages(value);

      events[j].style.display = 'flex';
    };

    return value;
  });

  const btnSquares = document.querySelector('.events-squares');
  const btnRow = document.querySelector('.events-row');

  btnSquares.addEventListener('click', (e) => {
    e.preventDefault();
    btnRow.classList.remove('active');
    btnSquares.classList.add('active');
    document.querySelector('.events__box').classList.add('changed');
  })

  btnRow.addEventListener('click', (e) => {
    e.preventDefault();
    btnSquares.classList.remove('active');
    btnRow.classList.add('active');
    document.querySelector('.events__box').classList.remove('changed');
  })

  function cleanBtnsPages() {
    btnsPages.forEach(btn => {
      btn.classList.remove('active');
    })
  };


  function cleanList() {
    events.forEach(event => {
      event.style.display = 'none';
    });
  }




} catch (error) {
  console.log(error + 'page events')
}