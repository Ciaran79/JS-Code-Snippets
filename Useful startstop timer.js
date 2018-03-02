
function startStopCountdown(arg) {
    var button = document.getElementById('timer-button');
    var time = 240;
    var timer = document.getElementById('timer-display');

    var ticker = setInterval(function () {
        time = time - 1;
        timer.innerHTML = time;
        if (timer.innerHTML == 0) {
            clearInterval(x);
            button.removeAttribute('onclick', "startStopCountdown('stop')");
            button.setAttribute('onclick', "startStopCountdown('start')");
            button.removeAttribute('class', 'stop-button');
            button.setAttribute('class', 'timer-button');
        }
    }, 1000);

    if (arg == 'start') {
        button.removeAttribute('onclick', "startStopCountdown('start')");
        button.setAttribute('onclick', "startStopCountdown('stop')");
        button.setAttribute('class', 'stop-button ');
        timer.innerHTML = time;

    } else {
        for (i = 0; i < 100; i++) {
            window.clearInterval(i);
        }
        timer.innerHTML = 0;
        button.removeAttribute('onclick', "startStopCountdown('stop')");
        button.setAttribute('onclick', "startStopCountdown('start')");
        button.removeAttribute('class', 'stop-button');
        button.setAttribute('class', 'timer-button');
    }
}