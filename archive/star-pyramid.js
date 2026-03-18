/*
Challenge   : Star Pyramid 
Level       : Easy
Concept     : Looping, String
Description : Fungsi ini menerima parameter (n) dan mengembalikan jumlah "*"(bintang) ditiap iterasi, berdasakan banyak i
Example     : pyramid(5)
            Output :
            *
            **
            ***
            ****
            *****
*/

const pyramid = (n) => {
  let star = "";
  for (let i = 0; i < n; i++) {
    star += "*";
    console.log(star);
  }
};

pyramid(5);
/* Output :
    *
    **
    ***
    ****
    *****
 */

/* Workflow    : 
1. Variabel star ditambah dengan nilai terakhirnya + star "*" tiap iterasi, pada i=0. karena star masih kosong maka star = "*"
2. Setalah itu star yang sudah diubah akan di log
3. karena dimulai dari 1 bintang, makan akan terus bertambah tiap iterasi membentuk tanjakan kebawah
*/
