var PN;
var startButton;
noStroke();
background(17, 128, 33);
var PN = 0;
var buttonshade = fill(0, 33, 99);
var startButton =  function(buttonText, x, y, width, height, red, green, blue, textred, textgreen, textblue, textSize){
if (mouseIsPressed&&mouseX>=x&&mouseX<=x+width&&mouseY>=y&&mouseY<=y+height)
{
 if (mouseX>=x&&mouseX<x+width&&mouseY>=y&&mouseY<=y+height){
buttonshade = true;    
}   
 red = red+90;
 blue = blue+30;
 green = green+9;
 textSize = 90;
 textred = 0;
 textblue = 0;
 textgreen = 90;
if (buttonText==="Back"){
PN = 0;
} 

if (buttonText==="ThunderClan"){
PN = 1;
}

if (buttonText==="RiverClan"){
PN = 2;
} 
if (buttonText==="ShadowClan"){
PN = 3;
}
if (buttonText==="WindClan"){
PN = 4;
}
if (buttonText==="Kit"){
PN = 5;    
}
if (buttonText==="Apprentice"){
PN = 6;
}
if (buttonText==="No"){
PN = 7;
}
if (buttonText==="Yes"){
PN = 8;
}
if (buttonText==="Eat"){
PN = 9;
}
if (buttonText==="Hunt"){
PN = 10;
}
if (buttonText==="Track"){
PN = 11;    
}
if (buttonText==="Pounce"){
PN = 12;    
}
if (buttonText==="Go Back to Camp"){
PN = 13;   
}
if (buttonText==="Play"){
PN = 14;
}
if (buttonText==="Mossball"){
PN = 15;
}
if (buttonText==="Mouse Catch"){
PN = 16;
}
if (buttonText==="Little Fights"){
PN = 17;
}
}
else{
}
fill(220, 100, 20);
rect(x, y, width, height);
fill(textred,textblue, textgreen);
textAlign(CENTER, CENTER);
var font = createFont("serif", 333);
textFont(font, 30);
text(buttonText, x+width/2, y+height/2);
};

