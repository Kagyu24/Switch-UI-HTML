function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  m = m < 10 ? +m : m;

  var time = h + ":" + m + " " + session;
  document.getElementById("digitalClock").innerText = time;
  document.getElementById("digitalClock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
