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


const DEFAULT_API_BASE = 'https://api.visuallan.my.id';
const DEFAULT_TURNSTILE_SITEKEY = '0x4AAAAAAC96cg8s6jhd7q2v';

window.VICHIZ_API_BASE = window.VICHIZ_API_BASE || DEFAULT_API_BASE;
window.VICHIZ_TURNSTILE_SITEKEY = window.VICHIZ_TURNSTILE_SITEKEY || DEFAULT_TURNSTILE_SITEKEY;

const state = {
  activeCategory: 'Semua',
  activeProduct: products[0],
  pendingProductId: null,
  currentStep: 1,
  orderId: '',
  invoiceId: '',
  countdown: 300,
  countdownInterval: null,
  paymentChecks: 0,
  checkoutExpired: false,
  paymentUrl: '',
  paymentQrUrl: '',
  deliveredItems: [],
  buyer: {
    name: '',
    email: '',
    phone: '',
    qty: 1,
  },
  turnstileWidgetId: null,
  turnstileToken: '',
  theme: localStorage.getItem('vichiz-theme') || 'light',
};

const categoryToolbar = document.getElementById('categoryToolbar');
const productGrid = document.getElementById('productGrid');
const detailBuyButton = document.getElementById('detailBuyButton');
const checkoutForm = document.getElementById('checkoutForm');
const manualCheckBtn = document.getElementById('manualCheckBtn');
const resetDemoBtn = document.getElementById('resetDemoBtn');
const toggleOrderDetailBtn = document.getElementById('toggleOrderDetailBtn');
const orderDetailCard = document.getElementById('orderDetailCard');
const checkoutCloseBtn = document.getElementById('checkoutCloseBtn');
const warningConfirmBtn = document.getElementById('warningConfirmBtn');
const quantityInput = document.getElementById('quantityInput');
const continuePaymentBtn = document.getElementById('continuePaymentBtn');
const backToStoreBtn = document.getElementById('backToStoreBtn');
const downloadQrBtn = document.getElementById('downloadQrBtn');
const zoomQrBtn = document.getElementById('zoomQrBtn');
const newOrderBtn = document.getElementById('newOrderBtn');
const expiredBackBtn = document.getElementById('expiredBackBtn');
const closeTelegramPopup = document.getElementById('closeTelegramPopup');
const telegramPopup = document.getElementById('telegramPopup');
const telegramLauncher = document.getElementById('telegramLauncher');
const themeToggle = document.getElementById('themeToggle');
const decreaseQtyBtn = document.getElementById('decreaseQtyBtn');
const increaseQtyBtn = document.getElementById('increaseQtyBtn');
const copyAllBtn = document.getElementById('copyAllBtn');
const qrisImage = document.getElementById('qrisImage');
const qrisImageZoom = document.getElementById('qrisImageZoom');

