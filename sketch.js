var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var block1,block2,block3,pblock1,pblock2,pblock3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	block2=createSprite(width/2, height-50, 200,20);
	block2.shapeColor=color("red");

	block1=createSprite(width/2-100, height-90, 20,100);
	block1.shapeColor=color("red");

	block3=createSprite(width/2+100, height-90, 20,100);
	block3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {friction:1,restitution:0.05, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 pblock2= Bodies.rectangle(width/2, height-70, 200,20,{friction:1,isStatic:true});
	 World.add (world,pblock2);

	 pblock1= Bodies.rectangle(width/2-100, height-90, 20,100,{isStatic:true});
	 World.add (world,pblock1);

	 pblock3= Bodies.rectangle(width/2+100, height-90, 20,100,{isStatic:true});
	 World.add (world,pblock3);

	


	Engine.run(engine);
    keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
        Matter.Body.setStatic(packageBody,false);
  }
}



