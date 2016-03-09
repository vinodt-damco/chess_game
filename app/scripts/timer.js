(function() {
	'use strict';
	window.ClockCommonMethods = {
		initClock: initClock,
		reset: reset,
	};

	var minutes = 4;
	var seconds = 0;

	// code to return remaining time	
	function getRemainingTime(endTime) {
		var t = endTime - (+new Date);
		var seconds = Math.floor((t / 1000) % 60);
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		var days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	// starts a timer and returns a reference to the interval which has become active	
	function initClock(id, minutes, seconds) {
		var endtime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
		var clock = document.getElementById(id);
		var minutesSpan = clock.querySelector('.minutes');
		var secondsSpan = clock.querySelector('.seconds');

		function updateClock() {
			var t = getRemainingTime(endtime);

			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

			if (t.total <= 0) {
				showWinner(id);
			}
		}

		updateClock();
		timeoutHandles[id] = setInterval(updateClock, 1000);
		return timeoutHandles[id];
	}

	// to show the winner on the screen	
	function showWinner(id) {
		for (var player in timeoutHandles) {
			window.clearInterval(timeoutHandles[player]);
			if (id !== player) {
				reset();
				alert(player + ' is Winner');
			}
		}
	}

	// reset both the clocks and enable the buttons	
	function reset() {
		for (var clock in timeoutHandles) {
			var currentClock = document.getElementById(clock);
			currentClock.querySelector('.minutes').innerHTML = ('0' + minutes).slice(-2);
			currentClock.querySelector('.seconds').innerHTML = ('0' + seconds).slice(-2);
		}
		enableButtons();
	}

	function enableButtons() {
		var startStopButtons = document.querySelectorAll('.start-stop-button');
		startStopButtons.forEach(function(button) {
			button.disabled = false;
		});
	}
} ());