function formatRupiah(value) {
  if (value == null) return 'By request';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function formatCountdown(totalSeconds) {
  const safe = Math.max(0, Number(totalSeconds) || 0);
  const minutes = Math.floor(safe / 60).toString().padStart(2, '0');
  const seconds = Math.floor(safe % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function notify(message) {
  window.alert(message);
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

function applyTheme(theme) {
  state.theme = theme;
  document.body.classList.toggle('dark-theme', theme === 'dark');
  localStorage.setItem('vichiz-theme', theme);
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Aktifkan tema terang' : 'Aktifkan tema gelap');
  }
  if (document.getElementById('checkoutModal')?.classList.contains('is-open')) {
    renderTurnstile();
  }
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

function patchProductStocks() {
  const soldOutTargets = ['NordVPN • 1 tahun'];
  products.forEach((product) => {
    if (soldOutTargets.includes(product.name)) {
      product.stock = 0;
    }
  });
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
    const isSoldOut = product.action !== 'chat' && product.stock <= 0;
    const buyLabel = product.action === 'chat' ? 'Chat admin' : isSoldOut ? 'Stok habis' : 'Beli';
    article.className = `product-card ${isSoldOut ? 'is-sold-out' : ''}`;
    article.innerHTML = `
      <div class="product-top">
        <span class="product-group-badge">${product.category}</span>
        <span class="product-tag ${isSoldOut ? 'is-muted' : ''}">${product.action === 'chat' ? product.tag : isSoldOut ? 'Stock habis' : product.tag}</span>
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
        <article class="stock-metric ${isSoldOut ? 'is-empty' : ''}">
          <small>${isSoldOut ? 'Status' : 'Stok'}</small>
          <strong>${isSoldOut ? 'Stock habis' : product.stock}</strong>
        </article>
      </div>
      <div class="product-footer">
        <div>
          <small>Mulai dari</small>
          <strong class="product-price">${formatRupiah(product.price)}</strong>
        </div>
        <div class="product-footer-actions">
          <button type="button" class="btn btn-secondary btn-detail">Detail</button>
          <button type="button" class="btn btn-primary btn-buy" ${isSoldOut ? 'disabled' : ''}>${buyLabel}</button>
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
  const soldOut = product.action !== 'chat' && product.stock <= 0;
  document.getElementById('detailName').textContent = product.name;
  document.getElementById('detailDesc').textContent = product.shortDesc;
  document.getElementById('detailPrice').textContent = formatRupiah(product.price);
  document.getElementById('detailSold').textContent = `${product.sold}+ item`;
  document.getElementById('detailStock').textContent = soldOut ? 'Stock habis' : `${product.stock} tersedia`;
  document.getElementById('detailCategory').textContent = product.category;
  document.getElementById('detailLongDesc').textContent = product.desc;

  const termsList = document.getElementById('detailTerms');
  termsList.innerHTML = '';
  product.terms.forEach((term) => {
    const li = document.createElement('li');
    li.textContent = term;
    termsList.appendChild(li);
  });

  if (product.action === 'chat') {
    detailBuyButton.textContent = 'Chat admin';
    detailBuyButton.disabled = false;
  } else if (soldOut) {
    detailBuyButton.textContent = 'Stock habis';
    detailBuyButton.disabled = true;
  } else {
    detailBuyButton.textContent = 'Beli produk ini';
    detailBuyButton.disabled = false;
  }

  paintLogo(
    document.getElementById('detailLogo'),
    document.getElementById('detailLogoFallback'),
    product.logo,
    product.fallback,
    product.brand
  );
}

function updateQuantityLimit() {
  if (!quantityInput) return;
  const maxByStock = state.activeProduct?.action === 'chat'
    ? 50
    : Math.max(1, Math.min(50, state.activeProduct?.stock || 1));
  quantityInput.max = String(maxByStock);
  if (Number(quantityInput.value) > maxByStock) {
    quantityInput.value = String(maxByStock);
  }
  if (Number(quantityInput.value) < 1) {
    quantityInput.value = '1';
  }
  document.getElementById('quantityHelp').textContent = state.activeProduct?.action === 'chat'
    ? 'Jumlah ini dipakai untuk kebutuhan awal, lalu admin akan menyesuaikan detail bulk order.'
    : `Maksimal ${maxByStock} item per transaksi, mengikuti stok yang tersedia saat ini.`;
}

function syncProductToCheckout(product) {
  document.getElementById('checkoutProductTitle').textContent = product.name;
  document.getElementById('successProductName').textContent = product.name;
  document.getElementById('summaryType').textContent = product.category === 'Voucher' ? 'VOUCHER' : 'ACCOUNT';
  updateQuantityLimit();
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const product = state.activeProduct;
  const qty = Number(quantityInput?.value || 1);
  state.buyer.qty = qty;
  const total = product.price == null ? null : product.price * qty;

  document.getElementById('checkoutProductPrice').textContent = formatRupiah(total ?? product.price);
  document.getElementById('summaryUnitPrice').textContent = formatRupiah(product.price);
  document.getElementById('summaryQty').textContent = String(qty);
  document.getElementById('summaryTotal').textContent = formatRupiah(total ?? product.price);
  document.getElementById('amountValue').textContent = formatRupiah(total ?? product.price);
  document.getElementById('successAmount').textContent = formatRupiah(total ?? product.price);
  document.getElementById('detailOrderAmount').textContent = formatRupiah(total ?? product.price);
  document.getElementById('detailOrderQty').textContent = String(qty);
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

function openWarning(productId) {
  selectProduct(productId);
  state.pendingProductId = productId;
  openModal('warningModal');
}

function openCheckout(productId = state.activeProduct.id) {
  selectProduct(productId);
  resetCheckoutState(false);
  openModal('checkoutModal');
  renderTurnstile();
}

function handleBuy(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  if (product.action === 'chat') {
    window.open('https://t.me/vichizstorecs_bot', '_blank', 'noopener,noreferrer');
    return;
  }
  if (product.stock <= 0) return;
  closeModal('detailModal');
  openWarning(productId);
}

function setSubmitting(isSubmitting, label = 'Lanjut ke pembayaran') {
  if (!continuePaymentBtn) return;
  continuePaymentBtn.disabled = isSubmitting;
  continuePaymentBtn.textContent = isSubmitting ? 'Memproses...' : label;
}

function setCheckLoading(isLoading) {
  if (!manualCheckBtn) return;
  manualCheckBtn.disabled = isLoading || state.checkoutExpired || !state.orderId;
  manualCheckBtn.textContent = isLoading ? 'Mengecek...' : 'Cek status';
}

function resetTurnstileWidget() {
  if (window.turnstile && state.turnstileWidgetId != null) {
    try {
      window.turnstile.reset(state.turnstileWidgetId);
    } catch (_err) {
      // ignore reset failure
    }
  }
  state.turnstileToken = '';
}

function buildPaymentRedirectCard(text) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720">
    <rect width="720" height="720" rx="72" fill="#ffffff"/>
    <rect x="70" y="70" width="580" height="580" rx="48" fill="#eef3ff" stroke="#d8e3ff"/>
    <text x="360" y="240" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="40" font-weight="800" fill="#1b2440">SayaBayar</text>
    <text x="360" y="318" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="28" font-weight="600" fill="#4b5b85">Pembayaran dibuka di tab baru</text>
    <text x="360" y="392" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="24" fill="#6a7aa6">${text}</text>
    <rect x="148" y="468" width="424" height="86" rx="43" fill="#4a72f5"/>
    <text x="360" y="522" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="28" font-weight="800" fill="#ffffff">Lanjut bayar di SayaBayar</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function updatePaymentVisual() {
  const productLabel = state.activeProduct?.brand || 'SayaBayar';
  const fallbackCard = buildPaymentRedirectCard(productLabel);
  const imageSrc = state.paymentQrUrl || fallbackCard;
  if (qrisImage) {
    qrisImage.src = imageSrc;
    qrisImage.alt = state.paymentQrUrl
      ? `QR pembayaran ${productLabel}`
      : `Pembayaran ${productLabel} dibuka di tab baru`;
  }
  if (qrisImageZoom) {
    qrisImageZoom.src = imageSrc;
    qrisImageZoom.alt = qrisImage?.alt || '';
  }
  if (downloadQrBtn) {
    downloadQrBtn.textContent = state.paymentQrUrl ? 'Unduh QRIS' : 'Buka SayaBayar';
  }
  if (zoomQrBtn) {
    zoomQrBtn.textContent = state.paymentQrUrl ? 'Zoom QRIS' : 'Salin link';
  }
}

function openPaymentTab() {
  if (!state.paymentUrl) {
    notify('Link pembayaran belum tersedia.');
    return;
  }
  window.open(state.paymentUrl, '_blank', 'noopener,noreferrer');
}

async function copyPaymentLink() {
  if (!state.paymentUrl) {
    notify('Link pembayaran belum tersedia.');
    return;
  }
  try {
    await navigator.clipboard.writeText(state.paymentUrl);
    if (zoomQrBtn) {
      zoomQrBtn.textContent = 'Tersalin';
      setTimeout(() => { zoomQrBtn.textContent = state.paymentQrUrl ? 'Zoom QRIS' : 'Salin link'; }, 1400);
    }
  } catch (_err) {
    notify('Gagal menyalin link pembayaran.');
  }
}

function populateBuyer(formData) {
  state.buyer = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    qty: Number(formData.qty || 1),
  };
  document.getElementById('successBuyerEmail').textContent = state.buyer.email;
}

function renderCredentialList() {
  const list = document.getElementById('credentialList');
  list.innerHTML = '';
  state.deliveredItems.forEach((item, index) => {
    const card = document.createElement('article');
    card.className = 'credential-item card';
    card.innerHTML = `
      <div class="credential-item-head">
        <div>
          <small>${item.label}</small>
          <strong>${state.activeProduct.name}</strong>
        </div>
        <button type="button" class="copy-btn" data-copy-credential="${index}">Copy data</button>
      </div>
      <div class="credential-field">
        <span>Email akun</span>
        <strong>${item.email}</strong>
      </div>
      <div class="credential-field">
        <span>Password akun</span>
        <strong>${item.password}</strong>
      </div>
      <p class="credential-note">${item.note}</p>
    `;
    list.appendChild(card);
  });

  list.querySelectorAll('[data-copy-credential]').forEach((button) => {
    button.addEventListener('click', async () => {
      const item = state.deliveredItems[Number(button.dataset.copyCredential)];
      if (!item) return;
      try {
        await navigator.clipboard.writeText(`Email: ${item.email}\nPassword: ${item.password}`);
        button.textContent = 'Copied';
        setTimeout(() => { button.textContent = 'Copy data'; }, 1200);
      } catch (_err) {
        button.textContent = 'Gagal';
        setTimeout(() => { button.textContent = 'Copy data'; }, 1200);
      }
    });
  });
}

function updatePaymentStatus(text, tone = 'pending', note = 'Halaman pembayaran sudah dibuka di tab baru. Selesaikan pembayaran lalu cek status di sini.') {
  const badge = document.getElementById('paymentStatusText');
  badge.textContent = text;
  badge.className = `status-badge ${tone}`;
  document.getElementById('paymentStatusNote').textContent = note;
}

function updateStatusProgress() {
  const progress = document.getElementById('statusBarAnimated');
  const base = state.currentStep === 3 ? 100 : Math.min(88, 18 + (state.paymentChecks * 14));
  progress.style.width = `${Math.max(base, 16)}%`;
}

function clearIntervals() {
  if (state.countdownInterval) clearInterval(state.countdownInterval);
  state.countdownInterval = null;
}

function showPaymentLive() {
  document.getElementById('paymentLiveCard').hidden = false;
  document.getElementById('paymentExpiredCard').hidden = true;
}

function showPaymentExpired() {
  if (state.checkoutExpired) return;
  state.checkoutExpired = true;
  clearIntervals();
  document.getElementById('countdownValue').textContent = '00:00';
  updatePaymentStatus('Waktu habis', 'danger', 'Invoice ini sudah melewati batas waktu. Silakan buat pesanan baru untuk mendapatkan link pembayaran yang masih aktif.');
  document.getElementById('paymentLiveCard').hidden = true;
  document.getElementById('paymentExpiredCard').hidden = false;
  document.getElementById('expiredAmountValue').textContent = document.getElementById('amountValue').textContent;
  setCheckLoading(false);
}

function startCountdown(seconds = 300) {
  clearIntervals();
  state.countdown = Math.max(0, Number(seconds) || 300);
  state.checkoutExpired = false;
  showPaymentLive();
  document.getElementById('countdownValue').textContent = formatCountdown(state.countdown);
  state.countdownInterval = setInterval(() => {
    state.countdown -= 1;
    document.getElementById('countdownValue').textContent = formatCountdown(state.countdown);
    if (state.countdown <= 0) {
      showPaymentExpired();
    }
  }, 1000);
}

function normalizeDetailItems(stockAccounts = []) {
  return stockAccounts.map((item, index) => ({
    label: `Item ${String(index + 1).padStart(2, '0')}`,
    email: item.account_username || item.account_email || '-',
    password: item.account_password || '-',
    note: 'Simpan data ini dengan aman dan gunakan sesuai ketentuan produk yang Anda beli.',
  }));
}

function showSuccessState(detail) {
  clearIntervals();
  setStep(3);
  updatePaymentStatus('Pembayaran berhasil', 'success', 'Pembayaran sudah terverifikasi. Detail order sekarang tersedia di bawah.');
  document.getElementById('successOrderId').textContent = state.orderId;
  document.getElementById('detailOrderId').textContent = state.orderId;
  document.getElementById('detailInvoiceId').textContent = state.invoiceId || detail.invoice_id || '-';
  document.getElementById('detailOrderQty').textContent = String(detail.quantity || state.buyer.qty || 1);
  document.getElementById('detailOrderAmount').textContent = formatRupiah(detail.total_amount_cents || state.activeProduct.price * (state.buyer.qty || 1));
  document.getElementById('successAmount').textContent = formatRupiah(detail.total_amount_cents || state.activeProduct.price * (state.buyer.qty || 1));

  if (detail.customer) {
    document.getElementById('successBuyerEmail').textContent = detail.customer.email || state.buyer.email;
  } else {
    document.getElementById('successBuyerEmail').textContent = state.buyer.email;
  }

  state.deliveredItems = normalizeDetailItems(detail.stock_accounts || []);
  renderCredentialList();
  orderDetailCard.hidden = false;
  toggleOrderDetailBtn.textContent = 'Sembunyikan detail order';
  updateStatusProgress();
}

function resetCheckoutState(resetForm = true) {
  clearIntervals();
  setStep(1);
  state.paymentChecks = 0;
  state.checkoutExpired = false;
  state.orderId = '';
  state.invoiceId = '';
  state.paymentUrl = '';
  state.paymentQrUrl = '';
  state.deliveredItems = [];
  state.turnstileToken = '';
  document.getElementById('orderIdValue').textContent = '-';
  document.getElementById('successOrderId').textContent = '-';
  document.getElementById('detailOrderId').textContent = '-';
  document.getElementById('detailInvoiceId').textContent = '-';
  document.getElementById('countdownValue').textContent = '05:00';
  updatePaymentStatus('Menunggu pembayaran', 'pending', 'Lengkapi data pembeli, lanjutkan pembayaran, lalu buka halaman SayaBayar di tab baru.');
  document.getElementById('statusBarAnimated').style.width = '16%';
  showPaymentLive();
  orderDetailCard.hidden = true;
  toggleOrderDetailBtn.textContent = 'Lihat detail order';
  if (resetForm) checkoutForm.reset();
  quantityInput.value = quantityInput.value || '1';
  updateQuantityLimit();
  updateCheckoutSummary();
  updatePaymentVisual();
  resetTurnstileWidget();
  renderTurnstile();
  setCheckLoading(false);
}

function openTelegramCard() {
  telegramPopup.style.display = 'block';
  telegramPopup.classList.add('is-open');
  document.body.classList.add('telegram-popup-open');
  telegramLauncher.hidden = true;
}

function closeTelegramCard() {
  telegramPopup.style.display = 'none';
  telegramPopup.classList.remove('is-open');
  document.body.classList.remove('telegram-popup-open');
  telegramLauncher.hidden = false;
}

function renderTurnstilePlaceholder(message, tone = 'neutral') {
  const slot = document.getElementById('turnstileSlot');
  if (!slot) return;
  slot.innerHTML = `<div class="turnstile-placeholder ${tone}">${message}</div>`;
}

function renderTurnstile() {
  const sitekey = window.VICHIZ_TURNSTILE_SITEKEY || DEFAULT_TURNSTILE_SITEKEY;
  const slot = document.getElementById('turnstileSlot');
  if (!slot) return;

  if (!sitekey) {
    renderTurnstilePlaceholder('Masukkan sitekey Cloudflare Turnstile agar verifikasi aktif di form checkout.', 'neutral');
    return;
  }

  if (!window.turnstile) {
    renderTurnstilePlaceholder('Widget keamanan belum termuat. Pastikan script Cloudflare Turnstile sudah dipasang di index.html.', 'warning');
    return;
  }

  slot.innerHTML = '<div id="turnstileWidget"></div>';
  state.turnstileWidgetId = window.turnstile.render('#turnstileWidget', {
    sitekey,
    theme: state.theme === 'dark' ? 'dark' : 'light',
    callback(token) {
      state.turnstileToken = token;
    },
    'expired-callback'() {
      state.turnstileToken = '';
    },
    'error-callback'() {
      state.turnstileToken = '';
      renderTurnstilePlaceholder('Verifikasi keamanan gagal dimuat. Coba tutup dan buka kembali form checkout.', 'warning');
    },
  });
}

function maybeRequireTurnstile() {
  const sitekey = window.VICHIZ_TURNSTILE_SITEKEY || DEFAULT_TURNSTILE_SITEKEY;
  if (!sitekey) return true;
  if (state.turnstileToken) return true;
  renderTurnstilePlaceholder('Selesaikan verifikasi keamanan terlebih dahulu sebelum lanjut ke pembayaran.', 'warning');
  return false;
}

function getApiBase() {
  return (window.VICHIZ_API_BASE || DEFAULT_API_BASE).replace(/\/$/, '');
}

async function createOrderRequest(payload) {
  const response = await fetch(`${getApiBase()}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.detail || data?.error || 'Gagal membuat order.');
  }
  return data;
}

async function fetchOrderStatus(orderId) {
  const response = await fetch(`${getApiBase()}/api/orders/${encodeURIComponent(orderId)}/status`);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.error || 'Gagal mengecek status order.');
  }
  return data;
}

