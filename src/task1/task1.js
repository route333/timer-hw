const timer = document.querySelector(".timer");
let time = 3600;

const timeId = setInterval(timeOut, 1000);

function timeOut() {
    time--;
    
  if (time === 0) {
      clearInterval(timeId);
      alert("Час вийшов!");
    }

    if (time <= 1800 && time % 60 === 0) {
        alert("Залишилось менше половини часу!");
    }

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    
  timer.textContent = `hours: ${hours}, minuts: ${minutes}`;
}
