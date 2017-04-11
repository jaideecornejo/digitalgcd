/*  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
    edited by Jaidee Cornejo - Weather API
*/


function setup() {
  //set Canvas to size of window
  resizeCanvas(1200, 800);



  //Introduction Page
  background(255);
  textFont("Futura")
  fill(0);
  textSize(100);
  fill(82, 204, 232);
  text("W", 518, 150);
  fill(195, 32, 232, 95);
  text("X", 539, 150);
  // triangle
  fill("#bee8ad");
  noStroke();
  triangle(520, 305, 570, 210, 620, 305);
  // rect
  fill("#fbcad2");
  noStroke();
  rect(705, 205, 100, 100);
  // circle
  fill("#fef49f")
  ellipse(400, 260, 100, 100);




  //create Button object 1 (London)
  button1 = createButton('LDN', color(255,0,0));
  button1.position(50, 180);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22london%2Cuk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      weatherLoaded);
  });

  //create Button object 2 (New York)
  button2 = createButton('NYC');
  button2.position(50, 220);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20York%2C%20New%20York%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      weatherLoaded);
  });

  //create Button object 3 (tokyo)
  button3 = createButton('TYO');
  button3.position(50, 260);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tokyo%2C%20Tokyo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      weatherLoaded);
  });

  //create Button object 4 (São Paulo)
  button4 = createButton('SAO');
  button4.position(50, 300);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22S%C3%A3o%20Paulo%2C%20S%C3%A3o%20Paulo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      weatherLoaded);
  });

  //create Button object 5 (Melbourne)
  button5 = createButton('MEL');
  button5.position(50, 340);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Melbourne%2C%20Melbourne%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      weatherLoaded);
  });
  
//create Button object 6 (Birmingham)
  button6 = createButton('BIR');
  button6.position(50, 380);
  //Load Data when Button 5 is Pressed
  button6.mousePressed(function() {
    loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22birmingham%2Cuk%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
      weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;

  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

  // HOW to get avarage of tempD2H+tempD2L?!?!
  //var tempforcast1 = ((tempD2H+tempD2L)/2);




  //print data to the console
  //print(temp);
  //print(windSpeed);
  print(tempD2H);
  print(tempD2L);
  //print(tempforcast1);

  background(255);

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  textSize(100);
  textFont("Futura");
  //windspeed
  fill(windSpeed * 15, 237, 139, 150)
  text(windSpeed, 180, 180);
  textSize(25);
  text("WIND SPEED", 210, 230);
  //temp
  fill(temp * 5, 50, 50, 85);
  textSize(100);
  text(temp, 600, 590);
  textSize(25);
  text("TEMPERATURE", 490, 635);
  // direction
  fill(windDirection / 2, 173, windDirection * 2, 150);
  textSize(100);
  text(windDirection, 790, 300);
  textSize(25);
  text("WIND DIRECTION", 710, 350);
  // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(windSpeed * 15, 237, 139, 150);
  noStroke();
  ellipse(525, 350, windSpeed * 10, windSpeed * 10);

  //create ellipse and set width and height of the ellipse to temp data
  fill(temp * 5, 50, 50, 85);
  noStroke();
  rect(290, 400, 100, temp * 2);


  //create rect and set rotation of rect to windDirection
  translate(500, 250);
  fill(windDirection / 2, 173, windDirection * 2, 150);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  triangle(30, 75, 58, 20, 86, 75);





}