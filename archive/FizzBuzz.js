/*
Challenge   : FizzBuzz
Level       : Easy
Concept     : Looping, Conditionals
Description : Fungsi ini menerima angka (n), lalu mengembalikan array 
              berisi 1 sampai n dengan aturan:
              - Angka kelipatan 3 menjadi "Fizz"
              - Angka kelipatan 5 menjadi "Buzz"
              - Kelipatan keduanya menjadi "FizzBuzz"
              - Selain itu tetap angka biasa
Example     : fizzBuzz(5) -> [1, 2, "Fizz", 4, "Buzz"]
Workflow    : 
    1. Pengecekan Fizz
        mengecek apakah i menghasilkan 0 jika di modulo 3, jika iya menjadi
        string "Fizz", jika tidak menjadi string ""
    2. Pengecekan Buzz
        Sama seperti Fizz jika i menghasilkan 0 jika di modulo 5 maka ubah menjadi "Buzz"
        jika tidak jadikan string kosong
    3. Penggabungan 
        - Fizz + "" -> Fizz
        - "" + Buzz -> Buzz
        - Fizz + Buzz -> FizzBuzz
        - "" + "" -> falsy jadi ambil i  (karena OR mengambil nilai paling kanan jika yang
        pertama falsy)
*/

const fizzBuzz = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    const fizz = i % 3 === 0 ? "Fizz" : "";
    const buzz = i % 5 === 0 ? "Buzz" : "";
    arr.push(fizz + buzz || i);
  }
  return arr;
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
