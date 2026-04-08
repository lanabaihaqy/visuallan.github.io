const customBrandBadge = (label, bg = '#eef3ff', fg = '#4a72f5') => `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'><rect width='96' height='96' rx='28' fill='${bg}'/><text x='48' y='54' text-anchor='middle' font-family='Inter,Arial,sans-serif' font-size='28' font-weight='800' fill='${fg}'>${label}</text></svg>`)}`;

const products = [
  {
    id: 1,
    category: 'AI Premium',
    brand: 'ChatGPT',
    logo: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128',
    fallback: 'GPT',
    tag: 'AI',
    name: 'ChatGPT Business • 1 bulan',
    shortDesc: 'Akses AI kolaboratif untuk kerja, riset, dan produktivitas harian.',
    desc: 'Paket ChatGPT Business cocok untuk kebutuhan kerja atau tim kecil dengan alur pembelian yang ringkas dan hasil order yang rapi.',
    price: 85000,
    sold: 214,
    stock: 16,
    terms: ['Pastikan email aktif untuk menerima detail order.', 'Jangan ubah data akun tanpa instruksi.', 'Garansi mengikuti masa aktif paket.'],
  },
  {
    id: 2,
    category: 'AI Premium',
    brand: 'Grok',
    logo: 'https://www.google.com/s2/favicons?domain=x.ai&sz=128',
    fallback: 'GROK',
    tag: 'AI',
    name: 'SuperGrok Heavy • 1 bulan',
    shortDesc: 'Untuk kebutuhan AI yang lebih intens dan respons cepat.',
    desc: 'Paket SuperGrok Heavy untuk pengguna yang butuh akses AI premium dengan tampilan order yang bersih dan mudah dicek.',
    price: 99000,
    sold: 97,
    stock: 9,
    terms: ['Gunakan sesuai perangkat yang disarankan.', 'Dilarang share akun di luar ketentuan.', 'Garansi mengikuti masa aktif yang tercantum.'],
  },
  {
    id: 3,
    category: 'AI Premium',
    brand: 'Gemini',
    logo: 'https://www.google.com/s2/favicons?domain=gemini.google.com&sz=128',
    fallback: 'GEM',
    tag: 'AI',
    name: 'Gemini Advanced • 1 bulan',
    shortDesc: 'Akses Gemini premium untuk asistensi dan produktivitas.',
    desc: 'Gemini Advanced dengan tampilan order yang ringkas, cocok untuk pengguna yang ingin proses beli cepat dan jelas.',
    price: 69000,
    sold: 131,
    stock: 14,
    terms: ['Pastikan akun utama sesuai region yang didukung.', 'Gunakan email aktif saat checkout.', 'Tidak menerima refund setelah akun dikirim.'],
  },
  {
    id: 4,
    category: 'Streaming & Musik',
    brand: 'Netflix',
    logo: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=128',
    fallback: 'NFX',
    tag: 'Streaming',
    name: 'Netflix Premium • 1 profil',
    shortDesc: 'Pilihan populer untuk film, series, dan tontonan keluarga.',
    desc: 'Netflix Premium 1 profil dengan setup rapi dan order detail yang langsung tampil setelah pembayaran.',
    price: 32000,
    sold: 928,
    stock: 26,
    terms: ['Gunakan sesuai profil yang diberikan.', 'Jangan ganti email atau password.', 'Garansi mengikuti masa aktif paket.'],
  },
  {
    id: 5,
    category: 'Streaming & Musik',
    brand: 'Viu',
    logo: 'https://www.google.com/s2/favicons?domain=viu.com&sz=128',
    fallback: 'VIU',
    tag: 'Streaming',
    name: 'Viu Premium • 3 bulan',
    shortDesc: 'Paket hemat untuk penggemar drama dan serial Asia.',
    desc: 'Viu Premium dengan alur order cepat dan tampilan produk yang clean untuk pembelian dari HP.',
    price: 14000,
    sold: 351,
    stock: 39,
    terms: ['Masa aktif mengikuti paket yang dibeli.', 'Gunakan pada perangkat pribadi.', 'Jangan bagikan akun ke terlalu banyak perangkat.'],
  },
  {
    id: 6,
    category: 'Streaming & Musik',
    brand: 'Vidio',
    logo: 'https://www.google.com/s2/favicons?domain=vidio.com&sz=128',
    fallback: 'VID',
    tag: 'Streaming',
    name: 'Vidio Platinum • 1 bulan',
    shortDesc: 'Untuk nonton film, sport, dan series lokal dengan setup cepat.',
    desc: 'Vidio Platinum cocok untuk pengguna yang ingin pembelian ringan tanpa proses yang ribet.',
    price: 17000,
    sold: 239,
    stock: 24,
    terms: ['Masa aktif mengikuti durasi paket.', 'Tidak disarankan mengganti password.', 'Gunakan sesuai perangkat pribadi.'],
  },
  {
    id: 7,
    category: 'Streaming & Musik',
    brand: 'Disney',
    logo: 'https://www.google.com/s2/favicons?domain=disneyplus.com&sz=128',
    fallback: 'DIS',
    tag: 'Streaming',
    name: 'Disney+ Hotstar • 1 tahun',
    shortDesc: 'Akses hiburan keluarga dengan durasi aktif lebih panjang.',
    desc: 'Disney+ Hotstar untuk pengguna yang ingin sekali beli lalu langsung menikmati akses lebih lama.',
    price: 46000,
    sold: 487,
    stock: 20,
    terms: ['Cek region akun sebelum order.', 'Masa aktif dihitung sejak akun diterima.', 'Garansi sesuai deskripsi produk.'],
  },
  {
    id: 8,
    category: 'Streaming & Musik',
    brand: 'Prime Video',
    logo: 'https://www.google.com/s2/favicons?domain=primevideo.com&sz=128',
    fallback: 'PRM',
    tag: 'Streaming',
    name: 'Amazon Prime Video • 1 bulan',
    shortDesc: 'Pilihan film dan series internasional dengan setup singkat.',
    desc: 'Akses Prime Video dengan format order yang sederhana dan nyaman dibuka di mobile.',
    price: 22000,
    sold: 103,
    stock: 15,
    terms: ['Pastikan region akun sesuai.', 'Gunakan akun pada perangkat pribadi.', 'Tidak menerima refund setelah akun dikirim.'],
  },
  {
    id: 9,
    category: 'Streaming & Musik',
    brand: 'Bstation',
    logo: 'https://www.google.com/s2/favicons?domain=bstation.com&sz=128',
    fallback: 'BST',
    tag: 'Streaming',
    name: 'Bstation Premium • 1 bulan',
    shortDesc: 'Untuk anime dan video populer dengan aktivasi ringan.',
    desc: 'Bstation Premium dengan alur beli yang cepat dan tampilan order yang rapi.',
    price: 15000,
    sold: 86,
    stock: 18,
    terms: ['Akses mengikuti paket aktif.', 'Gunakan secara wajar pada perangkat yang diizinkan.', 'Garansi mengikuti masa aktif.'],
  },
  {
    id: 10,
    category: 'Streaming & Musik',
    brand: 'HBO Max',
    logo: 'https://www.google.com/s2/favicons?domain=max.com&sz=128',
    fallback: 'MAX',
    tag: 'Streaming',
    name: 'HBO Max • 1 bulan',
    shortDesc: 'Series dan film premium dalam satu paket yang simpel.',
    desc: 'HBO Max cocok untuk pengguna yang ingin pembelian cepat dengan detail order langsung terbaca.',
    price: 28000,
    sold: 74,
    stock: 11,
    terms: ['Cek kompatibilitas region.', 'Gunakan pada perangkat pribadi.', 'Jangan ubah data akun.'],
  },
  {
    id: 11,
    category: 'Streaming & Musik',
    brand: 'iQIYI',
    logo: 'https://www.google.com/s2/favicons?domain=iq.com&sz=128',
    fallback: 'IQ',
    tag: 'Streaming',
    name: 'iQIYI Premium • 3 bulan',
    shortDesc: 'Cocok untuk drama Asia, anime, dan variety show.',
    desc: 'Paket iQIYI dengan durasi lebih panjang dan checkout yang tetap ringan di HP.',
    price: 18000,
    sold: 142,
    stock: 22,
    terms: ['Paket mengikuti masa aktif yang dibeli.', 'Jangan share akun di luar batas wajar.', 'Garansi sesuai keterangan produk.'],
  },
  {
    id: 12,
    category: 'Streaming & Musik',
    brand: 'WeTV',
    logo: 'https://www.google.com/s2/favicons?domain=wetv.vip&sz=128',
    fallback: 'WTV',
    tag: 'Streaming',
    name: 'WeTV VIP • 3 bulan',
    shortDesc: 'Akses drama dan series Asia dengan pembelian simpel.',
    desc: 'WeTV VIP untuk pengguna yang butuh proses cepat, tanpa penjelasan panjang, dan langsung ke hasil.',
    price: 17000,
    sold: 128,
    stock: 19,
    terms: ['Gunakan sesuai ketentuan perangkat.', 'Masa aktif mengikuti paket.', 'Garansi sesuai deskripsi.'],
  },
  {
    id: 13,
    category: 'Streaming & Musik',
    brand: 'Spotify',
    logo: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=128',
    fallback: 'SPF',
    tag: 'Musik',
    name: 'Spotify Premium • 1 bulan',
    shortDesc: 'Streaming musik tanpa iklan dengan alur order cepat.',
    desc: 'Spotify Premium dengan tampilan order yang clean, cocok untuk pembelian rutin yang simpel.',
    price: 22000,
    sold: 381,
    stock: 31,
    terms: ['Pastikan email aktif saat checkout.', 'Paket mengikuti durasi aktif.', 'Jangan ubah data akun tanpa instruksi.'],
  },
  {
    id: 14,
    category: 'Streaming & Musik',
    brand: 'YouTube',
    logo: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=128',
    fallback: 'YT',
    tag: 'Musik',
    name: 'YouTube Premium • 1 bulan',
    shortDesc: 'Video dan musik tanpa iklan dengan setup rapi.',
    desc: 'YouTube Premium dengan proses yang jelas dari checkout sampai detail akun tampil.',
    price: 21000,
    sold: 267,
    stock: 20,
    terms: ['Gunakan email yang valid.', 'Masa aktif sesuai paket.', 'Garansi mengikuti keterangan produk.'],
  },
  {
    id: 15,
    category: 'Streaming & Musik',
    brand: 'Apple',
    logo: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128',
    fallback: 'APL',
    tag: 'Musik',
    name: 'Apple Music • 1 bulan',
    shortDesc: 'Pilihan musik premium dengan tampilan order yang clean.',
    desc: 'Apple Music untuk pengguna yang ingin pembelian mudah dan hasil akun yang langsung siap dicek.',
    price: 25000,
    sold: 92,
    stock: 13,
    terms: ['Pastikan region akun mendukung.', 'Jangan bagikan akun di luar perangkat yang diizinkan.', 'Garansi mengikuti paket.'],
  },
  {
    id: 16,
    category: 'Lisensi Software',
    brand: 'Adobe',
    logo: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128',
    fallback: 'ADB',
    tag: 'Software',
    name: 'Adobe Creative Cloud • 1 bulan',
    shortDesc: 'Akses lisensi kreatif untuk desain, video, dan workflow harian.',
    desc: 'Paket Adobe Creative Cloud dengan tampilan produk yang rapi dan cocok untuk kebutuhan kreatif harian.',
    price: 79000,
    sold: 122,
    stock: 12,
    terms: ['Pastikan email utama aktif.', 'Tidak menerima refund setelah lisensi aktif.', 'Ikuti petunjuk aktivasi yang diberikan.'],
  },
  {
    id: 17,
    category: 'Lisensi Software',
    brand: 'Microsoft',
    logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
    fallback: 'M365',
    tag: 'Software',
    name: 'Microsoft Office 365 • 1 tahun',
    shortDesc: 'Lisensi produktivitas untuk kerja, belajar, dan kebutuhan harian.',
    desc: 'Microsoft Office 365 dengan proses pembelian yang sederhana dan hasil akun/lisensi lebih rapi.',
    price: 119000,
    sold: 311,
    stock: 12,
    terms: ['Aktivasi mengikuti instruksi yang diberikan.', 'Email utama harus aktif.', 'Tidak menerima refund setelah lisensi aktif.'],
  },
  {
    id: 18,
    category: 'Lisensi Software',
    brand: 'Windows',
    logo: 'https://www.google.com/s2/favicons?domain=windows.com&sz=128',
    fallback: 'WIN',
    tag: 'Software',
    name: 'Windows License Key',
    shortDesc: 'Key aktivasi Windows resmi untuk kebutuhan perangkat utama.',
    desc: 'Lisensi Windows dengan pengiriman detail order yang rapi dan mudah dicek setelah pembayaran.',
    price: 95000,
    sold: 154,
    stock: 40,
    terms: ['Key hanya bisa digunakan sesuai ketentuan lisensi.', 'Pastikan versi Windows cocok.', 'Tidak menerima refund jika key sudah dipakai.'],
  },
  {
    id: 19,
    category: 'Lisensi Software',
    brand: 'Canva',
    logo: 'https://www.google.com/s2/favicons?domain=canva.com&sz=128',
    fallback: 'CNV',
    tag: 'Software',
    name: 'Canva Pro • 1 bulan',
    shortDesc: 'Akses desain premium untuk presentasi, social media, dan kebutuhan kerja.',
    desc: 'Canva Pro dengan alur beli yang ringkas dan tampilan hasil order yang enak dibuka dari HP.',
    price: 20000,
    sold: 492,
    stock: 32,
    terms: ['Pastikan email aktif.', 'Jangan ubah akses utama tanpa instruksi.', 'Garansi mengikuti masa aktif paket.'],
  },
  {
    id: 20,
    category: 'Lisensi Software',
    brand: 'CapCut',
    logo: 'https://www.google.com/s2/favicons?domain=capcut.com&sz=128',
    fallback: 'CAP',
    tag: 'Software',
    name: 'CapCut Pro • 1 bulan',
    shortDesc: 'Untuk editing video cepat dengan fitur premium yang lebih lengkap.',
    desc: 'CapCut Pro cocok untuk creator yang ingin proses beli cepat dan akun langsung siap dipakai.',
    price: 18000,
    sold: 241,
    stock: 28,
    terms: ['Masa aktif mengikuti paket.', 'Gunakan secara wajar pada perangkat pribadi.', 'Garansi sesuai deskripsi produk.'],
  },
  {
    id: 21,
    category: 'Lisensi Software',
    brand: 'Picsart',
    logo: 'https://www.google.com/s2/favicons?domain=picsart.com&sz=128',
    fallback: 'PIC',
    tag: 'Software',
    name: 'Picsart Gold • 1 bulan',
    shortDesc: 'Edit foto dan konten visual dengan fitur premium yang praktis.',
    desc: 'Picsart Gold dengan proses beli yang ringan dan detail akun lebih jelas setelah pembayaran selesai.',
    price: 17000,
    sold: 104,
    stock: 16,
    terms: ['Gunakan sesuai perangkat yang diperbolehkan.', 'Masa aktif sesuai paket.', 'Garansi mengikuti deskripsi.'],
  },
  {
    id: 22,
    category: 'Lisensi Software',
    brand: 'Getcontact',
    logo: 'https://www.google.com/s2/favicons?domain=getcontact.com&sz=128',
    fallback: 'GC',
    tag: 'Software',
    name: 'Getcontact Premium • 1 bulan',
    shortDesc: 'Akses premium untuk kebutuhan identifikasi nomor dan proteksi.',
    desc: 'Getcontact Premium dengan alur order cepat dan cocok untuk pembelian singkat tanpa login rumit.',
    price: 24000,
    sold: 167,
    stock: 18,
    terms: ['Gunakan nomor aktif saat checkout.', 'Masa aktif sesuai paket.', 'Ikuti ketentuan penggunaan aplikasi resmi.'],
  },
  {
    id: 23,
    category: 'Lisensi Software',
    brand: 'Zoom',
    logo: 'https://www.google.com/s2/favicons?domain=zoom.us&sz=128',
    fallback: 'ZM',
    tag: 'Software',
    name: 'Zoom Pro • 1 bulan',
    shortDesc: 'Meeting online lebih nyaman dengan fitur premium.',
    desc: 'Zoom Pro untuk kebutuhan meeting, kelas, atau webinar dengan pembelian yang tetap rapi dan simpel.',
    price: 49000,
    sold: 91,
    stock: 11,
    terms: ['Pastikan email aktif.', 'Aktivasi mengikuti instruksi.', 'Tidak menerima refund setelah aktif.'],
  },
  {
    id: 24,
    category: 'VPN',
    brand: 'NordVPN',
    logo: 'https://www.google.com/s2/favicons?domain=nordvpn.com&sz=128',
    fallback: 'NRD',
    tag: 'VPN',
    name: 'NordVPN • 1 tahun',
    shortDesc: 'Koneksi aman dan lebih privat untuk penggunaan harian.',
    desc: 'NordVPN satu tahun dengan detail order yang tersusun rapi setelah pembayaran berhasil.',
    price: 99000,
    sold: 74,
    stock: 9,
    terms: ['Gunakan sesuai jumlah perangkat yang diizinkan.', 'Jangan ubah data akun utama.', 'Garansi sesuai deskripsi produk.'],
  },
  {
    id: 25,
    category: 'VPN',
    brand: 'HMA',
    logo: 'https://www.google.com/s2/favicons?domain=hidemyass.com&sz=128',
    fallback: 'HMA',
    tag: 'VPN',
    name: 'HMA VPN • 1 tahun',
    shortDesc: 'Alternatif VPN premium dengan setup ringan dan praktis.',
    desc: 'HMA VPN cocok untuk pengguna yang ingin akses VPN premium dengan alur pembelian yang simpel.',
    price: 79000,
    sold: 52,
    stock: 8,
    terms: ['Gunakan sesuai jumlah device yang diizinkan.', 'Masa aktif sesuai paket.', 'Garansi mengikuti deskripsi.'],
  },
  {
    id: 26,
    category: 'VPN',
    brand: 'ExpressVPN',
    logo: 'https://www.google.com/s2/favicons?domain=expressvpn.com&sz=128',
    fallback: 'EXP',
    tag: 'VPN',
    name: 'ExpressVPN • 1 tahun',
    shortDesc: 'Pilihan cepat untuk privasi, streaming, dan koneksi yang stabil.',
    desc: 'ExpressVPN dengan tampilan produk yang clean dan detail order yang mudah dicek.',
    price: 109000,
    sold: 47,
    stock: 7,
    terms: ['Gunakan sesuai batas perangkat.', 'Jangan ubah data akun utama.', 'Garansi mengikuti deskripsi produk.'],
  },
  {
    id: 27,
    category: 'VPN',
    brand: 'Surfshark',
    logo: 'https://www.google.com/s2/favicons?domain=surfshark.com&sz=128',
    fallback: 'SRF',
    tag: 'VPN',
    name: 'Surfshark • 1 tahun',
    shortDesc: 'VPN premium yang fleksibel untuk banyak perangkat.',
    desc: 'Surfshark cocok untuk pengguna yang mencari paket VPN dengan pembelian singkat dan hasil order yang rapi.',
    price: 89000,
    sold: 58,
    stock: 10,
    terms: ['Gunakan sesuai ketentuan layanan.', 'Masa aktif sesuai paket.', 'Garansi mengikuti deskripsi produk.'],
  },
  {
    id: 28,
    category: 'Kopi',
    brand: 'Kopi Kenangan',
    logo: 'https://kopikenangan.com/favicon.ico',
    fallback: 'KK',
    tag: 'Kopi',
    name: 'Voucher Kopi Kenangan',
    shortDesc: 'Voucher digital untuk kebutuhan harian atau gift sederhana.',
    desc: 'Voucher Kopi Kenangan dengan card clean dan proses order yang ringan untuk pembelian cepat.',
    price: 1500,
    sold: 36741,
    stock: 88,
    terms: ['Voucher dikirim sesuai nominal paket.', 'Pastikan aplikasi mendukung redeem.', 'Kode voucher tidak dapat dikembalikan setelah dikirim.'],
  },
  {
    id: 29,
    category: 'Kopi',
    brand: 'Tomoro Coffee',
    logo: 'https://www.tomoro-coffee.id/favicon.ico',
    fallback: 'TMR',
    tag: 'Kopi',
    name: 'Voucher Tomoro Coffee',
    shortDesc: 'Voucher kopi digital dengan format order yang singkat.',
    desc: 'Voucher Tomoro Coffee untuk pembelian cepat, hadiah, atau repeat order harian.',
    price: 1500,
    sold: 4659,
    stock: 42,
    terms: ['Voucher dikirim dalam bentuk digital.', 'Gunakan sesuai syarat aplikasi resmi.', 'Kode tidak dapat direfund setelah terkirim.'],
  },
  {
    id: 30,
    category: 'Kopi',
    brand: 'Fore Coffee',
    logo: 'https://fore.coffee/favicon.ico',
    fallback: 'FOR',
    tag: 'Kopi',
    name: 'Voucher Fore Coffee',
    shortDesc: 'Pilihan voucher kopi praktis untuk kebutuhan personal atau gift.',
    desc: 'Voucher Fore Coffee dengan alur order yang cepat dan detail order mudah dicek.',
    price: 1500,
    sold: 2914,
    stock: 34,
    terms: ['Gunakan sesuai ketentuan redeem.', 'Kode bersifat rahasia.', 'Tidak bisa direfund setelah dikirim.'],
  },
  {
    id: 31,
    category: 'Kopi',
    brand: 'Bulk Order',
    logo: customBrandBadge('BULK', '#eef3ff', '#4a72f5'),
    fallback: 'BULK',
    tag: 'By request',
    name: 'Bulk Order Perkopian',
    shortDesc: 'Khusus by request untuk event, campaign, gifting, atau repeat order.',
    desc: 'Untuk bulk order perkopian, silakan chat admin terlebih dahulu agar kebutuhan nominal, jumlah, dan timeline bisa disesuaikan.',
    price: null,
    sold: 208,
    stock: 999,
    terms: ['Khusus chat admin terlebih dahulu.', 'Harga menyesuaikan jumlah order.', 'Estimasi pengiriman mengikuti kebutuhan proyek.'],
    action: 'chat',
  },
  {
    id: 32,
    category: 'Voucher',
    brand: 'Grab',
    logo: 'https://www.google.com/s2/favicons?domain=grab.com&sz=128',
    fallback: 'GRB',
    tag: 'Voucher',
    name: 'Voucher Grab',
    shortDesc: 'Voucher digital untuk transportasi, makanan, dan kebutuhan harian.',
    desc: 'Voucher Grab dengan format order yang praktis dan cocok untuk pembelian cepat.',
    price: 10500,
    sold: 133,
    stock: 50,
    terms: ['Kode voucher bersifat rahasia.', 'Pastikan akun mendukung redeem.', 'Voucher tidak dapat dikembalikan setelah dikirim.'],
  },
  {
    id: 33,
    category: 'Voucher',
    brand: 'Steam',
    logo: 'https://www.google.com/s2/favicons?domain=steampowered.com&sz=128',
    fallback: 'STM',
    tag: 'Voucher',
    name: 'Voucher Steam 60K',
    shortDesc: 'Voucher digital untuk top up game dan kebutuhan hiburan digital.',
    desc: 'Voucher Steam dengan tampilan card yang clean dan cocok untuk pembelian cepat tanpa penjelasan panjang.',
    price: 62000,
    sold: 523,
    stock: 33,
    terms: ['Kode voucher bersifat rahasia.', 'Pastikan region akun mendukung.', 'Voucher tidak dapat dikembalikan setelah dikirim.'],
  }
];

const categories = ['Semua', 'AI Premium', 'Streaming & Musik', 'Lisensi Software', 'VPN', 'Kopi', 'Voucher'];

const state = {
  activeCategory: 'Semua',
  activeProduct: products[0],
  currentStep: 1,
  orderId: 'VCH-000000',
  countdown: 900,
  countdownInterval: null,
  paymentInterval: null,
  paymentTick: 0,
  autoPaidAfter: 3,
};

const categoryToolbar = document.getElementById('categoryToolbar');
const productGrid = document.getElementById('productGrid');
const detailBuyButton = document.getElementById('detailBuyButton');
const checkoutForm = document.getElementById('checkoutForm');
const manualCheckBtn = document.getElementById('manualCheckBtn');
const markPaidBtn = document.getElementById('markPaidBtn');
const resetDemoBtn = document.getElementById('resetDemoBtn');
const toggleOrderDetailBtn = document.getElementById('toggleOrderDetailBtn');
const orderDetailCard = document.getElementById('orderDetailCard');
const heroOpenCheckout = document.getElementById('heroOpenCheckout');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');

function formatRupiah(value) {
  if (value == null) return 'By request';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCountdown(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const seconds = Math.max(0, totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const dialog = modal.querySelector('.modal-dialog');
  const body = modal.querySelector('.modal-body');
  if (dialog) dialog.scrollTop = 0;
  if (body) body.scrollTop = 0;
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.modal.is-open')) {
    document.body.classList.remove('modal-open');
  }
}

function setStep(step) {
  state.currentStep = step;
  document.querySelectorAll('[data-step-panel]').forEach((panel) => {
    panel.classList.toggle('is-visible', Number(panel.dataset.stepPanel) === step);
  });
  document.querySelectorAll('[data-step-chip]').forEach((chip) => {
    chip.classList.toggle('is-active', Number(chip.dataset.stepChip) <= step);
  });
}

function paintLogo(imgEl, fallbackEl, logo, fallbackText, altText) {
  if (!imgEl || !fallbackEl) return;
  if (logo) {
    imgEl.src = logo;
    imgEl.alt = altText;
    imgEl.style.display = 'block';
    fallbackEl.style.display = 'none';
    imgEl.onerror = () => {
      imgEl.style.display = 'none';
      fallbackEl.textContent = fallbackText;
      fallbackEl.style.display = 'grid';
    };
  } else {
    imgEl.removeAttribute('src');
    imgEl.style.display = 'none';
    fallbackEl.textContent = fallbackText;
    fallbackEl.style.display = 'grid';
  }
}

function renderCategories() {
  categoryToolbar.innerHTML = '';
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `category-chip ${state.activeCategory === category ? 'is-active' : ''}`;
    button.textContent = category;
    button.addEventListener('click', () => {
      state.activeCategory = category;
      renderCategories();
      renderProducts();
    });
    categoryToolbar.appendChild(button);
  });
}

function renderProducts() {
  productGrid.innerHTML = '';
  const filtered = state.activeCategory === 'Semua'
    ? products
    : products.filter((item) => item.category === state.activeCategory);

  filtered.forEach((product) => {
    const article = document.createElement('article');
    article.className = 'product-card';
    const buyLabel = product.action === 'chat' ? 'Chat admin' : 'Beli';
    article.innerHTML = `
      <div class="product-top">
        <span class="product-group-badge">${product.category}</span>
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-visual">
        <div class="brand-badge">
          <img class="product-logo" alt="${product.brand}" />
          <span class="logo-fallback">${product.fallback}</span>
        </div>
        <div class="product-title-wrap">
          <h3>${product.name}</h3>
          <small>${product.shortDesc}</small>
        </div>
      </div>
      <p class="product-desc">${product.desc}</p>
      <div class="product-meta">
        <article>
          <small>Terjual</small>
          <strong>${product.sold}+</strong>
        </article>
        <article>
          <small>Stok</small>
          <strong>${product.stock}</strong>
        </article>
      </div>
      <div class="product-footer">
        <div>
          <small>Mulai dari</small>
          <strong class="product-price">${formatRupiah(product.price)}</strong>
        </div>
        <div class="product-footer-actions">
          <button type="button" class="btn btn-secondary btn-detail">Detail</button>
          <button type="button" class="btn btn-primary btn-buy">${buyLabel}</button>
        </div>
      </div>
    `;
    const logo = article.querySelector('.product-logo');
    const fallback = article.querySelector('.logo-fallback');
    paintLogo(logo, fallback, product.logo, product.fallback, product.brand);

    article.querySelector('.btn-detail').addEventListener('click', () => openDetail(product.id));
    article.querySelector('.btn-buy').addEventListener('click', () => handleBuy(product.id));
    productGrid.appendChild(article);
  });
}

function renderDetail(product) {
  document.getElementById('detailName').textContent = product.name;
  document.getElementById('detailDesc').textContent = product.shortDesc;
  document.getElementById('detailPrice').textContent = formatRupiah(product.price);
  document.getElementById('detailSold').textContent = `${product.sold}+ item`;
  document.getElementById('detailStock').textContent = `${product.stock} tersedia`;
  document.getElementById('detailCategory').textContent = product.category;
  document.getElementById('detailLongDesc').textContent = product.desc;

  const termsList = document.getElementById('detailTerms');
  termsList.innerHTML = '';
  product.terms.forEach((term) => {
    const li = document.createElement('li');
    li.textContent = term;
    termsList.appendChild(li);
  });

  const buyLabel = product.action === 'chat' ? 'Chat admin' : 'Beli produk ini';
  detailBuyButton.textContent = buyLabel;

  paintLogo(
    document.getElementById('detailLogo'),
    document.getElementById('detailLogoFallback'),
    product.logo,
    product.fallback,
    product.brand
  );
}

function syncProductToCheckout(product) {
  document.getElementById('checkoutProductTitle').textContent = product.name;
  document.getElementById('checkoutProductPrice').textContent = formatRupiah(product.price);
  document.getElementById('amountValue').textContent = formatRupiah(product.price);
  document.getElementById('successProductName').textContent = product.name;
  document.getElementById('successAmount').textContent = formatRupiah(product.price);
  document.getElementById('detailOrderProduct').textContent = product.name;
}

function selectProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  state.activeProduct = product;
  renderDetail(product);
  syncProductToCheckout(product);
}

function openDetail(productId) {
  selectProduct(productId);
  openModal('detailModal');
}

function openCheckout(productId = state.activeProduct.id) {
  selectProduct(productId);
  resetCheckoutState(false);
  openModal('checkoutModal');
}

function handleBuy(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  selectProduct(productId);
  if (product.action === 'chat') {
    window.open('https://t.me/vichizstorecs_bot', '_blank', 'noopener,noreferrer');
    return;
  }
  closeModal('detailModal');
  openCheckout(productId);
}

function generateOrderId() {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `VCH-${random}`;
}

function populateBuyer(formData) {
  document.getElementById('detailBuyerEmail').textContent = formData.email;
}

function buildAccountData() {
  const slug = slugify(state.activeProduct.brand || state.activeProduct.name).slice(0, 14);
  document.getElementById('accountEmailValue').textContent = `${slug}@vichiz-order.com`;
  document.getElementById('accountPasswordValue').textContent = `VCZ-${state.orderId.slice(-4)}-${String(state.activeProduct.id).padStart(2, '0')}`;
}

function updatePaymentStatus(text, tone = 'pending', note = 'Sistem cek otomatis') {
  const badge = document.getElementById('paymentStatusText');
  badge.textContent = text;
  badge.className = `status-badge ${tone}`;
  document.getElementById('paymentStatusNote').textContent = note;
}

function clearIntervals() {
  if (state.countdownInterval) clearInterval(state.countdownInterval);
  if (state.paymentInterval) clearInterval(state.paymentInterval);
  state.countdownInterval = null;
  state.paymentInterval = null;
}

function startCountdown() {
  clearInterval(state.countdownInterval);
  state.countdown = 15 * 60;
  document.getElementById('countdownValue').textContent = formatCountdown(state.countdown);
  state.countdownInterval = setInterval(() => {
    state.countdown -= 1;
    document.getElementById('countdownValue').textContent = formatCountdown(state.countdown);
    if (state.countdown <= 0) {
      clearInterval(state.countdownInterval);
      updatePaymentStatus('Waktu habis', 'pending', 'Buat order ulang jika pembayaran belum masuk');
    }
  }, 1000);
}

function showSuccessState() {
  clearIntervals();
  setStep(3);
  updatePaymentStatus('Pembayaran berhasil', 'success', 'Order siap ditampilkan');
  const progress = document.getElementById('statusBarAnimated');
  progress.style.animation = 'none';
  progress.style.width = '100%';
  progress.style.background = 'linear-gradient(90deg, #19a974, #59c7c7)';
  document.getElementById('successOrderId').textContent = state.orderId;
  buildAccountData();
}

function startPaymentPolling() {
  clearInterval(state.paymentInterval);
  state.paymentTick = 0;
  state.autoPaidAfter = 3 + Math.floor(Math.random() * 2);
  updatePaymentStatus('Menunggu pembayaran', 'pending', 'QR aktif dan status akan dicek berkala');
  state.paymentInterval = setInterval(() => {
    state.paymentTick += 1;
    if (state.paymentTick < state.autoPaidAfter) {
      updatePaymentStatus('Menunggu konfirmasi', 'pending', `Pengecekan otomatis ke-${state.paymentTick}`);
      return;
    }
    showSuccessState();
  }, 4000);
}

function resetCheckoutState(resetForm = true) {
  clearIntervals();
  setStep(1);
  state.orderId = 'VCH-000000';
  updatePaymentStatus('Menunggu pembayaran', 'pending', 'Sistem cek otomatis');
  document.getElementById('orderIdValue').textContent = 'VCH-000000';
  document.getElementById('successOrderId').textContent = 'VCH-000000';
  document.getElementById('countdownValue').textContent = '15:00';
  const progress = document.getElementById('statusBarAnimated');
  progress.style.animation = '';
  progress.style.width = '';
  progress.style.background = '';
  orderDetailCard.hidden = true;
  toggleOrderDetailBtn.textContent = 'Lihat order detail';
  if (resetForm) checkoutForm.reset();
}

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(checkoutForm));
  state.orderId = generateOrderId();
  document.getElementById('orderIdValue').textContent = state.orderId;
  document.getElementById('successOrderId').textContent = state.orderId;
  populateBuyer(formData);
  setStep(2);
  startCountdown();
  startPaymentPolling();
});

manualCheckBtn.addEventListener('click', () => {
  if (state.currentStep !== 2) return;
  state.paymentTick += 1;
  if (state.paymentTick >= state.autoPaidAfter) {
    showSuccessState();
  } else {
    updatePaymentStatus('Masih pending', 'pending', `Belum ada pembayaran masuk. Cek berikutnya ke-${state.paymentTick}`);
  }
});

markPaidBtn.addEventListener('click', showSuccessState);

resetDemoBtn.addEventListener('click', () => {
  resetCheckoutState(true);
  setStep(1);
});

detailBuyButton.addEventListener('click', () => handleBuy(state.activeProduct.id));

toggleOrderDetailBtn.addEventListener('click', () => {
  const isHidden = orderDetailCard.hidden;
  orderDetailCard.hidden = !isHidden ? true : false;
  toggleOrderDetailBtn.textContent = isHidden ? 'Sembunyikan order detail' : 'Lihat order detail';
});

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = 'Copied';
      button.classList.add('is-copied');
      setTimeout(() => {
        button.textContent = 'Copy';
        button.classList.remove('is-copied');
      }, 1200);
    } catch {
      button.textContent = 'Gagal';
      setTimeout(() => { button.textContent = 'Copy'; }, 1200);
    }
  });
});

document.querySelectorAll('[data-close-modal]').forEach((trigger) => {
  trigger.addEventListener('click', () => closeModal(trigger.dataset.closeModal));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal.is-open').forEach((modal) => {
      closeModal(modal.id);
    });
  }
});

heroOpenCheckout.addEventListener('click', () => openCheckout(state.activeProduct.id));
checkoutCloseBtn.addEventListener('click', () => closeModal('checkoutModal'));

document.getElementById('closeTelegramPopup').addEventListener('click', () => {
  document.getElementById('telegramPopup').style.display = 'none';
});

renderCategories();
renderProducts();
selectProduct(state.activeProduct.id);
resetCheckoutState(true);
