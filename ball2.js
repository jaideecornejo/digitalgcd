
var balls = [];

function mouseDragged() {
  var ball = new Ball (mouseX,mouseY);
  balls.push(ball);
}

function draw() {
  background(255);
  fill(random(255), random(255), random(255));
  noStroke();
  for(var i = 0; i < balls.length; i++)
  balls[i].draw();
  
  //if this.position.x =  
  
}

function setup(){
  resizeCanvas(500,500);

}