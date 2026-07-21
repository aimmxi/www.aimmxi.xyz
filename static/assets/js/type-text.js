// Function to type the text
function typeText(div, subtext, speed, delay) {
	// Wait for the specified timeout
	setTimeout(function(){
		// The character that is currently being typed
		let index = 0;

		// Add one character at a time
		function typeCharacter() {
			// While there is text left to be typed
			if (index < subtext.length) {
				div.innerHTML += subtext.charAt(index); // Add one character to the line
				index++;
				setTimeout(typeCharacter, speed);		// Call the function again after speed ms
			}
		}

		// Start typing
		typeCharacter();
	}, delay);
}

// Fetch all the elements that have type-text on their name
let texts = document.getElementsByClassName("type-text");

// Iterate over each text and type it
for (let text of texts) {
	typeText(
		text,
		text.getAttribute("data-subtext"),
		text.getAttribute("data-speed"),
		text.getAttribute("data-delay")
	);
}