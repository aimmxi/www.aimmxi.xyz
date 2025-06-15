const fonts = [
	'Mussels',
	'Roboto',
	'Bytesized',
	'Gidole',
	'VGA',
	'DDIN'
	];

let currentIndex = 0;

const text = document.getElementById('font-flick');

function fontFlick() {
	text.style.fontFamily = fonts[currentIndex];

	// Update the index to cycle through the font list
	currentIndex = (currentIndex + 1) % fonts.length;
}

// Change the font on an interval
setInterval(fontFlick, 200);
fontFlick();
