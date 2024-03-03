console.log("JavaScript Load");

let canvas = document.querySelector('#hero_canvas');
let ctx = canvas.getContext('2d');

class Pixel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.hue = Math.floor(Math.random() * 360);
    const direction = Math.random() > 0.5 ? -1 : 1;
    this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
  }

  update() {
    this.hue += this.velocity;
  }

  render(ctx) {
    const hue = Math.round(this.hue);
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`; // Template literals for cleaner string
    ctx.fillRect(this.x, this.y, 1, 1);
  }
}

const pixels = [
  new Pixel(0, 0),
  new Pixel(1, 0),
  new Pixel(0, 1),
  new Pixel(1, 1),
];

function animate() {
  pixels.forEach(pixel => { // Arrow function for cleaner syntax
    pixel.update();
    pixel.render(ctx);
  });
  requestAnimationFrame(animate);
}

animate();
