var bg;
var iss;
var spacecraft;
var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");
  iss = loadImage("iss.png");
  spacecraft = loadImage("spacecraft1.png");
  spacecraftLeft = loadImage("spacecraft3.png");
  spacecraftRight = loadImage("spacecraft4.png");
  spacecraftDown = loadImage("spacecraft2.png");
}

function setup() {
  createCanvas(1252,820);
  iss_sprite = createSprite(700,190,10,10);
  iss_sprite.addImage(iss);
  spacecraft_sprite = createSprite(Math.round(random(400,1000)),600,10,10);
  spacecraft_sprite.addImage(spacecraft);
  spacecraft_sprite.scale = 0.5;
}

function draw() {
  background(255,255,255);
  background(bg);
  
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spacecraft_sprite.x = spacecraft_sprite.x - 1;
      spacecraft_sprite.addImage(spacecraftLeft);
    }
    else if(keyDown(RIGHT_ARROW)){
      spacecraft_sprite.x = spacecraft_sprite.x + 1;
      spacecraft_sprite.addImage(spacecraftRight);
    }
    else if(keyDown(DOWN_ARROW)){
      spacecraft_sprite.addImage(spacecraftDown);
    }
    else if(keyDown(UP_ARROW)){
      spacecraft_sprite.y = spacecraft_sprite.y - 1;
    }
    else{
      spacecraft_sprite.addImage(spacecraft);
    }
  }

  if(spacecraft_sprite.x - iss_sprite.x < spacecraft_sprite.width/2 + iss_sprite.width/2 && iss_sprite.x - spacecraft_sprite.x < spacecraft_sprite.width/2 + iss_sprite.width/2 && spacecraft_sprite.y - iss_sprite.y < spacecraft_sprite.height/2 + iss_sprite.height/2 && iss_sprite.y - spacecraft_sprite.y < iss_sprite.height/2 + spacecraft_sprite.height/2){
    hasDocked = true;
    fill("white");
    text("Docking Successful",626,700);
  }

  drawSprites();
}