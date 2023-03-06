let x = 150;
let y = 150;

let state = "start";
let velocity = 1;
let acceleration = 0.1;
let power = 400;

function setup() {
  createCanvas(800, 700);
}

function startScreen() {
  background(0, 0, 0);

  push();
  translate(0, 0);
  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 255);
  text("Falcon Lander", 350, 350);

  pop();

  push();
  translate(30, 30);
  textAlign(CENTER);
  textSize(10);
  fill(255, 255, 255);
  text("Click space bar to start <3", 350, 350);

  pop();
}

function gameScreen() {
  bground();
  ground();
  falcon();

  y = y + velocity;
  velocity = velocity + acceleration;

  if (keyIsDown(40)) {
    y = y - velocity * 1.5;
    velocity = velocity - 0.4;
    power = power - 10;
  }

  if (y > 400) {
    x = 150;
    y = 500;
  }
}

function winScreen() {
  background(0, 0, 0);

  push();
  translate(0, 0);
  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 255);
  text("You won", 350, 350);

  pop();

  push();
  translate(30, 30);
  textAlign(CENTER);
  textSize(10);
  fill(255, 255, 255);
  text("Good job! Click space bar if you wish to play again", 350, 350);

  pop();
}

function lostScreen() {
  background(0, 0, 0);

  push();
  translate(0, 0);
  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 255);
  text("You lost", 350, 350);

  pop();

  push();
  translate(30, 30);
  textAlign(CENTER);
  textSize(10);
  fill(255, 255, 255);
  text("Click space bar to try again", 350, 350);

  pop();
}

function falcon() {
  push();
  beginShape();
  translate(200, 100);
  background(255, 135, 145);
  stroke(27, 27, 27);
  strokeWeight(3);

  //front thingies
  beginShape();
  fill(211, 211, 211);
  vertex(110, 118);
  vertex(133, 55);
  vertex(142, 55);
  vertex(140, 111);
  vertex(158, 111);
  vertex(157, 55);
  vertex(166, 55);
  vertex(190, 118);
  endShape();

  push();
  fill(211, 211, 211);
  ellipse(x, y, 100, 100);

  push();
  fill(0, 0, 0);
  ellipse(x - 18, y - 67, 3, 3);
  ellipse(x - 23, y - 54, 3, 3);
  ellipse(x + 16, y - 67, 3, 3);
  ellipse(x + 23, y - 54, 3, 3);
  ellipse(x + 20, y - 32, 3, 3);
  rect(x - 30, y - 30, 7, 7);
  line(120, 134, 127, 134);

  ellipse(x - 18, y + 30, 7, 7);
  ellipse(x, y + 34, 7, 7);
  ellipse(x + 18, y + 30, 7, 7);

  ellipse(x - 10, y + 20, 4, 4);
  ellipse(x, y + 20, 4, 4);
  ellipse(x + 10, y + 20, 4, 4);

  push();
  fill(211, 211, 211);
  ellipse(x, y, 20, 20);

  push();
  fill(0, 0, 0);
  ellipse(x, y - 4, 10, 10);

  push();
  beginShape();
  fill(211, 211, 211);
  vertex(138, 135);
  vertex(162, 135);
  vertex(138, 135);
  vertex(143, 85);
  vertex(156, 85);
  vertex(162, 135);
  endShape();

  //left motor top
  push();
  beginShape();
  fill(65, 65, 65);
  vertex(102, 140);
  vertex(94, 142);
  vertex(94, 157);
  vertex(102, 160);
  endShape();

  //left motor
  push();
  beginShape();
  fill(211, 211, 211);
  vertex(135, 144);
  vertex(135, 156);
  vertex(102, 160);
  vertex(102, 140);
  vertex(135, 144);
  endShape();

  //right motor top
  push();
  beginShape();
  fill(65, 65, 65);
  vertex(199, 140);
  vertex(207, 142);
  vertex(207, 157);
  vertex(199, 160);
  vertex();
  endShape();

  //right motor
  push();
  beginShape();
  fill(211, 211, 211);
  vertex(165, 145);
  vertex(165, 156);
  vertex(199, 160);
  vertex(199, 140);
  vertex(165, 145);
  endShape();

  push();
  beginShape();
  vertex(169, 127);
  vertex(192, 116);
  vertex(204, 133);
  vertex(172, 136);
  vertex(169, 127);
  vertex();
  endShape();

  push();
  beginShape();
  vertex(192, 116);
  vertex(192, 105);
  vertex(205, 105);
  vertex(205, 133);
  endShape();

  push();
  beginShape();
  fill(65, 65, 65);
  vertex(192, 105);
  vertex(195, 93);
  vertex(202, 93);
  vertex(205, 105);
  vertex();
  endShape();

  endShape();
  pop();
}

function ground() {
  push();
  noStroke();
  fill(25, 0, 255);
  rect(-670, 1300, 3000, 400);
  pop();
}

function bground() {
  background(0, 0, 78);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lost") {
    lostScreen();
  } else if (state === "win") {
    winScreen();
  }

  if (y > 400 && power > 0 && velocity * 10 > 0 && velocity * 10 <= 20) {
    y = 200;
    power = 400;
    velocity = 1;
    state = "win";
  } else if (y > 440 && (velocity * 10 > 20 || velocity * 10 < 0)) {
    y = 200;
    power = 400;
    velocity = 1;
    state = "lost";
  } else if (power < 0) {
    y = 200;
    power = 400;
    velocity = 1;
    state = "lost";
  }
}

function keyPressed() {
  if (keyCode === 32 && state === "start") {
    state = "game";
  } else if (keyCode === 32 && state === "lost") {
    state = "game";
  } else if (keyCode === 32 && state === "win") {
    state = "game";
  }
}
