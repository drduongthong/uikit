/* ============================================================
   CAFÉ LUXE — App logic
   ============================================================ */

const PRODUCTS = [
  { id:1,  cat:'coffee',   name:'Iced Caramel Latte',       desc:'Espresso, sữa tươi, caramel muối biển',  price:69000,  rating:4.9, reviews:128, badges:['best'],  hot:true },
  { id:2,  cat:'coffee',   name:'Cold Brew Camellia',       desc:'Cold brew 18h, hoa nhài, đá viên',       price:75000,  rating:4.8, reviews:96,  badges:['new'] },
  { id:3,  cat:'coffee',   name:'Vietnamese Phin',          desc:'Cà phê phin truyền thống, sữa đặc',      price:45000,  rating:4.7, reviews:210, badges:[] },
  { id:4,  cat:'coffee',   name:'Matcha Espresso Fusion',   desc:'Matcha Uji + espresso, sữa yến mạch',    price:82000,  rating:4.9, reviews:144, badges:['best'] },
  { id:5,  cat:'smoothie', name:'Berry Blast Smoothie',     desc:'Dâu, việt quất, raspberry, sữa chua',   price:79000,  rating:4.8, reviews:88,  badges:['fresh'] },
  { id:6,  cat:'smoothie', name:'Mango Sunshine',           desc:'Xoài chín, chanh dây, mật ong',         price:72000,  rating:4.6, reviews:76,  badges:[] },
  { id:7,  cat:'smoothie', name:'Avocado Dream',            desc:'Bơ sáp, sữa đặc, đá bào mịn',            price:78000,  rating:4.9, reviews:132, badges:['best'] },
  { id:8,  cat:'smoothie', name:'Green Detox',              desc:'Rau bina, táo xanh, dứa, gừng',        price:69000,  rating:4.5, reviews:64,  badges:['fresh'] },
  { id:9,  cat:'slushie',  name:'Blueberry Slush',          desc:'Đá xay việt quất, kem topping',         price:65000,  rating:4.7, reviews:102, badges:['cold'], hot:true },
  { id:10, cat:'slushie',  name:'Lemonade Ice Crush',       desc:'Chanh vàng đá xay, bạc hà',             price:55000,  rating:4.6, reviews:91,  badges:['cold'] },
  { id:11, cat:'slushie',  name:'Mocha Frappe',             desc:'Cà phê đá xay, whipped cream, chocolate', price:85000, rating:4.9, reviews:156, badges:['best','cold'] },
  { id:12, cat:'slushie',  name:'Strawberry Cheesecake',   desc:'Đá xay dâu, cheesecake crumble',       price:79000,  rating:4.8, reviews:118, badges:['new'] },
  { id:13, cat:'tea',      name:'Peach Oolong Tea',         desc:'Trà ô long, đào miếng, trân châu',      price:62000,  rating:4.7, reviews:84,  badges:[] },
  { id:14, cat:'tea',      name:'Hibiscus Berry',           desc:'Hoa dâm bụt, berry mix, đá lạnh',      price:59000,  rating:4.6, reviews:70,  badges:['fresh'] },
  { id:15, cat:'tea',      name:'Brown Sugar Milk Tea',     desc:'Sữa tươi, đường đen, boba',            price:68000,  rating:4.9, reviews:190, badges:['best'] },
  { id:16, cat:'tea',      name:'Jasmine Green Tea',        desc:'Trà nhài thanh mát, đá viên',           price:49000,  rating:4.5, reviews:77,  badges:[] },
  { id:17, cat:'special',  name:'Signature Tasting Box',    desc:'Combo 3 ly đặc trưng mùa hè',          price:189000, rating:5.0, reviews:62,  badges:['best'] },
  { id:18, cat:'special',  name:'Rose Latte',               desc:'Espresso, syrup hoa hồng, sữa tươi',   price:79000,  rating:4.9, reviews:58,  badges:['new'] },
  { id:19, cat:'special',  name:'Salted Caramel Affogato',  desc:'Gelato vanilla + espresso nóng',       price:89000,  rating:4.8, reviews:54,  badges:[] },
  { id:20, cat:'special',  name:'Tiramisu Cold Brew',       desc:'Cold brew, kem mascarpone, cacao',     price:95000,  rating:4.9, reviews:66,  badges:['best'] },
  { id:21, cat:'coffee',   name:'Hazelnut Cappuccino',      desc:'Cappuccino, syrup hạt phỉ',            price:72000,  rating:4.7, reviews:80,  badges:[] },
  { id:22, cat:'smoothie', name:'Pineapple Coconut',       desc:'Dứa, nước dừa, đá bào',               price:70000,  rating:4.6, reviews:60,  badges:['fresh'] },
  { id:23, cat:'slushie',  name:'Watermelon Frost',        desc:'Dưa hấu đá xay, bạc hà',              price:58000,  rating:4.7, reviews:52,  badges:['cold'] },
  { id:24, cat:'tea',      name:'Lychee Rose Tea',         desc:'Trà vải, hoa hồng, jelly vải',         price:66000,  rating:4.8, reviews:74,  badges:['new'] },
];

