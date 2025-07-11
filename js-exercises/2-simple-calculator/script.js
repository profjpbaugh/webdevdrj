function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultElement = document.getElementById('calcResult');

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  }

  let result;
  if (operation === 'add') {
    result = num1 + num2;
  } else {
    result = num1 - num2;
  }

  resultElement.textContent = `Result: ${result}`;
}

document.getElementById('addBtn').addEventListener('click', () => calculate('add'));
document.getElementById('subtractBtn').addEventListener('click', () => calculate('subtract'));
