const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisionHeight = 300;
var divisions = [];
var plinkos = [];
var particle;
var gameState = "Play";
var Score = 0;
var count = 0;

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

  ground.display();

  //Gaver over after 5 particles
 if(count > 5){
   gameState = "Over";
}

  if(gameState === "Over"){
    textSize(18);
    text("Game Over", 200, 225);
    text("Press R to Restart", 170, 250);   
  }

//Display Scores
  textSize(15);
  text("500",25,500);
  text("200",105,500);
  text("100",185,500);
  text("100",265,500);
  text("200",345,500);
  text("500",425,500);

  fill("white");
  textSize(15);
  text("Score: "+ Score, 20,30);

  //Condition for Increasing Score
if(gameState === "Play"){
  if(particle != null){
    particle.display();

    if(particle.body.position.y > 750){

     if(particle.body.position.x > 5 && particle.body.position.x <75){
       Score = Score + 500;
       particle = null;
    }
      else if(particle.body.position.x > 85 && particle.body.position.x <155){
        Score = Score + 200;
       particle = null;
     }
      else if(particle.body.position.x > 165 && particle.body.position.x <235){
        Score = Score + 100;
        particle = null;
    }
      else if(particle.body.position.x > 245 && particle.body.position.x <315){
        Score = Score + 100;
        particle = null;
    }
    else if(particle.body.position.x > 325 && particle.body.position.x <395){
      Score = Score + 200;
      particle = null;
  }
    else if(particle.body.position.x > 405 && particle.body.position.x <475){
      Score = Score + 500;
      particle = null;
    }
  }
 }
}
  stroke("yellow");
  strokeWeight(4);
  line(0,450,480,450);
}

//Make Particles
function mouseReleased(){
  if(gameState === "Play"){
  particle = new Particle(mouseX,10,false);
  count++;
  }  
}

function keyPressed(){
  if(gameState === "Over" ){
    if(keyCode === 82){
      count = 0;
      gameState = "Play";
      Score = 0;
      particle = null; 
  }
 }
}