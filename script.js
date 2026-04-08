const products = [
  {
    id: 1,
    group: 'Akses AI',
    name: 'ChatGPT Team • 1 bulan',
    desc: 'Akses untuk kebutuhan kerja, riset, dan produktivitas dengan aktivasi cepat setelah pembayaran terverifikasi.',
    price: 55000,
    sold: 170,
    stock: 18,
    tag: 'Best seller',
    icon: '✦',
    terms: 'Akun hanya untuk penggunaan pribadi, dilarang mengubah email pemulihan, dan garansi berlaku selama masa aktif.'
  },
  {
    id: 2,
    group: 'Akun Premium',
    name: 'Canva Pro • 12 bulan',
    desc: 'Cocok untuk desain harian, kebutuhan usaha, presentasi, dan konten sosial media.',
    price: 85000,
    sold: 463,
    stock: 16,
    tag: 'Creative',
    icon: '◌',
    terms: 'Harap tidak mengubah data akun utama. Garansi berlaku untuk kendala login non-user error.'
  },
  {
    id: 3,
    group: 'Akun Premium',
    name: 'Spotify Premium • 3 bulan',
    desc: 'Paket hiburan digital dengan alur pembelian ringkas dan info produk yang tetap jelas.',
    price: 18000,
    sold: 136,
    stock: 50,
    tag: 'Santai',
    icon: '♫',
    terms: 'Berlaku sesuai masa aktif. Setelah akun dikirim, mohon segera dicek dan jangan dibagikan ke pihak lain.'
  },
  {
    id: 4,
    group: 'Lisensi Software',
    name: 'Microsoft 365 Family',
    desc: 'Untuk pengguna yang butuh produktivitas harian dengan alur pembelian yang lebih rapi.',
    price: 119000,
    sold: 311,
    stock: 12,
    tag: 'Office ready',
    icon: '◧',
    terms: 'Lisensi dikirim setelah pembayaran sukses. Garansi aktivasi hanya untuk perangkat yang sesuai syarat.'
  },
  {
    id: 5,
    group: 'Voucher & Top Up',
    name: 'Voucher Steam 60K',
    desc: 'Voucher digital dengan tampilan card yang clean dan mudah dipindai.',
    price: 62000,
    sold: 523,
    stock: 33,
    tag: 'Top up',
    icon: '◎',
    terms: 'Kode voucher bersifat final setelah terkirim. Pastikan region akun sesuai sebelum redeem.'
  },
  {
    id: 6,
    group: 'VPN',
    name: 'NordVPN • 1 tahun',
    desc: 'Untuk kebutuhan privasi dan koneksi aman dengan penyajian produk yang lebih premium.',
    price: 99000,
    sold: 74,
    stock: 9,
    tag: 'Security',
    icon: '⟐',
    terms: 'Akun hanya untuk pemakaian wajar. Perubahan password tanpa izin menghanguskan garansi.'
  },
  {
    id: 7,
    group: 'Perkopian',
    name: 'Bulk Order Voucher Kopi',
    desc: 'Cocok untuk corporate gifting, campaign activation, atau repeat order.',
    price: 50000,
    sold: 208,
    stock: 100,
    tag: 'Bulk order',
    icon: '☕',
    terms: 'Nominal dan format voucher mengikuti kesepakatan awal. Pengiriman disesuaikan kebutuhan campaign.'
  },
  {
    id: 8,
    group: 'Akun Premium',
    name: 'YouTube Premium • 2 bulan',
    desc: 'Produk ringan untuk pengunjung yang suka proses cepat dengan informasi yang tidak bertele-tele.',
    price: 21000,
    sold: 267,
    stock: 21,
    tag: 'Hiburan',
    icon: '▶',
    terms: 'Akun dikirim setelah pembayaran tervalidasi. Mohon tidak mengubah sandi dan recovery akun.'
  },
  {
    id: 9,
    group: 'Streaming',
    name: 'Netflix Premium • 1 profil',
    desc: 'Akses streaming dengan tampilan informasi yang jelas dan langsung siap checkout.',
    price: 32000,
    sold: 412,
    stock: 20,
    tag: 'Streaming',
    icon: 'N',
    terms: 'Hanya untuk 1 profil sesuai aturan paket. Jangan ubah password dan jangan logout semua device.'
  },
  {
    id: 10,
    group: 'Streaming',
    name: 'Disney+ Hotstar • 1 bulan',
    desc: 'Pilihan untuk pelanggan yang mencari akses hiburan keluarga dengan proses ringan.',
    price: 19000,
    sold: 288,
    stock: 24,
    tag: 'Family',
    icon: 'D',
    terms: 'Masa aktif mengikuti paket. Klaim garansi hanya berlaku untuk kendala dari sisi akun.'
  },
  {
    id: 11,
    group: 'Streaming',
    name: 'Viu Premium • 3 bulan',
    desc: 'Paket hemat untuk penggemar drama dan serial Asia dengan proses pembelian instan.',
    price: 14000,
    sold: 97,
    stock: 40,
    tag: 'Drama',
    icon: 'V',
    terms: 'Akun atau voucher hanya untuk penggunaan pribadi. Dilarang menjual ulang akses yang diterima.'
  },
  {
    id: 12,
    group: 'Streaming',
    name: 'Vidio Platinum • 1 bulan',
    desc: 'Untuk pelanggan yang ingin nonton olahraga dan hiburan lokal tanpa ribet.',
    price: 24000,
    sold: 154,
    stock: 26,
    tag: 'Sport',
    icon: '●',
    terms: 'Konten mengikuti kebijakan platform resmi. Garansi hanya untuk kendala akun yang dikirimkan.'
  }
];

