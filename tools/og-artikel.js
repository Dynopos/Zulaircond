// Guna: node tools/og-artikel.js   (perlu Playwright). Jana /assets/img/og/<slug>.jpg untuk artikel yang ada og_image.
// Jana gambar OG 1200x630 (JPG) untuk setiap artikel dalam _posts
const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const R = path.resolve(__dirname, '..') + '/';
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const f of fs.readdirSync(R + '_posts').filter(x => x.endsWith('.md'))) {
    const s = fs.readFileSync(R + '_posts/' + f, 'utf8');
    const g = k => (s.match(new RegExp('\\n' + k + ': "?([^"\\n]*)"?')) || [])[1];
    const title = g('title'), img = g('image'), kat = g('kategori') || 'Tips', og = g('og_image');
    if (!og) continue;
    const [kw, ...rest] = title.split(': ');
    const html = `<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800&family=Manrope:wght@600;700;800&display=swap"><style>
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;overflow:hidden;display:grid;grid-template-columns:470px 1fr;background:radial-gradient(ellipse 70% 60% at 100% 0%,rgba(41,86,138,.6),transparent 65%),#071a33;color:#f2f5f9;font-family:Manrope,sans-serif}
.ph{padding:24px 0 24px 24px}.ph img{width:100%;height:100%;object-fit:cover;object-position:50% 35%;border-radius:24px;border:1px solid rgba(212,173,95,.5)}
.tx{padding:44px 48px;display:flex;flex-direction:column;justify-content:center;gap:18px}
.mk{display:flex;align-items:center;gap:12px}.mk img{width:58px;height:58px}.mk b{font:800 26px/1 Archivo;background:linear-gradient(115deg,#a97f3c,#e9c97f 32%,#fff1c4 50%,#d8b061 68%,#a37a37);-webkit-background-clip:text;color:transparent}
.mk small{display:block;font:700 11px/1 Archivo;letter-spacing:.26em;color:#c9d3df;margin-top:6px}
.kat{font:800 14px/1 Archivo;letter-spacing:.22em;text-transform:uppercase;color:#8fdcff}
h1{margin:0;font:800 50px/1.05 Archivo;letter-spacing:-.025em}h1 em{font-style:normal;display:block;background:linear-gradient(115deg,#a97f3c,#e9c97f 32%,#fff1c4 50%,#d8b061 68%,#a37a37);-webkit-background-clip:text;color:transparent}
h1 span{display:block;font-size:34px;line-height:1.12;margin-top:8px}
.ft{display:flex;gap:10px;align-items:center;font:700 18px Manrope;color:#c9d3df}.wa{padding:10px 16px;border-radius:12px;background:linear-gradient(135deg,#25d366,#128c4a);color:#fff;font-weight:800}
</style></head><body><div class="ph"><img src="file://${R}${img.replace(/^\//, '')}"></div><div class="tx">
<div class="mk"><img src="file://${R}favicon.svg"><div><b>ZUL AIR COND</b><small>&amp; ELECTRICAL</small></div></div>
<span class="kat">${esc(kat)} · Blog</span>
<h1><em>${esc(kw)}</em><span>${esc(rest.join(': '))}</span></h1>
<div class="ft"><span class="wa">WhatsApp 017-380 5112</span><span>zulaircond.my</span></div></div></body></html>`;
    const tmp = require('os').tmpdir() + '/og-tmp.html'; fs.writeFileSync(tmp, html); await p.goto('file://' + tmp, { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready);
    const fit = await p.evaluate(() => document.querySelector('.tx').scrollHeight <= 630);
    await p.screenshot({ path: R + og.replace(/^\//, ''), type: 'jpeg', quality: 84 });
    console.log(fit ? 'muat' : 'LIMPAH', og);
  } await b.close();
})();
