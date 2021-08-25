function setup(){
canvas=createCanvas(250,250);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
//circle(100,100,100);
fill("red");
image(video,0,0,250,250);
}
