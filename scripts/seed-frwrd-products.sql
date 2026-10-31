-- Seed produk FRWRD dari data statis website.
-- Aman dijalankan berulang kali: slug unik dan konflik tidak membuat duplikat.
-- Stok tidak tersedia pada data lama; ubah lewat admin setelah seed.

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Coklat', 'kemeja-frwrd-coklat', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Pilihan warna coklat yang hangat untuk dipakai sehari-hari.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 10, ARRAY['S','M','L','XL'], '[{"nama":"Coklat","hex":"#593A27"}]'::jsonb, ARRAY['/images/frwrd/coklat.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Hitam', 'kemeja-frwrd-hitam', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna hitam serbaguna dengan identitas FRWRD.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 10, ARRAY['S','M','L','XL'], '[{"nama":"Hitam","hex":"#171715"}]'::jsonb, ARRAY['/images/frwrd/hitam.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Cream', 'kemeja-frwrd-cream', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna cream yang mudah dipadukan untuk berbagai suasana.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 10, ARRAY['S','M','L','XL'], '[{"nama":"Cream","hex":"#E8E0CC"}]'::jsonb, ARRAY['/images/frwrd/cream.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Hijau Army', 'kemeja-frwrd-hijau-army', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Hijau army memberi aksen warna yang tetap mudah dikenakan.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 10, ARRAY['S','M','L','XL'], '[{"nama":"Hijau Army","hex":"#343B24"}]'::jsonb, ARRAY['/images/frwrd/hijau-army.png'], true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.frwrd_products
  (nama, slug, seri, deskripsi, bahan, model, kategori, stok, ukuran, warna, gambar, aktif)
VALUES
  ('Kemeja FRWRD — Navy', 'kemeja-frwrd-navy', 'Kemeja Essential', 'Kemeja lengan pendek dengan siluet santai dan detail saku depan. Warna navy yang rapi, klasik, dan siap dipakai berulang.', 'Cotton', 'Kemeja lengan pendek', 'Kemeja Lengan Pendek', 10, ARRAY['S','M','L','XL'], '[{"nama":"Navy","hex":"#14213A"}]'::jsonb, ARRAY['/images/frwrd/navy.png'], true)
ON CONFLICT (slug) DO NOTHING;