const catalogGroups = ['Semua', ...new Set(products.map((product) => product.group))];

const state = {
  activeGroup: 'Semua',
  activeProduct: products[0],
  currentStep: 1,
  orderId: '',
  amount: products[0].price,
  paymentInterval: null,
  countdownInterval: null,
  countdownSeconds: 15 * 60,
  autoPaidAfter: 15,
  pollingTick: 0,
};

const categoryToolbar = document.getElementById('categoryToolbar');
const productGrid = document.getElementById('productGrid');
const productCardTemplate = document.getElementById('productCardTemplate');
const purchaseModal = document.getElementById('purchaseModal');
const previewCheckoutBtn = document.getElementById('previewCheckoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const manualCheckBtn = document.getElementById('manualCheckBtn');
const markPaidBtn = document.getElementById('markPaidBtn');
const resetDemoBtn = document.getElementById('resetDemoBtn');
const orderDetailPanel = document.getElementById('orderDetailPanel');
const toggleOrderDetailsBtn = document.getElementById('toggleOrderDetailsBtn');
const productDetailDrawer = document.getElementById('productDetailDrawer');
const drawerBuyBtn = document.getElementById('drawerBuyBtn');
const closeTelegramPopup = document.getElementById('closeTelegramPopup');
const telegramPopup = document.getElementById('telegramPopup');

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCountdown(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.max(totalSeconds % 60, 0).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function createCredentialFor(product, buyerEmail) {
  const safeName = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 10);
  return {
    email: `${safeName}@hollydemo.store`,
    password: `Holly#${product.id}${String(product.price).slice(0, 3)}${String((buyerEmail || 'demo').length).padStart(2, '0')}`,
  };
}

function renderCategories() {
  categoryToolbar.innerHTML = '';
  catalogGroups.forEach((group) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `category-chip ${group === state.activeGroup ? 'is-active' : ''}`;
    button.textContent = group;
    button.addEventListener('click', () => {
      state.activeGroup = group;
      renderCategories();
      renderProducts();
    });
    categoryToolbar.appendChild(button);
  });
}

function renderProducts() {
  productGrid.innerHTML = '';
  const filteredProducts = state.activeGroup === 'Semua'
    ? products
    : products.filter((product) => product.group === state.activeGroup);

  filteredProducts.forEach((product) => {
    const fragment = productCardTemplate.content.cloneNode(true);
    const card = fragment.querySelector('.product-card');
    fragment.querySelector('.product-category-badge').textContent = product.group;
    fragment.querySelector('.product-stock-pill').textContent = `${product.stock} stok`;
    fragment.querySelector('.product-visual-icon').textContent = product.icon;
    fragment.querySelector('.product-tag').textContent = product.tag;
    fragment.querySelector('.product-name').textContent = product.name;
    fragment.querySelector('.product-desc').textContent = product.desc;
    fragment.querySelector('.product-sold').textContent = `${product.sold}+ item`;
    fragment.querySelector('.product-price-inline').textContent = formatRupiah(product.price);

    fragment.querySelector('.btn-buy').addEventListener('click', () => openModal(product));
    fragment.querySelector('.btn-detail').addEventListener('click', () => openProductDrawer(product));
    card.addEventListener('click', (event) => {
      if (event.target.closest('button')) return;
      openProductDrawer(product);
    });

    card.style.background = product.group === 'Perkopian'
      ? 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,248,241,0.96))'
      : 'var(--surface-strong)';

    productGrid.appendChild(fragment);
  });
}