const BADGE_MAP = {
  hot:  { label:'Hot', cls:'badge--hot' },
  new:  { label:'Mới', cls:'badge--new' },
  best: { label:'Bestseller', cls:'badge--best' },
  cold: { label:'Lạnh', cls:'badge--cold' },
  fresh:{ label:'Tươi', cls:'badge--fresh' },
};

const REVIEWS = [
  { name:'Linh Nguyễn', role:'Khách VIP · Q.3', text:'Matcha Espresso Fusion thực sự xuất sắc — cân bằng hoàn hảo giữa matcha và cà phê. Decor quán cũng gorgeous!', stars:5 },
  { name:'Trần Minh',   role:'Khách quen · Q.1', text:'Mocha Frappe là đồ uống yêu thích của tôi. Đá xay mịn, không bị pha loãng. Giao hàng nhanh.', stars:5 },
  { name:'Phạm Hà',     role:'Food blogger', text:'Avocado Dream béo ngậy đúng chuẩn cà phê bơ Việt. Tasting Box là cách tuyệt vời để thử nhiều món.', stars:5 },
  { name:'Đức Lê',      role:'Khách online', text:'Cold brew camellia thơm hoa nhài độc đáo. App đặt hàng mượt mà, giao trong 12 phút.', stars:4 },
  { name:'Mai Trân',    role:'Khách habitual', text:'Nhân viên thân thiện, không gian ấm cúng. Rose Latte thơm và không quá ngọt. Sẽ quay lại!', stars:5 },
  { name:'Quang Huy',   role:'Nhà thiết kế', text:'UI website đẹp và chuyên nghiệp — chính là lý do tôi đặt thử. Sản phẩm thực tế còn ngon hơn hình.', stars:5 },
];

// ============ State ============
const state = {
  cart: [],
  filter: 'all',
  query: '',
  theme: localStorage.getItem('theme') || 'light',
};

// Apply theme
document.documentElement.setAttribute('data-theme', state.theme);

// ============ Currency format ============
const fmt = (n) => new Intl.NumberFormat('vi-VN').format(n) + '₫';

// ============ Render products ============
const grid = document.getElementById('productGrid');
const emptyState = document.getElementById('emptyState');

function badgeHTML(b) {
  const m = BADGE_MAP[b];
  if (!m) return '';
  return `<span class="badge ${m.cls}">${m.label}</span>`;
}

