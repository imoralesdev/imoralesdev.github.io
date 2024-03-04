console.log("JavaScript Load");
/*
var canvas = document.getElementById('hero_canvas_container');
var ctx = canvas.getContext('2d');

// Set canvas to full width and height of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var hue = 0;
var velocity = 0.1; // Speed of hue change

function animate() {
  hue += velocity;
  hue = hue % 360; // Keep the hue within the 0-360 range

  var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, 'hsl(' + (hue) + ', 100%, 50%)');
  gradient.addColorStop(1, 'hsl(' + ((hue + 180) % 360) + ', 100%, 50%)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);
}

animate();
*/
var canvas = document.getElementById('hero_canvas_container');
var ctx = canvas.getContext('2d');

// Function to set canvas size
function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Initial canvas size set
setCanvasSize();

var hue = 0;
var velocity = 0.1; // Speed of hue change

function animate() {
  hue += velocity;
  hue = hue % 360; // Keep the hue within the 0-360 range

  var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, 'hsl(' + hue + ', 100%, 50%)');
  gradient.addColorStop(1, 'hsl(' + ((hue + 180) % 360) + ', 100%, 50%)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(animate);
}

// Event listener for window resize
window.addEventListener('resize', function() {
  setCanvasSize();
  // You might want to call animate() here if the animation stops on resize
});

animate();
