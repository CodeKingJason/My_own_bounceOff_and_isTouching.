var ob2fixedRect, movingRect;

var fixedRect2, fixedRect3;

var thing1, thing2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect2 = createSprite(123, 432, 80, 30);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;

  fixedRect3 = createSprite(332,324,80,30);
  fixedRect3.shapeColor = "green";
  fixedRect3.debug = true;

  thing1 = createSprite(800,1,80,30);
  thing1.shapeColor = "green";
  thing1.debug = true;
  thing1.velocityY = 2;

  thing2 = createSprite(800,800,80,30);
  thing2.shapeColor = "green";
  thing2.debug = true;
  thing2.velocityY = -2;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  bounceoff(thing1, thing2);

  if(istouching (movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if (istouching (movingRect,fixedRect2)){
    movingRect.shapeColor = "red";
    fixedRect2.shapeColor = "red";
    
    fixedRect3.velocityX = -5;
    fixedRect3.velocityY = 6;
  }

  
  
  drawSprites();
}