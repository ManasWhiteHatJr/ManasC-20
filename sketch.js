var fixedRect, movingRect;
var box1, box2, box3, box4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1 = createSprite(100, 100, 50, 50)
  box1.shapeColor = "yellow";
  box2 = createSprite(200, 100, 50, 50);
  box2.shapeColor = "yellow";
  box3 = createSprite(300, 100, 50, 50);
  box3.shapeColor = "yellow";
  box4 = createSprite(400, 100, 50, 50);
  box4.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, box1)) {
movingRect.shapeColor = "red";
box1.shapeColor = "blue";
  }
 else {
 movingRect.shapeColor = "green";
 box1.shapeColor = "green";
 } 
 if(isTouching(movingRect, box4)) {
  movingRect.shapeColor = "purple";
  box4.shapeColor = "purple";
 }
 else{
   movingRect.shapeColor = "green";
   box4.shapeColor = "green"
 }
  drawSprites();
}
