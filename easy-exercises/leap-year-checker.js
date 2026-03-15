/*
Challenge   : Reverse Pyramid 
Level       : Easy
Concept     : Looping, String
Description : Tahun kabisat adalah tahun yang memiliki 366 hari (February punya 29 hari). 
            Sebuah tahun disebut kabisat jika memenuhi aturan berikut:
            - Habis dibagi 4 → kabisat
            - Tapi jika habis dibagi 100 → bukan kabisat
            - Kecuali jika habis dibagi 400 → kabisat lagi
            Buatlah function isLeapYear(year) yang mengecek apakah tahun tersebut kabisat atau bukan.
Example     :
            isLeapYear(2000) // true  → habis dibagi 400
            isLeapYear(1900) // false → habis dibagi 100, tapi tidak 400
            isLeapYear(2024) // true  → habis dibagi 4, tidak habis dibagi 100
            isLeapYear(2023) // false → tidak habis dibagi 4
*/

const isLeapYear = (year) => {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
};

console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2024));
console.log(isLeapYear(2023));

/* WORKFLOW : 
1. Prioritas Utama (400): Cek apakah tahun kelipatan 400? true->langsung Kabisat (Selesai).
2. Penyaring Abad (100): Jika bukan kelipatan 400, apakah kelipatan 100? true -> Bukan Kabisat (Selesai).
3. Syarat Dasar (4): Jika bukan keduanya, apakah kelipatan 4? true -> Kabisat. false -> Bukan Kabisat.
*/