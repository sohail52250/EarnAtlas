let progress = JSON.parse(localStorage.getItem("earnatlas_progress")) || {};

function completeLesson(id){

progress[id] = "completed";

localStorage.setItem(
"earnatlas_progress",
JSON.stringify(progress)
);

alert("Lesson Completed");

location.reload();

}


function checkUnlock(previous){

if(progress[previous]=="completed"){
return true;
}

return false;

}

