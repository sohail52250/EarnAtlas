let language =
localStorage.getItem("earnatlas_language") || "en";


function setLanguage(lang){

language=lang;

localStorage.setItem(
"earnatlas_language",
lang
);

location.reload();

}



function translatePage(){


document.querySelectorAll("[data-en]")
.forEach(el=>{


if(language==="ur"){

el.innerText =
el.getAttribute("data-ur");

}

else{

el.innerText =
el.getAttribute("data-en");

}


});


}



window.setLanguage=setLanguage;


window.addEventListener(
"DOMContentLoaded",
translatePage
);

