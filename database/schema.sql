CREATE TABLE users (

id UUID PRIMARY KEY,

name TEXT NOT NULL,

email TEXT UNIQUE NOT NULL,

created_at TIMESTAMP DEFAULT NOW()

);


CREATE TABLE opportunities (

id UUID PRIMARY KEY,

title TEXT NOT NULL,

category TEXT,

description TEXT,

created_at TIMESTAMP DEFAULT NOW()

);


CREATE TABLE saved_opportunities (

id UUID PRIMARY KEY,

user_id UUID REFERENCES users(id),

opportunity_id UUID REFERENCES opportunities(id),

created_at TIMESTAMP DEFAULT NOW()

);

