let timer;
let time = 0;
let go = false;

function updateTimer() {
    let minutes = Math.floor(time / 60).toString().padStart(2, '0');
    let seconds = (time % 60).toString().padStart(2, '0');
    document.getElementById("timer").innerText = minutes + ":" + seconds;
}

function startTimer() {
    if (!go) {
        go = true;
        timer = setInterval(() => {
            time++;
            updateTimer();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    go = false;
}

function resetTimer() {
    clearInterval(timer);
    go = false;
    time = 0;
    updateTimer();
}

document.getElementById("start").onclick = startTimer;
document.getElementById("pause").onclick = pauseTimer;
document.getElementById("reset").onclick = resetTimer;

updateTimer();