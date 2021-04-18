var monkey , monkey_running,ground ;
var banana ,bananaImage, obstacleImage,obstacle;
var bananaGroup, obstaclesGroup, invisibleGround;
var score =0 ;
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
   createCanvas(400, 400);
 
  monkey = createSprite (65,325,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.12;  
  
  ground = createSprite(400,360,900,8);
  console.log(ground.width);
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
}
function draw() {
 background(220);
  drawSprites(); 
  
  stroke("black");
  textSize(18);
  fill("black");
  text("Score : " + score,250,50);
  
  stroke("black");
  textSize(15);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time : " + survivalTime, 50,50);
  
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY = -12;
  }
  
  if(monkey.isTouching(bananaGroup)){
     banana.destroy();
    score = score + 1;
  }
  
  monkey.setCollider("circle",10,0,300);
  
 monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
 
if(monkey.isTouching(obstaclesGroup)){
  obstaclesGroup.destroyEach();
  bananaGroup.destroyEach();
  survivalTime = 0;
  score =0;
  }
   
  food();
  rockSprite();
  
}

function food(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(400,15);
    banana.y = Math.round(random(200,250));
    banana.addImage(bananaImage);
    banana.velocityX = -12;
    banana.lifetime = 400;
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
    
}

function rockSprite(){
  
    if(frameCount % 150 === 0){
      obstacle = createSprite(360,13);
      obstacle.velocityX = -10;
      obstacle.y = Math.round(random(330,331));
      obstacle.lifetime = 400;
      obstacle.scale = 0.14;
      obstacle.addImage(obstacleImage);
      obstaclesGroup.add(obstacle);
    }
  
}


