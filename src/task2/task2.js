const timer = document.querySelector(".timer");
const body = document.querySelector("body");
let time = 30;

const timeId = setInterval(timeOut, 100);

function timeOut() {
  time--;

  if (time === 10) {
    body.style.backgroundColor = "plum";
  }

  if (time === 0) {
    clearInterval(timeId);
    alert("Час вийшов!");
  }

  timer.textContent = `seconds: ${time}`;
}
