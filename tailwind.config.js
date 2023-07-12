/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
    plugins: [require("@tailwindcss/typography")],
    theme: {
        colors: {
            bg: "#ffffff",
            text: "#000000",
            darkBg: "#1D1D1D",
            darkText: "#D3D1D2",
            gray: "#7B797A",
        },
    },
};
