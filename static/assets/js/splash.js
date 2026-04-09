// The elements are fetched
const splashContainer = document.getElementById('splash-c');
const splashButton = document.getElementById('splash-button');
const body = document.getElementById('body');

// The URL is parsed to check for the existance of the noanim flag
const urlParams = new URLSearchParams(window.location.search);

// If the URL does not contain noanim
if (!urlParams.has('noanim')) {
	// Initially, the splash is hidden at all times and only after validating the URL is it presented to the user
	splashContainer.classList.remove('fade');

	// Upon clicking the enter box
	splashButton.addEventListener('click', function() {
		// The splash-c is faded
		splashContainer.classList.add('fade');

		// After 900ms, to avoid scrolling all splashes are hidden an the overflow-y is set to behave as default
		setTimeout(() => {
			splashContainer.style.display = 'none';
			body.style.overflowY = 'visible';
		}, 900);
	});
} else {
	// If the flag is present, the splash does not get displayed at all and the overflow is set to normal
	splashContainer.style.display = 'none';
	body.style.overflowY = 'visible';
}