function syncProductToModal(product) {
  state.activeProduct = product;
  state.amount = product.price;
  document.getElementById('modalProductName').textContent = product.name;
  document.getElementById('modalProductDesc').textContent = product.desc;
  document.getElementById('modalProductPrice').textContent = formatRupiah(product.price);
  document.getElementById('amountValue').textContent = formatRupiah(product.price);
  document.getElementById('successAmount').textContent = formatRupiah(product.price);
  document.getElementById('successProductName').textContent = product.name;
  document.getElementById('detailProductName').textContent = product.name;
}

function openProductDrawer(product) {
  state.activeProduct = product;
  document.getElementById('drawerProductName').textContent = product.name;
  document.getElementById('drawerProductDesc').textContent = product.desc;
  document.getElementById('drawerProductGroup').textContent = product.group;
  document.getElementById('drawerProductSold').textContent = `${product.sold}+ item`;
  document.getElementById('drawerProductPrice').textContent = formatRupiah(product.price);
  document.getElementById('drawerProductTerms').textContent = product.terms;
  productDetailDrawer.classList.add('is-open');
  productDetailDrawer.setAttribute('aria-hidden', 'false');
}

function closeProductDrawer() {
  productDetailDrawer.classList.remove('is-open');
  productDetailDrawer.setAttribute('aria-hidden', 'true');
}

function openModal(product = state.activeProduct) {
  syncProductToModal(product);
  resetCheckoutState();
  purchaseModal.classList.add('is-open');
  purchaseModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  purchaseModal.classList.remove('is-open');
  purchaseModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  clearIntervals();
}

function setStep(step) {
  state.currentStep = step;
  document.querySelectorAll('[data-step-panel]').forEach((panel) => {
    panel.classList.toggle('is-visible', Number(panel.dataset.stepPanel) === step);
  });
  document.querySelectorAll('.timeline-item').forEach((item) => {
    item.classList.toggle('is-active', Number(item.dataset.step) <= step);
  });
}

function generateOrderId() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `HLY-${random}`;
}

function startCountdown() {
  clearInterval(state.countdownInterval);
  state.countdownSeconds = 15 * 60;
  document.getElementById('countdownValue').textContent = formatCountdown(state.countdownSeconds);
  state.countdownInterval = setInterval(() => {
    state.countdownSeconds -= 1;
    document.getElementById('countdownValue').textContent = formatCountdown(state.countdownSeconds);
    if (state.countdownSeconds <= 0) {
      clearInterval(state.countdownInterval);
      document.getElementById('paymentStatusText').textContent = 'Waktu pembayaran habis';
      document.getElementById('paymentStatusNote').textContent = 'Order perlu dibuat ulang jika pembayaran belum masuk.';
      const statusBar = document.getElementById('statusBarAnimated');
      statusBar.style.width = '100%';
      statusBar.style.animation = 'none';
      statusBar.style.background = 'linear-gradient(90deg, #f59e0b, #f97316)';
    }
  }, 1000);
}

function clearIntervals() {
  if (state.paymentInterval) clearInterval(state.paymentInterval);
  if (state.countdownInterval) clearInterval(state.countdownInterval);
  state.paymentInterval = null;
  state.countdownInterval = null;
}

function resetCheckoutState() {
  clearIntervals();
  setStep(1);
  state.orderId = '';
  state.pollingTick = 0;
  state.autoPaidAfter = 3 + Math.floor(Math.random() * 3);
  document.getElementById('paymentStatusText').textContent = 'Menunggu pembayaran';
  document.getElementById('paymentStatusNote').textContent = 'Sistem mengecek status secara otomatis tiap beberapa detik.';
  const statusBar = document.getElementById('statusBarAnimated');
  statusBar.style.width = '';
  statusBar.style.animation = '';
  statusBar.style.background = '';
  checkoutForm?.reset();
  document.getElementById('buyerNameValue').textContent = '-';
  document.getElementById('buyerEmailValue').textContent = '-';
  document.getElementById('buyerPhoneValue').textContent = '-';
  document.getElementById('detailBuyerEmail').textContent = '-';
  document.getElementById('orderIdValue').textContent = 'HLY-000000';
  document.getElementById('successOrderId').textContent = 'HLY-000000';
  document.getElementById('countdownValue').textContent = '14:59';
  document.getElementById('credentialEmail').textContent = 'hollydemo@mail.com';
  document.getElementById('credentialPassword').textContent = 'HollyDemo#2025';
  orderDetailPanel.hidden = true;
  toggleOrderDetailsBtn.textContent = 'Lihat order detail';
}

