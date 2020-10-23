var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(900, 700);
	rectMode(CENTER);
	
	
	
	packageSprite=createSprite(width/2, 300, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.9;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5,{ isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1= new Box(450,645,200,30);
	 box2= new Box(350,600,20,120);
	 box3= new Box(550,600,20,120);

	 Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

 
  
  box1.display();
  box2.display();
  box3.display();
  
  keyPressed();
  
  drawSprites();

 
}

function keyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic( packageBody , false);	
	
		
		}
}



