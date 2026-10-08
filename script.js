/* ===== 1. ຂໍ້ມູນເມນູ (Menu data) ===== */
const CATEGORIES = [
  { id: "all",    label: "ທັງໝົດ" },
  { id: "cake",   label: "ເຄັກ" },
  { id: "bakery", label: "ຂະໜົມປັງ & ເບເກີຣີ່" },
  { id: "drink",  label: "ເຄື່ອງດື່ມ" },
  { id: "extra",  label: "ເມນູຟຸ່ງຟິງ / ເພີ່ມເຕີມ" }
];

// ຮູບເມນູ: ໃຊ້ຮູບພາບ Unsplash ສົມຈິງທີ່ກົງກັບຊື່ເມນູ
const MENU = [
  { 
    cat: "cake", 
    lo: "ເຄັກສັງຂະຍາໃບເຕີຍ", 
    en: "Pandan Sangkhaya Cake", 
    price: 38000, 
    badge: "ເມນູແນະນຳ", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdIgS5uGe2wrAwBWDcJSrKeA4OrJuQUP3hkIgpnYRZQ&s=10",
    desc: "ເຄັກນຸ່ມ ກິ່ນໃບເຕີຍ ຄູ່ກັບສັງຂະຍາໄຂ່ເຮັດເອງ.", 
    ing: ["ໃບເຕີຍສົດ", "ສັງຂະຍາໄຂ່", "ກະທິ"] 
  },
  { 
    cat: "cake", 
    lo: "ເຄັກໝາກພ້າວນ້ຳຫອມ", 
    en: "Coconut Water Cake", 
    price: 35000, 
    badge: "", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHFdvXLJuzEW1RlEyLZKkRPNAN5btGnImzP_OjjXahg&s=10",
    desc: "ໃຊ້ນ້ຳໝາກພ້າວນ້ຳຫອມ ແລະ ເນື້ອພ້າວອ່ອນ ຫວານໜ້ອຍ ຫອມຫຼາຍ.", 
    ing: ["ນ້ຳໝາກພ້າວນ້ຳຫອມ", "ເນື້ອພ້າວອ່ອນ", "ແປ້ງເຂົ້າ"] 
  },
  { 
    cat: "cake", 
    lo: "Basque Burnt Cheesecake ໝາກມ່ວງສຸກ", 
    en: "Mango Basque Cheesecake", 
    price: 55000, 
    badge: "ຂາຍດີ", 
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80",
    desc: "ຊີສເຄັກໜ້າໄໝ້ ຮ່ວມກັບໝາກມ່ວງສຸກຈາກສວນທ້ອງຖິ່ນ.", 
    ing: ["ຄຣີມຊີສ", "ໝາກມ່ວງສຸກ", "ໄຂ່ໄກ່ບ້ານ"] 
  },
  { 
    cat: "cake", 
    lo: "Tiramisu ກາເຟດາວ", 
    en: "Dao Coffee Tiramisu", 
    price: 48000, 
    badge: "ເມນູແນະນຳ", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbClEiEo6c5DfxsCeCg9c4O332tzYVBRq8Z8Z50iebOTeys87HpwJFn0mI&s=10",
    desc: "ທິຣາມິສຸ ຊຸບກາເຟດາວ ບໍລະເວນ ຫອມເຂັ້ມ.", 
    ing: ["ກາເຟດາວ", "ມາສກາໂປເນ", "ໂກໂກ້"] 
  },

  { 
    cat: "bakery", 
    lo: "ໂຄຣຊອງໝາກພ້າວອ່ອນ", 
    en: "Young Coconut Croissant", 
    price: 32000, 
    badge: "ຂາຍດີ", 
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    desc: "ໂຄຣຊອງກຣອບ ໄສ້ຄຣີມພ້າວອ່ອນ.", 
    ing: ["ເບີ", "ພ້າວອ່ອນ", "ຄຣີມ"] 
  },
  { 
    cat: "bakery", 
    lo: "ຂະໜົມປັງສັງຂະຍາລາວ", 
    en: "Lao Sangkhaya Toast", 
    price: 28000, 
    badge: "ເມນູແນະນຳ", 
    img: "https://hungryinthailand.com/wp-content/uploads/2026/01/pandan-custard-bread.webp",
    desc: "ຂະໜົມປັງນຸ່ມ ທາສັງຂະຍາຫອມໃບເຕີຍ.", 
    ing: ["ຂະໜົມປັງ", "ສັງຂະຍາ", "ເບີ"] 
  },
  { 
    cat: "bakery", 
    lo: "ເຄັກກ້ວຍຫອມອົບເນີຍ", 
    en: "Banana Butter Cake", 
    price: 30000, 
    badge: "ອໍແກນິກ", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYh82kyJipXv6h2JmLoT3PYHWbd5pwLxvbd9f9HHDUcTMdxzCTjZH59ifF&s=10",
    desc: "ເຄັກກ້ວຍຫອມ ອົບດ້ວຍເນີ ກິ່ນຫອມອົບອຸ່ນ.", 
    ing: ["ກ້ວຍຫອມອໍແກນິກ", "ເນີ", "ນ້ຳຕານອ້ອຍ"] 
  },
  { 
    cat: "bakery", 
    lo: "ສກອນຊາຂຽວ", 
    en: "Green Tea Scone", 
    price: 25000, 
    badge: "", 
    img: "https://jajabakes.com/wp-content/uploads/2022/02/matcha-scones-1-500x500.jpg",
    desc: "ສກອນຊາຂຽວ ກິນກັບແຈມ ຫຼື ຄຣີມ.", 
    ing: ["ຊາຂຽວ", "ແປ້ງສາລີ", "ເບີ"] 
  },

  { 
    cat: "drink", 
    lo: "ກາເຟດິບດາວບໍລະເວນ", 
    en: "Bolaven Dao Cold Brew", 
    price: 35000, 
    badge: "ເມນູແນະນຳ", 
    img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    desc: "ກາເຟດິບສະກັດເຢັນ 16 ຊົ່ວໂມງ ຈາກເມັດທົ່ງສູງບໍລະເວນ.", 
    ing: ["ກາເຟບໍລະເວນ", "ນ້ຳກັ່ນ", "ນ້ຳກ້ອນ"] 
  },
  { 
    cat: "drink", 
    lo: "ຊາມອນມົນ", 
    en: "Mon-Mon Tea", 
    price: 30000, 
    badge: "ອໍແກນິກ", 
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "ຊາສູດພິເສດຂອງຮ້ານ ໃບຊາຈາກພູພາກເໜືອ.", 
    ing: ["ໃບຊາອໍແກນິກ", "ນົມ", "ນ້ຳເຜິ້ງ"] 
  },
  { 
    cat: "drink", 
    lo: "ລາດເຕ້ສັງຂະຍາ", 
    en: "Sangkhaya Latte", 
    price: 42000, 
    badge: "", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXgPEiIfk--z37SVMVgdeSoN_rhqT3Or46a0h0oEHsweRcvDEpPs3gsw&s=10",
    desc: "ລາດເຕ້ນຸ່ມໆ ໃສ່ສັງຂະຍາຫວານໜ້ອຍ.", 
    ing: ["ເອສເປຣສໂຊ", "ນົມສົດ", "ສັງຂະຍາ"] 
  },
  { 
    cat: "drink", 
    lo: "ມັດຊະຄຣີມມະພາວ", 
    en: "Coconut Cream Matcha", 
    price: 40000, 
    badge: "ຂາຍດີ", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdc0R5kAZ0cIWSx9KWSKafie4J8ttabdY2-V00m-lLP7yuQGsHUNCl6Y&s=10",
    desc: "ມັດຊະເຂັ້ມ ປົກດ້ວຍຄຣີມມະພ້າວ.", 
    ing: ["ມັດຊະ", "ຄຣີມມະພ້າວ", "ນົມ"] 
  },
  { 
    cat: "drink", 
    lo: "ສະມູດຕີ້ໝາກມ່ວງປັ່ນ", 
    en: "Mango Smoothie", 
    price: 33000, 
    badge: "ອໍແກນິກ", 
    img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=600&q=80",
    desc: "ໝາກມ່ວງສຸກປັ່ນເຢັນ ບໍ່ໃສ່ນ້ຳຕານ.", 
    ing: ["ໝາກມ່ວງສຸກ", "ນ້ຳກ້ອນ", "ໂຢເກິດ"] 
  },

  { 
    cat: "extra", 
    lo: "ເຂົ້າໜຽວໝາກມ່ວງສູດຄາເຟ່", 
    en: "Café-style Mango Sticky Rice", 
    price: 45000, 
    badge: "ເມນູແນະນຳ", 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVsd5Ai2c4iAI4oQhhYGauK2efVcVX1G0wXZcz2QV0HCOcRg9bDUWQrpH&s=10",
    desc: "ເຂົ້າໜຽວໜຸງກະທິ ກັບໝາກມ່ວງສຸກຫວານ.", 
    ing: ["ເຂົ້າໜຽວ", "ກະທິ", "ໝາກມ່ວງສຸກ"] 
  },
  { 
    cat: "extra", 
    lo: "ປິງຊູລອດຊ່ອງນ້ຳກະທິ", 
    en: "Lod Chong Coconut Shaved Ice", 
    price: 30000, 
    badge: "", 
    img: "https://hungryinthailand.com/wp-content/uploads/2024/02/lod-chong-dessert-768x1024.webp",
    desc: "ນ້ຳກ້ອນປິງ ກັບລອດຊ່ອງໃບເຕີຍ ແລະ ນ້ຳກະທິ.", 
    ing: ["ລອດຊ່ອງ", "ນ້ຳກະທິ", "ນ້ຳກ້ອນປິງ"] 
  }
].map((m, i) => ({ id: i, ...m }));

