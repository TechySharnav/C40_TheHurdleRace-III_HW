const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//Groud Variable
var ground;
//Wall Variables
var wall1, wall2, wall3;
//Small Boxes Variable
var small_box1, small_box2, small_box3, small_box4, small_box5;
//Triangular roof variable
var tri1, tri2;

//Assign X and Y position to variables
var pos_x = 320;
var pos_y = 340;

function setup() {
	createCanvas(1280, 720);

	//Create Engine and Initialise World
	engine = Engine.create();
	world = engine.world;

	//Create Ground
	ground = new Ground(640, 710, 1280, 20);

	//tri1 = new Triangle(pos_x + 10, pos_y - 550);

	//Create Walls
	wall1 = new Box(pos_x, pos_y - 100, 120, 450);
	wall2 = new Box(pos_x + 375, pos_y - 100, 630, 300);
	wall3 = new Box(pos_x + 750, pos_y - 100, 120, 450);

	//Create Boxes on top of Roof
	small_box1 = new Box(pos_x + wall1.width + 50, pos_y - 420, 100, 100);
	small_box2 = new Box(pos_x + wall1.width + 250, pos_y - 420, 100, 100);
	small_box3 = new Box(pos_x + wall1.width + 450, pos_y - 420, 100, 100);

	small_box4 = new Box(pos_x + 750, pos_y - 400, 90, 30);
	small_box5 = new Box(pos_x + 750, pos_y - 500, 45, 12);

	tri1 = new Triangle(pos_x + wall1.width + 630, pos_y - 600, 4, 60);
	tri2 = new Triangle(pos_x, pos_y - 600, 4, 165);
}

function draw() {
	background('#94bce2');

	//Update Engine
	Engine.update(engine);

	//Display Ground
	ground.display();

	//Display Walls
	wall1.display();
	wall2.display();
	wall3.display();

	//Display Small Boxes
	small_box1.display();
	small_box2.display();
	small_box3.display();

	small_box4.display();
	small_box5.display();

	//Display Triangular Roofs
	tri1.display(22, 44);
	tri2.display(60, 120);

	drawSprites();
}
