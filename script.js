const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const cleartask = document.getElementById('clear-task');
const filter = document.getElementById('filter-button')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (text !== '') {
    addTodo(text);
    input.value = '';
}
});

cleartask.addEventListener('click', () => {
    list.innerHTML = '';
})

filter.addEventListener('click', () => {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const textA = a.querySelector('span')?.textContent?.toLowerCase() || '';
    const textB = b.querySelector('span')?.textContent?.toLowerCase() || '';
    return textA.localeCompare(textB);
  });

  list.innerHTML = '';
  items.forEach(item => list.appendChild(item));
});


function addTodo(text) {
  const li = document.createElement('li');

  const now = new Date();
  const tanggal = now.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const spanText = document.createElement('span');
  spanText.textContent = `${text} (${tanggal})`;

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✕';
  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(spanText);
  li.appendChild(removeBtn);
  list.appendChild(li);
}