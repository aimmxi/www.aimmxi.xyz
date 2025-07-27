const thumbs = document.querySelectorAll('.thumb-c');
const overlay = document.getElementById('photo-overlay');
const photo = document.getElementById('photo');
const label = document.getElementById('photo-label');

const photoPath = "./img/";

// For each thumbnail, add display trigger for the overlay
thumbs.forEach(thumb => {
	// Listen for clicks on each div
	thumb.addEventListener('click', (event) => {
		const clickedThumb = event.target.closest('.thumb-c');  // Ensure you're getting the div that contains the data attribute

		// Read the filename from the data-filename attribute
		const filename = clickedThumb.getAttribute('data-filename');
		console.log('Clicked image info:', filename);

		// Display the overlay with the selected image
		displayOverlay(filename);
	});
});

// If the parent is clicked, it is hidden away
overlay.addEventListener('click', (event) => {
	overlay.style.display = 'none';
});

function displayOverlay(filename) {
	// The label's text is updated
	label.textContent = filename;

	// The photo's path is updated to display the new image
	photo.src = photoPath + filename;

	// And the overlay is displayed
	overlay.style.display = 'flex';
}





