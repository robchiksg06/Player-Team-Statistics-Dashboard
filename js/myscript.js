// Get the checkbox element
const toggleSwitch = document.getElementById('darkModeToggle');

// Add an event listener to handle the change event
toggleSwitch.addEventListener('change', () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');
});
