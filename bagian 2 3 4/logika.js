
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
