class Particle {
    constructor(x, y, statiscity) {

        var options = {
            restituiton: 0.4,
            isStatic: statiscity
        }

        this.body = Bodies.circle(x, y, 10, options)
        this.radius = 10;

        World.add(world, this.body);

        this.color  = ['#E1C699','#4d4dff','#32CD32','#FC7233','#E4324C','#5BC0EB',"#FDE74C",'#9BC53D','#ff073a',"#FC94AF"]
        this.Randomcolor = random(this.color);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body. angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.Randomcolor);
        circle(0, 0, 20);     
        pop();
    }
}

