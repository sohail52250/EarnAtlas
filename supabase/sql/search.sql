create index if not exists lessons_title_search_idx

on lessons(title_en);



create index if not exists marketplace_title_search_idx

on marketplace_items(title);



create index if not exists marketplace_category_search_idx

on marketplace_items(category);

