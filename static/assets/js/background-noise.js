window.onload = function() {
	const div = document.querySelector('.bg-noise');


	let offsetX = [];
	let offsetY = [];
	let index = 0;

	// 10 random positions get calculated
	for (let i = 0; i < 10; i++) {
		// Random values between -100px and 100px are generated
		offsetX.push(Math.floor(Math.random() * 200) - 100);
		offsetY.push(Math.floor(Math.random() * 200) - 100);
	}

	// Function to shift the background position randomly
	function shiftBackground() {

		// Apply the random background position to shift the background image
		div.style.backgroundPosition = `${offsetX[index]}px ${offsetY[index]}px`;

		// The index gets incremented
		if (index == 9) {
			index = 0;
		} else {
			index++;
		}
	}

	  // Call the shiftBackground function every 50 milliseconds
	  setInterval(shiftBackground, 50);
}
