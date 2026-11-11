/* ============ DỮ LIỆU — sửa nội dung ở đây ============ */

const FILMS = [
  {
    id: 'fuji100', name: 'Fuji 100 nội địa', short: 'Fuji 100', color: '#7fa58b',
    edge: 'FUJICOLOR 100 ▸ 18 ▸ 18A ▸ JAPAN ▸ 19 ▸ 19A',
    mood: 'Dịu dàng · Trong trẻo · Pastel',
    tagline: 'Như nắng sớm lọt qua rèm cửa.',
    desc: 'Màu da hồng nhẹ, xanh lá dịu, độ tương phản mềm và rất “trong”. Bộ ảnh nhẹ tênh như một hơi thở — hợp với những ai yêu vẻ nữ tính, thơ và tinh khôi.',
    best: 'Portrait, concept hoa, kimono, váy trắng',
    light: 'Nắng dịu ban ngày, ánh sáng cửa sổ',
    tone: 'Pastel, mát, nhẹ',
    swatches: ['#efe2dc', '#d9c9c0', '#b9c9b4', '#8fa892'],
    cover: 'bkMOlE8_0000041',
  },
  {
    id: 'vision500t', name: 'Kodak Vision3 500T', short: 'Vision 500T', color: '#3d6f8e',
    edge: 'KODAK VISION3 500T 5219 ▸ 7 ▸ 7A ▸ 8 ▸ 8A',
    mood: 'Điện ảnh · Bí ẩn · Lãng mạn về đêm',
    tagline: 'Như một khung hình bước ra từ phim.',
    desc: 'Cuộn phim điện ảnh sinh ra cho ánh đèn: xanh lạnh, đỏ ấm và quầng sáng đỏ quanh nguồn sáng. Chụp đẹp cả lúc chiều muộn, phố đêm, quán bi-a — cho những câu chuyện có chút cá tính.',
    best: 'Pre-wedding, couple cá tính, portrait concept',
    light: 'Chiều tối, đèn đường, ánh đèn trong nhà',
    tone: 'Xanh lạnh – đỏ ấm, có quầng sáng',
    swatches: ['#1d2a36', '#3d6f8e', '#c8463a', '#f0b27a'],
    cover: '9eAvEQO_000069',
  },
  {
    id: 'proimage', name: 'Kodak ProImage 100', short: 'ProImage 100', color: '#d08a3c',
    edge: 'KODAK PROIMAGE 100 ▸ 12 ▸ 12A ▸ 13 ▸ 13A',
    mood: 'Ấm áp · Hoài niệm · Mùa hè',
    tagline: 'Như kỷ niệm một buổi chiều hè.',
    desc: 'Tông ấm, da vàng mật, xanh lá tươi mà không gắt — đậm chất Kodak cũ. Ảnh trông như lấy ra từ album gia đình, càng xem lâu càng thương.',
    best: 'Couple, hẹn hò, gia đình nhỏ, chụp cùng thú cưng',
    light: 'Nắng ngoài trời, công viên, bên hồ',
    tone: 'Ấm, vàng mật, xanh lá tươi',
    swatches: ['#f3d7a8', '#d08a3c', '#7d9a4a', '#4f6b3a'],
    cover: '9eAzM9G_000064',
  },
  {
    id: 'c200', name: 'Fuji C200', short: 'Fuji C200', color: '#5b8a72',
    edge: 'FUJICOLOR C200 ▸ 30 ▸ 30A ▸ 31 ▸ 31A',
    mood: 'Chân thật · Tươi tắn · Đời thường',
    tagline: 'Như phố Hà Nội một sáng mùa thu.',
    desc: 'Màu tươi, hơi ngả xanh mát, chi tiết rõ ràng. Bắt trọn khoảnh khắc thật nhất — cái nhìn, nụ cười, góc phố và cả những ngày cưới đông vui.',
    best: 'Wedding, lễ ăn hỏi, pre-wedding phố phường',
    light: 'Ngày nắng, phố cổ, trong nhà có đèn flash',
    tone: 'Tươi, xanh mát, trung thực',
    swatches: ['#f1e6c8', '#e2b23a', '#5b8a72', '#b23a2e'],
    cover: 'jRYJR8o_00003831',
  },
];

// Câu hỏi cảm xúc → gợi ý cuộn phim
const MOODS = [
  { label: 'Một làn gió nhẹ', film: 'fuji100' },
  { label: 'Một thước phim điện ảnh', film: 'vision500t' },
  { label: 'Một mùa hè cũ', film: 'proimage' },
  { label: 'Một ngày thật của chúng mình', film: 'c200' },
];

