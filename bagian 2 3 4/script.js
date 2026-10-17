/*
 * TUJUAN PROJECT
 * Latihan dasar JavaScript (Evaluasi Pekan 6): membuat dan memahami object
 * beserta pemilihan tipe data yang tepat untuk setiap properti.
 * Object `kedai` merepresentasikan data sebuah kedai, mulai dari identitas,
 * status buka/tutup, kontak, sampai jam operasional (object bersarang).
 */
 
const kedai = {
  nama: "Kedai Kopi",          
  pemilik: "Budi Santoso",     
  tahunBerdiri: 2019,           
  sedangBuka: true,             
  nomorWhatsApp: "081234567890", 
  website: null,                
  jamOperasional: {             
    buka: "08:00",              
    tutup: "22:00",             
  },
};
 
console.log(kedai);
 
// Cek tipe data tiap properti
for (const kunci in kedai) {
  console.log(`${kunci}: ${typeof kedai[kunci]}`);
}

//N0. 2

const menu = [
  {
    nama: "Kopi Susu",
    kategori: "Minuman",
    harga: 15000,
    stok: 10
  },
  {
    nama: "Kopi Hitam",
    kategori: "Minuman",
    harga: 10000,
    stok: 8
  },
  {
    nama: "Teh Manis",
    kategori: "Minuman",
    harga: 5000,
    stok: 12
  },
  {
    nama: "Roti Bakar",
    kategori: "Makanan",
    harga: 12000,
    stok: 5
  },
  {
    nama: "Kentang Goreng",
    kategori: "Camilan",
    harga: 10000,
    stok: 7
  },
  {
    nama: "Nasi Goreng",
    kategori: "Makanan",
    harga: 18000,
    stok: 4
  },
  {
    nama: "Pisang Goreng",
    kategori: "Camilan",
    harga: 8000,
    stok: 0
  },
  {
    nama: "Mie Goreng",
    kategori: "Makanan",
    harga: 15000,
    stok: 6
  }
];

console.log(menu);

//NO.3

const transaksiMentah = [
  {
    kode: "trx-001",
    pelanggan: " rina WULANDARI ",
    hari: "sabtu",
    uangBayar: "150.000",
    voucher: " diskon10 ",
    pesanan: [
      { menu: " kopi SUSU", jumlah: "2" },
      { menu: " Roti Bakar ", jumlah: "1" }
    ]
  },
  {
    kode: "TRX-002",
    pelanggan: " budi santoso ",
    hari: "jumat",
    uangBayar: "75000",
    voucher: " ",
    pesanan: [
      { menu: "Kopi Hitam", jumlah: "2" },
      { menu: "Kentang Goreng", jumlah: "1" }
    ]
  },
  {
    kode: "trx-003",
    pelanggan: "SITI AMALIA",
    hari: "senin",
    uangBayar: "10000",
    voucher: "diskon10",
    pesanan: [
      { menu: "Nasi Goreng", jumlah: "2" }
    ]
  },
  {
    kode: "trx-004",
    pelanggan: "   ",
    hari: "minggu",
    uangBayar: "50000",
    voucher: "",
    pesanan: [
      { menu: "Kopi Susu", jumlah: "1" }
    ]
  },
  {
    kode: "trx-005",
    pelanggan: "andi pratama",
    hari: "rabu",
    uangBayar: "50000",
    voucher: " hemat ",
    pesanan: []
  },
  {
    kode: "trx-006",
    pelanggan: " dewi LESTARI ",
    hari: "selasa",
    uangBayar: "100000",
    voucher: " diskon10 ",
    pesanan: [
      { menu: "Menu Tidak Ada", jumlah: "2" },
      { menu: "Mie Goreng", jumlah: "0" }
    ]
  }
];

console.log(transaksiMentah);