function getProductSVG(p, size = 48) {
  const s = size;
  const stroke = size <= 28 ? 2 : 1.8;
  switch (p.cat) {
    case 'coffee':
      return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" style="color:var(--espresso-700,#5c3317)"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`;
    case 'smoothie':
      return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" style="color:#f43f5e"><path d="M12 2v3M9.5 4a6.5 6.5 0 0 0-5 6.3c0 4.2 3.8 8.7 7.5 10.7 3.7-2 7.5-6.5 7.5-10.7A6.5 6.5 0 0 0 14.5 4"/><path d="M12 9v.01M9.5 12v.01M14.5 12v.01M12 15v.01"/></svg>`;
    case 'slushie':
      return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" style="color:var(--neon-c,#06b6d4)"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>`;
    case 'tea':
      return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" style="color:#10b981"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
    case 'special':
    default:
      return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gold-bright,#c9a227)"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
}

function renderProducts() {
  const q = state.query.trim().toLowerCase();
  const filtered = PRODUCTS.filter(p => {
    const catOk = state.filter === 'all' || p.cat === state.filter;
    const qOk = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return catOk && qOk;
  });

  if (!filtered.length) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map((p, i) => `
    <article class="product-card reveal" style="transition-delay:${Math.min(i,8)*40}ms" data-id="${p.id}">
      <div class="product-card__media">
        ${p.badges.map(badgeHTML).join(' ')}
        ${p.hot ? '<span class="badge badge--hot" style="position:absolute; top:var(--s-4); right:var(--s-4);"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-1px;margin-right:2px"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z"/></svg> Hot</span>' : ''}
        <span class="emoji" style="display:flex;align-items:center;justify-content:center">${getProductSVG(p, 48)}</span>
      </div>
      <div class="product-card__body">
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__meta">
          <span class="rating"><span style="color:var(--gold-bright);display:inline-flex;gap:1px">${Array(5).fill('<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('')}</span><span class="rating__count">${p.rating} (${p.reviews})</span></span>
        </div>
        <p class="muted" style="font-size:var(--fs-sm); margin-bottom:var(--s-4);">${p.desc}</p>
        <div class="product-card__foot">
          <span class="product-card__price">${fmt(p.price)}</span>
          <button class="product-card__add" data-add="${p.id}" aria-label="Thêm vào giỏ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // re-bind
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(+btn.dataset.add); });
  });
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openProduct(+card.dataset.id));
  });

  observeReveal();
}

// ============ Cart ============
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');

function addToCart(id, qty=1) {
  const p = PRODUCTS.find(x=>x.id===id);
  const existing = state.cart.find(x=>x.id===id);
  if (existing) existing.qty += qty; else state.cart.push({ ...p, qty });
  updateCart();
  showToast(`Đã thêm "${p.name}" vào giỏ`, 'success');
  bumpCartCount();
}

function updateCart() {
  const totalQty = state.cart.reduce((s,x)=>s+x.qty,0);
  cartCount.textContent = totalQty;
  cartCount.style.display = totalQty ? '' : 'none';

  if (!state.cart.length) {
    cartItems.innerHTML = `<div class="empty"><div class="empty__icon"><svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></div><h3 class="empty__title">Giỏ hàng trống</h3><p class="empty__desc">Thêm đồ uống để bắt đầu.</p></div>`;
  } else {
    cartItems.innerHTML = state.cart.map(x => `
      <div class="cart-item" data-id="${x.id}">
        <div class="cart-item__thumb" style="display:flex;align-items:center;justify-content:center">${getProductSVG(x, 24)}</div>
        <div class="cart-item__info">
          <div class="cart-item__name">${x.name}</div>
          <div class="cart-item__meta">${fmt(x.price)} × ${x.qty}</div>
          <div class="stepper" style="margin-top:var(--s-2);">
            <button data-dec="${x.id}">−</button>
            <input value="${x.qty}" readonly />
            <button data-inc="${x.id}">+</button>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; align-items:flex-end; gap:var(--s-2);">
          <span class="cart-item__price">${fmt(x.price*x.qty)}</span>
          <button class="cart-item__remove" data-remove="${x.id}" aria-label="Xóa">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14"/></svg>
          </button>
        </div>
      </div>
    `).join('');
    cartItems.querySelectorAll('[data-dec]').forEach(b=>b.addEventListener('click',()=>changeQty(+b.dataset.dec,-1)));
    cartItems.querySelectorAll('[data-inc]').forEach(b=>b.addEventListener('click',()=>changeQty(+b.dataset.inc,1)));
    cartItems.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>removeItem(+b.dataset.remove)));
  }
  const total = state.cart.reduce((s,x)=>s+x.price*x.qty,0);
  cartTotal.textContent = fmt(total);
}

function changeQty(id,delta) {
  const item = state.cart.find(x=>x.id===id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(x=>x.id!==id);
  updateCart();
}
function removeItem(id) {
  const item = state.cart.find(x=>x.id===id);
  state.cart = state.cart.filter(x=>x.id!==id);
  updateCart();
  if (item) showToast(`Đã xóa "${item.name}"`, 'info');
}

function openCart() {
  cartDrawer.classList.add('is-open'); cartBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartDrawer.classList.remove('is-open'); cartBackdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ============ Product modal ============
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');

function openProduct(id) {
  const p = PRODUCTS.find(x=>x.id===id);
  if (!p) return;
  modalContent.innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1.1fr; gap:var(--s-6); align-items:start;">
      <div class="product-card__media" style="aspect-ratio:1; border-radius:var(--r-lg); display:grid; place-items:center;">
        <span class="emoji" style="display:flex;align-items:center;justify-content:center">${getProductSVG(p, 96)}</span>
      </div>
      <div>
        <div style="display:flex; gap:var(--s-2); margin-bottom:var(--s-3);">${p.badges.map(badgeHTML).join(' ')}</div>
        <h2 class="modal__title">${p.name}</h2>
        <p class="muted" style="margin-bottom:var(--s-4);">${p.desc}</p>
        <div class="rating" style="margin-bottom:var(--s-4);"><span style="color:var(--gold-bright);display:inline-flex;gap:2px">${Array(5).fill('<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('')}</span><span class="rating__count">${p.rating} · ${p.reviews} đánh giá</span></div>
        <div style="font-family:var(--font-display); font-size:var(--fs-3xl); font-weight:700; color:var(--espresso-900); margin-bottom:var(--s-6);">${fmt(p.price)}</div>
        <div style="display:flex; align-items:center; gap:var(--s-4); margin-bottom:var(--s-6);">
          <div class="stepper"><button id="mDec">−</button><input id="mQty" value="1" /><button id="mInc">+</button></div>
          <button class="btn btn--gold" style="flex:1" id="mAdd">Thêm vào giỏ — ${fmt(p.price)}</button>
        </div>
        <div class="divider">CHI TIẾT</div>
        <ul style="margin-top:var(--s-3); color:var(--text-soft); font-size:var(--fs-sm); line-height:1.9; padding-left:var(--s-5);">
          <li>Nguyên liệu: tươi chọn lọc mỗi sáng</li>
          <li>Khối lượng: 350ml (size M)</li>
          <li>Tuỳ chọn đá: ít / vừa / nhiều</li>
          <li>Đường: 0% / 30% / 50% / 100%</li>
          <li>Thời gian chuẩn bị: ~5 phút</li>
        </ul>
      </div>
    </div>
  `;
  productModal.classList.add('is-open');
  document.body.style.overflow = 'hidden';

  let qty = 1;
  const qtyInput = document.getElementById('mQty');
  const addBtn = document.getElementById('mAdd');
  const updatePrice = () => { qtyInput.value = qty; addBtn.textContent = `Thêm vào giỏ — ${fmt(p.price*qty)}`; };
  document.getElementById('mDec').onclick = () => { if (qty>1) { qty--; updatePrice(); } };
  document.getElementById('mInc').onclick = () => { qty++; updatePrice(); };
  addBtn.onclick = () => { addToCart(p.id, qty); closeProduct(); };
}

function closeProduct() {
  productModal.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ============ Toast ============
const toasts = document.getElementById('toasts');
function showToast(msg, type='info') {
  const el = document.createElement('div');
  el.className = 'toast';
  const icon = type==='success'
    ? '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>'
    : type==='danger'
    ? '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
    : '<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/></svg>';
  el.innerHTML = `<span class="toast__icon">${icon}</span><span>${msg}</span>`;
  toasts.appendChild(el);
  setTimeout(() => { el.classList.add('is-leaving'); setTimeout(()=>el.remove(), 280); }, 3000);
}

// ============ Reviews render ============
const reviewsGrid = document.getElementById('reviewsGrid');
reviewsGrid.innerHTML = REVIEWS.map(r => `
  <div class="testimonial reveal">
    <p class="testimonial__text">${r.text}</p>
    <div class="testimonial__author">
      <div class="testimonial__avatar">${r.name.charAt(0)}</div>
      <div>
        <div class="testimonial__name">${r.name}</div>
        <div class="testimonial__role">${r.role}</div>
        <div class="rating" style="margin-top:4px;color:var(--gold-bright);display:flex;gap:2px">${Array(r.stars).fill('<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>').join('')}</div>
      </div>
    </div>
  </div>
`).join('');

// ============ Reveal on scroll ============
function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.is-visible)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}
observeReveal();

// ============ Filters ============
document.getElementById('catFilters').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('#catFilters .chip').forEach(c=>c.classList.remove('is-active'));
  chip.classList.add('is-active');
  state.filter = chip.dataset.cat;
  renderProducts();
});
document.getElementById('menuSearch').addEventListener('input', (e) => {
  state.query = e.target.value;
  renderProducts();
});
document.getElementById('clearFilter').addEventListener('click', () => {
  state.filter = 'all'; state.query = '';
  document.getElementById('menuSearch').value = '';
  document.querySelectorAll('#catFilters .chip').forEach(c=>c.classList.remove('is-active'));
  document.querySelector('#catFilters .chip[data-cat="all"]').classList.add('is-active');
  renderProducts();
});

// ============ Theme toggle ============
const themeToggle = document.getElementById('themeToggle');
function updateThemeIcon() {
  themeToggle.innerHTML = state.theme === 'dark'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
}
updateThemeIcon();
themeToggle.addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('theme', state.theme);
  updateThemeIcon();
});

