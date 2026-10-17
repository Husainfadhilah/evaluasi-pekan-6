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

