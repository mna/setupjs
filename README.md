# Example Setup For Javascript Development

Run `npm install` in the root directory to install all dependencies. This setup is highly opinionated and personal, YMMV. Hopefully it will be relevant for a couple weeks. It provides the following:

* ES2015 support via `babel` (including polyfill)
* Type-checking via `flow`
* Linting via `eslint`
* Browserify-based build system
* Templating via `jade`
* CSS preprocessor via `sass`
* Minified production builds for HTML, CSS and JS (via `uglifyjs`)
* Separate javascript bundles for "major" dependencies (e.g. `babel-polyfill` is in a separate file from the app's code)
* Source maps generated for development build

## Directory Layout

- `/` : configuration files
- `/src` : the source files
- `/src/styles` : the sass files
- `/src/js` : the javascript (ES2015 with Flow type annotations) files
- `/src/templates` : the jade templates
- `/src/templates/layouts` : the layout templates ("master" templates from which pages inherit)
- `/src/templates/includes` : includes jade files ("partials")
- `/build` : the generated build files, HTML files are directly in this directory
- `/build/js` : the generated (ES5, stripped of type annotations) javascript files
- `/build/css` : the generated CSS files
- `/scripts` : the bash scripts used for the various `npm run-script` commands

See the `package.json` file for the various `run-script` commands. Most interesting are probably `npm run build` (set `NODE_ENV=production` for minified builds), and `npm run watch`.

## Editor Support

For vim, install `eslint` and `flow-bin` globally and activate as checkers in syntastic to get errors on save. `flow` is probably too slow for this though.

## Installed Libraries

In addition to the development dependencies, this setup installs the following (personal preferences):

* `redux`
* `deku`

Those two libraries are also generated as separate bundles by browserify.

