const startMin = 1;
let time = startMin * 60;
const countdown = document.querySelector("p");
function updateCountdown() {
  if (time <= 0) {
    clearInterval(setCountdown);
  }
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? "0".minutes : minutes;
  seconds = minutes < 10 ? "0".seconds : seconds;
  countdown.innerText = minutes + ":" + seconds;
  time--;
}
updateCountdown();
{
  const setCountdown = setInterval(updateCountdown, 1000);
}
