var canvas, backgroundIMG;
var voterCount = 0;
var database;
var form, voter, survey;

function setup(){
  //createCanvas(400,400);

  database = firebase.database();
  console.log(database);

  survey = new Survey();
  survey.start();

}

function draw(){
  background("white");
  
    drawSprites();
  
}
