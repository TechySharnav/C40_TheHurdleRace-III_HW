const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground, paper_ball, bin;

function setup() {
	createCanvas(1600, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800, height, 1600, 20);
	paper_ball = new PaperBall(100, 200, 15);

	bin = new Bin(1200, 380);
}


function draw() {
	rectMode(CENTER);
	background("#DCAE96");

	ground.display();
	paper_ball.display();
	bin.display();

	Engine.update(engine);

	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(paper_ball.body, paper_ball.body.position, { x: 52, y: -52 });
	}
}


