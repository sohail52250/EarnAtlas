let user =
JSON.parse(localStorage.getItem("earnatlas_user"))
||
{
 name:"Student",
 email:"",
 progress:[]
};


function register(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;


user.name=name;
user.email=email;


localStorage.setItem(
"earnatlas_user",
JSON.stringify(user)
);


alert("Account created");

window.location.href="../dashboard/";

}



function showUser(){

let box=document.getElementById("profile");

if(box){

box.innerHTML=
"Welcome "+user.name+
"<br>Email: "+user.email;

}

}


window.onload=showUser;


