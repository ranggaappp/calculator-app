// BasicCalculator.js
export default class BasicCalculator {
  constructor(display) {
    //memastikan kelas dasar tidak bisa di instansiasi langsung
    if (new.target === BasicCalculator) {
      throw new TypeError("Cannot instantiate BasicCalculator directly");
    }
    this.display = display; // Menyimpan referensi ke objek Display
  }

  append(value) {
    // Menambahkan nilai ke display ; jika display saat ini "0", ganti dengan nilai baru
    this.display.value =
      this.display.value === "0" ? value : this.display.value + value;
  }

  clear() {
    //mengatur display kembali ke "0"
    this.display.clear();
  }

  toggleSign() {
    // mengubah tanda positif /negatif dari nilai saat ini
    this.display.value = this.display.value.startsWith("-")
      ? this.display.value.slice(1) //menghapus tanda negatif
      : "-" + this.display.value; //menambahkan tanda negatif
  }

  calculate() {
    //metode ini harus di implementasikan dalam kelas turunan
    throw new Error("Method 'calculate()' must be implemented.");
  }
}
