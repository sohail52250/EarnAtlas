
async function saveUser(user){

console.log("Saving user:",user);

/*
Supabase insert example:

await supabase
.from('users')
.insert(user)

*/

}


async function getUser(){

/*
Database fetch example:

const {data}=await supabase
.from('users')
.select('*')

return data;

*/

return null;

}

