//Selecting every thing

const secondHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const displayHour = document.querySelector(".hour");
const displayMin = document.querySelector(".min");
const displaySec = document.querySelector(".sec");

//Making the time function for setting time
 
function time(){
    const now = new Date();
   
    //Seconds
    const seconds = now.getSeconds();
    const secondsInDegrees = ((seconds / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

    //Minutes
    const  min = now.getMinutes();
    const minInDegrees = ((min / 60) * 360 ) + 90;

    minHand.style.transform = `rotate(${minInDegrees}deg)`;


    // Hours
    const hour = now.getHours();
    const hourInDegrees = ((hour / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${hourInDegrees}deg)`;



    //             DISPLAYING TIME //

    const displayedHour = displayHour.innerHTML = `<h1>${hour} :</h1>`;
    const displayedMin = displayMin.innerHTML =  `<h1>${min} :</h1>`;
    const displayedSec = displaySec.innerHTML = `<h1> ${seconds}</h1>`;

    displayHour.classList.add("display-sec");
    displayMin.classList.add("display-sec");
    displaySec.classList.add("display-sec");
 }
 



setInterval(time, 1000);


// changing of tabs


const clockIcon = document.querySelector(".clock-icon-div");
const alarmIcon = document.querySelector(".alarm-icon-div");

const fullAlarm = document.querySelector(".full-alarm")
const fullClock = document.querySelector(".full-clock")

clockIcon.addEventListener("click", selectOption)
alarmIcon.addEventListener("click", selectOption2)


                  //  FUNCTIONS

function selectOption(e){
    if (clockIcon.getAttribute("class") == "active" || clockIcon.getAttribute("class") != "active") {
        clockIcon.classList.add("active");
        alarmIcon.classList.remove("active");

        // visibility of things

        fullClock.style.visibility = "visible";
        fullAlarm.style.visibility = "hidden";
    }
}

function selectOption2(e){
    if (alarmIcon.getAttribute("class") == "active" || alarmIcon.getAttribute("class") != "active" ) {
        alarmIcon.classList.add("active")
        clockIcon.classList.remove("active")

        fullClock.style.visibility = "hidden";
        fullAlarm.style.visibility = "visible";
    }
}


// Rememberbtn animation

const spanEle = document.querySelector("span")
const remember = document.querySelector(".remember")


    spanEle.addEventListener("click", () => {
        remember.classList.toggle("noteShifting");
        spanEle.classList.toggle("spanShifting")
        console.log("hellp");
    })
