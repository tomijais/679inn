/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-custom-pattern": "url('/hero3.png')",
        "homepage1-pattern": "url('/homepage/DSC_0678-scaled.jpg')",
        "homepage2-pattern": "url('/homepage/IMG_0614.jpg')",
        "homepage3-pattern": "url('/homepage/IMG_0616.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
