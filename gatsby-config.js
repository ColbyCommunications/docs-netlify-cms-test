/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `Test`,
        description: `I love Gatsby!`,
        author: `Brandon Waltz,`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-netlify`,
            options: {
                headers: {
                    '/*': ['Cache-Control: max-age=3600', 'Cache-Control: public'],
                },
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('sass'),
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Colby Identity Toolkit',
                short_name: 'Colby Identity Toolkit',
                start_url: '/',
                background_color: '#002878',
                theme_color: '#002878',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'src/images/favicon.png', // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                crossOrigin: `use-credentials`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content`,
            },
        },
        `gatsby-transformer-remark`,
        `@dream-bit-de/gatsby-plugin-better-page-tree`,
        /*{
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
                queries: require('./src/utils/algolia-queries'),
            },
        },*/
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
};
