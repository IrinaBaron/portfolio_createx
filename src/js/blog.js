document.addEventListener('DOMContentLoaded', () => {
  try {
    const list = document.querySelector('.journal__blog');
    const inputSearchBlog = document.querySelector('.journal__input');
    let btnsBlog = document.querySelectorAll('.journal__btn');
    let selectBlog = document.querySelector('.journal__box .events__select')
    let listBlogs = document.querySelectorAll('.journal__blog .posts__item');

    listBlogs.forEach(item => {
      item.addEventListener('click', e => {
        window.location.href = 'blog-info.html';
      })
      item.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          window.location.href = 'blog-info.html';
        }
      })
    })

    btnsBlog.forEach(btn => {
      btn.addEventListener('click', e => {
        let text = e.target.textContent.split('');
        text.pop();
        text = text.join('');

        cleanBlogList();
        searchActiveBtns();
        e.target.classList.toggle('active');

        if (text.toLowerCase().includes('al')) {
          listBlogs.forEach(item => {
            item.style.display = 'block';
            item.style.maxWidth = '100%';
            list.style.display = 'grid';
          })
          return
        }

        let elems = document.querySelectorAll(`.posts__view.${text.toLowerCase()}`);
        showElements(elems)

      })
    });

    selectBlog.addEventListener('input', e => {
      let value = selectBlog.value;

      cleanBlogList();
      let elements = document.querySelectorAll('.journal__blog .direct');
      if (value.toLowerCase().includes('al')) {
        listBlogs.forEach(item => {
          item.style.display = 'block';
          item.style.maxWidth = '100%';
          list.style.display = 'grid';
        })
        return
      }
      elements.forEach(elem => {
        let parentElem = elem.parentElement;
        let parent = parentElem.parentElement;
        if (value === elem.textContent.toLocaleLowerCase()) {
          list.style.display = 'flex';
          list.style.justifyContent = 'space-between';
          list.style.flexWrap = 'wrap';
          parent.style.display = 'block';
          parent.style.maxWidth = '390px';
        }
      })

    });

    inputSearchBlog.addEventListener('input', e => {
      let value = inputSearchBlog.value;

      cleanBlogList();
      if (value == '') {
        listBlogs.forEach(item => {
          item.style.display = 'block';
          item.style.maxWidth = '100%';
          list.style.display = 'grid';
        })
        return
      };

      let textsSearch = document.querySelectorAll('.journal__blog .posts__list_title');
      textsSearch.forEach(text => {
        if (text.textContent.toLowerCase().includes(value)) {
          let parent = text.parentElement;
          list.style.display = 'flex';
          list.style.justifyContent = 'space-between';
          list.style.flexWrap = 'wrap';
          parent.style.display = 'block';
          parent.style.maxWidth = '390px';
        }
      })
    })

    function showElements(elems) {
      elems.forEach(elem => {
        list.style.display = 'flex';
        list.style.justifyContent = 'space-between';
        list.style.flexWrap = 'wrap';
        let parent = elem.parentElement;
        parent.style.display = 'block';
        parent.style.maxWidth = '390px';

      })
    }


    function searchActiveBtns() {
      for (let i = 0; i < btnsBlog.length; i++) {
        if (btnsBlog[i].classList.contains('active')) {
          btnsBlog[i].classList.remove('active');
        }
      }
    }

    function cleanBlogList() {
      listBlogs.forEach(list => {
        list.style.display = 'none';
      });
    }






  } catch (error) {
    console.log(error);
  }
});