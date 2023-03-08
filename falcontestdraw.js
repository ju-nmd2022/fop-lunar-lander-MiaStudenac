let x = 150;
let y = 150;

function draw() {
  background(255, 135, 145);
  falcon();
  y = y + 2;
}

function falcon() {
  push();
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
