/*
Challenge   : Swap Two Values
Level       : Easy
Concept     : Variables, Temporary Storage, Return Array
Description : Menukar posisi dua buah nilai (a dan b).
              Menggunakan variabel bantuan 'temp' untuk menyimpan nilai sementara
              agar nilai asli tidak hilang saat proses pertukaran.
Example     :
            swap(5, 10) // [10, 5]
            swap(1, 99) // [99, 1]
            swap(7, 3)  // [3, 7]
*/

const swap = (a,b) => {
    let temp = a
    a = b
    b = temp
    return [a,b]
}

console.log(swap(5, 10))
console.log(swap(1, 99))
console.log(swap(7, 3))

/* WORKFLOW : 
1. Simpan nilai 'a' ke dalam variabel penampung 'temp'.
2. Timpa nilai 'a' dengan nilai dari 'b'.
3. Isi variabel 'b' dengan nilai yang tadi disimpan di 'temp'.
4. Kembalikan hasilnya dalam bentuk array [a, b].
*/
