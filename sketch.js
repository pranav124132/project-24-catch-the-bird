const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var Background;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
Background = loadImage("sprites/bg.png")
    
    ground = new Ground(600,height,1200,20)

    log1 = new Log(810,260,300, PI/2);

  



    log4 = new Log(680,120,150, PI/50);
    
    log5 = new Log(950,120,150, PI/59);

    bird = new Bird(100,100);

}

function draw(){
    background(Background);
    Engine.update(engine);
   

  
    ground.display();

    log1.display();


  

  
    log4.display();
    log5.display();

    bird.display();
}