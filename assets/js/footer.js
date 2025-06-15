// Present the footer
function loadFooter() {
  fetch('/assets/html/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading the footer:', error);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadFooter);
