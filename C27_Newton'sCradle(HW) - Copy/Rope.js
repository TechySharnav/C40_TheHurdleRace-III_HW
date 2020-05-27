class Rope {
    constructor(body1, body2, Xoffset, Yoffset) {

        this.offsetX = Xoffset;
        this.offsetY = Yoffset;

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: { x: this.offsetX, y: this.offsetY }
        }
        this.rope = Constraint.create(options);

        World.add(world, this.rope);
    }
    display(X) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);
        line(pointA.x, pointA.y, X, 100);

    }
}