// Ảnh của từng cuộn phim (theo thứ tự hiển thị)
const FILM_PHOTOS = {
  fuji100: 'bkMOlE8_0000041 bkMOlE8_000005 WK4n0pb_000003 OAmvpb7_000061 bkMOlE8_000028 WK4n0pb_0000042 OAmvpb7_0000573 WK4n0pb_000034 bkMOlE8_000032 WK4n0pb_0000022 OAmvpb7_0000561 WK4n0pb_000026 bkMOlE8_0000391 OAmvpb7_0000422 WK4n0pb_000033 WK4n0pb_0000321 OAmvpb7_000062 bkMOlE8_000036 WK4n0pb_0000011 OAmvpb7_0000023',
  vision500t: '9eAvEQO_000069 3KAO13d_0000501 lRwP7bj_000037 9eAvEQO_0000703 3KAO13d_0000461 9eAvEQO_000072 lRwP7bj_000029 3KAO13d_0000421 9eAvEQO_0000671 lRwP7bj_000041 3KAO13d_0000411 9eAvEQO_0000661 lRwP7bj_000031 3KAO13d_0000431 9eAvEQO_000073 lRwP7bj_000039 3KAO13d_000056 lRwP7bj_000040',
  proimage: '9eAzM9G_000064 XoqREyX_000065 XoqREyX_000042 XoqREyX_000057 XoqREyX_000066 aK6n0pQ_0000608 XoqREyX_000064 yr4WK7J_000043 XoqREyX_000004 aK6n0pQ_000067 ervp0M0_0000412 aK6n0zm_0000468',
  c200: 'jRYJR8o_00003831 GJaGK73_000044 jRYJR8o_00004251 jRYJR8o_00000681 GJaGK73_0000701 jRYJR8o_00003731 aK6n0pQ_000050 jRYJR8o_00003941 GJaGK73_000046 jRYJR8o_00004481 DbPG8pY_0000656 jRYJR8o_00003641 GJaGK73_000053 jRYJR8o_00003931 aK6n0pQ_000035 GJaGK73_0000601 jRYJR8o_00004571 GJaGK73_0000631 jRYJR8o_00003541 GJaGK73_000002',
};

// Tên bộ ảnh theo tiền tố tên tệp (hiện ở chú thích khi phóng to)
const ALBUMS = {
  jRYJR8o: 'Mùa Thu Hà Nội', GJaGK73: 'Thảo Nguyên & Tuấn Hiệp', lRwP7bj: 'Chi & Dương',
  XoqREyX: 'Chiều bên hồ', yr4WK7J: 'Chiều bên hồ', '9eAzM9G': 'Chiều bên hồ',
  '9eAvEQO': 'Đêm bi-a', '3KAO13d': 'Gió Hồ Tây', bkMOlE8: 'Kimono trong vườn',
  WK4n0pb: 'Tulip trắng', OAmvpb7: 'Hoa và váy trắng', aK6n0pQ: 'Couples', aK6n0zm: 'Portrait',
  DbPG8pY: 'Wedding', ervp0M0: 'Phố', M594a6p: 'Về Trang', GJaVVoR: 'Về Trang',
};

const STORIES = [
  {
    title: 'Mùa Thu Hà Nội', kind: 'Pre-wedding · Phố cổ', film: 'c200',
    quote: '“Vì bạn thì thầm không phải vào tai tôi mà là vào trái tim tôi. Bạn hôn không phải đôi môi của tôi mà là tâm hồn tôi.”',
    photos: 'jRYJR8o_00003831 jRYJR8o_00004481 jRYJR8o_00003731 jRYJR8o_00004251 jRYJR8o_00000681 jRYJR8o_00003941 jRYJR8o_00003641 jRYJR8o_00004571 jRYJR8o_00003931 jRYJR8o_00003541',
  },
  {
    title: 'Thảo Nguyên & Tuấn Hiệp', kind: 'Lễ ăn hỏi & vu quy · 19.03.2024', film: 'c200',
    quote: 'Từ những bữa tiệc lớn sôi động cho đến lễ cưới ấm cúng — tình yêu hiện ra trong một cái ôm, một cái nhìn, một cái nháy mắt.',
    photos: 'GJaGK73_000044 GJaGK73_0000701 GJaGK73_000046 GJaGK73_000053 GJaGK73_0000601 GJaGK73_0000631 GJaGK73_000002',
  },
  {
    title: 'Chi & Dương', kind: 'Pre-wedding', film: 'vision500t',
    quote: 'Một buổi sáng nhiều bong bóng, nhiều tiếng cười và những nụ hôn khẽ.',
    photos: 'lRwP7bj_000037 lRwP7bj_000029 lRwP7bj_000031 lRwP7bj_000039 lRwP7bj_000040 lRwP7bj_000041',
  },
  {
    title: 'Chiều bên hồ', kind: 'Couple', film: 'proimage',
    quote: 'Bạn không cần một dịp lớn để chúc mừng nhau. Chỉ cần một địa điểm, một buổi chiều và hai người.',
    photos: 'XoqREyX_000065 XoqREyX_000057 XoqREyX_000066 9eAzM9G_000064 XoqREyX_000042 XoqREyX_000064 XoqREyX_000004 yr4WK7J_000043',
  },
];

