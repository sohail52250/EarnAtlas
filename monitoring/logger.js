export async function logEvent(
supabase,
event,
details
){

const {

data:{user}

}=await supabase.auth.getUser();


if(!user){

return;

}


await supabase

.from("system_logs")

.insert({

user_id:user.id,

event:event,

details:details

});


}

