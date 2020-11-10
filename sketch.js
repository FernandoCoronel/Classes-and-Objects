const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(2400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(680,320, 70, 70);
    box2 = new Box(900, 320, 70, 70);
    box3 = new Box(680, 240, 70, 70);
    box4 = new Box(900, 240, 70, 70);
    box5 = new Box(790, 160, 70, 70);
    bird = new Bird(200,200, 60, 60);
    Pig1 = new Pig(790, 350, 50, 50);
    Pig2 = new Pig(790, 220, 50, 50);
    log1 = new Log(790, 260, 20, 300, PI/2);
    log2 = new Log(790, 180, 20, 300, PI/2);
    log3 = new Log(850, 120, 20, 150, -PI/7);
    log4 = new Log(740, 120, 20, 150, PI/7);
    ground = new Ground(1200, 380, 2400, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   bird.display();
   Pig1.display();
   Pig2.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   ground.display();
}