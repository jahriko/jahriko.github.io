/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                adama: {
                    DEFAULT: "#010210",
                    50: "#0516FF",
                    100: "#0010EB",
                    200: "#000ED1",
                    300: "#000CB8",
                    400: "#000B9E",
                    500: "#000985",
                    600: "#00076B",
                    700: "#000152",
                    800: "#000438",
                    900: "#01001F",
                },
                blurama: {
                    DEFAULT: "#2E35F3",
                },
                pinkrama: {
                    DEFAULT: "#808BC7",
                },
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                aboreto: ["Aboreto", "cursive"],
            },
        },
    },
    plugins: [],
};
