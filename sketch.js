function preload(){
  img =         loadImage('KittyKittyCat.jpg');  
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  image(img,0,0,200,200); 
  background(220);
}
