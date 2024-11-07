function divideNumbers(a, b) {
    try {
        // Memeriksa apakah kedua parameter diisi
        if (a === undefined || b === undefined) {
            throw new Error("Kedua parameter harus diisi.");
        }

        // Memeriksa apakah kedua input adalah angka
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Input harus berupa angka.");
        }

        // Memeriksa apakah b bukan nol
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }

        // Melakukan pembagian jika valid
        return a / b;
    } catch (error) {
        // Menangkap dan menampilkan pesan kesalahan
        console.error("Terjadi kesalahan: " + error.message);
        return null; // Mengembalikan null jika terjadi kesalahan
    }
}

// Contoh penggunaan
console.log(divideNumbers(10, 2));   // Output: 5
console.log(divideNumbers(10));      // Output: Terjadi kesalahan: Kedua parameter harus diisi.
console.log(divideNumbers(10, 0));   // Output: Terjadi kesalahan: Pembagian dengan nol tidak diperbolehkan.
console.log(divideNumbers(10, 'a')); // Output: Terjadi kesalahan: Input harus berupa angka.
