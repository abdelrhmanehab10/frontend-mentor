const ul = document.querySelector(".right-part ul");
const data = [
  {
    color: "#FF5555",
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    color: "#DAB65A",
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    color: "#1FC39C",
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    color: "#1125D6",
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

for (let i = 0; i < data.length; i++) {
  ul.appendChild(
    document.createElement("li")
  ).innerHTML = `<p style="color: ${data[i].color}">
    <img src="${data[i].icon}" alt="" />
    ${data[i].category}
  </p>
  <p>${data[i].score} <span>/ 100</span></p>`;
}