var draw = function() {
if (PN===0) {
background(17, 128, 33);     
startButton("WindClan", 200, 250, 200, 150, 10, 100, 250, 50, 17, 128, 33, 90);
startButton("ShadowClan", 0, 250, 200, 150, 150, 10, 25, 0, 10, 0, 90);
startButton("RiverClan", 200, 0, 200, 150, 10, 255, 40, 0, 255, 100, 90);
startButton("ThunderClan", 0, 0, 200, 150, 10, 10, 10, 0, 100, 190, 90);  
textSize(90);
text("Warriors", 200, 200);
}    
else
{
 
}
    
    
if (PN===1) {
background(186, 135, 15); 
text("Hello!\nChoose your rank to continue!", 200, 90);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
startButton("Kit", 30, 150, 50, 30, 30, 90, 0, 10, 100, 190);
startButton("Apprentice", 30, 200, 140, 40, 30, 0, 0, 10, 100, 190);
startButton("Warrior", 30, 260, 100, 30, 30, 90, 0, 10, 100, 190);
startButton("Queen", 280, 150, 90, 30, 30, 90, 0, 10, 100, 190);
startButton("Deputy", 270, 200, 100, 35, 30, 30, 0, 10, 100, 190);
startButton("Leader", 270, 260, 100, 35, 30, 30, 0, 10, 100, 190);
}
if (PN===2) {
background(102, 152, 201); 
fill(22, 55, 201);
text("Hi! \nWhich rank will you be in?", 200, 90);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
startButton("Kit", 30, 150, 50, 30, 30, 90, 0, 10, 100, 190);
startButton("Apprentice", 30, 200, 140, 40, 30, 0, 0, 10, 100, 190);
startButton("Warrior", 30, 260, 100, 30, 30, 90, 0, 10, 100, 190);
startButton("Queen", 280, 150, 90, 30, 30, 90, 0, 10, 100, 190);
startButton("Deputy", 270, 200, 100, 35, 30, 90, 0, 10, 100, 190);
startButton("Leader", 270, 260, 100, 35, 30, 30, 0, 10, 100, 190);   
}
if (PN===3){
background(75, 30, 0); 
fill(255, 255, 255);
text("Greetings. \nWhich rank will you have?", 200, 90);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
startButton("Kit", 30, 150, 50, 30, 30, 90, 0, 10, 100, 190);
startButton("Apprentice", 30, 200, 140, 40, 30, 0, 0, 10, 100, 190);
startButton("Warrior", 30, 260, 100, 30, 30, 90, 0, 10, 100, 190);
startButton("Queen", 280, 150, 90, 30, 30, 90, 0, 10, 100, 190);
startButton("Deputy", 270, 200, 100, 35, 30, 90, 0, 10, 100, 190);
startButton("Leader", 270, 260, 100, 35, 30, 30, 0, 10, 100, 190);    
}
if (PN===4){
background(209, 222, 211); 
fill(0, 0, 0);
text("Welcome. \nRank?", 200, 90);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
startButton("Kit", 30, 150, 50, 30, 30, 90, 0, 10, 100, 190);
startButton("Apprentice", 30, 200, 140, 40, 30, 0, 0, 10, 100, 190);
startButton("Warrior", 30, 260, 100, 30, 30, 90, 0, 10, 100, 190);
startButton("Queen", 280, 150, 90, 30, 30, 90, 0, 10, 100, 190);
startButton("Deputy", 270, 200, 100, 35, 30, 90, 0, 10, 100, 190);
startButton("Leader", 270, 260, 100, 35, 30, 30, 0, 10, 100, 190);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===5){
background(20, 100, 150);
fill(59, 28, 6);
ellipse(200, 150, 530, 450);
fill(20, 100, 150);
ellipse(200, 270, 410, 300);
fill(100, 190, 90);
text("This is the nursery!", 200, 55);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
startButton("Play", 0, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===6){
background(0, 150, 0);
fill(100, 150, 250);
text("Have you behaved well?", 200, 30);
startButton("No", 75, 100, 80, 50, 10, 10, 10, 150, 0, 0, 90);
startButton("Yes", 225, 100, 80, 50, 10, 10, 10, 0, 10, 200, 90);
fill(100, 150, 250);
ellipse(110, 210, 100, 30);
ellipse(290, 210, 100, 30);
fill(0, 0, 0);
ellipse(110, 210, 10, 30);
ellipse(290, 210, 10, 30);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===7){
background(50, 20, 0);
fill(255, 255, 255);
text("Go search the elders for ticks. \nBe good tomorrow.", 200, 40);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===8){
background(35, 150, 20);
fill(255, 255, 255);
text("Good work! \nYou may pick a piece of food \nfrom the freshkill pile!", 200, 90);
fill(240, 150, 200);
ellipse(120, 290, 100, 90);
ellipse(250, 280, 30, 10);
fill(35, 150, 20);
ellipse(130, 300, 95, 85);
fill(240, 150, 200);
ellipse(180, 283, 30, 10);
fill(150, 120, 80);
ellipse(200, 250, 150, 70);
ellipse(220, 210, 50, 50);
fill(0, 0, 0);
ellipse(240, 245, 10, 10);
fill(240, 150, 200);
ellipse(270, 250, 10, 10);
ellipse(220, 205, 30, 30);
startButton("Eat", 150, 330, 70, 30, 30, 90, 0, 10, 100, 190);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===9){
background(20, 100, 20);
fill(255, 255, 255);
text("You pad out of camp after \nyour mentor. Your mentor \nlets you pick between \nhunting and training. ", 200, 70);
startButton("Hunt", 170, 200, 70, 30, 30, 90, 0, 10, 100, 190);
startButton("Train", 170, 300, 70, 30, 30, 90, 0, 10, 100, 190);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===10){
background(200, 150, 50);
fill(255, 255, 255);
text("Your mentor has fallen \nbehind to watch you. \nYou hear a rustling noise \nand draw in the scent. \nIt is a shrew.", 200, 90);
startButton("Track", 150, 200, 90, 30, 10, 100, 250, 50, 17, 128, 33, 90);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===11){
background(220, 130, 20);
startButton("Pounce", 150, 30, 100, 50, 10, 10, 10, 0, 100, 190, 90);
fill(30, 115, 10);
ellipse(50, 350, 170, 200);
fill(55, 230, 30);
triangle(150, 200, 190, 200, 50, 50);
triangle(150, 200, 190, 200, 150, 90);
triangle(230, 200, 150, 200, 230, 90);
triangle(250, 200, 210, 200, 350, 90);
fill(255, 0, 0);
}
if (PN===12){
background(90, 40, 20);
fill(140, 100, 90);
ellipse(210, 250, 250, 100);
triangle(200, 300, 50, 250, 200, 200);
fill(30, 100, 160);
textSize(55);
text("Congratulations!", 200, 90);
startButton("Go Back to Camp", 100, 320, 220, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===13){
background(190, 200, 180);
text("We're back here!", 100, 100, 200, 200);
}
if (PN===14){
background(235, 195, 195);
startButton("Mossball", 100, 80, 220, 50, 10, 10, 10, 0, 100, 190, 90);
startButton("Mouse Catch", 100, 170, 220, 50, 10, 10, 10, 0, 100, 190, 90);
startButton("Little Fights", 100, 260, 220, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===15){
background(255, 190, 0);
textSize(50);
fill(255, 0, 0);
text("!", 200, 30);
text("Catch it.", 200, 70);
fill(125, 95, 50);
rect(0, 200, 400, 200);
fill(105, 150, 109);
ellipse(200, 150, 90, 90);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===16){
background(235, 230, 225);
fill(240, 150, 200);
ellipse(120, 290, 100, 90);
ellipse(250, 280, 30, 10);
fill(235, 230, 225);
ellipse(130, 300, 95, 85);
fill(240, 150, 200);
ellipse(180, 283, 30, 10);
fill(150, 120, 80);
ellipse(200, 250, 150, 70);
ellipse(220, 210, 50, 50);
fill(0, 0, 0);
ellipse(240, 245, 10, 10);
fill(240, 150, 200);
ellipse(270, 250, 10, 10);
ellipse(220, 205, 30, 30);
startButton("Back", 320, 350, 80, 50, 10, 10, 10, 0, 100, 190, 90);
}
if (PN===17){
background(200, 130, 10);
fill(255, 0, 0);
textSize(90);
text("Jump", 90, 100, 110, 130); 
}
};