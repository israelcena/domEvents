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
const li = document.createElement('li');
li.classList.add('list-group-item')
li.classList.add('list-group-item-primary')

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
  console.log(event.target)
  li.innerHTML = '<input class="form-check-input me-1" type="checkbox" value="" id="SecondCheckbox"> '
  li.innerHTML += '<label class="form-check-label" for="SecondCheckbox">First checkbox</label>' 
  ul.append(li);
  popup.classList.add('d-none')
})

