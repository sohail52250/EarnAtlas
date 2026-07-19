export function cleanInput(value){

if(!value){

return "";

}


return value

.trim()

.replace(/[<>]/g,"");

}



export function validateEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/

.test(email);

}



export function limitText(text,max){

return text.substring(0,max);

}

