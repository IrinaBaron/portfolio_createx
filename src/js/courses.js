// document.addEventListener('DOMContentLoaded', e => {

  try {


    // console.log()
    const btnVisible = document.querySelector('.online__more');
    const inputSearchCourses = document.querySelector('.online__input');
    const btnSearchCourses = document.querySelector('.online__search');
    let courses = document.querySelectorAll('.online__item');

    document.querySelector('.num-all').textContent = courses.length;

    let marketings = document.querySelectorAll('.marketing');
    document.querySelector('.num-marketing').textContent = marketings.length;

    let managements = document.querySelectorAll('.management');
    document.querySelector('.num-management').textContent = managements.length;

    let hrs = document.querySelectorAll('.hr');
    document.querySelector('.num-hr').textContent = hrs.length;

    let designs = document.querySelectorAll('.design');
    document.querySelector('.num-design').textContent = designs.length;

    let developments = document.querySelectorAll('.development');
    document.querySelector('.num-development').textContent = developments.length;

    let btns = document.querySelectorAll('.online__btn');

    function hideElements() {
      for (let k = 9; k < courses.length; k++) {
        let course = courses[k];
        course.style.display = 'none';
      }
      return
    }
    hideElements();

    btnVisible.addEventListener('click', showHideElements);
    btnVisible.addEventListener('keyup', (e) => {
      if (e.code == 'Enter') {
        showHideElements();
        return
      }
    });

    btnSearchCourses.addEventListener('click', showDirect);

    inputSearchCourses.addEventListener('keyup', e => {
      if (e.code == 'Enter') {
        showDirect();
      }
    });

    inputSearchCourses.addEventListener('input', showDirect);

    function showDirect() {
      let value = inputSearchCourses.value.toLowerCase().trim();
      btnVisible.style.display = 'none'
      courses.forEach(course => {
        course.style.display = 'none';
      });
      if (value == '') {
        value = 'all';
        showNineElements();
        return
      }
      searchCourse(value);

      return
    }

    function showNineElements() {
      btnVisible.style.display = 'unset';
      courses.forEach(course => {
        course.style.display = 'block';
        hideElements();
      });

      document.querySelector('.online__list').style.justifyContent = 'space-between';
    }

    function showHideElements(e) {
      if (e.target.textContent.includes('hide')) {
        hideElements();
        btnVisible.textContent = 'Load more';
        return
      }
      courses.forEach(course => {
        course.style.display = 'block';
      });
      btnVisible.textContent = 'hide elements';
      return
    }

    function searchActive() {
      for (let i = 0; i < btns.length; i++) {
        if (btns[i].classList.contains('active')) {
          btns[i].classList.remove('active');
        }
      }
    }

    btns.forEach(btn => {
      btn.addEventListener('click', tabDirect);
      btn.addEventListener('keyup', e => {
        if (e.code == 'Enter') {
          tabDirect();
        }
      })
    })

    function tabDirect(e) {
      console.log(e.target.textContent) //не удалять
      btnVisible.style.display = 'none';
      courses.forEach(course => {
        course.style.display = 'none';
      });

      let elem = this.textContent.split('');
      elem.pop();
      elem = elem.join('').toLowerCase();
      if (elem.includes('all')) {
        showNineElements();
      }
      searchCourse(elem);
      if (this.closest('.active')) {
        this.classList.remove('active');
      } else {
        searchActive();
        this.classList.toggle('active');
      };
    }

    function searchCourse(direct) {
      if (direct.includes('hr')) {
        direct = direct.split('').slice(0, 2);
        direct = direct.join('');

      }

      let elems = document.querySelectorAll(`.${direct}`);
      elems.forEach(elem => {
        let parent = elem.parentElement;
        let mainParent = parent.parentElement;
        mainParent.style.display = 'block';
        document.querySelector('.online__list').style.justifyContent = 'space-around';
      });
      return
    };



    // console.log(localStorage.getItem(teacherLocal))
  } catch (error) {
    console.log(error);
  }
// });
