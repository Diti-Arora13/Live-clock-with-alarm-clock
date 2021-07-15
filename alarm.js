timeAlarm = document.querySelector(".time-alarm");
inputTime = document.querySelector(".time-input")
setBtn = document.querySelector(".set-btn");
invalidTime = document.querySelector(".invalid-time");

class Counter{
    constructor(n){
        this.n = parseInt(n);
    }

    next(){
        if(this.n <= 0){
            return 0;
        }
        else{
            this.n = this.n - 1
            return this.n;
        }
    }
}

let countdown = new Counter(0);

setBtn.addEventListener('click', () => {
    time = inputTime.value;
    countdown = new Counter(time);
})


setInterval(function(){
    timeAlarm.innerHTML = countdown.next();
}, 1000);