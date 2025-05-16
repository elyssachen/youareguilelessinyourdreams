let rocket;
let frame = 0;
let totalFrames = 8;
let frameWidth;
let frameHeight;
let angle = 0;
let isAnimating = false;
let stars = [];
let totalStars = 100



function preload() {
  rocket = loadImage('data/sprite3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameWidth = rocket.width/totalFrames;
  frameHeight = rocket.height;
  imageMode(CENTER);
  frameRate(8);
  
for (let i = 0; i < totalStars; i++) {
    stars.push({
      x: random(width),
      y: random(height)
    });
  }


}

function draw() {
  clear(); 
  background(0);
  
fill(255);
  noStroke();
  for (let star of stars) {
    ellipse(star.x,star.y,1,2);
  }

  
if (mouseIsPressed) {
    isAnimating = true;
    let dx = mouseX-width/2;
    let dy = mouseY-height/2;
    angle = atan2(dy,dx);

      
    frame=(frame+1)%totalFrames; 
  } else {
    isAnimating = false;
  }

  let frameX=frame*frameWidth;
  let frameY=0;

  push();
  translate(width/2, height/ 2);
  rotate(angle);
  image(rocket,0,0,frameWidth/4,frameHeight/4,frameX,frameY,frameWidth,frameHeight);
  pop();
 
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
