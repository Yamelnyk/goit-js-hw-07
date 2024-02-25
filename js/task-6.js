function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const inputValue = document.querySelector("input");
const box = document.querySelector("#boxes");

create.addEventListener("click", handelClick);

function handelClick(event) {
  box.innerHTML = "";
  if (inputValue.value <= 0 || inputValue.value > 100) {
    alert("Введіть число в межах від 0 до 100.");
  } else {
    createBoxes(inputValue.value);
    inputValue.value = "";
  }
}

function createBoxes(amount) {
  let step = 30;
  for (let index = 1; index <= amount; index += 1) {
    const elem = document.createElement("div");
    elem.style.width = `${step}px`;
    elem.style.height = `${step}px`;
    elem.style.backgroundColor = getRandomHexColor();
    box.appendChild(elem);
    step += 10;
  }
}

destroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  box.innerHTML = "";
}
