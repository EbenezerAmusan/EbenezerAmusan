let target_milli_sec = new Date("June 7, 2024 00:00:0").getTime();
function timer() {
  let now_milli_sec = new Date().getTime();
  let remaining_milli_sec = Math.floor((target_milli_sec - now_milli_sec) / 1000);

  let days = Math.floor(remaining_milli_sec / (3600 * 24));
  let hours = Math.floor((remaining_milli_sec % (3600 * 24)) / 3600);
  let minutes = Math.floor((remaining_milli_sec % 3600) / 60);
  let seconds = Math.floor(remaining_milli_sec % 60);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
}
setInterval( timer, 1000);
timer();
