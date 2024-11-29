/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Đảm bảo rằng bạn chỉ định đường dẫn chính xác tới các file cần áp dụng Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        btnAccent: 'var(--buttonAccent)',
        btnAccentHover: 'var(--buttonAccentHover)',
        customBor: 'var(--customBorder)',
      },
      fontFamily: {
        logoFont: ['"Dancing Script"', 'cursive'],
        bodyFont: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
