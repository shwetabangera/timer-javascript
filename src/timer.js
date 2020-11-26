window.onload = () => {
  let hour = 0;
  let minute = 0;
  let seconds = 0;
  let totalSeconds = 0;

  let intervalId = null;

  function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds / 3600);
    minute = Math.floor((totalSeconds - hour * 3600) / 60);
    seconds = totalSeconds - (hour * 3600 + minute * 60);

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("seconds").innerHTML = seconds;
  }

  document.getElementById("start").addEventListener("click", () => {
    intervalId = setInterval(startTimer, 1000);
  });

  document.getElementById("pause").addEventListener("click", () => {
    if (intervalId) clearInterval(intervalId);
  });

  document.getElementById("reset").addEventListener("click", () => {
    totalSeconds = 0;
    document.getElementById("hour").innerHTML = "0 ";
    document.getElementById("minute").innerHTML = "0 ";
    document.getElementById("seconds").innerHTML = "0 ";
  });
};
