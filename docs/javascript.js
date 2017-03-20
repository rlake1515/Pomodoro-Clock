// starting conditions
let workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
document.getElementById('mainTime').innerHTML = workTime;
let breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());


function decrement(){
   if(workTime > 0){
   workTime -= 1;
   document.getElementById('mainTime').innerHTML = workTime;
   }else {
       document.getElementById('mainTime').innerHTML = "time's up, take a break!";
       stop();
       workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());

   }
};
function decrementBreak(){
   if(breakTime > 0){
   breakTime -= 1;
   document.getElementById('mainTime').innerHTML = breakTime;
   }else {
       document.getElementById('mainTime').innerHTML = "time's up, back to work!";
       stop();
       breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());

   }
};
var foobs ='';
var startWork = function(){
    foobs = setInterval(decrement, 1000);
    };
var startBreak = function(){
    foobs = setInterval(decrementBreak, 1000);
};
function stop(){
    clearInterval(foobs);
}
function reset(){
    clearInterval(foobs);
    workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
    document.getElementById('mainTime').innerHTML = workTime;
}
function workPlus(){
   workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
   workTime += 1;
   document.getElementById('workTime').innerHTML = workTime;
}
function workMinus(){
   workTime = parseFloat(document.getElementById('workTime').innerHTML.valueOf());
   workTime -= 1;
   document.getElementById('workTime').innerHTML = workTime;
}
function breakPlus(){
   breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());
   breakTime += 1;
   document.getElementById('breakTime').innerHTML = breakTime;
}
function breakMinus(){
   breakTime = parseFloat(document.getElementById('breakTime').innerHTML.valueOf());
   breakTime -= 1;
   document.getElementById('breakTime').innerHTML = breakTime;
}