const SESSIONS = [
  {
    id: 'portrait', name: 'Portrait', photo: 'OAmvpb7_000061', films: ['fuji100', 'vision500t'],
    desc: 'Vẻ đẹp đôi mươi trong những ngày nắng hay ngày mưa — để thước film ghi lại bạn dịu dàng như nắng.',
  },
  {
    id: 'couple', name: 'Couple', photo: 'XoqREyX_000065', films: ['proimage', 'vision500t'],
    desc: 'Không cần dịp đặc biệt. Chọn một nơi hai bạn thích và cùng nhau tạo nên một buổi chiều đáng nhớ.',
  },
  {
    id: 'prewedding', name: 'Pre-wedding', photo: 'lRwP7bj_000037', films: ['vision500t', 'c200'],
    desc: 'Trên núi cao, bên hồ hay giữa phố cổ — bạn xứng đáng được kể chuyện tình theo cách của mình.',
  },
  {
    id: 'wedding', name: 'Wedding & Ăn hỏi', photo: 'GJaGK73_000044', films: ['c200'],
    desc: 'Tin tưởng giao kỷ niệm cho Trang, để bạn được tận hưởng trọn vẹn ngày của mình.',
  },
];

const CONTACT = {
  instagram: 'https://ig.me/m/chengchupfilm',
  facebook: 'https://www.facebook.com/thanh.nguyenvanthanh.9615/',
};

/* ============ TIỆN ÍCH ẢNH ============ */

const $ = (s, r = document) => r.querySelector(s);
const filmById = id => FILMS.find(f => f.id === id);
const list = s => s.trim().split(/\s+/);
const filmOfPhoto = {};
for (const [fid, s] of Object.entries(FILM_PHOTOS)) list(s).forEach(n => (filmOfPhoto[n] ??= fid));

function srcset(name) {
  const p = PHOTOS[name];
  return p[2].map((w, i) => `img/${name}-${p[3][i]}.webp ${w}w`).join(', ');
}
function src(name, big) {
  const p = PHOTOS[name];
  return `img/${name}-${p[3][big ? p[3].length - 1 : Math.min(1, p[3].length - 1)]}.webp`;
}
function imgHTML(name, sizes, alt = '', eager = false) {
  const p = PHOTOS[name];
  return `<img src="${src(name)}" srcset="${srcset(name)}" sizes="${sizes}" width="${p[0]}" height="${p[1]}" alt="${alt}" ${eager ? '' : 'loading="lazy"'} decoding="async">`;
}
function caption(name) {
  const f = filmById(filmOfPhoto[name]);
  const album = ALBUMS[name.split('_')[0]] || '';
  return (f ? `<b>${f.name}</b>` : '') + album;
}
function altOf(name) {
  const f = filmById(filmOfPhoto[name]);
  return `${ALBUMS[name.split('_')[0]] || 'Ảnh'}${f ? ' — chụp trên ' + f.name : ''}`;
}

/* ============ LIGHTBOX ============ */

