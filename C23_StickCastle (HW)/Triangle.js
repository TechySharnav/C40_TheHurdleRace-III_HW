class Triangle {
	constructor(x, y, sides, radius) {
		var options = {
			restitution: 0,
			friction: 10,
			density: 0.1,
		};

		this.body = Bodies.polygon(x, y, sides, radius, options);

		//this.body = Bodies.rectangle(x, y, side, radius, options);
		World.add(world, this.body);
	}
	display(width, height) {
		var pos = this.body.position;

		fill(0);
		triangle(pos.x, pos.y, pos.x - width, pos.y + height, pos.x + width, pos.y + height);
	}
}
