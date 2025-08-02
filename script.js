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

const aboutText = "Cybersecurity enthusiast and MCA candidate at Parul University with hands-on experience in ethical hacking, vulnerability assessment, and automation scripting. Developed BruteMaster, a modular brute-force framework inspired by Metasploit, demonstrating strong skills in tool development and offensive security. Proficient in web application security, Linux-based tools, and scripting. Eager to contribute to real-world red team engagements and continuously grow within a dynamic cybersecurity environment.";
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

// Removed old revealOnScroll() as IntersectionObserver will handle animations

window.onload = function () {
  // Try unlocking autoplay using AudioContext and muted trick
  function unlockAudio(audio) {
    try {
      const ctx = new AudioContext();
      const source = ctx.createBufferSource();
      source.buffer = ctx.createBuffer(1, 1, 22050);
      source.connect(ctx.destination);
      source.start(0);
      audio.play().catch(() => { });
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
    // Initial check for elements already in view on load (after boot screen fades)
    // This is important because some elements might be visible before scrolling starts.
    const animatedElementsOnLoad = document.querySelectorAll('.hide-before-animation');
    animatedElementsOnLoad.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight && !element.classList.contains('animated')) {
             const animationClass = element.dataset.animation;
             const delay = element.dataset.delay ? parseFloat(element.dataset.delay) * 1000 : 0;
             setTimeout(() => {
                 element.classList.remove('hide-before-animation');
                 if (animationClass) {
                     element.classList.add(animationClass);
                 }
             }, delay);
             // No need to unobserve here, the observer will do it
        }
    });

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
  if (typeSound) { // Check if typeSound is defined before trying to play
    typeSound.currentTime = 0;
    typeSound.play();
  }
});

