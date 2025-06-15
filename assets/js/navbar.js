// Presents the navbar
function loadNavbar() {
  fetch('/assets/html/navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading the navbar:', error);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadNavbar);
