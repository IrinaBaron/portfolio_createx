document.addEventListener('DOMContentLoaded', e => {
  let courses = document.querySelectorAll('.online__item');
  console.log(courses.length);

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

  function searchActive() {
    for (let i = 0; i < btns.length; i++) {
      if (btns[i].classList.contains('active')) {
        btns[i].classList.remove('active');
      }
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      courses.forEach(course => {
        course.style.display = 'none';
      });
      console.log(e.target.textContent);
      let elem = this.textContent.split(' ').slice(0,1);
      if(elem[0].toLowerCase().includes('all')) {
        courses.forEach(course => {
          course.style.display = 'block';
        });
        document.querySelector('.online__list').style.justifyContent = 'space-between';
      }

      searchCourse(elem[0].toLowerCase());
     
      if (this.closest('.active')) {
        this.classList.remove('active');
      } else {
        searchActive();
        this.classList.toggle('active');
      };


    })
  })

  function searchCourse(direct) {
    
    let elems = document.querySelectorAll(`.${direct}`);
    elems.forEach(elem => {
      let parent = elem.parentElement;
      let mainParent = parent.parentElement;
      mainParent.style.display = 'block';
      document.querySelector('.online__list').style.justifyContent = 'space-around';
    })
  }

  
})