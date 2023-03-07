let x = 150;
let y = 150;

let state = "start";
let velocity = 1;
let acceleration = 0.1;
let power = 400;

let starX = [];
let starY = [];
let starMain = [];

function setup() {
  createCanvas(700, 600);
}

//screens

function startScreen() {
  bground();

  push();
  translate(0, 0);
  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 255);
  translate(0, 0);
  text("Falcon Lander", 350, 350);

  pop();

  push();
  translate(0, 30);
  textAlign(CENTER);
  textSize(10);
  fill(255, 255, 255);
  text("Click space bar to start <3", 350, 350);

  pop();
}

function gameScreen() {
  background(0, 0, 0);
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
  bground();
  push();
  translate(0, 0);
  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 255);
  text("You won", 350, 350);

  pop();

  push();
  translate(0, 30);
  textAlign(CENTER);
  textSize(10);
  fill(255, 255, 255);
  text("Good job! Click space bar if you wish to play again", 350, 350);

  pop();
}

function lostScreen() {
  bground();
  push();
  translate(0, 0);
  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 255);
  text("You lost", 350, 350);

  pop();

  push();
  translate(0, 30);
  textAlign(CENTER);
  textSize(10);
  fill(255, 255, 255);
  text("Click space bar to try again", 350, 350);

  pop();
}

//stars
// inspired by garrits video: https://youtu.be/kISBKRn-6_I

for (let i = 0; i < 1000; i++) {
  const x = Math.floor(Math.random() * 700);
  const y = Math.floor(Math.random() * 600);
  const main = Math.random();

  starX.push(x);
  starY.push(y);
  starMain.push(main);
}

//background

function bground() {
  background(3, 7, 19);
  push();
  fill(170, 170, 170);
  ellipse(x + 400, y + 60, 400, 400);

  push();
  fill(90, 90, 90);
  ellipse(x + 290, y + 20, 120, 130);
  pop();

  push();
  stroke(0, 0, 0);
  strokeWeight(2);
  noFill();
  ellipse(x + 290, y + 20, 80, 90);
  pop();

  push();
  fill(170, 170, 170);
  ellipse(x + 290, y + 20, 30, 30);
  pop();

  push();
  fill(0, 0, 0);
  ellipse(x + 290, y + 20, 10, 10);
  pop();

  push();
  fill(19, 130, 180);
  ellipse(x - 20, y + 360, 50, 50);
  pop();

  push();
  fill(19, 160, 120);
  ellipse(x + 70, y + 380, 30, 30);
  pop();

  push();
  fill(19, 160, 10);
  ellipse(x + 190, y + 350, 20, 20);
  pop();
}

function ground() {
  push();
  noStroke();
  fill(25, 0, 255);
  rect(x, y, x + 20, y + 20);
  pop();
}

//falcon drawing

function falcon() {
  push();
  beginShape();
  stroke(27, 27, 27);
  strokeWeight(3);

  //front thingies
  beginShape();
  fill(211, 211, 211);
  vertex(110, y - 32);
  vertex(133, y - 95);
  vertex(142, y - 95);
  vertex(140, y - 39);
  vertex(158, y - 39);
  vertex(157, y - 95);
  vertex(166, y - 95);
  vertex(190, y - 32);
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
  line(x - 30, y - 16, x - 23, y - 16);

  push();
  ellipse(x - 18, y + 30, 7, 7);
  ellipse(x, y + 34, 7, 7);
  ellipse(x + 18, y + 30, 7, 7);

  push();
  ellipse(x - 10, y + 20, 4, 4);
  ellipse(x, y + 20, 4, 4);
  ellipse(x + 10, y + 20, 4, 4);

  push();
  fill(211, 211, 211);
  ellipse(x, y, 20, 20);

  push();
  fill(0, 0, 0);
  ellipse(x, y - 4, 10, 10);

  beginShape();
  fill(211, 211, 211);
  vertex(138, y - 15);
  vertex(162, y - 15);
  vertex(138, y - 15);
  vertex(143, y - 65);
  vertex(156, y - 65);
  vertex(162, y - 15);
  endShape();

  //left motor top
  beginShape();
  fill(65, 65, 65);
  vertex(102, y - 10);
  vertex(94, y - 8);
  vertex(94, y + 7);
  vertex(102, y + 10);
  endShape();

  //left motor
  beginShape();
  fill(211, 211, 211);
  vertex(135, y - 6);
  vertex(135, y + 6);
  vertex(102, y + 10);
  vertex(102, y - 10);
  vertex(135, y - 6);
  endShape();

  //right motor top
  beginShape();
  fill(65, 65, 65);
  vertex(199, y - 10);
  vertex(207, y - 8);
  vertex(207, y + 7);
  vertex(199, y + 10);
  endShape();

  //right motor
  beginShape();
  fill(211, 211, 211);
  vertex(165, y - 5);
  vertex(165, y + 6);
  vertex(199, y + 10);
  vertex(199, y - 10);
  vertex(165, y - 5);
  endShape();

  beginShape();
  vertex(169, y - 23);
  vertex(192, y - 34);
  vertex(204, y - 17);
  vertex(172, y - 14);
  vertex(169, y - 23);
  endShape();

  beginShape();
  vertex(192, y - 34);
  vertex(192, y - 45);
  vertex(205, y - 45);
  vertex(205, y - 17);
  endShape();

  beginShape();
  fill(65, 65, 65);
  vertex(192, y - 45);
  vertex(195, y - 57);
  vertex(202, y - 57);
  vertex(205, y - 45);
  vertex();
  endShape();
  pop();
}

//function draw

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

  noStroke();
  for (let index in starX) {
    fill(255, 255, 255, starMain[index] * 255);
    ellipse(starX[index], starY[index], 2);
  }
}

//keycodes

function keyPressed() {
  if (keyCode === 32 && state === "start") {
    state = "game";
  } else if (keyCode === 32 && state === "lost") {
    state = "game";
  } else if (keyCode === 32 && state === "win") {
    state = "game";
  }
}
