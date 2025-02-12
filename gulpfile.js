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

elixir(function(mix) {
    mix.sass(['style.scss'],'public/css/style.css');
    mix.sass(['widget/hw-default.scss'],'public/css/widget/hw-default.css');
    mix.sass(['widget/cw-default.scss'],'public/css/widget/cw-default.css');
    
});
