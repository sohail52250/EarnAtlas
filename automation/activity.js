export async function recordActivity(

supabase,

activity

){


const {data:{user}}=

await supabase.auth.getUser();


if(!user){

return;

}



await supabase

.from("user_activity")

.insert({

user_id:user.id,

activity:activity

});


}

