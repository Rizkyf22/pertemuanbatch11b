#include <stdio.h>

int main() {
    char nama[] = "";
    char status[] = "";
    float nilai;
    
    printf("Masukkan nama: ");
    scanf("%s", &nama);
    printf("Masukkan nilai: ");
    scanf("%f", &nilai);
    
    if (nilai >= 60) {
        strcpy(status, "Lulus");
    } else {
        strcpy(status, "Tidak Lulus");
    }
    
    printf("Nama = %s \n", nama);    
    printf("Nilai = %f \n", nilai);
    printf("Status Kelulusan = %s \n", status);

    return 0;
}