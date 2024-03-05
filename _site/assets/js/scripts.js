console.log("JavaScript Load");

var canvas = document.getElementById('hero_canvas');
var ctx = canvas.getContext('2d');
var container = document.getElementById('hero_canvas_container'); // Replace with the actual ID of your container
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

animate();
