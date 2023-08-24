let nama = prompt("Masukkan Nama: ");
let nilai = prompt("Masukkan Nilai: ");
let status = "";

if (nilai >= 60) {
    status = "Lulus";
} else {
    status = "Tidak Lulus";
}

console.log("Nama: " + nama);
console.log("Nilai: " + nilai);
console.log("Status Kelulusan: " + status);

