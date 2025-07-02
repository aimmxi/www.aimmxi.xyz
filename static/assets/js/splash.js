// The elements are fetched
const splashc = document.getElementById('splash-c');
const splashbutton = document.getElementById('splash-button');
const body = document.getElementById('body');

// The URL is parsed to check for the existance of the noanim flag
const urlParams = new URLSearchParams(window.location.search);


// If the URL does not contain noanim, the splash screen is displayed
if (!urlParams.has('noanim')) {
	// Upon clicking the enter box
	splashbutton.addEventListener('click', function() {
		// The splash-c is faded
		splashc.classList.add('fade');

		// After 900ms, to avoid scrolling all splashes are hidden an the overflow-y is set to behave as default
		setTimeout(() => {
			splashc.style.display = 'none';
			body.style.overflowY = 'visible';
		}, 900);
	});
} else {
	// If the flag is present, all the splashes are hidden and the overflow is configured as default
	splashc.style.display = 'none';
	body.style.overflowY = 'visible';
}



