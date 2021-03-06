let hue;
let audio;
const rings = [];
let circleX = 400;
let circleY = 400;
let diameter = 100;

// function preload(){
 
//   /* afbeeldingen */
//   //Load images
//   let music0 = loadImage('images/franksinatra.jpeg');
//   let music1 = loadImage('images/franksinatra.jpeg');
//   let music2 = loadImage('images/natkingcole.jpeg');
//   let music3 = loadImage('images/louisarmstrong.jpeg');
//   picture = [music0, music1, music2, music3];
  
//   //Pick random number from array
//   let number = Math.floor(Math.random() * (picture.length - 1) + 1);
  
//   //Random image
//   img = picture[number];
//  }

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function setup (){
  createCanvas(windowWidth, windowHeight);

  /* muziek */
    audio = createAudio('audio/jazzmusic-kevinmacleod.mp3');
    
    // here we set the element to autoplay
    // The element will play as soon
    // as it is able to do so.
    audio.autoplay(true);

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
    fill(195,113,174);
  
  square(20, 300, 100, 50);
  square(120, 530, 100, 50);
  square(400, 120, 100, 50);
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
  square(900, 600, 100, 50);
  square(700, 500, 100, 50);
    
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
  textFont("monospace",30);
  text("i love playing jazz music from the following artists", 20, 50);
    
    let words = ['Nat King Cole','Miles Davis','Ella Fitzgerald','Louis Armstrong','Frank Sinatra', 'Nina Simone'];
let word = random(words); // select random word
text(word, 20, 110); // draw the word


ellipse(mouseX, mouseY, 50)

  }

}