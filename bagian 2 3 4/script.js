
const kasir = {
  menu: menu,
  saldoKas: 0,
  riwayat: [],
  pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

  cariMenu(nama) {
    for (let item of this.menu) {
      if (item.nama.toLowerCase() === nama.toLowerCase()) {
        return item;
      }
    }

    return null;
  },

  hitungSubtotal(pesanan) {
    let subtotal = 0;
    let itemValid = [];
    let itemTidakValid = [];

    for (let item of pesanan) {
      let menuDitemukan = this.cariMenu(item.menu);
      let jumlah = item.jumlah;

      if (!menuDitemukan) {
        itemTidakValid.push({
          menu: item.menu,
          alasan: "Menu tidak ditemukan"
        });
        continue;
      }

      if (jumlah <= 0) {
        itemTidakValid.push({
          menu: item.menu,
          alasan: "Jumlah tidak valid"
        });
        continue;
      }

      if (menuDitemukan.stok < jumlah) {
        itemTidakValid.push({
          menu: item.menu,
          alasan: "Stok tidak cukup"
        });
        continue;
      }

      subtotal = subtotal + menuDitemukan.harga * jumlah;

      itemValid.push({
        menu: menuDitemukan,
        jumlah: jumlah,
        harga: menuDitemukan.harga
      });
    }

    return {
      subtotal: subtotal,
      itemValid: itemValid,
      itemTidakValid: itemTidakValid
    };
  },

  hitungPromoHari(hari) {
    switch (hari) {
      case "jumat":
        return 3000;

      case "sabtu":
      case "minggu":
        return 5000;

      default:
        return 0;
    }
  },

  hitungDiskon(subtotal, persenVoucher) {
    let persenSubtotal;

    if (subtotal >= 100000) {
      persenSubtotal = 15;
    } else if (subtotal >= 50000) {
      persenSubtotal = 10;
    } else if (subtotal >= 25000) {
      persenSubtotal = 5;
    } else {
      persenSubtotal = 0;
    }

    let persenDipakai = Math.max(persenSubtotal, persenVoucher);

    return Math.round(subtotal * persenDipakai / 100);
  },

  hitungPajak(nilai, tarif = 0.11) {
    return Math.round(nilai * tarif);
  },

  hitungKembalianPecahan(kembalian) {
    if (kembalian < 0) {
      return null;
    }

    let hasil = {};
    let sisa = kembalian;

    for (let nilai of this.pecahan) {
      let jumlahLembar = 0;

      while (sisa >= nilai) {
        sisa = sisa - nilai;
        jumlahLembar++;
      }

      if (jumlahLembar > 0) {
        hasil[nilai] = jumlahLembar;
      }
    }

    hasil.sisa = sisa;

    return hasil;
  },

  prosesTransaksi(trx) {
    let hasil;

    if (!trx.pelanggan) {
      hasil = {
        kode: trx.kode,
        pelanggan: trx.pelanggan,
        status: "DITOLAK",
        alasan: "Nama pelanggan kosong"
      };

      this.riwayat.push(hasil);
      return hasil;
    }

    if (trx.pesanan.length === 0) {
      hasil = {
        kode: trx.kode,
        pelanggan: trx.pelanggan,
        status: "DITOLAK",
        alasan: "Pesanan kosong"
      };

      this.riwayat.push(hasil);
      return hasil;
    }

    let dataPesanan = this.hitungSubtotal(trx.pesanan);

    if (dataPesanan.itemValid.length === 0) {
      hasil = {
        kode: trx.kode,
        pelanggan: trx.pelanggan,
        status: "DITOLAK",
        alasan: "Tidak ada item valid"
      };

      this.riwayat.push(hasil);
      return hasil;
    }

    let subtotal = dataPesanan.subtotal;
    let promoHari = this.hitungPromoHari(trx.hari);
    let diskon = this.hitungDiskon(subtotal, trx.persenVoucher);

    let nilaiSetelahDiskon = subtotal - diskon - promoHari;

    if (nilaiSetelahDiskon < 0) {
      nilaiSetelahDiskon = 0;
    }

    let pajak = this.hitungPajak(nilaiSetelahDiskon);
    let total = nilaiSetelahDiskon + pajak;
    let uangBayar = trx.uangBayar;
    let kembalian = uangBayar - total;
    let status;

    if (uangBayar >= total) {
      status = "LUNAS";
    } else {
      status = "KURANG";
    }

    let pecahanKembalian = null;

    if (status === "LUNAS") {
      for (let item of dataPesanan.itemValid) {
        item.menu.stok = item.menu.stok - item.jumlah;
      }

      this.saldoKas = this.saldoKas + total;
      pecahanKembalian = this.hitungKembalianPecahan(kembalian);
    }

    hasil = {
      kode: trx.kode,
      pelanggan: trx.pelanggan,
      status: status,
      subtotal: subtotal,
      promoHari: promoHari,
      diskon: diskon,
      pajak: pajak,
      total: total,
      uangBayar: uangBayar,
      kembalian: kembalian,
      pecahanKembalian: pecahanKembalian,
      itemValid: dataPesanan.itemValid,
      itemTidakValid: dataPesanan.itemTidakValid
    };

    this.riwayat.push(hasil);

    return hasil;
  },

  cetakStruk(hasil) {
    console.log(`===== STRUK ${hasil.kode} =====`);
    console.log(`Pelanggan: ${hasil.pelanggan}`);

    if (hasil.status === "DITOLAK") {
      console.log(`Alasan: ${hasil.alasan}`);
      console.log("============================");
      return;
    }

    console.log("Daftar Pesanan:");

    for (let i = 0; i < hasil.itemValid.length; i++) {
      let item = hasil.itemValid[i];

      console.log(
        `${i + 1}. ${item.menu.nama} x${item.jumlah} - ${formatRupiah(item.harga * item.jumlah)}`
      );
    }

    if (hasil.itemTidakValid.length > 0) {
      console.log("Item Tidak Valid:");

      for (let item of hasil.itemTidakValid) {
        console.log(`${item.menu}: ${item.alasan}`);
      }
    }

    console.log(`Subtotal: ${formatRupiah(hasil.subtotal)}`);
    console.log(`Promo Hari: ${formatRupiah(hasil.promoHari)}`);
    console.log(`Diskon: ${formatRupiah(hasil.diskon)}`);
    console.log(`Pajak: ${formatRupiah(hasil.pajak)}`);
    console.log(`Total: ${formatRupiah(hasil.total)}`);
    console.log(`Uang Bayar: ${formatRupiah(hasil.uangBayar)}`);
    console.log(`Kembalian: ${formatRupiah(hasil.kembalian)}`);
    console.log(`Status: ${hasil.status}`);

    if (hasil.pecahanKembalian !== null) {
      console.log("Pecahan Kembalian:", hasil.pecahanKembalian);
    }

    console.log("============================");
  }
};

//MENJALANKAN TRANSAKSI

const TARGET_KAS = 1000000000;

for (let trx of transaksiBersih) {
  let hasil = kasir.prosesTransaksi(trx);

  kasir.cetakStruk(hasil);

  if (kasir.saldoKas >= TARGET_KAS) {
    console.log("Target kas tercapai");
    break;
  }
}
