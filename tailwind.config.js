const dirs = ['components', 'assets'];

const tailwindConfig = {
    content: dirs.map((dir) => `./${dir}/**/*.{vue,ts,css,scss}`),
    important: '.tailwind-root',
    theme: {
        screens: {
            s: '320px',
            m: '768px',
            l: '1024px',
            xl: '1280px',
        },
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [],
};

module.exports = tailwindConfig;
