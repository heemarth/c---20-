var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 80, 50);
  fixedRect.shapeColor="red";
  movingRect=createSprite(200,200,50,80);
  movingRect.shapeColor="red";
object1 = createSprite(10,50,40,40);
object1.velocityX = 5;

object2 = createSprite(390,50,40,40);
object2.velocityX = -5;

}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
fixedRect.shapeColor="green";
movingRect.shapeColor="green";
  }
  else {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

if(object1.x - object2.x < object1.width/2 + object2.width/2 && 
  object2.x - object1.x < object1.width/2 + object2.width/2  ){
object1.velocityX = object1.velocityX * (-1);
object2.velocityX = object2.velocityX * (-1);

object1.shapeColor = "yellow";
object2.shapeColor = "yellow";
}
if  (
  object1.y - object2.y < object1.height/2 + object2.height/2 && 
 
  object2.y - object1.y < object1.height/2 + object2.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  

  object1.shapeColor = "green";
object2.shapeColor = "green";
  
}

  drawSprites();
}