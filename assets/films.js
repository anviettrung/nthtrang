/* Dữ liệu phần Cuộn phim — sửa tên, cảm xúc, ảnh của từng cuộn ở đây */
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

(function () {
  const $ = s => document.querySelector(s);
  const list = s => s.trim().split(/\s+/);
  const P = window.PHOTOS;
  const srcset = n => P[n][2].map((w, i) => `img/${n}-${P[n][3][i]}.webp ${w}w`).join(', ');
  const src = (n, big) => `img/${n}-${P[n][3][big ? P[n][3].length - 1 : Math.min(1, P[n][3].length - 1)]}.webp`;
  const img = (n, sizes, alt = '') => `<img src="${src(n)}" srcset="${srcset(n)}" sizes="${sizes}" width="${P[n][0]}" height="${P[n][1]}" alt="${alt}" loading="lazy" decoding="async">`;
  const filmById = id => FILMS.find(f => f.id === id);

  $('#filmGrid').innerHTML = FILMS.map(f => `
    <button class="film" data-film="${f.id}" style="--c:${f.color}">
      <span class="film-img">${img(f.cover, '(max-width:1000px) 50vw, 22vw')}</span>
      <span class="film-name"><i></i>${f.name}</span>
      <span class="film-mood">${f.mood}</span>
      <span class="film-best">${f.best}</span>
      <span class="film-more">Xem ảnh →</span>
    </button>`).join('');
  $('#filmGrid').addEventListener('click', e => {
    const b = e.target.closest('.film'); if (!b) return;
    select(b.dataset.film); $('#gallery').scrollIntoView({ behavior: 'smooth' });
  });

  $('#tabs').innerHTML = FILMS.map(f => `<button class="tab" role="tab" id="tab-${f.id}" data-film="${f.id}" style="--c:${f.color}"><i></i>${f.name}</button>`).join('');
  $('#tabs').addEventListener('click', e => { const b = e.target.closest('.tab'); if (b) select(b.dataset.film); });

  const PAGE = 12;
  function select(id) {
    const f = filmById(id), photos = list(f.photos);
    document.querySelectorAll('.tab').forEach(t => { const on = t.dataset.film === id; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; });
    const tabs = $('#tabs'), t = $('#tab-' + id);
    tabs.scrollLeft = t.offsetLeft - (tabs.clientWidth - t.offsetWidth) / 2;
    const g = $('#galleryGrid'), act = $('#galleryActions');
    g.innerHTML = ''; let shown = 0;
    const add = () => {
      const next = photos.slice(shown, shown + PAGE);
      g.insertAdjacentHTML('beforeend', next.map((n, k) => `<button data-i="${shown + k}" aria-label="Phóng to ảnh ${shown + k + 1}">${img(n, '(max-width:760px) 50vw, 30vw', 'Ảnh chụp trên ' + f.name)}</button>`).join(''));
      shown += next.length;
      act.innerHTML = (shown < photos.length ? `<button class="btn btn-line" data-more>Xem thêm ${photos.length - shown} ảnh</button>` : '') +
        `<a class="btn" href="contact/">Book chụp với ${f.name}</a>`;
      g.querySelectorAll('img:not(.loaded)').forEach(im => {
        if (im.complete) im.classList.add('loaded');
        else { im.classList.add('lazy'); im.addEventListener('load', () => im.classList.add('loaded'), { once: true }); }
      });
    };
    add();
    act.onclick = e => { if (e.target.closest('[data-more]')) add(); };
    g.onclick = e => {
      const b = e.target.closest('button'); if (!b) return;
      window.openLightbox(photos.map(n => ({ src: src(n, true), alt: 'Ảnh chụp trên ' + f.name, cap: f.name })), +b.dataset.i, b);
    };
  }
  select(FILMS[0].id);
})();