// ============ Mobile menu ============
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('is-open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('is-open')));

// ============ Parallax / floating particles ============
const hero = document.querySelector('.hero');
const particleContainer = hero;
for (let i=0;i<14;i++){
  const p = document.createElement('span');
  p.className = 'particle';
  const size = 4 + Math.random()*8;
  p.style.width = size+'px'; p.style.height = size+'px';
  p.style.left = Math.random()*100 + '%';
  p.style.top = Math.random()*100 + '%';
  p.style.setProperty('--dur', (4+Math.random()*6)+'s');
  p.style.setProperty('--dx', (Math.random()*60-30)+'px');
  p.style.setProperty('--dy', (Math.random()*-60)+'px');
  p.style.animationDelay = (Math.random()*4)+'s';
  particleContainer.appendChild(p);
}

// Parallax cup
const cup = document.querySelector('.hero__cup');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (cup) cup.style.transform = `translateY(${y*0.08}px)`;
}, { passive:true });

// ============ Cart events ============
document.getElementById('openCart').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('cartBackdrop').addEventListener('click', closeCart);
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!state.cart.length) { showToast('Giỏ hàng trống', 'danger'); return; }
  showToast('Đang chuyển đến thanh toán…', 'success');
  closeCart();
});

// ============ Product modal events ============
document.getElementById('closeModal').addEventListener('click', closeProduct);
productModal.addEventListener('click', (e) => { if (e.target === productModal) closeProduct(); });

