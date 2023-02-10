let canvas;
let button;
let slider;

let displayState = 0;

let x = 100;
let y = 80;
let eyeX1 = 150;
let eyeX2 = 250;
let eyeY = 150;
let mouthY = 300;
let d = 0;
let mw = 10;
let brow = 0;

function setup() {
  if(windowWidth < 600) {
  canvas = createCanvas(windowWidth, windowHeight);
  }else{
    canvas = createCanvas(800, 800);
  }
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  addGUI();
}

function draw() {
  background(109, 230, 230);

  noStroke();
  rectMode(CENTER);
  fill(110, 207, 229, 80);
  rect(240, 280, 400, 300);
  fill(119, 185, 244, 80);
  rect(240, 260,300, 400);
  //clouds
  noStroke();
  fill(255, 150);
  rectMode(CORNER);
  rect(60, 80, 40);
  rect(40, 90, 20, 30);
  rect(100, 90, 20, 30);
  rect(120, 100, 20, 20);

  fill(255);
  rect(60 + x, 80 + y, 40);
  rect(40 + x, 90 + y, 20, 30);
  rect(100 + x, 90 + y, 20, 30);
  rect(120 + x, 100 + y, 20, 20);

  fill(255, 180);
  rect(60 + x, 80 + y, 40);
  rect(40 + x, 90 + y, 20, 30);
  rect(100 + x, 90 + y, 20, 30);
  rect(120 + x, 100 + y, 20, 20);

  fill(255, 220);
  rect(60, 80 + 3 * y, 40);
  rect(40, 90 + 3 * y, 20, 30);
  rect(100, 90 + 3 * y, 20, 30);
  rect(120, 100 + 3 * y, 20, 20);

  rect(60 + 3 * x, 80 + 2 * y, 40);
  rect(40 + 3 * x, 90 + 2 * y, 20, 30);
  rect(100 + 3 * x, 90 + 2 * y, 20, 30);
  rect(120 + 3 * x, 100 + 2 * y, 20, 20);

  fill(255);
  rect(60 + 3 * x, 80 - y / 2, 40);
  rect(40 + 3 * x, 90 - y / 2, 20, 30);
  rect(100 + 3 * x, 90 - y / 2, 20, 30);
  rect(120 + 3 * x, 100 - y / 2, 20, 20);

  //head
  fill(78, 45, slider.value(), 180);
  stroke(255, 180);
  strokeWeight(2);
  ellipseMode(CENTER);
  ellipse(240, 280, 250, 360);

  //cheek
  fill(245, 120, 170);
  noStroke();
  ellipse(120, 300, 40, 20);
  ellipse(360, 300, 40, 20);

  //eyes
  fill(0, 0, slider.value());
  stroke(255);
  strokeWeight(3);
  ellipse(eyeX1, eyeY, 40);
  ellipse(eyeX1 + 100, eyeY, 40);
  noStroke();
  fill(255);
  ellipse(eyeX1 + 100, eyeY, 15);
  ellipse(eyeX1, eyeY, 15);

  push();
  translate(40,80);
  noFill();
  stroke(0);
  bezier(120, 100, 140, brow, 160, brow, 180, 100);
  bezier(220, 100, 240, brow, 260, brow, 280, 100);
  pop();

  //nose
  fill(0);
  noStroke(0);
  rectMode(CENTER);
  rect(240, 330, 10, 30, 10);

  //mouth
  fill(205,0,40);
  ellipse(240, 400, mh, mw);

  if (displayState == 0) {
    brow = 90;
    eyeX1 = 190;
    eyeX2 = 290;
    mw = 20;
    mh = 90;
  } else {
    brow = 120;
    eyeX1 = 220;
    eyeX2 = 320;
    mw = 60;
    mh = 20;
  }

}

function addGUI()
{
  //add a slider
  slider = createSlider(70, 255, 0, 1);
  slider.addClass("slider");
  //Add the slider to the parent gui HTML element
  slider.parent("gui-container");

  //add a button
  if (displayState == 0) {
    button = createButton("Left");
  } else if (displayState == 1) {
    button = createButton("Right");
  }

  button.addClass("button");

  //Add the play button to the parent gui HTML element
  button.parent("gui-container");

  //Adding a mouse pressed event listener to the button
  button.mousePressed(handleButtonPress);

}

function handleButtonPress()
{
    
 if (displayState < 1) {
    displayState++;
  } else {
    displayState = 0;
  }

  if (displayState == 0) {
    button.html("Left");
  } else if (displayState == 1) {
    button.html("Right");
  }
}

function windowResized() {
  if (windowWidth < 600) {
    resizeCanvas(windowWidth, windowHeight);
  } else if (window.size != 600) {
    resizeCanvas(600, 600);
  }
}
