let lessons =
JSON.parse(localStorage.getItem("earnatlas_lessons"))
|| [];


function addLesson(){

let title =
document.getElementById("title").value;


let description =
document.getElementById("description").value;


lessons.push(
{
title:title,
description:description
}
);


localStorage.setItem(
"earnatlas_lessons",
JSON.stringify(lessons)
);


alert("Lesson Added");

location.reload();

}



function showLessons(){

let box=document.getElementById("lessonList");


if(box){

box.innerHTML="";


lessons.forEach(function(item){

box.innerHTML +=
"<div class='card'>"+
"<h3>"+item.title+"</h3>"+
"<p>"+item.description+"</p>"+
"</div>";

});

}

}


window.onload=showLessons;


