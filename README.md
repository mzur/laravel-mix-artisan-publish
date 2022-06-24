# Laravel Mix Artisan Publish

This extension allows you to automatically publish your assets with `php artisan vendor:publish` with Laravel Mix. This is especially useful if you develop a package in the `vendor` directory and want to push updated assets to the main application.

## Usage

You can install the package with npm:

```bash
npm install @mzur/laravel-mix-artisan-publish
```

Then require the extension in your Mix configuration:

```js
const mix = require('laravel-mix');

require('@mzur/laravel-mix-artisan-publish');
...
```

Enable the extension by calling `.publish()` at the end of your Mix chain:

```js
mix.sass('resources/sass/app.scss', 'public/css').publish();
```

This will call the `artisan vendor:publish` command of the main application.

To restrict publishing to a specific provider and/or tag, you may pass an object to `.publish()`. You can also customize the relative path to the artisan file or disable the `--force` argument:

```js
mix.sass('resources/sass/app.scss', 'public/css').publish({
   provider: 'My\\Package\\MyPackageServiceProvider',
   tag: 'public',
   path: '../../../artisan',
   force: false,
});
```

And you're done!

## Credits

The structure of this plugin was adapted from [laravel-mix-artisan-serve](https://github.com/GeoffSelby/laravel-mix-artisan-serve).
