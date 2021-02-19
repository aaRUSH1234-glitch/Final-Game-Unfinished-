const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constraint;

var myengine,myworld;

//GAME STATES
var  PLAY =1;
var END =0;
var gameState = PLAY;
var lives = 5;
//Declaring all the sprites
var sword,swordImage,knifeswooshSound;
var fruits, fruitsGroup,fruit1,fruit2,fruit3,fruit4;
var fruitImage;
var monster,monsterGroup,alien,enemy2;
var gameOverImage,gameOverSound;

var score;

// loading the images and animations for the game
function preload(){
  
 
  alien = loadAnimation("Images/alien1.png","Images/alien2.png");
  fruit1 = loadImage("Images/fruit1.png");
  fruit2 = loadImage("Images/fruit2.png");
  fruit3 = loadImage("Images/fruit3.png");
  fruit4 = loadImage("Images/fruit4.png");
  backgroundImg = loadImage("Images/dreamPic.jpg")
  swordImage = loadImage("Images/sword.png");
  gameOverImage = loadImage("Images/gameover.png");
  
  gameOverSound = loadSound("gameover.mp3");
  
  knifeswooshSound = loadSound("knifeSwooshSound.mp3");
   
}

function setup() {
  createCanvas(1200, 800);

myengine = Engine.create();
world = myengine.world;

  

  // Creating the sword for cutting the fruits
  ground = new Ground(600,800,1200,20)
  
  //myenemy = new Enemy(400,300);
 
  sword = createSprite (200,200,20,20);
  sword.addImage(swordImage);
  //sword.scale = 0.9;
 
  
  //declaring the gameover sprite
  gameOver =createSprite(300,300);
  gameOver.addImage(gameOverImage);
  //score
  score =0;
  //declaring all the groups 
  fruitGroup = new Group();
  enemyGroup = new Group();
  
  
}

function draw(){

  background(backgroundImg);

 

  textSize(30);
  fill("white");
  text("Score :" + score,120, 50);
text("Lives : "+lives,120,100)
   Engine.update(myengine);
   ground.display();
   
   //myenemy.display();
   if(gameState == PLAY){
sword.y = mouseY;
sword.x = mouseX;
gameOver.visible = false;
  
fruit();
enemyy();
for(var i = 0; i < fruitGroup.length; i++){
      if(fruitGroup.get(i).isTouching(sword)){
          fruitGroup.get(i).destroy();
          knifeswooshSound.play();
          score+=1;
      }
    }
    for(var i = 0; i < enemyGroup.length; i++){
      if(enemyGroup.get(i).isTouching(sword)){
        enemyGroup.get(i).destroy();
          //knifeswooshSound.play();
          if(lives>0)
          lives-=1;
          else{
            lives =0;
            
          }
      }
    }
    if(lives==0){
      gameState = END;
    }
  
  if(gameState == END){
    gameOver.visible = true;
    gameOverSound.play();
  }
    
    }
    
    

   function fruit(){

    if (frameCount % 20 === 0) {
      fruits = createSprite(random(100,1000), 100, 100, 100);
      fruits.velocityY = 6;
      fruits.scale = 0.3
      var rand = Math.round(random(1,4));
      switch(rand){
          case 1: fruits.addImage(fruit1);
          
          break;
          case 2: fruits.addImage(fruit2);
         
          break;
          case 3: fruits.addImage(fruit3);
          
          break;
          case 4: fruits.addImage(fruit4);
          
          break;
          default:
          break;
      }
      fruitGroup.add(fruits);
      
    }
    drawSprites();
   }

   function enemyy(){
   

      if (frameCount % 20 === 0) {
        enemy = createSprite(random(100,1000), 100, 100, 100);
        enemy.velocityY = 6;
        //enemy.scale = 0.3
        enemy.addAnimation("alien",alien)
        enemyGroup.add(enemy);
   }
   
  }
}