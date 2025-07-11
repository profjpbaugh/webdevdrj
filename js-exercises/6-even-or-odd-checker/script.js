function checkEvenOdd() {
  const num = parseInt(document.getElementById('numberInput').value);
  const result = document.getElementById('result');

  if (isNaN(num)) {
    result.textContent = "Please enter a valid number.";
  } else {
    result.textContent = (num % 2 === 0) ? `${num} is even.` : `${num} is odd.`;
  }
}

document.getElementById('checkButton').addEventListener('click', checkEvenOdd);
