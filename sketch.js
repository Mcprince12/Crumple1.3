
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper();
	
	
	dustbin2 = new Dustbin(550, 600, 150, 1);
	

	ground1 = new Ground(400, 690, 800, 20);
	
	ground2 = new Ground(450, 600, 20, 150);
	ground3 = new Ground(580, 600, 20, 150);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();

 
  dustbin2.display();
  

  ground1.display();
  ground2.display();
  ground3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:400, y:-400})
	}
}



