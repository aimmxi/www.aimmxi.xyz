// All the captions are defined
// Bio
const bioCaption1 = "Creator and hobbyist";
const bioCaption2 = "Computer Science / Technology";
const bioCaption3 = "Northern Spain";
const bioCaption4 = "'For the straightforward path had been lost.'";

// About
const specsCaption = "Deus ex machina...";
const blogCaption = "I think, therefore I am";

// Projects
const compCaption = "My kingdom for a computer";
const miscCaption = "Anything goes, really";

// Galleries
const modelsCaption = "I saw the angel in the polygons";
const photoCaption = "If only it would last forever";


// Upon calling typeText, the text is typed on elementId at speed after a certain timeout
function typeText(elementId, text, speed, timeout) {
	setTimeout(function(){
		let index = 0;
		const element = document.getElementById(elementId);

		if (element != null) {
			// Function to add one character at a time
			function typeCharacter() {
				// While there is text left to be typed
				if (index < text.length) {
					element.innerHTML += text.charAt(index); // Add one character to the line
					index++;
					setTimeout(typeCharacter, speed); // Call the function again after speed ms
				}
			}

			typeCharacter(); // Start typing
		}
	}, timeout);

}

// About
typeText('bioCaption1', bioCaption1, 100, 0);
typeText('bioCaption2', bioCaption2, 75, 0);
typeText('bioCaption3', bioCaption3, 125, 0);
typeText('bioCaption4', bioCaption4, 30, 0);
typeText('specsCaption', specsCaption, 65, 750);
typeText('blogCaption', blogCaption, 55, 750);

// Projects
typeText('compCaption', compCaption, 55, 750);
typeText('miscCaption', miscCaption, 45, 750);

// Galleries
typeText('modelsCaption', modelsCaption, 40, 750);
typeText('photoCaption', photoCaption, 35, 750);