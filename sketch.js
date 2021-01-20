const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform1,platform2,ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,polygon_img;
var engine, world;
var luncher

function preload(){
   polygon_img = loadImage ("polygon.png");

}
function setup(){
    var canvas = createCanvas(1270,510);
    engine = Engine.create();
    world = engine.world;

  ground = new Ground(600,500,1400,20);
  platform1 = new Ground(550,320,360,15);
  platform2 = new Ground(1000,200,275,15);


  
  //platform1
  // 4th layer
  block1 = new Block(550,285) ;
  block2 = new Block(590,285) ;
  block3 = new Block(630,285) ;
  block4 = new Block(670,285) ;
  block5 = new Block(510,285) ;
  block6 = new Block(470,285) ;
  block7 = new Block(430,285) ;

  // 3rd layer
  block8 = new Block(550,231) ;
  block9 = new Block(590,231) ;
  block10 = new Block(630,231) ;
  block11 = new Block(510,231) ;
  block12 = new Block(470,231) ;

  // 2nd layer
  block13 = new Block(550,177) ;
  block14 = new Block(590,177) ;
  block15 = new Block(510,177) ;
  
  //1st layer 
  block16 = new Block(550,123) ;
  

  //platform2
  //3rd layer.
  block17 = new Block(1000,167);
  block18 = new Block(1040,167);
  block19 = new Block(1080,167);
  block20 = new Block(960,167);
  block21 = new Block(920,167);

  //2nd layer.
  block22 = new Block(1000,112);
  block23 = new Block(1040,112);
  block24 = new Block(960,112);

  //1st layer. 
  block25 = new Block(1000,60);

  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}   
 polygon = Bodies.circle(50, 200, 20,options) ;
   World. add (world, polygon) ;


   luncher = new Luncher(this. polygon, {x: 100, y:200}) ;
}

function draw(){
    background(60, 46, 46);
    Engine.update(engine);

    
 


    ground.display();
    platform1.display();
    platform2.display();

    fill(103, 209, 234)
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill(255, 190, 196)
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(0, 228, 208)
    block13.display();
    block14.display();
    block15.display();

    fill(128, 125, 120)
    block16.display();

    fill(103, 209, 234)
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill(0, 228, 208)
    block22.display();
    block23.display();
    block24.display();

    fill(255, 190, 196)
    block25.display();
   
    stroke(64, 205, 176);
   luncher. display( ) ;
    imageMode ( CENTER)
     image(polygon_img,polygon.position.x,polygon.position.y, 60, 60)


}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX,y:mouseY});
}


function mouseReleased(){
  luncher.fly();
}