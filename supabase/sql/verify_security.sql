-- EarnAtlas Security Verification

select tablename, rowsecurity
from pg_tables
where schemaname = 'public';

select schemaname, tablename, policyname
from pg_policies
where schemaname = 'public';
