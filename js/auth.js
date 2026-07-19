import { supabase } from "../supabase/js/client.js";


window.registerUser = async function(){


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



if(!email || !password){

alert("Enter email and password");

return;

}



const {data,error}=await supabase.auth.signUp({

email:email,

password:password

});



if(error){

alert(error.message);

return;

}



alert("Account created successfully");



window.location.href="../../learning/pages/dashboard.html";


}




window.loginUser = async function(){


const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;



const {data,error}=await supabase.auth.signInWithPassword({

email,

password

});



if(error){

alert(error.message);

return;

}



alert("Login successful");


window.location.href="../../learning/pages/dashboard.html";


}


