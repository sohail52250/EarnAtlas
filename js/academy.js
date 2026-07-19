let userProgress =
JSON.parse(localStorage.getItem("earnatlas_progress"))
|| {};


function passLesson(id){

userProgress[id]="passed";

localStorage.setItem(
"earnatlas_progress",
JSON.stringify(userProgress)
);

alert("Congratulations! Lesson passed.");

window.location.href="../";

}



function unlock(id){

return userProgress[id]=="passed";

}



function quizCheck(answer,lesson){

if(answer=="correct"){

passLesson(lesson);

}

else{

alert("Try again. Review the lesson.");

}

}


