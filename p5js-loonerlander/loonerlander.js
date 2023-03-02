let x = 200;
let y = 60;

let state = "start";

function setup() {
  createCanvas(800, 700);
  frameRate(30);
}

// inspired by garrits video: https://youtu.be/3DcmPs4v2iA

function startScreen() {
  background(0, 0, 0);
  text("Start", 300, 300);
  fill(255, 255, 255);
}

function gameScreen() {
  bground();
  rocketship();
  ground();
}
gameScreen();

function resultScreen() {
  background(0, 0, 0);
  text("You lost", 300, 300);
  fill(255, 255, 255);
}

//drawing inspired by: https://jakesherwood.com/blog/icm/back-side-of-the-moon

function rocketship() {
  beginShape();
  translate(x, y);

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
  noStroke();
  fill(255, 0, 255);
  rect(-200, 550, 800, 150);
}

function bground() {
  background(0, 0, 78);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "game";
    gameScreen();
  }
}

function rocket() {
  clear();
  fill(230, 46, 175);
  ellipse(x, y, 30);
}
