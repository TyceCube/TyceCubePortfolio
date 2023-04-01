function setup() {
    // Set Text Characteristics
    createCanvas(800,600);
    textSize(18);

}

function draw(){
    // Set BG to White
    background(255);
    // Set tracking framerate to 12FPS
    frameRate(12);
    // Label function output
    text("X: "+mouseX, 0, height/4); 
    text("Y: "+mouseY, 0, height/2);

    rect(10,20,300,100);

}