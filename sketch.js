
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Ground = new ground(650,495,1300,20);
	d1 = new dustbin(1100,475,150,90);
	d2= new dustbin(1020,435,100,0);
	d3= new dustbin(1180,435,100,0);
	ball = new boll(200,480,10);
	Engine.run(engine);
	
}


function draw() {	
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Ground.display();
  d1.display();
  d2.display();
  d3.display();
  ball.display();
  if(keyDown("SPACE")){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:15 , y:-15});
  }
  drawSprites();
}



