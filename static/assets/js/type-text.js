const maxDivs = 5;

// Arrays for each property and the div itself are created
const divNames = ["typeText", "typeText2", "typeText3", "typeText4", "typeText5"];
const divs = new Array(maxDivs);
const subtexts = new Array(maxDivs);
const speeds = new Array(maxDivs);
const timeouts = new Array(maxDivs);

// Function to type the text
function typeText(div, subtext, speed, timeout) {
	setTimeout(function(){
		let index = 0;

		console.log(subtext);

		if (div != null) {
			// Function to add one character at a time
			function typeCharacter() {
				// While there is text left to be typed
				if (index < subtext.length) {
					div.innerHTML += subtext.charAt(index); // Add one character to the line
					index++;
					setTimeout(typeCharacter, speed);		// Call the function again after speed ms
				}
			}

			typeCharacter(); // Start typing
		}
	}, timeout);
}

for (let i = 0 ; i < maxDivs; i++) {
	// The div gets fetched
	let div = document.getElementById(divNames[i]);

	// If the div exists, get it's properties and call the typeText function with them
	if (div != null) {
		typeText(
			div,
			div.getAttribute("data-subtext"),
			div.getAttribute("data-speed"),
			div.getAttribute("data-timeout")
		);
	}
}