module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './src/**/**/*,js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            height: {
                125: '31.25rem',
            },
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
                'landing-background':
                    'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)',
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
