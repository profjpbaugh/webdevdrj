const items = [];

function updateList() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = ''; // Clear existing list

  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
  });
}

function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (value !== '') {
    items.push(value);
    updateList();
    input.value = '';
    input.focus();
  }
}

document.getElementById('addButton').addEventListener('click', addItem);
