function showMessage() {
    const msg = document.getElementById('message');
    msg.style.opacity = 1;
  }
  
  // Petal animation
  const canvas = document.getElementById("petals");
  const ctx = canvas.getContext("2d");
  let petals = [];
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener("resize", resize);
  resize();
  
  function createPetal() {
    return {
      x: Math.random() * canvas.width,
      y: -20,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 1 + 0.5,
      speedX: Math.random() * 1 - 0.5,
      opacity: Math.random() * 0.5 + 0.3,
      rotation: Math.random() * 360
    };
  }
  
  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI / 180);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = "#ffb6c1";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-p.size, p.size, 0, 2 * p.size);
    ctx.quadraticCurveTo(p.size, p.size, 0, 0);
    ctx.fill();
    ctx.restore();
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (petals.length < 100) {
      petals.push(createPetal());
    }
  
    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += 1;
      if (p.y > canvas.height) {
        petals[i] = createPetal();
      }
      drawPetal(p);
    }
  
    requestAnimationFrame(animate);
  }
  
  animate();
  
 window.addEventListener("click", (e) => {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.style.left = `${e.clientX}px`;
  flower.style.top = `${e.clientY}px`;

  flower.innerHTML = `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(100,100)">
        <circle r="20" fill="#ffd700" />
        <g fill="#ff69b4">
          ${[...Array(8)].map((_, i) => {
            const angle = (i * 45);
            return `<ellipse rx="25" ry="60" transform="rotate(${angle}) translate(0,-40)"/>`;
          }).join("")}
        </g>
      </g>
    </svg>
  `;

  document.body.appendChild(flower);
  setTimeout(() => {
    flower.remove();
  }, 2000);
});