async function fetchOrderDetail(orderId) {
  const response = await fetch(`${getApiBase()}/api/orders/${encodeURIComponent(orderId)}/detail`);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.error || 'Gagal mengambil detail order.');
  }
  return data;
}

async function handleCheckStatus() {
  if (!state.orderId || state.checkoutExpired) return;
  setCheckLoading(true);
  state.paymentChecks += 1;
  updateStatusProgress();

  try {
    const status = await fetchOrderStatus(state.orderId);
    const checkedAt = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    if (status.payment_status === 'paid') {
      const detail = await fetchOrderDetail(state.orderId);
      showSuccessState(detail);
      return;
    }

    if (status.payment_status === 'failed') {
      showPaymentExpired();
      return;
    }

    updatePaymentStatus(
      'Menunggu konfirmasi',
      'pending',
      `Status terakhir diperbarui pukul ${checkedAt}. Pembayaran belum terverifikasi, silakan selesaikan pembayaran di halaman SayaBayar lalu cek kembali.`
    );
  } catch (error) {
    notify(error.message || 'Gagal mengecek status pembayaran.');
  } finally {
    setCheckLoading(false);
  }
}

async function handleCheckoutSubmit(formData) {
  populateBuyer(formData);

  const payload = {
    product_id: state.activeProduct.backendProductId || state.activeProduct.id,
    quantity: Number(formData.qty || 1),
    turnstile_token: state.turnstileToken,
    customer_name: state.buyer.name,
    customer_email: state.buyer.email,
    customer_phone: state.buyer.phone,
  };

  setSubmitting(true);
  try {
    const response = await createOrderRequest(payload);

    state.orderId = response.order_id;
    state.invoiceId = response.invoice_id;
    state.paymentUrl = response.payment?.payment_url || '';
    state.paymentQrUrl = response.payment?.qr_url || response.payment?.qr_image_url || '';
    document.getElementById('orderIdValue').textContent = state.orderId;
    document.getElementById('successOrderId').textContent = state.orderId;
    document.getElementById('detailOrderId').textContent = state.orderId;
    document.getElementById('detailInvoiceId').textContent = state.invoiceId;
    document.getElementById('amountValue').textContent = formatRupiah(response.total_amount_cents);
    document.getElementById('successAmount').textContent = formatRupiah(response.total_amount_cents);
    document.getElementById('detailOrderAmount').textContent = formatRupiah(response.total_amount_cents);
    document.getElementById('detailOrderQty').textContent = String(response.quantity || state.buyer.qty);

    updatePaymentVisual();
    setStep(2);
    startCountdown(5 * 60);
    updatePaymentStatus(
      'Menunggu pembayaran',
      'pending',
      'Halaman pembayaran SayaBayar sudah disiapkan. Selesaikan pembayaran di tab baru, lalu kembali ke sini untuk cek status.'
    );
    updateStatusProgress();
    setCheckLoading(false);

    if (state.paymentUrl) {
      openPaymentTab();
    } else {
      notify('Order berhasil dibuat, tetapi link pembayaran tidak ditemukan. Silakan cek konfigurasi backend SayaBayar.');
    }
  } catch (error) {
    notify(error.message || 'Gagal melanjutkan ke pembayaran.');
    resetTurnstileWidget();
    renderTurnstile();
  } finally {
    setSubmitting(false);
  }
}

