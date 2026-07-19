
insert into lessons
(id,level,title_en,title_ur,content_en,content_ur,order_number)

values

(
6,
'Intermediate',
'Freelancing Profile Building',
'فری لانسنگ پروفائل بنانا',
'Learn how to create a professional profile that attracts clients.',
'سیکھیں کہ ایک ایسا پروفیشنل پروفائل کیسے بنایا جائے جو کلائنٹس کو متاثر کرے۔',
6
),

(
7,
'Intermediate',
'Finding Online Clients',
'آن لائن کلائنٹس تلاش کرنا',
'Learn methods to find genuine online clients.',
'حقیقی آن لائن کلائنٹس تلاش کرنے کے طریقے سیکھیں۔',
7
),

(
8,
'Advanced',
'Digital Business Growth',
'ڈیجیٹل بزنس کی ترقی',
'Learn how to grow online income systems.',
'آن لائن آمدنی کے نظام کو بڑھانے کا طریقہ سیکھیں۔',
8
)

on conflict(id) do nothing;

