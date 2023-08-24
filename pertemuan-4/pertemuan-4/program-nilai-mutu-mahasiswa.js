let nilai = Number(prompt("Masukkan Nilai (0 - 100)"));
let mutu = '';

// nilai 78

// 78 >= 90 DAN 78 <= 100 ? 
if (nilai >= 90 && nilai <= 100) {
    mutu = 'A';
} 
else if (nilai >= 80 && nilai < 90) {
    mutu = 'B';
} 
else if (nilai >= 70 && nilai < 80) {
    mutu = 'C';
} 
else if (nilai >= 60 && nilai < 70) {
    mutu = 'D';
} 
else if (nilai >= 0 && nilai < 60) {
    mutu = 'E';
} 
else {
    mutu = 'Inputan Salah. Perbaiki dulu dong..';
}

alert(`Mutu = ${mutu}`);

