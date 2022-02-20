document.addEventListener('DOMContentLoaded', () => {

  try {
    let accBtns = document.querySelectorAll('.course-program__btn');
    let conts = document.querySelectorAll('.course-program__content');
    let accIcons = document.querySelectorAll('.course-program__icons');
    
    accBtns.forEach(accBtn => {
      accBtn.addEventListener('click', e => {
        if (e.target.closest('.show')) {
          e.target.classList.remove('show');
          e.target.nextElementSibling.classList.remove('show');
          e.target.parentNode.previousElementSibling.classList.remove('show');
        } else {
          for (let i = 0; i < accBtns.length; i++) {
            if (accBtns[i].classList.contains('show')) {
              accBtns[i].classList.remove('show');
              conts[i].classList.remove('show');
              accIcons[i].classList.remove('show');
            }
          }
          e.target.classList.toggle('show');
          e.target.nextElementSibling.classList.toggle('show'); 
          e.target.parentNode.previousElementSibling.classList.toggle('show')
        }
      })
      return
      })
    
  } catch (error) {
    console.log(error)
  }
});