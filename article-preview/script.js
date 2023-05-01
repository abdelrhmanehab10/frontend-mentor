const share = document.querySelector('img[alt="share"]');
const popup = document.querySelector(".popup");

share.addEventListener("click", () => {
  popup.classList.toggle("active");
});
