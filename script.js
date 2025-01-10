// Select DOM elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const learnMoreButton = document.querySelector('.btn-primary');

// Toggle the mobile menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Toggle the 'active' class
});

// Close the menu when clicking outside (optional improvement)
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

// Smooth scroll for the "Learn More" button
if (learnMoreButton) {
  learnMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the "About" section
  });
}

// Countdown Timer for Events Section
const eventDate = new Date('2025-03-01T09:00:00'); // Set the event date and time

function updateCountdown() {
  const now = new Date(); // Current date and time
  const timeLeft = eventDate - now; // Calculate the time difference

  if (timeLeft > 0) {
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML content of the countdown
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  } else {
    // Display a message when the countdown ends
    const countdownElement = document.getElementById('countdown-timer');
    if (countdownElement) {
      countdownElement.innerHTML = '<p>The event has started!</p>';
    }
    clearInterval(countdownInterval); // Stop the timer once the event starts
  }
}

// Check if the countdown timer exists in the HTML before running the script
if (document.getElementById('countdown-timer')) {
  const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
  updateCountdown(); // Initial call to display the countdown immediately
}