function populateBuyerData(formData) {
  document.getElementById('buyerNameValue').textContent = formData.name;
  document.getElementById('buyerEmailValue').textContent = formData.email;
  document.getElementById('buyerPhoneValue').textContent = formData.phone;
  document.getElementById('detailBuyerEmail').textContent = formData.email;
}

function updatePaymentStatus(text, note) {
  document.getElementById('paymentStatusText').textContent = text;
  document.getElementById('paymentStatusNote').textContent = note;
}

function showSuccessState() {
  clearIntervals();
  setStep(3);
  updatePaymentStatus('Pembayaran berhasil', 'Sistem menerima update sukses dari payment gateway.');
  const statusBar = document.getElementById('statusBarAnimated');
  statusBar.style.width = '100%';
  statusBar.style.animation = 'none';
  statusBar.style.background = 'linear-gradient(90deg, #17a673, #35c78f)';
}

function startPaymentPolling() {
  clearInterval(state.paymentInterval);
  state.pollingTick = 0;
  updatePaymentStatus('Menunggu pembayaran', 'QR sudah aktif. Sistem akan refresh status secara otomatis.');
  state.paymentInterval = setInterval(() => {
    state.pollingTick += 1;
    if (state.pollingTick < state.autoPaidAfter) {
      updatePaymentStatus(
        'Menunggu konfirmasi gateway',
        `Pengecekan otomatis ke-${state.pollingTick}. Status order masih pending.`
      );
      return;
    }
    showSuccessState();
  }, 4500);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(checkoutForm));

  if (!formData.name || !formData.email || !formData.phone) {
    return;
  }

  populateBuyerData(formData);
  const credentials = createCredentialFor(state.activeProduct, formData.email);
  document.getElementById('credentialEmail').textContent = credentials.email;
  document.getElementById('credentialPassword').textContent = credentials.password;
  state.orderId = generateOrderId();
  document.getElementById('orderIdValue').textContent = state.orderId;
  document.getElementById('successOrderId').textContent = state.orderId;
  setStep(2);
  startCountdown();
  startPaymentPolling();
}

function runManualCheck() {
  if (state.currentStep !== 2) return;
  state.pollingTick += 1;
  if (state.pollingTick >= state.autoPaidAfter) {
    showSuccessState();
    return;
  }
  updatePaymentStatus(
    'Belum terdeteksi lunas',
    'Cek manual berhasil. Transaksi masih pending, polling akan lanjut otomatis.'
  );
}

function markAsPaid() {
  if (state.currentStep !== 2) return;
  showSuccessState();
}

function toggleOrderDetails() {
  const isHidden = orderDetailPanel.hidden;
  orderDetailPanel.hidden = !isHidden;
  toggleOrderDetailsBtn.textContent = isHidden ? 'Sembunyikan order detail' : 'Lihat order detail';
}

async function copyCredential(targetId, button) {
  const text = document.getElementById(targetId)?.textContent?.trim();
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    const original = button.textContent;
    button.textContent = 'Tersalin';
    button.classList.add('copied');
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1600);
  } catch (error) {
    button.textContent = 'Gagal';
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 1600);
  }
}

renderCategories();
renderProducts();
syncProductToModal(products[0]);

previewCheckoutBtn?.addEventListener('click', (event) => {
  event.preventDefault();
  openModal(products[0]);
});
checkoutForm?.addEventListener('submit', handleFormSubmit);
manualCheckBtn?.addEventListener('click', runManualCheck);
markPaidBtn?.addEventListener('click', markAsPaid);
resetDemoBtn?.addEventListener('click', () => openModal(state.activeProduct));
toggleOrderDetailsBtn?.addEventListener('click', toggleOrderDetails);
drawerBuyBtn?.addEventListener('click', () => {
  closeProductDrawer();
  openModal(state.activeProduct);
});
closeTelegramPopup?.addEventListener('click', () => {
  telegramPopup?.remove();
});

document.querySelectorAll('[data-close-modal]').forEach((element) => {
  element.addEventListener('click', closeModal);
});

document.querySelectorAll('[data-close-drawer]').forEach((element) => {
  element.addEventListener('click', closeProductDrawer);
});

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', () => copyCredential(button.dataset.copyTarget, button));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && purchaseModal.classList.contains('is-open')) {
    closeModal();
  }
  if (event.key === 'Escape' && productDetailDrawer.classList.contains('is-open')) {
    closeProductDrawer();
  }
});
