function updateColor() {
  const color = document.getElementById('colorSelect').value;
  const box = document.getElementById('colorBox');

  box.style.backgroundColor = color || 'transparent';
}

document.getElementById('colorSelect').addEventListener('change', updateColor);
