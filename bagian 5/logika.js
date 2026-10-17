
function hitungFaktorial(n) {
  if (n < 0) {
    return null;
  }

  let hasil = 1;

  for (let i = 1; i <= n; i++) {
    hasil = hasil * i;
  }

  return hasil;
}

function cekPalindrom(teks) {
  teks = teks.trim().toLowerCase();

  if (teks === "") {
    return false;
  }

  let teksTerbalik = "";

  for (let i = teks.length - 1; i >= 0; i--) {
    teksTerbalik += teks[i];
  }

  return teks === teksTerbalik;
}

function hitungVokal(teks) {
  teks = teks.toLowerCase();

  let jumlah = 0;

  for (let i = 0; i < teks.length; i++) {
    if (
      teks[i] === "a" ||
      teks[i] === "i" ||
      teks[i] === "u" ||
      teks[i] === "e" ||
      teks[i] === "o"
    ) {
      jumlah++;
    }
  }

  return jumlah;
}

function cariTerbesar(daftar) {
  if (daftar.length === 0) {
    return null;
  }

  let nilai = daftar[0];
  let indeks = 0;

  for (let i = 1; i < daftar.length; i++) {
    if (daftar[i] > nilai) {
      nilai = daftar[i];
      indeks = i;
    }
  }

  return {
    nilai: nilai,
    indeks: indeks
  };
}

function hapusDuplikat(daftar) {
  let hasil = [];

  for (let i = 0; i < daftar.length; i++) {
    if (!hasil.includes(daftar[i])) {
      hasil.push(daftar[i]);
    }
  }

  return hasil;
}

function cekBilanganPrima(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(" HITUNG FAKTORIAL ");
console.log(hitungFaktorial(5));  
console.log(hitungFaktorial(0));  
console.log(hitungFaktorial(1));  
console.log(hitungFaktorial(-3)); 


console.log(" CEK PALINDROM ");
console.log(cekPalindrom("Katak"));  
console.log(cekPalindrom(" Malam ")); 
console.log(cekPalindrom("Kopi"));    
console.log(cekPalindrom(""));        


console.log(" HITUNG VOKAL ");
console.log(hitungVokal("Kedai Senja")); 
console.log(hitungVokal("RHYTHM"));      
console.log(hitungVokal("Aiueo"));       


console.log("CARI TERBESAR ");
console.log(cariTerbesar([12, 45, 7, 45, 30]));


console.log(cariTerbesar([3]));


console.log(cariTerbesar([]));


console.log(" HAPUS DUPLIKAT ");

let angkaAsli = [1, 2, 2, 3, 1];
console.log(hapusDuplikat(angkaAsli)); 
console.log("Array asli:", angkaAsli); 

let hurufAsli = ["a", "b", "a"];
console.log(hapusDuplikat(hurufAsli)); 
console.log("Array asli:", hurufAsli); 

console.log(hapusDuplikat([]));

console.log("=== CEK BILANGAN PRIMA ===");
console.log(cekBilanganPrima(2)); 
console.log(cekBilanganPrima(17));
console.log(cekBilanganPrima(15)); 
console.log(cekBilanganPrima(1));  
console.log(cekBilanganPrima(0)); 

//JAWABAN KOMENTAR

/*
1. Saya memilih function hitungFaktorial(5).
   Awalnya, hasil = 1.
   Putaran 1: i = 1, hasil = 1 * 1 = 1.
   Putaran 2: i = 2, hasil = 1 * 2 = 2.
   Putaran 3: i = 3, hasil = 2 * 3 = 6.
   Putaran 4: i = 4, hasil = 6 * 4 = 24.
   Putaran 5: i = 5, hasil = 24 * 5 = 120.
   Perulangan selesai dan function mengembalikan 120.

2. Array asli tidak berubah karena hapusDuplikat membuat
   array baru bernama hasil untuk menyimpan elemen unik.
   Saya menggunakan includes untuk memeriksa apakah elemen
   sudah ada di hasil. Jika belum ada, elemen ditambahkan
   menggunakan push.

3. Saya tidak menggunakan break pada cekBilanganPrima.
   Jika sebuah angka habis dibagi angka lain, function
   langsung mengembalikan false menggunakan return.
   Return menghentikan function, jadi break tidak diperlukan.
   Jika return diganti dengan cara yang hanya melewati
   pemeriksaan saat itu, hasilnya bisa salah jika tidak
   ada penanda bahwa angka tersebut bukan prima.

4. cariTerbesar([]) mengembalikan null karena array kosong
   tidak memiliki angka terbesar. Nilai 0 bisa membuat
   seolah-olah angka terbesar yang ditemukan adalah 0,
   padahal tidak ada angka di dalam array.

5. hitungFaktorial menggunakan for karena jumlah putaran
   diketahui dari nilai n, yaitu dari 1 sampai n.
   cekPalindrom juga menggunakan for untuk membaca karakter
   dari indeks terakhir sampai indeks pertama.
   Perulangan for cocok karena saya perlu mengatur indeks
   dan urutan pemeriksaan karakter secara langsung.
*/

