
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops = 100;

var umbrellaObject;
var drops = [];
var thunderImage, thunder;

function preload(){
    thunderImage = loadAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png", "images/thunderbolt/3.png", "images/thunderbolt/4.png");
}

function setup(){
    createCanvas(1000, 1000);
    engine = Engine.create();
    world = engine.world;
    umbrellaObject = new umbrella(500, 650, 20);
}

function draw(){
    background ("black"); 
    umbrellaObject.display();
    if (frameCount > 10){
        animation(thunderImage, 500, 0);
    } else {
    }
    for (var i=0; i < maxDrops; i++){
        drops.push(new drop(random(0,1000), random(0,1000), 10));
    }   
    for (var k = 0; k < drops.length; k++){
        drops[k].display();
    }
    if (drops.length >= 100){
        drops = [];
    }
}   

