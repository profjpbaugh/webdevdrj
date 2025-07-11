// Function that runs when the button is clicked
function greetUser() {
  const nameInput = document.getElementById('nameInput');
  const output = document.getElementById('greetingOutput');
  const name = nameInput.value.trim();

  if (name === '') {
    output.textContent = "Please enter your name!";
  } else {
    output.textContent = `Hello, ${name}! Welcome to the site.`; 
  }
}

// Attach event listener to the button
document.getElementById('greetButton').addEventListener('click', greetUser);