const lb = { el: $('#lightbox'), img: $('#lbImg'), cap: $('#lbCap'), items: [], i: 0, opener: null };
function openLightbox(items, i, opener) {
  lb.items = items; lb.i = i; lb.opener = opener || document.activeElement;
  lb.el.hidden = false; document.body.style.overflow = 'hidden';
  showLb(); $('.lb-close').focus();
}
function showLb() {
  const n = lb.items[lb.i];
  lb.img.style.opacity = 0;
  lb.img.onload = () => (lb.img.style.opacity = 1);
  lb.img.src = src(n, true); lb.img.alt = altOf(n);
  lb.cap.innerHTML = `${caption(n)} <span style="opacity:.55;margin-left:10px">${lb.i + 1} / ${lb.items.length}</span>`;
  // tải trước ảnh kế tiếp
  const next = lb.items[(lb.i + 1) % lb.items.length]; if (next) new Image().src = src(next, true);
  $('.lb-prev').hidden = $('.lb-next').hidden = lb.items.length < 2;
}
function stepLb(d) { lb.i = (lb.i + d + lb.items.length) % lb.items.length; showLb(); }
function closeLb() {
  lb.el.hidden = true; document.body.style.overflow = ''; lb.img.removeAttribute('src');
  lb.opener && lb.opener.focus && lb.opener.focus();
}
$('.lb-close').onclick = closeLb;
$('.lb-prev').onclick = () => stepLb(-1);
$('.lb-next').onclick = () => stepLb(1);
lb.el.addEventListener('click', e => { if (e.target === lb.el || e.target.tagName === 'FIGURE') closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.el.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') stepLb(-1);
  if (e.key === 'ArrowRight') stepLb(1);
  if (e.key === 'Tab') { // giữ focus trong lightbox
    const f = [...lb.el.querySelectorAll('button:not([hidden])')];
    const i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
  }
});
let tx = null;
lb.el.addEventListener('touchstart', e => (tx = e.touches[0].clientX), { passive: true });
lb.el.addEventListener('touchend', e => {
  if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; tx = null;
  if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1);
});

/* ============ CHỌN CUỘN PHIM ============ */

let currentFilm = 'fuji100';
const PAGE = 9;

function renderTabs() {
  $('#filmTabs').innerHTML = FILMS.map(f => `
    <button class="film-tab" role="tab" id="tab-${f.id}" aria-controls="filmPanel" data-film="${f.id}" style="--c:${f.color}">
      <span class="ft-img">${imgHTML(f.cover, '(max-width:760px) 62vw, 25vw', '')}</span>
      <span class="ft-body"><span class="ft-name">${f.name}</span><span class="ft-mood">${f.mood}</span></span>
    </button>`).join('');
  $('#filmTabs').addEventListener('click', e => {
    const b = e.target.closest('.film-tab'); if (b) selectFilm(b.dataset.film, true);
  });
  $('#filmTabs').addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const i = FILMS.findIndex(f => f.id === currentFilm);
    const n = FILMS[(i + (e.key === 'ArrowRight' ? 1 : -1) + FILMS.length) % FILMS.length];
    selectFilm(n.id); $('#tab-' + n.id).focus();
  });
}

