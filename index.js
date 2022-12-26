var hours=0,minutes=0,seconds=0;
var started=0;
if(!started){
    document.querySelector("#start").addEventListener("click",currentState);
}
// start();
function currentState{
    if(started === true){
        
    }
    else{

    }
}
function start(){
    started = 1;
    document.querySelector("#start").removeEventListener("click",start);
    document.querySelector("#start").textContent=("Pause");
    document.querySelector("#start").addEventListener("click",paused);
    if(started === 0){

    }
    else{
    started = 1;
    seconds++;
    console.log(seconds);
    if(seconds > 59){
        minutes++;
        seconds=0;
        if(minutes > 59){
            hours++;
            minutes=0;
            if(hours<10){
                document.querySelector(".hours").textContent=('0'+hours);
            }
            else{
                document.querySelector(".hours").textContent=(hours);
            }
        }
        if(minutes<10){
            document.querySelector(".minutes").textContent=('0'+minutes);
        }
        else{
            document.querySelector(".minutes").textContent=(minutes);
        }
    }
    if(seconds<10){
        document.querySelector(".seconds").textContent=('0'+seconds);
    }
    else{
        document.querySelector(".seconds").textContent=(seconds);
    }
    // setTimeout(start,1000);
    }
    // setTimeout(() => {
    //     start();
    // }, 1000);
}
function paused(){
    // document.querySelector("#start").removeEventListener("click",paused);
    started=0;
    document.querySelector("#start").textContent=("Start");
    document.querySelector("#start").addEventListener("click",start);
}