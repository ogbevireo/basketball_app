// create functions to add1, add2, add3 for the Home team
// update the html (DOM)

let curScrHomeEl = document.getElementById("curScrHome");
let curScrGuestEl = document.getElementById("curScrGuest");
let curScrHome = 0;
let curScrGuest = 0;
let countdown = 60 * 60; // 1 hour in seconds
const countdownEl = document.getElementById("countdown");


function hadd1() {
    curScrHome += 1;
    curScrHomeEl.textContent = curScrHome;
}

function hadd2() {
    curScrHome += 2;
    curScrHomeEl.textContent = curScrHome;
}

function hadd3() {
    curScrHome += 3;
    curScrHomeEl.textContent = curScrHome;
}



// create functions to add1, add2, add3 for the Guest team
// update the html (DOM)

function gadd1() {
    curScrGuest += 1;
    curScrGuestEl.textContent = curScrGuest;
}

function gadd2() {
    curScrGuest += 2;
    curScrGuestEl.textContent = curScrGuest;
}

function gadd3() {
    curScrGuest += 3;
    curScrGuestEl.textContent = curScrGuest;
}


// Set countdown timer
// reset function

document.getElementById("reset").onclick = function () {
    curScrHome = 0;
    curScrGuest = 0;
    countdown = 60 * 60;

    curScrHomeEl.textContent = curScrHome;
    curScrGuestEl.textContent = curScrGuest;

    clearInterval(intervalId);
    document.getElementById("countdown").innerHTML = "60:00";
    startTimer();
};

function startTimer() {
    intervalId = setInterval(function () {
        countdown--;
        var minutes = Math.floor(countdown / 60);
        var seconds = countdown % 60;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (countdown > 0) {
            document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
        } else {
            document.getElementById("countdown").innerHTML = "It's time up!";
            clearInterval(intervalId);
        }
    }, 1000);
}

startTimer();