async function loadOpportunities(){

const container=document.querySelector('.opportunities');

if(!container) return;


const response=await fetch('../../data/opportunities.json');

const data=await response.json();


container.innerHTML='';


data.forEach(item=>{

container.innerHTML += 

<div class="opportunity-card">

<span class="tag">

</span>

<h2>

</h2>

<p>

</p>

<p>

</p>

<button class="save-btn">
Save
</button>

</div>

;

});


}


loadOpportunities();


document.addEventListener('click',function(e){

if(e.target.classList.contains('save-btn')){

e.target.classList.toggle('saved');

e.target.innerText =
e.target.classList.contains('saved')
? 'Saved'
: 'Save';

}

});


