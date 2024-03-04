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
var canvas = document.getElementById('hero_canvas');
var ctx = canvas.getContext('2d');
var container = document.getElementById('hero_canvas_container'); // Replace with the actual ID of your container

// Function to set canvas size based on the container
function setCanvasSize() {
  canvas.width = container.clientWidth; // use clientWidth to get the inner width of the element
  canvas.height = container.clientHeight; // use clientHeight to get the inner height of the element
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
  // Redraw the current frame to adjust to the new size
  animate();
});

animate();
