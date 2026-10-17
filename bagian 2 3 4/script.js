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
