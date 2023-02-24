canvas=document.getElementById("canvas");
contexto=canvas.getContext("2d");

rover_ancho=100;
rover_alto=90;

mars_images=["craters.jpg","mars.jpg","marte1.jpg","nasaimage3.jpg"];

random_number=Math.floor(Math.random()*4);
console.log(random_number);

fondo_canvas=mars_images[random_number];
console.log("imagen de fondo: "+fondo_canvas);

rover="rover.png";

roverX=10;
roverY=10;

var audio=document.getElementById("audio");

function add(){
    fondo_imagen= new Image();
    fondo_imagen.onload=uploadBackground();
    fondo_imagen.src=fondo_canvas;
    
    rover_imagen=new Image();
    rover_imagen.onload=uploadRover();
    rover_imagen.src=rover;
}

function uploadBackground(){
    contexto.drawImage(fondo_imagen,0,0,canvas.width,canvas.height);
    audio.play();
}

function uploadRover(){
    contexto.drawImage(rover_imagen,roverX,roverY,rover_ancho,rover_alto);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}

function up(){
    if(roverY>=0){
        roverY=roverY-10;
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(roverY<=500){
        roverY=roverY+10;
        uploadBackground();
        uploadRover();
    }

}

function left(){
    if(roverX>=0){
        roverX=roverX-10;
        uploadBackground();
        uploadRover();
    }

}
function right(){
    if(roverX<=700){
        uploadBackground();
        uploadRover();
    }
}