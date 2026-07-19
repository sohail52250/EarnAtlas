-- EarnAtlas Security Upgrade


-- Profiles protection

alter table profiles enable row level security;


create policy "Users can view own profile"

on profiles

for select

using(auth.uid() = id);



create policy "Users update own profile"

on profiles

for update

using(auth.uid() = id);



-- Lessons public read access

alter table lessons enable row level security;


create policy "Anyone can view lessons"

on lessons

for select

using(true);



-- Advertisement protection

alter table advertisements enable row level security;


create policy "Only approved ads public"

on advertisements

for select

using(status = 'approved');

