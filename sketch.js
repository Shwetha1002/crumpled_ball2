//var rod2, rod3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 rod1 = new Dustbin(500,660,10,170)
//var rod2 = createSprite(680,660,10,170)
//var rod3 = createSprite(590,700,170,20)
	Paper1 = new Paper(100, 600, 30);
	ground = new Ground(600,height,1200,20)

	
  
}





function draw() {
	Engine.run(engine);
	background(0);


  rectMode(CENTER);

  Paper1.display();
  ground.display();
rod1.display();
//rod2.display();
//rod3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	
		Matter.Body.applyForce(Paper1.body, Paper1.body.position, {x:80, y:-80});
		console.log("hi")
	}
}	

