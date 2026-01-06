 /* =========================
   🌌 STARS BACKGROUND (PARALLAX)
   ========================= */
const canvas = document.getElementById("stars");
if (!canvas) {
  console.warn("Canvas #stars not found");
} else {
  const ctx = canvas.getContext("2d");
  let w = 0;
  let h = 0;
  const layers = [
    { count: 150, speed: 0.15, size: 0.6 }, // far
    { count: 100, speed: 0.3, size: 1.0 }, // mid
    { count: 60, speed: 0.6, size: 1.6 } // near
  ];
  const stars = [];
  function resizeCanvas() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars.length = 0;
    layers.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * layer.size + 0.2,
          v: layer.speed
        });
      }
    });
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  function drawStars() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#ffffff";
    for (const s of stars) {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      s.y += s.v;
      if (s.y > h) {
        s.y = -2;
        s.x = Math.random() * w;
      }
    }
    requestAnimationFrame(drawStars);
  }
  drawStars();
}