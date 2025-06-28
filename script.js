const typeSound = document.getElementById("typeSound");

const bootLines = [
  "Booting...",
  "Loading modules...",
  "Establishing secure connection...",
  "Welcome, Sankalp."
];
let bootIndex = 0;
const bootText = document.getElementById("boot-text");

function showBootLine() {
  if (bootIndex < bootLines.length) {
    bootText.innerText = bootLines[bootIndex];
    typeSound.play();
    bootIndex++;
    setTimeout(showBootLine, 1000);
  } else {
    document.getElementById("boot-screen").style.display = "none";
  }
}

const nameText = "SANKALP BHOSALE";
let i = 0;
function typeWriter() {
  if (i < nameText.length) {
    document.getElementById("typewriter").innerHTML += nameText.charAt(i);
    typeSound.currentTime = 0;
    typeSound.play();
    i++;
    setTimeout(typeWriter, 100);
  }
}

const aboutText = "I’m a student passionate about cybersecurity, networking, and software development. I love solving real-world problems and experimenting with new tools and technologies.";
let j = 0;
function typeAbout() {
  if (j < aboutText.length) {
    document.getElementById("aboutText").innerHTML += aboutText.charAt(j);
    typeSound.currentTime = 0;
    typeSound.play();
    j++;
    setTimeout(typeAbout, 30);
  }
}

function toggleTheme() {
  document.body.classList.toggle('light');
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
}

const sections = document.querySelectorAll('.section');
function revealOnScroll() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('reveal');
    }
  });
}
window.addEventListener('scroll', () => {
  revealOnScroll();
  updateProgressBar();
});

window.onload = function () {
  showBootLine();
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
  setTimeout(() => {
    typeWriter();
    setTimeout(typeAbout, 2000);
    revealOnScroll();
  }, 4000);
};

// Custom cursor follow
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Scroll progress bar
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

// Typing sound on keypress (optional realism)
document.addEventListener("keydown", () => {
  typeSound.currentTime = 0;
  typeSound.play();
});
const sections = document.querySelectorAll('.section');

function revealOnScroll() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('reveal');

      // Optional: play sound when section is revealed
      const beep = new Audio("assets/section.wav");
      beep.volume = 0.2;
      beep.play();
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
