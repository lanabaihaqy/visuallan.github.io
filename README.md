# Holly Store UI Concept

Prototype front-end untuk validasi tampilan website katalog digital tanpa login.

## Isi prototype
- Hero section modern dengan value proposition yang jelas
- Section flow pembelian 4 langkah
- Filter kategori produk
- Card produk dengan badge, stok, terjual, dan CTA
- Modal checkout 3 tahap:
  1. input nama, email, nomor hp
  2. QRIS auto-generated (simulasi UI)
  3. status pembayaran sukses (simulasi polling)

## Catatan
Ini masih UI concept, belum terhubung ke backend atau gateway pembayaran.

## Integrasi tahap berikutnya
- `POST /orders` untuk membuat order dan menyimpan data pembeli
- respons order mengembalikan `order_id`, `amount`, `payment_status`, dan `qris_payload`
- polling `GET /orders/:id/status` atau gunakan websocket/sse untuk refresh status pembayaran
- webhook/callback dari payment gateway untuk update status ke `paid`

## Cara pakai lokal
Buka `index.html` langsung di browser, atau jalankan server sederhana:

```bash
python3 -m http.server 8000
```

Lalu akses `http://localhost:8000/`.
