/* ============ DỮ LIỆU — sửa nội dung ở đây ============ */

const FILMS = [
  {
    id: 'fuji100', name: 'Fuji 100 nội địa', color: '#8fb39a',
    mood: 'Dịu dàng, trong trẻo, pastel',
    best: 'Hợp: portrait, concept hoa, váy trắng',
    cover: 'bkMOlE8_0000041',
    photos: 'bkMOlE8_0000041 bkMOlE8_000005 WK4n0pb_000003 OAmvpb7_000061 bkMOlE8_000028 WK4n0pb_0000042 OAmvpb7_0000573 WK4n0pb_000034 bkMOlE8_000032 WK4n0pb_0000022 OAmvpb7_0000561 WK4n0pb_000026 bkMOlE8_0000391 OAmvpb7_0000422 WK4n0pb_000033 WK4n0pb_0000321 OAmvpb7_000062 bkMOlE8_000036 WK4n0pb_0000011 OAmvpb7_0000023',
  },
  {
    id: 'vision500t', name: 'Kodak Vision3 500T', color: '#4a7fa3',
    mood: 'Điện ảnh, lãng mạn về đêm',
    best: 'Hợp: pre-wedding, couple, chụp tối',
    cover: '9eAvEQO_000069',
    photos: '9eAvEQO_000069 3KAO13d_0000501 lRwP7bj_000037 9eAvEQO_0000703 3KAO13d_0000461 9eAvEQO_000072 lRwP7bj_000029 3KAO13d_0000421 9eAvEQO_0000671 lRwP7bj_000041 3KAO13d_0000411 9eAvEQO_0000661 lRwP7bj_000031 3KAO13d_0000431 9eAvEQO_000073 lRwP7bj_000039 3KAO13d_000056 lRwP7bj_000040',
  },
  {
    id: 'proimage', name: 'Kodak ProImage 100', color: '#d39a4a',
    mood: 'Ấm áp, hoài niệm, mùa hè',
    best: 'Hợp: couple, hẹn hò, gia đình',
    cover: '9eAzM9G_000064',
    photos: '9eAzM9G_000064 XoqREyX_000065 XoqREyX_000042 XoqREyX_000057 XoqREyX_000066 aK6n0pQ_0000608 XoqREyX_000064 yr4WK7J_000043 XoqREyX_000004 aK6n0pQ_000067 ervp0M0_0000412 aK6n0zm_0000468',
  },
  {
    id: 'c200', name: 'Fuji C200', color: '#5f9479',
    mood: 'Tươi tắn, chân thật, đời thường',
    best: 'Hợp: cưới, ăn hỏi, pre-wedding phố',
    cover: 'jRYJR8o_00003831',
    photos: 'jRYJR8o_00003831 GJaGK73_000044 jRYJR8o_00004251 jRYJR8o_00000681 GJaGK73_0000701 jRYJR8o_00003731 aK6n0pQ_000050 jRYJR8o_00003941 GJaGK73_000046 jRYJR8o_00004481 DbPG8pY_0000656 jRYJR8o_00003641 GJaGK73_000053 jRYJR8o_00003931 aK6n0pQ_000035 GJaGK73_0000601 jRYJR8o_00004571 GJaGK73_0000631 jRYJR8o_00003541 GJaGK73_000002',
  },
];

// Ảnh mở đầu: máy tính dùng ảnh ngang, điện thoại dùng ảnh dọc
const HERO_DESKTOP = ['84AKjal_0000644', 'XoqREyX_000065', 'GJaGK73_0000601', 'bkMOlE8_000005'];
const HERO_MOBILE = ['3KAO13d_0000461', 'bkMOlE8_0000041', 'jRYJR8o_00003831', '9eAzM9G_000064', '9eAvEQO_000069'];

const SESSIONS = ['Portrait', 'Couple', 'Pre-wedding', 'Cưới & ăn hỏi'];

const CONTACT = {
  ig: 'https://ig.me/m/chengchupfilm',
  fb: 'https://www.facebook.com/thanh.nguyenvanthanh.9615/',
};

/* ============ TIỆN ÍCH ẢNH ============ */

const $ = (s, r = document) => r.querySelector(s);
const list = s => s.trim().split(/\s+/);
const filmById = id => FILMS.find(f => f.id === id);
const filmOf = {};
FILMS.forEach(f => list(f.photos).forEach(n => (filmOf[n] ??= f)));

