// 1. String
let greeting = "Hello, World!";       // Menggunakan tanda kutip ganda
let name = 'Sahrianti';                // Menggunakan tanda kutip tunggal
let message = `Welcome, ${name}`;      // Menggunakan template literal dengan backticks
console.log("String:");
console.log(greeting);                 // Output: Hello, World!
console.log(message);                  // Output: Welcome, Sahrianti

// 2. Boolean
let isActive = true;
let isFinished = false;
console.log("\nBoolean:");
console.log("isActive:", isActive);    // Output: isActive: true
console.log("isFinished:", isFinished); // Output: isFinished: false

// 3. Numbers
let age = 25;                          // Integer
let height = 1.75;                     // Float
console.log("\nNumbers:");
console.log("age + height =", age + height); // Output: 26.75

// 4. Array
let fruits = ["Apple", "Banana", "Mango"];
console.log("\nArray:");
console.log("First fruit:", fruits[0]); // Output: Apple
console.log("Array length:", fruits.length); // Output: 3

// 5. BigInt
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt menggunakan "n" di akhir
console.log("\nBigInt:");
console.log("Big number:", bigNumber); // Output: 1234567890123456789012345678901234567890n

// 6. Undefined and Null
let notInitialized;                     // Tidak diinisialisasi, jadi nilainya adalah undefined
let emptyValue = null;                  // Null berarti tidak ada nilai
console.log("\nUndefined and Null:");
console.log("notInitialized:", notInitialized); // Output: undefined
console.log("emptyValue:", emptyValue);         // Output: null

// 7. Objects and Symbols
// Object
let person = {
    name: "Sahrianti",
    age: 25,
    isStudent: true
};
console.log("\nObject:");
console.log("Person name:", person.name); // Output: Sahrianti

// Symbol
let uniqueID = Symbol("id");
person[uniqueID] = 12345;               // Menambah properti unik ke objek person
console.log("Unique ID:", person[uniqueID]); // Output: 12345

// 8. The typeof Operator
console.log("\nThe typeof Operator:");
console.log("typeof greeting:", typeof greeting);    // Output: string
console.log("typeof isActive:", typeof isActive);    // Output: boolean
console.log("typeof age:", typeof age);              // Output: number
console.log("typeof bigNumber:", typeof bigNumber);  // Output: bigint
console.log("typeof notInitialized:", typeof notInitialized); // Output: undefined
console.log("typeof person:", typeof person);        // Output: object
console.log("typeof uniqueID:", typeof uniqueID);    // Output: symbol
