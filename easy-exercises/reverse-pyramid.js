/*
Challenge   : Reverse Pyramid 
Level       : Easy
Concept     : Looping, String
Description : sebuah fungsi yang menerima parameter angka n untuk menampilkan pola 
              segitiga siku-siku terbalik berisi karakter bintang (*), di mana baris
              pertama berjumlah n bintang dan terus berkurang satu hingga baris terakhir berjumlah 1 bintang
Example     : reversePyramid(5);
              Output :
              *****
              ****
              ***
              **
              *
*/

const reversePyramid = (n) => {
  for (let i = n; i > 0; i--) {
    let star = "";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    console.log(star);
  }
};

reversePyramid(5);

/* WORKFLOW : 
1. Fungsi reversePyramid dipanggil dengan argumen n = 5.
2. Outer Loop (Baris): Loop utama dimulai dari i = 5. Loop ini akan terus berjalan selama i > 0 dan berkurang 1 setiap putarannya (i--). Ini menentukan jumlah baris sekaligus jumlah bintang awal.
3. Reset String: Di setiap awal baris baru, variabel star dikosongkan ("").
4. Inner Loop (Kolom/Bintang): Loop kedua berjalan dari j = 0 sampai kurang dari nilai i.
  Saat i = 5, bintang dicetak 5 kali.
  Saat i = 4, bintang dicetak 4 kali, dan seterusnya.
5. Cetak Output: Setelah string star terisi sesuai jumlah i, hasilnya dicetak ke konsol (console.log).
6. Selesai: Proses berulang sampai i bernilai 0, lalu fungsi berhenti.
*/