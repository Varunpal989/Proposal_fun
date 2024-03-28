function navigateToPage(pageURL) {
    window.location.href = pageURL;
}
// Get the 'NO' button
// Get the 'NO' button
// Get the 'NO' button
const noButton = document.getElementById('noButton');

// Function to move the 'NO' button to a random position within the viewport
function moveNoButton() {
    // Calculate random positions within the viewport bounds
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    // Set new positions
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
}

// Add event listener for click event
noButton.addEventListener('click', moveNoButton);
