var hours=0,minutes=0,seconds=0;
var started=false;
document.querySelector("#start").addEventListener("click",change);
document.querySelector("#reset").addEventListener("click",function(){
    started = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector(".seconds").textContent=("00");
    document.querySelector(".minutes").textContent=("00");
    document.querySelector(".hours").textContent=("00");
    document.querySelector("#start").textContent=("Start");
});

function change(){
    started = !started;
    if(started === true){
        document.querySelector("#start").textContent=("Pause");
        setTimeout(start,1000);
    }
    else{
        paused();
    }
}
function start(){
    if(started === false){
        return;
    }
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
    if(started === true){
        setTimeout(start,1000);
    }
}
function paused(){
    started=false;
    document.querySelector("#start").textContent=("Resume");
}