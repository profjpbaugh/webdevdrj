function updateCount() {
  const text = document.getElementById('messageBox').value;
  document.getElementById('charCount').textContent = text.length;
}

document.getElementById('messageBox').addEventListener('input', updateCount);
