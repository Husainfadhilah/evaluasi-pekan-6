
function bersihkanNama(teks) {
  teks = teks.trim().toLowerCase();
  teks = teks.split(" ");

  let hasil = "";

  for (let i = 0; i < teks.length; i++) {
    if (teks[i] !== "") {
      hasil = hasil + teks[i][0].toUpperCase() + teks[i].slice(1) + " ";
    }
  }

  return hasil.trim();
}

function ubahKeAngka(teks) {
  teks = teks.replace(/\./g, "").replace(/\s/g, "");
  let angka = Number(teks);

  if (isNaN(angka)) {
    return 0;
  }

  return angka;
}

const ambilPersenVoucher = function(kode) {
  kode = kode.trim().toUpperCase();

  if (kode.startsWith("DISKON")) {
    return Number(kode.slice(6)) || 0;
  }

  return 0;
};

const formatRupiah = (angka) => {
  let teks = String(angka);
  let hasil = "";
  let jumlah = 0;

  for (let i = teks.length - 1; i >= 0; i--) {
    hasil = teks[i] + hasil;
    jumlah++;

    if (jumlah % 3 === 0 && i !== 0) {
      hasil = "." + hasil;
    }
  }

  return "Rp " + hasil;
};


console.log("Uji bersihkanNama");
console.log(' rina   WULANDARI ', bersihkanNama("  rina   WULANDARI "));
console.log('', bersihkanNama(""));
console.log('BUDI santoso', bersihkanNama("bUDI santoso"));

console.log("Uji ubahKeAngka");
console.log('150.000 ', ubahKeAngka("150.000"));
console.log('75000 ', ubahKeAngka("75000"));
console.log('abc ', ubahKeAngka("abc"));

console.log("Uji ambilPersenVoucher");
console.log(' diskon10 "', ambilPersenVoucher(" diskon10 "));
console.log('PROMO5 ', ambilPersenVoucher("PROMO5"));
console.log(' ', ambilPersenVoucher(""));

console.log("Uji formatRupiah");
console.log('1250000 ', formatRupiah(1250000));
console.log('500 ', formatRupiah(500));
console.log('0 ', formatRupiah(0));

//NO.3 

const transaksiBersih = [];

for (let i = 0; i < transaksiMentah.length; i++) {
  let transaksi = transaksiMentah[i];
  let pesananBersih = [];

  for (let j = 0; j < transaksi.pesanan.length; j++) {
    pesananBersih.push({
      menu: bersihkanNama(transaksi.pesanan[j].menu),
      jumlah: ubahKeAngka(transaksi.pesanan[j].jumlah)
    });
  }

  transaksiBersih.push({
    kode: transaksi.kode.toUpperCase(),
    pelanggan: bersihkanNama(transaksi.pelanggan),
    hari: transaksi.hari.trim().toLowerCase(),
    uangBayar: ubahKeAngka(transaksi.uangBayar),
    persenVoucher: ambilPersenVoucher(transaksi.voucher),
    pesanan: pesananBersih
  });
}

console.log(transaksiBersih);

//PENJELASAN 

/*
1. parseInt mengubah teks menjadi bilangan bulat,
   parseFloat mengubah teks menjadi bilangan desimal,
   sedangkan Number mengubah seluruh teks menjadi angka.
   Titik harus dihapus terlebih dahulu karena "150.000"
   akan dianggap sebagai angka desimal, bukan 150 ribu.
   parseInt("150.000") menghasilkan 150.

2. toFixed mengembalikan teks, bukan angka.
   Contoh:
   console.log(typeof (10.5).toFixed(2)); // string
   console.log((10.5).toFixed(2) + 5); // "10.505"
   Hasilnya digabungkan sebagai teks, bukan dijumlahkan.

3. replace mengganti kecocokan pertama secara default,
   sedangkan replaceAll mengganti semua kecocokan.
   Pada ubahKeAngka, replace dengan /\\./g digunakan
   untuk menghapus semua titik pemisah ribuan.

4. toUpperCase tidak mengubah string asli karena string
   di JavaScript tidak dapat diubah langsung.
   Hasilnya harus disimpan kembali ke variabel jika
   ingin mengganti nilai variabel tersebut.

5. Function declaration:
   bersihkanNama(teks), karena bentuknya mudah dibaca
   sebagai function biasa.

   Function expression:
   ambilPersenVoucher, karena function disimpan
   ke dalam variabel.

   Arrow function:
   formatRupiah, karena bentuk penulisannya lebih ringkas.
*/

