console.log("JavaScript Load");

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// Set canvas to full width and height of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Pixel(x, y) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor(Math.random() * 360);
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
  // Reset the hue to keep it within the 0-360 range
  if (this.hue > 360) this.hue -= 360;
  if (this.hue < 0) this.hue += 360;
};

Pixel.prototype.render = function(ctx) {
  var hue = Math.round(this.hue);
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.fillRect(this.x, this.y, 1, 1); // Size of each pixel is 1x1
};

// Generate pixels for the entire canvas
var pixels = [];
for (var y = 0; y < canvas.height; y++) {
  for (var x = 0; x < canvas.width; x++) {
    pixels.push(new Pixel(x, y));
  }
}

function animate() {
  // Clear the canvas before each frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pixels.forEach(function(pixel) {
    pixel.update();
    pixel.render(ctx);
  });

  requestAnimationFrame(animate);
}

animate();
