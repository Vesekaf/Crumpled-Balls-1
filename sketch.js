const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, paper1;
var floor;
var bin1, bin2, bin3;

var gameState;

function preload()
{
	
}

function setup() {

	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	paper = new Paper( 100, 50, 50);

	floor = new Ground(400, 650, 1200 ,20);

	bin1 = new Trash(650, 630, 200, 20);
	bin2 = new Trash(750, 590, 20, 100);
	bin3 = new Trash(550, 590, 20, 100);

	Engine.run(engine);
  
	gameState = "set"

}


function draw() {

	background(255);
	Engine.update(engine);
	rectMode(CENTER);
	background(0);

	paper.display();
	floor.display();
	bin1.display();
	bin2.display();
	bin3.display();

	drawSprites();
 
}



function keyPressed (){

	if(keyCode === UP_ARROW && gameState === "set"){

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 400, y: -400});

		gameState = "launched"


	}



}
