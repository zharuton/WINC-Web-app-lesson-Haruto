let iine = 0;
let index = 0;
//btn
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const imgBtn = document.getElementById("img-btn");
const img = document.getElementById("icon");
const images = [
    "icon.jpeg",
    "icon3.jpg"
];
//dark mode
const side = document.querySelector("#side");
const divider = document.querySelector(".divider");

button.addEventListener("click", () => {
    iine++;
    document.getElementById("text").textContent = iine;
});

button2.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    side.classList.toggle("dark-mode");
    divider.classList.toggle("dark-mode");
});

imgBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    img.src = images[index];
});