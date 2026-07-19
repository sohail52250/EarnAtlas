import {supabase} from "../../supabase/js/client.js";


export async function checkAdmin(){


const {data:userData}=await supabase.auth.getUser();


const user=userData.user;



if(!user){

location.href="/pages/auth/login.html";

return false;

}



const {data, error}=await supabase

.from("profiles")

.select("role")

.eq("id",user.id)

.single();



if(error || !data || data.role!=="admin"){


alert("Access denied");

location.href="/";


return false;


}


return true;


}



