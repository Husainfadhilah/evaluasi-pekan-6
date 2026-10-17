
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
