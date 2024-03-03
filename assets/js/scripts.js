console.log("JavaScript Load");

var container = document.getElementById('hero_canvas_container'); // Get the div container
var canvas = document.createElement('canvas'); // Create a canvas element
var ctx = canvas.getContext('2d');

// Set canvas dimensions to match the container
canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;

// Append the canvas to the div container
container.appendChild(canvas);

function Pixel() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.hue = Math.floor(Math.random() * 360);
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
};

Pixel.prototype.render = function(ctx) {
  var hue = Math.round(this.hue);
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.fillRect(this.x, this.y, 1, 1);
};

// Create a dynamic number of pixels based on the container size
var pixels = [];
var pixelCount = (canvas.width * canvas.height) / 10000; // Example density
for (var i = 0; i < pixelCount; i++) {
  pixels.push(new Pixel());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  
  pixels.forEach(function(pixel) {
    pixel.update();
    pixel.render(ctx);
  });
  requestAnimationFrame(animate);
}

animate();
