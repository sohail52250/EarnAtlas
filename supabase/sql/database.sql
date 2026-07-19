create table users (

id uuid primary key,

name text,

email text unique,

created_at timestamp default now()

);



create table lessons (

id serial primary key,

title text,

language text,

content text

);



create table progress (

id serial primary key,

user_id uuid,

lesson_id integer,

status text

);



create table quiz_results (

id serial primary key,

user_id uuid,

lesson_id integer,

score integer

);



create table advertisements (

id serial primary key,

business_name text,

contact_name text,

email text,

website text,

description text,

status text default 'pending'

);

