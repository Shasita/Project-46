var bg, bg_img;
var spaceShip, spaceShip_img;
var missile1_img, missile2_img, missile3_img;
var alien1_img, alien2_img, alien3_img;

function preload(){
  //background
 bg_img = loadImage("Images/spaceBg.jpeg");

//space ship
 spaceShip_img = loadImage("Images/spaceship.png");

  //missiles
 missile1_img = loadImage("Images/misile1.png");
 missile2_img = loadImage("Images/misile2.png");
 missile3_img = loadImage("Images/misile3.png");

 //aliens
 alien1_img = loadImage("Images/alien1.png");
 alien2_img = loadImage("Images/alien2.png");
 alien3_img = loadImage("Images/alien3.png");
 
}

function setup() {

  createCanvas(displayWidth-30, displayHeight-150);

  bg =  createSprite(width/2, height/2);
  bg.addImage(bg_img);
  bg.velocityY = 3;
  bg.scale = 2;

  spaceShip = createSprite(width/2, 550, 100, 100);
  spaceShip.addImage(spaceShip_img);
  spaceShip.scale = 0.3;
}

function draw() {
  background("peachpuff");  

  if(bg.y >= height){
    bg.y = height/2;
  }

  if(keyDown(LEFT_ARROW)){
    spaceShip.x = spaceShip.x - 5;
  }

  if(keyDown(RIGHT_ARROW)){
    spaceShip.x = spaceShip.x + 5;
  }

  if(keyDown('space')){
    spawnMissiles();
  }

  spawnAliens();
  drawSprites();
}

function spawnMissiles(){
    var missiles = createSprite(spaceShip.x, spaceShip.y - 50, 100, 100);
    missiles.velocityY = -2;

    var rand = Math.round(random(1,3));

    switch(rand){
      case 1 : missiles.addImage(missile1_img);
      break;
      case 2 : missiles.addImage(missile2_img);
      break;
      case 3 : missiles.addImage(missile3_img);
      break;
      default : break;
    }
    missiles.scale = 0.2;
}

function spawnAliens(){

  if(frameCount % 60 === 0){
    var aliens = createSprite(Math.round(random(100, width-100)), 0, 50, 50);
    aliens.velocityY = 2;

    var rand = Math.round(random(1,3));

    switch(rand){
      case 1 : aliens.addImage(alien1_img);
      break;
      case 2 : aliens.addImage(alien2_img);
      break;
      case 3 : aliens.addImage(alien3_img);
      break;
      default : break;
    }

    aliens.scale = 0.2;
  }
}