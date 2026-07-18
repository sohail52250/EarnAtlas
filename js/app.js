const search = document.querySelector('.search-box');

if(search){

search.addEventListener('keyup', function(){

let value = search.value.toLowerCase();

document.querySelectorAll('.opportunity-card')
.forEach(card=>{

card.style.display =
card.innerText.toLowerCase()
.includes(value)
? 'block'
: 'none';

});

});

}
