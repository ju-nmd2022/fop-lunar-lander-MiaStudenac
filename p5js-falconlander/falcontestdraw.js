let x = 150;
let y = 150;

function falcon() {
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
  beginShape();
  fill(65, 65, 65);
  vertex(102, 140);
  vertex(94, 142);
  vertex(94, 157);
  vertex(102, 160);
  endShape();

  //left motor
  beginShape();
  fill(211, 211, 211);
  vertex(135, 144);
  vertex(135, 156);
  vertex(102, 160);
  vertex(102, 140);
  vertex(135, 144);
  endShape();

  //right motor top
  beginShape();
  fill(65, 65, 65);
  vertex(199, 140);
  vertex(207, 142);
  vertex(207, 157);
  vertex(199, 160);
  vertex();
  endShape();

  //right motor
  beginShape();
  fill(211, 211, 211);
  vertex(165, 145);
  vertex(165, 156);
  vertex(199, 160);
  vertex(199, 140);
  vertex(165, 145);
  endShape();

  vertex(169, 127);
  vertex(192, 116);
  vertex(204, 133);
  vertex(172, 136);
  vertex(169, 127);
  vertex();
  endShape();

  beginShape();
  vertex(192, 116);
  vertex(192, 105);
  vertex(205, 105);
  vertex(205, 133);
  endShape();

  beginShape();
  fill(65, 65, 65);
  vertex(192, 105);
  vertex(195, 93);
  vertex(202, 93);
  vertex(205, 105);
  vertex();
  endShape();

  pop();
}
falcon();
