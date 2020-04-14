// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as                  c
const Engine = Matter.Engine

*/

function setup() {
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    var ground = new Ground(0,height,400,20); 
    var tank = new Tanker(35,30,10,30);
    tank = loadImage()
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    background(255,255,255);
    ground.display();
    tank.display();
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    if(keyDown("space")){
 var shoot = new ShootBall(tank.x,pointB);
    }
    // Call the shoot method for the cannon.
}