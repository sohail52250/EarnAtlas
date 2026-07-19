import {supabase}

from "../supabase/js/client.js";



export function startRealtimeMessages(callback){


supabase

.channel("messages-room")

.on(

"postgres_changes",

{

event:"INSERT",

schema:"public",

table:"messages"

},

payload=>{


callback(payload.new);


}

)

.subscribe();


}




export async function updatePresence(status){


const {data:{user}}=

await supabase.auth.getUser();



if(!user){

return;

}



await supabase

.from("user_presence")

.upsert({

user_id:user.id,

status:status,

last_seen:new Date()

});


}

