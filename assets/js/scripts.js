console.log("JavaScript Load");

var canvas = document.getElementById('hero_canvas_container');
var ctx = canvas.getContext('2d');
/*
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Pixel( x, y ) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor( Math.random() * 360 );
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
};

Pixel.prototype.render = function( ctx ) {
  var hue = Math.round( this.hue );
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
  ctx.fillRect( this.x, this.y, 1, 1 );
}

var pixels = [
  new Pixel( 0, 0 ),
  new Pixel( 1, 0 ),
  new Pixel( 0, 1 ),
  new Pixel( 1, 1 ),
];

function animate() {
  pixels.forEach( function( pixel ) {
    pixel.update();
    pixel.render( ctx );
  });
  requestAnimationFrame( animate );
}

animate();
*/
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
