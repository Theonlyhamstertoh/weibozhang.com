import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["DM Sans Variable", ...defaultTheme.fontFamily.sans],
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        h1: {
                            fontSize: theme("fontSize.3xl"),
                        },
                        "h1,h2": {
                            fontWeight: "500",
                            letterSpacing: theme("letterSpacing.loose"),
                        },
                        h3: {
                            fontWeight: "600",
                        },
                        code: {
                            color: theme("colors.indigo.500"),
                        },
                    },
                },
                invert: {
                    css: {
                        "h1,h2,h3,h4,h5,h6": {
                            color: theme("colors.gray.100"),
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
