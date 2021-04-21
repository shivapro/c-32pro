const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
         hour = datetime.slice(11,13);
        
        if(hour>=0600 && hour<=0800){
            bg = "sunrise1.png";
        }
        if(hour>=0800 && hour<=1000){
            bg = "sunrise2.png";
        };
        if(hour>=1000 && hour<=1200){
            bg = "sunrise3.png";
        };
        if(hour>=1200 && hour<=1400){
            bg = "sunrise4.png";
        }
        if(hour>=01600 && hour<=1800){
            bg = "sunrise5.png";
        }
        if(hour>=1800 && hour<=1850){
            bg = "sunrise6.png";
        }
        if(hour>=1850&& hour<=2050){
            bg = "sunset7.png";
        }
        if(hour>=2050 && hour<=2250){
            bg = "sunrise8.png";
        }
        if(hour>=2250 && hour<=0050){
            bg = "sunset9.png";
        };
        if(hour>=0050 && hour<=0250){
            bg = "sunset10.png";
        }
        if(hour>=0250 && hour<=0450){
            bg = "sunset11.png";
        }
        if(hour>=0450 && hour<=0600){
            bg = "sunrise1.png";
        }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
}
