/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            colors: {
                default: "#E0E0E0",
                defaultD: "#AEAEAE",
                primary: "#2962FF",
                primaryD: "#0039CB",
                secondary: "#455A64",
                secondaryD: "#1C313A",
                danger: "#D32F2F",
                dangerD: "#9A0007",
            },
        },
    },
    plugins: [],
};
