const arrows = document.querySelectorAll('img[alt="icon-arrow-down"]');
const QAs = document.querySelectorAll(".qa");
let active;

arrows.forEach((arrow) =>
  arrow.addEventListener("click", (e) => {
    let arrowId = Number(e.target.id);
    if (active === arrowId) {
      QAs[active].classList.remove("active");
      active = null;
    } else {
      active = arrowId;
      QAs.forEach((QA, index) => {
        QA.classList.remove("active");
        if (active === index) {
          QA.classList.add("active");
        }
      });
    }
  })
);
