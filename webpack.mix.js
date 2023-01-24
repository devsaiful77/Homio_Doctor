const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.webpackConfig({
    output: {
        chunkFilename: 'chunks/[name].js',
        publicPath: '/',
    },
});


mix.js('resources/microadmin/app.js', 'public/js')
    .vue()
    .css('resources/css/admin.css', 'public/css/admin.css');

mix.js('resources/microfrontend/app.js', 'public/js/frontend.js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .css('resources/css/app.css', 'public/css/frontend.css');

