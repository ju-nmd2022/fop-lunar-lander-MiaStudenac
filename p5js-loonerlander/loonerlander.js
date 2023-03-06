let x = 200;
let y = 200;

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
  text("Start", 350, 350);

  pop();
}

function gameScreen() {
  bground();
  ground();
  rocketship();

  y = y + velocity;
  velocity = velocity + acceleration;

  if (keyIsDown(40)) {
    y = y - velocity * 1.5;
    velocity = velocity - 0.4;
    power = power - 10;
  }

  if (y > 500) {
    x = 300;
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
}

//drawing inspired by: https://jakesherwood.com/blog/icm/back-side-of-the-moon

function rocketship() {
  beginShape();
  translate(x, y);
  scale(0.3);

  vertex(257.040979090991, 328.921790616971);
  vertex(211, 96);
  vertex(209, 92.9999999999991);
  vertex(207.000000012751, 96.0000000011332);
  vertex(159.982813853276, 328.882925600135);
  vertex(102.61089257365, 421.188672977114);
  vertex(109.535403344522, 424.359027938957);
  vertex(167.19504497303, 368.535169905344);
  vertex(170, 379.999999999472);
  vertex(247, 380);
  vertex(249.795712661416, 368.57829202482);
  vertex(307.196782391798, 424.359027940138);
  vertex(314.121293162814, 421.188672978606);
  vertex(256.748416278428, 328.882592216556);
  endShape();
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
    y = 100;
    power = 400;
    velocity = 1;
    state = "win";
  } else if (y > 440 && (velocity * 10 > 20, velocity * 10 < 0)) {
    y = 100;
    power = 400;
    velocity = 1;
    state = "lost";
  } else if (power < 0) {
    y = 100;
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
