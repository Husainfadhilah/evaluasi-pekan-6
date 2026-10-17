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