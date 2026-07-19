create table if not exists profiles (

id uuid primary key references auth.users(id),

name text,

bio text,

skills text,

avatar_url text,

created_at timestamp default now()

);



alter table profiles enable row level security;



create policy "Public profiles view"

on profiles

for select

using(true);



create policy "Users update own profile"

on profiles

for update

using(auth.uid()=id);



create policy "Users create own profile"

on profiles

for insert

with check(auth.uid()=id);

