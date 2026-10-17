
const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,

  // FIX 1: Menggunakan this.saldo agar mengakses saldo milik pelanggan.
  bayar(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },
};

// Subtotal
let subtotal = 0;

// FIX 2: Menggunakan < agar indeks tidak melewati panjang array.
for (let i = 0; i < keranjang.length; i++) {
  subtotal += harga[keranjang[i]];
}

// Persen diskon
let persen;

// FIX 3: Memeriksa subtotal >= 50000 terlebih dahulu.
if (subtotal >= 50000) {
  persen = 10;
} else if (subtotal >= 25000) {
  persen = 5;
} else {
  persen = 0;
}

let diskon = (subtotal * persen) / 100;

// Promo hari
let hari = "jumat";
let promo;

switch (hari) {
  case "jumat":
    promo = 3000;
    break; // FIX 4: Menghentikan switch agar promo Jumat tidak tertimpa.
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
}

// Pajak
// FIX 5: Menghitung pajak dari subtotal setelah diskon dan promo.
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK;

// Total
let total = subtotal - diskon - promo + pajak;

// Uang bayar
let uangBayarTeks = "100.000";

// FIX 6: Menghapus titik pemisah ribuan sebelum mengubah teks menjadi angka.
let uangBayar = parseInt(uangBayarTeks.replace(/\./g, ""));
let kembalian = uangBayar - total;

// Status
let status;

// FIX 7: Menggunakan >= agar membandingkan uang bayar dengan total.
if (uangBayar >= total) {
  status = "Lunas";
} else {
  status = "Kurang";
}

// Nama rapi
// FIX 8: Mengambil sisa nama mulai indeks 1 agar huruf pertama tidak berulang.
let namaRapi =
  pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(1);

// Keranjang
// FIX 9: Menghapus "teh" pertama menggunakan splice.
keranjang.splice(1, 1);

// FIX 10: Menggunakan push agar "air" ditambahkan di akhir array.
keranjang.push("air");

// Member bertambah 1
// FIX 11: Mengubah teks menjadi angka sebelum ditambah 1.
let jumlahMemberBaru = Number(jumlahMember) + 1;

// Rata-rata per item ditambah biaya kemasan
// FIX 12: Tidak memakai toFixed agar hasil tetap berupa angka.
let rataRata = total / 4;
let rataRataTotal = rataRata + 10;

// FIX 13: Mengembalikan teks format rupiah menggunakan return.
function formatRupiah(angka) {
  return "Rp " + angka;
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));

// FIX 14: Menggunakan for...in untuk membaca kunci object harga.
for (let kunci in harga) {
  console.log(kunci + ": " + harga[kunci]);
}

/*
CATATAN BUG

1. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Method bayar menggunakan saldo tanpa this,
   sehingga tidak mengakses properti saldo milik pelanggan.

2. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Kondisi i <= keranjang.length membuat indeks
   melewati batas array dan menambahkan undefined.

3. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Kondisi diskon 5% diperiksa sebelum diskon 10%,
   sehingga subtotal 50000 mendapatkan diskon yang salah.

4. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Tidak ada break setelah case Jumat, sehingga
   nilai promo tertimpa oleh case Sabtu dan Minggu.

5. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Perhitungan pajak tidak mengelompokkan subtotal
   dikurangi diskon dan promo sebelum dikalikan tarif pajak.

6. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: parseInt membaca "100.000" sebagai 100 karena
   titik membuat teks berhenti dibaca sebagai bilangan bulat.

7. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: Operator = memberikan nilai, bukan membandingkan.
   Seharusnya memakai >= untuk mengecek kecukupan uang.

8. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: slice(0) mengambil nama dari indeks pertama lagi,
   sehingga huruf awal nama menjadi berulang.

9. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: slice hanya mengambil bagian array dan tidak
   menghapus elemen dari array aslinya. Gunakan splice.

10. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: unshift menambahkan elemen ke awal array,
    padahal air harus ditambahkan di akhir array.

11. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: jumlahMember berupa string "5", sehingga
    penambahan 1 dapat menghasilkan teks "51", bukan angka 6.

12. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: toFixed menghasilkan string, sehingga saat
    ditambah 10 hasilnya dapat digabung sebagai teks.

13. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: Function formatRupiah tidak mengembalikan
    hasil karena tidak menggunakan return.

14. Jenis: Menghentikan program dengan error.
    Penyebab: for...of tidak dapat langsung digunakan untuk
    membaca kunci object biasa seperti harga. Gunakan for...in.

15. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: Perhitungan subtotal, diskon, promo, pajak,
    total, dan nilai turunannya saling berkaitan. Jika
    salah satu perhitungan awal salah, hasil akhirnya
    juga tidak sesuai.
*/
