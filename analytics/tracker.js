export async function trackEvent(
supabase,
eventName,
page
){

const {data:{user}}=

await supabase.auth.getUser();


if(!user){

return;

}


await supabase

.from("analytics_events")

.insert({

user_id:user.id,

event_name:eventName,

page:page

});


}

