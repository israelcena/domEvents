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