const imageMap = {
  skills: [
    // {
    //   src: "assets/burp.png",
    //   alt: "Burp Suite",
    //   name: "Burp Suite",
    //   desc: "Web vulnerability scanner and proxy tool used in penetration testing. Proficient in identifying various web application vulnerabilities.",
    //   org: "PortSwigger",
    //   date: "Ongoing",
    //   link: "https://portswigger.net/burp",
    //   technologies: ["Web Proxies", "Fuzzing", "Scanning"],
    //   proficiency: "Advanced"
    // },
    // {
    //   src: "assets/nmap.png",
    //   alt: "Nmap",
    //   name: "Nmap",
    //   desc: "Network scanning tool for discovering hosts, services, and vulnerabilities. Used for reconnaissance and network mapping.",
    //   org: "nmap.org",
    //   date: "Ongoing",
    //   link: "https://nmap.org/",
    //   technologies: ["Port Scanning", "OS Detection", "Scripting"],
    //   proficiency: "Proficient"
    // },
    // {
    //   src: "assets/metasploit.png",
    //   alt: "Metasploit",
    //   name: "Metasploit Framework",
    //   desc: "Powerful framework for developing, testing, and executing exploit code. Essential for penetration testing and red teaming.",
    //   org: "Rapid7",
    //   date: "Ongoing",
    //   link: "https://www.metasploit.com/",
    //   technologies: ["Exploitation", "Payload Generation", "Post-Exploitation"],
    //   proficiency: "Intermediate"
    // }
  ],

  projects: [
    {
      src: "assets/BruteMaster.jpg",
      alt: "BruteMaster",
      name: "BruteMaster",
      desc: "Custom-built, modular brute-force framework inspired by Metasploit. Designed for testing login pages and services against dictionary attacks.",
      org: "Personal Project",
      date: "May 2025",
      link: "https://github.com/sankalpvb/BruteMaster", // Assuming this is your actual GitHub link
      technologies: ["Python", "Bash Scripting", "Networking", "Modular Design"],
      challenges: "Implementing multi-threading for efficiency and handling various service protocols.",
      // github: "https://github.com/sankalpvb/brutemaster",
    },
  certs: [
    {
      src: "assets/THM_Pre_Security.png",
      alt: "TryHackMe Web Pentesting",
      name: "Web Pentesting Fundamentals",
      org: "TryHackMe",
      date: "March 2025",
      desc: "Completed hands-on labs and challenges covering fundamental web penetration testing concepts and tools.",
      link: "https://tryhackme.com/room/webfundamentals",
      technologies: ["OWASP Top 10", "Burp Suite Basics", "HTTP/S"],
    },
    {
      src: "assets/Coursera Foundations of Cybersecurity.png",
      alt: "Google Cybersecurity Certificate",
      name: "Foundations of Cybersecurity",
      org: "Google via Coursera",
      date: "July 2025",
      desc: "Completed foundational cybersecurity training, covering core concepts, security principles, and industry best practices.",
      link: "https://coursera.org/verify/google-foundations-cybersecurity", // Replace with your actual link
      technologies: ["Security Fundamentals", "Risk Management", "Threat Landscape"],
    },
    {
      src: "assets/Coursera Manage Security RIsks.png",
      alt: "Google Cybersecurity Certificate",
      name: "Manage Security Risks",
      org: "Google via Coursera",
      date: "July 2025",
      desc: "Learned to identify, assess, and manage cybersecurity risks within an organizational context, including incident response planning.",
      link: "https://coursera.org/verify/google-manage-security-risks", // Replace with your actual link
      technologies: ["Risk Assessment", "Vulnerability Management", "Incident Response"],
    },
    {
      src: "assets/Coursera Network and Netword Security.png",
      alt: "Google Cybersecurity Certificate",
      name: "Network and Network Security",
      org: "Google via Coursera",
      date: "July 2025",
      desc: "Explored network protocols, secure network architectures, and common network security controls.",
      link: "https://coursera.org/verify/google-network-security", // Replace with your actual link
      technologies: ["TCP/IP", "Firewalls", "IDS/IPS", "VPNs"],
    },
    // {
    //   src: "assets/google.png",
    //   alt: "Google Cybersecurity Certificate",
    //   name: "Tools of the Trade: Linux and SQL",
    //   org: "Google via Coursera",
    //   date: "July 2025",
    //   desc: "Gained practical experience with Linux commands and SQL for security tasks, including data analysis and database security.",
    //   link: "https://coursera.org/verify/google-linux-sql", // Replace with your actual link
    //   technologies: ["Linux CLI", "SQL Queries", "Bash Scripting"],
    // },
    {
      src: "assets/ECC-CEH-Certificate.png",
      alt: "CEH Certification",
      name: "Certified Ethical Hacker (CEH)",
      org: "EC-Council",
      date: "June 2025",
      desc: "Earned CEH certification, demonstrating proficiency in ethical hacking methodologies, tools, and countermeasures across various attack vectors.",
      link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/", // Replace with actual verification if available
      technologies: ["Reconnaissance", "Scanning", "Exploitation", "Social Engineering", "Web Apps"],
    }
  ],

  languages: [
    {
      src: "assets/Java.jpg",
      alt: "Java Programming Language",
      name: "Java",
      desc: "Basic understanding of Object-Oriented Programming (OOP) concepts and application development.",
      org: "Great Learning",
      link: "https://www.mygreatlearning.com/certificate/HIDNTRDN",
      proficiency: "Basic"
    },
    {
      src: "assets/PHP.jpg",
      alt: "PHP Programming Language",
      name: "PHP",
      desc: "Proficient in using PHP for server-side scripting, dynamic web content generation, and database connectivity.",
      org: "Great Learning",
      link: "https://www.mygreatlearning.com/certificate/HMNSGLTX",
      proficiency: "Intermediate"
    },
    {
      src: "assets/DBMS.png",
      alt: "DBMS",
      name: "DBMS (Database Management Systems)",
      desc: "Understanding of database concepts, SQL queries, data integrity, and database management principles.",
      org: "Great Learning",
      proficiency: "Proficient"
    },
    {
      src: "assets/SE.jpg",
      alt: "Agile for Beginners",
      name: "Agile for Beginners",
      desc: "Gained an understanding of Agile development methodologies, including Scrum and Kanban, for efficient project management.",
      org: "Great Learning",
      link: "https://www.mygreatlearning.com/certificate/MASGHQCR",
      proficiency: "Basic"
    },
    {
      src: "assets/DS.jpg",
      alt: "Data Structure in C",
      name: "Data Structures in C",
      desc: "Fundamental understanding of data structures (arrays, linked lists, trees, graphs) and algorithms using the C programming language.",
      org: "Great Learning",
      link: "https://www.mygreatlearning.com/certificate/AXGKKPNA",
      proficiency: "Intermediate"
    }
  ]
};


const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalOrg = document.getElementById("modalOrg");
const modalDate = document.getElementById("modalDate");
const modalDesc = document.getElementById("modalDesc"); // This will now hold all dynamic content

let currentIndex = 0;
let currentGroup = [];

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".card");
  const previewTitle = document.getElementById("previewTitle");
  const previewImages = document.getElementById("previewImages");

  // Keep track of the currently active card
  let activeCard = null;

  sections.forEach((section) => {
    section.addEventListener("click", () => {
      // Remove 'active-card' from previously active card
      if (activeCard) {
        activeCard.classList.remove("active-card");
      }

      // Add 'active-card' to the clicked card
      section.classList.add("active-card");
      activeCard = section; // Set the current card as active

      const key = 
      // section.classList.contains("skills") ? "skills" : 
      section.classList.contains("projects") ? "projects"
          : section.classList.contains("certs") ? "certs"
            : "languages";

      previewTitle.textContent = `Images related to ${key.charAt(0).toUpperCase() + key.slice(1)}`;
      previewImages.innerHTML = "";

      imageMap[key].forEach(img => {
        const container = document.createElement("div");
        container.style.textAlign = "center";
        container.classList.add("preview-image-item"); // Add a class for styling

        const image = document.createElement("img");
        image.src = img.src;
        image.alt = img.alt;
        // Store all necessary data as data attributes for the modal to pick up
        image.setAttribute("data-name", img.name || "");
        image.setAttribute("data-org", img.org || "");
        image.setAttribute("data-date", img.date || "");
        image.setAttribute("data-desc", img.desc || "");
        image.setAttribute("data-link", img.link || "");
        image.setAttribute("data-technologies", (img.technologies || []).join(", "));
        image.setAttribute("data-proficiency", img.proficiency || "");
        image.setAttribute("data-challenges", img.challenges || "");
        image.setAttribute("data-github", img.github || "");
        image.setAttribute("data-demo", img.demo || "");


        const caption = document.createElement("div");
        caption.style.color = "#00ffcc";
        caption.style.marginTop = "5px";
        caption.textContent = img.alt; // Display alt text as caption

        container.appendChild(image);
        container.appendChild(caption);
        previewImages.appendChild(container);
      });
    });
  });

  document.getElementById("previewImages").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      const clickedImg = e.target;
      // Get all images currently displayed in the previewImages container
      currentGroup = Array.from(document.querySelectorAll("#previewImages img")).map(img => {
        return {
          src: img.src,
          alt: img.alt,
          name: img.getAttribute("data-name"),
          org: img.getAttribute("data-org"),
          date: img.getAttribute("data-date"),
          desc: img.getAttribute("data-desc"),
          link: img.getAttribute("data-link"),
          // Split string back into array for technologies
          technologies: img.getAttribute("data-technologies") ? img.getAttribute("data-technologies").split(', ') : [],
          proficiency: img.getAttribute("data-proficiency"),
          challenges: img.getAttribute("data-challenges"),
          github: img.getAttribute("data-github"),
          demo: img.getAttribute("data-demo")
        };
      });

      currentIndex = Array.from(document.querySelectorAll("#previewImages img")).indexOf(clickedImg);
      const data = currentGroup[currentIndex];
      modalImg.src = data.src;
      updateModalDetails(data);
      modal.classList.add("active");
    }
  });

  // --- New: Intersection Observer for On-Scroll Animations ---
  const animatedElements = document.querySelectorAll('.hide-before-animation');

  const observerOptions = {
      root: null, // Observing changes in the viewport
      rootMargin: '0px',
      threshold: 0.1 // When 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const element = entry.target;
              const animationClass = element.dataset.animation;
              const delay = element.dataset.delay ? parseFloat(element.dataset.delay) * 1000 : 0; // Convert to ms

              setTimeout(() => {
                  element.classList.remove('hide-before-animation'); // Remove initial hidden state
                  if (animationClass) {
                      element.classList.add(animationClass); // Add the specific animation class
                  }
              }, delay);

              observer.unobserve(element); // Stop observing once animated
          }
      });
  }, observerOptions);

  animatedElements.forEach(element => {
      observer.observe(element);
  });

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

  modalDesc.innerHTML = ""; // Clear previous content
  if (data.desc) {
    modalDesc.innerHTML += `<p>${data.desc}</p>`;
  }

  // Add Technologies
  if (data.technologies && data.technologies.length > 0) {
    modalDesc.innerHTML += `<p><strong>Technologies:</strong> ${data.technologies.join(", ")}</p>`;
  }

  // Add Proficiency (if applicable, e.g., for skills/languages)
  if (data.proficiency) {
    modalDesc.innerHTML += `<p><strong>Proficiency:</strong> ${data.proficiency}</p>`;
  }

  // Add Challenges (if applicable, e.g., for projects)
  if (data.challenges) {
    modalDesc.innerHTML += `<p><strong>Challenges:</strong> ${data.challenges}</p>`;
  }

  // Add clickable links (main link, GitHub, Demo)
  if (data.link) {
    const mainLinkEl = document.createElement("a");
    mainLinkEl.href = data.link;
    mainLinkEl.textContent = "View Details";
    mainLinkEl.target = "_blank";
    mainLinkEl.style.color = "#00ffcc";
    mainLinkEl.style.display = "block";
    mainLinkEl.style.marginTop = "10px";
    modalDesc.appendChild(mainLinkEl);
  }
  if (data.github) {
    const githubLinkEl = document.createElement("a");
    githubLinkEl.href = data.github;
    githubLinkEl.textContent = "GitHub Repository";
    githubLinkEl.target = "_blank";
    githubLinkEl.style.color = "#00ffff"; // Different color for GitHub
    mainLinkEl.style.display = "block"; // Changed to block for layout
    modalDesc.appendChild(githubLinkEl);
  }
  if (data.demo && data.demo !== "#") { // Only show if a valid demo link exists
    const demoLinkEl = document.createElement("a");
    demoLinkEl.href = data.demo;
    demoLinkEl.textContent = "Live Demo/Video";
    demoLinkEl.target = "_blank";
    demoLinkEl.style.color = "#ff66ff"; // Different color for Demo
    demoLinkEl.style.display = "block"; // Changed to block for layout
    modalDesc.appendChild(demoLinkEl);
  }
}

function closeModal() {
  modal.classList.remove("active");
}
// Show sticky navbar after scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".sticky-header");
  if (window.scrollY > 20) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible"); // Hide if scrolled back to top
  }

});
