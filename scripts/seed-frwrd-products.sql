-- Seed produk FRWRD dari data statis website.
-- Aman dijalankan berulang kali: slug unik dan konflik tidak membuat duplikat.
-- Stok tidak tersedia pada data lama; ubah lewat admin setelah seed.

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, harga, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Coklat', 'kemeja-frwrd-coklat', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Pilihan warna coklat yang hangat untuk dipakai sehari-hari.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 0, 10, ARRAY['S','M','L','XL'], '[{"nama":"Coklat","hex":"#593A27"}]'::jsonb, ARRAY['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coklat-iDoPOAQYOOR7U9wcxHZWQewPzkGnOP.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coklat%202-60VWtiUN0daI3XOm0GPER6to2uQ9kR.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Coklat%203-2SZyrEa6UTI5vCRLral9Egvqsd3HNE.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, harga, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Hitam', 'kemeja-frwrd-hitam', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna hitam serbaguna dengan identitas FRWRD.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 0, 10, ARRAY['S','M','L','XL'], '[{"nama":"Hitam","hex":"#171715"}]'::jsonb, ARRAY['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitam-vPgg2rWpv7p2inmkvy36Mfqi2nCVof.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hitam%202-EUTNuDh7BejIork2qOygeTiYUJ2S89.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, harga, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Cream', 'kemeja-frwrd-cream', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna cream yang mudah dipadukan untuk berbagai suasana.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 0, 10, ARRAY['S','M','L','XL'], '[{"nama":"Cream","hex":"#E8E0CC"}]'::jsonb, ARRAY['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cream-8FLHZUBv3skOpwGKAWisxlMsglEkyl.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cream%202-kGxSwOR5KEl8cPlLiSHDGKHvABDaDO.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cream%203-eOYltMjWMiL4a60EVdVAgDYY4gYFvO.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, harga, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Hijau Army', 'kemeja-frwrd-hijau-army', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Hijau army memberi aksen warna yang tetap mudah dikenakan.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 0, 10, ARRAY['S','M','L','XL'], '[{"nama":"Hijau Army","hex":"#343B24"}]'::jsonb, ARRAY['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hijau%20army-sOx1eMMHcSGPu4HQo1pVs8QTr5FxAa.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hijau%20army%202-4Kj1ricaMKNsR9JZGLuzjxjRXBNCtO.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hijau%20army%203-jci28NwD0hCH3dngurgfbWrkfHoZXn.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, harga, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Navy', 'kemeja-frwrd-navy', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna navy yang rapi, klasik, dan siap dipakai berulang.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 0, 10, ARRAY['S','M','L','XL'], '[{"nama":"Navy","hex":"#14213A"}]'::jsonb, ARRAY['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Navy-WAfFUNiJsRXCXelL65QINK8mI9Z5ib.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Navy%202-LLU2mB2YNb1ImQ5zN5UY132jhLediO.png','https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Navy%203-0VlWFWo7RNKefD3ZuV24YDxCzVgpE9.png'], true)
ON CONFLICT (slug) DO NOTHING;
