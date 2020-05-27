const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;



function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	roof = new Roof(600, 100, 650, 20);

	bob1 = new Bob(410, 500, 45);
	bob2 = new Bob(500, 500, 45);
	bob3 = new Bob(590, 500, 45);
	bob4 = new Bob(680, 500, 45);
	bob5 = new Bob(770, 500, 45);

	rope1 = new Rope(bob1.body, roof.body, -180, 0);
	rope2 = new Rope(bob2.body, roof.body, -90, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 90, 0);
	rope5 = new Rope(bob5.body, roof.body, 180, 0);

}


function draw() {
	background("#E7E7E8");

	roof.display();

	rope1.display(415);
	rope2.display(505);
	rope3.display(595);
	rope4.display(685);
	rope5.display(775);


	bob1.display("#D00000");
	bob2.display("#FFBA08");
	bob3.display("#3F88C5");
	bob4.display("#032B43");
	bob5.display("#136F63");

	Engine.update(engine);


	drawSprites();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(bob1.body, { x: bob1.body.position.x - 50, y: bob1.body.position.y }, { x: -200, y: 00 });
	}
}



