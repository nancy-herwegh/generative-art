function setup() {
  createCanvas(windowWidth, windowHeight);
}

 
let hue;
const rings = [];

function setup () {
  createCanvas(windowWidth, windowHeight);
  
 /* bewegende ringen */
  hue = random(0, 360);
  const count = floor(random(10, 20));
  for (let i = 0; i < count; i++) {
    const diameter = ((i + 1) / count);
    const arcLength = random(PI * 0.05, PI * 2);
    const arcAngle = random(-PI * 2, PI * 2);
    const spinSpeed = random(-1, 1);
    rings.push({
      spinSpeed,
      diameter,
      arcLength,
      arcAngle
    });
  }
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw () {
  background(238,230,215);

  const minDim = Math.min(width, height);
  
  noFill();
  strokeWeight(minDim * 0.007);
  strokeCap(ROUND);
  stroke(112,147,174);

  let d = minDim;
  d -= d * 0.25;
  
  for (let i = 0; i < rings.length; i++) {
    const {
      diameter,
      arcLength,
      arcAngle,
      spinSpeed
    } = rings[i];
    const spin = millis() / 500 * spinSpeed;
    arc(
      width / 1,
      height / 2,
      diameter * d,
      diameter * d,
      spin + arcAngle,
      spin + arcAngle + Math.PI * arcLength
    );}

  
   /* teksten */
  {
  textFont("monospace",40);
  text("music is a mood changer", 20, 110);
    
    let words = ['play','play','play','play','pause','pause', 'pause'];
let word = random(words); // select random word
text(word, 20, 50); // draw the word
  }
  
  /* ringen */
  {
  square(40, 300, 90, 50);
  square(120, 150, 100, 50);
  square(160, 190, 90, 50);
  square(250, 250, 120, 90);
  square(250, 380, 50, 90);
  square(400, 380, 160, 90);
  square(100, 390, 130, 90);
  square(370, 410, 100, 50);
  square(250, 380, 50, 90);
  square(250, 350, 10, 90);
  square(400, 200, 20, 90);
  square(430, 210, 50, 90);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);



}
}