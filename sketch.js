var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(500, 300, 80, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(500, 100, 50, 80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect.velocityY = -3;
  movingRect.velocityY = 3;
}

function draw() {
  background(255,5,255); 
 // movingRect.x=mouseX;
 // movingRect.y=mouseY; 
 //if the recttangles are colliding in horizontal direction
  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2){
      
      fixedRect.velocityX = -(fixedRect.velocityX);
      movingRect.velocityX = -(movingRect.velocityX);
  }
  if( fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y -fixedRect.y <fixedRect.height/2+movingRect.height/2){    
      fixedRect.velocityY = -(fixedRect.velocityY);
      movingRect.velocityY = -(movingRect.velocityY);
  }
 
  drawSprites();
}