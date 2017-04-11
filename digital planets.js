function setup() {
  //To resize the canvas
  resizeCanvas(500,500)
  background(0);
}

function drawPlanet(x, y, radius) {
  ellipse (x,y,radius,radius);
var c = color(random (255),random (255),random (255));  // Define color 'c'
fill(c);  // Use color variable 'c' as fill color
noStroke();  // Don't draw a stroke around shapes


}



function drawMoons() {
  
}


function mouseClicked() {
  drawPlanet(mouseX, mouseY, random(60),color);
  drawMoons()
}

function mousePressed(){
  
}

