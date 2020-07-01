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
}
display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,200, 20);
    pop();
  }
}