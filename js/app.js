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

document.querySelectorAll('.save-btn')
.forEach(button=>{

button.addEventListener('click',()=>{

button.classList.toggle('saved');

if(button.classList.contains('saved')){
button.innerText='Saved';
}
else{
button.innerText='Save';
}

});

});

