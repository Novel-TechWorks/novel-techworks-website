/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#046dc4",  // Bright blue accent
                bg: "#ffffff",       // White background for content sections
                text: "#1f2937",     // Dark slate text for readability
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                fadeInUp: {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                pulseLine: {
                    "0%, 100%": { opacity: 0.5 },
                    "50%": { opacity: 1 },
                },
                slideInLeft: {
                    "0%": { opacity: 0, transform: "translateX(50px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.8s ease-out forwards",
                fadeInUp: "fadeInUp 0.8s ease-out forwards",
                pulseLine: "pulseLine 2s ease-in-out infinite",
                slideInLeft: "slideInLeft 0.8s ease-out forwards",
            },
        },
    },
    plugins: [],
};
