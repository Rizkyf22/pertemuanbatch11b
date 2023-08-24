// deklarasi variabel dan assignment nilai ke variabel
let A = "merah", 
    B = "biru",
    C = "";

console.log("Kondisi Awal: ");
console.log("A: " + A);
console.log("B: " + B);
console.log("C: " + C);

// pindahkan isi A ke C 
C = A;

// pindahkan isi B ke A 
A = B;

// pindahkan isi C ke B 
B = C;

// kosongkan isi C 
C = "";

console.log("Kondisi Akhir: ");
console.log("A: " + A);
console.log("B: " + B);
console.log("C: " + C);
