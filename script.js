const ul = document.querySelector('#items');

ul.addEventListener('click', (event) => {
  const clickedElement = event.target
  if (clickedElement.tagName === 'INPUT' && clickedElement.checked) {
    clickedElement.nextElementSibling.style.textDecoration = 'line-through'
    return;
  }
  if (clickedElement.tagName === 'INPUT' && !clickedElement.checked) {
    clickedElement.nextElementSibling.style.textDecoration = 'none'
  }

})
// elements
const popup = document.querySelector('#popup');

// buttons
const btn = document.querySelector('button.btn');
const closeBtn = document.querySelector('#close-popup');
const sendBtn = document.querySelector('#send-btn');

// events
closeBtn.addEventListener('click', () => {
  popup.classList.add('d-none')
});

closeBtn.addEventListener('mouseover', (event) => event.target.style.cursor = 'pointer')

btn.addEventListener('click', () => {
  popup.classList.remove('d-none')
});

sendBtn.addEventListener('click', (event) => {
  const inputContent = event.target.previousElementSibling

  const li = document.createElement('li');
  li.classList.add('list-group-item')
  li.classList.add('list-group-item-primary')
  if (inputContent.value && inputContent.value.length > 3) {
    li.innerHTML = `<input class="form-check-input me-1" type="checkbox" id="el${ul.children.length}">`
    li.innerHTML += `<label class="form-check-label" for="el${ul.children.length}">${inputContent.value}</label>`
    ul.append(li);
    inputContent.value = '';
    popup.classList.add('d-none');
  } else {
    alert('Digite um conteúdo com mais de 3 caracteres para prosseguir')
  }

})
