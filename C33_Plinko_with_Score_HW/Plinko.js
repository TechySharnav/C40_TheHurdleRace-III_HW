class Plinko {
    constructor(x, y, statiscity) {

        var options = {
            restituiton: 0,
            friction: 1.0,
            density: 1.2,
            isStatic: statiscity
        }

        this.body = Bodies.circle(x, y, 10, options)
        this.radius = 10;

        World.add(world, this.body);
    }
    display(color) {
        var pos = this.body.position;

        push()
        ellipseMode(CENTER);
        fill(color);
        circle(pos.x, pos.y, 20);     
        pop();
    }
}

