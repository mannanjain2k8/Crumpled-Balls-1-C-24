
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var Dustbin1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     Dustbin1 = new Dustbin(520,520,20,160);
     Dustbin2 = new Dustbin(610,610,160,20)
     Dustbin3 = new Dustbin(700,520,20,160)
     Ball1 = new Ball(50,620,20);
     Ground1 = new Ground(10,630,1600,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  Ball1.display();
  Ground1.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x: 45 , y: -40 })
  }

}



