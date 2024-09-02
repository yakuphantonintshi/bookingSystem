 document.getElementById('nameForm').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name').value;
    const errorMessage = document.getElementById('error-message');
    const namePattern = /^[A-Za-z\s]+$/; // Pattern to allow only letters and spaces

    if (!namePattern.test(nameInput)) {
        event.preventDefault();
        errorMessage.textContent = 'Name cannot include numbers.';
    } else {
        errorMessage.textContent = '';
    }
});