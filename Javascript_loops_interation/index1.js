// 1. Menambahkan contoh untuk console.assert
// Hanya mencetak pesan jika pernyataan yang diberikan bernilai false
console.assert(3 > 5, "3 tidak lebih besar dari 5"); // Akan mencetak pesan karena kondisi false
console.assert(5 > 3, "Ini tidak akan muncul di console"); // Tidak akan mencetak apa-apa karena kondisi true

// 2. Menambahkan console.dir untuk melihat properti objek secara mendalam
const person = { name: "Alice", age: 30, address: { city: "Wonderland", zip: "12345" } };
console.dir(person, { depth: null }); // Mencetak objek secara detail, cocok untuk melihat objek yang kompleks

// 3. Menambahkan console.count untuk menghitung berapa kali log tertentu muncul
console.count("Apple"); // Menampilkan Apple: 1
console.count("Banana"); // Menampilkan Banana: 1
console.count("Apple"); // Menampilkan Apple: 2
console.countReset("Apple"); // Mereset hitungan untuk "Apple"
console.count("Apple"); // Menampilkan Apple: 1 (karena sudah di-reset)

// 4. Menggunakan placeholders dengan console.log
const name = "Alice";
const age = 30;
console.log("Nama: %s, Umur: %d tahun", name, age); // Menggunakan %s untuk string dan %d untuk angka

// 5. Menambahkan contoh untuk console.groupCollapsed
// Grup ini akan terlipat secara default
console.groupCollapsed("Detail User");
console.log("Name: Alice");
console.log("Age: 30");
console.groupEnd();

// 6. Menambahkan console.trace untuk melacak asal log
function firstFunction() {
    secondFunction();
}
function secondFunction() {
    console.trace("Jejak panggilan fungsi");
}
firstFunction(); // Akan mencetak jejak panggilan fungsi ke console

// 7. Menambahkan console.clear untuk membersihkan console
// console.clear(); // Hapus tanda komentar ini untuk membersihkan console (hanya bekerja di DevTools browser)

// 8. Menambahkan console.log dengan objek bergaya
console.log("%cIni teks dengan gaya", "color: blue; font-size: 20px; font-weight: bold;"); // Membuat teks bergaya

// 9. Menambahkan contoh untuk mencetak objek dalam bentuk tabel dengan lebih detail
const users = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];
console.table(users, ["id", "name"]); // Menampilkan tabel dengan kolom yang dipilih

// 10. Menambahkan contoh untuk menghitung waktu eksekusi kode yang lebih kompleks
console.time("Nested Timer");
setTimeout(() => {
    console.time("Inner Timer");
    for (let i = 0; i < 1000000; i++) {} // Kode untuk diukur
    console.timeEnd("Inner Timer");
}, 1000);
console.timeEnd("Nested Timer");

// 11. Menambahkan console.info dan console.debug sebagai alternatif log
console.info("Ini adalah pesan info"); // Pesan informasi
console.debug("Ini adalah pesan debug"); // Pesan untuk debugging
