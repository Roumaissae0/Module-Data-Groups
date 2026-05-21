let countdown;

function setAlarm() {
  clearInterval(countdown);

  const input = document.getElementById("alarmSet");
  let timeRemaining = parseInt(input.value);

  if (isNaN(timeRemaining) || timeRemaining <= 0) return;

  const display = document.getElementById("timeRemaining");

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  display.textContent = `Time Remaining: ${formatTime(timeRemaining)}`;

  countdown = setInterval(() => {
    timeRemaining--;
    display.textContent = `Time Remaining: ${formatTime(timeRemaining)}`;

    if (timeRemaining <= 0) {
      clearInterval(countdown);
      playAlarm();
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
