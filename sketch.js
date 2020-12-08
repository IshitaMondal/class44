
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var bg,trackImage,trainEngineImage;
var bogie1,bogie2,bogie3,bogie4;
var ground;
var trainEngine;

var ss1,ss2,ss3,ss4;

function preload()
{
	bg=loadImage("images/bg.jpg");
	trackImage=loadImage("images/track.png");
	trainEngineImage=loadImage("images/trainEngine.png");
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bogie1=new Bogie(600,580);
	bogie2=new Bogie(800,580);
	bogie3=new Bogie(1000,580);
	bogie4=new Bogie(1200,580);

	ground=Bodies.rectangle(750,595,1500,10,{isStatic: true});
	ground.render.visible=false;
	World.add(world,ground);

	trainEngine=Bodies.rectangle(400,590,150,175);
	//trainEngine.addImage(trainEngineImage);
	World.add(world,trainEngine);
	console.log(bogie1);
	console.log(trainEngine);
	ss1=new SlingShot(bogie1.body,bogie2.body);
	ss2=new SlingShot(bogie2.body,bogie3.body);
	ss3=new SlingShot(bogie3.body,bogie4.body);
	ss4=new SlingShot(trainEngine.body,bogie1.body);
	
	console.log(ground.render.visible);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  image(trackImage,-225,515,2000,100);

  bogie1.display();
  bogie2.display();
  bogie3.display();
  bogie4.display();

  rect(ground.position.x,ground.position.y,1500,10);
  image(trainEngineImage,trainEngine.position.x,trainEngine.position.y+35,150,175);
  
  ss1.display();
  ss2.display();
  ss3.display();
  ss4.display();
}



