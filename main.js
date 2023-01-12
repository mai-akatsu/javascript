const time = document.getElementById("timer");

const start = document.getElementById("start_button");

const stop = document.getElementById("stop_button");

const reset = document.getElementById("reset_button");


let h = 0;
let m = 0;
let s = 0;
let ms = 0;

function stopWatch () {
  ms++;
  if(ms % 10 == 0){
    s++;
    ms = 0;
  }
  if(ms % 10 ==0 && s % 60 ==0){
    m++;
    s = 0;
  }
  if(ms % 10 ==0 && s % 60 ==0 && m % 60 ==0){
    h++;
    m = 0;
  }
  if(m % 60 ==0 && h == 60){
    h = 0;
  }
    time.innerHTML = `${h}:${m}:${s}:${ms}`;
  }

let interval;

start.addEventListener('click',() =>{
  interval = setInterval(stopWatch, 100);
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
})

stop.addEventListener('click',() =>{
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
})
reset.addEventListener('click',() =>{
  time.innerHTML = "0:0:0:0";
  h = 0;
  m = 0;
  s = 0;
  ms = 0;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
})