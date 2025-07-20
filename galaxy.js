const canvas = document.createElement("canvas");
canvas.id = "galaxy-bg";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null };
window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const starColors = ["#ffffff", "#ffe066", "#a0e9ff"];
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 0.5 - 0.25;
    this.vy = Math.random() * 0.5 - 0.25;
    this.radius = Math.random() * 1.5 + 1;
    this.color = starColors[Math.floor(Math.random() * starColors.length)];
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

    if (mouse.x && mouse.y) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        this.vx -= dx / dist * 0.01;
        this.vy -= dy / dist * 0.01;
      }
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

let nodes = [];
const nodeGroupCount = 10;
const nodesPerGroup = 10;
for (let i = 0; i < nodeGroupCount; i++) {
  for (let j = 0; j < nodesPerGroup; j++) {
    nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
  }
}

function connectNodes() {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const alpha = 1 - dist / 100;
        const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.3;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  nodes.forEach(node => {
    node.update();
    node.draw();
  });
  connectNodes();
  requestAnimationFrame(animate);
}

animate();
