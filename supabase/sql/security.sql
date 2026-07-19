-- EarnAtlas Supabase Security Policies

alter table profiles enable row level security;
alter table student_stats enable row level security;
alter table user_progress enable row level security;
alter table certificates enable row level security;
alter table messages enable row level security;
alter table notifications enable row level security;


create policy "Users can read own profile"
on profiles
for select
using (auth.uid() = id);


create policy "Users can update own profile"
on profiles
for update
using (auth.uid() = id);


create policy "Users read own stats"
on student_stats
for select
using (auth.uid() = user_id);


create policy "Users read own progress"
on user_progress
for select
using (auth.uid() = user_id);


create policy "Users insert own progress"
on user_progress
for insert
with check (auth.uid() = user_id);


create policy "Users view own certificates"
on certificates
for select
using (auth.uid() = user_id);


create policy "Users access own messages"
on messages
for select
using (
auth.uid() = sender_id
or
auth.uid() = receiver_id
);


create policy "Users view own notifications"
on notifications
for select
using (auth.uid() = user_id);
