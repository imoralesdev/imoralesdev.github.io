console.log("JavaScript Load");

var container = document.getElementById('canvasContainer');
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');

container.appendChild(canvas);

function setCanvasSize() {
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
}

// Initial set up of canvas size
setCanvasSize();

function Pixel() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.hue = Math.floor(Math.random() * 360);
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
  // Ensure the hue stays within the 0-360 range
  if (this.hue >= 360 || this.hue <= 0) {
    this.velocity *= -1;
  }
};

Pixel.prototype.render = function() {
  var hue = Math.round(this.hue);
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.fillRect(this.x, this.y, 1, 1);
};

// Create a dynamic number of pixels based on the canvas size
var pixels = [];
function createPixels() {
  pixels = [];
  var pixelDensity = 10000; // Adjust pixel density as needed
  var pixelCount = (canvas.width * canvas.height) / pixelDensity;
  for (var i = 0; i < pixelCount; i++) {
    pixels.push(new Pixel());
  }
}

createPixels(); // Initial creation of pixels

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  pixels.forEach(function(pixel) {
    pixel.update();
    pixel.render();
  });
  requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener('resize', function() {
  setCanvasSize();
  createPixels(); // Recreate pixels for the new size
});
