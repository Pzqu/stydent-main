/* document.body
document.body.style.background = 'red'
'red' */

//----------------------------------

let bob = document.querySelector('.bob')

bob.innerHTML = `
<ul>
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
</ul>
`
console.log(bob);

let parag = document.querySelector('#parag')
console.log(parag);

parag.style.fontSize = '44px'
parag.style.color = 'red'

//------------------------------------

let hover = document.querySelector('.hover')
let text = document.querySelector('.text')

hover.addEventListener('mouseover', () => {
  /* console.log('наведение на элемент произошло'); */
  text.style.display = 'block'
})

hover.addEventListener('mouseout', () => {
  text.style.display = 'none'
})

//----------------------------------------------------

let item = document.querySelector('.item')
let i = 0
document.addEventListener('keydown', (e) => {
  console.log(e);
  if(e.key == 'ArrowRight') {
    i = i + 5
    item.style.left = i + 'px'
  }
  else if(e.key == 'ArrowLeft') {
    i = i - 5
    item.style.left = i + 'px'
  }

})