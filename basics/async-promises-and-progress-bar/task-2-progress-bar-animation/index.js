function progress(seconds) {
  const progressBar = document.getElementById("progress-bar");
  const timerEl = document.getElementById("timer");
  const duration = Math.max(seconds, 10);

  progressBar.style.transform = "scaleX(0)";
  timerEl.textContent = "0 c";

  progressBar.style.transition = `transform ${duration}s linear`;

  setTimeout(() => {
    progressBar.style.transform = "scaleX(1)";
  }, 100);

  let elapsed = 0;
  const interval = setInterval(() => {
    elapsed++;
    timerEl.textContent = `${elapsed} c`;

    if (elapsed >= duration) {
      clearInterval(interval);
    }
  }, 1000);
}

window.onload = () => {
  progress(10);
};
