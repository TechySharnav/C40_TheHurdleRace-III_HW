var redBox, blueBox, yellowBox, resetBox;
var pointer, pointerCoordinates;
var database, position;
var pos = [];

function setup() {
  createCanvas(400,400);

  pointer = createSprite(0, 0, 5, 5);

  redBox = createSprite(50,40,20,20);
  redBox.shapeColor = "red";

  yellowBox = createSprite(150,40,20,20);
  yellowBox.shapeColor = "yellow";

  blueBox = createSprite(250,40,20,20);
  blueBox.shapeColor = "blue";

  resetBox = createSprite(350,40,20,20);

  database = firebase.database();
  var pointerPosition = database.ref('pointer/position');
  pointerPosition.on("value", readPosition, showError);
}

function draw() {
  if(position !== undefined){
    writePosition();
  }
  //pos = [pointer.x, pointer.y];

  drawSprites();
}
function readPosition(data){
  position = data.val();

  pointer.x = position.x;
  pointer.y = position.y;
}

function writePosition(){
  database.ref('pointer/position').set({
    'x': mouseX,
    'y': mouseY
  })
}

function showError(){
  console.log("Error Writing to Database!!");
}

function mouseClicked(){
  if(pointer.x >40 && pointer.x < 60 && pointer.y < 50 && pointer.y > 30){
    pointer.shapeColor = "red";
    stroke("red");
  }
  if(pointer.x >140 && pointer.x < 160 && pointer.y < 50 && pointer.y > 30){
    pointer.shapeColor = "yellow";
    stroke("yellow");
  }
  if(pointer.x >240 && pointer.x < 260 && pointer.y < 50 && pointer.y > 30){
    pointer.shapeColor = "blue";
    stroke("blue");
  }
  if(pointer.x >340 && pointer.x < 360 && pointer.y < 50 && pointer.y > 30){
    background("white");
  }

}
/* function mousePressed(){
   x1 = [mouseX];
   y1 = [mouseY];

   x2 = [mouseX];
   y2 = [mouseY];

   line(x1[0],y1[0],x2[1],y2[1]);

}
function mouseReleased(){
  
  x1 = [];
  y1 = [];
  x2 = [];
  y2 = [];
}  */