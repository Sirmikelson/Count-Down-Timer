// Getting formated date from date string
let deadline = new Date(
    "dec 31, 2023 00:00:00"
).getTime();

// Calling defined function at certain interval
let x = setInterval(function () {

    // Getting current date and time in required format
    let now = new Date().getTime();

    // Calculating difference
    let t = deadline - now;

    // Getting values of days,hours,minutes, seconds
    let days = Math.floor(
        t / (1000 * 60 * 60 * 24)
    );
    let hours = Math.floor(
        (t % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
    );
    let minutes = Math.floor(
        (t % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor(
        (t % (1000 * 60)) / 1000
    );

    // Show the output time
    document.getElementById("day")
            .innerHTML = days;
    document.getElementById("hour")
            .innerHTML = hours;
    document.getElementById("minute")
            .innerHTML = minutes;
    document.getElementById("second")
            .innerHTML = seconds;

    // Show overtime output
    if (t < 0) {
    	clearInterval(x);
    	document.getElementById(
    		"demo"
    	).innerHTML = "Time Up & Phone Won.";
    	document.getElementById(
    		"day"
    	).innerHTML = "00";
    	document.getElementById(
    		"hour"
    	).innerHTML = "00";
    	document.getElementById(
    		"minute"
    	).innerHTML = "00";
    	document.getElementById(
    		"second"
     	).innerHTML = "00";
     }
}, 1000);