function selectFilm(id, scroll) {
  currentFilm = id;
  document.querySelectorAll('.film-tab').forEach(t => {
    const on = t.dataset.film === id;
    t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
  });
  renderPanel(id);
  const sel = $('#filmSelect');
  if (sel.options.length) { sel.value = id; updatePreview(); }
  if (scroll) $('#filmPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPanel(id) {
  const f = filmById(id), photos = list(FILM_PHOTOS[id]);
  const panel = $('#filmPanel');
  panel.style.setProperty('--c', f.color);
  panel.setAttribute('aria-labelledby', 'tab-' + id);
  panel.innerHTML = `
    <div class="fp-head">
      <div>
        <p class="fp-edge" aria-hidden="true">${f.edge} ▸ ${f.edge}</p>
        <h3>${f.name}</h3>
        <p class="fp-tag">${f.tagline}</p>
      </div>
      <div>
        <p class="fp-desc">${f.desc}</p>
        <dl class="fp-facts">
          <dt>Cảm giác</dt><dd>${f.mood}</dd>
          <dt>Hợp với</dt><dd>${f.best}</dd>
          <dt>Ánh sáng</dt><dd>${f.light}</dd>
          <dt>Bảng màu</dt><dd class="swatches">${f.swatches.map(c => `<i style="background:${c}"></i>`).join('')}</dd>
        </dl>
        <div class="fp-actions">
          <a class="btn" href="#book" data-book-film="${id}">Book chụp với ${f.short} →</a>
          <span class="count">${photos.length} khung hình mẫu bên dưới</span>
        </div>
      </div>
    </div>
    <div class="gallery" id="gallery"></div>
    <div class="gallery-more"></div>`;
  let shown = 0;
  const g = $('#gallery', panel), more = $('.gallery-more', panel);
  const add = () => {
    const next = photos.slice(shown, shown + PAGE);
    g.insertAdjacentHTML('beforeend', next.map((n, k) =>
      `<button data-i="${shown + k}" aria-label="Xem cỡ lớn: ${altOf(n)}">${imgHTML(n, '(max-width:760px) 50vw, 33vw', altOf(n))}</button>`).join(''));
    shown += next.length;
    more.innerHTML = shown < photos.length
      ? `<button class="btn btn-ghost">Xem thêm ${photos.length - shown} ảnh ${f.short}</button>` : '';
    fadeIn(g);
  };
  add();
  more.onclick = e => { if (e.target.closest('button')) add(); };
  g.onclick = e => { const b = e.target.closest('button'); if (b) openLightbox(photos, +b.dataset.i, b); };
}

function fadeIn(root) {
  root.querySelectorAll('img:not(.loaded)').forEach(img => {
    if (img.complete) { img.classList.add('loaded'); return; }
    img.classList.add('lazy');
    img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
  });
}

function renderMoods() {
  const box = $('#moodOptions');
  box.innerHTML = MOODS.map(m => `<button type="button" aria-pressed="false" data-film="${m.film}">${m.label}</button>`).join('');
  box.onclick = e => {
    const b = e.target.closest('button'); if (!b) return;
    box.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    document.querySelectorAll('.film-tab').forEach(t => t.classList.toggle('suggested', t.dataset.film === b.dataset.film));
    selectFilm(b.dataset.film);
    $('#tab-' + b.dataset.film).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };
}

function renderCompare() {
  const rows = [['Cảm giác', 'mood'], ['Tông màu', 'tone'], ['Ánh sáng hợp', 'light'], ['Hợp với', 'best']];
  $('#compareTable').innerHTML = `
    <thead><tr><td></td>${FILMS.map(f => `<th scope="col" style="--c:${f.color}"><span></span>${f.name}</th>`).join('')}</tr></thead>
    <tbody>
      ${rows.map(([l, k]) => `<tr><th scope="row">${l}</th>${FILMS.map(f => `<td>${f[k]}</td>`).join('')}</tr>`).join('')}
      <tr><th scope="row"></th>${FILMS.map(f => `<td><button data-film="${f.id}">Xem ảnh ${f.short}</button></td>`).join('')}</tr>
    </tbody>`;
  $('#compareTable').onclick = e => { const b = e.target.closest('button[data-film]'); if (b) selectFilm(b.dataset.film, true); };
}

/* ============ CÂU CHUYỆN & BUỔI CHỤP ============ */

function renderStories() {
  $('#storyList').innerHTML = STORIES.map((s, si) => {
    const p = list(s.photos), f = filmById(s.film);
    return `<article class="story reveal">
      <div class="story-imgs">
        ${p.slice(0, 3).map((n, i) => `<button data-s="${si}" data-i="${i}" aria-label="Xem cỡ lớn: ${s.title}">${imgHTML(n, i ? '(max-width:760px) 33vw, 20vw' : '(max-width:760px) 66vw, 40vw', altOf(n))}</button>`).join('')}
      </div>
      <div>
        <p class="story-meta">${s.kind}</p>
        <h3>${s.title}</h3>
        <blockquote>${s.quote}</blockquote>
        <button class="story-link" data-s="${si}" data-i="0">Xem cả câu chuyện (${p.length} ảnh)</button>
        <button class="film-chip" data-film="${f.id}" style="--c:${f.color}"><i></i>${f.short}</button>
      </div>
    </article>`;
  }).join('');
  $('#storyList').onclick = e => {
    const chip = e.target.closest('.film-chip');
    if (chip) { selectFilm(chip.dataset.film, true); return; }
    const b = e.target.closest('[data-s]'); if (!b) return;
    openLightbox(list(STORIES[+b.dataset.s].photos), +b.dataset.i, b);
  };
}

function renderSessions() {
  $('#sessionGrid').innerHTML = SESSIONS.map(s => `
    <article class="session reveal">
      <button class="s-img" data-photo-open="${s.photo}" aria-label="Xem cỡ lớn: ${s.name}">${imgHTML(s.photo, '(max-width:760px) 100vw, 25vw', altOf(s.photo))}</button>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <div class="s-film">Gợi ý phim: <b>${s.films.map(id => filmById(id).short).join(' · ')}</b></div>
      <a class="btn btn-ghost btn-small" href="#book" data-book-session="${s.id}" data-book-film="${s.films[0]}">Book buổi ${s.name}</a>
    </article>`).join('');
  $('#sessionGrid').onclick = e => {
    const b = e.target.closest('[data-photo-open]'); if (b) openLightbox([b.dataset.photoOpen], 0, b);
  };
}

/* ============ BOOKING ============ */

const form = $('#bookForm');
function fillSelects() {
  $('#sessionSelect').innerHTML = SESSIONS.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
  $('#filmSelect').innerHTML = FILMS.map(f => `<option value="${f.id}">${f.name}</option>`).join('') +
    '<option value="">Chưa biết, nhờ Trang tư vấn</option>';
}
function message() {
  const d = Object.fromEntries(new FormData(form));
  const s = SESSIONS.find(x => x.id === d.session), f = filmById(d.film);
  let date = '';
  if (d.date) { const [y, m, dd] = d.date.split('-'); date = `${dd}/${m}/${y}`; }
  return [
    `Chào Trang, mình là ${d.name?.trim() || '…'}.`,
    `Mình muốn book buổi chụp ${s ? s.name : ''}${f ? ` bằng cuộn ${f.name}` : ', nhờ Trang tư vấn chọn phim giúp mình'}` +
      `${date ? `, dự kiến ngày ${date}` : ''}${d.place?.trim() ? ` tại ${d.place.trim()}` : ''}.`,
    d.note?.trim() ? d.note.trim() : '',
  ].filter(Boolean).join('\n');
}
function updatePreview() { $('#msgPreview').textContent = message(); }
form.addEventListener('input', updatePreview);

async function send(channel) {
  const nameInput = form.elements.name;
  if (!nameInput.value.trim()) { nameInput.focus(); toast('Cho Trang biết tên bạn nhé'); return; }
  const text = message();
  try { await navigator.clipboard.writeText(text); } catch {
    const t = document.createElement('textarea'); t.value = text; document.body.append(t); t.select();
    document.execCommand('copy'); t.remove();
  }
  toast('Đã chép lời nhắn — dán vào khung chat để gửi Trang nhé');
  setTimeout(() => window.open(CONTACT[channel === 'ig' ? 'instagram' : 'facebook'], '_blank', 'noopener'), 600);
}
form.addEventListener('click', e => { const b = e.target.closest('[data-send]'); if (b) send(b.dataset.send); });

// Nút "Book với cuộn X" / "Book buổi Y" điền sẵn form
document.addEventListener('click', e => {
  const a = e.target.closest('[data-book-film],[data-book-session]'); if (!a) return;
  if (a.dataset.bookFilm) $('#filmSelect').value = a.dataset.bookFilm;
  if (a.dataset.bookSession) $('#sessionSelect').value = a.dataset.bookSession;
  updatePreview();
  setTimeout(() => form.elements.name.focus({ preventScroll: true }), 700);
});

let toastTimer;
function toast(t) {
  const el = $('#toast'); el.textContent = t; el.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => (el.hidden = true), 3200);
}

