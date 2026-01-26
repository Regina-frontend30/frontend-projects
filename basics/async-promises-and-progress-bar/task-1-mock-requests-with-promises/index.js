const catImagePaths = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg"];
const dogImagePaths = ["img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg"];

function getRandomResponseTimeMs() {
  const minMs = 2000;
  const maxMs = 5000;
  return Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
}

function renderImageRow(containerElement, imagePaths) {
  const rowElement = document.createElement("div");

  imagePaths.forEach((imagePath) => {
    const imageElement = document.createElement("img");
    imageElement.src = imagePath;
    rowElement.append(imageElement);
  });

  containerElement.append(rowElement);
}

function requestCatImages() {
  return new Promise((resolve) => {
    const responseTimeMs = getRandomResponseTimeMs();

    setTimeout(() => {
      resolve(catImagePaths);
    }, responseTimeMs);
  });
}

function requestDogImages() {
  return new Promise((resolve) => {
    const responseTimeMs = getRandomResponseTimeMs();

    setTimeout(() => {
      resolve(dogImagePaths);
    }, responseTimeMs);
  });
}

window.addEventListener("load", () => {
  const galleryElement = document.getElementById("gallery");
  const catImagesPromise = requestCatImages();
  const dogImagesPromise = requestDogImages();

  catImagesPromise.then((catImages) => {
    renderImageRow(galleryElement, catImages);
  });

  dogImagesPromise.then((dogImages) => {
    renderImageRow(galleryElement, dogImages);
  });
});
