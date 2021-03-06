
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var world;
var roofObject;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofObject= new Roof(width/2, height/4, width/7, 20)
bobdiameter = 40;
startBobPositionX=width/2; 
startBobPositionY= height/4+500; 

bobObject1=new bob(startBobPositionX-bobdiameter*2, startBobPositionY,bobdiameter);

bobObject2=new bob(startBobPositionX-bobdiameter, startBobPositionY,bobdiameter);

bobObject3=new bob(startBobPositionX, startBobPositionY,bobdiameter);

bobObject4=new bob(startBobPositionX+bobdiameter, startBobPositionY,bobdiameter);

bobObject5=new bob(startBobPositionX+bobdiameter*2, startBobPositionY,bobdiameter);

rope1=new Rope(bobObject1.body, roofObject.body,-bobdiameter*2, 0)

rope2=new Rope(bobObject2.body, roofObject.body,-bobdiameter*1, 0)

rope3=new Rope(bobObject3.body, roofObject.body,0, 0)

rope4=new Rope(bobObject4.body, roofObject.body,bobdiameter*1, 0)

rope5=new Rope(bobObject5.body, roofObject.body,bobdiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(230);

  roofObject.display();
  rope1.display();
  rope2.display();
 rope3.display();
 rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
 
}



