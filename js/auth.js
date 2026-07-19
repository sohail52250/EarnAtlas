
function registerUser(){

let user={

name:document.getElementById('name').value,

email:document.getElementById('email').value

};


saveUser(user);\n\nlocalStorage.setItem(
'earnatlas_user',
JSON.stringify(user)
);


alert('Account created successfully');

window.location.href='../dashboard/index.html';

}



function loginUser(){

let user=
localStorage.getItem('earnatlas_user');


if(user){

alert('Login successful');

window.location.href='../dashboard/index.html';

}

else{

alert('Please register first');

}

}

