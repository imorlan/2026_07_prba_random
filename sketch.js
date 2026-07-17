// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

const standard_deviation = 0.8;

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(0);
  noStroke();

  // Semilla basada en la hora actual
  randomSeed(Date.now()); // milisegundos desde 1970
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 4;
    this.y = height / 2;
    this.x2 = this.x + (width / 2);
    this.y2 = height / 2;

  }

  show() {
//    fill(255*random(),255*random(),255*random());
//    circle(this.x, this.y,10*random()); 
    strokeWeight(10);
    stroke(255*random(),255*random(),255*random());
    point(this.x, this.y);
    point(this.x2, this.y2);
  }

  step() {
    let xstep = gaussian_discrete();
    let ystep = gaussian_discrete();
    let xstep2 = floor(random(3)) - 1;
    let ystep2 = floor(random(3)) - 1;

    print("xstep2: ",xstep2, " ystep2: ", ystep2, " ------- xstep: ",xstep, " -- ystep: ", ystep);
    this.x += xstep;
    this.y += ystep;
    this.x2 += xstep2;
    this.y2 += ystep2;
  }
}

function gaussian_discrete() {
  let gauss = randomGaussian(0, standard_deviation);
  return constrain(round(gauss), -1, 1);
}
