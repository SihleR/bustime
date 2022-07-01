function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

    
        if (--timer < 0) {
            timer = duration;
            alert("Bus has arrived. Hurry Up!");
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 15,
        display = document.querySelector('#Time');
    startTimer(fiveMinutes, display);
};





