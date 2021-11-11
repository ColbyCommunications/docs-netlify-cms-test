module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ['./src/**/*.js'],
    theme: {
        fontFamily: {
            sans: ['libre-franklin', 'sans-serif'],
        },
        fontSize: {
            header: '2.5rem',
            xs: '.75rem',
            sm: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            primary: '#002878',
            accent: '#d95900',
            'accent-hover': '#bf4f02',
        }),
        container: {
            center: true,
        },
        extend: {},
    },
    variants: {},
    plugins: [],
};