/* ===== 2. State & DOM ===== */
let activeCat = "all";
let query = "";
const $ = (s) => document.querySelector(s);
const grid = $("#menuGrid"), featured = $("#featuredGrid"), filters = $("#filters");
const modal = $("#modal"), modalBody = $("#modalBody");

const formatPrice = (n) => n.toLocaleString("en-US") + " ກີບ";
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ===== 3. Rendering ===== */
function cardHTML(m) {
  return `
  <article class="card">
    <div class="thumb">
      ${m.badge ? `<span class="badge">${esc(m.badge)}</span>` : ""}
      <img src="${m.img}" alt="${esc(m.lo)}" loading="lazy">
    </div>
    <div class="card-body">
      <h3>${esc(m.lo)}</h3>
      <p class="en">${esc(m.en)}</p>
      <p class="desc">${esc(m.desc)}</p>
      <div class="card-foot">
        <span class="price">${formatPrice(m.price)}</span>
        <button class="btn-sm" data-view="${m.id}">ເບິ່ງລາຍລະອຽດ</button>
      </div>
    </div>
  </article>`;
}

function renderFilters() {
  filters.innerHTML = CATEGORIES.map((c) =>
    `<button class="chip ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}" aria-pressed="${c.id === activeCat}">${c.label}</button>`
  ).join("");
}

