try {
  const list = document.querySelector('.journal__blog');
  let btnsBlog = document.querySelectorAll('.journal__btn');
  let listBlogs = document.querySelectorAll('.journal__blog .posts__item');

  btnsBlog.forEach(btn => {
    btn.addEventListener('click', e => {
      let text = e.target.textContent.split('');
      text.pop();
      text = text.join('');
      
      listBlogs.forEach( list => {
        list.style.display = 'none';
      });

      searchActiveBtns();
      e.target.classList.toggle('active');

      if(text.toLowerCase().includes('al')) {
        listBlogs.forEach( item => {
          item.style.display = 'block';
          item.style.maxWidth = '100%';
          list.style.display = 'grid';
        })
        return
      }

      let elems = document.querySelectorAll(`.posts__view.${text.toLowerCase()}`);
      elems.forEach(elem => {
        list.style.display = 'flex';
        list.style.justifyContent = 'space-between';
        list.style.flexWrap = 'wrap';
        let parent = elem.parentElement;
        parent.style.display = 'block';
        parent.style.maxWidth = '390px';
        
      })

    })
  })

  function searchActiveBtns() {
    for (let i = 0; i < btnsBlog.length; i++) {
      if (btnsBlog[i].classList.contains('active')) {
        btnsBlog[i].classList.remove('active');
      }
    }
  }






} catch (error) {
  console.log(error);
}