# Laman web Zul Air Cond & Electrical

Laman statik (HTML + CSS + JS), tanpa pelayan atau pangkalan data. Dibina dengan skill **Premium Bento Website** (tema Navy · Emas · Perak, dengan aksen biru ais). Domain: **https://zulaircond.my/**

## Kandungan laman
1. **Hero bento**: gambar kerja sebenar, slogan "Rumah sejuk, elektrik selamat.", butang WhatsApp, lencana "Lebih 2,400 pelanggan" & SSM, logo, lokasi dan statistik (sejak 2010, 2,400+ pelanggan, 2 premis)
2. **Servis**: 9 kad servis yang boleh ditapis (Aircond / Elektrik), dengan butang **Lihat Gambar** dan **Tempah Servis** (WhatsApp)
   - Aircond: Servis & Cuci, Pasang Baru, Cassette & Premis, Baiki & Periksa
   - Elektrik: Pendawaian Rumah & Kedai, DB Board, Lampu/Soket/Suis, Projek Binaan, Earthing
3. **Tempah dalam 3 langkah**
4. **Bila perlu servis**: 6 tanda aircond/elektrik bermasalah
5. **Hasil Kerja Sebenar**: galeri 18 gambar dengan paparan penuh (lightbox)
6. **Tentang + Fakta Ringkas** (untuk Google & enjin AI), termasuk 2,400+ pelanggan dan khidmat selepas jualan
7. **Lokasi**: ibu pejabat Kota Bharu & cawangan Bachok, dengan pautan Google Maps & Waze, serta peta
8. **Soalan Lazim** (11 soalan), **CTA**, footer dan butang WhatsApp terapung

## Struktur fail
```
index.html            laman utama (termasuk data berstruktur JSON-LD untuk Google)
css/style.css         semua gaya & warna (token di atas fail)
js/main.js            menu telefon, animasi, penapis, modal, lightbox, peta
assets/img/           gambar kerja (WebP, 3 saiz: -400, -800, -1080)
og-image.jpg          gambar pratonton bila pautan dikongsi (WhatsApp/Facebook)
favicon.svg/.png, icon-192/512.png, apple-touch-icon.png, site.webmanifest
robots.txt, sitemap.xml, llms.txt (Google & enjin AI), 404.html, CNAME
```

## Cara menukar
- **Nombor WhatsApp**: cari & ganti `60173805112` dalam `index.html` dan `js/main.js` (`BOOKING_URL`). Nombor paparan `017-380 5112` juga ada dalam `index.html` dan `llms.txt`.
- **Harga**: kad servis memaparkan "Sebut Harga". Jika mahu letak harga, edit `<div class="price price--quote">` pada kad dalam `index.html`, contohnya `<strong>RM80</strong><span>/ unit 1.0HP</span>`.
- **Teks servis / soalan lazim**: edit dalam `index.html`. Jika ubah soalan lazim, ubah juga bahagian `FAQPage` dalam skrip JSON-LD di `<head>` supaya teksnya sama.
- **Gambar**: letak gambar baharu dalam `assets/img/` (WebP, 3 saiz) dan salin satu blok `<button type="button" data-full=...>` dalam galeri.
- **Warna**: tukar token di bahagian atas `css/style.css` (`--gold`, `--ice`, `--navy-900` dll.).
- Selepas mengubah CSS/JS, naikkan nombor `?v=20261122-2` dalam `index.html` supaya telefon pelawat tidak guna salinan lama.

## Deploy (GitHub Pages)
1. Repo GitHub → **Settings → Pages** → Source: **Deploy from a branch** → pilih branch laman ini, folder **/ (root)** → **Save**.
2. **Custom domain**: `zulaircond.my` (fail `CNAME` sudah ada). Tandakan **Enforce HTTPS**.
3. DNS di pendaftar domain `.my`:
   - Rekod **A** `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Rekod **CNAME** `www` → `dynopos.github.io`

Netlify juga boleh digunakan (lihat skill). Netlify wajib jika kelak mahu bayaran online.

## Selepas terbit
- Daftar di **Google Search Console** dan hantar `sitemap.xml`.
- Daftar di **Bing Webmaster Tools** (digunakan ChatGPT/Copilot).
- Buat / kemas kini **Google Business Profile** untuk kedua-dua premis dan letak URL laman.
- Pastikan nama & nombor WhatsApp sama di semua media sosial.
