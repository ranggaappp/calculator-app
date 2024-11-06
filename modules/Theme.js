export default class Theme {
  constructor() {
    this.toggleButton = document.getElementById("toggleButton");
  }

  initializeTheme() {
    // Mengecek tema yang tersimpan di localStorage atau default ke preferensi sistem
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = savedTheme || (prefersDarkScheme ? "dark" : "light");

    document.body.classList.add(theme);
    this.updateCalculatorTheme(theme);
  }

  toggleMode() {
    // Mengecek tema saat ini
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";

    // Mengubah ke tema yang berlawanan
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.classList.replace(currentTheme, newTheme);

    // Simpan tema baru di localStorage
    localStorage.setItem("theme", newTheme);

    // Perbarui tampilan tema
    this.updateCalculatorTheme(newTheme);
  }

  updateCalculatorTheme(theme) {
    // Ubah ikon pada tombol berdasarkan tema
    this.toggleButton.textContent = theme === "dark" ? "🌙" : "☀️";

    // Atur ulang kelas elemen untuk mencocokkan tema
    const calculator = document.getElementById("calculator");
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".button.number");

    calculator.className = `calculator ${theme}`;
    display.className = `display ${theme}`;
    buttons.forEach((button) => {
      button.className = `button number ${theme}`;
    });
  }
}
