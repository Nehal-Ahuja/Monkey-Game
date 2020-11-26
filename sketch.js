
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
     monkey=createSprite(80,315,20,20);
     monkey.addAnimation("running",monkey_running);
     monkey.scale=0.1;

     ground=createSprite(400,350,900,10);
     console.log(ground.x);

     foodGroup=createGroup();
     obstacleGroup=createGroup(); 
}


function draw() {
  background("white");
  
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: "+score,500,50);
  
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate());
    text("Survival Time: "+survivalTime,100,50);
  
    ground.velocityX=-4;
    ground.x=ground.width/2;
  
    if(keyDown("space")&&monkey.y>=300){
       monkey.velocityY=-12;  
    }
   
   monkey.velocityY = monkey.velocityY+0.4;
   monkey.collide(ground);
  
   food();
   obstacles();
  
  obstacleGroup.setLifetimeEach(-1);
  foodGroup.setLifetimeEach(-1);
  
  if(monkey.isTouching(obstacleGroup)){
    monkey.velocityX=0;
    ground.velocityX=0;
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
  }

  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(400,120,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=400;
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,325,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-3;
    obstacle.lifetime=400;
    obstacleGroup.add(obstacle);
  }
}






