document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
  
    // NAme
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
      valid = false;
      document.getElementById('nameError').textContent = 'Name is required.';
    } else {
      document.getElementById('nameError').textContent = '';
    }
  
    // EmaiL Valid
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      valid = false;
      document.getElementById('emailError').textContent = 'Enter a valid email address.';
    } else {
      document.getElementById('emailError').textContent = '';
    }
  
    // Message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
      valid = false;
      document.getElementById('messageError').textContent = 'Message is required.';
    } else {
      document.getElementById('messageError').textContent = '';
    }
  
    if (valid) {
      alert('Form submitted successfully!');
      document.getElementById('contactForm').reset();
    }
  });
  