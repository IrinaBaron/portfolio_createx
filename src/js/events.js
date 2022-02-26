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
  let btnsPages;

  function createNumPages(value) {
    pages = Math.ceil(events.length / +value);
    for (let k = 0; k < pages; k++) {
      let li = document.createElement('li');
      let btnPages = document.createElement('button');
      li.classList.add('events__btns_item');

      btnPages.classList.add('events__page');
      btnPages.textContent = k + 1;
      if(k === 0) {
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
        // console.log((num - 1) * value);
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

    btnsPages.forEach( btn => {
      let num = btn.textContent;
      if(btn.classList.contains('active')) {
        // let num = btn.textContent;
        
        cleanList();
        
        cleanBtnsPages();
        // console.log(num);
        btnsPages.forEach( btn => {
          // console.log(num)
          if(btn.textContent == (+num + 1)) {
            btn.classList.add('active');
            // return
          }
          // return
        });
        
        for(let i = (+num * value); i < (value * (+num + 1)); i++) {
          
          
          events[i].style.display = 'flex';
          
        }

        // console.log(num)
        
        return
      }
      
    })
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
  })

  
  
  function cleanBtnsPages() {
    btnsPages.forEach(btn => {
      btn.classList.remove('active');
    })
    
  }
  // console.log(btnsPages.length)
  

  function cleanList() {
    events.forEach(event => {
      event.style.display = 'none';
    });
  }




} catch (error) {
  console.log(error)
}