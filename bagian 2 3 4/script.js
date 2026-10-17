//MEMBUAT HASIL LAPORAN
//Membuat object laporan
const laporan = {
  jumlahTransaksi: kasir.riwayat.length,
  jumlahLunas: 0,
  jumlahKurang: 0,
  jumlahDitolak: 0,
  pendapatan: 0,
  rataRata: 0,
  transaksiTerbesar: null,
  penjualanPerMenu: {},
  menuTerlaris: "",
  daftarDitolak: [],
  kodeLunas: [],
  ringkasanKode: "",
  menuStokMenipis: []
};


for (let transaksi of kasir.riwayat) {
  if (transaksi.status === "LUNAS") {
    laporan.jumlahLunas++;
    laporan.pendapatan += transaksi.total;
    laporan.kodeLunas.push(transaksi.kode);

    if (
      laporan.transaksiTerbesar === null ||
      transaksi.total > laporan.transaksiTerbesar.total
    ) {
      laporan.transaksiTerbesar = transaksi;
    }

    for (let item of transaksi.itemValid) {
      let namaMenu = item.menu.nama;

      if (namaMenu in laporan.penjualanPerMenu) {
        laporan.penjualanPerMenu[namaMenu] += item.jumlah;
      } else {
        laporan.penjualanPerMenu[namaMenu] = item.jumlah;
      }
    }
  } else if (transaksi.status === "KURANG") {
    laporan.jumlahKurang++;
  } else if (transaksi.status === "DITOLAK") {
    laporan.jumlahDitolak++;

    laporan.daftarDitolak.push({
      kode: transaksi.kode,
      alasan: transaksi.alasan
    });
  }
}


if (laporan.jumlahLunas > 0) {
  laporan.rataRata = Math.round(
    laporan.pendapatan / laporan.jumlahLunas
  );
}


for (let namaMenu in laporan.penjualanPerMenu) {
  if (
    laporan.menuTerlaris === "" ||
    laporan.penjualanPerMenu[namaMenu] >
      laporan.penjualanPerMenu[laporan.menuTerlaris]
  ) {
    laporan.menuTerlaris = namaMenu;
  }
}


for (let i = 0; i < laporan.kodeLunas.length; i++) {
  if (i > 0) {
    laporan.ringkasanKode += ", ";
  }

  laporan.ringkasanKode += laporan.kodeLunas[i];
}


for (let item of kasir.menu) {
  if (item.stok < 3) {
    laporan.menuStokMenipis.push(item.nama);
  }
}

//Mencetak laporan harian


console.log(kedai.nama.toUpperCase());
console.log("LAPORAN HARIAN KEDAI SENJA");


console.log(`Jumlah Transaksi : ${laporan.jumlahTransaksi}`);
console.log(`Transaksi Lunas  : ${laporan.jumlahLunas}`);
console.log(`Transaksi Kurang : ${laporan.jumlahKurang}`);
console.log(`Transaksi Ditolak: ${laporan.jumlahDitolak}`);
console.log(`Pendapatan       : ${formatRupiah(laporan.pendapatan)}`);
console.log(`Rata-rata        : ${formatRupiah(laporan.rataRata)}`);

console.log("----------------------------------");
console.log("TRANSAKSI LUNAS TERBESAR");

if (laporan.transaksiTerbesar !== null) {
  console.log(`Kode      : ${laporan.transaksiTerbesar.kode}`);
  console.log(`Pelanggan : ${laporan.transaksiTerbesar.pelanggan}`);
  console.log(`Total     : ${formatRupiah(laporan.transaksiTerbesar.total)}`);
}

console.log("----------------------------------");
console.log("PENJUALAN PER MENU");

for (let namaMenu in laporan.penjualanPerMenu) {
  console.log(`${namaMenu}: ${laporan.penjualanPerMenu[namaMenu]}`);
}

console.log("Nama Menu:", Object.keys(laporan.penjualanPerMenu));
console.log("Jumlah Terjual:", Object.values(laporan.penjualanPerMenu));

console.log(`Menu Terlaris: ${laporan.menuTerlaris}`);

console.log("----------------------------------");
console.log("DAFTAR TRANSAKSI DITOLAK");
console.log(laporan.daftarDitolak);

console.log("----------------------------------");
console.log("KODE TRANSAKSI LUNAS");
console.log(laporan.kodeLunas);
console.log(`Ringkasan Kode: ${laporan.ringkasanKode}`);

console.log(
  "Pengecekan kode:",
  laporan.ringkasanKode.split(", ").length === laporan.jumlahLunas
);

console.log("----------------------------------");
console.log("MENU DENGAN STOK MENIPIS");
console.log(laporan.menuStokMenipis);


// console.log("----------------------------------");
// console.log("DEMO ARRAY METHOD");

// console.log(
//   "Apakah TRX-001 lunas?",
//   laporan.kodeLunas.includes("TRX-001")
// );

// console.log(
//   "Posisi TRX-001:",
//   laporan.kodeLunas.indexOf("TRX-001")
// );

// console.log(
//   "Dua kode pertama:",
//   laporan.kodeLunas.slice(0, 2)
// );


// let salinanKode = laporan.kodeLunas.slice();

// console.log("Sebelum splice:", salinanKode);

// salinanKode.splice(0, 1);

// console.log("Setelah splice:", salinanKode);
// console.log("Kode asli tetap:", laporan.kodeLunas);


//jawaban :

/*
1. penjualanPerMenu dibuat sebagai object karena setiap nama menu
   digunakan sebagai kunci dan jumlah terjual sebagai nilainya.
   Bracket notation dipakai karena nama menu disimpan di variabel
   namaMenu, sehingga bisa digunakan sebagai kunci object.

2. Object.keys menghasilkan array berisi nama-nama menu.
   Object.values menghasilkan array berisi jumlah yang terjual.
   Contohnya, jika Kopi Susu terjual 2 dan Roti Bakar terjual 1,
   Object.keys menghasilkan ["Kopi Susu", "Roti Bakar"],
   sedangkan Object.values menghasilkan [2, 1].

3. splice mengubah array yang digunakan, sedangkan slice tidak
   mengubah array aslinya. Buktinya, setelah splice dijalankan
   pada salinan array, isi salinan berkurang satu kode,
   tetapi laporan.kodeLunas tetap sama seperti sebelumnya.
   includes dan indexOf hanya memeriksa array, tidak mengubahnya.

4. toFixed menghasilkan string atau teks, bukan angka.
   Karena rataRata harus berupa angka, hasil toFixed perlu
   diubah kembali menggunakan Number jika ingin disimpan sebagai
   angka. Jika tidak diubah, hasilnya berupa teks sehingga
   operasi matematika selanjutnya bisa menghasilkan perilaku
   yang berbeda.

5. Hasil pengecekan seharusnya true jika jumlah kode yang
   dipisahkan oleh split(", ") sama dengan jumlah transaksi lunas.
   Hasilnya true karena setiap kode lunas ditambahkan dengan push
   dan dipisahkan menggunakan koma serta spasi.
   Jika tidak ada transaksi lunas, hasil pengecekan juga true
   karena jumlah kode dan jumlah transaksi lunas sama-sama 0.
*/

