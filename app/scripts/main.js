(function() {
	'use strict';
	NodeList.prototype.forEach = Array.prototype.forEach;
	var resetButton = document.querySelector('#reset-button');
	var startStopButtons = document.querySelectorAll('.start-stop-button');
	var minutes = 4;
	var seconds = 0;

	window.timeoutHandles = {
		playerOne: null,
		playerTwo: null
	}

	startStopButtons.forEach(function(button, index, array) {
		button.addEventListener('click', function(event) {
			var target = event.currentTarget;
			if (timeoutHandles[target.parentElement.id]) {
				window.clearInterval(timeoutHandles[target.parentElement.id]);
			}
			ClockCommonMethods.initClock(array[index === 0 ? 1 : 0].parentElement.id, minutes, seconds);
			target.disabled = true;
		});
	});

	resetButton.addEventListener('click', function(event) {
		for (var prop in timeoutHandles) {
			window.clearInterval(timeoutHandles[prop]);
		}
		ClockCommonMethods.reset();
	});
} ());