# Fiddle

This is what I use to create quick code examples/tests.
Uploads to http://jsfiddle.net/.

## Install
1. Clone this repo (`git clone git://github.com/k88hudson/fiddle.git`) somewhere you can run it continuously on localhost.
2. Install http://livereload.com/ or something similar to support CSS live reloading + LESS pre-processing.
3. Open `util/fiddle.js` and add your own LiveReload snippet.
4. Add `/util/fiddle` to your PATH, and edit the localhost + file paths and text editor to match your own.
5. You can now open a new blank (not css-normalized) fiddle by running `fiddle` from your terminal. To open a normalized fiddle, run `fiddle -n`
6. All css, html, and js should go in `main.less`, `main.html`, and `main.js`. Yay.
