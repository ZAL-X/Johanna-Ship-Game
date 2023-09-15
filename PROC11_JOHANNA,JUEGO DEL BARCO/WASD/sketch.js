var sea;
var seaImg;
var ship;
var shipAni;

function preload(){
seaImg=loadImage("sea.png");
shipAni=loadAnimation("ship-1.png",
"ship-2.png","ship-3.png","ship-4.png",)
}

function setup(){
createCanvas(800,400);
//EL BARCO :)
ship=createSprite(100,250);
ship.addAnimation("barco flotando",shipAni);
ship.scale=0.15
ship.depth=2

//EL MAR :D

sea=createSprite(500,200);


sea.addImage("el mar", seaImg);
sea.scale=0.5
sea.depth=1


}

function draw() {
background("blue");

sea.velocityX= sea.velocityX = -0.8;
if (sea.x <-200) {
  sea.x=sea.width/4;
}

 drawSprites();

}