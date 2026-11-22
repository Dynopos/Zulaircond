# Laman web Zul Air Cond & Electrical

Laman statik (HTML + CSS + JS) dengan blog Jekyll, tanpa pelayan atau pangkalan data. GitHub Pages membina laman secara automatik setiap kali ada perubahan. Dibina dengan skill **Premium Bento Website** (tema Navy · Emas · Perak, dengan aksen biru ais). Domain: **https://zulaircond.my/**

## Kandungan laman
1. **Hero bento**: gambar kerja sebenar, slogan "Rumah sejuk, elektrik selamat.", butang WhatsApp, lencana "Lebih 2,400 pelanggan" & SSM, logo, lokasi dan statistik (sejak 2010, 2,400+ pelanggan, 2 premis)
2. **Servis**: 9 kad servis yang boleh ditapis (Aircond / Elektrik), dengan butang **Lihat Gambar** dan **Tempah Servis** (WhatsApp)
   - Aircond: Servis & Cuci, Pasang Baru, Cassette & Premis, Baiki & Periksa
   - Elektrik: Pendawaian Rumah & Kedai, DB Board, Lampu/Soket/Suis, Projek Binaan, Earthing
3. **Tempah dalam 3 langkah**
4. **Bila perlu servis**: 6 tanda aircond/elektrik bermasalah
5. **Hasil Kerja Sebenar**: galeri 18 gambar dengan paparan penuh (lightbox)
6. **Tentang + Fakta Ringkas** (untuk Google & enjin AI), termasuk 2,400+ pelanggan dan khidmat selepas jualan
7. **Lokasi & kawasan liputan**: seluruh Kelantan (10 jajahan) & Besut, Terengganu; ibu pejabat Kota Bharu & cawangan Bachok, dengan pautan Google Maps & Waze, serta peta
8. **Artikel Terkini**: 3 artikel blog terbaru (muncul automatik)
9. **Soalan Lazim** (13 soalan), **CTA**, footer dan butang WhatsApp terapung
10. **Blog** di `/blog/`: senarai artikel + halaman setiap artikel

Keyword utama: **Servis Aircond Kelantan** dan **Baiki Aircond Kelantan** (title, H1, meta, tajuk servis, Tentang, soalan lazim, JSON-LD).

## Struktur fail
```
_posts/               ARTIKEL BLOG (satu fail .md setiap artikel)
_layouts/             reka bentuk halaman blog & artikel
_includes/            menu, footer & ikon (dijana daripada index.html), kad artikel
blog/index.html       halaman senarai blog (/blog/)
_config.yml           tetapan Jekyll
index.html            laman utama (termasuk data berstruktur JSON-LD untuk Google)
css/style.css         semua gaya & warna (token di atas fail)
js/main.js            menu telefon, animasi, penapis, modal, lightbox, peta
assets/img/           gambar kerja (WebP, 3 saiz: -400, -800, -1080)
og-image.jpg          gambar pratonton bila pautan dikongsi (WhatsApp/Facebook)
favicon.svg/.png, icon-192/512.png, apple-touch-icon.png, site.webmanifest
robots.txt, sitemap.xml & llms.txt (artikel baharu disenaraikan automatik), 404.html, CNAME
```

## Cara tambah artikel blog
1. Di GitHub, buka folder `_posts` → **Add file → Create new file**.
2. Nama fail: `TAHUN-BULAN-HARI-tajuk-pendek.md`, contoh `2026-12-05-pasang-aircond-baru-kelantan.md`.
   Bahagian selepas tarikh menjadi alamat artikel: `https://zulaircond.my/blog/pasang-aircond-baru-kelantan/`
3. Salin templat ini ke dalam fail, isi, kemudian **Commit changes**:
   ```markdown
   ---
   title: "Pasang Aircond Baru di Kelantan: Perkara Perlu Tahu"
   seo_title: "Tajuk pendek ≤ 65 aksara untuk Google | Zul Aircond"   # pilihan
   description: "Ringkasan 1–2 ayat (kira-kira 150 aksara) yang muncul di Google."
   image: /assets/img/pasang-piping-1080.webp
   image_alt: "Penerangan gambar"
   keywords: "pasang aircond Kelantan, servis aircond Kelantan"
   kategori: Pasang Aircond
   ---

   Perenggan pembuka...

   ## Subtajuk
   Isi artikel. **Tebal**, [pautan](/#servis), senarai:
   - perkara satu
   - perkara dua
   ```
4. Dalam 1–2 minit artikel muncul di `/blog/`, di bahagian Artikel Terkini laman utama, dalam `sitemap.xml` dan `llms.txt`.

Tips SEO: satu keyword utama setiap artikel (letak dalam title, perenggan pertama dan satu subtajuk), 600–1,200 patah perkataan, dan pautkan ke `/#servis` serta artikel lain. Jangan tulis harga atau janji yang belum disahkan.

