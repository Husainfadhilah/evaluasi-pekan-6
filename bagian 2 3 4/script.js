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
