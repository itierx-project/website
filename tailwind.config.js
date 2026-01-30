export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#000000",
                purple: {
                    neon: "#8A2BE2",
                    vibrant: "#7B61FF",
                },
                electric: "#0070FF", // Placeholder for ITIERX blue
                silver: "#C0C0C0",
            },
            fontFamily: {
                sans: ["Inter", "Geist", "ui-sans-serif", "system-ui"],
                mono: ["JetBrains Mono", "Roboto Mono", "ui-monospace", "SFMono-Regular"],
            },
        },
    },
    plugins: [],
}
