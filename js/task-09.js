function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const textColor = document.querySelector(".color");


changeColorButton.addEventListener(`click`, changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor()
  const color = getRandomHexColor()
  textColor.textContent = color;
}