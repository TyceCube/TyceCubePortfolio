let glitch;
let img;
let robotomono;
let canvas;
let points;
let bounds;
let layer;

let lines = ['pixels and light', 'blood and machine', 'the digital blight', 'living unseen'];
let pointLines = []
function shuffleLines(){
    let currentIndex = lines.length;
    let randomIndex;

    while(currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        let tmp = lines[randomIndex];
        lines[randomIndex] = lines[currentIndex];
        lines[currentIndex] = tmp;
    }
    
}

function preload(){
    img = loadImage('assets/nosignal.jpg');
    robotomono = loadFont('assets/robotomono.ttf')

}
   
    
function setup() {
    canvas = createCanvas(1600,800);
    // layer = createGraphics(width, height, WEBGL);
    imageMode(CONTAIN);
    
    glitch = new Glitch();

    glitch.loadType('jpg');

    glitch.loadImage(img);
    image(img, 0,0, 1280,720);
    

    points = robotomono.textToPoints(lines[0], width/2, height/2, 60, {
        sampleFactor: 5,
        simplifyThreshold: 0
    });
    bounds = robotomono.textBounds(lines[0], width/2, height/2, 60);

    canvas.mousePressed(() => {
        shuffleLines();
    })

    stroke(0);

    fill(255, 104, 204);

}




function draw() {

    // layer.sphere(500);
    glitch.resetBytes(); // fresh bytes
    glitch.limitBytes(0.005,0.5) // limit bytes
    glitch.randomByte(25) // single random
    glitch.randomBytes(5) // 5 random
    glitch.randomBytes(5, 12) // 5 random pos, exact val
    glitch.replaceByte(23, frameCount%255); // single replace
    glitch.replaceBytes(123, '7c'); // all replace
    // glitch.replaceHex('ffdb00430101', 'ffdb00430155');
    glitch.swapBytes(23, 51); // swap values
    glitch.buildImage();
    image(glitch.image, mouseX, 0);

    
    quantumPoetry();
   
} 

function quantumPoetry(){
    // background('black');
    push();
    beginShape();
    translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
    for (let i = 0; i < points.length; i++) {
        const p = points[i];
        vertex(
            p.x * width / bounds.w + sin(17.5 *p.y / bounds.h + millis() / 1000) * width /40,
             p.y * height / bounds.h
             );
        
        }
        
        
    endShape(CLOSE);
    pop();

     fill('white');
    textSize(60);
    textFont(robotomono);
    strokeWeight(3);
    textAlign(CENTER,CENTER);

//     // text(lines[0], width/2, height/2);

//     // text(lines[1], width/2, height/2 + 40);

//     // text(lines[2], width/2, height/2 +40*2);

//     // text(lines[3], width/2, height/2 +40*3);

    for (let i = 0; i < lines.length; i++) {
        const element = lines[i];
        text(lines[i], width/2, height/2 + 60 * i - (3*60/2));   
    }
}

// function mousePressed(){

    
// }
//pixels and light
//blood and machine
//the digital blight
//living unseen

