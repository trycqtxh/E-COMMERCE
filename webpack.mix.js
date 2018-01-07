let mix = require('laravel-mix');

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

mix
	// .copy('node_modules/icheck/icheck.min.js', 'public/js/icheck.min.js')
	// .copy('node_modules/icheck/skins/minimal/_all.css', 'public/css/icheck.css')
	// .js('resources/assets/js/_script_front_end.js', 'public/js')
   	.sass('resources/assets/sass/_style_front_end.scss', 'public/css')

// ReactJS
 	.react('resources/assets/react/react.jsx', 'public/js')
 	.react('resources/assets/admin-react/admin.jsx', 'public/js');
