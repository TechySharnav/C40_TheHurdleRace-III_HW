class rectBlock {
  constructor(x, y, width, height, image) {
    var options = {
      restitution: 0,
      friction: 1.0,
      density: 1.2,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
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
    image(this.image, 0, 0, this.width, this.width);
    pop();
  }
}
