
const typeSound = document.getElementById("typeSound");
const f1Sound = document.getElementById("f1Sound");

const bootLines = [
  "Booting...",
  "Loading modules...",
  "Establishing secure connection...",
  "Welcome."
];

let bootIndex = 0;
const bootText = document.getElementById("boot-text");

// Reverse (outer to inner)
const circles = [
  document.querySelector(".layer4"),
  document.querySelector(".layer3"),
  document.querySelector(".layer2"),
  document.querySelector(".layer1")
];

function showBootLine() {
  if (bootIndex < bootLines.length) {
    bootText.innerText = bootLines[bootIndex];

    // Flicker effect
    bootText.classList.add("boot-text-flicker");
    setTimeout(() => {
      bootText.classList.remove("boot-text-flicker");
    }, 200);

    // Typing sound
    if (typeSound) {
      typeSound.currentTime = 0;
      typeSound.play();
    }

    if (circles[bootIndex]) {
      circles[bootIndex].classList.add("circle-visible");
    }

    bootIndex++;
    setTimeout(showBootLine, 1200);
  } else {
    // Fade out boot screen
    const bootScreen = document.getElementById("boot-screen");
    bootScreen.style.opacity = 0;

    // F1 Sound
    if (f1Sound) {
      f1Sound.currentTime = 0;
      f1Sound.play();
    }

    // Glow pulse
    document.body.classList.add("reveal-glow");

    setTimeout(() => {
      bootScreen.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.classList.remove("reveal-glow");
    }, 1500);
    const flash = document.getElementById("flashEffect");
    flash.className = "particle-flash";
    flash.style.display = "block";

    setTimeout(() => {
      flash.style.display = "none";
    }, 1300); // match animation duration
  }
}


const nameText = "SANKALP VISHNU BHOSALE";
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

const aboutText = "****aDD PROPAR INTRO ****";
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
// Try unlocking autoplay using AudioContext and muted trick
function unlockAudio(audio) {
  try {
    const ctx = new AudioContext();
    const source = ctx.createBufferSource();
    source.buffer = ctx.createBuffer(1, 1, 22050);
    source.connect(ctx.destination);
    source.start(0);
    audio.play().catch(() => {});
  } catch (e) {
    console.warn("Audio unlock failed:", e);
  }
}
unlockAudio(typeSound);
unlockAudio(f1Sound);

  showBootLine();
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }
  setTimeout(() => {
    typeWriter();
    setTimeout(typeAbout, 2000);
    revealOnScroll();
  }, 5000); // after boot completes
};



const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;
}

document.addEventListener("keydown", () => {
  typeSound.currentTime = 0;
  typeSound.play();
});

