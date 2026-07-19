import { createClient } from 
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const SUPABASE_URL = "https://tawpzlyywnnpafobqumo.supabase.co";


const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhd3B6bHl5d25ucGFmb2JxdW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NDE1NjYsImV4cCI6MjEwMDAxNzU2Nn0.PR5EdV8F2Ebn0NxUqQ3kFgEg1FLxzrZ1fQhM_U-Mqmg";


export const supabase =
createClient(
SUPABASE_URL,
SUPABASE_KEY
);



