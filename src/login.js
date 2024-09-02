  document.querySelector('#email').addEventListener('submit', function(event) {
    const emailInput = document.querySelector('#email').value;
    const errorMessage = document.getElementById('error-message');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
      event.preventDefault();
      errorMessage.textContent = 'Please enter a valid email address.';
    } else {
      errorMessage.textContent = '';
    }
  });
