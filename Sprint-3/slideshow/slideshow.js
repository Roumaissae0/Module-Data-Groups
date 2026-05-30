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
document.getElementById("auto-forward-btn").addEventListener("click", () => {
  clearInterval(autoInterval);
  autoInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 5000);
});

document.getElementById("auto-backward-btn").addEventListener("click", () => {
  clearInterval(autoInterval);
  autoInterval = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }, 5000);
});

document.getElementById("stop-btn").addEventListener("click", () => {
  clearInterval(autoInterval);
});