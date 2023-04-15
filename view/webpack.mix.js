const mix = require('laravel-mix');
mix.disableNotifications()
.ts('./ts/main.ts', 'conv/main.js');