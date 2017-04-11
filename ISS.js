function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(loadISS, 1000);
    noStroke();
    background(0);
}


function loadISS(){
  loadJSON('http://api.open-notify.org/iss-now.json', gotISS);
}


function gotISS(data) {
  console.log(data.iss_position.longitude);
  
  var longitude = Number(data.iss_position.longitude);
  var latitude = Number(data.iss_position.latitude);
  
  // ellipse(50, 50, latitude, latitude);
  
  var x = map(longitude,-180,180, 0, 500);
  var y = map(latitude, -90,90, 0, 500);
  
  
  ellipse(x,y,random(100));
  fill(random(255), random(255), random(255), 75);
  
}

