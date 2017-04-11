function Ball(x,y){
  this.position = {x:x, y: y};
  this.speed = {x:random(-2,2), y: random(-2,2)};
  
  this.draw = function(){
    this.position.x+= this.speed.x;//+ random(-2,2);
    this.position.y+= this.speed.y;//+ random(-2,2);
    
    ellipse(this.position.x, this.position.y, 10,10);
  }
  
}

