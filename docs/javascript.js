// starting conditions
let workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
let minutes = workTime;
let seconds = '';
document.getElementById('mainTime').innerHTML = minutes;
let breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());
let breakMinutes = breakTime;
let breakSeconds = '';
let chime = document.getElementById('chime');


function decrement(){
   if(minutes >= 0 & seconds > 0){
   seconds -= 1;
   document.getElementById('mainTime').innerHTML = minutes + ':' + seconds;
   }else if(minutes > 0 & seconds == 0){
       minutes -= 1;
       seconds = 59;
       document.getElementById('mainTime').innerHTML = minutes + ':' + seconds;       
   }
   else if(minutes == 0 & seconds == 0) {
       document.getElementById('mainTime').innerHTML = "Break Time!";
       stop();
       workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
       minutes = workTime;
       seconds = 0;
       resetCountdown();
       endCountdown();
       playChime();

   }
};
function decrementBreak(){
   if(breakMinutes >= 0 & breakSeconds > 0){
       breakSeconds -= 1;
       document.getElementById('mainTime').innerHTML = breakMinutes + ':' + breakSeconds;
   }else if (breakMinutes > 0 & breakSeconds == 0){
       breakMinutes -= 1;
       breakSeconds = 59;
       document.getElementById('mainTime').innerHTML = breakMinutes + ':' + breakSeconds;       
   }
   else if(breakMinutes == 0 & breakSeconds == 0){
       document.getElementById('mainTime').innerHTML = "Work Time!";
       stop();
       breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());
       breakMinutes = breakTime;
       seconds = 0;
       resetCountdown();
       endCountdown();
       playChime();
   }
};
var foobs ='';
var startWork = function(){
    foobs = setInterval(decrement, 1000);
    };
var startBreak = function(){
    document.getElementById('mainTime').innerHTML = breakTime;
    foobs = setInterval(decrementBreak, 1000);
};
function stop(){
    clearInterval(foobs);
}
function reset(){
    clearInterval(foobs);
    workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
    document.getElementById('mainTime').innerHTML = workTime;
    minutes = workTime;
    seconds = 0;
}
function workPlus(){
   workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
   workTime += 1;
   document.getElementById('workTime').innerHTML = workTime;
   document.getElementById('mainTime').innerHTML = workTime;
   minutes = workTime;
   seconds = '';
   resetCountdown();
}
function workMinus(){
   workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
   workTime -= 1;
   document.getElementById('workTime').innerHTML = workTime;
   document.getElementById('mainTime').innerHTML = workTime;
   minutes = workTime;
   seconds = '';
   resetCountdown();

}
function breakPlus(){
   breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());
   breakTime += 1;
   document.getElementById('breakTime').innerHTML = breakTime;
   breakMinutes = breakTime;
   breakSeconds = '';
   resetCountdown();
}
function breakMinus(){
   breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());
   breakTime -= 1;
   document.getElementById('breakTime').innerHTML = breakTime;
   breakMinutes = breakTime;
   breakSeconds = '';
   resetCountdown();
}

// circular countdown timer
var currentEndAngle = 0;
var currentStartAngle = 0;
var currentColor = 'black';
var lineRadius = 100;
var lineWidth = 25;
function beginCountdown(){
 counting = setInterval(draw, 40);
}

function endCountdown() {
    clearInterval(counting);
}
function resetCountdown(){
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
    drawEmptyCircle();
    currentStartAngle = 0;
    currentEndAngle = 0;
    clearInterval(counting);
}
    var canvas = document.getElementById("canvas1");
    var ctx = canvas.getContext("2d");
function rad(deg){
  return Math.PI*deg/180;
}
function draw() { 

    var can = document.getElementById('canvas1'); 
    var canvas = document.getElementById("canvas1");
    var context = canvas.getContext("2d");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius;
    var width;

    startAngle = currentStartAngle * Math.PI;
    endAngle = (currentEndAngle) * Math.PI;
    
    currentStartAngle = currentEndAngle - 0.01;
    currentEndAngle = currentEndAngle + 0.01;
    
    if (Math.floor(currentStartAngle / 2) % 2) {
      currentColor = "white";
      radius = lineRadius;
      width = lineWidth;
    } else {
      currentColor = "black";
      radius = lineRadius;
      width = lineWidth;
    }
            
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = width;
    context.lineCap = "butt";
    // line color
    context.strokeStyle = currentColor;
    context.stroke();

    /************************************************/
}

function drawEmptyCircle(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineCap='round';
  ctx.arc(canvas.height/2, canvas.width/2, canvas.width/2-15, rad(270), rad(270), true);
  //ctx.strokeStyle=colors.blue;
  ctx.lineWidth=4;
  ctx.stroke();
}

function playChime(){
    chime.play();
}

