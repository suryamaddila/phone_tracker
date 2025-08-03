// Real tracking functionality
document.addEventListener('DOMContentLoaded', function() {
    // Use a more reliable selector for the Track button
    // For example, if the button has id="trackBtn", use:
    // const trackButton = document.getElementById('trackBtn');
    // Otherwise, select by text content:
    const buttons = document.querySelectorAll('button');
    let trackButton = null;
    buttons.forEach(btn => {
        if (btn.textContent.trim() === 'Track') {
            trackButton = btn;
        }
    });
    // Add your tracking logic here, e.g.:
    if (trackButton) {
        trackButton.addEventListener('click', function() {
            // Tracking logic goes here
            alert('Tracking started!');
        });
    }
});