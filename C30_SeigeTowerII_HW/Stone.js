class Stone {
    constructor(x, y) {
        var options = {
            restitution: 0.1,
            friction: 1.0,
            density: 1.0,
            isStatic: false
        };

        this.sides = 6;
        this.radius = 25;

        this.body = Matter.Bodies.polygon(x, y, this.sides, this.radius, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle2 = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle2);
        strokeWeight(2);
        fill("yellow");
        polygon(0, 0, 25, 6);
    }
}
function polygon(x, y) {
    let angle = TWO_PI / 6;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * 25;
        let sy = y + sin(a) * 25;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}