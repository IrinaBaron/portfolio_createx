document.addEventListener('DOMContentLoaded', () => {

  try {
    let acc = document.querySelectorAll('.course-program__btn ');
    console.log(acc);
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        console.log('ok')
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.classList.remove("show");
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
          panel.classList.add("show");
        }
        this.classList.toggle("show");
        // panel.classList.toggle("show");
        console.log(panel)
        
      });
    }
  } catch (error) {
    console.log(error)
  }
});