function resetToCatalog() {
  closeModal('checkoutModal');
  closeModal('warningModal');
  closeModal('detailModal');
  closeModal('qrZoomModal');
  resetCheckoutState(true);
}

checkoutForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!maybeRequireTurnstile()) return;
  const formData = Object.fromEntries(new FormData(checkoutForm));
  await handleCheckoutSubmit(formData);
});

manualCheckBtn.addEventListener('click', handleCheckStatus);

if (resetDemoBtn) {
  resetDemoBtn.addEventListener('click', () => {
    if (state.paymentUrl) {
      openPaymentTab();
      return;
    }
    resetToCatalog();
  });
}

detailBuyButton.addEventListener('click', () => handleBuy(state.activeProduct.id));

warningConfirmBtn.addEventListener('click', () => {
  closeModal('warningModal');
  if (state.pendingProductId != null) {
    openCheckout(state.pendingProductId);
  }
});

toggleOrderDetailBtn.addEventListener('click', () => {
  const isHidden = orderDetailCard.hidden;
  orderDetailCard.hidden = !isHidden ? true : false;
  toggleOrderDetailBtn.textContent = isHidden ? 'Sembunyikan detail order' : 'Lihat detail order';
});

copyAllBtn.addEventListener('click', async () => {
  if (!state.deliveredItems.length) return;
  const text = state.deliveredItems.map((item, index) => `Item ${index + 1}\nEmail: ${item.email}\nPassword: ${item.password}`).join('\n\n');
  try {
    await navigator.clipboard.writeText(text);
    copyAllBtn.textContent = 'Copied';
    setTimeout(() => { copyAllBtn.textContent = 'Copy all'; }, 1200);
  } catch (_err) {
    copyAllBtn.textContent = 'Gagal';
    setTimeout(() => { copyAllBtn.textContent = 'Copy all'; }, 1200);
  }
});