## Cara menukar
- **Nombor WhatsApp**: cari & ganti `60173805112` dalam `index.html` dan `js/main.js` (`BOOKING_URL`). Nombor paparan `017-380 5112` juga ada dalam `index.html` dan `llms.txt`.
- **Harga**: kad servis memaparkan "Sebut Harga". Jika mahu letak harga, edit `<div class="price price--quote">` pada kad dalam `index.html`, contohnya `<strong>RM80</strong><span>/ unit 1.0HP</span>`.
- **Menu & footer** dalam `_includes/` dijana daripada `index.html`; jika menu laman utama diubah, salin perubahan yang sama ke `_includes/nav.html` / `footer.html`.
- **Teks servis / soalan lazim**: edit dalam `index.html`. Jika ubah soalan lazim, ubah juga bahagian `FAQPage` dalam skrip JSON-LD di `<head>` supaya teksnya sama.
- **Gambar**: letak gambar baharu dalam `assets/img/` (WebP, 3 saiz) dan salin satu blok `<button type="button" data-full=...>` dalam galeri.
- **Warna**: tukar token di bahagian atas `css/style.css` (`--gold`, `--ice`, `--navy-900` dll.).
- Selepas mengubah CSS/JS, naikkan nombor `?v=20261122-2` dalam `index.html` supaya telefon pelawat tidak guna salinan lama.

## Deploy (GitHub Pages)
1. Repo GitHub → **Settings → Pages** → Source: **Deploy from a branch** → pilih branch laman ini, folder **/ (root)** → **Save**.
2. **Custom domain**: `zulaircond.my` (fail `CNAME` sudah ada). Tandakan **Enforce HTTPS**.
3. GitHub Pages membina Jekyll secara automatik (tiada fail `.nojekyll`). Jangan tambah fail `.nojekyll`, kerana blog akan berhenti berfungsi.
4. DNS di pendaftar domain `.my`:
   - Rekod **A** `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Rekod **CNAME** `www` → `dynopos.github.io`

Netlify juga boleh digunakan (lihat skill). Netlify wajib jika kelak mahu bayaran online.

## Google index (Search Console)
1. Buka https://search.google.com/search-console → **Add property**.
2. Pilih **Domain** → taip `zulaircond.my` → salin rekod **TXT** yang diberi.
3. Di panel DNS domain (mschosting), tambah rekod **TXT** untuk `@` dengan nilai itu → kembali ke Search Console → **Verify** (DNS boleh ambil masa beberapa minit hingga beberapa jam).
   - Alternatif: pilih **URL prefix** `https://zulaircond.my/` → kaedah **HTML tag** → hantar kod `google-site-verification` kepada pembangun untuk diletak dalam `<head>`.
4. **Sitemaps** → masukkan `sitemap.xml` → **Submit**.
5. **URL Inspection** → tampal setiap URL penting → **Request indexing**:
   laman utama, `/blog/` dan setiap artikel.
6. Setiap kali artikel baharu diterbitkan: URL Inspection → Request indexing untuk URL artikel itu.

## Bing & IndexNow (untuk Bing, ChatGPT Search, Copilot)
- Bing Webmaster Tools → **Import from Google Search Console** (paling mudah selepas langkah di atas).
- IndexNow: fail kunci `39c73d0407490059a490e3a7e3e0b48b.txt` ada di akar laman. Untuk maklumkan URL baharu kepada Bing serta-merta, buka:
  `https://api.indexnow.org/indexnow?url=<URL-penuh>&key=39c73d0407490059a490e3a7e3e0b48b`

## Selepas terbit
- Daftar di **Google Search Console** dan hantar `sitemap.xml`.
- Daftar di **Bing Webmaster Tools** (digunakan ChatGPT/Copilot).
- Buat / kemas kini **Google Business Profile** untuk kedua-dua premis dan letak URL laman.
- Pastikan nama & nombor WhatsApp sama di semua media sosial.

## Voice note (dalam hero)
- Fail: `assets/audio/voice-note.ogg` (Opus) + `assets/audio/voice-note.m4a` (AAC untuk iPhone/Safari). Tempoh 28 saat (`data-duration="28"`).
- **Auto-main:** semua pelayar menyekat bunyi sebelum pelawat menyentuh laman, dan tiada laman boleh memaksanya. Audio bermula pada sentuhan/klik **pertama** di mana-mana (skrol tidak dikira). Butang main berdenyut sementara menunggu. Jika pelawat jeda, ia tidak dimainkan semula.
- Tukar audio: ganti kedua-dua fail (nama sama) dan kemas kini `data-duration`. Label "Dengar: Zul Air Cond & Electrical" boleh ditukar dalam `index.html` (`vn__label`).
