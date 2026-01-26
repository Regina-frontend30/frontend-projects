const catImagePaths = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg"];
const dogImagePaths = ["img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg"];

function getRandomResponseTimeMs() {
  const minMs = 2000;
  const maxMs = 5000;
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

function renderImageRow(containerElement, imagePaths) {
  const rowElement = document.createElement("div");
  rowElement.classList.add("gallery-row");

  imagePaths.forEach((imagePath) => {
    const imageElement = document.createElement("img");
    imageElement.src = imagePath;
    imageElement.classList.add("gallery-image");
    rowElement.append(imageElement);
  });

  containerElement.append(rowElement);
}

function requestCatImages() {
  const responseTimeMs = getRandomResponseTimeMs();

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(catImagePaths);
    }, responseTimeMs);
  });

  return {
    promise,
    seconds: responseTimeMs / 1000,
  };
}

function requestDogImages() {
  const responseTimeMs = getRandomResponseTimeMs();

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(dogImagePaths);
    }, responseTimeMs);
  });

  return {
    promise,
    seconds: responseTimeMs / 1000,
  };
}

const progress = (timeInSeconds, progressBarId, timerId) => {
  const bar = document.getElementById(progressBarId);
  const timer = document.getElementById(timerId);
  if (!bar || !timer) return;

  const duration = Math.max(timeInSeconds, 2);

  bar.style.transition = "none";
  bar.style.transform = "scaleX(0)";
  timer.textContent = "0 c";

  setTimeout(() => {
    bar.style.transition = `transform ${duration}s linear`;
    bar.style.transform = "scaleX(1)";
  }, 50);

  let passed = 0;
  const intervalId = setInterval(() => {
    passed += 1;
    timer.textContent = `${passed} c`;
    if (passed >= duration) {
      clearInterval(intervalId);
    }
  }, 1000);
};

window.addEventListener("load", () => {
  const galleryElement = document.getElementById("gallery");

  const { promise: catsPromise, seconds: catSeconds } = requestCatImages();
  progress(catSeconds, "cats-progress", "cats-timer");

  catsPromise.then((catImages) => {
    renderImageRow(galleryElement, catImages);

    const { promise: dogsPromise, seconds: dogSeconds } = requestDogImages();
    progress(dogSeconds, "dogs-progress", "dogs-timer");

    dogsPromise.then((dogImages) => {
      renderImageRow(galleryElement, dogImages);
    });
  });
});