function srcset(n) { const p = PHOTOS[n]; return p[2].map((w, i) => `img/${n}-${p[3][i]}.webp ${w}w`).join(', '); }
function src(n, big) { const p = PHOTOS[n]; return `img/${n}-${p[3][big ? p[3].length - 1 : Math.min(1, p[3].length - 1)]}.webp`; }
function img(n, sizes, alt = '', eager) {
  const p = PHOTOS[n];
  return `<img src="${src(n)}" srcset="${srcset(n)}" sizes="${sizes}" width="${p[0]}" height="${p[1]}" alt="${alt}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
}
const altOf = n => (filmOf[n] ? `Ảnh chụp trên ${filmOf[n].name}` : 'Ảnh chụp film của Trang');

/* ============ 1. HERO ============ */

(function hero() {
  const set = matchMedia('(max-width: 760px)').matches ? HERO_MOBILE : HERO_DESKTOP;
  const box = $('#slides'), label = $('#heroFilm');
  // ảnh đầu tải ngay; các ảnh sau tải nền, chỉ chuyển khi đã tải xong
  box.innerHTML = set.map((n, i) => `<div class="slide${i ? '' : ' on'}">${img(n, '100vw', altOf(n), i === 0).replace(' loading="lazy"', '')}</div>`).join('');
  const slides = [...box.children];
  let i = 0;
  const setLabel = () => { const f = filmOf[set[i]]; label.textContent = f ? f.name : ''; };
  setLabel();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || slides.length < 2) return;
  setInterval(() => {
    const k = (i + 1) % slides.length, im = slides[k].querySelector('img');
    if (document.hidden || !im.complete || !im.naturalWidth) return;
    slides[i].classList.remove('on'); i = k; slides[i].classList.add('on'); setLabel();
  }, 6000);
})();

/* ============ LIGHTBOX ============ */

const lb = { el: $('#lightbox'), img: $('#lbImg'), cap: $('#lbCap'), items: [], i: 0, opener: null };
function openLightbox(items, i, opener) {
  Object.assign(lb, { items, i, opener });
  lb.el.hidden = false; document.body.style.overflow = 'hidden';
  showLb(); $('.lb-close').focus();
}
function showLb() {
  const n = lb.items[lb.i];
  lb.img.style.opacity = 0; lb.img.onload = () => (lb.img.style.opacity = 1);
  lb.img.src = src(n, true); lb.img.alt = altOf(n);
  lb.cap.textContent = `${filmOf[n] ? filmOf[n].name + '  ·  ' : ''}${lb.i + 1} / ${lb.items.length}`;
  const next = lb.items[(lb.i + 1) % lb.items.length]; if (next) new Image().src = src(next, true);
  $('.lb-prev').hidden = $('.lb-next').hidden = lb.items.length < 2;
}
const stepLb = d => { lb.i = (lb.i + d + lb.items.length) % lb.items.length; showLb(); };
function closeLb() {
  lb.el.hidden = true; document.body.style.overflow = ''; lb.img.removeAttribute('src');
  lb.opener?.focus?.();
}
$('.lb-close').onclick = closeLb;
$('.lb-prev').onclick = () => stepLb(-1);
$('.lb-next').onclick = () => stepLb(1);
lb.el.addEventListener('click', e => { if (e.target === lb.el || e.target.tagName === 'FIGURE') closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.el.hidden) return;
  if (e.key === 'Escape') closeLb();
  else if (e.key === 'ArrowLeft') stepLb(-1);
  else if (e.key === 'ArrowRight') stepLb(1);
  else if (e.key === 'Tab') {
    const f = [...lb.el.querySelectorAll('button:not([hidden])')], k = f.indexOf(document.activeElement);
    if (e.shiftKey && k <= 0) { e.preventDefault(); f.at(-1).focus(); }
    else if (!e.shiftKey && k === f.length - 1) { e.preventDefault(); f[0].focus(); }
  }
});
let tx = null;
lb.el.addEventListener('touchstart', e => (tx = e.touches[0].clientX), { passive: true });
lb.el.addEventListener('touchend', e => {
  if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1);
});

/* ============ 3. CUỘN PHIM ============ */

$('#filmGrid').innerHTML = FILMS.map(f => `
  <button class="film reveal" data-film="${f.id}" style="--c:${f.color}">
    <span class="film-img">${img(f.cover, '(max-width:1000px) 50vw, 25vw', '')}</span>
    <span class="film-name"><i></i>${f.name}</span>
    <span class="film-mood">${f.mood}</span>
    <span class="film-best">${f.best}</span>
    <span class="film-more">Xem ảnh →</span>
  </button>`).join('');
$('#filmGrid').addEventListener('click', e => {
  const b = e.target.closest('.film'); if (!b) return;
  selectFilm(b.dataset.film);
  $('#gallery').scrollIntoView({ behavior: 'smooth' });
});

/* ============ 4. ẢNH ============ */

const PAGE = 12;
let current;
$('#tabs').innerHTML = FILMS.map(f =>
  `<button class="tab" role="tab" id="tab-${f.id}" data-film="${f.id}" style="--c:${f.color}"><i></i>${f.name}</button>`).join('');
$('#tabs').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) selectFilm(b.dataset.film); });
$('#tabs').addEventListener('keydown', e => {
  if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  const k = FILMS.findIndex(f => f.id === current), n = FILMS[(k + (e.key === 'ArrowRight' ? 1 : -1) + FILMS.length) % FILMS.length];
  selectFilm(n.id); $('#tab-' + n.id).focus();
});

function selectFilm(id) {
  current = id;
  const f = filmById(id), photos = list(f.photos);
  document.querySelectorAll('.tab').forEach(t => {
    const on = t.dataset.film === id; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
  });
  const tabs = $('#tabs'), t = $('#tab-' + id);
  tabs.scrollLeft = t.offsetLeft - (tabs.clientWidth - t.offsetWidth) / 2;
  $('#filmSelect').value = id;

  const g = $('#galleryGrid'), act = $('#galleryActions');
  g.setAttribute('aria-labelledby', 'tab-' + id);
  g.innerHTML = '';
  let shown = 0;
  const add = () => {
    const next = photos.slice(shown, shown + PAGE);
    g.insertAdjacentHTML('beforeend', next.map((n, k) =>
      `<button data-i="${shown + k}" aria-label="Phóng to ảnh ${shown + k + 1}">${img(n, '(max-width:760px) 50vw, 33vw', altOf(n))}</button>`).join(''));
    shown += next.length;
    act.innerHTML = (shown < photos.length ? `<button class="btn btn-line" data-more>Xem thêm ${photos.length - shown} ảnh</button>` : '') +
      `<a class="btn" href="#book">Book chụp với ${f.name}</a>`;
    g.querySelectorAll('img:not(.loaded)').forEach(im => {
      if (im.complete) im.classList.add('loaded');
      else { im.classList.add('lazy'); im.addEventListener('load', () => im.classList.add('loaded'), { once: true }); }
    });
  };
  add();
  act.onclick = e => { if (e.target.closest('[data-more]')) add(); };
  g.onclick = e => { const b = e.target.closest('button'); if (b) openLightbox(photos, +b.dataset.i, b); };
}

/* ============ BOOK ============ */

const form = $('#bookForm');
$('#sessionSelect').innerHTML = SESSIONS.map(s => `<option>${s}</option>`).join('');
$('#filmSelect').innerHTML = FILMS.map(f => `<option value="${f.id}">${f.name}</option>`).join('') +
  '<option value="">Chưa biết, nhờ Trang tư vấn</option>';

function message() {
  const d = Object.fromEntries(new FormData(form)), f = filmById(d.film);
  let date = ''; if (d.date) { const [y, m, dd] = d.date.split('-'); date = `${dd}/${m}/${y}`; }
  return [
    `Chào Trang, mình là ${d.name.trim()}.`,
    `Mình muốn book buổi chụp ${d.session}${f ? ` bằng cuộn ${f.name}` : ', nhờ Trang tư vấn chọn phim'}` +
      `${date ? `, dự kiến ngày ${date}` : ''}${d.place.trim() ? ` tại ${d.place.trim()}` : ''}.`,
    d.note.trim(),
  ].filter(Boolean).join('\n');
}
form.addEventListener('click', async e => {
  const b = e.target.closest('[data-send]'); if (!b) return;
  if (!form.elements.name.value.trim()) { form.elements.name.focus(); toast('Cho Trang biết tên bạn nhé'); return; }
  const text = message();
  try { await navigator.clipboard.writeText(text); } catch {
    const t = document.createElement('textarea'); t.value = text; document.body.append(t); t.select(); document.execCommand('copy'); t.remove();
  }
  toast('Đã chép lời nhắn, dán vào khung chat để gửi Trang nhé');
  setTimeout(() => window.open(CONTACT[b.dataset.send], '_blank', 'noopener'), 600);
});
let toastTimer;
function toast(t) {
  const el = $('#toast'); el.textContent = t; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => (el.hidden = true), 3200);
}

/* ============ KHỞI TẠO ============ */

document.querySelectorAll('img[data-photo]').forEach(im => {
  const n = im.dataset.photo, p = PHOTOS[n];
  Object.assign(im, { srcset: srcset(n), src: src(n), width: p[0], height: p[1], loading: 'lazy', decoding: 'async', tabIndex: 0 });
  im.setAttribute('role', 'button');
  const open = () => openLightbox([n], 0, im);
  im.addEventListener('click', open);
  im.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
});

selectFilm(FILMS[0].id);

const nav = $('#nav');
const onScroll = () => nav.classList.toggle('solid', scrollY > innerHeight - 80);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

document.querySelectorAll('.about-photo, .about-text, .films .head, .gallery-sec .head, .book-intro, #bookForm').forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const cta = $('.mobile-cta'), seen = new Set();
const ctaIO = new IntersectionObserver(es => {
  es.forEach(e => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
  cta.classList.toggle('away', seen.size > 0);
});
ctaIO.observe($('.hero')); ctaIO.observe($('#book'));
