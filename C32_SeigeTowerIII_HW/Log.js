class Log{
  constructor(x, y, height, image) {
  var options = {
      restitution: 0.1,
      friction: 1.0,
      density: 1.2,
    };

    this.body = Bodies.rectangle(x, y, 200, 20, options);
    this.width = 200;
    this.height = height;
    this.image = loadImage(image);
    World.add(world, this.body);  
    this.visibility = 255;
}
display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    //console.log(this.body.speed);

if(this.body.speed < 10){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,200, 20);
    pop();
  }
  else{
    push();
    World.remove(world, this.body);
    this.visibility = this.visibility -5;
    tint(255, this.visibility);
    image(this.image, 0,0,20,20);
    pop()
  }
  }
  score(){
    if(this.visibility < 0 && this.visibility > -105){
    Score++;
  }
}
}