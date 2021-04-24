const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,ball,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    ball= new Rubber(600,500,50)
    stone=new Stone(1000,500)
    iron =new Iron(800,500)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
   

    plane.display();
    hammer.display();
    ball.display();
    stone.display();
    iron.display()
}