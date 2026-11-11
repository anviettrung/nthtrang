/* NTH Trang — tương tác dùng chung cho mọi trang */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const pad = n => String(n).padStart(2, '0');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menu điện thoại ---------- */
  const burger = $('.burger'), mnav = $('.mnav');
  const setMenu = open => {
    mnav.hidden = !open; burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    (open ? $('.mnav-close') : burger).focus();
  };
  burger.addEventListener('click', () => setMenu(true));
  $('.mnav-close').addEventListener('click', () => setMenu(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !mnav.hidden) setMenu(false); });

  /* ---------- Lên đầu trang ---------- */
  $('.totop').addEventListener('click', e => { e.preventDefault(); scrollTo({ top: 0, behavior: 'smooth' }); });

  /* ---------- Slider ảnh mở đầu trang chủ ---------- */
  const hs = $$('.hs');
  if (hs.length) {
    let i = 0, timer;
    const go = k => { hs[i].classList.remove('on'); i = (k + hs.length) % hs.length; hs[i].classList.add('on'); $('.hcur').textContent = pad(i + 1); };
    const auto = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => !document.hidden && go(i + 1), 6000); };
    $('.hprev').onclick = () => { go(i - 1); auto(); };
    $('.hnext').onclick = () => { go(i + 1); auto(); };
    auto();
  }

  /* ---------- Carousel "Dù là" ---------- */
  const cs = $$('.cs');
  if (cs.length) {
    let cur = 0;
    const n = cs.length;
    const layout = (animate = true) => {
      cs.forEach((el, k) => {
        let off = k - cur;
        if (off > n / 2) off -= n;
        if (off < -n / 2) off += n;
        const prev = +el.dataset.off;
        el.style.transition = animate && Math.abs(off - prev) <= 1 ? '' : 'none';
        el.dataset.off = off;
        el.style.transform = `translateX(calc(${off} * (100% + 30px)))`;
      });
      $('.ccur').textContent = pad(cur + 1);
    };
    layout(false);
    $('.cprev').onclick = () => { cur = (cur - 1 + n) % n; layout(); };
    $('.cnext').onclick = () => { cur = (cur + 1) % n; layout(); };
    let sx = null;
    const track = $('.ctrack');
    track.addEventListener('touchstart', e => (sx = e.touches[0].clientX), { passive: true });
    track.addEventListener('touchend', e => {
      if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) { cur = (cur + (dx < 0 ? 1 : -1) + n) % n; layout(); }
    });
    // bấm vào ảnh hai bên thì chuyển tới ảnh đó, bấm ảnh giữa thì phóng to
    track.addEventListener('click', e => {
      const s = e.target.closest('.cs'); if (!s) return;
      const off = +s.dataset.off;
      if (off !== 0) { e.stopPropagation(); cur = (cur + off + n) % n; layout(); }
    }, true);
  }

  /* ---------- Slider cuộn phim (Weddings) ---------- */
  const fs = $$('.fs');
  if (fs.length) {
    let i = 0;
    const go = k => { fs[i].classList.remove('on'); i = (k + fs.length) % fs.length; fs[i].classList.add('on'); $('.fcur').textContent = i + 1; };
    $('.fprev').onclick = () => go(i - 1);
    $('.fnext').onclick = () => go(i + 1);
  }

  /* ---------- Lightbox ---------- */
  const lb = { el: $('#lightbox'), img: $('#lbImg'), cap: $('#lbCap'), items: [], i: 0, opener: null };
  function show() {
    const it = lb.items[lb.i];
    lb.img.style.opacity = 0; lb.img.onload = () => (lb.img.style.opacity = 1);
    lb.img.src = it.src; lb.img.alt = it.alt || '';
    lb.cap.textContent = `${it.cap ? it.cap + '   ·   ' : ''}${lb.i + 1} / ${lb.items.length}`;
    const nx = lb.items[(lb.i + 1) % lb.items.length]; if (nx) new Image().src = nx.src;
    $('.lb-prev').hidden = $('.lb-next').hidden = lb.items.length < 2;
  }
  window.openLightbox = (items, i, opener) => {
    Object.assign(lb, { items, i, opener });
    lb.el.hidden = false; document.body.style.overflow = 'hidden';
    show(); $('.lb-close').focus();
  };
  const step = d => { lb.i = (lb.i + d + lb.items.length) % lb.items.length; show(); };
  const close = () => { lb.el.hidden = true; document.body.style.overflow = ''; lb.img.removeAttribute('src'); lb.opener?.focus?.(); };
  $('.lb-close').onclick = close;
  $('.lb-prev').onclick = () => step(-1);
  $('.lb-next').onclick = () => step(1);
  lb.el.addEventListener('click', e => { if (e.target === lb.el || e.target.tagName === 'FIGURE') close(); });
  document.addEventListener('keydown', e => {
    if (lb.el.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'Tab') {
      const f = $$('button:not([hidden])', lb.el), k = f.indexOf(document.activeElement);
      if (e.shiftKey && k <= 0) { e.preventDefault(); f.at(-1).focus(); }
      else if (!e.shiftKey && k === f.length - 1) { e.preventDefault(); f[0].focus(); }
    }
  });
  let tx = null;
  lb.el.addEventListener('touchstart', e => (tx = e.touches[0].clientX), { passive: true });
  lb.el.addEventListener('touchend', e => {
    if (tx == null) return; const dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  });

  // mọi ảnh có data-full trong một nhóm .lb-group: bấm để phóng to, xem cả nhóm
  $$('img[data-full]').forEach(im => {
    im.tabIndex = 0; im.setAttribute('role', 'button');
    const open = () => {
      const group = im.closest('.lb-group');
      const imgs = group ? $$('img[data-full]', group) : [im];
      window.openLightbox(imgs.map(x => ({ src: x.dataset.full, alt: x.alt })), imgs.indexOf(im), im);
    };
    im.addEventListener('click', open);
    im.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
})();
