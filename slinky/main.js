// Fork https://www.openprocessing.org/sketch/135387

const randomColor = () => [random(255), random(255), random(255)];
let strokeColor;
let backgroundColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(backgroundColor);
  strokeColor = randomColor();
}

function draw() {
  stroke(frameCount % strokeColor[0], ...strokeColor.slice(1), 11);
  strokeWeight(0.7);
  translate(width / 2, height / 2);

  beginShape();
  for (let i = 0; i < 2048; i += 1) {
    let angle = map(i, 0, 1024, 0, TWO_PI + 0.1);
    let next = map(noise(i * 0.011, frameCount * 0.006), 0, 1, -128, 1152);
    curveVertex(next * cos(angle), next * sin(angle));
  }
  // rotate(PI / random(2) * -2.0); // iris
  // rotate(PI / millis() * 100)
  endShape();
}

function mousePressed() {
  backgroundColor = backgroundColor === 255 ? 0 : 255;
  background(backgroundColor);
  strokeColor = randomColor();
}
