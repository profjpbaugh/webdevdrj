document.getElementById('quizForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const result = document.querySelector('#quizResult');
  const answer = document.querySelector('input[name="capital"]:checked');

  if (!answer) {
    result.textContent = "Please select an answer.";
    result.style.color = 'orange';
    return;
  }

  if (answer.value === "Paris") {
    result.textContent = "Correct!";
    result.style.color = 'green';
  } else {
    result.textContent = "Incorrect. Try again.";
    result.style.color = 'red';
  }
});
