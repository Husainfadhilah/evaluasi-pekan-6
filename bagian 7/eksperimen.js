//Potongan A
console.log("  Hai Kawan  ".trim().length);
console.log("Kopi Susu".toUpperCase().slice(0, 4));
console.log("a,b,c".split(",").length);
console.log("banana".replace("a", "o"));
console.log("banana".replaceAll("a", "o"));
console.log(parseInt("42px"));
console.log(Number("42px"));
console.log(parseInt("3.99"));
console.log(typeof (3.14159).toFixed(2));
console.log((0.1 + 0.2).toFixed(2));
console.log("10" + 5 * 2);
console.log(!0 && !"");
 
//JAWABAN 
// 1. 9
// 2. KOPI
// 3. 3
// 4. bonana
// 5. bonono
// 6. 42
// 7. NaN
// 8. string 
// 9. 0. 30
// 10. 1010
// 11. true

//Potongan B

let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan);
console.log(hapus);
console.log(angka);

function ganda(n) {
  return n * 2;
}
function cetak(n) {
  console.log(n * 2);
}
console.log(ganda(4) + ganda(1));
console.log(cetak(4));

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) {
    this.stok -= n;
    return this.stok;
  },
};
toko.jual(2);
console.log(toko.jual(1));
console.log("stok" in toko);
for (let k in toko) {
  console.log(k);
}

//JAWABAN
// 1. 20,30
// 2. 20,30
// 3. 10,40
// 4. 10
// 5. 8
// 6. udefined
// 7. 2
// 8. true
// 9. nama
// 10. stok
// 11. jual

//Potongan C
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 5) {
    break;
  }
  hasil += i;
}
console.log(hasil);

let n = 3;
let kali = 1;
while (n > 0) {
  kali *= n;
  n--;
}
console.log(kali);

let x = 0;
do {
  x += 5;
} while (x < 3);
console.log(x);

for (let huruf of "ABC") {
  console.log(huruf + huruf.toLowerCase());
}

//JAWABAN

// 1. 134
// 2. 6
// 3. 5
// 4. Aa
// 5. Bb
// 6. Cc

//NO.2
// 1. Function declaration bisa dipanggil sebelum didefinisikan

console.log(tambah(2, 3)); // Hasil: 5

function tambah(a, b) {
  return a + b;
}

// Function expression tidak bisa dipanggil sebelum didefinisikan

// console.log(kali(2, 3));
// Error: Cannot access 'kali' before initialization

const kali1 = function (a, b) {
  return a * b;
};

console.log(kali1(2, 3)); // Hasil: 6


// 2. Slice tidak mengubah array asli, sedangkan splice mengubahnya

let angka1 = [10, 20, 30, 40];

let hasilSlice = angka1.slice(1, 3);
console.log(hasilSlice); // Hasil: [20, 30]
console.log(angka1); // Hasil: [10, 20, 30, 40]

let hasilSplice = angka1.splice(1, 2);
console.log(hasilSplice); // Hasil: [20, 30]
console.log(angka1); // Hasil: [10, 40]


// 3. For...in menghasilkan indeks, sedangkan for...of menghasilkan nilai

let buah = ["Apel", "Jeruk", "Mangga"];

for (let indeks in buah) {
  console.log(indeks); // Hasil: 0, 1, 2 (berupa teks)
}

for (let nilai of buah) {
  console.log(nilai); // Hasil: Apel, Jeruk, Mangga
}


// 4. ToFixed menghasilkan teks

console.log((5).toFixed(1)); // Hasil: "5.0"
console.log((5).toFixed(1) + 1); // Hasil: "5.01", bukan 6.1


// 5. Enam nilai Falsy tidak masuk ke dalam if

if (false) {
  console.log("false masuk");
} else {
  console.log("false tidak masuk");
}

if (0) {
  console.log("0 masuk");
} else {
  console.log("0 tidak masuk");
}

if ("") {
  console.log("String kosong masuk");
} else {
  console.log("String kosong tidak masuk");
}

if (null) {
  console.log("null masuk");
} else {
  console.log("null tidak masuk");
}

if (undefined) {
  console.log("undefined masuk");
} else {
  console.log("undefined tidak masuk");
}

if (NaN) {
  console.log("NaN masuk");
} else {
  console.log("NaN tidak masuk");
}


// Tiga nilai Truthy masuk ke dalam if

if ("0") {
  console.log('"0" masuk');
}

if ([]) {
  console.log("Array kosong masuk");
}

if ({}) {
  console.log("Object kosong masuk");
}