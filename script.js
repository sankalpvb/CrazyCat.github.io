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

const aboutText = "Detail-oriented cybersecurity intern with hands-on experience in red teaming, scripting, and offensive security. Creator of BruteMaster, a Bash and Python-based modular brute-force framework. Completed over 20 CTFs and labs focused on web vulnerabilities, authentication bypass, and exploitation. Seeking to leverage project-based learning and technical capabilities to grow in a cybersecurity internship role.";
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
