//Fixed Rect and Moving Rect variable
var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);
  
  //Create fixedRect Sprite and change its properties
  fixedRect =  createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = -5;

  //Create movingRect Sprite and Change its Properties
  movingRect =  createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = +5;
}



function draw() {
  background(255,255,255);  

 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 /* if(movingRect.x - fixedRect.x < (movingRect.width + fixedRect.width)/2 && 
 fixedRect.x - movingRect.x < (movingRect.width + fixedRect.width)/2 &&
 fixedRect.y - movingRect.y < (movingRect.height + fixedRect.height)/2 &&
 movingRect.y - fixedRect.y < (movingRect.height + fixedRect.height)/2 ){
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
 }
else{
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green";
} */

//Check for Bouncing Conditions
if(movingRect.x - fixedRect.x < (movingRect.width + fixedRect.width)/2 &&
fixedRect.x - movingRect.x < (movingRect.width + fixedRect.width)/2){
  movingRect.velocityX = movingRect.velocityX *(-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if(movingRect.y - fixedRect.y < (movingRect.height + fixedRect.height)/2 &&
fixedRect.y - movingRect.y < (movingRect.height + fixedRect.height)/2){
  movingRect.velocityY = movingRect.velocityY *(-1);
  fixedRect.velocityY= fixedRect.velocityY * (-1);
}

  drawSprites();
}