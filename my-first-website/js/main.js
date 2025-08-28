// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() { 
  // Get reference to the button
  const button = document.getElementById('myButton');

  // Add Click event listener to the button 
  button.addEventListener('click', function() {
    // Show an alert when button is clicked
    alert('Thanks for clicking! You\'re doing great!');

    // Change the button's text
    this.textContent = 'Clicked!';

    // Change the button's background color
    this.style.backgroundColor = '#F578DE';

    //Add a new favorite website to the list
    addNewFavoriteSite();
  });
  
