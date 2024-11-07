// Contoh pencetakan ke konsol
console.log("Hello, World!"); // Mencetak string
console.log(42); // Mencetak angka

const user = { name: "Alice", age: 30 };
console.log(user); // Mencetak objek

console.error("This is an error message."); // Mencetak pesan kesalahan
console.warn("This is a warning message."); // Mencetak pesan peringatan

const fruits = ["Apple", "Banana", "Cherry"];
console.table(fruits); // Mencetak array dalam format tabel

console.group("User  Information");
console.log("Name: Alice");
console.log("Age: 30");
console.groupEnd(); // Menutup grup

console.time("My Timer");
for (let i = 0; i < 1000000; i++) {} // Kode untuk diukur
console.timeEnd("My Timer"); // Mencetak waktu eksekusi