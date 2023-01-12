x = 0;
y = 0;

draw_apple = "";
speak_data = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
    to_number = Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
   if(Number.isInteger(to_number)){
    draw_apple = "set";
    console.log(draw_apple);
   }
   
}

function setup() {
 sx = window.innerWidth;
 sy = window.innerHeight;
 canvas = createCanvas(sx,sy -50);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple, x, y, 50, 50);
    }

    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number + "applesdrawn";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function preload()
{
  apple = loadImage("apple.png")
}