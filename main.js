function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(300,100);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 160, 90, 320, 300);

  fill(255,165,0);
  stroke(139,0,0);
  circle(50, 50, 80);

  circle(50, 430, 80);

  circle(590, 50, 80);

  circle(590, 430, 80);

  fill(154, 18, 179);
  stroke(255,255,0);
  rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('picture.png');
}