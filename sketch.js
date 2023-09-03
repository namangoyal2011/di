const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



//Declare an array for arrows playerArrows = [ ]


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
   aanvi1=new aanvi(700,350,windowWidth-1080, windowWidth-750);
  console.log(windowWidth)
  
}

function draw() {
  background(180);

  Engine.update(engine);
  
  aanvi1.display();

}
