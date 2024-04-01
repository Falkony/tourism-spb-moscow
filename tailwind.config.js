const tailwindConfig = {
    content: ['./src/**/*.{vue,js,ts,css, scss}'],
    theme: {
        screens: {
            s: '375px',
            m: '768px',
            l: '1024px',
            xl: '1280px',
            xxl: '1450px',
        },
        extend: {},
    },
    plugins: [],
};

module.exports = tailwindConfig;
