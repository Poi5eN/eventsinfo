// Get all expand buttons
const expandButtons = document.querySelectorAll('.expand-button');

// Add click event listener to each expand button
expandButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get parent event element
    const event = button.parentElement.parentElement;
    // Toggle "expanded" class on event element
    event.classList.toggle('expanded');
    // Get event body and event details elements
    const eventBody = event.querySelector('.event-body');
    const eventDetails = event.querySelector('.event-details');
    // Toggle visibility of event body and event details
    if (event.classList.contains('expanded')) {
      eventBody.style.maxHeight = '1000px';
      eventDetails.style.display = 'block';
    } else {
      eventBody.style.maxHeight = '0';
      eventDetails.style.display = 'none';
    }
  });
});
