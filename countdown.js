
	// Set the date and time for the countdown timer
var countDownDate = new Date().getTime() + (5 * 60 * 1000);

// Update the countdown timer every second
var x = setInterval(function() {

	// Get the current date and time
	var now = new Date().getTime();

	// Calculate the time remaining until the countdown date
	var timeRemaining = countDownDate - now;

	// Calculate minutes and seconds remaining
	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

	// Display the countdown timer
	document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";

	// If the countdown is finished, display "Expired"
	if (timeRemaining < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "Expired";
	}
}, 1000);
