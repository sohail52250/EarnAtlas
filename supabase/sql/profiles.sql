
create table if not exists profiles (

id uuid primary key references auth.users(id),

full_name text,

role text default 'student',

created_at timestamp default now()

);



