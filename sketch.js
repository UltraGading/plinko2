const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies;
 
var particle
var particles = [];
var plinkos = [];
var divisions = []
var divisionHeight=300;
var score = 0;
var turn = 0;
var gameState = 'play'

function setup() {
createCanvas(800, 800);
engine = Engine.create();
world = engine.world;
ground = new Ground(width/2,height,width,20);
for (var k = 0; k <=width; k = k + 80) {
divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 75; j <=width; j=j+50) {
plinkos.push(new Plinko(j,75));
}
for (var j = 50; j <=width-10; j=j+50) {
plinkos.push(new Plinko(j,175));
}
for (var j = 75; j <=width; j=j+50) {
plinkos.push(new Plinko(j,275));
}
for (var j = 50; j <=width-10; j=j+50) {
plinkos.push(new Plinko(j,375));
}
}
 
function draw() {
background("black");
textSize(20)
fill('white')
text("Score: "+score,20,30);
text('300',20,520)
text('200',100,520)
text('400',180,520)
text('100',260,520)
text('100',340,520)
text('100',420,520)
text('100',500,520)
text('300',580,520)
text('200',660,520)
text('200',740,520)
Engine.update(engine);
for (var i = 0; i < plinkos.length; i++) {
plinkos[i].display();
}
for (var k = 0; k < divisions.length; k++) {
divisions[k].display();
}
if(particle !== null){
particle.display()
if(particle.body.position.y > 490){
if(particle.body.position.x > 240 && particle.body.position.x < 480){
score = score + 100;
particle = null;
if(count >= 5){
gameState = 'end'
}
}
else if((particle.body.position.x < 160 && particle.body.position.x > 80) || (particle.body.position.x > 640 && particle.body.position.x <800)){
score = score + 200;
particle = null;
if(count >= 5){
gameState = 'end'
}
}
else if((particle.body.position.x > 0 && particle.body.position.x < 80) || (particle.body.position.x > 560 && particle.body.position.x < 640)){
score = score + 300
particle = null;
if(count >= 5){
gameState = 'end'
}  
}
else if(particle.body.position.x > 160 && particle.body.position.x < 240){
score = score + 400;
particle = null;
if(count >= 5){
gameState = 'end'
}
}
}
}
}

function mousePressed(){
if(gameState !== 'end'){
particle = new Particle(mouseX, 10, 10, 10)
turn++;
}
}