const imageMap = {
  skills: [
    {
      src: "assets/burp.png",
      alt: "Burp Suite",
      name: "Burp Suite",
      desc: "Web vulnerability scanner and proxy tool used in penetration testing.",
      org: "PortSwigger",
      date: "Ongoing",
      link: "https://portswigger.net/burp"
    },
    {
      src: "assets/nmap.png",
      alt: "Nmap",
      name: "Nmap",
      desc: "Network scanning tool for discovering hosts and services.",
      org: "nmap.org",
      date: "Ongoing",
      link: "https://nmap.org/"
    },
    {
      src: "assets/metasploit.png",
      alt: "Metasploit",
      name: "Metasploit",
      desc: "Framework for developing and executing exploit code.",
      org: "Rapid7",
      date: "Ongoing",
      link: "https://www.metasploit.com/"
    }
  ],

  projects: [
    {
      src: "assets/brutemaster.png",
      alt: "BruteMaster",
      name: "BruteMaster",
      desc: "Custom tool for brute force testing login pages and services.",
      org: "Personal Project",
      date: "May 2025",
      link: "#" // Replace with your GitHub/project URL
    }
  ],

  certs: [
    {
      src: "assets/ibm.png",
      alt: "IBM Certificate",
      name: "Cybersecurity Fundamentals",
      org: "IBM",
      date: "June 2024",
      desc: "Completed IBM Cybersecurity Fundamentals Course.",
      link: "https://www.ibm.com/training/course/cybersecurity-fundamentals"
    },
    {
      src: "assets/tryhackme.png",
      alt: "TryHackMe",
      name: "Web Pentesting",
      org: "TryHackMe",
      date: "March 2025",
      desc: "Hands-on web pentesting labs & challenges.",
      link: "https://tryhackme.com/room/webfundamentals"
    }
  ],

  languages: [
    {
      src: "assets/Java.jpg",
      alt: "Java",
      name: "Java",
      desc: "Basic OOP's Concept.",
      org: "Great Learning",
      //date: "Ongoing",
      link: "https://www.mygreatlearning.com/certificate/HIDNTRDN"
    },
    {
      src: "assets/PHP.jpg",
      alt: "PHP",
      name: "PHP",
      desc: "language used to structure web content and database connectivity.",
      org: "Great Learning",
      //date: "Ongoing",
      link: "https://www.mygreatlearning.com/certificate/HMNSGLTX"
    },
    {
      src: "assets/DBMS.png",
      alt: "DBMS",
      name: "DBMS",
      desc: "System for managing databases and ensuring data integrity.",
      org: "Great Learning",
      //date: "Unknown",
      //link: "https://en.wikipedia.org/wiki/Database_management_system"
    },
    {
      src: "assets/SE.jpg",
      alt: "Agile for Beginners",
      name: "Agile for Beginners",
      desc: "Undustanding of actual devlopment process using Agile model",
      org: "Great Learning",
      //date: "Ongoing",
      link: "https://www.mygreatlearning.com/certificate/MASGHQCR"
    },
    {
      src: "assets/DS.jpg",
      alt: "Data Structure",
      name: "Data Structure in C",
      desc: "Undustanding of how data structure works.",
      org: "Great Learning",
      //date: "Ongoing",
      link: "https://www.mygreatlearning.com/certificate/AXGKKPNA"
    }
  ]
};


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".card");
  const previewTitle = document.getElementById("previewTitle");
  const previewImages = document.getElementById("previewImages");

  sections.forEach((section) => {
    section.addEventListener("click", () => {
      const key = section.classList.contains("skills") ? "skills"
        : section.classList.contains("projects") ? "projects"
          : section.classList.contains("certs") ? "certs"
            : "languages";

      previewTitle.textContent = `Images related to ${key.charAt(0).toUpperCase() + key.slice(1)}`;
      previewImages.innerHTML = "";

      imageMap[key].forEach(img => {
        const container = document.createElement("div");
        container.style.textAlign = "center";

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.alt;

        const caption = document.createElement("div");
        caption.style.color = "#00ffcc";
        caption.style.marginTop = "5px";
        caption.textContent = img.alt;

        container.appendChild(image);
        container.appendChild(caption);
        previewImages.appendChild(container);
      });
    });
  });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalOrg = document.getElementById("modalOrg");
const modalDate = document.getElementById("modalDate");
const modalDesc = document.getElementById("modalDesc");

let currentIndex = 0;
let currentGroup = [];

document.getElementById("previewImages").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const src = e.target.src;
    const allImageData = Object.values(imageMap).flat();
    const clickedData = allImageData.find(img => src.includes(img.src));
    currentGroup = allImageData.filter(img => [...document.querySelectorAll("#previewImages img")].some(i => i.src.includes(img.src)));

    currentIndex = currentGroup.findIndex(img => src.includes(img.src));

    updateModalDetails(clickedData);
    modalImg.src = clickedData.src;
    modal.classList.add("active");
  }
});

function navigate(direction) {
  if (currentGroup.length === 0) return;

  modalImg.classList.add("fade-out");

  setTimeout(() => {
    currentIndex = (currentIndex + direction + currentGroup.length) % currentGroup.length;
    const newData = currentGroup[currentIndex];
    modalImg.src = newData.src;
    updateModalDetails(newData);
    modalImg.classList.remove("fade-out");
  }, 200);
}

function updateModalDetails(data) {
  modalName.textContent = data.name || "Untitled";
  modalOrg.textContent = data.org || "N/A";
  modalDate.textContent = data.date || "Unknown";

  // Reset description
  modalDesc.textContent = data.desc || "";

  // Add clickable link if exists
  if (data.link) {
    const linkEl = document.createElement("a");
    linkEl.href = data.link;
    linkEl.textContent = data.link;
    linkEl.target = "_blank";
    linkEl.style.color = "#00ffcc";
    linkEl.style.display = "inline-block";
    linkEl.style.marginTop = "10px";
    modalDesc.appendChild(document.createElement("br"));
    modalDesc.appendChild(linkEl);
  }
}

function closeModal() {
  modal.classList.remove("active");
}
