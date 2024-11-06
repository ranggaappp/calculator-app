// ScientificCalculator.js (Kelas turunan dengan polimorfisme dan pewarisan)
import BasicCalculator from "./BasicCalculator.js";

export default class ScientificCalculator extends BasicCalculator {
  calculate() {
    const expression = this.display.value; // Mengambil ekspresi dari display
    const lastChar = expression.slice(-1); // Mengambil karakter terakhir dari ekspresi

    // Validasi untuk menghindari ekspresi tidak valid
    if (/[+\-*/.]/.test(lastChar)) {
      alert("Invalid expression! Ensure expression is complete."); // Pesan kesalahan jika ekspresi tidak valid
      return;
    }

    try {
      const result = eval(expression); // Menghitung hasil dari ekspresi
      this.display.value = Number.isInteger(result)
        ? result.toString() // Jika hasil adalah integer, tampilkan sebagai string
        : parseFloat(result.toFixed(5)).toString(); // Jika tidak, tampilkan dengan 5 angka desimal
    } catch (error) {
      alert("Invalid expression!"); // Pesan kesalahan jika terjadi error saat evaluasi
    }
  }

  calculateSquareRoot() {
    const currentValue = parseFloat(this.display.value); // Mengambil nilai saat ini dari display
    if (currentValue > 0) {
      // dipertanyakan logo > nya
      this.display.value = Math.sqrt(currentValue).toString(); // Menghitung akar kuadrat jika positif
    } else {
      alert("Cannot calculate square root of a negative number"); // Pesan kesalahan jika bilangan negatif
    }
  }

  calculateSquare() {
    const currentValue = parseFloat(this.display.value); // Mengambil nilai saat ini dari display
    this.display.value = (currentValue ** 2).toString(); // Menghitung kuadrat
  }

  appendPi() {
    this.appendWithMultiplier(Math.PI.toFixed(2)); // Menambahkan dengan dua angka desimal
  }

  appendE() {
    this.appendWithMultiplier(Math.E.toFixed(5));
  }

  appendOpenParenthesis() {
    //menambahkan tanda buka kurung jika display kosong atau diakhiri dengan operator
    if (this.display.value === "0" || /[+\-*/(]$/.test(this.display.value)) {
      this.append("(");
    }
  }

  appendCloseParenthesis() {
    const openParens = (this.display.value.match(/\(/g) || []).length; //menghitung tanda buka kurung
    const closeParens = (this.display.value.match(/\)/g) || []).length; //menghitung tanda tutup kurung
    //menambahkan tanda tutup kurung jika ada tanda buka yang belum ditutup
    if (openParens > closeParens && !/[+\-*/(]$/.test(this.display.value)) {
      this.append(")");
    }
  }

  appendWithMultiplier(value) {
    //menambahkan '*' jika ada angka sebelum pi atau e
    if (this.display.value === "0") {
      this.append("*" + value); // nambah '*' sebelum pi atau e
    } else {
      this.append(value); // jika tidak, tambahkan nilai tanpa '*'
    }
  }
}
