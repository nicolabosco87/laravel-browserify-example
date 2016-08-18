var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

//elixir.config.js.browserify.transformers.push({
//    name: 'babelify',
//    options: {
//        presets: ["es2015", "react", "stage-1"],
//        plugins: ["transform-class-properties"]
//    }
//});

elixir(function(mix) {
    mix.sass('app.scss');

    mix.browserify('app.js', null, 'resources/js/');

    //mix.babel(['Counter.js', 'app.js']);

});
