document.getElementById('contactForm').addEventListener('submit', (event)=> {
  event.preventDefault(); // prevent real submission
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  //truthy and falsey values
  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    status.style.color = 'red';
  } else {
    status.textContent = "Form submitted successfully!";
    status.style.color = 'green';
  }
});
