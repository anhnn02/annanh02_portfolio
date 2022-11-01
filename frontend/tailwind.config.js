module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "primary-light": "var(--primary-light)",
        "thirty": "var(--thirty)",
        "bgr": "var(--bgr)",
      },
    },
  },
  plugins: [require("daisyui")],
}