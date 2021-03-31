const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var options = {
        isStatic :true
    }
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
  
   ground = Bodies.rectangle(400,390,800,20,options)
   World.add(world,ground)

   rubber = new Rubber(200,350,30)
   iron = new Iron(400,350,80,70)
   hammer = new Hammer(700,350,70,60)
   stone = new Stone(600,350,50,50)
   
}


function draw(){
    background("Lightblue");
    Engine.update(engine);

   rectMode(CENTER)
   fill("brown")
    rect(ground.position.x,ground.position.y,800,20)

    rubber.display();
    iron.display();
    hammer.display();
    stone.display();
}