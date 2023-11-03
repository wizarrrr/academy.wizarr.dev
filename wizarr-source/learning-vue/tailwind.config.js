/** @type {import('tailwindcss').Config} */
module.exports = {
    /**
     * Here we tell Tailwind where our source files are located, 
     * so it can properly generate css based on the classes we use in our Vue components.
     */
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
}

