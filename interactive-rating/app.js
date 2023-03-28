const ratingEles = document.querySelector(".rating"),
  main = document.querySelector("main"),
  thankYou = document.querySelector(".thank-you"),
  submit = document.querySelector("button");
let rating,
  arrRatings = [];

// create rating elements

for (let i = 0; i < 5; i++) {
  arrRatings.push(ratingEles.appendChild(document.createElement("p")));
  arrRatings[i].innerHTML = i + 1;
}

//select the rating

ratingEles.childNodes.forEach((ele) =>
  ele.addEventListener("click", () => {
    let highlights = arrRatings.filter((r) => r.classList == "active");
    highlights.forEach((highlight) => highlight.classList.remove("active"));
    rating = ele.innerText;
    ele.classList.add("active");
  })
);

submit.addEventListener("click", () => {
  main.classList.add("display-none");
  thankYou.childNodes[3].innerText = `You selected ${rating} out of 5`;
  thankYou.classList.remove("display-none");
});