// ============ Other buttons ============
document.getElementById('ctaOrder').addEventListener('click', () => document.getElementById('menu').scrollIntoView({behavior:'smooth'}));
document.getElementById('ctaStory').addEventListener('click', () => showToast('Câu chuyện thương hiệu đang được cập nhật', 'info'));
document.getElementById('openOrder').addEventListener('click', () => document.getElementById('menu').scrollIntoView({behavior:'smooth'}));
document.getElementById('promoCta').addEventListener('click', () => showToast('Form đăng ký thành viên (demo)', 'success'));
document.getElementById('sendMsg').addEventListener('click', () => showToast('Tin nhắn đã gửi! Chúng tôi sẽ liên hệ sớm.', 'success'));

// ============ Bump cart count animation ============
function bumpCartCount() {
  cartCount.animate([{transform:'scale(1)'},{transform:'scale(1.5)'},{transform:'scale(1)'}], {duration:320, easing:'cubic-bezier(.34,1.56,.64,1)'});
}

// ============ Esc to close ============
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeCart(); closeProduct(); mobileMenu.classList.remove('is-open'); }
});

// ============ Init ============
renderProducts();
updateCart();

// Count up hero stats (simple)
document.querySelectorAll('.hero__trust-item strong').forEach(el => {
  const orig = el.textContent;
  // leave as is
});
