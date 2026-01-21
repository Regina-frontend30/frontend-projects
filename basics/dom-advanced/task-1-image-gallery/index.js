const thumbnails = document.querySelectorAll("img");
const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";

thumbnails.forEach((image) => {
  image.addEventListener("click", function () {
    let selectedImage = image.getAttribute("src");
    let preview = document.querySelector(".preview");
    preview.innerHTML = `<img src="${selectedImage}">`;
  });
});
