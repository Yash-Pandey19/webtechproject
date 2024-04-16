document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (validateForm()) {
            // Submit the form
            console.log('Form submitted successfully');
            form.reset(); // Reset the form after submission
            window.alert('Your message has been posted successfully'); // Display alert message
        } else {
            console.log('Form validation failed');
        }
    });

    function validateForm() {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            showSuccess(nameInput);
        }

        // Validate email
        if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Invalid email');
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        // Validate subject
        if (subjectInput.value.trim() === '') {
            showError(subjectInput, 'Subject is required');
            isValid = false;
        } else {
            showSuccess(subjectInput);
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            isValid = false;
        } else {
            showSuccess(messageInput);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'error';
        const errorMessage = formControl.querySelector('small');
        errorMessage.innerText = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'success';
    }

    function isValidEmail(email) {
        // Regular expression for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
