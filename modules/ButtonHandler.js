// ButtonHandler.js (Mengelola interaksi tombol)

export default class ButtonHandler {
  constructor(calculator) {
    this.calculator = calculator; // Menyimpan referensi ke objek kalkulator
  }

  handleButton(value) {
    // Menangani klik pada tombol berdasarkan nilai yang diberikan

    if (!isNaN(value) || value === ".") {
      this.calculator.append(value); // Jika tombol adalah angka atau titik desimal, tambahkan ke display
    } else if (value === "AC") {
      this.calculator.clear(); // Jika tombol AC, bersihkan display
    } else if (value === "+/-") {
      this.calculator.togglesign(); // Jika tombol +/- tekan, toggle tanda
    } else if (value === "√") {
      this.calculator.calculateSquareRoot(); // Menghitung akar kuadrat
    } else if (value === "x²") {
      this.calculator.calculateSquare(); // Menghitung kuadrat
    } else if (value === "=") {
      this.calculator.calculate(); // Menghitung hasil dari ekspresi
    } else if (value === "π") {
      this.calculator.appendPi(); // Menambahkan n ke ekspresi
    } else if (value === "e") {
      this.calculator.appendE(); // Menambahkan e ke ekspresi
    } else if (value === "(") {
      this.calculator.appendOpenParenthesis(); // Menambahkan tanda buka kurung
    } else if (value === ")") {
      this.calculator.appendCloseParenthesis(); // Menambahkan tanda tutup kurung
    } else {
      this.calculator.append(value); // menambahkan nilai lainnya ke display
    }
  }
}
