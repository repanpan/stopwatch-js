let mili_seconds = 0;
let seconds = 0;
let minutes = 0;
let h2 = document.getElementById("time");

let start = document.getElementById("button-start");
let stop = document.getElementById("button-stop");
let clear = document.getElementById("button-reset");

let interval = 1;

function count() {
  interval = 1;
  mili_seconds += interval;

  if (mili_seconds >= 100) {
    mili_seconds = 0;
    seconds += interval;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes += interval;
  }

  h2.textContent =
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    " : " +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    " : " +
    (mili_seconds > 9 ? mili_seconds : "0" + mili_seconds);

  timer();
}
function timer() {
  t = setTimeout(count, 10);
}

start.onclick = count;
stop.onclick = function () {
  clearTimeout(t);
};
clear.onclick = function () {
  h2.textContent = "00 : 00 : 00";
  seconds = 0;
  minutes = 0;
  mili_seconds = 0;
  interval = 0;
};
