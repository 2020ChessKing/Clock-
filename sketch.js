var scMap, sc, mn, hr;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

 

  angleMode(RADIUS);
}

function draw()
{
  background(0);

  hr = hour();
  mn = minute();
  sc = second();
  
  fill(255, 0, 0);
  textSize(100);

  if(sc <= 9)
  {
    text("0" + sc, 500, 760);
  }
  else if(sc >= 10)
  {
    text(sc, 500, 760);
  }

  fill(255, 255, 255);
  text(":", 320, 750);
  text(":", 465, 750);

  fill(0, 255, 0);

  if(mn <= 9)
  {
   text("0" + mn, 350, 760);
  }
  else if(mn >= 10)
  {
    text(mn, 350, 760);
  }

  fill(0, 0, 255);
  text(hr, 200, 760);


  scMap = map(sc, 0, 60, 0, 360);
  mnMap = map(mn, 0, 60, 0, 360);
  hrMap = map(hr % 12, 0, 12, 0, 360);

  translate(400, 400);
  rotate(-90);

  stroke(255, 0, 0);
  noFill();
  strokeWeight(7);
  arc(0, 0, 400, 400, 0, scMap);

  stroke(0, 255, 0);
  noFill();
  strokeWeight(7);
  arc(0, 0, 420, 420, 0, mnMap);

  stroke(0, 0, 255);
  noFill();
  strokeWeight(7);
  arc(0, 0, 440, 440, 0, hrMap);

  stroke(255, 255, 255);
  noFill();
  strokeWeight(7);
  ellipse(0, 0, 460, 460);

  push();
  rotate(scMap);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 200, 0);
  noFill();
  pop();

  push();
  rotate(mnMap);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 150, 0);
  pop(); 

  push();
  rotate(hrMap);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();
}