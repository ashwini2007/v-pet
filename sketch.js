const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var foodObj;
var dog,sadDog,happyDog;
var feed
var giveFood;
var database

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,400);
  database = firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  var feed = createButton('FEED THE PET')
  feed.position(700,95);
  feed.mousePressed(feedDog)
  
  var giveFood = createButton('ADD MORE FOOD')
  giveFood.position(800,95);
  giveFood.mousePressed(addFood);

}

function draw() {
  Engine.update(engine)
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);

  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
}


//function to add food in stock
function addFood(){
  foodS++;
  database.ref('/').update({
    foodCount.updateCount(foodCount)
    
  })
}
