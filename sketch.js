let hue;
let song;
const rings = [];
let circleX = 400;
let circleY = 400;
let diameter = 100;

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

// function preload(){
//   song = loadSound ('assets/jazzmusic-kevinmacleod.mp3');
//     }


function setup (){
  createCanvas(windowWidth, windowHeight);
  

//   /* muziek */
//   song = loadSound('assets/jazzmusic-kevinmacleod.mp3');
// }

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


function draw () {
  background(238,230,215);
  
  // /* generative rondjes */{
  // let circleX = random(200, 600);
  // let circleY = random(200, 600);
  // let circleSize = random(10, 100);}



 /* bewegende ringen */
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


  
  /* ringen */
  {
  square(20, 300, 100, 50);
  square(120, 530, 100, 50);
  square(400, 100, 100, 50);
  square(160, 190, 100, 50);
  square(250, 250, 100, 50);
  square(600, 380, 100, 50);
  square(500, 550, 100, 50);
  square(100, 390, 100, 50);
  square(370, 410, 100, 50);
  square(250, 380, 100, 50);
  square(780, 350, 100, 50);
  square(600, 200, 100, 50);
  square(900, 210, 100, 50);
    
}
 /*interactief paars rondje*/{
      fill(195,113,174);
noStroke();
 
  
 if(dist(circleX, circleY, mouseX, mouseY)< diameter/2 && mouseIsPressed)  {
   fill(112,147,174);
   circleX = mouseX;
   circleY = mouseY;}
   
     ellipse(circleX, circleY,diameter);}
  
 /* teksten */
 {
  textFont("monospace",40);
  text("jazz music", 20, 110);
    
    let words = ['play','play','play','play','playing','playing', 'playing'];
let word = random(words); // select random word
text(word, 20, 50); // draw the word
  }

}