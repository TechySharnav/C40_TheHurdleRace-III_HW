const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisionHeight = 300;
var divisions = [];
var plinkos = [];
var particles = [];


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;


  ground = new Ground(240, 790, 480, 20);

  //Make Divisions
  for(var k = 0; k <= width; k = k+80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  //Make Plinkos
  for(var x = 40; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 75, true));
  }
  for(var x = 15; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 175, true));
  }
  for(var x = 40; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 275, true));
  }
  for(var x = 15; x <= width; x = x + 50){
    plinkos.push(new Plinko(x, 375, true));
  }

}

function draw() {
  background("#333333");  
  Engine.update(engine);
  

  //Display Divisions
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //Display Plinkos
  for(var x = 0; x < plinkos.length; x++){
    plinkos[x].display('white');
  }

  //MAke Particles
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(100,400),10,false));
  }

  //Display Paticles
  for(var i =  0; i < particles.length; i++){
    particles[i].display();
  }
  ground.display();
}