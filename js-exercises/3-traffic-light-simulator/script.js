function changeLight(color) {
  const light = document.getElementById('light');
  light.className = 'light'; // Reset class
  light.classList.add(color);
}

document.getElementById('redBtn').addEventListener('click', () => changeLight('red'));
document.getElementById('yellowBtn').addEventListener('click', () => changeLight('yellow'));
document.getElementById('greenBtn').addEventListener('click', () => changeLight('green'));
