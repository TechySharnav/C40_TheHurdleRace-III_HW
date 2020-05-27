class Bob {
    constructor(x, y, radius) {

        var options = {
            restituiton: 0,
            friction: 2,
            density: 1
        }

        this.body = Bodies.circle(x, y, radius, options)
        this.radius = radius;

        World.add(world, this.body);
    }
    display(color) {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(color);
        circle(0, 0, this.radius * 2);
        pop()
    }
}

