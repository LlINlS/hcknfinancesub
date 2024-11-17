const timerElement = document.getElementById("timer");
let days = 2;
let hours = 6;
let minutes = 23;
let seconds = 6;

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  if (hours === 24) {
    hours = 0;
    days++;
  }

  const formattedTime = ` ${days}d ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  timerElement.textContent = formattedTime;
}

setInterval(updateTimer, 1000);

const bellIcon = document.getElementById("bell-icon");
const notificationDropdown = document.getElementById("notification-dropdown");

bellIcon.addEventListener("click", () => {
  notificationDropdown.classList.toggle("show");
});
