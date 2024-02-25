function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");

const body = document.querySelector("body");

const color = document.querySelector(".color");

btn.addEventListener("click", handleClick);

function handleClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}
