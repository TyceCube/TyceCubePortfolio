function setup(){
    
    let canvas = createCanvas(1200,900);
    background('#5d7a42');
    angleMode(DEGREES);
    noStroke();
    
    canvas.mousePressed(() => {
        neverMeant.stop();
        neverMeant.play();

    })


    

}  

function withScope(block) {
    push();
    try {
        return block();
    } finally {
        // This is done in a finally block so that errors within `block`
        // skip the call to `pop`
        pop();
    }
}

let neverMeant;
function preload(){
    soundFormats('mp3');
    neverMeant = loadSound('assets/american-football-never-meant');

}


function draw(){
    

    push();
    fill('#3b330e');
    rotate(-25);
    rect(-485,542,500);



    fill('#92a06e');
    rotate(32);
    rect(300,450,2000);

    fill(20,50,20);    
    triangle(280,450,850,35,1300,435);
    
    fill('#92a06e');
    triangle(300,450,850,50,1300,450);
    
    
    fill('#6c461e');
    rotate(-35);
    rect(-330,530,320,50);
    pop();

    push();
    rotate(0);
    fill('#999680');
    quad(740,465, 900,510, 900,830, 740,810);
    pop();

    push();
    rotate(0);
    fill('#ffd989');
    quad(750,480, 890,520, 890,820, 750,800);
    pop();

withScope(() => {
    fill('#999680');
    quad(750,660, 890,690,890,700,750,670);
    
})

withScope(() => {
    fill('#dd9035');
    quad(65,690, 185,630,160,820,40,870);


})
    

withScope(() => {
    fill(255);
    textSize(136);
    textFont('verdana');
    text('americ', 720,300);



})
   
withScope(() => {
    fill(255);
    textSize(42);
    textFont('verdana');
    textWidth();
    text('anfootball', 810,350);

}) 






}
    

    
