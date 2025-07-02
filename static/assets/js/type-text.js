// All the captions are defined
// TODO Clear this after everything is moved
// Bio
// const bioCaption1 = "Creator and hobbyist";
// const bioCaption2 = "Computer Science / Technology";
// const bioCaption3 = "Northern Spain";
// const bioCaption4 = "'For the straightforward path had been lost.'";

// // About
// const specsCaption = "Deus ex machina...";
// const blogCaption = "I think, therefore I am";

// // Projects
// const compCaption = "My kingdom for a computer";
// const miscCaption = "Anything goes, really";

// // Galleries
// const modelsCaption = "I saw the angel in the polygons";
// const photoCaption = "If only it would last forever";

// The div is fetched
const div = document.getElementById('typeText');

// The data attribs are read
const subtext = div.getAttribute('data-subtext');
const speed = div.getAttribute('data-speed');
const timeout = div.getAttribute('data-timeout');

// Function to type the text
function typeText() {
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

// The function is called
typeText();

// About
// typeText('bioCaption1', bioCaption1, 100, 0);
// typeText('bioCaption2', bioCaption2, 75, 0);
// typeText('bioCaption3', bioCaption3, 125, 0);
// typeText('bioCaption4', bioCaption4, 30, 0);
// typeText('specsCaption', specsCaption, 65, 750);
// typeText('blogCaption', blogCaption, 55, 750);

// // Projects
// typeText('compCaption', compCaption, 55, 750);
// typeText('miscCaption', miscCaption, 45, 750);

// // Galleries
// typeText('modelsCaption', modelsCaption, 40, 750);
// typeText('photoCaption', photoCaption, 35, 750);