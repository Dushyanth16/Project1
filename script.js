// Define a variable for the "Buy NFT" button
const buyNftBtn = document.querySelector('.buy-nft-btn');

// Add a click event listener to the "Buy NFT" button
buyNftBtn.addEventListener('click', function() {
  // Display an alert when the button is clicked
  alert('Thank you for buying this NFT!');
});

// Define a variable for the "Subscribe" button
const subscribeBtn = document.querySelector('.subscribe-btn');

// Add a click event listener to the "Subscribe" button
subscribeBtn.addEventListener('click', function() {
  // Prompt the user to enter their email address when the button is clicked
  const email = prompt('Please enter your email address to subscribe:');
  if (email) {
    // Display a confirmation message if the user enters an email address
    alert('Thank you for subscribing to our newsletter!');
  }
});

// Define a variable for the "Contact Us" form
const contactForm = document.querySelector('#contact-form');

// Add a submit event listener to the "Contact Us" form
contactForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Send the form data to the server using AJAX
  fetch('/send-contact-form', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    // Display a success message if the form submission is successful
    alert('Thank you for contacting us! We will get back to you soon.');
  })
  .catch(function(error) {
    // Display an error message if there is an error submitting the form
    alert('There was an error submitting the form. Please try again later.');
  });
});
// Define a variable for the button that triggers the redirect
const redirectBtn = document.querySelector('.redirect-btn');

// Add a click event listener to the button
redirectBtn.addEventListener('click', function() {
  // Redirect the user to the specified URL when the button is clicked
  window.location.href = 'index1.html';
});