function renderMenu() {
  const q = query.trim().toLowerCase();
  const list = MENU.filter((m) =>
    (activeCat === "all" || m.cat === activeCat) &&
    (!q || (m.lo + " " + m.en + " " + m.desc).toLowerCase().includes(q))
  );
  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<p class="empty">ບໍ່ພົບເມນູທີ່ຄົ້ນຫາ ລອງໃຊ້ຄຳອື່ນ ຫຼື ເລືອກ "ທັງໝົດ"</p>`;
  $("#resultCount").textContent = `ພົບ ${list.length} ເມນູ`;
}

/* ===== 4. Modal (Quick View) ===== */
let lastFocus = null;
function openModal(id) {
  const m = MENU[id];
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <div class="thumb">
      ${m.badge ? `<span class="badge">${esc(m.badge)}</span>` : ""}
      <img src="${m.img}" alt="${esc(m.lo)}">
    </div>
    <div class="modal-text">
      <h3 id="modalTitle">${esc(m.lo)}</h3>
      <p class="en">${esc(m.en)}</p>
      <p>${esc(m.desc)}</p>
      <strong>ວັດຖຸດິບຫຼັກ</strong>
      <ul>${m.ing.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      <span class="price">${formatPrice(m.price)}</span>
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

/* ===== 5. Events ===== */
filters.addEventListener("click", (e) => {
  const b = e.target.closest("[data-cat]");
  if (!b) return;
  activeCat = b.dataset.cat;
  renderFilters();
  renderMenu();
});
$("#searchInput").addEventListener("input", (e) => { query = e.target.value; renderMenu(); });
document.addEventListener("click", (e) => {
  const v = e.target.closest("[data-view]");
  if (v) openModal(Number(v.dataset.view));
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

// ເມນູມືຖື
const navToggle = $("#navToggle"), nav = $("#mainNav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });

/* ===== 6. Init ===== */
renderFilters();
renderMenu();
featured.innerHTML = MENU.filter((m) => m.badge === "ເມນູແນະນຳ").map(cardHTML).join("");