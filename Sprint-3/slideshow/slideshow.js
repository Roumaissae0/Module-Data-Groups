const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


let currentIndex = 0;
let autoInterval;

function showImage(index) {
  document.getElementById("carousel-img").src = images[index];
}

document.getElementById("forward-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.getElementById("backward-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});