const music = document.getElementById("bgMusic");
const btnPlay = document.getElementById("btnPlay");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Tombol play musik
btnPlay.addEventListener("click", () => {
  music.play();
  btnPlay.textContent = "🎶 Musik Diputar";
  btnPlay.disabled = true;
});

// Tombol antar slide
document.getElementById("btnNext1").addEventListener("click", nextSlide);
document.getElementById("btnNext2").addEventListener("click", nextSlide);
document.getElementById("btnReplay").addEventListener("click", () => {
  currentSlide = 0;
  showSlide(currentSlide);
});

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Animasi balon lembut
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  document.body.appendChild(balloon);

  const left = Math.random() * 100;
  const color = `hsl(${Math.random() * 360}, 70%, 80%)`;
  balloon.style.left = `${left}vw`;
  balloon.style.background = color;

  setTimeout(() => balloon.remove(), 6000);
}

setInterval(createBalloon, 1000);