document.querySelectorAll('[data-close-modal]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    if (trigger.dataset.closeModal === 'checkoutModal') {
      resetTurnstileWidget();
    }
    closeModal(trigger.dataset.closeModal);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal.is-open').forEach((modal) => {
      if (modal.id === 'checkoutModal') {
        resetTurnstileWidget();
      }
      closeModal(modal.id);
    });
  }
});

checkoutCloseBtn.addEventListener('click', resetToCatalog);
backToStoreBtn.addEventListener('click', resetToCatalog);
expiredBackBtn.addEventListener('click', resetToCatalog);
newOrderBtn.addEventListener('click', () => {
  resetCheckoutState(true);
  setStep(1);
});

closeTelegramPopup.addEventListener('click', closeTelegramCard);
telegramLauncher.addEventListener('click', openTelegramCard);

themeToggle.addEventListener('click', toggleTheme);

decreaseQtyBtn.addEventListener('click', () => {
  quantityInput.value = String(Math.max(1, Number(quantityInput.value || 1) - 1));
  updateCheckoutSummary();
});

increaseQtyBtn.addEventListener('click', () => {
  const max = Number(quantityInput.max || 50);
  quantityInput.value = String(Math.min(max, Number(quantityInput.value || 1) + 1));
  updateCheckoutSummary();
});

quantityInput.addEventListener('input', () => {
  updateQuantityLimit();
  updateCheckoutSummary();
});

downloadQrBtn.addEventListener('click', () => {
  if (state.paymentQrUrl) {
    const link = document.createElement('a');
    link.href = state.paymentQrUrl;
    link.download = `${state.orderId}-qris`;
    link.click();
    return;
  }
  openPaymentTab();
});

zoomQrBtn.addEventListener('click', () => {
  if (state.paymentQrUrl) {
    openModal('qrZoomModal');
    return;
  }
  copyPaymentLink();
});

patchProductStocks();
openTelegramCard();
applyTheme(state.theme);
renderCategories();
renderProducts();
selectProduct(state.activeProduct.id);
resetCheckoutState(true);
updateStatusProgress();