/* ============ KHỞI TẠO ============ */

// ảnh tĩnh trong HTML có data-photo
document.querySelectorAll('img[data-photo]').forEach(img => {
  const n = img.dataset.photo, p = PHOTOS[n];
  img.srcset = srcset(n); img.src = src(n); img.width = p[0]; img.height = p[1];
  img.loading = 'lazy'; img.decoding = 'async';
  if (img.closest('.about')) {
    img.tabIndex = 0; img.setAttribute('role', 'button');
    const open = () => openLightbox([n], 0, img);
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    img.style.cursor = 'zoom-in';
  }
});

renderTabs(); renderMoods(); selectFilm('fuji100'); renderCompare(); renderStories(); renderSessions();
fillSelects(); updatePreview();

// Thanh điều hướng đổi nền khi rời hero
const nav = $('#nav');
const onScroll = () => nav.classList.toggle('solid', scrollY > innerHeight * 0.7);
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// Hiện dần khi cuộn tới
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Ẩn nút Book cố định trên điện thoại khi đang ở hero hoặc ở form
const cta = $('.mobile-cta');
const bookIO = new IntersectionObserver(es => es.forEach(e => cta.classList.toggle('away', e.isIntersecting)));
bookIO.observe($('#book')); bookIO.observe($('.hero'));
