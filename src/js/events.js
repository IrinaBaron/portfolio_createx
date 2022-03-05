try {
  let events = document.querySelectorAll('.events__item');
  console.log(events.length)
  let numShow = document.querySelector('.events-show');
  // document.querySelector('.events__btns_list').innerHTML = '';
  cleanList();
  let value = 9;
  let pages;
  let btnsPages;

  function createVisibleCards(value) {
    for (let i = 0; i < value; i++) {
      events[i].style.display = 'flex';
    };
    return
  }
  createVisibleCards(value)
  
  // console.log(document.querySelector('.events__select').value)
  
  function createNumPages(value) {
    pages = Math.ceil(events.length / Number(value));
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

        if(Number(num) > 1) {
          document.querySelector('.events-prev').removeAttribute('disabled');
        } 
        if(Number(num) === 1) {
          document.querySelector('.events-prev').setAttribute('disabled', true);
        }
        if((Number(num) + 1) > btnsPages.length) {
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

  document.querySelector('.events-next').addEventListener('click', (e) => {
    e.preventDefault();
    btnsPages = document.querySelectorAll('.events__page');
    document.querySelector('.events-prev').removeAttribute('disabled');
    cleanList();

    for (let i = 0; i < btnsPages.length; i++) {
      let btn = btnsPages[i];

      if (btn.classList.contains('active')) {
        cleanBtnsPages();
        
        if((Number(btn.textContent) + 2) > btnsPages.length) {
          document.querySelector('.events-next').setAttribute('disabled', true);
        }
        if ((Number(btn.textContent) + 1) == (Number(btnsPages[i + 1].textContent))) {
          cleanBtnsPages();
          btnsPages[i + 1].classList.add('active');
        }

        for (let j = (Number(btn.textContent) * value); j < (value * (Number(btn.textContent) + 1)); j++) {
          events[j].style.display = 'flex';

        }
        return
      }
    }
    return
  });

  document.querySelector('.events-prev').addEventListener('click', (e) => {
    e.preventDefault();
    btnsPages = document.querySelectorAll('.events__page');
    document.querySelector('.events-next').removeAttribute('disabled');
    cleanList();

    for (let i = 0; i < btnsPages.length; i++) {
      let btn = btnsPages[i];

      if (btn.classList.contains('active')) {
        
        if ((Number(btn.textContent) - 1) === 1) {
          document.querySelector('.events-prev').setAttribute('disabled', true);
        }
        cleanBtnsPages();
        if ((Number(btn.textContent) - 1) == (Number(btnsPages[i - 1].textContent))) {
          cleanBtnsPages();
          btnsPages[i - 1].classList.add('active');
        }
        for (let j = ((Number(btn.textContent) - 2) * value); j < (value * (Number(btn.textContent) - 1)); j++) {
          events[j].style.display = 'flex';
        }

      }

    }
    return
  })

  numShow.addEventListener('input', () => {
    value = numShow.value;
    
    cleanList();

    if (value < 0) {
      numShow.value = 0;
    };
    if (value === '') {
      value = 9;
    };
    document.querySelector('.events-prev').setAttribute('disabled', true);
    document.querySelector('.events-next').removeAttribute('disabled');
    for (let j = 0; j < value; j++) {
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
  });

  btnRow.addEventListener('click', (e) => {
    e.preventDefault();
    btnSquares.classList.remove('active');
    btnRow.classList.add('active');
    document.querySelector('.events__box').classList.remove('changed');
  });

  document.getElementById('category').addEventListener('input', (e) => {
    cleanList();
    let categories = document.querySelectorAll('.lectures__online');
    
    categories.forEach(cat => {
      if(cat.textContent.includes(e.target.value)) {
        let parents = cat.parentNode;
        
        for(let i = 0; i < events.length; i++) {
          
          if(events[i] == parents.parentNode) {
            events[i].style.display = 'flex';
          } ;
        };
      };
      if(e.target.value.includes('all')) {
        createVisibleCards(value);
      };
    });
    return
  });

  document.querySelector('.events-search').addEventListener('input', (e) => {
    cleanList();
    let elements = document.querySelectorAll('.lectures__info');

    elements.forEach(elem => {
      if(e.target.value === '') {
        createVisibleCards(value);
        return
      };
      if(elem.textContent.toLowerCase().includes(e.target.value)) {
        let parents = elem.parentNode;
        
        for(let i = 0; i < events.length; i++) {
          if(events[i] == parents.parentNode) {
            events[i].style.display = 'flex';
          } ;
        };
        return
      };
      
    })
  });

  function cleanBtnsPages() {
    btnsPages = document.querySelectorAll('.events__page');
    btnsPages.forEach(btn => {
      btn.classList.remove('active');
    })
  };


  function cleanList() {
    events = document.querySelectorAll('.events__item');
    events.forEach(event => {
      event.style.display = 'none';
    });
    return
  }




} catch (error) {
  console.log(error)
}